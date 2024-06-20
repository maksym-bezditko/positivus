import styled from "styled-components";

type ButtonProps = {
  label: string;
  isInverted?: boolean;
  width?: string;
  marginTop?: string;
  type?: "button" | "submit" | "reset";
};

export const Button = (props: ButtonProps) => {
  const {
    label,
    isInverted = false,
    width = "auto",
    marginTop = "0px",
    type = "button",
  } = props;

  return (
    <StyledButton
      $isInverted={isInverted}
      $width={width}
      $marginTop={marginTop}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $isInverted?: boolean;
  $width?: string;
  $marginTop?: string;
}>`
  padding: 20px 35px;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  border: 2px solid #000;
  background-color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
  width: ${(props) => props.$width};
  margin-top: ${(props) => props.$marginTop};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
    color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  }
`;
