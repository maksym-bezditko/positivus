import styled from "styled-components";
import { Header } from "./components/Header";

import { MainSection } from "./components/sections/MainSection";
import { ServiceSection } from "./components/sections/ServiceSection";
import { BrandSection } from "./components/sections/BrandSection";
import { MakeThingsHappenSection } from "./components/sections/MakeThingsHappenSection";
import { CaseStudiesSection } from "./components/sections/CaseStudiesSection";
import { WorkingProcessSection } from "./components/sections/WorkingProcessSection";
import { TeamSection } from "./components/sections/TeamSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";

const App = () => {
  return (
    <PageWrapper>
      <Header />

      <MainSection />

      <BrandSection />

      <ServiceSection />

      <MakeThingsHappenSection />

      <CaseStudiesSection />

      <WorkingProcessSection />

      <TeamSection />

      <TestimonialsSection />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 60px;
  padding: 60px 100px 1000px;

  & > * {
    margin-bottom: 70px;
  }

  @media (min-width: 768px) {
    padding-top: 30px;
  }
`;

export default App;
