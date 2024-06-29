import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';

import { theme } from '../../theme';
import { MakeThingsHappenDecor } from '../svg/MakeThingsHappenDecor';
import { respondTo } from '../../styles/mixins/respondTo';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const MakeThingsHappenSection = () => {
  const isDesktop = useMediaQuery('md');

  return (
    <StyledBannerWrapper>
      <StyledDetailsWrapper>
        <Typography
          label="Let's make things happen"
          fontSize={isDesktop ? 'lg' : 'sm'}
          fontWeight={500}
        />

        <Typography
          label="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
          fontSize={isDesktop ? 'md' : 'xxs'}
        />

        <StyledButtonWrapper>
          <Button
            label="Book a consultation"
            backgroundColor={theme.colors.black}
            hoverBackgroundColor={theme.colors.white}
            color={theme.colors.white}
            hoverColor={theme.colors.black}
            width={isDesktop ? 'auto' : '100%'}
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
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 10rem;
  justify-content: space-between;
  align-items: center;

  margin-top: 7.75rem;
  padding: 3.75rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 2.875rem;

  ${respondTo('xxxxl')(css`
    grid-column-gap: 5rem;
  `)}

  ${respondTo('xl')(css`
    grid-template-columns: none;
    padding: 2rem;
    margin-top: 3.75rem;
  `)}
`;

const StyledDetailsWrapper = styled.div`
  *:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

const StyledButtonWrapper = styled.div``;

const StyledImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  height: 100%;

  transform: scale(1.7);

  ${respondTo('xxxxl')(css`
    transform: scale(1.1);
    justify-content: end;
  `)}

  ${respondTo('xl')(css`
    display: none;
  `)}
`;
