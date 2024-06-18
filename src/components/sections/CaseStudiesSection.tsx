import styled from "styled-components";
import { Typography } from "../Typography";
import { LearnMore } from "../LearnMore";

const CASE_STUDIES = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const CaseStudiesSection = () => {
  return (
    <StyledCaseStudiesSection>
      <StyledHeadingWrapper>
        <Typography
          label="Case Studies"
          backgroundColor="#b9ff66"
          fontSize={40}
          fontWeight={500}
          borderRadius={7}
          paddingLeft={7}
          paddingRight={7}
        />

        <Typography
          label="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          fontWeight={300}
          fontSize={18}
        />
      </StyledHeadingWrapper>

      <StyledCaseStudiesWrapper>
        {CASE_STUDIES.map((caseStudy) => (
          <StyledCaseStudy key={caseStudy}>
            <Typography
              label={caseStudy}
              fontSize={16}
              fontWeight={300}
              color="#fff"
            />

            <LearnMore iconVariant="green" arrowPosition="right" />
          </StyledCaseStudy>
        ))}
      </StyledCaseStudiesWrapper>
    </StyledCaseStudiesSection>
  );
};

const StyledCaseStudiesSection = styled.section`
  margin-top: 150px;
`;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: start;

  max-width: 800px;
`;

const StyledCaseStudiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 120px;

  padding: 70px 60px;
  background-color: #191a23;
  border-radius: 45px;
  margin-top: 80px;
`;

const StyledCaseStudy = styled.div`
  display: grid;
  grid-row-gap: 20px;
  position: relative;

  &:not(:first-child):before {
    content: "";
    position: absolute;
    left: -60px;
    top: 0;
    display: block;
    width: 1px;
    height: 100%;
    background-color: #fff;
  }
`;
