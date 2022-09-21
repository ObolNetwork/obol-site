/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@obolnetwork/obol-ui";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="obol"
            dangerouslySetInnerHTML={{
              __html: getCssText(),
            }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>         
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
