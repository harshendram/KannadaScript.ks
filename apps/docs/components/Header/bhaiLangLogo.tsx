export default function KannadaScriptLogo() {
  return (
    <svg
      className="h-8 w-8 lg:h-10 lg:w-10"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Outer circle with gradient */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="url(#logoGradient)"
        className="drop-shadow-lg"
      />
      
      {/* Inner circle */}
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="white"
        className="dark:fill-gray-900"
      />
      
      {/* Kannada-inspired symbol */}
      <g transform="translate(12, 12)">
        {/* Main character strokes */}
        <path
          d="M2 2 Q8 1 14 4 Q12 8 8 10 Q4 8 2 6 Z"
          fill="url(#logoGradient)"
          strokeWidth="0.5"
          stroke="currentColor"
          className="opacity-90"
        />
        <path
          d="M4 6 Q8 5 12 8 Q10 12 6 14 Q4 12 4 10 Z"
          fill="url(#logoGradient)"
          strokeWidth="0.5"
          stroke="currentColor"
          className="opacity-70"
        />
        <circle
          cx="8"
          cy="8"
          r="2"
          fill="url(#logoGradient)"
          className="opacity-80"
        />
      </g>
    </svg>
  );
}
