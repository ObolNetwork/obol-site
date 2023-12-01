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
    if (router.pathname !== "/blocked") {
      const script = document.createElement("script");
      script.src = "https://app.termly.io/embed.min.js";
      script.type = "text/javascript";
      script.async = true;
      script.setAttribute("data-auto-block", "on");
      script.setAttribute(
        "data-website-uuid",
        "01eadf2f-d1f3-4db1-bdce-a3cb1cd9f4d7"
      );

      script.integrity =
        "eb05b794d3ff3828122578afacb94693563557be9036d4dc882d70ce63d17a1c";
      script.crossOrigin = "anonymous";

      document.body.appendChild(script);
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
