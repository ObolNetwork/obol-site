import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@obolnetwork/obol-ui";
import { Navbar } from "../components/molecules/Navbar/Navbar";
import { HeroSection } from "../components/organisms/hero-section/hero-section";
import { OurMission } from "../components/organisms/our-mission/our-mission";
import { useMediaQuery, MediaQueryKeys } from "../components/utils/hooks";
const Home: NextPage = () => {
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);
  return (
    <Box css={{ padding: "0 1rem" }}>
      <Head>
        <title>Obol</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Box
        as="main"
        css={{
          minHeight: "100vh",
          padding: "calc($2xl * 5) calc($3xl * 2)",
          "@sm": {
            padding: 0,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <HeroSection />
        {!screenDownSm && <Box css={{ mt: "11rem" }} />}
        <OurMission />
      </Box>
    </Box>
  );
};

export default Home;
