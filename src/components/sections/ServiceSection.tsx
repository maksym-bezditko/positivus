import styled, { css } from 'styled-components';
import { Service } from '../../types';
import { ServiceCard } from '../ServiceCard';
import { Section } from '../Section';

import Ads from '../../assets/services/ads.png';
import Analytics from '../../assets/services/analytics.png';
import Content from '../../assets/services/content.png';
import Email from '../../assets/services/email.png';
import Seo from '../../assets/services/seo.png';
import Smm from '../../assets/services/smm.png';
import { theme } from '../../theme';
import { respondTo } from '../../styles/mixins/respondTo';

const SERVICES: Service[] = [
  {
    title: 'Search engine optimization',
    backgroundColor: theme.colors.lightGrey,
    imageSrc: Seo,
    learnMoreVariant: 'default',
    typographyBackgroundColor: theme.colors.green
  },
  {
    title: 'Pay-per-click advertising',
    backgroundColor: theme.colors.green,
    imageSrc: Ads,
    learnMoreVariant: 'default',
    typographyBackgroundColor: theme.colors.lightGrey
  },
  {
    title: 'Social Media Marketing',
    backgroundColor: theme.colors.dark,
    imageSrc: Smm,
    learnMoreVariant: 'sepia',
    typographyBackgroundColor: theme.colors.white
  },
  {
    title: 'Email marketing',
    backgroundColor: theme.colors.lightGrey,
    imageSrc: Email,
    learnMoreVariant: 'default',
    typographyBackgroundColor: theme.colors.green
  },
  {
    title: 'Content Creation',
    backgroundColor: theme.colors.green,
    imageSrc: Content,
    learnMoreVariant: 'default',
    typographyBackgroundColor: theme.colors.lightGrey
  },
  {
    title: 'Analytics and Tracking',
    backgroundColor: theme.colors.dark,
    imageSrc: Analytics,
    learnMoreVariant: 'sepia',
    typographyBackgroundColor: theme.colors.white
  }
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
  grid-gap: 2.125rem;

  ${respondTo('xxxxl')(css`
    grid-template-columns: none;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
  `)}
`;
