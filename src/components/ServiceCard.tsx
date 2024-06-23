import styled from 'styled-components';
import { Typography } from './Typography';
import { LearnMore } from './LearnMore';
import { LearnMoreIconProps } from './svg/LearnMoreIcon';
import { theme } from '../theme/theme';

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

  return (
    <StyledServiceCardWrapper $backgroundColor={backgroundColor}>
      <StyledDetailWrapper>
        <Typography
          label={serviceText}
          backgroundColor={serviceTextBackgroundColor}
          borderRadius={0.5}
          fontWeight={500}
          fontSize="xl"
          paddingLeft={0.5}
          paddingRight={0.5}
        />

        <LearnMore iconVariant={learnMoreVariant} />
      </StyledDetailWrapper>

      <StyledImageWrapper>
        <StyledImage src={imageSrc} />
      </StyledImageWrapper>
    </StyledServiceCardWrapper>
  );
};

const StyledServiceCardWrapper = styled.div<{
  $backgroundColor: string;
}>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 3rem;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 2.875rem;
  min-height: 19.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0 0.25rem 0 ${({ theme }) => theme.colors.black};
  margin-bottom: 0.25rem;
`;

const StyledDetailWrapper = styled.div`
  height: 100%;

  display: grid;
  justify-content: space-between;
`;

const StyledImageWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const StyledImage = styled.img`
  max-height: 10.625rem;
`;
