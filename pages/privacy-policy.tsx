import { Box, Navbar, styled } from "@obolnetwork/obol-ui";
import { Footer } from "../components/organisms/footer/footer";
import type { NextPage } from "next";
import React from "react";

const IFrame = styled("iframe", {
  overflow: "hidden",
  overflowX: "hidden",
  overflowY: "hidden",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "100px",
  left: "0px",
  right: "0px",
  bottom: "0px",
});

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
          pt: '$lg'
        }}
      >
        <IFrame
          frameBorder="0"
          height="100%"
          width="100%"
          src="https://app.termly.io/document/privacy-policy/cd8081f1-1bea-4c47-91f8-3ff495ab7aef"
          title="Termly Obol"
        ></IFrame>
      </Box>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
