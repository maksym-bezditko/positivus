import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { LinkedInIcon } from './svg/LinkedInTeamMemberIcon';
import type { TeamMember as TeamMemberType } from '../types';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { respondTo } from '../styles/mixins/respondTo';

type TeamMemberProps = TeamMemberType;

export const TeamMember = (props: TeamMemberProps) => {
  const { name, position, description, imageSrc } = props;

  const isMd = useMediaQuery('md');

  return (
    <StyledTeamMember>
      <StyledTopPartWrapper>
        <StyledImageWrapper>
          <StyledImage src={imageSrc} />
        </StyledImageWrapper>

        <StyledNamePositionWrapper>
          <Typography
            label={name}
            fontWeight={500}
            fontSize={isMd ? 'md' : 'sm'}
          />

          <Typography
            label={position}
            fontWeight={300}
            fontSize={isMd ? 'sm' : 'xs'}
          />
        </StyledNamePositionWrapper>

        <StyledIconWrapper>
          <LinkedInIcon />
        </StyledIconWrapper>
      </StyledTopPartWrapper>

      <StyledBottomPartWrapper>
        <Typography label={description} fontSize={isMd ? 'sm' : 'xs'} />
      </StyledBottomPartWrapper>
    </StyledTeamMember>
  );
};

const StyledTeamMember = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 0 ${({ theme }) => theme.colors.black};
  border-radius: 2.875rem;
  padding: 1.25rem 2.25rem;
  margin-bottom: 0.25rem;

  ${respondTo('md')(css`
    padding: 1rem 1rem;
  `)}
`;

const StyledTopPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-column-gap: 1.25rem;

  padding: 1.25rem 0;
  position: relative;
`;

const StyledBottomPartWrapper = styled.div`
  padding: 1.25rem 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    position: relative;
    top: -1.25rem;
  }
`;

const StyledImageWrapper = styled.div``;

const StyledImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;

  ${respondTo('md')(css`
    width: 4rem;
    height: 4rem;
  `)}
`;

const StyledNamePositionWrapper = styled.div``;

const StyledIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
