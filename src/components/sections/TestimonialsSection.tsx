import styled from "styled-components";
import { Typography } from "../Typography";
import { Slider } from "../Slider";

export const TestimonialsSection = () => {
  return (
    <StyledTestimonialsSectionWrapper>
      <StyledHeadingWrapper>
        <Typography
          label="Testimonials"
          backgroundColor="#b9ff66"
          fontSize={40}
          fontWeight={500}
          borderRadius={7}
          paddingLeft={7}
          paddingRight={7}
        />

        <Typography
          label="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          fontWeight={300}
          fontSize={18}
        />
      </StyledHeadingWrapper>

			<StyledTestimonialsWrapper>
				<Slider />
			</StyledTestimonialsWrapper>
    </StyledTestimonialsSectionWrapper>
  );
};

const StyledTestimonialsSectionWrapper = styled.section``;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: start;

  max-width: 800px;

  margin-bottom: 80px;
  margin-top: 140px;
`;

const StyledTestimonialsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 30px;

	overflow: hidden;
`;
