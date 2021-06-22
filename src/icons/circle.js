export function Circle({ radius = 6, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      // viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <circle cx="10" cy="10" r={radius}></circle>
    </svg>
  );
}
