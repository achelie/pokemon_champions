export const site = {
  name: "Pokemon Champions Guide",
  domain: "pokemonchampionsguide.com",
  url: "https://pokemonchampionsguide.com",
  description: "English Pokémon Champions strategy guides for tier lists, best teams, Pokémon HOME, mobile launch prep, and Mega Raichu builds."
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
