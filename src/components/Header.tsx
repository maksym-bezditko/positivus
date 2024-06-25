import styled from 'styled-components';
import { HeaderLogo } from './svg/HeaderLogo';
import { Button } from './Button';
import { IconWrapper } from './IconWrapper';
import { NavigationItems } from './NavigationItems';
import { BurgerMenuIcon } from './svg/BurgerMenuIcon';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { respondTo } from '../styles/mixins/respondTo';

export const Header = () => {
  const isDesktop = useMediaQuery('lg');

  return (
    <StyledHeader>
      <IconWrapper isCursorPointer>
        <HeaderLogo />
      </IconWrapper>

      <StyledNavigationOptionsWrapper>
        {isDesktop ? (
          <>
            <NavigationItems isAnimated isUnderlined />

            <Button label="Request a quote" />
          </>
        ) : (
          <BurgerMenuIcon />
        )}
      </StyledNavigationOptionsWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 0.375rem 0;

  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;

  border: 1px solid ${({ theme }) => theme.colors.black};

  ${respondTo('lg')(`
    padding: 0.125rem 0;
  `)}
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
