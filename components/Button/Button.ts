import * as React from "react";

namespace NeutrinoUI {
  export interface ButtonProps {
    text?: string;
    className?: string;
    style?: "normal" | "round";
    toggleable?: boolean;
    toggled?: boolean;
    width?: string;
    height?: string;
    children?: React.ReactElement | string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
}

export default function Button(props: NeutrinoUI.ButtonProps): JSX.Element;
