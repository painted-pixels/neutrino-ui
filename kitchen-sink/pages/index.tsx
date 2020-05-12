import React from "react";
import Layout from "kitchen-sink/layout";
import { Button } from "@neutrino-ui/core";

const Home = () => (
  <Layout>
    <div className="grid">
      <Button>Button</Button>
    </div>
    <style jsx>{`
      .grid {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr) minmax(
            300px,
            1fr
          );
        grid-template-rows: 500px;
        grid-gap: 2rem 2rem;
        margin: 2rem;
      }
      :global(.grid > *) {
        width: min-content;
        height: min-content;
        align-self: center;
        justify-self: center;
      }
    `}</style>
  </Layout>
);

export default Home;
