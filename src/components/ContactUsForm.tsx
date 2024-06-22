import { useState } from 'react';
import styled from 'styled-components';
import { FormInput } from './FormInput';
import { Button } from './Button';

import { Typography } from './Typography';
import { theme } from '../theme/theme';
import { ContactFormDecor } from './svg/ContactFormDecor';

export const ContactUsForm = () => {
  const [isSayHi, setIsSayHi] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledRadioButtonWrapper>
          <StyledRadioButton>
            <StyledInput
              type="radio"
              id="say-hi"
              name="appeal-type"
              value="say-hi"
              checked={isSayHi}
              onChange={() => setIsSayHi(true)}
            />

            <Typography htmlFor="say-hi" label="Say Hi" tag="label" />
          </StyledRadioButton>

          <StyledRadioButton>
            <StyledInput
              type="radio"
              id="get-a-quote"
              name="appeal-type"
              value="get-a-quote"
              onChange={() => setIsSayHi(false)}
            />

            <Typography htmlFor="get-a-quote" label="Get a Quote" tag="label" />
          </StyledRadioButton>
        </StyledRadioButtonWrapper>

        <FormInput label="Name" inputFieldType="text" />

        <FormInput label="Email" inputFieldType="text" isRequired />

        <FormInput label="Message" inputFieldType="textarea" isRequired />

        <Button
          label="Send Message"
          marginTop="15px"
          type="submit"
          backgroundColor={theme.colors.black}
          hoverBackgroundColor={theme.colors.white}
          color={theme.colors.white}
          hoverColor={theme.colors.black}
        />
      </StyledForm>

      <StyledDecorationWrapper>
        <ContactFormDecor />
      </StyledDecorationWrapper>
    </StyledFormWrapper>
  );
};

const StyledFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 60px 100px;
  border-radius: 45px;
  position: relative;
`;

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 25px;
`;

const StyledDecorationWrapper = styled.div`
  position: absolute;
  right: -305px;
  bottom: 0;
  width: 650px;
  height: 690px;
`;

const StyledRadioButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 35px;
  justify-content: start;
`;

const StyledRadioButton = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 15px;
  justify-content: start;

  * {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  position: relative;
  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};

  &:checked::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
  }
`;
