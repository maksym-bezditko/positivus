import styled from "styled-components";

type ButtonProps = {
  label: string;
  isInverted?: boolean;
  width?: string;
};

export const Button = (props: ButtonProps) => {
  const { label, isInverted = false, width = "auto" } = props;

  return (
    <StyledButton $isInverted={isInverted} $width={width}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $isInverted?: boolean;
  $width?: string;
}>`
  padding: 20px 35px;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  border: 2px solid #000;
  background-color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
  width: ${(props) => props.$width};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
    color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  }
`;
