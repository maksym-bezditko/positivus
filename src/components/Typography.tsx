import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { CustomTheme, theme } from '../theme';

type TypographyProps = {
  label: string;
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'label';
  href?: string;
  lineHeight?: number;
  fontSize?: keyof CustomTheme['fontSizes'];
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
  textAlign?: 'left' | 'center' | 'right';
};

export const Typography = (props: TypographyProps) => {
  const {
    label,
    htmlFor,
    href,
    tag = 'p',
    lineHeight = 1.4,
    fontSize = 'md',
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
    underlineHeight = 2,
    textAlign = 'left'
  } = props;

  const sharedProps = useMemo(
    () => ({
      $fontSize: theme.fontSizes[fontSize],
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
      $underlineHeight: underlineHeight,
      $textAlign: textAlign
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
      underlineHeight,
      textAlign
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
  $fontSize: string;
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
  $textAlign: TypographyProps['textAlign'];
};

const StyledTypography = css<SharedTypographyProps>`
  display: grid;
  place-items: center;
  width: fit-content;
  height: fit-content;

  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius}rem;
  text-align: ${(props) => props.$textAlign};

  padding-top: ${(props) => props.$paddingTop}rem;
  padding-bottom: ${(props) => props.$paddingBottom}rem;
  padding-left: ${(props) => props.$paddingLeft}rem;
  padding-right: ${(props) => props.$paddingRight}rem;

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
