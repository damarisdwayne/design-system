import React from "react";
import SpinnerIcon from "../../icons/spinner";
import Box from "../box";
export interface LoaderProps {
  standalone?: boolean;
  boxed?: boolean;
  color?: string;
  size?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  boxed = false,
  standalone = false,
  color,
  size = "72px",
}) => {
  const SpinnerIconComponent = () => (
    <SpinnerIcon color={color} width={size} height={size} />
  );

  if (standalone) {
    return <SpinnerIconComponent />;
  }
  if (boxed) {
    return (
      <Box
        data-testid="loader"
        fullHeight
        fullWidth
        justifyContent="center"
        alignItems="center"
      >
        <SpinnerIconComponent />
      </Box>
    );
  }

  return (
    <Box
      fullScreen
      justifyContent="center"
      customStyles={{
        position: "absolute",
        zIndex: 9999,
        background: "rgba(255,255,255,0.5)",
        top: 0,
        left: 0,
      }}
      data-testid="loader"
    >
      <SpinnerIconComponent />
    </Box>
  );
};

export default Loader;
