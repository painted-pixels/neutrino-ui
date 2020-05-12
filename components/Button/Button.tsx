import React, { useState, useEffect } from "react";

export default function Button({
  text,
  className,
  style = "normal",
  width,
  toggled,
  height,
  children,
  onClick: onClickProp,
}: NeutrinoUI.ButtonProps) {
  if (typeof children === "string" && !text) {
    text = children;
  }

  const [buttonToggled, setButtonToggled] = useState(toggled);

  const computedWidth = width ?? (style === "normal" ? "min-content" : "100px");
  const computedHeight =
    height ?? (style === "normal" ? "min-content" : "100px");

  useEffect(() => {
    setButtonToggled(toggled);
  }, [toggled]);

  return (
    <>
      <button
        className={`neu-button ${style}${buttonToggled ? " toggled" : ""}${
          className ? ` ${className}` : ""
        }`}
        onClick={onClickProp}
      >
        {text && <span className="neu-button--text">{text}</span>}
        {children && !text && children}
      </button>
      <style jsx>{`
        .neu-button {
          width: ${computedWidth};
          height: ${computedHeight};
          cursor: pointer;
          background-color: #ececec;
          box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
            7px 7px 15px rgba(70, 70, 70, 0.12);
          border: 0;
          transition: 0.1s;
          outline: none;
        }
        .normal {
          border-radius: 0.5rem;
          padding: 1rem 1.5rem;
          white-space: nowrap;
        }
        .round {
          border-radius: 50%;
        }
        .neu-button:active,
        .neu-button.toggled {
          box-shadow: inset -7px -7px 15px rgba(255, 255, 255, 0.65),
            inset 7px 7px 15px rgba(70, 70, 70, 0.12);
        }
        .neu-button--text {
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
