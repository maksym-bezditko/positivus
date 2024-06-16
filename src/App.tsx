import styled from "styled-components";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

import Megaphone from "./assets/companies/megaphone.png";
import Amazon from "./assets/companies/amazon.png";
import Dribbble from "./assets/companies/dribbble.png";
import HubSpot from "./assets/companies/hubspot.png";
import Notion from "./assets/companies/notion.png";
import Netflix from "./assets/companies/netflix.png";
import Zoom from "./assets/companies/zoom.png";

import Ads from "./assets/services/ads.png";
import Analytics from "./assets/services/analytics.png";
import Content from "./assets/services/content.png";
import Email from "./assets/services/email.png";
import Seo from "./assets/services/seo.png";
import Smm from "./assets/services/smm.png";

import { ServiceCard } from "./components/ServiceCard";
import { LearnMoreIconProps } from "./components/icons/LearnMoreIcon";

const COMPANIES = [
  {
    name: "Amazon",
    logo: Amazon,
  },
  {
    name: "Dribbble",
    logo: Dribbble,
  },
  {
    name: "HubSpot",
    logo: HubSpot,
  },
  {
    name: "Notion",
    logo: Notion,
  },
  {
    name: "Netflix",
    logo: Netflix,
  },
  {
    name: "Zoom",
    logo: Zoom,
  },
];

type Service = {
  title: string;
  backgroundColor: string;
  imageSrc: string;
  learnMoreVariant: LearnMoreIconProps["variant"];
  typographyBackgroundColor: string;
};

const SERVICES: Service[] = [
  {
    title: "Search engine optimization",
    backgroundColor: "#F3F3F3",
    imageSrc: Seo,
    learnMoreVariant: "default",
    typographyBackgroundColor: "#B9FF66",
  },
  {
    title: "Pay-per-click advertising",
    backgroundColor: "#B9FF66",
    imageSrc: Ads,
    learnMoreVariant: "default",
    typographyBackgroundColor: "#F3F3F3",
  },
  {
    title: "Social Media Marketing",
    backgroundColor: "#191A23",
    imageSrc: Smm,
    learnMoreVariant: "sepia",
    typographyBackgroundColor: "#fff",
  },
  {
    title: "Email marketing",
    backgroundColor: "#F3F3F3",
    imageSrc: Email,
    learnMoreVariant: "default",
    typographyBackgroundColor: "#B9FF66",
  },
  {
    title: "Content Creation",
    backgroundColor: "#B9FF66",
    imageSrc: Content,
    learnMoreVariant: "default",
    typographyBackgroundColor: "#F3F3F3",
  },
  {
    title: "Analytics and Tracking",
    backgroundColor: "#191A23",
    imageSrc: Analytics,
    learnMoreVariant: "sepia",
    typographyBackgroundColor: "#fff",
  },
];

const App = () => {
  return (
    <PageWrapper>
      <Header />

      <StyledMainBannerWrapper>
        <StyledTextContentWrapper>
          <StyledH1>Navigating the digital landscape for success</StyledH1>

          <StyledText>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </StyledText>

          <StyledButtonWrapper>
            <Button label="Book a consultation" />
          </StyledButtonWrapper>
        </StyledTextContentWrapper>

        <StyledMegaphoneIllustration>
          <StyledImage src={Megaphone} alt="Megaphone illustration" />
        </StyledMegaphoneIllustration>
      </StyledMainBannerWrapper>

      <StyledBrandsWrapper>
        {COMPANIES.map((company) => (
          <StyledBrandsLogo
            key={company.name}
            src={company.logo}
            alt={company.name}
          />
        ))}
      </StyledBrandsWrapper>

      <StyledServicesSection>
        <StyledHeadingWrapper>
          <StyledH2>Services</StyledH2>

          <StyledText>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </StyledText>
        </StyledHeadingWrapper>

        <StyledServicesList>
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              backgroundColor={service.backgroundColor}
              learnMoreVariant={service.learnMoreVariant}
              serviceText={service.title}
              serviceTextBackgroundColor={service.typographyBackgroundColor}
              imageSrc={service.imageSrc}
            />
          ))}
        </StyledServicesList>
      </StyledServicesSection>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 60px;
  padding: 60px 100px 1000px;

  @media (min-width: 768px) {
    padding-top: 30px;
  }
`;

const StyledMainBannerWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: start;
  grid-column-gap: 160px;

  margin-top: 70px;
`;

const StyledTextContentWrapper = styled.div`
  display: grid;

  & > * {
    margin-bottom: 40px;
  }
`;

const StyledMegaphoneIllustration = styled.div`
  display: grid;
  justify-content: end;
  height: 100%;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  line-height: 80px;
  font-weight: 500;
`;

const StyledText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
`;

const StyledButtonWrapper = styled.div``;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledBrandsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  margin-top: 70px;
`;

const StyledBrandsLogo = styled.img`
  height: 48px;
`;

const StyledServicesSection = styled.section`
  margin-top: 140px;
`;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;

  max-width: 1000px;
`;

const StyledH2 = styled.h2`
  display: grid;
  place-items: center;

  font-size: 40px;
  font-weight: 500;
  line-height: 48px;

  background-color: #b9ff66;
  width: fit-content;
  padding: 0px 7px;
  border-radius: 5px;
`;

const StyledServicesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  margin-top: 80px;
`;

export default App;
