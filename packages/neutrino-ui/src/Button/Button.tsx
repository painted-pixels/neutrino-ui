import React from "react";
import styled, { css } from "styled-components";

export type ButtonStyle =
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Error"
  | "Link";

export type ButtonShape = "Normal" | "Round";

export interface ButtonProps {
  children?: React.ReactNode | string;
  style?: ButtonStyle;
  shape?: ButtonShape;
  className?: string;
  width?: number;
  height?: number;
  toggled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonComponent = styled.button`
    width: ${(props) =>
      `${props.width}px` ||
      (props.shape === "Normal" ? "min-content" : "100px")};
    height: ${(props) =>
      `${props.height}px` ||
      (props.shape === "Normal" ? "min-content" : "100px")};
    border-radius: ${(props) => (props.shape === "Normal" ? "0.5rem" : "50%")};
    cursor: pointer;
    position:relative;
    border: 0;
    background-color: transparent;
    outline: none;

    &::before {
      content: '';
      box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
      7px 7px 15px rgba(70, 70, 70, 0.12);
      opacity: 1;
      border-radius: ${(props) =>
        props.shape === "Normal" ? "0.5rem" : "50%"};
      transition: 0.1s;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    &::after {
      content: '';
      box-shadow: inset -7px -7px 15px rgba(255, 255, 255, 0.65),
            inset 7px 7px 15px rgba(70, 70, 70, 0.12);
        opacity: 0;
      transition: 0.2s;
      border-radius: ${(props) =>
        props.shape === "Normal" ? "0.5rem" : "50%"};
      transition: 0.1s;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    :active {
      &::before {
        opacity: 0;
      }
      &::after {
        opacity: 1;
      }
    }

    ${(props: ButtonProps) =>
      props.shape === "Normal" &&
      css`
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
        white-space: nowrap;
      `}

    ${(props: ButtonProps) =>
      props.shape === "Round" &&
      css`
        border-radius: 50%;
      `}

    ${(props: ButtonProps) =>
      props.style === "Primary" &&
      css`
        background-color: #ececec;
      `}
  `;

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { style = "Primary", shape = "Normal", onClick = () => {}, ...rest },
    ref
  ): JSX.Element => {
    return (
      <ButtonComponent
        {...rest}
        style={style}
        shape={shape}
        onClick={onClick}
        ref={ref}
      />
    );
  }
);

/* export default withStyles(styles, { name: "NeutrinoButton" })(Button); */
export default Button;
