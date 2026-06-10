import type { Team } from "@/types/content";

export const teams: Team[] = [
  {
    id: "turn-one-defense-plus-six-mega-ampharos",
    title: "Turn-One Defense +6! The Hardest Mega Ampharos Ever",
    format: "Double",
    description:
      "This Double Battle team turns Mega Ampharos into a fortress. Audino uses Trick Room and Simple Beam so Ampharos gains Simple, then Cotton Guard jumps to +6 Defense and Charge becomes +2 Special Defense while powering the next Electric attack. Once set up, Ampharos uses Parabolic Charge to heal and Dragon Pulse for coverage; Lucario or Weavile help buy the opening turn, Alcremie can double Ampharos's boosts with Decorate, and the main risks are critical hits or special attackers that can boost faster than Ampharos can stabilize.",
    members: [
      {
        pokemonId: "ampharos",
        displayName: "Ampharos",
        gender: "Female",
        types: ["Electric"],
        ability: "Static",
        nature: "Modest",
        itemId: "ampharosite",
        itemName: "Ampharosite",
        moves: ["Parabolic Charge", "Dragon Pulse", "Cotton Guard", "Charge"],
        stats: {
          hp: 196,
          attack: 85,
          defense: 122,
          specialAttack: 154,
          specialDefense: 122,
          speed: 76
        },
        evs: {
          hp: 31,
          attack: 0,
          defense: 17,
          specialAttack: 5,
          specialDefense: 12,
          speed: 1
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "audino",
        displayName: "Audino",
        gender: "Female",
        types: ["Normal"],
        ability: "Healer",
        nature: "Relaxed",
        itemId: "mental-herb",
        itemName: "Mental Herb",
        moves: ["Light Screen", "Simple Beam", "Trick Room", "Heal Pulse"],
        stats: {
          hp: 210,
          attack: 80,
          defense: 132,
          specialAttack: 80,
          specialDefense: 126,
          speed: 63
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 14,
          specialAttack: 0,
          specialDefense: 20,
          speed: 0
        },
        statModifiers: {
          increased: "defense",
          decreased: "speed"
        }
      },
      {
        pokemonId: "sinistcha",
        displayName: "Sinistcha",
        gender: "Genderless",
        types: ["Grass", "Ghost"],
        ability: "Hospitality",
        nature: "Calm",
        itemId: "colbur-berry",
        itemName: "Colbur Berry",
        moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"],
        stats: {
          hp: 178,
          attack: 72,
          defense: 130,
          specialAttack: 141,
          specialDefense: 143,
          speed: 90
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 4,
          specialAttack: 0,
          specialDefense: 30,
          speed: 0
        },
        statModifiers: {
          increased: "specialDefense",
          decreased: "attack"
        }
      },
      {
        pokemonId: "lucario",
        displayName: "Lucario",
        gender: "Female",
        types: ["Fighting", "Steel"],
        ability: "Inner Focus",
        nature: "Jolly",
        itemId: "choice-scarf",
        itemName: "Choice Scarf",
        moves: ["Close Combat", "Meteor Mash", "Heal Pulse", "Final Gambit"],
        stats: {
          hp: 177,
          attack: 132,
          defense: 90,
          specialAttack: 121,
          specialDefense: 90,
          speed: 156
        },
        evs: {
          hp: 32,
          attack: 2,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "alcremie",
        displayName: "Alcremie",
        gender: "Female",
        types: ["Fairy"],
        ability: "Aroma Veil",
        nature: "Relaxed",
        itemId: "quick-claw",
        itemName: "Quick Claw",
        moves: ["Protect", "Dazzling Gleam", "Aromatic Mist", "Decorate"],
        stats: {
          hp: 172,
          attack: 80,
          defense: 139,
          specialAttack: 130,
          specialDefense: 143,
          speed: 75
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 32,
          specialAttack: 0,
          specialDefense: 2,
          speed: 0
        },
        statModifiers: {
          increased: "defense",
          decreased: "speed"
        }
      },
      {
        pokemonId: "weavile",
        displayName: "Weavile",
        gender: "Female",
        types: ["Dark", "Ice"],
        ability: "Pickpocket",
        nature: "Jolly",
        itemId: "focus-sash",
        itemName: "Focus Sash",
        moves: ["Fake Out", "Icicle Crash", "Knock Off", "Low Kick"],
        stats: {
          hp: 147,
          attack: 172,
          defense: 85,
          specialAttack: 58,
          specialDefense: 105,
          speed: 194
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "specialAttack"
        }
      }
    ]
  },
  {
    id: "mega-emboar-bulk-up-fortress",
    title: "Mega Emboar Bulk Up Fortress Team",
    format: "Double",
    description:
      "This Double Battle team turns Mega Emboar into a bulky win condition. Emboar gives up some raw Reckless-style burst for better special bulk and a Mold Breaker-style Mega ability that lets Sucker Punch and contact pressure ignore disruptive defensive abilities. Lucario, Sableye, Aromatisse, and Sinistcha help it find a protected Bulk Up turn through Fake Out pressure, screens, Trick Room, Rage Powder, and healing, while Kingambit gives the team a second physical endgame. The team is strongest when it controls the first two turns; it must respect strong Water, Flying, and Psychic pressure before Emboar has boosted.",
    members: [
      {
        pokemonId: "emboar",
        displayName: "Emboar",
        gender: "Female",
        types: ["Fire", "Fighting"],
        ability: "Reckless",
        nature: "Adamant",
        itemId: "emboarite",
        itemName: "Emboarite",
        moves: ["Protect", "Drain Punch", "Bulk Up", "Sucker Punch"],
        stats: {
          hp: 212,
          attack: 192,
          defense: 92,
          specialAttack: 108,
          specialDefense: 85,
          speed: 85
        },
        evs: {
          hp: 27,
          attack: 32,
          defense: 7,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "lucario",
        displayName: "Lucario",
        gender: "Female",
        types: ["Fighting", "Steel"],
        ability: "Inner Focus",
        nature: "Jolly",
        itemId: "choice-scarf",
        itemName: "Choice Scarf",
        moves: ["Final Gambit", "Close Combat", "Meteor Mash", "Coaching"],
        stats: {
          hp: 177,
          attack: 132,
          defense: 90,
          specialAttack: 121,
          specialDefense: 90,
          speed: 156
        },
        evs: {
          hp: 32,
          attack: 2,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "aromatisse",
        displayName: "Aromatisse",
        gender: "Female",
        types: ["Fairy"],
        ability: "Aroma Veil",
        nature: "Relaxed",
        itemId: "kebia-berry",
        itemName: "Kebia Berry",
        moves: ["Moonblast", "Aromatic Mist", "Heal Pulse", "Trick Room"],
        stats: {
          hp: 208,
          attack: 92,
          defense: 121,
          specialAttack: 119,
          specialDefense: 125,
          speed: 44
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 18,
          specialAttack: 0,
          specialDefense: 16,
          speed: 0
        },
        statModifiers: {
          increased: "defense",
          decreased: "speed"
        }
      },
      {
        pokemonId: "sableye",
        displayName: "Sableye",
        gender: "Female",
        types: ["Dark", "Ghost"],
        ability: "Prankster",
        nature: "Careful",
        itemId: "roseli-berry",
        itemName: "Roseli Berry",
        moves: ["Fake Out", "Light Screen", "Encore", "Disable"],
        stats: {
          hp: 157,
          attack: 95,
          defense: 104,
          specialAttack: 76,
          specialDefense: 121,
          speed: 70
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 9,
          specialAttack: 0,
          specialDefense: 25,
          speed: 0
        },
        statModifiers: {
          increased: "specialDefense",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "kingambit",
        displayName: "Kingambit",
        gender: "Female",
        types: ["Dark", "Steel"],
        ability: "Defiant",
        nature: "Adamant",
        itemId: "black-glasses",
        itemName: "Black Glasses",
        moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"],
        stats: {
          hp: 207,
          attack: 205,
          defense: 142,
          specialAttack: 72,
          specialDefense: 105,
          speed: 70
        },
        evs: {
          hp: 32,
          attack: 32,
          defense: 2,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "sinistcha",
        displayName: "Sinistcha",
        gender: "Genderless",
        types: ["Grass", "Ghost"],
        ability: "Hospitality",
        nature: "Calm",
        itemId: "sitrus-berry",
        itemName: "Sitrus Berry",
        moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"],
        stats: {
          hp: 178,
          attack: 72,
          defense: 130,
          specialAttack: 141,
          specialDefense: 143,
          speed: 90
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 4,
          specialAttack: 0,
          specialDefense: 30,
          speed: 0
        },
        statModifiers: {
          increased: "specialDefense",
          decreased: "attack"
        }
      }
    ]
  },
  {
    id: "mega-meowstic-expanding-force-tailwind",
    title: "Mega Meowstic Expanding Force Tailwind Team",
    format: "Double",
    description:
      "This team uses Mega Meowstic as a fast Expanding Force attacker that can punish Intimidate-style openings with Competitive before Mega Evolution. Aerodactyl supplies Tailwind, Farigiraf can set Psychic Terrain or Trick Room, and Garchomp plus Sneasler keep immediate physical pressure on Steel and Dark checks. Kingambit gives the team a late-game priority line when Psychic Terrain is gone. The plan is at its best when Tailwind or terrain is established early; if speed control is denied, Meowstic's damage becomes much easier to contain.",
    members: [
      {
        pokemonId: "meowstic",
        displayName: "Meowstic",
        gender: "Female",
        types: ["Psychic"],
        ability: "Competitive",
        nature: "Modest",
        itemId: "meowsticite",
        itemName: "Meowsticite",
        moves: ["Fake Out", "Protect", "Thunderbolt", "Expanding Force"],
        stats: {
          hp: 175,
          attack: 61,
          defense: 102,
          specialAttack: 148,
          specialDefense: 101,
          speed: 126
        },
        evs: {
          hp: 26,
          attack: 0,
          defense: 6,
          specialAttack: 32,
          specialDefense: 0,
          speed: 2
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "garchomp",
        displayName: "Garchomp",
        gender: "Female",
        types: ["Dragon", "Ground"],
        ability: "Rough Skin",
        nature: "Adamant",
        itemId: "sitrus-berry",
        itemName: "Sitrus Berry",
        moves: ["Protect", "Earthquake", "Dragon Claw", "Rock Slide"],
        stats: {
          hp: 199,
          attack: 180,
          defense: 119,
          specialAttack: 90,
          specialDefense: 105,
          speed: 154
        },
        evs: {
          hp: 16,
          attack: 14,
          defense: 4,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "sneasler",
        displayName: "Sneasler",
        gender: "Female",
        types: ["Fighting", "Poison"],
        ability: "Unburden",
        nature: "Adamant",
        itemId: "white-herb",
        itemName: "White Herb",
        moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"],
        stats: {
          hp: 157,
          attack: 200,
          defense: 80,
          specialAttack: 54,
          specialDefense: 100,
          speed: 172
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "aerodactyl",
        displayName: "Aerodactyl",
        gender: "Female",
        types: ["Rock", "Flying"],
        ability: "Pressure",
        nature: "Jolly",
        itemId: "focus-sash",
        itemName: "Focus Sash",
        moves: ["Protect", "Rock Slide", "Tailwind", "Dual Wingbeat"],
        stats: {
          hp: 157,
          attack: 157,
          defense: 85,
          specialAttack: 72,
          specialDefense: 95,
          speed: 200
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "farigiraf",
        displayName: "Farigiraf",
        gender: "Female",
        types: ["Normal", "Psychic"],
        ability: "Armor Tail",
        nature: "Adamant",
        itemId: "black-belt",
        itemName: "Black Belt",
        moves: ["Psychic Fangs", "Low Kick", "Psychic Terrain", "Trick Room"],
        stats: {
          hp: 202,
          attack: 156,
          defense: 102,
          specialAttack: 117,
          specialDefense: 101,
          speed: 84
        },
        evs: {
          hp: 7,
          attack: 32,
          defense: 12,
          specialAttack: 0,
          specialDefense: 11,
          speed: 4
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "kingambit",
        displayName: "Kingambit",
        gender: "Female",
        types: ["Dark", "Steel"],
        ability: "Defiant",
        nature: "Adamant",
        itemId: "chople-berry",
        itemName: "Chople Berry",
        moves: ["Protect", "Kowtow Cleave", "Low Kick", "Sucker Punch"],
        stats: {
          hp: 207,
          attack: 205,
          defense: 140,
          specialAttack: 72,
          specialDefense: 105,
          speed: 72
        },
        evs: {
          hp: 32,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 2
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      }
    ]
  },
  {
    id: "special-attack-ceiling-mega-alakazam",
    title: "Special Attack Ceiling Mega Alakazam Team",
    format: "Double",
    description:
      "This Double Battle team is built around Mega Alakazam's huge Special Attack and Speed. Psychic Terrain turns Expanding Force into spread pressure, while Armarouge can set terrain after Weak Armor activation and Aerodactyl or Dragonite provide Tailwind lines. Sneasler gives Fake Out and Close Combat pressure, Basculegion cleans with Choice Scarf, and Hydrapple adds bulky special coverage. Mega Alakazam is fragile, so the team has to preserve its terrain and Tailwind windows instead of trading turns loosely.",
    members: [
      {
        pokemonId: "alakazam",
        displayName: "Alakazam",
        gender: "Female",
        types: ["Psychic"],
        ability: "Inner Focus",
        nature: "Modest",
        itemId: "alakazite",
        itemName: "Alakazite",
        moves: ["Protect", "Expanding Force", "Encore", "Focus Blast"],
        stats: {
          hp: 132,
          attack: 63,
          defense: 65,
          specialAttack: 205,
          specialDefense: 115,
          speed: 172
        },
        evs: {
          hp: 2,
          attack: 0,
          defense: 0,
          specialAttack: 32,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "sneasler",
        displayName: "Sneasler",
        gender: "Female",
        types: ["Fighting", "Poison"],
        ability: "Unburden",
        nature: "Adamant",
        itemId: "white-herb",
        itemName: "White Herb",
        moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"],
        stats: {
          hp: 157,
          attack: 200,
          defense: 80,
          specialAttack: 54,
          specialDefense: 100,
          speed: 172
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "basculegion",
        displayName: "Basculegion",
        gender: "Male",
        types: ["Water", "Ghost"],
        ability: "Adaptability",
        nature: "Jolly",
        itemId: "choice-scarf",
        itemName: "Choice Scarf",
        moves: ["Wave Crash", "Flip Turn", "Last Respects", "Icy Wind"],
        stats: {
          hp: 197,
          attack: 164,
          defense: 85,
          specialAttack: 90,
          specialDefense: 95,
          speed: 143
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "dragonite",
        displayName: "Dragonite",
        gender: "Female",
        types: ["Dragon", "Flying"],
        ability: "Multiscale",
        nature: "Adamant",
        itemId: "dragon-fang",
        itemName: "Dragon Fang",
        moves: ["Protect", "Dragon Claw", "Tailwind", "Low Kick"],
        stats: {
          hp: 168,
          attack: 204,
          defense: 115,
          specialAttack: 108,
          specialDefense: 120,
          speed: 132
        },
        evs: {
          hp: 2,
          attack: 32,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "attack",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "hydrapple",
        displayName: "Hydrapple",
        gender: "Female",
        types: ["Grass", "Dragon"],
        ability: "Supersweet Syrup",
        nature: "Modest",
        itemId: "sitrus-berry",
        itemName: "Sitrus Berry",
        moves: ["Protect", "Earth Power", "Fickle Beam", "Leaf Storm"],
        stats: {
          hp: 208,
          attack: 90,
          defense: 130,
          specialAttack: 187,
          specialDefense: 100,
          speed: 73
        },
        evs: {
          hp: 27,
          attack: 0,
          defense: 0,
          specialAttack: 30,
          specialDefense: 0,
          speed: 9
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "armarouge",
        displayName: "Armarouge",
        gender: "Female",
        types: ["Fire", "Psychic"],
        ability: "Weak Armor",
        nature: "Timid",
        itemId: "focus-sash",
        itemName: "Focus Sash",
        moves: ["Endure", "Armor Cannon", "Expanding Force", "Psychic Terrain"],
        stats: {
          hp: 162,
          attack: 72,
          defense: 120,
          specialAttack: 177,
          specialDefense: 100,
          speed: 139
        },
        evs: {
          hp: 2,
          attack: 0,
          defense: 0,
          specialAttack: 32,
          specialDefense: 0,
          speed: 32
        },
        statModifiers: {
          increased: "speed",
          decreased: "attack"
        }
      }
    ]
  },
  {
    id: "espathra-baton-pass-mega-gardevoir",
    title: "Espathra Baton Pass Mega Gardevoir Team",
    format: "Double",
    description:
      "This team uses Espathra's Speed Boost and Calm Mind to pass a boosted position into Mega Gardevoir or Archaludon. Scovillain redirects with Rage Powder, Sableye buys turns with Fake Out and Prankster disruption, and Politoed gives rain support plus speed control through Icy Wind. Mega Gardevoir can then pressure both opponents with Hyper Voice or pick targets with Psyshock, while Archaludon is a backup recipient that appreciates the special boosts. The team rewards precise setup timing and has to avoid Taunt, critical hits, and double-target pressure before the Baton Pass lands.",
    members: [
      {
        pokemonId: "gardevoir",
        displayName: "Gardevoir",
        gender: "Female",
        types: ["Psychic", "Fairy"],
        ability: "Trace",
        nature: "Modest",
        itemId: "gardevoirite",
        itemName: "Gardevoirite",
        moves: ["Protect", "Hyper Voice", "Substitute", "Psyshock"],
        stats: {
          hp: 175,
          attack: 76,
          defense: 90,
          specialAttack: 165,
          specialDefense: 135,
          speed: 124
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 5,
          specialAttack: 5,
          specialDefense: 0,
          speed: 24
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "scovillain",
        displayName: "Scovillain",
        gender: "Female",
        types: ["Grass", "Fire"],
        ability: "Moody",
        nature: "Calm",
        itemId: "scovillainite",
        itemName: "Scovillainite",
        moves: ["Protect", "Rage Powder", "Energy Ball", "Overheat"],
        stats: {
          hp: 172,
          attack: 115,
          defense: 106,
          specialAttack: 128,
          specialDefense: 107,
          speed: 95
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 21,
          specialAttack: 0,
          specialDefense: 13,
          speed: 0
        },
        statModifiers: {
          increased: "specialDefense",
          decreased: "attack"
        }
      },
      {
        pokemonId: "sableye",
        displayName: "Sableye",
        gender: "Female",
        types: ["Dark", "Ghost"],
        ability: "Prankster",
        nature: "Careful",
        itemId: "roseli-berry",
        itemName: "Roseli Berry",
        moves: ["Fake Out", "Encore", "Disable", "Will-O-Wisp"],
        stats: {
          hp: 157,
          attack: 95,
          defense: 114,
          specialAttack: 76,
          specialDefense: 110,
          speed: 70
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 19,
          specialAttack: 0,
          specialDefense: 15,
          speed: 0
        },
        statModifiers: {
          increased: "specialDefense",
          decreased: "specialAttack"
        }
      },
      {
        pokemonId: "archaludon",
        displayName: "Archaludon",
        gender: "Female",
        types: ["Steel", "Dragon"],
        ability: "Stamina",
        nature: "Modest",
        itemId: "leftovers",
        itemName: "Leftovers",
        moves: ["Protect", "Electroweb", "Flash Cannon", "Dragon Pulse"],
        stats: {
          hp: 192,
          attack: 112,
          defense: 150,
          specialAttack: 166,
          specialDefense: 117,
          speed: 106
        },
        evs: {
          hp: 27,
          attack: 0,
          defense: 0,
          specialAttack: 6,
          specialDefense: 32,
          speed: 1
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "politoed",
        displayName: "Politoed",
        gender: "Female",
        types: ["Water"],
        ability: "Drizzle",
        nature: "Modest",
        itemId: "sitrus-berry",
        itemName: "Sitrus Berry",
        moves: ["Protect", "Muddy Water", "Icy Wind", "Psych Up"],
        stats: {
          hp: 196,
          attack: 85,
          defense: 114,
          specialAttack: 132,
          specialDefense: 120,
          speed: 96
        },
        evs: {
          hp: 31,
          attack: 0,
          defense: 19,
          specialAttack: 10,
          specialDefense: 0,
          speed: 6
        },
        statModifiers: {
          increased: "specialAttack",
          decreased: "attack"
        }
      },
      {
        pokemonId: "espathra",
        displayName: "Espathra",
        gender: "Female",
        types: ["Psychic"],
        ability: "Speed Boost",
        nature: "Timid",
        itemId: "mental-herb",
        itemName: "Mental Herb",
        moves: ["Protect", "Lumina Crash", "Baton Pass", "Calm Mind"],
        stats: {
          hp: 202,
          attack: 72,
          defense: 101,
          specialAttack: 121,
          specialDefense: 82,
          speed: 149
        },
        evs: {
          hp: 32,
          attack: 0,
          defense: 21,
          specialAttack: 0,
          specialDefense: 2,
          speed: 11
        },
        statModifiers: {
          increased: "speed",
          decreased: "attack"
        }
      }
    ]
  }
];
