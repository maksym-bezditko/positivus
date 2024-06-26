import styled from 'styled-components';

import { LearnMoreIcon, type LearnMoreIconProps } from './svg/LearnMoreIcon';
import { Typography } from './Typography';
import { theme } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';

type LearnMoreProps = {
  iconVariant: LearnMoreIconProps['variant'];
  typographyColor?: string;
  arrowPosition?: 'left' | 'right';
  withLabel?: boolean;
};

const mapVariantToTypographyColor = (
  iconVariant: LearnMoreIconProps['variant']
) => {
  switch (iconVariant) {
    case 'sepia':
      return theme.colors.white;
    case 'green':
      return theme.colors.green;
    default:
      return theme.colors.black;
  }
};

export const LearnMore = (props: LearnMoreProps) => {
  const {
    iconVariant,
    typographyColor = mapVariantToTypographyColor(iconVariant),
    arrowPosition = 'left',
    withLabel = true
  } = props;

  const isSm = useMediaQuery('sm');

  return (
    <StyledLearnMoreWrapper>
      {arrowPosition === 'left' && <LearnMoreIcon variant={iconVariant} />}

      {withLabel && (
        <Typography
          label="Learn more"
          color={typographyColor}
          fontSize={isSm ? 'md' : 'xs'}
        />
      )}

      {arrowPosition === 'right' && <LearnMoreIcon variant={iconVariant} />}
    </StyledLearnMoreWrapper>
  );
};

const StyledLearnMoreWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  align-items: center;
  justify-content: start;

  cursor: pointer;
`;
