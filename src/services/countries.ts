const COUNTRY_CODES: Record<string, string> = {
  afghanistan: 'AF', albania: 'AL', algeria: 'DZ', andorra: 'AD', angola: 'AO',
  'antigua and barbuda': 'AG', argentina: 'AR', armenia: 'AM', australia: 'AU',
  austria: 'AT', azerbaijan: 'AZ', bahamas: 'BS', bahrain: 'BH', bangladesh: 'BD',
  barbados: 'BB', belarus: 'BY', belgium: 'BE', belize: 'BZ', benin: 'BJ',
  bhutan: 'BT', bolivia: 'BO', 'bosnia and herzegovina': 'BA', botswana: 'BW',
  brazil: 'BR', brunei: 'BN', bulgaria: 'BG', 'burkina faso': 'BF', burundi: 'BI',
  cambodia: 'KH', cameroon: 'CM', canada: 'CA', 'cape verde': 'CV',
  'central african republic': 'CF', chad: 'TD', chile: 'CL', china: 'CN',
  colombia: 'CO', comoros: 'KM', 'congo brazzaville': 'CG', 'congo kinshasa': 'CD',
  'costa rica': 'CR', 'cote divoire': 'CI', croatia: 'HR', cuba: 'CU', cyprus: 'CY',
  czechia: 'CZ', 'czech republic': 'CZ', denmark: 'DK', djibouti: 'DJ',
  dominica: 'DM', 'dominican republic': 'DO', ecuador: 'EC', egypt: 'EG',
  'el salvador': 'SV', 'equatorial guinea': 'GQ', eritrea: 'ER', estonia: 'EE',
  eswatini: 'SZ', ethiopia: 'ET', fiji: 'FJ', finland: 'FI', france: 'FR',
  gabon: 'GA', gambia: 'GM', georgia: 'GE', germany: 'DE', ghana: 'GH',
  greece: 'GR', grenada: 'GD', guatemala: 'GT', guinea: 'GN',
  'guinea bissau': 'GW', guyana: 'GY', haiti: 'HT', honduras: 'HN',
  hungary: 'HU', iceland: 'IS', india: 'IN', indonesia: 'ID', iran: 'IR',
  iraq: 'IQ', ireland: 'IE', israel: 'IL', italy: 'IT', jamaica: 'JM',
  japan: 'JP', jordan: 'JO', kazakhstan: 'KZ', kenya: 'KE', kiribati: 'KI',
  kuwait: 'KW', kyrgyzstan: 'KG', laos: 'LA', latvia: 'LV', lebanon: 'LB',
  lesotho: 'LS', liberia: 'LR', libya: 'LY', liechtenstein: 'LI',
  lithuania: 'LT', luxembourg: 'LU', madagascar: 'MG', malawi: 'MW',
  malaysia: 'MY', maldives: 'MV', mali: 'ML', malta: 'MT',
  'marshall islands': 'MH', mauritania: 'MR', mauritius: 'MU', mexico: 'MX',
  micronesia: 'FM', moldova: 'MD', monaco: 'MC', mongolia: 'MN',
  montenegro: 'ME', morocco: 'MA', mozambique: 'MZ', myanmar: 'MM',
  namibia: 'NA', nauru: 'NR', nepal: 'NP', netherlands: 'NL',
  'new zealand': 'NZ', nicaragua: 'NI', niger: 'NE', nigeria: 'NG',
  'north korea': 'KP', 'north macedonia': 'MK', norway: 'NO', oman: 'OM',
  pakistan: 'PK', palau: 'PW', palestine: 'PS', panama: 'PA',
  'papua new guinea': 'PG', paraguay: 'PY', peru: 'PE', philippines: 'PH',
  poland: 'PL', portugal: 'PT', qatar: 'QA', romania: 'RO', russia: 'RU',
  rwanda: 'RW', 'saint kitts and nevis': 'KN', 'saint lucia': 'LC',
  'saint vincent and the grenadines': 'VC', samoa: 'WS', 'san marino': 'SM',
  'sao tome and principe': 'ST', 'saudi arabia': 'SA', senegal: 'SN',
  serbia: 'RS', seychelles: 'SC', 'sierra leone': 'SL', singapore: 'SG',
  slovakia: 'SK', slovenia: 'SI', 'solomon islands': 'SB', somalia: 'SO',
  'south africa': 'ZA', 'south korea': 'KR', 'south sudan': 'SS', spain: 'ES',
  'sri lanka': 'LK', sudan: 'SD', suriname: 'SR', sweden: 'SE',
  switzerland: 'CH', syria: 'SY', taiwan: 'TW', tajikistan: 'TJ',
  tanzania: 'TZ', thailand: 'TH', 'timor leste': 'TL', togo: 'TG',
  tonga: 'TO', 'trinidad and tobago': 'TT', tunisia: 'TN', turkey: 'TR',
  turkmenistan: 'TM', tuvalu: 'TV', uganda: 'UG', ukraine: 'UA',
  'united arab emirates': 'AE', 'united kingdom': 'GB',
  'united states': 'US', uruguay: 'UY', uzbekistan: 'UZ', vanuatu: 'VU',
  'vatican city': 'VA', venezuela: 'VE', vietnam: 'VN', yemen: 'YE',
  zambia: 'ZM', zimbabwe: 'ZW', 'hong kong': 'HK', macau: 'MO',
  'puerto rico': 'PR', kosovo: 'XK', bermuda: 'BM', 'cayman islands': 'KY',
  'us virgin islands': 'VI', 'british virgin islands': 'VG', guam: 'GU',
  aruba: 'AW', 'faeroe islands': 'FO', greenland: 'GL', gibraltar: 'GI'
};

const ALIASES: Record<string, string> = {
  usa: 'US', 'u s a': 'US', america: 'US', 'united states of america': 'US',
  uk: 'GB', 'u k': 'GB', britain: 'GB', 'great britain': 'GB', england: 'GB',
  scotland: 'GB', wales: 'GB', 'northern ireland': 'GB',
  uae: 'AE', 'u a e': 'AE',
  'republic of korea': 'KR', 'korea republic': 'KR', 'korea south': 'KR',
  'korea north': 'KP', 'democratic peoples republic of korea': 'KP',
  'russian federation': 'RU', 'viet nam': 'VN', holland: 'NL',
  'the netherlands': 'NL', turkiye: 'TR', 'ivory coast': 'CI',
  burma: 'MM', swaziland: 'SZ', macedonia: 'MK', czechia: 'CZ',
  'east timor': 'TL', hongkong: 'HK', 'hong kong': 'HK', 'hong kong sar': 'HK', macau: 'MO',
  'macau sar': 'MO', 'taiwan province of china': 'TW', bharat: 'IN'
};

const NORMALIZE = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.']/g, '')
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-zA-Z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

/**
 * Resolves a free-text country input to an ISO-3166 alpha-2 code.
 * Accepts full names ("India"), common aliases ("USA", "UK", "UAE"),
 * parenthetical qualifiers ("India (Hyderabad)"), and existing 2-letter codes.
 * Returns null when the input cannot be resolved.
 */
export function lookupCountryCode(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  if (/^[A-Za-z]{2}$/.test(raw)) return raw.toUpperCase();

  const normalized = NORMALIZE(raw);
  if (!normalized) return null;
  if (COUNTRY_CODES[normalized]) return COUNTRY_CODES[normalized];
  if (ALIASES[normalized]) return ALIASES[normalized];

  const withoutArticle = normalized.replace(/^(the)\s+/, '');
  if (COUNTRY_CODES[withoutArticle]) return COUNTRY_CODES[withoutArticle];
  if (ALIASES[withoutArticle]) return ALIASES[withoutArticle];

  return null;
}
