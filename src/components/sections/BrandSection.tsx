import styled, { css, keyframes } from 'styled-components';

import { AmazonLogo } from '../svg/companies/AmazonLogo.tsx';
import { DribbbleLogo } from '../svg/companies/DribbbleLogo.tsx';
import { HubspotLogo } from '../svg/companies/HubspotLogo.tsx';
import { NotionLogo } from '../svg/companies/NotionLogo.tsx';
import { NetflixLogo } from '../svg/companies/NetflixLogo.tsx';
import { ZoomLogo } from '../svg/companies/ZoomLogo.tsx';
import { useMediaQuery } from '../../hooks/useMediaQuery.tsx';
import { respondTo } from '../../styles/mixins/respondTo.ts';
import { Section } from '../Section.tsx';

const COMPANIES = [
  {
    name: 'Amazon',
    logo: <AmazonLogo />
  },
  {
    name: 'Dribbble',
    logo: <DribbbleLogo />
  },
  {
    name: 'HubSpot',
    logo: <HubspotLogo />
  },
  {
    name: 'Notion',
    logo: <NotionLogo />
  },
  {
    name: 'Netflix',
    logo: <NetflixLogo />
  },
  {
    name: 'Zoom',
    logo: <ZoomLogo />
  }
];

export const BrandSection = () => {
  const isDesktop = useMediaQuery('xl');

  return (
    <Section>
      <StyledBrandsWrapper>
        {isDesktop ? (
          COMPANIES.map((company) => (
            <StyledBrandsLogoWrapper key={company.name}>
              {company.logo}
            </StyledBrandsLogoWrapper>
          ))
        ) : (
          <StyledBrandsScroller>
            {COMPANIES.map((company) => (
              <StyledBrandsLogoWrapper key={company.name}>
                {company.logo}
              </StyledBrandsLogoWrapper>
            ))}
          </StyledBrandsScroller>
        )}
      </StyledBrandsWrapper>
    </Section>
  );
};

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledBrandsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  ${respondTo('lg')(css`
    display: block;

    overflow: hidden;
    width: 100%;
  `)}
`;

const StyledBrandsScroller = styled.div`
  display: flex;
  column-gap: 1.5rem;
  padding: 0 1rem;
  width: 200%;
  animation: ${scroll} 10s linear infinite;
`;

const StyledBrandsLogoWrapper = styled.div`
  height: 3rem;

  ${respondTo('lg')(css`
    flex: 0 0 auto;
    width: calc(100% / ${COMPANIES.length});
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
`;
