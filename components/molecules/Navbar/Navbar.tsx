import { Box, Button, Link, Text } from "@obolnetwork/obol-ui";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery, MediaQueryKeys } from "../../utils/hooks";

export const Navbar = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const screenDownSm = useMediaQuery(MediaQueryKeys.sm);

  return (
    <Box
      css={{
        display: "flex",
        pt: "$xl",
        px: "calc($2xl * 2)",
        "@sm": {
          px: 0,
          pt: "16px",
          pb: "16px",
        },
      }}
    >
      <Box css={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
        {screenDownSm ? (
          <Image
            src={`/assets/obol-icon-light-bg.svg`}
            alt="Obol"
            width={50}
            height={27}
          />
        ) : (
          <Image
            src="/obol.svg"
            alt="Obol Logo"
            width={103}
            height={24}
          />
        )}
      </Box>
      {screenDownSm ? (
        <Box
          css={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            src={`/assets/menu.svg`}
            alt="Obol"
            width={38}
            height={38}
            priority
          />
        </Box>
      ) : (
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
      )}
    </Box>
  );
};
