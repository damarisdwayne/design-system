import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider } from '@damaris-ui/core'

export default {
  title: 'Molecules/Divider',
  component: Divider,
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    noBorder: {
      control: { type: 'boolean' },
    },
    borderColor: {
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (props) => {
  return (
    <div>
      <Divider
        {...props}
        width={`${props.width ?? 450}px`}
        height={`${props.height ?? 5}px`}
      />
      <Divider
        {...props}
        width={`${props.width ?? 450}px`}
        height={`${props.height ?? 5}px`}
      />
      <Divider
        {...props}
        width={`${props.width ?? 450}px`}
        height={`${props.height ?? 5}px`}
      />
    </div>
  )
}

export const WithoutBorder = Template.bind({})
WithoutBorder.args = {
  noBorder: true,
}

export const WithHeight = Template.bind({})
WithHeight.args = {
  height: '40',
}

export const WithWidth = Template.bind({})
WithWidth.args = {
  height: '40',
  width: '50',
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  height: '40',
  borderColor: 'red',
}
