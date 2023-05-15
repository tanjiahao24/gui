import { StoryFn, Meta } from "@storybook/react";
import Button from "./button";

export default {
  title: "gui/Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Large Button",
};
export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Small Button",
};
export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  children: "Primary Button",
};
export const Danger = Template.bind({});
Danger.args = {
  btnType: "danger",
  children: "Danger Button",
};
export const Link = Template.bind({});
Link.args = {
  btnType: "link",
  children: "Link Button",
  href: "https://baidu.com",
};
