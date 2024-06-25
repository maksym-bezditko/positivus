import styled from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme';

export type SliderItemProps = {
  authorName: string;
  authorPosition: string;
  authorDescription: string;
};

export const SliderItem = (props: SliderItemProps) => {
  const { authorName, authorPosition, authorDescription } = props;

  return (
    <StyledSliderItemWrapper>
      <StyledDescriptionWrapper>
        <Typography
          label={authorDescription}
          fontSize="sm"
          color={theme.colors.white}
        />
      </StyledDescriptionWrapper>

      <StyledNameAndPositionWrapper>
        <Typography
          label={authorName}
          fontWeight={500}
          color={theme.colors.green}
        />

        <Typography label={authorPosition} color={theme.colors.white} />
      </StyledNameAndPositionWrapper>
    </StyledSliderItemWrapper>
  );
};

const StyledSliderItemWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 3rem;
  justify-content: space-between;
  align-items: center;

  width: 61.25rem;
`;

const StyledDescriptionWrapper = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 2.875rem;
  padding: 3rem 3.25rem;
  height: 22.5rem;

  &:after {
    content: '';
    width: 3rem;
    height: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    border-left: 2px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.dark};
    transform: rotate(-45deg);
    position: absolute;
    bottom: -1.5rem;
    left: 3.75rem;
  }
`;

const StyledNameAndPositionWrapper = styled.div`
  padding: 0 5rem;
`;
