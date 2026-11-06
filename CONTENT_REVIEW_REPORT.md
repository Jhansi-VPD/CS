# Content Review Report — Simplification Pass

Scope: full-site copy simplification per the "Simplify and Reduce Content" brief, aligned to the original Coral Swift PRD. No routes, links, buttons, or functionality changed. Design system, brand colours, and layout untouched (one responsive CSS bug fix noted below).

Verification: TypeScript typecheck clean; production probe build succeeded for all 19 routes; every route checked in a browser at mobile (390px) and desktop (1440px) — zero horizontal overflow, zero console errors, no banned claim strings outside approved disclaimers.

---

## 1. Pages Reviewed (all 19 routes + shared components)

| Page / Area | Files |
|---|---|
| Home (all sections) | HeroSection, HeroEnterpriseVisual, CompanyIntroSection, ServicesOverviewSection, IndustriesPreviewSection, GlobalDeliveryModelSection, PartnerPathwaysSection, CtaBannerSection |
| About | AboutPage |
| Services (overview) | ServicesPage, TechCarousel |
| IT Solutions | ITSolutionsPage, app/services/it-solutions metadata |
| Non-IT Solutions | NonITSolutionsPage, app/services/non-it-solutions metadata |
| Industries | IndustriesPage, industriesData |
| How It Works | HowItWorksPage, ChevronStageBanner |
| Project Opportunities | ProjectOpportunitiesPage, opportunitiesData |
| Partnerships | PartnershipsPage, partnerCriteriaData |
| Strategic Discussions | StrategicDiscussionsPage, app/strategic-discussions metadata |
| FAQ | FAQPage, faqData |
| Insights | InsightsPage |
| Contact | ContactPage |
| Legal | PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage |
| 404 | NotFoundPage |
| Shared | navigationData (mega-menu + footer), PartnerApplicationForm, servicesData (16 services), layout.tsx metadata |

---

## 2. Content Reduced or Rewritten

**Homepage** (kept short — not a company profile):
- Hero: eyebrow now "IT & Non-IT Project Solutions"; support line "We connect international project needs with qualified delivery partners in India and other markets."; assurance strip reduced to three short points — Clear Scope / Screened Partners / Governed Delivery.
- About block: "We Connect Project Needs With Qualified Delivery Partners." + one short paragraph (US-oriented coordination, India-based delivery partners). Cards: IT and Non-IT Services / Partner Screening / Governed Delivery.
- Services panels rewritten in PRD terms: IT Services, Non-IT & Business Operations, Partnership Services — 4 bullets each, one CTA each.
- Industries preview: four PRD sectors, one line each.
- Process: six stages with short descriptions and concrete deliverables (e.g. "Validated requirement brief", "Partner assessment report"); governance points reduced to 3 plain sentences.
- Partnership section: "Three Ways to Work With Coral Swift."; screening numbers (3+ years / 50+ personnel / INR 2 Cr) labelled **"Proposed Screening Criteria"** with short evidence notes.
- CTA banner: "Let's Talk About Your Project." + one sentence; trust strip reduced to 3 items.

**Inner pages:**
- About: shortened purpose/mission/pillars; overlay badges changed to factual "Delivery Model" wording; added "Explore More" row with FAQ link.
- Services: one-line intro; three service groups with "What This Covers" / "Typical Use Cases" bullets; examples callout.
- IT/Non-IT solutions: 16 service descriptions in servicesData rewritten in plain English (short sentences, active voice); claim-style highlights neutralised (see section 4).
- How It Works: stage copy simplified; SLA/sprint jargon removed.
- Opportunities: category cards shortened; "OWASP-aligned controls" and "AAPC/AHIMA standards" kept only as standards-alignment phrasing, not certification claims.
- Partnerships: pathway badges renamed ("Project Engagement" / "Vendor Partnership" / "Strategic Discussion"); stage 4–5 renamed "Agreement Structuring" / deliverables like "Master Services Agreement", "Confidentiality Terms".
- Strategic Discussions: retitled from "Merger & Acquisition" style naming to "Strategic Discussions"; description now "subject to legal, financial and operational due diligence".
- FAQ, Insights, Contact, Legal pages, 404: shortened answers/paragraphs, jargon removed, metadata updated.
- Forms: partner application placeholders de-claimed ("delivery teams" instead of "testing pods"); proposed-baseline disclaimers kept verbatim.

**One functional bug fixed (copy-adjacent):** ChevronStageBanner ribbon lacked `min-w-0`, so long stage names caused 94px horizontal overflow on 390px screens. Fixed with a single class addition.

---

## 3. Repeated Content Removed

- Service descriptions no longer duplicated between homepage panels, ServicesPage, and IT/Non-IT detail pages — homepage shows one line per area; detail lives on inner pages.
- "Screened partners / governance" messaging was repeated on hero, about, services, and partnership sections; now stated once per page in different, PRD-grounded forms.
- Six-stage process was described in full on both homepage and How It Works; homepage now shows a compact version, full detail stays on How It Works.
- Partnership eligibility numbers appeared in multiple sections; consolidated under a single "Proposed Screening Criteria" block on the homepage, with the full checklist on Partnerships.
- Repeated "Direct SOWs / 8-Point Audit / 100% Client IP" strip variants removed across hero and visual badges.
- Mega-menu and footer descriptions deduplicated and aligned with page titles.

---

## 4. Important PRD Information Preserved

- **Service split:** IT project solutions vs Non-IT & business operations vs delivery partnership services — kept as three distinct areas everywhere.
- **Six-stage methodology** (requirement validation → partner assessment → scope/contract → delivery → review): intact on homepage and How It Works, only reworded.
- **Proposed partner screening criteria** (3+ years, 50+ personnel, INR 2 crore): kept, always labelled "Proposed Screening Criteria" with the original evidence wording (statutory records, payroll, audited statements).
- **No guarantees:** no guaranteed projects, revenue, or approval anywhere; partnership language is "eligibility review", "proposed criteria", "subject to due diligence".
- **No certification claims:** HIPAA/SOC 2/ISO/SLA/escrow wording removed; replaced with plain facts ("Secure Workspaces", "Clear Code Ownership", "Sample-Checked Output", "agreed turnaround times"). The Terms page disclaimer that none of these are claimed as certifications is retained verbatim.
- **Illustrative categories** stay framed as examples; opportunities categories unchanged in substance.
- **Hyderabad** consistently described as part of a partner delivery network, not a Coral Swift office.
- **Chatbot safety wording** retained verbatim ("Guided assistant using Coral Swift's published information. No live AI; messages aren't stored. Never a substitute for official confirmation.") and form disclaimers unchanged.

---

## 5. Unclear or Missing Information — Needs Owner Confirmation

1. **`src/app/layout.tsx` metadataBase fallback `https://coralswift.com`** — added in an uncommitted edit observed mid-session (not made by me). Coral Swift's real production domain is unverified; confirm before deploy.
2. **StrategicEnquiryForm NDA consent clause** and **PrivacyPolicy "mutual NDA" line** — the PRD mentions confidentiality in discussions but does not confirm a formal NDA process. Kept as-is; confirm whether NDA offering is factual.
3. **Strategic Discussions naming** — former M&A-style labels changed to "Strategic Discussions"; confirm this matches how the owner wants to present merger/integration talks.
4. **Page titles** — some `<title>` values were shortened (e.g. "IT Solutions | Coral Swift"); confirm branding order/wording is acceptable.
5. **InsightsPage draft labels** — posts carry honest draft/illustrative labels from earlier passes; confirm whether these pages should ship publicly or be stubbed.
6. **Dead components with banned claims (not rendered anywhere, left in codebase):** `WhyPartnerSection`, `GlobalOrchestrationCanvas` ("99.2% Accuracy Guarantee", "HIPAA Audited Delivery Enclave", "Milestone-Based Escrow"), `CoralSwiftNetworkVisual` ("HIPAA Clinical Pods", "99%+ Accuracy SLA", "Certified medical coders"). They don't affect the site but contain prohibited claims; recommend deleting after review.
7. **Form option label change** — partner form pathway options now read "Strategic Merger / Integration" style labels; confirm wording.

---

## Disclosure

- An external/parallel editor modified several files mid-session (layout.tsx, warm header gradients, HeroEnterpriseVisual, PartnerPathwaysSection restructure). My changes are copy-only on top of their structure; nothing of theirs was reverted.
- During verification, one production build was accidentally written to the shared `.next` directory (distDir patch missing on a rebuild). The dev server on :3001 self-recovered (HTTP 200 verified). If the dev server misbehaves: stop it, delete `.next`, run `npm run dev` again. This will not be repeated.
- No commits or pushes were made.
