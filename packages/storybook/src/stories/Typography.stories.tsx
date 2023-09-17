import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider, Flexbox, Typography } from '@damaris-ui/core'
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
    <Flexbox width="calc(100vw - 150px)" alignItems="center" gap="20px" noWrap>
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="highlight" size="lg">
            Highlight L
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 3rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 3.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="highlight" size="md">
            Highlight M
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 2.5rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 3rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="highlight" size="sm">
            Highlight S
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 2.25rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 2.75rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </>
)
export const Headings: ComponentStory<typeof Typography> = () => (
  <>
    <Flexbox width="calc(100vw - 150px)" alignItems="center" gap="20px" noWrap>
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h1">
            Headings H1
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 2rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h2">
            Headings H2
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.75rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h3">
            Headings H3
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h4">
            Headings H4
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h5">
            Headings H5
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="heading" size="h6">
            Headings H6
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 600
          </Typography>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </>
)
export const Paragraph: ComponentStory<typeof Typography> = () => (
  <>
    <Flexbox width="calc(100vw - 150px)" alignItems="center" gap="20px" noWrap>
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="lead" weight="medium">
            Paragraph Lead Medium
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="lead" weight="light">
            Paragraph Lead Light
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.625rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="normal" weight="medium">
            Paragraph Normal Medium
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="normal" weight="light">
            Paragraph Normal Light
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 1rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.5rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="small" weight="medium">
            Paragraph Small Medium
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="small" weight="light">
            Paragraph Small Light
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="tiny" weight="medium">
            Paragraph Tiny Medium
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 500
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider height="10px" color="#ccc" />
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="body" size="tiny" weight="light">
            Paragraph Tiny Light
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 300
          </Typography>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </>
)

export const Buttons: ComponentStory<typeof Typography> = () => (
  <>
    <Flexbox width="calc(100vw - 150px)" alignItems="center" gap="20px" noWrap>
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="button" size="normal" weight="medium">
            Button Bold
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.875rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.25rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 700
          </Typography>
        </Flexbox>
        <Divider height="10px" color="#ccc" />
      </Flexbox>
      <Flexbox
        fullWidth
        flexDirection="row"
        justifyContent="space-between"
        gap="10px"
      >
        <Flexbox>
          <Typography variant="button" size="small" weight="medium">
            Button Tiny Bold
          </Typography>
        </Flexbox>
        <Flexbox flexDirection="row" gap="20px" className="table-view">
          <Typography variant="button" size="small">
            font-size: 0.75rem
          </Typography>

          <Typography variant="button" size="small">
            line-height: 1.125rem
          </Typography>

          <Typography variant="button" size="small">
            font-weight: 700
          </Typography>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  </>
)
