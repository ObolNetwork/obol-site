import {
  Navbar as NavbarComponent,
  Link,
  Button,
  Box,
} from "@obolnetwork/obol-ui";

export const Navbar = (): JSX.Element => {
  return (
    <Box>
      <NavbarComponent>
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
          Careers
        </Link>
        <Button
          as="a"
          target="_blank"
          href="https://discord.com/invite/n6ebKsX46w"
          variant="nav"
        >
          Join the Community
        </Button>
      </NavbarComponent>
    </Box>
  );
};
