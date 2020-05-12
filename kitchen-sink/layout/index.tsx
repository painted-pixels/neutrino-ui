import React from "react";
import Head from "next/head";

export default ({ children }) => {
  return (
    <>
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
      <div className="content">{children}</div>
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
          background: #ececec;
        }
      `}</style>
    </>
  );
};
