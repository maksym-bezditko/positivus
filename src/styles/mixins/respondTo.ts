import { css, DefaultTheme } from 'styled-components';
import { theme } from '../../theme';

type BreakpointKey = keyof DefaultTheme['breakpoints'];

export const respondTo =
  (breakpoint: BreakpointKey) => (content: ReturnType<typeof css>) => {
    return css`
      @media (max-width: ${theme.breakpoints[breakpoint]}) {
        ${content}
      }
    `;
  };
