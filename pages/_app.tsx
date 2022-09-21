import { globalCss } from "@obolnetwork/obol-ui";
import type { AppProps } from "next/app";
import Script from "next/script";
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
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NZ2HGMB');
      `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
