import styled from "styled-components";
import { Typography } from "./Typography";

type FormInputProps = {
  label: string;
  inputFieldType: "text" | "textarea";
  isRequired?: boolean;
};

export const FormInput = (props: FormInputProps) => {
  const { label, inputFieldType, isRequired } = props;

  return (
    <StyledWrapper>
      <Typography
        label={label + (isRequired ? "*" : "")}
        fontSize={16}
        lineHeight={2}
      />

      {inputFieldType === "text" && (
        <StyledInput type="text" required={isRequired} placeholder={label} />
      )}

      {inputFieldType === "textarea" && (
        <StyledTextarea required={isRequired} placeholder={label} />
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledInput = styled.input`
  border: 1px solid #000;
  padding: 18px 30px;
  border-radius: 15px;
  width: 100%;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #000;
  padding: 18px 30px;
  border-radius: 15px;
  font-size: 18px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
