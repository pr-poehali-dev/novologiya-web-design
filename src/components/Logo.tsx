const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" fill="url(#gradient1)" />
      <circle cx="20" cy="20" r="12" fill="url(#gradient2)" opacity="0.8" />
      <circle cx="20" cy="20" r="6" fill="white" />
      
      <path
        d="M14 20 L20 14 L26 20 L20 26 Z"
        fill="url(#gradient3)"
        opacity="0.6"
      />
      
      <text
        x="45"
        y="27"
        fontFamily="Montserrat, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="url(#textGradient)"
      >
        Новология
      </text>
      
      <defs>
        <linearGradient id="gradient1" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#33C3F0" />
        </linearGradient>
        <linearGradient id="gradient2" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#33C3F0" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="gradient3" x1="14" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="textGradient" x1="45" y1="10" x2="180" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#1e90ff" />
          <stop offset="100%" stopColor="#33C3F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
