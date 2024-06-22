import styled from 'styled-components';
import { theme } from '../theme/theme';

type ButtonProps = {
  label: string;
  width?: string;
  marginTop?: string;
  type?: 'button' | 'submit' | 'reset';
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  withBorder?: boolean;
};

export const Button = (props: ButtonProps) => {
  const {
    label,
    width = 'auto',
    marginTop = '0px',
    type = 'button',
    borderColor = theme.colors.black,
    backgroundColor = theme.colors.white,
    color = theme.colors.black,
    hoverBackgroundColor = theme.colors.black,
    hoverColor = theme.colors.white,
    hoverBorderColor = theme.colors.black,
    withBorder = true
  } = props;

  return (
    <StyledButton
      type={type}
      $width={width}
      $color={color}
      $marginTop={marginTop}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $hoverColor={hoverColor}
      $hoverBorderColor={hoverBorderColor}
      $withBorder={withBorder}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $color: string;
  $borderColor: string;
  $backgroundColor: string;
  $width?: string;
  $marginTop?: string;
  $hoverBackgroundColor?: string;
  $hoverColor?: string;
  $hoverBorderColor?: string;
  $withBorder?: boolean;
}>`
  box-sizing: border-box;

  padding: 20px 35px;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  border: 2px solid ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  width: ${(props) => props.$width};
  margin-top: ${(props) => props.$marginTop};
  cursor: pointer;

  ${(props) => !props.$withBorder && 'border: none;'}

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
    color: ${(props) => props.$hoverColor};
    border-color: ${(props) => props.$hoverBorderColor};

    ${(props) => !props.$withBorder && 'border: none;'}
  }
`;
