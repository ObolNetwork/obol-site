import { Text, Card, Container } from "@obolnetwork/obol-ui";

export const HowDvsWork = () => {
  return (
    <Container>
      <Container variant="textContent" ghost>
        <Text variant="h3">How Distributed Validators work</Text>
        <Text variant="body">
          Distributed Validator Technology enables the duties of an Ethereum
          validator to be performed across a cluster of nodes in order to
          improve resilience (safety, liveness, or both) as compared to running
          a validator on a single node.
        </Text>
      </Container>
      <Container alignItems="start" ghost layout="row">
        <Card
          image="/assets/dvs-work/image1.svg"
          variant="image"
          heading="Traditional Validator Node"
          subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same private key sign conflicting messages the validator will be slashed."
          link="https://docs.obol.tech/docs/int/key-concepts"
          contentAlign="start"
        />
        <Card
          image="/assets/dvs-work/image2.svg"
          variant="image"
          heading="Distributed Validator Cluster"
          subheading="Distributed Validator nodes operate together as a cluster through the inclusion of distributed validator middleware clients called Charon, which coordinate what each validator signs, and reconstitutes the partial signatures into an aggregate signature for the Distributed Validator."
          link="https://docs.obol.tech/docs/int/key-concepts#distributed-validator-node"
          contentAlign="start"
          gradientBg
        />
      </Container>
    </Container>
  );
};
