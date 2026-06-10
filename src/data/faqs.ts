import type { FAQItem } from "@/types/content";

export const faqsByPage: Record<string, FAQItem[]> = {
  home: [
    {
      question: "What is Pokemon Champions Guide?",
      answer: "Pokemon Champions Guide is an English strategy site focused on PvP team building, tier lists, and launch guides rather than a full wiki."
    },
    {
      question: "Is the Pokemon Champions meta final?",
      answer: "No. Rankings and builds should still be updated as more mobile launch data and future balance changes become available."
    },
    {
      question: "Does Pokemon Champions support Single and Double Battle?",
      answer: "Yes. Official battle formats include Single Battle and Double Battle, with Ranked, Casual, and Private Battles."
    }
  ],
  "tier-list": [
    {
      question: "Who are the best Pokemon in Pokemon Champions?",
      answer: "The current top picks differ by format. Use the Double Battle and Single Battle tabs to compare the strongest launch-window rankings."
    },
    {
      question: "Should I copy the top tier exactly?",
      answer: "No. Use SS and S tier as starting points, then adjust for your format, role coverage, and confirmed compatibility."
    }
  ],
  "best-teams": [
    {
      question: "What is the best ranked team in Pokemon Champions?",
      answer: "There is no confirmed best ranked team yet. The current Double Battle example is a complete build card for testing a Mega Ampharos setup plan."
    },
    {
      question: "Can these teams work in both Single and Double Battle?",
      answer: "Single and Double Battle reward different positioning and support choices. This page separates the formats so each team can be judged in the right context."
    }
  ],
  "beginner-guide": [
    {
      question: "Should beginners start with Ranked Battles?",
      answer: "Beginners should learn basic roles in Casual or Private Battles before playing Ranked seriously."
    },
    {
      question: "What should my first team include?",
      answer: "Start with a fast attacker, a bulky stabilizer, and one utility Pokemon, then add coverage for common threats."
    }
  ],
  "pokemon-home": [
    {
      question: "Can I transfer every Pokemon through Pokemon HOME?",
      answer: "Do not assume every Pokemon is compatible. Check official compatibility before transferring."
    },
    {
      question: "What is Pokemon HOME best used for in Pokemon Champions?",
      answer: "Pokemon HOME is best used to bring eligible Pokemon into your battle plans once official compatibility and restrictions are confirmed."
    }
  ],
  "mobile-release": [
    {
      question: "When is Pokemon Champions coming to mobile?",
      answer: "The announced mobile release date for iOS and Android is June 17, 2026."
    },
    {
      question: "Should mobile players pre-register?",
      answer: "If pre-registration is available in your region, it can help you prepare for launch notifications and platform availability."
    }
  ],
  "mega-raichu": [
    {
      question: "Are Mega Raichu X and Mega Raichu Y builds final?",
      answer: "No. Builds are early recommendations and should be updated after mobile launch data."
    },
    {
      question: "What teammates help Mega Raichu?",
      answer: "Mega Raichu teams should test partners that cover Ground-type pressure, provide safer entry turns, or improve speed control."
    }
  ]
};
