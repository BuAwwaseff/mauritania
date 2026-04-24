function BackgroundMonument() {
  return (
    <div aria-hidden className="bg-depth-monument">
      <svg
        viewBox="0 0 900 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full select-none"
        preserveAspectRatio="xMidYMax meet"
        style={{ color: "var(--primary)", filter: "blur(0.4px)" }}
      >
        <rect x="0" y="500" width="900" height="20" fill="currentColor" />
        <rect x="310" y="460" width="280" height="40" fill="currentColor" />
        <rect x="310" y="200" width="70" height="260" fill="currentColor" />
        <rect x="308" y="185" width="18" height="22" fill="currentColor" />
        <rect x="334" y="185" width="18" height="22" fill="currentColor" />
        <rect x="360" y="185" width="18" height="22" fill="currentColor" />
        <rect x="520" y="200" width="70" height="260" fill="currentColor" />
        <rect x="518" y="185" width="18" height="22" fill="currentColor" />
        <rect x="544" y="185" width="18" height="22" fill="currentColor" />
        <rect x="570" y="185" width="18" height="22" fill="currentColor" />
        <path
          d="M380 460 L380 320 Q380 240 450 240 Q520 240 520 320 L520 460 Z"
          fill="currentColor"
        />
        <path
          d="M400 460 L400 330 Q400 265 450 265 Q500 265 500 330 L500 460 Z"
          fill="var(--background)"
        />
        <path
          d="M450 195 a30 30 0 1 0 0.01 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <circle cx="450" cy="195" r="12" fill="currentColor" />
        <rect x="180" y="280" width="28" height="180" fill="currentColor" />
        <polygon points="180,280 208,280 194,240" fill="currentColor" />
        <rect x="692" y="280" width="28" height="180" fill="currentColor" />
        <polygon points="692,280 720,280 706,240" fill="currentColor" />
        <ellipse cx="200" cy="500" rx="200" ry="35" fill="currentColor" />
        <ellipse cx="700" cy="500" rx="200" ry="30" fill="currentColor" />
        <polygon
          points="450,90 457,112 480,112 462,126 469,148 450,134 431,148 438,126 420,112 443,112"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function InteractiveBackground() {
  return (
    <div aria-hidden className="bg-depth-root">
      <div className="bg-depth-base" />
      <div className="bg-depth-grid" />
      <span className="bg-depth-shaft bg-depth-shaft-a" />
      <span className="bg-depth-shaft bg-depth-shaft-b" />
      <span className="bg-depth-shaft bg-depth-shaft-c" />
      <span className="bg-depth-shaft bg-depth-shaft-d" />
      <span className="bg-depth-shaft bg-depth-shaft-e" />
      <span className="bg-depth-orb bg-depth-orb-a" />
      <span className="bg-depth-orb bg-depth-orb-b" />
      <span className="bg-depth-orb bg-depth-orb-c" />
      <div className="bg-depth-plane-wrap">
        <div className="bg-depth-plane" />
      </div>
      <BackgroundMonument />
      <div className="bg-depth-vignette" />
    </div>
  );
}
