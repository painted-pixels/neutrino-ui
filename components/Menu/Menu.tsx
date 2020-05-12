import React from "react";
import { Moveit } from "kitchen-sink/lib/moveit";
import Button from "components/Button";

export default function Menu({ size = 100 }) {
  const topRef = React.useRef();
  const middleRef = React.useRef();
  const bottomRef = React.useRef();

  let topMoveit = React.useRef<Moveit | undefined>();
  let middleMoveit = React.useRef<Moveit | undefined>();
  let bottomMoveit = React.useRef<Moveit | undefined>();

  const duration = 0.9;
  const timing = "cubic-bezier(0.7, 0, 0.3, 1)";

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    topMoveit.current = new Moveit(topRef.current, {
      start: "0%",
      end: "14%",
    });
    middleMoveit.current = new Moveit(middleRef.current, {
      start: "0%",
      end: "100%",
    });
    bottomMoveit.current = new Moveit(bottomRef.current, {
      start: "0%",
      end: "11.5%",
    });
  }, []);

  const toggle = () => {
    if (!isOpen) {
      topMoveit.current.set({
        start: "78%",
        end: "93%",
        duration,
        timing,
      });
      middleMoveit.current.set({
        start: "50%",
        end: "50%",
        duration,
        timing,
      });
      bottomMoveit.current.set({
        start: "81.5%",
        end: "94%",
        duration,
        timing,
      });
    } else {
      topMoveit.current.set({
        start: "0%",
        end: "14%",
        duration,
        timing,
      });
      middleMoveit.current.set({
        start: "0%",
        end: "100%",
        duration,
        timing,
      });
      bottomMoveit.current.set({
        start: "0%",
        end: "11.5%",
        duration,
        timing,
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button style="round" onClick={toggle}>
        <svg width="100px" height="100px">
          <path
            id="top"
            ref={topRef}
            d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"
          ></path>
          <path id="middle" ref={middleRef} d="M 30 50 L 70 50"></path>
          <path
            id="bottom"
            ref={bottomRef}
            d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
          ></path>
        </svg>
      </Button>
      <style jsx>{`
        svg path {
          fill: none;
          stroke: #000;
          stroke-width: 4;
          stroke-linecap: round;
        }

        .button {
          width: ${size}px;
          height: ${size}px;
          cursor: pointer;
          background-color: #ececec;
          box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
            7px 7px 15px rgba(70, 70, 70, 0.12);
          border-radius: 50%;
          transition: 0.1s;
        }
        .button:active {
          box-shadow: inset -7px -7px 15px rgba(255, 255, 255, 0.65),
            inset 7px 7px 15px rgba(70, 70, 70, 0.12);
        }
      `}</style>
    </>
  );
}
