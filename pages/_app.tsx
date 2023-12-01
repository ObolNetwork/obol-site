import { globalCss } from "@obolnetwork/obol-ui";
import type { AppProps } from "next/app";
import TopLeftBg from "../public/backgrounds/top-left-bg.svg";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    // Check if the current page is not the blocked page
    if (router.pathname !== "/blocked") {
      // Dynamically load the cookie banner script
      const script = document.createElement("script");
      script.src = "https://app.termly.io/embed.min.js";
      script.type = "text/javascript";
      script.async = true;
      script.setAttribute("data-auto-block", "on");
      script.setAttribute(
        "data-website-uuid",
        "01eadf2f-d1f3-4db1-bdce-a3cb1cd9f4d7"
      );

      document.body.appendChild(script);
    }
  }, [router.pathname]); // Only re-run the effect if the pathname changes

  return <Component {...pageProps} />;
}

export default MyApp;
