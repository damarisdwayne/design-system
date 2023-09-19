var h=Object.defineProperty;var i=(t,r)=>h(t,"name",{value:r,configurable:!0});import{D as o}from"./index-b8c7144b.js";import{a as d,j as e}from"./jsx-runtime-e9f03922.js";import"./index-c6088c1f.js";import"./iframe-2218f101.js";const x={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider } from '@damaris-ui/core'

export default {
  title: 'Molecules/Divider',
  component: Divider,
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    noBorder: {
      control: { type: 'boolean' },
    },
    borderColor: {
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (props) => {
  return (
    <div style={{ width: '500px' }}>
      <Divider
        {...props}
        width={\`\${props.width ?? 450}px\`}
        height={\`\${props.height ?? 5}px\`}
      />
      <Divider
        {...props}
        width={\`\${props.width ?? 450}px\`}
        height={\`\${props.height ?? 5}px\`}
      />
      <Divider
        {...props}
        width={\`\${props.width ?? 450}px\`}
        height={\`\${props.height ?? 5}px\`}
      />
    </div>
  )
}

export const WithoutBorder = Template.bind({})
WithoutBorder.args = {
  noBorder: true,
}

export const WithHeight = Template.bind({})
WithHeight.args = {
  height: '40',
}

export const WithWidth = Template.bind({})
WithWidth.args = {
  height: '40',
  width: '50',
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  height: '40',
  borderColor: 'red',
}
`,locationsMap:{"without-border":{startLoc:{col:49,line:23},endLoc:{col:1,line:43},startBody:{col:49,line:23},endBody:{col:1,line:43}},"with-height":{startLoc:{col:49,line:23},endLoc:{col:1,line:43},startBody:{col:49,line:23},endBody:{col:1,line:43}},"with-width":{startLoc:{col:49,line:23},endLoc:{col:1,line:43},startBody:{col:49,line:23},endBody:{col:1,line:43}},"custom-color":{startLoc:{col:49,line:23},endLoc:{col:1,line:43},startBody:{col:49,line:23},endBody:{col:1,line:43}}}}},title:"Molecules/Divider",component:o,argTypes:{width:{control:{type:"number"}},height:{control:{type:"number"}},noBorder:{control:{type:"boolean"}},borderColor:{control:{type:"color"}}}},n=i(t=>d("div",{style:{width:"500px"},children:[e(o,{...t,width:`${t.width??450}px`,height:`${t.height??5}px`}),e(o,{...t,width:`${t.width??450}px`,height:`${t.height??5}px`}),e(o,{...t,width:`${t.width??450}px`,height:`${t.height??5}px`})]}),"Template"),l=n.bind({});l.args={noBorder:!0};const c=n.bind({});c.args={height:"40"};const s=n.bind({});s.args={height:"40",width:"50"};const p=n.bind({});p.args={height:"40",borderColor:"red"};const w=["WithoutBorder","WithHeight","WithWidth","CustomColor"];export{p as CustomColor,c as WithHeight,s as WithWidth,l as WithoutBorder,w as __namedExportsOrder,x as default};
//# sourceMappingURL=Divider.stories-dd5a7034.js.map
