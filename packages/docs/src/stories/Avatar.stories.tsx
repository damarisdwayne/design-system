import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@damaris-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'http://github.com/damarisdwayne.png',
    alt: 'Dâmaris Dwayne',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WitFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
