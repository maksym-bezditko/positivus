import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { respondTo } from '../styles/mixins/respondTo';

const NAVIGATION_OPTIONS = [
  'About us',
  'Services',
  'Use Cases',
  'Pricing',
  'Blog'
];

const UNDERLINE_VARIANTS = {
  hover: {
    width: '100%'
  },
  rest: {
    width: 0
  }
};

type NavigationItemsProps = {
  isAnimated?: boolean;
  isUnderlined?: boolean;
  color?: string;
  fontSize?: number;
  underlineHeight?: number;
};

export const NavigationItems = (props: NavigationItemsProps) => {
  const {
    isAnimated,
    isUnderlined,
    color = theme.colors.black,
    fontSize = 20,
    underlineHeight = 2
  } = props;

  const animationProps = isAnimated
    ? { initial: 'rest', whileInView: 'hover', whileHover: 'rest' }
    : {};

  return (
    <StyledNavigationOptionsWrapper>
      {NAVIGATION_OPTIONS.map((option) => (
        <StyledNavigationOptionWrapper key={option} {...animationProps}>
          <StyledNavigationOptionAnchor $color={color} $fontSize={fontSize}>
            {option}

            {isUnderlined && (
              <StyledUnderline
                variants={UNDERLINE_VARIANTS}
                $color={color}
                $underlineHeight={underlineHeight}
              />
            )}
          </StyledNavigationOptionAnchor>
        </StyledNavigationOptionWrapper>
      ))}
    </StyledNavigationOptionsWrapper>
  );
};

const StyledNavigationOptionsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 2.5rem;

  ${respondTo('xxl')(css`
    grid-column-gap: 1rem;
  `)}

  ${respondTo('lg')(css`
    grid-gap: 1rem;
    justify-content: center;
  `)}

  ${respondTo('md')(css`
    grid-gap: 1rem;
    justify-content: center;
    grid-auto-flow: row;
  `)}
`;

const StyledNavigationOptionWrapper = styled(motion.div)``;

const StyledNavigationOptionAnchor = styled(motion.a)<{
  $color: string;
  $fontSize: number;
}>`
  display: inline-block;
  font-size: ${(props) => props.$fontSize}px;
  color: ${(props) => props.$color};
  text-decoration: none;
  cursor: pointer;

  ${respondTo('xxl')(css`
    font-size: ${theme.fontSizes.xs};
  `)}
`;

const StyledUnderline = styled(motion.div)<{
  $color: string;
  $underlineHeight: number;
}>`
  width: 100%;
  height: ${(props) => props.$underlineHeight}px;
  background-color: ${(props) => props.$color};
`;
