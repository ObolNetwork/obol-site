import { Button, Text, TwoColumnSection } from "@obolnetwork/obol-ui";
import { Section } from "../../atoms";

export const DistributeYourValidators = (): JSX.Element => {
  return (
    <Section>
      <TwoColumnSection
        css={{
          "& .column2": {
            "@sm": {
              marginTop: 42,
            },
          },
        }}
        preHeading={
          <Text css={{ display: "inline-block" }} color="create" glow>
            CREATE
          </Text>
        }
        heading="Distribute your Validators"
        content={
          <>
            Create a Distributed Validator Cluster with a group of Node Operators using the{" "}
            <Text css={{ display: "inline-block" }} color="create" glow>
              Distributed Validator Launchpad.
            </Text>
          </>
        }
        image={{
          basePath:
            "/assets/distributed-your-validators/distributed-your-validators.svg",
        }}
      >
        <Button color="create">Learn More</Button>
      </TwoColumnSection>
    </Section>
  );
};
