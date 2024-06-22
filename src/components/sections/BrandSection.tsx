import styled from 'styled-components';

import { AmazonLogo } from '../svg/companies/AmazonLogo.tsx';
import { DribbbleLogo } from '../svg/companies/DribbbleLogo.tsx';
import { HubspotLogo } from '../svg/companies/HubspotLogo.tsx';
import { NotionLogo } from '../svg/companies/NotionLogo.tsx';
import { NetflixLogo } from '../svg/companies/NetflixLogo.tsx';
import { ZoomLogo } from '../svg/companies/ZoomLogo.tsx';

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
  return (
    <StyledBrandsWrapper>
      {COMPANIES.map((company) => (
        <StyledBrandsLogoWrapper key={company.name}>
          {company.logo}
        </StyledBrandsLogoWrapper>
      ))}
    </StyledBrandsWrapper>
  );
};

const StyledBrandsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const StyledBrandsLogoWrapper = styled.div`
  height: 48px;
`;
