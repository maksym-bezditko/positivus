import styled from "styled-components";

import Amazon from "../../assets/companies/amazon.png";
import Dribbble from "../../assets/companies/dribbble.png";
import HubSpot from "../../assets/companies/hubspot.png";
import Notion from "../../assets/companies/notion.png";
import Netflix from "../../assets/companies/netflix.png";
import Zoom from "../../assets/companies/zoom.png";

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

export const BrandSection = () => {
  return (
    <StyledBrandsWrapper>
      {COMPANIES.map((company) => (
        <StyledBrandsLogo
          key={company.name}
          src={company.logo}
          alt={company.name}
        />
      ))}
    </StyledBrandsWrapper>
  );
};

const StyledBrandsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const StyledBrandsLogo = styled.img`
  height: 48px;
`;
