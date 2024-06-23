import styled from 'styled-components';
import { Button } from '../Button';
import { Megaphone } from '../svg/Megaphone';
import { Typography } from '../Typography';
import { theme } from '../../theme/theme';

export const MainSection = () => {
  return (
    <StyledMainBannerWrapper>
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
    </StyledMainBannerWrapper>
  );
};

const StyledMainBannerWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: start;
  grid-column-gap: 2rem;

  overflow-x: hidden;
  margin: 4.375rem 0;
`;

const StyledTextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledMegaphoneIllustration = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

const StyledButtonWrapper = styled.div``;
