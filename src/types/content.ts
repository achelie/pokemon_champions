export type BattleFormat = "Single" | "Double" | "Both";
export type TierRank = "SS" | "S" | "A";
export type TierListFormatKey = "double" | "single";

export type Guide = {
  title: string;
  href: string;
  description: string;
  keywords: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PokemonTierEntry = {
  pokemonId?: string;
  name: string;
  type: string;
  role: string;
  format: BattleFormat;
  reason: string;
};

export type TierList = Record<TierRank, PokemonTierEntry[]>;
export type TierListsByFormat = Record<TierListFormatKey, TierList>;

export type TierRecommendationCategory = "mega" | "utility" | "damageDealers";

export type TierRecommendation = {
  id: string;
  pokemonId: string;
  name: string;
  category: TierRecommendationCategory;
  type: string;
  role: string;
  format: BattleFormat;
  moves: [string, string, string, string];
  nature: string;
  ability: string;
  baseStats: PokemonStats;
  evs: PokemonStats;
  itemId: string;
  itemName: string;
  explanation: string;
  megaAbility?: string;
  megaBaseStats?: PokemonStats;
  megaEvs?: PokemonStats;
  sourceImages: string[];
};

export type TierRecommendationGroup = {
  id: TierRecommendationCategory;
  title: string;
  description: string;
  entries: TierRecommendation[];
};

export type Team = {
  id: string;
  title: string;
  format: Exclude<BattleFormat, "Both">;
  description: string;
  members: TeamMemberBuild[];
};

export type TeamMemberBuild = {
  pokemonId: string;
  displayName: string;
  gender?: "Male" | "Female" | "Genderless";
  types: string[];
  ability: string;
  nature: string;
  itemId?: string;
  itemName?: string;
  moves: [string, string, string, string];
  stats: PokemonStats;
  evs: PokemonStats;
  statModifiers?: {
    increased?: keyof PokemonStats;
    decreased?: keyof PokemonStats;
  };
};

export type Build = {
  name: string;
  format: BattleFormat;
  role: string;
  nature: string;
  moves: string[];
  notes: string;
};

export type PokemonAsset = {
  slug: string;
  name: string;
  image: string;
  sourceUrl: string;
  sourceImageUrl: string;
  usage: number;
  baseStats: PokemonStats;
  generation: string;
  isMega: boolean;
  moves: string[];
  abilities: string[];
};

export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

export type ItemAsset = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  sourceUrl: string;
  sourceImageUrl: string;
};
