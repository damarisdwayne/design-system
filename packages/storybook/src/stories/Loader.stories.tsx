import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, Loader, Typography } from '@damaris-ui/core'
import { DialogPlaceholder } from '../placeholders'

export default {
  title: 'Molecules/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

export const WithOverlay: ComponentStory<typeof Loader> = () => {
  return (
    <Box fullScreen customStyles={{ padding: '2rem' }}>
      <DialogPlaceholder />
      <Loader size="25px" />
    </Box>
  )
}
export const Boxed: ComponentStory<typeof Loader> = () => {
  return (
    <Box fullScreen>
      <DialogPlaceholder />
      <Box
        width="300px"
        height="200px"
        justifyContent="center"
        alignItems="center"
        customStyles={{
          border: '1px solid black',
        }}
      >
        <Loader boxed size="25px" />
      </Box>
    </Box>
  )
}
export const Standalone: ComponentStory<typeof Loader> = () => {
  return (
    <Box fullScreen flexDirection="row" gap="8px" justifyContent="center">
      <Typography>Standalone with no margin or positioning</Typography>
      <Loader standalone size="25px" />
    </Box>
  )
}

// export const InsideButton: ComponentStory<typeof Loader> = () => {
//   return <Button isLoading>loading button</Button>
// }
