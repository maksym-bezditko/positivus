import { LearnMoreIconProps } from "../components/icons/LearnMoreIcon";

export type Service = {
  title: string;
  backgroundColor: string;
  imageSrc: string;
  learnMoreVariant: LearnMoreIconProps["variant"];
  typographyBackgroundColor: string;
};