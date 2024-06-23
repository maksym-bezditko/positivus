import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme/theme';

type SectionProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

export const Section = (props: SectionProps) => {
  const { children, description = '', title = '' } = props;

  return (
    <StyledSectionWrapper>
      {(description || title) && (
        <StyledHeadingWrapper>
          {title && (
            <Typography
              label={title}
              backgroundColor={theme.colors.green}
              fontSize="xxl"
              fontWeight={500}
              borderRadius={0.5}
              paddingLeft={0.5}
              paddingRight={0.5}
            />
          )}

          {description && (
            <Typography label={description} fontWeight={300} fontSize="sm" />
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
`;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.5rem;
  align-items: center;
  justify-content: start;

  max-width: 50rem;

  margin-bottom: 3rem;
`;
