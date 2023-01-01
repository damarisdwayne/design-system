import type { StoryObj, Meta } from '@storybook/react'

import { Heading, TextProps } from '@damaris-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example title',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
