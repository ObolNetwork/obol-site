import {
  Box,
  LogoCard,
  Tabs,
  Text,
  Accordion,
  TeamMemberCard,
  EcosystemTabsProps,
} from "@obolnetwork/obol-ui";
import { motion } from "framer-motion";
import { Section } from "../../atoms";

const tabs: EcosystemTabsProps[] = [
  {
    tab: "Network Validators",
    items: [
      {
        heading: "Coinbase",
        image: "/assets/obol-ecosystem/network-validators/coinbase.svg",
      },
      {
        heading: "Consensys",
        image: "/assets/obol-ecosystem/network-validators/consensys.svg",
      },
      {
        heading: "Blockdaemon",
        image: "/assets/obol-ecosystem/network-validators/blockdaemon.svg",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/network-validators/figment.svg",
      },
      {
        heading: "Lido",
        image: "/assets/obol-ecosystem/network-validators/lido.svg",
      },
      {
        heading: "Staking Facilities",
        image:
          "/assets/obol-ecosystem/network-validators/staking-facilities.svg",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/network-validators/stake-fish.svg",
      },
      {
        heading: "Chorus",
        image: "/assets/obol-ecosystem/network-validators/chorus.svg",
      },
      {
        heading: "RockX",
        image: "/assets/obol-ecosystem/network-validators/rockx.svg",
      },
      {
        heading: "Skillz",
        image: "/assets/obol-ecosystem/network-validators/skillz.svg",
      },
    ],
  },
  {
    tab: "Network Contributors",
    items: [
      {
        heading: "Coinbase",
        image: "/assets/obol-ecosystem/network-validators/coinbase.svg",
      },
      {
        heading: "Consensys",
        image: "/assets/obol-ecosystem/network-validators/consensys.svg",
      },
      {
        heading: "Blockdaemon",
        image: "/assets/obol-ecosystem/network-validators/blockdaemon.svg",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/network-validators/figment.svg",
      },
      {
        heading: "Lido",
        image: "/assets/obol-ecosystem/network-validators/lido.svg",
      },
      {
        heading: "Staking Facilities",
        image:
          "/assets/obol-ecosystem/network-validators/staking-facilities.svg",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/network-validators/stake-fish.svg",
      },
      {
        heading: "Chorus",
        image: "/assets/obol-ecosystem/network-validators/chorus.svg",
      },
      {
        heading: "RockX",
        image: "/assets/obol-ecosystem/network-validators/rockx.svg",
      },
      {
        heading: "Skillz",
        image: "/assets/obol-ecosystem/network-validators/skillz.svg",
      },
    ],
  },
  {
    tab: "Backers",
    items: [
      {
        heading: "Coinbase",
        image: "/assets/obol-ecosystem/network-validators/coinbase.svg",
      },
      {
        heading: "Consensys",
        image: "/assets/obol-ecosystem/network-validators/consensys.svg",
      },
      {
        heading: "Blockdaemon",
        image: "/assets/obol-ecosystem/network-validators/blockdaemon.svg",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/network-validators/figment.svg",
      },
      {
        heading: "Lido",
        image: "/assets/obol-ecosystem/network-validators/lido.svg",
      },
      {
        heading: "Staking Facilities",
        image:
          "/assets/obol-ecosystem/network-validators/staking-facilities.svg",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/network-validators/stake-fish.svg",
      },
      {
        heading: "Chorus",
        image: "/assets/obol-ecosystem/network-validators/chorus.svg",
      },
      {
        heading: "RockX",
        image: "/assets/obol-ecosystem/network-validators/rockx.svg",
      },
      {
        heading: "Skillz",
        image: "/assets/obol-ecosystem/network-validators/skillz.svg",
      },
    ],
  },
  {
    tab: "Advisors",
    items: [
      {
        heading: "Coinbase",
        image: "/assets/obol-ecosystem/network-validators/coinbase.svg",
      },
      {
        heading: "Consensys",
        image: "/assets/obol-ecosystem/network-validators/consensys.svg",
      },
      {
        heading: "Blockdaemon",
        image: "/assets/obol-ecosystem/network-validators/blockdaemon.svg",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/network-validators/figment.svg",
      },
      {
        heading: "Lido",
        image: "/assets/obol-ecosystem/network-validators/lido.svg",
      },
      {
        heading: "Staking Facilities",
        image:
          "/assets/obol-ecosystem/network-validators/staking-facilities.svg",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/network-validators/stake-fish.svg",
      },
      {
        heading: "Chorus",
        image: "/assets/obol-ecosystem/network-validators/chorus.svg",
      },
      {
        heading: "RockX",
        image: "/assets/obol-ecosystem/network-validators/rockx.svg",
      },
      {
        heading: "Skillz",
        image: "/assets/obol-ecosystem/network-validators/skillz.svg",
      },
    ],
  },
  {
    tab: "Core Team",
    component: "TeamMemberCard",
    items: [
      {
        heading: "Collin Myers",
        subheading: "CEO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],

        image: "/assets/team/Collin.png",
      },
      {
        heading: "Oisín Kyne",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
        image: "/assets/team/Oisin.jpg",
      },
      {
        heading: "Aly Saleh",
        image: "/assets/team/Saleh.jpg",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
      },
      {
        heading: "Corver Roos",
        image: "/assets/team/Corver.png",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
      },
      {
        heading: "Chris Battenfield",
        image: "/assets/team/Chris.png",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
      },
      {
        heading: "Dhruv Bodani",
        image: "/assets/team/Dhruv.png",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
      },
      {
        heading: "Abishek Kumar",
        image: "/assets/team/Abhishek.png",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
        ],
      },
      {
        heading: "Edax Uclés",
        image: "/assets/team/Edax.png",
        subheading: "CTO Founder",
        links: [
          { link: "https://github.com/collin", network: "twitter" },
          { link: "https://github.com/collin", network: "github" },
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
      }}
    >
      {props?.items?.map((card: any, idxCard: number) => (
        <LogoCard
          className="logo-card"
          key={`logo-card-${card.heading}-${idxCard}`}
          width="288px"
          height="120px"
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
                      width="288px"
                      height="120px"
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
