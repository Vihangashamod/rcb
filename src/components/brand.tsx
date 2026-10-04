export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand${light ? " brand-light" : ""}`}
      href="/"
      aria-label="RCB Holdings home"
    >
      <span className="brand-mark" aria-hidden="true" />
    </a>
  );
}
export function AppleLaurelBranch({
  side = "left",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      className={`apple-laurel-branch apple-laurel-${side} ${className}`.trim()}
      viewBox="0 0 74 132"
      fill="none"
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M 62 124 C 20 114 4 80 14 48 C 21 28 34 14 50 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bottom base leaf */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(61, 122) rotate(42) scale(0.85)"
      />
      {/* Pair 1 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(47, 114) rotate(-22) scale(0.92)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -18 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(51, 112) rotate(34) scale(0.88)"
      />
      {/* Pair 2 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -20 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(32, 103) rotate(-34) scale(1.02)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(38, 100) rotate(26) scale(0.96)"
      />
      {/* Pair 3 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -14 0 -21 C 6 -14 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(20, 89) rotate(-46) scale(1.10)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(28, 85) rotate(16) scale(1.02)"
      />
      {/* Pair 4 (Apex) */}
      <path
        d="M 0 0 C -3.5 -5 -6 -14 0 -21 C 6 -14 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(13, 73) rotate(-58) scale(1.14)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -20 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(20, 68) rotate(8) scale(1.06)"
      />
      {/* Pair 5 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -14 0 -21 C 6 -14 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(12, 56) rotate(-70) scale(1.12)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(20, 51) rotate(0) scale(1.02)"
      />
      {/* Pair 6 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -20 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(16, 39) rotate(-82) scale(1.06)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -18 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(25, 35) rotate(-8) scale(0.96)"
      />
      {/* Pair 7 */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(26, 24) rotate(-94) scale(0.98)"
      />
      <path
        d="M 0 0 C -3.5 -5 -6 -12 0 -17 C 6 -12 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(34, 21) rotate(-18) scale(0.90)"
      />
      {/* Tip leaf */}
      <path
        d="M 0 0 C -3.5 -5 -6 -13 0 -19 C 6 -13 3.5 -5 0 0 Z"
        fill="currentColor"
        transform="translate(47, 9) rotate(-112) scale(0.88)"
      />
    </svg>
  );
}

export function AwardEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`apple-award-emblem ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.6 5.8 6.4.7-4.8 4.3 1.3 6.2L12 16l-5.5 3 1.3-6.2-4.8-4.3 6.4-.7L12 2z" />
    </svg>
  );
}

export function AppleAwardBadge({
  org,
  title,
  href,
  className = "",
  size = "md",
}: {
  org: string;
  title: string;
  href?: string;
  className?: string;
  size?: "md" | "lg";
}) {
  const content = (
    <>
      <AppleLaurelBranch side="left" />
      <div className="apple-award-center">
        <AwardEmblem />
        <span className="apple-award-org">{org}</span>
        <strong className="apple-award-title">{title}</strong>
      </div>
      <AppleLaurelBranch side="right" />
    </>
  );

  const classes = `apple-award-badge ${size === "lg" ? "apple-award-badge-lg" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={`${org} ${title}`}>
        {content}
      </a>
    );
  }

  return (
    <div className={classes} role="img" aria-label={`${org} ${title}`}>
      {content}
    </div>
  );
}

export function Laurel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`apple-laurel-wreath-standalone ${className}`.trim()}
      aria-hidden="true"
    >
      <AppleLaurelBranch side="left" />
      <AppleLaurelBranch side="right" />
    </div>
  );
}

export function Awards() {
  return (
    <div
      className="hero-awards hero-awards-apple"
      role="region"
      aria-label="Awards and Recognition"
    >
      <AppleAwardBadge
        org="Shramabhimanee"
        title="National Award · 2013"
        href="#achievements"
      />
      <span className="award-divider" aria-hidden="true" />
      <AppleAwardBadge
        org="Construction Exhibition"
        title="Co-Sponsor · 2016"
        href="#achievements"
      />
    </div>
  );
}
