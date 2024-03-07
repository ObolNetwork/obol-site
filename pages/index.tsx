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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: 50 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -50 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: 50 },
};

const Home: NextPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true });
  const [obolEcosystemRef, obolEcosystemInView] = useInView({ triggerOnce: true });
  const [ourMissionRef, ourMissionInView] = useInView({ triggerOnce: true });
  const [howDvsWorkRef, howDvsWorkInView] = useInView({ triggerOnce: true });
  const [obolDvcRef, obolDvcInView] = useInView({ triggerOnce: true });
  const [buildWithObolRef, buildWithObolInView] = useInView({
    triggerOnce: true,
  });
  const [distributeYourValidatorsRef, distributeYourValidatorsInView] =
    useInView({ triggerOnce: true });
  const [roadMapRef, roadMapInView] = useInView({ triggerOnce: true });

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
        <motion.div
          ref={heroRef}
          initial="initial"
          animate={heroInView ? "animate" : "exit"}
          variants={fadeInUp}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          ref={ourMissionRef}
          initial="initial"
          animate={ourMissionInView ? "animate" : "exit"}
          variants={fadeInLeft}
        >
          <OurMission />
        </motion.div>
        <motion.div
          ref={howDvsWorkRef}
          initial="initial"
          animate={howDvsWorkInView ? "animate" : "exit"}
          variants={fadeInRight}
        >
          <HowDvsWork />
        </motion.div>
        <motion.div
          ref={obolDvcRef}
          initial="initial"
          animate={obolDvcInView ? "animate" : "exit"}
          variants={fadeInLeft}
        >
          <ObolDvc />
        </motion.div>
        <motion.div
          ref={buildWithObolRef}
          initial="initial"
          animate={buildWithObolInView ? "animate" : "exit"}
          variants={fadeInRight}
        >
          <BuildWithObol />
        </motion.div>
      </Box>
      <Box css={{ "@sm": { mt: "56px" } }} />
      <motion.div
        ref={distributeYourValidatorsRef}
        initial="initial"
        animate={distributeYourValidatorsInView ? "animate" : "exit"}
        variants={fadeIn}
      >
        <DistributeYourValidators />
      </motion.div>
      <motion.div
        ref={roadMapRef}
        initial="initial"
        animate={roadMapInView ? "animate" : "exit"}
        variants={fadeInUp}
      >
        <RoadMap />
      </motion.div>
      <motion.div
        ref={obolEcosystemRef}
        initial="initial"
        animate={obolEcosystemInView ? "animate" : "exit"}
        variants={fadeInLeft}
      >
        <ObolEcosystem />
      </motion.div>
      <motion.div
        ref={ctaRef}
        initial="initial"
        animate={ctaInView ? "animate" : "exit"}
        variants={fadeInRight}
      >
        <Cta />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
