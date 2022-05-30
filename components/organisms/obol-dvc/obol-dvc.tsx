import {
  Text,
  Card,
  Container,
  ArrowForward,
  Box,
  Link,
  Image,
} from "@obolnetwork/obol-ui";

export const ObolDvc = () => {
  return (
    <Container alignItems="start">
      <Container
        css={{ width: "40%", "@sm": { width: "100%" }, gap: "$2xl" }}
        variant="textContent"
        ghost
      >
        <Text variant="h3">Obol Distributed Validator Cluster</Text>
        <Text variant="body">
          The Obol Network is responsible for fostering the adoption of
          multi-operator validation as a use case for distributed validator
          technology.
        </Text>
        <Text variant="body">
          Obol Clusters are multi operator fault tolerant beacon node clusters
          that enable a number of operators to fail and be repaired, without a
          validator going offline.
        </Text>
      </Container>
      <Container layout="row" variant="card">
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/assets/obol-dvc/obol-dvc.svg" width={387} height={317} alt="obol dvc" />
        </Box>
        <Container css={{ gap: "$2xl" }} variant="textContent" ghost>
          <Text variant="h5">Obol Distributed Validator Cluster</Text>
          <Text variant="body">
            {`Charon is Obol Network's distributed validator client and first step in enabling trustless validation.`}
          </Text>
          <Text variant="body">
            Charon conducts fault tolerant, high-availability validation,
            enabling a group of people to collectively run a validator across
            machines instead of on a single node.
          </Text>
          <Text variant="body">
            The more multi-operator clusters on mainnet the stronger Ethereum
            will become.
          </Text>
          <Link target="_blank" href="https://docs.obol.tech/">
            Learn More about Charon
            <ArrowForward size="md" />
          </Link>
        </Container>
      </Container>
      <Text variant="h4">
        Advantages of an Obol Distributed Validator Cluster
      </Text>
      <Container className="advantages-obol" layout="row" ghost>
        <Card
          image="/assets/advantages-obol/always-online.svg"
          imageWidth="280px"
          imageHeight="137px"
          variant="image"
          heading="Traditional Validator Node"
          subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same key sign conflicting messages the validator will be slashed."
        />
        <Card
          image="/assets/advantages-obol/key-security.svg"
          imageWidth="280px"
          imageHeight="137px"
          variant="image"
          heading="Distributed Validator Cluster"
          subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
        />
        <Card
          image="/assets/advantages-obol/no-single-operator-failure.svg"
          imageWidth="280px"
          imageHeight="137px"
          variant="image"
          heading="Distributed Validator Cluster"
          subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
        />
      </Container>
    </Container>
  );
};
