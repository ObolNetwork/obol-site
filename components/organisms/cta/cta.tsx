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
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);

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
      {screenDownSm ? (
        <Section
          css={{
            backgroundColor: "$bg01",
            background: `url(${BgImage.src}) 40px bottom no-repeat`,
            "@sm": {
              p: "40px",
            },
          }}
        >
          <Content />
        </Section>
      ) : (
        <Section
          css={{
            backgroundColor: "$bg01",
            background: `url(${BgImage.src}) right bottom no-repeat, url(${BgImageLeft.src}) left top no-repeat`,
            "@sm": {
              p: "40px",
            },
          }}
        >
          <Content />
        </Section>
      )}
    </>
  );
};
