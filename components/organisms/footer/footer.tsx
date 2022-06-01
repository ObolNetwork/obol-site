import { Footer as FooterSite, Box } from "@obolnetwork/obol-ui";

export const Footer = () => (
    <Box
    css={{
      px: "calc($3xl * 2)",
      py: "calc($2xl * 2)",
      backgroundColor: "$bg03",
      "@sm": { px: "$xl", py: "$2xl" }
    }}
  >
    <FooterSite />
  </Box>
);
