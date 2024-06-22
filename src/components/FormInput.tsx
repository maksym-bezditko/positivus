import styled from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme/theme';

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
    height = inputFieldType === 'textarea' ? '200px' : 'auto'
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
          fontSize={16}
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

  padding: 18px 30px;
  border-radius: 15px;
  width: 100%;
  height: ${({ $height }) => $height};
  font-size: 18px;

  &:focus {
    outline: none;
  }
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
  padding: 18px 30px;
  border-radius: 15px;
  font-size: 18px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
