const tailwindColor = {
  "violet-600": "#7C3AED",
  // Add more colors as needed
};

// eslint-disable-next-line react/prop-types
const RotatedArrow = ({ color }) => {
  const strokeColor = tailwindColor[color] || "white";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_74_1475)">
        <path
          d="M5 15L15 5"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.875 5H15V13.125"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_74_1475">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RotatedArrow;
