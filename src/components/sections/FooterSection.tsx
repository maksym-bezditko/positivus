import styled from "styled-components";
import { Section } from "../Section";
import { FooterLogo } from "../icons/FooterLogo";
import { NavigationItems } from "../NavigationItems";
import { LinkedInIcon } from "../icons/social-media-icons/LinkedInIcon";
import { FacebookIcon } from "../icons/social-media-icons/FacebookIcon";
import { TwitterIcon } from "../icons/social-media-icons/TwitterIcon";
import { Typography } from "../Typography";
import { FormInput } from "../FormInput";
import { Button } from "../Button";

export const FooterSection = () => {
  return (
    <Section>
      <StyledFooterWrapper>
        <StyledFooterUpperPartWrapper>
          <FooterLogo />

          <NavigationItems
            isAnimated
            isUnderlined
            color="#fff"
            fontSize={18}
            underlineHeight={1}
          />

          <StyledSocialMediaLinksWrapper>
            <LinkedInIcon />

            <FacebookIcon />

            <TwitterIcon />
          </StyledSocialMediaLinksWrapper>
        </StyledFooterUpperPartWrapper>

        <StyledFooterMiddlePartWrapper>
          <StyledContactUsWrapper>
            <Typography
              label="Contact Us:"
              backgroundColor="#b9ff66"
              lineHeight={28 / 20}
              fontSize={20}
              borderRadius={7}
              paddingLeft={7}
              paddingRight={7}
            />

            <Typography
              label="info@positivus.com"
              color="#fff"
              fontSize={18}
              isEmail
            />

            <Typography
              label="555-567-8901"
              color="#fff"
              fontSize={18}
              isPhone
            />

            <Typography
              label="Address: 1234 Main St Moonstone City, Stardust State 12345"
              color="#fff"
              fontSize={18}
            />
          </StyledContactUsWrapper>

          <StyledEmailInputWrapper>
            <FormInput
              inputFieldType="email"
              label="Email"
              withLabel={false}
              backgroundColor="transparent"
              color="#fff"
              borderColor="#fff"
              height="100%"
            />

            <Button
              label="Subscribe to news"
              backgroundColor="#b9ff66"
              hoverBackgroundColor="#000"
              color="#000"
              hoverColor="#fff"
              withBorder={false}
              width="100%"
            />
          </StyledEmailInputWrapper>
        </StyledFooterMiddlePartWrapper>

        <StyledHr />

        <StyledFooterLowerPartWrapper>
          <Typography
            label="© 2023 Positivus. All Rights Reserved."
            color="#fff"
          />

          <Typography
            label="Privacy Policy"
            href="#"
            color="#fff"
            isUnderlined
            underlineHeight={1}
          />
        </StyledFooterLowerPartWrapper>
      </StyledFooterWrapper>
    </Section>
  );
};

const StyledFooterWrapper = styled.footer`
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  background-color: #191a23;
  padding: 55px 60px 50px;
`;

const StyledFooterUpperPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 66px;
`;

const StyledFooterMiddlePartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 40px;
`;

const StyledFooterLowerPartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-column-gap: 40px;
`;

const StyledSocialMediaLinksWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 20px;
`;

const StyledContactUsWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 27px;
`;

const StyledEmailInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 20px;

  background-color: #292a32;
  height: 100%;
  padding: 0 40px;
  border-radius: 15px;
`;

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #fff;
  margin: 50px 0;
`;
