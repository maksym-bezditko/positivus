import styled, { css } from 'styled-components';
import { Section } from '../Section';
import { FooterLogo } from '../svg/FooterLogo';
import { NavigationItems } from '../NavigationItems';
import { LinkedInIcon } from '../svg/social-media-icons/LinkedInIcon';
import { FacebookIcon } from '../svg/social-media-icons/FacebookIcon';
import { TwitterIcon } from '../svg/social-media-icons/TwitterIcon';
import { Typography } from '../Typography';
import { FormInput } from '../FormInput';
import { Button } from '../Button';
import { theme } from '../../theme';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { respondTo } from '../../styles/mixins/respondTo';

export const FooterSection = () => {
  const isXsl = useMediaQuery('xsl');

  const isMd = useMediaQuery('md');

  return (
    <Section>
      <StyledFooterWrapper>
        <StyledFooterUpperPartWrapper>
          <FooterLogo />

          <NavigationItems
            isAnimated
            isUnderlined
            color={theme.colors.white}
            fontSize={18}
            underlineHeight={1}
          />

          {isXsl && (
            <StyledSocialMediaLinksWrapper>
              <LinkedInIcon />

              <FacebookIcon />

              <TwitterIcon />
            </StyledSocialMediaLinksWrapper>
          )}
        </StyledFooterUpperPartWrapper>

        <StyledFooterMiddlePartWrapper>
          <StyledContactUsWrapper>
            <Typography
              label="Contact Us:"
              backgroundColor={theme.colors.green}
              lineHeight={1.4}
              fontSize="md"
              borderRadius={0.5}
              paddingLeft={0.5}
              paddingRight={0.5}
            />

            <Typography
              label="info@positivus.com"
              color={theme.colors.white}
              fontSize={isMd ? 'sm' : 'xs'}
              isEmail
            />

            <Typography
              label="555-567-8901"
              color={theme.colors.white}
              fontSize={isMd ? 'sm' : 'xs'}
              isPhone
            />

            <Typography
              label="Address: 1234 Main St Moonstone City, Stardust State 12345"
              color={theme.colors.white}
              fontSize={isMd ? 'sm' : 'xs'}
            />
          </StyledContactUsWrapper>

          <StyledEmailInputWrapper>
            <FormInput
              inputFieldType="email"
              label="Email"
              withLabel={false}
              backgroundColor="transparent"
              color={theme.colors.white}
              borderColor={theme.colors.white}
              height="100%"
            />

            <Button
              label="Subscribe to news"
              backgroundColor={theme.colors.green}
              hoverBackgroundColor={theme.colors.black}
              color={theme.colors.black}
              hoverColor={theme.colors.white}
              borderColor="transparent"
              hoverBorderColor={theme.colors.white}
              width="100%"
            />
          </StyledEmailInputWrapper>

          {!isXsl && (
            <StyledSocialMediaLinksWrapper>
              <LinkedInIcon />

              <FacebookIcon />

              <TwitterIcon />
            </StyledSocialMediaLinksWrapper>
          )}
        </StyledFooterMiddlePartWrapper>

        <StyledHr />

        <StyledFooterLowerPartWrapper>
          <Typography
            label="© 2023 Positivus. All Rights Reserved."
            color={theme.colors.white}
            fontSize={isMd ? 'sm' : 'xs'}
            textAlign='center'
          />

          <StyledBottomLinkWrapper>
            <Typography
              label="Privacy Policy"
              href="/"
              color={theme.colors.white}
              isUnderlined
              underlineHeight={1}
              fontSize={isMd ? 'sm' : 'xs'}
            />
          </StyledBottomLinkWrapper>
        </StyledFooterLowerPartWrapper>
      </StyledFooterWrapper>
    </Section>
  );
};

const StyledFooterWrapper = styled.footer`
  border-top-right-radius: 2.875rem;
  border-top-left-radius: 2.875rem;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 3.5rem 3.75rem 3rem;

  ${respondTo('md')(css`
    padding: 3rem;
  `)}

  ${respondTo('sm')(css`
    padding: 2rem 1rem;
  `)}
`;

const StyledFooterUpperPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;

  ${respondTo('lg')(css`
    grid-auto-flow: row;
    grid-gap: 2rem;
  `)}

  ${respondTo('md')(css`
    justify-content: center;
  `)}
`;

const StyledFooterMiddlePartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  align-items: center;
  grid-gap: 2.5rem;

  ${respondTo('xsl')(css`
    grid-template-columns: none;
    grid-auto-flow: row;
    justify-content: stretch;
  `)}
`;

const StyledFooterLowerPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 2.5rem;

  ${respondTo('lg')(css`
    grid-auto-flow: row;
    grid-gap: 1rem;
    justify-content: center;
  `)}
`;

const StyledSocialMediaLinksWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 1.25rem;

  ${respondTo('xsl')(css`
    justify-content: center;
  `)}
`;

const StyledContactUsWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 1.5rem;

  ${respondTo('lg')(css`
    grid-row-gap: 1rem;
  `)}
`;

const StyledEmailInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1.125rem;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
  padding: 0 2.5rem;
  border-radius: 1rem;

  ${respondTo('xsl')(css`
    padding: 2.5rem;
    grid-template-columns: none;
    grid-auto-flow: row;
    justify-content: stretch;
  `)}

  ${respondTo('lg')(css`
    padding: 1.5rem;
  `)}
`;

const StyledBottomLinkWrapper = styled.div`
  display: contents;

  ${respondTo('lg')(css`
    display: grid;
    place-items: center;
  `)}
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  margin: 3rem 0;
`;
