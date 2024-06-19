import styled from "styled-components";
import { Typography } from "./Typography";

export type SliderItemProps = {
  authorName: string;
  authorPosition: string;
  authorDescription: string;
};

export const SliderItem = (props: SliderItemProps) => {
  const { authorName, authorPosition, authorDescription } = props;

  return (
    <StyledSliderItemWrapper>
      <StyledDescriptionWrapper>
        <Typography label={authorDescription} fontSize={18} color="#fff" />
      </StyledDescriptionWrapper>

      <StyledNameAndPositionWrapper>
        <Typography label={authorName} fontWeight={500} color="#b9ff66" />

        <Typography label={authorPosition} color="#fff" />
      </StyledNameAndPositionWrapper>
    </StyledSliderItemWrapper>
  );
};

const StyledSliderItemWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 50px;
  justify-content: space-between;
  align-items: center;

  width: 620px;
`;

const StyledDescriptionWrapper = styled.div`
  position: relative;
  border: 2px solid #b9ff66;
  border-radius: 45px;
  padding: 48px 52px;
	height: 240px;

  &:after {
    content: "";
    width: 50px;
    height: 50px;
    border-bottom: 2px solid #b9ff66;
    border-left: 2px solid #b9ff66;
    background-color: #191a23;
    transform: rotate(-45deg);
    position: absolute;
    bottom: -26.5px;
    left: 60px;
  }
`;

const StyledNameAndPositionWrapper = styled.div`
  padding: 0px 80px;
`;
