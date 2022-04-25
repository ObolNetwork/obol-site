import { Box, Text } from "@obolnetwork/obol-ui";
import Image, { ImageProps } from "next/image";

interface CardProps {
  image: ImageProps;
  heading: string;
  subheading: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props): JSX.Element => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "$xl",
        gap: "$xl",
        background: "rgba(252, 253, 252, 0.05)",
        backdropFilter: "blur(54px)",
        borderRadius: "$4",
        maxWidth: "25rem"
      }}
    >
      <Image {...props.image} alt={props.heading} />
      <Box
        css={{
          display: "flex",
          gap: "$md",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text css={{ fontWeight: "$bold" }} size="5" color="textLight">
          {props.heading}
        </Text>
        <Text
          css={{ lineHeight: "$base", color: "#9CC2C9", mb: "$xl" }}
          size="4"
        >
          {props.subheading}
        </Text>
      </Box>
      {props.children}
    </Box>
  );
};
