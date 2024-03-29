import { forwardRef, Ref } from "react";
import { StyledDefaultBox } from "./styles";

import { ComponentProps } from "../../types";

export interface BoxProps extends ComponentProps {
  withPadding?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  flexDirection?: "row" | "column" | string;
  bgColor?: string;
  gap?: string;
  withWrap?: boolean;
  height?: string | number;
  fullHeight?: boolean;
  width?: string | number;
  fullWidth?: boolean;
  fullScreen?: boolean;
  withRound?: boolean;
  withShadow?: boolean;
  withBg?: boolean;
  isBlurred?: boolean;
  fadeIn?: boolean;
  withHover?: boolean;
  alignItems?: "center" | "flex-start" | "flex-end" | "space-between" | string;
  alignSelf?: "center" | "flex-start" | "flex-end" | "space-between" | string;
  justifySelf?: "center" | "flex-start" | "flex-end" | "space-between" | string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | string;
}

export const Box = forwardRef(
  (
    { width, height, bgColor = undefined, ...rest }: BoxProps,
    ref: Ref<HTMLDivElement>
  ): JSX.Element => {
    const {
      alignItems = "center",
      justifyContent = "flex-start",
      flexDirection = "column",
      children,
    } = rest;

    return (
      <StyledDefaultBox
        ref={ref}
        data-testid="box-wrapper"
        noPadding={rest.withPadding}
        justifyContent={justifyContent ?? "stretch"}
        {...{
          width,
          height,
          bgColor,
          alignItems,
          flexDirection,
          ...rest,
        }}
      >
        {children}
      </StyledDefaultBox>
    );
  }
);

Box.displayName = "Box";

export default Box;
