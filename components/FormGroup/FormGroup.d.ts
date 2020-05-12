import * as React from "react";
import { StandardProps } from "..";

declare namespace NeutrinoUI {
  export interface FormGroupProps
    extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      FormGroupClassKey
    > {
    row?: boolean;
  }

  export type FormGroupClassKey = "root" | "row";
}

export default function FormGroup(
  props: NeutrinoUI.FormGroupProps
): JSX.Element;
