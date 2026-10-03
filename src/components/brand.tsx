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
export function Laurel({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 66"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M28 60C3 49 3 20 19 7M36 60C61 49 61 20 45 7" />
      </g>
      <g fill="currentColor">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`rotate(${i * 16 - 34} 32 33)`}>
            <ellipse
              cx="9"
              cy="31"
              rx="3"
              ry="6"
              transform="rotate(-35 9 31)"
            />
            <ellipse
              cx="55"
              cy="31"
              rx="3"
              ry="6"
              transform="rotate(35 55 31)"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
export function Awards() {
  return (
    <div className="hero-awards">
      <a href="#achievements" className="award-lockup">
        <Laurel />
        <span>
          Shramabhimanee
          <br />
          <strong>National Award · 2013</strong>
        </span>
      </a>
      <span className="award-divider" />
      <a href="#achievements" className="award-lockup">
        <Laurel />
        <span>
          Construction Exhibition
          <br />
          <strong>Co-Sponsor · 2016</strong>
        </span>
      </a>
    </div>
  );
}
