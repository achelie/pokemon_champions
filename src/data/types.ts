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
};

export const pokemonTypes = [
  { name: "Normal", zh: "一般", color: "#9fa19f", glyph: "●" },
  { name: "Flying", zh: "飞行", color: "#8db8e8", glyph: "↗" },
  { name: "Fire", zh: "火", color: "#ff612c", glyph: "▲" },
  { name: "Psychic", zh: "超能力", color: "#ff6675", glyph: "✦" },
  { name: "Water", zh: "水", color: "#2992ff", glyph: "◆" },
  { name: "Bug", zh: "虫", color: "#9fa424", glyph: "✣" },
  { name: "Electric", zh: "电", color: "#ffcd00", glyph: "◆" },
  { name: "Rock", zh: "岩石", color: "#afa981", glyph: "⬟" },
  { name: "Grass", zh: "草", color: "#42bf24", glyph: "◢" },
  { name: "Ghost", zh: "幽灵", color: "#6e4379", glyph: "✿" },
  { name: "Ice", zh: "冰", color: "#42d8ff", glyph: "✣" },
  { name: "Dragon", zh: "龙", color: "#5462d6", glyph: "♞" },
  { name: "Fighting", zh: "格斗", color: "#ff8100", glyph: "✚" },
  { name: "Dark", zh: "恶", color: "#4f4747", glyph: "◒" },
  { name: "Poison", zh: "毒", color: "#994dcf", glyph: "☣" },
  { name: "Steel", zh: "钢", color: "#6aaed3", glyph: "◇" },
  { name: "Ground", zh: "地面", color: "#915121", glyph: "◒" },
  { name: "Fairy", zh: "妖精", color: "#ffb1ff", glyph: "✹" }
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
