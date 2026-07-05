import type { Metadata } from "next";
import Image from "next/image";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const publishedAt = "2026-07-01";
const imageBase = "/images/guides/mega-raichu-y-zap-cannon-build";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Mega Raichu Y Build Guide - No Guard Zap Cannon",
  description:
    "A high-quality Pokemon Champions Mega Raichu Y build guide covering No Guard Zap Cannon, bulk EVs, Steam Eruption, Grass Knot, Lightning Rod counterplay, partners, and ranked usage.",
  path: "/mega-raichu-y-zap-cannon-build",
  image: coverImage,
  keywords: [
    "Pokemon Champions Mega Raichu Y Build",
    "Mega Raichu Y Zap Cannon",
    "Pokemon Champions No Guard Raichu",
    "Pokemon Champions Mega Raichu Y EVs",
    "Pokemon Champions Mega Raichu Y Moveset",
    "Pokemon Champions Raichu Y Guide"
  ]
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

const figures: Figure[] = [
  {
    src: `${imageBase}/mega-raichu-y-usage-data.png`,
    alt: "Pokemon Champions Mega Raichu Y usage data and common items",
    caption:
      "M3 usage data shows Mega Raichu Y as a second-tier but highly relevant new Mega, with Zap Cannon appearing as its defining move."
  },
  {
    src: `${imageBase}/mega-raichu-y-set.png`,
    alt: "Pokemon Champions Mega Raichu Y recommended moveset with Zap Cannon, Steam Eruption, Protect, and flexible fourth slot",
    caption:
      "The core set is Protect, Zap Cannon, Steam Eruption, and one flexible move such as Grass Knot, Encore, Volt Switch, Electroweb, or Fake Out."
  },
  {
    src: `${imageBase}/mega-raichu-y-bulk-evs.png`,
    alt: "Pokemon Champions Mega Raichu Y defensive EV benchmark chart",
    caption:
      "The defensive benchmark explains why bulk investment can be more valuable than max Special Attack on a Pokemon that already has 160 base Sp. Atk."
  },
  {
    src: `${imageBase}/mega-raichu-y-no-guard.png`,
    alt: "Mega Raichu Y No Guard ability comparison and notes",
    caption:
      "No Guard is the whole reason Mega Raichu Y works: Zap Cannon and Steam Eruption become reliable instead of risky."
  },
  {
    src: `${imageBase}/mega-raichu-y-offense-calcs.png`,
    alt: "Pokemon Champions Mega Raichu Y offensive damage calculation chart",
    caption:
      "Even with 0 Special Attack investment, Zap Cannon still deletes many Electric-weak targets and leaves bulkier targets paralyzed for teammates."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "why-mega-raichu-y", title: "Why Mega Raichu Y matters" },
  { id: "no-guard-zap-cannon", title: "No Guard Zap Cannon" },
  { id: "recommended-moveset", title: "Recommended moveset" },
  { id: "bulk-investment", title: "Bulk investment" },
  { id: "damage-benchmarks", title: "Damage benchmarks" },
  { id: "lightning-rod-counterplay", title: "Lightning Rod and counterplay" },
  { id: "best-partners", title: "Best partners" },
  { id: "final-verdict", title: "Final verdict" }
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

function BuildNote({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <h3 className="text-base font-black text-champion-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}

export default function MegaRaichuYZapCannonBuildPage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Mega Raichu Y Guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Mega Raichu Y Build Guide
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Mega Raichu Y is not just another fast Electric attacker. Its No Guard Zap Cannon gives Pokemon Champions one
              of the most reliable high-damage speed control tools in Regulation Set M-B. This guide explains why bulk EVs,
              smart coverage, and the right partners matter more than blindly maximizing Special Attack.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Mega Raichu Y Zap Cannon build guide cover with base stats"
              width={1400}
              height={737}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Mega Raichu Y build summary">
          <BuildNote
            title="Core identity"
            body="No Guard turns Zap Cannon from a coin-flip move into a dependable Electric STAB attack that also paralyzes the target."
          />
          <BuildNote
            title="Best EV direction"
            body="A 0 Special Attack or low Special Attack bulk build is viable because many important damage rolls are already secured."
          />
          <BuildNote
            title="Main risk"
            body="Pure Electric typing, fragile physical bulk, and Lightning Rod counterplay mean Mega Raichu Y still needs careful support."
          />
        </section>

        <div className="prose-guide mt-10">
          <h2 id="why-mega-raichu-y">Why Mega Raichu Y matters in Pokemon Champions</h2>
          <p>
            Mega Raichu Y currently sits around the second competitive tier of Regulation Set M-B. It is not as universally
            oppressive as Mega Charizard Y, and it does not define rain the way Mega Swampert does, but it is one of the
            most useful new Mega Pokemon because it compresses damage and speed control into one button: No Guard Zap Cannon.
          </p>
          <p>
            The source data points to three new Mega names that players keep returning to: Mega Swampert, Mega Metagross, and
            Mega Raichu. Mega Raichu Y earns its spot because it threatens Flying and Water targets, punishes slower offense,
            and forces opponents to respect paralysis. When Zap Cannon connects, the target either faints or becomes slow
            enough for Mega Raichu Y partners to finish the job.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="no-guard-zap-cannon">No Guard Zap Cannon is the build, not a gimmick</h2>
          <p>
            No Guard means Mega Raichu Y and the Pokemon targeting it both have guaranteed accuracy. That second half matters:
            Mega Raichu Y is fragile, so it cannot pretend that No Guard is purely upside. The reward is still worth building
            around because Zap Cannon becomes a 120-base-power Electric STAB move with guaranteed paralysis.
          </p>
          <p>
            In practice, Zap Cannon does two jobs. First, it removes common Electric-weak targets such as Mega Charizard Y,
            Pelipper, Corviknight-style Steel/Flying picks, and many Water attackers. Second, it gives speed control into
            bulky targets that survive. If Milotic or another special wall lives the hit, paralysis can still let a teammate
            outspeed and clean up.
          </p>

          <h2 id="recommended-moveset">Recommended Mega Raichu Y moveset</h2>
          <p>
            The most stable moveset starts with Protect, Zap Cannon, and Steam Eruption. Protect is mandatory because Mega
            Raichu Y is easy to punish on the wrong turn. Zap Cannon is the main damage and control move. Steam Eruption is
            the coverage button that lets Raichu punish Ground-resistant pivots and threaten targets that do not care about
            Electric damage.
          </p>
          <p>
            The fourth slot should match the team. Grass Knot is the best direct answer to Mega Swampert and other heavy
            Ground or Water targets. Encore punishes Protect, setup, and passive turns. Volt Switch gives pivot value when
            Raichu has already forced the opponent into a defensive response. Electroweb is weaker than Zap Cannon but can
            slow both opponents. Fake Out is usable, but Mega Raichu Y often has too many attacking and utility demands to
            guarantee that slot.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2 id="bulk-investment">Why bulk investment beats max Special Attack</h2>
          <p>
            The common ladder spread often appears as simple Special Attack plus Speed investment. That is easy to use, but
            it misses the most important Mega Raichu Y lesson: 160 base Special Attack and 120-base-power moves already give
            it enough damage for many jobs. A full 0 Special Attack or very low Special Attack spread still gets meaningful
            KOs with Zap Cannon, especially against targets weak to Electric.
          </p>
          <p>
            The real weakness is survival. Uninvested Mega Raichu Y can drop to attacks that should not be allowed to remove
            a Mega slot so easily, including strong priority and common physical hits. Bulk investment in HP and Defense lets
            Raichu survive moves such as Sucker Punch benchmarks, Close Combat-adjacent pressure after mitigation, and neutral
            hits that would otherwise remove it before it can fire a second Zap Cannon.
          </p>
          <p>
            The guide image uses the same principle as many tournament EV spreads: invest enough Speed to clear the targets
            that matter, then move the remaining budget into bulk. Raichu does not need to win every speed tie. It needs to
            live one more turn, paralyze one more threat, and let the rest of the team profit.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="damage-benchmarks">Damage benchmarks: what 0 Special Attack still does</h2>
          <p>
            The offensive chart is the reason this guide recommends a bulk-first approach. Even at 0 Special Attack
            investment, Zap Cannon still overwhelms many of its intended targets. Mega Charizard Y does not want to take it.
            Staraptor-style Flying attackers do not want to take it. Pelipper and other rain enablers cannot casually absorb
            it. The move is simply too strong when it is both STAB and super effective.
          </p>
          <p>
            Focus Blast-style Fighting coverage is not the point of this set, but Steam Eruption and Fighting-adjacent coverage
            logic both show why damage overflow matters. Some targets die regardless of extra investment. Others, such as
            Assault Vest or resist-berry users, survive regardless. When extra Special Attack does not change the number of
            hits needed, bulk is usually the better ranked ladder investment.
          </p>
          <p>
            Grass Knot is the exception slot because it targets specific heavy Pokemon. Against Mega Swampert, Grass Knot can
            be the difference between forcing a rain team to respect Raichu and letting Swampert run the board. If your team
            already has strong Grass or Freeze-Dry-style pressure, Encore or Volt Switch may be more valuable.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="lightning-rod-counterplay">Lightning Rod, Focus Sash Raichu, and counterplay</h2>
          <p>
            Mega Raichu Y has an awkward relationship with its own base form. Before Mega Evolution, regular Raichu can use
            Lightning Rod, which redirects Electric moves and can shut down opposing Raichu plans. That means Focus Sash
            Raichu can appear on teams as anti-Raichu tech rather than as a Mega sweeper. Players should not assume that every
            Raichu preview is Mega Raichu Y.
          </p>
          <p>
            Ground types are the other obvious answer. Pure Electric typing is efficient defensively, but it creates an
            offensive blind spot. Mega Raichu Y does not have an Ice Beam-style move that automatically deletes Ground types.
            Steam Eruption and Grass Knot help, but the Raichu player still needs positioning, partner pressure, or a pivot
            plan when Garchomp, Mega Swampert, or other Ground pressure appears.
          </p>
          <p>
            Opponents can also exploit No Guard itself. Hypnosis, high-power inaccurate attacks, and other normally risky
            options become more reliable into Raichu. The correct response is not to hide Raichu forever. It is to use Protect,
            board pressure, and speed control so the opponent cannot freely take advantage of the same ability.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="best-partners">Best partners for Mega Raichu Y</h2>
          <p>
            Mega Raichu Y works best with teammates that punish Ground types and convert paralysis into KOs. Alolan Ninetales
            style Ice pressure is useful because it threatens Ground Pokemon that block Electric damage. Rain cores can work
            because Steam Eruption pressure and Water partners make Ground types less comfortable, though the team must avoid
            becoming too passive into Grass answers.
          </p>
          <p>
            Mid-speed attackers are especially strong partners. Pokemon such as Gholdengo-style Steel attackers, Archaludon,
            and bulky offense pieces appreciate Zap Cannon paralysis because they do not need Tailwind-level speed support
            after the opponent has been slowed. Screens are also valuable because Raichu often only needs one extra turn to
            swing a game.
          </p>
          <p>
            The simplest rule is this: pair Mega Raichu Y with Pokemon that punish the targets it cannot hit cleanly. Do not
            double up on Electric attackers unless the rest of the team has a very clear Ground matchup. Two Electric Pokemon
            on the board can hand free turns to Garchomp and other Ground attackers.
          </p>

          <h2 id="final-verdict">Final verdict: should you build Mega Raichu Y?</h2>
          <p>
            Yes, Mega Raichu Y is worth building, but it should be treated as a speed-control attacker rather than a pure
            special sweeper. The best version is usually not max Special Attack. The best version is fast enough, bulky enough,
            and backed by partners that punish Ground types and Lightning Rod counterplay.
          </p>
          <p>
            If your team needs an Electric Mega that can turn one accurate Zap Cannon into a won speed-control exchange, Mega
            Raichu Y is one of the most distinctive Regulation Set M-B options. If your team only wants raw damage, other
            Megas are easier to pilot. Build around No Guard Zap Cannon, protect the fragile bulk line, and Mega Raichu Y can
            do far more than its usage rank suggests.
          </p>
        </div>
      </GuideArticleLayout>
    </article>
  );
}
