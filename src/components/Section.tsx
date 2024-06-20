import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Typography } from "./Typography";

type SectionProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export const Section = (props: SectionProps) => {
  const { children, description, title } = props;

  return (
    <StyledSectionWrapper>
      <StyledHeadingWrapper>
        <Typography
          label={title}
          backgroundColor="#b9ff66"
          fontSize={40}
          fontWeight={500}
          borderRadius={7}
          paddingLeft={7}
          paddingRight={7}
        />

        <Typography
          label={description}
          fontWeight={300}
          fontSize={18}
        />
      </StyledHeadingWrapper>

      {children}
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled.section``;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: start;

  max-width: 800px;

  margin-bottom: 80px;
  margin-top: 140px;
`;
