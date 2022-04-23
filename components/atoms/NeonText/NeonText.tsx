import { CSS } from "@obolnetwork/obol-ui/dist/stitches.config";
import { Box, Text } from "@obolnetwork/obol-ui";

interface NeonTextProps extends React.ComponentProps<typeof Text> {
  children?: React.ReactNode;
  css?: CSS;
}

export const NeonText: React.FC<NeonTextProps> = (props) => (
  <Box css={{ position: "relative" }}>
    <Text
      glow
      color={props.color}
      size={props.size}
      css={{ position: "absolute" }}
    >
      {props.children}
    </Text>
    <Text
      color={props.color}
      size={props.size}
      css={{ position: "absolute" }}
    >
      {props.children}
    </Text>
  </Box>
);
