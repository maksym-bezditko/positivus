import styled from 'styled-components';
import { HeaderLogo } from './svg/HeaderLogo';
import { Button } from './Button';
import { IconWrapper } from './IconWrapper';
import { NavigationItems } from './NavigationItems';

export const Header = () => {
  return (
    <StyledHeader>
      <IconWrapper isCursorPointer>
        <HeaderLogo />
      </IconWrapper>

      <StyledNavigationOptionsWrapper>
        <NavigationItems isAnimated isUnderlined />

        <Button label="Request a quote" />
      </StyledNavigationOptionsWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 0.375rem 0;

  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
`;

const StyledNavigationOptionsWrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  & > * {
    margin-left: 2.5rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
