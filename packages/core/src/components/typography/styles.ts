import styled, { css } from "styled-components";
import { FontProps, fonts, palette } from "@damaris-ui/theme";
import { TypographyProps } from ".";

export const StyledTypography = styled.p<TypographyProps>`
  ${({
    variant = "body",
    size = "normal",
    weight = "light",
    isRequired = false,
    colorScheme = {
      type: "text",
      color: "primary",
    },
    ...rest
  }: Partial<TypographyProps>) => {
    const fontVariant = fonts[variant];
    const fontSizeProps = fontVariant[
      size as keyof typeof fontVariant
    ] as FontProps;
    const weightProps =
      fonts.body.weights[weight as keyof typeof fonts.body.weights];
    return css`
      font-family: "Inter", sans-serif;
      transition: all 0.2s ease-in-out;
      color: ${colorScheme.type === "text"
        ? palette.text[colorScheme.color as keyof typeof palette.text]
        : palette.system[colorScheme.color as keyof typeof palette.system]};
      font-size: ${fontSizeProps.fontSize};
      line-height: ${fontSizeProps.lineHeight};
      font-weight: ${variant === "body"
        ? weightProps
        : fontSizeProps.fontWeight};
      ${!!Object.keys(rest).filter((key) => key.startsWith("gutter")) &&
      css`
        display: inline-block;
      `}
      ${rest.gutterBottom &&
      css`
        margin-bottom: ${rest.gutterBottom};
      `}
      ${rest.gutterTop &&
      css`
        margin-top: ${rest.gutterTop};
      `}
      ${rest.gutterLeft &&
      css`
        margin-left: ${rest.gutterLeft};
      `}
      ${rest.gutterRight &&
      css`
        margin-right: ${rest.gutterRight};
      `}
      ${rest.gutterVertical &&
      css`
        margin-block: ${rest.gutterVertical};
      `}
      ${rest.gutterHorizontal &&
      css`
        margin-inline: ${rest.gutterHorizontal};
      `}
      ${rest.customStyles && { ...rest.customStyles }}
      ${isRequired &&
      css`
        &:after {
          content: "*";
          color: ${palette.system.error};
          margin-left: 0.2rem;
        }
      `}
    `;
  }}
`;
