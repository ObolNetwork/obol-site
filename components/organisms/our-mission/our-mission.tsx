import {
  Text,
  Card,
  CodeIcon,
  PublicGoodIcon,
  TrustMinimisedIcon,
  Container,
  Box,
} from "@obolnetwork/obol-ui";

export const OurMission = () => {
  return (
    <Container>
      <Text
        css={{ fontWeight: "$bold", lineHeight: "$taller" }}
        size="9"
        color="textLight"
      >
        Our Mission
      </Text>
      <Box>
        <Container layout="row" ghost>
          <Card
            image={<CodeIcon />}
            heading="Open Source"
            subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
          />
          <Card
            image={<PublicGoodIcon />}
            heading="Public Good"
            subheading="All fee's collected in Obol V1 will be granted through retroactive public goods funding. Long term problems call for regenerative circular economics."
          />
          <Card
            image={<TrustMinimisedIcon />}
            heading="Trust Minimised"
            subheading="Obol is committed to using technology and cryptography to reduce the need to trust any single staking operator. Removing this trust is a core pillar to keep stake decentralized."
          />
        </Container>
      </Box>
    </Container>
  );
};
