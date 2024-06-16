import styled from "styled-components";
import { HeaderLogo } from "./icons/HeaderLogo";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { IconWrapper } from "./IconWrapper";

const NAVIGATION_OPTIONS = [
  "About us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
];

const UNDERLINE_VARIANTS = {
  hover: {
    width: "100%",
  },
  rest: {
    width: 0,
  },
};

export const Header = () => {
  return (
    <StyledHeader>
      <IconWrapper isCursorPointer>
        <HeaderLogo />
      </IconWrapper>

      <StyledNavigationOptionsWrapper>
        {NAVIGATION_OPTIONS.map((option) => (
          <StyledNavigationOptionWrapper
            key={option}
            initial="rest"
            whileInView="hover"
            whileHover="rest"
          >
            <StyledNavigationOptionAnchor>
              {option}
            </StyledNavigationOptionAnchor>

            <StyledUnderline variants={UNDERLINE_VARIANTS} />
          </StyledNavigationOptionWrapper>
        ))}

        <Button label="Request a quote" isInverted />
      </StyledNavigationOptionsWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 6px 0px;

  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
`;

const StyledNavigationOptionsWrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  & > * {
    margin-left: 40px;
    font-size: 20px;
  }
`;

const StyledNavigationOptionWrapper = styled(motion.div)`
  display: grid;
`;

const StyledNavigationOptionAnchor = styled(motion.a)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const StyledUnderline = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: #000;
`;
