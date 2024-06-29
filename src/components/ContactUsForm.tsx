import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FormInput } from './FormInput';
import { Button } from './Button';

import { Typography } from './Typography';
import { theme } from '../theme';
import { ContactFormDecor } from './svg/ContactFormDecor';
import { respondTo } from '../styles/mixins/respondTo';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const ContactUsForm = () => {
  const [isSayHi, setIsSayHi] = useState(true);

  const isSm = useMediaQuery('sm');

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

            <Typography
              htmlFor="say-hi"
              label="Say Hi"
              tag="label"
              fontSize={isSm ? 'md' : 'xs'}
            />
          </StyledRadioButton>

          <StyledRadioButton>
            <StyledInput
              type="radio"
              id="get-a-quote"
              name="appeal-type"
              value="get-a-quote"
              onChange={() => setIsSayHi(false)}
            />

            <Typography
              htmlFor="get-a-quote"
              label="Get a Quote"
              tag="label"
              fontSize={isSm ? 'md' : 'xs'}
            />
          </StyledRadioButton>
        </StyledRadioButtonWrapper>

        <FormInput label="Name" inputFieldType="text" />

        <FormInput label="Email" inputFieldType="text" isRequired />

        <FormInput label="Message" inputFieldType="textarea" isRequired />

        <Button
          label="Send Message"
          marginTop="1rem"
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
  padding: 3.75rem 6.25rem;
  border-radius: 2.875rem;
  position: relative;

  ${respondTo('xl')(css`
    grid-template-columns: 3fr 2fr;
    padding: 3.75rem 2.25rem;
  `)}

  ${respondTo('lg')(css`
    grid-template-columns: none;
  `)}

  ${respondTo('sm')(css`
    padding: 2.5rem 1.5rem;
  `)}
`;

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 25px;
`;

const StyledDecorationWrapper = styled.div`
  display: grid;
  align-items: center;

  position: absolute;
  right: -22rem;
  bottom: 0;
  width: 40rem;
  height: 100%;

  ${respondTo('xl')(css`
    width: 20rem;
    right: -2rem;
  `)}

  ${respondTo('lg')(css`
    display: none;
  `)}
`;

const StyledRadioButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.25rem;
  justify-content: start;

  ${respondTo('sm')(css`
    grid-auto-flow: row;
    grid-row-gap: 1rem;
  `)}
`;

const StyledRadioButton = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
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
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
  }
`;
