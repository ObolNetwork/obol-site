import { Box, Button } from "@obolnetwork/obol-ui";

export const CtaButtons = () => {
  return (
    <Box css={{ display: "flex", flexWrap: "wrap", gap: "$sm" }}>
      <Button
        as="a"
        target="_blank"
        href="https://discord.com/invite/n6ebKsX46w"
      >
        Join the Community
      </Button>
      <Button
        color="secondary"
        as="a"
        target="_blank"
        href="https://jobs.lever.co/obol-tech"
      >
        Join the Team
      </Button>
    </Box>
  );
};
