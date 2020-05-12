import * as React from "react";

declare namespace NeutrinoUI {
  export interface CardProps {
    children?: React.ReactElement | string;
  }
}

export default function Card(props: NeutrinoUI.CardProps): JSX.Element;
