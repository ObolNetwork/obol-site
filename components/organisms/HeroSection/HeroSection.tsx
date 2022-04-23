import { Box, Button, Text } from "@obolnetwork/obol-ui";
import Image from "next/image";
import { NeonText } from "../../atoms/NeonText/NeonText";
export const HeroSection = (): JSX.Element => {
  return (
    <Box css={{ display: "flex", width: "$full" }}>
      <Box
        css={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pt: "$xl",
          gap: "$xl",
        }}
      >
        <Box
          css={{
            display: "flex",
            // TODO: set standard on spaces from ui library
            gap: "16px",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text
            css={{
              width: "80%",
              fontWeight: "$bold",
              lineHeight: "calc($xl * 2)",
            }}
            size="10"
            color="white"
          >
            Building Distributed Validators for Ethereum
          </Text>
          <Text
            css={{
              width: "68%",
              lineHeight: "$xl",
            }}
            size="5"
            color="textMiddle"
          >
            The Obol Network is an ecosystem for trust minimized staking that
            allows people to <span className="neon-create">create</span>,{" "}
            <span className="neon-test">test</span>,{" "}
            <span className="neon-run">run</span> &{" "}
            <span className="neon-co">co-ordinate</span> distributed validators
          </Text>
        </Box>
        {/* TODO: set the right color on obol-ui */}

        <Button css={{ color: "#011216", fontWeight: "$bold" }}>
          Read the Docs
        </Button>
      </Box>
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
          width={608*1.5}
          height={398*1.5}
        />
      </Box>
    </Box>
  );
};
