var s=Object.defineProperty;var o=(i,d)=>s(i,"name",{value:d,configurable:!0});import{B as n,T as l,L as t}from"./index-b8c7144b.js";import{j as e,a as r}from"./jsx-runtime-e9f03922.js";import"./index-c6088c1f.js";import"./iframe-2218f101.js";const a=o(()=>e(n,{minimal:!0,fullWidth:!0,alignItems:"center",children:e(n,{minimal:!0,alignItems:"flex-start",justifyContent:"flex-start",customStyles:{width:500},noPadding:!0,children:e(l,{variant:"heading",as:"h6",gutterVertical:"16px",children:"Per 31.01.2043 Pensionierung 100%"})})}),"DialogPlaceholder"),y={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"with-overlay":{startLoc:{col:58,line:10},endLoc:{col:1,line:17},startBody:{col:58,line:10},endBody:{col:1,line:17}},boxed:{startLoc:{col:52,line:18},endLoc:{col:1,line:35},startBody:{col:52,line:18},endBody:{col:1,line:35}},standalone:{startLoc:{col:57,line:36},endLoc:{col:1,line:43},startBody:{col:57,line:36},endBody:{col:1,line:43}}}}},title:"Molecules/Loader",component:t},h=o(()=>r(n,{fullScreen:!0,customStyles:{padding:"2rem"},children:[e(a,{}),e(t,{size:"25px"})]}),"WithOverlay"),f=o(()=>r(n,{fullScreen:!0,children:[e(a,{}),e(n,{width:"300px",height:"200px",justifyContent:"center",alignItems:"center",customStyles:{border:"1px solid black"},children:e(t,{boxed:!0,size:"25px"})})]}),"Boxed"),g=o(()=>r(n,{fullScreen:!0,flexDirection:"row",gap:"8px",justifyContent:"center",children:[e(l,{children:"Standalone with no margin or positioning"}),e(t,{standalone:!0,size:"25px"})]}),"Standalone"),B=["WithOverlay","Boxed","Standalone"];export{f as Boxed,g as Standalone,h as WithOverlay,B as __namedExportsOrder,y as default};
//# sourceMappingURL=Loader.stories-b856e282.js.map
