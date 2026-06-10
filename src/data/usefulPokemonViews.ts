import type { TierRecommendationCategory } from "@/types/content";

export type UsefulPokemonViewKey = "mega" | "utility" | "damage-dealers";

export type UsefulPokemonView = {
  key: UsefulPokemonViewKey;
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  recommendationGroupId: TierRecommendationCategory;
};

export const usefulPokemonViews = [
  {
    key: "mega",
    label: "Mega Pokemon Recommendations",
    shortLabel: "Mega Builds",
    title: "Mega Pokemon Recommendations",
    description:
      "Mega builds define the first version of many teams. Use this section when you want full Mega build cards with moves, nature, ability, stats, EVs, and item images.",
    recommendationGroupId: "mega"
  },
  {
    key: "utility",
    label: "General Utility Pokemon Recommendations",
    shortLabel: "Utility Picks",
    title: "General Utility Pokemon Recommendations",
    description:
      "Utility Pokemon provide speed control, Fake Out, redirection, weather, screens, field control, and other support roles around your main attacker.",
    recommendationGroupId: "utility"
  },
  {
    key: "damage-dealers",
    label: "Other Damage Dealers Recommendations",
    shortLabel: "Damage Dealers",
    title: "Other Damage Dealers Recommendations",
    description:
      "Damage dealers give the team a second win path through Trick Room, rain, priority, setup, field support, or late-game cleanup.",
    recommendationGroupId: "damageDealers"
  }
] satisfies UsefulPokemonView[];

export function resolveUsefulPokemonView(value: string | string[] | undefined) {
  if (typeof value !== "string") {
    return usefulPokemonViews[0];
  }
  return usefulPokemonViews.find((view) => view.key === value) ?? usefulPokemonViews[0];
}
