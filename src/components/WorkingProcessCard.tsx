import styled from "styled-components";
import { Typography } from "./Typography";
import { useState } from "react";
import { MinusIcon } from "./icons/MinusIcon";
import { PlusIcon } from "./icons/PlusIcon";
import type { WorkingProcessCard as WorkingProcessCardType } from "../types";

export type WorkingProcessCardProps = WorkingProcessCardType;

export const WorkingProcessCard = (props: WorkingProcessCardProps) => {
  const { title, description, index } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledWorkingProcessCard $isExpanded={isExpanded}>
      <StyledCollapsedContentWrapper>
        <StyledTypographyWrapper>
          <Typography fontSize={60} label={index} />

          <Typography label={title} fontSize={30} tag="h3" />
        </StyledTypographyWrapper>

        <StyledExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <MinusIcon /> : <PlusIcon />}
        </StyledExpandButton>
      </StyledCollapsedContentWrapper>

      {isExpanded && (
        <>
          <StyledHr />

          <Typography label={description} fontSize={18} />
        </>
      )}
    </StyledWorkingProcessCard>
  );
};

const StyledWorkingProcessCard = styled.div<{
  $isExpanded: boolean;
}>`
  min-height: 160px;
  background-color: ${(props) => (props.$isExpanded ? "#b9ff66" : "#f3f3f3")};
  border: 1px solid #000;
  border-radius: 45px;
  box-shadow: 0px 4px 0px #000;
  padding: 40px 60px;
  margin-bottom: 5px;

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

  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #f3f3f3;
  cursor: pointer;
`;

const StyledTypographyWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 25px;
  align-items: center;
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #000;
  margin: 30px 0;
`;
