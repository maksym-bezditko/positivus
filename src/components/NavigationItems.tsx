import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../theme';

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
          </StyledNavigationOptionAnchor>

          {isUnderlined && (
            <StyledUnderline
              variants={UNDERLINE_VARIANTS}
              $color={color}
              $underlineHeight={underlineHeight}
            />
          )}
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
`;

const StyledNavigationOptionWrapper = styled(motion.div)``;

const StyledNavigationOptionAnchor = styled(motion.a)<{
  $color: string;
  $fontSize: number;
}>`
  font-size: ${(props) => props.$fontSize}px;
  color: ${(props) => props.$color};
  text-decoration: none;
  cursor: pointer;
`;

const StyledUnderline = styled(motion.div)<{
  $color: string;
  $underlineHeight: number;
}>`
  width: 100%;
  height: ${(props) => props.$underlineHeight}px;
  background-color: ${(props) => props.$color};
`;
