import type { Metadata } from "next";
import Image from "next/image";

import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const publishedAt = "2026-06-30";
const imageBase = "/images/guides/regulation-set-mb-mega-analysis";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Regulation Set M-B Mega Analysis",
  description:
    "A complete Pokemon Champions Regulation Set M-B Mega analysis for the June 2026 rules, covering new Mega Pokemon, Life Orb Garchomp, Mega Raichu, Mega Swampert, Mega Metagross, Mega Staraptor, and Mega Mawile.",
  path: "/regulation-set-mb-mega-analysis",
  image: coverImage,
  keywords: [
    "Pokemon Champions Regulation Set M-B",
    "Pokemon Champions Mega Analysis",
    "Pokemon Champions Mega Tier List",
    "Pokemon Champions Mega Swampert",
    "Pokemon Champions Mega Metagross",
    "Pokemon Champions Mega Staraptor",
    "Pokemon Champions Mega Mawile",
    "Pokemon Champions Life Orb Garchomp"
  ]
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

const primaryFigures: Figure[] = [
  {
    src: `${imageBase}/regulation-set-mb-rules.png`,
    alt: "Pokemon Champions Regulation Set M-B rule period and eligible Pokemon overview",
    caption: "Regulation Set M-B defines the June 17 to September 2, 2026 window and adds a focused group of new Mega options."
  },
  {
    src: `${imageBase}/mb-item-pool.png`,
    alt: "Pokemon Champions Regulation Set M-B item pool and newly added items",
    caption: "The item pool matters as much as the new Megas: Life Orb, Light Clay, and Wide Lens change how teams pressure and protect."
  },
  {
    src: `${imageBase}/mega-raichu-eelektross.png`,
    alt: "Mega Raichu X, Mega Raichu Y, and Mega Eelektross analysis chart",
    caption: "The Electric additions gain impressive abilities, but Ground immunity, Lightning Rod mirrors, and raw stat quality decide their ceiling."
  },
  {
    src: `${imageBase}/mega-swampert-blaziken-sceptile.png`,
    alt: "Mega Sceptile, Mega Blaziken, and Mega Swampert analysis chart",
    caption: "The Hoenn starter Megas separate quickly: Sceptile and Blaziken are sharp but fragile, while Swampert gives rain a sturdier win condition."
  },
  {
    src: `${imageBase}/mega-metagross-staraptor-mawile.png`,
    alt: "Mega Metagross, Mega Staraptor, and Mega Mawile analysis chart",
    caption: "The strongest physical Megas in M-B all ask a different team-building question: burst damage, snowballing, or Trick Room pressure."
  }
];

const supportingFigures: Figure[] = [
  {
    src: `${imageBase}/utility-mega-picks.png`,
    alt: "Additional Regulation Set M-B Mega Pokemon utility analysis chart",
    caption: "Utility picks can still matter when they compress support, speed control, or matchup coverage."
  },
  {
    src: `${imageBase}/scizor-scolipede-pinsir.png`,
    alt: "Mega Scizor, Mega Scolipede, and Mega Pinsir analysis chart",
    caption: "Bug and physical offense picks need a clear matchup reason because M-B already rewards stronger general attackers."
  },
  {
    src: `${imageBase}/falinks-qwilfish-alcremie.png`,
    alt: "Mega Falinks, Mega Qwilfish, and Mega Alcremie analysis chart",
    caption: "Niche Megas are easier to justify when their ability changes the first two turns of a battle."
  },
  {
    src: `${imageBase}/malamar-sableye-drampa.png`,
    alt: "Mega Malamar, Mega Sableye, and Mega Drampa analysis chart",
    caption: "Slower Megas need either defensive value or a setup lane, not just a larger stat total."
  },
  {
    src: `${imageBase}/pidgeot-poliwrath-banette.png`,
    alt: "Mega Pidgeot, Mega Poliwrath, and Mega Banette analysis chart",
    caption: "Accuracy, priority, and disruption tools can make lower-usage Megas relevant in specific compositions."
  }
];

export const metadata: Metadata = createPageMetadata(page);

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function ArticleFigure({ figure, priority = false }: { figure: Figure; priority?: boolean }) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      <Image
        src={figure.src}
        alt={figure.alt}
        width={1200}
        height={675}
        priority={priority}
        unoptimized
        className="h-auto w-full bg-mist object-contain"
      />
      <figcaption className="border-t border-line bg-white px-4 py-3 text-sm leading-6 text-slate-600">{figure.caption}</figcaption>
    </figure>
  );
}

function KeyTakeaway({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <h3 className="text-base font-black text-champion-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}

export default function RegulationSetMbMegaAnalysisPage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Regulation Set M-B</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Regulation Set M-B Mega Analysis
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Regulation Set M-B runs from June 17, 2026 through September 2, 2026, and it is the first rule window where
              the mobile launch, new Mega Stones, and the returning item pool all collide. This guide turns the source
              notes into an English long-form meta breakdown for players planning ranked teams.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Regulation Set M-B cover with Mega Metagross, Mega Raichu, and Mega Sceptile"
              width={578}
              height={325}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Regulation Set M-B key takeaways">
          <KeyTakeaway title="Life Orb raises Garchomp" body="Life Orb gives Garchomp cleaner damage thresholds and helps explain why it immediately pressures the top of the usage chart." />
          <KeyTakeaway title="Rain gains a real Mega" body="Mega Swampert is the cleanest new rain payoff because it combines speed, bulk, Water damage, and Ground coverage." />
          <KeyTakeaway title="Strong abilities are not enough" body="Mega Raichu and Mega Eelektross show that a powerful ability still needs the right typing, stats, and move pressure." />
        </section>

        <div className="prose-guide mt-10">
          <h2>What Regulation Set M-B changes</h2>
          <p>
            Regulation Set M-B is not a full reset of Pokemon Champions. The source material counts 235 in-game icons and
            roughly 200 final-form options after duplicates and alternate forms are removed. The new competitive question is
            narrower: which of the added Mega Pokemon and Mega Stones actually changes ranked play, and which ones only look
            exciting because their ability text is flashy?
          </p>
          <p>
            The answer starts with availability. No legendary Pokemon are part of this wave, so the format is still shaped by
            strong regular Pokemon such as Garchomp, Basculegion, Sneasler, Archaludon, Pelipper, and the existing Mega
            attackers. That matters because many of the new Megas are not competing against restricted legends. They are
            competing against reliable, already-tested cores.
          </p>
        </div>

        <ArticleFigure figure={primaryFigures[0]} priority />

        <div className="prose-guide">
          <h2>The item pool may be the biggest M-B shift</h2>
          <p>
            The most important early lesson from Set M-B is that items can move the metagame as much as new Pokemon. Life
            Orb is the headline. It turns many neutral hits into real damage checks, and Garchomp benefits immediately because
            it already had speed, typing, and spread pressure. A Life Orb Garchomp is easier to fit than a fragile new Mega
            that requires the only Mega slot on the team.
          </p>
          <p>
            Light Clay also matters because screens buy turns for fragile sweepers such as Mega Raichu, Mega Blaziken, and
            Mega Sceptile. Wide Lens is smaller on paper but important in practice: Pokemon Champions has several powerful
            moves that become much more attractive when the miss chance is reduced. At the same time, several familiar
            competitive items are still absent or limited, so players cannot simply import standard cartridge habits into this
            format.
          </p>
        </div>

        <ArticleFigure figure={primaryFigures[1]} />

        <div className="prose-guide">
          <h2>Mega Raichu X and Mega Raichu Y: high profile, real flaws</h2>
          <p>
            Mega Raichu is the face of the rule set, but it is not automatically the best Pokemon in Regulation Set M-B. Mega
            Raichu X is the physical direction. It gets meaningful offensive stats and, most importantly, an Electric Terrain
            role that can contest terrain and empower Electric pressure. The issue is that pure Electric offense is narrow.
            Ground types ignore Electric moves, Lightning Rod mirrors create awkward standoffs, and Raichu is still fragile.
          </p>
          <p>
            Mega Raichu Y is more interesting as a disruption attacker. No Guard makes Zap Cannon a real control move instead
            of a gimmick: damage plus guaranteed paralysis can decide a turn even when the target survives. Steam Eruption
            and Grass Knot-style coverage give it ways to punish specific checks such as Swampert, but the same problem
            remains. Raichu wants Electric damage, protection, utility, and coverage, and four move slots disappear quickly.
          </p>
          <p>
            The practical ranking is simple: both Mega Raichu forms are playable and searchable, but neither should be treated
            as plug-and-play. They need screens, redirection, speed control, or matchup-specific partners. Teams that only
            ask Mega Raichu to spam Electric attacks will lose to Ground types and Lightning Rod answers.
          </p>

          <h2>Mega Eelektross: the ability is better than the Pokemon</h2>
          <p>
            Mega Eelektross is the clearest example of a Set M-B trap. Its custom ability combines Ground immunity with a
            Beast Boost-style stat rise after a knockout, which sounds elite. The problem is the rest of the profile. Pure
            Electric typing has the same offensive blind spot as Raichu, the stat spread is not fast enough to snowball
            cleanly, and the move pool does not provide the kind of signature pressure that makes a booster terrifying.
          </p>
          <p>
            If Mega Eelektross earns usage, it will be as a matchup pick that punishes weakened teams. It is not the new
            Calyrex-style sweeper. A snowball ability is strongest on a Pokemon that already moves first and claims KOs
            without help. Eelektross usually needs the help before the ability can matter.
          </p>
        </div>

        <ArticleFigure figure={primaryFigures[2]} />

        <div className="prose-guide">
          <h2>Mega Sceptile, Mega Blaziken, and Mega Swampert</h2>
          <p>
            The Hoenn starter Megas show three different versions of offensive risk. Mega Sceptile is extremely fast by the
            current Pokemon Champions standard. Its Grass/Dragon typing, Lightning Rod, and Earth Power access give it a much
            better coverage map than before, especially into Steel and Electric-adjacent teams. Still, it is frail, mostly
            single-target, and unforgiving. Its ceiling is high, but a wrong read often costs the Mega slot.
          </p>
          <p>
            Mega Blaziken is more familiar: Protect into Speed Boost, then Flare Blitz, Close Combat, and Rock Slide pressure.
            The damage is real, and Fighting plus Fire is a good offensive pair. The downside is also familiar. Blaziken is
            fragile, recoil matters, and it has to expose itself to trade. Non-Mega Blaziken can still use Focus Sash,
            Coaching, Baton Pass, or special Fire coverage, so the team has to prove that raw Mega Blaziken output is worth
            the slot.
          </p>
          <p>
            Mega Swampert is the standout. Swift Swim gives rain a dedicated Mega that does not fold to most priority or
            neutral attacks, and Water/Ground coverage is much more useful than pure Electric coverage. Under rain, high-power
            Water moves become immediate KO threats, while Earthquake or Ground coverage keeps Steel and Electric Pokemon
            honest. The four-times Grass weakness is real, but Pelipper and Archaludon cover that weakness naturally in the
            classic rain shell.
          </p>
        </div>

        <ArticleFigure figure={primaryFigures[3]} />

        <div className="prose-guide">
          <h2>Mega Metagross: still strong, but missing its best button</h2>
          <p>
            Mega Metagross looks absurd on paper. Its effective stat total is enormous, Steel/Psychic gives many resistances,
            and Tough Claws improves a large portion of its physical move pool. It should be one of the cleanest Regulation
            Set M-B winners.
          </p>
          <p>
            The catch is Heavy Slam. In the source analysis, Heavy Slam is treated as the missing move that would push Mega
            Metagross into a much higher damage tier. With its weight, Heavy Slam would often behave like a 120-base-power
            Steel STAB move before Tough Claws. Without it, Metagross must lean on Iron Head, Meteor Mash, Zen Headbutt,
            Stomping Tantrum, Ice Punch, Thunder Punch, and Bullet Punch. Those are useful, but several are lower power or
            less accurate than the move it wants most.
          </p>
          <p>
            That does not make Mega Metagross bad. It remains one of the strongest physical Megas in M-B, especially with
            Coaching or screen support. It simply means the best teams should treat it as a durable pressure piece, not an
            unstoppable one-button attacker.
          </p>

          <h2>Mega Staraptor: Contrary makes Close Combat a setup move</h2>
          <p>
            Mega Staraptor is one of the most explosive new additions because Contrary turns Close Combat into both offense
            and defense. Instead of dropping defenses, Staraptor raises them while attacking. Fighting/Flying coverage is also
            excellent into many neutral boards, and a fast snowballing attacker can punish teams that do not carry Ghost
            pivots, strong Fairy pressure, or immediate special damage.
          </p>
          <p>
            The weakness is predictability. Mega Staraptor wants to click Close Combat early. If the opponent has Ghost types,
            Intimidate-resistant positioning, or enough damage to remove it before the first boost matters, the bird can look
            much less dominant. Choice Scarf Final Gambit sets also exist as a non-Mega idea, but the Mega version is about
            stacking defensive boosts while dealing real damage.
          </p>

          <h2>Mega Mawile: low stats, elite ability, elite typing</h2>
          <p>
            Mega Mawile remains a classic contradiction. Its raw stat total is low for a Mega, but Huge Power effectively
            doubles its Attack, and Steel/Fairy is still one of the best defensive typings in Pokemon. Intimidate and Hyper
            Cutter both have pre-Mega value: one lowers opposing Attack, while the other protects Mawile from being weakened
            before it Mega Evolves.
          </p>
          <p>
            Mega Mawile does not struggle with damage. The issue is move quality and speed. Iron Head and Play Rough are reliable enough
            but not spectacular, Rock Slide is mainly for targets such as Charizard, and Sucker Punch is essential priority
            rather than a perfect coverage move. In Trick Room, however, Mega Mawile is still one of the most frightening
            physical attackers in the rule set. Rain teams can also reduce its Fire weakness, which makes Mawile plus rain a
            realistic structure rather than a novelty.
          </p>
        </div>

        <ArticleFigure figure={primaryFigures[4]} />

        <div className="prose-guide">
          <h2>Early Regulation Set M-B Mega ranking</h2>
          <p>
            The safest early tier is not based on novelty. It is based on how easily a Mega converts one turn into a winning
            board state. Mega Swampert, Mega Staraptor, Mega Mawile, and Mega Metagross are the most important names to test
            first. Mega Blaziken, Mega Sceptile, and Mega Raichu Y are strong but require cleaner support. Mega Raichu X and
            Mega Eelektross are playable, but they need a team that solves their Electric-type blind spots before battle one.
          </p>
          <p>
            The larger lesson is that Regulation Set M-B rewards complete profiles. A good custom ability is not enough. The
            best M-B Megas have at least three of the following: immediate damage, survivability, strong typing, coverage into
            common answers, and a simple partner package. Mega Swampert has Pelipper and Archaludon. Mega Mawile has Trick
            Room and rain support. Mega Staraptor has immediate Close Combat pressure. Mega Metagross has bulk, resistances,
            and priority. That is why they should define the early ladder.
          </p>
        </div>

        <section className="mt-10" aria-label="Additional Regulation Set M-B Mega analysis images">
          <h2 className="text-2xl font-black text-champion-navy">Additional M-B Mega notes</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            The remaining source images are included below for players who want the full visual reference set while comparing
            secondary Mega picks and niche matchup roles.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {supportingFigures.map((figure) => (
              <ArticleFigure key={figure.src} figure={figure} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
