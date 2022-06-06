import {
  Button,
  Text,
  HeroSection as HeroSectionComponent,
} from "@obolnetwork/obol-ui";

export const HeroSection = (): JSX.Element => {
  return (
    <HeroSectionComponent
      heading="Building Distributed Validators for Ethereum"
      content={
        <>
          The Obol Network is an ecosystem for trust minimized staking that
          allows people to{" "}
          <Text css={{ display: "inline-block" }} color="create" glow>
            create
          </Text>
          ,
          <Text css={{ display: "inline" }} color="test" glow>
            {" "}
            test
          </Text>
          ,
          <Text css={{ display: "inline" }} color="obolGreen" glow>
            {" "}
            run
          </Text>{" "}
          &
          <Text css={{ display: "inline" }} color="coordinate" glow>
            {" "}
            co-ordinate
          </Text>{" "}
          distributed validators
        </>
      }
      css={{
        "@bp2": {
          mb: "100px",
        },
        "@md": {
          "& #heading-text": {
            fontSize: "$10",
          },
        },
      }}
    >
      <Button>Read the Docs</Button>
    </HeroSectionComponent>
  );
};

export default HeroSection;
