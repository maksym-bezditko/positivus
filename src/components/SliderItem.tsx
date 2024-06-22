import styled from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme/theme';

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
          fontSize={18}
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
  grid-row-gap: 50px;
  justify-content: space-between;
  align-items: center;

  width: 620px;
`;

const StyledDescriptionWrapper = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 45px;
  padding: 48px 52px;
  height: 240px;

  &:after {
    content: '';
    width: 50px;
    height: 50px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    border-left: 2px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.dark};
    transform: rotate(-45deg);
    position: absolute;
    bottom: -26.5px;
    left: 60px;
  }
`;

const StyledNameAndPositionWrapper = styled.div`
  padding: 0px 80px;
`;
