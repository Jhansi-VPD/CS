"use client";

import React, { useId, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    prefersReducedMotion,
    getServerReducedMotionSnapshot,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'white'
    | 'orange'
    | 'coral'
    | 'rose'
    | 'magenta'
    | 'purple'
    | 'navy';
  brandColor?: 'orange' | 'coral' | 'rose' | 'magenta' | 'purple' | 'navy' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  fillColor?: string;
  labelColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  cornerRadius?: number;
  sweepDuration?: number;
  easeDuration?: number;
  arcWidth?: number;
  showSpeckle?: boolean;
  showSheen?: boolean;
  speckleOpacity?: number;
  accentColor?: string;
  accentSoftColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  brandColor,
  size = 'md',
  isLoading = false,
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  fillColor,
  labelColor,
  hoverBgColor,
  hoverTextColor,
  cornerRadius = 8,
  ...props
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const instanceId = useId().replace(/[^a-zA-Z0-9]/g, '');
  const scope = `cs-btn-${instanceId}`;

  // Official Coral Swift Palette
  // Coral Orange: #F98F33, Bright Coral: #F05E47, Rose: #E73B50, Magenta: #D21D61, Purple: #950B6D, Midnight Navy: #080B2E, White: #FFFFFF
  let bg = '#F05E47';
  let border = '#F05E47';
  let text = '#FFFFFF';
  let hoverBg = '#FFFFFF';
  let hoverText = '#F05E47';

  const activeTheme = brandColor || variant;

  switch (activeTheme) {
    case 'primary':
    case 'coral':
      bg = '#F05E47'; // Bright Coral
      border = '#F05E47';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#F05E47';
      break;
    case 'orange':
      bg = '#F98F33'; // Coral Orange
      border = '#F98F33';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#F98F33';
      break;
    case 'secondary':
    case 'rose':
      bg = '#E73B50'; // Rose
      border = '#E73B50';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#E73B50';
      break;
    case 'magenta':
      bg = '#D21D61'; // Magenta
      border = '#D21D61';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#D21D61';
      break;
    case 'purple':
      bg = '#950B6D'; // Purple
      border = '#950B6D';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#950B6D';
      break;
    case 'navy':
      bg = '#080B2E'; // Midnight Navy
      border = '#080B2E';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#080B2E';
      break;
    case 'white':
      bg = '#FFFFFF';
      border = '#FFFFFF';
      text = '#080B2E';
      hoverBg = '#F05E47'; // Reveals Bright Coral on white button
      hoverText = '#FFFFFF';
      break;
    case 'outline':
      bg = '#FFFFFF';
      border = '#080B2E';
      text = '#080B2E';
      hoverBg = '#080B2E';
      hoverText = '#FFFFFF';
      break;
    case 'ghost':
      bg = 'transparent';
      border = 'rgba(255, 255, 255, 0.4)';
      text = '#FFFFFF';
      hoverBg = '#F05E47';
      hoverText = '#FFFFFF';
      break;
    default:
      bg = '#F05E47';
      border = '#F05E47';
      text = '#FFFFFF';
      hoverBg = '#FFFFFF';
      hoverText = '#F05E47';
  }

  // Prop overrides
  if (fillColor) {
    bg = fillColor;
    border = fillColor;
  }
  if (labelColor) text = labelColor;
  if (hoverBgColor) hoverBg = hoverBgColor;
  if (hoverTextColor) hoverText = hoverTextColor;

  // Responsive padding & font-size proportional to size prop (compact, sleek enterprise profile)
  let padding = '0.55rem 1.35rem';
  let fontSize = '0.875rem';
  if (size === 'sm') {
    padding = '0.4rem 0.95rem';
    fontSize = '0.75rem';
  } else if (size === 'lg') {
    padding = '0.75rem 1.75rem';
    fontSize = '1rem';
  }

  const css = `
    .${scope} {
      border: 1px solid ${border};
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: button;
      background-color: ${bg};
      background-image: none;
      color: ${text};
      cursor: pointer;
      font-family: inherit;
      font-size: ${fontSize};
      font-weight: 800;
      letter-spacing: 0.035em;
      line-height: 1.3;
      margin: 0;
      padding: ${padding};
      position: relative;
      text-transform: uppercase;
      border-radius: ${cornerRadius}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      user-select: none;
      overflow: hidden;
      vertical-align: middle;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 2px 6px -2px rgba(8, 11, 46, 0.12);
    }

    .${scope}:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      pointer-events: none;
    }

    .${scope}:focus-visible {
      outline: 2px solid #F98F33;
      outline-offset: 3px;
    }

    .${scope}:before {
      --progress: 100%;
      background: ${hoverBg};
      -webkit-clip-path: polygon(
        100% 0,
        var(--progress) var(--progress),
        0 100%,
        100% 100%
      );
      clip-path: polygon(
        100% 0,
        var(--progress) var(--progress),
        0 100%,
        100% 100%
      );
      content: "";
      inset: 0;
      position: absolute;
      transition: -webkit-clip-path 0.2s ease, clip-path 0.2s ease;
      border-radius: inherit;
      pointer-events: none;
      z-index: 0;
    }

    .${scope}:hover:before,
    .${scope}:focus-visible:before {
      --progress: 0%;
    }

    .${scope} .cs-btn-text-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .${scope} .cs-btn-text {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      position: relative;
      color: ${text};
      transition: color 0.2s ease;
      width: 100%;
    }

    .${scope}:hover .cs-btn-text,
    .${scope}:focus-visible .cs-btn-text {
      -webkit-animation: cs-move-up-alternate-${instanceId} 0.3s ease forwards;
      animation: cs-move-up-alternate-${instanceId} 0.3s ease forwards;
      color: ${hoverText};
    }

    @-webkit-keyframes cs-move-up-alternate-${instanceId} {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(80%);
      }
      51% {
        transform: translateY(-80%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes cs-move-up-alternate-${instanceId} {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(80%);
      }
      51% {
        transform: translateY(-80%);
      }
      to {
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .${scope}:before {
        transition: none !important;
      }
      .${scope}:hover .cs-btn-text,
      .${scope}:focus-visible .cs-btn-text {
        -webkit-animation: none !important;
        animation: none !important;
      }
    }
  `;

  const content = (
    <span className="cs-btn-text-container">
      <span className="cs-btn-text">
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />}
        {!isLoading && icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </span>
    </span>
  );

  if (to) {
    return (
      <>
        <style>{css}</style>
        <Link
          href={to}
          className={`${scope} ${className}`}
        >
          {content}
        </Link>
      </>
    );
  }

  if (href) {
    const isInternal = href.startsWith('#') || href.startsWith('/');
    return (
      <>
        <style>{css}</style>
        <a
          href={href}
          className={`${scope} ${className}`}
          {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      </>
    );
  }

  return (
    <>
      <style>{css}</style>
      <button
        type={(props.type as 'button' | 'submit' | 'reset') || 'button'}
        className={`${scope} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
