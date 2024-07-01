import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme';
import { respondTo } from '../styles/mixins/respondTo';
import { useMediaQuery } from '../hooks/useMediaQuery';

type SectionProps = PropsWithChildren<{
  title?: string;
  description?: string;
  withOverflowContent?: boolean;
}>;

export const Section = (props: SectionProps) => {
  const {
    children,
    description = '',
    title = '',
    withOverflowContent = false
  } = props;

  const isDesktop = useMediaQuery('lg');

  return (
    <StyledSectionWrapper>
      {(description || title) && (
        <StyledHeadingWrapper $withOverflowContent={withOverflowContent}>
          {title && (
            <Typography
              label={title}
              backgroundColor={theme.colors.green}
              fontSize={isDesktop ? 'xxl' : 'xl'}
              fontWeight={500}
              borderRadius={0.5}
              paddingLeft={0.5}
              paddingRight={0.5}
              textAlign={'center'}
            />
          )}

          {description && (
            <Typography
              label={description}
              fontWeight={300}
              fontSize="sm"
              textAlign={isDesktop ? 'left' : 'center'}
            />
          )}
        </StyledHeadingWrapper>
      )}

      {children}
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled.section`
  overflow-x: hidden;
  margin-top: 8.75rem;

  ${respondTo('lg')(css`
    margin-top: 3.75rem;
  `)}
`;

const StyledHeadingWrapper = styled.div<{
  $withOverflowContent: boolean;
}>`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.5rem;
  align-items: center;
  justify-content: center;

  max-width: 50rem;
  margin-bottom: 5rem;

  ${({ $withOverflowContent }) =>
    $withOverflowContent &&
    css`
      ${respondTo('lg')(css`
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      `)}

      ${respondTo('sm')(css`
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      `)}
    `}

  ${respondTo('xxl')(css`
    margin-bottom: 3.75rem;
  `)}

  ${respondTo('lg')(css`
    grid-auto-flow: row;
    grid-row-gap: 1.75rem;

    place-items: center;
  `)}
`;
