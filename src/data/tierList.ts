import type { BattleFormat, PokemonTierEntry, TierList, TierListsByFormat } from "@/types/content";

function entry(
  pokemonId: string,
  name: string,
  type: string,
  role: string,
  format: BattleFormat,
  reason: string
): PokemonTierEntry {
  return { pokemonId, name, type, role, format, reason };
}

export const tierListsByFormat: TierListsByFormat = {
  double: {
    SS: [
      entry(
        "sneasler",
        "Sneasler",
        "Fighting / Poison",
        "Format-defining fast pressure",
        "Double",
        "Sneasler is the top Double Battle environment pick because its speed and immediate pressure shape what teams must prepare for."
      ),
      entry(
        "charizard",
        "Charizard",
        "Fire / Flying",
        "Mega-flexible damage core",
        "Double",
        "Charizard is treated as one of the Mega choices that defines the format, with enough offensive flexibility to demand dedicated answers."
      ),
      entry(
        "iron-valiant",
        "Iron Valiant",
        "Fairy / Fighting",
        "Explosive mixed attacker",
        "Double",
        "Iron Valiant sits in the top row because its fast mixed pressure can threaten many common cores before they stabilize."
      ),
      entry(
        "garchomp",
        "Garchomp",
        "Dragon / Ground",
        "Reliable physical anchor",
        "Double",
        "Garchomp belongs among the environment-defining choices thanks to its dependable damage, strong typing, and easy fit on many teams."
      ),
      entry(
        "basculegion-f",
        "Basculegion Female",
        "Water / Ghost",
        "High-ceiling rain attacker",
        "Double",
        "Basculegion is ranked as a top threat because rain support can turn its already dangerous damage into a central win condition."
      ),
      entry(
        "kingambit",
        "Kingambit",
        "Dark / Steel",
        "Endgame physical cleaner",
        "Double",
        "Kingambit earns SS placement as a hard-hitting endgame piece that punishes weakened teams and gives bulky structures a reliable closer."
      ),
      entry(
        "incineroar",
        "Incineroar",
        "Fire / Dark",
        "Universal pivot support",
        "Double",
        "Incineroar remains an SS-level support because its pivoting and disruption value are useful across many Double Battle team styles."
      )
    ],
    S: [
      entry(
        "gengar",
        "Gengar",
        "Ghost / Poison",
        "Fast special attacker",
        "Double",
        "Gengar is described as very strong in Double Battle, but slightly harder to operate than the absolute top Mega and speed-control threats."
      ),
      entry(
        "aerodactyl",
        "Aerodactyl",
        "Rock / Flying",
        "Speed control attacker",
        "Double",
        "Aerodactyl is valued for fast pressure and Mega flexibility, giving teams tempo even when it is not the easiest pick to pilot."
      ),
      entry(
        "farigiraf",
        "Farigiraf",
        "Normal / Psychic",
        "Trick Room enabler",
        "Double",
        "Farigiraf ranks highly because priority blocking and Trick Room support are practical tools for protecting setup turns."
      ),
      entry(
        "whimsicott",
        "Whimsicott",
        "Grass / Fairy",
        "Prankster speed support",
        "Double",
        "Whimsicott's support value is first-rate in Double Battle, especially for tempo control and enabling partners."
      ),
      entry(
        "froslass",
        "Froslass",
        "Ice / Ghost",
        "Snow offense core",
        "Double",
        "Froslass is ranked high because it becomes very strong when its EVs and snow-oriented team structure are planned carefully."
      ),
      entry(
        "venusaur",
        "Venusaur",
        "Grass / Poison",
        "Sun pressure and utility",
        "Double",
        "Venusaur stays in S because its sleep pressure, speed in sun, and Mega option give it several real Double Battle routes."
      ),
      entry(
        "delphox",
        "Delphox",
        "Fire / Psychic",
        "Special attacker with immunity tools",
        "Double",
        "Delphox is treated as one of the strongest specialist picks, with Mega utility and positioning tools that can swing key matchups."
      ),
      entry(
        "armarouge",
        "Armarouge",
        "Fire / Psychic",
        "Trick Room special attacker",
        "Double",
        "Armarouge belongs in S because it can convert protected setup turns into heavy spread or Trick Room pressure."
      ),
      entry(
        "rotom-wash",
        "Rotom Wash",
        "Electric / Water",
        "Bulky utility attacker",
        "Double",
        "Rotom Wash earns a high spot through flexible defensive typing, useful damage, and the ability to fit into many balanced teams."
      ),
      entry(
        "milotic",
        "Milotic",
        "Water",
        "Anti-stat-drop stabilizer",
        "Double",
        "Milotic is ranked high because it punishes common stat-control plans and gives teams a durable Water-type stabilizer."
      ),
      entry(
        "sylveon",
        "Sylveon",
        "Fairy",
        "Spread special attacker",
        "Double",
        "Sylveon is a strong Double pick because Fairy spread pressure is easy to support and difficult for many offensive teams to ignore."
      ),
      entry(
        "aegislash",
        "Aegislash",
        "Steel / Ghost",
        "Stance-based defensive attacker",
        "Double",
        "Aegislash is valued for its flexible offense-defense profile, giving teams a strong switch and punishment option."
      ),
      entry(
        "maushold",
        "Maushold",
        "Normal",
        "Follow Me support",
        "Double",
        "Maushold reaches S because redirection and partner protection are especially valuable when the format revolves around enabling key turns."
      ),
      entry(
        "escavalier",
        "Escavalier",
        "Bug / Steel",
        "Slow Trick Room attacker",
        "Double",
        "Escavalier rounds out S as a strong slow attacker that can pressure teams when Trick Room or speed control is on its side."
      )
    ],
    A: [
      entry(
        "pelipper",
        "Pelipper",
        "Water / Flying",
        "Rain setter",
        "Double",
        "Pelipper is useful because rain teams need a setter, but its value depends heavily on whether the rest of the team uses rain well."
      ),
      entry(
        "dragonite",
        "Dragonite",
        "Dragon / Flying",
        "Flexible physical attacker",
        "Double",
        "Dragonite remains worth using because both Mega and non-Mega styles can pressure teams, though it needs the right support."
      ),
      entry(
        "tyranitar",
        "Tyranitar",
        "Rock / Dark",
        "Sand core attacker",
        "Double",
        "Tyranitar is an A-tier sand piece because it brings weather and bulk, but it needs partners that exploit its sand turns."
      ),
      entry(
        "meganium",
        "Meganium",
        "Grass",
        "Bulky support",
        "Double",
        "Meganium is usable as a defensive support pick when a team wants stability more than immediate offensive tempo."
      ),
      entry(
        "scizor",
        "Scizor",
        "Bug / Steel",
        "Priority physical attacker",
        "Double",
        "Scizor is worth using because priority and Steel typing give it practical cleanup value, though it is not format-defining."
      ),
      entry(
        "talonflame",
        "Talonflame",
        "Fire / Flying",
        "Tailwind tempo support",
        "Double",
        "Talonflame has a clear role as fast Tailwind pressure, but its value depends on keeping momentum before it is traded down."
      ),
      entry(
        "sableye",
        "Sableye",
        "Dark / Ghost",
        "Disruption support",
        "Double",
        "Sableye is placed in A because disruptive support can steal turns, but its damage and matchup profile keep it below the top supports."
      ),
      entry(
        "gardevoir",
        "Gardevoir",
        "Psychic / Fairy",
        "Special attacker support",
        "Double",
        "Gardevoir offers useful Fairy and Psychic pressure, making it a playable option when the team can cover its defensive issues."
      ),
      entry(
        "blastoise",
        "Blastoise",
        "Water",
        "Bulky setup attacker",
        "Double",
        "Blastoise has rich play patterns and good bulk, but it fits more naturally in A than in the defining tiers."
      ),
      entry(
        "torkoal",
        "Torkoal",
        "Fire",
        "Sun and Trick Room attacker",
        "Double",
        "Torkoal is useful because sun and Trick Room can amplify it, but it needs careful positioning to avoid being controlled."
      ),
      entry(
        "corviknight",
        "Corviknight",
        "Flying / Steel",
        "Defensive utility",
        "Double",
        "Corviknight gives teams defensive coverage and useful utility, though it usually supports a plan rather than defining one."
      ),
      entry(
        "excadrill",
        "Excadrill",
        "Ground / Steel",
        "Sand sweeper",
        "Double",
        "Excadrill is an A-tier partner for sand builds because it can exploit sand speed, but it is more dependent on Tyranitar-style support."
      ),
      entry(
        "kommo-o",
        "Kommo-o",
        "Dragon / Fighting",
        "Setup attacker",
        "Double",
        "Kommo-o has enough setup pressure to be worth using, especially when the team can create safe turns for it."
      ),
      entry(
        "ceruledge",
        "Ceruledge",
        "Fire / Ghost",
        "Physical breaker",
        "Double",
        "Ceruledge provides strong offensive pressure and useful resistances, but it needs support to handle faster threats."
      ),
      entry(
        "lopunny",
        "Lopunny",
        "Normal",
        "Fast utility attacker",
        "Double",
        "Lopunny is playable because its toolkit is broad, yet it is ranked as an A pick rather than a central format threat."
      ),
      entry(
        "kangaskhan",
        "Kangaskhan",
        "Normal",
        "Mega physical attacker",
        "Double",
        "Kangaskhan remains useful in Double Battle, but it is less mandatory here than in Single Battle."
      ),
      entry(
        "starmie",
        "Starmie",
        "Water / Psychic",
        "Fast special attacker",
        "Double",
        "Starmie has strong offensive reach and speed, but it sits in A because it depends on matchups and team support."
      ),
      entry(
        "banette",
        "Banette",
        "Ghost",
        "Disruption Mega option",
        "Double",
        "Banette can create disruptive lines and punish opponents, but its ceiling comes with a higher execution requirement."
      ),
      entry(
        "absol",
        "Absol",
        "Dark",
        "High-risk attacker",
        "Double",
        "Absol is worth testing as a pressure pick, though its frailty means it needs careful positioning."
      ),
      entry(
        "ninetales-alola",
        "Alolan Ninetales",
        "Ice / Fairy",
        "Snow and screen support",
        "Double",
        "Alolan Ninetales can support snow and screens, but it sits below Froslass because the stronger snow core competes for the slot."
      ),
      entry(
        "mamoswine",
        "Mamoswine",
        "Ice / Ground",
        "Physical coverage attacker",
        "Double",
        "Mamoswine is useful for its Ice and Ground coverage, especially when a team needs direct answers to Dragon and Ground-weak targets."
      ),
      entry(
        "meowscarada",
        "Meowscarada",
        "Grass / Dark",
        "Fast physical attacker",
        "Double",
        "Meowscarada gives teams speed and targeted pressure, but it is more of a strong option than an environment-defining pick."
      ),
      entry(
        "vivillon",
        "Vivillon",
        "Bug / Flying",
        "Sleep and disruption support",
        "Double",
        "Vivillon can still create disruptive turns, but its lower consistency keeps it in A."
      ),
      entry(
        "gyarados",
        "Gyarados",
        "Water / Flying",
        "Intimidate setup attacker",
        "Double",
        "Gyarados is a useful defensive-offensive bridge because Intimidate and setup pressure can both matter in longer games."
      ),
      entry(
        "arcanine-hisui",
        "Hisuian Arcanine",
        "Fire / Rock",
        "Rock pressure attacker",
        "Double",
        "Hisuian Arcanine is useful for Rock coverage and immediate pressure, but it needs help into Water and Ground pressure."
      ),
      entry(
        "rotom-heat",
        "Rotom Heat",
        "Electric / Fire",
        "Defensive special attacker",
        "Double",
        "Rotom Heat is playable as a flexible coverage piece when a team wants Electric utility plus Fire pressure."
      ),
      entry(
        "arcanine",
        "Arcanine",
        "Fire",
        "Intimidate utility attacker",
        "Double",
        "Arcanine stays useful through Intimidate, Fire coverage, and simple positioning value for balanced teams."
      ),
      entry(
        "slowbro",
        "Slowbro",
        "Water / Psychic",
        "Trick Room bulky pivot",
        "Double",
        "Slowbro can work in slower plans thanks to bulk and Trick Room compatibility, but it is more team-specific."
      ),
      entry(
        "cloyster",
        "Cloyster",
        "Water / Ice",
        "Setup physical attacker",
        "Double",
        "Cloyster is included as a usable setup attacker, though it needs protected turns and careful matchup selection."
      ),
      entry(
        "azumarill",
        "Azumarill",
        "Water / Fairy",
        "Priority bulky attacker",
        "Double",
        "Azumarill is worth using for bulky Fairy pressure and priority cleanup, especially when partners cover its tempo issues."
      ),
      entry(
        "gallade",
        "Gallade",
        "Psychic / Fighting",
        "Physical support attacker",
        "Double",
        "Gallade rounds out A because it has real utility and damage, but it usually needs a specific role on the team."
      )
    ]
  },
  single: {
    SS: [
      entry(
        "garchomp",
        "Garchomp",
        "Dragon / Ground",
        "Top physical attacker",
        "Single",
        "Garchomp is the deserved Single Battle king because its pressure, coverage, and consistency define the ladder."
      ),
      entry(
        "gengar",
        "Gengar",
        "Ghost / Poison",
        "Fast Mega special attacker",
        "Single",
        "Gengar is placed at the top because trapping and fast pressure make it one of the hardest Single Battle threats to answer safely."
      ),
      entry(
        "charizard",
        "Charizard",
        "Fire / Flying",
        "Mega-flexible win condition",
        "Single",
        "Charizard reaches SS because its Mega options are extremely strong and difficult to read at preview."
      ),
      entry(
        "kangaskhan",
        "Kangaskhan",
        "Normal",
        "Mega physical attacker",
        "Single",
        "Kangaskhan is treated as an absolute Single Battle top pick thanks to its strong Mega pressure and straightforward win condition."
      )
    ],
    S: [
      entry(
        "umbreon",
        "Umbreon",
        "Dark",
        "Universal defensive pivot",
        "Single",
        "Umbreon is ranked near the top of S because its splashability and ability to support many attackers are exceptional."
      ),
      entry(
        "aegislash",
        "Aegislash",
        "Steel / Ghost",
        "Stance-based attacker",
        "Single",
        "Aegislash earns S through its strong defensive profile and the mind games created by switching between offense and defense."
      ),
      entry(
        "hippowdon",
        "Hippowdon",
        "Ground",
        "Sand and physical wall",
        "Single",
        "Hippowdon is a strong Single Battle pick because it gives sand teams a sturdy defensive base and reliable matchup control."
      ),
      entry(
        "froslass",
        "Froslass",
        "Ice / Ghost",
        "Fast utility attacker",
        "Single",
        "Froslass is ranked high because its current builds are stronger than older snow alternatives and reward precise EV planning."
      ),
      entry(
        "corviknight",
        "Corviknight",
        "Flying / Steel",
        "Defensive utility",
        "Single",
        "Corviknight belongs in S because it offers valuable defensive stability and can repeatedly check important physical threats."
      ),
      entry(
        "glimmora",
        "Glimmora",
        "Rock / Poison",
        "Hazard and poison pressure",
        "Single",
        "Glimmora is a strong Single pick because it compresses hazard pressure and offensive threat into one slot."
      ),
      entry(
        "lopunny",
        "Lopunny",
        "Normal",
        "Fast utility attacker",
        "Single",
        "Lopunny ranks high because its varied toolkit makes it hard to predict and gives Single teams flexible offense."
      ),
      entry(
        "lucario",
        "Lucario",
        "Fighting / Steel",
        "Priority setup attacker",
        "Single",
        "Lucario is valuable in Single Battle as a threatening attacker that can punish teams once checks are weakened."
      ),
      entry(
        "iron-valiant",
        "Iron Valiant",
        "Fairy / Fighting",
        "Mixed offensive threat",
        "Single",
        "Iron Valiant is ranked in S because mixed attacking options and strong speed make it difficult to cover with one answer."
      ),
      entry(
        "venusaur",
        "Venusaur",
        "Grass / Poison",
        "Leech Seed and Mega utility",
        "Single",
        "Venusaur is placed in S because its midgame recovery, Leech Seed pressure, and Mega flexibility give it several strong lines."
      ),
      entry(
        "clefable",
        "Clefable",
        "Fairy",
        "Bulky support",
        "Single",
        "Clefable is highlighted as very strong in the current environment because its bulk and support options fit many teams."
      ),
      entry(
        "dragonite",
        "Dragonite",
        "Dragon / Flying",
        "Flexible setup attacker",
        "Single",
        "Dragonite stays in S because both Mega and non-Mega plans are threatening, even if it needs support to reach its ceiling."
      ),
      entry(
        "basculegion-f",
        "Basculegion Female",
        "Water / Ghost",
        "High-damage cleaner",
        "Single",
        "Basculegion is ranked high because its damage profile can clean games once the team creates the right rain or trade sequence."
      ),
      entry(
        "mimikyu",
        "Mimikyu",
        "Ghost / Fairy",
        "Disguise setup attacker",
        "Single",
        "Mimikyu is strong because Disguise gives it a safer setup or revenge-kill turn than most frail attackers."
      ),
      entry(
        "hydreigon",
        "Hydreigon",
        "Dark / Dragon",
        "Special wallbreaker",
        "Single",
        "Hydreigon reaches S because its coverage and special pressure can punish many defensive plans."
      ),
      entry(
        "meowscarada",
        "Meowscarada",
        "Grass / Dark",
        "Fast physical attacker",
        "Single",
        "Meowscarada is placed high because speed, strong targeting, and disruptive options make it consistently useful."
      ),
      entry(
        "gyarados",
        "Gyarados",
        "Water / Flying",
        "Intimidate setup attacker",
        "Single",
        "Gyarados remains a strong Single Battle pick because it can combine Intimidate, setup, and sweeping pressure."
      ),
      entry(
        "toxapex",
        "Toxapex",
        "Poison / Water",
        "Defensive wall",
        "Single",
        "Toxapex ranks in S because its defensive profile can slow games down and force opponents to bring specific answers."
      ),
      entry(
        "scizor",
        "Scizor",
        "Bug / Steel",
        "Priority physical attacker",
        "Single",
        "Scizor is a strong Single pick because priority, useful typing, and setup potential give it a clear cleanup role."
      )
    ],
    A: [
      entry(
        "rotom-wash",
        "Rotom Wash",
        "Electric / Water",
        "Bulky utility attacker",
        "Single",
        "Rotom Wash is worth using because it offers safe defensive utility and matchup coverage without demanding a full team built around it."
      ),
      entry(
        "skeledirge",
        "Skeledirge",
        "Fire / Ghost",
        "Bulky special attacker",
        "Single",
        "Skeledirge has a useful defensive and offensive role, but it sits below the most consistent top threats."
      ),
      entry(
        "kingambit",
        "Kingambit",
        "Dark / Steel",
        "Endgame physical cleaner",
        "Single",
        "Kingambit remains a strong A pick because it can punish late-game trades, though it is less dominant than the SS attackers."
      ),
      entry(
        "froslass",
        "Froslass",
        "Ice / Ghost",
        "Matchup-dependent utility",
        "Single",
        "Froslass also appears as an A-style benchmark because its value depends heavily on build quality and matchup context."
      ),
      entry(
        "delphox",
        "Delphox",
        "Fire / Psychic",
        "Special attacker",
        "Single",
        "Delphox is useful when its coverage and Mega tools match the field, but it is more specialized than the top Single picks."
      ),
      entry(
        "starmie",
        "Starmie",
        "Water / Psychic",
        "Fast special attacker",
        "Single",
        "Starmie is considered strong enough for A because its speed and offensive reach are real, though not quite S-level in consistency."
      ),
      entry(
        "meganium",
        "Meganium",
        "Grass",
        "Bulky support",
        "Single",
        "Meganium is a usable defensive pick that can support slower games, but it does not pressure teams as directly as the S tier."
      ),
      entry(
        "kleavor",
        "Kleavor",
        "Bug / Rock",
        "Physical attacker",
        "Single",
        "Kleavor is worth using for physical pressure and matchup-specific value, but it needs the right field state to shine."
      ),
      entry(
        "sylveon",
        "Sylveon",
        "Fairy",
        "Special Fairy attacker",
        "Single",
        "Sylveon is a good A-tier Fairy option, offering reliable damage without requiring complicated support."
      ),
      entry(
        "volcarona",
        "Volcarona",
        "Bug / Fire",
        "Setup special sweeper",
        "Single",
        "Volcarona can win games after setup, but its placement reflects how much it depends on safe entry and hazard control."
      ),
      entry(
        "crabominable",
        "Crabominable",
        "Fighting / Ice",
        "Physical breaker",
        "Single",
        "Crabominable has real breaking power, but lower speed and positioning needs keep it in the worth-using tier."
      ),
      entry(
        "bellibolt",
        "Bellibolt",
        "Electric",
        "Bulky Electric attacker",
        "Single",
        "Bellibolt is usable as a durable Electric slot that can trade well, though it usually plays slower than the top threats."
      ),
      entry(
        "ceruledge",
        "Ceruledge",
        "Fire / Ghost",
        "Physical breaker",
        "Single",
        "Ceruledge gives Single teams a dangerous physical option, but it needs careful support into faster matchups."
      ),
      entry(
        "rotom-heat",
        "Rotom Heat",
        "Electric / Fire",
        "Defensive special attacker",
        "Single",
        "Rotom Heat is useful for role compression, checking some threats while still applying meaningful special pressure."
      ),
      entry(
        "armarouge",
        "Armarouge",
        "Fire / Psychic",
        "Special setup attacker",
        "Single",
        "Armarouge has enough offensive ceiling to be worth using, especially when teams can create safe attacking turns."
      ),
      entry(
        "victreebel",
        "Victreebel",
        "Grass / Poison",
        "Sun attacker",
        "Single",
        "Victreebel can function in sun and specific offensive structures, but its value is more team-dependent."
      ),
      entry(
        "banette",
        "Banette",
        "Ghost",
        "Disruption attacker",
        "Single",
        "Banette is playable for disruptive lines and surprise value, but it is harder to use consistently."
      ),
      entry(
        "dragapult",
        "Dragapult",
        "Dragon / Ghost",
        "Fast offensive pivot",
        "Single",
        "Dragapult remains worth using because of its speed and flexible attacking profile, even if it is not placed in the highest tier here."
      ),
      entry(
        "greninja",
        "Greninja",
        "Water / Dark",
        "Fast special attacker",
        "Single",
        "Greninja is ranked as usable because its speed and coverage can pressure teams, but its execution demands are higher."
      ),
      entry(
        "blastoise",
        "Blastoise",
        "Water",
        "Shell Smash attacker",
        "Single",
        "Blastoise is A-tier in Single Battle because Shell Smash can sweep, but its setup timing is not always easy."
      ),
      entry(
        "arcanine",
        "Arcanine",
        "Fire",
        "Defensive utility attacker",
        "Single",
        "Arcanine is a solid Single pick thanks to defensive utility and Fire pressure, even if it is not as explosive as the top tier."
      ),
      entry(
        "incineroar",
        "Incineroar",
        "Fire / Dark",
        "Bulky pivot",
        "Single",
        "Incineroar remains playable in Single Battle as a bulky pivot, but it loses some of the universal value it has in Double Battle."
      ),
      entry(
        "slowbro",
        "Slowbro",
        "Water / Psychic",
        "Bulky defensive pivot",
        "Single",
        "Slowbro is worth using in defensive teams because its bulk and utility can stabilize matchups against physical attackers."
      )
    ]
  }
};

export const tierList: TierList = tierListsByFormat.double;
