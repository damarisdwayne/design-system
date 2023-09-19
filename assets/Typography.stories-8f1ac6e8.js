var p=Object.defineProperty;var o=(l,h)=>p(l,"name",{value:h,configurable:!0});import{T as e,B as i,D as a}from"./index-b8c7144b.js";import{j as n,F as r,a as t}from"./jsx-runtime-e9f03922.js";import"./index-c6088c1f.js";import"./iframe-2218f101.js";const m={title:"Molecules/Typography",component:e,parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{highlights:{startLoc:{col:61,line:13},endLoc:{col:1,line:95},startBody:{col:61,line:13},endBody:{col:1,line:95}},headings:{startLoc:{col:59,line:96},endLoc:{col:1,line:256},startBody:{col:59,line:96},endBody:{col:1,line:256}},paragraph:{startLoc:{col:60,line:257},endLoc:{col:1,line:469},startBody:{col:60,line:257},endBody:{col:1,line:469}},buttons:{startLoc:{col:58,line:471},endLoc:{col:1,line:527},startBody:{col:58,line:471},endBody:{col:1,line:527}}}},options:{showPanel:!1}}},d=o(()=>n(r,{children:t(i,{width:"calc(100vw - 150px)",alignItems:"center",gap:"20px",children:[t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"highlight",size:"lg",children:"Highlight L"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 3rem"}),n(e,{variant:"button",size:"small",children:"line-height: 3.5rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"highlight",size:"md",children:"Highlight M"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 2.5rem"}),n(e,{variant:"button",size:"small",children:"line-height: 3rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"highlight",size:"sm",children:"Highlight S"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 2.25rem"}),n(e,{variant:"button",size:"small",children:"line-height: 2.75rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]})]})}),"Highlights"),u=o(()=>n(r,{children:t(i,{width:"calc(100vw - 150px)",alignItems:"center",gap:"20px",children:[t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h1",children:"Headings H1"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1.5rem"}),n(e,{variant:"button",size:"small",children:"line-height: 2rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h2",children:"Headings H2"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1.25rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.75rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h3",children:"Headings H3"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1.125rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.625rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h4",children:"Headings H4"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.5rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h5",children:"Headings H5"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.875rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.25rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"heading",size:"h6",children:"Headings H6"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.75rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.125rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 600"})]})]})]})}),"Headings"),f=o(()=>n(r,{children:t(i,{width:"calc(100vw - 150px)",alignItems:"center",gap:"20px",children:[t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"lead",weight:"medium",children:"Paragraph Lead Medium"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1.125rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.625rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 500"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"lead",weight:"light",children:"Paragraph Lead Light"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1.125rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.625rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 300"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"normal",weight:"medium",children:"Paragraph Normal Medium"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.5rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 500"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"normal",weight:"light",children:"Paragraph Normal Light"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 1rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.5rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 300"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"small",weight:"medium",children:"Paragraph Small Medium"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.875rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.25rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 500"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"small",weight:"light",children:"Paragraph Small Light"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.875rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.25rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 300"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"tiny",weight:"medium",children:"Paragraph Tiny Medium"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.75rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.125rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 500"})]})]}),n(a,{height:"10px",color:"#ccc"}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"body",size:"tiny",weight:"light",children:"Paragraph Tiny Light"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.75rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.125rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 300"})]})]})]})}),"Paragraph"),w=o(()=>n(r,{children:t(i,{width:"calc(100vw - 150px)",alignItems:"center",gap:"20px",children:[t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"button",size:"normal",weight:"medium",children:"Button Bold"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.875rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.25rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 700"})]}),n(a,{height:"10px",color:"#ccc"})]}),t(i,{fullWidth:!0,flexDirection:"row",justifyContent:"space-between",gap:"10px",children:[n(i,{children:n(e,{variant:"button",size:"small",weight:"medium",children:"Button Tiny Bold"})}),t(i,{flexDirection:"row",gap:"20px",className:"table-view",children:[n(e,{variant:"button",size:"small",children:"font-size: 0.75rem"}),n(e,{variant:"button",size:"small",children:"line-height: 1.125rem"}),n(e,{variant:"button",size:"small",children:"font-weight: 700"})]})]})]})}),"Buttons"),v=["Highlights","Headings","Paragraph","Buttons"];export{w as Buttons,u as Headings,d as Highlights,f as Paragraph,v as __namedExportsOrder,m as default};
//# sourceMappingURL=Typography.stories-8f1ac6e8.js.map
