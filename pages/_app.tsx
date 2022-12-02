import { globalCss } from "@obolnetwork/obol-ui";
import type { AppProps } from "next/app";
import TopLeftBg from "../public/backgrounds/top-left-bg.svg";

const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
  },
  body: {    
    background: `url(${TopLeftBg.src}) left top no-repeat`,
    backgroundColor: "$bg01",
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
  console.log("Test ENV VARS", process.env.CHAIN_ID, process.env.DEPOSIT_CONTRACT_ADDRESS);
  return <Component {...pageProps} />;
}

export default MyApp;
