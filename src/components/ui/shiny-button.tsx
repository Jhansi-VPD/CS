"use client";

import type React from "react";
import { useId, useSyncExternalStore } from "react";

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

export interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  className?: string;
  fillColor?: string;
  labelColor?: string;
  accentColor?: string;
  accentSoftColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  sweepDuration?: number;
  easeDuration?: number;
  arcWidth?: number;
  cornerRadius?: number;
  showSpeckle?: boolean;
  showSheen?: boolean;
  speckleOpacity?: number;
  children?: React.ReactNode;
}

export function ShinyButton({
  label = "Get Started",
  onClick,
  className = "",
  fillColor = "#F05E47",
  labelColor = "#FFFFFF",
  hoverBgColor = "#FFFFFF",
  hoverTextColor = "#F05E47",
  cornerRadius = 4,
  children,
  ...props
}: ShinyButtonProps) {
  const reducedMotion = usePrefersReducedMotion();
  const instanceId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const scope = `btn-31-${instanceId}`;

  const bg = fillColor;
  const border = fillColor;
  const text = labelColor;
  const hoverBg = hoverBgColor;
  const hoverText = hoverTextColor;

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
      font-size: 0.8125rem;
      font-weight: 800;
      letter-spacing: 0.035em;
      line-height: 1.3;
      margin: 0;
      padding: 0.55rem 1.35rem;
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
      box-shadow: 0 2px 8px -2px rgba(8, 11, 46, 0.15);
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

    .${scope} .text-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    .${scope} .text {
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

    .${scope}:hover .text,
    .${scope}:focus-visible .text {
      -webkit-animation: move-up-alternate-${instanceId} 0.3s ease forwards;
      animation: move-up-alternate-${instanceId} 0.3s ease forwards;
      color: ${hoverText};
    }

    @-webkit-keyframes move-up-alternate-${instanceId} {
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

    @keyframes move-up-alternate-${instanceId} {
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
      .${scope}:hover .text,
      .${scope}:focus-visible .text {
        -webkit-animation: none !important;
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <button
        type="button"
        className={`${scope} ${className}`}
        onClick={onClick}
        {...props}
      >
        <span className="text-container">
          <span className="text">{children || label}</span>
        </span>
      </button>
    </>
  );
}

export default ShinyButton;
