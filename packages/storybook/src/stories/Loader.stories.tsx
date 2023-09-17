import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Loader, Paper, Typography } from '@damaris-ui/core'
import { DialogPlaceholder } from '../placeholders'

export default {
  title: 'Molecules/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

export const WithOverlay: ComponentStory<typeof Loader> = () => {
  return (
    <Paper noBg fullScreen customStyles={{ padding: '2rem' }}>
      <DialogPlaceholder />
      <Loader size="25px" />
    </Paper>
  )
}
export const Boxed: ComponentStory<typeof Loader> = () => {
  return (
    <Paper noBg fullScreen>
      <DialogPlaceholder />
      <Paper
        noBg
        width="300px"
        height="200px"
        justifyContent="center"
        alignItems="center"
        customStyles={{
          border: '1px solid black',
        }}
      >
        <Loader boxed size="25px" />
      </Paper>
    </Paper>
  )
}
export const Standalone: ComponentStory<typeof Loader> = () => {
  return (
    <Paper
      noBg
      fullScreen
      flexDirection="row"
      gap="8px"
      justifyContent="center"
    >
      <Typography>Standalone with no margin or positioning</Typography>
      <Loader standalone size="25px" />
    </Paper>
  )
}

// export const InsideButton: ComponentStory<typeof Loader> = () => {
//   return <Button isLoading>loading button</Button>
// }
