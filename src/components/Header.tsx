import styled, { css } from 'styled-components';
import { StarIcon } from './svg/StarIcon';
import { Button } from './Button';
import { NavigationItems } from './NavigationItems';
import { BurgerMenuIcon } from './svg/BurgerMenuIcon';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { respondTo } from '../styles/mixins/respondTo';
import { Typography } from './Typography';
import { theme } from '../theme';

export const Header = () => {
  const isDesktop = useMediaQuery('xl');

  return (
    <StyledHeader>
      <StyledLogoWrapper $isCursorPointer>
        <StarIcon />

        <Typography
          label="Positivus"
          fontSize="lg"
          fontWeight={500}
          color={theme.colors.black}
        />
      </StyledLogoWrapper>

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
  align-items: center;
  grid-auto-flow: column;

  ${respondTo('lg')(css`
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

const StyledLogoWrapper = styled.div<{ $isCursorPointer?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-column-gap: 0.75rem;

  
  cursor: ${({ $isCursorPointer }) => ($isCursorPointer ? 'pointer' : 'auto')};
`;
