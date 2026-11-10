const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://coralswift-backend.onrender.com';

const REQUEST_TIMEOUT_MS = 45000;

export type EnquiryEndpoint =
  | '/api/v1/enquiries/contact'
  | '/api/v1/enquiries/project'
  | '/api/v1/enquiries/partner'
  | '/api/v1/enquiries/strategic'
  | '/api/v1/meetings';

export interface SubmissionResult {
  referenceNumber: string;
  lookupToken: string;
  enquiryType: string;
  status: string;
  submittedAt: string;
  documentsAttached: number;
}

export interface EnquiryStatusResult {
  referenceNumber: string;
  enquiryType: string;
  status: string;
  submittedAt: string;
}

export interface UploadedDocument {
  documentId: string;
  originalFilename: string;
  fileSize: number;
}

export class ApiError extends Error {
  status: number;
  code: string | null;
  fieldErrors: Record<string, string>;

  constructor(message: string, status: number, code: string | null, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.fieldErrors = fieldErrors;
  }
}

function botTokenHeaders(): Record<string, string> {
  const token = process.env.NEXT_PUBLIC_BOT_TOKEN;
  return token ? { 'x-bot-token': token } : {};
}

export function newIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `cs-${Math.random().toString(36).slice(2, 12)}${Date.now().toString(36)}`;
}

interface BackendEnvelope {
  success?: boolean;
  message?: string;
  data?: {
    reference_number?: string;
    lookup_token?: string;
    enquiry_type?: string;
    status?: string;
    submitted_at?: string;
    documents_attached?: number;
  } | null;
  error?: {
    code?: string;
    details?: Array<{ loc?: string[]; msg?: string; message?: string }>;
  } | null;
}

function parseSubmission(payload: BackendEnvelope): SubmissionResult {
  const data = payload.data || {};
  return {
    referenceNumber: data.reference_number || '',
    lookupToken: data.lookup_token || '',
    enquiryType: data.enquiry_type || '',
    status: data.status || 'received',
    submittedAt: data.submitted_at || new Date().toISOString(),
    documentsAttached: data.documents_attached || 0
  };
}

async function handleResponse(res: Response): Promise<SubmissionResult> {
  let body: BackendEnvelope | null = null;
  try {
    body = (await res.json()) as BackendEnvelope;
  } catch {
    body = null;
  }

  if (!res.ok) {
    const code = body?.error?.code || null;
    const fieldErrors: Record<string, string> = {};
    let firstDetailMessage = '';

    if (Array.isArray(body?.error?.details)) {
      for (const item of body!.error!.details!) {
        const msg = item.msg || item.message || '';
        if (!msg) continue;
        if (!firstDetailMessage) firstDetailMessage = msg;
        if (Array.isArray(item.loc) && item.loc.length > 1) {
          const field = item.loc[item.loc.length - 1];
          if (!fieldErrors[field]) fieldErrors[field] = msg;
        }
      }
    }

    let message = body?.message || firstDetailMessage;
    if (!message) {
      if (res.status === 429) message = 'Too many submission attempts. Please wait a few minutes and try again.';
      else if (res.status === 422) message = 'Some submitted values were rejected. Please review the highlighted fields.';
      else message = 'The submission could not be processed. Please try again shortly.';
    }

    throw new ApiError(message, res.status, code, fieldErrors);
  }

  if (!body?.success || !body.data?.reference_number) {
    throw new ApiError(
      'The server did not return a valid submission reference. Nothing was recorded — please try again.',
      res.status,
      'INVALID_RESPONSE'
    );
  }

  return parseSubmission(body);
}

export async function submitEnquiry<T extends object>(
  endpoint: EnquiryEndpoint,
  payload: T,
  idempotencyKey: string
): Promise<SubmissionResult> {
  let res: Response;
  const targetUrl = `${API_BASE_URL}${endpoint}`;
  try {
    res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey,
        ...botTokenHeaders()
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });
  } catch (err) {
    // If direct cross-origin call fails (e.g. CORS restrictions) and running in browser,
    // fallback to same-origin proxy rewrite
    if (typeof window !== 'undefined' && API_BASE_URL.startsWith('http')) {
      try {
        res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
            ...botTokenHeaders()
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
        });
      } catch {
        throw new ApiError(
          'Unable to reach the Coral Swift server. Please check your connection and try again.',
          0,
          'NETWORK_ERROR'
        );
      }
    } else {
      throw new ApiError(
        'Unable to reach the Coral Swift server. Please check your connection and try again.',
        0,
        'NETWORK_ERROR'
      );
    }
  }
  return handleResponse(res);
}

export async function uploadDocument(
  file: File,
  purpose: 'project_attachment' | 'partner_evidence' | 'strategic_attachment'
): Promise<UploadedDocument> {
  const body = new FormData();
  body.append('file', file);
  body.append('purpose', purpose);

  let res: Response;
  const targetUrl = `${API_BASE_URL}/api/v1/documents/upload`;
  try {
    res = await fetch(targetUrl, {
      method: 'POST',
      headers: { ...botTokenHeaders() },
      body,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });
  } catch {
    if (typeof window !== 'undefined' && API_BASE_URL.startsWith('http')) {
      try {
        res = await fetch('/api/v1/documents/upload', {
          method: 'POST',
          headers: { ...botTokenHeaders() },
          body,
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
        });
      } catch {
        throw new ApiError(
          'Unable to reach the Coral Swift server while uploading the document. Please check your connection and try again.',
          0,
          'NETWORK_ERROR'
        );
      }
    } else {
      throw new ApiError(
        'Unable to reach the Coral Swift server while uploading the document. Please check your connection and try again.',
        0,
        'NETWORK_ERROR'
      );
    }
  }

  let payload: BackendEnvelope & { data?: { document_id?: string; original_filename?: string; file_size?: number } } | null = null;
  try {
    payload = await res.json();
  } catch {
    payload = null;
  }

  if (!res.ok) {
    let message = payload?.message || '';
    if (!message) {
      if (res.status === 413) message = 'The attached file is too large. Please use a file up to 10 MB.';
      else if (res.status === 415) message = 'The attached file format is not supported. Please use PDF, PNG, JPG, DOCX or XLSX.';
      else message = 'The document upload failed. Please try again, or submit without the attachment.';
    }
    throw new ApiError(message, res.status, payload?.error?.code || null);
  }

  const documentId = payload?.data?.document_id;
  if (!documentId) {
    throw new ApiError(
      'The document upload did not return a valid reference. Nothing was recorded — please try again.',
      res.status,
      'INVALID_RESPONSE'
    );
  }

  return {
    documentId,
    originalFilename: payload?.data?.original_filename || file.name,
    fileSize: payload?.data?.file_size || file.size
  };
}

export function friendlySubmitError(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.code === 'BOT_CHECK_FAILED') {
      return 'Your submission was blocked by automated bot protection. Please try again shortly, or reach us through the contact details listed on this page.';
    }
    if (err.status === 429) {
      return 'Too many submission attempts from this connection. Please wait a few minutes and try again.';
    }
    if (err.status === 409) {
      return 'A submission with these details is already recorded. If you need to update it, please contact us directly.';
    }
    return err.message;
  }
  return 'Something went wrong while submitting the form. Please try again.';
}

export async function lookupEnquiryStatus(
  referenceNumber: string,
  lookupToken: string
): Promise<EnquiryStatusResult> {
  const path = `/api/v1/enquiries/${encodeURIComponent(referenceNumber)}/status`;
  const doFetch = (url: string) =>
    fetch(url, {
      headers: { 'x-lookup-token': lookupToken },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
    });

  let res: Response;
  try {
    res = await doFetch(`${API_BASE_URL}${path}`);
  } catch {
    if (typeof window !== 'undefined' && API_BASE_URL.startsWith('http')) {
      try {
        res = await doFetch(path);
      } catch {
        throw new ApiError(
          'Unable to reach the Coral Swift server. Please check your connection and try again.',
          0,
          'NETWORK_ERROR'
        );
      }
    } else {
      throw new ApiError(
        'Unable to reach the Coral Swift server. Please check your connection and try again.',
        0,
        'NETWORK_ERROR'
      );
    }
  }

  let body: BackendEnvelope | null = null;
  try {
    body = (await res.json()) as BackendEnvelope;
  } catch {
    body = null;
  }

  if (!res.ok) {
    if (res.status === 404) {
      throw new ApiError(
        'No enquiry matches this reference number and lookup token combination. Please double-check both values from your confirmation and try again.',
        404,
        body?.error?.code || null
      );
    }
    if (res.status === 429) {
      throw new ApiError(
        'Too many status checks from this connection. Please wait a few minutes and try again.',
        429,
        body?.error?.code || null
      );
    }
    throw new ApiError(
      body?.message || 'The status lookup could not be completed. Please try again shortly.',
      res.status,
      body?.error?.code || null
    );
  }

  const data = body?.data;
  if (!body?.success || !data?.reference_number || !data.status || !data.submitted_at) {
    throw new ApiError(
      'The server did not return a valid enquiry status. Please try again shortly.',
      res.status,
      'INVALID_RESPONSE'
    );
  }

  return {
    referenceNumber: data.reference_number,
    enquiryType: data.enquiry_type || '',
    status: data.status,
    submittedAt: data.submitted_at
  };
}

export function friendlyStatusError(err: unknown): string {
  if (err instanceof ApiError) {
    return err.message;
  }
  return 'Something went wrong while checking the status. Please try again.';
}
