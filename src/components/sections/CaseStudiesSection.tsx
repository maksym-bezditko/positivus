import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { LearnMore } from '../LearnMore';
import { Section } from '../Section';
import { theme } from '../../theme';
import { respondTo } from '../../styles/mixins/respondTo';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Slider, { Settings } from 'react-slick';

const CASE_STUDIES = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
];

const settings: Settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true
};

export const CaseStudiesSection = () => {
  const isLg = useMediaQuery('lg');
  const isSm = useMediaQuery('sm');

  return (
    <Section
      title="Case Studies"
      description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      withOverflowContent
    >
      {isLg ? (
        <StyledCaseStudiesWrapper>
          {CASE_STUDIES.map((caseStudy) => (
            <StyledCaseStudy key={caseStudy}>
              <Typography
                label={caseStudy}
                fontWeight={300}
                color={theme.colors.white}
                fontSize={isSm ? 'xs' : 'xxs'}
              />

              <LearnMore iconVariant="green" arrowPosition="right" />
            </StyledCaseStudy>
          ))}
        </StyledCaseStudiesWrapper>
      ) : (
        <StyledSlider {...settings}>
          {CASE_STUDIES.map((caseStudy) => (
            <StyledCaseStudy key={caseStudy}>
              <Typography
                label={caseStudy}
                fontWeight={300}
                color={theme.colors.white}
                fontSize={isSm ? 'xs' : 'xxs'}
              />

              <LearnMore iconVariant="green" arrowPosition="right" />
            </StyledCaseStudy>
          ))}
        </StyledSlider>
      )}
    </Section>
  );
};

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -1rem;

    ${respondTo('sm')(css`
      margin: 0 -0.75rem;
    `)}
  }

  .slick-slide > div {
    padding: 0 1rem;

    ${respondTo('sm')(css`
      padding: 0 0.75rem;
    `)}
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
`;

const StyledCaseStudiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 10rem;

  padding: 4.375rem 3.75rem;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 2.875rem;

  ${respondTo('xl')(css`
    grid-column-gap: 5rem;
  `)}
`;

const StyledCaseStudy = styled.div`
  display: grid !important;
  grid-row-gap: 1.25rem;
  position: relative;

  ${respondTo('lg')(css`
    background-color: ${({ theme }) => theme.colors.dark};
    padding: 2.5rem;
    border-radius: 45px;
    height: 100%;
  `)}

  &:not(:last-child):before {
    content: '';
    position: absolute;
    top: 0;
    right: -5rem;
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};

    ${respondTo('xl')(css`
      right: -2.5rem;
    `)}
  }
`;
