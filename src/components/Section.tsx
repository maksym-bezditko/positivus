import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme';
import { respondTo } from '../styles/mixins/respondTo';
import { useMediaQuery } from '../hooks/useMediaQuery';

type SectionProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

export const Section = (props: SectionProps) => {
  const { children, description = '', title = '' } = props;

  const isDesktop = useMediaQuery('xl');

  return (
    <StyledSectionWrapper>
      {(description || title) && (
        <StyledHeadingWrapper>
          {title && (
            <Typography
              label={title}
              backgroundColor={theme.colors.green}
              fontSize={isDesktop ? 'xxl' : 'xl'}
              fontWeight={500}
              borderRadius={0.5}
              paddingLeft={0.5}
              paddingRight={0.5}
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

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.5rem;
  align-items: center;
  justify-content: start;

  max-width: 50rem;
  margin-bottom: 5rem;

  ${respondTo('xxl')(css`
    margin-bottom: 3.75rem;
  `)}

  ${respondTo('lg')(css`
    grid-auto-flow: row;
    grid-row-gap: 1.75rem;

    place-items: center;
  `)}
`;
