import styled from "styled-components";
import { Service } from "../../types";
import { ServiceCard } from "../ServiceCard";
import { Section } from "../Section";

import Ads from "../../assets/services/ads.png";
import Analytics from "../../assets/services/analytics.png";
import Content from "../../assets/services/content.png";
import Email from "../../assets/services/email.png";
import Seo from "../../assets/services/seo.png";
import Smm from "../../assets/services/smm.png";

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

export const ServiceSection = () => {
  return (
    <Section
      title="Services"
      description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
    >
      <StyledServicesList>
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            imageSrc={service.imageSrc}
            serviceText={service.title}
            backgroundColor={service.backgroundColor}
            learnMoreVariant={service.learnMoreVariant}
            serviceTextBackgroundColor={service.typographyBackgroundColor}
          />
        ))}
      </StyledServicesList>
    </Section>
  );
};

const StyledServicesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  margin-top: 80px;
`;
