import { globalCss } from "@obolnetwork/obol-ui";
import type { AppProps } from "next/app";

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
  },

  body: {
    backgroundColor: "#33474D",
    padding: 0,
    margin: 0,
    fontFamily: "DM Sans",
  },

  a: {
    textDecoration: "none",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
