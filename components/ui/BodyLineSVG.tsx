interface BodyLineSVGProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function BodyLineSVG({
  width = 80,
  height = 200,
  color = "#8B6FA8",
  className = "",
}: BodyLineSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Elegant body silhouette curve — inspired by the Body Lab logo */}
      <path
        d="M50 10
           C50 10, 42 18, 40 28
           C38 38, 44 46, 45 55
           C46 64, 44 70, 40 76
           C36 82, 30 84, 28 90
           C26 96, 27 102, 30 108
           C33 114, 38 118, 40 126
           C42 134, 40 142, 36 150
           C32 158, 28 164, 30 172
           C32 180, 38 186, 42 195"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
