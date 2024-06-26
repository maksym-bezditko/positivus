import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { Megaphone } from '../svg/Megaphone';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { respondTo } from '../../styles/mixins/respondTo';

const MobileContent = () => (
  <StyledMainBannerWrapperMobile>
    <Typography
      label="Navigating the digital landscape for success"
      fontSize="xl"
      lineHeight={1.1}
      fontWeight={500}
    />

    <StyledMegaphoneIllustration>
      <Megaphone />
    </StyledMegaphoneIllustration>

    <Typography
      label="Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation."
      fontSize="sm"
      fontWeight={300}
    />

    <Button
      label="Book a consultation"
      backgroundColor={theme.colors.black}
      hoverBackgroundColor={theme.colors.white}
      color={theme.colors.white}
      hoverColor={theme.colors.black}
    />
  </StyledMainBannerWrapperMobile>
);

const DesktopContent = () => (
  <StyledMainBannerWrapperDesktop>
    <StyledTextContentWrapper>
      <Typography
        label="Navigating the digital landscape for success"
        fontSize="xxxl"
        lineHeight={1.1}
        fontWeight={500}
      />

      <Typography
        label="Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation."
        fontSize="md"
        fontWeight={300}
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
    </StyledTextContentWrapper>

    <StyledMegaphoneIllustration>
      <Megaphone />
    </StyledMegaphoneIllustration>
  </StyledMainBannerWrapperDesktop>
);

export const MainSection = () => {
  const isDesktop = useMediaQuery('lg');

  return isDesktop ? <DesktopContent /> : <MobileContent />;
};

const StyledMainBannerWrapperMobile = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin: 1.5rem 0;
`;

const StyledMainBannerWrapperDesktop = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: start;
  grid-column-gap: 2rem;

  margin: 4.375rem 0;
`;

const StyledTextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  height: 100%;
`;

const StyledMegaphoneIllustration = styled.div`
  display: grid;
  place-items: center;
  align-self: center;
  max-height: 32rem;

  ${respondTo('lg')(css`
    max-width: 90vw;
    width: 100%;
  `)}
`;

const StyledButtonWrapper = styled.div``;
