
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
        <Text
          css={{ fontWeight: "$bold", lineHeight: "$taller" }}
          size="9"
          color="textLight"
        >
          Build with Obol
        </Text>
  
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
      </Container>
    );
  };
  