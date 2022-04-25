import { Box, Button, Link, Text } from "@obolnetwork/obol-ui";
import Image from "next/image";
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
        <Link variant="docs" target="_blank" href="https://docs.obol.tech/">
          Docs
        </Link>
        <Link variant="docs" target="_blank" href="https://blog.obol.tech/">
          Blog
        </Link>
        <Link
          variant="docs"
          target="_blank"
          href="https://jobs.lever.co/obol-tech/"
        >
          Jobs
        </Link>
        <Button
          as="a"
          target="_blank"
          href="https://discord.com/invite/n6ebKsX46w"
          variant="nav"
        >
         Join the Community
        </Button>
      </Box>
    </Box>
  );
};
