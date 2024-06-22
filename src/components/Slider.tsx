import styled from 'styled-components';
import { LeftArrowIcon } from './svg/LeftArrowIcon';
import { RightArrowIcon } from './svg/RightArrowIcon';
import { PaginationStarIcon } from './svg/PaginationStarIcon';
import { useState } from 'react';
import { SliderItem, SliderItemProps } from './SliderItem';

const MOCK_SLIDER_DATA: SliderItemProps[] = [
  {
    authorName: 'John Smith',
    authorPosition: 'Marketing Director at XYZ Corp',
    authorDescription:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
  },
  {
    authorName: 'Jane Doe',
    authorPosition: 'CEO at ABC Inc',
    authorDescription:
      "Positivus has completely transformed our online presence. Their team is knowledgeable, attentive, and truly dedicated to their clients. We've seen remarkable improvements in our website traffic and customer engagement. Highly recommend!"
  },
  {
    authorName: 'Michael Brown',
    authorPosition: 'CTO at Tech Solutions',
    authorDescription:
      "Working with Positivus has been a game-changer for our business. Their expertise in digital marketing and SEO has significantly boosted our online visibility. They are professional, responsive, and always go the extra mile. We couldn't be happier with the results."
  },
  {
    authorName: 'Emily White',
    authorPosition: 'Head of Sales at Global Enterprises',
    authorDescription:
      'The team at Positivus is fantastic. Their innovative strategies and personalized approach have helped us achieve our business goals. They are always available to provide support and guidance. I highly recommend their services.'
  },
  {
    authorName: 'David Green',
    authorPosition: 'Founder at Startup Hub',
    authorDescription:
      'Positivus has been instrumental in our growth. Their deep understanding of digital marketing and commitment to excellence have made a significant impact on our business. We appreciate their hard work and dedication. Highly recommended!'
  }
];

const INITIAL_SLIDER_INDEX =
  MOCK_SLIDER_DATA.length % 2 === 0
    ? 0
    : Math.ceil(MOCK_SLIDER_DATA.length / 2) - 1;

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(INITIAL_SLIDER_INDEX);

  const handleGoForth = () => {
    if (sliderIndex < MOCK_SLIDER_DATA.length - 1) {
      setSliderIndex((prev) => prev + 1);
    }
  };

  const handleGoBack = () => {
    if (sliderIndex > 0) {
      setSliderIndex((prev) => prev - 1);
    }
  };

  const isGoForthActive = sliderIndex < MOCK_SLIDER_DATA.length - 1;
  const isGoBackActive = sliderIndex > 0;

  return (
    <StyledSliderWrapper>
      <StyledSliderItemsWrapper>
        <StyledSliderOverlay $sliderIndex={sliderIndex}>
          {MOCK_SLIDER_DATA.map((data) => (
            <StyledSliderItemWrapper key={data.authorName}>
              <SliderItem {...data} />
            </StyledSliderItemWrapper>
          ))}
        </StyledSliderOverlay>
      </StyledSliderItemsWrapper>

      <StyledPaginationWrapper>
        <StyledPagination>
          <StyledPaginationButtonWrapper
            $isActive={isGoBackActive}
            onClick={handleGoBack}
          >
            <LeftArrowIcon isFilled={isGoBackActive} />
          </StyledPaginationButtonWrapper>

          <StyledIndicatorsWrapper>
            {MOCK_SLIDER_DATA.map((_, index) => (
              <PaginationStarIcon
                key={index}
                isFilled={index === sliderIndex}
              />
            ))}
          </StyledIndicatorsWrapper>

          <StyledPaginationButtonWrapper
            $isActive={isGoForthActive}
            onClick={handleGoForth}
          >
            <RightArrowIcon isFilled={isGoForthActive} />
          </StyledPaginationButtonWrapper>
        </StyledPagination>
      </StyledPaginationWrapper>
    </StyledSliderWrapper>
  );
};

const StyledPaginationWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;

  max-width: 100%;
`;

const StyledSliderWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 120px;
  justify-content: center;
  align-items: end;

  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 45px;
  padding: 85px 0px 65px;

  * {
    user-select: none;
  }
`;

const StyledPagination = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  width: 560px;
`;

const StyledIndicatorsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 20px;
  align-items: center;
`;

const StyledPaginationButtonWrapper = styled.div<{
  $isActive: boolean;
}>`
  display: grid;
  align-items: end;

  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;

const StyledSliderItemsWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const StyledSliderOverlay = styled.div<{
  $sliderIndex: number;
}>`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 50px;

  position: relative;
  transform: translateX(
    calc(50% - ${({ $sliderIndex }) => $sliderIndex * 670}px)
  );
  transition: all 0.4s ease-in-out;
`;

const StyledSliderItemWrapper = styled.div`
  position: relative;
  left: -50%;
`;
