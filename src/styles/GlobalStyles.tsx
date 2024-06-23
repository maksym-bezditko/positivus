import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Space Grotesk", sans-serif;
		font-size: ${({ theme }) => theme.fontSizes.md};
		color: ${({ theme }) => theme.colors.black};
	}
`;
