import styled from "styled-components";
import { Typography } from "./Typography";
import { LearnMore } from "./LearnMore";
import { LearnMoreIconProps } from "./icons/LearnMoreIcon";

type ServiceCardProps = {
  serviceText: string;
  serviceTextBackgroundColor: string;
  learnMoreVariant: LearnMoreIconProps["variant"];
  imageSrc: string;
  backgroundColor?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const {
    serviceText,
    serviceTextBackgroundColor,
    learnMoreVariant,
    imageSrc,
    backgroundColor = "#F3F3F3",
  } = props;

  return (
    <StyledServiceCardWrapper $backgroundColor={backgroundColor}>
      <StyledDetailWrapper>
        <Typography
          label={serviceText}
          backgroundColor={serviceTextBackgroundColor}
          borderRadius={7}
          fontWeight={500}
          fontSize={30}
          paddingLeft={7}
          paddingRight={7}
        />

        <LearnMore iconVariant={learnMoreVariant} />
      </StyledDetailWrapper>

      <StyledImageWrapper>
        <StyledImage src={imageSrc} />
      </StyledImageWrapper>
    </StyledServiceCardWrapper>
  );
};

const StyledServiceCardWrapper = styled.div<{
  $backgroundColor: string;
}>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 50px;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 45px;
  min-height: 310px;
  border: 1px solid #000;
  box-shadow: 0px 4px 0px #000;
`;

const StyledDetailWrapper = styled.div`
  height: 100%;

  display: grid;
  justify-content: space-between;
`;

const StyledImageWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const StyledImage = styled.img`
  max-height: 170px;
`;
