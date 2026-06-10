import type { PokemonAsset } from "@/types/content";

const importedPokemonAssets = [
  {
    "id": "abomasnow",
    "slug": "abomasnow",
    "name": "Abomasnow",
    "aliases": [],
    "image": "/images/pokemon/abomasnow.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Abomasnow",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Abomasnow.webp"
  },
  {
    "id": "abomasnow-mega",
    "slug": "abomasnow-mega",
    "name": "Mega Abomasnow",
    "aliases": [],
    "image": "/images/pokemon/abomasnow-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Abomasnow-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Abomasnow-Mega.webp"
  },
  {
    "id": "absol",
    "slug": "absol",
    "name": "Absol",
    "aliases": [],
    "image": "/images/pokemon/absol.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Absol",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Absol.webp"
  },
  {
    "id": "absol-mega",
    "slug": "absol-mega",
    "name": "Mega Absol",
    "aliases": [],
    "image": "/images/pokemon/absol-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Absol-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Absol-Mega.webp"
  },
  {
    "id": "aegislash",
    "slug": "aegislash",
    "name": "Aegislash (Shield Forme)",
    "aliases": [],
    "image": "/images/pokemon/aegislash.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aegislash",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Aegislash.webp"
  },
  {
    "id": "aegislash-blade",
    "slug": "aegislash-blade",
    "name": "Aegislash (Blade Forme)",
    "aliases": [],
    "image": "/images/pokemon/aegislash-blade.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aegislash-Blade",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Aegislash-Blade.webp"
  },
  {
    "id": "aerodactyl",
    "slug": "aerodactyl",
    "name": "Aerodactyl",
    "aliases": [],
    "image": "/images/pokemon/aerodactyl.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aerodactyl",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aerodactyl.webp"
  },
  {
    "id": "aerodactyl-mega",
    "slug": "aerodactyl-mega",
    "name": "Mega Aerodactyl",
    "aliases": [],
    "image": "/images/pokemon/aerodactyl-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aerodactyl-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aerodactyl-Mega.webp"
  },
  {
    "id": "aggron",
    "slug": "aggron",
    "name": "Aggron",
    "aliases": [],
    "image": "/images/pokemon/aggron.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aggron",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aggron.webp"
  },
  {
    "id": "aggron-mega",
    "slug": "aggron-mega",
    "name": "Mega Aggron",
    "aliases": [],
    "image": "/images/pokemon/aggron-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aggron-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aggron-Mega.webp"
  },
  {
    "id": "alakazam",
    "slug": "alakazam",
    "name": "Alakazam",
    "aliases": [],
    "image": "/images/pokemon/alakazam.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Alakazam",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Alakazam.webp"
  },
  {
    "id": "alakazam-mega",
    "slug": "alakazam-mega",
    "name": "Mega Alakazam",
    "aliases": [],
    "image": "/images/pokemon/alakazam-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Alakazam-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Alakazam-Mega.webp"
  },
  {
    "id": "alcremie",
    "slug": "alcremie",
    "name": "Alcremie (Vanilla Cream Strawberry Sweet)",
    "aliases": [],
    "image": "/images/pokemon/alcremie.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Alcremie",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Alcremie.webp"
  },
  {
    "id": "altaria",
    "slug": "altaria",
    "name": "Altaria",
    "aliases": [],
    "image": "/images/pokemon/altaria.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Altaria",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Altaria.webp"
  },
  {
    "id": "altaria-mega",
    "slug": "altaria-mega",
    "name": "Mega Altaria",
    "aliases": [],
    "image": "/images/pokemon/altaria-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Altaria-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Altaria-Mega.webp"
  },
  {
    "id": "ampharos",
    "slug": "ampharos",
    "name": "Ampharos",
    "aliases": [],
    "image": "/images/pokemon/ampharos.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ampharos",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ampharos.webp"
  },
  {
    "id": "ampharos-mega",
    "slug": "ampharos-mega",
    "name": "Mega Ampharos",
    "aliases": [],
    "image": "/images/pokemon/ampharos-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ampharos-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ampharos-Mega.webp"
  },
  {
    "id": "appletun",
    "slug": "appletun",
    "name": "Appletun",
    "aliases": [],
    "image": "/images/pokemon/appletun.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Appletun",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Appletun.webp"
  },
  {
    "id": "araquanid",
    "slug": "araquanid",
    "name": "Araquanid",
    "aliases": [],
    "image": "/images/pokemon/araquanid.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Araquanid",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Araquanid.webp"
  },
  {
    "id": "arbok",
    "slug": "arbok",
    "name": "Arbok",
    "aliases": [],
    "image": "/images/pokemon/arbok.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Arbok",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Arbok.webp"
  },
  {
    "id": "arcanine",
    "slug": "arcanine",
    "name": "Arcanine",
    "aliases": [],
    "image": "/images/pokemon/arcanine.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Arcanine",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Arcanine.webp"
  },
  {
    "id": "arcanine-hisui",
    "slug": "arcanine-hisui",
    "name": "Hisuian Arcanine",
    "aliases": [],
    "image": "/images/pokemon/arcanine-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Arcanine-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Arcanine-Hisui.webp"
  },
  {
    "id": "archaludon",
    "slug": "archaludon",
    "name": "Archaludon",
    "aliases": [],
    "image": "/images/pokemon/archaludon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Archaludon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Archaludon.webp"
  },
  {
    "id": "ariados",
    "slug": "ariados",
    "name": "Ariados",
    "aliases": [],
    "image": "/images/pokemon/ariados.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ariados",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ariados.webp"
  },
  {
    "id": "armarouge",
    "slug": "armarouge",
    "name": "Armarouge",
    "aliases": [],
    "image": "/images/pokemon/armarouge.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Armarouge",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Armarouge.webp"
  },
  {
    "id": "aromatisse",
    "slug": "aromatisse",
    "name": "Aromatisse",
    "aliases": [],
    "image": "/images/pokemon/aromatisse.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aromatisse",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aromatisse.webp"
  },
  {
    "id": "audino",
    "slug": "audino",
    "name": "Audino",
    "aliases": [],
    "image": "/images/pokemon/audino.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Audino",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Audino.webp"
  },
  {
    "id": "audino-mega",
    "slug": "audino-mega",
    "name": "Mega Audino",
    "aliases": [],
    "image": "/images/pokemon/audino-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Audino-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Audino-Mega.webp"
  },
  {
    "id": "aurorus",
    "slug": "aurorus",
    "name": "Aurorus",
    "aliases": [],
    "image": "/images/pokemon/aurorus.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Aurorus",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Aurorus.webp"
  },
  {
    "id": "avalugg",
    "slug": "avalugg",
    "name": "Avalugg",
    "aliases": [],
    "image": "/images/pokemon/avalugg.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Avalugg",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Avalugg.webp"
  },
  {
    "id": "avalugg-hisui",
    "slug": "avalugg-hisui",
    "name": "Hisuian Avalugg",
    "aliases": [],
    "image": "/images/pokemon/avalugg-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Avalugg-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Avalugg-Hisui.webp"
  },
  {
    "id": "azumarill",
    "slug": "azumarill",
    "name": "Azumarill",
    "aliases": [],
    "image": "/images/pokemon/azumarill.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Azumarill",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Azumarill.webp"
  },
  {
    "id": "banette",
    "slug": "banette",
    "name": "Banette",
    "aliases": [],
    "image": "/images/pokemon/banette.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Banette",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Banette.webp"
  },
  {
    "id": "banette-mega",
    "slug": "banette-mega",
    "name": "Mega Banette",
    "aliases": [],
    "image": "/images/pokemon/banette-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Banette-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Banette-Mega.webp"
  },
  {
    "id": "basculegion",
    "slug": "basculegion",
    "name": "Basculegion (Male)",
    "aliases": [],
    "image": "/images/pokemon/basculegion.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Basculegion",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Basculegion.webp"
  },
  {
    "id": "basculegion-f",
    "slug": "basculegion-f",
    "name": "Basculegion (Female)",
    "aliases": [],
    "image": "/images/pokemon/basculegion-f.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Basculegion-F",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Basculegion-F.webp"
  },
  {
    "id": "bastiodon",
    "slug": "bastiodon",
    "name": "Bastiodon",
    "aliases": [],
    "image": "/images/pokemon/bastiodon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Bastiodon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Bastiodon.webp"
  },
  {
    "id": "beartic",
    "slug": "beartic",
    "name": "Beartic",
    "aliases": [],
    "image": "/images/pokemon/beartic.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Beartic",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Beartic.webp"
  },
  {
    "id": "beedrill",
    "slug": "beedrill",
    "name": "Beedrill",
    "aliases": [],
    "image": "/images/pokemon/beedrill.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Beedrill",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Beedrill.webp"
  },
  {
    "id": "beedrill-mega",
    "slug": "beedrill-mega",
    "name": "Mega Beedrill",
    "aliases": [],
    "image": "/images/pokemon/beedrill-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Beedrill-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Beedrill-Mega.webp"
  },
  {
    "id": "bellibolt",
    "slug": "bellibolt",
    "name": "Bellibolt",
    "aliases": [],
    "image": "/images/pokemon/bellibolt.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Bellibolt",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Bellibolt.webp"
  },
  {
    "id": "blastoise",
    "slug": "blastoise",
    "name": "Blastoise",
    "aliases": [],
    "image": "/images/pokemon/blastoise.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Blastoise",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Blastoise.webp"
  },
  {
    "id": "camerupt",
    "slug": "camerupt",
    "name": "Camerupt",
    "aliases": [],
    "image": "/images/pokemon/camerupt.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Camerupt",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Camerupt.webp"
  },
  {
    "id": "camerupt-mega",
    "slug": "camerupt-mega",
    "name": "Mega Camerupt",
    "aliases": [],
    "image": "/images/pokemon/camerupt-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Camerupt-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Camerupt-Mega.webp"
  },
  {
    "id": "castform",
    "slug": "castform",
    "name": "Castform (Normal)",
    "aliases": [],
    "image": "/images/pokemon/castform.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Castform",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Castform.webp"
  },
  {
    "id": "castform-rainy",
    "slug": "castform-rainy",
    "name": "Castform (Rainy)",
    "aliases": [],
    "image": "/images/pokemon/castform-rainy.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Castform-Rainy",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Castform-Rainy.webp"
  },
  {
    "id": "castform-snowy",
    "slug": "castform-snowy",
    "name": "Castform (Snowy)",
    "aliases": [],
    "image": "/images/pokemon/castform-snowy.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Castform-Snowy",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Castform-Snowy.webp"
  },
  {
    "id": "castform-sunny",
    "slug": "castform-sunny",
    "name": "Castform (Sunny)",
    "aliases": [],
    "image": "/images/pokemon/castform-sunny.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Castform-Sunny",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Castform-Sunny.webp"
  },
  {
    "id": "ceruledge",
    "slug": "ceruledge",
    "name": "Ceruledge",
    "aliases": [],
    "image": "/images/pokemon/ceruledge.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ceruledge",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ceruledge.webp"
  },
  {
    "id": "chandelure",
    "slug": "chandelure",
    "name": "Chandelure",
    "aliases": [],
    "image": "/images/pokemon/chandelure.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chandelure",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chandelure.webp"
  },
  {
    "id": "chandelure-mega",
    "slug": "chandelure-mega",
    "name": "Mega Chandelure",
    "aliases": [],
    "image": "/images/pokemon/chandelure-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chandelure-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chandelure-Mega.webp"
  },
  {
    "id": "charizard",
    "slug": "charizard",
    "name": "Charizard",
    "aliases": [],
    "image": "/images/pokemon/charizard.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Charizard",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Charizard.webp"
  },
  {
    "id": "charizard-mega-x",
    "slug": "charizard-mega-x",
    "name": "Mega Charizard X",
    "aliases": [],
    "image": "/images/pokemon/charizard-mega-x.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Charizard-Mega-X",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Charizard-Mega-X.webp"
  },
  {
    "id": "charizard-mega-y",
    "slug": "charizard-mega-y",
    "name": "Mega Charizard Y",
    "aliases": [],
    "image": "/images/pokemon/charizard-mega-y.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Charizard-Mega-Y",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Charizard-Mega-Y.webp"
  },
  {
    "id": "chesnaught",
    "slug": "chesnaught",
    "name": "Chesnaught",
    "aliases": [],
    "image": "/images/pokemon/chesnaught.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chesnaught",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chesnaught.webp"
  },
  {
    "id": "chesnaught-mega",
    "slug": "chesnaught-mega",
    "name": "Mega Chesnaught",
    "aliases": [],
    "image": "/images/pokemon/chesnaught-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chesnaught-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chesnaught-Mega.webp"
  },
  {
    "id": "chimecho",
    "slug": "chimecho",
    "name": "Chimecho",
    "aliases": [],
    "image": "/images/pokemon/chimecho.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chimecho",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chimecho.webp"
  },
  {
    "id": "chimecho-mega",
    "slug": "chimecho-mega",
    "name": "Mega Chimecho",
    "aliases": [],
    "image": "/images/pokemon/chimecho-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Chimecho-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Chimecho-Mega.webp"
  },
  {
    "id": "clawitzer",
    "slug": "clawitzer",
    "name": "Clawitzer",
    "aliases": [],
    "image": "/images/pokemon/clawitzer.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Clawitzer",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Clawitzer.webp"
  },
  {
    "id": "clefable",
    "slug": "clefable",
    "name": "Clefable",
    "aliases": [],
    "image": "/images/pokemon/clefable.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Clefable",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Clefable.webp"
  },
  {
    "id": "clefable-mega",
    "slug": "clefable-mega",
    "name": "Mega Clefable",
    "aliases": [],
    "image": "/images/pokemon/clefable-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Clefable-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Clefable-Mega.webp"
  },
  {
    "id": "cofagrigus",
    "slug": "cofagrigus",
    "name": "Cofagrigus",
    "aliases": [],
    "image": "/images/pokemon/cofagrigus.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Cofagrigus",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Cofagrigus.webp"
  },
  {
    "id": "conkeldurr",
    "slug": "conkeldurr",
    "name": "Conkeldurr",
    "aliases": [],
    "image": "/images/pokemon/conkeldurr.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Conkeldurr",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Conkeldurr.webp"
  },
  {
    "id": "corviknight",
    "slug": "corviknight",
    "name": "Corviknight",
    "aliases": [],
    "image": "/images/pokemon/corviknight.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Corviknight",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Corviknight.webp"
  },
  {
    "id": "crabominable",
    "slug": "crabominable",
    "name": "Crabominable",
    "aliases": [],
    "image": "/images/pokemon/crabominable.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Crabominable",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Crabominable.webp"
  },
  {
    "id": "crabominable-mega",
    "slug": "crabominable-mega",
    "name": "Mega Crabominable",
    "aliases": [],
    "image": "/images/pokemon/crabominable-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Crabominable-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Crabominable-Mega.webp"
  },
  {
    "id": "decidueye",
    "slug": "decidueye",
    "name": "Decidueye",
    "aliases": [],
    "image": "/images/pokemon/decidueye.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Decidueye",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Decidueye.webp"
  },
  {
    "id": "decidueye-hisui",
    "slug": "decidueye-hisui",
    "name": "Hisuian Decidueye",
    "aliases": [],
    "image": "/images/pokemon/decidueye-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Decidueye-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Decidueye-Hisui.webp"
  },
  {
    "id": "dedenne",
    "slug": "dedenne",
    "name": "Dedenne",
    "aliases": [],
    "image": "/images/pokemon/dedenne.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Dedenne",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Dedenne.webp"
  },
  {
    "id": "delphox",
    "slug": "delphox",
    "name": "Delphox",
    "aliases": [],
    "image": "/images/pokemon/delphox.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Delphox",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Delphox.webp"
  },
  {
    "id": "delphox-mega",
    "slug": "delphox-mega",
    "name": "Mega Delphox",
    "aliases": [],
    "image": "/images/pokemon/delphox-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Delphox-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Delphox-Mega.webp"
  },
  {
    "id": "diggersby",
    "slug": "diggersby",
    "name": "Diggersby",
    "aliases": [],
    "image": "/images/pokemon/diggersby.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Diggersby",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Diggersby.webp"
  },
  {
    "id": "ditto",
    "slug": "ditto",
    "name": "Ditto",
    "aliases": [],
    "image": "/images/pokemon/ditto.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ditto",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ditto.webp"
  },
  {
    "id": "dragapult",
    "slug": "dragapult",
    "name": "Dragapult",
    "aliases": [],
    "image": "/images/pokemon/dragapult.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Dragapult",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Dragapult.webp"
  },
  {
    "id": "dragonite",
    "slug": "dragonite",
    "name": "Dragonite",
    "aliases": [],
    "image": "/images/pokemon/dragonite.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Dragonite",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Dragonite.webp"
  },
  {
    "id": "dragonite-mega",
    "slug": "dragonite-mega",
    "name": "Mega Dragonite",
    "aliases": [],
    "image": "/images/pokemon/dragonite-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Dragonite-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Dragonite-Mega.webp"
  },
  {
    "id": "drampa",
    "slug": "drampa",
    "name": "Drampa",
    "aliases": [],
    "image": "/images/pokemon/drampa.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Drampa",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Drampa.webp"
  },
  {
    "id": "drampa-mega",
    "slug": "drampa-mega",
    "name": "Mega Drampa",
    "aliases": [],
    "image": "/images/pokemon/drampa-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Drampa-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Drampa-Mega.webp"
  },
  {
    "id": "emboar",
    "slug": "emboar",
    "name": "Emboar",
    "aliases": [],
    "image": "/images/pokemon/emboar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Emboar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Emboar.webp"
  },
  {
    "id": "emboar-mega",
    "slug": "emboar-mega",
    "name": "Mega Emboar",
    "aliases": [],
    "image": "/images/pokemon/emboar-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Emboar-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Emboar-Mega.webp"
  },
  {
    "id": "emolga",
    "slug": "emolga",
    "name": "Emolga",
    "aliases": [],
    "image": "/images/pokemon/emolga.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Emolga",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Emolga.webp"
  },
  {
    "id": "empoleon",
    "slug": "empoleon",
    "name": "Empoleon",
    "aliases": [],
    "image": "/images/pokemon/empoleon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Empoleon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Empoleon.webp"
  },
  {
    "id": "espathra",
    "slug": "espathra",
    "name": "Espathra",
    "aliases": [],
    "image": "/images/pokemon/espathra.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Espathra",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Espathra.webp"
  },
  {
    "id": "espeon",
    "slug": "espeon",
    "name": "Espeon",
    "aliases": [],
    "image": "/images/pokemon/espeon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Espeon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Espeon.webp"
  },
  {
    "id": "eteral-floette-mega",
    "slug": "eteral-floette-mega",
    "name": "Mega Eternal Floette",
    "aliases": [],
    "image": "/images/pokemon/eteral-floette-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Eteral-Floette-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Eteral-Floette-Mega.webp"
  },
  {
    "id": "excadrill",
    "slug": "excadrill",
    "name": "Excadrill",
    "aliases": [],
    "image": "/images/pokemon/excadrill.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Excadrill",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Excadrill.webp"
  },
  {
    "id": "excadrill-mega",
    "slug": "excadrill-mega",
    "name": "Mega Excadrill",
    "aliases": [],
    "image": "/images/pokemon/excadrill-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Excadrill-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Excadrill-Mega.webp"
  },
  {
    "id": "farigiraf",
    "slug": "farigiraf",
    "name": "Farigiraf",
    "aliases": [],
    "image": "/images/pokemon/farigiraf.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Farigiraf",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Farigiraf.webp"
  },
  {
    "id": "feraligatr",
    "slug": "feraligatr",
    "name": "Feraligatr",
    "aliases": [],
    "image": "/images/pokemon/feraligatr.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Feraligatr",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Feraligatr.webp"
  },
  {
    "id": "feraligatr-mega",
    "slug": "feraligatr-mega",
    "name": "Mega Feraligatr",
    "aliases": [],
    "image": "/images/pokemon/feraligatr-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Feraligatr-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Feraligatr-Mega.webp"
  },
  {
    "id": "flapple",
    "slug": "flapple",
    "name": "Flapple",
    "aliases": [],
    "image": "/images/pokemon/flapple.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Flapple",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Flapple.webp"
  },
  {
    "id": "flareon",
    "slug": "flareon",
    "name": "Flareon",
    "aliases": [],
    "image": "/images/pokemon/flareon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Flareon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Flareon.webp"
  },
  {
    "id": "floette",
    "slug": "floette",
    "name": "Floette (Red Flower)",
    "aliases": [],
    "image": "/images/pokemon/floette.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette.webp"
  },
  {
    "id": "floette-blue",
    "slug": "floette-blue",
    "name": "Floette (Blue Flower)",
    "aliases": [],
    "image": "/images/pokemon/floette-blue.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette-Blue",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette-Blue.webp"
  },
  {
    "id": "floette-eternal",
    "slug": "floette-eternal",
    "name": "Eternal Floette",
    "aliases": [],
    "image": "/images/pokemon/floette-eternal.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette-Eternal",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette-Eternal.webp"
  },
  {
    "id": "floette-orange",
    "slug": "floette-orange",
    "name": "Floette (Orange Flower)",
    "aliases": [],
    "image": "/images/pokemon/floette-orange.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette-Orange",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette-Orange.webp"
  },
  {
    "id": "floette-white",
    "slug": "floette-white",
    "name": "Floette",
    "aliases": [],
    "image": "/images/pokemon/floette-white.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette-White",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette-White.webp"
  },
  {
    "id": "floette-yellow",
    "slug": "floette-yellow",
    "name": "Floette (Yellow Flower)",
    "aliases": [],
    "image": "/images/pokemon/floette-yellow.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Floette-Yellow",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Floette-Yellow.webp"
  },
  {
    "id": "florges",
    "slug": "florges",
    "name": "Florges (Red Flower)",
    "aliases": [],
    "image": "/images/pokemon/florges.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Florges",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Florges.webp"
  },
  {
    "id": "florges-blue",
    "slug": "florges-blue",
    "name": "Florges (Blue Flower)",
    "aliases": [],
    "image": "/images/pokemon/florges-blue.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Florges-Blue",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Florges-Blue.webp"
  },
  {
    "id": "florges-orange",
    "slug": "florges-orange",
    "name": "Florges (Orange Flower)",
    "aliases": [],
    "image": "/images/pokemon/florges-orange.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Florges-Orange",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Florges-Orange.webp"
  },
  {
    "id": "florges-white",
    "slug": "florges-white",
    "name": "Florges (White Flower)",
    "aliases": [],
    "image": "/images/pokemon/florges-white.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Florges-White",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Florges-White.webp"
  },
  {
    "id": "florges-yellow",
    "slug": "florges-yellow",
    "name": "Florges (Yellow Flower)",
    "aliases": [],
    "image": "/images/pokemon/florges-yellow.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Florges-Yellow",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Florges-Yellow.webp"
  },
  {
    "id": "forretress",
    "slug": "forretress",
    "name": "Forretress",
    "aliases": [],
    "image": "/images/pokemon/forretress.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Forretress",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Forretress.webp"
  },
  {
    "id": "froslass",
    "slug": "froslass",
    "name": "Froslass",
    "aliases": [],
    "image": "/images/pokemon/froslass.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Froslass",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Froslass.webp"
  },
  {
    "id": "froslass-mega",
    "slug": "froslass-mega",
    "name": "Mega Froslass",
    "aliases": [],
    "image": "/images/pokemon/froslass-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Froslass-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Froslass-Mega.webp"
  },
  {
    "id": "furfrou",
    "slug": "furfrou",
    "name": "Furfrou (Natural Form)",
    "aliases": [],
    "image": "/images/pokemon/furfrou.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou.webp"
  },
  {
    "id": "furfrou-dandy",
    "slug": "furfrou-dandy",
    "name": "Furfrou (Dandy Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-dandy.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Dandy",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Dandy.webp"
  },
  {
    "id": "furfrou-debutante",
    "slug": "furfrou-debutante",
    "name": "Furfrou (Debutante Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-debutante.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Debutante",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Debutante.webp"
  },
  {
    "id": "furfrou-diamond",
    "slug": "furfrou-diamond",
    "name": "Furfrou (Diamond Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-diamond.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Diamond",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Diamond.webp"
  },
  {
    "id": "furfrou-heart",
    "slug": "furfrou-heart",
    "name": "Furfrou (Heart Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-heart.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Heart",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Heart.webp"
  },
  {
    "id": "furfrou-kabuki",
    "slug": "furfrou-kabuki",
    "name": "Furfrou (Kabuki Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-kabuki.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Kabuki",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Kabuki.webp"
  },
  {
    "id": "furfrou-la-reine",
    "slug": "furfrou-la-reine",
    "name": "Furfrou (La Reine Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-la-reine.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-La-Reine",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-La-Reine.webp"
  },
  {
    "id": "furfrou-matron",
    "slug": "furfrou-matron",
    "name": "Furfrou (Matron Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-matron.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Matron",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Matron.webp"
  },
  {
    "id": "furfrou-pharaoh",
    "slug": "furfrou-pharaoh",
    "name": "Furfrou (Pharaoh Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-pharaoh.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Pharaoh",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Pharaoh.webp"
  },
  {
    "id": "furfrou-star",
    "slug": "furfrou-star",
    "name": "Furfrou (Star Trim)",
    "aliases": [],
    "image": "/images/pokemon/furfrou-star.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Furfrou-Star",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Furfrou-Star.webp"
  },
  {
    "id": "gallade",
    "slug": "gallade",
    "name": "Gallade",
    "aliases": [],
    "image": "/images/pokemon/gallade.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gallade",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gallade.webp"
  },
  {
    "id": "gallade-mega",
    "slug": "gallade-mega",
    "name": "Mega Gallade",
    "aliases": [],
    "image": "/images/pokemon/gallade-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gallade-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gallade-Mega.webp"
  },
  {
    "id": "garbodor",
    "slug": "garbodor",
    "name": "Garbodor",
    "aliases": [],
    "image": "/images/pokemon/garbodor.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Garbodor",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Garbodor.webp"
  },
  {
    "id": "garchomp",
    "slug": "garchomp",
    "name": "Garchomp",
    "aliases": [],
    "image": "/images/pokemon/garchomp.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Garchomp",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Garchomp.webp"
  },
  {
    "id": "garchomp-mega",
    "slug": "garchomp-mega",
    "name": "Mega Garchomp",
    "aliases": [],
    "image": "/images/pokemon/garchomp-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Garchomp-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Garchomp-Mega.webp"
  },
  {
    "id": "gardevoir",
    "slug": "gardevoir",
    "name": "Gardevoir",
    "aliases": [],
    "image": "/images/pokemon/gardevoir.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gardevoir",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gardevoir.webp"
  },
  {
    "id": "gardevoir-mega",
    "slug": "gardevoir-mega",
    "name": "Mega Gardevoir",
    "aliases": [],
    "image": "/images/pokemon/gardevoir-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gardevoir-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gardevoir-Mega.webp"
  },
  {
    "id": "garganacl",
    "slug": "garganacl",
    "name": "Garganacl",
    "aliases": [],
    "image": "/images/pokemon/garganacl.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Garganacl",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Garganacl.webp"
  },
  {
    "id": "gengar",
    "slug": "gengar",
    "name": "Gengar",
    "aliases": [],
    "image": "/images/pokemon/gengar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gengar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gengar.webp"
  },
  {
    "id": "gengar-mega",
    "slug": "gengar-mega",
    "name": "Mega Gengar",
    "aliases": [],
    "image": "/images/pokemon/gengar-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gengar-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gengar-Mega.webp"
  },
  {
    "id": "glaceon",
    "slug": "glaceon",
    "name": "Glaceon",
    "aliases": [],
    "image": "/images/pokemon/glaceon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Glaceon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Glaceon.webp"
  },
  {
    "id": "glalie",
    "slug": "glalie",
    "name": "Glalie",
    "aliases": [],
    "image": "/images/pokemon/glalie.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Glalie",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Glalie.webp"
  },
  {
    "id": "glalie-mega",
    "slug": "glalie-mega",
    "name": "Mega Glalie",
    "aliases": [],
    "image": "/images/pokemon/glalie-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Glalie-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Glalie-Mega.webp"
  },
  {
    "id": "glimmora",
    "slug": "glimmora",
    "name": "Glimmora",
    "aliases": [],
    "image": "/images/pokemon/glimmora.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Glimmora",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Glimmora.webp"
  },
  {
    "id": "glimmora-mega",
    "slug": "glimmora-mega",
    "name": "Mega Glimmora",
    "aliases": [],
    "image": "/images/pokemon/glimmora-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Glimmora-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Glimmora-Mega.webp"
  },
  {
    "id": "gliscor",
    "slug": "gliscor",
    "name": "Gliscor",
    "aliases": [],
    "image": "/images/pokemon/gliscor.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gliscor",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gliscor.webp"
  },
  {
    "id": "golurk",
    "slug": "golurk",
    "name": "Golurk",
    "aliases": [],
    "image": "/images/pokemon/golurk.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Golurk",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Golurk.webp"
  },
  {
    "id": "golurk-mega",
    "slug": "golurk-mega",
    "name": "Mega Golurk",
    "aliases": [],
    "image": "/images/pokemon/golurk-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Golurk-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Golurk-Mega.webp"
  },
  {
    "id": "goodra",
    "slug": "goodra",
    "name": "Goodra",
    "aliases": [],
    "image": "/images/pokemon/goodra.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Goodra",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Goodra.webp"
  },
  {
    "id": "goodra-hisui",
    "slug": "goodra-hisui",
    "name": "Hisuian Goodra",
    "aliases": [],
    "image": "/images/pokemon/goodra-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Goodra-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Goodra-Hisui.webp"
  },
  {
    "id": "gothitelle",
    "slug": "gothitelle",
    "name": "Gothitelle",
    "aliases": [],
    "image": "/images/pokemon/gothitelle.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gothitelle",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gothitelle.webp"
  },
  {
    "id": "gourgeist",
    "slug": "gourgeist",
    "name": "Gourgeist (Average)",
    "aliases": [],
    "image": "/images/pokemon/gourgeist.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gourgeist",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gourgeist.webp"
  },
  {
    "id": "gourgeist-large",
    "slug": "gourgeist-large",
    "name": "Gourgeist (Large)",
    "aliases": [],
    "image": "/images/pokemon/gourgeist-large.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gourgeist-Large",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gourgeist-Large.webp"
  },
  {
    "id": "gourgeist-small",
    "slug": "gourgeist-small",
    "name": "Gourgeist (Small)",
    "aliases": [],
    "image": "/images/pokemon/gourgeist-small.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gourgeist-Small",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gourgeist-Small.webp"
  },
  {
    "id": "gourgeist-super",
    "slug": "gourgeist-super",
    "name": "Gourgeist (Super)",
    "aliases": [],
    "image": "/images/pokemon/gourgeist-super.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gourgeist-Super",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gourgeist-Super.webp"
  },
  {
    "id": "greninja",
    "slug": "greninja",
    "name": "Greninja",
    "aliases": [],
    "image": "/images/pokemon/greninja.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Greninja",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Greninja.webp"
  },
  {
    "id": "greninja-mega",
    "slug": "greninja-mega",
    "name": "Mega Greninja",
    "aliases": [],
    "image": "/images/pokemon/greninja-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Greninja-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Greninja-Mega.webp"
  },
  {
    "id": "gyarados",
    "slug": "gyarados",
    "name": "Gyarados",
    "aliases": [],
    "image": "/images/pokemon/gyarados.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gyarados",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gyarados.webp"
  },
  {
    "id": "gyarados-mega",
    "slug": "gyarados-mega",
    "name": "Mega Gyarados",
    "aliases": [],
    "image": "/images/pokemon/gyarados-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Gyarados-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Gyarados-Mega.webp"
  },
  {
    "id": "hatterene",
    "slug": "hatterene",
    "name": "Hatterene",
    "aliases": [],
    "image": "/images/pokemon/hatterene.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hatterene",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hatterene.webp"
  },
  {
    "id": "hawlucha",
    "slug": "hawlucha",
    "name": "Hawlucha",
    "aliases": [],
    "image": "/images/pokemon/hawlucha.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hawlucha",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hawlucha.webp"
  },
  {
    "id": "hawlucha-mega",
    "slug": "hawlucha-mega",
    "name": "Mega Hawlucha",
    "aliases": [],
    "image": "/images/pokemon/hawlucha-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hawlucha-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hawlucha-Mega.webp"
  },
  {
    "id": "heliolisk",
    "slug": "heliolisk",
    "name": "Heliolisk",
    "aliases": [],
    "image": "/images/pokemon/heliolisk.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Heliolisk",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Heliolisk.webp"
  },
  {
    "id": "heracross",
    "slug": "heracross",
    "name": "Heracross",
    "aliases": [],
    "image": "/images/pokemon/heracross.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Heracross",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Heracross.webp"
  },
  {
    "id": "heracross-mega",
    "slug": "heracross-mega",
    "name": "Mega Heracross",
    "aliases": [],
    "image": "/images/pokemon/heracross-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Heracross-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Heracross-Mega.webp"
  },
  {
    "id": "hippowdon",
    "slug": "hippowdon",
    "name": "Hippowdon",
    "aliases": [],
    "image": "/images/pokemon/hippowdon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hippowdon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hippowdon.webp"
  },
  {
    "id": "houndoom",
    "slug": "houndoom",
    "name": "Houndoom",
    "aliases": [],
    "image": "/images/pokemon/houndoom.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Houndoom",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Houndoom.webp"
  },
  {
    "id": "houndoom-mega",
    "slug": "houndoom-mega",
    "name": "Mega Houndoom",
    "aliases": [],
    "image": "/images/pokemon/houndoom-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Houndoom-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Houndoom-Mega.webp"
  },
  {
    "id": "hydrapple",
    "slug": "hydrapple",
    "name": "Hydrapple",
    "aliases": [],
    "image": "/images/pokemon/hydrapple.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hydrapple",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hydrapple.webp"
  },
  {
    "id": "hydreigon",
    "slug": "hydreigon",
    "name": "Hydreigon",
    "aliases": [],
    "image": "/images/pokemon/hydreigon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Hydreigon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Hydreigon.webp"
  },
  {
    "id": "incineroar",
    "slug": "incineroar",
    "name": "Incineroar",
    "aliases": [],
    "image": "/images/pokemon/incineroar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Incineroar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Incineroar.webp"
  },
  {
    "id": "infernape",
    "slug": "infernape",
    "name": "Infernape",
    "aliases": [],
    "image": "/images/pokemon/infernape.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Infernape",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Infernape.webp"
  },
  {
    "id": "jolteon",
    "slug": "jolteon",
    "name": "Jolteon",
    "aliases": [],
    "image": "/images/pokemon/jolteon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Jolteon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Jolteon.webp"
  },
  {
    "id": "kangaskhan",
    "slug": "kangaskhan",
    "name": "Kangaskhan",
    "aliases": [],
    "image": "/images/pokemon/kangaskhan.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Kangaskhan",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Kangaskhan.webp"
  },
  {
    "id": "kangaskhan-mega",
    "slug": "kangaskhan-mega",
    "name": "Mega Kangaskhan",
    "aliases": [],
    "image": "/images/pokemon/kangaskhan-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Kangaskhan-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Kangaskhan-Mega.webp"
  },
  {
    "id": "kingambit",
    "slug": "kingambit",
    "name": "Kingambit",
    "aliases": [],
    "image": "/images/pokemon/kingambit.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Kingambit",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Kingambit.webp"
  },
  {
    "id": "kleavor",
    "slug": "kleavor",
    "name": "Kleavor",
    "aliases": [],
    "image": "/images/pokemon/kleavor.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Kleavor",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Kleavor.webp"
  },
  {
    "id": "klefki",
    "slug": "klefki",
    "name": "Klefki",
    "aliases": [],
    "image": "/images/pokemon/klefki.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Klefki",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Klefki.webp"
  },
  {
    "id": "kommo-o",
    "slug": "kommo-o",
    "name": "Kommo-o",
    "aliases": [],
    "image": "/images/pokemon/kommo-o.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Kommo-O",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Kommo-O.webp"
  },
  {
    "id": "krookodile",
    "slug": "krookodile",
    "name": "Krookodile",
    "aliases": [],
    "image": "/images/pokemon/krookodile.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Krookodile",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Krookodile.webp"
  },
  {
    "id": "leafeon",
    "slug": "leafeon",
    "name": "Leafeon",
    "aliases": [],
    "image": "/images/pokemon/leafeon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Leafeon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Leafeon.webp"
  },
  {
    "id": "liepard",
    "slug": "liepard",
    "name": "Liepard",
    "aliases": [],
    "image": "/images/pokemon/liepard.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Liepard",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Liepard.webp"
  },
  {
    "id": "lopunny",
    "slug": "lopunny",
    "name": "Lopunny",
    "aliases": [],
    "image": "/images/pokemon/lopunny.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lopunny",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Lopunny.webp"
  },
  {
    "id": "lopunny-mega",
    "slug": "lopunny-mega",
    "name": "Mega Lopunny",
    "aliases": [],
    "image": "/images/pokemon/lopunny-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lopunny-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Lopunny-Mega.webp"
  },
  {
    "id": "lucario",
    "slug": "lucario",
    "name": "Lucario",
    "aliases": [],
    "image": "/images/pokemon/lucario.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lucario",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Lucario.webp"
  },
  {
    "id": "lucario-mega",
    "slug": "lucario-mega",
    "name": "Mega Lucario",
    "aliases": [],
    "image": "/images/pokemon/lucario-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lucario-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Lucario-Mega.webp"
  },
  {
    "id": "luxray",
    "slug": "luxray",
    "name": "Luxray",
    "aliases": [],
    "image": "/images/pokemon/luxray.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Luxray",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Luxray.webp"
  },
  {
    "id": "lycanroc",
    "slug": "lycanroc",
    "name": "Lycanroc (Midday Form)",
    "aliases": [],
    "image": "/images/pokemon/lycanroc.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lycanroc",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Lycanroc.webp"
  },
  {
    "id": "lycanroc-dusk",
    "slug": "lycanroc-dusk",
    "name": "Lycanroc (Dusk Form)",
    "aliases": [],
    "image": "/images/pokemon/lycanroc-dusk.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lycanroc-Dusk",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Lycanroc-Dusk.webp"
  },
  {
    "id": "lycanroc-midnight",
    "slug": "lycanroc-midnight",
    "name": "Lycanroc (Midnight Form)",
    "aliases": [],
    "image": "/images/pokemon/lycanroc-midnight.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Lycanroc-Midnight",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Lycanroc-Midnight.webp"
  },
  {
    "id": "machamp",
    "slug": "machamp",
    "name": "Machamp",
    "aliases": [],
    "image": "/images/pokemon/machamp.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Machamp",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Machamp.webp"
  },
  {
    "id": "mamoswine",
    "slug": "mamoswine",
    "name": "Mamoswine",
    "aliases": [],
    "image": "/images/pokemon/mamoswine.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Mamoswine",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Mamoswine.webp"
  },
  {
    "id": "manectric",
    "slug": "manectric",
    "name": "Manectric",
    "aliases": [],
    "image": "/images/pokemon/manectric.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Manectric",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Manectric.webp"
  },
  {
    "id": "manectric-mega",
    "slug": "manectric-mega",
    "name": "Mega Manectric",
    "aliases": [],
    "image": "/images/pokemon/manectric-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Manectric-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Manectric-Mega.webp"
  },
  {
    "id": "maushold",
    "slug": "maushold",
    "name": "Maushold (Family of Three)",
    "aliases": [],
    "image": "/images/pokemon/maushold.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Maushold",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Maushold.webp"
  },
  {
    "id": "maushold-four",
    "slug": "maushold-four",
    "name": "Maushold (Family of Four)",
    "aliases": [],
    "image": "/images/pokemon/maushold-four.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Maushold-Four",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Maushold-Four.webp"
  },
  {
    "id": "medicham",
    "slug": "medicham",
    "name": "Medicham",
    "aliases": [],
    "image": "/images/pokemon/medicham.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Medicham",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Medicham.webp"
  },
  {
    "id": "medicham-mega",
    "slug": "medicham-mega",
    "name": "Mega Medicham",
    "aliases": [],
    "image": "/images/pokemon/medicham-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Medicham-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Medicham-Mega.webp"
  },
  {
    "id": "meganium",
    "slug": "meganium",
    "name": "Meganium",
    "aliases": [],
    "image": "/images/pokemon/meganium.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meganium",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Meganium.webp"
  },
  {
    "id": "meganium-mega",
    "slug": "meganium-mega",
    "name": "Mega Meganium",
    "aliases": [],
    "image": "/images/pokemon/meganium-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meganium-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Meganium-Mega.webp"
  },
  {
    "id": "meowscarada",
    "slug": "meowscarada",
    "name": "Meowscarada",
    "aliases": [],
    "image": "/images/pokemon/meowscarada.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meowscarada",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Meowscarada.webp"
  },
  {
    "id": "meowstic",
    "slug": "meowstic",
    "name": "Meowstic (Male)",
    "aliases": [],
    "image": "/images/pokemon/meowstic.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meowstic",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Meowstic.webp"
  },
  {
    "id": "meowstic-f",
    "slug": "meowstic-f",
    "name": "Meowstic (Female)",
    "aliases": [],
    "image": "/images/pokemon/meowstic-f.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meowstic-F",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Meowstic-F.webp"
  },
  {
    "id": "meowstic-mega",
    "slug": "meowstic-mega",
    "name": "Mega Meowstic",
    "aliases": [],
    "image": "/images/pokemon/meowstic-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Meowstic-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Meowstic-Mega.webp"
  },
  {
    "id": "milotic",
    "slug": "milotic",
    "name": "Milotic",
    "aliases": [],
    "image": "/images/pokemon/milotic.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Milotic",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Milotic.webp"
  },
  {
    "id": "mimikyu",
    "slug": "mimikyu",
    "name": "Mimikyu (Disguised Form)",
    "aliases": [],
    "image": "/images/pokemon/mimikyu.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Mimikyu",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Mimikyu.webp"
  },
  {
    "id": "mimikyu-busted",
    "slug": "mimikyu-busted",
    "name": "Mimikyu (Busted Form)",
    "aliases": [],
    "image": "/images/pokemon/mimikyu-busted.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Mimikyu-Busted",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Mimikyu-Busted.webp"
  },
  {
    "id": "morpeko",
    "slug": "morpeko",
    "name": "Morpeko (Full Belly Mode)",
    "aliases": [],
    "image": "/images/pokemon/morpeko.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Morpeko",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Morpeko.webp"
  },
  {
    "id": "morpeko-hangry",
    "slug": "morpeko-hangry",
    "name": "Morpeko (Hangry Mode)",
    "aliases": [],
    "image": "/images/pokemon/morpeko-hangry.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Morpeko-Hangry",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Morpeko-Hangry.webp"
  },
  {
    "id": "mr-rime",
    "slug": "mr-rime",
    "name": "Mr. Rime",
    "aliases": [],
    "image": "/images/pokemon/mr-rime.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Mr-Rime",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Mr-Rime.webp"
  },
  {
    "id": "mudsdale",
    "slug": "mudsdale",
    "name": "Mudsdale",
    "aliases": [],
    "image": "/images/pokemon/mudsdale.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Mudsdale",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Mudsdale.webp"
  },
  {
    "id": "ninetales",
    "slug": "ninetales",
    "name": "Ninetales",
    "aliases": [],
    "image": "/images/pokemon/ninetales.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ninetales",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ninetales.webp"
  },
  {
    "id": "ninetales-alola",
    "slug": "ninetales-alola",
    "name": "Alolan Ninetales",
    "aliases": [],
    "image": "/images/pokemon/ninetales-alola.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Ninetales-Alola",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Ninetales-Alola.webp"
  },
  {
    "id": "noivern",
    "slug": "noivern",
    "name": "Noivern",
    "aliases": [],
    "image": "/images/pokemon/noivern.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Noivern",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Noivern.webp"
  },
  {
    "id": "oranguru",
    "slug": "oranguru",
    "name": "Oranguru",
    "aliases": [],
    "image": "/images/pokemon/oranguru.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Oranguru",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Oranguru.webp"
  },
  {
    "id": "orthworm",
    "slug": "orthworm",
    "name": "Orthworm",
    "aliases": [],
    "image": "/images/pokemon/orthworm.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Orthworm",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Orthworm.webp"
  },
  {
    "id": "palafin",
    "slug": "palafin",
    "name": "Palafin (Zero Form)",
    "aliases": [],
    "image": "/images/pokemon/palafin.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Palafin",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Palafin.webp"
  },
  {
    "id": "palafin-hero",
    "slug": "palafin-hero",
    "name": "Palafin (Hero Form)",
    "aliases": [],
    "image": "/images/pokemon/palafin-hero.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Palafin-Hero",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Palafin-Hero.webp"
  },
  {
    "id": "pangoro",
    "slug": "pangoro",
    "name": "Pangoro",
    "aliases": [],
    "image": "/images/pokemon/pangoro.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pangoro",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pangoro.webp"
  },
  {
    "id": "passimian",
    "slug": "passimian",
    "name": "Passimian",
    "aliases": [],
    "image": "/images/pokemon/passimian.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Passimian",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Passimian.webp"
  },
  {
    "id": "pelipper",
    "slug": "pelipper",
    "name": "Pelipper",
    "aliases": [],
    "image": "/images/pokemon/pelipper.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pelipper",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pelipper.webp"
  },
  {
    "id": "pidgeot",
    "slug": "pidgeot",
    "name": "Pidgeot",
    "aliases": [],
    "image": "/images/pokemon/pidgeot.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pidgeot",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pidgeot.webp"
  },
  {
    "id": "pidgeot-mega",
    "slug": "pidgeot-mega",
    "name": "Mega Pidgeot",
    "aliases": [],
    "image": "/images/pokemon/pidgeot-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pidgeot-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pidgeot-Mega.webp"
  },
  {
    "id": "pikachu",
    "slug": "pikachu",
    "name": "Pikachu",
    "aliases": [
      "Pokémon Champion Pikachu",
      "Pokemon Champion Pikachu"
    ],
    "image": "/images/pokemon/pikachu.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pikachu",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pikachu.webp"
  },
  {
    "id": "pinsir",
    "slug": "pinsir",
    "name": "Pinsir",
    "aliases": [],
    "image": "/images/pokemon/pinsir.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pinsir",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pinsir.webp"
  },
  {
    "id": "pinsir-mega",
    "slug": "pinsir-mega",
    "name": "Mega Pinsir",
    "aliases": [],
    "image": "/images/pokemon/pinsir-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Pinsir-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Pinsir-Mega.webp"
  },
  {
    "id": "politoed",
    "slug": "politoed",
    "name": "Politoed",
    "aliases": [],
    "image": "/images/pokemon/politoed.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Politoed",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Politoed.webp"
  },
  {
    "id": "polteageist",
    "slug": "polteageist",
    "name": "Polteageist (Phony Form)",
    "aliases": [],
    "image": "/images/pokemon/polteageist.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Polteageist",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Polteageist.webp"
  },
  {
    "id": "polteageist-antique",
    "slug": "polteageist-antique",
    "name": "Polteageist (Antique Form)",
    "aliases": [],
    "image": "/images/pokemon/polteageist-antique.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Polteageist-Antique",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Polteageist-Antique.webp"
  },
  {
    "id": "primarina",
    "slug": "primarina",
    "name": "Primarina",
    "aliases": [],
    "image": "/images/pokemon/primarina.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Primarina",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Primarina.webp"
  },
  {
    "id": "quaquaval",
    "slug": "quaquaval",
    "name": "Quaquaval",
    "aliases": [],
    "image": "/images/pokemon/quaquaval.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Quaquaval",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Quaquaval.webp"
  },
  {
    "id": "raichu",
    "slug": "raichu",
    "name": "Raichu",
    "aliases": [
      "Mega Raichu X",
      "Mega Raichu Y"
    ],
    "image": "/images/pokemon/raichu.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Raichu",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Raichu.webp"
  },
  {
    "id": "raichu-alola",
    "slug": "raichu-alola",
    "name": "Alolan Raichu",
    "aliases": [],
    "image": "/images/pokemon/raichu-alola.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Raichu-Alola",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Raichu-Alola.webp"
  },
  {
    "id": "rampardos",
    "slug": "rampardos",
    "name": "Rampardos",
    "aliases": [],
    "image": "/images/pokemon/rampardos.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rampardos",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rampardos.webp"
  },
  {
    "id": "reuniclus",
    "slug": "reuniclus",
    "name": "Reuniclus",
    "aliases": [],
    "image": "/images/pokemon/reuniclus.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Reuniclus",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Reuniclus.webp"
  },
  {
    "id": "rhyperior",
    "slug": "rhyperior",
    "name": "Rhyperior",
    "aliases": [],
    "image": "/images/pokemon/rhyperior.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rhyperior",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rhyperior.webp"
  },
  {
    "id": "roserade",
    "slug": "roserade",
    "name": "Roserade",
    "aliases": [],
    "image": "/images/pokemon/roserade.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Roserade",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Roserade.webp"
  },
  {
    "id": "rotom",
    "slug": "rotom",
    "name": "Rotom",
    "aliases": [],
    "image": "/images/pokemon/rotom.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom.webp"
  },
  {
    "id": "rotom-fan",
    "slug": "rotom-fan",
    "name": "Rotom (Fan)",
    "aliases": [],
    "image": "/images/pokemon/rotom-fan.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom-Fan",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom-Fan.webp"
  },
  {
    "id": "rotom-frost",
    "slug": "rotom-frost",
    "name": "Rotom (Frost)",
    "aliases": [],
    "image": "/images/pokemon/rotom-frost.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom-Frost",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom-Frost.webp"
  },
  {
    "id": "rotom-heat",
    "slug": "rotom-heat",
    "name": "Rotom (Heat)",
    "aliases": [],
    "image": "/images/pokemon/rotom-heat.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom-Heat",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom-Heat.webp"
  },
  {
    "id": "rotom-mow",
    "slug": "rotom-mow",
    "name": "Rotom (Mow)",
    "aliases": [],
    "image": "/images/pokemon/rotom-mow.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom-Mow",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom-Mow.webp"
  },
  {
    "id": "rotom-wash",
    "slug": "rotom-wash",
    "name": "Rotom (Wash)",
    "aliases": [],
    "image": "/images/pokemon/rotom-wash.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Rotom-Wash",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Rotom-Wash.webp"
  },
  {
    "id": "runerigus",
    "slug": "runerigus",
    "name": "Runerigus",
    "aliases": [],
    "image": "/images/pokemon/runerigus.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Runerigus",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Runerigus.webp"
  },
  {
    "id": "sableye",
    "slug": "sableye",
    "name": "Sableye",
    "aliases": [],
    "image": "/images/pokemon/sableye.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sableye",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sableye.webp"
  },
  {
    "id": "sableye-mega",
    "slug": "sableye-mega",
    "name": "Mega Sableye",
    "aliases": [],
    "image": "/images/pokemon/sableye-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sableye-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sableye-Mega.webp"
  },
  {
    "id": "salazzle",
    "slug": "salazzle",
    "name": "Salazzle",
    "aliases": [],
    "image": "/images/pokemon/salazzle.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Salazzle",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Salazzle.webp"
  },
  {
    "id": "samurott",
    "slug": "samurott",
    "name": "Samurott",
    "aliases": [],
    "image": "/images/pokemon/samurott.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Samurott",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Samurott.webp"
  },
  {
    "id": "samurott-hisui",
    "slug": "samurott-hisui",
    "name": "Hisuian Samurott",
    "aliases": [],
    "image": "/images/pokemon/samurott-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Samurott-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Samurott-Hisui.webp"
  },
  {
    "id": "sandaconda",
    "slug": "sandaconda",
    "name": "Sandaconda",
    "aliases": [],
    "image": "/images/pokemon/sandaconda.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sandaconda",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sandaconda.webp"
  },
  {
    "id": "scizor",
    "slug": "scizor",
    "name": "Scizor",
    "aliases": [],
    "image": "/images/pokemon/scizor.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Scizor",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Scizor.webp"
  },
  {
    "id": "scizor-mega",
    "slug": "scizor-mega",
    "name": "Mega Scizor",
    "aliases": [],
    "image": "/images/pokemon/scizor-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Scizor-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Scizor-Mega.webp"
  },
  {
    "id": "scovillain",
    "slug": "scovillain",
    "name": "Scovillain",
    "aliases": [],
    "image": "/images/pokemon/scovillain.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Scovillain",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Scovillain.webp"
  },
  {
    "id": "scovillain-mega",
    "slug": "scovillain-mega",
    "name": "Mega Scovillain",
    "aliases": [],
    "image": "/images/pokemon/scovillain-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Scovillain-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Scovillain-Mega.webp"
  },
  {
    "id": "serperior",
    "slug": "serperior",
    "name": "Serperior",
    "aliases": [],
    "image": "/images/pokemon/serperior.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Serperior",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Serperior.webp"
  },
  {
    "id": "sharpedo",
    "slug": "sharpedo",
    "name": "Sharpedo",
    "aliases": [],
    "image": "/images/pokemon/sharpedo.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sharpedo",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sharpedo.webp"
  },
  {
    "id": "sharpedo-mega",
    "slug": "sharpedo-mega",
    "name": "Mega Sharpedo",
    "aliases": [],
    "image": "/images/pokemon/sharpedo-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sharpedo-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sharpedo-Mega.webp"
  },
  {
    "id": "simipour",
    "slug": "simipour",
    "name": "Simipour",
    "aliases": [],
    "image": "/images/pokemon/simipour.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Simipour",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Simipour.webp"
  },
  {
    "id": "simisage",
    "slug": "simisage",
    "name": "Simisage",
    "aliases": [],
    "image": "/images/pokemon/simisage.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Simisage",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Simisage.webp"
  },
  {
    "id": "simisear",
    "slug": "simisear",
    "name": "Simisear",
    "aliases": [],
    "image": "/images/pokemon/simisear.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Simisear",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Simisear.webp"
  },
  {
    "id": "sinistcha",
    "slug": "sinistcha",
    "name": "Sinistcha (Unremarkable Form)",
    "aliases": [],
    "image": "/images/pokemon/sinistcha.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sinistcha",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sinistcha.webp"
  },
  {
    "id": "sinistcha-masterpiece",
    "slug": "sinistcha-masterpiece",
    "name": "Sinistcha (Masterpiece Form)",
    "aliases": [],
    "image": "/images/pokemon/sinistcha-masterpiece.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sinistcha-Masterpiece",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sinistcha-Masterpiece.webp"
  },
  {
    "id": "skarmory",
    "slug": "skarmory",
    "name": "Skarmory",
    "aliases": [],
    "image": "/images/pokemon/skarmory.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Skarmory",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Skarmory.webp"
  },
  {
    "id": "skarmory-mega",
    "slug": "skarmory-mega",
    "name": "Mega Skarmory",
    "aliases": [],
    "image": "/images/pokemon/skarmory-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Skarmory-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Skarmory-Mega.webp"
  },
  {
    "id": "skeledirge",
    "slug": "skeledirge",
    "name": "Skeledirge",
    "aliases": [],
    "image": "/images/pokemon/skeledirge.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Skeledirge",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Skeledirge.webp"
  },
  {
    "id": "slowbro",
    "slug": "slowbro",
    "name": "Slowbro",
    "aliases": [],
    "image": "/images/pokemon/slowbro.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slowbro",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slowbro.webp"
  },
  {
    "id": "slowbro-galar",
    "slug": "slowbro-galar",
    "name": "Galarian Slowbro",
    "aliases": [],
    "image": "/images/pokemon/slowbro-galar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slowbro-Galar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slowbro-Galar.webp"
  },
  {
    "id": "slowbro-mega",
    "slug": "slowbro-mega",
    "name": "Mega Slowbro",
    "aliases": [],
    "image": "/images/pokemon/slowbro-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slowbro-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slowbro-Mega.webp"
  },
  {
    "id": "slowking",
    "slug": "slowking",
    "name": "Slowking",
    "aliases": [],
    "image": "/images/pokemon/slowking.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slowking",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slowking.webp"
  },
  {
    "id": "slowking-galar",
    "slug": "slowking-galar",
    "name": "Galarian Slowking",
    "aliases": [],
    "image": "/images/pokemon/slowking-galar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slowking-Galar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slowking-Galar.webp"
  },
  {
    "id": "slurpuff",
    "slug": "slurpuff",
    "name": "Slurpuff",
    "aliases": [],
    "image": "/images/pokemon/slurpuff.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Slurpuff",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Slurpuff.webp"
  },
  {
    "id": "sneasler",
    "slug": "sneasler",
    "name": "Sneasler",
    "aliases": [],
    "image": "/images/pokemon/sneasler.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sneasler",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sneasler.webp"
  },
  {
    "id": "snorlax",
    "slug": "snorlax",
    "name": "Snorlax",
    "aliases": [],
    "image": "/images/pokemon/snorlax.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Snorlax",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Snorlax.webp"
  },
  {
    "id": "spiritomb",
    "slug": "spiritomb",
    "name": "Spiritomb",
    "aliases": [],
    "image": "/images/pokemon/spiritomb.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Spiritomb",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Spiritomb.webp"
  },
  {
    "id": "starmie",
    "slug": "starmie",
    "name": "Starmie",
    "aliases": [],
    "image": "/images/pokemon/starmie.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Starmie",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Starmie.webp"
  },
  {
    "id": "starmie-mega",
    "slug": "starmie-mega",
    "name": "Mega Starmie",
    "aliases": [],
    "image": "/images/pokemon/starmie-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Starmie-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Starmie-Mega.webp"
  },
  {
    "id": "steelix",
    "slug": "steelix",
    "name": "Steelix",
    "aliases": [],
    "image": "/images/pokemon/steelix.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Steelix",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Steelix.webp"
  },
  {
    "id": "steelix-mega",
    "slug": "steelix-mega",
    "name": "Mega Steelix",
    "aliases": [],
    "image": "/images/pokemon/steelix-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Steelix-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Steelix-Mega.webp"
  },
  {
    "id": "stunfisk",
    "slug": "stunfisk",
    "name": "Stunfisk",
    "aliases": [],
    "image": "/images/pokemon/stunfisk.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Stunfisk",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Stunfisk.webp"
  },
  {
    "id": "stunfisk-galar",
    "slug": "stunfisk-galar",
    "name": "Galarian Stunfisk",
    "aliases": [],
    "image": "/images/pokemon/stunfisk-galar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Stunfisk-Galar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Stunfisk-Galar.webp"
  },
  {
    "id": "sylveon",
    "slug": "sylveon",
    "name": "Sylveon",
    "aliases": [],
    "image": "/images/pokemon/sylveon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Sylveon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Sylveon.webp"
  },
  {
    "id": "talonflame",
    "slug": "talonflame",
    "name": "Talonflame",
    "aliases": [],
    "image": "/images/pokemon/talonflame.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Talonflame",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Talonflame.webp"
  },
  {
    "id": "tauros",
    "slug": "tauros",
    "name": "Tauros",
    "aliases": [],
    "image": "/images/pokemon/tauros.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tauros",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tauros.webp"
  },
  {
    "id": "tauros-paldea-aqua",
    "slug": "tauros-paldea-aqua",
    "name": "Paldean Tauros (Aqua Breed)",
    "aliases": [],
    "image": "/images/pokemon/tauros-paldea-aqua.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tauros-Paldea-Aqua",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tauros-Paldea-Aqua.webp"
  },
  {
    "id": "tauros-paldea-blaze",
    "slug": "tauros-paldea-blaze",
    "name": "Paldean Tauros (Blaze Breed)",
    "aliases": [],
    "image": "/images/pokemon/tauros-paldea-blaze.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tauros-Paldea-Blaze",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tauros-Paldea-Blaze.webp"
  },
  {
    "id": "tauros-paldea-combat",
    "slug": "tauros-paldea-combat",
    "name": "Paldean Tauros (Combat Breed)",
    "aliases": [],
    "image": "/images/pokemon/tauros-paldea-combat.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tauros-Paldea-Combat",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tauros-Paldea-Combat.webp"
  },
  {
    "id": "tinkaton",
    "slug": "tinkaton",
    "name": "Tinkaton",
    "aliases": [],
    "image": "/images/pokemon/tinkaton.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tinkaton",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tinkaton.webp"
  },
  {
    "id": "torkoal",
    "slug": "torkoal",
    "name": "Torkoal",
    "aliases": [],
    "image": "/images/pokemon/torkoal.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Torkoal",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Torkoal.webp"
  },
  {
    "id": "torterra",
    "slug": "torterra",
    "name": "Torterra",
    "aliases": [],
    "image": "/images/pokemon/torterra.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Torterra",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Torterra.webp"
  },
  {
    "id": "toucannon",
    "slug": "toucannon",
    "name": "Toucannon",
    "aliases": [],
    "image": "/images/pokemon/toucannon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Toucannon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Toucannon.webp"
  },
  {
    "id": "toxapex",
    "slug": "toxapex",
    "name": "Toxapex",
    "aliases": [],
    "image": "/images/pokemon/toxapex.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Toxapex",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Toxapex.webp"
  },
  {
    "id": "toxicroak",
    "slug": "toxicroak",
    "name": "Toxicroak",
    "aliases": [],
    "image": "/images/pokemon/toxicroak.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Toxicroak",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Toxicroak.webp"
  },
  {
    "id": "trevenant",
    "slug": "trevenant",
    "name": "Trevenant",
    "aliases": [],
    "image": "/images/pokemon/trevenant.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Trevenant",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Trevenant.webp"
  },
  {
    "id": "tsareena",
    "slug": "tsareena",
    "name": "Tsareena",
    "aliases": [],
    "image": "/images/pokemon/tsareena.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tsareena",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tsareena.webp"
  },
  {
    "id": "typhlosion",
    "slug": "typhlosion",
    "name": "Typhlosion",
    "aliases": [],
    "image": "/images/pokemon/typhlosion.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Typhlosion",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Typhlosion.webp"
  },
  {
    "id": "typhlosion-hisui",
    "slug": "typhlosion-hisui",
    "name": "Hisuian Typhlosion",
    "aliases": [],
    "image": "/images/pokemon/typhlosion-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Typhlosion-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Typhlosion-Hisui.webp"
  },
  {
    "id": "tyranitar",
    "slug": "tyranitar",
    "name": "Tyranitar",
    "aliases": [],
    "image": "/images/pokemon/tyranitar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tyranitar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tyranitar.webp"
  },
  {
    "id": "tyranitar-mega",
    "slug": "tyranitar-mega",
    "name": "Mega Tyranitar",
    "aliases": [],
    "image": "/images/pokemon/tyranitar-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tyranitar-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tyranitar-Mega.webp"
  },
  {
    "id": "tyrantrum",
    "slug": "tyrantrum",
    "name": "Tyrantrum",
    "aliases": [],
    "image": "/images/pokemon/tyrantrum.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Tyrantrum",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Tyrantrum.webp"
  },
  {
    "id": "umbreon",
    "slug": "umbreon",
    "name": "Umbreon",
    "aliases": [],
    "image": "/images/pokemon/umbreon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Umbreon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Umbreon.webp"
  },
  {
    "id": "vanilluxe",
    "slug": "vanilluxe",
    "name": "Vanilluxe",
    "aliases": [],
    "image": "/images/pokemon/vanilluxe.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vanilluxe",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Vanilluxe.webp"
  },
  {
    "id": "vaporeon",
    "slug": "vaporeon",
    "name": "Vaporeon",
    "aliases": [],
    "image": "/images/pokemon/vaporeon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vaporeon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Vaporeon.webp"
  },
  {
    "id": "venusaur",
    "slug": "venusaur",
    "name": "Venusaur",
    "aliases": [],
    "image": "/images/pokemon/venusaur.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Venusaur",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Venusaur.webp"
  },
  {
    "id": "venusaur-mega",
    "slug": "venusaur-mega",
    "name": "Mega Venusaur",
    "aliases": [],
    "image": "/images/pokemon/venusaur-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Venusaur-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Venusaur-Mega.webp"
  },
  {
    "id": "victreebel",
    "slug": "victreebel",
    "name": "Victreebel",
    "aliases": [],
    "image": "/images/pokemon/victreebel.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Victreebel",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Victreebel.webp"
  },
  {
    "id": "victreebel-mega",
    "slug": "victreebel-mega",
    "name": "Mega Victreebel",
    "aliases": [],
    "image": "/images/pokemon/victreebel-mega.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Victreebel-Mega",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Victreebel-Mega.webp"
  },
  {
    "id": "vivillon",
    "slug": "vivillon",
    "name": "Vivillon (Meadow Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon.webp"
  },
  {
    "id": "vivillon-archipelago",
    "slug": "vivillon-archipelago",
    "name": "Vivillon (Archipelago Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-archipelago.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Archipelago",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Archipelago.webp"
  },
  {
    "id": "vivillon-continental",
    "slug": "vivillon-continental",
    "name": "Vivillon (Continental Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-continental.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Continental",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Continental.webp"
  },
  {
    "id": "vivillon-elegant",
    "slug": "vivillon-elegant",
    "name": "Vivillon (Elegant Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-elegant.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Elegant",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Elegant.webp"
  },
  {
    "id": "vivillon-fancy",
    "slug": "vivillon-fancy",
    "name": "Vivillon (Fancy Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-fancy.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Fancy",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Fancy.webp"
  },
  {
    "id": "vivillon-garden",
    "slug": "vivillon-garden",
    "name": "Vivillon (Garden Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-garden.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Garden",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Garden.webp"
  },
  {
    "id": "vivillon-high-plains",
    "slug": "vivillon-high-plains",
    "name": "Vivillon (High Plains Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-high-plains.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-High-Plains",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-High-Plains.webp"
  },
  {
    "id": "vivillon-icy-snow",
    "slug": "vivillon-icy-snow",
    "name": "Vivillon (Icy Snow Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-icy-snow.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Icy-Snow",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Icy-Snow.webp"
  },
  {
    "id": "vivillon-jungle",
    "slug": "vivillon-jungle",
    "name": "Vivillon (Jungle Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-jungle.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Jungle",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Jungle.webp"
  },
  {
    "id": "vivillon-marine",
    "slug": "vivillon-marine",
    "name": "Vivillon (Marine Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-marine.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Marine",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Marine.webp"
  },
  {
    "id": "vivillon-modern",
    "slug": "vivillon-modern",
    "name": "Vivillon (Modern Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-modern.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Modern",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Modern.webp"
  },
  {
    "id": "vivillon-monsoon",
    "slug": "vivillon-monsoon",
    "name": "Vivillon (Monsoon Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-monsoon.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Monsoon",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Monsoon.webp"
  },
  {
    "id": "vivillon-ocean",
    "slug": "vivillon-ocean",
    "name": "Vivillon (Ocean Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-ocean.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Ocean",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Ocean.webp"
  },
  {
    "id": "vivillon-pokeball",
    "slug": "vivillon-pokeball",
    "name": "Vivillon (Poké Ball Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-pokeball.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Pokeball",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Pokeball.webp"
  },
  {
    "id": "vivillon-polar",
    "slug": "vivillon-polar",
    "name": "Vivillon (Polar Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-polar.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Polar",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Polar.webp"
  },
  {
    "id": "vivillon-river",
    "slug": "vivillon-river",
    "name": "Vivillon (River Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-river.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-River",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-River.webp"
  },
  {
    "id": "vivillon-sandstorm",
    "slug": "vivillon-sandstorm",
    "name": "Vivillon (Sandstorm Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-sandstorm.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Sandstorm",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Sandstorm.webp"
  },
  {
    "id": "vivillon-savanna",
    "slug": "vivillon-savanna",
    "name": "Vivillon (Savanna Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-savanna.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Savanna",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Savanna.webp"
  },
  {
    "id": "vivillon-sun",
    "slug": "vivillon-sun",
    "name": "Vivillon (Sun Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-sun.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Sun",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Sun.webp"
  },
  {
    "id": "vivillon-tundra",
    "slug": "vivillon-tundra",
    "name": "Vivillon (Tundra Pattern)",
    "aliases": [],
    "image": "/images/pokemon/vivillon-tundra.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Vivillon-Tundra",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/Vivillon-Tundra.webp"
  },
  {
    "id": "volcarona",
    "slug": "volcarona",
    "name": "Volcarona",
    "aliases": [],
    "image": "/images/pokemon/volcarona.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Volcarona",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Volcarona.webp"
  },
  {
    "id": "watchog",
    "slug": "watchog",
    "name": "Watchog",
    "aliases": [],
    "image": "/images/pokemon/watchog.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Watchog",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Watchog.webp"
  },
  {
    "id": "weavile",
    "slug": "weavile",
    "name": "Weavile",
    "aliases": [],
    "image": "/images/pokemon/weavile.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Weavile",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Weavile.webp"
  },
  {
    "id": "whimsicott",
    "slug": "whimsicott",
    "name": "Whimsicott",
    "aliases": [],
    "image": "/images/pokemon/whimsicott.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Whimsicott",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Whimsicott.webp"
  },
  {
    "id": "wyrdeer",
    "slug": "wyrdeer",
    "name": "Wyrdeer",
    "aliases": [],
    "image": "/images/pokemon/wyrdeer.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Wyrdeer",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Wyrdeer.webp"
  },
  {
    "id": "zoroark",
    "slug": "zoroark",
    "name": "Zoroark",
    "aliases": [],
    "image": "/images/pokemon/zoroark.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Zoroark",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Zoroark.webp"
  },
  {
    "id": "zoroark-hisui",
    "slug": "zoroark-hisui",
    "name": "Hisuian Zoroark",
    "aliases": [],
    "image": "/images/pokemon/zoroark-hisui.webp",
    "sourceUrl": "https://pokechamps.com/pokemon/Zoroark-Hisui",
    "sourceImageUrl": "https://static.dotgg.gg/pokechamps/alt-pokemon/art/Zoroark-Hisui.webp"
  }
] satisfies PokemonAsset[];

const supplementalPokemonAssets = [
  {
    id: "blaziken-mega",
    slug: "blaziken-mega",
    name: "Mega Blaziken",
    aliases: [],
    image: "/images/pokemon/blaziken-mega.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/blaziken-mega",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png"
  },
  {
    id: "metagross-mega",
    slug: "metagross-mega",
    name: "Mega Metagross",
    aliases: [],
    image: "/images/pokemon/metagross-mega.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/metagross-mega",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png"
  },
  {
    id: "salamence-mega",
    slug: "salamence-mega",
    name: "Mega Salamence",
    aliases: [],
    image: "/images/pokemon/salamence-mega.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/salamence-mega",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png"
  },
  {
    id: "mawile-mega",
    slug: "mawile-mega",
    name: "Mega Mawile",
    aliases: [],
    image: "/images/pokemon/mawile-mega.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/mawile-mega",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png"
  },
  {
    id: "swampert-mega",
    slug: "swampert-mega",
    name: "Mega Swampert",
    aliases: [],
    image: "/images/pokemon/swampert-mega.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/swampert-mega",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png"
  },
  {
    id: "rillaboom",
    slug: "rillaboom",
    name: "Rillaboom",
    aliases: [],
    image: "/images/pokemon/rillaboom.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/rillaboom",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png"
  },
  {
    id: "grimmsnarl",
    slug: "grimmsnarl",
    name: "Grimmsnarl",
    aliases: [],
    image: "/images/pokemon/grimmsnarl.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/grimmsnarl",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png"
  },
  {
    id: "indeedee",
    slug: "indeedee",
    name: "Indeedee",
    aliases: ["Indeedee Male"],
    image: "/images/pokemon/indeedee.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/indeedee-male",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png"
  },
  {
    id: "amoonguss",
    slug: "amoonguss",
    name: "Amoonguss",
    aliases: [],
    image: "/images/pokemon/amoonguss.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/amoonguss",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
  },
  {
    id: "ursaluna",
    slug: "ursaluna",
    name: "Ursaluna",
    aliases: [],
    image: "/images/pokemon/ursaluna.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/ursaluna",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png"
  },
  {
    id: "dondozo",
    slug: "dondozo",
    name: "Dondozo",
    aliases: [],
    image: "/images/pokemon/dondozo.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/dondozo",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png"
  },
  {
    id: "tatsugiri",
    slug: "tatsugiri",
    name: "Tatsugiri",
    aliases: ["Tatsugiri Curly"],
    image: "/images/pokemon/tatsugiri.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/tatsugiri-curly",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png"
  },
  {
    id: "iron-valiant",
    slug: "iron-valiant",
    name: "Iron Valiant",
    aliases: [],
    image: "/images/pokemon/iron-valiant.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/iron-valiant",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png"
  },
  {
    id: "escavalier",
    slug: "escavalier",
    name: "Escavalier",
    aliases: [],
    image: "/images/pokemon/escavalier.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/escavalier",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
  },
  {
    id: "cloyster",
    slug: "cloyster",
    name: "Cloyster",
    aliases: [],
    image: "/images/pokemon/cloyster.png",
    sourceUrl: "https://pokeapi.co/api/v2/pokemon/cloyster",
    sourceImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
  }
] satisfies PokemonAsset[];

export const pokemonAssets = [...importedPokemonAssets, ...supplementalPokemonAssets] satisfies PokemonAsset[];

function normalizePokemonKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/pok[eé]mon champion/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

const pokemonByKey = new Map<string, PokemonAsset>();

for (const pokemon of pokemonAssets) {
  const keys = [pokemon.id, pokemon.slug, pokemon.name, ...pokemon.aliases];
  for (const key of keys) {
    pokemonByKey.set(normalizePokemonKey(key), pokemon);
  }
}

export function getPokemonByName(name: string) {
  return pokemonByKey.get(normalizePokemonKey(name));
}

export function getPokemonImageByName(name: string) {
  return getPokemonByName(name)?.image;
}
