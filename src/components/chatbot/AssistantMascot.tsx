import React, { useId } from 'react';

interface Props {
  variant?: 'full' | 'head';
  /** Animate the waving arm (full variant only). */
  waving?: boolean;
  className?: string;
  title?: string;
}

// 4-point sparkle star path helper.
const star = (cx: number, cy: number, r: number): string =>
  `M${cx} ${cy - r} L${cx + r * 0.28} ${cy - r * 0.28} L${cx + r} ${cy} L${cx + r * 0.28} ${cy + r * 0.28} ` +
  `L${cx} ${cy + r} L${cx - r * 0.28} ${cy + r * 0.28} L${cx - r} ${cy} L${cx - r * 0.28} ${cy - r * 0.28} Z`;

const SKIN = '#F7C9A3';
const SKIN_SHADE = '#EAB083';
const HAIR = '#D21D61';
const HAIR_DARK = '#950B6D';
const NAVY = '#080B2E';
const NAVY_SOFT = '#13194D';
const CORAL = '#F05E47';

export const AssistantMascot: React.FC<Props> = ({ variant = 'full', waving = true, className = '', title = 'Coral Swift Assistant mascot' }) => {
  const gid = useId().replace(/:/g, '');
  const gradId = `csj-${gid}`;
  const isFull = variant === 'full';

  return (
    <svg
      viewBox={isFull ? '0 0 120 150' : '34 4 52 54'}
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F98F33" />
          <stop offset="45%" stopColor="#E73B50" />
          <stop offset="100%" stopColor="#950B6D" />
        </linearGradient>
      </defs>

      {/* Floating sparkles */}
      <g>
        <path className="mascot-twinkle" d={star(16, 52, 5)} fill={CORAL} />
        <path className="mascot-twinkle" style={{ animationDelay: '0.8s' }} d={star(104, 60, 4)} fill={HAIR} />
        <path className="mascot-twinkle" style={{ animationDelay: '1.4s' }} d={star(100, 22, 3.5)} fill={HAIR_DARK} />
      </g>

      <g className="mascot-bob">
        {isFull && (
          <>
            <ellipse cx="60" cy="143" rx="30" ry="5" fill={NAVY} opacity="0.08" />

            {/* Legs + shoes */}
            <rect x="50" y="96" width="8" height="32" rx="4" fill="#25294D" />
            <rect x="62" y="96" width="8" height="32" rx="4" fill="#25294D" />
            <rect x="43" y="127" width="19" height="8" rx="4" fill="#FFFFFF" />
            <rect x="58" y="127" width="19" height="8" rx="4" fill="#FFFFFF" />
            <circle cx="48" cy="131" r="1.6" fill={CORAL} />
            <circle cx="64" cy="131" r="1.6" fill={CORAL} />

            {/* Left arm holding laptop */}
            <rect x="31" y="60" width="9" height="24" rx="4.5" fill={`url(#${gradId})`} transform="rotate(14 35 62)" />
            <rect x="14" y="78" width="30" height="20" rx="3" fill="#C7CBD6" />
            <rect x="9" y="96" width="40" height="5" rx="2.5" fill="#9AA1B2" />
            <path d={star(29, 88, 4)} fill={CORAL} />
            <circle cx="41" cy="86" r="4" fill={SKIN} />

            {/* Body / jacket */}
            <rect x="38" y="58" width="44" height="42" rx="12" fill={`url(#${gradId})`} />
            <rect x="52" y="60" width="16" height="34" rx="6" fill="#FFFFFF" />
            <path d="M56 60 L60 66 L64 60" fill="none" stroke={NAVY} strokeWidth="1.6" strokeLinejoin="round" />
            <path d={star(60, 80, 5)} fill={CORAL} />
            <circle cx="70" cy="70" r="1.4" fill={HAIR_DARK} />

            {/* Right arm — waving */}
            <g className={waving ? 'mascot-wave' : undefined}>
              <rect x="76" y="55" width="9" height="23" rx="4.5" fill={`url(#${gradId})`} transform="rotate(-8 80 60)" />
              <rect x="80" y="40" width="8" height="22" rx="4" fill={SKIN} transform="rotate(-8 84 52)" />
              <circle cx="84" cy="40" r="6" fill={SKIN} />
              <rect x="79" y="31" width="2.6" height="9" rx="1.3" fill={SKIN} />
              <rect x="82.6" y="30" width="2.6" height="10" rx="1.3" fill={SKIN} />
              <rect x="86.2" y="31" width="2.6" height="9" rx="1.3" fill={SKIN} />
            </g>
          </>
        )}

        {/* Neck */}
        {isFull && <rect x="56" y="50" width="8" height="10" fill={SKIN_SHADE} />}

        {/* Head */}
        <circle cx="43" cy="38" r="3" fill={SKIN} />
        <circle cx="77" cy="38" r="3" fill={SKIN} />
        <circle cx="60" cy="36" r="17" fill={SKIN} />

        {/* Hair sideburns + fringe */}
        <path d="M45 28 q-5 9 -2 16 q3 -7 7 -9 z" fill={HAIR} />
        <path d="M75 28 q5 9 2 16 q-3 -7 -7 -9 z" fill={HAIR} />
        <path d="M46 22 q14 -7 28 0 q-4 7 -14 7 q-10 0 -14 -7 z" fill={HAIR} />

        {/* Cap */}
        <path d="M43 22 a17 17 0 0 1 34 0 z" fill={NAVY} />
        <path d="M40 22 q20 -5 40 0 q-2 5 -20 5 q-18 0 -20 -5 z" fill={NAVY_SOFT} />
        <circle cx="60" cy="8" r="2" fill={NAVY} />
        <path d={star(60, 16, 4)} fill={CORAL} />

        {/* Glasses */}
        <circle cx="53" cy="37" r="6" fill="#FFFFFF" opacity="0.85" stroke={NAVY} strokeWidth="2" />
        <circle cx="67" cy="37" r="6" fill="#FFFFFF" opacity="0.85" stroke={NAVY} strokeWidth="2" />
        <path d="M59 37 h2" stroke={NAVY} strokeWidth="2" />
        <path d="M47 36 l-5 1" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M73 36 l5 1" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" />

        {/* Eyes (blink) */}
        <g className="mascot-blink">
          <circle cx="53" cy="37" r="2.4" fill={NAVY} />
          <circle cx="67" cy="37" r="2.4" fill={NAVY} />
          <circle cx="54" cy="36" r="0.8" fill="#FFFFFF" />
          <circle cx="68" cy="36" r="0.8" fill="#FFFFFF" />
        </g>

        {/* Cheeks + smile */}
        <circle cx="48" cy="44" r="2.2" fill={CORAL} opacity="0.3" />
        <circle cx="72" cy="44" r="2.2" fill={CORAL} opacity="0.3" />
        <path d="M55 46 q5 4 10 0" fill="none" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default AssistantMascot;
