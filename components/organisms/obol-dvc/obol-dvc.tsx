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
        <Text variant="h3">Distributed Validator Cluster</Text>
        <Text variant="body">
          The Obol Network is responsible for fostering the adoption of
          multi-operator validation as a use case for Distributed Validator
          Technology.
        </Text>
        <Text variant="body">
          Distributed Validator Clusters are multi-operator, fault-tolerant clusters
          of servers running Ethereum Execution clients, Consensus clients, Distributed Validator clients, 
          and Validator clients; that combined enable a subset of servers to fail and recover, without a
          Distributed Validator running on this cluster going offline.
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
          <Image
            src="/assets/obol-dvc/obol-dvc.svg"
            width={387}
            height={317}
            alt="obol dvc"
          />
        </Box>
        <Container css={{ gap: "$2xl" }} variant="textContent" ghost>
          <Text variant="h5">Distributed Validator Cluster</Text>
          <Text variant="body">
            <Link target="_blank" href="https://github.com/ObolNetwork/charon" style={{display:"inline"}}>Charon</Link> is Obol Network&apos;s Distributed Validator client and first step in enabling trust-minimised validation.
          </Text>
          <Text variant="body">
            Charon enables fault tolerant, high-availability validation,
            empowering a group of people to collectively run a validator across multiple
            machines instead of on a single one.
          </Text>
          <Text variant="body">
            The more multi-operator clusters on mainnet the more immutable and resilient to attack Ethereum
            will become.
          </Text>
          <Link target="_blank" href="https://docs.obol.tech/docs/dv/introducing-charon">
            Learn More about Charon
            <ArrowForward size="md" />
          </Link>
        </Container>
      </Container>
      <Text variant="h4">
        Advantages of a Distributed Validator Cluster
      </Text>
      <Box>
        <Container className="advantages-obol" layout="row" ghost>
          <Card
            image="/assets/advantages-obol/always-online.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Geographic Redundancy"
            subheading="Existing validators have a single point of failure. Only one validator client instance can be online and signing messages at any time. If two validators with the same private key sign conflicting messages the validator will be slashed."
          />
          <Card
            image="/assets/advantages-obol/key-security.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Key Distribution"
            subheading="Distributed Validator Clusters share one private key, no single node in the cluster has the full private key, and the full private key never exists in full anywhere. This makes validator key compromise more difficult for an attacker."
          />
          <Card
            image="/assets/advantages-obol/no-single-operator-failure.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Fault Tolerance"
            subheading="Distributed Validator Clusters require only a subset of nodes to be online to produce signatures. This allows for fault-tolerant validators to be built, and allows a Distributed Validator to remain online despite hardware failure."
          />
        </Container>
      </Box>
    </Container>
  );
};
