import styled from 'styled-components';
import { Typography } from './Typography';
import { useState } from 'react';
import { MinusIcon } from './svg/MinusIcon';
import { PlusIcon } from './svg/PlusIcon';
import type { WorkingProcessCard as WorkingProcessCardType } from '../types';

export type WorkingProcessCardProps = WorkingProcessCardType;

export const WorkingProcessCard = (props: WorkingProcessCardProps) => {
  const { title, description, index } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledWorkingProcessCard $isExpanded={isExpanded}>
      <StyledCollapsedContentWrapper>
        <StyledTypographyWrapper>
          <Typography fontSize="xxxl" label={index} />

          <Typography label={title} fontSize="lg" tag="h3" />
        </StyledTypographyWrapper>

        <StyledExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <MinusIcon /> : <PlusIcon />}
        </StyledExpandButton>
      </StyledCollapsedContentWrapper>

      {isExpanded && (
        <>
          <StyledHr />

          <Typography label={description} fontSize="sm" />
        </>
      )}
    </StyledWorkingProcessCard>
  );
};

const StyledWorkingProcessCard = styled.div<{
  $isExpanded: boolean;
}>`
  display: grid;
  align-items: center;

  min-height: 10rem;
  background-color: ${({ $isExpanded, theme }) =>
    $isExpanded ? theme.colors.green : theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 2.875rem;
  box-shadow: 0 0.25rem 0 ${({ theme }) => theme.colors.black};
  padding: 2.5rem 3.75rem;
  margin-bottom: 0.25rem;

  transition: all 0.4s ease-in-out;
`;

const StyledCollapsedContentWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledExpandButton = styled.button`
  display: grid;
  place-items: center;

  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
`;

const StyledTypographyWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1.5rem;
  align-items: center;
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  margin: 1.875rem 0;
`;
