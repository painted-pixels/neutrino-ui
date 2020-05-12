import * as React from "react";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup";
import useForkRef from "../utils/useForkRef";
import useControlled from "../utils/useControlled";
import RadioGroupContext from "./RadioGroupContext";
import useId from "../utils/unstable_useId";

const RadioGroup = React.forwardRef(function RadioGroup(
  props: RadioGroupProps,
  ref
) {
  const {
    actions,
    children,
    name: nameProp,
    value: valueProp,
    onChange,
    ...other
  } = props;
  const rootRef = React.useRef(null);

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: props.defaultValue,
    name: "RadioGroup",
  });

  React.useImperativeHandle(
    actions,
    () => ({
      focus: () => {
        let input = rootRef.current.querySelector(
          "input:not(:disabled):checked"
        );

        if (!input) {
          input = rootRef.current.querySelector("input:not(:disabled)");
        }

        if (input) {
          input.focus();
        }
      },
    }),
    []
  );

  const handleRef = useForkRef(ref, rootRef);

  const handleChange = (event) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  const name = useId(nameProp);

  return (
    <RadioGroupContext.Provider value={{ name, onChange: handleChange, value }}>
      <FormGroup role="radiogroup" ref={handleRef} {...other}>
        {children}
      </FormGroup>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.propTypes = {
  children: PropTypes.node,
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default RadioGroup;
