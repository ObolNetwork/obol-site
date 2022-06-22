import {
  Box,
  Tabs,
  Text,
  Accordion,
  TeamMemberCard,
  EcosystemTabsProps,
  LogoCard
} from "@obolnetwork/obol-ui";
import { motion } from "framer-motion";
import { Section } from "../../atoms";

const tabs: EcosystemTabsProps[] = [
  {
    tab: "Backers",
    items: [
      {
        heading: "Advanced Blockchain",
        image: "/assets/obol-ecosystem/backers/advanced-blockchain.png",
        logoCardLink: "https://www.advancedblockchain.com/",
      },
      {
        heading: "Kiln",
        image: "/assets/obol-ecosystem/backers/kiln.svg",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Archetype",
        image: "/assets/obol-ecosystem/backers/archetype.png",
        logoCardLink: "https://archetypecp.com/",
      },
      {
        heading: "Attestant",
        image: "/assets/obol-ecosystem/backers/attestant.png",
        logoCardLink: "https://www.attestant.io/",
      },
      {
        heading: "Blockdaemon",
        image: "/assets/obol-ecosystem/backers/blockdaemon.png",
        logoCardLink: "https://blockdaemon.com/",
      },
      {
        heading: "Chorus",
        image: "/assets/obol-ecosystem/backers/chorus.png",
        logoCardLink: "https://chorus.one/",
      },
      {
        heading: "Coinbase Ventures",
        image: "/assets/obol-ecosystem/backers/coinbase-ventures.png",
        logoCardLink: "https://www.coinbase.com/ventures",
      },
      {
        heading: "Defi Alliance",
        image: "/assets/obol-ecosystem/backers/defi-alliance.png",
        logoCardLink: "https://alliance.xyz/",
      },
      {
        heading: "Delphi",
        image: "/assets/obol-ecosystem/backers/delphi.png",
        logoCardLink: "https://delphidigital.io/",
      },
      {
        heading: "Divergence",
        image: "/assets/obol-ecosystem/backers/divergence.png",
        logoCardLink: "https://www.div.vc/",
      },
      {
        heading: "Ethereal Ventures",
        image: "/assets/obol-ecosystem/backers/ethereal-ventures.png",
        logoCardLink: "http://www.etherealventures.com/",
      },
      {
        heading: "Everstake",
        image: "/assets/obol-ecosystem/backers/everstake.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/backers/figment.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "IOSG Ventures",
        image: "/assets/obol-ecosystem/backers/iosg.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "The Lao",
        image: "/assets/obol-ecosystem/backers/lao.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Stable Node",
        image: "/assets/obol-ecosystem/backers/stable-node.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/backers/stakefish.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Staking Facilities",
        image: "/assets/obol-ecosystem/backers/staking-facilities.png",
        logoCardLink: "https://www.kiln.fi/",
      },
      {
        heading: "Yield Ventures",
        image: "/assets/obol-ecosystem/backers/yield-ventures.png",
        logoCardLink: "https://www.kiln.fi/",
      },
    ],
  },
  {
    tab: "Core Team",
    component: "TeamMemberCard",
    items: [
      {
        heading: "Collin Myers",
        subheading: "Co-Founder",
        links: [
          { link: "https://twitter.com/stakeeth", network: "twitter" },
          { link: "https://github.com/collinjmyers", network: "github" },
        ],

        image: "/assets/team/Collin.png",
      },
      {
        heading: "Oisín Kyne",
        subheading: "Co-Founder",
        links: [
          { link: "https://twitter.com/oisinkyne", network: "twitter" },
          { link: "https://github.com/oisinkyne", network: "github" },
        ],
        image: "/assets/team/Oisin.jpg",
      },
      {
        heading: "Aly Saleh",
        image: "/assets/team/Saleh.jpg",
        subheading: "DevOps Lead",
        links: [
          { link: "https://twitter.com/eth2devops", network: "twitter" },
          { link: "https://github.com/eth2devops", network: "github" },
        ],
      },
      {
        heading: "Corver Roos",
        image: "/assets/team/Corver.png",
        subheading: "Tech Lead",
        links: [
          { link: "https://twitter.com/corverdev", network: "twitter" },
          { link: "https://github.com/corverroos", network: "github" },
        ],
      },
      {
        heading: "Chris Battenfield",
        image: "/assets/team/Chris.png",
        subheading: "Product Lead",
        links: [
          { link: "https://twitter.com/battenfield", network: "twitter" },
          { link: "https://github.com/battenfield", network: "github" },
        ],
      },
      {
        heading: "Dhruv Bodani",
        image: "/assets/team/Dhruv.png",
        subheading: "Software Engineer",
        links: [
          { link: "https://twitter.com/dhruvbodani", network: "twitter" },
          { link: "https://github.com/dB2510", network: "github" },
        ],
      },
      {
        heading: "Abishek Kumar",
        image: "/assets/team/Abhishek.png",
        subheading: "Software Engineer",
        links: [
          { link: "https://twitter.com/xenowits", network: "twitter" },
          { link: "https://github.com/xenowits", network: "github" },
        ],
      },
      {
        heading: "Edax Uclés",
        image: "/assets/team/Edax.png",
        subheading: "Software Engineer",
        links: [
          { link: "https://twitter.com/f1miyamoto", network: "twitter" },
          { link: "https://github.com/f1lander", network: "github" },
        ],
      },
    ],
  },
];

export const ObolEcosystem = () => {
  const TeamMemberCardContent = (props: any) => (
    <Box
      className="team-member-card-content"
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$sm",
        pt: "$sm",
        "@sm": {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        },
        "@xs": {
          display: "grid",
          gridTemplateColumns: "1fr",
        },
      }}
    >
      {props?.items?.map((card: any, idxCard: number) => (
        <motion.div
          key={`team-member-card-${card.heading}-${idxCard}`}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <TeamMemberCard {...card} />
        </motion.div>
      ))}
    </Box>
  );

  const LogoCardContent = (props: any) => (
    <Box
      className="logo-card-content"
      css={{
        display: "flex",
        flexWrap: "wrap",
        gap: "$sm",
        pt: "$lg",
        "@xs": {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "$sm",
        }
      }}
    >
      {props?.items?.map((card: any, idxCard: number) => (
        <LogoCard
          className="logo-card"
          key={`logo-card-${card.heading}-${idxCard}`}
         
          {...card}
        />
      ))}
    </Box>
  );

  const AccordionSection = () => (
    <Box css={{ "@bp2": { display: "none" } }}>
      <Accordion.Root type="single" defaultValue={`tab-0`} collapsible>
        {tabs.map((item, idx) => (
          <Accordion.Item
            key={`accordion-item-tab-${idx.toString()}`}
            value={`tab-${idx.toString()}`}
          >
            <Accordion.Trigger>{item.tab}</Accordion.Trigger>
            <Accordion.Content>
              {item.component === "TeamMemberCard" ? (
                <TeamMemberCardContent {...item} />
              ) : (
                <LogoCardContent {...item} />
              )}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );

  const TabsSection = () => (
    <Box css={{ "@sm": { display: "none" } }}>
      <Tabs.Tabs defaultValue={tabs[0].tab}>
        <Tabs.TabsList
          aria-label="Obol Ecosystem"
          css={{ "@md": { gap: "$xs" } }}
        >
          {tabs.map((item, idx) => (
            <Tabs.TabsTrigger
              key={`tab-trigger-${idx.toString()}`}
              value={item.tab}
            >
              {item.tab}
            </Tabs.TabsTrigger>
          ))}
        </Tabs.TabsList>
        {tabs.map((item, idx) => (
          <Tabs.TabsContent
            key={`tabs-content-${idx.toString()}`}
            value={item.tab}
          >
            <Box
              css={{
                display: "flex",
                flexWrap: "wrap",
                gap: "$xl",
                pt: "$lg",
              }}
            >
              {item?.items?.map((card, idxCard) => (
                <>
                  {item.component === "TeamMemberCard" ? (
                    <TeamMemberCard
                      key={`tabs-team-member-card-${card.heading}-${idxCard}`}
                      {...card}
                    />
                  ) : (
                    <LogoCard
                      key={`tabs-logo-card-${card.heading}-${idxCard}`}
                    
                      {...card}
                    />
                  )}
                </>
              ))}
            </Box>
          </Tabs.TabsContent>
        ))}
      </Tabs.Tabs>
    </Box>
  );

  return (
    <Section
      css={{
        display: "flex",
        flexDirection: "column",
        py: "calc($3xl * 2)",
        gap: "$2xl",
      }}
    >
      <Text variant="h3">Obol Ecosystem</Text>
      <AccordionSection /> <TabsSection />
    </Section>
  );
};
