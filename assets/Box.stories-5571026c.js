var g=Object.defineProperty;var a=(o,n)=>g(o,"name",{value:n,configurable:!0});import{T as i,B as l}from"./index-b8c7144b.js";import{j as f}from"./iframe-2218f101.js";import{m as B}from"./make-decorator-0a782fa4.js";import{a as x,F as w,j as e}from"./jsx-runtime-e9f03922.js";import"./index-c6088c1f.js";var v="STORYBOOK_ADDON_DESIGNS",q={UpdateConfig:v+"/update_config"},y="design",S=a(function(o,n,p){var h=p.parameters,b=f.getChannel();return b.emit(q.UpdateConfig,h),o(n)},"wrapper"),C=B({name:"withDesign",parameterName:y,skipIfNoParametersOrOptions:!0,wrapper:S});module&&module.hot&&module.hot.decline&&module.hot.decline();const t=a(()=>x(w,{children:[e(i,{as:"h6",children:"This is a card with notification"}),e(i,{as:"p",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})]}),"BoxPlaceholder"),H={parameters:{storySource:{source:`import { Box } from "@damaris-ui/core";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { BoxPlaceholder } from "../placeholders";

export default {
  title: "Organisms/Box",
  component: Box,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    bgColor: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    isBlurred: { control: "boolean" },
    fadeIn: { control: "boolean" },
    withBg: { control: "boolean" },
    withPadding: { control: "boolean" },
    withShadow: { control: "boolean" },
    withRound: { control: "boolean" },
    withHover: { control: "boolean" },
    alignItems: {
      control: "inline-radio",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    justifyContent: {
      control: "inline-radio",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    flexDirection: {
      control: "inline-radio",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    padding: {
      control: "inline-radio",
      options: ["lg", "md", "sm"],
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (props) => {
  const { children } = props;
  return (
    <Box withBg={false} flexDirection="column" {...props}>
      {children}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  alignItems: "flex-start",
  withRound: true,
  withPadding: true,
  children: <BoxPlaceholder />,
};
Default.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Blurred = Template.bind({});
Blurred.args = {
  isBlurred: true,
  withShadow: true,
  children: <BoxPlaceholder />,
};
Blurred.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Animated = Template.bind({});
Animated.args = {
  fadeIn: true,
  children: <BoxPlaceholder />,
};
Animated.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithBGColor = Template.bind({});
WithBGColor.args = {
  bgColor: "#d9f3de",
  withBg: true,
  children: <BoxPlaceholder />,
};
WithBGColor.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithHover = Template.bind({});
WithHover.args = {
  withHover: true,
  children: <BoxPlaceholder />,
};
WithHover.parameters = {
  chromatic: { disableSnapshot: true },
};
`,locationsMap:{default:{startLoc:{col:45,line:48},endLoc:{col:1,line:55},startBody:{col:45,line:48},endBody:{col:1,line:55}},blurred:{startLoc:{col:45,line:48},endLoc:{col:1,line:55},startBody:{col:45,line:48},endBody:{col:1,line:55}},animated:{startLoc:{col:45,line:48},endLoc:{col:1,line:55},startBody:{col:45,line:48},endBody:{col:1,line:55}},"with-bg-color":{startLoc:{col:45,line:48},endLoc:{col:1,line:55},startBody:{col:45,line:48},endBody:{col:1,line:55}},"with-hover":{startLoc:{col:45,line:48},endLoc:{col:1,line:55},startBody:{col:45,line:48},endBody:{col:1,line:55}}}}},title:"Organisms/Box",component:l,decorators:[C],argTypes:{children:{table:{disable:!0}},bgColor:{control:"color"},width:{control:"number"},height:{control:"number"},isBlurred:{control:"boolean"},fadeIn:{control:"boolean"},withBg:{control:"boolean"},withPadding:{control:"boolean"},withShadow:{control:"boolean"},withRound:{control:"boolean"},withHover:{control:"boolean"},alignItems:{control:"inline-radio",options:["flex-start","flex-end","center","baseline","stretch"]},justifyContent:{control:"inline-radio",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"]},flexDirection:{control:"inline-radio",options:["row","row-reverse","column","column-reverse"]},padding:{control:"inline-radio",options:["lg","md","sm"]}}},r=a(o=>{const{children:n}=o;return e(l,{withBg:!1,flexDirection:"column",...o,children:n})},"Template"),s=r.bind({});s.args={alignItems:"flex-start",withRound:!0,withPadding:!0,children:e(t,{})};s.parameters={chromatic:{disableSnapshot:!0}};const c=r.bind({});c.args={isBlurred:!0,withShadow:!0,children:e(t,{})};c.parameters={chromatic:{disableSnapshot:!0}};const d=r.bind({});d.args={fadeIn:!0,children:e(t,{})};d.parameters={chromatic:{disableSnapshot:!0}};const u=r.bind({});u.args={bgColor:"#d9f3de",withBg:!0,children:e(t,{})};u.parameters={chromatic:{disableSnapshot:!0}};const m=r.bind({});m.args={withHover:!0,children:e(t,{})};m.parameters={chromatic:{disableSnapshot:!0}};const O=["Default","Blurred","Animated","WithBGColor","WithHover"];export{d as Animated,c as Blurred,s as Default,u as WithBGColor,m as WithHover,O as __namedExportsOrder,H as default};
//# sourceMappingURL=Box.stories-5571026c.js.map
