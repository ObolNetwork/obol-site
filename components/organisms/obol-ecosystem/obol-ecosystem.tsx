import {
  Box,
  Tabs,
  Text,
  Accordion,
  TeamMemberCard,
  EcosystemTabsProps,
  LogoCard,
  EcosystemCardProps,
} from "@obolnetwork/obol-ui";
import { motion } from "framer-motion";
import { Section } from "../../atoms";

const tabs: EcosystemTabsProps[] = [
  {
    tab: "Backers",
    items: [
      {
        heading: "a41",
        image: "/assets/obol-ecosystem/backers/a41.svg",
        logoCardLink: "https://a41.io/",
      },
      {
        heading: "Advanced Blockchain",
        image: "/assets/obol-ecosystem/backers/advanced-blockchain.png",
        logoCardLink: "https://www.advancedblockchain.com/",
      },
      {
        heading: "Archetype",
        image: "/assets/obol-ecosystem/backers/archetype.png",
        logoCardLink: "https://www.archetype.fund/",
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
        heading: "Blockscape",
        image: "/assets/obol-ecosystem/backers/blockspace.svg",
        logoCardLink: "https://blockscape.network/",
      },
      {
        heading: "Blocktower",
        image: "/assets/obol-ecosystem/backers/blocktower.png",
        logoCardLink: "https://blocktower.com/",
      },
      {
        heading: "Chorus One",
        image: "/assets/obol-ecosystem/backers/chorus.png",
        logoCardLink: "https://chorus.one/",
      },
      {
        heading: "Coinbase Ventures",
        image: "/assets/obol-ecosystem/backers/coinbase-ventures.png",
        logoCardLink: "https://www.coinbase.com/ventures",
      },
      {
        heading: "Cosmostation",
        image: "/assets/obol-ecosystem/backers/cosmostation.svg",
        logoCardLink: "https://cosmostation.io/",
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
        heading: "DSRV",
        image: "/assets/obol-ecosystem/backers/dsrv.svg",
        logoCardLink: "https://dsrvlabs.com/",
      },
      {
        heading: "Ethereal Ventures",
        image: "/assets/obol-ecosystem/backers/ethereal-ventures.png",
        logoCardLink: "http://www.etherealventures.com/",
      },
      {
        heading: "Everstake",
        image: "/assets/obol-ecosystem/backers/everstake.png",
        logoCardLink: "https://everstake.one/",
      },
      {
        heading: "Figment",
        image: "/assets/obol-ecosystem/backers/figment.png",
        logoCardLink: "https://www.figmentcapital.io/",
      },
      {
        heading: "IOSG Ventures",
        image: "/assets/obol-ecosystem/backers/iosg.png",
        logoCardLink: "https://iosg.vc/",
      },
      {
        heading: "The Lao",
        image: "/assets/obol-ecosystem/backers/lao.png",
        logoCardLink: "https://www.thelao.io/",
      },
      {
        heading: "Nascent",
        image: "/assets/obol-ecosystem/backers/nascent.png",
        logoCardLink: "https://nascent.xyz/",
      },
      {
        heading: "Pantera Capital",
        image: "/assets/obol-ecosystem/backers/pantera.png",
        logoCardLink: "https://panteracapital.com/",
      },
      {
        heading: "Placeholder",
        image: "/assets/obol-ecosystem/backers/placeholder.png",
        logoCardLink: "https://placeholder.vc/",
      },
      {
        heading: "Spartan Group",
        image: "/assets/obol-ecosystem/backers/spartan.png",
        logoCardLink: "https://spartangroup.io/",
      },
      {
        heading: "Stable Node",
        image: "/assets/obol-ecosystem/backers/stable-node.png",
        logoCardLink: "https://www.stablenode.xyz/",
      },
      {
        heading: "Stake Fish",
        image: "/assets/obol-ecosystem/backers/stakefish.png",
        logoCardLink: "https://stake.fish/en/",
      },
      {
        heading: "Stakely",
        image: "/assets/obol-ecosystem/backers/stakely.svg",
        logoCardLink: "https://stakely.io/",
      },
      {
        heading: "Staking Facilities",
        image: "/assets/obol-ecosystem/backers/staking-facilities.png",
        logoCardLink: "https://stakingfacilities.com/",
      },
      {
        heading: "Swift Staking",
        image: "/assets/obol-ecosystem/backers/swift-staking.png",
        logoCardLink: "https://swiftstaking.com/",
      },
      {
        heading: "Swiss Staking",
        image: "/assets/obol-ecosystem/backers/swiss-staking.png",
        logoCardLink: "https://swiss-staking.ch/",
      },
      {
        heading: "Yield Ventures",
        image: "/assets/obol-ecosystem/backers/yield-ventures.png",
        logoCardLink: "https://www.yieldventures.io/",
      },
    ],
  },
  {
    tab: "Core Team",
    component: "TeamMemberCard",
    items: [
      {
        heading: "Collin Myers",
        subheading: "Project Lead, Founder",
        links: [
          { link: "https://twitter.com/stakeeth", network: "twitter" },
          { link: "https://github.com/collinjmyers", network: "github" },
        ],

        image: "/assets/team/Collin.png",
      },
      {
        heading: "Oisín Kyne",
        subheading: "Head of Technology, Co-Founder",
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
        subheading: "Full Stack / UI Engineer",
        links: [
          { link: "https://twitter.com/f1miyamoto", network: "twitter" },
          { link: "https://github.com/f1lander", network: "github" },
        ],
      },
      {
        heading: "Richard Malone",
        image: "/assets/team/RichardMalone.png",
        subheading: "Head of Business",
        links: [
          { link: "https://twitter.com/crypto_malone", network: "twitter" },
          { link: "https://github.com/richardtmalone", network: "github" },
        ],
      },
      {
        heading: "Thomas Heremans",
        image: "/assets/team/Thomas.png",
        subheading: "Technical Project Manager",
        links: [
          { link: "https://twitter.com/cryp_thomas_", network: "twitter" },
          { link: "https://github.com/thomasheremans", network: "github" },
        ],
      },
      {
        heading: "Hanan Nouman",
        image: "/assets/team/Hanan.png",
        subheading: "Frontend Engineer",
        links: [
          { link: "https://twitter.com/hanannouman", network: "twitter" },
          { link: "https://github.com/HananINouman", network: "github" },
        ],
      },
      {
        heading: "Brett Li",
        image: "/assets/team/Brett.png",
        subheading: "Growth Lead",
        links: [
          { link: "https://twitter.com/ComposeBrett", network: "twitter" },
          { link: "https://github.com/Composeus", network: "github" },
        ],
      },
      {
        heading: "Jenia Barkanova",
        image: "/assets/team/Jenia.png",
        subheading: "Marketing Strategy Advisor",
        links: [{ link: "https://twitter.com/JeniaBark", network: "twitter" }],
      },
      {
        heading: "Francis Hackett",
        image: "/assets/team/Francis.png",
        subheading: "Legal Counsel",
        links: [{ link: "https://twitter.com/lexstake1", network: "twitter" }],
      },
      {
        heading: "Luke Hackett",
        image: "/assets/team/Luke.png",
        subheading: "Software Engineer",
        links: [
          { link: "https://twitter.com/Luke_ObolLabs", network: "twitter" },
          { link: "https://github.com/LukeHackett12", network: "github" },
        ],
      },
      {
        heading: "Nanni Sackmann",
        image: "/assets/team/Nanni.png",
        subheading: "Head of People",
        links: [{ link: "https://twitter.com/nannisack", network: "twitter" }],
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
          gridTemplateColumns: "1fr 1fr",
          gap: "$sm",
        },
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
