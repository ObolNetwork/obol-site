import { Text, Card, Container } from "@obolnetwork/obol-ui";

export const HowDvsWork = () => {
  return (
    <Container alignItems="start" layout="row">
      <Container alignItems="start" ghost layout="row">
        <Container variant="textContent" ghost>
          <Text variant="h3">How Distributed Validators work</Text>
          <Text variant="body">
            Distributed Validators are a technology for distributing the job of
            an Ethereum validator across a cluster of nodes in order to improve
            resilience (safety, liveness, or both) as compared to running a
            validator on a single machine.
          </Text>
        </Container>
        <Card
          image="/assets/dvs-work/image1.svg"
          variant="image"
          heading="Traditional Validator Node"
          subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same key sign conflicting messages the validator will be slashed."
          link="/index.html"
          contentAlign="start"
        />
        <Card
          image="/assets/dvs-work/image2.svg"
          variant="image"
          heading="Distributed Validator Cluster"
          subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
          link="/index.html"
          contentAlign="start"
          gradientBg
        />
      </Container>
    </Container>
  );
};
