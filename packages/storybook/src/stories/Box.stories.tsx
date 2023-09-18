import { Box } from "@damaris-ui/core";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { BoxPlaceholder } from "../placeholders";

export default {
  title: "Organisms/Box",
  component: Box,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    bgColor: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    isBlurred: { control: "boolean" },
    fadeIn: { control: "boolean" },
    withBg: { control: "boolean" },
    withPadding: { control: "boolean" },
    withShadow: { control: "boolean" },
    withRound: { control: "boolean" },
    withHover: { control: "boolean" },
    alignItems: {
      control: "inline-radio",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    justifyContent: {
      control: "inline-radio",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    flexDirection: {
      control: "inline-radio",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    padding: {
      control: "inline-radio",
      options: ["lg", "md", "sm"],
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (props) => {
  const { children } = props;
  return (
    <Box withBg={false} flexDirection="column" {...props}>
      {children}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  alignItems: "flex-start",
  withRound: true,
  withPadding: true,
  children: <BoxPlaceholder />,
};
Default.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Blurred = Template.bind({});
Blurred.args = {
  isBlurred: true,
  withShadow: true,
  children: <BoxPlaceholder />,
};
Blurred.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Animated = Template.bind({});
Animated.args = {
  fadeIn: true,
  children: <BoxPlaceholder />,
};
Animated.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithBGColor = Template.bind({});
WithBGColor.args = {
  bgColor: "#d9f3de",
  withBg: true,
  children: <BoxPlaceholder />,
};
WithBGColor.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithHover = Template.bind({});
WithHover.args = {
  withHover: true,
  children: <BoxPlaceholder />,
};
WithHover.parameters = {
  chromatic: { disableSnapshot: true },
};
