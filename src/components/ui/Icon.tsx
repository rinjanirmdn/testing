import type { ReactNode } from "react";

export type IconName =
  | "conference"
  | "ceremony"
  | "launch"
  | "exhibition"
  | "gathering"
  | "hybrid"
  | "production"
  | "entity"
  | "procurement"
  | "safety"
  | "insurance"
  | "documents"
  | "arrowRight"
  | "arrowUp"
  | "close"
  | "menu"
  | "check";

/** Ikon garis sederhana, grid 24px, tebal garis 1.5. */
const paths: Record<IconName, ReactNode> = {
  conference: (
    <>
      <rect x="3" y="4" width="18" height="11" />
      <path d="M12 15v3M7 20h10M7 8.5h10M7 11.5h6" />
    </>
  ),
  ceremony: (
    <>
      <path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18" />
    </>
  ),
  launch: (
    <>
      <path d="M4 20h16M6 20V11M10 20V7M14 20v-9M18 20V4M15.5 6.5L18 4l2.5 2.5" />
    </>
  ),
  exhibition: (
    <>
      <path d="M3 9h18M4 9l1.5-4h13L20 9M5 9v11M19 9v11M3 20h18M10 20v-6h4v6" />
    </>
  ),
  gathering: (
    <>
      <circle cx="12" cy="7" r="2.5" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M7.5 20v-3.5a4.5 4.5 0 019 0V20M2 20v-2.5A3 3 0 015 14.5M22 20v-2.5a3 3 0 00-3-3" />
    </>
  ),
  hybrid: (
    <>
      <rect x="3" y="5" width="13" height="10" />
      <path d="M16 9l5-2.5v7L16 11M6 19h7M9.5 15v4" />
    </>
  ),
  production: (
    <>
      <path d="M3 5h18M6 5l2 5h8l2-5M9 10l-3 10M15 10l3 10M12 10v10M4 20h16" />
    </>
  ),
  entity: (
    <>
      <path d="M5 21V3h10v18M15 9h4v12M3 21h18M8.5 7h3M8.5 11h3M8.5 15h3" />
    </>
  ),
  procurement: (
    <>
      <path d="M12 4v16M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zM19 7l-3 7a3 3 0 006 0l-3-7zM8 20h8" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  insurance: (
    <>
      <path d="M12 4a9 9 0 019 9H3a9 9 0 019-9zM12 2v2M12 13v6a2 2 0 01-4 0" />
    </>
  ),
  documents: (
    <>
      <path d="M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6M4 6v15" />
    </>
  ),
  arrowRight: <path d="M4 12h15M13.5 6.5L19 12l-5.5 5.5" />,
  arrowUp: <path d="M12 20V5M6.5 10.5L12 5l5.5 5.5" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
};

export function Icon({ name, size = 24, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`shrink-0 ${className}`}
    >
      {paths[name]}
    </svg>
  );
}
