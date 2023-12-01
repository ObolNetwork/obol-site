import type { NextPage } from "next";
import { Button, Navbar, Box, Text } from "@obolnetwork/obol-ui";
import Head from "next/head";

const Blocked: NextPage = () => {
  return (
    <>
      <Head>
        <style>{`
          html, body, #__next {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden; /* Prevents scrolling on the block page */
          }
          .navbar-wrapper a {
            height: 48px;
          }
          .navbar-wrapper button {
            display: none;
          }
        `}</style>
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
      </Head>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "78%",
            width: "77%",
            background: "url(/backgrounds/mundi.svg) no-repeat center center", // replace with your SVG path
            backgroundSize: "cover",
            "@md": {
              width: "100%",
            },
          }}
        >
          <Text
            as="h1"
            css={{
              color: "$textLight",
              fontSize: "32px",
              marginBottom: "16px",
              px: "35%",
              "@sm": {
                px: "10%",
              },
              textAlign: "center",
              lineHeight: "48px",
            }}
          >
            This link is not available in certain geolocations.
          </Text>
          <Text
            css={{
              fontSize: "18px",
              color: "$body",
              marginBottom: "32px",
              "@sm": {
                px: "10%",
                textAlign: "center",
              },
            }}
          >
            You can still explore more about Obol visiting our Website
          </Text>
          <Button as="a" href="https://obol.tech" css={{ alignSelf: "center" }}>
            Obol Website
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Blocked;
