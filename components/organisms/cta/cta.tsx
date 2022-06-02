import {
  Container,
  MediaQueryKeys,
  Text,
  useMediaQuery,
} from "@obolnetwork/obol-ui";
import { CtaButtons } from "../../molecules";
import BgImage from "../../../public/backgrounds/cta-bg.svg";
import BgImageLeft from "../../../public/backgrounds/cta-bg-left.svg";
import { Section } from "../../atoms";

export const Cta = (): JSX.Element => {
  const Content = () => (
    <Container
      alignItems="start"
      ghost
      css={{
        gap: "$2xl",
        height: "305px",
        "@sm": { justifyContent: "start" },
      }}
      fullWidth
    >
      <Text variant={{ "@initial": "h2", "@sm": "h3" }}>
        Joint the Ecosystem
      </Text>
      <CtaButtons />
    </Container>
  );
  return (
    <>
      <Section
        css={{
          backgroundColor: "$bg01",
          background: `url(${BgImage.src}) 40px bottom no-repeat`,
          "@bp2": {
            display: "none",
          },
        }}
      >
        <Content />
      </Section>

      <Section
        css={{
          "@sm": { display: "none" },
          backgroundColor: "$bg01",
          background: `url(${BgImage.src}) right bottom no-repeat, url(${BgImageLeft.src}) left top no-repeat`,
          p: "40px",
        }}
      >
        <Content />
      </Section>
    </>
  );
};
