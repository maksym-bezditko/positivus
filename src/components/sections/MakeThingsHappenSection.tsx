import styled from "styled-components";
import { Typography } from "../Typography";
import { Button } from "../Button";

import MakeThingsHappenImage from "../../assets/make-things-happen.png";

export const MakeThingsHappenSection = () => {
  return (
    <StyledBannerWrapper>
      <StyledDetailsWrapper>
        <Typography
          label="Let's make things happen"
          fontSize={30}
          fontWeight={500}
        />

        <Typography
          label="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
          fontSize={18}
        />

        <StyledButtonWrapper>
          <Button
            label="Book a consultation"
            backgroundColor="#000"
            hoverBackgroundColor="#fff"
            color="#fff"
            hoverColor="#000"
          />
        </StyledButtonWrapper>
      </StyledDetailsWrapper>

      <StyledImageWrapper>
        <StyledImage src={MakeThingsHappenImage} alt="Make things happen" />
      </StyledImageWrapper>
    </StyledBannerWrapper>
  );
};

const StyledBannerWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  justify-content: space-between;
  align-items: center;

  margin-top: 125px;
  padding: 60px;
  background-color: #f3f3f3;
  border-radius: 45px;
`;

const StyledDetailsWrapper = styled.div`
  *:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const StyledButtonWrapper = styled.div``;

const StyledImageWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-width: 190px;
  transform: scale(2);
`;
