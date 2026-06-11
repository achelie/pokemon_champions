import type { PokemonTypeName } from "@/data/types";

export type MoveMeta = {
  name: string;
  slug: string;
  usage: number;
  description: string;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
};

export const allMoves = [
  {
    "name": "Protect",
    "slug": "protect",
    "usage": 17,
    "description": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Fake Out",
    "slug": "fake-out",
    "usage": 3.4,
    "description": "This attack hits first and makes the target flinch. It works only on the first turn each time the user enters battle.",
    "power": 40,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Rock Slide",
    "slug": "rock-slide",
    "usage": 2.9,
    "description": "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
    "power": 75,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Tailwind",
    "slug": "tailwind",
    "usage": 2.9,
    "description": "The user whips up a turbulent whirlwind that boosts the Speed stats of itself and its allies for four turns.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Close Combat",
    "slug": "close-combat",
    "usage": 2.1,
    "description": "The user fights the target up close, inflicting damage without guarding itself. This also lowers the user's Defense and Sp. Def stats.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Weather Ball",
    "slug": "weather-ball",
    "usage": 2,
    "description": "This move's type and power change depending on the weather at the time the move is used.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Aqua Jet",
    "slug": "aqua-jet",
    "usage": 1.9,
    "description": "The user lunges at the target to inflict damage, moving at blinding speed. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Earthquake",
    "slug": "earthquake",
    "usage": 1.9,
    "description": "The user sets off an earthquake that strikes every Pokémon around it.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Last Respects",
    "slug": "last-respects",
    "usage": 1.9,
    "description": "The user attacks to avenge its allies. The more defeated allies there are in the user's party, the greater the move's power.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Moonblast",
    "slug": "moonblast",
    "usage": 1.9,
    "description": "Borrowing the power of the moon, the user attacks the target. Has a 10% chance of lowering the target's Sp. Atk stat by 1 stage.",
    "power": 95,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Sucker Punch",
    "slug": "sucker-punch",
    "usage": 1.9,
    "description": "This move enables the user to attack first. This move fails if the target is not readying an attack.",
    "power": 70,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Dragon Claw",
    "slug": "dragon-claw",
    "usage": 1.8,
    "description": "The user slashes the target with huge, sharp claws to inflict damage.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Heat Wave",
    "slug": "heat-wave",
    "usage": 1.7,
    "description": "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave them with a burn.",
    "power": 95,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Kowtow Cleave",
    "slug": "kowtow-cleave",
    "usage": 1.7,
    "description": "The user slashes at the target after kowtowing to make the target let down its guard. This attack never misses.",
    "power": 85,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Flare Blitz",
    "slug": "flare-blitz",
    "usage": 1.6,
    "description": "The user cloaks itself in fire and charges the target to inflict damage. This also damages the user quite a lot and may leave the target with a burn.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Iron Head",
    "slug": "iron-head",
    "usage": 1.6,
    "description": "The user slams the target with its steel-hard head. Has a 20% chance of making the target flinch.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Trick Room",
    "slug": "trick-room",
    "usage": 1.6,
    "description": "The user creates a bizarre area in which slower Pokémon get to move first for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Wave Crash",
    "slug": "wave-crash",
    "usage": 1.6,
    "description": "The user shrouds itself in water and slams into the target with its whole body to inflict damage. This also damages the user quite a lot.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dire Claw",
    "slug": "dire-claw",
    "usage": 1.5,
    "description": "The user lashes out at the target with ruinous claws. Has a 30% chance of leaving the target poisoned paralyzed or asleep.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Encore",
    "slug": "encore",
    "usage": 1.3,
    "description": "The user compels the target to keep using the move it encored for three turns.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Parting Shot",
    "slug": "parting-shot",
    "usage": 1.3,
    "description": "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches places with a party Pokémon in waiting.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Rage Powder",
    "slug": "rage-powder",
    "usage": 1.3,
    "description": "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Dazzling Gleam",
    "slug": "dazzling-gleam",
    "usage": 1.2,
    "description": "The user damages opposing Pokémon by emitting a powerful flash.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Low Kick",
    "slug": "low-kick",
    "usage": 1.2,
    "description": "A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Solar Beam",
    "slug": "solar-beam",
    "usage": 1.2,
    "description": "The user gathers light on the first turn, then blasts a bundled beam on the next turn.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Hyper Voice",
    "slug": "hyper-voice",
    "usage": 1.1,
    "description": "The user attacks by letting loose a horribly loud, resounding cry.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Flip Turn",
    "slug": "flip-turn",
    "usage": 1,
    "description": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Matcha Gotcha",
    "slug": "matcha-gotcha",
    "usage": 1,
    "description": "The user fires a blast of tea that it mixed. The user's HP is restored by up to half the damage taken by the target. This may also leave the target with a burn.",
    "power": 80,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Sludge Bomb",
    "slug": "sludge-bomb",
    "usage": 1,
    "description": "The user hurls unsanitary sludge at the target to inflict damage. This may also poison the target.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dual Wingbeat",
    "slug": "dual-wingbeat",
    "usage": 0.9,
    "description": "The user slams the target with its wings to inflict damage. The target is hit twice in a row.",
    "power": 40,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Earth Power",
    "slug": "earth-power",
    "usage": 0.9,
    "description": "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Hurricane",
    "slug": "hurricane",
    "usage": 0.9,
    "description": "The user attacks by wrapping its opponent in a fierce wind. This may also confuse the target.",
    "power": 110,
    "accuracy": 70,
    "pp": 12
  },
  {
    "name": "Calm Mind",
    "slug": "calm-mind",
    "usage": 0.8,
    "description": "The user quietly focuses its mind and calms its spirit to boost its Sp. Atk and Sp. Def stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Psychic",
    "slug": "psychic",
    "usage": 0.8,
    "description": "The target is hit with a strong telekinetic force to inflict damage. This may also lower the target’s Sp. Def stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Shadow Ball",
    "slug": "shadow-ball",
    "usage": 0.8,
    "description": "The user attacks by hurling a shadowy blob at the target. This may also lower the target’s Sp. Def stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Stomping Tantrum",
    "slug": "stomping-tantrum",
    "usage": 0.8,
    "description": "Driven by frustration, the user attacks the target. This move's power is doubled if the user's previous move failed.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Throat Chop",
    "slug": "throat-chop",
    "usage": 0.8,
    "description": "The user attacks the target's throat, and the resultant suffering prevents the target from using sound-based moves for two turns.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Thunderbolt",
    "slug": "thunderbolt",
    "usage": 0.8,
    "description": "The user attacks the target with a strong electric blast. This may also leave the target with paralysis.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Dragon Pulse",
    "slug": "dragon-pulse",
    "usage": 0.7,
    "description": "The target is attacked with a shock wave generated by the user's gaping mouth.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Helping Hand",
    "slug": "helping-hand",
    "usage": 0.7,
    "description": "The user assists an ally by boosting the power of that ally's attack.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Swords Dance",
    "slug": "swords-dance",
    "usage": 0.7,
    "description": "A frenetic dance to uplift the fighting spirit. This sharply boosts the user's Attack stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Will-O-Wisp",
    "slug": "will-o-wisp",
    "usage": 0.7,
    "description": "The user shoots a sinister flame at the target to inflict a burn.",
    "power": null,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Blizzard",
    "slug": "blizzard",
    "usage": 0.6,
    "description": "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
    "power": 110,
    "accuracy": 70,
    "pp": 8
  },
  {
    "name": "Electro Shot",
    "slug": "electro-shot",
    "usage": 0.6,
    "description": "The user gathers electricity on the first turn, boosting its Sp. Atk stat, then fires a high-voltage shot on the next turn. The shot will be fired immediately in rain.",
    "power": 130,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Flash Cannon",
    "slug": "flash-cannon",
    "usage": 0.6,
    "description": "The user gathers all its light energy and releases it at once. This may also lower the target's Sp. Def stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Life Dew",
    "slug": "life-dew",
    "usage": 0.6,
    "description": "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon currently in the battle.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Wide Guard",
    "slug": "wide-guard",
    "usage": 0.6,
    "description": "The user and its allies are protected from wide-ranging attacks for one turn.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Aura Sphere",
    "slug": "aura-sphere",
    "usage": 0.5,
    "description": "The user lets loose a pulse of aura power from deep within its body at the target. This attack never misses.",
    "power": 80,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Hydro Pump",
    "slug": "hydro-pump",
    "usage": 0.5,
    "description": "The target is blasted by a huge volume of water launched under great pressure.",
    "power": 110,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Liquidation",
    "slug": "liquidation",
    "usage": 0.5,
    "description": "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Aurora Veil",
    "slug": "aurora-veil",
    "usage": 0.4,
    "description": "This move reduces damage from physical and special moves for five turns. This can be used only when it is snowing.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Brave Bird",
    "slug": "brave-bird",
    "usage": 0.4,
    "description": "The user tucks in its wings and charges at a low altitude. This also damages the user quite a lot.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Darkest Lariat",
    "slug": "darkest-lariat",
    "usage": 0.4,
    "description": "The user swings both arms and hits the target. The target's stat changes don't affect the damage inflicted by this move.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Detect",
    "slug": "detect",
    "usage": 0.4,
    "description": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Draco Meteor",
    "slug": "draco-meteor",
    "usage": 0.4,
    "description": "Comets are summoned down from the sky onto the target. The recoil from this move harshly lowers the user’s Sp. Atk stat.",
    "power": 130,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Hyper Beam",
    "slug": "hyper-beam",
    "usage": 0.4,
    "description": "The target is attacked with a powerful beam. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Knock Off",
    "slug": "knock-off",
    "usage": 0.4,
    "description": "The user slaps down the target's held item, making it unusable for that battle. This move does more damage if the target has a held item.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Light of Ruin",
    "slug": "light-of-ruin",
    "usage": 0.4,
    "description": "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user quite a lot.",
    "power": 140,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Power Gem",
    "slug": "power-gem",
    "usage": 0.4,
    "description": "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Quick Attack",
    "slug": "quick-attack",
    "usage": 0.4,
    "description": "The user lunges at the target to inflict damage, moving at blinding speed. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Rain Dance",
    "slug": "rain-dance",
    "usage": 0.4,
    "description": "The user summons a heavy rain that falls for five turns, powering up Water-type attacks. The rain also lowers the power of Fire-type attacks.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Rock Tomb",
    "slug": "rock-tomb",
    "usage": 0.4,
    "description": "The user hurls boulders at the target to inflict damage. This also lowers the target's Speed stat by cutting off its movement.",
    "power": 60,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Sleep Powder",
    "slug": "sleep-powder",
    "usage": 0.4,
    "description": "The user scatters a cloud of soporific dust that puts the target to sleep.",
    "power": null,
    "accuracy": 75,
    "pp": 16
  },
  {
    "name": "Spiky Shield",
    "slug": "spiky-shield",
    "usage": 0.4,
    "description": "In addition to protecting the user from attacks, this move also damages any attacker that makes direct contact.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Bullet Punch",
    "slug": "bullet-punch",
    "usage": 0.3,
    "description": "The user strikes the target with tough punches as fast as bullets. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Dark Pulse",
    "slug": "dark-pulse",
    "usage": 0.3,
    "description": "The user releases a horrible aura imbued with ill intent. This may also make the target flinch.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Dragon Dance",
    "slug": "dragon-dance",
    "usage": 0.3,
    "description": "The user vigorously performs a mystic, powerful dance that boosts its Attack and Speed stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Draining Kiss",
    "slug": "draining-kiss",
    "usage": 0.3,
    "description": "The user steals the target's HP with a kiss. The user's HP is restored by over half the damage taken by the target.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Follow Me",
    "slug": "follow-me",
    "usage": 0.3,
    "description": "The user draws attention to itself, making all opposing Pokémon take aim only at the user.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Giga Drain",
    "slug": "giga-drain",
    "usage": 0.3,
    "description": "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Icy Wind",
    "slug": "icy-wind",
    "usage": 0.3,
    "description": "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats.",
    "power": 55,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Overheat",
    "slug": "overheat",
    "usage": 0.3,
    "description": "The user attacks the target with all its might. The recoil from this move harshly lowers the user's Sp. Atk stat.",
    "power": 130,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Poison Jab",
    "slug": "poison-jab",
    "usage": 0.3,
    "description": "The target is stabbed with a tentacle, an arm, or the like steeped in poison. This may also poison the target.",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Poltergeist",
    "slug": "poltergeist",
    "usage": 0.3,
    "description": "The user attacks by controlling the target's item. This move fails if the target isn't holding an item.",
    "power": 110,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Shadow Sneak",
    "slug": "shadow-sneak",
    "usage": 0.3,
    "description": "The user extends its shadow and attacks the target from behind. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Taunt",
    "slug": "taunt",
    "usage": 0.3,
    "description": "The target is taunted into a rage that allows it to use only attack moves for three turns.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Volt Switch",
    "slug": "volt-switch",
    "usage": 0.3,
    "description": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Body Press",
    "slug": "body-press",
    "usage": 0.2,
    "description": "The user attacks by slamming its body into the target. The higher the user's Defense stat, the greater the damage this move deals.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bug Bite",
    "slug": "bug-bite",
    "usage": 0.2,
    "description": "The user attacks by biting the target. If the target is holding a Berry, the user eats it and gains its effect.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Bulk Up",
    "slug": "bulk-up",
    "usage": 0.2,
    "description": "The user tenses its muscles to bulk up its body, boosting its Attack and Defense stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Clanging Scales",
    "slug": "clanging-scales",
    "usage": 0.2,
    "description": "The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat is lowered after the attack.",
    "power": 110,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Clangorous Soul",
    "slug": "clangorous-soul",
    "usage": 0.2,
    "description": "The user boosts all its stats by using some of its own HP.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Coaching",
    "slug": "coaching",
    "usage": 0.2,
    "description": "The user properly coaches its ally Pokémon, boosting their Attack and Defense stats.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Disable",
    "slug": "disable",
    "usage": 0.2,
    "description": "For four turns, the target will be unable to use whichever move it last used.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Double-Edge",
    "slug": "double-edge",
    "usage": 0.2,
    "description": "A reckless life-risking tackle in which the user rushes the target. This also damages the user quite a lot.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Electroweb",
    "slug": "electroweb",
    "usage": 0.2,
    "description": "The user captures opposing Pokémon in an electric net to inflict damage. This also lowers their Speed stats.",
    "power": 55,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Eruption",
    "slug": "eruption",
    "usage": 0.2,
    "description": "The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Extreme Speed",
    "slug": "extreme-speed",
    "usage": 0.2,
    "description": "The user charges the target at blinding speed. This move always goes first.",
    "power": 80,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Feint",
    "slug": "feint",
    "usage": 0.2,
    "description": "This attack can hit a target using a move such as Protect or Detect. This also lifts the effects of those moves.",
    "power": 30,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Flamethrower",
    "slug": "flamethrower",
    "usage": 0.2,
    "description": "The target is scorched with an intense blast of fire. This may also leave the target with a burn.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "High Horsepower",
    "slug": "high-horsepower",
    "usage": 0.2,
    "description": "The user fiercely attacks the target using its entire body.",
    "power": 95,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Ice Beam",
    "slug": "ice-beam",
    "usage": 0.2,
    "description": "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Ice Punch",
    "slug": "ice-punch",
    "usage": 0.2,
    "description": "The target is attacked with an icy punch. This may also leave the target frozen.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Leech Seed",
    "slug": "leech-seed",
    "usage": 0.2,
    "description": "A seed is planted on the target. It steals some HP from the target every turn.",
    "power": null,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Light Screen",
    "slug": "light-screen",
    "usage": 0.2,
    "description": "A wondrous wall of light is put up to reduce damage from special moves for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Muddy Water",
    "slug": "muddy-water",
    "usage": 0.2,
    "description": "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy.",
    "power": 90,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Perish Song",
    "slug": "perish-song",
    "usage": 0.2,
    "description": "Any Pokémon that hears this song faints in three turns, unless it switches out of battle.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Psyshock",
    "slug": "psyshock",
    "usage": 0.2,
    "description": "The user materializes an odd psychic wave to attack the target. This move deals physical damage.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Roost",
    "slug": "roost",
    "usage": 0.2,
    "description": "The user lands and rests its body. This move restores the user's HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Scald",
    "slug": "scald",
    "usage": 0.2,
    "description": "The user attacks by shooting boiling hot water at the target. This may also leave the target with a burn.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Snarl",
    "slug": "snarl",
    "usage": 0.2,
    "description": "The user yells as if it's ranting about something, which lowers the Sp. Atk stats of opposing Pokémon.",
    "power": 55,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Super Fang",
    "slug": "super-fang",
    "usage": 0.2,
    "description": "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.",
    "power": null,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Acrobatics",
    "slug": "acrobatics",
    "usage": 0.1,
    "description": "The user nimbly strikes the target. This attack does massive damage if the user isn't holding an item.",
    "power": 55,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Air Slash",
    "slug": "air-slash",
    "usage": 0.1,
    "description": "The user attacks with a blade of air that slices even the sky. This may also make the target flinch.",
    "power": 75,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Ancient Power",
    "slug": "ancient-power",
    "usage": 0.1,
    "description": "The user attacks with a prehistoric power. This may also boost all the user's stats at once.",
    "power": 60,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Coil",
    "slug": "coil",
    "usage": 0.1,
    "description": "The user coils up and concentrates. This boosts its Attack and Defense stats as well as its accuracy.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Crunch",
    "slug": "crunch",
    "usage": 0.1,
    "description": "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Drain Punch",
    "slug": "drain-punch",
    "usage": 0.1,
    "description": "The user attacks with an energy-draining punch. The user's HP is restored by up to half the damage taken by the target.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Energy Ball",
    "slug": "energy-ball",
    "usage": 0.1,
    "description": "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Foul Play",
    "slug": "foul-play",
    "usage": 0.1,
    "description": "The user turns the target's strength against it. The higher the target's Attack stat, the greater the damage this move inflicts.",
    "power": 95,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Freeze-Dry",
    "slug": "freeze-dry",
    "usage": 0.1,
    "description": "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Gigaton Hammer",
    "slug": "gigaton-hammer",
    "usage": 0.1,
    "description": "The user swings its whole body around to attack with its huge hammer. This move can't be used twice in a row.",
    "power": 160,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Gunk Shot",
    "slug": "gunk-shot",
    "usage": 0.1,
    "description": "The user shoots filthy garbage at the target to attack. This may also poison the target.",
    "power": 120,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Head Smash",
    "slug": "head-smash",
    "usage": 0.1,
    "description": "The user attacks the target with a hazardous full-power headbutt. This also damages the user terribly.",
    "power": 150,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Heavy Slam",
    "slug": "heavy-slam",
    "usage": 0.1,
    "description": "The user slams into the target with its heavy body. The more the user outweighs the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Hypnosis",
    "slug": "hypnosis",
    "usage": 0.1,
    "description": "The user employs hypnotic suggestion to make the target fall asleep.",
    "power": null,
    "accuracy": 60,
    "pp": 20
  },
  {
    "name": "Imprison",
    "slug": "imprison",
    "usage": 0.1,
    "description": "If opposing Pokémon know any move also known by the user, they are prevented from using it.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Iron Defense",
    "slug": "iron-defense",
    "usage": 0.1,
    "description": "The user hardens its body's surface like iron, sharply boosting its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Jet Punch",
    "slug": "jet-punch",
    "usage": 0.1,
    "description": "The user summons a torrent around its fist and punches at blinding speed. This move always goes first.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "King’s Shield",
    "slug": "kings-shield",
    "usage": 0.1,
    "description": "The user takes a defensive stance while it protects itself from damage. It also lowers the Attack stat of any attacker that makes direct contact.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Leaf Storm",
    "slug": "leaf-storm",
    "usage": 0.1,
    "description": "The user whips up a storm of leaves around the target. The recoil from this move harshly lowers the user's Sp. Atk stat.",
    "power": 130,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Nasty Plot",
    "slug": "nasty-plot",
    "usage": 0.1,
    "description": "The user stimulates its brain by thinking bad thoughts. This sharply boosts the user's Sp. Atk stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Play Rough",
    "slug": "play-rough",
    "usage": 0.1,
    "description": "The user attacks by playing rough with the target. This may also lower the target's Attack stat.",
    "power": 90,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Psycho Cut",
    "slug": "psycho-cut",
    "usage": 0.1,
    "description": "The user tears at the target with blades formed by psychic power. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Recover",
    "slug": "recover",
    "usage": 0.1,
    "description": "The user regenerates its cells, restoring its own HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Reflect",
    "slug": "reflect",
    "usage": 0.1,
    "description": "A wondrous wall of light is put up to reduce damage from physical moves for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Sacred Sword",
    "slug": "sacred-sword",
    "usage": 0.1,
    "description": "The user attacks by slicing with a sword. The target's stat changes don't affect the damage inflicted by this move.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Scale Shot",
    "slug": "scale-shot",
    "usage": 0.1,
    "description": "The user attacks by shooting scales two to five times in a row. This move boosts the user's Speed stat but lowers its Defense stat.",
    "power": 25,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Shell Smash",
    "slug": "shell-smash",
    "usage": 0.1,
    "description": "The user breaks its shell, which lowers its Defense and Sp. Def stats but sharply boosts its Attack, Sp. Atk, and Speed stats.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Stone Axe",
    "slug": "stone-axe",
    "usage": 0.1,
    "description": "The user swings its stone axes at the target. Stone splinters left behind by this attack float around the target.",
    "power": 65,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Stone Edge",
    "slug": "stone-edge",
    "usage": 0.1,
    "description": "The user stabs the target with sharpened stones. This move has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Strength Sap",
    "slug": "strength-sap",
    "usage": 0.1,
    "description": "The user restores its own HP by the same amount as the target's Attack stat. It then lowers the target's Attack stat.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Substitute",
    "slug": "substitute",
    "usage": 0.1,
    "description": "The user creates a substitute for itself using some of its own HP. The substitute serves as the user's decoy.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Sunny Day",
    "slug": "sunny-day",
    "usage": 0.1,
    "description": "The user intensifies the sun for five turns, powering up Fire-type attacks. The sunlight also lowers the power of Water-type attacks.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Thunder",
    "slug": "thunder",
    "usage": 0.1,
    "description": "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
    "power": 110,
    "accuracy": 70,
    "pp": 12
  },
  {
    "name": "Thunder Wave",
    "slug": "thunder-wave",
    "usage": 0.1,
    "description": "The user launches a weak jolt of electricity that paralyzes the target.",
    "power": null,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Triple Axel",
    "slug": "triple-axel",
    "usage": 0.1,
    "description": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
    "power": 20,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Twin Beam",
    "slug": "twin-beam",
    "usage": 0.1,
    "description": "The user shoots mystical beams from its eyes to inflict damage. The target is hit twice in a row.",
    "power": 40,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "U-turn",
    "slug": "u-turn",
    "usage": 0.1,
    "description": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Water Spout",
    "slug": "water-spout",
    "usage": 0.1,
    "description": "The user spouts water to damage opposing Pokémon. The lower the user's HP, the lower the move's power.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Waterfall",
    "slug": "waterfall",
    "usage": 0.1,
    "description": "The user charges at the target and may make it flinch.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Yawn",
    "slug": "yawn",
    "usage": 0.1,
    "description": "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Accelerock",
    "slug": "accelerock",
    "usage": 0,
    "description": "The user smashes into the target at high speed. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Acid Armor",
    "slug": "acid-armor",
    "usage": 0,
    "description": "The user alters its cellular structure to liquefy itself, sharply boosting its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Acid Spray",
    "slug": "acid-spray",
    "usage": 0,
    "description": "The user attacks by spitting fluid that works to melt the target. This also harshly lowers the target's Sp. Def stat.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Acupressure",
    "slug": "acupressure",
    "usage": 0,
    "description": "The user applies pressure to stress points, sharply boosting one of its or its allies' stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Aerial Ace",
    "slug": "aerial-ace",
    "usage": 0,
    "description": "The user confounds the target with speed, then slashes. This attack never misses.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "After You",
    "slug": "after-you",
    "usage": 0,
    "description": "The user helps the target and makes it use its move right after the user.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Agility",
    "slug": "agility",
    "usage": 0,
    "description": "The user relaxes and lightens its body to move faster. This sharply boosts its Speed stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Air Cutter",
    "slug": "air-cutter",
    "usage": 0,
    "description": "The user launches razor-like wind to slash opposing Pokémon. This move has a heightened chance of landing a critical hit.",
    "power": 60,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Alluring Voice",
    "slug": "alluring-voice",
    "usage": 0,
    "description": "The user attacks the target using its angelic voice. This also confuses the target if its stats have been boosted during the turn.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Ally Switch",
    "slug": "ally-switch",
    "usage": 0,
    "description": "The user teleports using a strange power and switches places with one of its allies. This move's chance of failing rises if it is used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Amnesia",
    "slug": "amnesia",
    "usage": 0,
    "description": "The user temporarily empties its mind to forget its concerns. This sharply boosts the user's Sp. Def stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Aqua Cutter",
    "slug": "aqua-cutter",
    "usage": 0,
    "description": "The user expels pressurized water to cut at the target like a blade. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Aqua Step",
    "slug": "aqua-step",
    "usage": 0,
    "description": "The user toys with the target and attacks it using light and fluid dance steps. This also boosts the user's Speed stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Aqua Tail",
    "slug": "aqua-tail",
    "usage": 0,
    "description": "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
    "power": 90,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Armor Cannon",
    "slug": "armor-cannon",
    "usage": 0,
    "description": "The user shoots its own armor out as blazing projectiles. This also lowers the user’s Defense and Sp. Def stats.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Aromatic Mist",
    "slug": "aromatic-mist",
    "usage": 0,
    "description": "The user boosts the Sp. Def stat of an ally Pokémon by using a mysterious aroma.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Assurance",
    "slug": "assurance",
    "usage": 0,
    "description": "This move's power is doubled if the target has already taken some damage in the same turn.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Attract",
    "slug": "attract",
    "usage": 0,
    "description": "If the target is of the opposite gender to the user, it becomes infatuated with the user and will sometimes be unable to use its moves.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Aura Wheel",
    "slug": "aura-wheel",
    "usage": 0,
    "description": "Morpeko attacks and boosts its Speed stat with the energy stored in its cheeks. This move's type changes depending on the user's form.",
    "power": 110,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Avalanche",
    "slug": "avalanche",
    "usage": 0,
    "description": "This move's power is doubled if the target has inflicted damage on the user in the same turn.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Baby-Doll Eyes",
    "slug": "baby-doll-eyes",
    "usage": 0,
    "description": "The user stares at the target with its baby-doll eyes, which lowers the target's Attack stat. This move always goes first.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Baneful Bunker",
    "slug": "baneful-bunker",
    "usage": 0,
    "description": "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Baton Pass",
    "slug": "baton-pass",
    "usage": 0,
    "description": "The user switches places with a party Pokémon in waiting and passes along any stat changes.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Beak Blast",
    "slug": "beak-blast",
    "usage": 0,
    "description": "The user first heats up its beak, and then it attacks the target. Making direct contact with the user while it's heating up its beak results in a burn.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Beat Up",
    "slug": "beat-up",
    "usage": 0,
    "description": "The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Belly Drum",
    "slug": "belly-drum",
    "usage": 0,
    "description": "The user maximizes its Attack stat but loses HP equal to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Bite",
    "slug": "bite",
    "usage": 0,
    "description": "The target is bitten with viciously sharp fangs. This may also make the target flinch.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Bitter Blade",
    "slug": "bitter-blade",
    "usage": 0,
    "description": "The user focuses its bitter feelings toward the world of the living into a slashing attack. The user's HP is restored by up to half the damage taken by the target.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bitter Malice",
    "slug": "bitter-malice",
    "usage": 0,
    "description": "The user attacks the target with spine-chilling resentment. This also lowers the target’s Attack stat.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Blast Burn",
    "slug": "blast-burn",
    "usage": 0,
    "description": "The target is razed by a fiery explosion. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Blaze Kick",
    "slug": "blaze-kick",
    "usage": 0,
    "description": "The user launches a kick that has a heightened chance of landing a critical hit. This may also leave the target with a burn.",
    "power": 85,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Body Slam",
    "slug": "body-slam",
    "usage": 0,
    "description": "The user attacks by dropping onto the target with its full body weight. This may also leave the target with paralysis.",
    "power": 85,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Bone Rush",
    "slug": "bone-rush",
    "usage": 0,
    "description": "The user attacks by striking the target with a hard bone. This move hits two to five times in a row.",
    "power": 30,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Boomburst",
    "slug": "boomburst",
    "usage": 0,
    "description": "The user attacks everything around it with the destructive power of a terrible explosive sound.",
    "power": 140,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Branch Poke",
    "slug": "branch-poke",
    "usage": 0,
    "description": "The user attacks the target by poking it with a sharply pointed branch.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Breaking Swipe",
    "slug": "breaking-swipe",
    "usage": 0,
    "description": "The user swings its tough tail wildly and attacks opposing Pokémon. This also lowers their Attack stats.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Brick Break",
    "slug": "brick-break",
    "usage": 0,
    "description": "The user attacks with a swift chop. This move can also break barriers, such as Light Screen and Reflect.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Brutal Swing",
    "slug": "brutal-swing",
    "usage": 0,
    "description": "The user swings its body around violently to inflict damage on everything in its vicinity.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Bug Buzz",
    "slug": "bug-buzz",
    "usage": 0,
    "description": "The user vibrates to generate a damaging sound wave. This may also lower the target's Sp. Def stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bulldoze",
    "slug": "bulldoze",
    "usage": 0,
    "description": "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Bullet Seed",
    "slug": "bullet-seed",
    "usage": 0,
    "description": "The user attacks by forcefully shooting seeds at the target. This move hits two to five times in a row.",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Burn Up",
    "slug": "burn-up",
    "usage": 0,
    "description": "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
    "power": 130,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Burning Jealousy",
    "slug": "burning-jealousy",
    "usage": 0,
    "description": "The user attacks with energy from jealousy. This leaves all opposing Pokémon that have had their stats boosted during the turn with a burn.",
    "power": 70,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Ceaseless Edge",
    "slug": "ceaseless-edge",
    "usage": 0,
    "description": "The user slashes its shell blade at the target. Shell splinters left behind by this attack remain scattered under the target as spikes.",
    "power": 65,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Charge",
    "slug": "charge",
    "usage": 0,
    "description": "The user becomes charged, boosting the power of the next Electric-type move it uses. This also boosts the user's Sp. Def stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Charge Beam",
    "slug": "charge-beam",
    "usage": 0,
    "description": "The user attacks the target with an electric charge. The residual electricity may also boost the user's Sp. Atk stat.",
    "power": 50,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Charm",
    "slug": "charm",
    "usage": 0,
    "description": "The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Chilling Water",
    "slug": "chilling-water",
    "usage": 0,
    "description": "The user attacks the target by showering it with water that's so cold it saps the target's power. This also lowers the target's Attack stat.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Chilly Reception",
    "slug": "chilly-reception",
    "usage": 0,
    "description": "The user tells a chillingly bad joke before switching places with a party Pokémon in waiting. This summons a snowstorm lasting five turns.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Confuse Ray",
    "slug": "confuse-ray",
    "usage": 0,
    "description": "The target is exposed to a sinister ray that causes confusion.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Copycat",
    "slug": "copycat",
    "usage": 0,
    "description": "The user mimics the move used immediately before it. The move fails if no other move has been used yet.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Corrosive Gas",
    "slug": "corrosive-gas",
    "usage": 0,
    "description": "The user surrounds everything around it with highly acidic gas and melts away items they hold.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Cosmic Power",
    "slug": "cosmic-power",
    "usage": 0,
    "description": "The user absorbs a mystical power from space to boost its Defense and Sp. Def stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Cotton Guard",
    "slug": "cotton-guard",
    "usage": 0,
    "description": "The user protects itself by wrapping its body in soft cotton, drastically boosting its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Cotton Spore",
    "slug": "cotton-spore",
    "usage": 0,
    "description": "The user releases cotton-like spores that cling to opposing Pokémon. This harshly lowers their Speed stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Cross Chop",
    "slug": "cross-chop",
    "usage": 0,
    "description": "The user delivers a double chop with its forearms crossed. This move has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Curse",
    "slug": "curse",
    "usage": 0,
    "description": "A move that has different effects depending on whether the user is a Ghost type or not.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Decorate",
    "slug": "decorate",
    "usage": 0,
    "description": "The user sharply boosts the target's Attack and Sp. Atk stats by decorating the target.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Destiny Bond",
    "slug": "destiny-bond",
    "usage": 0,
    "description": "If the user is knocked out after using this move, the Pokémon that knocked it out will also faint. This move's chance of failing rises if it is used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Dig",
    "slug": "dig",
    "usage": 0,
    "description": "The user burrows into the ground on the first turn, then attacks on the next turn.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Discharge",
    "slug": "discharge",
    "usage": 0,
    "description": "The user strikes everything around it by letting loose a flare of electricity. This may also leave those hit by the attack with paralysis.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Dragon Cheer",
    "slug": "dragon-cheer",
    "usage": 0,
    "description": "The user raises its allies’ morale with a draconic cry so that their future attacks have a heightened chance of landing critical hits. This rouses Dragon types more.",
    "power": 0,
    "accuracy": 0,
    "pp": 16
  },
  {
    "name": "Dragon Darts",
    "slug": "dragon-darts",
    "usage": 0,
    "description": "The user attacks twice using Dreepy. If there are two opposing Pokémon, this move hits each of them once.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dragon Rush",
    "slug": "dragon-rush",
    "usage": 0,
    "description": "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
    "power": 100,
    "accuracy": 75,
    "pp": 12
  },
  {
    "name": "Dragon Tail",
    "slug": "dragon-tail",
    "usage": 0,
    "description": "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
    "power": 60,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Drill Peck",
    "slug": "drill-peck",
    "usage": 0,
    "description": "A corkscrewing attack that strikes the target with a sharp beak acting as a drill.",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Drill Run",
    "slug": "drill-run",
    "usage": 0,
    "description": "The user crashes into the target while rotating its body like a drill. This move has a heightened chance of landing a critical hit.",
    "power": 80,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Dynamic Punch",
    "slug": "dynamic-punch",
    "usage": 0,
    "description": "The user attacks by punching the target with full concentrated power. This also confuses the target.",
    "power": 100,
    "accuracy": 50,
    "pp": 8
  },
  {
    "name": "Eerie Impulse",
    "slug": "eerie-impulse",
    "usage": 0,
    "description": "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Electric Terrain",
    "slug": "electric-terrain",
    "usage": 0,
    "description": "The user turns the ground into Electric Terrain for five turns, powering up Electric-type moves. Pokémon on the ground can no longer fall asleep.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Endeavor",
    "slug": "endeavor",
    "usage": 0,
    "description": "The user inflicts damage by cutting down the target's HP to roughly equal the user's HP.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Endure",
    "slug": "endure",
    "usage": 0,
    "description": "The user endures any attack with at least 1 HP. This move's chance of failing rises if used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Entrainment",
    "slug": "entrainment",
    "usage": 0,
    "description": "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Expanding Force",
    "slug": "expanding-force",
    "usage": 0,
    "description": "The user attacks the target with its psychic power. When the ground is Psychic Terrain, this move's power is boosted and it damages all opposing Pokémon.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Explosion",
    "slug": "explosion",
    "usage": 0,
    "description": "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
    "power": 250,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Extrasensory",
    "slug": "extrasensory",
    "usage": 0,
    "description": "The user attacks with an odd, unseeable power. This may also make the target flinch.",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Facade",
    "slug": "facade",
    "usage": 0,
    "description": "This move's power is doubled if the user is poisoned, burned, or paralyzed.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Fake Tears",
    "slug": "fake-tears",
    "usage": 0,
    "description": "The user feigns crying to fluster the target. This harshly lowers the target's Sp. Def stat.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Feather Dance",
    "slug": "feather-dance",
    "usage": 0,
    "description": "The user covers the target's body with a mass of down that harshly lowers its Attack stat.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Fickle Beam",
    "slug": "fickle-beam",
    "usage": 0,
    "description": "The user shoots a beam of light to inflict damage. Sometimes all the user's heads shoot beams in unison, doubling the move's power.",
    "power": 80,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Fiery Dance",
    "slug": "fiery-dance",
    "usage": 0,
    "description": "Cloaked in flames, the user attacks the target by dancing and flapping its wings. This may also boost the user's Sp. Atk stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Final Gambit",
    "slug": "final-gambit",
    "usage": 0,
    "description": "The user risks everything to attack the target. The user faints but inflicts damage equal to its own HP.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Fire Blast",
    "slug": "fire-blast",
    "usage": 0,
    "description": "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
    "power": 110,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Fire Fang",
    "slug": "fire-fang",
    "usage": 0,
    "description": "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.",
    "power": 65,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Fire Punch",
    "slug": "fire-punch",
    "usage": 0,
    "description": "The target is attacked with a fiery punch. This may also leave the target with a burn.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Fire Spin",
    "slug": "fire-spin",
    "usage": 0,
    "description": "The user traps the target inside a fierce vortex of fire that inflicts damage for four to five turns.",
    "power": 35,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Fissure",
    "slug": "fissure",
    "usage": 0,
    "description": "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",
    "power": null,
    "accuracy": 30,
    "pp": 8
  },
  {
    "name": "Flame Charge",
    "slug": "flame-charge",
    "usage": 0,
    "description": "Cloaking itself in flame, the user attacks the target. Then, building up momentum, the user boosts its Speed stat.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Flatter",
    "slug": "flatter",
    "usage": 0,
    "description": "Flattery is used to confuse the target. However, this also boosts the target's Sp. Atk stat.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Fling",
    "slug": "fling",
    "usage": 0,
    "description": "The user flings its held item at the target to attack. This move's power and effects depend on the item.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Flower Trick",
    "slug": "flower-trick",
    "usage": 0,
    "description": "The user throws a rigged bouquet of flowers at the target. This attack never misses and always lands a critical hit.",
    "power": 70,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Fly",
    "slug": "fly",
    "usage": 0,
    "description": "The user flies up into the sky on the first turn, then attacks on the next turn.",
    "power": 90,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Flying Press",
    "slug": "flying-press",
    "usage": 0,
    "description": "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.",
    "power": 100,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Focus Blast",
    "slug": "focus-blast",
    "usage": 0,
    "description": "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
    "power": 120,
    "accuracy": 70,
    "pp": 8
  },
  {
    "name": "Focus Energy",
    "slug": "focus-energy",
    "usage": 0,
    "description": "The user takes a deep breath and focuses so that its future attacks have a heightened chance of landing critical hits.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Frost Breath",
    "slug": "frost-breath",
    "usage": 0,
    "description": "The user attacks by blowing its cold breath on the target. This move always lands a critical hit.",
    "power": 60,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Giga Impact",
    "slug": "giga-impact",
    "usage": 0,
    "description": "The user charges at the target using every bit of its power. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Glare",
    "slug": "glare",
    "usage": 0,
    "description": "The user intimidates the target with the pattern on its belly to cause paralysis.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Grass Knot",
    "slug": "grass-knot",
    "usage": 0,
    "description": "The user snares the target with grass and trips it. The heavier the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Grassy Terrain",
    "slug": "grassy-terrain",
    "usage": 0,
    "description": "The user turns the ground into Grassy Terrain for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Gravity",
    "slug": "gravity",
    "usage": 0,
    "description": "Enables Flying types or Pokémon with the Levitate Ability to be hit by Ground-type moves for five turns. Moves that involve flying can't be used.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Growth",
    "slug": "growth",
    "usage": 0,
    "description": "The user's body grows all at once, boosting the Attack and Sp. Atk stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Hammer Arm",
    "slug": "hammer-arm",
    "usage": 0,
    "description": "The user swings its strong, heavy fist at the target to inflict damage. This also lowers the user's Speed stat.",
    "power": 100,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Hard Press",
    "slug": "hard-press",
    "usage": 0,
    "description": "The target is crushed with an arm, a claw, or the like to inflict damage. The more HP the target has left, the greater the move's power.",
    "power": 0,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Haze",
    "slug": "haze",
    "usage": 0,
    "description": "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Headlong Rush",
    "slug": "headlong-rush",
    "usage": 0,
    "description": "The user smashes into the target in a full-body tackle. This also lowers the user’s Defense and Sp. Def stats.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Heal Pulse",
    "slug": "heal-pulse",
    "usage": 0,
    "description": "The user emits a healing pulse that restores the target's HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Healing Wish",
    "slug": "healing-wish",
    "usage": 0,
    "description": "The user faints. In return, the Pokémon taking its place will have its HP restored and status conditions cured.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Heat Crash",
    "slug": "heat-crash",
    "usage": 0,
    "description": "The user slams into the target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Hex",
    "slug": "hex",
    "usage": 0,
    "description": "This relentless attack does massive damage to a target affected by status conditions.",
    "power": 65,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "High Jump Kick",
    "slug": "high-jump-kick",
    "usage": 0,
    "description": "The target is attacked with a knee kick from a jump. If this move misses, the user takes damage instead.",
    "power": 130,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Howl",
    "slug": "howl",
    "usage": 0,
    "description": "The user howls loudly to rouse itself and its allies. This boosts their Attack stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Hydro Cannon",
    "slug": "hydro-cannon",
    "usage": 0,
    "description": "The target is hit with a watery blast. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Ice Fang",
    "slug": "ice-fang",
    "usage": 0,
    "description": "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen.",
    "power": 65,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Ice Hammer",
    "slug": "ice-hammer",
    "usage": 0,
    "description": "The user swings its strong, heavy fist at the target to inflict damage. This also lowers the user's Speed stat.",
    "power": 100,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Ice Shard",
    "slug": "ice-shard",
    "usage": 0,
    "description": "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Ice Spinner",
    "slug": "ice-spinner",
    "usage": 0,
    "description": "The user covers its feet in thin ice and twirls around, slamming into the target. This move's spinning motion also destroys the terrain.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Icicle Crash",
    "slug": "icicle-crash",
    "usage": 0,
    "description": "The user attacks by crashing large icicles onto the target. This may also make the target flinch.",
    "power": 85,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Icicle Spear",
    "slug": "icicle-spear",
    "usage": 0,
    "description": "The user attacks by launching sharp icicles at the target. This move hits two to five times in a row.",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Infernal Parade",
    "slug": "infernal-parade",
    "usage": 0,
    "description": "The user attacks with myriad fireballs. This may also leave the target with a burn. This move's power is doubled if the target has a status condition.",
    "power": 65,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Inferno",
    "slug": "inferno",
    "usage": 0,
    "description": "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.",
    "power": 100,
    "accuracy": 50,
    "pp": 8
  },
  {
    "name": "Infestation",
    "slug": "infestation",
    "usage": 0,
    "description": "The target is infested and attacked for four to five turns. The target can't flee during this time.",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Instruct",
    "slug": "instruct",
    "usage": 0,
    "description": "The user instructs the target to reuse the move last used by the target.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Iron Tail",
    "slug": "iron-tail",
    "usage": 0,
    "description": "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.",
    "power": 100,
    "accuracy": 75,
    "pp": 16
  },
  {
    "name": "Lash Out",
    "slug": "lash-out",
    "usage": 0,
    "description": "The user lashes out to vent its frustration toward the target. This move's power is doubled if the user's stats were lowered during this turn.",
    "power": 75,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Last Resort",
    "slug": "last-resort",
    "usage": 0,
    "description": "This move can be used only after the user has used all the other moves it knows in the battle.",
    "power": 140,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Lava Plume",
    "slug": "lava-plume",
    "usage": 0,
    "description": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Leaf Blade",
    "slug": "leaf-blade",
    "usage": 0,
    "description": "The user handles a sharp leaf like a sword and cuts the target to inflict damage. This move has a heightened chance of landing a critical hit.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Leech Life",
    "slug": "leech-life",
    "usage": 0,
    "description": "The user drains the target's blood. The user's HP is restored by up to half the damage taken by the target.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Low Sweep",
    "slug": "low-sweep",
    "usage": 0,
    "description": "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Lumina Crash",
    "slug": "lumina-crash",
    "usage": 0,
    "description": "The user attacks by unleashing a peculiar light that even affects the mind. This also harshly lowers the target's Sp. Def stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Lunge",
    "slug": "lunge",
    "usage": 0,
    "description": "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Mach Punch",
    "slug": "mach-punch",
    "usage": 0,
    "description": "The user throws a punch at blinding speed. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Magic Powder",
    "slug": "magic-powder",
    "usage": 0,
    "description": "The user scatters a cloud of magic powder that changes the target's type to Psychic.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Magic Room",
    "slug": "magic-room",
    "usage": 0,
    "description": "The user creates a bizarre area in which Pokémon's held items lose their effects for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Magnet Rise",
    "slug": "magnet-rise",
    "usage": 0,
    "description": "The user levitates using electrically generated magnetism for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Mean Look",
    "slug": "mean-look",
    "usage": 0,
    "description": "The user pins the target with a dark, arresting look. The target becomes unable to flee.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Mega Kick",
    "slug": "mega-kick",
    "usage": 0,
    "description": "The target is attacked by a kick launched with muscle-packed power.",
    "power": 120,
    "accuracy": 75,
    "pp": 8
  },
  {
    "name": "Megahorn",
    "slug": "megahorn",
    "usage": 0,
    "description": "Using its tough and impressive horn, the user rams into the target with no letup.",
    "power": 120,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Memento",
    "slug": "memento",
    "usage": 0,
    "description": "The user faints. In return, the target's Attack and Sp. Atk stats are harshly lowered.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Metal Burst",
    "slug": "metal-burst",
    "usage": 0,
    "description": "The user retaliates with much greater force against the opponent that last inflicted damage on it.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Meteor Mash",
    "slug": "meteor-mash",
    "usage": 0,
    "description": "The target is hit with a hard punch fired like a meteor. This may also boost the user’s Attack stat.",
    "power": 90,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Minimize",
    "slug": "minimize",
    "usage": 0,
    "description": "The user compresses its body to make itself look smaller, which sharply boosts its evasiveness.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Mirror Coat",
    "slug": "mirror-coat",
    "usage": 0,
    "description": "A retaliatory attack that counters any special move, inflicting double the damage taken.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Misty Explosion",
    "slug": "misty-explosion",
    "usage": 0,
    "description": "The user attacks everything around it and faints upon using this move. This move's power is boosted on Misty Terrain.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Moonlight",
    "slug": "moonlight",
    "usage": 0,
    "description": "The user restores its own HP. The amount of HP regained varies with the weather.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Morning Sun",
    "slug": "morning-sun",
    "usage": 0,
    "description": "The user restores its own HP. The amount of HP regained varies with the weather.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Mortal Spin",
    "slug": "mortal-spin",
    "usage": 0,
    "description": "The user performs a spin attack that can also eliminate the effects of such moves as Bind, Wrap, and Leech Seed. This also poisons opposing Pokémon.",
    "power": 30,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Mystical Fire",
    "slug": "mystical-fire",
    "usage": 0,
    "description": "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Night Shade",
    "slug": "night-shade",
    "usage": 0,
    "description": "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Night Slash",
    "slug": "night-slash",
    "usage": 0,
    "description": "The user slashes the target the instant an opportunity arises. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Nuzzle",
    "slug": "nuzzle",
    "usage": 0,
    "description": "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Outrage",
    "slug": "outrage",
    "usage": 0,
    "description": "The user rampages and attacks for two to three turns. The user then becomes confused.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Pain Split",
    "slug": "pain-split",
    "usage": 0,
    "description": "The user adds its HP to the target's HP, then equally splits the combined HP between the target and itself.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Parabolic Charge",
    "slug": "parabolic-charge",
    "usage": 0,
    "description": "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Payback",
    "slug": "payback",
    "usage": 0,
    "description": "The user stores power, then attacks. This move's power is doubled if the user moves after the target.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Petal Dance",
    "slug": "petal-dance",
    "usage": 0,
    "description": "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Phantom Force",
    "slug": "phantom-force",
    "usage": 0,
    "description": "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Pin Missile",
    "slug": "pin-missile",
    "usage": 0,
    "description": "The user attacks by shooting sharp spikes at the target. This move hits two to five times in a row.",
    "power": 25,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Pollen Puff",
    "slug": "pollen-puff",
    "usage": 0,
    "description": "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Population Bomb",
    "slug": "population-bomb",
    "usage": 0,
    "description": "The user’s fellows gather in droves to perform a combo attack that hits the target one to ten times in a row.",
    "power": 20,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Pounce",
    "slug": "pounce",
    "usage": 0,
    "description": "The user attacks by pouncing on the target. This also lowers the target's Speed stat.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Power Whip",
    "slug": "power-whip",
    "usage": 0,
    "description": "The user violently whirls its vines, tentacles, or the like to lash the target.",
    "power": 120,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Precipice Blades",
    "slug": "precipice-blades",
    "usage": 0,
    "description": "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone.",
    "power": 120,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Psych Up",
    "slug": "psych-up",
    "usage": 0,
    "description": "The user hypnotizes itself into copying any stat change made by the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Psychic Fangs",
    "slug": "psychic-fangs",
    "usage": 0,
    "description": "The user attacks by biting the target with its psychic capabilities. This move can also break barriers, such as Light Screen and Reflect.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Psychic Noise",
    "slug": "psychic-noise",
    "usage": 0,
    "description": "The user attacks the target with unpleasant sound waves. For two turns, the target is prevented from recovering HP through moves, Abilities, or held items.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Psychic Terrain",
    "slug": "psychic-terrain",
    "usage": 0,
    "description": "This protects Pokémon on the ground from priority moves and powers up Psychic-type moves for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Psyshield Bash",
    "slug": "psyshield-bash",
    "usage": 0,
    "description": "Cloaking itself in psychic energy, the user slams into the target. This also boosts the user’s Defense stat.",
    "power": 90,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Quash",
    "slug": "quash",
    "usage": 0,
    "description": "The user suppresses the target and makes its move go last.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Quick Guard",
    "slug": "quick-guard",
    "usage": 0,
    "description": "The user protects itself and its allies from priority moves.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Quiver Dance",
    "slug": "quiver-dance",
    "usage": 0,
    "description": "The user lightly performs a beautiful, mystic dance. This boosts the user's Sp. Atk, Sp. Def, and Speed stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Rage",
    "slug": "rage",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Raging Bull",
    "slug": "raging-bull",
    "usage": 0,
    "description": "The user performs a tackle like a raging bull. This move's type depends on the user's form. It can also break barriers, such as Light Screen and Reflect.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Raging Fury",
    "slug": "raging-fury",
    "usage": 0,
    "description": "The user rampages around spewing flames for two to three turns. The user then becomes confused.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Razor Shell",
    "slug": "razor-shell",
    "usage": 0,
    "description": "The user cuts the target with sharp shells to inflict damage. This may also lower the target's Defense stat.",
    "power": 75,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Reflect Type",
    "slug": "reflect-type",
    "usage": 0,
    "description": "The user reflects the target's type to become the same type as the target.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Rest",
    "slug": "rest",
    "usage": 0,
    "description": "The user goes to sleep for two turns. This fully restores the user's HP and cures any status conditions.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Roar",
    "slug": "roar",
    "usage": 0,
    "description": "The target is scared off, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Rock Blast",
    "slug": "rock-blast",
    "usage": 0,
    "description": "The user attacks by hurling hard rocks at the target. This move hits two to five times in a row.",
    "power": 25,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Rock Polish",
    "slug": "rock-polish",
    "usage": 0,
    "description": "The user polishes its body to reduce drag. This sharply boosts the user's Speed stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Round",
    "slug": "round",
    "usage": 0,
    "description": "The user attacks the target with a song. If others use this move, they will act immediately after the initial user, and the power of their Rounds will be boosted.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Safeguard",
    "slug": "safeguard",
    "usage": 0,
    "description": "The user creates a protective field that prevents status conditions for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Salt Cure",
    "slug": "salt-cure",
    "usage": 0,
    "description": "The user salt cures the target, inflicting damage every turn. Steel and Water types are more strongly affected by this move.",
    "power": 40,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Sand Tomb",
    "slug": "sand-tomb",
    "usage": 0,
    "description": "The user traps the target inside a harshly raging sandstorm that inflicts damage for four to five turns.",
    "power": 35,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Sandstorm",
    "slug": "sandstorm",
    "usage": 0,
    "description": "A five-turn sandstorm is summoned to damage all Pokémon except Rock, Ground, and Steel types. The sandstorm also boosts the Sp. Def stats of Rock types.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Scorching Sands",
    "slug": "scorching-sands",
    "usage": 0,
    "description": "The user throws scorching sand at the target to attack. This may also leave the target with a burn.",
    "power": 70,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Seed Bomb",
    "slug": "seed-bomb",
    "usage": 0,
    "description": "The user attacks by slamming a barrage of hard-shelled seeds down on the target from above.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Self-Destruct",
    "slug": "self-destruct",
    "usage": 0,
    "description": "The user attacks everything around it by causing an explosion. The user faints upon using this move.",
    "power": 200,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Shadow Claw",
    "slug": "shadow-claw",
    "usage": 0,
    "description": "The user attacks by slashing the target with a sharp claw made from shadows. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Shed Tail",
    "slug": "shed-tail",
    "usage": 0,
    "description": "The user creates a substitute for itself using its own HP before switching places with a party Pokémon in waiting.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Sheer Cold",
    "slug": "sheer-cold",
    "usage": 0,
    "description": "The target faints instantly. This move is less likely to hit the target if used by Pokémon other than Ice types.",
    "power": null,
    "accuracy": 30,
    "pp": 8
  },
  {
    "name": "Shell Side Arm",
    "slug": "shell-side-arm",
    "usage": 0,
    "description": "This move is either physical or special—whichever will inflict more damage. This may also poison the target.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Shelter",
    "slug": "shelter",
    "usage": 0,
    "description": "The user makes its skin as hard as an iron shield, sharply boosting its Defense stat.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Simple Beam",
    "slug": "simple-beam",
    "usage": 0,
    "description": "The user emits a mysterious psychic wave that changes the target's Ability to Simple.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Skill Swap",
    "slug": "skill-swap",
    "usage": 0,
    "description": "The user employs its psychic power to exchange Abilities with the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Skitter Smack",
    "slug": "skitter-smack",
    "usage": 0,
    "description": "The user skitters behind the target to attack. This also lowers the target's Sp. Atk stat.",
    "power": 70,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Slack Off",
    "slug": "slack-off",
    "usage": 0,
    "description": "The user slacks off, restoring its own HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Sleep Talk",
    "slug": "sleep-talk",
    "usage": 0,
    "description": "The user randomly uses one of the moves it knows. This move can only be used while the user is asleep.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Sludge Wave",
    "slug": "sludge-wave",
    "usage": 0,
    "description": "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those it hits.",
    "power": 95,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Smack Down",
    "slug": "smack-down",
    "usage": 0,
    "description": "The user throws a stone or similar projectile to attack the target. If the target is in the air, it will be knocked down to the ground.",
    "power": 50,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Snowscape",
    "slug": "snowscape",
    "usage": 0,
    "description": "The user summons a snowstorm lasting five turns. This boosts the Defense stats of Ice types.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Soak",
    "slug": "soak",
    "usage": 0,
    "description": "The user shoots a torrent of water that changes the target's type to Water.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Solar Blade",
    "slug": "solar-blade",
    "usage": 0,
    "description": "The user gathers light on the first turn, then fills a blade with the light's energy and attacks on the next turn.",
    "power": 125,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Speed Swap",
    "slug": "speed-swap",
    "usage": 0,
    "description": "The user exchanges Speed stats with the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Spicy Extract",
    "slug": "spicy-extract",
    "usage": 0,
    "description": "The user emits an incredibly spicy extract, sharply boosting the target's Attack stat and harshly lowering the target's Defense stat.",
    "power": 0,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Spikes",
    "slug": "spikes",
    "usage": 0,
    "description": "The user lays a trap of spikes at the feet of the opposing team. The spikes will damage opposing Pokémon that switch into battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Spirit Shackle",
    "slug": "spirit-shackle",
    "usage": 0,
    "description": "The user attacks while simultaneously stitching the target's shadow to the ground to prevent the target from fleeing.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Stealth Rock",
    "slug": "stealth-rock",
    "usage": 0,
    "description": "The user lays a trap of levitating stones around the opposing team. The trap damages opposing Pokémon that switch into battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Steel Beam",
    "slug": "steel-beam",
    "usage": 0,
    "description": "The user fires a beam of steel that it collected from its entire body. This also damages the user.",
    "power": 140,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Steel Wing",
    "slug": "steel-wing",
    "usage": 0,
    "description": "The target is hit with wings of steel. This may also boost the user's Defense stat.",
    "power": 70,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Stockpile",
    "slug": "stockpile",
    "usage": 0,
    "description": "The user stores power and boosts its Defense and Sp. Def stats. This move can be used up to three times.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Stored Power",
    "slug": "stored-power",
    "usage": 0,
    "description": "The user attacks the target with stored power. The more the user's stats are boosted, the greater the move's power.",
    "power": 20,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Storm Throw",
    "slug": "storm-throw",
    "usage": 0,
    "description": "The user strikes the target with a fierce blow. This attack always results in a critical hit.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Strange Steam",
    "slug": "strange-steam",
    "usage": 0,
    "description": "The user attacks the target by emitting steam. This may also confuse the target.",
    "power": 90,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "String Shot",
    "slug": "string-shot",
    "usage": 0,
    "description": "The user blows silk from its mouth that binds opposing Pokémon and harshly lowers their Speed stats.",
    "power": null,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Struggle Bug",
    "slug": "struggle-bug",
    "usage": 0,
    "description": "The user attacks by struggling against opposing Pokémon. This also lowers their Sp. Atk stats.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Stun Spore",
    "slug": "stun-spore",
    "usage": 0,
    "description": "The user scatters a cloud of numbing powder that paralyzes the target.",
    "power": null,
    "accuracy": 75,
    "pp": 20
  },
  {
    "name": "Supercell Slam",
    "slug": "supercell-slam",
    "usage": 0,
    "description": "The user electrifies its body and drops onto the target to inflict damage. If this move misses, the user takes damage instead.",
    "power": 100,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Superpower",
    "slug": "superpower",
    "usage": 0,
    "description": "The user attacks the target with great power. This also lowers the user's Attack and Defense stats.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Surf",
    "slug": "surf",
    "usage": 0,
    "description": "The user attacks everything around it by swamping its surroundings with a giant wave.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Swagger",
    "slug": "swagger",
    "usage": 0,
    "description": "The user enrages and confuses the target. However, this also sharply boosts the target's Attack stat.",
    "power": null,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Synthesis",
    "slug": "synthesis",
    "usage": 0,
    "description": "The user restores its own HP. The amount of HP regained varies with the weather.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Syrup Bomb",
    "slug": "syrup-bomb",
    "usage": 0,
    "description": "The user sets off an explosion of sticky candy syrup, which coats the target and causes the target's Speed stat to drop each turn for three turns.",
    "power": 60,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Temper Flare",
    "slug": "temper-flare",
    "usage": 0,
    "description": "Spurred by desperation, the user attacks the target. This move's power is doubled if the user's previous move failed.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Thief",
    "slug": "thief",
    "usage": 0,
    "description": "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Thunder Fang",
    "slug": "thunder-fang",
    "usage": 0,
    "description": "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis.",
    "power": 65,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Thunder Punch",
    "slug": "thunder-punch",
    "usage": 0,
    "description": "The target is attacked with an electrified punch. This may also leave the target with paralysis.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Tickle",
    "slug": "tickle",
    "usage": 0,
    "description": "The user tickles the target into laughing, lowering its Attack and Defense stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Torch Song",
    "slug": "torch-song",
    "usage": 0,
    "description": "The user blows out raging flames as if singing a song, scorching the target. This also boosts the user's Sp. Atk stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Toxic",
    "slug": "toxic",
    "usage": 0,
    "description": "A move that leaves the target badly poisoned. Its poison damage worsens every turn.",
    "power": null,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Toxic Spikes",
    "slug": "toxic-spikes",
    "usage": 0,
    "description": "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Trailblaze",
    "slug": "trailblaze",
    "usage": 0,
    "description": "The user attacks suddenly as if leaping out from tall grass. The user's nimble footwork boosts its Speed stat.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Transform",
    "slug": "transform",
    "usage": 0,
    "description": "The user transforms into a copy of the target, right down to having the same move set.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Trick",
    "slug": "trick",
    "usage": 0,
    "description": "The user catches the target off guard and swaps the target's held item with its own.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Triple Arrows",
    "slug": "triple-arrows",
    "usage": 0,
    "description": "The user kicks, then fires three arrows. This move has a heightened chance of landing a critical hit and may also lower the target’s Defense stat or make it flinch.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Trop Kick",
    "slug": "trop-kick",
    "usage": 0,
    "description": "The user lands an intense kick of tropical origins on the target. This also lowers the target's Attack stat.",
    "power": 85,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Upper Hand",
    "slug": "upper-hand",
    "usage": 0,
    "description": "The user reacts to the target's movement and strikes with the heel of its palm, making the target flinch. This move fails if the target is not readying a priority move.",
    "power": 65,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Vacuum Wave",
    "slug": "vacuum-wave",
    "usage": 0,
    "description": "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Venoshock",
    "slug": "venoshock",
    "usage": 0,
    "description": "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned.",
    "power": 65,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Volt Tackle",
    "slug": "volt-tackle",
    "usage": 0,
    "description": "The user electrifies itself and charges the target. This also damages the user quite a lot. This attack may leave the target with paralysis.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Water Pulse",
    "slug": "water-pulse",
    "usage": 0,
    "description": "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Water Shuriken",
    "slug": "water-shuriken",
    "usage": 0,
    "description": "The user hits the target with throwing stars two to five times in a row. This move always goes first.",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Whirlpool",
    "slug": "whirlpool",
    "usage": 0,
    "description": "The user traps the target inside a violent, swirling whirlpool that inflicts damage for four to five turns.",
    "power": 35,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Whirlwind",
    "slug": "whirlwind",
    "usage": 0,
    "description": "The target is blown away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Wild Charge",
    "slug": "wild-charge",
    "usage": 0,
    "description": "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Wish",
    "slug": "wish",
    "usage": 0,
    "description": "One turn after this move is used, the user's or its replacement's HP is restored by up to half the user's max HP.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Wonder Room",
    "slug": "wonder-room",
    "usage": 0,
    "description": "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Wood Hammer",
    "slug": "wood-hammer",
    "usage": 0,
    "description": "The user slams its rugged body into the target to attack. This also damages the user quite a lot.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Worry Seed",
    "slug": "worry-seed",
    "usage": 0,
    "description": "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "X-Scissor",
    "slug": "x-scissor",
    "usage": 0,
    "description": "The user slashes at the target by crossing its scythes, claws, or the like as if they were a pair of scissors.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Zap Cannon",
    "slug": "zap-cannon",
    "usage": 0,
    "description": "The user attacks by firing an electric blast like a cannon. This also leaves the target with paralysis.",
    "power": 120,
    "accuracy": 50,
    "pp": 8
  },
  {
    "name": "Zen Headbutt",
    "slug": "zen-headbutt",
    "usage": 0,
    "description": "The user focuses its willpower to its head and attacks the target. This may also make the target flinch.",
    "power": 80,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "10,000,000 Volt Thunderbolt",
    "slug": "10-000-000-volt-thunderbolt",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 195,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Absorb",
    "slug": "absorb",
    "usage": 0,
    "description": "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target.",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Acid",
    "slug": "acid",
    "usage": 0,
    "description": "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Acid Downpour",
    "slug": "acid-downpour--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Acid Downpour",
    "slug": "acid-downpour--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Aeroblast",
    "slug": "aeroblast",
    "usage": 0,
    "description": "A vortex of air is shot at the target to inflict damage. This move has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "All-Out Pummeling",
    "slug": "all-out-pummeling--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "All-Out Pummeling",
    "slug": "all-out-pummeling--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Anchor Shot",
    "slug": "anchor-shot",
    "usage": 0,
    "description": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Apple Acid",
    "slug": "apple-acid",
    "usage": 0,
    "description": "The user attacks the target with an acidic liquid created from tart apples. This also lowers the target's Sp. Def stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Aqua Ring",
    "slug": "aqua-ring",
    "usage": 0,
    "description": "The user envelops itself in a veil made of water. It regains some HP every turn.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Arm Thrust",
    "slug": "arm-thrust",
    "usage": 0,
    "description": "The user attacks the target with open-palmed arm thrusts. This move hits two to five times in a row.",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Aromatherapy",
    "slug": "aromatherapy",
    "usage": 0,
    "description": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Assist",
    "slug": "assist",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Astonish",
    "slug": "astonish",
    "usage": 0,
    "description": "The user attacks the target by crying out in a startling fashion. This may also make the target flinch.",
    "power": 30,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Astral Barrage",
    "slug": "astral-barrage",
    "usage": 0,
    "description": "The user attacks by sending a frightful amount of small ghosts at opposing Pokémon.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Attack Order",
    "slug": "attack-order",
    "usage": 0,
    "description": "The user calls out its underlings to pummel the target. This move has a heightened chance of landing a critical hit.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Aurora Beam",
    "slug": "aurora-beam",
    "usage": 0,
    "description": "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Autotomize",
    "slug": "autotomize",
    "usage": 0,
    "description": "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Axe Kick",
    "slug": "axe-kick",
    "usage": 0,
    "description": "The user attacks by kicking up into the air and slamming its heel down upon the target. This may also confuse the target. If it misses, the user takes damage instead.",
    "power": 120,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Baddy Bad",
    "slug": "baddy-bad",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 80,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Barb Barrage",
    "slug": "barb-barrage",
    "usage": 0,
    "description": "The user launches countless toxic barbs to inflict damage. This may also poison the target. This move’s power is doubled if the target is already poisoned.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Barrage",
    "slug": "barrage",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Barrier",
    "slug": "barrier",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Behemoth Bash",
    "slug": "behemoth-bash",
    "usage": 0,
    "description": "The user becomes a gigantic shield and slams into the target. This move deals twice the damage if the target is Dynamaxed.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Behemoth Blade",
    "slug": "behemoth-blade",
    "usage": 0,
    "description": "The user becomes a gigantic sword and cuts the target. This move deals twice the damage if the target is Dynamaxed.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Belch",
    "slug": "belch",
    "usage": 0,
    "description": "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move.",
    "power": 120,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Bestow",
    "slug": "bestow",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Bide",
    "slug": "bide",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Bind",
    "slug": "bind",
    "usage": 0,
    "description": "A long body, tentacles, or the like are used to bind and squeeze the target for four to five turns.",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Black Hole Eclipse",
    "slug": "black-hole-eclipse--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Black Hole Eclipse",
    "slug": "black-hole-eclipse--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Blazing Torque",
    "slug": "blazing-torque",
    "usage": 0,
    "description": "",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bleakwind Storm",
    "slug": "bleakwind-storm",
    "usage": 0,
    "description": "The user attacks with savagely cold winds that cause both body and spirit to tremble. This may also lower the Speed stats of opposing Pokémon.",
    "power": 100,
    "accuracy": 80,
    "pp": 12
  },
  {
    "name": "Block",
    "slug": "block",
    "usage": 0,
    "description": "The user blocks the target's way with arms spread wide to prevent the target from fleeing.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Blood Moon",
    "slug": "blood-moon",
    "usage": 0,
    "description": "The user unleashes the full brunt of its spirit from a full moon that shines as red as blood. This move can't be used twice in a row.",
    "power": 140,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Bloom Doom",
    "slug": "bloom-doom--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Bloom Doom",
    "slug": "bloom-doom--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Blue Flare",
    "slug": "blue-flare",
    "usage": 0,
    "description": "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn.",
    "power": 130,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Bolt Beak",
    "slug": "bolt-beak",
    "usage": 0,
    "description": "The user stabs the target with its electrified beak. If the user attacks before the target, the power of this move is doubled.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bolt Strike",
    "slug": "bolt-strike",
    "usage": 0,
    "description": "The user surrounds itself with a great amount of electricity and charges the target. This may also leave the target with paralysis.",
    "power": 130,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Bone Club",
    "slug": "bone-club",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 65,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Bonemerang",
    "slug": "bonemerang",
    "usage": 0,
    "description": "The user throws the bone it holds. The bone loops around to hit the target twice—coming and going.",
    "power": 50,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Bounce",
    "slug": "bounce",
    "usage": 0,
    "description": "The user bounces up high on the first turn, then drops onto the target on the next turn. This may also leave the target with paralysis.",
    "power": 85,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Bouncy Bubble",
    "slug": "bouncy-bubble",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Breakneck Blitz",
    "slug": "breakneck-blitz--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Breakneck Blitz",
    "slug": "breakneck-blitz--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Brine",
    "slug": "brine",
    "usage": 0,
    "description": "This move's power is doubled if the target's HP is at half or less.",
    "power": 65,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Bubble",
    "slug": "bubble",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Bubble Beam",
    "slug": "bubble-beam",
    "usage": 0,
    "description": "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Burning Bulwark",
    "slug": "burning-bulwark",
    "usage": 0,
    "description": "The user's intensely hot fur protects it from attacks and also burns any attacker that makes direct contact with it.",
    "power": 0,
    "accuracy": 0,
    "pp": 12
  },
  {
    "name": "Buzzy Buzz",
    "slug": "buzzy-buzz",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Camouflage",
    "slug": "camouflage",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Captivate",
    "slug": "captivate",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Catastropika",
    "slug": "catastropika",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 210,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Celebrate",
    "slug": "celebrate",
    "usage": 0,
    "description": "The Pokémon congratulates you on your special day!",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Chatter",
    "slug": "chatter",
    "usage": 0,
    "description": "The user attacks the target with sound waves of deafening chatter. This confuses the target.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Chip Away",
    "slug": "chip-away",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Chloroblast",
    "slug": "chloroblast",
    "usage": 0,
    "description": "The user launches its amassed chlorophyll to inflict damage on the target. This also damages the user.",
    "power": 150,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Circle Throw",
    "slug": "circle-throw",
    "usage": 0,
    "description": "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
    "power": 60,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Clamp",
    "slug": "clamp",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 35,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Clangorous Soulblaze",
    "slug": "clangorous-soulblaze",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 185,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Clear Smog",
    "slug": "clear-smog",
    "usage": 0,
    "description": "The user attacks the target by throwing a clump of special mud. All stat changes are eliminated.",
    "power": 50,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Collision Course",
    "slug": "collision-course",
    "usage": 0,
    "description": "The user transforms and crashes to the ground, causing a massive prehistoric explosion. This move's power is boosted more than usual if it’s a supereffective hit.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Combat Torque",
    "slug": "combat-torque",
    "usage": 0,
    "description": "",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Comet Punch",
    "slug": "comet-punch",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 18,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Comeuppance",
    "slug": "comeuppance",
    "usage": 0,
    "description": "The user retaliates with much greater force against the opponent that last inflicted damage on it.",
    "power": 1,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Confide",
    "slug": "confide",
    "usage": 0,
    "description": "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Confusion",
    "slug": "confusion",
    "usage": 0,
    "description": "The target is hit with a weak telekinetic force to inflict damage. This may also confuse the target.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Constrict",
    "slug": "constrict",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 10,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Continental Crush",
    "slug": "continental-crush--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Continental Crush",
    "slug": "continental-crush--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Conversion",
    "slug": "conversion",
    "usage": 0,
    "description": "The user changes its type to become the same type as the move at the top of the list of moves it knows.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Conversion 2",
    "slug": "conversion-2",
    "usage": 0,
    "description": "The user changes its type to make itself resistant to the type of the move the target used last.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Core Enforcer",
    "slug": "core-enforcer",
    "usage": 0,
    "description": "If the Pokémon the user has inflicted damage on have already used their moves, this move eliminates the effect of the target’s Ability.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Corkscrew Crash",
    "slug": "corkscrew-crash--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Corkscrew Crash",
    "slug": "corkscrew-crash--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Counter",
    "slug": "counter",
    "usage": 0,
    "description": "A retaliatory attack that counters any physical move, inflicting double the damage taken.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Court Change",
    "slug": "court-change",
    "usage": 0,
    "description": "With its mysterious power, the user swaps the effects on either side of the field.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Covet",
    "slug": "covet",
    "usage": 0,
    "description": "The user endearingly approaches the target, then steals the target's held item.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Crabhammer",
    "slug": "crabhammer",
    "usage": 0,
    "description": "The target is hammered with a large pincer. This move has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Crafty Shield",
    "slug": "crafty-shield",
    "usage": 0,
    "description": "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Cross Poison",
    "slug": "cross-poison",
    "usage": 0,
    "description": "A slashing attack with a poisonous blade that may also poison the target. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Crush Claw",
    "slug": "crush-claw",
    "usage": 0,
    "description": "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat.",
    "power": 75,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Crush Grip",
    "slug": "crush-grip",
    "usage": 0,
    "description": "The target is crushed with great force. The more HP the target has left, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Cut",
    "slug": "cut",
    "usage": 0,
    "description": "The target is cut with a scythe or claw.",
    "power": 50,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Dark Void",
    "slug": "dark-void",
    "usage": 0,
    "description": "Opposing Pokémon are dragged into a world of total darkness that puts them to sleep.",
    "power": null,
    "accuracy": 50,
    "pp": 12
  },
  {
    "name": "Defend Order",
    "slug": "defend-order",
    "usage": 0,
    "description": "The user calls out its underlings to shield its body, boosting its Defense and Sp. Def stats.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Defense Curl",
    "slug": "defense-curl",
    "usage": 0,
    "description": "The user curls up and boosts its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Defog",
    "slug": "defog",
    "usage": 0,
    "description": "A strong wind blows away the target's barriers such as Reflect or Light Screen. This also lowers the target's evasiveness.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Devastating Drake",
    "slug": "devastating-drake--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Devastating Drake",
    "slug": "devastating-drake--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Diamond Storm",
    "slug": "diamond-storm",
    "usage": 0,
    "description": "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply boost the user's Defense stat.",
    "power": 100,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Disarming Voice",
    "slug": "disarming-voice",
    "usage": 0,
    "description": "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses.",
    "power": 40,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Dive",
    "slug": "dive",
    "usage": 0,
    "description": "The user dives on the first turn, then floats up and attacks on the next turn.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dizzy Punch",
    "slug": "dizzy-punch",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Doodle",
    "slug": "doodle",
    "usage": 0,
    "description": "The user captures the very essence of the target in a sketch. This changes the Abilities of the user and its ally Pokémon to that of the target.",
    "power": 0,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Doom Desire",
    "slug": "doom-desire",
    "usage": 0,
    "description": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
    "power": 140,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Double Hit",
    "slug": "double-hit",
    "usage": 0,
    "description": "The user slams the target with a tail or the like. The target is hit twice in a row.",
    "power": 35,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Double Iron Bash",
    "slug": "double-iron-bash",
    "usage": 0,
    "description": "The user rotates, centering the hex nut in its chest, and then strikes with its arms twice in a row. This may also make the target flinch.",
    "power": 60,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Double Kick",
    "slug": "double-kick",
    "usage": 0,
    "description": "The user attacks by kicking the target twice in a row using two feet.",
    "power": 30,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Double Shock",
    "slug": "double-shock",
    "usage": 0,
    "description": "The user discharges all the electricity from its body to perform a high-damage attack. After using this move, the user will no longer be Electric type.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Double Slap",
    "slug": "double-slap",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 15,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Double Team",
    "slug": "double-team",
    "usage": 0,
    "description": "By moving rapidly, the user makes illusory copies of itself to boost its evasiveness.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Dragon Ascent",
    "slug": "dragon-ascent",
    "usage": 0,
    "description": "The user attacks the target by dropping out of the sky at high speed. This also lowers the user's Defense and Sp. Def stats.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Dragon Breath",
    "slug": "dragon-breath",
    "usage": 0,
    "description": "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Dragon Energy",
    "slug": "dragon-energy",
    "usage": 0,
    "description": "Converting its life-force into power, the user attacks opposing Pokémon. The lower the user's HP, the lower the move's power.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Dragon Hammer",
    "slug": "dragon-hammer",
    "usage": 0,
    "description": "The user wields its body like a hammer to attack the target and inflict damage.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Dragon Rage",
    "slug": "dragon-rage",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dream Eater",
    "slug": "dream-eater",
    "usage": 0,
    "description": "The user eats the dreams of a sleeping target. The user's HP is restored by up to half the damage taken by the target.",
    "power": 100,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Drum Beating",
    "slug": "drum-beating",
    "usage": 0,
    "description": "The user plays its drum, controlling the drum's roots to attack the target. This also lowers the target's Speed stat.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Dual Chop",
    "slug": "dual-chop",
    "usage": 0,
    "description": "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.",
    "power": 40,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Dynamax Cannon",
    "slug": "dynamax-cannon",
    "usage": 0,
    "description": "The user condenses energy within its body and unleashes that energy from its core to inflict damage.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Echoed Voice",
    "slug": "echoed-voice",
    "usage": 0,
    "description": "The user attacks the target with an echoing voice. If this move is used consecutively by any Pokémon, its power is boosted.",
    "power": 40,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Eerie Spell",
    "slug": "eerie-spell",
    "usage": 0,
    "description": "The user attacks with its tremendous psychic power. This also drains 3 PP from the move last used by the target.",
    "power": 80,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Egg Bomb",
    "slug": "egg-bomb",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 100,
    "accuracy": 75,
    "pp": 12
  },
  {
    "name": "Electrify",
    "slug": "electrify",
    "usage": 0,
    "description": "If the target is electrified before it uses a move during that turn, the target’s move becomes Electric type.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Electro Ball",
    "slug": "electro-ball",
    "usage": 0,
    "description": "The user hurls an electric orb at the target. The faster the user is than the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Electro Drift",
    "slug": "electro-drift",
    "usage": 0,
    "description": "The user races forward at ultrafast speeds, piercing its target with futuristic electricity. This move's power is boosted more than usual if it's a supereffective hit.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Embargo",
    "slug": "embargo",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Ember",
    "slug": "ember",
    "usage": 0,
    "description": "The target is attacked with small flames. This may also leave the target with a burn.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Esper Wing",
    "slug": "esper-wing",
    "usage": 0,
    "description": "The user slashes the target with aura-enriched wings. This also boosts the user's Speed stat. This move has a heightened chance of landing a critical hit.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Eternabeam",
    "slug": "eternabeam",
    "usage": 0,
    "description": "This is Eternatus’s most powerful attack in its original form. The user can’t move on the next turn.",
    "power": 160,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Extreme Evoboost",
    "slug": "extreme-evoboost",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Fairy Lock",
    "slug": "fairy-lock",
    "usage": 0,
    "description": "By locking down the battlefield, the user keeps all Pokémon from fleeing during the next turn.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Fairy Wind",
    "slug": "fairy-wind",
    "usage": 0,
    "description": "The user attacks by stirring up a fairy wind to strike the target.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "False Surrender",
    "slug": "false-surrender",
    "usage": 0,
    "description": "The user pretends to bow its head, but then it stabs the target with its disheveled hair. This attack never misses.",
    "power": 80,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "False Swipe",
    "slug": "false-swipe",
    "usage": 0,
    "description": "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Feint Attack",
    "slug": "feint-attack",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Fell Stinger",
    "slug": "fell-stinger",
    "usage": 0,
    "description": "When the user knocks out a target with this move, the user's Attack stat is boosted drastically.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Fiery Wrath",
    "slug": "fiery-wrath",
    "usage": 0,
    "description": "The user transforms its wrath into a fire-like aura to attack. This may also make opposing Pokémon flinch.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Fillet Away",
    "slug": "fillet-away",
    "usage": 0,
    "description": "The user sharply boosts its Attack, Sp. Atk, and Speed stats by using its own HP.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Fire Lash",
    "slug": "fire-lash",
    "usage": 0,
    "description": "The user strikes the target with a burning lash. This also lowers the target's Defense stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Fire Pledge",
    "slug": "fire-pledge",
    "usage": 0,
    "description": "A column of fire hits the target. When used with its grass counterpart, this move's power is boosted and a vast sea of fire appears.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "First Impression",
    "slug": "first-impression",
    "usage": 0,
    "description": "Although this move has great power, it works only on the first turn each time the user enters battle.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Fishious Rend",
    "slug": "fishious-rend",
    "usage": 0,
    "description": "The user rends the target with its hard gills. If the user attacks before the target, the power of this move is doubled.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Flail",
    "slug": "flail",
    "usage": 0,
    "description": "The user flails about aimlessly to attack. The less HP the user has, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Flame Burst",
    "slug": "flame-burst",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Flame Wheel",
    "slug": "flame-wheel",
    "usage": 0,
    "description": "The user attacks by cloaking itself in fire and charging at the target. This may also leave the target with a burn.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Flash",
    "slug": "flash",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Fleur Cannon",
    "slug": "fleur-cannon",
    "usage": 0,
    "description": "The user unleashes a strong beam. The recoil from this move harshly lowers the user's Sp. Atk stat.",
    "power": 130,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Floaty Fall",
    "slug": "floaty-fall",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 90,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Floral Healing",
    "slug": "floral-healing",
    "usage": 0,
    "description": "The user restores the target's HP by up to half its max HP. More HP is restored when the ground is Grassy Terrain.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Flower Shield",
    "slug": "flower-shield",
    "usage": 0,
    "description": "The user raises the Defense stats of all Grass-type Pokémon in battle with a mysterious power.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Focus Punch",
    "slug": "focus-punch",
    "usage": 0,
    "description": "The user focuses its mind before launching a punch. This move fails if the user is hit before using the move.",
    "power": 150,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Force Palm",
    "slug": "force-palm",
    "usage": 0,
    "description": "The target is attacked with a shock wave. This may also leave the target with paralysis.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Foresight",
    "slug": "foresight",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Forest’s Curse",
    "slug": "forests-curse",
    "usage": 0,
    "description": "The user puts a forest curse on the target. This adds Grass type to the target's type.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Freeze Shock",
    "slug": "freeze-shock",
    "usage": 0,
    "description": "The turn after using this move, the user hits the target with electrically charged ice to inflict damage. This may also leave the target with paralysis.",
    "power": 140,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Freezing Glare",
    "slug": "freezing-glare",
    "usage": 0,
    "description": "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Freezy Frost",
    "slug": "freezy-frost",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 100,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Frenzy Plant",
    "slug": "frenzy-plant",
    "usage": 0,
    "description": "The user slams the target with the roots of an enormous tree. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Frustration",
    "slug": "frustration",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Fury Attack",
    "slug": "fury-attack",
    "usage": 0,
    "description": "The user attacks by jabbing the target with a horn, a beak, or the like. This move hits two to five times in a row.",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Fury Cutter",
    "slug": "fury-cutter",
    "usage": 0,
    "description": "The user attacks by slashing the target with scythes, claws, or the like. This attack becomes more powerful if it hits in succession.",
    "power": 40,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Fury Swipes",
    "slug": "fury-swipes",
    "usage": 0,
    "description": "The user attacks by raking the target with claws, scythes, or the like. This move hits two to five times in a row.",
    "power": 18,
    "accuracy": 80,
    "pp": 16
  },
  {
    "name": "Fusion Bolt",
    "slug": "fusion-bolt",
    "usage": 0,
    "description": "The user throws down a giant lightning bolt. This move's power is boosted when influenced by an enormous flame.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Fusion Flare",
    "slug": "fusion-flare",
    "usage": 0,
    "description": "The user brings down a giant flame. This move's power is boosted when influenced by an enormous lightning bolt.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Future Sight",
    "slug": "future-sight",
    "usage": 0,
    "description": "Two turns after this move is used, a hunk of psychic energy attacks the target.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Gastro Acid",
    "slug": "gastro-acid",
    "usage": 0,
    "description": "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Gear Grind",
    "slug": "gear-grind",
    "usage": 0,
    "description": "The user attacks by throwing steel gears at its target twice.",
    "power": 50,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Gear Up",
    "slug": "gear-up",
    "usage": 0,
    "description": "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Genesis Supernova",
    "slug": "genesis-supernova",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 185,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Geomancy",
    "slug": "geomancy",
    "usage": 0,
    "description": "The user absorbs energy and sharply raises its Sp. Atk, Sp. Def, and Speed stats on the next turn.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Gigavolt Havoc",
    "slug": "gigavolt-havoc--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Gigavolt Havoc",
    "slug": "gigavolt-havoc--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Glacial Lance",
    "slug": "glacial-lance",
    "usage": 0,
    "description": "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokémon.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Glaciate",
    "slug": "glaciate",
    "usage": 0,
    "description": "The user attacks by blowing freezing cold air at opposing Pokémon. This also lowers their Speed stats.",
    "power": 65,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Glaive Rush",
    "slug": "glaive-rush",
    "usage": 0,
    "description": "The user throws its entire body into a reckless charge. After this move is used, attacks on the user cannot miss and will inflict double damage until the user’s next turn.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Glitzy Glow",
    "slug": "glitzy-glow",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 80,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Grass Pledge",
    "slug": "grass-pledge",
    "usage": 0,
    "description": "A column of grass hits the target. When used with its water counterpart, this move's power is boosted and a vast swamp appears.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Grass Whistle",
    "slug": "grass-whistle",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 55,
    "pp": 16
  },
  {
    "name": "Grassy Glide",
    "slug": "grassy-glide",
    "usage": 0,
    "description": "Gliding on the ground, the user attacks the target. This move always goes first on Grassy Terrain.",
    "power": 55,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Grav Apple",
    "slug": "grav-apple",
    "usage": 0,
    "description": "The user inflicts damage by dropping an apple from high above. This also lowers the target's Defense stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Growl",
    "slug": "growl",
    "usage": 0,
    "description": "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Grudge",
    "slug": "grudge",
    "usage": 0,
    "description": "If the user faints, the user’s grudge fully depletes the PP of the opponent’s move that knocked it out.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Guard Split",
    "slug": "guard-split",
    "usage": 0,
    "description": "The user employs its psychic power to average its Defense and Sp. Def stats with those of the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Guard Swap",
    "slug": "guard-swap",
    "usage": 0,
    "description": "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Guardian of Alola",
    "slug": "guardian-of-alola",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Guillotine",
    "slug": "guillotine",
    "usage": 0,
    "description": "A vicious tearing attack with big pincers. The target faints instantly if this attack hits.",
    "power": null,
    "accuracy": 30,
    "pp": 8
  },
  {
    "name": "Gust",
    "slug": "gust",
    "usage": 0,
    "description": "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Gyro Ball",
    "slug": "gyro-ball",
    "usage": 0,
    "description": "The user tackles the target with a high-speed spin. The slower the user is than the target, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Hail",
    "slug": "hail",
    "usage": 0,
    "description": "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice types.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Happy Hour",
    "slug": "happy-hour",
    "usage": 0,
    "description": "Using Happy Hour doubles the amount of prize money received after battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Harden",
    "slug": "harden",
    "usage": 0,
    "description": "The user stiffens all the muscles in its body to boost its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Head Charge",
    "slug": "head-charge",
    "usage": 0,
    "description": "The user charges its head into its target, using its powerful guard hair. This also damages the user a little.",
    "power": 120,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Headbutt",
    "slug": "headbutt",
    "usage": 0,
    "description": "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.",
    "power": 70,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Heal Bell",
    "slug": "heal-bell",
    "usage": 0,
    "description": "The user makes a soothing bell chime to cure the status conditions of all its fellow party Pokémon and allies.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Heal Block",
    "slug": "heal-block",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Heal Order",
    "slug": "heal-order",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Heart Stamp",
    "slug": "heart-stamp",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Heart Swap",
    "slug": "heart-swap",
    "usage": 0,
    "description": "The user employs its psychic power to switch stat changes with the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Hidden Power",
    "slug": "hidden-power",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Hold Back",
    "slug": "hold-back",
    "usage": 0,
    "description": "The user holds back when it attacks, and the target is left with at least 1 HP.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Hold Hands",
    "slug": "hold-hands",
    "usage": 0,
    "description": "The user and an ally hold hands. This makes them very happy.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Hone Claws",
    "slug": "hone-claws",
    "usage": 0,
    "description": "The user sharpens its claws to boost its Attack stat and accuracy.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Horn Attack",
    "slug": "horn-attack",
    "usage": 0,
    "description": "The target is jabbed with a sharply pointed horn to inflict damage.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Horn Drill",
    "slug": "horn-drill",
    "usage": 0,
    "description": "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",
    "power": null,
    "accuracy": 30,
    "pp": 8
  },
  {
    "name": "Horn Leech",
    "slug": "horn-leech",
    "usage": 0,
    "description": "The user drains the target's energy with its horns. The user's HP is restored by up to half the damage taken by the target.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Hydro Steam",
    "slug": "hydro-steam",
    "usage": 0,
    "description": "The user blasts the target with boiling-hot water. This move's power is not lowered in harsh sunlight but rather boosted by 50 percent.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Hydro Vortex",
    "slug": "hydro-vortex--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Hydro Vortex",
    "slug": "hydro-vortex--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Hyper Drill",
    "slug": "hyper-drill",
    "usage": 0,
    "description": "The user spins the pointed part of its body at high speed to pierce the target. This attack can hit a target using a move such as Protect or Detect.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Hyper Fang",
    "slug": "hyper-fang",
    "usage": 0,
    "description": "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
    "power": 80,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Hyperspace Fury",
    "slug": "hyperspace-fury",
    "usage": 0,
    "description": "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. This also lowers the user's Defense stat.",
    "power": 100,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Hyperspace Hole",
    "slug": "hyperspace-hole",
    "usage": 0,
    "description": "Using a hyperspace hole, the user appears right next to the target and strikes. This attack can hit a target using a move such as Protect or Detect.",
    "power": 80,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Ice Ball",
    "slug": "ice-ball",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Ice Burn",
    "slug": "ice-burn",
    "usage": 0,
    "description": "The turn after using this move, the user surrounds the target with an ultracold, freezing wind to inflict damage. This may also leave the target with a burn.",
    "power": 140,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Incinerate",
    "slug": "incinerate",
    "usage": 0,
    "description": "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Inferno Overdrive",
    "slug": "inferno-overdrive--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Inferno Overdrive",
    "slug": "inferno-overdrive--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Ingrain",
    "slug": "ingrain",
    "usage": 0,
    "description": "The user lays roots that restore its own HP every turn. Because the user is now rooted, it can't switch out.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Ion Deluge",
    "slug": "ion-deluge",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Ivy Cudgel",
    "slug": "ivy-cudgel",
    "usage": 0,
    "description": "The user strikes with an ivy-wrapped cudgel. This move's type changes depending on the mask worn by the user, and it has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Jaw Lock",
    "slug": "jaw-lock",
    "usage": 0,
    "description": "This move prevents the user and the target from switching out until either of them faints. The effect goes away if either of the Pokémon leaves the field.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Judgment",
    "slug": "judgment",
    "usage": 0,
    "description": "The user releases countless shots of light at the target. This move's type changes depending on the kind of plate held by the user.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Jump Kick",
    "slug": "jump-kick",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 100,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Jungle Healing",
    "slug": "jungle-healing",
    "usage": 0,
    "description": "The user becomes one with the jungle, restoring HP and curing status conditions for itself and its ally Pokémon currently in the battle.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Karate Chop",
    "slug": "karate-chop",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Kinesis",
    "slug": "kinesis",
    "usage": 0,
    "description": "The user distracts the target by bending a spoon. This lowers the target’s accuracy.",
    "power": null,
    "accuracy": 80,
    "pp": 16
  },
  {
    "name": "Land’s Wrath",
    "slug": "lands-wrath",
    "usage": 0,
    "description": "The user gathers the energy of the land and focuses that power on opposing Pokémon to damage them.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Laser Focus",
    "slug": "laser-focus",
    "usage": 0,
    "description": "The user concentrates intensely. The attack on the next turn always results in a critical hit.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Leaf Tornado",
    "slug": "leaf-tornado",
    "usage": 0,
    "description": "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target’s accuracy.",
    "power": 65,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Leafage",
    "slug": "leafage",
    "usage": 0,
    "description": "The user attacks by pelting the target with leaves.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Leer",
    "slug": "leer",
    "usage": 0,
    "description": "The user gives opposing Pokémon an intimidating leer that lowers their Defense stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Let’s Snuggle Forever",
    "slug": "lets-snuggle-forever",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 190,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Lick",
    "slug": "lick",
    "usage": 0,
    "description": "The user licks the target with a long tongue to inflict damage. This may also leave the target with paralysis.",
    "power": 30,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Light That Burns the Sky",
    "slug": "light-that-burns-the-sky",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 200,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Lock-On",
    "slug": "lock-on",
    "usage": 0,
    "description": "The user takes sure aim at the target. This ensures the user's next move does not miss that target.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Lovely Kiss",
    "slug": "lovely-kiss",
    "usage": 0,
    "description": "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.",
    "power": null,
    "accuracy": 75,
    "pp": 12
  },
  {
    "name": "Lucky Chant",
    "slug": "lucky-chant",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Lunar Blessing",
    "slug": "lunar-blessing",
    "usage": 0,
    "description": "The user receives a blessing from the crescent moon, restoring HP and curing status conditions for itself and its ally Pokémon currently in the battle.",
    "power": 0,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Lunar Dance",
    "slug": "lunar-dance",
    "usage": 0,
    "description": "The user faints. In return, the Pokémon taking its place will have its HP and PP restored and its status conditions cured.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Luster Purge",
    "slug": "luster-purge",
    "usage": 0,
    "description": "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat.",
    "power": 95,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Magic Coat",
    "slug": "magic-coat",
    "usage": 0,
    "description": "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Magical Leaf",
    "slug": "magical-leaf",
    "usage": 0,
    "description": "The user scatters curious leaves that chase the target. This attack never misses.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Magical Torque",
    "slug": "magical-torque",
    "usage": 0,
    "description": "",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Magma Storm",
    "slug": "magma-storm",
    "usage": 0,
    "description": "The user traps the target inside a maelstrom of fire that inflicts damage for four to five turns.",
    "power": 100,
    "accuracy": 75,
    "pp": 8
  },
  {
    "name": "Magnet Bomb",
    "slug": "magnet-bomb",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Magnetic Flux",
    "slug": "magnetic-flux",
    "usage": 0,
    "description": "The user manipulates magnetic fields, which boosts the Defense and Sp. Def stats of ally Pokémon with the Plus Ability or the Minus Ability.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Magnitude",
    "slug": "magnitude",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Make It Rain",
    "slug": "make-it-rain",
    "usage": 0,
    "description": "The user attacks by throwing out a mass of coins. This also lowers the user's Sp. Atk stat. Money is earned after the battle.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Malicious Moonsault",
    "slug": "malicious-moonsault",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 180,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Malignant Chain",
    "slug": "malignant-chain",
    "usage": 0,
    "description": "The user pours toxins into the target by wrapping them in a toxic, corrosive chain. This may also leave the target badly poisoned.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Mat Block",
    "slug": "mat-block",
    "usage": 0,
    "description": "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Airstream",
    "slug": "max-airstream",
    "usage": 0,
    "description": "This is a Flying-type attack Dynamax Pokémon use. This raises ally Pokémon’s Speed stats.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Darkness",
    "slug": "max-darkness",
    "usage": 0,
    "description": "This is a Dark-type attack Dynamax Pokémon use. This lowers the target’s Sp. Def stat.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Flare",
    "slug": "max-flare",
    "usage": 0,
    "description": "This is a Fire-type attack Dynamax Pokémon use. The user intensifies the sun for five turns.",
    "power": 100,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Flutterby",
    "slug": "max-flutterby",
    "usage": 0,
    "description": "This is a Bug-type attack Dynamax Pokémon use. This lowers the target’s Sp. Atk stat.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Geyser",
    "slug": "max-geyser",
    "usage": 0,
    "description": "This is a Water-type attack Dynamax Pokémon use. The user summons a heavy rain that falls for five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Guard",
    "slug": "max-guard",
    "usage": 0,
    "description": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Hailstorm",
    "slug": "max-hailstorm",
    "usage": 0,
    "description": "This is an Ice-type attack Dynamax Pokémon use. The user summons a hailstorm lasting five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Knuckle",
    "slug": "max-knuckle",
    "usage": 0,
    "description": "This is a Fighting-type attack Dynamax Pokémon use. This raises ally Pokémon’s Attack stats.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Lightning",
    "slug": "max-lightning",
    "usage": 0,
    "description": "This is an Electric-type attack Dynamax Pokémon use. The user turns the ground into Electric Terrain for five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Mindstorm",
    "slug": "max-mindstorm",
    "usage": 0,
    "description": "This is a Psychic-type attack Dynamax Pokémon use. The user turns the ground into Psychic Terrain for five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Ooze",
    "slug": "max-ooze",
    "usage": 0,
    "description": "This is a Poison-type attack Dynamax Pokémon use. This raises ally Pokémon’s Sp. Atk stats.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Overgrowth",
    "slug": "max-overgrowth",
    "usage": 0,
    "description": "This is a Grass-type attack Dynamax Pokémon use. The user turns the ground into Grassy Terrain for five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Phantasm",
    "slug": "max-phantasm",
    "usage": 0,
    "description": "This is a Ghost-type attack Dynamax Pokémon use. This lowers the target’s Defense stat.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Quake",
    "slug": "max-quake",
    "usage": 0,
    "description": "This is a Ground-type attack Dynamax Pokémon use. This raises ally Pokémon’s Sp. Def stats.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Rockfall",
    "slug": "max-rockfall",
    "usage": 0,
    "description": "This is a Rock-type attack Dynamax Pokémon use. The user summons a sandstorm lasting five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Starfall",
    "slug": "max-starfall",
    "usage": 0,
    "description": "This is a Fairy-type attack Dynamax Pokémon use. The user turns the ground into Misty Terrain for five turns.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Steelspike",
    "slug": "max-steelspike",
    "usage": 0,
    "description": "This is a Steel-type attack Dynamax Pokémon use. This raises ally Pokémon’s Defense stats.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Strike",
    "slug": "max-strike",
    "usage": 0,
    "description": "This is a Normal-type attack Dynamax Pokémon use. This lowers the target’s Speed stat.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Max Wyrmwind",
    "slug": "max-wyrmwind",
    "usage": 0,
    "description": "This is a Dragon-type attack Dynamax Pokémon use. This lowers the target’s Attack stat.",
    "power": 10,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Me First",
    "slug": "me-first",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Meditate",
    "slug": "meditate",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Mega Drain",
    "slug": "mega-drain",
    "usage": 0,
    "description": "A nutrient-draining attack. The user's HP is restored by up to half the damage taken by the target.",
    "power": 40,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Mega Punch",
    "slug": "mega-punch",
    "usage": 0,
    "description": "The target is slugged by a punch thrown with muscle-packed power.",
    "power": 80,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Menacing Moonraze Maelstrom",
    "slug": "menacing-moonraze-maelstrom",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 200,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Metal Claw",
    "slug": "metal-claw",
    "usage": 0,
    "description": "The target is raked with steel claws. This may also boost the user's Attack stat.",
    "power": 50,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Metal Sound",
    "slug": "metal-sound",
    "usage": 0,
    "description": "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat.",
    "power": null,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Meteor Assault",
    "slug": "meteor-assault",
    "usage": 0,
    "description": "The user attacks wildly with its thick leek. The user can’t move on the next turn, because the force of this move makes it stagger.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Meteor Beam",
    "slug": "meteor-beam",
    "usage": 0,
    "description": "The user gathers energy from space and boosts its Sp. Atk stat on the first turn, then attacks on the next turn.",
    "power": 120,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Metronome",
    "slug": "metronome",
    "usage": 0,
    "description": "The user waggles a finger and stimulates its brain into randomly using nearly any move.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Mighty Cleave",
    "slug": "mighty-cleave",
    "usage": 0,
    "description": "The user wields the light that has accumulated atop its head to cleave the target. This move hits even if the target protects itself.",
    "power": 95,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Milk Drink",
    "slug": "milk-drink",
    "usage": 0,
    "description": "The user restores its own HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Mimic",
    "slug": "mimic",
    "usage": 0,
    "description": "The user copies the move last used by the target. The copied move can be used until the user of Mimic leaves the battle.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Mind Blown",
    "slug": "mind-blown",
    "usage": 0,
    "description": "The user attacks everything around it by causing its own head to explode. This also damages the user.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Mind Reader",
    "slug": "mind-reader",
    "usage": 0,
    "description": "The user senses the target’s movements with its mind to ensure its next attack does not miss the target.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Miracle Eye",
    "slug": "miracle-eye",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Mirror Move",
    "slug": "mirror-move",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Mirror Shot",
    "slug": "mirror-shot",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 65,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Mist",
    "slug": "mist",
    "usage": 0,
    "description": "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Mist Ball",
    "slug": "mist-ball",
    "usage": 0,
    "description": "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat.",
    "power": 95,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Misty Terrain",
    "slug": "misty-terrain",
    "usage": 0,
    "description": "This protects Pokémon on the ground from status conditions and halves damage from Dragon-type moves for five turns.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Moongeist Beam",
    "slug": "moongeist-beam",
    "usage": 0,
    "description": "The user emits a sinister ray to attack the target. This move can be used on the target regardless of its Ability.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Mountain Gale",
    "slug": "mountain-gale",
    "usage": 0,
    "description": "The user hurls giant chunks of ice at the target to inflict damage. This may also make the target flinch.",
    "power": 120,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Mud Bomb",
    "slug": "mud-bomb",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 65,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Mud Shot",
    "slug": "mud-shot",
    "usage": 0,
    "description": "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat.",
    "power": 55,
    "accuracy": 95,
    "pp": 16
  },
  {
    "name": "Mud Sport",
    "slug": "mud-sport",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Mud-Slap",
    "slug": "mud-slap",
    "usage": 0,
    "description": "The user hurls mud in the target's face to inflict damage and lower its accuracy.",
    "power": 20,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Multi-Attack",
    "slug": "multi-attack",
    "usage": 0,
    "description": "Cloaking itself in high energy, the user slams into the target. The memory held determines the move’s type.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Mystical Power",
    "slug": "mystical-power",
    "usage": 0,
    "description": "The user attacks by emitting a mysterious power. This also boosts the user’s Sp. Atk stat.",
    "power": 70,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Natural Gift",
    "slug": "natural-gift",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Nature Power",
    "slug": "nature-power",
    "usage": 0,
    "description": "This attack makes use of nature’s power. Its effects vary depending on the user’s environment.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Nature’s Madness",
    "slug": "natures-madness",
    "usage": 0,
    "description": "The user hits the target with the force of nature. It halves the target’s HP.",
    "power": null,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Needle Arm",
    "slug": "needle-arm",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Never-Ending Nightmare",
    "slug": "never-ending-nightmare--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Never-Ending Nightmare",
    "slug": "never-ending-nightmare--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Night Daze",
    "slug": "night-daze",
    "usage": 0,
    "description": "The user looses a pitch-black shock wave at the target to inflict damage. This may also lower the target's accuracy.",
    "power": 90,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Nightmare",
    "slug": "nightmare",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "No Retreat",
    "slug": "no-retreat",
    "usage": 0,
    "description": "This move boosts all the user's stats but prevents the user from switching out or fleeing.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Noble Roar",
    "slug": "noble-roar",
    "usage": 0,
    "description": "Letting out a noble roar, the user intimidates the target and lowers the target's Attack and Sp. Atk stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Noxious Torque",
    "slug": "noxious-torque",
    "usage": 0,
    "description": "",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Oblivion Wing",
    "slug": "oblivion-wing",
    "usage": 0,
    "description": "The user absorbs its target’s HP. The user’s HP is restored by over half of the damage taken by the target.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Obstruct",
    "slug": "obstruct",
    "usage": 0,
    "description": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession. Direct contact harshly lowers the attacker’s Defense stat.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Oceanic Operetta",
    "slug": "oceanic-operetta",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 195,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Octazooka",
    "slug": "octazooka",
    "usage": 0,
    "description": "The user attacks by spraying ink in the target’s face or eyes. This may also lower the target’s accuracy.",
    "power": 65,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Octolock",
    "slug": "octolock",
    "usage": 0,
    "description": "The user locks the target in and prevents it from fleeing. This move also lowers the target’s Defense and Sp. Def every turn.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Odor Sleuth",
    "slug": "odor-sleuth",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Ominous Wind",
    "slug": "ominous-wind",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Order Up",
    "slug": "order-up",
    "usage": 0,
    "description": "The user attacks with elegant poise. If the user has a Tatsugiri in its mouth, this move boosts one of the user's stats based on the Tatsugiri's form.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Origin Pulse",
    "slug": "origin-pulse",
    "usage": 0,
    "description": "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue.",
    "power": 110,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Overdrive",
    "slug": "overdrive",
    "usage": 0,
    "description": "The user attacks opposing Pokémon by twanging a guitar or bass guitar, causing a huge echo and strong vibration.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Pay Day",
    "slug": "pay-day",
    "usage": 0,
    "description": "Coins are hurled at the target to inflict damage. Money is earned after the battle.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Peck",
    "slug": "peck",
    "usage": 0,
    "description": "The target is jabbed with a sharply pointed beak or horn to inflict damage.",
    "power": 35,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Petal Blizzard",
    "slug": "petal-blizzard",
    "usage": 0,
    "description": "The user stirs up a violent petal blizzard and damages everything around it.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Photon Geyser",
    "slug": "photon-geyser",
    "usage": 0,
    "description": "The user attacks the target with a pillar of light. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Pika Papow",
    "slug": "pika-papow",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Plasma Fists",
    "slug": "plasma-fists",
    "usage": 0,
    "description": "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves.",
    "power": 100,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Play Nice",
    "slug": "play-nice",
    "usage": 0,
    "description": "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Pluck",
    "slug": "pluck",
    "usage": 0,
    "description": "The user attacks by pecking the target. If the target is holding a Berry, the user eats it and gains its effect.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Poison Fang",
    "slug": "poison-fang",
    "usage": 0,
    "description": "The user bites the target with toxic fangs. This may also leave the target badly poisoned.",
    "power": 50,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Poison Gas",
    "slug": "poison-gas",
    "usage": 0,
    "description": "A cloud of poison gas is sprayed in the faces of opposing Pokémon, poisoning those it hits.",
    "power": null,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Poison Powder",
    "slug": "poison-powder",
    "usage": 0,
    "description": "The user scatters a cloud of poisonous dust that poisons the target.",
    "power": null,
    "accuracy": 75,
    "pp": 20
  },
  {
    "name": "Poison Sting",
    "slug": "poison-sting",
    "usage": 0,
    "description": "The user stabs the target with a poisonous stinger to inflict damage. This may also poison the target.",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Poison Tail",
    "slug": "poison-tail",
    "usage": 0,
    "description": "The user hits the target with its tail. This move has a heightened chance of landing a critical hit and may also poison the target.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Pound",
    "slug": "pound",
    "usage": 0,
    "description": "The target is physically pounded with a long tail, a foreleg, or the like.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Powder",
    "slug": "powder",
    "usage": 0,
    "description": "The user covers the target in a combustible powder. If the target uses a Fire-type move, the powder explodes and damages the target.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Powder Snow",
    "slug": "powder-snow",
    "usage": 0,
    "description": "The user attacks with a chilling gust of powdery snow. This may also leave opposing Pokémon frozen.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Power Shift",
    "slug": "power-shift",
    "usage": 0,
    "description": "The user swaps its Attack and Defense stats.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Power Split",
    "slug": "power-split",
    "usage": 0,
    "description": "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Power Swap",
    "slug": "power-swap",
    "usage": 0,
    "description": "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Power Trick",
    "slug": "power-trick",
    "usage": 0,
    "description": "The user employs its psychic power to switch its Attack stat with its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Power Trip",
    "slug": "power-trip",
    "usage": 0,
    "description": "The user boasts its strength and attacks the target. The more the user's stats are boosted, the greater the move's power.",
    "power": 20,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Power-Up Punch",
    "slug": "power-up-punch",
    "usage": 0,
    "description": "Striking opponents over and over makes the user’s fists harder. Hitting a target raises the Attack stat.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Present",
    "slug": "present",
    "usage": 0,
    "description": "The user attacks by giving the target a gift with a hidden trap. The gift restores HP sometimes, however.",
    "power": null,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Prismatic Laser",
    "slug": "prismatic-laser",
    "usage": 0,
    "description": "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",
    "power": 160,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Psybeam",
    "slug": "psybeam",
    "usage": 0,
    "description": "The target is attacked with a peculiar ray. This may also confuse the target.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Psyblade",
    "slug": "psyblade",
    "usage": 0,
    "description": "The user rends the target with an ethereal blade. This move's power is boosted by 50 percent if the user is on Electric Terrain.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Psycho Boost",
    "slug": "psycho-boost",
    "usage": 0,
    "description": "The user attacks the target with all its might. The recoil from this move harshly lowers the user's Sp. Atk stat.",
    "power": 140,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Psycho Shift",
    "slug": "psycho-shift",
    "usage": 0,
    "description": "Using its psychic power of suggestion, the user transfers its status conditions to the target.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Psystrike",
    "slug": "psystrike",
    "usage": 0,
    "description": "The user materializes an odd psychic wave to attack the target. This move deals physical damage.",
    "power": 100,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Psywave",
    "slug": "psywave",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Pulverizing Pancake",
    "slug": "pulverizing-pancake",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 210,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Punishment",
    "slug": "punishment",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Purify",
    "slug": "purify",
    "usage": 0,
    "description": "The user heals the target’s status condition. If the move succeeds, it also restores the user’s own HP.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Pursuit",
    "slug": "pursuit",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Pyro Ball",
    "slug": "pyro-ball",
    "usage": 0,
    "description": "The user attacks by igniting a small stone and launching it as a fiery ball at the target. This may also leave the target with a burn.",
    "power": 120,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Rage Fist",
    "slug": "rage-fist",
    "usage": 0,
    "description": "The user converts its rage into energy to attack. The more times the user has been hit by attacks, the greater the move's power.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Rapid Spin",
    "slug": "rapid-spin",
    "usage": 0,
    "description": "The user performs a spin attack that can also eliminate the effects of such moves as Bind, Wrap, and Leech Seed. This also boosts the user's Speed stat.",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Razor Leaf",
    "slug": "razor-leaf",
    "usage": 0,
    "description": "Sharp-edged leaves are launched to slash at opposing Pokémon. This move has a heightened chance of landing a critical hit.",
    "power": 55,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "Razor Wind",
    "slug": "razor-wind",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Recycle",
    "slug": "recycle",
    "usage": 0,
    "description": "The user recycles a held item that has been used in battle so it can be used again.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Refresh",
    "slug": "refresh",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Relic Song",
    "slug": "relic-song",
    "usage": 0,
    "description": "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",
    "power": 75,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Retaliate",
    "slug": "retaliate",
    "usage": 0,
    "description": "The user takes revenge for a fainted ally. This move's power is boosted if an ally fainted in the previous turn.",
    "power": 70,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Return",
    "slug": "return",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Revelation Dance",
    "slug": "revelation-dance",
    "usage": 0,
    "description": "The user attacks the target by dancing with all its might. This move becomes the same type as the user's type.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Revenge",
    "slug": "revenge",
    "usage": 0,
    "description": "This attack move’s power is doubled if the user has been hurt by the opponent in the same turn.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Reversal",
    "slug": "reversal",
    "usage": 0,
    "description": "An all-out attack that becomes more powerful the less HP the user has.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Revival Blessing",
    "slug": "revival-blessing",
    "usage": 0,
    "description": "The user bestows a loving blessing, reviving a party Pokémon that has fainted and restoring half that Pokémon's max HP.",
    "power": 0,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Rising Voltage",
    "slug": "rising-voltage",
    "usage": 0,
    "description": "The user attacks with electricity rising from the ground. This move's power is doubled if the target is on Electric Terrain.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Roar of Time",
    "slug": "roar-of-time",
    "usage": 0,
    "description": "The user blasts the target with power that distorts even time. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Rock Climb",
    "slug": "rock-climb",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Rock Smash",
    "slug": "rock-smash",
    "usage": 0,
    "description": "The user attacks with a punch. This may also lower the target's Defense stat.",
    "power": 40,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Rock Throw",
    "slug": "rock-throw",
    "usage": 0,
    "description": "The user picks up and throws a small rock at the target to inflict damage.",
    "power": 50,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Rock Wrecker",
    "slug": "rock-wrecker",
    "usage": 0,
    "description": "The user launches a huge boulder at the target to attack. The user can't move on the next turn.",
    "power": 150,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Role Play",
    "slug": "role-play",
    "usage": 0,
    "description": "The user mimics the target completely, copying the target's Ability.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Rolling Kick",
    "slug": "rolling-kick",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 85,
    "pp": 16
  },
  {
    "name": "Rollout",
    "slug": "rollout",
    "usage": 0,
    "description": "The user continually rolls into the target over five turns. This attack becomes more powerful each time it hits.",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Rototiller",
    "slug": "rototiller",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Ruination",
    "slug": "ruination",
    "usage": 0,
    "description": "The user summons a ruinous disaster. This cuts the target’s HP in half.",
    "power": 1,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Sacred Fire",
    "slug": "sacred-fire",
    "usage": 0,
    "description": "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn.",
    "power": 100,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Sand Attack",
    "slug": "sand-attack",
    "usage": 0,
    "description": "Sand is hurled in the target's face, lowering the target's accuracy.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Sandsear Storm",
    "slug": "sandsear-storm",
    "usage": 0,
    "description": "The user attacks by wrapping opposing Pokémon in fierce winds and searingly hot sand. This may also leave them with a burn.",
    "power": 100,
    "accuracy": 80,
    "pp": 12
  },
  {
    "name": "Sappy Seed",
    "slug": "sappy-seed",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 100,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Savage Spin-Out",
    "slug": "savage-spin-out--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Savage Spin-Out",
    "slug": "savage-spin-out--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Scary Face",
    "slug": "scary-face",
    "usage": 0,
    "description": "The user frightens the target with a scary face to harshly lower its Speed stat.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Scratch",
    "slug": "scratch",
    "usage": 0,
    "description": "Hard, pointed, sharp claws rake the target to inflict damage.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Screech",
    "slug": "screech",
    "usage": 0,
    "description": "An earsplitting screech harshly lowers the target's Defense stat.",
    "power": null,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Searing Shot",
    "slug": "searing-shot",
    "usage": 0,
    "description": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Searing Sunraze Smash",
    "slug": "searing-sunraze-smash",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 200,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Secret Power",
    "slug": "secret-power",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Secret Sword",
    "slug": "secret-sword",
    "usage": 0,
    "description": "The user cuts with its long horn. The odd power contained in the horn deals physical damage to the target.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Seed Flare",
    "slug": "seed-flare",
    "usage": 0,
    "description": "The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat.",
    "power": 120,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Seismic Toss",
    "slug": "seismic-toss",
    "usage": 0,
    "description": "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Shadow Blast",
    "slug": "shadow-blast",
    "usage": 0,
    "description": "",
    "power": 80,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Blitz",
    "slug": "shadow-blitz",
    "usage": 0,
    "description": "",
    "power": 40,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Bolt",
    "slug": "shadow-bolt",
    "usage": 0,
    "description": "",
    "power": 75,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Bone",
    "slug": "shadow-bone",
    "usage": 0,
    "description": "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target’s Defense stat.",
    "power": 85,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Shadow Break",
    "slug": "shadow-break",
    "usage": 0,
    "description": "",
    "power": 75,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Chill",
    "slug": "shadow-chill",
    "usage": 0,
    "description": "",
    "power": 75,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Down",
    "slug": "shadow-down",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow End",
    "slug": "shadow-end",
    "usage": 0,
    "description": "",
    "power": 120,
    "accuracy": 60,
    "pp": null
  },
  {
    "name": "Shadow Fire",
    "slug": "shadow-fire",
    "usage": 0,
    "description": "",
    "power": 75,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Force",
    "slug": "shadow-force",
    "usage": 0,
    "description": "The user disappears on the first turn, then attacks on the next turn. This move hits even if the target protects itself.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Shadow Half",
    "slug": "shadow-half",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Hold",
    "slug": "shadow-hold",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": null,
    "pp": null
  },
  {
    "name": "Shadow Mist",
    "slug": "shadow-mist",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Panic",
    "slug": "shadow-panic",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": 90,
    "pp": null
  },
  {
    "name": "Shadow Punch",
    "slug": "shadow-punch",
    "usage": 0,
    "description": "The user throws a punch from the shadows. This attack never misses.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Shadow Rave",
    "slug": "shadow-rave",
    "usage": 0,
    "description": "",
    "power": 70,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Rush",
    "slug": "shadow-rush",
    "usage": 0,
    "description": "",
    "power": 55,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Shed",
    "slug": "shadow-shed",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": null,
    "pp": null
  },
  {
    "name": "Shadow Sky",
    "slug": "shadow-sky",
    "usage": 0,
    "description": "",
    "power": null,
    "accuracy": null,
    "pp": null
  },
  {
    "name": "Shadow Storm",
    "slug": "shadow-storm",
    "usage": 0,
    "description": "",
    "power": 95,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Shadow Wave",
    "slug": "shadow-wave",
    "usage": 0,
    "description": "",
    "power": 50,
    "accuracy": 100,
    "pp": null
  },
  {
    "name": "Sharpen",
    "slug": "sharpen",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Shattered Psyche",
    "slug": "shattered-psyche--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Shattered Psyche",
    "slug": "shattered-psyche--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Shell Trap",
    "slug": "shell-trap",
    "usage": 0,
    "description": "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on opposing Pokémon.",
    "power": 150,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Shift Gear",
    "slug": "shift-gear",
    "usage": 0,
    "description": "The user rotates its gears, boosting its Attack stat and sharply boosting its Speed stat.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Shock Wave",
    "slug": "shock-wave",
    "usage": 0,
    "description": "The user strikes the target with a quick jolt of electricity. This attack never misses.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Shore Up",
    "slug": "shore-up",
    "usage": 0,
    "description": "The user restores its own HP by up to half its max HP. It regains more HP in a sandstorm.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Signal Beam",
    "slug": "signal-beam",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Silk Trap",
    "slug": "silk-trap",
    "usage": 0,
    "description": "The user spins a silken trap, protecting itself from damage while lowering the Speed stat of any attacker that makes direct contact.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Silver Wind",
    "slug": "silver-wind",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Sing",
    "slug": "sing",
    "usage": 0,
    "description": "A soothing lullaby is sung in a beautiful voice that puts the target to sleep.",
    "power": null,
    "accuracy": 55,
    "pp": 16
  },
  {
    "name": "Sinister Arrow Raid",
    "slug": "sinister-arrow-raid",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 180,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Sizzly Slide",
    "slug": "sizzly-slide",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Sketch",
    "slug": "sketch",
    "usage": 0,
    "description": "This move enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Skull Bash",
    "slug": "skull-bash",
    "usage": 0,
    "description": "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
    "power": 130,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Sky Attack",
    "slug": "sky-attack",
    "usage": 0,
    "description": "The user attacks the turn after using this move. This move has a heightened chance of landing a critical hit and may also make the target flinch.",
    "power": 140,
    "accuracy": 90,
    "pp": 8
  },
  {
    "name": "Sky Drop",
    "slug": "sky-drop",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 60,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Sky Uppercut",
    "slug": "sky-uppercut",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 85,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Slam",
    "slug": "slam",
    "usage": 0,
    "description": "The target is slammed with a long tail, vines, or the like to inflict damage.",
    "power": 80,
    "accuracy": 75,
    "pp": 20
  },
  {
    "name": "Slash",
    "slug": "slash",
    "usage": 0,
    "description": "The target is attacked with a slash of claws, scythes, or the like. This move has a heightened chance of landing a critical hit.",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Sludge",
    "slug": "sludge",
    "usage": 0,
    "description": "The user hurls unsanitary sludge at the target to inflict damage. This may also poison the target.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Smart Strike",
    "slug": "smart-strike",
    "usage": 0,
    "description": "The user stabs the target with a sharp horn. This attack never misses.",
    "power": 70,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Smelling Salts",
    "slug": "smelling-salts",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Smog",
    "slug": "smog",
    "usage": 0,
    "description": "The target is attacked with a discharge of filthy gases. This may also poison the target.",
    "power": 30,
    "accuracy": 70,
    "pp": 20
  },
  {
    "name": "Smokescreen",
    "slug": "smokescreen",
    "usage": 0,
    "description": "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Snap Trap",
    "slug": "snap-trap",
    "usage": 0,
    "description": "The user snares the target in a snap trap for four to five turns.",
    "power": 35,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Snatch",
    "slug": "snatch",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Snipe Shot",
    "slug": "snipe-shot",
    "usage": 0,
    "description": "The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Snore",
    "slug": "snore",
    "usage": 0,
    "description": "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
    "power": 50,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Soft-Boiled",
    "slug": "soft-boiled",
    "usage": 0,
    "description": "The user restores its own HP by up to half its max HP.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Sonic Boom",
    "slug": "sonic-boom",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Soul-Stealing 7-Star Strike",
    "slug": "soul-stealing-7-star-strike",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 195,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Spacial Rend",
    "slug": "spacial-rend",
    "usage": 0,
    "description": "The user tears the target along with the space around it. This move has a heightened chance of landing a critical hit.",
    "power": 100,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Spark",
    "slug": "spark",
    "usage": 0,
    "description": "The user attacks the target with an electrically charged tackle. This may also leave the target with paralysis.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Sparkling Aria",
    "slug": "sparkling-aria",
    "usage": 0,
    "description": "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be cured by the touch of these bubbles.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Sparkly Swirl",
    "slug": "sparkly-swirl",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 120,
    "accuracy": 85,
    "pp": 8
  },
  {
    "name": "Spectral Thief",
    "slug": "spectral-thief",
    "usage": 0,
    "description": "The user hides in the target’s shadow, steals the target’s stat boosts, and then attacks.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Spider Web",
    "slug": "spider-web",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Spike Cannon",
    "slug": "spike-cannon",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 20,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Spin Out",
    "slug": "spin-out",
    "usage": 0,
    "description": "The user spins furiously by straining its legs, inflicting damage on the target. This also harshly lowers the user's Speed stat.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Spirit Break",
    "slug": "spirit-break",
    "usage": 0,
    "description": "The user attacks the target with so much force that it could break the target's spirit. This also lowers the target's Sp. Atk stat.",
    "power": 75,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Spit Up",
    "slug": "spit-up",
    "usage": 0,
    "description": "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the move's power.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Spite",
    "slug": "spite",
    "usage": 0,
    "description": "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Splash",
    "slug": "splash",
    "usage": 0,
    "description": "The user just flops and splashes around to no effect at all...",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Splintered Stormshards",
    "slug": "splintered-stormshards",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 190,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Splishy Splash",
    "slug": "splishy-splash",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 90,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Spore",
    "slug": "spore",
    "usage": 0,
    "description": "The user scatters bursts of spores that induce sleep.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Spotlight",
    "slug": "spotlight",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Springtide Storm",
    "slug": "springtide-storm",
    "usage": 0,
    "description": "The user attacks by wrapping opposing Pokémon in fierce winds brimming with love and hate. This may also lower their Attack stats.",
    "power": 100,
    "accuracy": 80,
    "pp": 8
  },
  {
    "name": "Steam Eruption",
    "slug": "steam-eruption",
    "usage": 0,
    "description": "The user immerses the target in superheated steam. This may also leave the target with a burn.",
    "power": 110,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Steamroller",
    "slug": "steamroller",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Steel Roller",
    "slug": "steel-roller",
    "usage": 0,
    "description": "The user attacks while destroying the terrain. This move fails if the ground hasn't turned into a terrain.",
    "power": 130,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Sticky Web",
    "slug": "sticky-web",
    "usage": 0,
    "description": "The user weaves a sticky net around the opposing team, which lowers their Speed stats upon switching into battle.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Stoked Sparksurfer",
    "slug": "stoked-sparksurfer",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 175,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Stomp",
    "slug": "stomp",
    "usage": 0,
    "description": "The user attacks by stomping on the target with a big foot. This may also make the target flinch.",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Strength",
    "slug": "strength",
    "usage": 0,
    "description": "The target is slugged with a punch thrown at maximum power.",
    "power": 80,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Struggle",
    "slug": "struggle",
    "usage": 0,
    "description": "This attack is used in desperation only if the user has no PP. It also damages the user a little.",
    "power": 50,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Stuff Cheeks",
    "slug": "stuff-cheeks",
    "usage": 0,
    "description": "The user eats its held Berry, then sharply boosts its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Submission",
    "slug": "submission",
    "usage": 0,
    "description": "The user grabs the target and recklessly dives for the ground. This also damages the user a little.",
    "power": 80,
    "accuracy": 80,
    "pp": 20
  },
  {
    "name": "Subzero Slammer",
    "slug": "subzero-slammer--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Subzero Slammer",
    "slug": "subzero-slammer--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Sunsteel Strike",
    "slug": "sunsteel-strike",
    "usage": 0,
    "description": "The user slams into the target with the force of a meteor. This move can be used on the target regardless of its Ability.",
    "power": 100,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Supersonic",
    "slug": "supersonic",
    "usage": 0,
    "description": "The user generates odd sound waves from its body that confuse the target.",
    "power": null,
    "accuracy": 55,
    "pp": 20
  },
  {
    "name": "Supersonic Skystrike",
    "slug": "supersonic-skystrike--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Supersonic Skystrike",
    "slug": "supersonic-skystrike--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Surging Strikes",
    "slug": "surging-strikes",
    "usage": 0,
    "description": "The user, having mastered the Water style, strikes the target with a flowing motion three times in a row. This move always lands a critical hit.",
    "power": 25,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Swallow",
    "slug": "swallow",
    "usage": 0,
    "description": "The power stored using the move Stockpile is absorbed by the user to restore its own HP. The more power is stored, the more HP is restored.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Sweet Kiss",
    "slug": "sweet-kiss",
    "usage": 0,
    "description": "The user kisses the target with a sweet, angelic cuteness that causes confusion.",
    "power": null,
    "accuracy": 75,
    "pp": 12
  },
  {
    "name": "Sweet Scent",
    "slug": "sweet-scent",
    "usage": 0,
    "description": "The user releases a scent that harshly lowers opposing Pokémon's evasiveness.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Swift",
    "slug": "swift",
    "usage": 0,
    "description": "Star-shaped rays are shot at opposing Pokémon. This attack never misses.",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Switcheroo",
    "slug": "switcheroo",
    "usage": 0,
    "description": "The user trades held items with the target faster than the eye can follow.",
    "power": null,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Synchronoise",
    "slug": "synchronoise",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Tachyon Cutter",
    "slug": "tachyon-cutter",
    "usage": 0,
    "description": "The user attacks by launching particle blades at the target twice in a row. This attack never misses.",
    "power": 50,
    "accuracy": 0,
    "pp": 12
  },
  {
    "name": "Tackle",
    "slug": "tackle",
    "usage": 0,
    "description": "A physical attack in which the user charges and slams into the target with its whole body.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Tail Glow",
    "slug": "tail-glow",
    "usage": 0,
    "description": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Tail Slap",
    "slug": "tail-slap",
    "usage": 0,
    "description": "The user attacks by striking the target with its hard tail. This move hits two to five times in a row.",
    "power": 25,
    "accuracy": 85,
    "pp": 12
  },
  {
    "name": "Tail Whip",
    "slug": "tail-whip",
    "usage": 0,
    "description": "The user wags its tail cutely, making opposing Pokémon less wary. This lowers their Defense stats.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Take Down",
    "slug": "take-down",
    "usage": 0,
    "description": "A reckless full-body charge attack for slamming into the target. This also damages the user a little.",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "Take Heart",
    "slug": "take-heart",
    "usage": 0,
    "description": "The user lifts its spirits, curing its own status conditions and boosting its Sp. Atk and Sp. Def stats.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Tar Shot",
    "slug": "tar-shot",
    "usage": 0,
    "description": "The user pours sticky tar over the target, lowering the target's Speed stat. The target becomes weaker to Fire-type moves.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Tearful Look",
    "slug": "tearful-look",
    "usage": 0,
    "description": "The user gets teary-eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Teatime",
    "slug": "teatime",
    "usage": 0,
    "description": "The user has teatime with all the Pokémon currently in the battle. Each Pokémon eats its held Berry.",
    "power": null,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Techno Blast",
    "slug": "techno-blast",
    "usage": 0,
    "description": "The user fires a beam of light at its target. The move’s type changes depending on the Drive the user holds.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Tectonic Rage",
    "slug": "tectonic-rage--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Tectonic Rage",
    "slug": "tectonic-rage--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Teeter Dance",
    "slug": "teeter-dance",
    "usage": 0,
    "description": "The user performs a wobbly dance that confuses every Pokémon around it.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Telekinesis",
    "slug": "telekinesis",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Teleport",
    "slug": "teleport",
    "usage": 0,
    "description": "The user switches places with a party Pokémon in waiting, if any. If a wild Pokémon uses this move, it flees.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Tera Blast",
    "slug": "tera-blast",
    "usage": 0,
    "description": "If the user has Terastallized, it unleashes energy of its Tera Type. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Tera Starstorm",
    "slug": "tera-starstorm",
    "usage": 0,
    "description": "With the power of its crystals, the user bombards and eliminates the target. When used by Terapagos in its Stellar Form, this move damages all opposing Pokémon.",
    "power": 120,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Terrain Pulse",
    "slug": "terrain-pulse",
    "usage": 0,
    "description": "The user utilizes the energy of the terrain to attack. This move’s type and power change depending on the terrain at the time the move is used.",
    "power": 50,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Thousand Arrows",
    "slug": "thousand-arrows",
    "usage": 0,
    "description": "This move also hits opposing Pokémon that are in the air. Those Pokémon are knocked down to the ground.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Thousand Waves",
    "slug": "thousand-waves",
    "usage": 0,
    "description": "The user attacks with a wave that crawls along the ground. Those it hits can’t flee from battle.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Thrash",
    "slug": "thrash",
    "usage": 0,
    "description": "The user rampages and attacks for two to three turns. The user then becomes confused.",
    "power": 120,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Thunder Cage",
    "slug": "thunder-cage",
    "usage": 0,
    "description": "The user traps the target inside a cage of sparking electricity that inflicts damage for four to five turns.",
    "power": 80,
    "accuracy": 90,
    "pp": 16
  },
  {
    "name": "Thunder Shock",
    "slug": "thunder-shock",
    "usage": 0,
    "description": "The user attacks the target with a jolt of electricity. This may also leave the target with paralysis.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Thunderclap",
    "slug": "thunderclap",
    "usage": 0,
    "description": "This move enables the user to attack first with a jolt of electricity. This move fails if the target is not readying an attack.",
    "power": 70,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Thunderous Kick",
    "slug": "thunderous-kick",
    "usage": 0,
    "description": "The user overwhelms the target with lightning-like movement before delivering a kick. This also lowers the target's Defense stat.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Tidy Up",
    "slug": "tidy-up",
    "usage": 0,
    "description": "The user tidies up and removes the effects of Spikes, Stealth Rock, Sticky Web, Toxic Spikes, and Substitute. This also boosts the user’s Attack and Speed stats.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Topsy-Turvy",
    "slug": "topsy-turvy",
    "usage": 0,
    "description": "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Torment",
    "slug": "torment",
    "usage": 0,
    "description": "The user torments and enrages the target, making it incapable of using the same move twice in a row.",
    "power": null,
    "accuracy": 100,
    "pp": 16
  },
  {
    "name": "Toxic Thread",
    "slug": "toxic-thread",
    "usage": 0,
    "description": "Inflicts Poison. Lowers opponent's Speed by 2 stages.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Tri Attack",
    "slug": "tri-attack",
    "usage": 0,
    "description": "The user strikes with a simultaneous three-beam attack. This may also burn, freeze, or paralyze the target.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Trick-or-Treat",
    "slug": "trick-or-treat",
    "usage": 0,
    "description": "The user takes the target trick-or-treating. This adds Ghost type to the target’s type.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Triple Dive",
    "slug": "triple-dive",
    "usage": 0,
    "description": "The user performs a perfectly timed triple dive, hitting the target with splashes of water three times in a row.",
    "power": 30,
    "accuracy": 95,
    "pp": 12
  },
  {
    "name": "Triple Kick",
    "slug": "triple-kick",
    "usage": 0,
    "description": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
    "power": 10,
    "accuracy": 90,
    "pp": 12
  },
  {
    "name": "Trump Card",
    "slug": "trump-card",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 8
  },
  {
    "name": "Twineedle",
    "slug": "twineedle",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Twinkle Tackle",
    "slug": "twinkle-tackle--physical",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Twinkle Tackle",
    "slug": "twinkle-tackle--special",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "Twister",
    "slug": "twister",
    "usage": 0,
    "description": "The user whips up a vicious tornado to tear at opposing Pokémon. This may also make them flinch.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Uproar",
    "slug": "uproar",
    "usage": 0,
    "description": "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep.",
    "power": 90,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "V-create",
    "slug": "v-create",
    "usage": 0,
    "description": "With a hot flame on its forehead, the user hurls itself at its target. This lowers the user’s Defense, Sp. Def, and Speed stats.",
    "power": 180,
    "accuracy": 95,
    "pp": 8
  },
  {
    "name": "Veevee Volley",
    "slug": "veevee-volley",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Venom Drench",
    "slug": "venom-drench",
    "usage": 0,
    "description": "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target.",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Victory Dance",
    "slug": "victory-dance",
    "usage": 0,
    "description": "The user performs an intense dance to usher in victory, boosting its Attack, Defense, and Speed stats.",
    "power": 0,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Vine Whip",
    "slug": "vine-whip",
    "usage": 0,
    "description": "The target is struck with slender, whiplike vines to inflict damage.",
    "power": 45,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Vise Grip",
    "slug": "vice-grip",
    "usage": 0,
    "description": "The target is gripped and squeezed from both sides to inflict damage.",
    "power": 55,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Vital Throw",
    "slug": "vital-throw",
    "usage": 0,
    "description": "The user attacks last. In return, this throw move never misses.",
    "power": 70,
    "accuracy": null,
    "pp": 12
  },
  {
    "name": "Wake-Up Slap",
    "slug": "wake-up-slap",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 70,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Water Gun",
    "slug": "water-gun",
    "usage": 0,
    "description": "The target is blasted with a forceful shot of water.",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Water Pledge",
    "slug": "water-pledge",
    "usage": 0,
    "description": "A column of water hits the target. When used with its fire counterpart, this move's power is boosted and a rainbow appears.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Water Sport",
    "slug": "water-sport",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": null,
    "pp": 16
  },
  {
    "name": "Wicked Blow",
    "slug": "wicked-blow",
    "usage": 0,
    "description": "The user, having mastered the Dark style, strikes the target with a fierce blow. This move always lands a critical hit.",
    "power": 75,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Wicked Torque",
    "slug": "wicked-torque",
    "usage": 0,
    "description": "",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Wildbolt Storm",
    "slug": "wildbolt-storm",
    "usage": 0,
    "description": "The user summons a thunderous tempest and savagely attacks with lightning and wind. This may also leave opposing Pokémon with paralysis.",
    "power": 100,
    "accuracy": 80,
    "pp": 12
  },
  {
    "name": "Wing Attack",
    "slug": "wing-attack",
    "usage": 0,
    "description": "The target is struck with large, imposing wings spread wide to inflict damage.",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "Withdraw",
    "slug": "withdraw",
    "usage": 0,
    "description": "The user withdraws its body into its hard shell, boosting its Defense stat.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Work Up",
    "slug": "work-up",
    "usage": 0,
    "description": "The user is roused, and its Attack and Sp. Atk stats are boosted.",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "Wrap",
    "slug": "wrap",
    "usage": 0,
    "description": "A long body, vines, or the like are used to wrap and squeeze the target for four to five turns.",
    "power": 15,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "Wring Out",
    "slug": "wring-out",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": null,
    "accuracy": 100,
    "pp": 8
  },
  {
    "name": "Zing Zap",
    "slug": "zing-zap",
    "usage": 0,
    "description": "The user crashes into the target, delivering a powerful electric shock. This may also make the target flinch.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  },
  {
    "name": "Zippy Zap",
    "slug": "zippy-zap",
    "usage": 0,
    "description": "This move can’t be used. It’s recommended that this move is forgotten. Once forgotten, this move can’t be remembered.",
    "power": 80,
    "accuracy": 100,
    "pp": 12
  }
] satisfies MoveMeta[];

const moveByName = new Map(allMoves.map((move) => [move.name.trim().toLowerCase(), move]));
const moveTypeByName = new Map<string, PokemonTypeName>(
  [
  [
    "Protect",
    "Normal"
  ],
  [
    "Fake Out",
    "Normal"
  ],
  [
    "Rock Slide",
    "Rock"
  ],
  [
    "Tailwind",
    "Flying"
  ],
  [
    "Close Combat",
    "Fighting"
  ],
  [
    "Weather Ball",
    "Normal"
  ],
  [
    "Aqua Jet",
    "Water"
  ],
  [
    "Earthquake",
    "Ground"
  ],
  [
    "Last Respects",
    "Ghost"
  ],
  [
    "Moonblast",
    "Fairy"
  ],
  [
    "Sucker Punch",
    "Dark"
  ],
  [
    "Dragon Claw",
    "Dragon"
  ],
  [
    "Heat Wave",
    "Fire"
  ],
  [
    "Kowtow Cleave",
    "Dark"
  ],
  [
    "Flare Blitz",
    "Fire"
  ],
  [
    "Iron Head",
    "Steel"
  ],
  [
    "Trick Room",
    "Psychic"
  ],
  [
    "Wave Crash",
    "Water"
  ],
  [
    "Dire Claw",
    "Poison"
  ],
  [
    "Encore",
    "Normal"
  ],
  [
    "Parting Shot",
    "Dark"
  ],
  [
    "Rage Powder",
    "Bug"
  ],
  [
    "Dazzling Gleam",
    "Fairy"
  ],
  [
    "Low Kick",
    "Fighting"
  ],
  [
    "Solar Beam",
    "Grass"
  ],
  [
    "Hyper Voice",
    "Normal"
  ],
  [
    "Flip Turn",
    "Water"
  ],
  [
    "Matcha Gotcha",
    "Grass"
  ],
  [
    "Sludge Bomb",
    "Poison"
  ],
  [
    "Dual Wingbeat",
    "Flying"
  ],
  [
    "Earth Power",
    "Ground"
  ],
  [
    "Hurricane",
    "Flying"
  ],
  [
    "Calm Mind",
    "Psychic"
  ],
  [
    "Psychic",
    "Psychic"
  ],
  [
    "Shadow Ball",
    "Ghost"
  ],
  [
    "Stomping Tantrum",
    "Ground"
  ],
  [
    "Throat Chop",
    "Dark"
  ],
  [
    "Thunderbolt",
    "Electric"
  ],
  [
    "Dragon Pulse",
    "Dragon"
  ],
  [
    "Helping Hand",
    "Normal"
  ],
  [
    "Swords Dance",
    "Normal"
  ],
  [
    "Will-O-Wisp",
    "Fire"
  ],
  [
    "Blizzard",
    "Ice"
  ],
  [
    "Electro Shot",
    "Electric"
  ],
  [
    "Flash Cannon",
    "Steel"
  ],
  [
    "Life Dew",
    "Water"
  ],
  [
    "Wide Guard",
    "Rock"
  ],
  [
    "Aura Sphere",
    "Fighting"
  ],
  [
    "Hydro Pump",
    "Water"
  ],
  [
    "Liquidation",
    "Water"
  ],
  [
    "Aurora Veil",
    "Ice"
  ],
  [
    "Brave Bird",
    "Flying"
  ],
  [
    "Darkest Lariat",
    "Dark"
  ],
  [
    "Detect",
    "Fighting"
  ],
  [
    "Draco Meteor",
    "Dragon"
  ],
  [
    "Hyper Beam",
    "Normal"
  ],
  [
    "Knock Off",
    "Dark"
  ],
  [
    "Light of Ruin",
    "Fairy"
  ],
  [
    "Power Gem",
    "Rock"
  ],
  [
    "Quick Attack",
    "Normal"
  ],
  [
    "Rain Dance",
    "Water"
  ],
  [
    "Rock Tomb",
    "Rock"
  ],
  [
    "Sleep Powder",
    "Grass"
  ],
  [
    "Spiky Shield",
    "Grass"
  ],
  [
    "Bullet Punch",
    "Steel"
  ],
  [
    "Dark Pulse",
    "Dark"
  ],
  [
    "Dragon Dance",
    "Dragon"
  ],
  [
    "Draining Kiss",
    "Fairy"
  ],
  [
    "Follow Me",
    "Normal"
  ],
  [
    "Giga Drain",
    "Grass"
  ],
  [
    "Icy Wind",
    "Ice"
  ],
  [
    "Overheat",
    "Fire"
  ],
  [
    "Poison Jab",
    "Poison"
  ],
  [
    "Poltergeist",
    "Ghost"
  ],
  [
    "Shadow Sneak",
    "Ghost"
  ],
  [
    "Taunt",
    "Dark"
  ],
  [
    "Volt Switch",
    "Electric"
  ],
  [
    "Body Press",
    "Fighting"
  ],
  [
    "Bug Bite",
    "Bug"
  ],
  [
    "Bulk Up",
    "Fighting"
  ],
  [
    "Clanging Scales",
    "Dragon"
  ],
  [
    "Clangorous Soul",
    "Dragon"
  ],
  [
    "Coaching",
    "Fighting"
  ],
  [
    "Disable",
    "Normal"
  ],
  [
    "Double-Edge",
    "Normal"
  ],
  [
    "Electroweb",
    "Electric"
  ],
  [
    "Eruption",
    "Fire"
  ],
  [
    "Extreme Speed",
    "Normal"
  ],
  [
    "Feint",
    "Normal"
  ],
  [
    "Flamethrower",
    "Fire"
  ],
  [
    "High Horsepower",
    "Ground"
  ],
  [
    "Ice Beam",
    "Ice"
  ],
  [
    "Ice Punch",
    "Ice"
  ],
  [
    "Leech Seed",
    "Grass"
  ],
  [
    "Light Screen",
    "Psychic"
  ],
  [
    "Muddy Water",
    "Water"
  ],
  [
    "Perish Song",
    "Normal"
  ],
  [
    "Psyshock",
    "Psychic"
  ],
  [
    "Roost",
    "Flying"
  ],
  [
    "Scald",
    "Water"
  ],
  [
    "Snarl",
    "Dark"
  ],
  [
    "Super Fang",
    "Normal"
  ],
  [
    "Acrobatics",
    "Flying"
  ],
  [
    "Air Slash",
    "Flying"
  ],
  [
    "Ancient Power",
    "Rock"
  ],
  [
    "Coil",
    "Poison"
  ],
  [
    "Crunch",
    "Dark"
  ],
  [
    "Drain Punch",
    "Fighting"
  ],
  [
    "Energy Ball",
    "Grass"
  ],
  [
    "Foul Play",
    "Dark"
  ],
  [
    "Freeze-Dry",
    "Ice"
  ],
  [
    "Gigaton Hammer",
    "Steel"
  ],
  [
    "Gunk Shot",
    "Poison"
  ],
  [
    "Head Smash",
    "Rock"
  ],
  [
    "Heavy Slam",
    "Steel"
  ],
  [
    "Hypnosis",
    "Psychic"
  ],
  [
    "Imprison",
    "Psychic"
  ],
  [
    "Iron Defense",
    "Steel"
  ],
  [
    "Jet Punch",
    "Water"
  ],
  [
    "King’s Shield",
    "Steel"
  ],
  [
    "Leaf Storm",
    "Grass"
  ],
  [
    "Nasty Plot",
    "Dark"
  ],
  [
    "Play Rough",
    "Fairy"
  ],
  [
    "Psycho Cut",
    "Psychic"
  ],
  [
    "Recover",
    "Normal"
  ],
  [
    "Reflect",
    "Psychic"
  ],
  [
    "Sacred Sword",
    "Fighting"
  ],
  [
    "Scale Shot",
    "Dragon"
  ],
  [
    "Shell Smash",
    "Normal"
  ],
  [
    "Stone Axe",
    "Rock"
  ],
  [
    "Stone Edge",
    "Rock"
  ],
  [
    "Strength Sap",
    "Grass"
  ],
  [
    "Substitute",
    "Normal"
  ],
  [
    "Sunny Day",
    "Fire"
  ],
  [
    "Thunder",
    "Electric"
  ],
  [
    "Thunder Wave",
    "Electric"
  ],
  [
    "Triple Axel",
    "Ice"
  ],
  [
    "Twin Beam",
    "Psychic"
  ],
  [
    "U-turn",
    "Bug"
  ],
  [
    "Water Spout",
    "Water"
  ],
  [
    "Waterfall",
    "Water"
  ],
  [
    "Yawn",
    "Normal"
  ],
  [
    "Accelerock",
    "Rock"
  ],
  [
    "Acid Armor",
    "Poison"
  ],
  [
    "Acid Spray",
    "Poison"
  ],
  [
    "Acupressure",
    "Normal"
  ],
  [
    "Aerial Ace",
    "Flying"
  ],
  [
    "After You",
    "Normal"
  ],
  [
    "Agility",
    "Psychic"
  ],
  [
    "Air Cutter",
    "Flying"
  ],
  [
    "Alluring Voice",
    "Fairy"
  ],
  [
    "Ally Switch",
    "Psychic"
  ],
  [
    "Amnesia",
    "Psychic"
  ],
  [
    "Aqua Cutter",
    "Water"
  ],
  [
    "Aqua Step",
    "Water"
  ],
  [
    "Aqua Tail",
    "Water"
  ],
  [
    "Armor Cannon",
    "Fire"
  ],
  [
    "Aromatic Mist",
    "Fairy"
  ],
  [
    "Assurance",
    "Dark"
  ],
  [
    "Attract",
    "Normal"
  ],
  [
    "Aura Wheel",
    "Electric"
  ],
  [
    "Avalanche",
    "Ice"
  ],
  [
    "Baby-Doll Eyes",
    "Fairy"
  ],
  [
    "Baneful Bunker",
    "Poison"
  ],
  [
    "Baton Pass",
    "Normal"
  ],
  [
    "Beak Blast",
    "Flying"
  ],
  [
    "Beat Up",
    "Dark"
  ],
  [
    "Belly Drum",
    "Normal"
  ],
  [
    "Bite",
    "Dark"
  ],
  [
    "Bitter Blade",
    "Fire"
  ],
  [
    "Bitter Malice",
    "Ghost"
  ],
  [
    "Blast Burn",
    "Fire"
  ],
  [
    "Blaze Kick",
    "Fire"
  ],
  [
    "Body Slam",
    "Normal"
  ],
  [
    "Bone Rush",
    "Ground"
  ],
  [
    "Boomburst",
    "Normal"
  ],
  [
    "Branch Poke",
    "Grass"
  ],
  [
    "Breaking Swipe",
    "Dragon"
  ],
  [
    "Brick Break",
    "Fighting"
  ],
  [
    "Brutal Swing",
    "Dark"
  ],
  [
    "Bug Buzz",
    "Bug"
  ],
  [
    "Bulldoze",
    "Ground"
  ],
  [
    "Bullet Seed",
    "Grass"
  ],
  [
    "Burn Up",
    "Fire"
  ],
  [
    "Burning Jealousy",
    "Fire"
  ],
  [
    "Ceaseless Edge",
    "Dark"
  ],
  [
    "Charge",
    "Electric"
  ],
  [
    "Charge Beam",
    "Electric"
  ],
  [
    "Charm",
    "Fairy"
  ],
  [
    "Chilling Water",
    "Water"
  ],
  [
    "Chilly Reception",
    "Ice"
  ],
  [
    "Confuse Ray",
    "Ghost"
  ],
  [
    "Copycat",
    "Normal"
  ],
  [
    "Corrosive Gas",
    "Poison"
  ],
  [
    "Cosmic Power",
    "Psychic"
  ],
  [
    "Cotton Guard",
    "Grass"
  ],
  [
    "Cotton Spore",
    "Grass"
  ],
  [
    "Cross Chop",
    "Fighting"
  ],
  [
    "Curse",
    "Ghost"
  ],
  [
    "Decorate",
    "Fairy"
  ],
  [
    "Destiny Bond",
    "Ghost"
  ],
  [
    "Dig",
    "Ground"
  ],
  [
    "Discharge",
    "Electric"
  ],
  [
    "Dragon Cheer",
    "Dragon"
  ],
  [
    "Dragon Darts",
    "Dragon"
  ],
  [
    "Dragon Rush",
    "Dragon"
  ],
  [
    "Dragon Tail",
    "Dragon"
  ],
  [
    "Drill Peck",
    "Flying"
  ],
  [
    "Drill Run",
    "Ground"
  ],
  [
    "Dynamic Punch",
    "Fighting"
  ],
  [
    "Eerie Impulse",
    "Electric"
  ],
  [
    "Electric Terrain",
    "Electric"
  ],
  [
    "Endeavor",
    "Normal"
  ],
  [
    "Endure",
    "Normal"
  ],
  [
    "Entrainment",
    "Normal"
  ],
  [
    "Expanding Force",
    "Psychic"
  ],
  [
    "Explosion",
    "Normal"
  ],
  [
    "Extrasensory",
    "Psychic"
  ],
  [
    "Facade",
    "Normal"
  ],
  [
    "Fake Tears",
    "Dark"
  ],
  [
    "Feather Dance",
    "Flying"
  ],
  [
    "Fickle Beam",
    "Dragon"
  ],
  [
    "Fiery Dance",
    "Fire"
  ],
  [
    "Final Gambit",
    "Fighting"
  ],
  [
    "Fire Blast",
    "Fire"
  ],
  [
    "Fire Fang",
    "Fire"
  ],
  [
    "Fire Punch",
    "Fire"
  ],
  [
    "Fire Spin",
    "Fire"
  ],
  [
    "Fissure",
    "Ground"
  ],
  [
    "Flame Charge",
    "Fire"
  ],
  [
    "Flatter",
    "Dark"
  ],
  [
    "Fling",
    "Dark"
  ],
  [
    "Flower Trick",
    "Grass"
  ],
  [
    "Fly",
    "Flying"
  ],
  [
    "Flying Press",
    "Fighting"
  ],
  [
    "Focus Blast",
    "Fighting"
  ],
  [
    "Focus Energy",
    "Normal"
  ],
  [
    "Frost Breath",
    "Ice"
  ],
  [
    "Giga Impact",
    "Normal"
  ],
  [
    "Glare",
    "Normal"
  ],
  [
    "Grass Knot",
    "Grass"
  ],
  [
    "Grassy Terrain",
    "Grass"
  ],
  [
    "Gravity",
    "Psychic"
  ],
  [
    "Growth",
    "Grass"
  ],
  [
    "Hammer Arm",
    "Fighting"
  ],
  [
    "Hard Press",
    "Steel"
  ],
  [
    "Haze",
    "Ice"
  ],
  [
    "Headlong Rush",
    "Ground"
  ],
  [
    "Heal Pulse",
    "Psychic"
  ],
  [
    "Healing Wish",
    "Psychic"
  ],
  [
    "Heat Crash",
    "Fire"
  ],
  [
    "Hex",
    "Ghost"
  ],
  [
    "High Jump Kick",
    "Fighting"
  ],
  [
    "Howl",
    "Normal"
  ],
  [
    "Hydro Cannon",
    "Water"
  ],
  [
    "Ice Fang",
    "Ice"
  ],
  [
    "Ice Hammer",
    "Ice"
  ],
  [
    "Ice Shard",
    "Ice"
  ],
  [
    "Ice Spinner",
    "Ice"
  ],
  [
    "Icicle Crash",
    "Ice"
  ],
  [
    "Icicle Spear",
    "Ice"
  ],
  [
    "Infernal Parade",
    "Ghost"
  ],
  [
    "Inferno",
    "Fire"
  ],
  [
    "Infestation",
    "Bug"
  ],
  [
    "Instruct",
    "Psychic"
  ],
  [
    "Iron Tail",
    "Steel"
  ],
  [
    "Lash Out",
    "Dark"
  ],
  [
    "Last Resort",
    "Normal"
  ],
  [
    "Lava Plume",
    "Fire"
  ],
  [
    "Leaf Blade",
    "Grass"
  ],
  [
    "Leech Life",
    "Bug"
  ],
  [
    "Low Sweep",
    "Fighting"
  ],
  [
    "Lumina Crash",
    "Psychic"
  ],
  [
    "Lunge",
    "Bug"
  ],
  [
    "Mach Punch",
    "Fighting"
  ],
  [
    "Magic Powder",
    "Psychic"
  ],
  [
    "Magic Room",
    "Psychic"
  ],
  [
    "Magnet Rise",
    "Electric"
  ],
  [
    "Mean Look",
    "Normal"
  ],
  [
    "Mega Kick",
    "Normal"
  ],
  [
    "Megahorn",
    "Bug"
  ],
  [
    "Memento",
    "Dark"
  ],
  [
    "Metal Burst",
    "Steel"
  ],
  [
    "Meteor Mash",
    "Steel"
  ],
  [
    "Minimize",
    "Normal"
  ],
  [
    "Mirror Coat",
    "Psychic"
  ],
  [
    "Misty Explosion",
    "Fairy"
  ],
  [
    "Moonlight",
    "Fairy"
  ],
  [
    "Morning Sun",
    "Normal"
  ],
  [
    "Mortal Spin",
    "Poison"
  ],
  [
    "Mystical Fire",
    "Fire"
  ],
  [
    "Night Shade",
    "Ghost"
  ],
  [
    "Night Slash",
    "Dark"
  ],
  [
    "Nuzzle",
    "Electric"
  ],
  [
    "Outrage",
    "Dragon"
  ],
  [
    "Pain Split",
    "Normal"
  ],
  [
    "Parabolic Charge",
    "Electric"
  ],
  [
    "Payback",
    "Dark"
  ],
  [
    "Petal Dance",
    "Grass"
  ],
  [
    "Phantom Force",
    "Ghost"
  ],
  [
    "Pin Missile",
    "Bug"
  ],
  [
    "Pollen Puff",
    "Bug"
  ],
  [
    "Population Bomb",
    "Normal"
  ],
  [
    "Pounce",
    "Bug"
  ],
  [
    "Power Whip",
    "Grass"
  ],
  [
    "Precipice Blades",
    "Ground"
  ],
  [
    "Psych Up",
    "Normal"
  ],
  [
    "Psychic Fangs",
    "Psychic"
  ],
  [
    "Psychic Noise",
    "Psychic"
  ],
  [
    "Psychic Terrain",
    "Psychic"
  ],
  [
    "Psyshield Bash",
    "Psychic"
  ],
  [
    "Quash",
    "Dark"
  ],
  [
    "Quick Guard",
    "Fighting"
  ],
  [
    "Quiver Dance",
    "Bug"
  ],
  [
    "Rage",
    "Normal"
  ],
  [
    "Raging Bull",
    "Normal"
  ],
  [
    "Raging Fury",
    "Fire"
  ],
  [
    "Razor Shell",
    "Water"
  ],
  [
    "Reflect Type",
    "Normal"
  ],
  [
    "Rest",
    "Psychic"
  ],
  [
    "Roar",
    "Normal"
  ],
  [
    "Rock Blast",
    "Rock"
  ],
  [
    "Rock Polish",
    "Rock"
  ],
  [
    "Round",
    "Normal"
  ],
  [
    "Safeguard",
    "Normal"
  ],
  [
    "Salt Cure",
    "Rock"
  ],
  [
    "Sand Tomb",
    "Ground"
  ],
  [
    "Sandstorm",
    "Rock"
  ],
  [
    "Scorching Sands",
    "Ground"
  ],
  [
    "Seed Bomb",
    "Grass"
  ],
  [
    "Self-Destruct",
    "Normal"
  ],
  [
    "Shadow Claw",
    "Ghost"
  ],
  [
    "Shed Tail",
    "Normal"
  ],
  [
    "Sheer Cold",
    "Ice"
  ],
  [
    "Shell Side Arm",
    "Poison"
  ],
  [
    "Shelter",
    "Steel"
  ],
  [
    "Simple Beam",
    "Normal"
  ],
  [
    "Skill Swap",
    "Psychic"
  ],
  [
    "Skitter Smack",
    "Bug"
  ],
  [
    "Slack Off",
    "Normal"
  ],
  [
    "Sleep Talk",
    "Normal"
  ],
  [
    "Sludge Wave",
    "Poison"
  ],
  [
    "Smack Down",
    "Rock"
  ],
  [
    "Snowscape",
    "Ice"
  ],
  [
    "Soak",
    "Water"
  ],
  [
    "Solar Blade",
    "Grass"
  ],
  [
    "Speed Swap",
    "Psychic"
  ],
  [
    "Spicy Extract",
    "Grass"
  ],
  [
    "Spikes",
    "Ground"
  ],
  [
    "Spirit Shackle",
    "Ghost"
  ],
  [
    "Stealth Rock",
    "Rock"
  ],
  [
    "Steel Beam",
    "Steel"
  ],
  [
    "Steel Wing",
    "Steel"
  ],
  [
    "Stockpile",
    "Normal"
  ],
  [
    "Stored Power",
    "Psychic"
  ],
  [
    "Storm Throw",
    "Fighting"
  ],
  [
    "Strange Steam",
    "Fairy"
  ],
  [
    "String Shot",
    "Bug"
  ],
  [
    "Struggle Bug",
    "Bug"
  ],
  [
    "Stun Spore",
    "Grass"
  ],
  [
    "Supercell Slam",
    "Electric"
  ],
  [
    "Superpower",
    "Fighting"
  ],
  [
    "Surf",
    "Water"
  ],
  [
    "Swagger",
    "Normal"
  ],
  [
    "Synthesis",
    "Grass"
  ],
  [
    "Syrup Bomb",
    "Grass"
  ],
  [
    "Temper Flare",
    "Fire"
  ],
  [
    "Thief",
    "Dark"
  ],
  [
    "Thunder Fang",
    "Electric"
  ],
  [
    "Thunder Punch",
    "Electric"
  ],
  [
    "Tickle",
    "Normal"
  ],
  [
    "Torch Song",
    "Fire"
  ],
  [
    "Toxic",
    "Poison"
  ],
  [
    "Toxic Spikes",
    "Poison"
  ],
  [
    "Trailblaze",
    "Grass"
  ],
  [
    "Transform",
    "Normal"
  ],
  [
    "Trick",
    "Psychic"
  ],
  [
    "Triple Arrows",
    "Fighting"
  ],
  [
    "Trop Kick",
    "Grass"
  ],
  [
    "Upper Hand",
    "Fighting"
  ],
  [
    "Vacuum Wave",
    "Fighting"
  ],
  [
    "Venoshock",
    "Poison"
  ],
  [
    "Volt Tackle",
    "Electric"
  ],
  [
    "Water Pulse",
    "Water"
  ],
  [
    "Water Shuriken",
    "Water"
  ],
  [
    "Whirlpool",
    "Water"
  ],
  [
    "Whirlwind",
    "Normal"
  ],
  [
    "Wild Charge",
    "Electric"
  ],
  [
    "Wish",
    "Normal"
  ],
  [
    "Wonder Room",
    "Psychic"
  ],
  [
    "Wood Hammer",
    "Grass"
  ],
  [
    "Worry Seed",
    "Grass"
  ],
  [
    "X-Scissor",
    "Bug"
  ],
  [
    "Zap Cannon",
    "Electric"
  ],
  [
    "Zen Headbutt",
    "Psychic"
  ],
  [
    "10,000,000 Volt Thunderbolt",
    "Electric"
  ],
  [
    "Absorb",
    "Grass"
  ],
  [
    "Acid",
    "Poison"
  ],
  [
    "Acid Downpour",
    "Poison"
  ],
  [
    "Acid Downpour",
    "Poison"
  ],
  [
    "Aeroblast",
    "Flying"
  ],
  [
    "All-Out Pummeling",
    "Fighting"
  ],
  [
    "All-Out Pummeling",
    "Fighting"
  ],
  [
    "Anchor Shot",
    "Steel"
  ],
  [
    "Apple Acid",
    "Grass"
  ],
  [
    "Aqua Ring",
    "Water"
  ],
  [
    "Arm Thrust",
    "Fighting"
  ],
  [
    "Aromatherapy",
    "Grass"
  ],
  [
    "Assist",
    "Normal"
  ],
  [
    "Astonish",
    "Ghost"
  ],
  [
    "Astral Barrage",
    "Ghost"
  ],
  [
    "Attack Order",
    "Bug"
  ],
  [
    "Aurora Beam",
    "Ice"
  ],
  [
    "Autotomize",
    "Steel"
  ],
  [
    "Axe Kick",
    "Fighting"
  ],
  [
    "Baddy Bad",
    "Dark"
  ],
  [
    "Barb Barrage",
    "Poison"
  ],
  [
    "Barrage",
    "Normal"
  ],
  [
    "Barrier",
    "Psychic"
  ],
  [
    "Behemoth Bash",
    "Steel"
  ],
  [
    "Behemoth Blade",
    "Steel"
  ],
  [
    "Belch",
    "Poison"
  ],
  [
    "Bestow",
    "Normal"
  ],
  [
    "Bide",
    "Normal"
  ],
  [
    "Bind",
    "Normal"
  ],
  [
    "Black Hole Eclipse",
    "Dark"
  ],
  [
    "Black Hole Eclipse",
    "Dark"
  ],
  [
    "Blazing Torque",
    "Fire"
  ],
  [
    "Bleakwind Storm",
    "Flying"
  ],
  [
    "Block",
    "Normal"
  ],
  [
    "Blood Moon",
    "Normal"
  ],
  [
    "Bloom Doom",
    "Grass"
  ],
  [
    "Bloom Doom",
    "Grass"
  ],
  [
    "Blue Flare",
    "Fire"
  ],
  [
    "Bolt Beak",
    "Electric"
  ],
  [
    "Bolt Strike",
    "Electric"
  ],
  [
    "Bone Club",
    "Ground"
  ],
  [
    "Bonemerang",
    "Ground"
  ],
  [
    "Bounce",
    "Flying"
  ],
  [
    "Bouncy Bubble",
    "Water"
  ],
  [
    "Breakneck Blitz",
    "Normal"
  ],
  [
    "Breakneck Blitz",
    "Normal"
  ],
  [
    "Brine",
    "Water"
  ],
  [
    "Bubble",
    "Water"
  ],
  [
    "Bubble Beam",
    "Water"
  ],
  [
    "Burning Bulwark",
    "Fire"
  ],
  [
    "Buzzy Buzz",
    "Electric"
  ],
  [
    "Camouflage",
    "Normal"
  ],
  [
    "Captivate",
    "Normal"
  ],
  [
    "Catastropika",
    "Electric"
  ],
  [
    "Celebrate",
    "Normal"
  ],
  [
    "Chatter",
    "Flying"
  ],
  [
    "Chip Away",
    "Normal"
  ],
  [
    "Chloroblast",
    "Grass"
  ],
  [
    "Circle Throw",
    "Fighting"
  ],
  [
    "Clamp",
    "Water"
  ],
  [
    "Clangorous Soulblaze",
    "Dragon"
  ],
  [
    "Clear Smog",
    "Poison"
  ],
  [
    "Collision Course",
    "Fighting"
  ],
  [
    "Combat Torque",
    "Fighting"
  ],
  [
    "Comet Punch",
    "Normal"
  ],
  [
    "Comeuppance",
    "Dark"
  ],
  [
    "Confide",
    "Normal"
  ],
  [
    "Confusion",
    "Psychic"
  ],
  [
    "Constrict",
    "Normal"
  ],
  [
    "Continental Crush",
    "Rock"
  ],
  [
    "Continental Crush",
    "Rock"
  ],
  [
    "Conversion",
    "Normal"
  ],
  [
    "Conversion 2",
    "Normal"
  ],
  [
    "Core Enforcer",
    "Dragon"
  ],
  [
    "Corkscrew Crash",
    "Steel"
  ],
  [
    "Corkscrew Crash",
    "Steel"
  ],
  [
    "Counter",
    "Fighting"
  ],
  [
    "Court Change",
    "Normal"
  ],
  [
    "Covet",
    "Normal"
  ],
  [
    "Crabhammer",
    "Water"
  ],
  [
    "Crafty Shield",
    "Fairy"
  ],
  [
    "Cross Poison",
    "Poison"
  ],
  [
    "Crush Claw",
    "Normal"
  ],
  [
    "Crush Grip",
    "Normal"
  ],
  [
    "Cut",
    "Normal"
  ],
  [
    "Dark Void",
    "Dark"
  ],
  [
    "Defend Order",
    "Bug"
  ],
  [
    "Defense Curl",
    "Normal"
  ],
  [
    "Defog",
    "Flying"
  ],
  [
    "Devastating Drake",
    "Dragon"
  ],
  [
    "Devastating Drake",
    "Dragon"
  ],
  [
    "Diamond Storm",
    "Rock"
  ],
  [
    "Disarming Voice",
    "Fairy"
  ],
  [
    "Dive",
    "Water"
  ],
  [
    "Dizzy Punch",
    "Normal"
  ],
  [
    "Doodle",
    "Normal"
  ],
  [
    "Doom Desire",
    "Steel"
  ],
  [
    "Double Hit",
    "Normal"
  ],
  [
    "Double Iron Bash",
    "Steel"
  ],
  [
    "Double Kick",
    "Fighting"
  ],
  [
    "Double Shock",
    "Electric"
  ],
  [
    "Double Slap",
    "Normal"
  ],
  [
    "Double Team",
    "Normal"
  ],
  [
    "Dragon Ascent",
    "Flying"
  ],
  [
    "Dragon Breath",
    "Dragon"
  ],
  [
    "Dragon Energy",
    "Dragon"
  ],
  [
    "Dragon Hammer",
    "Dragon"
  ],
  [
    "Dragon Rage",
    "Dragon"
  ],
  [
    "Dream Eater",
    "Psychic"
  ],
  [
    "Drum Beating",
    "Grass"
  ],
  [
    "Dual Chop",
    "Dragon"
  ],
  [
    "Dynamax Cannon",
    "Dragon"
  ],
  [
    "Echoed Voice",
    "Normal"
  ],
  [
    "Eerie Spell",
    "Psychic"
  ],
  [
    "Egg Bomb",
    "Normal"
  ],
  [
    "Electrify",
    "Electric"
  ],
  [
    "Electro Ball",
    "Electric"
  ],
  [
    "Electro Drift",
    "Electric"
  ],
  [
    "Embargo",
    "Dark"
  ],
  [
    "Ember",
    "Fire"
  ],
  [
    "Esper Wing",
    "Psychic"
  ],
  [
    "Eternabeam",
    "Dragon"
  ],
  [
    "Extreme Evoboost",
    "Normal"
  ],
  [
    "Fairy Lock",
    "Fairy"
  ],
  [
    "Fairy Wind",
    "Fairy"
  ],
  [
    "False Surrender",
    "Dark"
  ],
  [
    "False Swipe",
    "Normal"
  ],
  [
    "Feint Attack",
    "Dark"
  ],
  [
    "Fell Stinger",
    "Bug"
  ],
  [
    "Fiery Wrath",
    "Dark"
  ],
  [
    "Fillet Away",
    "Normal"
  ],
  [
    "Fire Lash",
    "Fire"
  ],
  [
    "Fire Pledge",
    "Fire"
  ],
  [
    "First Impression",
    "Bug"
  ],
  [
    "Fishious Rend",
    "Water"
  ],
  [
    "Flail",
    "Normal"
  ],
  [
    "Flame Burst",
    "Fire"
  ],
  [
    "Flame Wheel",
    "Fire"
  ],
  [
    "Flash",
    "Normal"
  ],
  [
    "Fleur Cannon",
    "Fairy"
  ],
  [
    "Floaty Fall",
    "Flying"
  ],
  [
    "Floral Healing",
    "Fairy"
  ],
  [
    "Flower Shield",
    "Fairy"
  ],
  [
    "Focus Punch",
    "Fighting"
  ],
  [
    "Force Palm",
    "Fighting"
  ],
  [
    "Foresight",
    "Normal"
  ],
  [
    "Forest’s Curse",
    "Grass"
  ],
  [
    "Freeze Shock",
    "Ice"
  ],
  [
    "Freezing Glare",
    "Psychic"
  ],
  [
    "Freezy Frost",
    "Ice"
  ],
  [
    "Frenzy Plant",
    "Grass"
  ],
  [
    "Frustration",
    "Normal"
  ],
  [
    "Fury Attack",
    "Normal"
  ],
  [
    "Fury Cutter",
    "Bug"
  ],
  [
    "Fury Swipes",
    "Normal"
  ],
  [
    "Fusion Bolt",
    "Electric"
  ],
  [
    "Fusion Flare",
    "Fire"
  ],
  [
    "Future Sight",
    "Psychic"
  ],
  [
    "Gastro Acid",
    "Poison"
  ],
  [
    "Gear Grind",
    "Steel"
  ],
  [
    "Gear Up",
    "Steel"
  ],
  [
    "Genesis Supernova",
    "Psychic"
  ],
  [
    "Geomancy",
    "Fairy"
  ],
  [
    "Gigavolt Havoc",
    "Electric"
  ],
  [
    "Gigavolt Havoc",
    "Electric"
  ],
  [
    "Glacial Lance",
    "Ice"
  ],
  [
    "Glaciate",
    "Ice"
  ],
  [
    "Glaive Rush",
    "Dragon"
  ],
  [
    "Glitzy Glow",
    "Psychic"
  ],
  [
    "Grass Pledge",
    "Grass"
  ],
  [
    "Grass Whistle",
    "Grass"
  ],
  [
    "Grassy Glide",
    "Grass"
  ],
  [
    "Grav Apple",
    "Grass"
  ],
  [
    "Growl",
    "Normal"
  ],
  [
    "Grudge",
    "Ghost"
  ],
  [
    "Guard Split",
    "Psychic"
  ],
  [
    "Guard Swap",
    "Psychic"
  ],
  [
    "Guardian of Alola",
    "Fairy"
  ],
  [
    "Guillotine",
    "Normal"
  ],
  [
    "Gust",
    "Flying"
  ],
  [
    "Gyro Ball",
    "Steel"
  ],
  [
    "Hail",
    "Ice"
  ],
  [
    "Happy Hour",
    "Normal"
  ],
  [
    "Harden",
    "Normal"
  ],
  [
    "Head Charge",
    "Normal"
  ],
  [
    "Headbutt",
    "Normal"
  ],
  [
    "Heal Bell",
    "Normal"
  ],
  [
    "Heal Block",
    "Psychic"
  ],
  [
    "Heal Order",
    "Bug"
  ],
  [
    "Heart Stamp",
    "Psychic"
  ],
  [
    "Heart Swap",
    "Psychic"
  ],
  [
    "Hidden Power",
    "Normal"
  ],
  [
    "Hold Back",
    "Normal"
  ],
  [
    "Hold Hands",
    "Normal"
  ],
  [
    "Hone Claws",
    "Dark"
  ],
  [
    "Horn Attack",
    "Normal"
  ],
  [
    "Horn Drill",
    "Normal"
  ],
  [
    "Horn Leech",
    "Grass"
  ],
  [
    "Hydro Steam",
    "Water"
  ],
  [
    "Hydro Vortex",
    "Water"
  ],
  [
    "Hydro Vortex",
    "Water"
  ],
  [
    "Hyper Drill",
    "Normal"
  ],
  [
    "Hyper Fang",
    "Normal"
  ],
  [
    "Hyperspace Fury",
    "Dark"
  ],
  [
    "Hyperspace Hole",
    "Psychic"
  ],
  [
    "Ice Ball",
    "Ice"
  ],
  [
    "Ice Burn",
    "Ice"
  ],
  [
    "Incinerate",
    "Fire"
  ],
  [
    "Inferno Overdrive",
    "Fire"
  ],
  [
    "Inferno Overdrive",
    "Fire"
  ],
  [
    "Ingrain",
    "Grass"
  ],
  [
    "Ion Deluge",
    "Electric"
  ],
  [
    "Ivy Cudgel",
    "Grass"
  ],
  [
    "Jaw Lock",
    "Dark"
  ],
  [
    "Judgment",
    "Normal"
  ],
  [
    "Jump Kick",
    "Fighting"
  ],
  [
    "Jungle Healing",
    "Grass"
  ],
  [
    "Karate Chop",
    "Fighting"
  ],
  [
    "Kinesis",
    "Psychic"
  ],
  [
    "Land’s Wrath",
    "Ground"
  ],
  [
    "Laser Focus",
    "Normal"
  ],
  [
    "Leaf Tornado",
    "Grass"
  ],
  [
    "Leafage",
    "Grass"
  ],
  [
    "Leer",
    "Normal"
  ],
  [
    "Let’s Snuggle Forever",
    "Fairy"
  ],
  [
    "Lick",
    "Ghost"
  ],
  [
    "Light That Burns the Sky",
    "Psychic"
  ],
  [
    "Lock-On",
    "Normal"
  ],
  [
    "Lovely Kiss",
    "Normal"
  ],
  [
    "Lucky Chant",
    "Normal"
  ],
  [
    "Lunar Blessing",
    "Psychic"
  ],
  [
    "Lunar Dance",
    "Psychic"
  ],
  [
    "Luster Purge",
    "Psychic"
  ],
  [
    "Magic Coat",
    "Psychic"
  ],
  [
    "Magical Leaf",
    "Grass"
  ],
  [
    "Magical Torque",
    "Fairy"
  ],
  [
    "Magma Storm",
    "Fire"
  ],
  [
    "Magnet Bomb",
    "Steel"
  ],
  [
    "Magnetic Flux",
    "Electric"
  ],
  [
    "Magnitude",
    "Ground"
  ],
  [
    "Make It Rain",
    "Steel"
  ],
  [
    "Malicious Moonsault",
    "Dark"
  ],
  [
    "Malignant Chain",
    "Poison"
  ],
  [
    "Mat Block",
    "Fighting"
  ],
  [
    "Max Airstream",
    "Flying"
  ],
  [
    "Max Darkness",
    "Dark"
  ],
  [
    "Max Flare",
    "Fire"
  ],
  [
    "Max Flutterby",
    "Bug"
  ],
  [
    "Max Geyser",
    "Water"
  ],
  [
    "Max Guard",
    "Normal"
  ],
  [
    "Max Hailstorm",
    "Ice"
  ],
  [
    "Max Knuckle",
    "Fighting"
  ],
  [
    "Max Lightning",
    "Electric"
  ],
  [
    "Max Mindstorm",
    "Psychic"
  ],
  [
    "Max Ooze",
    "Poison"
  ],
  [
    "Max Overgrowth",
    "Grass"
  ],
  [
    "Max Phantasm",
    "Ghost"
  ],
  [
    "Max Quake",
    "Ground"
  ],
  [
    "Max Rockfall",
    "Rock"
  ],
  [
    "Max Starfall",
    "Fairy"
  ],
  [
    "Max Steelspike",
    "Steel"
  ],
  [
    "Max Strike",
    "Normal"
  ],
  [
    "Max Wyrmwind",
    "Dragon"
  ],
  [
    "Me First",
    "Normal"
  ],
  [
    "Meditate",
    "Psychic"
  ],
  [
    "Mega Drain",
    "Grass"
  ],
  [
    "Mega Punch",
    "Normal"
  ],
  [
    "Menacing Moonraze Maelstrom",
    "Ghost"
  ],
  [
    "Metal Claw",
    "Steel"
  ],
  [
    "Metal Sound",
    "Steel"
  ],
  [
    "Meteor Assault",
    "Fighting"
  ],
  [
    "Meteor Beam",
    "Rock"
  ],
  [
    "Metronome",
    "Normal"
  ],
  [
    "Mighty Cleave",
    "Rock"
  ],
  [
    "Milk Drink",
    "Normal"
  ],
  [
    "Mimic",
    "Normal"
  ],
  [
    "Mind Blown",
    "Fire"
  ],
  [
    "Mind Reader",
    "Normal"
  ],
  [
    "Miracle Eye",
    "Psychic"
  ],
  [
    "Mirror Move",
    "Flying"
  ],
  [
    "Mirror Shot",
    "Steel"
  ],
  [
    "Mist",
    "Ice"
  ],
  [
    "Mist Ball",
    "Psychic"
  ],
  [
    "Misty Terrain",
    "Fairy"
  ],
  [
    "Moongeist Beam",
    "Ghost"
  ],
  [
    "Mountain Gale",
    "Ice"
  ],
  [
    "Mud Bomb",
    "Ground"
  ],
  [
    "Mud Shot",
    "Ground"
  ],
  [
    "Mud Sport",
    "Ground"
  ],
  [
    "Mud-Slap",
    "Ground"
  ],
  [
    "Multi-Attack",
    "Normal"
  ],
  [
    "Mystical Power",
    "Psychic"
  ],
  [
    "Natural Gift",
    "Normal"
  ],
  [
    "Nature Power",
    "Normal"
  ],
  [
    "Nature’s Madness",
    "Fairy"
  ],
  [
    "Needle Arm",
    "Grass"
  ],
  [
    "Never-Ending Nightmare",
    "Ghost"
  ],
  [
    "Never-Ending Nightmare",
    "Ghost"
  ],
  [
    "Night Daze",
    "Dark"
  ],
  [
    "Nightmare",
    "Ghost"
  ],
  [
    "No Retreat",
    "Fighting"
  ],
  [
    "Noble Roar",
    "Normal"
  ],
  [
    "Noxious Torque",
    "Poison"
  ],
  [
    "Oblivion Wing",
    "Flying"
  ],
  [
    "Obstruct",
    "Dark"
  ],
  [
    "Oceanic Operetta",
    "Water"
  ],
  [
    "Octazooka",
    "Water"
  ],
  [
    "Octolock",
    "Fighting"
  ],
  [
    "Odor Sleuth",
    "Normal"
  ],
  [
    "Ominous Wind",
    "Ghost"
  ],
  [
    "Order Up",
    "Dragon"
  ],
  [
    "Origin Pulse",
    "Water"
  ],
  [
    "Overdrive",
    "Electric"
  ],
  [
    "Pay Day",
    "Normal"
  ],
  [
    "Peck",
    "Flying"
  ],
  [
    "Petal Blizzard",
    "Grass"
  ],
  [
    "Photon Geyser",
    "Psychic"
  ],
  [
    "Pika Papow",
    "Electric"
  ],
  [
    "Plasma Fists",
    "Electric"
  ],
  [
    "Play Nice",
    "Normal"
  ],
  [
    "Pluck",
    "Flying"
  ],
  [
    "Poison Fang",
    "Poison"
  ],
  [
    "Poison Gas",
    "Poison"
  ],
  [
    "Poison Powder",
    "Poison"
  ],
  [
    "Poison Sting",
    "Poison"
  ],
  [
    "Poison Tail",
    "Poison"
  ],
  [
    "Pound",
    "Normal"
  ],
  [
    "Powder",
    "Bug"
  ],
  [
    "Powder Snow",
    "Ice"
  ],
  [
    "Power Shift",
    "Normal"
  ],
  [
    "Power Split",
    "Psychic"
  ],
  [
    "Power Swap",
    "Psychic"
  ],
  [
    "Power Trick",
    "Psychic"
  ],
  [
    "Power Trip",
    "Dark"
  ],
  [
    "Power-Up Punch",
    "Fighting"
  ],
  [
    "Present",
    "Normal"
  ],
  [
    "Prismatic Laser",
    "Psychic"
  ],
  [
    "Psybeam",
    "Psychic"
  ],
  [
    "Psyblade",
    "Psychic"
  ],
  [
    "Psycho Boost",
    "Psychic"
  ],
  [
    "Psycho Shift",
    "Psychic"
  ],
  [
    "Psystrike",
    "Psychic"
  ],
  [
    "Psywave",
    "Psychic"
  ],
  [
    "Pulverizing Pancake",
    "Normal"
  ],
  [
    "Punishment",
    "Dark"
  ],
  [
    "Purify",
    "Poison"
  ],
  [
    "Pursuit",
    "Dark"
  ],
  [
    "Pyro Ball",
    "Fire"
  ],
  [
    "Rage Fist",
    "Ghost"
  ],
  [
    "Rapid Spin",
    "Normal"
  ],
  [
    "Razor Leaf",
    "Grass"
  ],
  [
    "Razor Wind",
    "Normal"
  ],
  [
    "Recycle",
    "Normal"
  ],
  [
    "Refresh",
    "Normal"
  ],
  [
    "Relic Song",
    "Normal"
  ],
  [
    "Retaliate",
    "Normal"
  ],
  [
    "Return",
    "Normal"
  ],
  [
    "Revelation Dance",
    "Normal"
  ],
  [
    "Revenge",
    "Fighting"
  ],
  [
    "Reversal",
    "Fighting"
  ],
  [
    "Revival Blessing",
    "Normal"
  ],
  [
    "Rising Voltage",
    "Electric"
  ],
  [
    "Roar of Time",
    "Dragon"
  ],
  [
    "Rock Climb",
    "Normal"
  ],
  [
    "Rock Smash",
    "Fighting"
  ],
  [
    "Rock Throw",
    "Rock"
  ],
  [
    "Rock Wrecker",
    "Rock"
  ],
  [
    "Role Play",
    "Psychic"
  ],
  [
    "Rolling Kick",
    "Fighting"
  ],
  [
    "Rollout",
    "Rock"
  ],
  [
    "Rototiller",
    "Ground"
  ],
  [
    "Ruination",
    "Dark"
  ],
  [
    "Sacred Fire",
    "Fire"
  ],
  [
    "Sand Attack",
    "Ground"
  ],
  [
    "Sandsear Storm",
    "Ground"
  ],
  [
    "Sappy Seed",
    "Grass"
  ],
  [
    "Savage Spin-Out",
    "Bug"
  ],
  [
    "Savage Spin-Out",
    "Bug"
  ],
  [
    "Scary Face",
    "Normal"
  ],
  [
    "Scratch",
    "Normal"
  ],
  [
    "Screech",
    "Normal"
  ],
  [
    "Searing Shot",
    "Fire"
  ],
  [
    "Searing Sunraze Smash",
    "Steel"
  ],
  [
    "Secret Power",
    "Normal"
  ],
  [
    "Secret Sword",
    "Fighting"
  ],
  [
    "Seed Flare",
    "Grass"
  ],
  [
    "Seismic Toss",
    "Fighting"
  ],
  [
    "Shadow Blast",
    "shadow"
  ],
  [
    "Shadow Blitz",
    "shadow"
  ],
  [
    "Shadow Bolt",
    "shadow"
  ],
  [
    "Shadow Bone",
    "Ghost"
  ],
  [
    "Shadow Break",
    "shadow"
  ],
  [
    "Shadow Chill",
    "shadow"
  ],
  [
    "Shadow Down",
    "shadow"
  ],
  [
    "Shadow End",
    "shadow"
  ],
  [
    "Shadow Fire",
    "shadow"
  ],
  [
    "Shadow Force",
    "Ghost"
  ],
  [
    "Shadow Half",
    "shadow"
  ],
  [
    "Shadow Hold",
    "shadow"
  ],
  [
    "Shadow Mist",
    "shadow"
  ],
  [
    "Shadow Panic",
    "shadow"
  ],
  [
    "Shadow Punch",
    "Ghost"
  ],
  [
    "Shadow Rave",
    "shadow"
  ],
  [
    "Shadow Rush",
    "shadow"
  ],
  [
    "Shadow Shed",
    "shadow"
  ],
  [
    "Shadow Sky",
    "shadow"
  ],
  [
    "Shadow Storm",
    "shadow"
  ],
  [
    "Shadow Wave",
    "shadow"
  ],
  [
    "Sharpen",
    "Normal"
  ],
  [
    "Shattered Psyche",
    "Psychic"
  ],
  [
    "Shattered Psyche",
    "Psychic"
  ],
  [
    "Shell Trap",
    "Fire"
  ],
  [
    "Shift Gear",
    "Steel"
  ],
  [
    "Shock Wave",
    "Electric"
  ],
  [
    "Shore Up",
    "Ground"
  ],
  [
    "Signal Beam",
    "Bug"
  ],
  [
    "Silk Trap",
    "Bug"
  ],
  [
    "Silver Wind",
    "Bug"
  ],
  [
    "Sing",
    "Normal"
  ],
  [
    "Sinister Arrow Raid",
    "Ghost"
  ],
  [
    "Sizzly Slide",
    "Fire"
  ],
  [
    "Sketch",
    "Normal"
  ],
  [
    "Skull Bash",
    "Normal"
  ],
  [
    "Sky Attack",
    "Flying"
  ],
  [
    "Sky Drop",
    "Flying"
  ],
  [
    "Sky Uppercut",
    "Fighting"
  ],
  [
    "Slam",
    "Normal"
  ],
  [
    "Slash",
    "Normal"
  ],
  [
    "Sludge",
    "Poison"
  ],
  [
    "Smart Strike",
    "Steel"
  ],
  [
    "Smelling Salts",
    "Normal"
  ],
  [
    "Smog",
    "Poison"
  ],
  [
    "Smokescreen",
    "Normal"
  ],
  [
    "Snap Trap",
    "Steel"
  ],
  [
    "Snatch",
    "Dark"
  ],
  [
    "Snipe Shot",
    "Water"
  ],
  [
    "Snore",
    "Normal"
  ],
  [
    "Soft-Boiled",
    "Normal"
  ],
  [
    "Sonic Boom",
    "Normal"
  ],
  [
    "Soul-Stealing 7-Star Strike",
    "Ghost"
  ],
  [
    "Spacial Rend",
    "Dragon"
  ],
  [
    "Spark",
    "Electric"
  ],
  [
    "Sparkling Aria",
    "Water"
  ],
  [
    "Sparkly Swirl",
    "Fairy"
  ],
  [
    "Spectral Thief",
    "Ghost"
  ],
  [
    "Spider Web",
    "Bug"
  ],
  [
    "Spike Cannon",
    "Normal"
  ],
  [
    "Spin Out",
    "Steel"
  ],
  [
    "Spirit Break",
    "Fairy"
  ],
  [
    "Spit Up",
    "Normal"
  ],
  [
    "Spite",
    "Ghost"
  ],
  [
    "Splash",
    "Normal"
  ],
  [
    "Splintered Stormshards",
    "Rock"
  ],
  [
    "Splishy Splash",
    "Water"
  ],
  [
    "Spore",
    "Grass"
  ],
  [
    "Spotlight",
    "Normal"
  ],
  [
    "Springtide Storm",
    "Fairy"
  ],
  [
    "Steam Eruption",
    "Water"
  ],
  [
    "Steamroller",
    "Bug"
  ],
  [
    "Steel Roller",
    "Steel"
  ],
  [
    "Sticky Web",
    "Bug"
  ],
  [
    "Stoked Sparksurfer",
    "Electric"
  ],
  [
    "Stomp",
    "Normal"
  ],
  [
    "Strength",
    "Normal"
  ],
  [
    "Struggle",
    "Normal"
  ],
  [
    "Stuff Cheeks",
    "Normal"
  ],
  [
    "Submission",
    "Fighting"
  ],
  [
    "Subzero Slammer",
    "Ice"
  ],
  [
    "Subzero Slammer",
    "Ice"
  ],
  [
    "Sunsteel Strike",
    "Steel"
  ],
  [
    "Supersonic",
    "Normal"
  ],
  [
    "Supersonic Skystrike",
    "Flying"
  ],
  [
    "Supersonic Skystrike",
    "Flying"
  ],
  [
    "Surging Strikes",
    "Water"
  ],
  [
    "Swallow",
    "Normal"
  ],
  [
    "Sweet Kiss",
    "Fairy"
  ],
  [
    "Sweet Scent",
    "Normal"
  ],
  [
    "Swift",
    "Normal"
  ],
  [
    "Switcheroo",
    "Dark"
  ],
  [
    "Synchronoise",
    "Psychic"
  ],
  [
    "Tachyon Cutter",
    "Steel"
  ],
  [
    "Tackle",
    "Normal"
  ],
  [
    "Tail Glow",
    "Bug"
  ],
  [
    "Tail Slap",
    "Normal"
  ],
  [
    "Tail Whip",
    "Normal"
  ],
  [
    "Take Down",
    "Normal"
  ],
  [
    "Take Heart",
    "Psychic"
  ],
  [
    "Tar Shot",
    "Rock"
  ],
  [
    "Tearful Look",
    "Normal"
  ],
  [
    "Teatime",
    "Normal"
  ],
  [
    "Techno Blast",
    "Normal"
  ],
  [
    "Tectonic Rage",
    "Ground"
  ],
  [
    "Tectonic Rage",
    "Ground"
  ],
  [
    "Teeter Dance",
    "Normal"
  ],
  [
    "Telekinesis",
    "Psychic"
  ],
  [
    "Teleport",
    "Psychic"
  ],
  [
    "Tera Blast",
    "Normal"
  ],
  [
    "Tera Starstorm",
    "Normal"
  ],
  [
    "Terrain Pulse",
    "Normal"
  ],
  [
    "Thousand Arrows",
    "Ground"
  ],
  [
    "Thousand Waves",
    "Ground"
  ],
  [
    "Thrash",
    "Normal"
  ],
  [
    "Thunder Cage",
    "Electric"
  ],
  [
    "Thunder Shock",
    "Electric"
  ],
  [
    "Thunderclap",
    "Electric"
  ],
  [
    "Thunderous Kick",
    "Fighting"
  ],
  [
    "Tidy Up",
    "Normal"
  ],
  [
    "Topsy-Turvy",
    "Dark"
  ],
  [
    "Torment",
    "Dark"
  ],
  [
    "Toxic Thread",
    "Poison"
  ],
  [
    "Tri Attack",
    "Normal"
  ],
  [
    "Trick-or-Treat",
    "Ghost"
  ],
  [
    "Triple Dive",
    "Water"
  ],
  [
    "Triple Kick",
    "Fighting"
  ],
  [
    "Trump Card",
    "Normal"
  ],
  [
    "Twineedle",
    "Bug"
  ],
  [
    "Twinkle Tackle",
    "Fairy"
  ],
  [
    "Twinkle Tackle",
    "Fairy"
  ],
  [
    "Twister",
    "Dragon"
  ],
  [
    "Uproar",
    "Normal"
  ],
  [
    "V-create",
    "Fire"
  ],
  [
    "Veevee Volley",
    "Normal"
  ],
  [
    "Venom Drench",
    "Poison"
  ],
  [
    "Victory Dance",
    "Fighting"
  ],
  [
    "Vine Whip",
    "Grass"
  ],
  [
    "Vise Grip",
    "Normal"
  ],
  [
    "Vital Throw",
    "Fighting"
  ],
  [
    "Wake-Up Slap",
    "Fighting"
  ],
  [
    "Water Gun",
    "Water"
  ],
  [
    "Water Pledge",
    "Water"
  ],
  [
    "Water Sport",
    "Water"
  ],
  [
    "Wicked Blow",
    "Dark"
  ],
  [
    "Wicked Torque",
    "Dark"
  ],
  [
    "Wildbolt Storm",
    "Electric"
  ],
  [
    "Wing Attack",
    "Flying"
  ],
  [
    "Withdraw",
    "Water"
  ],
  [
    "Work Up",
    "Normal"
  ],
  [
    "Wrap",
    "Normal"
  ],
  [
    "Wring Out",
    "Normal"
  ],
  [
    "Zing Zap",
    "Electric"
  ],
  [
    "Zippy Zap",
    "Electric"
  ]
].map(([name, type]) => [name.trim().toLowerCase(), type as PokemonTypeName])
);

export function formatMoveNumber(value: number | null): string {
  return value === null || value === undefined ? "--" : String(value);
}

export function formatMoveAccuracy(value: number | null): string {
  return value === null || value === undefined ? "--" : `${value}%`;
}

export function getMoveMeta(name: string): MoveMeta | undefined {
  return moveByName.get(name.trim().toLowerCase());
}

export function getMoveType(name: string): PokemonTypeName | undefined {
  return moveTypeByName.get(name.trim().toLowerCase());
}
