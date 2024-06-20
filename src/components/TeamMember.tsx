import styled from "styled-components";
import { Typography } from "./Typography";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import type { TeamMember as TeamMemberType } from "../types";

type TeamMemberProps = TeamMemberType;

export const TeamMember = (props: TeamMemberProps) => {
  const { name, position, description, imageSrc } = props;

  return (
    <StyledTeamMember>
      <StyledTopPartWrapper>
        <StyledImageWrapper>
          <StyledImage src={imageSrc} />
        </StyledImageWrapper>

        <StyledNamePositionWrapper>
          <Typography label={name} fontWeight={500} />

          <Typography label={position} fontSize={18} fontWeight={300} />
        </StyledNamePositionWrapper>

        <StyledIconWrapper>
          <LinkedInIcon />
        </StyledIconWrapper>
      </StyledTopPartWrapper>

      <StyledBottomPartWrapper>
        <Typography
          label={description}
          fontSize={18}
        />
      </StyledBottomPartWrapper>
    </StyledTeamMember>
  );
};

const StyledTeamMember = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  border: 1px solid #000;
  box-shadow: 0px 4px 0px #000;
  max-height: 350px;
  border-radius: 45px;
  padding: 20px 35px;
  margin-bottom: 4px;
`;

const StyledTopPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: end;
  grid-column-gap: 20px;

  padding: 20px 0;
  position: relative;
`;

const StyledBottomPartWrapper = styled.div`
  padding: 20px 0;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #000;
    position: relative;
    top: -20.5px;
  }
`;

const StyledImageWrapper = styled.div``;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledNamePositionWrapper = styled.div``;

const StyledIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
