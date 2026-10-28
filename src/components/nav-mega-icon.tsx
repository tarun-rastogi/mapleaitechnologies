/** Clean 24×24 line icons for navbar mega-menus — Maple brand accent. */

type NavMegaIconProps = {
  name: string;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NavMegaIcon({ name }: NavMegaIconProps) {
  return (
    <span className="maple-mega-item__icon" aria-hidden="true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        {iconPath(name)}
      </svg>
    </span>
  );
}

/** @deprecated Prefer NavMegaIcon */
export function ProductNavIcon({ slug }: { slug: string }) {
  return <NavMegaIcon name={slug} />;
}

function iconPath(name: string) {
  switch (name) {
    /* ── Products ─────────────────────────────────────────────── */
    case "sales-genie":
      /* Rising chart */
      return (
        <>
          <path d="M3 3v18h18" {...stroke} />
          <path d="M7 14l4-4 3 3 6-7" {...stroke} />
        </>
      );

    case "brand-buddy":
      /* Megaphone */
      return (
        <>
          <path
            d="M3 10.5v3a1 1 0 001 1h2l6.5 4V5.5L6 9.5H4a1 1 0 00-1 1z"
            {...stroke}
          />
          <path d="M16 9a3.2 3.2 0 010 6" {...stroke} />
          <path d="M18.5 7a5.5 5.5 0 010 10" {...stroke} />
          <path d="M6 14.5v2a1.5 1.5 0 001.5 1.5" {...stroke} />
        </>
      );

    case "hr-hero":
      /* Two people */
      return (
        <>
          <circle cx="9" cy="7" r="3" {...stroke} />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...stroke} />
          <circle cx="17" cy="8" r="2.5" {...stroke} />
          <path d="M14.2 14.5c1.5-.9 3.3-1.2 5-.7 1.6.5 2.8 1.7 3.3 3.2" {...stroke} />
        </>
      );

    case "customer-connect":
      /* Bar chart with trend nodes */
      return (
        <>
          <path d="M6 20V10" {...stroke} />
          <path d="M12 20V4" {...stroke} />
          <path d="M18 20v-8" {...stroke} />
          <circle cx="6" cy="8" r="1.5" {...stroke} />
          <circle cx="12" cy="4" r="1.5" {...stroke} />
          <circle cx="18" cy="10" r="1.5" {...stroke} />
          <path d="M6 8l6-4 6 6" {...stroke} />
        </>
      );

    case "finance-assist":
      /* Rupee in circle */
      return (
        <>
          <circle cx="12" cy="12" r="9" {...stroke} />
          <path d="M8 8h8" {...stroke} />
          <path d="M8 11h8" {...stroke} />
          <path d="M10.5 8c2.2 0 3.5 1.1 3.5 2.8S12.7 13.5 10.5 13.5H9" {...stroke} />
          <path d="M9 13.5L15 18" {...stroke} />
        </>
      );

    case "medi-assist":
      /* Stethoscope — converted from user reference PNG */
      return (
        <>
          {/* Earpieces */}
          <circle cx="2.9" cy="2.4" r="1.9" {...stroke} />
          <circle cx="11.5" cy="2.4" r="1.9" {...stroke} />
          {/* Binaural tubes → U join at left of bell */}
          <path
            d="M2.9 4.3V12.5c0 2.5 2 4.55 4.55 4.55h.1c2.5 0 4.55-2.05 4.55-4.55V4.3"
            {...stroke}
          />
          {/* Bell */}
          <circle cx="13.85" cy="17.15" r="6.5" {...stroke} />
          {/* Chest piece + tube into right of bell */}
          <circle cx="20.5" cy="5.45" r="2.55" {...stroke} />
          <path d="M20.5 8V17.15" {...stroke} />
        </>
      );

    case "lex-assist":
      /* Scales of justice */
      return (
        <>
          <path d="M12 3v15" {...stroke} />
          <path d="M7 21h10" {...stroke} />
          <path d="M5 5h14" {...stroke} />
          <path d="M5 5L2.5 11h5L5 5z" {...stroke} />
          <path d="M19 5l-2.5 6h5L19 5z" {...stroke} />
          <path d="M2.5 11a2.5 2.5 0 105 0" {...stroke} />
          <path d="M16.5 11a2.5 2.5 0 105 0" {...stroke} />
        </>
      );

    case "property-assist":
      /* House */
      return (
        <>
          <path
            d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z"
            {...stroke}
          />
          <path d="M9 21v-7h6v7" {...stroke} />
        </>
      );

    /* ── Services ─────────────────────────────────────────────── */
    case "service-ai":
      /* Spark / AI node */
      return (
        <>
          <circle cx="12" cy="12" r="3" {...stroke} />
          <path d="M12 2v3" {...stroke} />
          <path d="M12 19v3" {...stroke} />
          <path d="M2 12h3" {...stroke} />
          <path d="M19 12h3" {...stroke} />
          <path d="M4.9 4.9l2.1 2.1" {...stroke} />
          <path d="M17 17l2.1 2.1" {...stroke} />
          <path d="M4.9 19.1L7 17" {...stroke} />
          <path d="M17 7l2.1-2.1" {...stroke} />
        </>
      );

    case "service-web":
      /* Browser window */
      return (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" {...stroke} />
          <path d="M3 9h18" {...stroke} />
          <circle cx="6.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </>
      );

    case "service-mobile":
      /* Phone */
      return (
        <>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" {...stroke} />
          <path d="M11 18.5h2" {...stroke} />
        </>
      );

    case "service-design":
      /* Pen tool / design */
      return (
        <>
          <path d="M12 19l7-7 2 2-7 7-3 1 1-3z" {...stroke} />
          <path d="M16 7l2 2" {...stroke} />
          <path d="M4 15l5-5" {...stroke} />
          <path d="M3 21l4-1" {...stroke} />
          <circle cx="7.5" cy="7.5" r="2.5" {...stroke} />
        </>
      );

    case "service-cloud":
      /* Cloud */
      return (
        <path
          d="M6.5 18h11a4 4 0 00.5-8 6 6 0 00-11.5-1.5A3.5 3.5 0 006.5 18z"
          {...stroke}
        />
      );

    case "service-team":
      /* Team people */
      return (
        <>
          <circle cx="9" cy="7" r="3" {...stroke} />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...stroke} />
          <circle cx="17.5" cy="8.5" r="2.25" {...stroke} />
          <path d="M14.5 15c1.3-.8 2.9-1.1 4.4-.7 1.5.4 2.6 1.5 3.1 2.9" {...stroke} />
        </>
      );

    /* ── Case studies ─────────────────────────────────────────── */
    case "case-study":
      /* Document */
      return (
        <>
          <path
            d="M6 3h9l4 4v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
            {...stroke}
          />
          <path d="M15 3v4h4" {...stroke} />
          <path d="M8 12h8" {...stroke} />
          <path d="M8 16h5" {...stroke} />
        </>
      );

    default:
      return (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" {...stroke} />
          <path d="M9 12h6" {...stroke} />
          <path d="M12 9v6" {...stroke} />
        </>
      );
  }
}
