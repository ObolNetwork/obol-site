import { Box, Button, Link } from "@obolnetwork/obol-ui";
import Image from "next/image";
// import NextLink from "next/link";
export const Navbar = (): JSX.Element => {
  return (
    <Box css={{ display: "flex", width: "$full" }}>
      <Box css={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
        <Image src="/obol.svg" alt="Obol Logo" width={103} height={24} />
      </Box>
      <Box
        css={{
          display: "flex",
          flex: 1,
          gap: "$1xl",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link variant="docs">Docs</Link>
        <Link variant="docs">Blog</Link>
        <Link variant="docs">Jobs</Link>
        <Button variant="nav">Join the Community</Button>
      </Box>
    </Box>
  );
};
