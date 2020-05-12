import React from "react";

export default function Card({ children }: NeutrinoUI.CardProps) {
  return (
    <>
      <div className="card">{children}</div>
      <style jsx>{`
        .card {
          padding: 1rem;
          box-shadow: -7px -7px 15px rgba(255, 255, 255, 0.65),
            7px 7px 15px rgba(70, 70, 70, 0.12);
          border-radius: 5px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
}
