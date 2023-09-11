import type { Meta, StoryObj } from '@storybook/react'
import { TextField, TextFieldProps, Flexbox } from '@damaris-ui/core'

export default {
  title: 'Form/Text Input',
  component: TextField,
  args: {},
  decorators: [
    (Story) => {
      return <Flexbox>{Story()}</Flexbox>
    },
  ],
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    label: 'Label',
  },
}

export const WithPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: 'cal.com/',
    label: 'Label',
  },
}

export const WithHelperText: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: { label: 'Error message', messageType: 'error' },
  },
}
