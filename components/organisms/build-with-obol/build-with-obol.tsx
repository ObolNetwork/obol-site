import {
  Text,
  Card,
  Container,
  CreateIcon,
  TestIcon,
  RunIcon,
} from "@obolnetwork/obol-ui";

export const BuildWithObol = () => {
  return (
    <Container>
      <Text variant="h3">Build with Obol</Text>

      <Container layout="row" ghost fullWidth>
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
      <Text variant="h4">Use cases</Text>
      <Container layout="row" ghost fullWidth>
        <Card
          imageWidth="195px"
          imageHeight="116px"
          image="/assets/build-with-obol/use-case1.svg"
          heading="Exchanges"
          variant="image"
          css={{
            "& div": {
              right: "3%",
            },
          }}
        />

        <Card
          imageWidth="195px"
          imageHeight="116px"
          image="/assets/build-with-obol/use-case2.svg"
          heading="Home Validator"
          variant="image"
          css={{
            "& div": {
              right: "3%",
            },
          }}
        />
        <Card
          imageWidth="195px"
          imageHeight="116px"
          image="/assets/build-with-obol/use-case3.svg"
          heading="Custodians"
          variant="image"
          css={{
            "& div": {
              right: "3%",
            },
          }}
        />
      </Container>
      <Container layout="row" ghost fullWidth>
        <Card
          imageWidth="195px"
          imageHeight="116px"
          image="/assets/build-with-obol/use-case4.svg"
          heading="DeFi Vaults"
          variant="image"
          css={{
            "& div": {
              right: "3%",
            },
          }}
        />

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
        <Card
          imageWidth="195px"
          imageHeight="116px"
          image="/assets/build-with-obol/use-case6.svg"
          heading="Liquid Staking"
          variant="image"
          css={{
            "& div": {
              right: "3%",
            },
          }}
        />
      </Container>
    </Container>
  );
};
