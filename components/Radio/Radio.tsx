import React, { useState, useRef, FormEvent } from "react";
import Button from "../Menu/node_modules/components";
import useRadioGroup from "components/RadioGroup/useRadioGroup";
import createChainedFunction from "utils/createChainedFunction";

export interface RadioButtonProps {
  checked?: boolean;
  children?: React.ReactElement;
  disabled?: boolean;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  name?: string;
  onChange?: (toggled: boolean) => void;
  required?: boolean;
  value?: any;
}

export default React.forwardRef(function RadioButton({
  children,
  checked: checkedProp,
  name: nameProp,
  onChange: onChangeProp,
  inputRef,
  value,
}: RadioButtonProps) {
  const radioGroup = useRadioGroup();

  let checked = checkedProp;
  const onChange = createChainedFunction(
    onChangeProp,
    radioGroup && radioGroup.onChange
  );
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = radioGroup.value === value;
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }

  return (
    <>
      <label>
        <input
          type="radio"
          ref={inputRef}
          name={name}
          checked={checked}
          onChange={() => console.log("INPUT CHANGE")}
        />
        <Button
          className="radio-button"
          style="round"
          width="60px"
          height="60px"
          toggleable={true}
          toggled={checked}
          onChange={onChange}
        >
          {children}
        </Button>
      </label>
      <style jsx>{`
        label {
          position: relative;
        }

        label input {
          appearance: none;
          -webkit-appearance: none;
        }

        label .content {
          position: relative;
          width: 40px;
          height: 40px;
          padding: 10px;
          background: #ececec;
          line-height: 40px;
          text-align: center;
          margin: 0 4px;
          color: #6f6f6f;
          font-size: 16px;
          border-radius: 50%;
          box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
            2px 2px 6px rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }

        label .icon:hover {
          box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
            2px 2px 6px rgba(0, 0, 0, 0.8),
            inset -2px -2px 10px rgba(255, 255, 255, 0.05),
            inset 2px 2px 10px rgba(0, 0, 0, 0.8);
        }

        label input:checked ~ .icon {
          color: #00fff1;
          box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
            inset 2px 2px 6px rgba(0, 0, 0, 1);
          text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
        }
      `}</style>
    </>
  );
});
