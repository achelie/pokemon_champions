export type PokemonTypeName =
  | "Normal"
  | "Flying"
  | "Fire"
  | "Psychic"
  | "Water"
  | "Bug"
  | "Electric"
  | "Rock"
  | "Grass"
  | "Ghost"
  | "Ice"
  | "Dragon"
  | "Fighting"
  | "Dark"
  | "Poison"
  | "Steel"
  | "Ground"
  | "Fairy";

export type PokemonTypeMeta = {
  name: PokemonTypeName;
  zh: string;
  color: string;
  glyph: string;
  icon: string;
};

export const pokemonTypes = [
  { name: "Normal", zh: "一般", color: "#9fa19f", glyph: "●", icon: "/images/types/Pokemon_Type_Icon_Normal.svg" },
  { name: "Flying", zh: "飞行", color: "#8db8e8", glyph: "↗", icon: "/images/types/Pokemon_Type_Icon_Flying.svg" },
  { name: "Fire", zh: "火", color: "#ff612c", glyph: "▲", icon: "/images/types/Pokemon_Type_Icon_Fire.svg" },
  { name: "Psychic", zh: "超能力", color: "#ff6675", glyph: "✦", icon: "/images/types/Pokemon_Type_Icon_Psychic.svg" },
  { name: "Water", zh: "水", color: "#2992ff", glyph: "◆", icon: "/images/types/Pokemon_Type_Icon_Water.svg" },
  { name: "Bug", zh: "虫", color: "#9fa424", glyph: "✣", icon: "/images/types/Pokemon_Type_Icon_Bug.svg" },
  { name: "Electric", zh: "电", color: "#ffcd00", glyph: "◆", icon: "/images/types/Pokemon_Type_Icon_Electric.svg" },
  { name: "Rock", zh: "岩石", color: "#afa981", glyph: "⬟", icon: "/images/types/Pokemon_Type_Icon_Rock.svg" },
  { name: "Grass", zh: "草", color: "#42bf24", glyph: "◢", icon: "/images/types/Pokemon_Type_Icon_Grass.svg" },
  { name: "Ghost", zh: "幽灵", color: "#6e4379", glyph: "✿", icon: "/images/types/Pokemon_Type_Icon_Ghost.svg" },
  { name: "Ice", zh: "冰", color: "#42d8ff", glyph: "✣", icon: "/images/types/Pokemon_Type_Icon_Ice.svg" },
  { name: "Dragon", zh: "龙", color: "#5462d6", glyph: "♞", icon: "/images/types/Pokemon_Type_Icon_Dragon.svg" },
  { name: "Fighting", zh: "格斗", color: "#ff8100", glyph: "✚", icon: "/images/types/Pokemon_Type_Icon_Fighting.svg" },
  { name: "Dark", zh: "恶", color: "#4f4747", glyph: "◒", icon: "/images/types/Pokemon_Type_Icon_Dark.svg" },
  { name: "Poison", zh: "毒", color: "#994dcf", glyph: "☣", icon: "/images/types/Pokemon_Type_Icon_Poison.svg" },
  { name: "Steel", zh: "钢", color: "#6aaed3", glyph: "◇", icon: "/images/types/Pokemon_Type_Icon_Steel.svg" },
  { name: "Ground", zh: "地面", color: "#915121", glyph: "◒", icon: "/images/types/Pokemon_Type_Icon_Ground.svg" },
  { name: "Fairy", zh: "妖精", color: "#ffb1ff", glyph: "✹", icon: "/images/types/Pokemon_Type_Icon_Fairy.svg" }
] satisfies PokemonTypeMeta[];

const typeByName = new Map(pokemonTypes.map((type) => [type.name.toLowerCase(), type]));

export function getPokemonTypeMeta(typeName: string) {
  return typeByName.get(typeName.trim().toLowerCase());
}

export function splitPokemonTypes(typeText: string) {
  return typeText
    .split("/")
    .map((type) => type.trim())
    .filter(Boolean);
}
