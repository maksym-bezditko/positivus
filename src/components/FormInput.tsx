import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme';
import { respondTo } from '../styles/mixins/respondTo';

type FormInputProps = {
  label: string;
  inputFieldType: 'text' | 'textarea' | 'email';
  isRequired?: boolean;
  withLabel?: boolean;
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  height?: string;
};

export const FormInput = (props: FormInputProps) => {
  const {
    label,
    inputFieldType,
    isRequired,
    withLabel = true,
    borderColor = theme.colors.black,
    backgroundColor = theme.colors.white,
    color = theme.colors.black,
    height = inputFieldType === 'textarea' ? '12.5rem' : 'auto'
  } = props;

  const sharedProps = {
    $borderColor: borderColor,
    $color: color,
    $backgroundColor: backgroundColor,
    $height: height
  };

  return (
    <StyledWrapper>
      {withLabel && (
        <Typography
          label={label + (isRequired ? '*' : '')}
          fontSize="xs"
          lineHeight={2}
        />
      )}

      {inputFieldType === 'text' && (
        <StyledInput
          type="text"
          required={isRequired}
          placeholder={label}
          {...sharedProps}
        />
      )}

      {inputFieldType === 'email' && (
        <StyledInput
          type="email"
          required={isRequired}
          placeholder={label}
          {...sharedProps}
        />
      )}

      {inputFieldType === 'textarea' && (
        <StyledTextarea
          required={isRequired}
          placeholder={label}
          {...sharedProps}
        />
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledInput = styled.input<{
  $borderColor: string;
  $color: string;
  $backgroundColor: string;
  $height: string;
}>`
  border: 1px solid ${({ $borderColor }) => $borderColor};
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  padding: 1rem 1.875rem;
  border-radius: 1rem;
  width: 100%;
  height: ${({ $height }) => $height};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:focus {
    outline: none;
  }

  ${respondTo('lg')(css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
  `)}

  ${respondTo('sm')(css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
  `)}
`;

const StyledTextarea = styled.textarea<{
  $borderColor: string;
  $color: string;
  $backgroundColor: string;
  $height: string;
}>`
  border: 1px solid ${({ $borderColor }) => $borderColor};
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  width: 100%;
  height: ${({ $height }) => $height};
  padding: 1.125rem 1.875rem;
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  resize: none;

  &:focus {
    outline: none;
  }

  ${respondTo('lg')(css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
  `)}

  ${respondTo('sm')(css`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
  `)}
`;
