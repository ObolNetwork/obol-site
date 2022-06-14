import {
  Text,
  Card,
  Container,
  CreateIcon,
  TestIcon,
  RunIcon,
  Box,
} from "@obolnetwork/obol-ui";

export const BuildWithObol = () => {
  return (
    <Container>
      <Text variant="h3">Build with Obol</Text>
      <Box css={{ width: "stretch"}}>
        <Container layout="row" ghost>
          <Card
            image={<CreateIcon />}
            heading="Create"
            subheading="Create distributed validator keys as a group with the Distributed Validator Launchpad."
          />

          <Card
            image={<TestIcon />}
            heading="Test"
            subheading="Test your Obol Cluster on Obol's long-lived incentivised testnet."
          />
          <Card
            image={<RunIcon />}
            heading="Run"
            subheading="Run distributed validators on the main network to benefit from fault tolerant staking."
          />
        </Container>
      </Box>
      {/* <Text variant="h4">Use cases</Text>
      TODO: put back once we got the right info for this
      <Container
        ghost
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          "@sm": {
            gridTemplateColumns: "1fr",
          },
        }}
        fullWidth
      >
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case1.svg"
            heading="Exchanges"
            variant="image"
          />
        </Box>
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case2.svg"
            heading="Home Validator"
            variant="image"
          />
        </Box>
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case3.svg"
            heading="Custodians"
            variant="image"
          />
        </Box>
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case4.svg"
            heading="DeFi Vaults"
            variant="image"
          />
        </Box>
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case5.svg"
            heading="DAO Treasuries"
            variant="image"
            css={{
              "& div": {
                right: "3%",
              },
            }}
          />
        </Box>
        <Box>
          <Card
            imageWidth="195px"
            imageHeight="116px"
            image="/assets/build-with-obol/use-case6.svg"
            heading="Liquid Staking"
            variant="image"
          />
        </Box>
      </Container> */}
    </Container>
  );
};
