import styled, { css } from 'styled-components';
import { Header } from './components/Header';

import { MainSection } from './components/sections/MainSection';
import { ServiceSection } from './components/sections/ServiceSection';
import { BrandSection } from './components/sections/BrandSection';
import { MakeThingsHappenSection } from './components/sections/MakeThingsHappenSection';
// import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { WorkingProcessSection } from './components/sections/WorkingProcessSection';
import { TeamSection } from './components/sections/TeamSection';
// import { TestimonialsSection } from './components/sections/TestimonialsSection';
// import { ContactUsSection } from './components/sections/ContactUsSection';
// import { FooterSection } from './components/sections/FooterSection';
import { respondTo } from './styles/mixins/respondTo';
import { ContactUsSection } from './components/sections/ContactUsSection';
import { FooterSection } from './components/sections/FooterSection';
import { useMediaQuery } from './hooks/useMediaQuery';

const App = () => {
  const isLg = useMediaQuery('lg');

  return (
    <>
      <PageWrapper>
        <Header />

        <MainSection />

        <BrandSection />

        <ServiceSection />

        <MakeThingsHappenSection />

        <WorkingProcessSection />

        {/* <CaseStudiesSection /> */}

        <TeamSection />

        {/* <TestimonialsSection /> */}

        <ContactUsSection />

        {isLg && <FooterSection />}
      </PageWrapper>

      {!isLg && <FooterSection />}
    </>
  );
};

const PageWrapper = styled.div`
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

export default App;
