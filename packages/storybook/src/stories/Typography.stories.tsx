import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, Divider, Typography } from '@damaris-ui/core'
export default {
  title: 'Molecules/Typography',
  component: Typography,
  parameters: {
    options: {
      showPanel: false,
    },
  },
} as ComponentMeta<typeof Typography>

export const Highlights: ComponentStory<typeof Typography> = () => (
  <>
    <Box width="calc(100vw - 150px)" alignItems="center" gap="20px">
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="highlight" size="lg">
            Highlight L
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 3rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 3.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="highlight" size="md">
            Highlight M
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 2.5rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 3rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="highlight" size="sm">
            Highlight S
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 2.25rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 2.75rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
    </Box>
  </>
)
export const Headings: ComponentStory<typeof Typography> = () => (
  <>
    <Box width="calc(100vw - 150px)" alignItems="center" gap="20px">
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h1">
            Headings H1
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 2rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h2">
            Headings H2
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.75rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h3">
            Headings H3
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h4">
            Headings H4
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h5">
            Headings H5
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="heading" size="h6">
            Headings H6
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Box>
      </Box>
    </Box>
  </>
)
export const Paragraph: ComponentStory<typeof Typography> = () => (
  <>
    <Box width="calc(100vw - 150px)" alignItems="center" gap="20px">
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="lead" weight="medium">
            Paragraph Lead Medium
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="lead" weight="light">
            Paragraph Lead Light
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="normal" weight="medium">
            Paragraph Normal Medium
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="normal" weight="light">
            Paragraph Normal Light
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="small" weight="medium">
            Paragraph Small Medium
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="small" weight="light">
            Paragraph Small Light
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="tiny" weight="medium">
            Paragraph Tiny Medium
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Box>
      </Box>
      <Divider height="10px" color="#ccc" />
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="body" size="tiny" weight="light">
            Paragraph Tiny Light
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Box>
      </Box>
    </Box>
  </>
)

export const Buttons: ComponentStory<typeof Typography> = () => (
  <>
    <Box width="calc(100vw - 150px)" alignItems="center" gap="20px">
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="button" size="normal" weight="medium">
            Button Bold
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 700
          </Typography>
        </Box>
        <Divider height="10px" color="#ccc" />
      </Box>
      <Box
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Box>
          <Typography variant="button" size="small" weight="medium">
            Button Tiny Bold
          </Typography>
        </Box>
        <Box flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 700
          </Typography>
        </Box>
      </Box>
    </Box>
  </>
)
