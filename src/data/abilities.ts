export type AbilityAsset = {
  slug: string;
  name: string;
  description: string;
  sourceUrl: string;
  isMegaAbility: boolean;
  pokemon: Array<{ slug: string; name: string; image?: string }>;
};

export const abilityAssets = [
  {
    "slug": "adaptability",
    "name": "Adaptability",
    "description": "Increases the Same Type Attack Bonus from *1.5 to *2.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/adaptability",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "basculegion-male",
        "name": "Basculegion (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/Fc8RTjatQyq1k5BVAi3JW.png"
      },
      {
        "slug": "gumshoos-totem",
        "name": "Gumshoos (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/baz3mzsykrChYo5qcytVs.png"
      },
      {
        "slug": "basculin-red-striped",
        "name": "Basculin (Red Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/1tsdWjFTPvhWmIsblQ8gB.png"
      },
      {
        "slug": "eevee-gmax",
        "name": "Eevee (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UkQne4hbz-08z_Yf1HZ7H.png"
      },
      {
        "slug": "glimmora-mega",
        "name": "Mega Glimmora",
        "image": "https://i.pokebase.app/pokemon-champions/FvrtzIO1ZovXlzUp6FVhy.png"
      },
      {
        "slug": "basculegion-female",
        "name": "Basculegion (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XgilENALPySbZX3jFD_eL.png"
      },
      {
        "slug": "basculin-white-striped",
        "name": "Basculin (White Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/V_lS9CQY2ee8HNpFMkZBS.png"
      },
      {
        "slug": "basculin-blue-striped",
        "name": "Basculin (Blue Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/WfM9IMhYHGG8SxoYebF_B.png"
      },
      {
        "slug": "lucario-mega",
        "name": "Mega Lucario",
        "image": "https://i.pokebase.app/pokemon-champions/9Y_N2XGNZHXV3TBxrYBI2.png"
      },
      {
        "slug": "eevee-starter",
        "name": "Eevee (Starter)",
        "image": "https://i.pokebase.app/pokemon-champions/_q3CCO0lH9uj98kmIDRAJ.png"
      }
    ]
  },
  {
    "slug": "aerilate",
    "name": "Aerilate",
    "description": "Normal-type moves become Flying-type moves. The power of those moves is boosted a little.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/aerilate",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "salamence-mega",
        "name": "Mega Salamence",
        "image": "https://i.pokebase.app/pokemon-champions/NwJYIOlU4PcSuSD7rCxzl.png"
      },
      {
        "slug": "pinsir-mega",
        "name": "Mega Pinsir",
        "image": "https://i.pokebase.app/pokemon-champions/vfsOox9TPotmef-YCGL-V.png"
      }
    ]
  },
  {
    "slug": "aftermath",
    "name": "Aftermath",
    "description": "Damages the attacker if it knocks out the Pokémon with a move that makes direct contact.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/aftermath",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "garbodor-gmax",
        "name": "Garbodor (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/6rtxQkpA4ovKghiep74Is.png"
      },
      {
        "slug": "electrode-hisui",
        "name": "Hisuian Electrode",
        "image": "https://i.pokebase.app/pokemon-champions/uDKwJumMM9hdbiT_f81Aa.png"
      },
      {
        "slug": "voltorb-hisui",
        "name": "Hisuian Voltorb",
        "image": "https://i.pokebase.app/pokemon-champions/kRD7nRUbXazYyd8RfrOjZ.png"
      },
      {
        "slug": "garbodor",
        "name": "Garbodor",
        "image": "https://i.pokebase.app/pokemon-champions/VKb7gnqnKnHOGwZwA2BFm.png"
      },
      {
        "slug": "trubbish",
        "name": "Trubbish",
        "image": "https://i.pokebase.app/pokemon-champions/9aJdR-4T33g1giu_xQY0e.png"
      },
      {
        "slug": "skuntank",
        "name": "Skuntank",
        "image": "https://i.pokebase.app/pokemon-champions/j3KC9OnrnebsGNZN8pkyi.png"
      },
      {
        "slug": "stunky",
        "name": "Stunky",
        "image": "https://i.pokebase.app/pokemon-champions/e7Qtxzc_zVJWD65IYLij4.png"
      },
      {
        "slug": "drifblim",
        "name": "Drifblim",
        "image": "https://i.pokebase.app/pokemon-champions/XdS8zJ7ALj8jxVjLgra81.png"
      },
      {
        "slug": "drifloon",
        "name": "Drifloon",
        "image": "https://i.pokebase.app/pokemon-champions/MFkqVitPs0JVDvg1iDhAo.png"
      },
      {
        "slug": "electrode",
        "name": "Electrode",
        "image": "https://i.pokebase.app/pokemon-champions/_J56d6MNHqK2tnfaGQWtV.png"
      }
    ]
  },
  {
    "slug": "air-lock",
    "name": "Air Lock",
    "description": "Eliminates the effects of weather.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/air-lock",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "rayquaza",
        "name": "Rayquaza",
        "image": "https://i.pokebase.app/pokemon-champions/1n-CmKVj_zGcz8WnuaCwj.png"
      }
    ]
  },
  {
    "slug": "analytic",
    "name": "Analytic",
    "description": "Boosts the power of the Pokémon's move if it is the last to act that turn.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/analytic",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "elgyem",
        "name": "Elgyem",
        "image": "https://i.pokebase.app/pokemon-champions/FxXwmjO8gkduHiszDOJEy.png"
      },
      {
        "slug": "beheeyem",
        "name": "Beheeyem",
        "image": "https://i.pokebase.app/pokemon-champions/TEQCiAJf3LfCEnlp_sH8b.png"
      },
      {
        "slug": "watchog",
        "name": "Watchog",
        "image": "https://i.pokebase.app/pokemon-champions/IyFcVME7W2WTU4lJvgEiw.png"
      },
      {
        "slug": "patrat",
        "name": "Patrat",
        "image": "https://i.pokebase.app/pokemon-champions/6YXHGP5oWQf3MHeFUSzOy.png"
      },
      {
        "slug": "porygon-z",
        "name": "Porygon-Z",
        "image": "https://i.pokebase.app/pokemon-champions/iTBbA60VeYSUnuwhptbMf.png"
      },
      {
        "slug": "magnezone",
        "name": "Magnezone",
        "image": "https://i.pokebase.app/pokemon-champions/AeXZoOwlIpqyxxPRaddRC.png"
      },
      {
        "slug": "porygon2",
        "name": "Porygon2",
        "image": "https://i.pokebase.app/pokemon-champions/KHaUxSidvdOfJLJDOiIsQ.png"
      },
      {
        "slug": "porygon",
        "name": "Porygon",
        "image": "https://i.pokebase.app/pokemon-champions/6MHiaAXaoZYbb8DcG_-QE.png"
      },
      {
        "slug": "starmie",
        "name": "Starmie",
        "image": "https://i.pokebase.app/pokemon-champions/vugYBbZ5Mk0HD_S6cqqbs.png"
      },
      {
        "slug": "staryu",
        "name": "Staryu",
        "image": "https://i.pokebase.app/pokemon-champions/-IThjzZUi_cncvCboU4-W.png"
      }
    ]
  },
  {
    "slug": "anger-point",
    "name": "Anger Point",
    "description": "The Pokémon is angered when it takes a critical hit, and that maxes its Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/anger-point",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tauros-paldea",
        "name": "Paldean Tauros - Combat Breed",
        "image": "https://i.pokebase.app/pokemon-champions/HGjPKaQ5jLkYNvjUspRzW.webp"
      },
      {
        "slug": "tauros-paldea-aqua-breed",
        "name": "Tauros (Paldea Aqua Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/N--wj-NbCiFgkEThn4aR2.png"
      },
      {
        "slug": "tauros-paldea-blaze-breed",
        "name": "Tauros (Paldea Blaze Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/RbvkCZj392q8SNozA5usx.png"
      },
      {
        "slug": "tauros-paldea-combat-breed",
        "name": "Tauros (Paldea Combat Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/YXd5iQnJSkKQTuxk6O8Zz.png"
      },
      {
        "slug": "crabominable",
        "name": "Crabominable",
        "image": "https://i.pokebase.app/pokemon-champions/aiVv_0ixddWd_t021WzSU.png"
      },
      {
        "slug": "crabrawler",
        "name": "Crabrawler",
        "image": "https://i.pokebase.app/pokemon-champions/0uYmqHjt7VWF48Wo5a1fv.png"
      },
      {
        "slug": "krookodile",
        "name": "Krookodile",
        "image": "https://i.pokebase.app/pokemon-champions/67dLAI9e5uuQfcy2tTCix.png"
      },
      {
        "slug": "krokorok",
        "name": "Krokorok",
        "image": "https://i.pokebase.app/pokemon-champions/eV5nzKVcyEBb6G_icKR28.png"
      },
      {
        "slug": "sandile",
        "name": "Sandile",
        "image": "https://i.pokebase.app/pokemon-champions/YIELyEMG0oAhfT26uHes1.png"
      },
      {
        "slug": "camerupt",
        "name": "Camerupt",
        "image": "https://i.pokebase.app/pokemon-champions/qQz0JfI6KTQ8g-niem3WJ.png"
      }
    ]
  },
  {
    "slug": "anger-shell",
    "name": "Anger Shell",
    "description": "When an attack causes its HP to drop to half or less, the Pokémon gets angry. This lowers its Defense and Sp. Def stats but boosts its Attack, Sp. Atk, and Speed stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/anger-shell",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "klawf",
        "name": "Klawf",
        "image": "https://i.pokebase.app/pokemon-champions/QJt8JYy3RatOmhYF1qSRW.png"
      }
    ]
  },
  {
    "slug": "anticipation",
    "name": "Anticipation",
    "description": "The Pokémon can sense an opposing Pokémon's dangerous moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/anticipation",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "hatterene-gmax",
        "name": "Hatterene (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/_1quBBtOc10KU7uZtQzMA.png"
      },
      {
        "slug": "wormadam-plant",
        "name": "Wormadam (Plant)",
        "image": "https://i.pokebase.app/pokemon-champions/_nSBbdsRWnVat7AlvGyY-.png"
      },
      {
        "slug": "eevee-gmax",
        "name": "Eevee (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UkQne4hbz-08z_Yf1HZ7H.png"
      },
      {
        "slug": "wormadam-trash",
        "name": "Wormadam (Trash)",
        "image": "https://i.pokebase.app/pokemon-champions/VA2lDAXSZOh4A5-oWu48m.png"
      },
      {
        "slug": "wormadam-sandy",
        "name": "Wormadam (Sandy)",
        "image": "https://i.pokebase.app/pokemon-champions/fKJaLfjRExfarGaRy3WST.png"
      },
      {
        "slug": "eevee-starter",
        "name": "Eevee (Starter)",
        "image": "https://i.pokebase.app/pokemon-champions/_q3CCO0lH9uj98kmIDRAJ.png"
      },
      {
        "slug": "rapidash-galar",
        "name": "Galarian Rapidash",
        "image": "https://i.pokebase.app/pokemon-champions/8ioDgWbdjepRACMLVL7GN.png"
      },
      {
        "slug": "ponyta-galar",
        "name": "Galarian Ponyta",
        "image": "https://i.pokebase.app/pokemon-champions/f0pS8CUdLF6sSgJ_-N9pg.png"
      },
      {
        "slug": "flittle",
        "name": "Flittle",
        "image": "https://i.pokebase.app/pokemon-champions/Z9jkXRn72O6ZYtIKdDY5Y.png"
      },
      {
        "slug": "hatterene",
        "name": "Hatterene",
        "image": "https://i.pokebase.app/pokemon-champions/1aATW1uYZQY1sVxZ1noHp.png"
      }
    ]
  },
  {
    "slug": "arena-trap",
    "name": "Arena Trap",
    "description": "Prevents opposing Pokémon from fleeing from battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/arena-trap",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "trapinch",
        "name": "Trapinch",
        "image": "https://i.pokebase.app/pokemon-champions/lhF0W-ATnCxCIvemJ6QCF.png"
      },
      {
        "slug": "diglett",
        "name": "Diglett",
        "image": "https://i.pokebase.app/pokemon-champions/1X6aaP8LbUvjEBkSL9cuh.png"
      },
      {
        "slug": "dugtrio",
        "name": "Dugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/MhCm-dtD01mWTLr1DMDbd.png"
      }
    ]
  },
  {
    "slug": "armor-tail",
    "name": "Armor Tail",
    "description": "The mysterious tail covering the Pokémon's head makes opponents unable to use priority moves against the Pokémon or its allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/armor-tail",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "farigiraf",
        "name": "Farigiraf",
        "image": "https://i.pokebase.app/pokemon-champions/Pn-pj8sZWVOzimonjrsr2.png"
      }
    ]
  },
  {
    "slug": "aroma-veil",
    "name": "Aroma Veil",
    "description": "Protects the Pokémon and its allies from effects that prevent the use of moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/aroma-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "alcremie-gmax",
        "name": "Alcremie (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/QjMaJ33CmD2op8Aedu5oa.png"
      },
      {
        "slug": "oinkologne-female",
        "name": "Oinkologne (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/KMv6irRQe04Ju8n7bH1eN.png"
      },
      {
        "slug": "dachsbun",
        "name": "Dachsbun",
        "image": "https://i.pokebase.app/pokemon-champions/nBb-afjIAJP2UE3r9sFwo.png"
      },
      {
        "slug": "lechonk",
        "name": "Lechonk",
        "image": "https://i.pokebase.app/pokemon-champions/18rwYDRmIV0NBTCjOebYD.png"
      },
      {
        "slug": "alcremie",
        "name": "Alcremie",
        "image": "https://i.pokebase.app/pokemon-champions/KuLWjjZwxNvwyV1nLItsU.png"
      },
      {
        "slug": "milcery",
        "name": "Milcery",
        "image": "https://i.pokebase.app/pokemon-champions/BkkdOSDYXVAHyiAoB2ijA.png"
      },
      {
        "slug": "aromatisse",
        "name": "Aromatisse",
        "image": "https://i.pokebase.app/pokemon-champions/fZIH1i_pR-tGkuzOzhjMz.png"
      },
      {
        "slug": "spritzee",
        "name": "Spritzee",
        "image": "https://i.pokebase.app/pokemon-champions/M8wgj6xltkCqN2U5LW42j.png"
      }
    ]
  },
  {
    "slug": "as-one-glastrier",
    "name": "As One",
    "description": "This Ability combines the effects of both Calyrex's Unnerve Ability and Glastrier's Chilling Neigh Ability.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/as-one-glastrier",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "calyrex-ice",
        "name": "Calyrex (Ice)",
        "image": "https://i.pokebase.app/pokemon-champions/6ZlhFqG2Qb0zNeyGk5qPD.png"
      }
    ]
  },
  {
    "slug": "as-one-spectrier",
    "name": "As One",
    "description": "This Ability combines the effects of both Calyrex's Unnerve Ability and Spectrier's Grim Neigh Ability.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/as-one-spectrier",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "calyrex-shadow",
        "name": "Calyrex (Shadow)",
        "image": "https://i.pokebase.app/pokemon-champions/H2pRlxWhEVQDJvWuH4PV3.png"
      }
    ]
  },
  {
    "slug": "aura-break",
    "name": "Aura Break",
    "description": "The effects of “Aura” Abilities are reversed to lower the power of affected moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/aura-break",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zygarde-50",
        "name": "Zygarde (50)",
        "image": "https://i.pokebase.app/pokemon-champions/5FQkEZrbA1Rx1cE4RQMaD.png"
      },
      {
        "slug": "zygarde-10",
        "name": "Zygarde (10)",
        "image": "https://i.pokebase.app/pokemon-champions/ymIvFqcu7u_yxM0nl34gX.png"
      },
      {
        "slug": "zygarde",
        "name": "Zygarde",
        "image": "https://i.pokebase.app/pokemon-champions/cgspstHeWCHa-xwewg2TE.png"
      }
    ]
  },
  {
    "slug": "bad-dreams",
    "name": "Bad Dreams",
    "description": "Damages opposing Pokémon that are asleep.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/bad-dreams",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "darkrai",
        "name": "Darkrai",
        "image": "https://i.pokebase.app/pokemon-champions/3G1Izzg0Jkd4ToBbYjI6_.png"
      }
    ]
  },
  {
    "slug": "ball-fetch",
    "name": "Ball Fetch",
    "description": "If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/ball-fetch",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "yamper",
        "name": "Yamper",
        "image": "https://i.pokebase.app/pokemon-champions/1ClYidUpIReZd-wxg4rnb.png"
      }
    ]
  },
  {
    "slug": "battery",
    "name": "Battery",
    "description": "Powers up ally Pokémon's special moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/battery",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "charjabug",
        "name": "Charjabug",
        "image": "https://i.pokebase.app/pokemon-champions/q3Npd66YNCLgGPbEmEbyt.png"
      }
    ]
  },
  {
    "slug": "battle-armor",
    "name": "Battle Armor",
    "description": "Hard armor protects the Pokémon from critical hits.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/battle-armor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "falinks",
        "name": "Falinks",
        "image": "https://i.pokebase.app/pokemon-champions/iNBu-6RGEopEb3P7JOjQ7.png"
      },
      {
        "slug": "perrserker",
        "name": "Perrserker",
        "image": "https://i.pokebase.app/pokemon-champions/04Ay0hhTU_CcqZdzPqMdE.png"
      },
      {
        "slug": "type-null",
        "name": "Type: Null",
        "image": "https://i.pokebase.app/pokemon-champions/v2UEhobhTx7Spca90I5A9.png"
      },
      {
        "slug": "drapion",
        "name": "Drapion",
        "image": "https://i.pokebase.app/pokemon-champions/D-7oRkmOiKxzau7Vot39P.png"
      },
      {
        "slug": "skorupi",
        "name": "Skorupi",
        "image": "https://i.pokebase.app/pokemon-champions/wNEswWFJK604Fe7cAykah.png"
      },
      {
        "slug": "armaldo",
        "name": "Armaldo",
        "image": "https://i.pokebase.app/pokemon-champions/IaAgQrRguv_mgNYqkLNYO.png"
      },
      {
        "slug": "anorith",
        "name": "Anorith",
        "image": "https://i.pokebase.app/pokemon-champions/PF-VjJCil5BXPxI3tmIhv.png"
      },
      {
        "slug": "kabutops",
        "name": "Kabutops",
        "image": "https://i.pokebase.app/pokemon-champions/jtFY2GN5gV0Le44ENb2P-.png"
      },
      {
        "slug": "kabuto",
        "name": "Kabuto",
        "image": "https://i.pokebase.app/pokemon-champions/MtnzYi2yV23ru1hBOfKv9.png"
      },
      {
        "slug": "marowak",
        "name": "Marowak",
        "image": "https://i.pokebase.app/pokemon-champions/OtXldM5YTLbXif88zZM0k.png"
      }
    ]
  },
  {
    "slug": "battle-bond",
    "name": "Battle Bond",
    "description": "When the Pokémon knocks out a target, its bond with its Trainer is strengthened, and its Attack, Sp. Atk, and Speed stats are boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/battle-bond",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "greninja-ash",
        "name": "Greninja (Ash)",
        "image": "https://i.pokebase.app/pokemon-champions/_3U8yfyTC3wkpt2JOG0fR.png"
      },
      {
        "slug": "greninja-battle-bond",
        "name": "Greninja (Battle Bond)",
        "image": "https://i.pokebase.app/pokemon-champions/PmqssYPfKSjX25sInJ53i.png"
      }
    ]
  },
  {
    "slug": "beads-of-ruin",
    "name": "Beads of Ruin",
    "description": "The power of the Pokémon's ruinous beads lowers the Sp. Def stats of all Pokémon except itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/beads-of-ruin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "chi-yu",
        "name": "Chi-Yu",
        "image": "https://i.pokebase.app/pokemon-champions/fnX36zA1lIWVK3LDrcCrP.png"
      }
    ]
  },
  {
    "slug": "beast-boost",
    "name": "Beast Boost",
    "description": "The Pokémon boosts its most proficient stat each time it knocks out a Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/beast-boost",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "stakataka",
        "name": "Stakataka",
        "image": "https://i.pokebase.app/pokemon-champions/x1FUGNWr_yTR9D0GpFyjY.png"
      },
      {
        "slug": "blacephalon",
        "name": "Blacephalon",
        "image": "https://i.pokebase.app/pokemon-champions/LZ1sLdrAv3OailzVTq3MK.png"
      },
      {
        "slug": "naganadel",
        "name": "Naganadel",
        "image": "https://i.pokebase.app/pokemon-champions/L8puPVswHVwl6XezPjR57.png"
      },
      {
        "slug": "poipole",
        "name": "Poipole",
        "image": "https://i.pokebase.app/pokemon-champions/XLnC6pWG_XMsDF4h5Bcqj.png"
      },
      {
        "slug": "guzzlord",
        "name": "Guzzlord",
        "image": "https://i.pokebase.app/pokemon-champions/CF2q7DqdwkLEDp8XPDvt6.png"
      },
      {
        "slug": "kartana",
        "name": "Kartana",
        "image": "https://i.pokebase.app/pokemon-champions/4_re2nSeQCCa3enWMXMwQ.png"
      },
      {
        "slug": "celesteela",
        "name": "Celesteela",
        "image": "https://i.pokebase.app/pokemon-champions/EzFU9cLEynsYGUnBsXKbd.png"
      },
      {
        "slug": "xurkitree",
        "name": "Xurkitree",
        "image": "https://i.pokebase.app/pokemon-champions/6c20G2p_xHOV5rNa_kLug.png"
      },
      {
        "slug": "pheromosa",
        "name": "Pheromosa",
        "image": "https://i.pokebase.app/pokemon-champions/Eb-2ipcrQpRGDqs5Zoohb.png"
      },
      {
        "slug": "buzzwole",
        "name": "Buzzwole",
        "image": "https://i.pokebase.app/pokemon-champions/oO-s4pT5_He8HUvMI8tbo.png"
      }
    ]
  },
  {
    "slug": "berserk",
    "name": "Berserk",
    "description": "Boosts the Pokémon's Sp. Atk stat when it takes a  hit that causes its HP to become half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/berserk",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "drampa-mega",
        "name": "Mega Drampa",
        "image": "https://i.pokebase.app/pokemon-champions/z4e4qy3cqt9WnpcWY2tbM.png"
      },
      {
        "slug": "moltres-galar",
        "name": "Galarian Moltres",
        "image": "https://i.pokebase.app/pokemon-champions/WV5tW1aE1G48WUzioMmU4.png"
      },
      {
        "slug": "drampa",
        "name": "Drampa",
        "image": "https://i.pokebase.app/pokemon-champions/Z2hCledPBDjy_4f1NdR9d.png"
      }
    ]
  },
  {
    "slug": "big-pecks",
    "name": "Big Pecks",
    "description": "Prevents the Pokémon from having its Defense stat lowered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/big-pecks",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "bombirdier",
        "name": "Bombirdier",
        "image": "https://i.pokebase.app/pokemon-champions/oEX_De4nsXgpe4AEnvBS5.png"
      },
      {
        "slug": "corvisquire",
        "name": "Corvisquire",
        "image": "https://i.pokebase.app/pokemon-champions/uY4-jVcDA9tPPJJXw-5NZ.png"
      },
      {
        "slug": "rookidee",
        "name": "Rookidee",
        "image": "https://i.pokebase.app/pokemon-champions/X74qwIHHy8squzWTrys4S.png"
      },
      {
        "slug": "fletchling",
        "name": "Fletchling",
        "image": "https://i.pokebase.app/pokemon-champions/pcKwngemqeLv0ebRy-apb.png"
      },
      {
        "slug": "mandibuzz",
        "name": "Mandibuzz",
        "image": "https://i.pokebase.app/pokemon-champions/e3kNAgj7QXKwsoDMcrx-C.png"
      },
      {
        "slug": "vullaby",
        "name": "Vullaby",
        "image": "https://i.pokebase.app/pokemon-champions/H7ULZPkBWDFU0DGDtjieK.png"
      },
      {
        "slug": "swanna",
        "name": "Swanna",
        "image": "https://i.pokebase.app/pokemon-champions/8wKD__Le9jfaMLAE7m_2N.png"
      },
      {
        "slug": "ducklett",
        "name": "Ducklett",
        "image": "https://i.pokebase.app/pokemon-champions/Q9oM3GSx3vFhThI8OI8i-.png"
      },
      {
        "slug": "unfezant",
        "name": "Unfezant",
        "image": "https://i.pokebase.app/pokemon-champions/kiNURNOhWGUYbCUxZDWHS.png"
      },
      {
        "slug": "tranquill",
        "name": "Tranquill",
        "image": "https://i.pokebase.app/pokemon-champions/SIjbSDMgKT0tw5Ez3kYHU.png"
      }
    ]
  },
  {
    "slug": "blaze",
    "name": "Blaze",
    "description": "Powers up Fire-type moves when the Pokémon's HP is low.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/blaze",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cinderace-gmax",
        "name": "Cinderace (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/OXUmb32kOwKxmfPqIRovR.png"
      },
      {
        "slug": "charizard-gmax",
        "name": "Charizard (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/5d75mJmVtBDPT6DStSDBh.png"
      },
      {
        "slug": "typhlosion-hisui",
        "name": "Hisuian Typhlosion",
        "image": "https://i.pokebase.app/pokemon-champions/gO4ASjSQ64D_hh4pt6AKu.png"
      },
      {
        "slug": "skeledirge",
        "name": "Skeledirge",
        "image": "https://i.pokebase.app/pokemon-champions/JEL9l7uqeWd2SECcOnL8B.png"
      },
      {
        "slug": "crocalor",
        "name": "Crocalor",
        "image": "https://i.pokebase.app/pokemon-champions/2xMRlqvU3TNvcbHtieAxy.png"
      },
      {
        "slug": "fuecoco",
        "name": "Fuecoco",
        "image": "https://i.pokebase.app/pokemon-champions/gRQZlFQiH7kFLdc2BZq_u.png"
      },
      {
        "slug": "cinderace",
        "name": "Cinderace",
        "image": "https://i.pokebase.app/pokemon-champions/_w0y-hkwWzrnHnoF-qli7.png"
      },
      {
        "slug": "raboot",
        "name": "Raboot",
        "image": "https://i.pokebase.app/pokemon-champions/mmiP0HKZEvNMOPqETLcmZ.png"
      },
      {
        "slug": "scorbunny",
        "name": "Scorbunny",
        "image": "https://i.pokebase.app/pokemon-champions/JiCft0wqOE3115Mqkw78p.png"
      },
      {
        "slug": "incineroar",
        "name": "Incineroar",
        "image": "https://i.pokebase.app/pokemon-champions/jfre2zZsVmcuIfNYD94We.png"
      }
    ]
  },
  {
    "slug": "bulletproof",
    "name": "Bulletproof",
    "description": "Protects the Pokémon from some ball and bomb moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/bulletproof",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "kommo-o-totem",
        "name": "Kommo-o (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/xjm3nSikaK350EksXFKKu.png"
      },
      {
        "slug": "chesnaught-mega",
        "name": "Mega Chesnaught",
        "image": "https://i.pokebase.app/pokemon-champions/p-iZFHQ76HvrlMGdttt9N.png"
      },
      {
        "slug": "ursaluna",
        "name": "Ursaluna",
        "image": "https://i.pokebase.app/pokemon-champions/UDtn4fgdYRrglGj2gFerP.png"
      },
      {
        "slug": "applin",
        "name": "Applin",
        "image": "https://i.pokebase.app/pokemon-champions/kgTW4hOK1cHwTa5pF39ya.png"
      },
      {
        "slug": "dubwool",
        "name": "Dubwool",
        "image": "https://i.pokebase.app/pokemon-champions/4CZy1xe2HYQ2Ihlki5vj0.png"
      },
      {
        "slug": "wooloo",
        "name": "Wooloo",
        "image": "https://i.pokebase.app/pokemon-champions/lu3RQf_vS1d9F1-XbggTO.png"
      },
      {
        "slug": "kommo-o",
        "name": "Kommo-o",
        "image": "https://i.pokebase.app/pokemon-champions/c_xuHZv3ob4p8UXgy_ErY.png"
      },
      {
        "slug": "hakamo-o",
        "name": "Hakamo-o",
        "image": "https://i.pokebase.app/pokemon-champions/6WGT8mT-W7IHYNGD6XeN_.png"
      },
      {
        "slug": "jangmo-o",
        "name": "Jangmo-o",
        "image": "https://i.pokebase.app/pokemon-champions/oyoZPtyYf-gfdWeEzFlIY.png"
      },
      {
        "slug": "chesnaught",
        "name": "Chesnaught",
        "image": "https://i.pokebase.app/pokemon-champions/X2i-PZTvqomg0OFV_ZqBx.png"
      }
    ]
  },
  {
    "slug": "cheek-pouch",
    "name": "Cheek Pouch",
    "description": "The Pokémon's HP is restored when it eats any Berry, in addition to the Berry's usual effect.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cheek-pouch",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "maushold-family-of-three",
        "name": "Maushold (Family Of Three)",
        "image": "https://i.pokebase.app/pokemon-champions/4zcWyNiUxwR6HIOcJGdF4.png"
      },
      {
        "slug": "maushold-family-of-four",
        "name": "Maushold (Family Of Four)",
        "image": "https://i.pokebase.app/pokemon-champions/X_dcsimlW9kCLywwvV3Bo.png"
      },
      {
        "slug": "maushold",
        "name": "Maushold",
        "image": "https://i.pokebase.app/pokemon-champions/D4mo4Ai5GUgqaZZ_bGvUO.png"
      },
      {
        "slug": "greedent",
        "name": "Greedent",
        "image": "https://i.pokebase.app/pokemon-champions/dZpaR8u379KEF9n93-n5T.png"
      },
      {
        "slug": "skwovet",
        "name": "Skwovet",
        "image": "https://i.pokebase.app/pokemon-champions/cOMBhBKHFe15c39T6ZdEl.png"
      },
      {
        "slug": "dedenne",
        "name": "Dedenne",
        "image": "https://i.pokebase.app/pokemon-champions/kCtKyWidckSKTW6g8DMic.png"
      },
      {
        "slug": "bunnelby",
        "name": "Bunnelby",
        "image": "https://i.pokebase.app/pokemon-champions/tyYwjpKt0ajSnhrPIl5La.png"
      },
      {
        "slug": "diggersby",
        "name": "Diggersby",
        "image": "https://i.pokebase.app/pokemon-champions/_hL_o5Yq1jBQ1yLbtd_A4.png"
      }
    ]
  },
  {
    "slug": "chilling-neigh",
    "name": "Chilling Neigh",
    "description": "When the Pokémon knocks out a target, it utters a chilling neigh, which boosts its Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/chilling-neigh",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "glastrier",
        "name": "Glastrier",
        "image": "https://i.pokebase.app/pokemon-champions/1Zg98dj5zkU_e8MFWx5kH.png"
      }
    ]
  },
  {
    "slug": "chlorophyll",
    "name": "Chlorophyll",
    "description": "Boosts the Pokémon's Speed stat in harsh sunlight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/chlorophyll",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "venusaur-gmax",
        "name": "Venusaur (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/phoEsrBhh4ZkjpSnU5Mjf.png"
      },
      {
        "slug": "lilligant-hisui",
        "name": "Hisuian Lilligant",
        "image": "https://i.pokebase.app/pokemon-champions/RcGlI5dJmuF5URvrVVff-.png"
      },
      {
        "slug": "scovillain",
        "name": "Scovillain",
        "image": "https://i.pokebase.app/pokemon-champions/kb-xBLBrW5_K9i8Z5BWkJ.png"
      },
      {
        "slug": "capsakid",
        "name": "Capsakid",
        "image": "https://i.pokebase.app/pokemon-champions/eYJpijCcRUxwRiaoZKlA_.png"
      },
      {
        "slug": "sawsbuck",
        "name": "Sawsbuck",
        "image": "https://i.pokebase.app/pokemon-champions/2VkCQk9pxYAUu9wYVQQWG.png"
      },
      {
        "slug": "deerling",
        "name": "Deerling",
        "image": "https://i.pokebase.app/pokemon-champions/q0VzoKHgeEmtRkBn-brMA.png"
      },
      {
        "slug": "maractus",
        "name": "Maractus",
        "image": "https://i.pokebase.app/pokemon-champions/kvT0hmNq_1Ure-EbvWZiB.png"
      },
      {
        "slug": "lilligant",
        "name": "Lilligant",
        "image": "https://i.pokebase.app/pokemon-champions/1tzcwAchhbm9Z6CDwaIAM.png"
      },
      {
        "slug": "petilil",
        "name": "Petilil",
        "image": "https://i.pokebase.app/pokemon-champions/rU-fqCfvB2qysmowVSf9t.png"
      },
      {
        "slug": "whimsicott",
        "name": "Whimsicott",
        "image": "https://i.pokebase.app/pokemon-champions/RJ7QULrl4FOGabfgbLZ9Q.png"
      }
    ]
  },
  {
    "slug": "clear-body",
    "name": "Clear Body",
    "description": "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/clear-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "garganacl",
        "name": "Garganacl",
        "image": "https://i.pokebase.app/pokemon-champions/Zwm9dsBA-R5NTGoNu2e_X.png"
      },
      {
        "slug": "naclstack",
        "name": "Naclstack",
        "image": "https://i.pokebase.app/pokemon-champions/21260fFbjB4nb906ZlHKl.png"
      },
      {
        "slug": "nacli",
        "name": "Nacli",
        "image": "https://i.pokebase.app/pokemon-champions/PYPmXCsYsR4xNYfy1w5Ri.png"
      },
      {
        "slug": "dragapult",
        "name": "Dragapult",
        "image": "https://i.pokebase.app/pokemon-champions/TXPCpylGX5Je1ew_1Vd2f.png"
      },
      {
        "slug": "drakloak",
        "name": "Drakloak",
        "image": "https://i.pokebase.app/pokemon-champions/nd8eXEaN5q9ckbRywKg69.png"
      },
      {
        "slug": "dreepy",
        "name": "Dreepy",
        "image": "https://i.pokebase.app/pokemon-champions/KD2RkXeXNJb0FUAwLJkMY.png"
      },
      {
        "slug": "diancie",
        "name": "Diancie",
        "image": "https://i.pokebase.app/pokemon-champions/spauBhNDmHI-Dg0ej2sxf.png"
      },
      {
        "slug": "carbink",
        "name": "Carbink",
        "image": "https://i.pokebase.app/pokemon-champions/x1XHSAdla0VEVPwqr4coL.png"
      },
      {
        "slug": "klinklang",
        "name": "Klinklang",
        "image": "https://i.pokebase.app/pokemon-champions/54VdBP1iVIVC7s_83hrwh.png"
      },
      {
        "slug": "klang",
        "name": "Klang",
        "image": "https://i.pokebase.app/pokemon-champions/oTG55SBu3KNiPDiUuaV1P.png"
      }
    ]
  },
  {
    "slug": "cloud-nine",
    "name": "Cloud Nine",
    "description": "Eliminates the effects of weather.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cloud-nine",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "drampa",
        "name": "Drampa",
        "image": "https://i.pokebase.app/pokemon-champions/Z2hCledPBDjy_4f1NdR9d.png"
      },
      {
        "slug": "lickilicky",
        "name": "Lickilicky",
        "image": "https://i.pokebase.app/pokemon-champions/3DCob5mDRszUcwhmeCllt.png"
      },
      {
        "slug": "altaria",
        "name": "Altaria",
        "image": "https://i.pokebase.app/pokemon-champions/p7xULNqe2LVI665yWm7Xp.png"
      },
      {
        "slug": "swablu",
        "name": "Swablu",
        "image": "https://i.pokebase.app/pokemon-champions/6ClLtEfUMIGqwZQuUr7v-.png"
      },
      {
        "slug": "lickitung",
        "name": "Lickitung",
        "image": "https://i.pokebase.app/pokemon-champions/aRPF021hsBoSmGPKSHd8P.png"
      },
      {
        "slug": "psyduck",
        "name": "Psyduck",
        "image": "https://i.pokebase.app/pokemon-champions/jsMzBIsSZ-Lb1B1kO2s_a.png"
      },
      {
        "slug": "golduck",
        "name": "Golduck",
        "image": "https://i.pokebase.app/pokemon-champions/KQpPBI4QQqfJRa-r6Fc4y.png"
      }
    ]
  },
  {
    "slug": "color-change",
    "name": "Color Change",
    "description": "The Pokémon’s type becomes the type of the move used on it.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/color-change",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kecleon",
        "name": "Kecleon",
        "image": "https://i.pokebase.app/pokemon-champions/dGjOxN3VO2JI6LzVen5mD.png"
      }
    ]
  },
  {
    "slug": "comatose",
    "name": "Comatose",
    "description": "The Pokémon is always drowsing and will never wake up. It can attack while in its sleeping state.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/comatose",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "komala",
        "name": "Komala",
        "image": "https://i.pokebase.app/pokemon-champions/pzuVcWl7keHZS0mbjOgtd.png"
      }
    ]
  },
  {
    "slug": "commander",
    "name": "Commander",
    "description": "When the Pokémon enters a battle, it goes inside the mouth of an ally Dondozo if one is on the field. The Pokémon then issues commands from there.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/commander",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tatsugiri-stretchy",
        "name": "Tatsugiri (Stretchy)",
        "image": "https://i.pokebase.app/pokemon-champions/wTx0Oo98r8BEv86_SbuB3.png"
      },
      {
        "slug": "tatsugiri-droopy",
        "name": "Tatsugiri (Droopy)",
        "image": "https://i.pokebase.app/pokemon-champions/m3XyJxUc2rgo7eOuvpi4I.png"
      },
      {
        "slug": "tatsugiri-curly",
        "name": "Tatsugiri (Curly)",
        "image": "https://i.pokebase.app/pokemon-champions/ENgaRQOE-dvMeeE10v5Bi.png"
      },
      {
        "slug": "tatsugiri",
        "name": "Tatsugiri",
        "image": "https://i.pokebase.app/pokemon-champions/dRsm1RyQOJacPHSlmg-Y2.png"
      }
    ]
  },
  {
    "slug": "competitive",
    "name": "Competitive",
    "description": "Boosts the Pokémon's Sp. Atk stat sharply when its stats are lowered by an opposing Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/competitive",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "meowstic-female",
        "name": "Meowstic (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XsEqQU3DPk5SEcW4PaWQL.png"
      },
      {
        "slug": "articuno-galar",
        "name": "Galarian Articuno",
        "image": "https://i.pokebase.app/pokemon-champions/QQjcvFdBSXQ73tRpCRvT8.png"
      },
      {
        "slug": "kilowattrel",
        "name": "Kilowattrel",
        "image": "https://i.pokebase.app/pokemon-champions/jfiw-2PaAb_h523ty4njW.png"
      },
      {
        "slug": "wattrel",
        "name": "Wattrel",
        "image": "https://i.pokebase.app/pokemon-champions/Mdi6-xl-1et1je8Da-VGM.png"
      },
      {
        "slug": "boltund",
        "name": "Boltund",
        "image": "https://i.pokebase.app/pokemon-champions/BUj5DTe6k6QiequjFNcby.png"
      },
      {
        "slug": "meowstic",
        "name": "Meowstic",
        "image": "https://i.pokebase.app/pokemon-champions/4p40QadTeio3YQYDadFhP.png"
      },
      {
        "slug": "gothitelle",
        "name": "Gothitelle",
        "image": "https://i.pokebase.app/pokemon-champions/20f_r7n9r5Z_QlDCSGUfu.png"
      },
      {
        "slug": "gothorita",
        "name": "Gothorita",
        "image": "https://i.pokebase.app/pokemon-champions/ZMF7OE-fZZVgdhI9H9DMk.png"
      },
      {
        "slug": "gothita",
        "name": "Gothita",
        "image": "https://i.pokebase.app/pokemon-champions/4q_h64Ih_pdrhMTYFCNvP.png"
      },
      {
        "slug": "prinplup",
        "name": "Prinplup",
        "image": "https://i.pokebase.app/pokemon-champions/jS0jsnA8xyvGbkpStmOAI.png"
      }
    ]
  },
  {
    "slug": "compound-eyes",
    "name": "Compound Eyes",
    "description": "The Pokémon's compound eyes boost its accuracy.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/compound-eyes",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "butterfree-gmax",
        "name": "Butterfree (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/n4qn0HF9Q6ZWZAaETBWZk.png"
      },
      {
        "slug": "rellor",
        "name": "Rellor",
        "image": "https://i.pokebase.app/pokemon-champions/kQAlHlPNvVdQjdcmjBoPn.png"
      },
      {
        "slug": "dottler",
        "name": "Dottler",
        "image": "https://i.pokebase.app/pokemon-champions/_uB7DVOdToNO29dVEsXuX.png"
      },
      {
        "slug": "blipbug",
        "name": "Blipbug",
        "image": "https://i.pokebase.app/pokemon-champions/We2pdDZyE2XEos8eOVueU.png"
      },
      {
        "slug": "scatterbug",
        "name": "Scatterbug",
        "image": "https://i.pokebase.app/pokemon-champions/p_1HSAaCayKfNXWjf2-H0.png"
      },
      {
        "slug": "galvantula",
        "name": "Galvantula",
        "image": "https://i.pokebase.app/pokemon-champions/1_3y8IB8qejg4czsjypaT.png"
      },
      {
        "slug": "joltik",
        "name": "Joltik",
        "image": "https://i.pokebase.app/pokemon-champions/ASZLTptggOkr72n4OEXad.png"
      },
      {
        "slug": "nincada",
        "name": "Nincada",
        "image": "https://i.pokebase.app/pokemon-champions/4pPzvzQxM-JZf7rnmUXsn.png"
      },
      {
        "slug": "dustox",
        "name": "Dustox",
        "image": "https://i.pokebase.app/pokemon-champions/jPJ9Zi-ROcXciHZLxdqPJ.png"
      },
      {
        "slug": "yanma",
        "name": "Yanma",
        "image": "https://i.pokebase.app/pokemon-champions/I7-7ZGdz32b7-tNYpSHuP.png"
      }
    ]
  },
  {
    "slug": "contrary",
    "name": "Contrary",
    "description": "Reverses any stat changes affecting the Pokémon so that attempts to boost its stats instead lower them—and attempts to lower its stats will boost them.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/contrary",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "enamorus-incarnate",
        "name": "Enamorus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/QrkuGTURVrc20jApsN1NO.png"
      },
      {
        "slug": "lurantis-totem",
        "name": "Lurantis (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/tZUaR7DuaDhtV0L9_jakd.png"
      },
      {
        "slug": "enamorus",
        "name": "Enamorus",
        "image": "https://i.pokebase.app/pokemon-champions/mqjTflRVHy5ZckzF1Py_g.png"
      },
      {
        "slug": "lurantis",
        "name": "Lurantis",
        "image": "https://i.pokebase.app/pokemon-champions/TfAaK_00bfLPHxdTkzBZ9.png"
      },
      {
        "slug": "fomantis",
        "name": "Fomantis",
        "image": "https://i.pokebase.app/pokemon-champions/Ke4KSwM8eGGKepKapPLUj.png"
      },
      {
        "slug": "malamar",
        "name": "Malamar",
        "image": "https://i.pokebase.app/pokemon-champions/0pXTCuuEQUZfwfRNFqyMh.png"
      },
      {
        "slug": "inkay",
        "name": "Inkay",
        "image": "https://i.pokebase.app/pokemon-champions/bC6OpkvqZDEHKVn_kzgXQ.png"
      },
      {
        "slug": "serperior",
        "name": "Serperior",
        "image": "https://i.pokebase.app/pokemon-champions/xckW7PhAOt3qQ3J_52f1J.png"
      },
      {
        "slug": "servine",
        "name": "Servine",
        "image": "https://i.pokebase.app/pokemon-champions/4L4-H-ue6Lvaqsz55BCiN.png"
      },
      {
        "slug": "snivy",
        "name": "Snivy",
        "image": "https://i.pokebase.app/pokemon-champions/I8jnzx3EoDuqHRK8pi8KD.png"
      }
    ]
  },
  {
    "slug": "corrosion",
    "name": "Corrosion",
    "description": "The Pokémon can poison the target even if it's a Steel or Poison type.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/corrosion",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "salazzle-totem",
        "name": "Salazzle (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/kwZunzfon_MEul4qj94ln.png"
      },
      {
        "slug": "glimmora",
        "name": "Glimmora",
        "image": "https://i.pokebase.app/pokemon-champions/KAT_mkYkK6YTH8UrcQreb.png"
      },
      {
        "slug": "glimmet",
        "name": "Glimmet",
        "image": "https://i.pokebase.app/pokemon-champions/lyArtf3lkIB3F0qx7Dfl1.png"
      },
      {
        "slug": "salazzle",
        "name": "Salazzle",
        "image": "https://i.pokebase.app/pokemon-champions/7QkKXxu3i_NntGKRcKgLX.png"
      },
      {
        "slug": "salandit",
        "name": "Salandit",
        "image": "https://i.pokebase.app/pokemon-champions/1XFGtTghYGcuVqnIDHQFC.png"
      }
    ]
  },
  {
    "slug": "costar",
    "name": "Costar",
    "description": "When the Pokémon enters a battle, it copies an ally's stat changes.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/costar",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "flamigo",
        "name": "Flamigo",
        "image": "https://i.pokebase.app/pokemon-champions/xmeyWBvswUGrql8gzE2fa.png"
      }
    ]
  },
  {
    "slug": "cotton-down",
    "name": "Cotton Down",
    "description": "When the Pokémon is hit by an attack, it scatters cotton fluff around and lowers the Speed stat of all Pokémon except itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cotton-down",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "eldegoss",
        "name": "Eldegoss",
        "image": "https://i.pokebase.app/pokemon-champions/ugQFY6PKgYMtipx5PVWKv.png"
      },
      {
        "slug": "gossifleur",
        "name": "Gossifleur",
        "image": "https://i.pokebase.app/pokemon-champions/ch_1XL3zIQS6954QTZ2cH.png"
      }
    ]
  },
  {
    "slug": "cud-chew",
    "name": "Cud Chew",
    "description": "When the Pokémon eats a Berry, it will regurgitate that Berry at the end of the next turn and eat it one more time.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cud-chew",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tauros-paldea",
        "name": "Paldean Tauros - Combat Breed",
        "image": "https://i.pokebase.app/pokemon-champions/HGjPKaQ5jLkYNvjUspRzW.webp"
      },
      {
        "slug": "tauros-paldea-aqua-breed",
        "name": "Tauros (Paldea Aqua Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/N--wj-NbCiFgkEThn4aR2.png"
      },
      {
        "slug": "tauros-paldea-blaze-breed",
        "name": "Tauros (Paldea Blaze Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/RbvkCZj392q8SNozA5usx.png"
      },
      {
        "slug": "tauros-paldea-combat-breed",
        "name": "Tauros (Paldea Combat Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/YXd5iQnJSkKQTuxk6O8Zz.png"
      },
      {
        "slug": "farigiraf",
        "name": "Farigiraf",
        "image": "https://i.pokebase.app/pokemon-champions/Pn-pj8sZWVOzimonjrsr2.png"
      }
    ]
  },
  {
    "slug": "curious-medicine",
    "name": "Curious Medicine",
    "description": "When the Pokémon enters a battle, it scatters medicine from its shell, which removes all stat changes from allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/curious-medicine",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "slowking-galar",
        "name": "Galarian Slowking",
        "image": "https://i.pokebase.app/pokemon-champions/ELTH6aa9ifmogCVFPPCq2.png"
      }
    ]
  },
  {
    "slug": "cursed-body",
    "name": "Cursed Body",
    "description": "May disable a move that has dealt damage to the Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cursed-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "frillish-male",
        "name": "Frillish (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/BJZz4r-5nLDh24riNxod1.png"
      },
      {
        "slug": "jellicent-male",
        "name": "Jellicent (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/ulpfE2X0Q8P6T1r9hj_Vb.png"
      },
      {
        "slug": "marowak-totem",
        "name": "Marowak (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ScygXUwGhTejnavpjAPSA.png"
      },
      {
        "slug": "gengar-gmax",
        "name": "Gengar (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/T0JOCwIrzkKhTRkzi1YEj.png"
      },
      {
        "slug": "corsola-galar",
        "name": "Galarian Corsola",
        "image": "https://i.pokebase.app/pokemon-champions/xFHh15IZp5VE6eFA8ZAgu.png"
      },
      {
        "slug": "marowak-alola",
        "name": "Alolan Marowak",
        "image": "https://i.pokebase.app/pokemon-champions/fNoYd9MInKPuDlRTZpdgA.png"
      },
      {
        "slug": "dragapult",
        "name": "Dragapult",
        "image": "https://i.pokebase.app/pokemon-champions/TXPCpylGX5Je1ew_1Vd2f.png"
      },
      {
        "slug": "drakloak",
        "name": "Drakloak",
        "image": "https://i.pokebase.app/pokemon-champions/nd8eXEaN5q9ckbRywKg69.png"
      },
      {
        "slug": "dreepy",
        "name": "Dreepy",
        "image": "https://i.pokebase.app/pokemon-champions/KD2RkXeXNJb0FUAwLJkMY.png"
      },
      {
        "slug": "polteageist",
        "name": "Polteageist",
        "image": "https://i.pokebase.app/pokemon-champions/-wSbTSUjqGI96SkgXO3Bt.png"
      }
    ]
  },
  {
    "slug": "cute-charm",
    "name": "Cute Charm",
    "description": "The Pokémon may infatuate attackers that make direct contact with it.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/cute-charm",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "enamorus-incarnate",
        "name": "Enamorus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/QrkuGTURVrc20jApsN1NO.png"
      },
      {
        "slug": "enamorus",
        "name": "Enamorus",
        "image": "https://i.pokebase.app/pokemon-champions/mqjTflRVHy5ZckzF1Py_g.png"
      },
      {
        "slug": "stufful",
        "name": "Stufful",
        "image": "https://i.pokebase.app/pokemon-champions/mETOy78U4UbtCyk_wGZ_T.png"
      },
      {
        "slug": "sylveon",
        "name": "Sylveon",
        "image": "https://i.pokebase.app/pokemon-champions/7qB1XeDSGUQDraUmo5Xyo.png"
      },
      {
        "slug": "minccino",
        "name": "Minccino",
        "image": "https://i.pokebase.app/pokemon-champions/9Lyb7m-_9nezs92ix3qxX.png"
      },
      {
        "slug": "cinccino",
        "name": "Cinccino",
        "image": "https://i.pokebase.app/pokemon-champions/yB9NUlsYOtu0IYLWDe7rI.png"
      },
      {
        "slug": "lopunny",
        "name": "Lopunny",
        "image": "https://i.pokebase.app/pokemon-champions/NES-bQqDD0U8MosDYi8vv.png"
      },
      {
        "slug": "milotic",
        "name": "Milotic",
        "image": "https://i.pokebase.app/pokemon-champions/vao1WKN72l2FkvnKUp4tq.png"
      },
      {
        "slug": "delcatty",
        "name": "Delcatty",
        "image": "https://i.pokebase.app/pokemon-champions/1N_3vmK6s8Kd9nCiAKanp.png"
      },
      {
        "slug": "skitty",
        "name": "Skitty",
        "image": "https://i.pokebase.app/pokemon-champions/Gog-tirGfcE7NkAftU_d_.png"
      }
    ]
  },
  {
    "slug": "damp",
    "name": "Damp",
    "description": "The Pokémon dampens its surroundings, preventing all Pokémon from using explosive moves such as Self-Destruct.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/damp",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "frillish-male",
        "name": "Frillish (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/BJZz4r-5nLDh24riNxod1.png"
      },
      {
        "slug": "jellicent-male",
        "name": "Jellicent (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/ulpfE2X0Q8P6T1r9hj_Vb.png"
      },
      {
        "slug": "bellibolt",
        "name": "Bellibolt",
        "image": "https://i.pokebase.app/pokemon-champions/e0x-ATub64o1nLWllpmlL.png"
      },
      {
        "slug": "tadbulb",
        "name": "Tadbulb",
        "image": "https://i.pokebase.app/pokemon-champions/JnJ0qWBOXMBsTfJRApst8.png"
      },
      {
        "slug": "jellicent",
        "name": "Jellicent",
        "image": "https://i.pokebase.app/pokemon-champions/qyoX8I7aHhMbCe-W3vPOq.png"
      },
      {
        "slug": "frillish",
        "name": "Frillish",
        "image": "https://i.pokebase.app/pokemon-champions/ORXBOspSreVqZHDf7ohdi.png"
      },
      {
        "slug": "swampert",
        "name": "Swampert",
        "image": "https://i.pokebase.app/pokemon-champions/JCBo_9obc2cQgxDqw9iBG.png"
      },
      {
        "slug": "marshtomp",
        "name": "Marshtomp",
        "image": "https://i.pokebase.app/pokemon-champions/HRrM8k-uh_uswbylYpwSM.png"
      },
      {
        "slug": "mudkip",
        "name": "Mudkip",
        "image": "https://i.pokebase.app/pokemon-champions/sI2LY61UE_oupAEY-xtYz.png"
      },
      {
        "slug": "kingdra",
        "name": "Kingdra",
        "image": "https://i.pokebase.app/pokemon-champions/ntft29ieJuFGR1UtVOZ8a.png"
      }
    ]
  },
  {
    "slug": "dancer",
    "name": "Dancer",
    "description": "Whenever a dance move is used in battle, the Pokémon will copy the user to immediately perform that dance move itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dancer",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "oricorio-baile",
        "name": "Oricorio (Baile)",
        "image": "https://i.pokebase.app/pokemon-champions/-GLX48TsWbx74wrLFNvBk.png"
      },
      {
        "slug": "oricorio-sensu",
        "name": "Oricorio (Sensu)",
        "image": "https://i.pokebase.app/pokemon-champions/_29rg9XZwiK-e7tpVr8g4.png"
      },
      {
        "slug": "oricorio-pau",
        "name": "Oricorio (Pau)",
        "image": "https://i.pokebase.app/pokemon-champions/4Br7Jqe6SpboxjAVtrZWi.png"
      },
      {
        "slug": "oricorio-pom-pom",
        "name": "Oricorio (Pom Pom)",
        "image": "https://i.pokebase.app/pokemon-champions/xlk9qqjn0MXszJP2n4dvD.png"
      },
      {
        "slug": "oricorio",
        "name": "Oricorio",
        "image": "https://i.pokebase.app/pokemon-champions/pZ3eUGx-SuGy3S6Y1auUw.png"
      }
    ]
  },
  {
    "slug": "dark-aura",
    "name": "Dark Aura",
    "description": "Powers up each Pokémon’s Dark-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dark-aura",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "yveltal",
        "name": "Yveltal",
        "image": "https://i.pokebase.app/pokemon-champions/9KYBN771PpGGWs4rEwsk0.png"
      }
    ]
  },
  {
    "slug": "dauntless-shield",
    "name": "Dauntless Shield",
    "description": "Boosts the Pokémon’s Defense stat the first time the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dauntless-shield",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zamazenta-crowned",
        "name": "Zamazenta (Crowned)",
        "image": "https://i.pokebase.app/pokemon-champions/KssNajolHNV_21vTvgfM8.png"
      },
      {
        "slug": "zamazenta",
        "name": "Zamazenta",
        "image": "https://i.pokebase.app/pokemon-champions/6htG3iBVF7Rid1UzRhvTt.png"
      }
    ]
  },
  {
    "slug": "dazzling",
    "name": "Dazzling",
    "description": "The Pokémon dazzles its opponents, making them unable to use priority moves against the Pokémon or its allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dazzling",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "bruxish",
        "name": "Bruxish",
        "image": "https://i.pokebase.app/pokemon-champions/_Xl8hcosqNJKTlCWAr-KU.png"
      }
    ]
  },
  {
    "slug": "defeatist",
    "name": "Defeatist",
    "description": "Halves the Pokémon’s Attack and Sp. Atk stats when its HP becomes half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/defeatist",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "archeops",
        "name": "Archeops",
        "image": "https://i.pokebase.app/pokemon-champions/4DvTk_uxOSJKnFlsuDwpd.png"
      },
      {
        "slug": "archen",
        "name": "Archen",
        "image": "https://i.pokebase.app/pokemon-champions/YsoXKogEsR7DCnWoPL_wg.png"
      }
    ]
  },
  {
    "slug": "defiant",
    "name": "Defiant",
    "description": "If the Pokémon has any stat lowered by an opposing Pokémon, its Attack stat will be boosted sharply.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/defiant",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "thundurus-incarnate",
        "name": "Thundurus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/bCR1VvvQRgBd-6XXKO5ir.png"
      },
      {
        "slug": "tornadus-incarnate",
        "name": "Tornadus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/1_sNQ1LGw8WeBobHFI88x.png"
      },
      {
        "slug": "zapdos-galar",
        "name": "Galarian Zapdos",
        "image": "https://i.pokebase.app/pokemon-champions/-R6h9aIJ20Hvw8rpkBCpk.png"
      },
      {
        "slug": "ogerpon",
        "name": "Ogerpon",
        "image": "https://i.pokebase.app/pokemon-champions/2jDfzkBa2RkciUKmstp-j.png"
      },
      {
        "slug": "kingambit",
        "name": "Kingambit",
        "image": "https://i.pokebase.app/pokemon-champions/cbmuf9AN5rgWu6OZ3nxPd.png"
      },
      {
        "slug": "annihilape",
        "name": "Annihilape",
        "image": "https://i.pokebase.app/pokemon-champions/tml77ns-ywkQpvuhOBJ1p.png"
      },
      {
        "slug": "falinks",
        "name": "Falinks",
        "image": "https://i.pokebase.app/pokemon-champions/iNBu-6RGEopEb3P7JOjQ7.png"
      },
      {
        "slug": "obstagoon",
        "name": "Obstagoon",
        "image": "https://i.pokebase.app/pokemon-champions/khKWQ4xoQNjbeBEF245ru.png"
      },
      {
        "slug": "passimian",
        "name": "Passimian",
        "image": "https://i.pokebase.app/pokemon-champions/Ue6dB9qjndRg91NPIFZvd.png"
      },
      {
        "slug": "thundurus",
        "name": "Thundurus",
        "image": "https://i.pokebase.app/pokemon-champions/ncHqGdYqrkl4j9gJE7fkD.png"
      }
    ]
  },
  {
    "slug": "delta-stream",
    "name": "Delta Stream",
    "description": "The Pokémon changes the weather to eliminate all of the Flying type’s weaknesses.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/delta-stream",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "rayquaza-mega",
        "name": "Mega Rayquaza",
        "image": "https://i.pokebase.app/pokemon-champions/pf8ioZnJZVLB1WkcElj6t.png"
      }
    ]
  },
  {
    "slug": "desolate-land",
    "name": "Desolate Land",
    "description": "The Pokémon changes the weather to nullify Water-type attacks.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/desolate-land",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "groudon-primal",
        "name": "Groudon (Primal)",
        "image": "https://i.pokebase.app/pokemon-champions/cmDOeV4SzgpP5ax93w7ck.png"
      }
    ]
  },
  {
    "slug": "disguise",
    "name": "Disguise",
    "description": "Once per battle, the shroud that covers the Pokémon can protect it from an attack.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/disguise",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "mimikyu-totem-busted",
        "name": "Mimikyu (Totem Busted)"
      },
      {
        "slug": "mimikyu-totem-disguised",
        "name": "Mimikyu (Totem Disguised)",
        "image": "https://i.pokebase.app/pokemon-champions/-MPpDxPc0-Y5zZDl_2V1n.png"
      },
      {
        "slug": "mimikyu-busted",
        "name": "Mimikyu (Busted)"
      },
      {
        "slug": "mimikyu-disguised",
        "name": "Mimikyu (Disguised)",
        "image": "https://i.pokebase.app/pokemon-champions/RQ3Lbtcm4CMV4y0C87CMc.png"
      },
      {
        "slug": "mimikyu",
        "name": "Mimikyu",
        "image": "https://i.pokebase.app/pokemon-champions/y8raL-vXi8yfNvbglIePU.png"
      }
    ]
  },
  {
    "slug": "download",
    "name": "Download",
    "description": "The Pokémon compares an opposing Pokémon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat—whichever will be more effective.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/download",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "genesect",
        "name": "Genesect",
        "image": "https://i.pokebase.app/pokemon-champions/aueaFL2dr1WLYMH7v9eTE.png"
      },
      {
        "slug": "porygon-z",
        "name": "Porygon-Z",
        "image": "https://i.pokebase.app/pokemon-champions/iTBbA60VeYSUnuwhptbMf.png"
      },
      {
        "slug": "porygon2",
        "name": "Porygon2",
        "image": "https://i.pokebase.app/pokemon-champions/KHaUxSidvdOfJLJDOiIsQ.png"
      },
      {
        "slug": "porygon",
        "name": "Porygon",
        "image": "https://i.pokebase.app/pokemon-champions/6MHiaAXaoZYbb8DcG_-QE.png"
      }
    ]
  },
  {
    "slug": "dragonize",
    "name": "Dragonize",
    "description": "The Pokémon's Normal-type moves become Dragon-type moves and their power is boosted by 20%.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dragonize",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "feraligatr-mega",
        "name": "Mega Feraligatr",
        "image": "https://i.pokebase.app/pokemon-champions/I6nDHBiGyw4B_ANb-q6aU.png"
      }
    ]
  },
  {
    "slug": "dragons-maw",
    "name": "Dragon’s Maw",
    "description": "Powers up Dragon-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dragons-maw",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "regidrago",
        "name": "Regidrago",
        "image": "https://i.pokebase.app/pokemon-champions/ziJ8sdTWsMozgJqmRgVwv.png"
      }
    ]
  },
  {
    "slug": "drizzle",
    "name": "Drizzle",
    "description": "The Pokémon makes it rain when it enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/drizzle",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kyogre",
        "name": "Kyogre",
        "image": "https://i.pokebase.app/pokemon-champions/LYehQooUdEfWTsPVoMIMN.png"
      },
      {
        "slug": "pelipper",
        "name": "Pelipper",
        "image": "https://i.pokebase.app/pokemon-champions/8PlwgulOEu_XlnRlHFUXe.png"
      },
      {
        "slug": "politoed",
        "name": "Politoed",
        "image": "https://i.pokebase.app/pokemon-champions/icXXJyuOB1lHiyreTb6aq.png"
      }
    ]
  },
  {
    "slug": "drought",
    "name": "Drought",
    "description": "Turns the sunlight harsh when the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/drought",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "charizard-mega-y",
        "name": "Mega Charizard Y",
        "image": "https://i.pokebase.app/pokemon-champions/SPY-7ZBwMZrzl8WaTM1FM.png"
      },
      {
        "slug": "groudon",
        "name": "Groudon",
        "image": "https://i.pokebase.app/pokemon-champions/Kqkw8PxOo63qYbWdVCr_T.png"
      },
      {
        "slug": "torkoal",
        "name": "Torkoal",
        "image": "https://i.pokebase.app/pokemon-champions/z7sSOt7rkl0SbIYOgWTXx.png"
      },
      {
        "slug": "ninetales",
        "name": "Ninetales",
        "image": "https://i.pokebase.app/pokemon-champions/X4gc-lYO61-9kqG1zDZdj.png"
      },
      {
        "slug": "vulpix",
        "name": "Vulpix",
        "image": "https://i.pokebase.app/pokemon-champions/C50Du3oMOj4Qfmuf7gce6.png"
      }
    ]
  },
  {
    "slug": "dry-skin",
    "name": "Dry Skin",
    "description": "Restores the Pokémon's HP in rain or when it is hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/dry-skin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "heliolisk",
        "name": "Heliolisk",
        "image": "https://i.pokebase.app/pokemon-champions/vgJtQT1sa-cAdrT2NJiBf.png"
      },
      {
        "slug": "helioptile",
        "name": "Helioptile",
        "image": "https://i.pokebase.app/pokemon-champions/NgJ8xnwmwmq7IYKkMQbgd.png"
      },
      {
        "slug": "toxicroak",
        "name": "Toxicroak",
        "image": "https://i.pokebase.app/pokemon-champions/PYjsojLkgDL694zSvteOJ.png"
      },
      {
        "slug": "croagunk",
        "name": "Croagunk",
        "image": "https://i.pokebase.app/pokemon-champions/kc-bOkHho3ieQ9bjTekZe.png"
      },
      {
        "slug": "jynx",
        "name": "Jynx",
        "image": "https://i.pokebase.app/pokemon-champions/gXihF_GxQlhNBczb6Ea53.png"
      },
      {
        "slug": "parasect",
        "name": "Parasect",
        "image": "https://i.pokebase.app/pokemon-champions/ZnGwxakGVk9ci_YwFZD9F.png"
      },
      {
        "slug": "paras",
        "name": "Paras",
        "image": "https://i.pokebase.app/pokemon-champions/7d8954DlKuevuAf6xRZgH.png"
      }
    ]
  },
  {
    "slug": "early-bird",
    "name": "Early Bird",
    "description": "The Pokémon awakens from sleep twice as fast as other Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/early-bird",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dolliv",
        "name": "Dolliv",
        "image": "https://i.pokebase.app/pokemon-champions/sdcsfxRElkMFNkrC3rafN.png"
      },
      {
        "slug": "smoliv",
        "name": "Smoliv",
        "image": "https://i.pokebase.app/pokemon-champions/Laq0u9qRygV0TtPYr2CM7.png"
      },
      {
        "slug": "nuzleaf",
        "name": "Nuzleaf",
        "image": "https://i.pokebase.app/pokemon-champions/vkpW1wdSeLEDpZuvnh4C6.png"
      },
      {
        "slug": "seedot",
        "name": "Seedot",
        "image": "https://i.pokebase.app/pokemon-champions/MzGhCPaCBSKcTgcZyhcVa.png"
      },
      {
        "slug": "houndoom",
        "name": "Houndoom",
        "image": "https://i.pokebase.app/pokemon-champions/LAU6AX6nfzVVSqtM7-EdA.png"
      },
      {
        "slug": "houndour",
        "name": "Houndour",
        "image": "https://i.pokebase.app/pokemon-champions/1cnJ6gmQXYTtE2AuKvp8n.png"
      },
      {
        "slug": "girafarig",
        "name": "Girafarig",
        "image": "https://i.pokebase.app/pokemon-champions/_X1qiMXRizEHatzVD2Yb-.png"
      },
      {
        "slug": "sunflora",
        "name": "Sunflora",
        "image": "https://i.pokebase.app/pokemon-champions/dV0mtOu1S0UTxd0uxRlvK.png"
      },
      {
        "slug": "sunkern",
        "name": "Sunkern",
        "image": "https://i.pokebase.app/pokemon-champions/0DouY6RN2_w9Yhw0WgMb7.png"
      },
      {
        "slug": "xatu",
        "name": "Xatu",
        "image": "https://i.pokebase.app/pokemon-champions/TvND89NWRD9KHiNyjjB9O.png"
      }
    ]
  },
  {
    "slug": "earth-eater",
    "name": "Earth Eater",
    "description": "If hit by a Ground-type move, the Pokémon has its HP restored instead of taking damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/earth-eater",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "orthworm",
        "name": "Orthworm",
        "image": "https://i.pokebase.app/pokemon-champions/YDsMhws_oT6iCVslrrRMd.png"
      }
    ]
  },
  {
    "slug": "effect-spore",
    "name": "Effect Spore",
    "description": "Contact with the Pokémon may inflict poison, sleep, or paralysis on the attacker.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/effect-spore",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "eldegoss",
        "name": "Eldegoss",
        "image": "https://i.pokebase.app/pokemon-champions/ugQFY6PKgYMtipx5PVWKv.png"
      },
      {
        "slug": "gossifleur",
        "name": "Gossifleur",
        "image": "https://i.pokebase.app/pokemon-champions/ch_1XL3zIQS6954QTZ2cH.png"
      },
      {
        "slug": "shiinotic",
        "name": "Shiinotic",
        "image": "https://i.pokebase.app/pokemon-champions/0SMskWQko9nRX6FwSViYR.png"
      },
      {
        "slug": "morelull",
        "name": "Morelull",
        "image": "https://i.pokebase.app/pokemon-champions/Q_xvb6E5yV6bHlALSqsmR.png"
      },
      {
        "slug": "amoonguss",
        "name": "Amoonguss",
        "image": "https://i.pokebase.app/pokemon-champions/AYjkSsMgUkDBNVCkmCs20.png"
      },
      {
        "slug": "foongus",
        "name": "Foongus",
        "image": "https://i.pokebase.app/pokemon-champions/p1JomhRA1GH_LDH-CMi2W.png"
      },
      {
        "slug": "breloom",
        "name": "Breloom",
        "image": "https://i.pokebase.app/pokemon-champions/io7KnxRT3l88bIzlQ9hu0.png"
      },
      {
        "slug": "shroomish",
        "name": "Shroomish",
        "image": "https://i.pokebase.app/pokemon-champions/EL_YwnU9PbCp844z1WMTx.png"
      },
      {
        "slug": "parasect",
        "name": "Parasect",
        "image": "https://i.pokebase.app/pokemon-champions/ZnGwxakGVk9ci_YwFZD9F.png"
      },
      {
        "slug": "vileplume",
        "name": "Vileplume",
        "image": "https://i.pokebase.app/pokemon-champions/4oDmcRMMupl6I3YCYKEAt.png"
      }
    ]
  },
  {
    "slug": "electric-surge",
    "name": "Electric Surge",
    "description": "Turns the ground into Electric Terrain when the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/electric-surge",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pincurchin",
        "name": "Pincurchin",
        "image": "https://i.pokebase.app/pokemon-champions/s_bmXMMdZgchjUcuDGDtv.png"
      },
      {
        "slug": "tapu-koko",
        "name": "Tapu Koko",
        "image": "https://i.pokebase.app/pokemon-champions/cq7YYz5P8p0mea-ShLef8.png"
      }
    ]
  },
  {
    "slug": "electromorphosis",
    "name": "Electromorphosis",
    "description": "The Pokémon becomes charged when it takes damage, boosting the power of the next Electric-type move the Pokémon uses.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/electromorphosis",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "bellibolt",
        "name": "Bellibolt",
        "image": "https://i.pokebase.app/pokemon-champions/e0x-ATub64o1nLWllpmlL.png"
      }
    ]
  },
  {
    "slug": "embody-aspect",
    "name": "Embody Aspect",
    "description": "The Pokémon's heart fills with memories, causing the Mask to shine and one of the Pokémon's stats to be boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/embody-aspect",
    "isMegaAbility": false,
    "pokemon": []
  },
  {
    "slug": "emergency-exit",
    "name": "Emergency Exit",
    "description": "The Pokémon, sensing danger, switches out when its HP becomes half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/emergency-exit",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "golisopod",
        "name": "Golisopod",
        "image": "https://i.pokebase.app/pokemon-champions/xDEqFsAlC3MkRw_s7rAIO.png"
      }
    ]
  },
  {
    "slug": "fairy-aura",
    "name": "Fairy Aura",
    "description": "Powers up every Pokémon in play's Fairy-type moves by 33%",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/fairy-aura",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "floette-mega",
        "name": "Mega Floette",
        "image": "https://i.pokebase.app/pokemon-champions/-HMvQfwwFm7ympWvmiTV1.png"
      },
      {
        "slug": "xerneas",
        "name": "Xerneas",
        "image": "https://i.pokebase.app/pokemon-champions/a0xioqZUzqk-T955-C-pG.png"
      }
    ]
  },
  {
    "slug": "filter",
    "name": "Filter",
    "description": "Reduces the power of supereffective attacks that hit the Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/filter",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "aggron-mega",
        "name": "Mega Aggron",
        "image": "https://i.pokebase.app/pokemon-champions/gnvWKhQAho8lARFqvEd8d.png"
      },
      {
        "slug": "revavroom",
        "name": "Revavroom",
        "image": "https://i.pokebase.app/pokemon-champions/EhUVVh13e_RX6Tw-F_5K-.png"
      },
      {
        "slug": "mime-jr",
        "name": "Mime Jr.",
        "image": "https://i.pokebase.app/pokemon-champions/DyWW92IiC_x9ocWxchUQq.png"
      },
      {
        "slug": "mr-mime",
        "name": "Mr. Mime",
        "image": "https://i.pokebase.app/pokemon-champions/nhEscdgjdmrnd6gEpnkKx.png"
      }
    ]
  },
  {
    "slug": "flame-body",
    "name": "Flame Body",
    "description": "Contact with the Pokémon may burn the attacker.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/flame-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "centiskorch-gmax",
        "name": "Centiskorch (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/rrlFlOKcSDVyUxKdhxLzS.png"
      },
      {
        "slug": "coalossal-gmax",
        "name": "Coalossal (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ory22pZY-bAvOdXiUMcxl.png"
      },
      {
        "slug": "charcadet",
        "name": "Charcadet",
        "image": "https://i.pokebase.app/pokemon-champions/zvEyFawoaQfGHP8EamWuC.png"
      },
      {
        "slug": "centiskorch",
        "name": "Centiskorch",
        "image": "https://i.pokebase.app/pokemon-champions/xRD_imhB1uVoEJuJqziZS.png"
      },
      {
        "slug": "sizzlipede",
        "name": "Sizzlipede",
        "image": "https://i.pokebase.app/pokemon-champions/Hnd4CbfgQyAImwbkmtAfc.png"
      },
      {
        "slug": "coalossal",
        "name": "Coalossal",
        "image": "https://i.pokebase.app/pokemon-champions/a2kKNgx65Z7LNqcpNv1Ci.png"
      },
      {
        "slug": "carkol",
        "name": "Carkol",
        "image": "https://i.pokebase.app/pokemon-champions/9h7_v2F_tAagRQHHqbM17.png"
      },
      {
        "slug": "talonflame",
        "name": "Talonflame",
        "image": "https://i.pokebase.app/pokemon-champions/nwG3yz8qCzSiOKBtPfuQM.png"
      },
      {
        "slug": "fletchinder",
        "name": "Fletchinder",
        "image": "https://i.pokebase.app/pokemon-champions/KUlynosgMI0VbBqSVCM7B.png"
      },
      {
        "slug": "volcarona",
        "name": "Volcarona",
        "image": "https://i.pokebase.app/pokemon-champions/NkmrFUeF-we5iT13AjIgY.png"
      }
    ]
  },
  {
    "slug": "flare-boost",
    "name": "Flare Boost",
    "description": "Powers up special moves when the Pokémon is burned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/flare-boost",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "drifblim",
        "name": "Drifblim",
        "image": "https://i.pokebase.app/pokemon-champions/XdS8zJ7ALj8jxVjLgra81.png"
      },
      {
        "slug": "drifloon",
        "name": "Drifloon",
        "image": "https://i.pokebase.app/pokemon-champions/MFkqVitPs0JVDvg1iDhAo.png"
      }
    ]
  },
  {
    "slug": "flash-fire",
    "name": "Flash Fire",
    "description": "If hit by a Fire-type move, the Pokémon absorbs the flames and uses them to power up its own Fire-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/flash-fire",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "centiskorch-gmax",
        "name": "Centiskorch (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/rrlFlOKcSDVyUxKdhxLzS.png"
      },
      {
        "slug": "coalossal-gmax",
        "name": "Coalossal (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ory22pZY-bAvOdXiUMcxl.png"
      },
      {
        "slug": "growlithe-hisui",
        "name": "Hisuian Growlithe",
        "image": "https://i.pokebase.app/pokemon-champions/eWDa1EHTZdgcRwVW6kN2i.png"
      },
      {
        "slug": "arcanine-hisui",
        "name": "Hisuian Arcanine",
        "image": "https://i.pokebase.app/pokemon-champions/g8I-Bxg0mSwSljrbvmjK-.png"
      },
      {
        "slug": "ceruledge",
        "name": "Ceruledge",
        "image": "https://i.pokebase.app/pokemon-champions/RyFh0j0hEgsrs2whWGxUF.png"
      },
      {
        "slug": "armarouge",
        "name": "Armarouge",
        "image": "https://i.pokebase.app/pokemon-champions/b1jqDKDuh98bkeDJPkjS5.png"
      },
      {
        "slug": "charcadet",
        "name": "Charcadet",
        "image": "https://i.pokebase.app/pokemon-champions/zvEyFawoaQfGHP8EamWuC.png"
      },
      {
        "slug": "centiskorch",
        "name": "Centiskorch",
        "image": "https://i.pokebase.app/pokemon-champions/xRD_imhB1uVoEJuJqziZS.png"
      },
      {
        "slug": "sizzlipede",
        "name": "Sizzlipede",
        "image": "https://i.pokebase.app/pokemon-champions/Hnd4CbfgQyAImwbkmtAfc.png"
      },
      {
        "slug": "coalossal",
        "name": "Coalossal",
        "image": "https://i.pokebase.app/pokemon-champions/a2kKNgx65Z7LNqcpNv1Ci.png"
      }
    ]
  },
  {
    "slug": "flower-gift",
    "name": "Flower Gift",
    "description": "Boosts the Attack and Sp. Def stats of itself and allies in harsh sunlight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/flower-gift",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cherrim",
        "name": "Cherrim",
        "image": "https://i.pokebase.app/pokemon-champions/wa0NL9KfrlRbY4bkgqzOG.png"
      }
    ]
  },
  {
    "slug": "flower-veil",
    "name": "Flower Veil",
    "description": "Ally Grass-type Pokémon are protected from status conditions and the lowering of their stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/flower-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "floette-eternal",
        "name": "Floette (Eternal)",
        "image": "https://i.pokebase.app/pokemon-champions/ISeTye8rgSJhBHS7_WAq2.png"
      },
      {
        "slug": "comfey",
        "name": "Comfey",
        "image": "https://i.pokebase.app/pokemon-champions/az1CrHs2skfoXoMOAcwbZ.png"
      },
      {
        "slug": "florges",
        "name": "Florges",
        "image": "https://i.pokebase.app/pokemon-champions/XxUlaMeM33mTLrsduRzWN.png"
      },
      {
        "slug": "floette",
        "name": "Floette",
        "image": "https://i.pokebase.app/pokemon-champions/EPfV82hf-Dj8JjmYyF4D8.png"
      },
      {
        "slug": "flabebe",
        "name": "Flabébé",
        "image": "https://i.pokebase.app/pokemon-champions/MA5FuW8V_zTyCE4SQj9Aq.png"
      }
    ]
  },
  {
    "slug": "fluffy",
    "name": "Fluffy",
    "description": "Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/fluffy",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "houndstone",
        "name": "Houndstone",
        "image": "https://i.pokebase.app/pokemon-champions/rnNCl57IO7XZraOnUfbI7.png"
      },
      {
        "slug": "greavard",
        "name": "Greavard",
        "image": "https://i.pokebase.app/pokemon-champions/gXCkVl1umF-ZTe0YhbFrf.png"
      },
      {
        "slug": "dubwool",
        "name": "Dubwool",
        "image": "https://i.pokebase.app/pokemon-champions/4CZy1xe2HYQ2Ihlki5vj0.png"
      },
      {
        "slug": "wooloo",
        "name": "Wooloo",
        "image": "https://i.pokebase.app/pokemon-champions/lu3RQf_vS1d9F1-XbggTO.png"
      },
      {
        "slug": "bewear",
        "name": "Bewear",
        "image": "https://i.pokebase.app/pokemon-champions/lyKxYTNfdqmPEzqP73X4V.png"
      },
      {
        "slug": "stufful",
        "name": "Stufful",
        "image": "https://i.pokebase.app/pokemon-champions/mETOy78U4UbtCyk_wGZ_T.png"
      }
    ]
  },
  {
    "slug": "forecast",
    "name": "Forecast",
    "description": "The Pokémon transforms with the weather to change its type to Water, Fire, or Ice.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/forecast",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "castform-snowy",
        "name": "Castform (Snowy)",
        "image": "https://i.pokebase.app/pokemon-champions/tceV3iuvzSqXUyyL0Hpzg.png"
      },
      {
        "slug": "castform-rainy",
        "name": "Castform (Rainy)",
        "image": "https://i.pokebase.app/pokemon-champions/OKgPygunxu9m5SljwT-pX.png"
      },
      {
        "slug": "castform-sunny",
        "name": "Castform (Sunny)",
        "image": "https://i.pokebase.app/pokemon-champions/wIRm89RmPFIo2SXTDd2TV.png"
      },
      {
        "slug": "castform",
        "name": "Castform",
        "image": "https://i.pokebase.app/pokemon-champions/iY4i-RbbTmrqi-18VyIJa.png"
      }
    ]
  },
  {
    "slug": "forewarn",
    "name": "Forewarn",
    "description": "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/forewarn",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "munna",
        "name": "Munna",
        "image": "https://i.pokebase.app/pokemon-champions/pibM5Y0puOtBMAl08VLgw.png"
      },
      {
        "slug": "musharna",
        "name": "Musharna",
        "image": "https://i.pokebase.app/pokemon-champions/QqYTveYC5bogQJfVkLHHc.png"
      },
      {
        "slug": "smoochum",
        "name": "Smoochum",
        "image": "https://i.pokebase.app/pokemon-champions/r9cI1gbh7Ovx0f_KkwRJ6.png"
      },
      {
        "slug": "jynx",
        "name": "Jynx",
        "image": "https://i.pokebase.app/pokemon-champions/gXihF_GxQlhNBczb6Ea53.png"
      },
      {
        "slug": "drowzee",
        "name": "Drowzee",
        "image": "https://i.pokebase.app/pokemon-champions/jorM388AancEHT2-zXaut.png"
      },
      {
        "slug": "hypno",
        "name": "Hypno",
        "image": "https://i.pokebase.app/pokemon-champions/GX0Bp-yAFPH0Yu7rZrQpX.png"
      }
    ]
  },
  {
    "slug": "friend-guard",
    "name": "Friend Guard",
    "description": "Reduces damage dealt to allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/friend-guard",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "maushold-family-of-three",
        "name": "Maushold (Family Of Three)",
        "image": "https://i.pokebase.app/pokemon-champions/4zcWyNiUxwR6HIOcJGdF4.png"
      },
      {
        "slug": "maushold-family-of-four",
        "name": "Maushold (Family Of Four)",
        "image": "https://i.pokebase.app/pokemon-champions/X_dcsimlW9kCLywwvV3Bo.png"
      },
      {
        "slug": "maushold",
        "name": "Maushold",
        "image": "https://i.pokebase.app/pokemon-champions/D4mo4Ai5GUgqaZZ_bGvUO.png"
      },
      {
        "slug": "vivillon",
        "name": "Vivillon",
        "image": "https://i.pokebase.app/pokemon-champions/3iPQzh9-8lezTrM7sBH4q.png"
      },
      {
        "slug": "spewpa",
        "name": "Spewpa",
        "image": "https://i.pokebase.app/pokemon-champions/dGuiDorkcwY2dCLJMeman.png"
      },
      {
        "slug": "scatterbug",
        "name": "Scatterbug",
        "image": "https://i.pokebase.app/pokemon-champions/p_1HSAaCayKfNXWjf2-H0.png"
      },
      {
        "slug": "happiny",
        "name": "Happiny",
        "image": "https://i.pokebase.app/pokemon-champions/qIjdFskaIjGAsRmtQnjyh.png"
      },
      {
        "slug": "igglybuff",
        "name": "Igglybuff",
        "image": "https://i.pokebase.app/pokemon-champions/s0azx0u27bwiCZto3RWAG.png"
      },
      {
        "slug": "cleffa",
        "name": "Cleffa",
        "image": "https://i.pokebase.app/pokemon-champions/iDhYCsVwOML2_aFAWduUC.png"
      },
      {
        "slug": "jigglypuff",
        "name": "Jigglypuff",
        "image": "https://i.pokebase.app/pokemon-champions/URf4Hh2XQPFMmeGyutxzs.png"
      }
    ]
  },
  {
    "slug": "frisk",
    "name": "Frisk",
    "description": "When it enters a battle, the Pokémon can check an opposing Pokémon's held item.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/frisk",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grimmsnarl-gmax",
        "name": "Grimmsnarl (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g_BkTu-Zvlx_FnCm7Orhl.png"
      },
      {
        "slug": "orbeetle-gmax",
        "name": "Orbeetle (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/w1Qj43A2C0VlGKjUE-V9A.png"
      },
      {
        "slug": "pumpkaboo-average",
        "name": "Pumpkaboo (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/dJwttk781AA-dEP42PUtP.png"
      },
      {
        "slug": "gourgeist-average",
        "name": "Gourgeist (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/2Y-34kAsCePt2Pc1QBLon.png"
      },
      {
        "slug": "pumpkaboo-super",
        "name": "Pumpkaboo (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/qVxgOgL894dbTlOwcRd-b.png"
      },
      {
        "slug": "gourgeist-super",
        "name": "Gourgeist (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/CPyrt_Lc4HN83bbZqyKrK.png"
      },
      {
        "slug": "pumpkaboo-large",
        "name": "Pumpkaboo (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/By_frBti_vLicI_vOEHkP.png"
      },
      {
        "slug": "gourgeist-large",
        "name": "Gourgeist (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/k8iQRfS-wBnwhKXWbblTf.png"
      },
      {
        "slug": "gourgeist-small",
        "name": "Gourgeist (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/BgsX3m4-ho_FXYzTZ3ePC.png"
      },
      {
        "slug": "pumpkaboo-small",
        "name": "Pumpkaboo (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/H84e-XUMiznFep9gXTkw5.png"
      }
    ]
  },
  {
    "slug": "full-metal-body",
    "name": "Full Metal Body",
    "description": "Prevents other Pokémon’s moves or Abilities from lowering the Pokémon’s stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/full-metal-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "solgaleo",
        "name": "Solgaleo",
        "image": "https://i.pokebase.app/pokemon-champions/cwAxKhI7CXg5BDzqNIg9a.png"
      }
    ]
  },
  {
    "slug": "fur-coat",
    "name": "Fur Coat",
    "description": "Halves the damage from physical moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/fur-coat",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "persian-alola",
        "name": "Alolan Persian",
        "image": "https://i.pokebase.app/pokemon-champions/ATUNn-FFCNja8NkQqPdqa.png"
      },
      {
        "slug": "furfrou",
        "name": "Furfrou",
        "image": "https://i.pokebase.app/pokemon-champions/R-YkYMTMyR-iEfHxOZ-Or.png"
      }
    ]
  },
  {
    "slug": "gale-wings",
    "name": "Gale Wings",
    "description": "Gives priority to the Pokémon's Flying-type moves while its HP is full.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/gale-wings",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "talonflame",
        "name": "Talonflame",
        "image": "https://i.pokebase.app/pokemon-champions/nwG3yz8qCzSiOKBtPfuQM.png"
      },
      {
        "slug": "fletchling",
        "name": "Fletchling",
        "image": "https://i.pokebase.app/pokemon-champions/pcKwngemqeLv0ebRy-apb.png"
      },
      {
        "slug": "fletchinder",
        "name": "Fletchinder",
        "image": "https://i.pokebase.app/pokemon-champions/KUlynosgMI0VbBqSVCM7B.png"
      }
    ]
  },
  {
    "slug": "galvanize",
    "name": "Galvanize",
    "description": "Normal-type moves become Electric-type moves. The power of those moves is boosted a little.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/galvanize",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "golem-alola",
        "name": "Alolan Golem",
        "image": "https://i.pokebase.app/pokemon-champions/ppxrQCjZ50XFVvByaGuw8.png"
      },
      {
        "slug": "graveler-alola",
        "name": "Alolan Graveler",
        "image": "https://i.pokebase.app/pokemon-champions/D4Teln0xYPyrWMFO3Or2Y.png"
      },
      {
        "slug": "geodude-alola",
        "name": "Alolan Geodude",
        "image": "https://i.pokebase.app/pokemon-champions/1nsyhPxOmL74E8uQTHh59.png"
      }
    ]
  },
  {
    "slug": "gluttony",
    "name": "Gluttony",
    "description": "If the Pokémon is holding a Berry to be eaten when its HP is low, it will instead eat the Berry when its HP drops to half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/gluttony",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "oinkologne-male",
        "name": "Oinkologne (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/WrkJBRZFjQ3bJHJe5hBq1.png"
      },
      {
        "slug": "appletun-gmax",
        "name": "Appletun (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UP0WrLE6uK95xReDY6WAb.png"
      },
      {
        "slug": "flapple-gmax",
        "name": "Flapple (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Rhjg6ZSvCXaO8H4QqLy59.png"
      },
      {
        "slug": "snorlax-gmax",
        "name": "Snorlax (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hfDH3oIPudpxVyLP8kfI_.png"
      },
      {
        "slug": "raticate-totem-alola",
        "name": "Raticate (Totem Alola)",
        "image": "https://i.pokebase.app/pokemon-champions/l01cY4aFi54SiRicVNLow.png"
      },
      {
        "slug": "oinkologne-female",
        "name": "Oinkologne (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/KMv6irRQe04Ju8n7bH1eN.png"
      },
      {
        "slug": "linoone-galar",
        "name": "Galarian Linoone",
        "image": "https://i.pokebase.app/pokemon-champions/t3nDQIPlOkiwCpkMKA96U.png"
      },
      {
        "slug": "zigzagoon-galar",
        "name": "Galarian Zigzagoon",
        "image": "https://i.pokebase.app/pokemon-champions/zDZ4sMheLZi2dF7sWu0-T.png"
      },
      {
        "slug": "grimer-alola",
        "name": "Alolan Grimer",
        "image": "https://i.pokebase.app/pokemon-champions/koKwKRIdzYyvcxppuSI4r.png"
      },
      {
        "slug": "muk-alola",
        "name": "Alolan Muk",
        "image": "https://i.pokebase.app/pokemon-champions/j0-CoYLzxOqef3-DjsbPF.png"
      }
    ]
  },
  {
    "slug": "good-as-gold",
    "name": "Good as Gold",
    "description": "A body of pure, solid gold gives the Pokémon full immunity to other Pokémon's status moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/good-as-gold",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "gholdengo",
        "name": "Gholdengo",
        "image": "https://i.pokebase.app/pokemon-champions/dh8QY3HkvJf6n9XwXE9lM.png"
      }
    ]
  },
  {
    "slug": "gooey",
    "name": "Gooey",
    "description": "Contact with the Pokémon lowers the attacker's Speed stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/gooey",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sliggoo-hisui",
        "name": "Hisuian Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/lZGBOka7m1_CP-v0YtbW7.png"
      },
      {
        "slug": "goodra-hisui",
        "name": "Hisuian Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/_M5K8qN1u1c0C0WyC6yYI.png"
      },
      {
        "slug": "wugtrio",
        "name": "Wugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/Jhcbvg3KHnwl1E24y6EHT.png"
      },
      {
        "slug": "wiglett",
        "name": "Wiglett",
        "image": "https://i.pokebase.app/pokemon-champions/rnBKyWb4vx41CgNQGPfXl.png"
      },
      {
        "slug": "goodra",
        "name": "Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/Sk2sguvtz_0T4a6lriyin.png"
      },
      {
        "slug": "sliggoo",
        "name": "Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/rICUlD8s36P9rut6IIn8V.png"
      },
      {
        "slug": "goomy",
        "name": "Goomy",
        "image": "https://i.pokebase.app/pokemon-champions/QFAP1pzQOeZVne6QSZqVL.png"
      }
    ]
  },
  {
    "slug": "gorilla-tactics",
    "name": "Gorilla Tactics",
    "description": "Boosts the Pokémon’s Attack stat but only allows the use of the first selected move.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/gorilla-tactics",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "darmanitan-galar-zen",
        "name": "Darmanitan (Galar Zen)",
        "image": "https://i.pokebase.app/pokemon-champions/ipuqU3c2dS4e1VAH5gbm0.png"
      },
      {
        "slug": "darmanitan-galar-standard",
        "name": "Darmanitan (Galar Standard)",
        "image": "https://i.pokebase.app/pokemon-champions/03y0TxYO8vUKcAIM8mB7X.png"
      }
    ]
  },
  {
    "slug": "grass-pelt",
    "name": "Grass Pelt",
    "description": "Boosts the Pokémon's Defense stat on Grassy Terrain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/grass-pelt",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "skiddo",
        "name": "Skiddo",
        "image": "https://i.pokebase.app/pokemon-champions/QFFVQZyH0J1eUcwDcN-k9.png"
      },
      {
        "slug": "gogoat",
        "name": "Gogoat",
        "image": "https://i.pokebase.app/pokemon-champions/m3tCWAIR2_Ye0TkZP6SC2.png"
      }
    ]
  },
  {
    "slug": "grassy-surge",
    "name": "Grassy Surge",
    "description": "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/grassy-surge",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "rillaboom-gmax",
        "name": "Rillaboom (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Y6dUUcIz839dwuLPEqYaz.png"
      },
      {
        "slug": "thwackey",
        "name": "Thwackey",
        "image": "https://i.pokebase.app/pokemon-champions/ICeI0WPHala0Kig-g1VCF.png"
      },
      {
        "slug": "rillaboom",
        "name": "Rillaboom",
        "image": "https://i.pokebase.app/pokemon-champions/Gy34KTI1acyHaINUacGxC.png"
      },
      {
        "slug": "grookey",
        "name": "Grookey",
        "image": "https://i.pokebase.app/pokemon-champions/vn4X1nyFJNqrg0xJH0mi_.png"
      },
      {
        "slug": "tapu-bulu",
        "name": "Tapu Bulu",
        "image": "https://i.pokebase.app/pokemon-champions/ItEGadKy1J59fNg3Xg-9e.png"
      }
    ]
  },
  {
    "slug": "grim-neigh",
    "name": "Grim Neigh",
    "description": "When the Pokémon knocks out a target, it utters a terrifying neigh, which boosts its Sp. Atk stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/grim-neigh",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "spectrier",
        "name": "Spectrier",
        "image": "https://i.pokebase.app/pokemon-champions/AKijZomMPlk4w_nxr4H8k.png"
      }
    ]
  },
  {
    "slug": "guard-dog",
    "name": "Guard Dog",
    "description": "Boosts the Pokémon’s Attack stat if intimidated. Moves and items that would force the Pokémon to switch out also fail to work.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/guard-dog",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "okidogi",
        "name": "Okidogi",
        "image": "https://i.pokebase.app/pokemon-champions/LwVxwUmwe07CYofK9C5vj.png"
      },
      {
        "slug": "mabosstiff",
        "name": "Mabosstiff",
        "image": "https://i.pokebase.app/pokemon-champions/UXO0MyDx1Njq7fFTv8hlc.png"
      }
    ]
  },
  {
    "slug": "gulp-missile",
    "name": "Gulp Missile",
    "description": "When the Pokémon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to attack.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/gulp-missile",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cramorant-gorging",
        "name": "Cramorant (Gorging)",
        "image": "https://i.pokebase.app/pokemon-champions/1nFOm2avVW3Io4_n0oIN2.png"
      },
      {
        "slug": "cramorant-gulping",
        "name": "Cramorant (Gulping)",
        "image": "https://i.pokebase.app/pokemon-champions/DULPCCBnxEky-OYOhqJEZ.png"
      },
      {
        "slug": "cramorant",
        "name": "Cramorant",
        "image": "https://i.pokebase.app/pokemon-champions/0VOJ02-jGb4S7NHXSkySD.png"
      }
    ]
  },
  {
    "slug": "guts",
    "name": "Guts",
    "description": "It's so gutsy that having a status condition boosts the Pokémon's Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/guts",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "squawkabilly-blue-plumage",
        "name": "Squawkabilly (Blue Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/r2GkVTs1lvaQbstUuC7Bb.png"
      },
      {
        "slug": "squawkabilly-green-plumage",
        "name": "Squawkabilly (Green Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/uL7uiSTYJktUESX5ZJAKa.png"
      },
      {
        "slug": "machamp-gmax",
        "name": "Machamp (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Dmex20QRyj-CTO58tnWth.png"
      },
      {
        "slug": "squawkabilly",
        "name": "Squawkabilly",
        "image": "https://i.pokebase.app/pokemon-champions/sXDvBeH10nf2vsNAy5xVq.png"
      },
      {
        "slug": "ursaluna",
        "name": "Ursaluna",
        "image": "https://i.pokebase.app/pokemon-champions/UDtn4fgdYRrglGj2gFerP.png"
      },
      {
        "slug": "obstagoon",
        "name": "Obstagoon",
        "image": "https://i.pokebase.app/pokemon-champions/khKWQ4xoQNjbeBEF245ru.png"
      },
      {
        "slug": "throh",
        "name": "Throh",
        "image": "https://i.pokebase.app/pokemon-champions/hhGfkrmLTLgXryPlJMNL_.png"
      },
      {
        "slug": "conkeldurr",
        "name": "Conkeldurr",
        "image": "https://i.pokebase.app/pokemon-champions/akKIRSVHfejfiyJBTlFmj.png"
      },
      {
        "slug": "gurdurr",
        "name": "Gurdurr",
        "image": "https://i.pokebase.app/pokemon-champions/M1breA1lYcncukvrVl6VE.png"
      },
      {
        "slug": "timburr",
        "name": "Timburr",
        "image": "https://i.pokebase.app/pokemon-champions/AePuhaNSS6CViaLr8ohKD.png"
      }
    ]
  },
  {
    "slug": "hadron-engine",
    "name": "Hadron Engine",
    "description": "Turns the ground into Electric Terrain when the Pokémon enters a battle. The futuristic engine within the Pokémon also boosts its Sp. Atk stat on Electric Terrain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hadron-engine",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "miraidon-glide-mode",
        "name": "Miraidon (Glide Mode)"
      },
      {
        "slug": "miraidon-aquatic-mode",
        "name": "Miraidon (Aquatic Mode)"
      },
      {
        "slug": "miraidon-drive-mode",
        "name": "Miraidon (Drive Mode)"
      },
      {
        "slug": "miraidon-low-power-mode",
        "name": "Miraidon (Low Power Mode)"
      },
      {
        "slug": "miraidon",
        "name": "Miraidon",
        "image": "https://i.pokebase.app/pokemon-champions/54zV6B2Aiy-MUz9WTAdNz.png"
      }
    ]
  },
  {
    "slug": "harvest",
    "name": "Harvest",
    "description": "May create another Berry after one is used.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/harvest",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "exeggutor-alola",
        "name": "Alolan Exeggutor",
        "image": "https://i.pokebase.app/pokemon-champions/xc0VJeJwz-tLxN3fa0AEy.png"
      },
      {
        "slug": "arboliva",
        "name": "Arboliva",
        "image": "https://i.pokebase.app/pokemon-champions/zbZ0X79yFUGQupG7vSCLH.png"
      },
      {
        "slug": "dolliv",
        "name": "Dolliv",
        "image": "https://i.pokebase.app/pokemon-champions/sdcsfxRElkMFNkrC3rafN.png"
      },
      {
        "slug": "smoliv",
        "name": "Smoliv",
        "image": "https://i.pokebase.app/pokemon-champions/Laq0u9qRygV0TtPYr2CM7.png"
      },
      {
        "slug": "trevenant",
        "name": "Trevenant",
        "image": "https://i.pokebase.app/pokemon-champions/53DqtJy5iWvhMLYbNIDsk.png"
      },
      {
        "slug": "phantump",
        "name": "Phantump",
        "image": "https://i.pokebase.app/pokemon-champions/Q7SrEBmerYgJZZGAhyfPv.png"
      },
      {
        "slug": "tropius",
        "name": "Tropius",
        "image": "https://i.pokebase.app/pokemon-champions/rsNl04OXLoJriKPk5RzK5.png"
      },
      {
        "slug": "exeggutor",
        "name": "Exeggutor",
        "image": "https://i.pokebase.app/pokemon-champions/Mpm2qn98q0UtKjXOl-285.png"
      },
      {
        "slug": "exeggcute",
        "name": "Exeggcute",
        "image": "https://i.pokebase.app/pokemon-champions/T1f28nL5-HPfSNImEza28.png"
      }
    ]
  },
  {
    "slug": "healer",
    "name": "Healer",
    "description": "Sometimes cures the status conditions of the Pokémon's allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/healer",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "hatterene-gmax",
        "name": "Hatterene (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/_1quBBtOc10KU7uZtQzMA.png"
      },
      {
        "slug": "audino-mega",
        "name": "Mega Audino",
        "image": "https://i.pokebase.app/pokemon-champions/md9Gi17bcAip84C91ZSf_.png"
      },
      {
        "slug": "hatterene",
        "name": "Hatterene",
        "image": "https://i.pokebase.app/pokemon-champions/1aATW1uYZQY1sVxZ1noHp.png"
      },
      {
        "slug": "hattrem",
        "name": "Hattrem",
        "image": "https://i.pokebase.app/pokemon-champions/7Bw5nZTli3rOZu3QgwIoc.png"
      },
      {
        "slug": "hatenna",
        "name": "Hatenna",
        "image": "https://i.pokebase.app/pokemon-champions/sKkWnIIrIgRTNxnMh0GEv.png"
      },
      {
        "slug": "aromatisse",
        "name": "Aromatisse",
        "image": "https://i.pokebase.app/pokemon-champions/fZIH1i_pR-tGkuzOzhjMz.png"
      },
      {
        "slug": "spritzee",
        "name": "Spritzee",
        "image": "https://i.pokebase.app/pokemon-champions/M8wgj6xltkCqN2U5LW42j.png"
      },
      {
        "slug": "alomomola",
        "name": "Alomomola",
        "image": "https://i.pokebase.app/pokemon-champions/i_PXyhd7zPRKxlXCDr9xd.png"
      },
      {
        "slug": "audino",
        "name": "Audino",
        "image": "https://i.pokebase.app/pokemon-champions/18DEkd7RDVxpMxa-yS16t.png"
      },
      {
        "slug": "blissey",
        "name": "Blissey",
        "image": "https://i.pokebase.app/pokemon-champions/DPT9ijbzTKvIe_8x0ftN7.png"
      }
    ]
  },
  {
    "slug": "heatproof",
    "name": "Heatproof",
    "description": "The Pokémon's heatproof body halves the damage taken from Fire-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/heatproof",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sinistcha",
        "name": "Sinistcha",
        "image": "https://i.pokebase.app/pokemon-champions/D6zsKfL5OLLnjQP4b7uB-.png"
      },
      {
        "slug": "poltchageist",
        "name": "Poltchageist",
        "image": "https://i.pokebase.app/pokemon-champions/YRFEOPi40tY8STal0uwbK.png"
      },
      {
        "slug": "rolycoly",
        "name": "Rolycoly",
        "image": "https://i.pokebase.app/pokemon-champions/F4Z1sPhqQOYhlnpQB1UEe.png"
      },
      {
        "slug": "bronzor",
        "name": "Bronzor",
        "image": "https://i.pokebase.app/pokemon-champions/tgkvLDH138IWiWhTlCiF8.png"
      },
      {
        "slug": "bronzong",
        "name": "Bronzong",
        "image": "https://i.pokebase.app/pokemon-champions/3IY8YTGZCDj2Pc5ehT7AI.png"
      }
    ]
  },
  {
    "slug": "heavy-metal",
    "name": "Heavy Metal",
    "description": "Doubles the Pokémon's weight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/heavy-metal",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "duraludon-gmax",
        "name": "Duraludon (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/ehi0AfFLkFaVXB4OXDUsz.png"
      },
      {
        "slug": "copperajah-gmax",
        "name": "Copperajah (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/FNcd1lVuWjfMsNAHsVDgJ.png"
      },
      {
        "slug": "duraludon",
        "name": "Duraludon",
        "image": "https://i.pokebase.app/pokemon-champions/A3RaGn89C6s6yC2GtAv48.png"
      },
      {
        "slug": "copperajah",
        "name": "Copperajah",
        "image": "https://i.pokebase.app/pokemon-champions/Ig_Al3Olmsuqr0In205fx.png"
      },
      {
        "slug": "cufant",
        "name": "Cufant",
        "image": "https://i.pokebase.app/pokemon-champions/hdV8U66bpWLMk6W3hBg0H.png"
      },
      {
        "slug": "bronzor",
        "name": "Bronzor",
        "image": "https://i.pokebase.app/pokemon-champions/tgkvLDH138IWiWhTlCiF8.png"
      },
      {
        "slug": "bronzong",
        "name": "Bronzong",
        "image": "https://i.pokebase.app/pokemon-champions/3IY8YTGZCDj2Pc5ehT7AI.png"
      },
      {
        "slug": "aggron",
        "name": "Aggron",
        "image": "https://i.pokebase.app/pokemon-champions/w4q5WY7KJzBP84Fyiq49F.png"
      },
      {
        "slug": "aron",
        "name": "Aron",
        "image": "https://i.pokebase.app/pokemon-champions/A-xJZEB3iJIujBLT_kRA1.png"
      },
      {
        "slug": "lairon",
        "name": "Lairon",
        "image": "https://i.pokebase.app/pokemon-champions/hUpDpLrYRRQkKrsbHce1b.png"
      }
    ]
  },
  {
    "slug": "honey-gather",
    "name": "Honey Gather",
    "description": "The Pokémon may gather Honey after a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/honey-gather",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ribombee-totem",
        "name": "Ribombee (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ZZ0Clq1wMPrf5iRPjOgBp.png"
      },
      {
        "slug": "ribombee",
        "name": "Ribombee",
        "image": "https://i.pokebase.app/pokemon-champions/RAoxoYim1jope-jGnK9lR.png"
      },
      {
        "slug": "cutiefly",
        "name": "Cutiefly",
        "image": "https://i.pokebase.app/pokemon-champions/DO6uHXgoAkj47EzulvJxu.png"
      },
      {
        "slug": "combee",
        "name": "Combee",
        "image": "https://i.pokebase.app/pokemon-champions/ktkfFhuNWjc_qQZbxDLfx.png"
      },
      {
        "slug": "teddiursa",
        "name": "Teddiursa",
        "image": "https://i.pokebase.app/pokemon-champions/iqOIYUUm380nQEFSsMlfK.png"
      }
    ]
  },
  {
    "slug": "hospitality",
    "name": "Hospitality",
    "description": "When the Pokémon enters a battle, it showers its ally with hospitality, restoring a small amount of the ally's HP",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hospitality",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sinistcha",
        "name": "Sinistcha",
        "image": "https://i.pokebase.app/pokemon-champions/D6zsKfL5OLLnjQP4b7uB-.png"
      },
      {
        "slug": "poltchageist",
        "name": "Poltchageist",
        "image": "https://i.pokebase.app/pokemon-champions/YRFEOPi40tY8STal0uwbK.png"
      }
    ]
  },
  {
    "slug": "huge-power",
    "name": "Huge Power",
    "description": "The Pokémon's Attack stat is doubled while it has this ability.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/huge-power",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "mawile-mega",
        "name": "Mega Mawile",
        "image": "https://i.pokebase.app/pokemon-champions/mbRwe7M0IwoSSsL__ql-8.png"
      },
      {
        "slug": "starmie-mega",
        "name": "Mega Starmie",
        "image": "https://i.pokebase.app/pokemon-champions/_OWsxQFO_kJWdsiJhwvzt.png"
      },
      {
        "slug": "bunnelby",
        "name": "Bunnelby",
        "image": "https://i.pokebase.app/pokemon-champions/tyYwjpKt0ajSnhrPIl5La.png"
      },
      {
        "slug": "diggersby",
        "name": "Diggersby",
        "image": "https://i.pokebase.app/pokemon-champions/_hL_o5Yq1jBQ1yLbtd_A4.png"
      },
      {
        "slug": "azurill",
        "name": "Azurill",
        "image": "https://i.pokebase.app/pokemon-champions/5h9iNBlXa0KOwRkUzsm6H.png"
      },
      {
        "slug": "azumarill",
        "name": "Azumarill",
        "image": "https://i.pokebase.app/pokemon-champions/N8hzK1jy6FcBoKRn_S_V-.png"
      },
      {
        "slug": "marill",
        "name": "Marill",
        "image": "https://i.pokebase.app/pokemon-champions/hDeIqkftC29P_5Rcbas7R.png"
      }
    ]
  },
  {
    "slug": "hunger-switch",
    "name": "Hunger Switch",
    "description": "The Pokémon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of every turn.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hunger-switch",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "morpeko-hangry",
        "name": "Morpeko (Hangry)",
        "image": "https://i.pokebase.app/pokemon-champions/IUqI1yzaWygWgXB1OpfjI.png"
      },
      {
        "slug": "morpeko-full-belly",
        "name": "Morpeko (Full Belly)",
        "image": "https://i.pokebase.app/pokemon-champions/H7S9btDBdqEVkPtpMaebp.png"
      },
      {
        "slug": "morpeko",
        "name": "Morpeko",
        "image": "https://i.pokebase.app/pokemon-champions/fSQPmiNVkMNpCPrUEH8kn.png"
      }
    ]
  },
  {
    "slug": "hustle",
    "name": "Hustle",
    "description": "Boosts the Pokémon's Attack stat but lowers its accuracy.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hustle",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "squawkabilly-yellow-plumage",
        "name": "Squawkabilly (Yellow Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/L2eB1btLfvVkyJ3HL1YmA.png"
      },
      {
        "slug": "squawkabilly-blue-plumage",
        "name": "Squawkabilly (Blue Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/r2GkVTs1lvaQbstUuC7Bb.png"
      },
      {
        "slug": "squawkabilly-green-plumage",
        "name": "Squawkabilly (Green Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/uL7uiSTYJktUESX5ZJAKa.png"
      },
      {
        "slug": "flapple-gmax",
        "name": "Flapple (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Rhjg6ZSvCXaO8H4QqLy59.png"
      },
      {
        "slug": "raticate-totem-alola",
        "name": "Raticate (Totem Alola)",
        "image": "https://i.pokebase.app/pokemon-champions/l01cY4aFi54SiRicVNLow.png"
      },
      {
        "slug": "squawkabilly-white-plumage",
        "name": "Squawkabilly (White Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/bxTFAowHBo-Kh9mxBmFhY.png"
      },
      {
        "slug": "darumaka-galar",
        "name": "Galarian Darumaka",
        "image": "https://i.pokebase.app/pokemon-champions/tBQv9limkow5k5KAxfOwY.png"
      },
      {
        "slug": "lilligant-hisui",
        "name": "Hisuian Lilligant",
        "image": "https://i.pokebase.app/pokemon-champions/RcGlI5dJmuF5URvrVVff-.png"
      },
      {
        "slug": "rattata-alola",
        "name": "Alolan Rattata",
        "image": "https://i.pokebase.app/pokemon-champions/ohYNjU6PII-2Vn2sqK_hS.png"
      },
      {
        "slug": "raticate-alola",
        "name": "Alolan Raticate",
        "image": "https://i.pokebase.app/pokemon-champions/YUP-60CaxF-OymTFaCk_u.png"
      }
    ]
  },
  {
    "slug": "hydration",
    "name": "Hydration",
    "description": "Cures the Pokémon's status conditions in rain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hydration",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lapras-gmax",
        "name": "Lapras (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/EoZaOONdVS_Wojzt7hf0J.png"
      },
      {
        "slug": "goodra",
        "name": "Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/Sk2sguvtz_0T4a6lriyin.png"
      },
      {
        "slug": "sliggoo",
        "name": "Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/rICUlD8s36P9rut6IIn8V.png"
      },
      {
        "slug": "goomy",
        "name": "Goomy",
        "image": "https://i.pokebase.app/pokemon-champions/QFAP1pzQOeZVne6QSZqVL.png"
      },
      {
        "slug": "accelgor",
        "name": "Accelgor",
        "image": "https://i.pokebase.app/pokemon-champions/EUwRvY7Qz_h5FbZqLhge0.png"
      },
      {
        "slug": "shelmet",
        "name": "Shelmet",
        "image": "https://i.pokebase.app/pokemon-champions/F8fdamfVnDoswnVFDSrdJ.png"
      },
      {
        "slug": "alomomola",
        "name": "Alomomola",
        "image": "https://i.pokebase.app/pokemon-champions/i_PXyhd7zPRKxlXCDr9xd.png"
      },
      {
        "slug": "swanna",
        "name": "Swanna",
        "image": "https://i.pokebase.app/pokemon-champions/8wKD__Le9jfaMLAE7m_2N.png"
      },
      {
        "slug": "ducklett",
        "name": "Ducklett",
        "image": "https://i.pokebase.app/pokemon-champions/Q9oM3GSx3vFhThI8OI8i-.png"
      },
      {
        "slug": "palpitoad",
        "name": "Palpitoad",
        "image": "https://i.pokebase.app/pokemon-champions/lerHClqw7cx2SnywG7lQa.png"
      }
    ]
  },
  {
    "slug": "hyper-cutter",
    "name": "Hyper Cutter",
    "description": "The Pokémon's prized, mighty pincers prevent other Pokémon from lowering its Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/hyper-cutter",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kingler-gmax",
        "name": "Kingler (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/aG5xJ2K_0icMpJQR3Brbo.png"
      },
      {
        "slug": "crabominable",
        "name": "Crabominable",
        "image": "https://i.pokebase.app/pokemon-champions/aiVv_0ixddWd_t021WzSU.png"
      },
      {
        "slug": "crabrawler",
        "name": "Crabrawler",
        "image": "https://i.pokebase.app/pokemon-champions/0uYmqHjt7VWF48Wo5a1fv.png"
      },
      {
        "slug": "gliscor",
        "name": "Gliscor",
        "image": "https://i.pokebase.app/pokemon-champions/zxbUqI5GLKsN44onh2Jxz.png"
      },
      {
        "slug": "crawdaunt",
        "name": "Crawdaunt",
        "image": "https://i.pokebase.app/pokemon-champions/2YRK8mK8ZH8Ay7wzyCFCX.png"
      },
      {
        "slug": "corphish",
        "name": "Corphish",
        "image": "https://i.pokebase.app/pokemon-champions/lRXaEO1hr_eN_7aTeyp0I.png"
      },
      {
        "slug": "trapinch",
        "name": "Trapinch",
        "image": "https://i.pokebase.app/pokemon-champions/lhF0W-ATnCxCIvemJ6QCF.png"
      },
      {
        "slug": "mawile",
        "name": "Mawile",
        "image": "https://i.pokebase.app/pokemon-champions/kcFQtdhYWsBNSaV2MGTEG.png"
      },
      {
        "slug": "gligar",
        "name": "Gligar",
        "image": "https://i.pokebase.app/pokemon-champions/IfVLT-sBMo5FsivycLaaK.png"
      },
      {
        "slug": "pinsir",
        "name": "Pinsir",
        "image": "https://i.pokebase.app/pokemon-champions/ACmXtcSyWR6smitcP_Yyy.png"
      }
    ]
  },
  {
    "slug": "ice-body",
    "name": "Ice Body",
    "description": "The Pokémon gradually regains HP in snow.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/ice-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "avalugg-hisui",
        "name": "Hisuian Avalugg",
        "image": "https://i.pokebase.app/pokemon-champions/XINhzo-NUBhpY1Fbrkd44.png"
      },
      {
        "slug": "mr-mime-galar",
        "name": "Galarian Mr. Mime",
        "image": "https://i.pokebase.app/pokemon-champions/kur71T2tetwACsTnZC9Z3.png"
      },
      {
        "slug": "baxcalibur",
        "name": "Baxcalibur",
        "image": "https://i.pokebase.app/pokemon-champions/KoNOip1oI5Mlt8Gp_6Sln.png"
      },
      {
        "slug": "arctibax",
        "name": "Arctibax",
        "image": "https://i.pokebase.app/pokemon-champions/MVVNBQ4QkCEAJnaJ8DyOt.png"
      },
      {
        "slug": "frigibax",
        "name": "Frigibax",
        "image": "https://i.pokebase.app/pokemon-champions/RcIVeWWHltHA6bvKzHiaM.png"
      },
      {
        "slug": "arctovish",
        "name": "Arctovish",
        "image": "https://i.pokebase.app/pokemon-champions/Yy5u0tzj1tSbVUCEqp_jE.png"
      },
      {
        "slug": "mr-rime",
        "name": "Mr. Rime",
        "image": "https://i.pokebase.app/pokemon-champions/wLxtqubaH6hHuMC9aehx6.png"
      },
      {
        "slug": "avalugg",
        "name": "Avalugg",
        "image": "https://i.pokebase.app/pokemon-champions/QVSj56rRg_SIS3rN-bucY.png"
      },
      {
        "slug": "bergmite",
        "name": "Bergmite",
        "image": "https://i.pokebase.app/pokemon-champions/UwNI_cdLiFRnAigIwZYRm.png"
      },
      {
        "slug": "vanilluxe",
        "name": "Vanilluxe",
        "image": "https://i.pokebase.app/pokemon-champions/e5V2-bPn40PMmxwOyPVe-.png"
      }
    ]
  },
  {
    "slug": "ice-face",
    "name": "Ice Face",
    "description": "The Pokémon's ice head can take a physical attack as a substitute, but the attack also changes the Pokémon's appearance. The ice will be restored when it snows.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/ice-face",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "eiscue-ice",
        "name": "Eiscue (Ice)",
        "image": "https://i.pokebase.app/pokemon-champions/-mGSj0QYq_M9Li9zEDOAW.png"
      },
      {
        "slug": "eiscue-noice",
        "name": "Eiscue (Noice)",
        "image": "https://i.pokebase.app/pokemon-champions/ays1wCWQ1n3L0VUNSMQWO.png"
      },
      {
        "slug": "eiscue",
        "name": "Eiscue",
        "image": "https://i.pokebase.app/pokemon-champions/azQF91kALtrvXDnflBpWQ.png"
      }
    ]
  },
  {
    "slug": "ice-scales",
    "name": "Ice Scales",
    "description": "The Pokémon is protected by ice scales, which halve the damage taken from special moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/ice-scales",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "frosmoth",
        "name": "Frosmoth",
        "image": "https://i.pokebase.app/pokemon-champions/A4teNZL8OAFZJSk4WIM_C.png"
      },
      {
        "slug": "snom",
        "name": "Snom",
        "image": "https://i.pokebase.app/pokemon-champions/i7NGFBD_rAf2gK_Wje3o_.png"
      }
    ]
  },
  {
    "slug": "illuminate",
    "name": "Illuminate",
    "description": "By illuminating its surroundings, the Pokémon prevents its accuracy from being lowered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/illuminate",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "shiinotic",
        "name": "Shiinotic",
        "image": "https://i.pokebase.app/pokemon-champions/0SMskWQko9nRX6FwSViYR.png"
      },
      {
        "slug": "morelull",
        "name": "Morelull",
        "image": "https://i.pokebase.app/pokemon-champions/Q_xvb6E5yV6bHlALSqsmR.png"
      },
      {
        "slug": "watchog",
        "name": "Watchog",
        "image": "https://i.pokebase.app/pokemon-champions/IyFcVME7W2WTU4lJvgEiw.png"
      },
      {
        "slug": "volbeat",
        "name": "Volbeat",
        "image": "https://i.pokebase.app/pokemon-champions/MbI68UNR8FHBMrhOvkqDv.png"
      },
      {
        "slug": "lanturn",
        "name": "Lanturn",
        "image": "https://i.pokebase.app/pokemon-champions/g3Q64TUf3xmKDgRyz6Cxf.png"
      },
      {
        "slug": "chinchou",
        "name": "Chinchou",
        "image": "https://i.pokebase.app/pokemon-champions/ARJKfrwO8flmnZHakHO_l.png"
      },
      {
        "slug": "starmie",
        "name": "Starmie",
        "image": "https://i.pokebase.app/pokemon-champions/vugYBbZ5Mk0HD_S6cqqbs.png"
      },
      {
        "slug": "staryu",
        "name": "Staryu",
        "image": "https://i.pokebase.app/pokemon-champions/-IThjzZUi_cncvCboU4-W.png"
      }
    ]
  },
  {
    "slug": "illusion",
    "name": "Illusion",
    "description": "The Pokémon fools opponents by entering battle disguised as the last Pokémon in its Trainer's party.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/illusion",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zoroark-hisui",
        "name": "Hisuian Zoroark",
        "image": "https://i.pokebase.app/pokemon-champions/qJ1PtgoM2TJo6nJCY1pi5.png"
      },
      {
        "slug": "zorua-hisui",
        "name": "Hisuian Zorua",
        "image": "https://i.pokebase.app/pokemon-champions/oxYaBAUhxhmBq7Yi54PEN.png"
      },
      {
        "slug": "zoroark",
        "name": "Zoroark",
        "image": "https://i.pokebase.app/pokemon-champions/DSsvO-IYkDCb0YfHq0jDu.png"
      },
      {
        "slug": "zorua",
        "name": "Zorua",
        "image": "https://i.pokebase.app/pokemon-champions/BDstl1Gp5UBUQCjqFNKZF.png"
      }
    ]
  },
  {
    "slug": "immunity",
    "name": "Immunity",
    "description": "The Pokémon's immune system prevents it from being poisoned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/immunity",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "snorlax-gmax",
        "name": "Snorlax (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hfDH3oIPudpxVyLP8kfI_.png"
      },
      {
        "slug": "zangoose",
        "name": "Zangoose",
        "image": "https://i.pokebase.app/pokemon-champions/nRAOYYbRZiNB0qseh9xYX.png"
      },
      {
        "slug": "gligar",
        "name": "Gligar",
        "image": "https://i.pokebase.app/pokemon-champions/IfVLT-sBMo5FsivycLaaK.png"
      },
      {
        "slug": "snorlax",
        "name": "Snorlax",
        "image": "https://i.pokebase.app/pokemon-champions/Uab5BVMo8ADp4IpYszpiy.png"
      }
    ]
  },
  {
    "slug": "imposter",
    "name": "Imposter",
    "description": "The Pokémon transforms itself into the Pokémon it's facing.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/imposter",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ditto",
        "name": "Ditto",
        "image": "https://i.pokebase.app/pokemon-champions/RUKVpVumh1lSckJieoza0.png"
      }
    ]
  },
  {
    "slug": "infiltrator",
    "name": "Infiltrator",
    "description": "The protections and stat boosts caused by the moves Substitute, Reflect, Light Screen and Safeguard by the opponent are ignored.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/infiltrator",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "meowstic-male",
        "name": "Meowstic (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/eqs7aIPXHbzz5UQBPdmRg.png"
      },
      {
        "slug": "meowstic-female",
        "name": "Meowstic (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XsEqQU3DPk5SEcW4PaWQL.png"
      },
      {
        "slug": "chandelure-mega",
        "name": "Mega Chandelure",
        "image": "https://i.pokebase.app/pokemon-champions/jis-1r627dgeYHWjiEyHf.png"
      },
      {
        "slug": "brambleghast",
        "name": "Brambleghast",
        "image": "https://i.pokebase.app/pokemon-champions/htD5TpERt5eQFfMZ0rUik.png"
      },
      {
        "slug": "bramblin",
        "name": "Bramblin",
        "image": "https://i.pokebase.app/pokemon-champions/Ehvptpzxyv7Qggw8Pf0Cg.png"
      },
      {
        "slug": "dragapult",
        "name": "Dragapult",
        "image": "https://i.pokebase.app/pokemon-champions/TXPCpylGX5Je1ew_1Vd2f.png"
      },
      {
        "slug": "drakloak",
        "name": "Drakloak",
        "image": "https://i.pokebase.app/pokemon-champions/nd8eXEaN5q9ckbRywKg69.png"
      },
      {
        "slug": "dreepy",
        "name": "Dreepy",
        "image": "https://i.pokebase.app/pokemon-champions/KD2RkXeXNJb0FUAwLJkMY.png"
      },
      {
        "slug": "noivern",
        "name": "Noivern",
        "image": "https://i.pokebase.app/pokemon-champions/LbposQ1jZGY7lxn6msdLH.png"
      },
      {
        "slug": "noibat",
        "name": "Noibat",
        "image": "https://i.pokebase.app/pokemon-champions/R79iR-w3EBNCcVYv4YWZQ.png"
      }
    ]
  },
  {
    "slug": "innards-out",
    "name": "Innards Out",
    "description": "Damages the attacker landing the finishing hit by the amount equal to its last HP.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/innards-out",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "victreebel-mega",
        "name": "Mega Victreebel",
        "image": "https://i.pokebase.app/pokemon-champions/S1BxL3FsaoyJqOncXiMXc.png"
      },
      {
        "slug": "pyukumuku",
        "name": "Pyukumuku",
        "image": "https://i.pokebase.app/pokemon-champions/Nm9yEH628bgq2Jxxj1jfG.png"
      }
    ]
  },
  {
    "slug": "inner-focus",
    "name": "Inner Focus",
    "description": "The Pokémon's intense focus prevents it from flinching or being affected by Intimidate.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/inner-focus",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "indeedee-male",
        "name": "Indeedee (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/rsB5qGp91w7WopflWuiSf.png"
      },
      {
        "slug": "darumaka-galar",
        "name": "Galarian Darumaka",
        "image": "https://i.pokebase.app/pokemon-champions/tBQv9limkow5k5KAxfOwY.png"
      },
      {
        "slug": "gallade-mega",
        "name": "Mega Gallade",
        "image": "https://i.pokebase.app/pokemon-champions/MVocjfEWJz09rqycAUtt8.png"
      },
      {
        "slug": "sneasel-hisui",
        "name": "Hisuian Sneasel",
        "image": "https://i.pokebase.app/pokemon-champions/mDKs-C-9lVaq7C_OypixS.png"
      },
      {
        "slug": "annihilape",
        "name": "Annihilape",
        "image": "https://i.pokebase.app/pokemon-champions/tml77ns-ywkQpvuhOBJ1p.png"
      },
      {
        "slug": "kubfu",
        "name": "Kubfu",
        "image": "https://i.pokebase.app/pokemon-champions/qjuKkZewg5_-Pyo267vGw.png"
      },
      {
        "slug": "indeedee",
        "name": "Indeedee",
        "image": "https://i.pokebase.app/pokemon-champions/-vRxIcGbej2bl3Q3L3irA.png"
      },
      {
        "slug": "oranguru",
        "name": "Oranguru",
        "image": "https://i.pokebase.app/pokemon-champions/Ma79xl5fzl5mZWPIR8XpL.png"
      },
      {
        "slug": "mudsdale",
        "name": "Mudsdale",
        "image": "https://i.pokebase.app/pokemon-champions/bSijto5TXv3zX4XEgkRaw.png"
      },
      {
        "slug": "mudbray",
        "name": "Mudbray",
        "image": "https://i.pokebase.app/pokemon-champions/EU8Wy7z57zmYdxLdjACA7.png"
      }
    ]
  },
  {
    "slug": "insomnia",
    "name": "Insomnia",
    "description": "The Pokémon's insomnia prevents it from falling asleep.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/insomnia",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pumpkaboo-average",
        "name": "Pumpkaboo (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/dJwttk781AA-dEP42PUtP.png"
      },
      {
        "slug": "gourgeist-average",
        "name": "Gourgeist (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/2Y-34kAsCePt2Pc1QBLon.png"
      },
      {
        "slug": "pumpkaboo-super",
        "name": "Pumpkaboo (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/qVxgOgL894dbTlOwcRd-b.png"
      },
      {
        "slug": "gourgeist-super",
        "name": "Gourgeist (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/CPyrt_Lc4HN83bbZqyKrK.png"
      },
      {
        "slug": "pumpkaboo-large",
        "name": "Pumpkaboo (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/By_frBti_vLicI_vOEHkP.png"
      },
      {
        "slug": "gourgeist-large",
        "name": "Gourgeist (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/k8iQRfS-wBnwhKXWbblTf.png"
      },
      {
        "slug": "gourgeist-small",
        "name": "Gourgeist (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/BgsX3m4-ho_FXYzTZ3ePC.png"
      },
      {
        "slug": "pumpkaboo-small",
        "name": "Pumpkaboo (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/H84e-XUMiznFep9gXTkw5.png"
      },
      {
        "slug": "mewtwo-mega-y",
        "name": "Mega Mewtwo Y",
        "image": "https://i.pokebase.app/pokemon-champions/xIKNjsoGweuVZL4bkavSk.png"
      },
      {
        "slug": "scovillain",
        "name": "Scovillain",
        "image": "https://i.pokebase.app/pokemon-champions/kb-xBLBrW5_K9i8Z5BWkJ.png"
      }
    ]
  },
  {
    "slug": "intimidate",
    "name": "Intimidate",
    "description": "When the Pokémon enters a battle, it intimidates opposing Pokémon and makes them cower, lowering their Attack stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/intimidate",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "tauros-paldea",
        "name": "Paldean Tauros - Combat Breed",
        "image": "https://i.pokebase.app/pokemon-champions/HGjPKaQ5jLkYNvjUspRzW.webp"
      },
      {
        "slug": "squawkabilly-yellow-plumage",
        "name": "Squawkabilly (Yellow Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/L2eB1btLfvVkyJ3HL1YmA.png"
      },
      {
        "slug": "squawkabilly-blue-plumage",
        "name": "Squawkabilly (Blue Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/r2GkVTs1lvaQbstUuC7Bb.png"
      },
      {
        "slug": "squawkabilly-green-plumage",
        "name": "Squawkabilly (Green Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/uL7uiSTYJktUESX5ZJAKa.png"
      },
      {
        "slug": "squawkabilly-white-plumage",
        "name": "Squawkabilly (White Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/bxTFAowHBo-Kh9mxBmFhY.png"
      },
      {
        "slug": "landorus-therian",
        "name": "Landorus (Therian)",
        "image": "https://i.pokebase.app/pokemon-champions/n1_35YeeupLrgVh1MVGJ8.png"
      },
      {
        "slug": "manectric-mega",
        "name": "Mega Manectric",
        "image": "https://i.pokebase.app/pokemon-champions/A2_tYtKOri0qN3KX5k9nK.png"
      },
      {
        "slug": "qwilfish-hisui",
        "name": "Hisuian Qwilfish",
        "image": "https://i.pokebase.app/pokemon-champions/-Uib1wANM2XBsiefza3p4.png"
      },
      {
        "slug": "tauros-paldea-aqua-breed",
        "name": "Tauros (Paldea Aqua Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/N--wj-NbCiFgkEThn4aR2.png"
      },
      {
        "slug": "tauros-paldea-blaze-breed",
        "name": "Tauros (Paldea Blaze Breed)",
        "image": "https://i.pokebase.app/pokemon-champions/RbvkCZj392q8SNozA5usx.png"
      }
    ]
  },
  {
    "slug": "intrepid-sword",
    "name": "Intrepid Sword",
    "description": "Boosts the Pokémon’s Attack stat the first time the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/intrepid-sword",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zacian-crowned",
        "name": "Zacian (Crowned)",
        "image": "https://i.pokebase.app/pokemon-champions/VLbHamDPgGwBJpfiOPmWO.png"
      },
      {
        "slug": "zacian",
        "name": "Zacian",
        "image": "https://i.pokebase.app/pokemon-champions/bqXlrrDWa08AgFYBQ0rW_.png"
      }
    ]
  },
  {
    "slug": "iron-barbs",
    "name": "Iron Barbs",
    "description": "Inflicts damage on the attacker upon contact with iron barbs.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/iron-barbs",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "togedemaru-totem",
        "name": "Togedemaru (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/nPy1wHk0GtyxGP4b_nyiZ.png"
      },
      {
        "slug": "togedemaru",
        "name": "Togedemaru",
        "image": "https://i.pokebase.app/pokemon-champions/gdjKCa7R8E4Xml0tKnE4W.png"
      },
      {
        "slug": "ferrothorn",
        "name": "Ferrothorn",
        "image": "https://i.pokebase.app/pokemon-champions/EmOEjA_hDfc3mKeSxcsVO.png"
      },
      {
        "slug": "ferroseed",
        "name": "Ferroseed",
        "image": "https://i.pokebase.app/pokemon-champions/Xr3A5CFc6wn3OIg1rkLwa.png"
      }
    ]
  },
  {
    "slug": "iron-fist",
    "name": "Iron Fist",
    "description": "The power of punching moves is increased by 20%. This stacks with",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/iron-fist",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "melmetal-gmax",
        "name": "Melmetal (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/f8bDtDIxUgye5DmKo-LCE.png"
      },
      {
        "slug": "crabominable-mega",
        "name": "Mega Crabominable",
        "image": "https://i.pokebase.app/pokemon-champions/JvmR6TP8gcapdurTdjaeP.png"
      },
      {
        "slug": "pawmot",
        "name": "Pawmot",
        "image": "https://i.pokebase.app/pokemon-champions/gmbMAEC9quPSEhSYB8THs.png"
      },
      {
        "slug": "pawmo",
        "name": "Pawmo",
        "image": "https://i.pokebase.app/pokemon-champions/EKY46GVTVS4193_nDQHPK.png"
      },
      {
        "slug": "pawmi",
        "name": "Pawmi",
        "image": "https://i.pokebase.app/pokemon-champions/-s5dOcmqMy1sScM5IE9Ps.png"
      },
      {
        "slug": "melmetal",
        "name": "Melmetal",
        "image": "https://i.pokebase.app/pokemon-champions/AYWLv8TVGthtrwrRVpyJu.png"
      },
      {
        "slug": "crabominable",
        "name": "Crabominable",
        "image": "https://i.pokebase.app/pokemon-champions/aiVv_0ixddWd_t021WzSU.png"
      },
      {
        "slug": "crabrawler",
        "name": "Crabrawler",
        "image": "https://i.pokebase.app/pokemon-champions/0uYmqHjt7VWF48Wo5a1fv.png"
      },
      {
        "slug": "pangoro",
        "name": "Pangoro",
        "image": "https://i.pokebase.app/pokemon-champions/9z1s2FSG2vDfVIsqpvpg1.png"
      },
      {
        "slug": "pancham",
        "name": "Pancham",
        "image": "https://i.pokebase.app/pokemon-champions/F6rvInSpLSuCFUNERcHMR.png"
      }
    ]
  },
  {
    "slug": "justified",
    "name": "Justified",
    "description": "When the Pokémon is hit by a Dark-type attack, its Attack stat is boosted by its sense of justice.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/justified",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "keldeo-resolute",
        "name": "Keldeo (Resolute)",
        "image": "https://i.pokebase.app/pokemon-champions/ZmRKWBeUBr_LyYU4rbikY.png"
      },
      {
        "slug": "keldeo-ordinary",
        "name": "Keldeo (Ordinary)",
        "image": "https://i.pokebase.app/pokemon-champions/flK2jnyGfd56DJ3dEXUPg.png"
      },
      {
        "slug": "keldeo",
        "name": "Keldeo",
        "image": "https://i.pokebase.app/pokemon-champions/TTpWdVgQwauELWRYeTMKM.png"
      },
      {
        "slug": "virizion",
        "name": "Virizion",
        "image": "https://i.pokebase.app/pokemon-champions/iTzmflonj6dMLx2zb1DfC.png"
      },
      {
        "slug": "terrakion",
        "name": "Terrakion",
        "image": "https://i.pokebase.app/pokemon-champions/7miKy3o5YnpV0YJwyhCz9.png"
      },
      {
        "slug": "cobalion",
        "name": "Cobalion",
        "image": "https://i.pokebase.app/pokemon-champions/ZSldOKKayMS_klj-BKQwk.png"
      },
      {
        "slug": "gallade",
        "name": "Gallade",
        "image": "https://i.pokebase.app/pokemon-champions/P3Yi96mm14eIEA_jjJ-Q6.png"
      },
      {
        "slug": "lucario",
        "name": "Lucario",
        "image": "https://i.pokebase.app/pokemon-champions/sNbWqyBUzO1rJGQt6aadF.png"
      },
      {
        "slug": "absol",
        "name": "Absol",
        "image": "https://i.pokebase.app/pokemon-champions/PF_QIWYI_UjHRSsrmSWUq.png"
      },
      {
        "slug": "growlithe",
        "name": "Growlithe",
        "image": "https://i.pokebase.app/pokemon-champions/mRPtJ2RtI-1dSeB7FTgTd.png"
      }
    ]
  },
  {
    "slug": "keen-eye",
    "name": "Keen Eye",
    "description": "The Pokémon's keen eyes prevent its accuracy from being lowered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/keen-eye",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lycanroc-midday",
        "name": "Lycanroc (Midday)",
        "image": "https://i.pokebase.app/pokemon-champions/qF2E0TtfD1_VXPx7VWVg3.png"
      },
      {
        "slug": "meowstic-male",
        "name": "Meowstic (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/eqs7aIPXHbzz5UQBPdmRg.png"
      },
      {
        "slug": "lycanroc-midnight",
        "name": "Lycanroc (Midnight)",
        "image": "https://i.pokebase.app/pokemon-champions/5e1nWZtfdoT9nAroj94Rr.png"
      },
      {
        "slug": "meowstic-female",
        "name": "Meowstic (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XsEqQU3DPk5SEcW4PaWQL.png"
      },
      {
        "slug": "braviary-hisui",
        "name": "Hisuian Braviary",
        "image": "https://i.pokebase.app/pokemon-champions/X4mlCY8G-6qrIKdflBVqp.png"
      },
      {
        "slug": "sneasel-hisui",
        "name": "Hisuian Sneasel",
        "image": "https://i.pokebase.app/pokemon-champions/mDKs-C-9lVaq7C_OypixS.png"
      },
      {
        "slug": "bombirdier",
        "name": "Bombirdier",
        "image": "https://i.pokebase.app/pokemon-champions/oEX_De4nsXgpe4AEnvBS5.png"
      },
      {
        "slug": "corvisquire",
        "name": "Corvisquire",
        "image": "https://i.pokebase.app/pokemon-champions/uY4-jVcDA9tPPJJXw-5NZ.png"
      },
      {
        "slug": "rookidee",
        "name": "Rookidee",
        "image": "https://i.pokebase.app/pokemon-champions/X74qwIHHy8squzWTrys4S.png"
      },
      {
        "slug": "rockruff",
        "name": "Rockruff",
        "image": "https://i.pokebase.app/pokemon-champions/FwiYtFUpsMoylYFBA68Ca.png"
      }
    ]
  },
  {
    "slug": "klutz",
    "name": "Klutz",
    "description": "The Pokémon can't use any held items.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/klutz",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "capsakid",
        "name": "Capsakid",
        "image": "https://i.pokebase.app/pokemon-champions/eYJpijCcRUxwRiaoZKlA_.png"
      },
      {
        "slug": "fidough",
        "name": "Fidough",
        "image": "https://i.pokebase.app/pokemon-champions/bsyx7wx24M2_kkMrkUnWg.png"
      },
      {
        "slug": "toxel",
        "name": "Toxel",
        "image": "https://i.pokebase.app/pokemon-champions/FysOl3mjEPG5_ALOjDxhM.png"
      },
      {
        "slug": "bewear",
        "name": "Bewear",
        "image": "https://i.pokebase.app/pokemon-champions/lyKxYTNfdqmPEzqP73X4V.png"
      },
      {
        "slug": "stufful",
        "name": "Stufful",
        "image": "https://i.pokebase.app/pokemon-champions/mETOy78U4UbtCyk_wGZ_T.png"
      },
      {
        "slug": "golurk",
        "name": "Golurk",
        "image": "https://i.pokebase.app/pokemon-champions/1yjzzGM_7zX5yTtWh_JER.png"
      },
      {
        "slug": "golett",
        "name": "Golett",
        "image": "https://i.pokebase.app/pokemon-champions/t13A5XcO8sEpbN7zJQ-PC.png"
      },
      {
        "slug": "audino",
        "name": "Audino",
        "image": "https://i.pokebase.app/pokemon-champions/18DEkd7RDVxpMxa-yS16t.png"
      },
      {
        "slug": "woobat",
        "name": "Woobat",
        "image": "https://i.pokebase.app/pokemon-champions/Nw4B9J-dWvI9rVkatxucY.png"
      },
      {
        "slug": "swoobat",
        "name": "Swoobat",
        "image": "https://i.pokebase.app/pokemon-champions/H-Cq-VpBoUn95mGJfv8mt.png"
      }
    ]
  },
  {
    "slug": "leaf-guard",
    "name": "Leaf Guard",
    "description": "Prevents status conditions in harsh sunlight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/leaf-guard",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zarude-dada",
        "name": "Zarude (Dada)",
        "image": "https://i.pokebase.app/pokemon-champions/2n_wIXr6-57y7oyKyE9OB.png"
      },
      {
        "slug": "lurantis-totem",
        "name": "Lurantis (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/tZUaR7DuaDhtV0L9_jakd.png"
      },
      {
        "slug": "lilligant-hisui",
        "name": "Hisuian Lilligant",
        "image": "https://i.pokebase.app/pokemon-champions/RcGlI5dJmuF5URvrVVff-.png"
      },
      {
        "slug": "zarude",
        "name": "Zarude",
        "image": "https://i.pokebase.app/pokemon-champions/zPcIMIeblY_OwNDRgPx79.png"
      },
      {
        "slug": "tsareena",
        "name": "Tsareena",
        "image": "https://i.pokebase.app/pokemon-champions/4DjTvWYiOAadIzv02yDPP.png"
      },
      {
        "slug": "steenee",
        "name": "Steenee",
        "image": "https://i.pokebase.app/pokemon-champions/FcqECKjMBbxdWClTQLMIu.png"
      },
      {
        "slug": "lurantis",
        "name": "Lurantis",
        "image": "https://i.pokebase.app/pokemon-champions/TfAaK_00bfLPHxdTkzBZ9.png"
      },
      {
        "slug": "bounsweet",
        "name": "Bounsweet",
        "image": "https://i.pokebase.app/pokemon-champions/KoTNkSFt-b1mm-UjTmwPM.png"
      },
      {
        "slug": "fomantis",
        "name": "Fomantis",
        "image": "https://i.pokebase.app/pokemon-champions/Ke4KSwM8eGGKepKapPLUj.png"
      },
      {
        "slug": "lilligant",
        "name": "Lilligant",
        "image": "https://i.pokebase.app/pokemon-champions/1tzcwAchhbm9Z6CDwaIAM.png"
      }
    ]
  },
  {
    "slug": "levitate",
    "name": "Levitate",
    "description": "Damage dealing Ground-type moves have no effect on this Pokémon. Cannot be trapped by Arena Trap ability. Takes no damage from Spikes.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/levitate",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "vikavolt-totem",
        "name": "Vikavolt (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/kpjVnVyY9sSoYvOU1goga.png"
      },
      {
        "slug": "delphox-mega",
        "name": "Mega Delphox",
        "image": "https://i.pokebase.app/pokemon-champions/zQ8LJP4RvWxCGO7Z-2m-q.png"
      },
      {
        "slug": "rotom-mow",
        "name": "Mow Rotom",
        "image": "https://i.pokebase.app/pokemon-champions/w4Mx8hzpGKgb0O5aVoW2g.png"
      },
      {
        "slug": "rotom-fan",
        "name": "Fan Rotom",
        "image": "https://i.pokebase.app/pokemon-champions/BVKE0X2YxlQo_5wwOwQ2k.png"
      },
      {
        "slug": "giratina-origin",
        "name": "Giratina (Origin)",
        "image": "https://i.pokebase.app/pokemon-champions/BB5pRkKfrr9qdgdBmiwLK.png"
      },
      {
        "slug": "rotom-frost",
        "name": "Frost Rotom",
        "image": "https://i.pokebase.app/pokemon-champions/yyRgBrAL1nP5waCCRluby.png"
      },
      {
        "slug": "rotom-wash",
        "name": "Wash Rotom",
        "image": "https://i.pokebase.app/pokemon-champions/dhqpaV7KdSjzMXUJ0evVE.png"
      },
      {
        "slug": "rotom-heat",
        "name": "Heat Rotom",
        "image": "https://i.pokebase.app/pokemon-champions/uACMr_es7TijZi3AGAb-o.png"
      },
      {
        "slug": "latios-mega",
        "name": "Mega Latios",
        "image": "https://i.pokebase.app/pokemon-champions/WP8P_-cgrtM01V-_EKERj.png"
      },
      {
        "slug": "latias-mega",
        "name": "Mega Latias",
        "image": "https://i.pokebase.app/pokemon-champions/JqUikGFfssYJkSKaT0R9a.png"
      }
    ]
  },
  {
    "slug": "libero",
    "name": "Libero",
    "description": "Changes the Pokémon's type to the type of the move it's about to use. This works only once each time the Pokémon enters battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/libero",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cinderace-gmax",
        "name": "Cinderace (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/OXUmb32kOwKxmfPqIRovR.png"
      },
      {
        "slug": "cinderace",
        "name": "Cinderace",
        "image": "https://i.pokebase.app/pokemon-champions/_w0y-hkwWzrnHnoF-qli7.png"
      },
      {
        "slug": "raboot",
        "name": "Raboot",
        "image": "https://i.pokebase.app/pokemon-champions/mmiP0HKZEvNMOPqETLcmZ.png"
      },
      {
        "slug": "scorbunny",
        "name": "Scorbunny",
        "image": "https://i.pokebase.app/pokemon-champions/JiCft0wqOE3115Mqkw78p.png"
      }
    ]
  },
  {
    "slug": "light-metal",
    "name": "Light Metal",
    "description": "Halves the Pokémon's weight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/light-metal",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "duraludon-gmax",
        "name": "Duraludon (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/ehi0AfFLkFaVXB4OXDUsz.png"
      },
      {
        "slug": "duraludon",
        "name": "Duraludon",
        "image": "https://i.pokebase.app/pokemon-champions/A3RaGn89C6s6yC2GtAv48.png"
      },
      {
        "slug": "registeel",
        "name": "Registeel",
        "image": "https://i.pokebase.app/pokemon-champions/z8FYCmI8g5VuDfO1QXNCl.png"
      },
      {
        "slug": "metagross",
        "name": "Metagross",
        "image": "https://i.pokebase.app/pokemon-champions/RZN80GFzjEwuQg9dnliow.png"
      },
      {
        "slug": "beldum",
        "name": "Beldum",
        "image": "https://i.pokebase.app/pokemon-champions/2uPTMYMngi2GnYN-z22UX.png"
      },
      {
        "slug": "metang",
        "name": "Metang",
        "image": "https://i.pokebase.app/pokemon-champions/8wtu1LX_S1yl_oeyV3ygd.png"
      },
      {
        "slug": "scizor",
        "name": "Scizor",
        "image": "https://i.pokebase.app/pokemon-champions/GPqqPaRzYPgrceJseoYfd.png"
      }
    ]
  },
  {
    "slug": "lightning-rod",
    "name": "Lightning Rod",
    "description": "The Pokémon draws in all Electric-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/lightning-rod",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pikachu-starter",
        "name": "Pikachu (Starter)",
        "image": "https://i.pokebase.app/pokemon-champions/81plE3ueK4p4BqBqIee2b.png"
      },
      {
        "slug": "togedemaru-totem",
        "name": "Togedemaru (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/nPy1wHk0GtyxGP4b_nyiZ.png"
      },
      {
        "slug": "marowak-totem",
        "name": "Marowak (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ScygXUwGhTejnavpjAPSA.png"
      },
      {
        "slug": "pikachu-gmax",
        "name": "Pikachu (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/yviKZH6wKTxKppFq4Qwv5.png"
      },
      {
        "slug": "sceptile-mega",
        "name": "Mega Sceptile",
        "image": "https://i.pokebase.app/pokemon-champions/TfBtTBTfjPtSqM5nvVzia.png"
      },
      {
        "slug": "marowak-alola",
        "name": "Alolan Marowak",
        "image": "https://i.pokebase.app/pokemon-champions/fNoYd9MInKPuDlRTZpdgA.png"
      },
      {
        "slug": "pincurchin",
        "name": "Pincurchin",
        "image": "https://i.pokebase.app/pokemon-champions/s_bmXMMdZgchjUcuDGDtv.png"
      },
      {
        "slug": "togedemaru",
        "name": "Togedemaru",
        "image": "https://i.pokebase.app/pokemon-champions/gdjKCa7R8E4Xml0tKnE4W.png"
      },
      {
        "slug": "zebstrika",
        "name": "Zebstrika",
        "image": "https://i.pokebase.app/pokemon-champions/FtOAsdcCSJgqq_RQkhRw4.png"
      },
      {
        "slug": "blitzle",
        "name": "Blitzle",
        "image": "https://i.pokebase.app/pokemon-champions/YpC-A9iTrhxXcp3j9zpZT.png"
      }
    ]
  },
  {
    "slug": "limber",
    "name": "Limber",
    "description": "The Pokémon's limber body prevents it from being paralyzed.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/limber",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grapploct",
        "name": "Grapploct",
        "image": "https://i.pokebase.app/pokemon-champions/Yo7nKIiEd5aiw2Ur21son.png"
      },
      {
        "slug": "clobbopus",
        "name": "Clobbopus",
        "image": "https://i.pokebase.app/pokemon-champions/Ym6twAz-V2Pb7oIIgLpSZ.png"
      },
      {
        "slug": "toxapex",
        "name": "Toxapex",
        "image": "https://i.pokebase.app/pokemon-champions/m8hHKqNETgT9NCT1pV-zV.png"
      },
      {
        "slug": "mareanie",
        "name": "Mareanie",
        "image": "https://i.pokebase.app/pokemon-champions/tWvRyyXLYLu0lgfE2dxek.png"
      },
      {
        "slug": "hawlucha",
        "name": "Hawlucha",
        "image": "https://i.pokebase.app/pokemon-champions/zluFZIMip6e5tViKM0UtM.png"
      },
      {
        "slug": "stunfisk",
        "name": "Stunfisk",
        "image": "https://i.pokebase.app/pokemon-champions/KBnpe2K_EV5cw8pa-IHk4.png"
      },
      {
        "slug": "liepard",
        "name": "Liepard",
        "image": "https://i.pokebase.app/pokemon-champions/XkO0kR7P3vylqj7RfeI6a.png"
      },
      {
        "slug": "purrloin",
        "name": "Purrloin",
        "image": "https://i.pokebase.app/pokemon-champions/q53EukiDf18FG0rJWJqDK.png"
      },
      {
        "slug": "glameow",
        "name": "Glameow",
        "image": "https://i.pokebase.app/pokemon-champions/VjrroE8IRy5_AQTDhL73C.png"
      },
      {
        "slug": "lopunny",
        "name": "Lopunny",
        "image": "https://i.pokebase.app/pokemon-champions/NES-bQqDD0U8MosDYi8vv.png"
      }
    ]
  },
  {
    "slug": "lingering-aroma",
    "name": "Lingering Aroma",
    "description": "Contact with the Pokémon changes the attacker's Ability to Lingering Aroma.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/lingering-aroma",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "oinkologne-male",
        "name": "Oinkologne (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/WrkJBRZFjQ3bJHJe5hBq1.png"
      },
      {
        "slug": "oinkologne",
        "name": "Oinkologne",
        "image": "https://i.pokebase.app/pokemon-champions/OIgbJgOsBPtfY3BmoWCD3.png"
      }
    ]
  },
  {
    "slug": "liquid-ooze",
    "name": "Liquid Ooze",
    "description": "The strong stench of the Pokémon's oozed liquid damages attackers that use HP-draining moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/liquid-ooze",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "gulpin",
        "name": "Gulpin",
        "image": "https://i.pokebase.app/pokemon-champions/vc1NNtmwI01SwYrMh8Hnc.png"
      },
      {
        "slug": "swalot",
        "name": "Swalot",
        "image": "https://i.pokebase.app/pokemon-champions/pQv30WAbQ77PlxQT0mOrG.png"
      },
      {
        "slug": "tentacruel",
        "name": "Tentacruel",
        "image": "https://i.pokebase.app/pokemon-champions/kV_nE4icSlCohj_DXCwpn.png"
      },
      {
        "slug": "tentacool",
        "name": "Tentacool",
        "image": "https://i.pokebase.app/pokemon-champions/rUNq4xPu9zAAbjMTyg65Q.png"
      }
    ]
  },
  {
    "slug": "liquid-voice",
    "name": "Liquid Voice",
    "description": "Sound-based moves become Water-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/liquid-voice",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "primarina",
        "name": "Primarina",
        "image": "https://i.pokebase.app/pokemon-champions/7-IvrzN7cTW-mIBSD_utZ.png"
      },
      {
        "slug": "brionne",
        "name": "Brionne",
        "image": "https://i.pokebase.app/pokemon-champions/q2-uMd3J4yZlsfrDPYDEi.png"
      },
      {
        "slug": "popplio",
        "name": "Popplio",
        "image": "https://i.pokebase.app/pokemon-champions/PvBG-BwS6ZVv-jMmisUnS.png"
      }
    ]
  },
  {
    "slug": "long-reach",
    "name": "Long Reach",
    "description": "The Pokémon uses its moves without making contact with the target.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/long-reach",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "decidueye",
        "name": "Decidueye",
        "image": "https://i.pokebase.app/pokemon-champions/8Anx3ctcij7WOLp75xxJZ.png"
      },
      {
        "slug": "dartrix",
        "name": "Dartrix",
        "image": "https://i.pokebase.app/pokemon-champions/VpH18ZXk-DoaC5DsgEIPY.png"
      },
      {
        "slug": "rowlet",
        "name": "Rowlet",
        "image": "https://i.pokebase.app/pokemon-champions/PefLqqeNdMDKD-Tz96qEm.png"
      }
    ]
  },
  {
    "slug": "magic-bounce",
    "name": "Magic Bounce",
    "description": "Reflects non-attacking moves used on the Pokémon back to the attacking Pokémon",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/magic-bounce",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "hatterene-gmax",
        "name": "Hatterene (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/_1quBBtOc10KU7uZtQzMA.png"
      },
      {
        "slug": "diancie-mega",
        "name": "Mega Diancie",
        "image": "https://i.pokebase.app/pokemon-champions/unf4iuMZE3AwVIw9mRAwr.png"
      },
      {
        "slug": "absol-mega",
        "name": "Mega Absol",
        "image": "https://i.pokebase.app/pokemon-champions/CRimbGT1QMirmnlPYkm-l.png"
      },
      {
        "slug": "sableye-mega",
        "name": "Mega Sableye",
        "image": "https://i.pokebase.app/pokemon-champions/tyYNgrFK4u4I8RXWrhtEI.png"
      },
      {
        "slug": "clefable-mega",
        "name": "Mega Clefable",
        "image": "https://i.pokebase.app/pokemon-champions/Qatxx2POPt890HT5ICOHO.png"
      },
      {
        "slug": "hatterene",
        "name": "Hatterene",
        "image": "https://i.pokebase.app/pokemon-champions/1aATW1uYZQY1sVxZ1noHp.png"
      },
      {
        "slug": "hattrem",
        "name": "Hattrem",
        "image": "https://i.pokebase.app/pokemon-champions/7Bw5nZTli3rOZu3QgwIoc.png"
      },
      {
        "slug": "hatenna",
        "name": "Hatenna",
        "image": "https://i.pokebase.app/pokemon-champions/sKkWnIIrIgRTNxnMh0GEv.png"
      },
      {
        "slug": "espeon",
        "name": "Espeon",
        "image": "https://i.pokebase.app/pokemon-champions/-K3C4sN-ZcS4ugBVkZyeY.png"
      },
      {
        "slug": "xatu",
        "name": "Xatu",
        "image": "https://i.pokebase.app/pokemon-champions/TvND89NWRD9KHiNyjjB9O.png"
      }
    ]
  },
  {
    "slug": "magic-guard",
    "name": "Magic Guard",
    "description": "The Pokémon only takes damage from attacks.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/magic-guard",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "reuniclus",
        "name": "Reuniclus",
        "image": "https://i.pokebase.app/pokemon-champions/ijvbeAsHhMTos_LcxfDez.png"
      },
      {
        "slug": "duosion",
        "name": "Duosion",
        "image": "https://i.pokebase.app/pokemon-champions/H5OUc31uYjPZe1OkSotsY.png"
      },
      {
        "slug": "solosis",
        "name": "Solosis",
        "image": "https://i.pokebase.app/pokemon-champions/jJUgDLwsOFHhlIyDeZCER.png"
      },
      {
        "slug": "sigilyph",
        "name": "Sigilyph",
        "image": "https://i.pokebase.app/pokemon-champions/3D93QyiyHmd5JrNodD2VW.png"
      },
      {
        "slug": "cleffa",
        "name": "Cleffa",
        "image": "https://i.pokebase.app/pokemon-champions/iDhYCsVwOML2_aFAWduUC.png"
      },
      {
        "slug": "alakazam",
        "name": "Alakazam",
        "image": "https://i.pokebase.app/pokemon-champions/fU0Ud-qhKinjPp1MEG2a3.png"
      },
      {
        "slug": "abra",
        "name": "Abra",
        "image": "https://i.pokebase.app/pokemon-champions/4zggz-_alqnmij0PZsIwq.png"
      },
      {
        "slug": "kadabra",
        "name": "Kadabra",
        "image": "https://i.pokebase.app/pokemon-champions/Uf-R2a-5adI8LkIN8izQr.png"
      },
      {
        "slug": "clefairy",
        "name": "Clefairy",
        "image": "https://i.pokebase.app/pokemon-champions/cK2aVP10Y6_iKqjqpvXCS.png"
      },
      {
        "slug": "clefable",
        "name": "Clefable",
        "image": "https://i.pokebase.app/pokemon-champions/C2JdLKPXGolDQPlwIBvyb.png"
      }
    ]
  },
  {
    "slug": "magician",
    "name": "Magician",
    "description": "The Pokémon steals the held item from any target it hits with a move.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/magician",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "hoopa-unbound",
        "name": "Hoopa (Unbound)",
        "image": "https://i.pokebase.app/pokemon-champions/WJ45yJ9Z_RUTN_fZlvbOp.png"
      },
      {
        "slug": "hoopa",
        "name": "Hoopa",
        "image": "https://i.pokebase.app/pokemon-champions/-gcojkC8nvMpTT0FZ9VSu.png"
      },
      {
        "slug": "klefki",
        "name": "Klefki",
        "image": "https://i.pokebase.app/pokemon-champions/-aG6nIy9SoNRd-ebabILR.png"
      },
      {
        "slug": "delphox",
        "name": "Delphox",
        "image": "https://i.pokebase.app/pokemon-champions/WiPK4MsJLNe4_E4IHwuar.png"
      },
      {
        "slug": "braixen",
        "name": "Braixen",
        "image": "https://i.pokebase.app/pokemon-champions/CQTJfTCzrAdtxnada1pwH.png"
      },
      {
        "slug": "fennekin",
        "name": "Fennekin",
        "image": "https://i.pokebase.app/pokemon-champions/cAKaYcNFMcZrjCWCETwV5.png"
      }
    ]
  },
  {
    "slug": "magma-armor",
    "name": "Magma Armor",
    "description": "The Pokémon’s hot magma coating prevents it from being frozen.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/magma-armor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "camerupt",
        "name": "Camerupt",
        "image": "https://i.pokebase.app/pokemon-champions/qQz0JfI6KTQ8g-niem3WJ.png"
      },
      {
        "slug": "magcargo",
        "name": "Magcargo",
        "image": "https://i.pokebase.app/pokemon-champions/fh1KxXj7-d2DrKcX7EVSl.png"
      },
      {
        "slug": "slugma",
        "name": "Slugma",
        "image": "https://i.pokebase.app/pokemon-champions/BsEYx7033milbpFC1PcIw.png"
      }
    ]
  },
  {
    "slug": "magnet-pull",
    "name": "Magnet Pull",
    "description": "Prevents Steel-type Pokémon from fleeing by pulling them in with magnetism.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/magnet-pull",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "golem-alola",
        "name": "Alolan Golem",
        "image": "https://i.pokebase.app/pokemon-champions/ppxrQCjZ50XFVvByaGuw8.png"
      },
      {
        "slug": "graveler-alola",
        "name": "Alolan Graveler",
        "image": "https://i.pokebase.app/pokemon-champions/D4Teln0xYPyrWMFO3Or2Y.png"
      },
      {
        "slug": "geodude-alola",
        "name": "Alolan Geodude",
        "image": "https://i.pokebase.app/pokemon-champions/1nsyhPxOmL74E8uQTHh59.png"
      },
      {
        "slug": "meltan",
        "name": "Meltan",
        "image": "https://i.pokebase.app/pokemon-champions/sVvLXm8rgP3mKV99T7uoL.png"
      },
      {
        "slug": "probopass",
        "name": "Probopass",
        "image": "https://i.pokebase.app/pokemon-champions/l_Z4070B2juKiWGDNxvtN.png"
      },
      {
        "slug": "magnezone",
        "name": "Magnezone",
        "image": "https://i.pokebase.app/pokemon-champions/AeXZoOwlIpqyxxPRaddRC.png"
      },
      {
        "slug": "nosepass",
        "name": "Nosepass",
        "image": "https://i.pokebase.app/pokemon-champions/HUd5j3TyA8bU2HBlkhCJa.png"
      },
      {
        "slug": "magneton",
        "name": "Magneton",
        "image": "https://i.pokebase.app/pokemon-champions/uYEoUC_fwDv9EM8VxRTYU.png"
      },
      {
        "slug": "magnemite",
        "name": "Magnemite",
        "image": "https://i.pokebase.app/pokemon-champions/F1NUBWmIGR6plJ3EexIdN.png"
      }
    ]
  },
  {
    "slug": "marvel-scale",
    "name": "Marvel Scale",
    "description": "The Pokémon's marvelous scales boost its Defense stat if it has a status condition.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/marvel-scale",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "milotic",
        "name": "Milotic",
        "image": "https://i.pokebase.app/pokemon-champions/vao1WKN72l2FkvnKUp4tq.png"
      },
      {
        "slug": "dragonair",
        "name": "Dragonair",
        "image": "https://i.pokebase.app/pokemon-champions/bog2BSsbWyeT-R6Z5KaIH.png"
      },
      {
        "slug": "dratini",
        "name": "Dratini",
        "image": "https://i.pokebase.app/pokemon-champions/CVy6meHI88XYgRgh0S3I4.png"
      }
    ]
  },
  {
    "slug": "mega-launcher",
    "name": "Mega Launcher",
    "description": "Powers up pulse moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mega-launcher",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "blastoise-mega",
        "name": "Mega Blastoise",
        "image": "https://i.pokebase.app/pokemon-champions/2TRBEXk5G_HDgFJIU-PVE.png"
      },
      {
        "slug": "clawitzer",
        "name": "Clawitzer",
        "image": "https://i.pokebase.app/pokemon-champions/4KVYyChPU5Ex5t5Kkp1tp.png"
      },
      {
        "slug": "clauncher",
        "name": "Clauncher",
        "image": "https://i.pokebase.app/pokemon-champions/JX1d0lI7xAdJRSCeeKhHr.png"
      }
    ]
  },
  {
    "slug": "mega-sol",
    "name": "Mega Sol",
    "description": "Even when the sunlight has not turned harsh, the Pokémon can use its moves as if the weather were harsh sunlight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mega-sol",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "meganium-mega",
        "name": "Mega Meganium",
        "image": "https://i.pokebase.app/pokemon-champions/6CKh9LUkHx6dG8xGJjq8_.png"
      }
    ]
  },
  {
    "slug": "merciless",
    "name": "Merciless",
    "description": "The Pokémon's attacks become critical hits if the target is poisoned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/merciless",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "toxapex",
        "name": "Toxapex",
        "image": "https://i.pokebase.app/pokemon-champions/m8hHKqNETgT9NCT1pV-zV.png"
      },
      {
        "slug": "mareanie",
        "name": "Mareanie",
        "image": "https://i.pokebase.app/pokemon-champions/tWvRyyXLYLu0lgfE2dxek.png"
      }
    ]
  },
  {
    "slug": "mimicry",
    "name": "Mimicry",
    "description": "Changes the Pokémon’s type depending on the terrain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mimicry",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "stunfisk-galar",
        "name": "Galarian Stunfisk",
        "image": "https://i.pokebase.app/pokemon-champions/AmqkkSfLEjeuVKT7imQDL.png"
      }
    ]
  },
  {
    "slug": "minds-eye",
    "name": "Mind’s Eye",
    "description": "The Pokémon ignores changes to opponents' evasiveness, its accuracy can't be lowered, and it can hit Ghost types with Normal-type and Fighting-type moves",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/minds-eye",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ursaluna-bloodmoon",
        "name": "Ursaluna (Bloodmoon)",
        "image": "https://i.pokebase.app/pokemon-champions/nPLxJsFwGlLoTIymXaJwH.png"
      }
    ]
  },
  {
    "slug": "minus",
    "name": "Minus",
    "description": "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/minus",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "toxtricity-low-key-gmax",
        "name": "Toxtricity (Low Key Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/GuE-07MB0LKM4ZA_W2h6n.png"
      },
      {
        "slug": "toxtricity-low-key",
        "name": "Toxtricity (Low Key)",
        "image": "https://i.pokebase.app/pokemon-champions/w2oWUrdD-QWSZDEkfaNve.png"
      },
      {
        "slug": "klinklang",
        "name": "Klinklang",
        "image": "https://i.pokebase.app/pokemon-champions/54VdBP1iVIVC7s_83hrwh.png"
      },
      {
        "slug": "klang",
        "name": "Klang",
        "image": "https://i.pokebase.app/pokemon-champions/oTG55SBu3KNiPDiUuaV1P.png"
      },
      {
        "slug": "klink",
        "name": "Klink",
        "image": "https://i.pokebase.app/pokemon-champions/3IK0sWkNqypwXYrG-bW49.png"
      },
      {
        "slug": "minun",
        "name": "Minun",
        "image": "https://i.pokebase.app/pokemon-champions/DUsS5LndZVpXPiVOGzNow.png"
      },
      {
        "slug": "manectric",
        "name": "Manectric",
        "image": "https://i.pokebase.app/pokemon-champions/nDPDktxjTu7AXuu4GxCUf.png"
      },
      {
        "slug": "electrike",
        "name": "Electrike",
        "image": "https://i.pokebase.app/pokemon-champions/tc-JANsLKAMJeIg9xVNfU.png"
      }
    ]
  },
  {
    "slug": "mirror-armor",
    "name": "Mirror Armor",
    "description": "Bounces back only the stat-lowering effects that the Pokémon receives.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mirror-armor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "corviknight-gmax",
        "name": "Corviknight (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/v1iOXviXyhKk7eQgr_DI7.png"
      },
      {
        "slug": "corviknight",
        "name": "Corviknight",
        "image": "https://i.pokebase.app/pokemon-champions/e_1RUwMMsHtj52dWxgkRY.png"
      }
    ]
  },
  {
    "slug": "misty-surge",
    "name": "Misty Surge",
    "description": "Turns the ground into Misty Terrain when the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/misty-surge",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "weezing-galar",
        "name": "Galarian Weezing",
        "image": "https://i.pokebase.app/pokemon-champions/4WzRtmUudfPuk2HvRz6rk.png"
      },
      {
        "slug": "tapu-fini",
        "name": "Tapu Fini",
        "image": "https://i.pokebase.app/pokemon-champions/d61qkqrSf5inCAmiML8MS.png"
      }
    ]
  },
  {
    "slug": "mold-breaker",
    "name": "Mold Breaker",
    "description": "The Pokémon's moves are not affected by foe’s abilities during battle",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mold-breaker",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "basculegion-male",
        "name": "Basculegion (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/Fc8RTjatQyq1k5BVAi3JW.png"
      },
      {
        "slug": "basculin-red-striped",
        "name": "Basculin (Red Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/1tsdWjFTPvhWmIsblQ8gB.png"
      },
      {
        "slug": "ogerpon-hearthflame-mask",
        "name": "Ogerpon (Hearthflame Mask)",
        "image": "https://i.pokebase.app/pokemon-champions/WMFv2HuTyX6-4YE0Ld66e.png"
      },
      {
        "slug": "basculegion-female",
        "name": "Basculegion (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XgilENALPySbZX3jFD_eL.png"
      },
      {
        "slug": "basculin-white-striped",
        "name": "Basculin (White Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/V_lS9CQY2ee8HNpFMkZBS.png"
      },
      {
        "slug": "basculin-blue-striped",
        "name": "Basculin (Blue Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/WfM9IMhYHGG8SxoYebF_B.png"
      },
      {
        "slug": "emboar-mega",
        "name": "Mega Emboar",
        "image": "https://i.pokebase.app/pokemon-champions/wZnH3397Bwhrg4mlYk07_.png"
      },
      {
        "slug": "ampharos-mega",
        "name": "Mega Ampharos",
        "image": "https://i.pokebase.app/pokemon-champions/3iZrMK9yLuWYkJbNRJNgm.png"
      },
      {
        "slug": "gyarados-mega",
        "name": "Mega Gyarados",
        "image": "https://i.pokebase.app/pokemon-champions/jmBTzMkR3WA4BqkMu9Nb1.png"
      },
      {
        "slug": "veluza",
        "name": "Veluza",
        "image": "https://i.pokebase.app/pokemon-champions/EEU9BTODKseZmm9GYkaWa.png"
      }
    ]
  },
  {
    "slug": "moody",
    "name": "Moody",
    "description": "Every turn, one of the Pokémon's stats will be boosted sharply but another stat will be lowered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/moody",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "scovillain",
        "name": "Scovillain",
        "image": "https://i.pokebase.app/pokemon-champions/kb-xBLBrW5_K9i8Z5BWkJ.png"
      },
      {
        "slug": "bibarel",
        "name": "Bibarel",
        "image": "https://i.pokebase.app/pokemon-champions/eYb3wBeW-xtXeN-GGh7Rk.png"
      },
      {
        "slug": "bidoof",
        "name": "Bidoof",
        "image": "https://i.pokebase.app/pokemon-champions/GnGcJCDct_KwqJbijy4qE.png"
      },
      {
        "slug": "glalie",
        "name": "Glalie",
        "image": "https://i.pokebase.app/pokemon-champions/H8G-w1Fx_uQgo0jLZXi4H.png"
      },
      {
        "slug": "snorunt",
        "name": "Snorunt",
        "image": "https://i.pokebase.app/pokemon-champions/_uYhLvBQqzryQOLjM-qlo.png"
      },
      {
        "slug": "smeargle",
        "name": "Smeargle",
        "image": "https://i.pokebase.app/pokemon-champions/4cF-q1seD7CRT4jZ0hK4J.png"
      },
      {
        "slug": "remoraid",
        "name": "Remoraid",
        "image": "https://i.pokebase.app/pokemon-champions/O7omraGm8QE4INyDBE5SV.png"
      },
      {
        "slug": "octillery",
        "name": "Octillery",
        "image": "https://i.pokebase.app/pokemon-champions/yqcAmAQQ4MDxRrBKiZbYN.png"
      }
    ]
  },
  {
    "slug": "motor-drive",
    "name": "Motor Drive",
    "description": "The Pokémon takes no damage when hit by Electric-type moves. Instead, its Speed stat is boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/motor-drive",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "emolga",
        "name": "Emolga",
        "image": "https://i.pokebase.app/pokemon-champions/5DjIfAxrnf2NpH9Ns-yJU.png"
      },
      {
        "slug": "zebstrika",
        "name": "Zebstrika",
        "image": "https://i.pokebase.app/pokemon-champions/FtOAsdcCSJgqq_RQkhRw4.png"
      },
      {
        "slug": "blitzle",
        "name": "Blitzle",
        "image": "https://i.pokebase.app/pokemon-champions/YpC-A9iTrhxXcp3j9zpZT.png"
      },
      {
        "slug": "electivire",
        "name": "Electivire",
        "image": "https://i.pokebase.app/pokemon-champions/cmdXWg25SLWAI1NWYhiWr.png"
      }
    ]
  },
  {
    "slug": "moxie",
    "name": "Moxie",
    "description": "When the Pokémon knocks out a target, it shows moxie, which boosts its Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/moxie",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pyroar-male",
        "name": "Pyroar (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/_n2-9YvS0oXyQRDF7zRVX.png"
      },
      {
        "slug": "quaquaval",
        "name": "Quaquaval",
        "image": "https://i.pokebase.app/pokemon-champions/-7RHHVPmP5kfvvncovdTA.png"
      },
      {
        "slug": "quaxwell",
        "name": "Quaxwell",
        "image": "https://i.pokebase.app/pokemon-champions/PkPww5Sz8xlNk6EE8ghKD.png"
      },
      {
        "slug": "quaxly",
        "name": "Quaxly",
        "image": "https://i.pokebase.app/pokemon-champions/lS6Y9L4lnps0r-88GG3x0.png"
      },
      {
        "slug": "pyroar",
        "name": "Pyroar",
        "image": "https://i.pokebase.app/pokemon-champions/fZElhYojSJvU6sWiRGvme.png"
      },
      {
        "slug": "litleo",
        "name": "Litleo",
        "image": "https://i.pokebase.app/pokemon-champions/mYRGvHr-8QSsyXU75pf0Z.png"
      },
      {
        "slug": "scraggy",
        "name": "Scraggy",
        "image": "https://i.pokebase.app/pokemon-champions/Yx5zhTnmrn-9HlsxsLflz.png"
      },
      {
        "slug": "scrafty",
        "name": "Scrafty",
        "image": "https://i.pokebase.app/pokemon-champions/rQzWfA_qY9vzyqWBS1d51.png"
      },
      {
        "slug": "krookodile",
        "name": "Krookodile",
        "image": "https://i.pokebase.app/pokemon-champions/67dLAI9e5uuQfcy2tTCix.png"
      },
      {
        "slug": "krokorok",
        "name": "Krokorok",
        "image": "https://i.pokebase.app/pokemon-champions/eV5nzKVcyEBb6G_icKR28.png"
      }
    ]
  },
  {
    "slug": "multiscale",
    "name": "Multiscale",
    "description": "Reduces damage afflicted to the Pokémon by 50% if at maximum HP",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/multiscale",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "dragonite-mega",
        "name": "Mega Dragonite",
        "image": "https://i.pokebase.app/pokemon-champions/wpwgReCuz_ZEMDTY5dIdb.png"
      },
      {
        "slug": "lugia",
        "name": "Lugia",
        "image": "https://i.pokebase.app/pokemon-champions/hTNUkoGKNo5myenV3LorF.png"
      },
      {
        "slug": "dragonite",
        "name": "Dragonite",
        "image": "https://i.pokebase.app/pokemon-champions/xnBECJmacxRrngCWXIdQ9.png"
      }
    ]
  },
  {
    "slug": "multitype",
    "name": "Multitype",
    "description": "Changes the Pokémon's type to match the plate it holds.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/multitype",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "arceus",
        "name": "Arceus",
        "image": "https://i.pokebase.app/pokemon-champions/zjr_knFFI7UIw9lOgIYPU.png"
      }
    ]
  },
  {
    "slug": "mummy",
    "name": "Mummy",
    "description": "Contact with the Pokémon changes the attacker’s Ability to Mummy.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mummy",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cofagrigus",
        "name": "Cofagrigus",
        "image": "https://i.pokebase.app/pokemon-champions/JXMdTXoP0ZfpdnLfe0mgN.png"
      },
      {
        "slug": "yamask",
        "name": "Yamask",
        "image": "https://i.pokebase.app/pokemon-champions/AQNh2e0zhYyDArT-bXB2A.png"
      }
    ]
  },
  {
    "slug": "mycelium-might",
    "name": "Mycelium Might",
    "description": "The Pokémon will always act more slowly when using status moves, but these moves will be unimpeded by the Ability of the target.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/mycelium-might",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "toedscool",
        "name": "Toedscool",
        "image": "https://i.pokebase.app/pokemon-champions/jyUDdrhhqK9AV6TdURCmL.png"
      },
      {
        "slug": "toedscruel",
        "name": "Toedscruel",
        "image": "https://i.pokebase.app/pokemon-champions/Kpf-RWU30EJY7AOqZq38y.png"
      }
    ]
  },
  {
    "slug": "natural-cure",
    "name": "Natural Cure",
    "description": "The Pokémon's status conditions are cured when it switches out.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/natural-cure",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "shaymin-land",
        "name": "Shaymin (Land)",
        "image": "https://i.pokebase.app/pokemon-champions/Pf7opxLkKDTB1pjAGzAd9.png"
      },
      {
        "slug": "pawmot",
        "name": "Pawmot",
        "image": "https://i.pokebase.app/pokemon-champions/gmbMAEC9quPSEhSYB8THs.png"
      },
      {
        "slug": "pawmo",
        "name": "Pawmo",
        "image": "https://i.pokebase.app/pokemon-champions/EKY46GVTVS4193_nDQHPK.png"
      },
      {
        "slug": "pawmi",
        "name": "Pawmi",
        "image": "https://i.pokebase.app/pokemon-champions/-s5dOcmqMy1sScM5IE9Ps.png"
      },
      {
        "slug": "comfey",
        "name": "Comfey",
        "image": "https://i.pokebase.app/pokemon-champions/az1CrHs2skfoXoMOAcwbZ.png"
      },
      {
        "slug": "trevenant",
        "name": "Trevenant",
        "image": "https://i.pokebase.app/pokemon-champions/53DqtJy5iWvhMLYbNIDsk.png"
      },
      {
        "slug": "phantump",
        "name": "Phantump",
        "image": "https://i.pokebase.app/pokemon-champions/Q7SrEBmerYgJZZGAhyfPv.png"
      },
      {
        "slug": "shaymin",
        "name": "Shaymin",
        "image": "https://i.pokebase.app/pokemon-champions/RVR2gAYjHvGxIrgQV7kaV.png"
      },
      {
        "slug": "happiny",
        "name": "Happiny",
        "image": "https://i.pokebase.app/pokemon-champions/qIjdFskaIjGAsRmtQnjyh.png"
      },
      {
        "slug": "roserade",
        "name": "Roserade",
        "image": "https://i.pokebase.app/pokemon-champions/lwaA4aycVcQmMGV81KXMH.png"
      }
    ]
  },
  {
    "slug": "neuroforce",
    "name": "Neuroforce",
    "description": "Powers up moves that are super effective.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/neuroforce",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "necrozma-ultra",
        "name": "Necrozma (Ultra)",
        "image": "https://i.pokebase.app/pokemon-champions/qVk__FB5N-Du9H75cPWrc.png"
      }
    ]
  },
  {
    "slug": "neutralizing-gas",
    "name": "Neutralizing Gas",
    "description": "While the Pokémon is in the battle, the effects of all other Pokémon's Abilities will be nullified or will not be triggered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/neutralizing-gas",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "weezing-galar",
        "name": "Galarian Weezing",
        "image": "https://i.pokebase.app/pokemon-champions/4WzRtmUudfPuk2HvRz6rk.png"
      },
      {
        "slug": "weezing",
        "name": "Weezing",
        "image": "https://i.pokebase.app/pokemon-champions/cosCb5ywi4gAvSO-pXlau.png"
      },
      {
        "slug": "koffing",
        "name": "Koffing",
        "image": "https://i.pokebase.app/pokemon-champions/dcGf3f4p0l9oKboFarSzs.png"
      }
    ]
  },
  {
    "slug": "no-guard",
    "name": "No Guard",
    "description": "The accuracy of all moves known by this Pokémon and all Pokémon targeting this Pokémon raises to 100%",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/no-guard",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "machamp-gmax",
        "name": "Machamp (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Dmex20QRyj-CTO58tnWth.png"
      },
      {
        "slug": "lycanroc-midnight",
        "name": "Lycanroc (Midnight)",
        "image": "https://i.pokebase.app/pokemon-champions/5e1nWZtfdoT9nAroj94Rr.png"
      },
      {
        "slug": "hawlucha-mega",
        "name": "Mega Hawlucha",
        "image": "https://i.pokebase.app/pokemon-champions/yVPsXJetuHJe5qviHXxTm.png"
      },
      {
        "slug": "pidgeot-mega",
        "name": "Mega Pidgeot",
        "image": "https://i.pokebase.app/pokemon-champions/56tyldDlpwlXNVRtJK7AY.png"
      },
      {
        "slug": "doublade",
        "name": "Doublade",
        "image": "https://i.pokebase.app/pokemon-champions/XsZ19nqCfzRj44Et7INv3.png"
      },
      {
        "slug": "honedge",
        "name": "Honedge",
        "image": "https://i.pokebase.app/pokemon-champions/NuzmQT1lhZ86MPyDohqg9.png"
      },
      {
        "slug": "golurk",
        "name": "Golurk",
        "image": "https://i.pokebase.app/pokemon-champions/1yjzzGM_7zX5yTtWh_JER.png"
      },
      {
        "slug": "golett",
        "name": "Golett",
        "image": "https://i.pokebase.app/pokemon-champions/t13A5XcO8sEpbN7zJQ-PC.png"
      },
      {
        "slug": "karrablast",
        "name": "Karrablast",
        "image": "https://i.pokebase.app/pokemon-champions/oJNVDB_o2a7CyMW70WFY5.png"
      },
      {
        "slug": "machamp",
        "name": "Machamp",
        "image": "https://i.pokebase.app/pokemon-champions/cmqeMK82BGoWz6CSCN_5s.png"
      }
    ]
  },
  {
    "slug": "normalize",
    "name": "Normalize",
    "description": "All the Pokémon’s moves become Normal type. The power of those moves is boosted a little.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/normalize",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "delcatty",
        "name": "Delcatty",
        "image": "https://i.pokebase.app/pokemon-champions/1N_3vmK6s8Kd9nCiAKanp.png"
      },
      {
        "slug": "skitty",
        "name": "Skitty",
        "image": "https://i.pokebase.app/pokemon-champions/Gog-tirGfcE7NkAftU_d_.png"
      }
    ]
  },
  {
    "slug": "oblivious",
    "name": "Oblivious",
    "description": "The Pokémon is oblivious, keeping it from being infatuated, falling for taunts, or being affected by Intimidate.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/oblivious",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "salazzle-totem",
        "name": "Salazzle (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/kwZunzfon_MEul4qj94ln.png"
      },
      {
        "slug": "dondozo",
        "name": "Dondozo",
        "image": "https://i.pokebase.app/pokemon-champions/m7RzViUBXYRMza65yqf2_.png"
      },
      {
        "slug": "steenee",
        "name": "Steenee",
        "image": "https://i.pokebase.app/pokemon-champions/FcqECKjMBbxdWClTQLMIu.png"
      },
      {
        "slug": "bounsweet",
        "name": "Bounsweet",
        "image": "https://i.pokebase.app/pokemon-champions/KoTNkSFt-b1mm-UjTmwPM.png"
      },
      {
        "slug": "salazzle",
        "name": "Salazzle",
        "image": "https://i.pokebase.app/pokemon-champions/7QkKXxu3i_NntGKRcKgLX.png"
      },
      {
        "slug": "salandit",
        "name": "Salandit",
        "image": "https://i.pokebase.app/pokemon-champions/1XFGtTghYGcuVqnIDHQFC.png"
      },
      {
        "slug": "mamoswine",
        "name": "Mamoswine",
        "image": "https://i.pokebase.app/pokemon-champions/KP5lmdEiWAB3maz26UzG_.png"
      },
      {
        "slug": "lickilicky",
        "name": "Lickilicky",
        "image": "https://i.pokebase.app/pokemon-champions/3DCob5mDRszUcwhmeCllt.png"
      },
      {
        "slug": "walrein",
        "name": "Walrein",
        "image": "https://i.pokebase.app/pokemon-champions/GC6I5K0NooOAYDzOxcKaZ.png"
      },
      {
        "slug": "sealeo",
        "name": "Sealeo",
        "image": "https://i.pokebase.app/pokemon-champions/YXYrM7FTu02nQPvyYDzXM.png"
      }
    ]
  },
  {
    "slug": "opportunist",
    "name": "Opportunist",
    "description": "If an opponent's stat is boosted, the Pokémon seizes the opportunity to boost the same stat for itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/opportunist",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "espathra",
        "name": "Espathra",
        "image": "https://i.pokebase.app/pokemon-champions/303TuKLvIi7wi8G-bQ9L-.png"
      }
    ]
  },
  {
    "slug": "orichalcum-pulse",
    "name": "Orichalcum Pulse",
    "description": "Turns the sunlight harsh when the Pokémon enters a battle. The ancient pulse thrumming through the Pokémon also boosts its Attack stat in harsh sunlight.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/orichalcum-pulse",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "koraidon-gliding-build",
        "name": "Koraidon (Gliding Build)"
      },
      {
        "slug": "koraidon-swimming-build",
        "name": "Koraidon (Swimming Build)"
      },
      {
        "slug": "koraidon-sprinting-build",
        "name": "Koraidon (Sprinting Build)"
      },
      {
        "slug": "koraidon-limited-build",
        "name": "Koraidon (Limited Build)"
      },
      {
        "slug": "koraidon",
        "name": "Koraidon",
        "image": "https://i.pokebase.app/pokemon-champions/9XCX9V2epQW37XNzNeOXl.png"
      }
    ]
  },
  {
    "slug": "overcoat",
    "name": "Overcoat",
    "description": "The Pokémon takes no damage from sandstorms. It is also protected from the effects of powders and spores.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/overcoat",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kommo-o-totem",
        "name": "Kommo-o (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/xjm3nSikaK350EksXFKKu.png"
      },
      {
        "slug": "wormadam-plant",
        "name": "Wormadam (Plant)",
        "image": "https://i.pokebase.app/pokemon-champions/_nSBbdsRWnVat7AlvGyY-.png"
      },
      {
        "slug": "enamorus-therian",
        "name": "Enamorus (Therian)",
        "image": "https://i.pokebase.app/pokemon-champions/sirdjxXzR7co7lDXrALFc.png"
      },
      {
        "slug": "wormadam-trash",
        "name": "Wormadam (Trash)",
        "image": "https://i.pokebase.app/pokemon-champions/VA2lDAXSZOh4A5-oWu48m.png"
      },
      {
        "slug": "wormadam-sandy",
        "name": "Wormadam (Sandy)",
        "image": "https://i.pokebase.app/pokemon-champions/fKJaLfjRExfarGaRy3WST.png"
      },
      {
        "slug": "revavroom",
        "name": "Revavroom",
        "image": "https://i.pokebase.app/pokemon-champions/EhUVVh13e_RX6Tw-F_5K-.png"
      },
      {
        "slug": "varoom",
        "name": "Varoom",
        "image": "https://i.pokebase.app/pokemon-champions/H25dOuW24VPf5F6ytG02T.png"
      },
      {
        "slug": "kommo-o",
        "name": "Kommo-o",
        "image": "https://i.pokebase.app/pokemon-champions/c_xuHZv3ob4p8UXgy_ErY.png"
      },
      {
        "slug": "hakamo-o",
        "name": "Hakamo-o",
        "image": "https://i.pokebase.app/pokemon-champions/6WGT8mT-W7IHYNGD6XeN_.png"
      },
      {
        "slug": "jangmo-o",
        "name": "Jangmo-o",
        "image": "https://i.pokebase.app/pokemon-champions/oyoZPtyYf-gfdWeEzFlIY.png"
      }
    ]
  },
  {
    "slug": "overgrow",
    "name": "Overgrow",
    "description": "Powers up Grass-type moves when the Pokémon's HP is low.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/overgrow",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "rillaboom-gmax",
        "name": "Rillaboom (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Y6dUUcIz839dwuLPEqYaz.png"
      },
      {
        "slug": "venusaur-gmax",
        "name": "Venusaur (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/phoEsrBhh4ZkjpSnU5Mjf.png"
      },
      {
        "slug": "decidueye-hisui",
        "name": "Hisuian Decidueye",
        "image": "https://i.pokebase.app/pokemon-champions/G7qHsTPL7NvkBib7q5Qqi.png"
      },
      {
        "slug": "meowscarada",
        "name": "Meowscarada",
        "image": "https://i.pokebase.app/pokemon-champions/9kiuGH06pjLISVSySseux.png"
      },
      {
        "slug": "floragato",
        "name": "Floragato",
        "image": "https://i.pokebase.app/pokemon-champions/ofn3oGdmwz5A1ETvU7GAM.png"
      },
      {
        "slug": "sprigatito",
        "name": "Sprigatito",
        "image": "https://i.pokebase.app/pokemon-champions/RvpyniVs9grnn-u5tnD5y.png"
      },
      {
        "slug": "thwackey",
        "name": "Thwackey",
        "image": "https://i.pokebase.app/pokemon-champions/ICeI0WPHala0Kig-g1VCF.png"
      },
      {
        "slug": "rillaboom",
        "name": "Rillaboom",
        "image": "https://i.pokebase.app/pokemon-champions/Gy34KTI1acyHaINUacGxC.png"
      },
      {
        "slug": "grookey",
        "name": "Grookey",
        "image": "https://i.pokebase.app/pokemon-champions/vn4X1nyFJNqrg0xJH0mi_.png"
      },
      {
        "slug": "decidueye",
        "name": "Decidueye",
        "image": "https://i.pokebase.app/pokemon-champions/8Anx3ctcij7WOLp75xxJZ.png"
      }
    ]
  },
  {
    "slug": "own-tempo",
    "name": "Own Tempo",
    "description": "The Pokémon sticks to its own tempo, preventing it from becoming confused or being affected by Intimidate.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/own-tempo",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "indeedee-female",
        "name": "Indeedee (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/I9Yx23xQlThSHL-FOopnD.png"
      },
      {
        "slug": "rockruff-own-tempo",
        "name": "Rockruff (Own Tempo)",
        "image": "https://i.pokebase.app/pokemon-champions/DQMdGnIUUvzOgtTDHWaGx.png"
      },
      {
        "slug": "slowking-galar",
        "name": "Galarian Slowking",
        "image": "https://i.pokebase.app/pokemon-champions/ELTH6aa9ifmogCVFPPCq2.png"
      },
      {
        "slug": "slowbro-galar",
        "name": "Galarian Slowbro",
        "image": "https://i.pokebase.app/pokemon-champions/_DK4nMY_0h2T335ev8Hjh.png"
      },
      {
        "slug": "slowpoke-galar",
        "name": "Galarian Slowpoke",
        "image": "https://i.pokebase.app/pokemon-champions/tOOukwwpcVYHG0lmTx50Z.png"
      },
      {
        "slug": "tinkaton",
        "name": "Tinkaton",
        "image": "https://i.pokebase.app/pokemon-champions/o9lGuqkykKhF3z5qwSEwU.png"
      },
      {
        "slug": "tinkatuff",
        "name": "Tinkatuff",
        "image": "https://i.pokebase.app/pokemon-champions/ttuKA57uUejrBv8a1Xvm4.png"
      },
      {
        "slug": "tinkatink",
        "name": "Tinkatink",
        "image": "https://i.pokebase.app/pokemon-champions/wF69SCgrQyWU9qzfSBq3B.png"
      },
      {
        "slug": "tadbulb",
        "name": "Tadbulb",
        "image": "https://i.pokebase.app/pokemon-champions/JnJ0qWBOXMBsTfJRApst8.png"
      },
      {
        "slug": "fidough",
        "name": "Fidough",
        "image": "https://i.pokebase.app/pokemon-champions/bsyx7wx24M2_kkMrkUnWg.png"
      }
    ]
  },
  {
    "slug": "parental-bond",
    "name": "Parental Bond",
    "description": "Parent and child each attacks.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/parental-bond",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "kangaskhan-mega",
        "name": "Mega Kangaskhan",
        "image": "https://i.pokebase.app/pokemon-champions/hOWaxAvZcgEPJghbt0uFz.png"
      }
    ]
  },
  {
    "slug": "pastel-veil",
    "name": "Pastel Veil",
    "description": "Protects the Pokémon and its ally Pokémon from being poisoned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pastel-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "rapidash-galar",
        "name": "Galarian Rapidash",
        "image": "https://i.pokebase.app/pokemon-champions/8ioDgWbdjepRACMLVL7GN.png"
      },
      {
        "slug": "ponyta-galar",
        "name": "Galarian Ponyta",
        "image": "https://i.pokebase.app/pokemon-champions/f0pS8CUdLF6sSgJ_-N9pg.png"
      }
    ]
  },
  {
    "slug": "perish-body",
    "name": "Perish Body",
    "description": "When hit by a move that makes direct contact, the Pokémon and the attacker will faint after three turns unless they switch out of battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/perish-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "cursola",
        "name": "Cursola",
        "image": "https://i.pokebase.app/pokemon-champions/k0FZwsd1n8B4UCz8k6DEJ.png"
      }
    ]
  },
  {
    "slug": "pickpocket",
    "name": "Pickpocket",
    "description": "The Pokémon steals the held item from attackers that made direct contact with it.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pickpocket",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grimmsnarl-gmax",
        "name": "Grimmsnarl (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g_BkTu-Zvlx_FnCm7Orhl.png"
      },
      {
        "slug": "sneasel-hisui",
        "name": "Hisuian Sneasel",
        "image": "https://i.pokebase.app/pokemon-champions/mDKs-C-9lVaq7C_OypixS.png"
      },
      {
        "slug": "tinkaton",
        "name": "Tinkaton",
        "image": "https://i.pokebase.app/pokemon-champions/o9lGuqkykKhF3z5qwSEwU.png"
      },
      {
        "slug": "tinkatuff",
        "name": "Tinkatuff",
        "image": "https://i.pokebase.app/pokemon-champions/ttuKA57uUejrBv8a1Xvm4.png"
      },
      {
        "slug": "tinkatink",
        "name": "Tinkatink",
        "image": "https://i.pokebase.app/pokemon-champions/wF69SCgrQyWU9qzfSBq3B.png"
      },
      {
        "slug": "shroodle",
        "name": "Shroodle",
        "image": "https://i.pokebase.app/pokemon-champions/03nZxKI-TNzcspi3PSTDo.png"
      },
      {
        "slug": "grimmsnarl",
        "name": "Grimmsnarl",
        "image": "https://i.pokebase.app/pokemon-champions/9sAQW2SdLsUzCZmNgK1ky.png"
      },
      {
        "slug": "morgrem",
        "name": "Morgrem",
        "image": "https://i.pokebase.app/pokemon-champions/Rtw63WnTV13Qx8WSZAw-V.png"
      },
      {
        "slug": "impidimp",
        "name": "Impidimp",
        "image": "https://i.pokebase.app/pokemon-champions/9mZ0nRn0M2M1Z1mdKsWD9.png"
      },
      {
        "slug": "barbaracle",
        "name": "Barbaracle",
        "image": "https://i.pokebase.app/pokemon-champions/8sIMgnIu8iFH5Cq4ks_8e.png"
      }
    ]
  },
  {
    "slug": "pickup",
    "name": "Pickup",
    "description": "The Pokémon may pick up an item another Pokémon used during a battle. It may pick up items outside of battle, too.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pickup",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pumpkaboo-average",
        "name": "Pumpkaboo (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/dJwttk781AA-dEP42PUtP.png"
      },
      {
        "slug": "gourgeist-average",
        "name": "Gourgeist (Average)",
        "image": "https://i.pokebase.app/pokemon-champions/2Y-34kAsCePt2Pc1QBLon.png"
      },
      {
        "slug": "meowth-gmax",
        "name": "Meowth (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hCbsiwEIEVuxk99wbWSJB.png"
      },
      {
        "slug": "pumpkaboo-super",
        "name": "Pumpkaboo (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/qVxgOgL894dbTlOwcRd-b.png"
      },
      {
        "slug": "gourgeist-super",
        "name": "Gourgeist (Super)",
        "image": "https://i.pokebase.app/pokemon-champions/CPyrt_Lc4HN83bbZqyKrK.png"
      },
      {
        "slug": "pumpkaboo-large",
        "name": "Pumpkaboo (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/By_frBti_vLicI_vOEHkP.png"
      },
      {
        "slug": "gourgeist-large",
        "name": "Gourgeist (Large)",
        "image": "https://i.pokebase.app/pokemon-champions/k8iQRfS-wBnwhKXWbblTf.png"
      },
      {
        "slug": "gourgeist-small",
        "name": "Gourgeist (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/BgsX3m4-ho_FXYzTZ3ePC.png"
      },
      {
        "slug": "pumpkaboo-small",
        "name": "Pumpkaboo (Small)",
        "image": "https://i.pokebase.app/pokemon-champions/H84e-XUMiznFep9gXTkw5.png"
      },
      {
        "slug": "linoone-galar",
        "name": "Galarian Linoone",
        "image": "https://i.pokebase.app/pokemon-champions/t3nDQIPlOkiwCpkMKA96U.png"
      }
    ]
  },
  {
    "slug": "piercing-drill",
    "name": "Piercing Drill",
    "description": "When the Pokémon uses contact moves, it can hit even targets that are protecting themselves, dealing 1/4 of the damage that the move would otherwise deal. Everything aside from the target's protective effects is still triggered.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/piercing-drill",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "excadrill-mega",
        "name": "Mega Excadrill",
        "image": "https://i.pokebase.app/pokemon-champions/el21cgR1bJabCEeSGgJlQ.png"
      }
    ]
  },
  {
    "slug": "pixilate",
    "name": "Pixilate",
    "description": "Normal-type moves become Fairy-type moves. The power of those moves is boosted a little.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pixilate",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "altaria-mega",
        "name": "Mega Altaria",
        "image": "https://i.pokebase.app/pokemon-champions/asXqYsgvQKXLq4BozrjXp.png"
      },
      {
        "slug": "gardevoir-mega",
        "name": "Mega Gardevoir",
        "image": "https://i.pokebase.app/pokemon-champions/dsdj7dS1ITikQZMq1nKPa.png"
      },
      {
        "slug": "sylveon",
        "name": "Sylveon",
        "image": "https://i.pokebase.app/pokemon-champions/7qB1XeDSGUQDraUmo5Xyo.png"
      }
    ]
  },
  {
    "slug": "plus",
    "name": "Plus",
    "description": "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/plus",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "toxtricity-amped-gmax",
        "name": "Toxtricity (Amped Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g2P6SnaNliXAkX2CehWTV.png"
      },
      {
        "slug": "toxtricity-amped",
        "name": "Toxtricity (Amped)",
        "image": "https://i.pokebase.app/pokemon-champions/qyktQ2esr8X-up1H1xpQs.png"
      },
      {
        "slug": "toxtricity",
        "name": "Toxtricity",
        "image": "https://i.pokebase.app/pokemon-champions/8mzexCGK1sruJsqASb6hl.png"
      },
      {
        "slug": "dedenne",
        "name": "Dedenne",
        "image": "https://i.pokebase.app/pokemon-champions/kCtKyWidckSKTW6g8DMic.png"
      },
      {
        "slug": "klinklang",
        "name": "Klinklang",
        "image": "https://i.pokebase.app/pokemon-champions/54VdBP1iVIVC7s_83hrwh.png"
      },
      {
        "slug": "klang",
        "name": "Klang",
        "image": "https://i.pokebase.app/pokemon-champions/oTG55SBu3KNiPDiUuaV1P.png"
      },
      {
        "slug": "klink",
        "name": "Klink",
        "image": "https://i.pokebase.app/pokemon-champions/3IK0sWkNqypwXYrG-bW49.png"
      },
      {
        "slug": "plusle",
        "name": "Plusle",
        "image": "https://i.pokebase.app/pokemon-champions/1SsG_IRRU0KGz6aNG02T-.png"
      },
      {
        "slug": "ampharos",
        "name": "Ampharos",
        "image": "https://i.pokebase.app/pokemon-champions/jgkOqV6iJz-iASd47QWCK.png"
      },
      {
        "slug": "flaaffy",
        "name": "Flaaffy",
        "image": "https://i.pokebase.app/pokemon-champions/ng07zbKkywZBZpcSL9Ztj.png"
      }
    ]
  },
  {
    "slug": "poison-heal",
    "name": "Poison Heal",
    "description": "If poisoned, the Pokémon has its HP restored instead of taking damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/poison-heal",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "gliscor",
        "name": "Gliscor",
        "image": "https://i.pokebase.app/pokemon-champions/zxbUqI5GLKsN44onh2Jxz.png"
      },
      {
        "slug": "breloom",
        "name": "Breloom",
        "image": "https://i.pokebase.app/pokemon-champions/io7KnxRT3l88bIzlQ9hu0.png"
      },
      {
        "slug": "shroomish",
        "name": "Shroomish",
        "image": "https://i.pokebase.app/pokemon-champions/EL_YwnU9PbCp844z1WMTx.png"
      }
    ]
  },
  {
    "slug": "poison-point",
    "name": "Poison Point",
    "description": "Contact with the Pokémon may poison the attacker.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/poison-point",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "qwilfish-hisui",
        "name": "Hisuian Qwilfish",
        "image": "https://i.pokebase.app/pokemon-champions/-Uib1wANM2XBsiefza3p4.png"
      },
      {
        "slug": "wooper-paldea",
        "name": "Paldean Wooper",
        "image": "https://i.pokebase.app/pokemon-champions/5UC6R1A_5D_DUQKYk-U7D.png"
      },
      {
        "slug": "clodsire",
        "name": "Clodsire",
        "image": "https://i.pokebase.app/pokemon-champions/drew5vsTTAx2Mw_4v-xUE.png"
      },
      {
        "slug": "overqwil",
        "name": "Overqwil",
        "image": "https://i.pokebase.app/pokemon-champions/oVvZTlLxCBSNy330fwYKi.png"
      },
      {
        "slug": "dragalge",
        "name": "Dragalge",
        "image": "https://i.pokebase.app/pokemon-champions/SFVurFYxyPUU-glgt__xu.png"
      },
      {
        "slug": "skrelp",
        "name": "Skrelp",
        "image": "https://i.pokebase.app/pokemon-champions/d8qyqfnlHsDcIeicu8IWi.png"
      },
      {
        "slug": "venipede",
        "name": "Venipede",
        "image": "https://i.pokebase.app/pokemon-champions/HZZLbU3TQUgX2-Vb1I0x8.png"
      },
      {
        "slug": "scolipede",
        "name": "Scolipede",
        "image": "https://i.pokebase.app/pokemon-champions/wy_NlJLExS4tY_zMdufWL.png"
      },
      {
        "slug": "whirlipede",
        "name": "Whirlipede",
        "image": "https://i.pokebase.app/pokemon-champions/KUYUNr8p1SkS6qcQNFG5K.png"
      },
      {
        "slug": "roserade",
        "name": "Roserade",
        "image": "https://i.pokebase.app/pokemon-champions/lwaA4aycVcQmMGV81KXMH.png"
      }
    ]
  },
  {
    "slug": "poison-puppeteer",
    "name": "Poison Puppeteer",
    "description": "Pokémon poisoned by Pecharunt's moves will also become confused.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/poison-puppeteer",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pecharunt",
        "name": "Pecharunt",
        "image": "https://i.pokebase.app/pokemon-champions/F-zxkdr3aONk1dnPTpDQr.png"
      }
    ]
  },
  {
    "slug": "poison-touch",
    "name": "Poison Touch",
    "description": "May poison a target when the Pokémon makes contact.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/poison-touch",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grimer-alola",
        "name": "Alolan Grimer",
        "image": "https://i.pokebase.app/pokemon-champions/koKwKRIdzYyvcxppuSI4r.png"
      },
      {
        "slug": "muk-alola",
        "name": "Alolan Muk",
        "image": "https://i.pokebase.app/pokemon-champions/j0-CoYLzxOqef3-DjsbPF.png"
      },
      {
        "slug": "grafaiai",
        "name": "Grafaiai",
        "image": "https://i.pokebase.app/pokemon-champions/WVpLcP9x2ZdYHo7tGXcHr.png"
      },
      {
        "slug": "sneasler",
        "name": "Sneasler",
        "image": "https://i.pokebase.app/pokemon-champions/Zw_vVVnoT594WNEJ2PB7M.png"
      },
      {
        "slug": "dragalge",
        "name": "Dragalge",
        "image": "https://i.pokebase.app/pokemon-champions/SFVurFYxyPUU-glgt__xu.png"
      },
      {
        "slug": "skrelp",
        "name": "Skrelp",
        "image": "https://i.pokebase.app/pokemon-champions/d8qyqfnlHsDcIeicu8IWi.png"
      },
      {
        "slug": "seismitoad",
        "name": "Seismitoad",
        "image": "https://i.pokebase.app/pokemon-champions/Aer0KYMdAumxAieVIKq9o.png"
      },
      {
        "slug": "toxicroak",
        "name": "Toxicroak",
        "image": "https://i.pokebase.app/pokemon-champions/PYjsojLkgDL694zSvteOJ.png"
      },
      {
        "slug": "croagunk",
        "name": "Croagunk",
        "image": "https://i.pokebase.app/pokemon-champions/kc-bOkHho3ieQ9bjTekZe.png"
      },
      {
        "slug": "muk",
        "name": "Muk",
        "image": "https://i.pokebase.app/pokemon-champions/a0HLnDzGXIDNS0y_GjPbJ.png"
      }
    ]
  },
  {
    "slug": "power-construct",
    "name": "Power Construct",
    "description": "Other Cells gather to aid when its HP becomes half or less. Then the Pokémon changes its form to Complete Forme.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/power-construct",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zygarde-complete",
        "name": "Zygarde (Complete)",
        "image": "https://i.pokebase.app/pokemon-champions/-mZpVY3-lv8PkyXIDlrOl.png"
      },
      {
        "slug": "zygarde-50-power-construct",
        "name": "Zygarde (50 Power Construct)",
        "image": "https://i.pokebase.app/pokemon-champions/Qb_AKTizES82FwY7trvu4.png"
      },
      {
        "slug": "zygarde-10-power-construct",
        "name": "Zygarde (10 Power Construct)",
        "image": "https://i.pokebase.app/pokemon-champions/L_ATQh5ikcz7_oO5-jz98.png"
      }
    ]
  },
  {
    "slug": "power-spot",
    "name": "Power Spot",
    "description": "Just being next to the Pokémon powers up moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/power-spot",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "stonjourner",
        "name": "Stonjourner",
        "image": "https://i.pokebase.app/pokemon-champions/9VJBR3BPmwxDhkGSGkQjd.png"
      }
    ]
  },
  {
    "slug": "power-of-alchemy",
    "name": "Power of Alchemy",
    "description": "The Pokémon copies the Ability of a defeated ally.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/power-of-alchemy",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grimer-alola",
        "name": "Alolan Grimer",
        "image": "https://i.pokebase.app/pokemon-champions/koKwKRIdzYyvcxppuSI4r.png"
      },
      {
        "slug": "muk-alola",
        "name": "Alolan Muk",
        "image": "https://i.pokebase.app/pokemon-champions/j0-CoYLzxOqef3-DjsbPF.png"
      }
    ]
  },
  {
    "slug": "prankster",
    "name": "Prankster",
    "description": "Gives priority to the Pokémon's status moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/prankster",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "grimmsnarl-gmax",
        "name": "Grimmsnarl (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g_BkTu-Zvlx_FnCm7Orhl.png"
      },
      {
        "slug": "meowstic-male",
        "name": "Meowstic (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/eqs7aIPXHbzz5UQBPdmRg.png"
      },
      {
        "slug": "thundurus-incarnate",
        "name": "Thundurus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/bCR1VvvQRgBd-6XXKO5ir.png"
      },
      {
        "slug": "tornadus-incarnate",
        "name": "Tornadus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/1_sNQ1LGw8WeBobHFI88x.png"
      },
      {
        "slug": "banette-mega",
        "name": "Mega Banette",
        "image": "https://i.pokebase.app/pokemon-champions/oeqaTSmEitE5kpH8m_xFK.png"
      },
      {
        "slug": "grafaiai",
        "name": "Grafaiai",
        "image": "https://i.pokebase.app/pokemon-champions/WVpLcP9x2ZdYHo7tGXcHr.png"
      },
      {
        "slug": "shroodle",
        "name": "Shroodle",
        "image": "https://i.pokebase.app/pokemon-champions/03nZxKI-TNzcspi3PSTDo.png"
      },
      {
        "slug": "grimmsnarl",
        "name": "Grimmsnarl",
        "image": "https://i.pokebase.app/pokemon-champions/9sAQW2SdLsUzCZmNgK1ky.png"
      },
      {
        "slug": "morgrem",
        "name": "Morgrem",
        "image": "https://i.pokebase.app/pokemon-champions/Rtw63WnTV13Qx8WSZAw-V.png"
      },
      {
        "slug": "impidimp",
        "name": "Impidimp",
        "image": "https://i.pokebase.app/pokemon-champions/9mZ0nRn0M2M1Z1mdKsWD9.png"
      }
    ]
  },
  {
    "slug": "pressure",
    "name": "Pressure",
    "description": "Puts other Pokémon under pressure, causing them to expend more PP to use their moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pressure",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "corviknight-gmax",
        "name": "Corviknight (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/v1iOXviXyhKk7eQgr_DI7.png"
      },
      {
        "slug": "giratina-altered",
        "name": "Giratina (Altered)",
        "image": "https://i.pokebase.app/pokemon-champions/kTUHK5UQ_0griAJdV8GzJ.png"
      },
      {
        "slug": "deoxys-normal",
        "name": "Deoxys (Normal)",
        "image": "https://i.pokebase.app/pokemon-champions/TJuCX1fvBefPHwiiKD3lZ.png"
      },
      {
        "slug": "eternatus-eternamax",
        "name": "Eternatus (Eternamax)",
        "image": "https://i.pokebase.app/pokemon-champions/RxI4SEleqoKc0MEiXYwN-.png"
      },
      {
        "slug": "palkia-origin",
        "name": "Palkia (Origin)",
        "image": "https://i.pokebase.app/pokemon-champions/IVgqlxvCCTTuJnlK1crbE.png"
      },
      {
        "slug": "dialga-origin",
        "name": "Dialga (Origin)",
        "image": "https://i.pokebase.app/pokemon-champions/cSOBNnMZigWWdQRqGc-l4.png"
      },
      {
        "slug": "deoxys-speed",
        "name": "Deoxys (Speed)",
        "image": "https://i.pokebase.app/pokemon-champions/fWUUiy7IvoEPRxXxjKGu1.png"
      },
      {
        "slug": "deoxys-defense",
        "name": "Deoxys (Defense)",
        "image": "https://i.pokebase.app/pokemon-champions/bBmGBC3zh0YKVqFsmGY7O.png"
      },
      {
        "slug": "deoxys-attack",
        "name": "Deoxys (Attack)",
        "image": "https://i.pokebase.app/pokemon-champions/o9DdA-kgINLfzW3Bhj7yW.png"
      },
      {
        "slug": "kingambit",
        "name": "Kingambit",
        "image": "https://i.pokebase.app/pokemon-champions/cbmuf9AN5rgWu6OZ3nxPd.png"
      }
    ]
  },
  {
    "slug": "primordial-sea",
    "name": "Primordial Sea",
    "description": "The Pokémon changes the weather to nullify Fire-type attacks.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/primordial-sea",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kyogre-primal",
        "name": "Kyogre (Primal)",
        "image": "https://i.pokebase.app/pokemon-champions/IRRajy8PFF4xIECuHxbvZ.png"
      }
    ]
  },
  {
    "slug": "prism-armor",
    "name": "Prism Armor",
    "description": "Reduces the power of supereffective attacks taken.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/prism-armor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "necrozma-dawn",
        "name": "Necrozma (Dawn)",
        "image": "https://i.pokebase.app/pokemon-champions/P6ozp4Gxk3JiM8EU4IrOW.png"
      },
      {
        "slug": "necrozma-dusk",
        "name": "Necrozma (Dusk)",
        "image": "https://i.pokebase.app/pokemon-champions/LE6CvRCPISgp-y1nqdGQS.png"
      },
      {
        "slug": "necrozma",
        "name": "Necrozma",
        "image": "https://i.pokebase.app/pokemon-champions/6RDyWI4FdioonHKc_zprr.png"
      }
    ]
  },
  {
    "slug": "propeller-tail",
    "name": "Propeller Tail",
    "description": "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/propeller-tail",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "barraskewda",
        "name": "Barraskewda",
        "image": "https://i.pokebase.app/pokemon-champions/QeEVoquamArq2Py4iEKnt.png"
      },
      {
        "slug": "arrokuda",
        "name": "Arrokuda",
        "image": "https://i.pokebase.app/pokemon-champions/gBeInPpPVre9N6cL-QcrZ.png"
      }
    ]
  },
  {
    "slug": "protean",
    "name": "Protean",
    "description": "Before the Pokémon uses a move, it becomes a pure Pokémon of that type. This only works once per switch in.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/protean",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "greninja-mega",
        "name": "Mega Greninja",
        "image": "https://i.pokebase.app/pokemon-champions/eidLtEXNl7i26UIVvx04G.png"
      },
      {
        "slug": "meowscarada",
        "name": "Meowscarada",
        "image": "https://i.pokebase.app/pokemon-champions/9kiuGH06pjLISVSySseux.png"
      },
      {
        "slug": "floragato",
        "name": "Floragato",
        "image": "https://i.pokebase.app/pokemon-champions/ofn3oGdmwz5A1ETvU7GAM.png"
      },
      {
        "slug": "sprigatito",
        "name": "Sprigatito",
        "image": "https://i.pokebase.app/pokemon-champions/RvpyniVs9grnn-u5tnD5y.png"
      },
      {
        "slug": "greninja",
        "name": "Greninja",
        "image": "https://i.pokebase.app/pokemon-champions/yswOgtE045OpagqEZkIXe.png"
      },
      {
        "slug": "froakie",
        "name": "Froakie",
        "image": "https://i.pokebase.app/pokemon-champions/ED8NXXuYvixliNjmGAf6v.png"
      },
      {
        "slug": "frogadier",
        "name": "Frogadier",
        "image": "https://i.pokebase.app/pokemon-champions/MI5ktXgYMkIquRktU48yG.png"
      },
      {
        "slug": "kecleon",
        "name": "Kecleon",
        "image": "https://i.pokebase.app/pokemon-champions/dGjOxN3VO2JI6LzVen5mD.png"
      }
    ]
  },
  {
    "slug": "protosynthesis",
    "name": "Protosynthesis",
    "description": "Boosts the Pokémon's most proficient stat in harsh sunlight or if the Pokémon is holding Booster Energy.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/protosynthesis",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "raging-bolt",
        "name": "Raging Bolt",
        "image": "https://i.pokebase.app/pokemon-champions/eVF7cAjan79AsvEMCusJt.png"
      },
      {
        "slug": "gouging-fire",
        "name": "Gouging Fire",
        "image": "https://i.pokebase.app/pokemon-champions/vF8vKnFDPC8csjptHa8uz.png"
      },
      {
        "slug": "walking-wake",
        "name": "Walking Wake",
        "image": "https://i.pokebase.app/pokemon-champions/J7qxDg3ZXf6ujuQu9xuLk.png"
      },
      {
        "slug": "roaring-moon",
        "name": "Roaring Moon",
        "image": "https://i.pokebase.app/pokemon-champions/twS55DhTpDyfmc93E9AEa.png"
      },
      {
        "slug": "sandy-shocks",
        "name": "Sandy Shocks",
        "image": "https://i.pokebase.app/pokemon-champions/sASjrrOgjMzKZosK5ic4z.png"
      },
      {
        "slug": "slither-wing",
        "name": "Slither Wing",
        "image": "https://i.pokebase.app/pokemon-champions/LftlG-sZ36wei7auYtWE1.png"
      },
      {
        "slug": "flutter-mane",
        "name": "Flutter Mane",
        "image": "https://i.pokebase.app/pokemon-champions/uzYrDUL-PFyqKOmulo3yb.png"
      },
      {
        "slug": "brute-bonnet",
        "name": "Brute Bonnet",
        "image": "https://i.pokebase.app/pokemon-champions/yUvo7VBCJNS-3QLT0wGHi.png"
      },
      {
        "slug": "scream-tail",
        "name": "Scream Tail",
        "image": "https://i.pokebase.app/pokemon-champions/7pZDQRM0UrTg5V7cyle7c.png"
      },
      {
        "slug": "great-tusk",
        "name": "Great Tusk",
        "image": "https://i.pokebase.app/pokemon-champions/6Xsq9C8FOdTauUkazpfsG.png"
      }
    ]
  },
  {
    "slug": "psychic-surge",
    "name": "Psychic Surge",
    "description": "Turns the ground into Psychic Terrain when the Pokémon enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/psychic-surge",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "indeedee-male",
        "name": "Indeedee (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/rsB5qGp91w7WopflWuiSf.png"
      },
      {
        "slug": "indeedee-female",
        "name": "Indeedee (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/I9Yx23xQlThSHL-FOopnD.png"
      },
      {
        "slug": "indeedee",
        "name": "Indeedee",
        "image": "https://i.pokebase.app/pokemon-champions/-vRxIcGbej2bl3Q3L3irA.png"
      },
      {
        "slug": "tapu-lele",
        "name": "Tapu Lele",
        "image": "https://i.pokebase.app/pokemon-champions/72qKLhdGBchCCKB0I71kq.png"
      }
    ]
  },
  {
    "slug": "punk-rock",
    "name": "Punk Rock",
    "description": "Boosts the power of sound-based moves. The Pokémon also takes half the damage from these kinds of moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/punk-rock",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "toxtricity-low-key-gmax",
        "name": "Toxtricity (Low Key Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/GuE-07MB0LKM4ZA_W2h6n.png"
      },
      {
        "slug": "toxtricity-amped-gmax",
        "name": "Toxtricity (Amped Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g2P6SnaNliXAkX2CehWTV.png"
      },
      {
        "slug": "toxtricity-amped",
        "name": "Toxtricity (Amped)",
        "image": "https://i.pokebase.app/pokemon-champions/qyktQ2esr8X-up1H1xpQs.png"
      },
      {
        "slug": "toxtricity-low-key",
        "name": "Toxtricity (Low Key)",
        "image": "https://i.pokebase.app/pokemon-champions/w2oWUrdD-QWSZDEkfaNve.png"
      },
      {
        "slug": "toxtricity",
        "name": "Toxtricity",
        "image": "https://i.pokebase.app/pokemon-champions/8mzexCGK1sruJsqASb6hl.png"
      }
    ]
  },
  {
    "slug": "pure-power",
    "name": "Pure Power",
    "description": "Using its pure power, the Pokémon doubles its Attack stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/pure-power",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "medicham-mega",
        "name": "Mega Medicham",
        "image": "https://i.pokebase.app/pokemon-champions/sldHJKi9OtjiL2YABxffS.png"
      },
      {
        "slug": "meditite",
        "name": "Meditite",
        "image": "https://i.pokebase.app/pokemon-champions/N-ItFFqucqMp5kn2vgUz2.png"
      },
      {
        "slug": "medicham",
        "name": "Medicham",
        "image": "https://i.pokebase.app/pokemon-champions/8XUqLoAnVNf_Drd9uGW96.png"
      }
    ]
  },
  {
    "slug": "purifying-salt",
    "name": "Purifying Salt",
    "description": "The Pokémon's pure salt protects it from status conditions and halves the damage taken from Ghost-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/purifying-salt",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "garganacl",
        "name": "Garganacl",
        "image": "https://i.pokebase.app/pokemon-champions/Zwm9dsBA-R5NTGoNu2e_X.png"
      },
      {
        "slug": "naclstack",
        "name": "Naclstack",
        "image": "https://i.pokebase.app/pokemon-champions/21260fFbjB4nb906ZlHKl.png"
      },
      {
        "slug": "nacli",
        "name": "Nacli",
        "image": "https://i.pokebase.app/pokemon-champions/PYPmXCsYsR4xNYfy1w5Ri.png"
      }
    ]
  },
  {
    "slug": "quark-drive",
    "name": "Quark Drive",
    "description": "Boosts the Pokémon's most proficient stat on Electric Terrain or if the Pokémon is holding Booster Energy.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/quark-drive",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "iron-crown",
        "name": "Iron Crown",
        "image": "https://i.pokebase.app/pokemon-champions/feSAqATZZWHvHE9ZuxUE9.png"
      },
      {
        "slug": "iron-boulder",
        "name": "Iron Boulder",
        "image": "https://i.pokebase.app/pokemon-champions/NyqrtcPo3ecXNcbF44agu.png"
      },
      {
        "slug": "iron-leaves",
        "name": "Iron Leaves",
        "image": "https://i.pokebase.app/pokemon-champions/6XSVxnkfg1hUxl2rM1RLw.png"
      },
      {
        "slug": "iron-valiant",
        "name": "Iron Valiant",
        "image": "https://i.pokebase.app/pokemon-champions/_RM83GRnLSJa7nSuJm0Og.png"
      },
      {
        "slug": "iron-thorns",
        "name": "Iron Thorns",
        "image": "https://i.pokebase.app/pokemon-champions/tLMFTWg_mGpaG5WFLemEM.png"
      },
      {
        "slug": "iron-moth",
        "name": "Iron Moth",
        "image": "https://i.pokebase.app/pokemon-champions/R9tyHHAQqM_Li_58SBIP1.png"
      },
      {
        "slug": "iron-jugulis",
        "name": "Iron Jugulis",
        "image": "https://i.pokebase.app/pokemon-champions/jTm84NuIYyV0K-raXSXsQ.png"
      },
      {
        "slug": "iron-hands",
        "name": "Iron Hands",
        "image": "https://i.pokebase.app/pokemon-champions/ck_H2vpb-CH2ggbJyhNOw.png"
      },
      {
        "slug": "iron-bundle",
        "name": "Iron Bundle",
        "image": "https://i.pokebase.app/pokemon-champions/mv9LxM4ptA0t4CiO-GPJj.png"
      },
      {
        "slug": "iron-treads",
        "name": "Iron Treads",
        "image": "https://i.pokebase.app/pokemon-champions/QIgdeWLHrwlMFLVNB7kn2.png"
      }
    ]
  },
  {
    "slug": "queenly-majesty",
    "name": "Queenly Majesty",
    "description": "Opponents are unable to use priority moves against the Pokémon or its allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/queenly-majesty",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tsareena",
        "name": "Tsareena",
        "image": "https://i.pokebase.app/pokemon-champions/4DjTvWYiOAadIzv02yDPP.png"
      }
    ]
  },
  {
    "slug": "quick-draw",
    "name": "Quick Draw",
    "description": "Enables the Pokémon to move first occasionally.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/quick-draw",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "slowbro-galar",
        "name": "Galarian Slowbro",
        "image": "https://i.pokebase.app/pokemon-champions/_DK4nMY_0h2T335ev8Hjh.png"
      }
    ]
  },
  {
    "slug": "quick-feet",
    "name": "Quick Feet",
    "description": "Boosts the Speed stat if the Pokémon has a status condition.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/quick-feet",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "linoone-galar",
        "name": "Galarian Linoone",
        "image": "https://i.pokebase.app/pokemon-champions/t3nDQIPlOkiwCpkMKA96U.png"
      },
      {
        "slug": "zigzagoon-galar",
        "name": "Galarian Zigzagoon",
        "image": "https://i.pokebase.app/pokemon-champions/zDZ4sMheLZi2dF7sWu0-T.png"
      },
      {
        "slug": "shroomish",
        "name": "Shroomish",
        "image": "https://i.pokebase.app/pokemon-champions/EL_YwnU9PbCp844z1WMTx.png"
      },
      {
        "slug": "linoone",
        "name": "Linoone",
        "image": "https://i.pokebase.app/pokemon-champions/zYYiRccV2LhC8beIzBKEr.png"
      },
      {
        "slug": "zigzagoon",
        "name": "Zigzagoon",
        "image": "https://i.pokebase.app/pokemon-champions/zofurQHSPgZOdJE9XmlxY.png"
      },
      {
        "slug": "mightyena",
        "name": "Mightyena",
        "image": "https://i.pokebase.app/pokemon-champions/3J0uaIknMHhuGWktnT28M.png"
      },
      {
        "slug": "poochyena",
        "name": "Poochyena",
        "image": "https://i.pokebase.app/pokemon-champions/KMEqhdrv2w2g-J2zs51R5.png"
      },
      {
        "slug": "ursaring",
        "name": "Ursaring",
        "image": "https://i.pokebase.app/pokemon-champions/HDIDWS5NaZBPSHTZkrSrQ.png"
      },
      {
        "slug": "teddiursa",
        "name": "Teddiursa",
        "image": "https://i.pokebase.app/pokemon-champions/iqOIYUUm380nQEFSsMlfK.png"
      },
      {
        "slug": "granbull",
        "name": "Granbull",
        "image": "https://i.pokebase.app/pokemon-champions/3qIzh0xvSg5lRla8_rJ79.png"
      }
    ]
  },
  {
    "slug": "rks-system",
    "name": "RKS System",
    "description": "Changes the Pokémon’s type to match the memory disc it holds.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rks-system",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "silvally",
        "name": "Silvally",
        "image": "https://i.pokebase.app/pokemon-champions/qSINqlMNJE7Xb6aEyTGGL.png"
      }
    ]
  },
  {
    "slug": "rain-dish",
    "name": "Rain Dish",
    "description": "The Pokémon gradually regains HP in rain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rain-dish",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "blastoise-gmax",
        "name": "Blastoise (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/PtnE6qWFTltAMBIi56CB8.png"
      },
      {
        "slug": "shiinotic",
        "name": "Shiinotic",
        "image": "https://i.pokebase.app/pokemon-champions/0SMskWQko9nRX6FwSViYR.png"
      },
      {
        "slug": "morelull",
        "name": "Morelull",
        "image": "https://i.pokebase.app/pokemon-champions/Q_xvb6E5yV6bHlALSqsmR.png"
      },
      {
        "slug": "surskit",
        "name": "Surskit",
        "image": "https://i.pokebase.app/pokemon-champions/5N-Ou7MFrFOs8NFJlQo2e.png"
      },
      {
        "slug": "pelipper",
        "name": "Pelipper",
        "image": "https://i.pokebase.app/pokemon-champions/8PlwgulOEu_XlnRlHFUXe.png"
      },
      {
        "slug": "wingull",
        "name": "Wingull",
        "image": "https://i.pokebase.app/pokemon-champions/0FuVUrb6D5JJej6rpCB4v.png"
      },
      {
        "slug": "ludicolo",
        "name": "Ludicolo",
        "image": "https://i.pokebase.app/pokemon-champions/p2L9tm5uoHtNlbCw13wB_.png"
      },
      {
        "slug": "lombre",
        "name": "Lombre",
        "image": "https://i.pokebase.app/pokemon-champions/i-e4g562iv6c5YPdrBcpg.png"
      },
      {
        "slug": "lotad",
        "name": "Lotad",
        "image": "https://i.pokebase.app/pokemon-champions/MeIvpXcx_bY2ROui-OJI-.png"
      },
      {
        "slug": "tentacruel",
        "name": "Tentacruel",
        "image": "https://i.pokebase.app/pokemon-champions/kV_nE4icSlCohj_DXCwpn.png"
      }
    ]
  },
  {
    "slug": "rattled",
    "name": "Rattled",
    "description": "The Pokémon gets scared when hit by a Dark-, Ghost-, or Bug-type attack or if intimidated, which boosts its Speed stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rattled",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dudunsparce-three-segment",
        "name": "Dudunsparce (Three Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/CwsPAiFPiUe6yp43RzsVk.png"
      },
      {
        "slug": "dudunsparce-two-segment",
        "name": "Dudunsparce (Two Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/4-aNsNP2YKmdJourqMV-T.png"
      },
      {
        "slug": "basculin-white-striped",
        "name": "Basculin (White Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/V_lS9CQY2ee8HNpFMkZBS.png"
      },
      {
        "slug": "meowth-alola",
        "name": "Alolan Meowth",
        "image": "https://i.pokebase.app/pokemon-champions/kVal83hHEQX3QvUYDSSKd.png"
      },
      {
        "slug": "persian-alola",
        "name": "Alolan Persian",
        "image": "https://i.pokebase.app/pokemon-champions/ATUNn-FFCNja8NkQqPdqa.png"
      },
      {
        "slug": "gimmighoul",
        "name": "Gimmighoul",
        "image": "https://i.pokebase.app/pokemon-champions/TgHdbIBzXymryCQgcU6O9.png"
      },
      {
        "slug": "dudunsparce",
        "name": "Dudunsparce",
        "image": "https://i.pokebase.app/pokemon-champions/qql8uu_LgHjKF9O3asTWT.png"
      },
      {
        "slug": "wugtrio",
        "name": "Wugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/Jhcbvg3KHnwl1E24y6EHT.png"
      },
      {
        "slug": "wiglett",
        "name": "Wiglett",
        "image": "https://i.pokebase.app/pokemon-champions/rnBKyWb4vx41CgNQGPfXl.png"
      },
      {
        "slug": "toxel",
        "name": "Toxel",
        "image": "https://i.pokebase.app/pokemon-champions/FysOl3mjEPG5_ALOjDxhM.png"
      }
    ]
  },
  {
    "slug": "receiver",
    "name": "Receiver",
    "description": "The Pokémon copies the Ability of a defeated ally.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/receiver",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "passimian",
        "name": "Passimian",
        "image": "https://i.pokebase.app/pokemon-champions/Ue6dB9qjndRg91NPIFZvd.png"
      }
    ]
  },
  {
    "slug": "reckless",
    "name": "Reckless",
    "description": "Powers up moves that have recoil damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/reckless",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "basculin-red-striped",
        "name": "Basculin (Red Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/1tsdWjFTPvhWmIsblQ8gB.png"
      },
      {
        "slug": "obstagoon",
        "name": "Obstagoon",
        "image": "https://i.pokebase.app/pokemon-champions/khKWQ4xoQNjbeBEF245ru.png"
      },
      {
        "slug": "bouffalant",
        "name": "Bouffalant",
        "image": "https://i.pokebase.app/pokemon-champions/VR8M7PuzKFL5hPnPeO-g4.png"
      },
      {
        "slug": "mienshao",
        "name": "Mienshao",
        "image": "https://i.pokebase.app/pokemon-champions/NEgCBIErskL9tFQXdl0YR.png"
      },
      {
        "slug": "mienfoo",
        "name": "Mienfoo",
        "image": "https://i.pokebase.app/pokemon-champions/x2EHKwp-bpl5c5uPh9OMB.png"
      },
      {
        "slug": "basculin",
        "name": "Basculin",
        "image": "https://i.pokebase.app/pokemon-champions/AC-gCFDDOs_AXpILHEWE1.png"
      },
      {
        "slug": "emboar",
        "name": "Emboar",
        "image": "https://i.pokebase.app/pokemon-champions/zbWGhrPm_o0RCDR_dBqIu.png"
      },
      {
        "slug": "rhyperior",
        "name": "Rhyperior",
        "image": "https://i.pokebase.app/pokemon-champions/E7v80jTQtsIA01yb10rxC.png"
      },
      {
        "slug": "staravia",
        "name": "Staravia",
        "image": "https://i.pokebase.app/pokemon-champions/wxcrbVWAiPLBK4MiTo_3I.png"
      },
      {
        "slug": "staraptor",
        "name": "Staraptor",
        "image": "https://i.pokebase.app/pokemon-champions/65bvknbslHs_q2yAvTtMU.png"
      }
    ]
  },
  {
    "slug": "refrigerate",
    "name": "Refrigerate",
    "description": "Normal-type moves become Ice-type moves. The power of those moves is boosted a little.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/refrigerate",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "glalie-mega",
        "name": "Mega Glalie",
        "image": "https://i.pokebase.app/pokemon-champions/-2GyrUdXTIDylFt1_DKzU.png"
      },
      {
        "slug": "aurorus",
        "name": "Aurorus",
        "image": "https://i.pokebase.app/pokemon-champions/ATIYn-BSQFbHVaPqvUG47.png"
      },
      {
        "slug": "amaura",
        "name": "Amaura",
        "image": "https://i.pokebase.app/pokemon-champions/yyZqPCKyJhQ2hJkQPK32F.png"
      }
    ]
  },
  {
    "slug": "regenerator",
    "name": "Regenerator",
    "description": "The Pokémon has a little of its HP restored when withdrawn from battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/regenerator",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tornadus-therian",
        "name": "Tornadus (Therian)",
        "image": "https://i.pokebase.app/pokemon-champions/r92o7Xx0Vz0deDAKKlLoq.png"
      },
      {
        "slug": "slowking-galar",
        "name": "Galarian Slowking",
        "image": "https://i.pokebase.app/pokemon-champions/ELTH6aa9ifmogCVFPPCq2.png"
      },
      {
        "slug": "slowbro-galar",
        "name": "Galarian Slowbro",
        "image": "https://i.pokebase.app/pokemon-champions/_DK4nMY_0h2T335ev8Hjh.png"
      },
      {
        "slug": "slowpoke-galar",
        "name": "Galarian Slowpoke",
        "image": "https://i.pokebase.app/pokemon-champions/tOOukwwpcVYHG0lmTx50Z.png"
      },
      {
        "slug": "hydrapple",
        "name": "Hydrapple",
        "image": "https://i.pokebase.app/pokemon-champions/7Fx3Ok2e_zkjxLMpWbetD.png"
      },
      {
        "slug": "cyclizar",
        "name": "Cyclizar",
        "image": "https://i.pokebase.app/pokemon-champions/TddwuGPiPWNadeVTozKui.png"
      },
      {
        "slug": "klawf",
        "name": "Klawf",
        "image": "https://i.pokebase.app/pokemon-champions/QJt8JYy3RatOmhYF1qSRW.png"
      },
      {
        "slug": "eldegoss",
        "name": "Eldegoss",
        "image": "https://i.pokebase.app/pokemon-champions/ugQFY6PKgYMtipx5PVWKv.png"
      },
      {
        "slug": "gossifleur",
        "name": "Gossifleur",
        "image": "https://i.pokebase.app/pokemon-champions/ch_1XL3zIQS6954QTZ2cH.png"
      },
      {
        "slug": "toxapex",
        "name": "Toxapex",
        "image": "https://i.pokebase.app/pokemon-champions/m8hHKqNETgT9NCT1pV-zV.png"
      }
    ]
  },
  {
    "slug": "ripen",
    "name": "Ripen",
    "description": "Ripens Berries and doubles their effect.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/ripen",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "appletun-gmax",
        "name": "Appletun (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UP0WrLE6uK95xReDY6WAb.png"
      },
      {
        "slug": "flapple-gmax",
        "name": "Flapple (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Rhjg6ZSvCXaO8H4QqLy59.png"
      },
      {
        "slug": "appletun",
        "name": "Appletun",
        "image": "https://i.pokebase.app/pokemon-champions/W0hyUQSj-pwUtdmXBVK_x.png"
      },
      {
        "slug": "flapple",
        "name": "Flapple",
        "image": "https://i.pokebase.app/pokemon-champions/6HsBZaBkOYlsulcRwcelf.png"
      },
      {
        "slug": "applin",
        "name": "Applin",
        "image": "https://i.pokebase.app/pokemon-champions/kgTW4hOK1cHwTa5pF39ya.png"
      }
    ]
  },
  {
    "slug": "rivalry",
    "name": "Rivalry",
    "description": "The Pokémon's competitive spirit makes it deal more damage to Pokémon of the same gender, but less damage to Pokémon of the opposite gender.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rivalry",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pyroar-male",
        "name": "Pyroar (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/_n2-9YvS0oXyQRDF7zRVX.png"
      },
      {
        "slug": "pyroar",
        "name": "Pyroar",
        "image": "https://i.pokebase.app/pokemon-champions/fZElhYojSJvU6sWiRGvme.png"
      },
      {
        "slug": "litleo",
        "name": "Litleo",
        "image": "https://i.pokebase.app/pokemon-champions/mYRGvHr-8QSsyXU75pf0Z.png"
      },
      {
        "slug": "haxorus",
        "name": "Haxorus",
        "image": "https://i.pokebase.app/pokemon-champions/m4W_ShJG8zkX2pt1wOP4s.png"
      },
      {
        "slug": "fraxure",
        "name": "Fraxure",
        "image": "https://i.pokebase.app/pokemon-champions/2phCZzVnVejNFqV6Xo29d.png"
      },
      {
        "slug": "axew",
        "name": "Axew",
        "image": "https://i.pokebase.app/pokemon-champions/dgV8Tndum-IBBHo9uK3Ar.png"
      },
      {
        "slug": "unfezant",
        "name": "Unfezant",
        "image": "https://i.pokebase.app/pokemon-champions/kiNURNOhWGUYbCUxZDWHS.png"
      },
      {
        "slug": "tranquill",
        "name": "Tranquill",
        "image": "https://i.pokebase.app/pokemon-champions/SIjbSDMgKT0tw5Ez3kYHU.png"
      },
      {
        "slug": "pidove",
        "name": "Pidove",
        "image": "https://i.pokebase.app/pokemon-champions/egd2cseyNfO11Ze9ftfCt.png"
      },
      {
        "slug": "luxray",
        "name": "Luxray",
        "image": "https://i.pokebase.app/pokemon-champions/vtu0JVFOET1a-jH48qRiP.png"
      }
    ]
  },
  {
    "slug": "rock-head",
    "name": "Rock Head",
    "description": "Protects the Pokémon from recoil damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rock-head",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "marowak-totem",
        "name": "Marowak (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ScygXUwGhTejnavpjAPSA.png"
      },
      {
        "slug": "basculin-blue-striped",
        "name": "Basculin (Blue Striped)",
        "image": "https://i.pokebase.app/pokemon-champions/WfM9IMhYHGG8SxoYebF_B.png"
      },
      {
        "slug": "marowak-alola",
        "name": "Alolan Marowak",
        "image": "https://i.pokebase.app/pokemon-champions/fNoYd9MInKPuDlRTZpdgA.png"
      },
      {
        "slug": "growlithe-hisui",
        "name": "Hisuian Growlithe",
        "image": "https://i.pokebase.app/pokemon-champions/eWDa1EHTZdgcRwVW6kN2i.png"
      },
      {
        "slug": "arcanine-hisui",
        "name": "Hisuian Arcanine",
        "image": "https://i.pokebase.app/pokemon-champions/g8I-Bxg0mSwSljrbvmjK-.png"
      },
      {
        "slug": "tyrantrum",
        "name": "Tyrantrum",
        "image": "https://i.pokebase.app/pokemon-champions/6aF4govhtdvyL_v2JdIco.png"
      },
      {
        "slug": "bonsly",
        "name": "Bonsly",
        "image": "https://i.pokebase.app/pokemon-champions/6qIRAlIGo75r63pFbkP2-.png"
      },
      {
        "slug": "shelgon",
        "name": "Shelgon",
        "image": "https://i.pokebase.app/pokemon-champions/DPDO4EyztXUer0rSY5SkU.png"
      },
      {
        "slug": "bagon",
        "name": "Bagon",
        "image": "https://i.pokebase.app/pokemon-champions/2oXR5xv5nfM9QiiGpf_6-.png"
      },
      {
        "slug": "relicanth",
        "name": "Relicanth",
        "image": "https://i.pokebase.app/pokemon-champions/sHGmgu4h2bpTwWntFEBgW.png"
      }
    ]
  },
  {
    "slug": "rocky-payload",
    "name": "Rocky Payload",
    "description": "Powers up Rock-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rocky-payload",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "bombirdier",
        "name": "Bombirdier",
        "image": "https://i.pokebase.app/pokemon-champions/oEX_De4nsXgpe4AEnvBS5.png"
      }
    ]
  },
  {
    "slug": "rough-skin",
    "name": "Rough Skin",
    "description": "The Pokémon's rough skin damages attackers that make direct contact with it.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/rough-skin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "druddigon",
        "name": "Druddigon",
        "image": "https://i.pokebase.app/pokemon-champions/uKqvZ5-6X00XUrYcc2Uz-.png"
      },
      {
        "slug": "garchomp",
        "name": "Garchomp",
        "image": "https://i.pokebase.app/pokemon-champions/5AfzeqXOVAFsGDzEXM5vP.png"
      },
      {
        "slug": "gabite",
        "name": "Gabite",
        "image": "https://i.pokebase.app/pokemon-champions/vqz68QHKZpap16Sw0zKJ8.png"
      },
      {
        "slug": "gible",
        "name": "Gible",
        "image": "https://i.pokebase.app/pokemon-champions/XJnpM02GTsWHsAxq4c0fP.png"
      },
      {
        "slug": "sharpedo",
        "name": "Sharpedo",
        "image": "https://i.pokebase.app/pokemon-champions/K4ZGAk9fiaWjQpnY3dLfT.png"
      },
      {
        "slug": "carvanha",
        "name": "Carvanha",
        "image": "https://i.pokebase.app/pokemon-champions/w6BD4M0Qfie_qZeNNKgDy.png"
      }
    ]
  },
  {
    "slug": "run-away",
    "name": "Run Away",
    "description": "Enables a sure getaway from wild Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/run-away",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dudunsparce-three-segment",
        "name": "Dudunsparce (Three Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/CwsPAiFPiUe6yp43RzsVk.png"
      },
      {
        "slug": "dudunsparce-two-segment",
        "name": "Dudunsparce (Two Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/4-aNsNP2YKmdJourqMV-T.png"
      },
      {
        "slug": "eevee-gmax",
        "name": "Eevee (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UkQne4hbz-08z_Yf1HZ7H.png"
      },
      {
        "slug": "gimmighoul-roaming",
        "name": "Gimmighoul (Roaming)",
        "image": "https://i.pokebase.app/pokemon-champions/eqdCxJurwcAx_BVYbqyYV.png"
      },
      {
        "slug": "eevee-starter",
        "name": "Eevee (Starter)",
        "image": "https://i.pokebase.app/pokemon-champions/_q3CCO0lH9uj98kmIDRAJ.png"
      },
      {
        "slug": "rapidash-galar",
        "name": "Galarian Rapidash",
        "image": "https://i.pokebase.app/pokemon-champions/8ioDgWbdjepRACMLVL7GN.png"
      },
      {
        "slug": "ponyta-galar",
        "name": "Galarian Ponyta",
        "image": "https://i.pokebase.app/pokemon-champions/f0pS8CUdLF6sSgJ_-N9pg.png"
      },
      {
        "slug": "dudunsparce",
        "name": "Dudunsparce",
        "image": "https://i.pokebase.app/pokemon-champions/qql8uu_LgHjKF9O3asTWT.png"
      },
      {
        "slug": "maschiff",
        "name": "Maschiff",
        "image": "https://i.pokebase.app/pokemon-champions/KNRYXOdliQuo2C5kYcgxA.png"
      },
      {
        "slug": "tandemaus",
        "name": "Tandemaus",
        "image": "https://i.pokebase.app/pokemon-champions/CZ0DA-4FbIdpGcmsZwxa2.png"
      }
    ]
  },
  {
    "slug": "sand-force",
    "name": "Sand Force",
    "description": "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sand-force",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "landorus-incarnate",
        "name": "Landorus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/hOJIXbmaRI-3QmmuzEOBo.png"
      },
      {
        "slug": "garchomp-mega",
        "name": "Mega Garchomp",
        "image": "https://i.pokebase.app/pokemon-champions/3tM81l3eAqD88qQndH9gi.png"
      },
      {
        "slug": "steelix-mega",
        "name": "Mega Steelix",
        "image": "https://i.pokebase.app/pokemon-champions/XH4xZOBDXf7x5k29A3Bvg.png"
      },
      {
        "slug": "dugtrio-alola",
        "name": "Alolan Dugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/DXT-DOp2DY25nOtWw6Ky-.png"
      },
      {
        "slug": "diglett-alola",
        "name": "Alolan Diglett",
        "image": "https://i.pokebase.app/pokemon-champions/qXVM2_LSOTCINI013ms_m.png"
      },
      {
        "slug": "landorus",
        "name": "Landorus",
        "image": "https://i.pokebase.app/pokemon-champions/JSBnT54f2y04Nth6--gxu.png"
      },
      {
        "slug": "excadrill",
        "name": "Excadrill",
        "image": "https://i.pokebase.app/pokemon-champions/GNl0kjv4pUYH9wyogr4tZ.png"
      },
      {
        "slug": "drilbur",
        "name": "Drilbur",
        "image": "https://i.pokebase.app/pokemon-champions/dfu6TpI7OremIpk2WDm3U.png"
      },
      {
        "slug": "gigalith",
        "name": "Gigalith",
        "image": "https://i.pokebase.app/pokemon-champions/y-jsWLu1YXuyw4KSWUqwa.png"
      },
      {
        "slug": "boldore",
        "name": "Boldore",
        "image": "https://i.pokebase.app/pokemon-champions/xrtRC6O3nDfxHYMqgenir.png"
      }
    ]
  },
  {
    "slug": "sand-rush",
    "name": "Sand Rush",
    "description": "Boosts the Pokémon's Speed stat in a sandstorm.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sand-rush",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lycanroc-midday",
        "name": "Lycanroc (Midday)",
        "image": "https://i.pokebase.app/pokemon-champions/qF2E0TtfD1_VXPx7VWVg3.png"
      },
      {
        "slug": "houndstone",
        "name": "Houndstone",
        "image": "https://i.pokebase.app/pokemon-champions/rnNCl57IO7XZraOnUfbI7.png"
      },
      {
        "slug": "dracovish",
        "name": "Dracovish",
        "image": "https://i.pokebase.app/pokemon-champions/RfSYTrVAPJNP682gjqAKw.png"
      },
      {
        "slug": "dracozolt",
        "name": "Dracozolt",
        "image": "https://i.pokebase.app/pokemon-champions/vf8HE7S1i2JmpCTTNC76E.png"
      },
      {
        "slug": "excadrill",
        "name": "Excadrill",
        "image": "https://i.pokebase.app/pokemon-champions/GNl0kjv4pUYH9wyogr4tZ.png"
      },
      {
        "slug": "drilbur",
        "name": "Drilbur",
        "image": "https://i.pokebase.app/pokemon-champions/dfu6TpI7OremIpk2WDm3U.png"
      },
      {
        "slug": "stoutland",
        "name": "Stoutland",
        "image": "https://i.pokebase.app/pokemon-champions/D2cF7JDopivHY0HRD9W6x.png"
      },
      {
        "slug": "herdier",
        "name": "Herdier",
        "image": "https://i.pokebase.app/pokemon-champions/Aqd0HThnyPlzk2uzlBMLJ.png"
      },
      {
        "slug": "sandshrew",
        "name": "Sandshrew",
        "image": "https://i.pokebase.app/pokemon-champions/-89JO5XAzcMZiwJweVDi1.png"
      },
      {
        "slug": "sandslash",
        "name": "Sandslash",
        "image": "https://i.pokebase.app/pokemon-champions/4xIO97NN83_PFOU5i3S-h.png"
      }
    ]
  },
  {
    "slug": "sand-spit",
    "name": "Sand Spit",
    "description": "The Pokémon creates a sandstorm when it's hit by an attack.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sand-spit",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sandaconda-gmax",
        "name": "Sandaconda (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/OqobZm9syuSnNFuvHIIdF.png"
      },
      {
        "slug": "sandaconda",
        "name": "Sandaconda",
        "image": "https://i.pokebase.app/pokemon-champions/eJbWQCgUOrhoTozmcESGw.png"
      },
      {
        "slug": "silicobra",
        "name": "Silicobra",
        "image": "https://i.pokebase.app/pokemon-champions/Vyx7U6OmYtWgI5SgssOdT.png"
      }
    ]
  },
  {
    "slug": "sand-stream",
    "name": "Sand Stream",
    "description": "The Pokémon summons a sandstorm when it enters a battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sand-stream",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "tyranitar-mega",
        "name": "Mega Tyranitar",
        "image": "https://i.pokebase.app/pokemon-champions/1oFvmatUdwSSoltUbE8d-.png"
      },
      {
        "slug": "gigalith",
        "name": "Gigalith",
        "image": "https://i.pokebase.app/pokemon-champions/y-jsWLu1YXuyw4KSWUqwa.png"
      },
      {
        "slug": "hippopotas",
        "name": "Hippopotas",
        "image": "https://i.pokebase.app/pokemon-champions/CRcxAziaEoP0x0SYzVOCx.png"
      },
      {
        "slug": "hippowdon",
        "name": "Hippowdon",
        "image": "https://i.pokebase.app/pokemon-champions/SHpbZvTLFg_UfDOecIUCR.png"
      },
      {
        "slug": "tyranitar",
        "name": "Tyranitar",
        "image": "https://i.pokebase.app/pokemon-champions/cdJT_t4WWmE5HNfNzYUfm.png"
      }
    ]
  },
  {
    "slug": "sand-veil",
    "name": "Sand Veil",
    "description": "Boosts the Pokémon's evasiveness in a sandstorm.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sand-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sandaconda-gmax",
        "name": "Sandaconda (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/OqobZm9syuSnNFuvHIIdF.png"
      },
      {
        "slug": "dugtrio-alola",
        "name": "Alolan Dugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/DXT-DOp2DY25nOtWw6Ky-.png"
      },
      {
        "slug": "diglett-alola",
        "name": "Alolan Diglett",
        "image": "https://i.pokebase.app/pokemon-champions/qXVM2_LSOTCINI013ms_m.png"
      },
      {
        "slug": "orthworm",
        "name": "Orthworm",
        "image": "https://i.pokebase.app/pokemon-champions/YDsMhws_oT6iCVslrrRMd.png"
      },
      {
        "slug": "wugtrio",
        "name": "Wugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/Jhcbvg3KHnwl1E24y6EHT.png"
      },
      {
        "slug": "wiglett",
        "name": "Wiglett",
        "image": "https://i.pokebase.app/pokemon-champions/rnBKyWb4vx41CgNQGPfXl.png"
      },
      {
        "slug": "sandaconda",
        "name": "Sandaconda",
        "image": "https://i.pokebase.app/pokemon-champions/eJbWQCgUOrhoTozmcESGw.png"
      },
      {
        "slug": "silicobra",
        "name": "Silicobra",
        "image": "https://i.pokebase.app/pokemon-champions/Vyx7U6OmYtWgI5SgssOdT.png"
      },
      {
        "slug": "sandygast",
        "name": "Sandygast",
        "image": "https://i.pokebase.app/pokemon-champions/IKlqhEVWbUggUEIPn-DFg.png"
      },
      {
        "slug": "palossand",
        "name": "Palossand",
        "image": "https://i.pokebase.app/pokemon-champions/R6w6WdatdJoGYbZvmxCVs.png"
      }
    ]
  },
  {
    "slug": "sap-sipper",
    "name": "Sap Sipper",
    "description": "The Pokémon takes no damage when hit by Grass-type moves. Instead, its Attack stat is boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sap-sipper",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sliggoo-hisui",
        "name": "Hisuian Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/lZGBOka7m1_CP-v0YtbW7.png"
      },
      {
        "slug": "goodra-hisui",
        "name": "Hisuian Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/_M5K8qN1u1c0C0WyC6yYI.png"
      },
      {
        "slug": "farigiraf",
        "name": "Farigiraf",
        "image": "https://i.pokebase.app/pokemon-champions/Pn-pj8sZWVOzimonjrsr2.png"
      },
      {
        "slug": "wyrdeer",
        "name": "Wyrdeer",
        "image": "https://i.pokebase.app/pokemon-champions/M5uY4n81I2DwvJIogDpbH.png"
      },
      {
        "slug": "drampa",
        "name": "Drampa",
        "image": "https://i.pokebase.app/pokemon-champions/Z2hCledPBDjy_4f1NdR9d.png"
      },
      {
        "slug": "goodra",
        "name": "Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/Sk2sguvtz_0T4a6lriyin.png"
      },
      {
        "slug": "sliggoo",
        "name": "Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/rICUlD8s36P9rut6IIn8V.png"
      },
      {
        "slug": "goomy",
        "name": "Goomy",
        "image": "https://i.pokebase.app/pokemon-champions/QFAP1pzQOeZVne6QSZqVL.png"
      },
      {
        "slug": "skiddo",
        "name": "Skiddo",
        "image": "https://i.pokebase.app/pokemon-champions/QFFVQZyH0J1eUcwDcN-k9.png"
      },
      {
        "slug": "gogoat",
        "name": "Gogoat",
        "image": "https://i.pokebase.app/pokemon-champions/m3tCWAIR2_Ye0TkZP6SC2.png"
      }
    ]
  },
  {
    "slug": "schooling",
    "name": "Schooling",
    "description": "When it has a lot of HP, the Pokémon forms a powerful school. It stops schooling when its HP is low.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/schooling",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "wishiwashi-solo",
        "name": "Wishiwashi (Solo)",
        "image": "https://i.pokebase.app/pokemon-champions/-lfqvejFh8JiKbXfrRTQQ.png"
      },
      {
        "slug": "wishiwashi-school",
        "name": "Wishiwashi (School)",
        "image": "https://i.pokebase.app/pokemon-champions/0e5TZMS_1IcC7E3kHHSYP.png"
      },
      {
        "slug": "wishiwashi",
        "name": "Wishiwashi",
        "image": "https://i.pokebase.app/pokemon-champions/y0L9QLNUk1h1J3-J8werf.png"
      }
    ]
  },
  {
    "slug": "scrappy",
    "name": "Scrappy",
    "description": "The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves. It is also unaffected by Intimidate.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/scrappy",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "decidueye-hisui",
        "name": "Hisuian Decidueye",
        "image": "https://i.pokebase.app/pokemon-champions/G7qHsTPL7NvkBib7q5Qqi.png"
      },
      {
        "slug": "lopunny-mega",
        "name": "Mega Lopunny",
        "image": "https://i.pokebase.app/pokemon-champions/1YSGGxcaUnAmIeMxyi4MK.png"
      },
      {
        "slug": "farfetchd-galar",
        "name": "Galarian Farfetch’d",
        "image": "https://i.pokebase.app/pokemon-champions/zscrS0SkB6darlijPmv5A.png"
      },
      {
        "slug": "flamigo",
        "name": "Flamigo",
        "image": "https://i.pokebase.app/pokemon-champions/xmeyWBvswUGrql8gzE2fa.png"
      },
      {
        "slug": "sirfetchd",
        "name": "Sirfetch’d",
        "image": "https://i.pokebase.app/pokemon-champions/5V3gPOUPV5cPTe0w7t2WU.png"
      },
      {
        "slug": "pangoro",
        "name": "Pangoro",
        "image": "https://i.pokebase.app/pokemon-champions/9z1s2FSG2vDfVIsqpvpg1.png"
      },
      {
        "slug": "pancham",
        "name": "Pancham",
        "image": "https://i.pokebase.app/pokemon-champions/F6rvInSpLSuCFUNERcHMR.png"
      },
      {
        "slug": "stoutland",
        "name": "Stoutland",
        "image": "https://i.pokebase.app/pokemon-champions/D2cF7JDopivHY0HRD9W6x.png"
      },
      {
        "slug": "herdier",
        "name": "Herdier",
        "image": "https://i.pokebase.app/pokemon-champions/Aqd0HThnyPlzk2uzlBMLJ.png"
      },
      {
        "slug": "exploud",
        "name": "Exploud",
        "image": "https://i.pokebase.app/pokemon-champions/EPezC8tYZqnIrc-_XfuOW.png"
      }
    ]
  },
  {
    "slug": "screen-cleaner",
    "name": "Screen Cleaner",
    "description": "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/screen-cleaner",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "mr-mime-galar",
        "name": "Galarian Mr. Mime",
        "image": "https://i.pokebase.app/pokemon-champions/kur71T2tetwACsTnZC9Z3.png"
      },
      {
        "slug": "mr-rime",
        "name": "Mr. Rime",
        "image": "https://i.pokebase.app/pokemon-champions/wLxtqubaH6hHuMC9aehx6.png"
      }
    ]
  },
  {
    "slug": "seed-sower",
    "name": "Seed Sower",
    "description": "Turns the ground into Grassy Terrain when the Pokémon is hit by an attack.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/seed-sower",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "arboliva",
        "name": "Arboliva",
        "image": "https://i.pokebase.app/pokemon-champions/zbZ0X79yFUGQupG7vSCLH.png"
      }
    ]
  },
  {
    "slug": "serene-grace",
    "name": "Serene Grace",
    "description": "Raises the likelihood of additional effects occurring when the Pokémon uses its moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/serene-grace",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dudunsparce-three-segment",
        "name": "Dudunsparce (Three Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/CwsPAiFPiUe6yp43RzsVk.png"
      },
      {
        "slug": "dudunsparce-two-segment",
        "name": "Dudunsparce (Two Segment)",
        "image": "https://i.pokebase.app/pokemon-champions/4-aNsNP2YKmdJourqMV-T.png"
      },
      {
        "slug": "meloetta-aria",
        "name": "Meloetta (Aria)",
        "image": "https://i.pokebase.app/pokemon-champions/J1teVwkSj2mCARscEIRHS.png"
      },
      {
        "slug": "meloetta-pirouette",
        "name": "Meloetta (Pirouette)",
        "image": "https://i.pokebase.app/pokemon-champions/mfKTpTsenst7bzbq2FxNl.png"
      },
      {
        "slug": "shaymin-sky",
        "name": "Shaymin (Sky)",
        "image": "https://i.pokebase.app/pokemon-champions/2NbpGc9jFQxqa9Y98KqDA.png"
      },
      {
        "slug": "dudunsparce",
        "name": "Dudunsparce",
        "image": "https://i.pokebase.app/pokemon-champions/qql8uu_LgHjKF9O3asTWT.png"
      },
      {
        "slug": "meloetta",
        "name": "Meloetta",
        "image": "https://i.pokebase.app/pokemon-champions/foiL7uuf-kZFhoBGy1ds7.png"
      },
      {
        "slug": "sawsbuck",
        "name": "Sawsbuck",
        "image": "https://i.pokebase.app/pokemon-champions/2VkCQk9pxYAUu9wYVQQWG.png"
      },
      {
        "slug": "deerling",
        "name": "Deerling",
        "image": "https://i.pokebase.app/pokemon-champions/q0VzoKHgeEmtRkBn-brMA.png"
      },
      {
        "slug": "togekiss",
        "name": "Togekiss",
        "image": "https://i.pokebase.app/pokemon-champions/lkaDVMSOcTsnXFpNnWafw.png"
      }
    ]
  },
  {
    "slug": "shadow-shield",
    "name": "Shadow Shield",
    "description": "Reduces the amount of damage the Pokémon takes while its HP is full.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shadow-shield",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lunala",
        "name": "Lunala",
        "image": "https://i.pokebase.app/pokemon-champions/Zt2S13nnif3FV6du_nlcW.png"
      }
    ]
  },
  {
    "slug": "shadow-tag",
    "name": "Shadow Tag",
    "description": "The Pokémon steps on the opposing Pokémon's shadows to prevent them from fleeing or switching out.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shadow-tag",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "gengar-mega",
        "name": "Mega Gengar",
        "image": "https://i.pokebase.app/pokemon-champions/uCjZqDuE_O3fS3TyMxe-V.png"
      },
      {
        "slug": "gothitelle",
        "name": "Gothitelle",
        "image": "https://i.pokebase.app/pokemon-champions/20f_r7n9r5Z_QlDCSGUfu.png"
      },
      {
        "slug": "gothorita",
        "name": "Gothorita",
        "image": "https://i.pokebase.app/pokemon-champions/ZMF7OE-fZZVgdhI9H9DMk.png"
      },
      {
        "slug": "gothita",
        "name": "Gothita",
        "image": "https://i.pokebase.app/pokemon-champions/4q_h64Ih_pdrhMTYFCNvP.png"
      },
      {
        "slug": "wynaut",
        "name": "Wynaut",
        "image": "https://i.pokebase.app/pokemon-champions/gIBF78SqSDAl6yHsoZC33.png"
      },
      {
        "slug": "wobbuffet",
        "name": "Wobbuffet",
        "image": "https://i.pokebase.app/pokemon-champions/Eka4ZdQiGH8EgY5pVfZu2.png"
      }
    ]
  },
  {
    "slug": "sharpness",
    "name": "Sharpness",
    "description": "Powers up slicing moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sharpness",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "samurott-hisui",
        "name": "Hisuian Samurott",
        "image": "https://i.pokebase.app/pokemon-champions/aJBUjeBrp11xm9pggCj5d.png"
      },
      {
        "slug": "veluza",
        "name": "Veluza",
        "image": "https://i.pokebase.app/pokemon-champions/EEU9BTODKseZmm9GYkaWa.png"
      },
      {
        "slug": "kleavor",
        "name": "Kleavor",
        "image": "https://i.pokebase.app/pokemon-champions/92Y3SIT_f1F4-DBCjXfYZ.png"
      },
      {
        "slug": "gallade",
        "name": "Gallade",
        "image": "https://i.pokebase.app/pokemon-champions/P3Yi96mm14eIEA_jjJ-Q6.png"
      }
    ]
  },
  {
    "slug": "shed-skin",
    "name": "Shed Skin",
    "description": "The Pokémon may cure its own status conditions by shedding its skin.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shed-skin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sandaconda-gmax",
        "name": "Sandaconda (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/OqobZm9syuSnNFuvHIIdF.png"
      },
      {
        "slug": "silcoon",
        "name": "Silcoon",
        "image": "https://i.pokebase.app/pokemon-champions/a62mF0NkSN9L7YJI7djwW.png"
      },
      {
        "slug": "cyclizar",
        "name": "Cyclizar",
        "image": "https://i.pokebase.app/pokemon-champions/TddwuGPiPWNadeVTozKui.png"
      },
      {
        "slug": "rellor",
        "name": "Rellor",
        "image": "https://i.pokebase.app/pokemon-champions/kQAlHlPNvVdQjdcmjBoPn.png"
      },
      {
        "slug": "sandaconda",
        "name": "Sandaconda",
        "image": "https://i.pokebase.app/pokemon-champions/eJbWQCgUOrhoTozmcESGw.png"
      },
      {
        "slug": "silicobra",
        "name": "Silicobra",
        "image": "https://i.pokebase.app/pokemon-champions/Vyx7U6OmYtWgI5SgssOdT.png"
      },
      {
        "slug": "spewpa",
        "name": "Spewpa",
        "image": "https://i.pokebase.app/pokemon-champions/dGuiDorkcwY2dCLJMeman.png"
      },
      {
        "slug": "karrablast",
        "name": "Karrablast",
        "image": "https://i.pokebase.app/pokemon-champions/oJNVDB_o2a7CyMW70WFY5.png"
      },
      {
        "slug": "scraggy",
        "name": "Scraggy",
        "image": "https://i.pokebase.app/pokemon-champions/Yx5zhTnmrn-9HlsxsLflz.png"
      },
      {
        "slug": "scrafty",
        "name": "Scrafty",
        "image": "https://i.pokebase.app/pokemon-champions/rQzWfA_qY9vzyqWBS1d51.png"
      }
    ]
  },
  {
    "slug": "sheer-force",
    "name": "Sheer Force",
    "description": "Removes any additional effects from the Pokémon's moves, but increases the moves' power.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sheer-force",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "squawkabilly-yellow-plumage",
        "name": "Squawkabilly (Yellow Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/L2eB1btLfvVkyJ3HL1YmA.png"
      },
      {
        "slug": "copperajah-gmax",
        "name": "Copperajah (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/FNcd1lVuWjfMsNAHsVDgJ.png"
      },
      {
        "slug": "landorus-incarnate",
        "name": "Landorus (Incarnate)",
        "image": "https://i.pokebase.app/pokemon-champions/hOJIXbmaRI-3QmmuzEOBo.png"
      },
      {
        "slug": "darmanitan-standard",
        "name": "Darmanitan (Standard)",
        "image": "https://i.pokebase.app/pokemon-champions/lF4h8rN0I9nrDyh-5Bo23.png"
      },
      {
        "slug": "kingler-gmax",
        "name": "Kingler (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/aG5xJ2K_0icMpJQR3Brbo.png"
      },
      {
        "slug": "squawkabilly-white-plumage",
        "name": "Squawkabilly (White Plumage)",
        "image": "https://i.pokebase.app/pokemon-champions/bxTFAowHBo-Kh9mxBmFhY.png"
      },
      {
        "slug": "braviary-hisui",
        "name": "Hisuian Braviary",
        "image": "https://i.pokebase.app/pokemon-champions/X4mlCY8G-6qrIKdflBVqp.png"
      },
      {
        "slug": "darmanitan-zen",
        "name": "Darmanitan (Zen)",
        "image": "https://i.pokebase.app/pokemon-champions/V77cdruMX22hTuLjR6GRI.png"
      },
      {
        "slug": "camerupt-mega",
        "name": "Mega Camerupt",
        "image": "https://i.pokebase.app/pokemon-champions/dhaPX8A2CtZaE4Ir2TCOF.png"
      },
      {
        "slug": "cetoddle",
        "name": "Cetoddle",
        "image": "https://i.pokebase.app/pokemon-champions/FKH0vs4GsTVKU5GapZGrE.png"
      }
    ]
  },
  {
    "slug": "shell-armor",
    "name": "Shell Armor",
    "description": "A hard shell protects the Pokémon from critical hits.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shell-armor",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "drednaw-gmax",
        "name": "Drednaw (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ge4ilfEqfoH1MsE1W2K6K.png"
      },
      {
        "slug": "lapras-gmax",
        "name": "Lapras (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/EoZaOONdVS_Wojzt7hf0J.png"
      },
      {
        "slug": "kingler-gmax",
        "name": "Kingler (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/aG5xJ2K_0icMpJQR3Brbo.png"
      },
      {
        "slug": "sliggoo-hisui",
        "name": "Hisuian Sliggoo",
        "image": "https://i.pokebase.app/pokemon-champions/lZGBOka7m1_CP-v0YtbW7.png"
      },
      {
        "slug": "goodra-hisui",
        "name": "Hisuian Goodra",
        "image": "https://i.pokebase.app/pokemon-champions/_M5K8qN1u1c0C0WyC6yYI.png"
      },
      {
        "slug": "slowbro-mega",
        "name": "Mega Slowbro",
        "image": "https://i.pokebase.app/pokemon-champions/dlhU0E5nLOUHQeJZ8d3b1.png"
      },
      {
        "slug": "klawf",
        "name": "Klawf",
        "image": "https://i.pokebase.app/pokemon-champions/QJt8JYy3RatOmhYF1qSRW.png"
      },
      {
        "slug": "drednaw",
        "name": "Drednaw",
        "image": "https://i.pokebase.app/pokemon-champions/1A1IbIPiqmqxvZ7TNBa84.png"
      },
      {
        "slug": "chewtle",
        "name": "Chewtle",
        "image": "https://i.pokebase.app/pokemon-champions/C9UW9O4hD8n5cvId6Xfqy.png"
      },
      {
        "slug": "turtonator",
        "name": "Turtonator",
        "image": "https://i.pokebase.app/pokemon-champions/piKM8nByynP_R8H-Jd4b5.png"
      }
    ]
  },
  {
    "slug": "shield-dust",
    "name": "Shield Dust",
    "description": "Protective dust shields the Pokémon from the additional effects of moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shield-dust",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ribombee-totem",
        "name": "Ribombee (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ZZ0Clq1wMPrf5iRPjOgBp.png"
      },
      {
        "slug": "frosmoth",
        "name": "Frosmoth",
        "image": "https://i.pokebase.app/pokemon-champions/A4teNZL8OAFZJSk4WIM_C.png"
      },
      {
        "slug": "snom",
        "name": "Snom",
        "image": "https://i.pokebase.app/pokemon-champions/i7NGFBD_rAf2gK_Wje3o_.png"
      },
      {
        "slug": "ribombee",
        "name": "Ribombee",
        "image": "https://i.pokebase.app/pokemon-champions/RAoxoYim1jope-jGnK9lR.png"
      },
      {
        "slug": "cutiefly",
        "name": "Cutiefly",
        "image": "https://i.pokebase.app/pokemon-champions/DO6uHXgoAkj47EzulvJxu.png"
      },
      {
        "slug": "vivillon",
        "name": "Vivillon",
        "image": "https://i.pokebase.app/pokemon-champions/3iPQzh9-8lezTrM7sBH4q.png"
      },
      {
        "slug": "scatterbug",
        "name": "Scatterbug",
        "image": "https://i.pokebase.app/pokemon-champions/p_1HSAaCayKfNXWjf2-H0.png"
      },
      {
        "slug": "dustox",
        "name": "Dustox",
        "image": "https://i.pokebase.app/pokemon-champions/jPJ9Zi-ROcXciHZLxdqPJ.png"
      },
      {
        "slug": "wurmple",
        "name": "Wurmple",
        "image": "https://i.pokebase.app/pokemon-champions/kyd6_ULkqQWKEHGZwl65x.png"
      },
      {
        "slug": "venomoth",
        "name": "Venomoth",
        "image": "https://i.pokebase.app/pokemon-champions/monb-jIqOxPmbf8QRcytx.png"
      }
    ]
  },
  {
    "slug": "shields-down",
    "name": "Shields Down",
    "description": "When its HP drops to half or less, the Pokémon's shell breaks and it becomes aggressive.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/shields-down",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "minior-red-meteor",
        "name": "Minior (Red Meteor)",
        "image": "https://i.pokebase.app/pokemon-champions/Xw8CfBgZUoIddSi4oJo0T.png"
      },
      {
        "slug": "minior-red",
        "name": "Minior (Red)",
        "image": "https://i.pokebase.app/pokemon-champions/CPPb_oDkRXmqWQmB85oWi.png"
      },
      {
        "slug": "minior",
        "name": "Minior",
        "image": "https://i.pokebase.app/pokemon-champions/_t0V53cb-3uvtuFruG5Tj.png"
      }
    ]
  },
  {
    "slug": "simple",
    "name": "Simple",
    "description": "Doubles the effects of the Pokémon's stat changes.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/simple",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "woobat",
        "name": "Woobat",
        "image": "https://i.pokebase.app/pokemon-champions/Nw4B9J-dWvI9rVkatxucY.png"
      },
      {
        "slug": "swoobat",
        "name": "Swoobat",
        "image": "https://i.pokebase.app/pokemon-champions/H-Cq-VpBoUn95mGJfv8mt.png"
      },
      {
        "slug": "bibarel",
        "name": "Bibarel",
        "image": "https://i.pokebase.app/pokemon-champions/eYb3wBeW-xtXeN-GGh7Rk.png"
      },
      {
        "slug": "bidoof",
        "name": "Bidoof",
        "image": "https://i.pokebase.app/pokemon-champions/GnGcJCDct_KwqJbijy4qE.png"
      },
      {
        "slug": "numel",
        "name": "Numel",
        "image": "https://i.pokebase.app/pokemon-champions/kVAfIUcSn2zqeIfdqv9-0.png"
      }
    ]
  },
  {
    "slug": "skill-link",
    "name": "Skill Link",
    "description": "Maximizes the number of times multistrike moves hit.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/skill-link",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "heracross-mega",
        "name": "Mega Heracross",
        "image": "https://i.pokebase.app/pokemon-champions/5w7yESUYVijLpNMhWy_Hj.png"
      },
      {
        "slug": "toucannon",
        "name": "Toucannon",
        "image": "https://i.pokebase.app/pokemon-champions/7pKoRqa88WwHqe8IASQAH.png"
      },
      {
        "slug": "trumbeak",
        "name": "Trumbeak",
        "image": "https://i.pokebase.app/pokemon-champions/LvzFlKI43EOTnujqeBf_6.png"
      },
      {
        "slug": "pikipek",
        "name": "Pikipek",
        "image": "https://i.pokebase.app/pokemon-champions/poEIcf1WeTTlzyY-TIzO1.png"
      },
      {
        "slug": "minccino",
        "name": "Minccino",
        "image": "https://i.pokebase.app/pokemon-champions/9Lyb7m-_9nezs92ix3qxX.png"
      },
      {
        "slug": "cinccino",
        "name": "Cinccino",
        "image": "https://i.pokebase.app/pokemon-champions/yB9NUlsYOtu0IYLWDe7rI.png"
      },
      {
        "slug": "ambipom",
        "name": "Ambipom",
        "image": "https://i.pokebase.app/pokemon-champions/5jLAhZCvV3RxW6aS1B-_n.png"
      },
      {
        "slug": "aipom",
        "name": "Aipom",
        "image": "https://i.pokebase.app/pokemon-champions/2NyznTQ1klELtpAvCcrwS.png"
      },
      {
        "slug": "shellder",
        "name": "Shellder",
        "image": "https://i.pokebase.app/pokemon-champions/_jeGPl5YSMDZi3QuH_ihu.png"
      },
      {
        "slug": "cloyster",
        "name": "Cloyster",
        "image": "https://i.pokebase.app/pokemon-champions/MAvudp8hkvN2H8Ckxy9mp.png"
      }
    ]
  },
  {
    "slug": "slow-start",
    "name": "Slow Start",
    "description": "For five turns, the Pokémon's Attack and Speed stats are halved.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/slow-start",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "varoom",
        "name": "Varoom",
        "image": "https://i.pokebase.app/pokemon-champions/H25dOuW24VPf5F6ytG02T.png"
      },
      {
        "slug": "regigigas",
        "name": "Regigigas",
        "image": "https://i.pokebase.app/pokemon-champions/mw5Qf9DrraUQvfO_KZ1wT.png"
      }
    ]
  },
  {
    "slug": "slush-rush",
    "name": "Slush Rush",
    "description": "Boosts the Pokémon's Speed stat in snow.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/slush-rush",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sandshrew-alola",
        "name": "Alolan Sandshrew",
        "image": "https://i.pokebase.app/pokemon-champions/CiI5UW1IVDTC8e2aRuL_5.png"
      },
      {
        "slug": "sandslash-alola",
        "name": "Alolan Sandslash",
        "image": "https://i.pokebase.app/pokemon-champions/NALI_OcaJX1xq7R7Lcj_c.png"
      },
      {
        "slug": "cetitan",
        "name": "Cetitan",
        "image": "https://i.pokebase.app/pokemon-champions/bi8lVm9KBIZDqd3bC0faD.png"
      },
      {
        "slug": "arctovish",
        "name": "Arctovish",
        "image": "https://i.pokebase.app/pokemon-champions/Yy5u0tzj1tSbVUCEqp_jE.png"
      },
      {
        "slug": "arctozolt",
        "name": "Arctozolt",
        "image": "https://i.pokebase.app/pokemon-champions/CqWh8LtfLeW47v_Bhbd9P.png"
      },
      {
        "slug": "cubchoo",
        "name": "Cubchoo",
        "image": "https://i.pokebase.app/pokemon-champions/12QgADaEP6RSu304oN97e.png"
      },
      {
        "slug": "beartic",
        "name": "Beartic",
        "image": "https://i.pokebase.app/pokemon-champions/uddePMmXck6J0u6UuJGkg.png"
      }
    ]
  },
  {
    "slug": "sniper",
    "name": "Sniper",
    "description": "If the Pokémon's attack lands a critical hit, the attack is powered up even further.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sniper",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "inteleon-gmax",
        "name": "Inteleon (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/T5xak2hqqXW7nqzMCP0uU.png"
      },
      {
        "slug": "inteleon",
        "name": "Inteleon",
        "image": "https://i.pokebase.app/pokemon-champions/RB039as_wBik731ssQsVs.png"
      },
      {
        "slug": "drizzile",
        "name": "Drizzile",
        "image": "https://i.pokebase.app/pokemon-champions/GA_iuYXfNGVzHIAYlXwlh.png"
      },
      {
        "slug": "sobble",
        "name": "Sobble",
        "image": "https://i.pokebase.app/pokemon-champions/t-x-wT2u8WptQuGOcfyxQ.png"
      },
      {
        "slug": "barbaracle",
        "name": "Barbaracle",
        "image": "https://i.pokebase.app/pokemon-champions/8sIMgnIu8iFH5Cq4ks_8e.png"
      },
      {
        "slug": "binacle",
        "name": "Binacle",
        "image": "https://i.pokebase.app/pokemon-champions/nOB4KmHEeDop54FDk6N80.png"
      },
      {
        "slug": "drapion",
        "name": "Drapion",
        "image": "https://i.pokebase.app/pokemon-champions/D-7oRkmOiKxzau7Vot39P.png"
      },
      {
        "slug": "skorupi",
        "name": "Skorupi",
        "image": "https://i.pokebase.app/pokemon-champions/wNEswWFJK604Fe7cAykah.png"
      },
      {
        "slug": "kingdra",
        "name": "Kingdra",
        "image": "https://i.pokebase.app/pokemon-champions/ntft29ieJuFGR1UtVOZ8a.png"
      },
      {
        "slug": "remoraid",
        "name": "Remoraid",
        "image": "https://i.pokebase.app/pokemon-champions/O7omraGm8QE4INyDBE5SV.png"
      }
    ]
  },
  {
    "slug": "snow-cloak",
    "name": "Snow Cloak",
    "description": "Boosts the Pokémon's evasiveness in snow.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/snow-cloak",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ninetales-alola",
        "name": "Alolan Ninetales",
        "image": "https://i.pokebase.app/pokemon-champions/OTBv1UmTx31QeVj98DCLo.png"
      },
      {
        "slug": "vulpix-alola",
        "name": "Alolan Vulpix",
        "image": "https://i.pokebase.app/pokemon-champions/Zc8-xNlgTeGiHRTyxSEGU.png"
      },
      {
        "slug": "sandshrew-alola",
        "name": "Alolan Sandshrew",
        "image": "https://i.pokebase.app/pokemon-champions/CiI5UW1IVDTC8e2aRuL_5.png"
      },
      {
        "slug": "sandslash-alola",
        "name": "Alolan Sandslash",
        "image": "https://i.pokebase.app/pokemon-champions/NALI_OcaJX1xq7R7Lcj_c.png"
      },
      {
        "slug": "cetoddle",
        "name": "Cetoddle",
        "image": "https://i.pokebase.app/pokemon-champions/FKH0vs4GsTVKU5GapZGrE.png"
      },
      {
        "slug": "cubchoo",
        "name": "Cubchoo",
        "image": "https://i.pokebase.app/pokemon-champions/12QgADaEP6RSu304oN97e.png"
      },
      {
        "slug": "beartic",
        "name": "Beartic",
        "image": "https://i.pokebase.app/pokemon-champions/uddePMmXck6J0u6UuJGkg.png"
      },
      {
        "slug": "vanillish",
        "name": "Vanillish",
        "image": "https://i.pokebase.app/pokemon-champions/6xlt22_dOThJuLAE4SaYv.png"
      },
      {
        "slug": "vanillite",
        "name": "Vanillite",
        "image": "https://i.pokebase.app/pokemon-champions/BLsmgfjFyQmQ5cUSSbtV0.png"
      },
      {
        "slug": "froslass",
        "name": "Froslass",
        "image": "https://i.pokebase.app/pokemon-champions/jUE9pabVF-VyGkGlESeTY.png"
      }
    ]
  },
  {
    "slug": "snow-warning",
    "name": "Snow Warning",
    "description": "Snowstorm blows when the Pokémon enters battle. As of X & Y, this lasts 5 turns.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/snow-warning",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "froslass-mega",
        "name": "Mega Froslass",
        "image": "https://i.pokebase.app/pokemon-champions/_QrtRF98XZAMkaOVb1gSJ.png"
      },
      {
        "slug": "abomasnow-mega",
        "name": "Mega Abomasnow",
        "image": "https://i.pokebase.app/pokemon-champions/S7TYHR9D7kaJEg0cQ-MnP.png"
      },
      {
        "slug": "ninetales-alola",
        "name": "Alolan Ninetales",
        "image": "https://i.pokebase.app/pokemon-champions/OTBv1UmTx31QeVj98DCLo.png"
      },
      {
        "slug": "vulpix-alola",
        "name": "Alolan Vulpix",
        "image": "https://i.pokebase.app/pokemon-champions/Zc8-xNlgTeGiHRTyxSEGU.png"
      },
      {
        "slug": "aurorus",
        "name": "Aurorus",
        "image": "https://i.pokebase.app/pokemon-champions/ATIYn-BSQFbHVaPqvUG47.png"
      },
      {
        "slug": "amaura",
        "name": "Amaura",
        "image": "https://i.pokebase.app/pokemon-champions/yyZqPCKyJhQ2hJkQPK32F.png"
      },
      {
        "slug": "vanilluxe",
        "name": "Vanilluxe",
        "image": "https://i.pokebase.app/pokemon-champions/e5V2-bPn40PMmxwOyPVe-.png"
      },
      {
        "slug": "abomasnow",
        "name": "Abomasnow",
        "image": "https://i.pokebase.app/pokemon-champions/_m49GlW98tNG--X08aPBG.png"
      },
      {
        "slug": "snover",
        "name": "Snover",
        "image": "https://i.pokebase.app/pokemon-champions/1BAMQ9tGH-wqyd4P5lQdW.png"
      }
    ]
  },
  {
    "slug": "solar-power",
    "name": "Solar Power",
    "description": "In harsh sunlight, the Pokémon's Sp. Atk stat is boosted, but its HP decreases every turn.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/solar-power",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "charizard-gmax",
        "name": "Charizard (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/5d75mJmVtBDPT6DStSDBh.png"
      },
      {
        "slug": "houndoom-mega",
        "name": "Mega Houndoom",
        "image": "https://i.pokebase.app/pokemon-champions/IoXeLJGy5TGFsSwv7gano.png"
      },
      {
        "slug": "heliolisk",
        "name": "Heliolisk",
        "image": "https://i.pokebase.app/pokemon-champions/vgJtQT1sa-cAdrT2NJiBf.png"
      },
      {
        "slug": "helioptile",
        "name": "Helioptile",
        "image": "https://i.pokebase.app/pokemon-champions/NgJ8xnwmwmq7IYKkMQbgd.png"
      },
      {
        "slug": "tropius",
        "name": "Tropius",
        "image": "https://i.pokebase.app/pokemon-champions/rsNl04OXLoJriKPk5RzK5.png"
      },
      {
        "slug": "sunflora",
        "name": "Sunflora",
        "image": "https://i.pokebase.app/pokemon-champions/dV0mtOu1S0UTxd0uxRlvK.png"
      },
      {
        "slug": "sunkern",
        "name": "Sunkern",
        "image": "https://i.pokebase.app/pokemon-champions/0DouY6RN2_w9Yhw0WgMb7.png"
      },
      {
        "slug": "charizard",
        "name": "Charizard",
        "image": "https://i.pokebase.app/pokemon-champions/-OOVWtKZ6FalBkrIuFJAH.png"
      },
      {
        "slug": "charmeleon",
        "name": "Charmeleon",
        "image": "https://i.pokebase.app/pokemon-champions/Cld8S77MzCr_SkolItV7g.png"
      },
      {
        "slug": "charmander",
        "name": "Charmander",
        "image": "https://i.pokebase.app/pokemon-champions/b8SoV2-Q37CJQzXmwJjVR.png"
      }
    ]
  },
  {
    "slug": "solid-rock",
    "name": "Solid Rock",
    "description": "Reduces the power of supereffective attacks that hit the Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/solid-rock",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "carracosta",
        "name": "Carracosta",
        "image": "https://i.pokebase.app/pokemon-champions/xDKjDKpBhl9c43rJjFnCc.png"
      },
      {
        "slug": "tirtouga",
        "name": "Tirtouga",
        "image": "https://i.pokebase.app/pokemon-champions/rurmxvtTzEoNp2eEJJQi9.png"
      },
      {
        "slug": "rhyperior",
        "name": "Rhyperior",
        "image": "https://i.pokebase.app/pokemon-champions/E7v80jTQtsIA01yb10rxC.png"
      },
      {
        "slug": "camerupt",
        "name": "Camerupt",
        "image": "https://i.pokebase.app/pokemon-champions/qQz0JfI6KTQ8g-niem3WJ.png"
      }
    ]
  },
  {
    "slug": "soul-heart",
    "name": "Soul-Heart",
    "description": "Boosts the Pokémon's Sp. Atk stat every time another Pokémon faints.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/soul-heart",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "magearna-original",
        "name": "Magearna (Original)",
        "image": "https://i.pokebase.app/pokemon-champions/QJ7eHeTf6gtXB8k9_ZVd2.png"
      },
      {
        "slug": "magearna",
        "name": "Magearna",
        "image": "https://i.pokebase.app/pokemon-champions/2-BAXRSpMBgsGxQDvYpub.png"
      }
    ]
  },
  {
    "slug": "soundproof",
    "name": "Soundproof",
    "description": "Soundproofing gives the Pokémon full immunity to all sound-based moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/soundproof",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kommo-o-totem",
        "name": "Kommo-o (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/xjm3nSikaK350EksXFKKu.png"
      },
      {
        "slug": "electrode-hisui",
        "name": "Hisuian Electrode",
        "image": "https://i.pokebase.app/pokemon-champions/uDKwJumMM9hdbiT_f81Aa.png"
      },
      {
        "slug": "voltorb-hisui",
        "name": "Hisuian Voltorb",
        "image": "https://i.pokebase.app/pokemon-champions/kRD7nRUbXazYyd8RfrOjZ.png"
      },
      {
        "slug": "kommo-o",
        "name": "Kommo-o",
        "image": "https://i.pokebase.app/pokemon-champions/c_xuHZv3ob4p8UXgy_ErY.png"
      },
      {
        "slug": "hakamo-o",
        "name": "Hakamo-o",
        "image": "https://i.pokebase.app/pokemon-champions/6WGT8mT-W7IHYNGD6XeN_.png"
      },
      {
        "slug": "jangmo-o",
        "name": "Jangmo-o",
        "image": "https://i.pokebase.app/pokemon-champions/oyoZPtyYf-gfdWeEzFlIY.png"
      },
      {
        "slug": "bouffalant",
        "name": "Bouffalant",
        "image": "https://i.pokebase.app/pokemon-champions/VR8M7PuzKFL5hPnPeO-g4.png"
      },
      {
        "slug": "abomasnow",
        "name": "Abomasnow",
        "image": "https://i.pokebase.app/pokemon-champions/_m49GlW98tNG--X08aPBG.png"
      },
      {
        "slug": "snover",
        "name": "Snover",
        "image": "https://i.pokebase.app/pokemon-champions/1BAMQ9tGH-wqyd4P5lQdW.png"
      },
      {
        "slug": "mime-jr",
        "name": "Mime Jr.",
        "image": "https://i.pokebase.app/pokemon-champions/DyWW92IiC_x9ocWxchUQq.png"
      }
    ]
  },
  {
    "slug": "speed-boost",
    "name": "Speed Boost",
    "description": "The Pokémon's Speed stat is boosted every turn.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/speed-boost",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "blaziken-mega",
        "name": "Mega Blaziken",
        "image": "https://i.pokebase.app/pokemon-champions/S2diQI4EbTy0EI1ShBhL2.png"
      },
      {
        "slug": "espathra",
        "name": "Espathra",
        "image": "https://i.pokebase.app/pokemon-champions/303TuKLvIi7wi8G-bQ9L-.png"
      },
      {
        "slug": "flittle",
        "name": "Flittle",
        "image": "https://i.pokebase.app/pokemon-champions/Z9jkXRn72O6ZYtIKdDY5Y.png"
      },
      {
        "slug": "venipede",
        "name": "Venipede",
        "image": "https://i.pokebase.app/pokemon-champions/HZZLbU3TQUgX2-Vb1I0x8.png"
      },
      {
        "slug": "scolipede",
        "name": "Scolipede",
        "image": "https://i.pokebase.app/pokemon-champions/wy_NlJLExS4tY_zMdufWL.png"
      },
      {
        "slug": "whirlipede",
        "name": "Whirlipede",
        "image": "https://i.pokebase.app/pokemon-champions/KUYUNr8p1SkS6qcQNFG5K.png"
      },
      {
        "slug": "yanmega",
        "name": "Yanmega",
        "image": "https://i.pokebase.app/pokemon-champions/a8oyQm6Eo7OYKt3hvrHdw.png"
      },
      {
        "slug": "sharpedo",
        "name": "Sharpedo",
        "image": "https://i.pokebase.app/pokemon-champions/K4ZGAk9fiaWjQpnY3dLfT.png"
      },
      {
        "slug": "carvanha",
        "name": "Carvanha",
        "image": "https://i.pokebase.app/pokemon-champions/w6BD4M0Qfie_qZeNNKgDy.png"
      },
      {
        "slug": "ninjask",
        "name": "Ninjask",
        "image": "https://i.pokebase.app/pokemon-champions/ZVLd-14w-pmdufKqGY6iU.png"
      }
    ]
  },
  {
    "slug": "spicy-spray",
    "name": "Spicy Spray",
    "description": "When the Pokémon takes damage from a move, it burns the attacker.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/spicy-spray",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "scovillain-mega",
        "name": "Mega Scovillain",
        "image": "https://i.pokebase.app/pokemon-champions/d3mwWomEAhIMx_R9YkVis.png"
      }
    ]
  },
  {
    "slug": "stakeout",
    "name": "Stakeout",
    "description": "Doubles the damage dealt to a target that has just switched into battle.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stakeout",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "gumshoos-totem",
        "name": "Gumshoos (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/baz3mzsykrChYo5qcytVs.png"
      },
      {
        "slug": "mabosstiff",
        "name": "Mabosstiff",
        "image": "https://i.pokebase.app/pokemon-champions/UXO0MyDx1Njq7fFTv8hlc.png"
      },
      {
        "slug": "maschiff",
        "name": "Maschiff",
        "image": "https://i.pokebase.app/pokemon-champions/KNRYXOdliQuo2C5kYcgxA.png"
      },
      {
        "slug": "spidops",
        "name": "Spidops",
        "image": "https://i.pokebase.app/pokemon-champions/BxQka7-D5MyqUfuiB8A1z.png"
      },
      {
        "slug": "tarountula",
        "name": "Tarountula",
        "image": "https://i.pokebase.app/pokemon-champions/DVkfZXWaEvK-z0LlGag8t.png"
      },
      {
        "slug": "thievul",
        "name": "Thievul",
        "image": "https://i.pokebase.app/pokemon-champions/NE8fLGyzc_iUAu41D5zsk.png"
      },
      {
        "slug": "nickit",
        "name": "Nickit",
        "image": "https://i.pokebase.app/pokemon-champions/7wEjbK6kuJeinjGrQq9g1.png"
      },
      {
        "slug": "yungoos",
        "name": "Yungoos",
        "image": "https://i.pokebase.app/pokemon-champions/qC6TIzXAiCnFFstDFe9jt.png"
      },
      {
        "slug": "gumshoos",
        "name": "Gumshoos",
        "image": "https://i.pokebase.app/pokemon-champions/10ltZZVAH9VO-vRthamH2.png"
      }
    ]
  },
  {
    "slug": "stall",
    "name": "Stall",
    "description": "The Pokémon is always the last to use its moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stall",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sableye",
        "name": "Sableye",
        "image": "https://i.pokebase.app/pokemon-champions/TpAZ_BQHQgVeBrd730FmD.png"
      }
    ]
  },
  {
    "slug": "stalwart",
    "name": "Stalwart",
    "description": "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stalwart",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "duraludon-gmax",
        "name": "Duraludon (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/ehi0AfFLkFaVXB4OXDUsz.png"
      },
      {
        "slug": "skarmory-mega",
        "name": "Mega Skarmory",
        "image": "https://i.pokebase.app/pokemon-champions/UkdOrfd711NBvznU7BIGg.png"
      },
      {
        "slug": "archaludon",
        "name": "Archaludon",
        "image": "https://i.pokebase.app/pokemon-champions/Oyx1c9ecFHIL5J3FVhjF3.png"
      },
      {
        "slug": "duraludon",
        "name": "Duraludon",
        "image": "https://i.pokebase.app/pokemon-champions/A3RaGn89C6s6yC2GtAv48.png"
      }
    ]
  },
  {
    "slug": "stamina",
    "name": "Stamina",
    "description": "Boosts the Defense stat when the Pokémon is hit by an attack.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stamina",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "archaludon",
        "name": "Archaludon",
        "image": "https://i.pokebase.app/pokemon-champions/Oyx1c9ecFHIL5J3FVhjF3.png"
      },
      {
        "slug": "mudsdale",
        "name": "Mudsdale",
        "image": "https://i.pokebase.app/pokemon-champions/bSijto5TXv3zX4XEgkRaw.png"
      },
      {
        "slug": "mudbray",
        "name": "Mudbray",
        "image": "https://i.pokebase.app/pokemon-champions/EU8Wy7z57zmYdxLdjACA7.png"
      }
    ]
  },
  {
    "slug": "stance-change",
    "name": "Stance Change",
    "description": "The Pokémon changes its form to Blade Forme when it uses an attack move and changes to Shield Forme when it uses King’s Shield.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stance-change",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "aegislash-shield",
        "name": "Aegislash (Shield)",
        "image": "https://i.pokebase.app/pokemon-champions/c2L61qkhAINiD0L422pD3.png"
      },
      {
        "slug": "aegislash-blade",
        "name": "Aegislash (Blade)",
        "image": "https://i.pokebase.app/pokemon-champions/fme4bBtNwjnSDEAovl3tF.png"
      },
      {
        "slug": "aegislash",
        "name": "Aegislash",
        "image": "https://i.pokebase.app/pokemon-champions/_gXz-N0N5D1LlhhUdvU72.png"
      }
    ]
  },
  {
    "slug": "static",
    "name": "Static",
    "description": "The Pokémon is charged with static electricity and may paralyze attackers that make direct contact with it.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/static",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "pikachu-starter",
        "name": "Pikachu (Starter)",
        "image": "https://i.pokebase.app/pokemon-champions/81plE3ueK4p4BqBqIee2b.png"
      },
      {
        "slug": "pikachu-gmax",
        "name": "Pikachu (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/yviKZH6wKTxKppFq4Qwv5.png"
      },
      {
        "slug": "electrode-hisui",
        "name": "Hisuian Electrode",
        "image": "https://i.pokebase.app/pokemon-champions/uDKwJumMM9hdbiT_f81Aa.png"
      },
      {
        "slug": "voltorb-hisui",
        "name": "Hisuian Voltorb",
        "image": "https://i.pokebase.app/pokemon-champions/kRD7nRUbXazYyd8RfrOjZ.png"
      },
      {
        "slug": "bellibolt",
        "name": "Bellibolt",
        "image": "https://i.pokebase.app/pokemon-champions/e0x-ATub64o1nLWllpmlL.png"
      },
      {
        "slug": "tadbulb",
        "name": "Tadbulb",
        "image": "https://i.pokebase.app/pokemon-champions/JnJ0qWBOXMBsTfJRApst8.png"
      },
      {
        "slug": "pawmi",
        "name": "Pawmi",
        "image": "https://i.pokebase.app/pokemon-champions/-s5dOcmqMy1sScM5IE9Ps.png"
      },
      {
        "slug": "arctozolt",
        "name": "Arctozolt",
        "image": "https://i.pokebase.app/pokemon-champions/CqWh8LtfLeW47v_Bhbd9P.png"
      },
      {
        "slug": "toxel",
        "name": "Toxel",
        "image": "https://i.pokebase.app/pokemon-champions/FysOl3mjEPG5_ALOjDxhM.png"
      },
      {
        "slug": "stunfisk",
        "name": "Stunfisk",
        "image": "https://i.pokebase.app/pokemon-champions/KBnpe2K_EV5cw8pa-IHk4.png"
      }
    ]
  },
  {
    "slug": "steadfast",
    "name": "Steadfast",
    "description": "The Pokémon's determination boosts its Speed stat every time it flinches.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/steadfast",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lycanroc-midday",
        "name": "Lycanroc (Midday)",
        "image": "https://i.pokebase.app/pokemon-champions/qF2E0TtfD1_VXPx7VWVg3.png"
      },
      {
        "slug": "machamp-gmax",
        "name": "Machamp (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Dmex20QRyj-CTO58tnWth.png"
      },
      {
        "slug": "mewtwo-mega-x",
        "name": "Mega Mewtwo X",
        "image": "https://i.pokebase.app/pokemon-champions/vdw6km0CKznuD8BgrRUkZ.png"
      },
      {
        "slug": "farfetchd-galar",
        "name": "Galarian Farfetch’d",
        "image": "https://i.pokebase.app/pokemon-champions/zscrS0SkB6darlijPmv5A.png"
      },
      {
        "slug": "sirfetchd",
        "name": "Sirfetch’d",
        "image": "https://i.pokebase.app/pokemon-champions/5V3gPOUPV5cPTe0w7t2WU.png"
      },
      {
        "slug": "dubwool",
        "name": "Dubwool",
        "image": "https://i.pokebase.app/pokemon-champions/4CZy1xe2HYQ2Ihlki5vj0.png"
      },
      {
        "slug": "rockruff",
        "name": "Rockruff",
        "image": "https://i.pokebase.app/pokemon-champions/FwiYtFUpsMoylYFBA68Ca.png"
      },
      {
        "slug": "gallade",
        "name": "Gallade",
        "image": "https://i.pokebase.app/pokemon-champions/P3Yi96mm14eIEA_jjJ-Q6.png"
      },
      {
        "slug": "lucario",
        "name": "Lucario",
        "image": "https://i.pokebase.app/pokemon-champions/sNbWqyBUzO1rJGQt6aadF.png"
      },
      {
        "slug": "riolu",
        "name": "Riolu",
        "image": "https://i.pokebase.app/pokemon-champions/yuZk43ee60P-y5CkhR1rF.png"
      }
    ]
  },
  {
    "slug": "steam-engine",
    "name": "Steam Engine",
    "description": "Boosts the Speed stat drastically when the Pokémon is hit by a Fire- or Water-type move.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/steam-engine",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "coalossal-gmax",
        "name": "Coalossal (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ory22pZY-bAvOdXiUMcxl.png"
      },
      {
        "slug": "coalossal",
        "name": "Coalossal",
        "image": "https://i.pokebase.app/pokemon-champions/a2kKNgx65Z7LNqcpNv1Ci.png"
      },
      {
        "slug": "carkol",
        "name": "Carkol",
        "image": "https://i.pokebase.app/pokemon-champions/9h7_v2F_tAagRQHHqbM17.png"
      },
      {
        "slug": "rolycoly",
        "name": "Rolycoly",
        "image": "https://i.pokebase.app/pokemon-champions/F4Z1sPhqQOYhlnpQB1UEe.png"
      }
    ]
  },
  {
    "slug": "steelworker",
    "name": "Steelworker",
    "description": "Powers up Steel-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/steelworker",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dhelmise",
        "name": "Dhelmise",
        "image": "https://i.pokebase.app/pokemon-champions/9Q3mEK-wh8FMaE3YLcKeU.png"
      }
    ]
  },
  {
    "slug": "steely-spirit",
    "name": "Steely Spirit",
    "description": "Powers up the Steel-type moves of the Pokémon and its allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/steely-spirit",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "perrserker",
        "name": "Perrserker",
        "image": "https://i.pokebase.app/pokemon-champions/04Ay0hhTU_CcqZdzPqMdE.png"
      }
    ]
  },
  {
    "slug": "stench",
    "name": "Stench",
    "description": "By releasing a stench when attacking, the Pokémon may cause the target to flinch.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/stench",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "garbodor-gmax",
        "name": "Garbodor (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/6rtxQkpA4ovKghiep74Is.png"
      },
      {
        "slug": "garbodor",
        "name": "Garbodor",
        "image": "https://i.pokebase.app/pokemon-champions/VKb7gnqnKnHOGwZwA2BFm.png"
      },
      {
        "slug": "trubbish",
        "name": "Trubbish",
        "image": "https://i.pokebase.app/pokemon-champions/9aJdR-4T33g1giu_xQY0e.png"
      },
      {
        "slug": "skuntank",
        "name": "Skuntank",
        "image": "https://i.pokebase.app/pokemon-champions/j3KC9OnrnebsGNZN8pkyi.png"
      },
      {
        "slug": "stunky",
        "name": "Stunky",
        "image": "https://i.pokebase.app/pokemon-champions/e7Qtxzc_zVJWD65IYLij4.png"
      },
      {
        "slug": "weezing",
        "name": "Weezing",
        "image": "https://i.pokebase.app/pokemon-champions/cosCb5ywi4gAvSO-pXlau.png"
      },
      {
        "slug": "koffing",
        "name": "Koffing",
        "image": "https://i.pokebase.app/pokemon-champions/dcGf3f4p0l9oKboFarSzs.png"
      },
      {
        "slug": "muk",
        "name": "Muk",
        "image": "https://i.pokebase.app/pokemon-champions/a0HLnDzGXIDNS0y_GjPbJ.png"
      },
      {
        "slug": "grimer",
        "name": "Grimer",
        "image": "https://i.pokebase.app/pokemon-champions/6txqEADHlnPm7ESUxUa6X.png"
      },
      {
        "slug": "gloom",
        "name": "Gloom",
        "image": "https://i.pokebase.app/pokemon-champions/C7exA8VkkEQZOCZojvtLO.png"
      }
    ]
  },
  {
    "slug": "sticky-hold",
    "name": "Sticky Hold",
    "description": "The Pokémon's held items cling to its sticky body and cannot be removed by other Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sticky-hold",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "hydrapple",
        "name": "Hydrapple",
        "image": "https://i.pokebase.app/pokemon-champions/7Fx3Ok2e_zkjxLMpWbetD.png"
      },
      {
        "slug": "dipplin",
        "name": "Dipplin",
        "image": "https://i.pokebase.app/pokemon-champions/XmM9obAEu9MRY-69mE9xy.png"
      },
      {
        "slug": "accelgor",
        "name": "Accelgor",
        "image": "https://i.pokebase.app/pokemon-champions/EUwRvY7Qz_h5FbZqLhge0.png"
      },
      {
        "slug": "trubbish",
        "name": "Trubbish",
        "image": "https://i.pokebase.app/pokemon-champions/9aJdR-4T33g1giu_xQY0e.png"
      },
      {
        "slug": "gastrodon",
        "name": "Gastrodon",
        "image": "https://i.pokebase.app/pokemon-champions/My1j1y4aaAZsCMJRnw6Uj.png"
      },
      {
        "slug": "shellos",
        "name": "Shellos",
        "image": "https://i.pokebase.app/pokemon-champions/dNB5jXEsTM2F_39W-uqUH.png"
      },
      {
        "slug": "gulpin",
        "name": "Gulpin",
        "image": "https://i.pokebase.app/pokemon-champions/vc1NNtmwI01SwYrMh8Hnc.png"
      },
      {
        "slug": "swalot",
        "name": "Swalot",
        "image": "https://i.pokebase.app/pokemon-champions/pQv30WAbQ77PlxQT0mOrG.png"
      },
      {
        "slug": "muk",
        "name": "Muk",
        "image": "https://i.pokebase.app/pokemon-champions/a0HLnDzGXIDNS0y_GjPbJ.png"
      },
      {
        "slug": "grimer",
        "name": "Grimer",
        "image": "https://i.pokebase.app/pokemon-champions/6txqEADHlnPm7ESUxUa6X.png"
      }
    ]
  },
  {
    "slug": "storm-drain",
    "name": "Storm Drain",
    "description": "The Pokémon draws in all Water-type moves. Instead of taking damage from them, its Sp. Atk stat is boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/storm-drain",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "tatsugiri-stretchy",
        "name": "Tatsugiri (Stretchy)",
        "image": "https://i.pokebase.app/pokemon-champions/wTx0Oo98r8BEv86_SbuB3.png"
      },
      {
        "slug": "tatsugiri-droopy",
        "name": "Tatsugiri (Droopy)",
        "image": "https://i.pokebase.app/pokemon-champions/m3XyJxUc2rgo7eOuvpi4I.png"
      },
      {
        "slug": "tatsugiri-curly",
        "name": "Tatsugiri (Curly)",
        "image": "https://i.pokebase.app/pokemon-champions/ENgaRQOE-dvMeeE10v5Bi.png"
      },
      {
        "slug": "tatsugiri",
        "name": "Tatsugiri",
        "image": "https://i.pokebase.app/pokemon-champions/dRsm1RyQOJacPHSlmg-Y2.png"
      },
      {
        "slug": "maractus",
        "name": "Maractus",
        "image": "https://i.pokebase.app/pokemon-champions/kvT0hmNq_1Ure-EbvWZiB.png"
      },
      {
        "slug": "lumineon",
        "name": "Lumineon",
        "image": "https://i.pokebase.app/pokemon-champions/4jdIYm_90bVbUQuCQwMCn.png"
      },
      {
        "slug": "finneon",
        "name": "Finneon",
        "image": "https://i.pokebase.app/pokemon-champions/1y5EMBKwyhd4cDxmSDP_D.png"
      },
      {
        "slug": "gastrodon",
        "name": "Gastrodon",
        "image": "https://i.pokebase.app/pokemon-champions/My1j1y4aaAZsCMJRnw6Uj.png"
      },
      {
        "slug": "shellos",
        "name": "Shellos",
        "image": "https://i.pokebase.app/pokemon-champions/dNB5jXEsTM2F_39W-uqUH.png"
      },
      {
        "slug": "cradily",
        "name": "Cradily",
        "image": "https://i.pokebase.app/pokemon-champions/U5mXZSWbsmND8IA498OTH.png"
      }
    ]
  },
  {
    "slug": "strong-jaw",
    "name": "Strong Jaw",
    "description": "The Pokémon's strong jaw boosts the power of its biting moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/strong-jaw",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "drednaw-gmax",
        "name": "Drednaw (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ge4ilfEqfoH1MsE1W2K6K.png"
      },
      {
        "slug": "gumshoos-totem",
        "name": "Gumshoos (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/baz3mzsykrChYo5qcytVs.png"
      },
      {
        "slug": "avalugg-hisui",
        "name": "Hisuian Avalugg",
        "image": "https://i.pokebase.app/pokemon-champions/XINhzo-NUBhpY1Fbrkd44.png"
      },
      {
        "slug": "sharpedo-mega",
        "name": "Mega Sharpedo",
        "image": "https://i.pokebase.app/pokemon-champions/KXaPd4ucdDoVG5a86Hna_.png"
      },
      {
        "slug": "dracovish",
        "name": "Dracovish",
        "image": "https://i.pokebase.app/pokemon-champions/RfSYTrVAPJNP682gjqAKw.png"
      },
      {
        "slug": "boltund",
        "name": "Boltund",
        "image": "https://i.pokebase.app/pokemon-champions/BUj5DTe6k6QiequjFNcby.png"
      },
      {
        "slug": "drednaw",
        "name": "Drednaw",
        "image": "https://i.pokebase.app/pokemon-champions/1A1IbIPiqmqxvZ7TNBa84.png"
      },
      {
        "slug": "chewtle",
        "name": "Chewtle",
        "image": "https://i.pokebase.app/pokemon-champions/C9UW9O4hD8n5cvId6Xfqy.png"
      },
      {
        "slug": "bruxish",
        "name": "Bruxish",
        "image": "https://i.pokebase.app/pokemon-champions/_Xl8hcosqNJKTlCWAr-KU.png"
      },
      {
        "slug": "yungoos",
        "name": "Yungoos",
        "image": "https://i.pokebase.app/pokemon-champions/qC6TIzXAiCnFFstDFe9jt.png"
      }
    ]
  },
  {
    "slug": "sturdy",
    "name": "Sturdy",
    "description": "The Pokémon cannot be knocked out by a single hit as long as its HP is full. One-hit KO moves will also fail to knock it out.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sturdy",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "togedemaru-totem",
        "name": "Togedemaru (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/nPy1wHk0GtyxGP4b_nyiZ.png"
      },
      {
        "slug": "ogerpon-cornerstone-mask",
        "name": "Ogerpon (Cornerstone Mask)",
        "image": "https://i.pokebase.app/pokemon-champions/RdRm4Gc8fXJ7t93wMWJ73.png"
      },
      {
        "slug": "avalugg-hisui",
        "name": "Hisuian Avalugg",
        "image": "https://i.pokebase.app/pokemon-champions/XINhzo-NUBhpY1Fbrkd44.png"
      },
      {
        "slug": "golem-alola",
        "name": "Alolan Golem",
        "image": "https://i.pokebase.app/pokemon-champions/ppxrQCjZ50XFVvByaGuw8.png"
      },
      {
        "slug": "graveler-alola",
        "name": "Alolan Graveler",
        "image": "https://i.pokebase.app/pokemon-champions/D4Teln0xYPyrWMFO3Or2Y.png"
      },
      {
        "slug": "geodude-alola",
        "name": "Alolan Geodude",
        "image": "https://i.pokebase.app/pokemon-champions/1nsyhPxOmL74E8uQTHh59.png"
      },
      {
        "slug": "archaludon",
        "name": "Archaludon",
        "image": "https://i.pokebase.app/pokemon-champions/Oyx1c9ecFHIL5J3FVhjF3.png"
      },
      {
        "slug": "garganacl",
        "name": "Garganacl",
        "image": "https://i.pokebase.app/pokemon-champions/Zwm9dsBA-R5NTGoNu2e_X.png"
      },
      {
        "slug": "naclstack",
        "name": "Naclstack",
        "image": "https://i.pokebase.app/pokemon-champions/21260fFbjB4nb906ZlHKl.png"
      },
      {
        "slug": "nacli",
        "name": "Nacli",
        "image": "https://i.pokebase.app/pokemon-champions/PYPmXCsYsR4xNYfy1w5Ri.png"
      }
    ]
  },
  {
    "slug": "suction-cups",
    "name": "Suction Cups",
    "description": "The Pokémon uses suction cups to stay in one spot. This protects it from moves and items that would force it to switch out.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/suction-cups",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "malamar",
        "name": "Malamar",
        "image": "https://i.pokebase.app/pokemon-champions/0pXTCuuEQUZfwfRNFqyMh.png"
      },
      {
        "slug": "inkay",
        "name": "Inkay",
        "image": "https://i.pokebase.app/pokemon-champions/bC6OpkvqZDEHKVn_kzgXQ.png"
      },
      {
        "slug": "cradily",
        "name": "Cradily",
        "image": "https://i.pokebase.app/pokemon-champions/U5mXZSWbsmND8IA498OTH.png"
      },
      {
        "slug": "lileep",
        "name": "Lileep",
        "image": "https://i.pokebase.app/pokemon-champions/bSc2mwtYoRciwqQFOQoX6.png"
      },
      {
        "slug": "octillery",
        "name": "Octillery",
        "image": "https://i.pokebase.app/pokemon-champions/yqcAmAQQ4MDxRrBKiZbYN.png"
      }
    ]
  },
  {
    "slug": "super-luck",
    "name": "Super Luck",
    "description": "The Pokémon is so lucky that the critical-hit ratios of its moves are boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/super-luck",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "unfezant",
        "name": "Unfezant",
        "image": "https://i.pokebase.app/pokemon-champions/kiNURNOhWGUYbCUxZDWHS.png"
      },
      {
        "slug": "tranquill",
        "name": "Tranquill",
        "image": "https://i.pokebase.app/pokemon-champions/SIjbSDMgKT0tw5Ez3kYHU.png"
      },
      {
        "slug": "pidove",
        "name": "Pidove",
        "image": "https://i.pokebase.app/pokemon-champions/egd2cseyNfO11Ze9ftfCt.png"
      },
      {
        "slug": "togekiss",
        "name": "Togekiss",
        "image": "https://i.pokebase.app/pokemon-champions/lkaDVMSOcTsnXFpNnWafw.png"
      },
      {
        "slug": "honchkrow",
        "name": "Honchkrow",
        "image": "https://i.pokebase.app/pokemon-champions/RmUuDAtzKRkFGvJaWpCKc.png"
      },
      {
        "slug": "absol",
        "name": "Absol",
        "image": "https://i.pokebase.app/pokemon-champions/PF_QIWYI_UjHRSsrmSWUq.png"
      },
      {
        "slug": "murkrow",
        "name": "Murkrow",
        "image": "https://i.pokebase.app/pokemon-champions/AEINCxgaisf-ZZQgVrRYA.png"
      },
      {
        "slug": "togepi",
        "name": "Togepi",
        "image": "https://i.pokebase.app/pokemon-champions/D0syoojtAiZYz76Xny6Z8.png"
      },
      {
        "slug": "togetic",
        "name": "Togetic",
        "image": "https://i.pokebase.app/pokemon-champions/5o9ofw_vcCRO7BXP8liHd.png"
      }
    ]
  },
  {
    "slug": "supersweet-syrup",
    "name": "Supersweet Syrup",
    "description": "Lowers the evasion of opposing Pokémon by 1 stage when first sent into battle",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/supersweet-syrup",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "hydrapple",
        "name": "Hydrapple",
        "image": "https://i.pokebase.app/pokemon-champions/7Fx3Ok2e_zkjxLMpWbetD.png"
      },
      {
        "slug": "dipplin",
        "name": "Dipplin",
        "image": "https://i.pokebase.app/pokemon-champions/XmM9obAEu9MRY-69mE9xy.png"
      }
    ]
  },
  {
    "slug": "supreme-overlord",
    "name": "Supreme Overlord",
    "description": "When the Pokémon enters a battle, its Attack and Sp. Atk stats are slightly boosted for each of the allies in its party that have already been defeated.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/supreme-overlord",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kingambit",
        "name": "Kingambit",
        "image": "https://i.pokebase.app/pokemon-champions/cbmuf9AN5rgWu6OZ3nxPd.png"
      }
    ]
  },
  {
    "slug": "surge-surfer",
    "name": "Surge Surfer",
    "description": "Doubles the Pokémon's Speed stat on Electric Terrain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/surge-surfer",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "raichu-alola",
        "name": "Alolan Raichu",
        "image": "https://i.pokebase.app/pokemon-champions/1aQHZP3PGvUC3S84glPyc.png"
      }
    ]
  },
  {
    "slug": "swarm",
    "name": "Swarm",
    "description": "Powers up Bug-type moves when the Pokémon's HP is low.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/swarm",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "orbeetle-gmax",
        "name": "Orbeetle (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/w1Qj43A2C0VlGKjUE-V9A.png"
      },
      {
        "slug": "lokix",
        "name": "Lokix",
        "image": "https://i.pokebase.app/pokemon-champions/AxUDAZchjv-6rOWAYNd76.png"
      },
      {
        "slug": "nymble",
        "name": "Nymble",
        "image": "https://i.pokebase.app/pokemon-champions/1KbNL7CWVdGiqIq_OciQ9.png"
      },
      {
        "slug": "kleavor",
        "name": "Kleavor",
        "image": "https://i.pokebase.app/pokemon-champions/92Y3SIT_f1F4-DBCjXfYZ.png"
      },
      {
        "slug": "orbeetle",
        "name": "Orbeetle",
        "image": "https://i.pokebase.app/pokemon-champions/mLA39fhYk2VOv26yKAuk9.png"
      },
      {
        "slug": "dottler",
        "name": "Dottler",
        "image": "https://i.pokebase.app/pokemon-champions/_uB7DVOdToNO29dVEsXuX.png"
      },
      {
        "slug": "blipbug",
        "name": "Blipbug",
        "image": "https://i.pokebase.app/pokemon-champions/We2pdDZyE2XEos8eOVueU.png"
      },
      {
        "slug": "grubbin",
        "name": "Grubbin",
        "image": "https://i.pokebase.app/pokemon-champions/tSE4bsUpVuFluIkRfEpyn.png"
      },
      {
        "slug": "volcarona",
        "name": "Volcarona",
        "image": "https://i.pokebase.app/pokemon-champions/NkmrFUeF-we5iT13AjIgY.png"
      },
      {
        "slug": "larvesta",
        "name": "Larvesta",
        "image": "https://i.pokebase.app/pokemon-champions/ef7ptuqSZcFyKi1rUseYQ.png"
      }
    ]
  },
  {
    "slug": "sweet-veil",
    "name": "Sweet Veil",
    "description": "Prevents the Pokémon and its allies from falling asleep.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sweet-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "alcremie-gmax",
        "name": "Alcremie (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/QjMaJ33CmD2op8Aedu5oa.png"
      },
      {
        "slug": "ribombee-totem",
        "name": "Ribombee (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/ZZ0Clq1wMPrf5iRPjOgBp.png"
      },
      {
        "slug": "alcremie",
        "name": "Alcremie",
        "image": "https://i.pokebase.app/pokemon-champions/KuLWjjZwxNvwyV1nLItsU.png"
      },
      {
        "slug": "milcery",
        "name": "Milcery",
        "image": "https://i.pokebase.app/pokemon-champions/BkkdOSDYXVAHyiAoB2ijA.png"
      },
      {
        "slug": "tsareena",
        "name": "Tsareena",
        "image": "https://i.pokebase.app/pokemon-champions/4DjTvWYiOAadIzv02yDPP.png"
      },
      {
        "slug": "steenee",
        "name": "Steenee",
        "image": "https://i.pokebase.app/pokemon-champions/FcqECKjMBbxdWClTQLMIu.png"
      },
      {
        "slug": "bounsweet",
        "name": "Bounsweet",
        "image": "https://i.pokebase.app/pokemon-champions/KoTNkSFt-b1mm-UjTmwPM.png"
      },
      {
        "slug": "ribombee",
        "name": "Ribombee",
        "image": "https://i.pokebase.app/pokemon-champions/RAoxoYim1jope-jGnK9lR.png"
      },
      {
        "slug": "cutiefly",
        "name": "Cutiefly",
        "image": "https://i.pokebase.app/pokemon-champions/DO6uHXgoAkj47EzulvJxu.png"
      },
      {
        "slug": "slurpuff",
        "name": "Slurpuff",
        "image": "https://i.pokebase.app/pokemon-champions/8xZCqITv2UDfof9E1eJtS.png"
      }
    ]
  },
  {
    "slug": "swift-swim",
    "name": "Swift Swim",
    "description": "Boosts the Pokémon's Speed stat in rain.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/swift-swim",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "basculegion-male",
        "name": "Basculegion (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/Fc8RTjatQyq1k5BVAi3JW.png"
      },
      {
        "slug": "drednaw-gmax",
        "name": "Drednaw (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/Ge4ilfEqfoH1MsE1W2K6K.png"
      },
      {
        "slug": "basculegion-female",
        "name": "Basculegion (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/XgilENALPySbZX3jFD_eL.png"
      },
      {
        "slug": "swampert-mega",
        "name": "Mega Swampert",
        "image": "https://i.pokebase.app/pokemon-champions/KqkMabT04-0D-Ar5VKykv.png"
      },
      {
        "slug": "qwilfish-hisui",
        "name": "Hisuian Qwilfish",
        "image": "https://i.pokebase.app/pokemon-champions/-Uib1wANM2XBsiefza3p4.png"
      },
      {
        "slug": "overqwil",
        "name": "Overqwil",
        "image": "https://i.pokebase.app/pokemon-champions/oVvZTlLxCBSNy330fwYKi.png"
      },
      {
        "slug": "basculegion",
        "name": "Basculegion",
        "image": "https://i.pokebase.app/pokemon-champions/4Nj3qHhQnci8V-7HIhCQS.png"
      },
      {
        "slug": "barraskewda",
        "name": "Barraskewda",
        "image": "https://i.pokebase.app/pokemon-champions/QeEVoquamArq2Py4iEKnt.png"
      },
      {
        "slug": "arrokuda",
        "name": "Arrokuda",
        "image": "https://i.pokebase.app/pokemon-champions/gBeInPpPVre9N6cL-QcrZ.png"
      },
      {
        "slug": "drednaw",
        "name": "Drednaw",
        "image": "https://i.pokebase.app/pokemon-champions/1A1IbIPiqmqxvZ7TNBa84.png"
      }
    ]
  },
  {
    "slug": "sword-of-ruin",
    "name": "Sword of Ruin",
    "description": "The power of the Pokémon's ruinous sword lowers the Defense stats of all Pokémon except itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/sword-of-ruin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "chien-pao",
        "name": "Chien-Pao",
        "image": "https://i.pokebase.app/pokemon-champions/NvgKCOwmC8-lRtxIUbHj4.png"
      }
    ]
  },
  {
    "slug": "symbiosis",
    "name": "Symbiosis",
    "description": "The Pokémon passes its held item to an ally that has used up an item.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/symbiosis",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "floette-eternal",
        "name": "Floette (Eternal)",
        "image": "https://i.pokebase.app/pokemon-champions/ISeTye8rgSJhBHS7_WAq2.png"
      },
      {
        "slug": "oranguru",
        "name": "Oranguru",
        "image": "https://i.pokebase.app/pokemon-champions/Ma79xl5fzl5mZWPIR8XpL.png"
      },
      {
        "slug": "florges",
        "name": "Florges",
        "image": "https://i.pokebase.app/pokemon-champions/XxUlaMeM33mTLrsduRzWN.png"
      },
      {
        "slug": "floette",
        "name": "Floette",
        "image": "https://i.pokebase.app/pokemon-champions/EPfV82hf-Dj8JjmYyF4D8.png"
      },
      {
        "slug": "flabebe",
        "name": "Flabébé",
        "image": "https://i.pokebase.app/pokemon-champions/MA5FuW8V_zTyCE4SQj9Aq.png"
      }
    ]
  },
  {
    "slug": "synchronize",
    "name": "Synchronize",
    "description": "If the Pokémon is burned, paralyzed, or poisoned by another Pokémon, that Pokémon will be inflicted with the same status condition.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/synchronize",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "indeedee-male",
        "name": "Indeedee (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/rsB5qGp91w7WopflWuiSf.png"
      },
      {
        "slug": "indeedee-female",
        "name": "Indeedee (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/I9Yx23xQlThSHL-FOopnD.png"
      },
      {
        "slug": "rabsca",
        "name": "Rabsca",
        "image": "https://i.pokebase.app/pokemon-champions/JmaRVNdS8yllCZDJ5SRuN.png"
      },
      {
        "slug": "indeedee",
        "name": "Indeedee",
        "image": "https://i.pokebase.app/pokemon-champions/-vRxIcGbej2bl3Q3L3irA.png"
      },
      {
        "slug": "elgyem",
        "name": "Elgyem",
        "image": "https://i.pokebase.app/pokemon-champions/FxXwmjO8gkduHiszDOJEy.png"
      },
      {
        "slug": "beheeyem",
        "name": "Beheeyem",
        "image": "https://i.pokebase.app/pokemon-champions/TEQCiAJf3LfCEnlp_sH8b.png"
      },
      {
        "slug": "munna",
        "name": "Munna",
        "image": "https://i.pokebase.app/pokemon-champions/pibM5Y0puOtBMAl08VLgw.png"
      },
      {
        "slug": "musharna",
        "name": "Musharna",
        "image": "https://i.pokebase.app/pokemon-champions/QqYTveYC5bogQJfVkLHHc.png"
      },
      {
        "slug": "gardevoir",
        "name": "Gardevoir",
        "image": "https://i.pokebase.app/pokemon-champions/JZwrbcqEF_jjpLSAmE3UF.png"
      },
      {
        "slug": "kirlia",
        "name": "Kirlia",
        "image": "https://i.pokebase.app/pokemon-champions/ggPOIqdwHNsFxXyQ_oEwD.png"
      }
    ]
  },
  {
    "slug": "tablets-of-ruin",
    "name": "Tablets of Ruin",
    "description": "The power of the Pokémon's ruinous wooden tablets lowers the Attack stats of all Pokémon except itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tablets-of-ruin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "wo-chien",
        "name": "Wo-Chien",
        "image": "https://i.pokebase.app/pokemon-champions/PyXNesW3-fSaxq6Ps89Li.png"
      }
    ]
  },
  {
    "slug": "tangled-feet",
    "name": "Tangled Feet",
    "description": "Boosts the Pokémon's evasiveness if it is confused.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tangled-feet",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "flamigo",
        "name": "Flamigo",
        "image": "https://i.pokebase.app/pokemon-champions/xmeyWBvswUGrql8gzE2fa.png"
      },
      {
        "slug": "mr-rime",
        "name": "Mr. Rime",
        "image": "https://i.pokebase.app/pokemon-champions/wLxtqubaH6hHuMC9aehx6.png"
      },
      {
        "slug": "chatot",
        "name": "Chatot",
        "image": "https://i.pokebase.app/pokemon-champions/-nRjqL8kkxEm_i6CLrGee.png"
      },
      {
        "slug": "spinda",
        "name": "Spinda",
        "image": "https://i.pokebase.app/pokemon-champions/SEJGMEBArZisSWMwb6gJw.png"
      },
      {
        "slug": "dodrio",
        "name": "Dodrio",
        "image": "https://i.pokebase.app/pokemon-champions/ZLNQftJIHDIdYBZH1JvAE.png"
      },
      {
        "slug": "doduo",
        "name": "Doduo",
        "image": "https://i.pokebase.app/pokemon-champions/OKmsuHSW5uJaZ9ykMgtbm.png"
      },
      {
        "slug": "pidgeot",
        "name": "Pidgeot",
        "image": "https://i.pokebase.app/pokemon-champions/D333AMdgnFc9HFQTNY1IY.png"
      },
      {
        "slug": "pidgey",
        "name": "Pidgey",
        "image": "https://i.pokebase.app/pokemon-champions/JUnzGiUcvGU8i-EavkIgc.png"
      },
      {
        "slug": "pidgeotto",
        "name": "Pidgeotto",
        "image": "https://i.pokebase.app/pokemon-champions/Xhi4j4lq4FgUkWxx9hFho.png"
      }
    ]
  },
  {
    "slug": "tangling-hair",
    "name": "Tangling Hair",
    "description": "Contact with the Pokémon lowers the attacker's Speed stat.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tangling-hair",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dugtrio-alola",
        "name": "Alolan Dugtrio",
        "image": "https://i.pokebase.app/pokemon-champions/DXT-DOp2DY25nOtWw6Ky-.png"
      },
      {
        "slug": "diglett-alola",
        "name": "Alolan Diglett",
        "image": "https://i.pokebase.app/pokemon-champions/qXVM2_LSOTCINI013ms_m.png"
      }
    ]
  },
  {
    "slug": "technician",
    "name": "Technician",
    "description": "Powers up weak moves so the Pokémon can deal more damage with them.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/technician",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "maushold-family-of-three",
        "name": "Maushold (Family Of Three)",
        "image": "https://i.pokebase.app/pokemon-champions/4zcWyNiUxwR6HIOcJGdF4.png"
      },
      {
        "slug": "maushold-family-of-four",
        "name": "Maushold (Family Of Four)",
        "image": "https://i.pokebase.app/pokemon-champions/X_dcsimlW9kCLywwvV3Bo.png"
      },
      {
        "slug": "toxtricity-low-key-gmax",
        "name": "Toxtricity (Low Key Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/GuE-07MB0LKM4ZA_W2h6n.png"
      },
      {
        "slug": "toxtricity-amped-gmax",
        "name": "Toxtricity (Amped Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/g2P6SnaNliXAkX2CehWTV.png"
      },
      {
        "slug": "toxtricity-amped",
        "name": "Toxtricity (Amped)",
        "image": "https://i.pokebase.app/pokemon-champions/qyktQ2esr8X-up1H1xpQs.png"
      },
      {
        "slug": "meowth-gmax",
        "name": "Meowth (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hCbsiwEIEVuxk99wbWSJB.png"
      },
      {
        "slug": "toxtricity-low-key",
        "name": "Toxtricity (Low Key)",
        "image": "https://i.pokebase.app/pokemon-champions/w2oWUrdD-QWSZDEkfaNve.png"
      },
      {
        "slug": "scizor-mega",
        "name": "Mega Scizor",
        "image": "https://i.pokebase.app/pokemon-champions/C3B02uU88Z0kXbJ54bfqP.png"
      },
      {
        "slug": "meowth-alola",
        "name": "Alolan Meowth",
        "image": "https://i.pokebase.app/pokemon-champions/kVal83hHEQX3QvUYDSSKd.png"
      },
      {
        "slug": "persian-alola",
        "name": "Alolan Persian",
        "image": "https://i.pokebase.app/pokemon-champions/ATUNn-FFCNja8NkQqPdqa.png"
      }
    ]
  },
  {
    "slug": "telepathy",
    "name": "Telepathy",
    "description": "The Pokémon anticipates and dodges the attacks of its allies.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/telepathy",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "orbeetle-gmax",
        "name": "Orbeetle (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/w1Qj43A2C0VlGKjUE-V9A.png"
      },
      {
        "slug": "giratina-altered",
        "name": "Giratina (Altered)",
        "image": "https://i.pokebase.app/pokemon-champions/kTUHK5UQ_0griAJdV8GzJ.png"
      },
      {
        "slug": "palkia-origin",
        "name": "Palkia (Origin)",
        "image": "https://i.pokebase.app/pokemon-champions/IVgqlxvCCTTuJnlK1crbE.png"
      },
      {
        "slug": "dialga-origin",
        "name": "Dialga (Origin)",
        "image": "https://i.pokebase.app/pokemon-champions/cSOBNnMZigWWdQRqGc-l4.png"
      },
      {
        "slug": "rabsca",
        "name": "Rabsca",
        "image": "https://i.pokebase.app/pokemon-champions/JmaRVNdS8yllCZDJ5SRuN.png"
      },
      {
        "slug": "orbeetle",
        "name": "Orbeetle",
        "image": "https://i.pokebase.app/pokemon-champions/mLA39fhYk2VOv26yKAuk9.png"
      },
      {
        "slug": "dottler",
        "name": "Dottler",
        "image": "https://i.pokebase.app/pokemon-champions/_uB7DVOdToNO29dVEsXuX.png"
      },
      {
        "slug": "blipbug",
        "name": "Blipbug",
        "image": "https://i.pokebase.app/pokemon-champions/We2pdDZyE2XEos8eOVueU.png"
      },
      {
        "slug": "tapu-fini",
        "name": "Tapu Fini",
        "image": "https://i.pokebase.app/pokemon-champions/d61qkqrSf5inCAmiML8MS.png"
      },
      {
        "slug": "tapu-bulu",
        "name": "Tapu Bulu",
        "image": "https://i.pokebase.app/pokemon-champions/ItEGadKy1J59fNg3Xg-9e.png"
      }
    ]
  },
  {
    "slug": "tera-shell",
    "name": "Tera Shell",
    "description": "The Pokémon's shell contains the powers of each type. All damage-dealing moves that hit the Pokémon when its HP is full will not be very effective.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tera-shell",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "terapagos-terastal",
        "name": "Terapagos (Terastal)",
        "image": "https://i.pokebase.app/pokemon-champions/sQSOUx9CL72OIh1QpXAYd.png"
      }
    ]
  },
  {
    "slug": "tera-shift",
    "name": "Tera Shift",
    "description": "When the Pokémon enters a battle, it absorbs the energy around itself and transforms into its Terastal Form.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tera-shift",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "terapagos",
        "name": "Terapagos",
        "image": "https://i.pokebase.app/pokemon-champions/Ah1oF5J7psBxsQ4RjbCSx.png"
      }
    ]
  },
  {
    "slug": "teraform-zero",
    "name": "Teraform Zero",
    "description": "When Terapagos changes into its Stellar Form, it uses its hidden powers to eliminate all effects of weather and terrain, reducing them to zero.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/teraform-zero",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "terapagos-stellar",
        "name": "Terapagos (Stellar)",
        "image": "https://i.pokebase.app/pokemon-champions/EvXGjjUtcEpF-ysrfDrop.png"
      }
    ]
  },
  {
    "slug": "teravolt",
    "name": "Teravolt",
    "description": "The Pokémon's moves are unimpeded by the Ability of the target.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/teravolt",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kyurem-black",
        "name": "Kyurem (Black)",
        "image": "https://i.pokebase.app/pokemon-champions/XG8OSBurw40FQaCkkvMRG.png"
      },
      {
        "slug": "zekrom",
        "name": "Zekrom",
        "image": "https://i.pokebase.app/pokemon-champions/mn_ToTmTV8-jXecg3Z-q_.png"
      }
    ]
  },
  {
    "slug": "thermal-exchange",
    "name": "Thermal Exchange",
    "description": "Boosts the Attack stat when the Pokémon is hit by a Fire-type move. The Pokémon also cannot be burned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/thermal-exchange",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "baxcalibur",
        "name": "Baxcalibur",
        "image": "https://i.pokebase.app/pokemon-champions/KoNOip1oI5Mlt8Gp_6Sln.png"
      },
      {
        "slug": "arctibax",
        "name": "Arctibax",
        "image": "https://i.pokebase.app/pokemon-champions/MVVNBQ4QkCEAJnaJ8DyOt.png"
      },
      {
        "slug": "frigibax",
        "name": "Frigibax",
        "image": "https://i.pokebase.app/pokemon-champions/RcIVeWWHltHA6bvKzHiaM.png"
      }
    ]
  },
  {
    "slug": "thick-fat",
    "name": "Thick Fat",
    "description": "The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/thick-fat",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "oinkologne-male",
        "name": "Oinkologne (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/WrkJBRZFjQ3bJHJe5hBq1.png"
      },
      {
        "slug": "appletun-gmax",
        "name": "Appletun (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/UP0WrLE6uK95xReDY6WAb.png"
      },
      {
        "slug": "snorlax-gmax",
        "name": "Snorlax (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hfDH3oIPudpxVyLP8kfI_.png"
      },
      {
        "slug": "raticate-totem-alola",
        "name": "Raticate (Totem Alola)",
        "image": "https://i.pokebase.app/pokemon-champions/l01cY4aFi54SiRicVNLow.png"
      },
      {
        "slug": "oinkologne-female",
        "name": "Oinkologne (Female)",
        "image": "https://i.pokebase.app/pokemon-champions/KMv6irRQe04Ju8n7bH1eN.png"
      },
      {
        "slug": "rattata-alola",
        "name": "Alolan Rattata",
        "image": "https://i.pokebase.app/pokemon-champions/ohYNjU6PII-2Vn2sqK_hS.png"
      },
      {
        "slug": "raticate-alola",
        "name": "Alolan Raticate",
        "image": "https://i.pokebase.app/pokemon-champions/YUP-60CaxF-OymTFaCk_u.png"
      },
      {
        "slug": "venusaur-mega",
        "name": "Mega Venusaur",
        "image": "https://i.pokebase.app/pokemon-champions/Jj0c95DGm0JjYzzoYTvwJ.png"
      },
      {
        "slug": "cetoddle",
        "name": "Cetoddle",
        "image": "https://i.pokebase.app/pokemon-champions/FKH0vs4GsTVKU5GapZGrE.png"
      },
      {
        "slug": "cetitan",
        "name": "Cetitan",
        "image": "https://i.pokebase.app/pokemon-champions/bi8lVm9KBIZDqd3bC0faD.png"
      }
    ]
  },
  {
    "slug": "tinted-lens",
    "name": "Tinted Lens",
    "description": "The Pokémon can use “not very effective” moves to deal regular damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tinted-lens",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "butterfree-gmax",
        "name": "Butterfree (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/n4qn0HF9Q6ZWZAaETBWZk.png"
      },
      {
        "slug": "braviary-hisui",
        "name": "Hisuian Braviary",
        "image": "https://i.pokebase.app/pokemon-champions/X4mlCY8G-6qrIKdflBVqp.png"
      },
      {
        "slug": "lokix",
        "name": "Lokix",
        "image": "https://i.pokebase.app/pokemon-champions/AxUDAZchjv-6rOWAYNd76.png"
      },
      {
        "slug": "nymble",
        "name": "Nymble",
        "image": "https://i.pokebase.app/pokemon-champions/1KbNL7CWVdGiqIq_OciQ9.png"
      },
      {
        "slug": "sigilyph",
        "name": "Sigilyph",
        "image": "https://i.pokebase.app/pokemon-champions/3D93QyiyHmd5JrNodD2VW.png"
      },
      {
        "slug": "yanmega",
        "name": "Yanmega",
        "image": "https://i.pokebase.app/pokemon-champions/a8oyQm6Eo7OYKt3hvrHdw.png"
      },
      {
        "slug": "mothim",
        "name": "Mothim",
        "image": "https://i.pokebase.app/pokemon-champions/_fheNKK7gGLxfnRT6ebRc.png"
      },
      {
        "slug": "illumise",
        "name": "Illumise",
        "image": "https://i.pokebase.app/pokemon-champions/OY5Kws8EUy5giZmgKpkKh.png"
      },
      {
        "slug": "noctowl",
        "name": "Noctowl",
        "image": "https://i.pokebase.app/pokemon-champions/UGyoyF_pUSrXgR_3ZFQru.png"
      },
      {
        "slug": "hoothoot",
        "name": "Hoothoot",
        "image": "https://i.pokebase.app/pokemon-champions/BUFHQDrf7TXhtDlfU2Tb5.png"
      }
    ]
  },
  {
    "slug": "torrent",
    "name": "Torrent",
    "description": "Powers up Water-type moves when the Pokémon's HP is low.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/torrent",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "inteleon-gmax",
        "name": "Inteleon (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/T5xak2hqqXW7nqzMCP0uU.png"
      },
      {
        "slug": "blastoise-gmax",
        "name": "Blastoise (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/PtnE6qWFTltAMBIi56CB8.png"
      },
      {
        "slug": "samurott-hisui",
        "name": "Hisuian Samurott",
        "image": "https://i.pokebase.app/pokemon-champions/aJBUjeBrp11xm9pggCj5d.png"
      },
      {
        "slug": "quaquaval",
        "name": "Quaquaval",
        "image": "https://i.pokebase.app/pokemon-champions/-7RHHVPmP5kfvvncovdTA.png"
      },
      {
        "slug": "quaxwell",
        "name": "Quaxwell",
        "image": "https://i.pokebase.app/pokemon-champions/PkPww5Sz8xlNk6EE8ghKD.png"
      },
      {
        "slug": "quaxly",
        "name": "Quaxly",
        "image": "https://i.pokebase.app/pokemon-champions/lS6Y9L4lnps0r-88GG3x0.png"
      },
      {
        "slug": "inteleon",
        "name": "Inteleon",
        "image": "https://i.pokebase.app/pokemon-champions/RB039as_wBik731ssQsVs.png"
      },
      {
        "slug": "drizzile",
        "name": "Drizzile",
        "image": "https://i.pokebase.app/pokemon-champions/GA_iuYXfNGVzHIAYlXwlh.png"
      },
      {
        "slug": "sobble",
        "name": "Sobble",
        "image": "https://i.pokebase.app/pokemon-champions/t-x-wT2u8WptQuGOcfyxQ.png"
      },
      {
        "slug": "primarina",
        "name": "Primarina",
        "image": "https://i.pokebase.app/pokemon-champions/7-IvrzN7cTW-mIBSD_utZ.png"
      }
    ]
  },
  {
    "slug": "tough-claws",
    "name": "Tough Claws",
    "description": "Powers up moves that make direct contact.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/tough-claws",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "lycanroc-dusk",
        "name": "Lycanroc (Dusk)",
        "image": "https://i.pokebase.app/pokemon-champions/nAup2lTNfAT4IQws_JPhE.png"
      },
      {
        "slug": "metagross-mega",
        "name": "Mega Metagross",
        "image": "https://i.pokebase.app/pokemon-champions/VRCfW9VvWfw6aCgKyWC7P.png"
      },
      {
        "slug": "aerodactyl-mega",
        "name": "Mega Aerodactyl",
        "image": "https://i.pokebase.app/pokemon-champions/aq_zf-we0F-vYGNaiNxvJ.png"
      },
      {
        "slug": "meowth-galar",
        "name": "Galarian Meowth",
        "image": "https://i.pokebase.app/pokemon-champions/XLcxkAm86llD5ffhtasiJ.png"
      },
      {
        "slug": "charizard-mega-x",
        "name": "Mega Charizard X",
        "image": "https://i.pokebase.app/pokemon-champions/p6cIYoxjz0Xt9tL7Nk0XJ.png"
      },
      {
        "slug": "perrserker",
        "name": "Perrserker",
        "image": "https://i.pokebase.app/pokemon-champions/04Ay0hhTU_CcqZdzPqMdE.png"
      },
      {
        "slug": "lycanroc",
        "name": "Lycanroc",
        "image": "https://i.pokebase.app/pokemon-champions/CXyCgO1ioP4-0CvuOBvOj.png"
      },
      {
        "slug": "barbaracle",
        "name": "Barbaracle",
        "image": "https://i.pokebase.app/pokemon-champions/8sIMgnIu8iFH5Cq4ks_8e.png"
      },
      {
        "slug": "binacle",
        "name": "Binacle",
        "image": "https://i.pokebase.app/pokemon-champions/nOB4KmHEeDop54FDk6N80.png"
      }
    ]
  },
  {
    "slug": "toxic-boost",
    "name": "Toxic Boost",
    "description": "Powers up physical moves when the Pokémon is poisoned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/toxic-boost",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "zangoose",
        "name": "Zangoose",
        "image": "https://i.pokebase.app/pokemon-champions/nRAOYYbRZiNB0qseh9xYX.png"
      }
    ]
  },
  {
    "slug": "toxic-chain",
    "name": "Toxic Chain",
    "description": "The power of the Pokémon's toxic chain may badly poison any target the Pokémon hits with a move",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/toxic-chain",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "fezandipiti",
        "name": "Fezandipiti",
        "image": "https://i.pokebase.app/pokemon-champions/yIlRRYy3QrZjzCZEvmjIF.png"
      },
      {
        "slug": "munkidori",
        "name": "Munkidori",
        "image": "https://i.pokebase.app/pokemon-champions/3GivwMvzgkzmwLCzePtSf.png"
      },
      {
        "slug": "okidogi",
        "name": "Okidogi",
        "image": "https://i.pokebase.app/pokemon-champions/LwVxwUmwe07CYofK9C5vj.png"
      }
    ]
  },
  {
    "slug": "toxic-debris",
    "name": "Toxic Debris",
    "description": "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/toxic-debris",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "glimmora",
        "name": "Glimmora",
        "image": "https://i.pokebase.app/pokemon-champions/KAT_mkYkK6YTH8UrcQreb.png"
      },
      {
        "slug": "glimmet",
        "name": "Glimmet",
        "image": "https://i.pokebase.app/pokemon-champions/lyArtf3lkIB3F0qx7Dfl1.png"
      }
    ]
  },
  {
    "slug": "trace",
    "name": "Trace",
    "description": "Ability becomes the same as that of the opponent. Switching this Pokémon out of battle restores its original ability. In a Double Battle, a random opponent’s ability will be copied.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/trace",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "meowstic-mega",
        "name": "Mega Meowstic",
        "image": "https://i.pokebase.app/pokemon-champions/GkquHnegC_0PUVOOXKuoG.png"
      },
      {
        "slug": "alakazam-mega",
        "name": "Mega Alakazam",
        "image": "https://i.pokebase.app/pokemon-champions/9CMc9nssMKuY5Z2II3RzM.png"
      },
      {
        "slug": "gardevoir",
        "name": "Gardevoir",
        "image": "https://i.pokebase.app/pokemon-champions/JZwrbcqEF_jjpLSAmE3UF.png"
      },
      {
        "slug": "kirlia",
        "name": "Kirlia",
        "image": "https://i.pokebase.app/pokemon-champions/ggPOIqdwHNsFxXyQ_oEwD.png"
      },
      {
        "slug": "ralts",
        "name": "Ralts",
        "image": "https://i.pokebase.app/pokemon-champions/sBsXAASq8oqO5atHf6V4R.png"
      },
      {
        "slug": "porygon2",
        "name": "Porygon2",
        "image": "https://i.pokebase.app/pokemon-champions/KHaUxSidvdOfJLJDOiIsQ.png"
      },
      {
        "slug": "porygon",
        "name": "Porygon",
        "image": "https://i.pokebase.app/pokemon-champions/6MHiaAXaoZYbb8DcG_-QE.png"
      }
    ]
  },
  {
    "slug": "transistor",
    "name": "Transistor",
    "description": "Powers up Electric-type moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/transistor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "regieleki",
        "name": "Regieleki",
        "image": "https://i.pokebase.app/pokemon-champions/Fws3QD84zM01LKdwQrYbJ.png"
      }
    ]
  },
  {
    "slug": "triage",
    "name": "Triage",
    "description": "Gives priority to the Pokémon's healing moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/triage",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "comfey",
        "name": "Comfey",
        "image": "https://i.pokebase.app/pokemon-champions/az1CrHs2skfoXoMOAcwbZ.png"
      }
    ]
  },
  {
    "slug": "truant",
    "name": "Truant",
    "description": "Each time the Pokémon uses a move, it spends the next turn loafing around.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/truant",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "durant",
        "name": "Durant",
        "image": "https://i.pokebase.app/pokemon-champions/HAw_nyvan3_ACW4--CoVk.png"
      },
      {
        "slug": "slaking",
        "name": "Slaking",
        "image": "https://i.pokebase.app/pokemon-champions/SpWdSX_de_3Vq-4lyGs6J.png"
      },
      {
        "slug": "slakoth",
        "name": "Slakoth",
        "image": "https://i.pokebase.app/pokemon-champions/zz7yR6blABhVRr04JuPbu.png"
      }
    ]
  },
  {
    "slug": "turboblaze",
    "name": "Turboblaze",
    "description": "The Pokémon's moves are unimpeded by the Ability of the target.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/turboblaze",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kyurem-white",
        "name": "Kyurem (White)",
        "image": "https://i.pokebase.app/pokemon-champions/KxANq34hUPbErAAg5A96j.png"
      },
      {
        "slug": "reshiram",
        "name": "Reshiram",
        "image": "https://i.pokebase.app/pokemon-champions/npUFZYdZKfYd1v46VNhiO.png"
      }
    ]
  },
  {
    "slug": "unaware",
    "name": "Unaware",
    "description": "When attacking, the Pokémon ignores the target's stat changes.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/unaware",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "wooper-paldea",
        "name": "Paldean Wooper",
        "image": "https://i.pokebase.app/pokemon-champions/5UC6R1A_5D_DUQKYk-U7D.png"
      },
      {
        "slug": "clodsire",
        "name": "Clodsire",
        "image": "https://i.pokebase.app/pokemon-champions/drew5vsTTAx2Mw_4v-xUE.png"
      },
      {
        "slug": "dondozo",
        "name": "Dondozo",
        "image": "https://i.pokebase.app/pokemon-champions/m7RzViUBXYRMza65yqf2_.png"
      },
      {
        "slug": "skeledirge",
        "name": "Skeledirge",
        "image": "https://i.pokebase.app/pokemon-champions/JEL9l7uqeWd2SECcOnL8B.png"
      },
      {
        "slug": "crocalor",
        "name": "Crocalor",
        "image": "https://i.pokebase.app/pokemon-champions/2xMRlqvU3TNvcbHtieAxy.png"
      },
      {
        "slug": "fuecoco",
        "name": "Fuecoco",
        "image": "https://i.pokebase.app/pokemon-champions/gRQZlFQiH7kFLdc2BZq_u.png"
      },
      {
        "slug": "cosmog",
        "name": "Cosmog",
        "image": "https://i.pokebase.app/pokemon-champions/Te00ZLBcFL-xFpGmRlpYM.png"
      },
      {
        "slug": "pyukumuku",
        "name": "Pyukumuku",
        "image": "https://i.pokebase.app/pokemon-champions/Nm9yEH628bgq2Jxxj1jfG.png"
      },
      {
        "slug": "woobat",
        "name": "Woobat",
        "image": "https://i.pokebase.app/pokemon-champions/Nw4B9J-dWvI9rVkatxucY.png"
      },
      {
        "slug": "swoobat",
        "name": "Swoobat",
        "image": "https://i.pokebase.app/pokemon-champions/H-Cq-VpBoUn95mGJfv8mt.png"
      }
    ]
  },
  {
    "slug": "unburden",
    "name": "Unburden",
    "description": "Boosts the Speed stat if the Pokémon's held item is used or lost.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/unburden",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "grafaiai",
        "name": "Grafaiai",
        "image": "https://i.pokebase.app/pokemon-champions/WVpLcP9x2ZdYHo7tGXcHr.png"
      },
      {
        "slug": "shroodle",
        "name": "Shroodle",
        "image": "https://i.pokebase.app/pokemon-champions/03nZxKI-TNzcspi3PSTDo.png"
      },
      {
        "slug": "sneasler",
        "name": "Sneasler",
        "image": "https://i.pokebase.app/pokemon-champions/Zw_vVVnoT594WNEJ2PB7M.png"
      },
      {
        "slug": "thievul",
        "name": "Thievul",
        "image": "https://i.pokebase.app/pokemon-champions/NE8fLGyzc_iUAu41D5zsk.png"
      },
      {
        "slug": "nickit",
        "name": "Nickit",
        "image": "https://i.pokebase.app/pokemon-champions/7wEjbK6kuJeinjGrQq9g1.png"
      },
      {
        "slug": "hawlucha",
        "name": "Hawlucha",
        "image": "https://i.pokebase.app/pokemon-champions/zluFZIMip6e5tViKM0UtM.png"
      },
      {
        "slug": "slurpuff",
        "name": "Slurpuff",
        "image": "https://i.pokebase.app/pokemon-champions/8xZCqITv2UDfof9E1eJtS.png"
      },
      {
        "slug": "swirlix",
        "name": "Swirlix",
        "image": "https://i.pokebase.app/pokemon-champions/DSmi4-06vNxlnwC7PQ3JM.png"
      },
      {
        "slug": "accelgor",
        "name": "Accelgor",
        "image": "https://i.pokebase.app/pokemon-champions/EUwRvY7Qz_h5FbZqLhge0.png"
      },
      {
        "slug": "liepard",
        "name": "Liepard",
        "image": "https://i.pokebase.app/pokemon-champions/XkO0kR7P3vylqj7RfeI6a.png"
      }
    ]
  },
  {
    "slug": "unnerve",
    "name": "Unnerve",
    "description": "Unnerves opposing Pokémon and makes them unable to eat Berries.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/unnerve",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "corviknight-gmax",
        "name": "Corviknight (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/v1iOXviXyhKk7eQgr_DI7.png"
      },
      {
        "slug": "pyroar-male",
        "name": "Pyroar (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/_n2-9YvS0oXyQRDF7zRVX.png"
      },
      {
        "slug": "meowth-gmax",
        "name": "Meowth (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/hCbsiwEIEVuxk99wbWSJB.png"
      },
      {
        "slug": "meowth-galar",
        "name": "Galarian Meowth",
        "image": "https://i.pokebase.app/pokemon-champions/XLcxkAm86llD5ffhtasiJ.png"
      },
      {
        "slug": "ursaluna",
        "name": "Ursaluna",
        "image": "https://i.pokebase.app/pokemon-champions/UDtn4fgdYRrglGj2gFerP.png"
      },
      {
        "slug": "calyrex",
        "name": "Calyrex",
        "image": "https://i.pokebase.app/pokemon-champions/wcdyQQWKcq1U4sVNpORWs.png"
      },
      {
        "slug": "corviknight",
        "name": "Corviknight",
        "image": "https://i.pokebase.app/pokemon-champions/e_1RUwMMsHtj52dWxgkRY.png"
      },
      {
        "slug": "corvisquire",
        "name": "Corvisquire",
        "image": "https://i.pokebase.app/pokemon-champions/uY4-jVcDA9tPPJJXw-5NZ.png"
      },
      {
        "slug": "rookidee",
        "name": "Rookidee",
        "image": "https://i.pokebase.app/pokemon-champions/X74qwIHHy8squzWTrys4S.png"
      },
      {
        "slug": "bewear",
        "name": "Bewear",
        "image": "https://i.pokebase.app/pokemon-champions/lyKxYTNfdqmPEzqP73X4V.png"
      }
    ]
  },
  {
    "slug": "unseen-fist",
    "name": "Unseen Fist",
    "description": "The Pokémon can deal damage with moves that make physical contact, even if the target is protected.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/unseen-fist",
    "isMegaAbility": true,
    "pokemon": [
      {
        "slug": "urshifu-rapid-strike-gmax",
        "name": "Urshifu (Rapid Strike Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/72mcpAbfEJLVa5kRFEgLD.png"
      },
      {
        "slug": "urshifu-single-strike-gmax",
        "name": "Urshifu (Single Strike Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/lEhY2lZDnxh0sp6BqQrYD.png"
      },
      {
        "slug": "urshifu-single-strike",
        "name": "Urshifu (Single Strike)",
        "image": "https://i.pokebase.app/pokemon-champions/YveR1FRCWWT5Ui0eqOpFr.png"
      },
      {
        "slug": "urshifu-rapid-strike",
        "name": "Urshifu (Rapid Strike)",
        "image": "https://i.pokebase.app/pokemon-champions/MpcCIog33l-Ah4SU_Z-BP.png"
      },
      {
        "slug": "golurk-mega",
        "name": "Mega Golurk",
        "image": "https://i.pokebase.app/pokemon-champions/oxn7501u7mkf2wxKXA_YI.png"
      },
      {
        "slug": "urshifu",
        "name": "Urshifu",
        "image": "https://i.pokebase.app/pokemon-champions/d6bSuQokNSRi5toFtzxFs.png"
      }
    ]
  },
  {
    "slug": "vessel-of-ruin",
    "name": "Vessel of Ruin",
    "description": "The power of the Pokémon's ruinous vessel lowers the Sp. Atk stats of all Pokémon except itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/vessel-of-ruin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "ting-lu",
        "name": "Ting-Lu",
        "image": "https://i.pokebase.app/pokemon-champions/nDP0wGPZVJD6jmTqjI_xl.png"
      }
    ]
  },
  {
    "slug": "victory-star",
    "name": "Victory Star",
    "description": "Boosts the accuracy of its allies and itself.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/victory-star",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "victini",
        "name": "Victini",
        "image": "https://i.pokebase.app/pokemon-champions/RibmrcrXCywqe1PImD715.png"
      }
    ]
  },
  {
    "slug": "vital-spirit",
    "name": "Vital Spirit",
    "description": "The Pokémon is full of vitality, and that prevents it from falling asleep.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/vital-spirit",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "lycanroc-midnight",
        "name": "Lycanroc (Midnight)",
        "image": "https://i.pokebase.app/pokemon-champions/5e1nWZtfdoT9nAroj94Rr.png"
      },
      {
        "slug": "mr-mime-galar",
        "name": "Galarian Mr. Mime",
        "image": "https://i.pokebase.app/pokemon-champions/kur71T2tetwACsTnZC9Z3.png"
      },
      {
        "slug": "annihilape",
        "name": "Annihilape",
        "image": "https://i.pokebase.app/pokemon-champions/tml77ns-ywkQpvuhOBJ1p.png"
      },
      {
        "slug": "rockruff",
        "name": "Rockruff",
        "image": "https://i.pokebase.app/pokemon-champions/FwiYtFUpsMoylYFBA68Ca.png"
      },
      {
        "slug": "lillipup",
        "name": "Lillipup",
        "image": "https://i.pokebase.app/pokemon-champions/Gl3IibAekIZ195UbLQmdG.png"
      },
      {
        "slug": "magmortar",
        "name": "Magmortar",
        "image": "https://i.pokebase.app/pokemon-champions/A2XWjqGwvSG2cX_0iBIUg.png"
      },
      {
        "slug": "electivire",
        "name": "Electivire",
        "image": "https://i.pokebase.app/pokemon-champions/cmdXWg25SLWAI1NWYhiWr.png"
      },
      {
        "slug": "vigoroth",
        "name": "Vigoroth",
        "image": "https://i.pokebase.app/pokemon-champions/c2TIJk6s89p997ZTQTCI8.png"
      },
      {
        "slug": "magby",
        "name": "Magby",
        "image": "https://i.pokebase.app/pokemon-champions/5tGiPPillXyIANiqJEjdj.png"
      },
      {
        "slug": "elekid",
        "name": "Elekid",
        "image": "https://i.pokebase.app/pokemon-champions/qkp-o1k-0NpFLZCAIHPbE.png"
      }
    ]
  },
  {
    "slug": "volt-absorb",
    "name": "Volt Absorb",
    "description": "If hit by an Electric-type move, the Pokémon has its HP restored instead of taking damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/volt-absorb",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "thundurus-therian",
        "name": "Thundurus (Therian)",
        "image": "https://i.pokebase.app/pokemon-champions/g4Z_28ZkNFiepgzBRp02G.png"
      },
      {
        "slug": "kilowattrel",
        "name": "Kilowattrel",
        "image": "https://i.pokebase.app/pokemon-champions/jfiw-2PaAb_h523ty4njW.png"
      },
      {
        "slug": "wattrel",
        "name": "Wattrel",
        "image": "https://i.pokebase.app/pokemon-champions/Mdi6-xl-1et1je8Da-VGM.png"
      },
      {
        "slug": "pawmot",
        "name": "Pawmot",
        "image": "https://i.pokebase.app/pokemon-champions/gmbMAEC9quPSEhSYB8THs.png"
      },
      {
        "slug": "pawmo",
        "name": "Pawmo",
        "image": "https://i.pokebase.app/pokemon-champions/EKY46GVTVS4193_nDQHPK.png"
      },
      {
        "slug": "arctozolt",
        "name": "Arctozolt",
        "image": "https://i.pokebase.app/pokemon-champions/CqWh8LtfLeW47v_Bhbd9P.png"
      },
      {
        "slug": "dracozolt",
        "name": "Dracozolt",
        "image": "https://i.pokebase.app/pokemon-champions/vf8HE7S1i2JmpCTTNC76E.png"
      },
      {
        "slug": "zeraora",
        "name": "Zeraora",
        "image": "https://i.pokebase.app/pokemon-champions/MF-QE6FyPigkF6Mne9b8Y.png"
      },
      {
        "slug": "pachirisu",
        "name": "Pachirisu",
        "image": "https://i.pokebase.app/pokemon-champions/a84O7sRzOY_RntY7RNENv.png"
      },
      {
        "slug": "minun",
        "name": "Minun",
        "image": "https://i.pokebase.app/pokemon-champions/DUsS5LndZVpXPiVOGzNow.png"
      }
    ]
  },
  {
    "slug": "wandering-spirit",
    "name": "Wandering Spirit",
    "description": "The Pokémon exchanges Abilities with a Pokémon that hits it with a move that makes direct contact.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wandering-spirit",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "yamask-galar",
        "name": "Galarian Yamask",
        "image": "https://i.pokebase.app/pokemon-champions/VsrTMsmjwlMhjwXstxzTn.png"
      },
      {
        "slug": "runerigus",
        "name": "Runerigus",
        "image": "https://i.pokebase.app/pokemon-champions/pELHYPdNpNz5rin8u6Ajx.png"
      }
    ]
  },
  {
    "slug": "water-absorb",
    "name": "Water Absorb",
    "description": "If hit by a Water-type move, the Pokémon has its HP restored instead of taking damage.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/water-absorb",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "araquanid-totem",
        "name": "Araquanid (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/O3iM4XSaEh3_YtZBD3Q7E.png"
      },
      {
        "slug": "frillish-male",
        "name": "Frillish (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/BJZz4r-5nLDh24riNxod1.png"
      },
      {
        "slug": "jellicent-male",
        "name": "Jellicent (Male)",
        "image": "https://i.pokebase.app/pokemon-champions/ulpfE2X0Q8P6T1r9hj_Vb.png"
      },
      {
        "slug": "lapras-gmax",
        "name": "Lapras (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/EoZaOONdVS_Wojzt7hf0J.png"
      },
      {
        "slug": "ogerpon-wellspring-mask",
        "name": "Ogerpon (Wellspring Mask)",
        "image": "https://i.pokebase.app/pokemon-champions/7OCE5gaR1Z7Why5MpnaMP.png"
      },
      {
        "slug": "wooper-paldea",
        "name": "Paldean Wooper",
        "image": "https://i.pokebase.app/pokemon-champions/5UC6R1A_5D_DUQKYk-U7D.png"
      },
      {
        "slug": "clodsire",
        "name": "Clodsire",
        "image": "https://i.pokebase.app/pokemon-champions/drew5vsTTAx2Mw_4v-xUE.png"
      },
      {
        "slug": "dracovish",
        "name": "Dracovish",
        "image": "https://i.pokebase.app/pokemon-champions/RfSYTrVAPJNP682gjqAKw.png"
      },
      {
        "slug": "arctovish",
        "name": "Arctovish",
        "image": "https://i.pokebase.app/pokemon-champions/Yy5u0tzj1tSbVUCEqp_jE.png"
      },
      {
        "slug": "araquanid",
        "name": "Araquanid",
        "image": "https://i.pokebase.app/pokemon-champions/sYIp-nrXTHhqUzkyPiunc.png"
      }
    ]
  },
  {
    "slug": "water-bubble",
    "name": "Water Bubble",
    "description": "Lowers the power of Fire-type moves that hit the Pokémon and prevents it from being burned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/water-bubble",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "araquanid-totem",
        "name": "Araquanid (Totem)",
        "image": "https://i.pokebase.app/pokemon-champions/O3iM4XSaEh3_YtZBD3Q7E.png"
      },
      {
        "slug": "araquanid",
        "name": "Araquanid",
        "image": "https://i.pokebase.app/pokemon-champions/sYIp-nrXTHhqUzkyPiunc.png"
      },
      {
        "slug": "dewpider",
        "name": "Dewpider",
        "image": "https://i.pokebase.app/pokemon-champions/AUxXTF5kh3KJU0u2qaT_5.png"
      }
    ]
  },
  {
    "slug": "water-compaction",
    "name": "Water Compaction",
    "description": "Boosts the Defense stat sharply when the Pokémon is hit by a Water-type move.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/water-compaction",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "sandygast",
        "name": "Sandygast",
        "image": "https://i.pokebase.app/pokemon-champions/IKlqhEVWbUggUEIPn-DFg.png"
      },
      {
        "slug": "palossand",
        "name": "Palossand",
        "image": "https://i.pokebase.app/pokemon-champions/R6w6WdatdJoGYbZvmxCVs.png"
      }
    ]
  },
  {
    "slug": "water-veil",
    "name": "Water Veil",
    "description": "The Pokémon's water veil prevents it from being burned.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/water-veil",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dondozo",
        "name": "Dondozo",
        "image": "https://i.pokebase.app/pokemon-champions/m7RzViUBXYRMza65yqf2_.png"
      },
      {
        "slug": "finizen",
        "name": "Finizen",
        "image": "https://i.pokebase.app/pokemon-champions/_1u_Xnra6K2sN9mvFxOxQ.png"
      },
      {
        "slug": "mantyke",
        "name": "Mantyke",
        "image": "https://i.pokebase.app/pokemon-champions/HhYIe3Hg-DF8t52SKbKGp.png"
      },
      {
        "slug": "lumineon",
        "name": "Lumineon",
        "image": "https://i.pokebase.app/pokemon-champions/4jdIYm_90bVbUQuCQwMCn.png"
      },
      {
        "slug": "finneon",
        "name": "Finneon",
        "image": "https://i.pokebase.app/pokemon-champions/1y5EMBKwyhd4cDxmSDP_D.png"
      },
      {
        "slug": "floatzel",
        "name": "Floatzel",
        "image": "https://i.pokebase.app/pokemon-champions/rt2PesbvtxtmTdWqSeKrd.png"
      },
      {
        "slug": "buizel",
        "name": "Buizel",
        "image": "https://i.pokebase.app/pokemon-champions/OhQRdhC1QBAtZlwdzJyZM.png"
      },
      {
        "slug": "huntail",
        "name": "Huntail",
        "image": "https://i.pokebase.app/pokemon-champions/zh7DbjOHOohaFq39VDTFl.png"
      },
      {
        "slug": "wailord",
        "name": "Wailord",
        "image": "https://i.pokebase.app/pokemon-champions/fBYn7XoG5EZUkndFmwFJ0.png"
      },
      {
        "slug": "wailmer",
        "name": "Wailmer",
        "image": "https://i.pokebase.app/pokemon-champions/-M-viMF7tzfS-KRdwggps.png"
      }
    ]
  },
  {
    "slug": "weak-armor",
    "name": "Weak Armor",
    "description": "The Pokémon's Defense stat is lowered when it takes damage from physical moves, but its Speed stat is sharply boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/weak-armor",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "garbodor-gmax",
        "name": "Garbodor (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/6rtxQkpA4ovKghiep74Is.png"
      },
      {
        "slug": "corsola-galar",
        "name": "Galarian Corsola",
        "image": "https://i.pokebase.app/pokemon-champions/xFHh15IZp5VE6eFA8ZAgu.png"
      },
      {
        "slug": "ceruledge",
        "name": "Ceruledge",
        "image": "https://i.pokebase.app/pokemon-champions/RyFh0j0hEgsrs2whWGxUF.png"
      },
      {
        "slug": "armarouge",
        "name": "Armarouge",
        "image": "https://i.pokebase.app/pokemon-champions/b1jqDKDuh98bkeDJPkjS5.png"
      },
      {
        "slug": "cursola",
        "name": "Cursola",
        "image": "https://i.pokebase.app/pokemon-champions/k0FZwsd1n8B4UCz8k6DEJ.png"
      },
      {
        "slug": "polteageist",
        "name": "Polteageist",
        "image": "https://i.pokebase.app/pokemon-champions/-wSbTSUjqGI96SkgXO3Bt.png"
      },
      {
        "slug": "sinistea",
        "name": "Sinistea",
        "image": "https://i.pokebase.app/pokemon-champions/b5SYKuEp710H1UPCIUUhv.png"
      },
      {
        "slug": "mandibuzz",
        "name": "Mandibuzz",
        "image": "https://i.pokebase.app/pokemon-champions/e3kNAgj7QXKwsoDMcrx-C.png"
      },
      {
        "slug": "vullaby",
        "name": "Vullaby",
        "image": "https://i.pokebase.app/pokemon-champions/H7ULZPkBWDFU0DGDtjieK.png"
      },
      {
        "slug": "vanilluxe",
        "name": "Vanilluxe",
        "image": "https://i.pokebase.app/pokemon-champions/e5V2-bPn40PMmxwOyPVe-.png"
      }
    ]
  },
  {
    "slug": "well-baked-body",
    "name": "Well-Baked Body",
    "description": "The Pokémon takes no damage when hit by Fire-type moves. Instead, its Defense stat is sharply boosted.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/well-baked-body",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "dachsbun",
        "name": "Dachsbun",
        "image": "https://i.pokebase.app/pokemon-champions/nBb-afjIAJP2UE3r9sFwo.png"
      }
    ]
  },
  {
    "slug": "white-smoke",
    "name": "White Smoke",
    "description": "The Pokémon is protected by its white smoke, which prevents other Pokémon from lowering its stats.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/white-smoke",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "centiskorch-gmax",
        "name": "Centiskorch (Gmax)",
        "image": "https://i.pokebase.app/pokemon-champions/rrlFlOKcSDVyUxKdhxLzS.png"
      },
      {
        "slug": "centiskorch",
        "name": "Centiskorch",
        "image": "https://i.pokebase.app/pokemon-champions/xRD_imhB1uVoEJuJqziZS.png"
      },
      {
        "slug": "sizzlipede",
        "name": "Sizzlipede",
        "image": "https://i.pokebase.app/pokemon-champions/Hnd4CbfgQyAImwbkmtAfc.png"
      },
      {
        "slug": "heatmor",
        "name": "Heatmor",
        "image": "https://i.pokebase.app/pokemon-champions/O4N2pVAmbWvszKiFBpSP4.png"
      },
      {
        "slug": "torkoal",
        "name": "Torkoal",
        "image": "https://i.pokebase.app/pokemon-champions/z7sSOt7rkl0SbIYOgWTXx.png"
      }
    ]
  },
  {
    "slug": "wimp-out",
    "name": "Wimp Out",
    "description": "The Pokémon cowardly switches out when its HP becomes half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wimp-out",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "wimpod",
        "name": "Wimpod",
        "image": "https://i.pokebase.app/pokemon-champions/qoClfesn04vkestGHFMLJ.png"
      }
    ]
  },
  {
    "slug": "wind-power",
    "name": "Wind Power",
    "description": "The Pokémon becomes charged when it is hit by a wind move, boosting the power of the next Electric-type move the Pokémon uses.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wind-power",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "kilowattrel",
        "name": "Kilowattrel",
        "image": "https://i.pokebase.app/pokemon-champions/jfiw-2PaAb_h523ty4njW.png"
      },
      {
        "slug": "wattrel",
        "name": "Wattrel",
        "image": "https://i.pokebase.app/pokemon-champions/Mdi6-xl-1et1je8Da-VGM.png"
      }
    ]
  },
  {
    "slug": "wind-rider",
    "name": "Wind Rider",
    "description": "Boosts the Pokémon's Attack stat if Tailwind takes effect or if the Pokémon is hit by a wind move. The Pokémon also takes no damage from wind moves.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wind-rider",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "brambleghast",
        "name": "Brambleghast",
        "image": "https://i.pokebase.app/pokemon-champions/htD5TpERt5eQFfMZ0rUik.png"
      },
      {
        "slug": "bramblin",
        "name": "Bramblin",
        "image": "https://i.pokebase.app/pokemon-champions/Ehvptpzxyv7Qggw8Pf0Cg.png"
      },
      {
        "slug": "shiftry",
        "name": "Shiftry",
        "image": "https://i.pokebase.app/pokemon-champions/sB3jf-gqTCpcJAaXhJwHb.png"
      }
    ]
  },
  {
    "slug": "wonder-guard",
    "name": "Wonder Guard",
    "description": "Its mysterious power only lets supereffective moves hit the Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wonder-guard",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "shedinja",
        "name": "Shedinja",
        "image": "https://i.pokebase.app/pokemon-champions/zBiggP-pBNDIajxhzepHb.png"
      }
    ]
  },
  {
    "slug": "wonder-skin",
    "name": "Wonder Skin",
    "description": "Makes status moves more likely to miss the Pokémon.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/wonder-skin",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "bruxish",
        "name": "Bruxish",
        "image": "https://i.pokebase.app/pokemon-champions/_Xl8hcosqNJKTlCWAr-KU.png"
      },
      {
        "slug": "sigilyph",
        "name": "Sigilyph",
        "image": "https://i.pokebase.app/pokemon-champions/3D93QyiyHmd5JrNodD2VW.png"
      },
      {
        "slug": "delcatty",
        "name": "Delcatty",
        "image": "https://i.pokebase.app/pokemon-champions/1N_3vmK6s8Kd9nCiAKanp.png"
      },
      {
        "slug": "skitty",
        "name": "Skitty",
        "image": "https://i.pokebase.app/pokemon-champions/Gog-tirGfcE7NkAftU_d_.png"
      },
      {
        "slug": "venomoth",
        "name": "Venomoth",
        "image": "https://i.pokebase.app/pokemon-champions/monb-jIqOxPmbf8QRcytx.png"
      }
    ]
  },
  {
    "slug": "zen-mode",
    "name": "Zen Mode",
    "description": "Changes the Pokémon’s shape when HP is half or less.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/zen-mode",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "darmanitan-standard",
        "name": "Darmanitan (Standard)",
        "image": "https://i.pokebase.app/pokemon-champions/lF4h8rN0I9nrDyh-5Bo23.png"
      },
      {
        "slug": "darmanitan-galar-zen",
        "name": "Darmanitan (Galar Zen)",
        "image": "https://i.pokebase.app/pokemon-champions/ipuqU3c2dS4e1VAH5gbm0.png"
      },
      {
        "slug": "darmanitan-galar-standard",
        "name": "Darmanitan (Galar Standard)",
        "image": "https://i.pokebase.app/pokemon-champions/03y0TxYO8vUKcAIM8mB7X.png"
      },
      {
        "slug": "darmanitan-zen",
        "name": "Darmanitan (Zen)",
        "image": "https://i.pokebase.app/pokemon-champions/V77cdruMX22hTuLjR6GRI.png"
      },
      {
        "slug": "darmanitan",
        "name": "Darmanitan",
        "image": "https://i.pokebase.app/pokemon-champions/knuehpdCFxOzRknWMTsP1.png"
      }
    ]
  },
  {
    "slug": "zero-to-hero",
    "name": "Zero to Hero",
    "description": "The Pokémon transforms into its Hero Form when it switches out.",
    "sourceUrl": "https://pokebase.app/pokemon-champions/abilities/zero-to-hero",
    "isMegaAbility": false,
    "pokemon": [
      {
        "slug": "palafin-zero",
        "name": "Palafin (Zero)",
        "image": "https://i.pokebase.app/pokemon-champions/5GcbJkJI3BbVZnlWbhgzt.png"
      },
      {
        "slug": "palafin-hero",
        "name": "Palafin (Hero)",
        "image": "https://i.pokebase.app/pokemon-champions/YpXsNweO_-_XOTOloD1g1.png"
      },
      {
        "slug": "palafin",
        "name": "Palafin",
        "image": "https://i.pokebase.app/pokemon-champions/AA2q8-VXPWcdZ1u0ZZHob.png"
      }
    ]
  }
] satisfies AbilityAsset[];

function normalizeAbilityKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/pok[eé]mon champion/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

const abilityByKey = new Map<string, AbilityAsset>();

for (const ability of abilityAssets) {
  abilityByKey.set(normalizeAbilityKey(ability.slug), ability);
  abilityByKey.set(normalizeAbilityKey(ability.name), ability);
}

export function getAbilityByName(name: string) {
  return abilityByKey.get(normalizeAbilityKey(name));
}

export function getAbilityDescriptionByName(name: string) {
  return getAbilityByName(name)?.description;
}

export function filterAbilities(mega: "all" | "mega" | "base" = "all") {
  return abilityAssets.filter((ability) => {
    if (mega === "mega") return ability.isMegaAbility;
    if (mega === "base") return !ability.isMegaAbility;
    return true;
  });
}
