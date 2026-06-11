import type { PokemonTypeName } from "@/data/types";
import type { PokemonStats } from "@/types/content";

export type PokemonMeta = {
  types: PokemonTypeName[];
  baseStats: PokemonStats;
  usage?: number;
};

const s = (
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
): PokemonStats => ({ hp, attack, defense, specialAttack, specialDefense, speed });

const byId: Record<string, PokemonMeta> = {
  // ===== A =====
  abomasnow: { types: ["Grass", "Ice"], baseStats: s(90, 92, 75, 92, 85, 60) , usage: 0.27},
  "abomasnow-mega": { types: ["Grass", "Ice"], baseStats: s(90, 132, 105, 132, 105, 30) },
  absol: { types: ["Dark"], baseStats: s(65, 130, 60, 75, 60, 75) },
  "absol-mega": { types: ["Dark"], baseStats: s(65, 150, 60, 115, 60, 115) },
  aegislash: { types: ["Steel", "Ghost"], baseStats: s(60, 50, 140, 50, 140, 60) , usage: 4.81},
  "aegislash-blade": { types: ["Steel", "Ghost"], baseStats: s(60, 140, 50, 140, 50, 60) },
  aerodactyl: { types: ["Rock", "Flying"], baseStats: s(80, 105, 65, 60, 75, 130) , usage: 16.15},
  "aerodactyl-mega": { types: ["Rock", "Flying"], baseStats: s(80, 135, 85, 70, 95, 150) },
  aggron: { types: ["Steel", "Rock"], baseStats: s(70, 110, 180, 60, 60, 50) },
  "aggron-mega": { types: ["Steel"], baseStats: s(70, 140, 230, 60, 80, 50) },
  alakazam: { types: ["Psychic"], baseStats: s(55, 50, 45, 135, 95, 120) },
  "alakazam-mega": { types: ["Psychic"], baseStats: s(55, 50, 65, 175, 105, 150) },
  alcremie: { types: ["Fairy"], baseStats: s(65, 60, 75, 110, 121, 64) },
  altaria: { types: ["Dragon", "Flying"], baseStats: s(75, 70, 90, 70, 105, 80) },
  "altaria-mega": { types: ["Dragon", "Fairy"], baseStats: s(75, 110, 110, 110, 105, 80) },
  ampharos: { types: ["Electric"], baseStats: s(90, 75, 85, 115, 90, 55) },
  "ampharos-mega": { types: ["Electric", "Dragon"], baseStats: s(90, 95, 105, 165, 110, 45) },
  appletun: { types: ["Grass", "Dragon"], baseStats: s(110, 85, 80, 100, 80, 30) },
  araquanid: { types: ["Water", "Bug"], baseStats: s(68, 70, 92, 50, 132, 42) , usage: 0.33},
  arbok: { types: ["Poison"], baseStats: s(60, 95, 69, 65, 79, 80) },
  arcanine: { types: ["Fire"], baseStats: s(90, 110, 80, 100, 80, 95) , usage: 0.33},
  "arcanine-hisui": { types: ["Fire", "Rock"], baseStats: s(95, 115, 80, 95, 80, 90) , usage: 2.54, usage: 2.54}
  archaludon: { types: ["Steel", "Dragon"], baseStats: s(90, 105, 130, 125, 65, 85) },
  ariados: { types: ["Bug", "Poison"], baseStats: s(70, 90, 70, 60, 70, 40) },
  armarouge: { types: ["Fire", "Psychic"], baseStats: s(85, 60, 100, 125, 80, 75) , usage: 0},
  aromatisse: { types: ["Fairy"], baseStats: s(101, 72, 72, 99, 89, 29) },
  audino: { types: ["Normal"], baseStats: s(103, 60, 86, 60, 86, 50) },
  "audino-mega": { types: ["Normal", "Fairy"], baseStats: s(103, 60, 126, 80, 126, 50) },
  aurorus: { types: ["Rock", "Ice"], baseStats: s(123, 77, 72, 99, 92, 58) },
  avalugg: { types: ["Ice"], baseStats: s(95, 117, 184, 44, 46, 28) },
  "avalugg-hisui": { types: ["Ice", "Rock"], baseStats: s(95, 127, 184, 34, 36, 38) },
  azumarill: { types: ["Water", "Fairy"], baseStats: s(100, 50, 80, 60, 80, 50) , usage: 0.47},

  // ===== B =====
  banette: { types: ["Ghost"], baseStats: s(64, 115, 65, 83, 63, 65) },
  "banette-mega": { types: ["Ghost"], baseStats: s(64, 165, 75, 93, 83, 75) },
  basculegion: { types: ["Water", "Ghost"], baseStats: s(120, 112, 65, 80, 75, 78) , usage: 53.47},
  "basculegion-f": { types: ["Water", "Ghost"], baseStats: s(120, 92, 65, 100, 75, 78) },
  bastiodon: { types: ["Rock", "Steel"], baseStats: s(60, 52, 168, 47, 138, 30) },
  beartic: { types: ["Ice"], baseStats: s(95, 130, 80, 70, 80, 50) },
  beedrill: { types: ["Bug", "Poison"], baseStats: s(65, 90, 40, 45, 80, 75) },
  "beedrill-mega": { types: ["Bug", "Poison"], baseStats: s(65, 150, 40, 15, 80, 145) },
  bellibolt: { types: ["Electric"], baseStats: s(109, 64, 91, 103, 83, 45) },
  blastoise: { types: ["Water"], baseStats: s(79, 83, 100, 85, 105, 78) , usage: 1.87},

  // ===== C =====
  camerupt: { types: ["Fire", "Ground"], baseStats: s(70, 100, 70, 105, 75, 40) , usage: 1.13},
  "camerupt-mega": { types: ["Fire", "Ground"], baseStats: s(70, 120, 100, 145, 105, 20) },
  castform: { types: ["Normal"], baseStats: s(70, 70, 70, 70, 70, 70) },
  "castform-rainy": { types: ["Water"], baseStats: s(70, 70, 70, 70, 70, 70) },
  "castform-snowy": { types: ["Ice"], baseStats: s(70, 70, 70, 70, 70, 70) },
  "castform-sunny": { types: ["Fire"], baseStats: s(70, 70, 70, 70, 70, 70) },
  ceruledge: { types: ["Fire", "Ghost"], baseStats: s(75, 125, 80, 60, 100, 85) , usage: 1.34},
  chandelure: { types: ["Ghost", "Fire"], baseStats: s(60, 55, 90, 145, 90, 80) },
  "chandelure-mega": { types: ["Ghost", "Fire"], baseStats: s(60, 75, 110, 175, 110, 90) },
  charizard: { types: ["Fire", "Flying"], baseStats: s(78, 84, 78, 109, 85, 100) , usage: 41.39},
  "charizard-mega-x": { types: ["Fire", "Dragon"], baseStats: s(78, 130, 111, 130, 85, 100) },
  "charizard-mega-y": { types: ["Fire", "Flying"], baseStats: s(78, 104, 78, 159, 115, 100) },
  chesnaught: { types: ["Grass", "Fighting"], baseStats: s(88, 107, 122, 74, 75, 64) },
  "chesnaught-mega": { types: ["Grass", "Fighting"], baseStats: s(88, 137, 172, 74, 115, 44) },
  chimecho: { types: ["Psychic"], baseStats: s(75, 50, 80, 95, 90, 65) },
  "chimecho-mega": { types: ["Psychic", "Steel"], baseStats: s(75, 50, 110, 135, 120, 65) },
  clawitzer: { types: ["Water"], baseStats: s(71, 73, 88, 120, 89, 59) },
  clefable: { types: ["Fairy"], baseStats: s(95, 70, 73, 95, 90, 60) },
  "clefable-mega": { types: ["Fairy", "Flying"], baseStats: s(95, 80, 93, 135, 110, 70) },
  cofagrigus: { types: ["Ghost"], baseStats: s(58, 50, 145, 95, 105, 30) },
  conkeldurr: { types: ["Fighting"], baseStats: s(105, 140, 95, 55, 65, 45) },
  corviknight: { types: ["Flying", "Steel"], baseStats: s(98, 87, 105, 53, 85, 67) , usage: 6.41},
  crabominable: { types: ["Fighting", "Ice"], baseStats: s(97, 132, 77, 62, 67, 43) },
  "crabominable-mega": { types: ["Fighting", "Ice"], baseStats: s(97, 157, 122, 62, 107, 33) },

  // ===== D =====
  decidueye: { types: ["Grass", "Ghost"], baseStats: s(78, 107, 75, 100, 100, 70) },
  "decidueye-hisui": { types: ["Grass", "Fighting"], baseStats: s(88, 112, 80, 95, 95, 60) },
  dedenne: { types: ["Electric", "Fairy"], baseStats: s(67, 58, 57, 81, 67, 101) },
  delphox: { types: ["Fire", "Psychic"], baseStats: s(75, 69, 72, 114, 100, 104) , usage: 5.87},
  "delphox-mega": { types: ["Fire", "Psychic"], baseStats: s(75, 69, 72, 159, 125, 134) },
  diggersby: { types: ["Normal", "Ground"], baseStats: s(85, 56, 77, 50, 77, 78) },
  ditto: { types: ["Normal"], baseStats: s(48, 48, 48, 48, 48, 48) },
  dragapult: { types: ["Dragon", "Ghost"], baseStats: s(88, 120, 75, 100, 75, 142) },
  dragonite: { types: ["Dragon", "Flying"], baseStats: s(91, 134, 95, 100, 100, 80) , usage: 11.95},
  "dragonite-mega": { types: ["Dragon", "Flying"], baseStats: s(91, 124, 115, 145, 125, 100) },
  drampa: { types: ["Normal", "Dragon"], baseStats: s(78, 60, 85, 135, 91, 36) },
  "drampa-mega": { types: ["Normal", "Dragon"], baseStats: s(78, 85, 110, 160, 116, 36) },

  // ===== E =====
  emboar: { types: ["Fire", "Fighting"], baseStats: s(110, 123, 65, 100, 65, 65) },
  "emboar-mega": { types: ["Fire", "Fighting"], baseStats: s(110, 148, 75, 110, 110, 75) },
  emolga: { types: ["Electric", "Flying"], baseStats: s(55, 75, 60, 75, 60, 103) },
  empoleon: { types: ["Water", "Steel"], baseStats: s(84, 86, 88, 111, 101, 60) },
  espathra: { types: ["Psychic"], baseStats: s(95, 60, 60, 101, 60, 105) , usage: 2.6},
  espeon: { types: ["Psychic"], baseStats: s(65, 65, 60, 130, 95, 110) },
  "eteral-floette-mega": { types: ["Fairy"], baseStats: s(74, 85, 87, 155, 148, 102) },
  excadrill: { types: ["Ground", "Steel"], baseStats: s(110, 135, 60, 50, 65, 88) , usage: 3.6},
  "excadrill-mega": { types: ["Ground", "Steel"], baseStats: s(110, 165, 100, 65, 65, 103) },

  // ===== F =====
  farigiraf: { types: ["Normal", "Psychic"], baseStats: s(120, 90, 70, 110, 70, 60) , usage: 9.35},
  feraligatr: { types: ["Water"], baseStats: s(85, 105, 100, 79, 83, 78) },
  "feraligatr-mega": { types: ["Water", "Dragon"], baseStats: s(85, 160, 125, 89, 93, 78) },
  flapple: { types: ["Grass", "Dragon"], baseStats: s(70, 110, 80, 95, 60, 70) },
  flareon: { types: ["Fire"], baseStats: s(65, 130, 60, 95, 110, 65) },
  floette: { types: ["Fairy"], baseStats: s(54, 45, 47, 75, 98, 52) },
  "floette-blue": { types: ["Fairy"], baseStats: s(54, 45, 47, 75, 98, 52) },
  "floette-eternal": { types: ["Fairy"], baseStats: s(74, 65, 67, 125, 128, 92) , usage: 42.66, usage: 42.66}
  "floette-orange": { types: ["Fairy"], baseStats: s(54, 45, 47, 75, 98, 52) },
  "floette-white": { types: ["Fairy"], baseStats: s(54, 45, 47, 75, 98, 52) },
  "floette-yellow": { types: ["Fairy"], baseStats: s(54, 45, 47, 75, 98, 52) },
  florges: { types: ["Fairy"], baseStats: s(78, 65, 68, 112, 154, 75) },
  "florges-blue": { types: ["Fairy"], baseStats: s(78, 65, 68, 112, 154, 75) },
  "florges-orange": { types: ["Fairy"], baseStats: s(78, 65, 68, 112, 154, 75) },
  "florges-white": { types: ["Fairy"], baseStats: s(78, 65, 68, 112, 154, 75) },
  "florges-yellow": { types: ["Fairy"], baseStats: s(78, 65, 68, 112, 154, 75) },
  forretress: { types: ["Bug", "Steel"], baseStats: s(75, 90, 140, 60, 60, 40) },
  froslass: { types: ["Ice", "Ghost"], baseStats: s(70, 80, 70, 80, 70, 110) , usage: 11.35},
  "froslass-mega": { types: ["Ice", "Ghost"], baseStats: s(70, 80, 70, 140, 100, 120) },
  furfrou: { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-dandy": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-debutante": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-diamond": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-heart": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-kabuki": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-la-reine": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-matron": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-pharaoh": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },
  "furfrou-star": { types: ["Normal"], baseStats: s(75, 80, 60, 65, 90, 102) },

  // ===== G =====
  gallade: { types: ["Psychic", "Fighting"], baseStats: s(68, 125, 65, 65, 115, 80) , usage: 0.27},
  "gallade-mega": { types: ["Psychic", "Fighting"], baseStats: s(68, 165, 95, 65, 115, 110) },
  garbodor: { types: ["Poison"], baseStats: s(80, 95, 82, 60, 82, 75) },
  garchomp: { types: ["Dragon", "Ground"], baseStats: s(108, 130, 95, 80, 85, 102) , usage: 53.67},
  "garchomp-mega": { types: ["Dragon", "Ground"], baseStats: s(108, 170, 115, 120, 95, 92) },
  gardevoir: { types: ["Psychic", "Fairy"], baseStats: s(68, 65, 65, 125, 115, 80) , usage: 3.07},
  "gardevoir-mega": { types: ["Psychic", "Fairy"], baseStats: s(68, 85, 65, 165, 135, 100) },
  garganacl: { types: ["Rock"], baseStats: s(100, 100, 130, 45, 90, 35) },
  gengar: { types: ["Ghost", "Poison"], baseStats: s(60, 65, 60, 130, 75, 110) , usage: 5.01},
  "gengar-mega": { types: ["Ghost", "Poison"], baseStats: s(60, 65, 80, 170, 95, 130) },
  glaceon: { types: ["Ice"], baseStats: s(65, 60, 110, 130, 95, 65) },
  glalie: { types: ["Ice"], baseStats: s(80, 80, 80, 80, 80, 80) },
  "glalie-mega": { types: ["Ice"], baseStats: s(80, 120, 80, 120, 80, 100) },
  glimmora: { types: ["Rock", "Poison"], baseStats: s(83, 55, 90, 130, 81, 86) , usage: 6.94},
  "glimmora-mega": { types: ["Rock", "Poison"], baseStats: s(83, 90, 105, 150, 96, 101) },
  gliscor: { types: ["Ground", "Flying"], baseStats: s(75, 95, 125, 45, 75, 95) },
  golurk: { types: ["Ground", "Ghost"], baseStats: s(89, 124, 80, 55, 80, 55) },
  "golurk-mega": { types: ["Ground", "Ghost"], baseStats: s(89, 159, 105, 70, 105, 55) },
  goodra: { types: ["Dragon"], baseStats: s(90, 100, 70, 110, 150, 80) },
  "goodra-hisui": { types: ["Steel", "Dragon"], baseStats: s(80, 100, 100, 110, 150, 60) },
  gothitelle: { types: ["Psychic"], baseStats: s(70, 55, 95, 95, 110, 65) },
  gourgeist: { types: ["Ghost", "Grass"], baseStats: s(65, 90, 122, 58, 75, 84) },
  "gourgeist-large": { types: ["Ghost", "Grass"], baseStats: s(75, 95, 122, 58, 75, 69) },
  "gourgeist-small": { types: ["Ghost", "Grass"], baseStats: s(55, 85, 122, 58, 75, 99) },
  "gourgeist-super": { types: ["Ghost", "Grass"], baseStats: s(85, 100, 122, 58, 75, 54) },
  greninja: { types: ["Water", "Dark"], baseStats: s(72, 95, 67, 103, 71, 122) },
  "greninja-mega": { types: ["Water", "Dark"], baseStats: s(72, 125, 77, 133, 81, 142) },
  gyarados: { types: ["Water", "Flying"], baseStats: s(95, 125, 79, 60, 100, 81) , usage: 1.6},
  "gyarados-mega": { types: ["Water", "Dark"], baseStats: s(95, 155, 109, 70, 130, 81) },

  // ===== H =====
  hatterene: { types: ["Psychic", "Fairy"], baseStats: s(57, 90, 95, 136, 103, 29) },
  hawlucha: { types: ["Fighting", "Flying"], baseStats: s(78, 92, 75, 74, 63, 118) },
  "hawlucha-mega": { types: ["Fighting", "Flying"], baseStats: s(78, 137, 100, 74, 93, 118) },
  heliolisk: { types: ["Electric", "Normal"], baseStats: s(62, 55, 52, 109, 94, 109) },
  heracross: { types: ["Bug", "Fighting"], baseStats: s(80, 125, 75, 40, 95, 85) , usage: 0},
  "heracross-mega": { types: ["Bug", "Fighting"], baseStats: s(80, 185, 115, 40, 105, 75) },
  hippowdon: { types: ["Ground"], baseStats: s(108, 112, 118, 68, 72, 47) },
  houndoom: { types: ["Dark", "Fire"], baseStats: s(75, 90, 50, 110, 80, 95) },
  "houndoom-mega": { types: ["Dark", "Fire"], baseStats: s(75, 90, 90, 140, 90, 115) },
  hydrapple: { types: ["Grass", "Dragon"], baseStats: s(106, 80, 110, 120, 80, 44) },
  hydreigon: { types: ["Dark", "Dragon"], baseStats: s(92, 105, 90, 125, 90, 98) , usage: 3.54},

  // ===== I =====
  incineroar: { types: ["Fire", "Dark"], baseStats: s(95, 115, 90, 80, 90, 60) , usage: 42.86},
  infernape: { types: ["Fire", "Fighting"], baseStats: s(76, 104, 71, 104, 71, 108) },

  // ===== J =====
  jolteon: { types: ["Electric"], baseStats: s(65, 65, 60, 110, 95, 130) },

  // ===== K =====
  kangaskhan: { types: ["Normal"], baseStats: s(105, 95, 80, 40, 80, 90) , usage: 3.87},
  "kangaskhan-mega": { types: ["Normal"], baseStats: s(105, 125, 100, 60, 100, 100) },
  kingambit: { types: ["Dark", "Steel"], baseStats: s(100, 135, 120, 60, 85, 50) , usage: 56.21},
  kleavor: { types: ["Bug", "Rock"], baseStats: s(70, 135, 95, 45, 70, 85) },
  klefki: { types: ["Steel", "Fairy"], baseStats: s(57, 80, 91, 80, 87, 75) },
  "kommo-o": { types: ["Dragon", "Fighting"], baseStats: s(75, 110, 125, 100, 105, 85) , usage: 4.74, usage: 4.74}
  krookodile: { types: ["Ground", "Dark"], baseStats: s(95, 117, 80, 65, 70, 92) },

  // ===== L =====
  leafeon: { types: ["Grass"], baseStats: s(65, 110, 130, 60, 65, 95) },
  liepard: { types: ["Dark"], baseStats: s(64, 88, 50, 88, 50, 106) },
  lopunny: { types: ["Normal"], baseStats: s(65, 76, 84, 54, 96, 105) , usage: 0.27},
  "lopunny-mega": { types: ["Normal", "Fighting"], baseStats: s(65, 136, 94, 54, 96, 135) },
  lucario: { types: ["Fighting", "Steel"], baseStats: s(70, 110, 70, 115, 70, 90) , usage: 0.13},
  "lucario-mega": { types: ["Fighting", "Steel"], baseStats: s(70, 145, 88, 140, 70, 112) },
  luxray: { types: ["Electric"], baseStats: s(80, 120, 79, 95, 79, 70) },
  lycanroc: { types: ["Rock"], baseStats: s(75, 115, 65, 55, 65, 112) },
  "lycanroc-dusk": { types: ["Rock"], baseStats: s(75, 117, 65, 55, 65, 110) , usage: 3.07, usage: 3.07}
  "lycanroc-midnight": { types: ["Rock"], baseStats: s(85, 115, 75, 55, 75, 82) },

  // ===== M =====
  machamp: { types: ["Fighting"], baseStats: s(90, 130, 80, 65, 85, 55) },
  mamoswine: { types: ["Ice", "Ground"], baseStats: s(110, 130, 80, 70, 60, 80) },
  manectric: { types: ["Electric"], baseStats: s(70, 75, 60, 105, 60, 105) , usage: 0.47},
  "manectric-mega": { types: ["Electric"], baseStats: s(70, 75, 80, 135, 80, 135) },
  maushold: { types: ["Normal"], baseStats: s(74, 75, 70, 65, 75, 111) , usage: 6.74},
  "maushold-four": { types: ["Normal"], baseStats: s(74, 75, 70, 65, 75, 111) },
  medicham: { types: ["Fighting", "Psychic"], baseStats: s(60, 60, 75, 60, 75, 80) },
  "medicham-mega": { types: ["Fighting", "Psychic"], baseStats: s(60, 100, 85, 80, 85, 100) },
  meganium: { types: ["Grass"], baseStats: s(80, 82, 100, 83, 100, 80) },
  "meganium-mega": { types: ["Grass", "Fairy"], baseStats: s(80, 92, 115, 143, 115, 80) },
  meowscarada: { types: ["Grass", "Dark"], baseStats: s(76, 110, 70, 81, 70, 123) },
  meowstic: { types: ["Psychic"], baseStats: s(74, 48, 76, 83, 81, 104) },
  "meowstic-f": { types: ["Psychic"], baseStats: s(74, 48, 76, 83, 81, 104) },
  "meowstic-mega": { types: ["Psychic"], baseStats: s(74, 48, 76, 143, 101, 124) },
  milotic: { types: ["Water"], baseStats: s(95, 60, 79, 100, 125, 81) , usage: 2.07},
  mimikyu: { types: ["Ghost", "Fairy"], baseStats: s(55, 90, 80, 50, 105, 96) },
  "mimikyu-busted": { types: ["Ghost", "Fairy"], baseStats: s(55, 90, 80, 50, 105, 96) },
  morpeko: { types: ["Electric", "Dark"], baseStats: s(58, 95, 58, 70, 58, 97) },
  "morpeko-hangry": { types: ["Electric", "Dark"], baseStats: s(58, 95, 58, 70, 58, 97) },
  "mr-rime": { types: ["Ice", "Psychic"], baseStats: s(80, 85, 75, 110, 100, 70) },
  mudsdale: { types: ["Ground"], baseStats: s(100, 125, 100, 55, 85, 35) },

  // ===== N =====
  ninetales: { types: ["Fire"], baseStats: s(73, 76, 75, 81, 100, 100) },
  "ninetales-alola": { types: ["Ice", "Fairy"], baseStats: s(73, 67, 75, 81, 100, 109) , usage: 2.54, usage: 2.54}
  noivern: { types: ["Flying", "Dragon"], baseStats: s(85, 70, 80, 97, 80, 123) },

  // ===== O =====
  oranguru: { types: ["Normal", "Psychic"], baseStats: s(90, 60, 80, 90, 110, 60) , usage: 0},
  orthworm: { types: ["Steel"], baseStats: s(70, 85, 145, 60, 55, 65) },

  // ===== P =====
  palafin: { types: ["Water"], baseStats: s(100, 70, 72, 53, 62, 100) , usage: 4.21},
  "palafin-hero": { types: ["Water"], baseStats: s(100, 160, 97, 106, 87, 100) },
  pangoro: { types: ["Fighting", "Dark"], baseStats: s(95, 124, 78, 69, 71, 58) },
  passimian: { types: ["Fighting"], baseStats: s(100, 120, 90, 40, 60, 80) },
  pelipper: { types: ["Water", "Flying"], baseStats: s(60, 50, 100, 95, 70, 65) , usage: 6.07},
  pidgeot: { types: ["Normal", "Flying"], baseStats: s(83, 80, 75, 70, 70, 101) },
  "pidgeot-mega": { types: ["Normal", "Flying"], baseStats: s(83, 80, 80, 135, 80, 121) },
  pikachu: { types: ["Electric"], baseStats: s(35, 55, 40, 50, 50, 90) },
  pinsir: { types: ["Bug"], baseStats: s(65, 125, 100, 55, 70, 85) },
  "pinsir-mega": { types: ["Bug", "Flying"], baseStats: s(65, 155, 120, 65, 90, 105) },
  politoed: { types: ["Water"], baseStats: s(90, 75, 75, 90, 100, 70) , usage: 3.47},
  polteageist: { types: ["Ghost"], baseStats: s(60, 65, 65, 134, 114, 70) },
  "polteageist-antique": { types: ["Ghost"], baseStats: s(60, 65, 65, 134, 114, 70) },
  primarina: { types: ["Water", "Fairy"], baseStats: s(80, 74, 74, 126, 116, 60) , usage: 0.47},

  // ===== Q =====
  quaquaval: { types: ["Water", "Fighting"], baseStats: s(85, 120, 80, 85, 75, 85) },

  // ===== R =====
  raichu: { types: ["Electric"], baseStats: s(60, 90, 55, 90, 80, 110) },
  "raichu-alola": { types: ["Electric", "Psychic"], baseStats: s(60, 85, 50, 95, 85, 110) },
  rampardos: { types: ["Rock"], baseStats: s(97, 165, 60, 65, 50, 58) },
  reuniclus: { types: ["Psychic"], baseStats: s(110, 65, 75, 125, 85, 30) },
  rhyperior: { types: ["Ground", "Rock"], baseStats: s(115, 140, 130, 55, 55, 40) },
  roserade: { types: ["Grass", "Poison"], baseStats: s(60, 70, 65, 125, 105, 90) },
  rotom: { types: ["Electric", "Ghost"], baseStats: s(50, 50, 77, 95, 77, 91) },
  "rotom-fan": { types: ["Electric", "Flying"], baseStats: s(50, 65, 107, 105, 107, 86) },
  "rotom-frost": { types: ["Electric", "Ice"], baseStats: s(50, 65, 107, 105, 107, 86) },
  "rotom-heat": { types: ["Electric", "Fire"], baseStats: s(50, 65, 107, 105, 107, 86) , usage: 0.13, usage: 0.13}
  "rotom-mow": { types: ["Electric", "Grass"], baseStats: s(50, 65, 107, 105, 107, 86) , usage: 0.13}
  "rotom-wash": { types: ["Electric", "Water"], baseStats: s(50, 65, 107, 105, 107, 86) , usage: 5.61}
  runerigus: { types: ["Ground", "Ghost"], baseStats: s(58, 95, 145, 50, 105, 30) },

  // ===== S =====
  sableye: { types: ["Dark", "Ghost"], baseStats: s(50, 75, 75, 65, 65, 50) , usage: 1.54},
  "sableye-mega": { types: ["Dark", "Ghost"], baseStats: s(50, 85, 125, 85, 115, 20) },
  salazzle: { types: ["Poison", "Fire"], baseStats: s(68, 64, 60, 111, 60, 117) },
  samurott: { types: ["Water"], baseStats: s(95, 100, 85, 108, 70, 70) },
  "samurott-hisui": { types: ["Water", "Dark"], baseStats: s(90, 108, 80, 100, 65, 85) , usage: 0.33, usage: 0.33}
  sandaconda: { types: ["Ground"], baseStats: s(72, 107, 125, 65, 70, 71) },
  scizor: { types: ["Bug", "Steel"], baseStats: s(70, 130, 100, 55, 80, 65) , usage: 2.74},
  "scizor-mega": { types: ["Bug", "Steel"], baseStats: s(70, 150, 140, 65, 100, 75) },
  scovillain: { types: ["Grass", "Fire"], baseStats: s(65, 108, 65, 108, 65, 75) , usage: 6.81},
  "scovillain-mega": { types: ["Grass", "Fire"], baseStats: s(65, 138, 85, 138, 85, 75) },
  serperior: { types: ["Grass"], baseStats: s(75, 75, 95, 75, 95, 113) , usage: 0.4},
  sharpedo: { types: ["Water", "Dark"], baseStats: s(70, 120, 40, 95, 40, 95) },
  "sharpedo-mega": { types: ["Water", "Dark"], baseStats: s(70, 140, 70, 110, 65, 105) },
  simipour: { types: ["Water"], baseStats: s(75, 98, 63, 98, 63, 101) },
  simisage: { types: ["Grass"], baseStats: s(75, 98, 63, 98, 63, 101) },
  simisear: { types: ["Fire"], baseStats: s(75, 98, 63, 98, 63, 101) },
  sinistcha: { types: ["Grass", "Ghost"], baseStats: s(71, 60, 106, 121, 80, 70) , usage: 29.24},
  "sinistcha-masterpiece": { types: ["Grass", "Ghost"], baseStats: s(71, 60, 106, 121, 80, 70) },
  skarmory: { types: ["Steel", "Flying"], baseStats: s(65, 80, 140, 40, 70, 70) , usage: 1.13},
  "skarmory-mega": { types: ["Steel", "Flying"], baseStats: s(65, 140, 110, 40, 100, 110) },
  skeledirge: { types: ["Fire", "Ghost"], baseStats: s(104, 75, 100, 110, 75, 66) },
  slowbro: { types: ["Water", "Psychic"], baseStats: s(95, 75, 110, 100, 80, 30) },
  "slowbro-galar": { types: ["Poison", "Psychic"], baseStats: s(95, 100, 95, 100, 70, 30) },
  "slowbro-mega": { types: ["Water", "Psychic"], baseStats: s(95, 75, 180, 130, 80, 30) },
  slowking: { types: ["Water", "Psychic"], baseStats: s(95, 75, 80, 100, 110, 30) },
  "slowking-galar": { types: ["Poison", "Psychic"], baseStats: s(95, 65, 80, 110, 110, 30) },
  slurpuff: { types: ["Fairy"], baseStats: s(82, 80, 86, 85, 75, 72) },
  sneasler: { types: ["Fighting", "Poison"], baseStats: s(80, 130, 60, 40, 80, 120) , usage: 35.51},
  snorlax: { types: ["Normal"], baseStats: s(160, 110, 65, 65, 110, 30) },
  spiritomb: { types: ["Ghost", "Dark"], baseStats: s(50, 92, 108, 92, 108, 35) },
  starmie: { types: ["Water", "Psychic"], baseStats: s(60, 75, 85, 100, 85, 115) , usage: 0},
  "starmie-mega": { types: ["Water", "Psychic"], baseStats: s(60, 100, 105, 130, 105, 120) },
  steelix: { types: ["Steel", "Ground"], baseStats: s(75, 85, 200, 55, 65, 30) , usage: 1.6},
  "steelix-mega": { types: ["Steel", "Ground"], baseStats: s(75, 125, 230, 55, 95, 30) },
  stunfisk: { types: ["Ground", "Electric"], baseStats: s(109, 66, 84, 81, 99, 32) },
  "stunfisk-galar": { types: ["Ground", "Steel"], baseStats: s(109, 81, 99, 66, 84, 32) },
  sylveon: { types: ["Fairy"], baseStats: s(95, 65, 65, 110, 130, 60) , usage: 13.28},

  // ===== T =====
  talonflame: { types: ["Fire", "Flying"], baseStats: s(78, 81, 71, 74, 69, 126) , usage: 7.21},
  tauros: { types: ["Normal"], baseStats: s(75, 100, 95, 40, 70, 110) },
  "tauros-paldea-aqua": { types: ["Fighting", "Water"], baseStats: s(75, 110, 105, 30, 70, 100) },
  "tauros-paldea-blaze": { types: ["Fighting", "Fire"], baseStats: s(75, 110, 105, 30, 70, 100) },
  "tauros-paldea-combat": { types: ["Fighting"], baseStats: s(75, 110, 105, 30, 70, 100) },
  tinkaton: { types: ["Fairy", "Steel"], baseStats: s(85, 75, 77, 70, 105, 94) , usage: 1.54},
  torkoal: { types: ["Fire"], baseStats: s(70, 85, 140, 85, 70, 20) , usage: 2.6},
  torterra: { types: ["Grass", "Ground"], baseStats: s(95, 109, 105, 75, 85, 56) },
  toucannon: { types: ["Normal", "Flying"], baseStats: s(80, 120, 75, 75, 75, 60) },
  toxapex: { types: ["Poison", "Water"], baseStats: s(50, 63, 152, 53, 142, 35) },
  toxicroak: { types: ["Poison", "Fighting"], baseStats: s(83, 106, 65, 86, 65, 85) },
  trevenant: { types: ["Ghost", "Grass"], baseStats: s(85, 110, 76, 65, 82, 56) },
  tsareena: { types: ["Grass"], baseStats: s(72, 120, 98, 50, 98, 72) , usage: 0.27},
  typhlosion: { types: ["Fire"], baseStats: s(78, 84, 78, 109, 85, 100) },
  "typhlosion-hisui": { types: ["Fire", "Ghost"], baseStats: s(73, 84, 78, 119, 85, 95) },
  tyranitar: { types: ["Rock", "Dark"], baseStats: s(100, 134, 110, 95, 100, 61) , usage: 8.88},
  "tyranitar-mega": { types: ["Rock", "Dark"], baseStats: s(100, 164, 150, 95, 120, 71) },
  tyrantrum: { types: ["Rock", "Dragon"], baseStats: s(82, 121, 119, 69, 59, 71) },

  // ===== U =====
  umbreon: { types: ["Dark"], baseStats: s(95, 65, 110, 60, 130, 65) },

  // ===== V =====
  vanilluxe: { types: ["Ice"], baseStats: s(71, 95, 85, 110, 95, 79) },
  vaporeon: { types: ["Water"], baseStats: s(130, 65, 60, 110, 95, 65) },
  venusaur: { types: ["Grass", "Poison"], baseStats: s(80, 82, 83, 100, 100, 80) , usage: 6.48},
  "venusaur-mega": { types: ["Grass", "Poison"], baseStats: s(80, 100, 123, 122, 120, 80) },
  victreebel: { types: ["Grass", "Poison"], baseStats: s(80, 105, 65, 100, 70, 70) },
  "victreebel-mega": { types: ["Grass", "Poison"], baseStats: s(80, 125, 85, 135, 95, 70) },
  vivillon: { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) , usage: 6.81},
  "vivillon-archipelago": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-continental": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-elegant": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-fancy": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-garden": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-high-plains": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-icy-snow": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-jungle": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-marine": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-modern": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-monsoon": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-ocean": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-pokeball": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-polar": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-river": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-sandstorm": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-savanna": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-sun": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  "vivillon-tundra": { types: ["Bug", "Flying"], baseStats: s(80, 52, 50, 90, 50, 89) },
  volcarona: { types: ["Bug", "Fire"], baseStats: s(85, 60, 65, 135, 105, 100) , usage: 1.07},

  // ===== W =====
  watchog: { types: ["Normal"], baseStats: s(60, 85, 69, 60, 69, 77) },
  weavile: { types: ["Dark", "Ice"], baseStats: s(70, 120, 65, 45, 85, 125) , usage: 0.27},
  whimsicott: { types: ["Grass", "Fairy"], baseStats: s(60, 67, 85, 77, 75, 116) , usage: 23.97},
  wyrdeer: { types: ["Normal", "Psychic"], baseStats: s(103, 105, 72, 105, 75, 65) },

  // ===== Z =====
  zoroark: { types: ["Dark"], baseStats: s(60, 105, 60, 120, 60, 105) },
  "zoroark-hisui": { types: ["Normal", "Ghost"], baseStats: s(55, 100, 60, 125, 60, 110) },
};

const byName = new Map<string, PokemonMeta>();
for (const [id, meta] of Object.entries(byId)) {
  byName.set(id, meta);
}

export function getPokemonMeta(id: string): PokemonMeta | undefined {
  return byName.get(id);
}

export function resolvePokemonTypes(id: string): PokemonTypeName[] | undefined {
  return byName.get(id)?.types;
}

export function resolvePokemonBaseStats(id: string): PokemonStats | undefined {
  return byName.get(id)?.baseStats;
}
