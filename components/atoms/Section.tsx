import { Box, styled } from "@obolnetwork/obol-ui";

export const Section = styled(Box, {
  px: "calc($3xl * 2)",
  backgroundColor: "$bg03",
  "@sm": { px: "$xl", py: "$2xl" },
});
