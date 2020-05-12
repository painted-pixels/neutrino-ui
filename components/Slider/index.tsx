import React from "components";

export default function Slider() {
  return (
    <>
      <input type="checkbox" />
      <style jsx>{`
        input[type="checkbox"] {
          -webkit-appearance: none;
          height: 80px;
          width: 160px;
          box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
            7px 7px 15px rgba(70, 70, 70, 0.12),
            inset -7px -7px 15px rgba(255, 255, 255, 0.65),
            inset 7px 7px 15px rgba(70, 70, 70, 0.12);
          border-radius: 40px;
          border: 5px solid #ececec;
          margin-left: 15px;
          margin-right: 75px;
          outline: none;
          cursor: pointer;
          position: relative;
        }
        input[type="checkbox"]:before,
        input[type="checkbox"]:after {
          content: "";
          position: absolute;
          margin: auto;
          top: 0;
          bottom: 0;
          transition: 0.2s ease-out;
        }
        input[type="checkbox"]:before {
          height: 50px;
          width: 50px;
          background-color: #ececec;
          box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
            7px 7px 15px rgba(70, 70, 70, 0.12);
          border-radius: 50%;
          left: 15px;
        }
        input[type="checkbox"]:after {
          height: 15px;
          width: 15px;
          background-color: #bbbbbb;
          border-radius: 50%;
          right: -55px;
        }
        input[type="checkbox"]:checked:before {
          left: 86px;
        }
        input[type="checkbox"]:checked:after {
          background-color: #55f696;
          box-shadow: 0 0 8px #55f696;
        }
      `}</style>
    </>
  );
}
