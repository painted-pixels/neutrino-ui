import React from "react";
import Head from "next/head";

function NeumorphCheckbox() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/e39ac74ff9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="container">
        <p>Are You 18 Years Old?</p>
        <div>
          <label>
            <input type="radio" name="age" />
            <i className="fas icon fa-check" aria-hidden="true"></i>
          </label>
          <label>
            <input type="radio" name="age" />
            <i className="fas icon fa-times" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #091921;
        }

        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .container p {
          color: #215e65;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 5px;
        }

        .container label {
          position: relative;
        }

        .container label input {
          appearance: none;
          -webkit-appearance: none;
        }

        .container label .icon {
          position: relative;
          width: 40px;
          height: 40px;
          padding: 10px;
          background: #091921;
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

        .container label .icon:hover {
          box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
            2px 2px 6px rgba(0, 0, 0, 0.8),
            inset -2px -2px 10px rgba(255, 255, 255, 0.05),
            inset 2px 2px 10px rgba(0, 0, 0, 0.8);
        }

        .container label input:checked ~ .icon {
          color: #00fff1;
          box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
            inset 2px 2px 6px rgba(0, 0, 0, 1);
          text-shadow: 0 0 5px #00fff1, 0 0 20px #00fff1;
        }
      `}</style>
    </div>
  );
}

export default NeumorphCheckbox;
