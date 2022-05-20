import { Box, Button, Text, } from "@obolnetwork/obol-ui";
import Image from "next/image";
import { useMediaQuery, MediaQueryKeys } from "../../utils/hooks";

export const HeroSection = (): JSX.Element => {
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@sm": { flexDirection: "column" },
        width: "$full",
      }}
    >
      <Box
        css={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          "@sm": { alignItems: "initial" },
          gap: "$xl",
        }}
      >
        <Box
          css={{
            display: "flex",
            // TODO: set standard on spaces from ui library
            gap: "1rem",
            flexDirection: "column",
            justifyContent: "flex-start",

            "@sm": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "$2xl",
            },
          }}
        >
          <Text
            css={{
              fontWeight: "$bold",
              lineHeight: "calc($xl * 2)",
              fontSize: "calc($10 + 8px)",
              "@sm": {
                textAlign: "center",
                fontSize: "45px",
              },
            }}
            color="textLight"
          >
            Building Distributed Validators for Ethereum
          </Text>
          {screenDownSm && (
            <Box
              css={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                "@sm": {
                  width: "350px",
                },
              }}
            >
              {!screenDownSm ? (
                <Image
                  src="/assets/hexapod.svg"
                  alt="Obol Logo"
                  width={912}
                  height={597}
                />
              ) : (
                <Image
                  src="/assets/hexapod-mobile.svg"
                  alt="Obol Logo"
                  width={343}
                  height={226}
                />
              )}
            </Box>
          )}
          <Text
            css={{
              width: "80%",
              lineHeight: "$xl",
              "@sm": {
                textAlign: "center",
                width: "auto",
              },
            }}
            size={{ '@initial': '7', '@sm': '5'}}
            color="textMiddle"
          >
            The Obol Network is an ecosystem for trust minimized staking that
            allows people to{" "}
            <Text css={{ display: "inline-block" }} color="create" glow>
              create
            </Text>
            ,
            <Text css={{ display: "inline" }} color="test" glow>
              {" "}
              test
            </Text>
            ,
            <Text css={{ display: "inline" }} color="obolGreen" glow>
              {" "}
              run
            </Text>{" "}
            &
            <Text css={{ display: "inline" }} color="coordinate" glow>
              {" "}
              co-ordinate
            </Text>{" "}
            distributed validators
          </Text>
        </Box>
        {/* TODO: set the right color on obol-ui */}

        <Button css={{ color: "#011216" }}>Read the Docs</Button>
      </Box>
      {!screenDownSm && (
        <Box
          css={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            src="/assets/hexapod.svg"
            alt="Obol Logo"
            width={912}
            height={597}
          />
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
