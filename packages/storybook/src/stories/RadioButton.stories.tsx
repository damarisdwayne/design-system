import { ComponentMeta, ComponentStory } from '@storybook/react'
import { RadioButton, Flexbox } from '@damaris-ui/core'
import { withDesign } from 'storybook-addon-designs'
import { useState } from 'react'

const label = "I'm a label text"

export default {
  title: 'Form/Radio',
  component: RadioButton,
  decorators: [withDesign],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    messageStatus: { control: 'string' },
    isSelected: { control: 'boolean' },
  },
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (props) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <Flexbox>
      <RadioButton
        {...props}
        isSelected={props.isSelected ? props.isSelected : isSelected}
        setIsSelected={setIsSelected}
      />
    </Flexbox>
  )
}

export const Default = Template.bind({})
Default.args = {
  label,
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6519&t=QnVI0hbgOhxtClJ4-4',
  },
}

export const Hover = Template.bind({})
Hover.args = {
  label,
}
Hover.parameters = {
  pseudo: { hover: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6528&t=QnVI0hbgOhxtClJ4-4',
  },
}

export const Selected = Template.bind({})
Selected.args = {
  label,
  isSelected: true,
}
Selected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6543&t=QnVI0hbgOhxtClJ4-4',
  },
}

export const FlyingFocus = Template.bind({})
FlyingFocus.args = {
  label,
}
FlyingFocus.parameters = {
  pseudo: { focusVisible: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6571&t=QnVI0hbgOhxtClJ4-4',
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
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6584&t=QnVI0hbgOhxtClJ4-4',
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label,
  disabled: true,
}
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=724%3A6597&t=QnVI0hbgOhxtClJ4-4',
  },
}
