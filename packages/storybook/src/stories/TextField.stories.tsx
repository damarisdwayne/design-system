import type { Meta, StoryObj } from '@storybook/react'
import { TextField, TextFieldProps } from '@damaris-ui/core'

export default {
  title: 'Form/Text Input',
  component: TextField,
  args: {},
  decorators: [
    (Story) => {
      return <div>{Story()}</div>
    },
  ],
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
}

export const isValid: StoryObj<TextFieldProps> = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Teste',
    isValid: true,
  },
}

export const WithIcon: StoryObj<TextFieldProps> = {
  args: {
    label: 'Password',
    placeholder: 'Type your password',
    type: 'password',
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

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    label: 'Label',
  },
}
