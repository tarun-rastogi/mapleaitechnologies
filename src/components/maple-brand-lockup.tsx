import Link from "next/link";

import { mapleLogo } from "@/content/brand";

type MapleBrandLockupProps = {
  onNavigate?: () => void;
  className?: string;
};

export function MapleBrandLockup({ onNavigate, className = "" }: MapleBrandLockupProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Maple AI Technologies home"
      className={`maple-brand-lockup inline-flex shrink-0 items-center gap-2.5 sm:gap-3 ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mapleLogo.src} alt="" className="maple-logo shrink-0" height={56} />
      <span className="maple-wordmark flex flex-col justify-center">
        <span className="maple-wordmark__primary">Maple AI</span>
        <span className="maple-wordmark__secondary">Technologies</span>
      </span>
    </Link>
  );
}
