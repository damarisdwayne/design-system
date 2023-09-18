import { forwardRef, Ref } from "react";
import { ComponentProps } from "../../types";
import { StyledDivider } from "./styles";

export interface DividerProps extends ComponentProps {
  width?: string;
  height?: string;
  noBorder?: boolean;
  borderColor?: string;
}

export const Divider = forwardRef(
  (props: DividerProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    return <StyledDivider {...{ ref }} {...props} data-testid="divider" />;
  }
);

Divider.displayName = "Divider";

export default Divider;
