import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@obolnetwork/obol-ui";
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

const Home: NextPage = () => {
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
        <meta property="og:url" content="https://obol.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://obol.dev/assets/og-image-v2.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="obol.dev" />
        <meta property="twitter:url" content="https://obol.dev/" />
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
          content="https://obol.dev/assets/og-image-v2.png"
        />
        <meta name="twitter:site" content="@ObolNetwork" />
        <meta name="twitter:creator" content="@ObolNetwork" />
      </Head>
      <Navbar />
      <Box
        as="main"
        css={{
          minHeight: "100vh",
          padding: "calc($2xl * 5) calc($3xl * 2)",
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
    </div>
  );
};

export default Home;
