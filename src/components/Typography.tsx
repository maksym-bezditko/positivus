import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme/theme';

type TypographyProps = {
  label: string;
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'label';
  href?: string;
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
  isEmail?: boolean;
  isPhone?: boolean;
  isUnderlined?: boolean;
  underlineHeight?: number;
};

export const Typography = (props: TypographyProps) => {
  const {
    label,
    htmlFor,
    href,
    tag = 'p',
    lineHeight = 1.4,
    fontSize = 20,
    fontWeight = 400,
    color = theme.colors.black,
    backgroundColor = theme.colors.transparent,
    borderRadius = 0,
    paddingTop = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    isEmail = false,
    isPhone = false,
    isUnderlined = false,
    underlineHeight = 2
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
      $isUnderlined: isUnderlined,
      $underlineHeight: underlineHeight
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
      isUnderlined,
      underlineHeight
    ]
  );

  if (isEmail) {
    return (
      <StyledP {...sharedProps}>
        <StyledAnchor {...sharedProps} href={`mailto:${label}`}>
          Email: {label}
        </StyledAnchor>
      </StyledP>
    );
  }

  if (isPhone) {
    return (
      <StyledAnchor {...sharedProps} href={`tel:${label}`}>
        Phone: {label}
      </StyledAnchor>
    );
  }

  if (href) {
    return (
      <StyledAnchor {...sharedProps} href={href}>
        {label}
      </StyledAnchor>
    );
  }

  switch (tag) {
    case 'p':
      return <StyledP {...sharedProps}>{label}</StyledP>;
    case 'span':
      return <StyledSpan {...sharedProps}>{label}</StyledSpan>;
    case 'h1':
      return <StyledH1 {...sharedProps}>{label}</StyledH1>;
    case 'h2':
      return <StyledH2 {...sharedProps}>{label}</StyledH2>;
    case 'h3':
      return <StyledH3 {...sharedProps}>{label}</StyledH3>;
    case 'label':
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
  $isUnderlined: boolean;
  $underlineHeight: number;
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

  ${(props) =>
    props.$isUnderlined &&
    `
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: ${props.$underlineHeight}px;
      background-color: ${props.$color};
    }
  `}
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

const StyledAnchor = styled.a<SharedTypographyProps>`
  display: inline;
  text-decoration: none;

  ${StyledTypography}
`;
