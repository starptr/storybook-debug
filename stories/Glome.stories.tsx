import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "../pages";

const storyConfig = {
  title: "Home",

  component: Home,
} as ComponentMeta<typeof Home>;

export default storyConfig;

export const HomeStory: ComponentStory<typeof Home> = () => <Home />;
