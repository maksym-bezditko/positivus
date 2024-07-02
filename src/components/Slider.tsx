import styled, { css } from 'styled-components';
import { SliderItem, SliderItemProps } from './SliderItem';
import { default as SlickSlider, Settings } from 'react-slick';
import { respondTo } from '../styles/mixins/respondTo';
import { PaginationStarIcon } from './svg/PaginationStarIcon';
import { useState } from 'react';

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
      "Positivents. We've seen remarkable improvements in our website traffic and customer engagement. Highly recommend!"
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

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const SETTINGS: Settings = {
    customPaging: function (i) {
      return <PaginationStarIcon isFilled={i === slideIndex} />;
    },
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1.4,
    arrows: true,
    centerMode: true,
    beforeChange: (_, next) => setSlideIndex(next)
  };

  return (
    <StyledSliderWrapper>
      <StyledSlider {...SETTINGS}>
        {MOCK_SLIDER_DATA.map((data) => (
          <SliderItem {...data} key={data.authorName} />
        ))}
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

const StyledSlider = styled(SlickSlider)`
  .slick-list {
    margin: 0 -1rem;

    ${respondTo('sm')(css`
      margin: 0 -0.75rem;
    `)}
  }

  .slick-slide > div {
    padding: 0 1rem;

    ${respondTo('sm')(css`
      padding: 0 0.75rem;
    `)}
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .slick-dots {
    position: relative;
    top: 2rem;
  }
`;

const StyledSliderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 2.875rem;
  padding: 4.25rem 0 6rem;

  border: 2px solid ${({ theme }) => theme.colors.green};
`;
