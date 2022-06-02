import type { NextPage } from "next";
import { Box } from "@obolnetwork/obol-ui";
import { Navbar } from "../components/molecules";
import { HeroSection } from "../components/organisms/hero-section/hero-section";
import { OurMission } from "../components/organisms/our-mission/our-mission";
import { useMediaQuery, MediaQueryKeys } from "../components/utils/hooks";
import { HowDvsWork } from "../components/organisms/how-dvs-work/how-dvs-work";
import { ObolDvc } from "../components/organisms/obol-dvc/obol-dvc";
import { BuildWithObol } from "../components/organisms/build-with-obol/build-with-obol";
import { DistributeYourValidators } from "../components/organisms/distribute-your-validators/distribute-your-validators";
import { Cta } from "../components/organisms/cta/cta";
import { Footer } from "../components/organisms/footer/footer";
import { ObolEcosystem } from "../components/organisms/obol-ecosystem/obol-ecosystem";

const Home: NextPage = () => {
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);
  return (
    <Box>
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
        {!screenDownSm && <Box css={{ mt: "100px" }} />}
        <OurMission />
        <HowDvsWork />
        <ObolDvc />
        <BuildWithObol />
      </Box>
      <Box css={{ "@sm": { mt: "56px" } }} />
      <DistributeYourValidators />
      <ObolEcosystem />
      <Cta />
      <Footer />
    </Box>
  );
};

export default Home;
