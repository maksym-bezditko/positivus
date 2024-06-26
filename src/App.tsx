import styled, { css } from 'styled-components';
import { Header } from './components/Header';

import { MainSection } from './components/sections/MainSection';
import { ServiceSection } from './components/sections/ServiceSection';
import { BrandSection } from './components/sections/BrandSection';
// import { MakeThingsHappenSection } from './components/sections/MakeThingsHappenSection';
// import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
// import { WorkingProcessSection } from './components/sections/WorkingProcessSection';
// import { TeamSection } from './components/sections/TeamSection';
// import { TestimonialsSection } from './components/sections/TestimonialsSection';
// import { ContactUsSection } from './components/sections/ContactUsSection';
// import { FooterSection } from './components/sections/FooterSection';
import { respondTo } from './styles/mixins/respondTo';
import { Section } from './components/Section';

const App = () => {
  return (
    <PageWrapper>
      <Header />

      <MainSection />

      <BrandSection />

      <ServiceSection />

      {/* <MakeThingsHappenSection />

      <CaseStudiesSection />

      <WorkingProcessSection />

      <TeamSection />

      <TestimonialsSection />

      <ContactUsSection />

      <FooterSection /> */}

      <Section></Section>
    </PageWrapper>
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
`;

export default App;
