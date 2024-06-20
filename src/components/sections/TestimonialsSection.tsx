import styled from "styled-components";
import { Slider } from "../Slider";
import { Section } from "../Section";

export const TestimonialsSection = () => {
  return (
    <Section
      title="Testimonials"
      description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
    >
      <StyledTestimonialsWrapper>
        <Slider />
      </StyledTestimonialsWrapper>
    </Section>
  );
};

const StyledTestimonialsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 30px;

  overflow: hidden;
`;
