import { Footer as FooterSite, Box } from "@obolnetwork/obol-ui";

export const Footer = () => (
  <Box
    css={{
      px: "calc($3xl * 2)",
      py: "calc($2xl * 2)",
      backgroundColor: "$bg03",
      "@sm": { px: "$xl", py: "$2xl" },
    }}
  >
    <FooterSite
      links={[
        {
          title: "Docs",
          links: [
            {
              title: "Intro to Obol",
              link: "https://docs.obol.tech/docs/int/Overview",
            },
            {
              title: "Charon",
              link: "https://docs.obol.tech/docs/charon/intro",
            },
            {
              title: "DV Launchpad",
              link: "https://docs.obol.tech/docs/dvl/intro",
            },
            {
              title: "Brand Kit",
              link: "https://blog.obol.tech/branding",
            },
          ],
        },
        {
          title: "Community",
          links: [
            { title: "Discord", link: "https://discord.com/invite/n6ebKsX46w" },
            { title: "Twitter", link: "https://twitter.com/ObolNetwork" },
          ],
        },
        {
          title: "More",
          links: [
            { title: "Careers", link: "https://jobs.lever.co/obol-tech" },
            { title: "Blog", link: "https://blog.obol.tech" },
            { title: "Github", link: "https://github.com/ObolNetwork" },
            { title: "Privacy Policy", link: "/privacy-policy" },
            { title: "Terms of Service", link: "/terms.pdf" },
          ],
        },
      ]}
    />
  </Box>
);
