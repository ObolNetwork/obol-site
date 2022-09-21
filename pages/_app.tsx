import { globalCss } from "@obolnetwork/obol-ui";
import type { AppProps } from "next/app";
import TopLeftBg from '../public/backgrounds/top-left-bg.svg';

import TagManager from 'react-gtm-module';
import { useEffect } from "react";

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
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NZ2HGMB' });
}, []);
  return <Component {...pageProps} />;
}

export default MyApp;
