import type { NextPage } from "next";
import Head from "next/head";
import { Box, ChevronUpIcon } from "@obolnetwork/obol-ui";
import { Navbar } from "../components/molecules";
import { HeroSection } from "../components/organisms/hero-section/hero-section";
import { OurMission } from "../components/organisms/our-mission/our-mission";
import { HowDvsWork } from "../components/organisms/how-dvs-work/how-dvs-work";
import { ObolDvc } from "../components/organisms/obol-dvc/obol-dvc";
import { BuildWithObol } from "../components/organisms/build-with-obol/build-with-obol";
import { DistributeYourValidators } from "../components/organisms/distribute-your-validators/distribute-your-validators";
import { Cta } from "../components/organisms/cta/cta";
import { Footer } from "../components/organisms/footer/footer";
import { ObolEcosystem } from "../components/organisms/obol-ecosystem/obol-ecosystem";
import { RoadMap } from "../components/organisms/roadmap/roadmap";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      if (bodyHeight - (scrollPosition + windowHeight) < 20) {
        // User is close to the bottom
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <title>Obol - Building Distributed Validators for Ethereum</title>
        <meta
          name="description"
          content="The Obol Network is an ecosystem for trust minimized staking that allows people to create, test, run & co-ordinate distributed validators"
        />
        <meta name="title" content="Obol" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:url" content="https://obol.tech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://obol.tech/assets/og-image-v2.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="obol.tech" />
        <meta property="twitter:url" content="https://obol.tech/" />
        <meta
          name="twitter:title"
          content="Obol - Building Distributed Validators for Ethereum"
        />
        <meta
          name="twitter:description"
          content="The Obol Network is an ecosystem for trust minimized staking that allows people to create, test, run & co-ordinate distributed validators"
        />
        <meta
          name="twitter:image"
          content="https://obol.tech/assets/og-image-v2.png"
        />
        <meta name="twitter:site" content="@ObolNetwork" />
        <meta name="twitter:creator" content="@ObolNetwork" />
      </Head>
      <Navbar />
      <Box
        as="main"
        css={{
          minHeight: "100vh",
          padding: "0 calc($3xl * 2) calc($xl * 2) calc($3xl * 2)",
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
        <HeroSection />
        <OurMission />
        <HowDvsWork />
        <ObolDvc />
        <BuildWithObol />
      </Box>
      <Box css={{ "@sm": { mt: "56px" } }} />
      <DistributeYourValidators />
      <RoadMap />
      <ObolEcosystem />
      <Cta />
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            background: "#224737",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          title="Scroll To Top"
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  );
};

export default Home;
