import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@damaris-ui/core'
import { ArrowRight } from 'phosphor-react'
import { colors } from '@damaris-ui/theme'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'contained',
    disabled: false,
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    bgColor: colors.primary200,
    hoverColor: colors.primary300,
    color: colors.white,
    children: 'Send',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    bgColor: colors.primary200,
    hoverColor: colors.primary300,
    children: 'Create new',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
    bgColor: colors.secondary200,
    hoverColor: colors.secondary300,
    color: colors.white,
    children: 'Create new',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    bgColor: colors.primary200,
    hoverColor: colors.primary300,
    color: colors.white,
    isSmall: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    bgColor: colors.primary200,
    hoverColor: colors.primary300,
    color: colors.white,
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
