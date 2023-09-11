import { Checkbox } from '@damaris-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { withDesign } from 'storybook-addon-designs'

const label = "I'm a label text"

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
  argTypes: {
    label: { control: 'text' },

    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    messageStatus: { control: 'text' },
    isSelected: { control: 'boolean' },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Checkbox
      {...props}
      setIsSelected={setIsSelected}
      isSelected={isSelected}
    />
  )
}
const TemplateSelected: ComponentStory<typeof Checkbox> = (props) => {
  const [isSelected, setIsSelected] = useState(true)
  return (
    <Checkbox
      {...props}
      setIsSelected={setIsSelected}
      isSelected={isSelected}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label,
  disabled: false,
  error: false,
}
Default.parameters = {
  chromatic: { disableSnapshot: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6316&t=7NEnaWblc0edEzZC-4',
  },
}

export const Hover = Template.bind({})
Hover.args = {
  label,
  disabled: false,
  error: false,
}
Hover.parameters = {
  pseudo: { hover: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6318&t=7NEnaWblc0edEzZC-4',
  },
}

export const Selected = TemplateSelected.bind({})
Selected.args = {
  label,
  disabled: false,
  error: false,
  isSelected: true,
}
Selected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6323&t=7NEnaWblc0edEzZC-4',
  },
}

export const FlyingFocus = Template.bind({})
FlyingFocus.args = {
  label,
  disabled: false,
  error: false,
  isSelected: true,
}
FlyingFocus.parameters = {
  pseudo: { focusVisible: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6439&t=7NEnaWblc0edEzZC-4',
  },
}

export const Error = Template.bind({})
Error.args = {
  label,
  error: true,
  messageStatus: 'Message error',
}
Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6427&t=7NEnaWblc0edEzZC-4',
  },
}

export const ErrorSelected = TemplateSelected.bind({})
ErrorSelected.args = {
  label,
  error: true,
  messageStatus: 'Message error',
}
ErrorSelected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=2959%3A9224&t=7NEnaWblc0edEzZC-4',
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label,
  disabled: true,
}
Disabled.parameters = {
  chromatic: { disableSnapshot: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6331&t=7NEnaWblc0edEzZC-4',
  },
}

export const DisabledSelected = TemplateSelected.bind({})
DisabledSelected.args = {
  label,
  disabled: true,
  isSelected: true,
}
DisabledSelected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=3154%3A9789&t=7NEnaWblc0edEzZC-4',
  },
}
