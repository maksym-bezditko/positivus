import styled from 'styled-components';
import { Typography } from '../Typography';
import { LearnMore } from '../LearnMore';
import { Section } from '../Section';
import { theme } from '../../theme';

const CASE_STUDIES = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
];

export const CaseStudiesSection = () => {
  return (
    <Section
      title="Case Studies"
      description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    >
      <StyledCaseStudiesWrapper>
        {CASE_STUDIES.map((caseStudy) => (
          <StyledCaseStudy key={caseStudy}>
            <Typography
              label={caseStudy}
              fontSize="xs"
              fontWeight={300}
              color={theme.colors.white}
            />

            <LearnMore iconVariant="green" arrowPosition="right" />
          </StyledCaseStudy>
        ))}
      </StyledCaseStudiesWrapper>
    </Section>
  );
};

const StyledCaseStudiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 11.25rem;

  padding: 4.375rem 3.75rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 2.875rem;
`;

const StyledCaseStudy = styled.div`
  display: grid;
  grid-row-gap: 1.25rem;
  position: relative;

  &:not(:first-child):before {
    content: '';
    position: absolute;
    left: -3.75rem;
    top: 0;
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
