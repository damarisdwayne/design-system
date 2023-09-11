import { Paper } from '@damaris-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PaperPlaceholder } from '../placeholders'

export default {
  title: 'Organisms/Default Paper',
  component: Paper,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    bgColor: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
    isBlurred: { control: 'boolean' },
    fadeIn: { control: 'boolean' },
    noBg: { control: 'boolean' },
    noPadding: { control: 'boolean' },
    noShadow: { control: 'boolean' },
    noRound: { control: 'boolean' },
    withHover: { control: 'boolean' },
    alignItems: {
      control: 'inline-radio',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    justifyContent: {
      control: 'inline-radio',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    flexDirection: {
      control: 'inline-radio',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    padding: {
      control: 'inline-radio',
      options: ['lg', 'md', 'sm'],
    },
  },
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = (props) => {
  const { children } = props
  return <Paper {...props}>{children}</Paper>
}

export const Default = Template.bind({})
Default.args = {
  alignItems: 'flex-start',
  children: <PaperPlaceholder />,
}
Default.parameters = {
  chromatic: { disableSnapshot: true },
}

export const Blurred = Template.bind({})
Blurred.args = {
  isBlurred: true,
  noShadow: true,
  children: <PaperPlaceholder />,
}
Blurred.parameters = {
  chromatic: { disableSnapshot: true },
}

export const Animated = Template.bind({})
Animated.args = {
  fadeIn: true,
  children: <PaperPlaceholder />,
}
Animated.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithBGColor = Template.bind({})
WithBGColor.args = {
  bgColor: '#d9f3de',
  noBg: false,
  children: <PaperPlaceholder />,
}
WithBGColor.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithoutBorderRadius = Template.bind({})
WithoutBorderRadius.args = {
  noRound: true,
  children: <PaperPlaceholder />,
}
WithoutBorderRadius.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithoutBoxShadow = Template.bind({})
WithoutBoxShadow.args = {
  noShadow: true,
  children: <PaperPlaceholder />,
}
WithoutBoxShadow.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithoutBackground = Template.bind({})
WithoutBackground.args = {
  noBg: true,
  children: <PaperPlaceholder />,
}
WithoutBackground.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithHover = Template.bind({})
WithHover.args = {
  withHover: true,
  children: <PaperPlaceholder />,
}
WithHover.parameters = {
  chromatic: { disableSnapshot: true },
}
