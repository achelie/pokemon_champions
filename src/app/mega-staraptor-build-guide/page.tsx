import type { Metadata } from "next";
import Image from "next/image";

import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const publishedAt = "2026-07-03";
const imageBase = "/images/guides/mega-staraptor-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Mega Staraptor Build Guide - Contrary Close Combat",
  description:
    "A high-quality Pokemon Champions Mega Staraptor build guide for Regulation Set M-B covering Contrary Close Combat, Brave Bird, Dual Wingbeat, Choice Scarf Final Gambit, EV spreads, Whimsicott and Grimmsnarl support, counters, and ranked usage.",
  path: "/mega-staraptor-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Mega Staraptor Build",
    "Pokemon Champions Mega Staraptor Guide",
    "Mega Staraptor Contrary Close Combat",
    "Pokemon Champions Mega Staraptor Moveset",
    "Pokemon Champions Staraptor Final Gambit",
    "Pokemon Champions Regulation Set M-B Staraptor",
    "Pokemon Champions Mega Staraptor EVs"
  ]
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

const figures: Figure[] = [
  {
    src: `${imageBase}/mega-staraptor-season-data.png`,
    alt: "Pokemon Champions M3 season Staraptor usage data with moves, items, ability, and nature",
    caption:
      "M3 data shows two Staraptor identities: Choice Scarf Final Gambit for regular Staraptor and Staraptorite Contrary Close Combat for Mega Staraptor."
  },
  {
    src: `${imageBase}/mega-staraptor-sets.png`,
    alt: "Pokemon Champions Staraptor and Mega Staraptor recommended sets and EV spread rankings",
    caption:
      "The main sets split cleanly between fast Final Gambit support and Mega Staraptor setups that use Contrary to turn Close Combat into defense boosts."
  },
  {
    src: `${imageBase}/mega-staraptor-offense-calcs.png`,
    alt: "Pokemon Champions Mega Staraptor offensive damage calculations",
    caption:
      "Mega Staraptor does not always start with overwhelming Attack, but team-assisted boosts turn Close Combat and Brave Bird into real knockout pressure."
  },
  {
    src: `${imageBase}/mega-staraptor-defensive-calcs.png`,
    alt: "Pokemon Champions Mega Staraptor defensive calculation chart",
    caption:
      "Mega Staraptor has respectable physical bulk, but its most dangerous weaknesses tend to come from special Electric, Ice, Psychic, and Fairy attacks."
  },
  {
    src: `${imageBase}/mega-staraptor-mega-comparison.png`,
    alt: "Pokemon Champions Staraptor and Mega Staraptor stat and ability comparison",
    caption:
      "The Mega form gains Fighting typing and Contrary, which is the real upgrade. The raw stat profile alone would not make Staraptor special."
  },
  {
    src: `${imageBase}/contrary-user-comparison.png`,
    alt: "Pokemon Champions Contrary ability users comparison including Mega Staraptor, Spinda, Serperior, Lurantis, Malamar, and Enamorus",
    caption:
      "Among Contrary users, Mega Staraptor stands out because Close Combat is STAB and boosts both defenses immediately without needing a setup trick."
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

function BuildNote({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <h3 className="text-base font-black text-champion-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </article>
  );
}

export default function MegaStaraptorBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Mega Staraptor Guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Mega Staraptor Build Guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">Contrary Close Combat for Regulation Set M-B</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Mega Staraptor is one of the most explosive new Mega Pokemon in Pokemon Champions. Its value is not just the
              stat increase. The important change is Contrary, which turns Close Combat from a drawback move into a fast
              defensive snowball while Staraptor keeps enough Speed and power to force ranked teams to answer it immediately.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Mega Staraptor build guide cover with base stats"
              width={1400}
              height={788}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Mega Staraptor build summary">
          <BuildNote
            title="Main identity"
            body="Contrary turns Close Combat into a defense and special defense boost, so every attack can make Mega Staraptor harder to remove."
          />
          <BuildNote
            title="Best support"
            body="Whimsicott Charm and Grimmsnarl Parting Shot can target your own Mega Staraptor, converting debuffs into immediate Attack boosts."
          />
          <BuildNote
            title="Main danger"
            body="Simple Beam, Worry Seed, Skill Swap, burn, Haze, and bulky Ghost types can stop the engine before it snowballs."
          />
        </section>

        <div className="prose-guide mt-10">
          <h2>Why Mega Staraptor is suddenly everywhere</h2>
          <p>
            Staraptor used to be a narrow pick. Regular Staraptor was mostly a Choice Scarf Final Gambit Pokemon: Intimidate
            the field, trade its large HP total into one target, then let a teammate set Trick Room or start an offensive
            sequence. That role still exists, but Mega Staraptor changes the question. Instead of asking whether Staraptor
            can trade one for one, Regulation Set M-B now asks whether the opponent can stop Contrary before it takes over.
          </p>
          <p>
            The early ladder data explains the hype. Close Combat appears as the defining move, Staraptorite dominates the
            item chart, and Jolly is the default nature. Players are using Mega Staraptor because it compresses offense,
            setup, and bulk into one slot. If it gets one free turn, the next turn is often much harder for the opponent.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2>Regular Staraptor still has a real job</h2>
          <p>
            Before covering the Mega build, it is important to separate the two Staraptor roles. Regular Staraptor can still
            run Choice Scarf Final Gambit with Intimidate. With full HP investment, it reaches 192 HP, which lets Final
            Gambit remove or heavily damage many common targets. That makes it useful next to Trick Room setters and teams
            that want a clean early trade.
          </p>
          <p>
            The regular set usually wants Choice Scarf, Final Gambit, Brave Bird, Close Combat, and U-turn. It is direct,
            disposable, and easy to understand. Mega Staraptor is different. It wants to stay on the field, stack boosts,
            and force opponents to spend specific counterplay rather than normal damage into it.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2>Recommended Mega Staraptor moveset</h2>
          <p>
            The standard Mega Staraptor moveset starts with Protect, Close Combat, and a Flying STAB move. Close Combat is
            mandatory because Contrary flips the defense drops into boosts. Protect is mandatory because Staraptor draws
            Electric, Ice, Psychic, Fairy, burn, and ability-control pressure as soon as it appears. The Flying slot is the
            main choice: Brave Bird gives maximum immediate damage, while Dual Wingbeat avoids recoil and can break Focus
            Sash on targets such as Whimsicott and Sneasler.
          </p>
          <p>
            The last slot depends on the team. Roost fits bulkier plans that expect Staraptor to sit on the field after
            multiple defense boosts. U-turn fits regular Scarf Staraptor more than Mega Staraptor, but it can still appear
            on teams that want a pivot option before committing the Mega turn. Flame Kick exists as a tech into Ghost and
            Steel answers such as Gholdengo, but most teams should solve those matchups with partners instead of sacrificing
            a core slot.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2>How Contrary turns Close Combat into a win condition</h2>
          <p>
            Contrary is the entire reason Mega Staraptor works. Close Combat normally lowers Defense and Special Defense.
            On Mega Staraptor, each use raises both defenses. That means the first attack is not just damage. It is also
            setup. If Staraptor survives the first exchange, the opponent often needs special super-effective damage, burn,
            Haze, ability removal, or a Ghost type to stop it from becoming too bulky.
          </p>
          <p>
            This is why Mega Staraptor is stronger than most other Contrary users in Pokemon Champions. Malamar and Lurantis
            can boost with Superpower. Serperior can boost with Leaf Storm. Mega Staraptor gets STAB Close Combat, immediate
            Speed, and strong Flying coverage on the same set. It does not need to pass an ability or spend a turn creating
            the engine. It attacks and boosts at the same time.
          </p>
        </div>

        <ArticleFigure figure={figures[5]} />

        <div className="prose-guide">
          <h2>EV direction: Speed first, then HP or Attack</h2>
          <p>
            Mega Staraptor should usually start with Jolly and heavy Speed investment. The SRT source is clear on this point:
            a slow Mega Staraptor that waits to attack loses much of the value of Contrary. Acting first means Close Combat
            can raise defenses before the opponent hits back. After Speed, there are two main directions.
          </p>
          <p>
            The bulky version invests heavily in HP, reaching the same 192 HP benchmark that regular Final Gambit Staraptor
            uses. This makes the first Close Combat safer and gives Roost sets more room to play. The offensive version
            moves points from HP into Attack so partner boosts convert into guaranteed KOs. If Whimsicott uses Charm on
            Mega Staraptor, Contrary turns it into a +2 Attack boost. If Grimmsnarl uses Parting Shot into its own partner,
            Mega Staraptor receives an Attack boost instead of a drop.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2>Damage benchmarks and Flying move choice</h2>
          <p>
            Unboosted Mega Staraptor is not as strong as the hype can make it sound. With minimal Attack investment, it can
            miss clean KOs on bulky Incineroar-style targets, Poltchageist-style bulky pivots, and other defensive Pokemon.
            Once it receives a boost, the picture changes quickly. +1 or +2 Attack turns Close Combat and Brave Bird into
            serious knockout threats because both are high-base-power STAB attacks.
          </p>
          <p>
            Brave Bird is the damage option. If your team is built to boost Staraptor and end games quickly, Brave Bird is
            usually correct. Dual Wingbeat is the safer utility option. It avoids recoil and can punish Focus Sash support
            Pokemon. The tradeoff is simple: Brave Bird wins damage races, while Dual Wingbeat reduces self-damage and gives
            better anti-sash utility.
          </p>
        </div>

        <div className="prose-guide">
          <h2>What actually threatens Mega Staraptor?</h2>
          <p>
            Mega Staraptor has useful physical bulk after one Close Combat, but its weaknesses mostly line up with special
            attackers. Electric, Ice, Psychic, and Fairy attacks are the most important damage types to respect. Mega Raichu
            Y Zap Cannon, Archaludon Electro Shot, Sylveon Hyper Voice, Mega Charizard Y Weather Ball, Gardevoir Moonblast,
            and similar special hits can force Staraptor into defensive play or remove it before the snowball starts.
          </p>
          <p>
            Ability control is just as important as raw damage. Simple Beam, Worry Seed, Skill Swap, and similar tools can
            remove Contrary or overwrite it. Whimsicott using Worry Seed, Meowstic-style Skill Swap lines, and other ability
            disruption can turn Mega Staraptor back into a normal attacker. Burn also cuts its damage, while Haze removes
            accumulated boosts. Ghost types such as Gholdengo, Aegislash, and Poltchageist-style picks can block Close
            Combat pressure and force the Flying move or a partner to do the real work.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2>Best partners for Mega Staraptor</h2>
          <p>
            Mega Staraptor wants partners that either boost it through Contrary or remove the Pokemon that stop Close Combat.
            Whimsicott is the cleanest support because Prankster Charm becomes +2 Attack for Mega Staraptor. Grimmsnarl can
            use Parting Shot to create a similar boost line while also providing screens. Garchomp is a natural partner
            because Staraptor is immune to Earthquake and can pressure Grass, Fighting, and Bug targets that try to slow
            the field down.
          </p>
          <p>
            The rest of the team should cover special attackers and Ghost or Steel answers. Dark and Fire pressure help
            against Gholdengo and Aegislash. Electric checks help against Mega Raichu Y and Rotom-style pressure. Fairy
            answers matter because Sylveon and Gardevoir can punish Staraptor before it stacks enough defensive boosts.
          </p>

          <h2>Final verdict: is Mega Staraptor worth building?</h2>
          <p>
            Yes. Mega Staraptor is one of the most important Regulation Set M-B Mega Pokemon because it turns one of the
            best drawback moves in the game into a scaling defensive engine. It is not automatic, and players should expect
            opponents to bring Worry Seed, Simple Beam, Skill Swap, burn, Haze, Ghost types, and special Fairy or Electric
            pressure. But if the team supports it correctly, Contrary Close Combat makes Mega Staraptor one of the fastest
            snowball threats in Pokemon Champions.
          </p>
        </div>
      </div>
    </article>
  );
}
