export const site = {
  name: "Pokemon Champions Guide",
  domain: "pokemetahub.com",
  url: "https://pokemetahub.com",
  description: "English Pokemon Champions strategy guides for tier lists, best teams, Pokemon HOME, mobile launch prep, and Mega Raichu builds."
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
