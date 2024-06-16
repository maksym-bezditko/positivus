import styled from "styled-components";

import { LearnMoreIcon, type LearnMoreIconProps } from "./icons/LearnMoreIcon";
import { Typography } from "./Typography";

type LearnMoreProps = {
  iconVariant: LearnMoreIconProps["variant"];
  typographyColor?: string;
};

export const LearnMore = (props: LearnMoreProps) => {
  const {
    iconVariant,
    typographyColor = iconVariant === "sepia" ? "#fff" : "#000",
  } = props;

  return (
    <StyledLearnMoreWrapper>
      <LearnMoreIcon variant={iconVariant} />

      <Typography label="Learn more" color={typographyColor} />
    </StyledLearnMoreWrapper>
  );
};

const StyledLearnMoreWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;
  align-items: center;
  justify-content: start;
`;
