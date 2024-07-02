import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled, { css } from 'styled-components';
import { Header } from './components/Header';

import { MainSection } from './components/sections/MainSection';
import { ServiceSection } from './components/sections/ServiceSection';
import { BrandSection } from './components/sections/BrandSection';
import { MakeThingsHappenSection } from './components/sections/MakeThingsHappenSection';
import { WorkingProcessSection } from './components/sections/WorkingProcessSection';
import { respondTo } from './styles/mixins/respondTo';
import { ContactUsSection } from './components/sections/ContactUsSection';
import { FooterSection } from './components/sections/FooterSection';
import { useMediaQuery } from './hooks/useMediaQuery';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { TeamSection } from './components/sections/TeamSection';

const App = () => {
  const isLg = useMediaQuery('lg');

  return (
    <>
      <StyledPaddingWrapper>
        <Header />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <MainSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <BrandSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <ServiceSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <MakeThingsHappenSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <WorkingProcessSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <TeamSection />
      </StyledPaddingWrapper>

      <StyledPaddingWrapper>
        <TestimonialsSection />
      </StyledPaddingWrapper>

      <StyledCaseStudiesPaddingWrapper>
        <CaseStudiesSection />
      </StyledCaseStudiesPaddingWrapper>

      <StyledPaddingWrapper>
        <ContactUsSection />
      </StyledPaddingWrapper>

      {isLg ? (
        <StyledPaddingWrapper>
          <FooterSection />
        </StyledPaddingWrapper>
      ) : (
        <FooterSection />
      )}
    </>
  );
};

const StyledPaddingWrapper = styled.div`
  padding-top: 3.75rem;
  padding: 3.75rem 6.25rem 0;

  ${respondTo('xxl')(css`
    padding: 2rem 2rem 0;
  `)}

  ${respondTo('xl')(css`
    padding: 1.5rem 2rem 0;
  `)}

  ${respondTo('lg')(css`
    padding: 1rem 1.5rem 0;
  `)}

  ${respondTo('sm')(css`
    padding: 1rem 0.5rem 0;
  `)}
`;

const StyledCaseStudiesPaddingWrapper = styled.div`
  padding-top: 3.75rem;
  padding: 3.75rem 6.25rem;

  ${respondTo('xxl')(css`
    padding: 2rem 2rem;
  `)}

  ${respondTo('xl')(css`
    padding: 1.5rem 2rem;
  `)}

  ${respondTo('lg')(css`
    padding: 1rem 0;
  `)}

  ${respondTo('sm')(css`
    padding: 1rem 0;
  `)}
`;

export default App;
