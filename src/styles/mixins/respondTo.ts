import { DefaultTheme } from 'styled-components';
import { theme } from '../../theme';

type BreakpointKey = keyof DefaultTheme['breakpoints'];

export const respondTo = (breakpoint: BreakpointKey) => (content: string) => {
  return `
		@media (max-width: ${theme.breakpoints[breakpoint]}) {
			${content}
		}
	`;
};
