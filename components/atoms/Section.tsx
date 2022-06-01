import { Box } from "@obolnetwork/obol-ui";
import { CSS } from "@obolnetwork/obol-ui/dist/stitches.config";

export const Section: React.FC<{ css?: CSS }> = ({ children, css }) => (
  <Box
    css={{
      px: "calc($3xl * 2)",
      backgroundColor: "$bg03",
      "@sm": { px: "$xl", py: "$2xl" },
      ...css,
    }}
  >
    {children}
  </Box>
);
