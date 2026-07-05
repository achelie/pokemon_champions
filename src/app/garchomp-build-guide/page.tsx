import type { Metadata } from "next";
import Image from "next/image";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const publishedAt = "2026-07-02";
const imageBase = "/images/guides/garchomp-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Garchomp Build Guide - Life Orb Ranked Moveset",
  description:
    "A high-quality Pokemon Champions Garchomp build guide for Regulation Set M-B covering Life Orb, Rough Skin, Dragon Claw, Earthquake, Rock Slide, EV spreads, damage benchmarks, Flying or Levitate partners, and why Mega Garchomp is usually worse.",
  path: "/garchomp-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Garchomp Build",
    "Pokemon Champions Garchomp Guide",
    "Pokemon Champions Garchomp Moveset",
    "Garchomp Life Orb Ranked Moveset",
    "Pokemon Champions Regulation Set M-B Garchomp",
    "Pokemon Champions Garchomp EVs",
    "Pokemon Champions Mega Garchomp"
  ]
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

const figures: Figure[] = [
  {
    src: `${imageBase}/garchomp-regulation-mb-usage.png`,
    alt: "Pokemon Champions Regulation Set M-B usage rankings showing Garchomp at number one",
    caption:
      "Across the first three seasons, Garchomp moved from second to second to first in usage, making it the most stable physical attacker in Regulation Set M-B."
  },
  {
    src: `${imageBase}/garchomp-m3-season-data.png`,
    alt: "Pokemon Champions M3 season Garchomp usage data with moves, items, abilities, and natures",
    caption:
      "M3 data points to a clear identity: Life Orb is the main item, Rough Skin is the default ability, and Jolly is the most common nature."
  },
  {
    src: `${imageBase}/garchomp-build-options.png`,
    alt: "Pokemon Champions Garchomp build options with EV spreads and move alternatives",
    caption:
      "The standard move structure is almost fixed, but Rock Slide can become Rock Tomb, Poison Jab, or Stomping Tantrum when the team needs a specific answer."
  },
  {
    src: `${imageBase}/garchomp-offense-calcs.png`,
    alt: "Pokemon Champions Garchomp offensive damage calculations with Life Orb benchmarks",
    caption:
      "Life Orb solves two major damage problems: Garchomp mirrors and bulky Mega Charizard Y rolls that Rock Slide can otherwise miss."
  },
  {
    src: `${imageBase}/garchomp-defensive-benchmarks.png`,
    alt: "Pokemon Champions Garchomp defensive benchmark chart for physical and special attacks",
    caption:
      "Defensive benchmarks show why Garchomp is sturdy for an attacker, but also why Ice, Dragon, and Fairy pressure still needs respect."
  },
  {
    src: `${imageBase}/garchomp-typing-coverage.png`,
    alt: "Pokemon Champions Garchomp Dragon and Ground typing coverage chart",
    caption:
      "Dragon plus Ground coverage is excellent into the current field, but Fairy and Steel-adjacent matchups still force careful fourth-slot and partner choices."
  },
  {
    src: `${imageBase}/garchomp-mega-comparison.png`,
    alt: "Pokemon Champions Garchomp and Mega Garchomp stat comparison",
    caption:
      "Mega Garchomp gains bulk and raw Attack, but the Speed loss and locked Mega Stone usually make regular Life Orb Garchomp the better ranked choice."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "why-garchomp-rank-one", title: "Why Garchomp is rank one" },
  { id: "life-orb-rough-skin", title: "Life Orb plus Rough Skin" },
  { id: "recommended-moveset", title: "Recommended moveset" },
  { id: "regular-vs-mega", title: "Regular vs Mega Garchomp" },
  { id: "damage-benchmarks", title: "Damage benchmarks" },
  { id: "ev-direction", title: "EV direction" },
  { id: "typing-coverage", title: "Typing and coverage" },
  { id: "best-teammates", title: "Best teammates" },
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

export default function GarchompBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Garchomp Guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Garchomp Build Guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">Life Orb Ranked Moveset for Regulation Set M-B</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Garchomp is the most reliable physical attacker in the current Pokemon Champions Regulation Set M-B ladder.
              It combines a nearly perfect stat spread, broad Dragon and Ground coverage, Rough Skin punishment, and Life
              Orb damage that fixes several key KO ranges without giving up its 102 Speed tier.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Garchomp build guide cover with base stats"
              width={1400}
              height={788}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Garchomp build summary">
          <BuildNote
            title="Best default item"
            body="Life Orb is the practical Mega Stone for regular Garchomp: it raises real damage while preserving its important Speed tier."
          />
          <BuildNote
            title="Core moves"
            body="Protect, Dragon Claw, Earthquake, and Rock Slide form the baseline set, with Rock Tomb, Poison Jab, and Stomping Tantrum as team-specific swaps."
          />
          <BuildNote
            title="Team rule"
            body="Every serious Garchomp team needs at least one Flying or Levitate partner so Earthquake does not lock your own side into Protect."
          />
        </section>

        <div className="prose-guide mt-10">
          <h2 id="why-garchomp-rank-one">Why Garchomp is rank one in Pokemon Champions</h2>
          <p>
            Garchomp has been one of the most stable Pokemon Champions picks across the first three seasons. The usage trend
            is the main reason this guide treats it as a top-tier ranked staple: second in season one, second in season two,
            and first in the current Regulation Set M-B data. Other physical attackers have moved up and down, but Garchomp
            has stayed useful because it asks very little from the builder and gives back immediate pressure.
          </p>
          <p>
            Its base stats explain the consistency. Garchomp has 108 HP, 130 Attack, 95 Defense, 85 Special Defense, and
            102 Speed. The only wasted stat is Special Attack. In practice, that means a huge amount of its 600 base stat
            total is placed exactly where a ranked physical attacker wants it: bulk, Speed, and Attack.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="life-orb-rough-skin">The best Garchomp build: Life Orb plus Rough Skin</h2>
          <p>
            The current M3 season data is direct: Life Orb is the dominant item, Rough Skin is the default ability, and
            Jolly is the preferred nature. That combination is not random. Garchomp needs the Life Orb boost because its
            strongest common attacks are not actually high-base-power nukes. Dragon Claw is reliable but only 80 base power.
            Earthquake is strong on paper, but in doubles it is spread damage. Rock Slide is also spread damage and is often
            chosen for coverage rather than raw power.
          </p>
          <p>
            Rough Skin is not a flashy ability, but it is valuable in the exact games where opponents try to trade into
            Garchomp with contact moves. Fake Out, Extreme Speed, Close Combat-style pressure, and multi-hit contact moves
            can all take chip in return. That chip can break Focus Sash, push opponents into Dragon Claw range, and punish
            physical attackers that would otherwise treat Garchomp as a clean target.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2 id="recommended-moveset">Recommended Garchomp moveset</h2>
          <p>
            The safest ranked Garchomp moveset is Protect, Dragon Claw, Earthquake, and Rock Slide. Protect is necessary
            because Garchomp draws Ice, Fairy, and Dragon attacks immediately. Dragon Claw is the stable Dragon STAB and
            the mirror-match button. Earthquake is the reason to build around Garchomp in doubles. Rock Slide covers Flying
            targets, especially Mega Charizard Y, and gives Garchomp a way to threaten opponents that avoid Earthquake.
          </p>
          <p>
            The fourth slot is where team context matters. Rock Tomb can replace Rock Slide when Wide Guard is a major
            concern or when single-target speed control is more important than spread chip. Poison Jab is the cleanest
            coverage move into Fairy targets such as Sylveon and Gardevoir-style answers. Stomping Tantrum gives a
            single-target Ground attack when Earthquake would punish your own side too hard. Swords Dance is tempting,
            but the standard set rarely has room for it.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="regular-vs-mega">Why regular Garchomp is usually better than Mega Garchomp</h2>
          <p>
            Mega Garchomp looks attractive because the stat total jumps and the Attack number rises, but Pokemon Champions
            ranked games care about what the Mega Stone costs. Regular Garchomp can hold Life Orb, which gives immediate
            damage without dropping below the critical 100 Speed area. Mega Garchomp loses Speed and becomes easier for
            Charizard, fast utility, and many mid-speed offensive Pokemon to punish.
          </p>
          <p>
            The comparison is simple: if a Mega form does not add a decisive ability, decisive typing change, or decisive
            Speed profile, locking the item slot is expensive. Garchomp already has the stat spread it wants. Life Orb
            amplifies that spread better than Mega Garchomp does in most Regulation Set M-B teams.
          </p>
        </div>

        <ArticleFigure figure={figures[6]} />

        <div className="prose-guide">
          <h2 id="damage-benchmarks">Important damage benchmarks</h2>
          <p>
            Life Orb matters most in two matchups. First, Garchomp mirrors become much cleaner: Jolly Dragon Claw from a
            Life Orb Garchomp is the kind of damage that can remove opposing Garchomp instead of leaving it barely alive.
            Second, Rock Slide becomes much more reliable into bulky Mega Charizard Y. Without Life Orb, Rock Slide can miss
            important KO ranges even when the hit is four times effective.
          </p>
          <p>
            The same chart also shows the ceiling. Even with Life Orb, Earthquake and Stomping Tantrum do not always delete
            bulky Incineroar or Kingambit-style targets. That is the tradeoff of Garchomp: the coverage is broad and the
            floor is high, but the actual move power is not the same as a dedicated nuke. Treat Garchomp as a consistent
            pressure piece, not as a button that removes every bulky Pokemon by itself.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="ev-direction">EV direction and defensive benchmarks</h2>
          <p>
            The cleanest starting point is Jolly with enough Speed to win relevant Garchomp mirrors and enough Attack to
            reach the Life Orb benchmarks your team needs. The source material uses 32 Attack EVs as a common offensive
            benchmark, but the broader lesson is not that every team must copy one exact spread. The lesson is that each
            point should serve a matchup.
          </p>
          <p>
            Garchomp is bulkier than most attackers, so defensive investment can matter. It can survive many neutral hits,
            but it should not be asked to casually absorb strong Ice, Dragon, or Fairy attacks. When calculating bulk, do
            not chase a perfect 100 percent survival roll unless the matchup requires it. Many competitive EV spreads accept
            a low knockout chance and spend the saved points on Speed or damage.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="typing-coverage">Typing, coverage, and what Garchomp cannot hit cleanly</h2>
          <p>
            Dragon plus Ground is one of the strongest coverage packages in Pokemon Champions. Garchomp pressures Fire,
            Electric, Poison, Rock, Dragon, and Steel targets while resisting Fire, Poison, and Rock and ignoring Electric
            attacks entirely. Add Rock Slide and the list of true defensive blind spots becomes very small.
          </p>
          <p>
            The problem is not coverage on paper. The problem is specific defensive answers. Fairy combinations, Flying and
            Steel structures, and Pokemon such as Whimsicott, Corviknight, Togekiss, and Ribombee can force awkward turns.
            That is why Poison Jab, Rock Tomb, and partner damage are real build decisions rather than cosmetic options.
          </p>
        </div>

        <ArticleFigure figure={figures[5]} />

        <div className="prose-guide">
          <h2 id="best-teammates">Best teammates for Garchomp</h2>
          <p>
            Garchomp teams should start with one rule: include at least one Flying or Levitate partner. Earthquake is too
            important to make every turn depend on your own partner clicking Protect. Charizard-style Flying Megas,
            Aerodactyl-style Flying pressure, Levitate users, and bulky partners that do not mind Earthquake chip all make
            Garchomp easier to pilot.
          </p>
          <p>
            The partner also needs to cover Garchomp weaknesses. Fairy answers help against Sylveon, Gardevoir, and
            Whimsicott. Steel or Fire pressure helps remove Ice and Fairy pivots. Speed control is useful because Garchomp
            is fast, but not untouchable. If the team can keep Garchomp attacking while the partner avoids Earthquake damage,
            the ranked game becomes much easier.
          </p>

          <h2 id="final-verdict">Final verdict: should you build Garchomp?</h2>
          <p>
            Yes. If you play ranked Regulation Set M-B, your box should have a serious Garchomp build. It is not flawless:
            the move power is lower than the usage ranking suggests, Mega Garchomp is usually a trap, and Ice, Fairy, and
            Dragon pressure can remove it quickly. But regular Life Orb Garchomp is still one of the best all-purpose
            physical attackers in Pokemon Champions because it compresses Speed, damage, coverage, and Rough Skin utility
            into one slot.
          </p>
        </div>
      </GuideArticleLayout>
    </article>
  );
}
