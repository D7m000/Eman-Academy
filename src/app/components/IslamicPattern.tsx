interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

export function IslamicPattern({ className = "", opacity = 0.05 }: IslamicPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="islamic-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Islamic geometric pattern */}
            <circle cx="40" cy="40" r="2" fill="currentColor" className="text-primary" />
            <circle cx="0" cy="0" r="2" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="0" r="2" fill="currentColor" className="text-primary" />
            <circle cx="0" cy="80" r="2" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="80" r="2" fill="currentColor" className="text-primary" />
            
            <path
              d="M40 20 L50 30 L40 40 L30 30 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
            <path
              d="M40 60 L50 50 L40 40 L30 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
            <path
              d="M20 40 L30 50 L40 40 L30 30 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
            <path
              d="M60 40 L50 30 L40 40 L50 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-accent"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
}
