import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toggle } from '@damaris-ui/core'
import { useState } from 'react'

const label = "I'm text label"

export default {
  title: 'Form/Toggle',
  component: Toggle,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the toggle',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the toggle is active or not',
    },
    setIsActive: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <Toggle {...props} {...{ isActive, setIsActive }} />
      <br />
      <Toggle {...props} {...{ setIsActive }} isActive={!isActive} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  label,
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11447&t=bP3eZyPpMKfPC9jb-4',
  },
}

export const Error = Template.bind({})
Error.args = {
  label,
  isError: true,
}

Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11476&t=bP3eZyPpMKfPC9jb-4',
  },
}
