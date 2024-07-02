import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../theme';
import { respondTo } from '../styles/mixins/respondTo';
import { useMediaQuery } from '../hooks/useMediaQuery';

export type SliderItemProps = {
  authorName: string;
  authorPosition: string;
  authorDescription: string;
};

export const SliderItem = (props: SliderItemProps) => {
  const { authorName, authorPosition, authorDescription } = props;

  const isSm = useMediaQuery('sm');

  return (
    <StyledSliderItemWrapper>
      <StyledDescriptionWrapper>
        <Typography
          label={authorDescription}
          fontSize={isSm ? 'sm' : 'xxs'}
          color={theme.colors.white}
        />
      </StyledDescriptionWrapper>

      <StyledNameAndPositionWrapper>
        <Typography
          label={authorName}
          fontWeight={500}
          fontSize={isSm ? 'md' : 'sm'}
          color={theme.colors.green}
        />

        <Typography
          label={authorPosition}
          fontSize={isSm ? 'md' : 'xs'}
          color={theme.colors.white}
        />
      </StyledNameAndPositionWrapper>
    </StyledSliderItemWrapper>
  );
};

const StyledSliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  height: 100%;
  max-width: 38rem;
`;

const StyledDescriptionWrapper = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 45px;
  padding: 3rem 3.25rem;
  flex-grow: 1;

  &:after {
    content: '';
    width: 3rem;
    height: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    border-left: 2px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.dark};
    transform: rotate(-45deg);
    position: absolute;
    bottom: -1.6rem;
    left: 3.75rem;
  }

  ${respondTo('sm')(css`
    padding: 2rem 2.5rem;
  `)}

  ${respondTo('xsm')(css`
    padding: 1rem 1.5rem;
  `)}
`;

const StyledNameAndPositionWrapper = styled.div`
  padding: 0 5rem;

  ${respondTo('sm')(css`
    padding: 0 0 0 3rem;
  `)}
`;
