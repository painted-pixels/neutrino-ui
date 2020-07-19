import React from "react";
import styled, { css } from "styled-components";

export type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "link";

export type ButtonShape = "normal" | "round";

export interface ButtonProps {
  children?: React.ReactChildren | string;
  className?: string;
  disabled?: boolean;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  shape?: ButtonShape;
  type?: ButtonType;
  toggled?: boolean;
  width?: number;
}

const ButtonColors: { [key in ButtonType]: string } = {
  primary: "blue",
  secondary: "gray",
  success: "green",
  warning: "yellow",
  danger: "red",
  link: "transparent",
};

interface SafeButtonProps {
  disabled: boolean;
  height?: number;
  shape?: ButtonShape;
  buttonType: ButtonType;
  toggled: boolean;
  width?: number;
}

const ButtonComponent = styled.button<SafeButtonProps>`
    width: ${(props) =>
      `${props.width}px` ||
      (props.shape === "normal" ? "min-content" : "100px")};
    height: ${(props) =>
      `${props.height}px` ||
      (props.shape === "normal" ? "min-content" : "100px")};
    border-radius: ${(props) => (props.shape === "normal" ? "0.5rem" : "50%")};
    cursor: pointer;
    position:relative;
    border: 0;
    background-color: ${(props) => ButtonColors[props.buttonType]};
    outline: none;

    &::before {
      content: '';
      box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
      7px 7px 15px rgba(70, 70, 70, 0.12);
      opacity: 1;
      border-radius: ${(props) =>
        props.shape === "normal" ? "0.5rem" : "50%"};
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
        props.shape === "normal" ? "0.5rem" : "50%"};
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

    ${(props: SafeButtonProps) =>
      props.shape === "normal" &&
      css`
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
        white-space: nowrap;
      `}

    ${(props: SafeButtonProps) =>
      props.shape === "round" &&
      css`
        border-radius: 50%;
      `}

    ${(props: SafeButtonProps) =>
      props.buttonType === "primary" &&
      css`
        background-color: #ececec;
      `}
  `;
ButtonComponent.displayName = "NuiButton";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "primary",
      disabled = false,
      shape = "normal",
      onClick = () => {},
      toggled = false,
      ...rest
    },
    ref
  ): JSX.Element => {
    return (
      <ButtonComponent
        {...rest}
        buttonType={type}
        disabled={disabled}
        shape={shape}
        onClick={onClick}
        toggled={toggled}
        ref={ref}
      >
        {children}
      </ButtonComponent>
    );
  }
);

/* export default withStyles(styles, { name: "NeutrinoButton" })(Button); */
export default Button;
