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
              fontSize={40}
              fontWeight={500}
              borderRadius={7}
              paddingLeft={7}
              paddingRight={7}
            />
          )}

          {description && (
            <Typography label={description} fontWeight={300} fontSize={18} />
          )}
        </StyledHeadingWrapper>
      )}

      {children}
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled.section`
  overflow-x: hidden;
  margin-top: 140px;
`;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: start;

  max-width: 800px;

  margin-bottom: 80px;
`;
