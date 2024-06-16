import styled from "styled-components";

type ButtonProps = {
  label: string;
  isInverted?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { label, isInverted = false } = props;

  return <StyledButton $isInverted={isInverted}>{label}</StyledButton>;
};

const StyledButton = styled.button<{
  $isInverted?: boolean;
}>`
  padding: 20px 35px;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  background-color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
	cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isInverted ? "#000" : "#fff")};
    color: ${(props) => (props.$isInverted ? "#fff" : "#000")};
  }
`;
