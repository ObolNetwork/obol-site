import { Box, Text } from "@obolnetwork/obol-ui";
import { Card } from "../../molecules/card/card";

export const OurMission = () => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "$1xl",
        "@sm": { px: "$lg" },
        gap: "$lg",
        background: "rgba(12, 35, 42, 0.5)",
        border: "2px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "$5",
        width: "auto",
      }}
    >
      <Text
        css={{ fontWeight: "$bold", lineHeight: "$taller" }}
        size="9"
        color="textLight"
      >
        Our Mission
      </Text>

      <Box
        css={{
          display: "flex",
          "@sm": { flexDirection: "column", px: "$md" },
          gap: "$xl",
        }}
      >
        <Card
          image={{ src: "/assets/code.svg", width: "48px", height: "48px" }}
          heading="Open Source"
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
        />
        <Card
          image={{
            src: "/assets/public-good.svg",
            width: "48px",
            height: "48px",
          }}
          heading="Public Good"
          subheading="All fee's collected in Obol V1 will be granted through retroactive public goods funding. Long term problems call for regenerative circular economics."
        />
        <Card
          image={{
            src: "/assets/trust-minimised.svg",
            width: "48px",
            height: "48px",
          }}
          heading="Trust Minimised"
          subheading="Obol is committed to using technology and cryptography to reduce the need to trust any single staking operator. Removing this trusts is a core pillar to keeping stake decentralized."
        />
      </Box>
    </Box>
  );
};
