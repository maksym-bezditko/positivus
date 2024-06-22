import styled from 'styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';

import { theme } from '../../theme/theme';
import { MakeThingsHappenDecor } from '../svg/MakeThingsHappenDecor';

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
            backgroundColor={theme.colors.black}
            hoverBackgroundColor={theme.colors.white}
            color={theme.colors.white}
            hoverColor={theme.colors.black}
          />
        </StyledButtonWrapper>
      </StyledDetailsWrapper>

      <StyledImageWrapper>
        <MakeThingsHappenDecor />
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
  background-color: ${({ theme }) => theme.colors.lightGrey};
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
