import { LearnMoreIconProps } from "../components/icons/LearnMoreIcon";

export type Service = {
  title: string;
  backgroundColor: string;
  imageSrc: string;
  learnMoreVariant: LearnMoreIconProps["variant"];
  typographyBackgroundColor: string;
};

export type WorkingProcessCard = {
  title: string;
  description: string;
  index: string;
}

export type TeamMember = {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
}