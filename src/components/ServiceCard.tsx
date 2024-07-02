import styled, { css } from 'styled-components';
import { Typography } from './Typography';
import { LearnMore } from './LearnMore';
import { LearnMoreIconProps } from './svg/LearnMoreIcon';
import { theme } from '../theme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { respondTo } from '../styles/mixins/respondTo';

type ServiceCardProps = {
  serviceText: string;
  serviceTextBackgroundColor: string;
  learnMoreVariant: LearnMoreIconProps['variant'];
  imageSrc: string;
  backgroundColor?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const {
    serviceText,
    serviceTextBackgroundColor,
    learnMoreVariant,
    imageSrc,
    backgroundColor = theme.colors.lightGrey
  } = props;

  const isXXXXL = useMediaQuery('xxxxl');
  const isMD = useMediaQuery('md');

  return (
    <StyledServiceCardWrapper $backgroundColor={backgroundColor}>
      {isMD ? (
        <>
          <StyledDetailWrapper>
            <Typography
              label={serviceText}
              backgroundColor={serviceTextBackgroundColor}
              borderRadius={0.5}
              fontWeight={500}
              fontSize="lg"
              paddingLeft={0.5}
              paddingRight={0.5}
            />

            <LearnMore iconVariant={learnMoreVariant} />
          </StyledDetailWrapper>

          <StyledImageWrapper>
            <StyledImage src={imageSrc} />
          </StyledImageWrapper>
        </>
      ) : (
        <>
          <Typography
            label={serviceText}
            backgroundColor={serviceTextBackgroundColor}
            borderRadius={0.5}
            fontWeight={500}
            fontSize="md"
            paddingLeft={0.5}
            paddingRight={0.5}
          />

          <StyledDetailWrapper>
            <LearnMore iconVariant={learnMoreVariant} withLabel={isMD} />

            <StyledImageWrapper>
              <StyledImage src={imageSrc} />
            </StyledImageWrapper>
          </StyledDetailWrapper>
        </>
      )}
    </StyledServiceCardWrapper>
  );
};

const StyledServiceCardWrapper = styled.div<{
  $backgroundColor: string;
}>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 2rem;

  padding: 3rem;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 2.875rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0 0.25rem 0 ${({ theme }) => theme.colors.black};
  margin-bottom: 0.25rem;

  ${respondTo('md')(css`
    grid-template-columns: none;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
    padding: 1.5rem;
  `)}
`;

const StyledDetailWrapper = styled.div`
  height: 100%;

  display: grid;
  justify-content: space-between;

  ${respondTo('md')(css`
    grid-auto-flow: column;
    align-items: end;
  `)}
`;

const StyledImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  ${respondTo('xxxxl')(css`
    justify-content: end;
    align-items: end;
  `)}
`;

const StyledImage = styled.img`
  max-height: 10.625rem;

  ${respondTo('md')(css`
    max-height: 6em;
  `)}

  ${respondTo('sm')(css`
    max-height: 4em;
  `)}
`;
