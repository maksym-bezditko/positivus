import styled from "styled-components";
import type { WorkingProcessCard as WorkingProcessCardType } from "../../types";
import { WorkingProcessCard } from "../WorkingProcessCard";
import { Typography } from "../Typography";

const WORKING_PROCESSES: WorkingProcessCardType[] = [
  {
    index: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    index: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough research and analysis to understand the market landscape and develop a comprehensive strategy tailored to your business objectives. This includes competitor analysis, market trends, and identifying key opportunities for growth.",
  },
  {
    index: "03",
    title: "Implementation",
    description:
      "In the implementation phase, we execute the strategies developed in the previous stages. Our team works diligently to ensure all aspects of the plan are carried out efficiently, including setting up campaigns, developing content, and integrating necessary tools and technologies.",
  },
  {
    index: "04",
    title: "Monitoring and Optimization",
    description:
      "Once the strategies are implemented, we continuously monitor the performance of all initiatives. We use advanced analytics tools to track key metrics and make data-driven adjustments to optimize results and ensure we are meeting your business goals.",
  },
  {
    index: "05",
    title: "Reporting and Communication",
    description:
      "We provide regular reports to keep you informed about the progress and performance of our efforts. Our transparent communication ensures you are always up-to-date with the latest developments and can make informed decisions based on our insights and recommendations.",
  },
  {
    index: "06",
    title: "Continual Improvement",
    description:
      "Our commitment to excellence means we never stop looking for ways to improve. We continually assess our strategies and processes, seeking feedback and staying abreast of industry trends to ensure we deliver the best possible outcomes for your business.",
  },
];

export const WorkingProcessSection = () => {
  return (
    <StyledWorkingProcessSectionWrapper>
      <StyledHeadingWrapper>
        <Typography
          label="Our Working Process"
          backgroundColor="#b9ff66"
          fontSize={40}
          fontWeight={500}
          borderRadius={7}
          paddingLeft={7}
          paddingRight={7}
        />

        <Typography
          label="Step-by-Step Guide to Achieving Your Business Goals"
          fontWeight={300}
          fontSize={18}
        />
      </StyledHeadingWrapper>

      <StyledWorkingProcessWrapper>
        {WORKING_PROCESSES.map((workingProcess) => (
          <WorkingProcessCard
            key={workingProcess.title}
            index={workingProcess.index}
            title={workingProcess.title}
            description={workingProcess.description}
          />
        ))}
      </StyledWorkingProcessWrapper>
    </StyledWorkingProcessSectionWrapper>
  );
};

const StyledWorkingProcessSectionWrapper = styled.div``;

const StyledHeadingWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  align-items: center;
	justify-content: start;

  max-width: 1000px;

  margin-bottom: 80px;
  margin-top: 140px;
`;

const StyledWorkingProcessWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 30px;
`;
