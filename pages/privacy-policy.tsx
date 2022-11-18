import { Box, Navbar } from "@obolnetwork/obol-ui";
import { Footer } from "../components/organisms/footer/footer";
import type { NextPage } from "next";
import React from "react";

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Box
        as="main"
        css={{
          minHeight: "100vh",
          padding: "calc($3xl * 2)",
          "@sm": {
            padding: "0 1rem",
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <iframe
          frameBorder="0"
          width="100%"
          height="1200px"
          src="https://app.termly.io/document/privacy-policy/cd8081f1-1bea-4c47-91f8-3ff495ab7aef"
          title="Termly Obol"
        ></iframe>
      </Box>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
