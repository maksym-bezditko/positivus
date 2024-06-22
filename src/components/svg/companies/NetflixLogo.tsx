import { theme } from '../../../theme/theme';

export const NetflixLogo = () => {
  return (
    <svg
      width="126"
      height="48"
      viewBox="0 0 126 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: 'luminosity' }} clipPath="url(#clip0_333_1362)">
        <path
          d="M17.5012 38.0663C15.6171 38.3595 13.6999 38.4474 11.7166 38.6816L5.66728 22.9786V39.3555C3.78318 39.5313 2.06432 39.7656 0.279297 40V10H5.30389L12.1793 27.0217V10H17.5012V38.0663ZM27.9138 20.9863C29.9634 20.9863 33.1036 20.8984 34.9877 20.8984V25.5858C32.6407 25.5858 29.8972 25.5858 27.9138 25.6737V32.6465C31.0212 32.4708 34.1284 32.2362 37.2685 32.1483V36.6597L22.6248 37.6854V10H37.2685V14.6875H27.9138V20.9863ZM56.9366 14.6876H51.4494V36.2501C49.6644 36.2501 47.8793 36.2501 46.1607 36.3085V14.6876H40.6735V10H56.9368L56.9366 14.6876ZM65.531 20.6642H72.7703V25.3516H65.531V35.9864H60.3409V10H75.1172V14.6875H65.531V20.6642ZM83.7116 31.8848C86.7197 31.9432 89.7607 32.1486 92.7028 32.2948V36.9238C87.9759 36.66 83.2489 36.3966 78.4228 36.3085V10H83.7116V31.8848ZM97.1652 37.2461C98.851 37.3341 100.636 37.422 102.355 37.5975V10H97.1652V37.2461ZM125.527 10L118.817 24.2676L125.527 40C123.544 39.7656 121.56 39.4433 119.577 39.1503L115.776 30.4786L111.908 38.4474C109.991 38.1542 108.14 38.0663 106.223 37.8319L113.032 24.0917L106.884 10H112.569L116.04 17.8809L119.742 10H125.527V10Z"
          fill={theme.colors.red}
        />
      </g>
      <defs>
        <clipPath id="clip0_333_1362">
          <rect
            width="125.241"
            height="48"
            fill={theme.colors.white}
            transform="translate(0.279297)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
