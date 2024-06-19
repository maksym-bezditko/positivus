import styled from "styled-components";
import { Typography } from "../Typography";
import { TeamMember } from "../TeamMember";
import { Button } from "../Button";

import type { TeamMember as TeamMemberType } from "../../types";

import JohnSmith from "../../assets/team-members/john-smith.png";
import JaneDoe from "../../assets/team-members/jane-doe.png";
import MichaelBrown from "../../assets/team-members/michael-brown.png";
import EmilyJohnson from "../../assets/team-members/emily-johnson.png";
import BrianWilliams from "../../assets/team-members/brian-williams.png";
import SarahKim from "../../assets/team-members/sarah-kim.png";

const TEAM_MEMBERS: TeamMemberType[] = [
  {
    imageSrc: JohnSmith,
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    imageSrc: JaneDoe,
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    imageSrc: MichaelBrown,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    imageSrc: EmilyJohnson,
    name: "Emily Johnson",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    imageSrc: BrianWilliams,
    name: "Brian Williams",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },

  {
    imageSrc: SarahKim,
    name: "Sarah Kim",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const TeamSection = () => {
  return (
    <StyledTeamSectionWrapper>
      <StyledHeadingWrapper>
        <Typography
          label="Team"
          backgroundColor="#b9ff66"
          fontSize={40}
          fontWeight={500}
          borderRadius={7}
          paddingLeft={7}
          paddingRight={7}
        />

        <Typography
          label="Meet the skilled and experienced team behind our successful digital marketing strategies"
          fontWeight={300}
          fontSize={18}
        />
      </StyledHeadingWrapper>

      <StyledTeamWrapper>
        {TEAM_MEMBERS.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </StyledTeamWrapper>

      <StyledButtonWrapper>
        <Button label="See all team" width="270px" />
      </StyledButtonWrapper>
    </StyledTeamSectionWrapper>
  );
};

const StyledTeamSectionWrapper = styled.section``;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: start;

  max-width: 800px;

  margin-bottom: 80px;
  margin-top: 140px;
`;

const StyledTeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const StyledButtonWrapper = styled.div`
  display: grid;
  justify-content: end;

  margin-top: 40px;
`;
