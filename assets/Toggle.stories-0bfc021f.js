var m=Object.defineProperty;var s=(e,t)=>m(e,"name",{value:t,configurable:!0});import{b as n,B as p}from"./index-b8c7144b.js";import{r as g}from"./index-c6088c1f.js";import{a as f,j as o}from"./jsx-runtime-e9f03922.js";import"./iframe-2218f101.js";const i="I'm text label",h={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Toggle } from "@damaris-ui/core";
import { useState } from "react";

const label = "I'm text label";

export default {
  title: "Form/Toggle",
  component: Toggle,
  argTypes: {
    label: {
      control: "text",
      description: "Label for the toggle",
    },
    isActive: {
      control: "boolean",
      description: "Whether the toggle is active or not",
    },
    setIsActive: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box width={500}>
      <Toggle {...props} {...{ isActive, setIsActive }} />
      <br />
      <Toggle {...props} {...{ setIsActive }} isActive={!isActive} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  label,
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11447&t=bP3eZyPpMKfPC9jb-4",
  },
};

export const Error = Template.bind({});
Error.args = {
  label,
  isError: true,
};

Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11476&t=bP3eZyPpMKfPC9jb-4",
  },
};
`,locationsMap:{default:{startLoc:{col:48,line:27},endLoc:{col:1,line:36},startBody:{col:48,line:27},endBody:{col:1,line:36}},error:{startLoc:{col:48,line:27},endLoc:{col:1,line:36},startBody:{col:48,line:27},endBody:{col:1,line:36}}}}},title:"Form/Toggle",component:n,argTypes:{label:{control:"text",description:"Label for the toggle"},isActive:{control:"boolean",description:"Whether the toggle is active or not"},setIsActive:{table:{disable:!0}}}},a=s(e=>{const[t,r]=g.useState(!1);return f(p,{width:500,children:[o(n,{...e,isActive:t,setIsActive:r}),o("br",{}),o(n,{...e,setIsActive:r,isActive:!t})]})},"Template"),l=a.bind({});l.args={label:i};l.parameters={design:{type:"figma",url:"https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11447&t=bP3eZyPpMKfPC9jb-4"}};const c=a.bind({});c.args={label:i,isError:!0};c.parameters={design:{type:"figma",url:"https://www.figma.com/file/mRkCbajrRyEEufmh3ofTTr/PD-Design-System?node-id=4427%3A11476&t=bP3eZyPpMKfPC9jb-4"}};const A=["Default","Error"];export{l as Default,c as Error,A as __namedExportsOrder,h as default};
//# sourceMappingURL=Toggle.stories-0bfc021f.js.map
