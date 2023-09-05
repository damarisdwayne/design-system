import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Paper } from '@damaris-ui/core'
import { withDesign } from 'storybook-addon-designs'
import { FC } from 'react'
import { DialogPlaceholder } from '../placeholders'

const ButtonPlaceholder: FC = () => (
  <>
    <button>Continue</button>
    <button>Cancel</button>
  </>
)

const EndAdornmentPlaceholder: FC = () => <button>Exemplo</button>

export default {
  title: 'Organisms/Paper/Dialog Paper',
  component: Paper,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
  },
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = (props) => {
  const { children } = props
  return (
    <Paper {...props} width="85vw" height="725px" isDialog>
      {children}
    </Paper>
  )
}

export const WithTitleAndActions = Template.bind({})
WithTitleAndActions.args = {
  cardTitleProps: {
    title: 'Wie viel Kapital wollen Sie beziehen?',
    endAdornment: <EndAdornmentPlaceholder />,
  },
  cardActionsProps: {
    children: <ButtonPlaceholder />,
  },
  children: <DialogPlaceholder />,
}
WithTitleAndActions.parameters = {
  chromatic: { disableSnapshot: true },
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  cardTitleProps: {
    title: 'Wie viel Kapital wollen Sie beziehen?',
    endAdornment: <EndAdornmentPlaceholder />,
  },
  children: <DialogPlaceholder />,
}
WithTitle.parameters = {
  chromatic: { disableSnapshot: true },
}
