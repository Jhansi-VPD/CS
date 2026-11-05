import React from 'react';

interface Props {
  className?: string;
}

/**
 * Glowing gradient orb used on the assistant welcome screen.
 * Pure CSS (radial + conic gradients, blurred glow, float/spin animation) — no image asset.
 */
export const AssistantOrb: React.FC<Props> = ({ className = '' }) => (
  <div className={`relative ${className}`} aria-hidden="true">
    <span className="cs-orb-glow" />
    <div className="cs-orb">
      <svg
        className="cs-sparkle"
        style={{ top: '14%', right: '16%' }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M8 0 L9.6 6.4 L16 8 L9.6 9.6 L8 16 L6.4 9.6 L0 8 L6.4 6.4 Z" fill="#FFFFFF" opacity="0.95" />
      </svg>
      <svg
        className="cs-sparkle"
        style={{ bottom: '20%', left: '18%', animationDelay: '1.1s' }}
        width="10"
        height="10"
        viewBox="0 0 16 16"
      >
        <path d="M8 0 L9.6 6.4 L16 8 L9.6 9.6 L8 16 L6.4 9.6 L0 8 L6.4 6.4 Z" fill="#FFE9D6" opacity="0.9" />
      </svg>
    </div>
  </div>
);

export default AssistantOrb;
