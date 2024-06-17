import styled from "styled-components";

import { LearnMoreIcon, type LearnMoreIconProps } from "./icons/LearnMoreIcon";
import { Typography } from "./Typography";

type LearnMoreProps = {
  iconVariant: LearnMoreIconProps["variant"];
  typographyColor?: string;
  arrowPosition?: "left" | "right";
};

const mapVariantToTypographyColor = (
  iconVariant: LearnMoreIconProps["variant"]
) => {
  switch (iconVariant) {
    case "sepia":
      return "#fff";
    case "green":
      return "#b9ff66";
    default:
      return "#000";
  }
};

export const LearnMore = (props: LearnMoreProps) => {
  const {
    iconVariant,
    typographyColor = mapVariantToTypographyColor(iconVariant),
    arrowPosition = "left",
  } = props;

  return (
    <StyledLearnMoreWrapper>
      {arrowPosition === "left" && <LearnMoreIcon variant={iconVariant} />}

      <Typography label="Learn more" color={typographyColor} />

      {arrowPosition === "right" && <LearnMoreIcon variant={iconVariant} />}
    </StyledLearnMoreWrapper>
  );
};

const StyledLearnMoreWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;
  align-items: center;
  justify-content: start;

  cursor: pointer;
`;
