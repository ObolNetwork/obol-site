import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "./Navbar";

export default {
  title: "Molecules/NavBar",
  component: Navbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<any> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
