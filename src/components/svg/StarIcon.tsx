import { theme } from '../../theme';

export const StarIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_990_170)">
        <path
          d="M11.8063 3.63037L23.3513 0.229004L19.9826 11.8067L23.3513 23.3518L11.8063 19.9831L0.228516 23.3518L3.62989 11.8067L0.228516 0.229004L11.8063 3.63037Z"
          fill={theme.colors.black}
        />
      </g>
      <defs>
        <clipPath id="clip0_990_170">
          <rect width="23.6134" height="23.6134" fill={theme.colors.white} />
        </clipPath>
      </defs>
    </svg>
  );
};
