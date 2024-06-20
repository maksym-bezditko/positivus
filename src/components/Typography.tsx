import { useMemo } from "react";
import styled, { css } from "styled-components";

type TypographyProps = {
  label: string;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "label";
  lineHeight?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  backgroundColor?: string;
  borderRadius?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  htmlFor?: string;
};

export const Typography = (props: TypographyProps) => {
  const {
    label,
    tag = "p",
    lineHeight = 1.4,
    fontSize = 20,
    fontWeight = 400,
    color = "#000",
    backgroundColor = "transparent",
    borderRadius = 0,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    htmlFor,
  } = props;

  const sharedProps = useMemo(
    () => ({
      $fontSize: fontSize,
      $fontWeight: fontWeight,
      $lineHeight: lineHeight,
      $color: color,
      $backgroundColor: backgroundColor,
      $borderRadius: borderRadius,
      $paddingTop: paddingTop,
      $paddingBottom: paddingBottom,
      $paddingLeft: paddingLeft,
      $paddingRight: paddingRight,
    }),
    [
      backgroundColor,
      borderRadius,
      color,
      fontSize,
      fontWeight,
      lineHeight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
    ]
  );

  switch (tag) {
    case "p":
      return <StyledP {...sharedProps}>{label}</StyledP>;
    case "span":
      return <StyledSpan {...sharedProps}>{label}</StyledSpan>;
    case "h1":
      return <StyledH1 {...sharedProps}>{label}</StyledH1>;
    case "h2":
      return <StyledH2 {...sharedProps}>{label}</StyledH2>;
    case "h3":
      return <StyledH3 {...sharedProps}>{label}</StyledH3>;
    case "label":
      return (
        <StyledLabel {...sharedProps} htmlFor={htmlFor}>
          {label}
        </StyledLabel>
      );
    default:
      return <StyledP {...sharedProps}>{label}</StyledP>;
  }
};

type SharedTypographyProps = {
  $fontSize: number;
  $fontWeight: number;
  $lineHeight: number;
  $backgroundColor: string;
  $color: string;
  $borderRadius: number;
  $paddingTop: number;
  $paddingBottom: number;
  $paddingLeft: number;
  $paddingRight: number;
};

const StyledTypography = css<SharedTypographyProps>`
  display: grid;
  place-items: center;
  width: fit-content;
  height: fit-content;

  font-size: ${(props) => props.$fontSize}px;
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius}px;

  padding-top: ${(props) => props.$paddingTop}px;
  padding-bottom: ${(props) => props.$paddingBottom}px;
  padding-left: ${(props) => props.$paddingLeft}px;
  padding-right: ${(props) => props.$paddingRight}px;
`;

const StyledP = styled.p<SharedTypographyProps>`
  ${StyledTypography}
`;

const StyledSpan = styled.span<SharedTypographyProps>`
  ${StyledTypography}
`;

const StyledH1 = styled.h1<SharedTypographyProps>`
  ${StyledTypography}
`;

const StyledH2 = styled.h2<SharedTypographyProps>`
  ${StyledTypography}
`;

const StyledH3 = styled.h3<SharedTypographyProps>`
  ${StyledTypography}
`;

const StyledLabel = styled.label<SharedTypographyProps>`
  ${StyledTypography}
`;
