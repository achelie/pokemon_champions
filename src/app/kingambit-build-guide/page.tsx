import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const publishedAt = "2026-07-05";
const imageBase = "/images/guides/kingambit-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Kingambit Build Guide - Defiant Sucker Punch",
  description:
    "A complete Pokemon Champions Kingambit build guide for Regulation Set M-B, covering Defiant, Sucker Punch, Kowtow Cleave, Iron Head, Low Kick, Black Glasses, Chople Berry, Focus Sash, EVs, damage benchmarks, teammates, and counterplay.",
  path: "/kingambit-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Kingambit Build",
    "Pokemon Champions Kingambit Guide",
    "Kingambit Defiant Sucker Punch",
    "Pokemon Champions Regulation Set M-B Kingambit",
    "Pokemon Champions Kingambit EVs",
    "Pokemon Champions Kingambit Chople Berry",
    "Pokemon Champions Kingambit Black Glasses"
  ]
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
};

const figures: Figure[] = [
  {
    src: `${imageBase}/kingambit-usage-ranking.png`,
    alt: "Pokemon Champions Regulation Set M-B usage ranking showing Kingambit at rank five",
    caption:
      "Kingambit has stayed near the top of the early Regulation Set M-B ladder: fourth, third, and fifth across the first three usage snapshots."
  },
  {
    src: `${imageBase}/kingambit-stats-triangle.png`,
    alt: "Pokemon Champions Kingambit base stats, typing, abilities, and Sneasler Basculegion triangle chart",
    caption:
      "The source material frames Kingambit as one point of an offensive triangle with Sneasler and Basculegion, while its Dark and Steel typing gives it a huge resistance map."
  },
  {
    src: `${imageBase}/kingambit-m3-data.png`,
    alt: "Pokemon Champions M3 season Kingambit moves, items, ability, and nature data",
    caption:
      "The M3 data is almost rude in how clear it is: Sucker Punch and Kowtow Cleave are everywhere, Defiant is the ability, and Adamant is the normal nature."
  },
  {
    src: `${imageBase}/kingambit-sets.png`,
    alt: "Pokemon Champions Kingambit recommended Black Glasses, Chople Berry, and Focus Sash sets",
    caption:
      "The main sets split by item. Black Glasses leans into Dark damage, Chople Berry buys a turn into Fighting coverage, and Focus Sash can run four attacks."
  },
  {
    src: `${imageBase}/kingambit-offense-calcs.png`,
    alt: "Pokemon Champions Kingambit offensive damage calculations for Sucker Punch, Low Kick, and Iron Head",
    caption:
      "Kingambit is not only a late-game cleaner. Low Kick fixes the mirror and Incineroar matchup, while Iron Head makes Fairy types think twice before switching in."
  },
  {
    src: `${imageBase}/kingambit-defense-calcs.png`,
    alt: "Pokemon Champions Kingambit defensive calculations with Chople Berry against Fighting coverage",
    caption:
      "Chople Berry does not make Kingambit immortal, but it changes several common Fighting hits from a clean KO into a playable trade."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "why-kingambit-matters", title: "Why Kingambit matters" },
  { id: "stats-and-typing", title: "Stats and typing" },
  { id: "iron-triangle", title: "The iron triangle" },
  { id: "ability-choice", title: "Ability choice" },
  { id: "item-choice", title: "Item choice" },
  { id: "moveset", title: "Recommended moveset" },
  { id: "evs-and-nature", title: "EVs and nature" },
  { id: "offensive-benchmarks", title: "Offensive benchmarks" },
  { id: "defensive-benchmarks", title: "Defensive benchmarks" },
  { id: "teammates", title: "Best teammates" },
  { id: "counterplay", title: "How to beat Kingambit" },
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
        width={1672}
        height={941}
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

export default function KingambitBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Kingambit Guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Kingambit Build Guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">Defiant Sucker Punch for Regulation Set M-B</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Kingambit is the kind of Pokemon that makes a match feel unfair even when it is not actually cheating. It is slow, obvious,
              and weak to Fighting. Then it sits there with 100 HP, 135 Attack, 120 Defense, eleven useful defensive traits, and a 70
              base power priority move that suddenly deletes the target you thought was safe.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Kingambit build guide cover with base stats"
              width={1672}
              height={941}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Kingambit build summary">
          <BuildNote
            title="Main identity"
            body="Defiant punishes Intimidate and Parting Shot lines, so opponents cannot lower Kingambit's damage without risking a bigger Sucker Punch."
          />
          <BuildNote
            title="Best default plan"
            body="Adamant with HP and Attack investment is the clean starting point. Only add Speed when you know the mirror benchmark you want."
          />
          <BuildNote
            title="Main warning"
            body="Four-times Fighting weakness is real. Chople Berry helps, but Adamant Sneasler and Fairy Aura Mega Floette can still blow it up."
          />
        </section>

        <div className="prose-guide mt-10">
          <h2 id="why-kingambit-matters">Why Kingambit matters in Pokemon Champions</h2>
          <p>
            Kingambit is not a cute ladder fad. The source usage snapshot puts it fifth in the current Regulation Set M-B list, behind
            Garchomp, Basculegion, Whimsicott, and Sinistcha. Across the first three early season snapshots, it appears as fourth, third,
            and fifth. That is not random noise. That is a Pokemon sitting in the room every serious team has to account for.
          </p>
          <p>
            The annoying part is that Kingambit is easy to understand and still hard to play around. You know it wants Sucker Punch.
            You know it wants Kowtow Cleave. You know Defiant is sitting there waiting for an Intimidate or Parting Shot mistake. And
            you still have to take the turn. If you attack, Sucker Punch may pick you off. If you do not attack, Kingambit may click
            Swords Dance, Protect, or a clean coverage move. That little guessing game is where it earns games.
          </p>
          <p>
            The source video calls it part of the early physical attacker group with Garchomp, Basculegion, Sneasler, and Incineroar.
            That description is blunt, but it is useful. These are not delicate Pokemon that need five turns of babysitting. They come
            in, force a trade, and punish you if your answer is even a little bit late. Kingambit is the slowest of that group, but
            priority and bulk let it ignore a lot of normal speed rules.
          </p>
          <p>
            That is the first lesson. Do not judge Kingambit by Speed alone. Base 50 Speed looks ugly until Trick Room goes up, until
            Tailwind ends, until a faster attacker gets chipped into Sucker Punch range, or until the opponent realizes their Intimidate
            user cannot safely enter. Kingambit plays a different game. It is not trying to win every speed tie. It is trying to make
            the last 40 percent of your HP bar feel like a trap door.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="stats-and-typing">Stats and typing: 550 total, very little waste</h2>
          <p>
            Kingambit&apos;s base stats are the reason the whole package works: 100 HP, 135 Attack, 120 Defense, 60 Special Attack,
            85 Special Defense, and 50 Speed. The 60 Special Attack is the only obviously wasted part. Everything else goes exactly
            where a slow physical closer wants it. HP is high. Attack is high. Defense is high. Special Defense is good enough that
            you do not get to call it frail with a straight face.
          </p>
          <p>
            The source makes a nice point here: if you ignore Special Attack and do not care much about Speed, Kingambit&apos;s useful stat
            budget is absurd. HP, Attack, Defense, and Special Defense carry the build. It is the same kind of stat logic that makes
            bulky physical attackers so irritating. They do not need to be elegant. They just need to live one hit and hit back hard
            enough that the next hit is priority.
          </p>
          <p>
            Dark and Steel is also a nasty defensive mix. Kingambit has three weaknesses: Fire, Fighting, and Ground. Fighting is the
            big one because it is a four-times weakness. That sounds fatal, and sometimes it is. The catch is that Kingambit also has
            a huge pile of resistances and two immunities. It resists Normal, Grass, Ice, Flying, Rock, Ghost, Dragon, Dark, and Steel,
            while ignoring Poison and Psychic. That is a lot of free switch-in texture for one slot.
          </p>
          <p>
            Offensively, Dark plus Steel hits plenty of important targets. Psychic and Ghost Pokemon hate the Dark moves. Fairy, Ice,
            and Rock targets do not enjoy Iron Head. The blind spots are not many, but they are loud. Water/Fighting Urshifu, Fire/Dark
            Incineroar or Chi-Yu style targets, Electric/Fighting Iron Hands, Steel/Fighting Zamazenta, and the Dark/Steel mirror all
            make the source list for a reason. There are not many of them, but the ones that exist are not exactly hiding in low ladder.
          </p>
          <p>
            That is why Kingambit can feel both broken and fair. Into the wrong board, it looks like a wall with a sword. Into strong
            Fighting, Fire, or Ground pressure, it suddenly has to play honest Pokemon. The build goal is not to remove every flaw. The
            build goal is to make the opponent spend the correct answer at the correct time. Miss that timing, and Kingambit starts
            collecting the endgame.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2 id="iron-triangle">The iron triangle: Kingambit, Sneasler, and Basculegion</h2>
          <p>
            One of the best ideas in the source material is the early format triangle. Kingambit, Sneasler, and Basculegion keep running
            into each other because they trade into each other so cleanly. Sneasler threatens Kingambit with Close Combat. Kingambit
            threatens Basculegion with Sucker Punch. Basculegion threatens Sneasler with Wave Crash. None of this is subtle. It is a
            street fight with type icons.
          </p>
          <p>
            This matters for team building because you cannot treat Kingambit as a random closer. It is part of the way Regulation Set
            M-B teams pressure each other. If your team already uses Basculegion, Kingambit gives you a way to punish opposing Psychic
            and Ghost pressure while also threatening enemy Basculegion. If your team struggles with Sneasler, Kingambit is not the
            answer by itself. You need the board to be softened, protected, or redirected before you ask it to survive Fighting damage.
          </p>
          <p>
            The Dark, Fighting, and Psychic loop also shows up defensively. Dark beats Psychic. Psychic beats Fighting. Fighting beats
            Dark. The source compares that loop to Fire, Water, and Grass, which is a little funny because it sounds like starter-school
            basics, but it is useful. Many Pokemon Champions teams are doing a sharper version of that same old triangle. They just do
            it with priority, Close Combat, and enough damage to end the turn immediately.
          </p>
          <p>
            The mistake is building Kingambit like it lives outside that triangle. It does not. If the opponent has Sneasler, you have
            to know whether Chople Berry saves you, whether Focus Sash changes the trade, or whether your partner can remove Sneasler
            before the Close Combat turn. If the opponent has Basculegion, you have to know whether Sucker Punch is a KO or just chip.
            If the opponent has Farigiraf or Psychic Terrain style priority control, you need a plan that is not just mashing Sucker
            Punch and hoping the game is polite.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="ability-choice">Ability choice: use Defiant unless you have a very weird reason not to</h2>
          <p>
            Defiant is the default Kingambit ability for a simple reason: Pokemon Champions is full of stat drops. Intimidate, Parting
            Shot, and other debuff lines are normal tools, not exotic tech. A physical attacker that punishes those lines changes the
            opponent&apos;s first two turns. Incineroar cannot casually enter and lower Attack. A Parting Shot user cannot always pivot out
            for free. Even when Kingambit does not get the boost, the threat of the boost shapes the turn.
          </p>
          <p>
            The M3 data backs that up. Defiant sits around 89 percent usage in the source image. Supreme Overlord sits around 10 percent,
            and Pressure barely registers. That is about as close to a public vote as you get. Players are not confused. They want the
            anti-drop ability because Kingambit&apos;s damage is already high and because giving it more Attack is how games get stupid.
          </p>
          <p>
            Supreme Overlord is not useless, but it is slow. The source is pretty harsh about it: one fainted ally gives only 10 percent
            extra move power, and even three fainted allies only reach 30 percent. That is basically Life Orb territory, but you had to
            lose most of your team to get there. In a six-on-six cartridge format that might read differently. In a fast Pokemon Champions
            match, waiting for allies to fall before your ability matters is a luxury. Kingambit is already dangerous now. Defiant helps
            now.
          </p>
          <p>
            Pressure is the cute option that almost nobody needs. PP pressure is not the reason to use Kingambit. If you want a Dark/Steel
            attacker that forces bad Intimidate turns, use Defiant. If you are building some late-late-game gimmick where Kingambit always
            enters after multiple allies faint, Supreme Overlord can be tested. For most ranked teams, that is just making the good Pokemon
            worse because you got bored.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="item-choice">Item choice: Black Glasses, Chople Berry, Focus Sash, and Life Orb</h2>
          <p>
            Kingambit is hard to read at team preview because several items are real. Black Glasses is the clean damage item. The source
            data puts it at roughly 33 percent, just ahead of Chople Berry at 32 percent. That split tells you the format is not settled
            on one perfect item. Some players want the stronger Dark damage. Some players want to survive Fighting coverage that should
            have removed Kingambit from the board.
          </p>
          <p>
            Black Glasses makes the scary thing scarier. Sucker Punch and Kowtow Cleave are already STAB moves. Add a 1.2 multiplier
            and suddenly the opponent&apos;s &quot;I can live one&quot; math gets ugly. It is especially good on Swords Dance sets because the item
            keeps the focus narrow: click Dark moves, pressure the endgame, and make every chipped attacker wonder whether it still gets
            to move.
          </p>
          <p>
            Chople Berry is the practical item when the room is full of Fighting coverage. It does not erase the four-times weakness.
            Please do not read it that way. What it does is turn a bunch of common Fighting hits into uncomfortable rolls or survivable
            trades. Against a Jolly Sneasler line, Mega Blastoise Aura Sphere, Mega Raichu Y Focus Blast, Kommo-o Aura Sphere, and many
            Low Kick users, Chople can be the difference between &quot;Kingambit disappeared&quot; and &quot;Kingambit lived, and now somebody has a
            problem.&quot;
          </p>
          <p>
            Focus Sash is the greedy but honest item. It usually drops Protect and runs four attacks, because the whole point is that
            Sash gives the emergency turn. Sucker Punch, Kowtow Cleave, Iron Head, and Low Kick make sense here. You are not trying to
            play a long defensive dance. You are trying to guarantee that Kingambit gets one meaningful action even into a bad lead.
          </p>
          <p>
            Life Orb appears in the data at about 10 percent. It is fine, but it is not as neat as Black Glasses or Chople Berry. Life
            Orb boosts everything and helps Iron Head or Low Kick ranges, but recoil is real on a Pokemon that wants to sit at exactly
            the right HP number. Occa Berry also appears as a small Fire-resist option. If your team already handles Fighting well but
            hates Fire, Occa is not crazy. It is just more matchup-specific.
          </p>
          <p>
            The quick rule is simple. Start Black Glasses if your team already protects Kingambit from Fighting. Start Chople Berry if
            you need Kingambit to stay on the field into Sneasler, Focus Blast, or Low Kick pressure. Start Focus Sash if your game plan
            is four attacks and guaranteed participation. Do not pick the item because it looks clever. Pick the item because it changes
            one real matchup.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="moveset">Recommended Kingambit moveset</h2>
          <p>
            The move data is brutally clear. Sucker Punch sits around 98 percent usage. Kowtow Cleave sits around 95 percent. Iron Head
            sits around 82 percent. Protect sits around 68 percent. Low Kick sits around 34 percent. After that, Swords Dance, Brick
            Break, Low Sweep, Poison Jab, and Stone Edge become smaller choices. In plain English: most Kingambit sets start with Sucker
            Punch and a reliable Dark attack, then decide how much coverage and safety they need.
          </p>
          <p>
            Sucker Punch is the reason opponents hate playing into Kingambit. It is 70 base power, gets STAB, and acts before normal
            attacks if the target is attacking. This is not Quick Attack chip. This is real priority damage. Once a target is in yellow
            HP, Kingambit can turn the whole board into a guessing game. Attack and risk Sucker Punch, or do something passive and let
            Kingambit take a better position.
          </p>
          <p>
            Kowtow Cleave is the stable Dark STAB. It is stronger than Sucker Punch when priority is not needed and, more importantly,
            it does not care whether the opponent attacks. If Knock Off is available and its item-removal boost applies, it becomes a
            serious alternative because the boosted hit can outdamage plain Kowtow Cleave while also removing the opponent&apos;s item. If
            the item interaction is not available or you need reliability, Kowtow Cleave is the boring answer, and boring answers win
            plenty of ranked games.
          </p>
          <p>
            Iron Head is not optional for most builds. Fairy types are everywhere in the source notes: Sylveon, Mega Floette, Gardevoir-style
            pressure, and other Fairy answers all want to punish Dark teams. Iron Head keeps them honest. It also gives Kingambit a
            neutral Steel hit into several Pokemon that do not care about Dark. The damage chart shows Sylveon and Mega Floette taking
            scary ranges from Iron Head, which means they are not free switch-ins.
          </p>
          <p>
            Low Kick is the move that stops Kingambit from being bullied by Incineroar and the mirror. The move scales by target weight,
            and Kingambit itself weighs 120 kg, putting mirror Low Kick at a very useful power tier. Into the mirror, Fighting is four-times
            effective, so Low Kick becomes a clean KO line. Into Incineroar, it is still a strong two-hit line and can punish the opponent
            for assuming Kingambit only has Dark and Steel moves.
          </p>
          <p>
            Protect is the difference between a normal Kingambit and a Kingambit that can actually play doubles. If you are holding Black
            Glasses or Chople Berry, Protect is hard to cut. Kingambit draws Fighting, Fire, Ground, burn, Encore, speed control, and
            fake-out-style pressure. Protect buys the turn where your partner removes the threat or pushes a target into Sucker Punch
            range. Focus Sash sets can skip Protect more often because Sash is the safety button, but that choice makes the set more direct
            and easier to punish after Sash breaks.
          </p>
          <p>
            Swords Dance belongs mostly on Black Glasses sets. If Kingambit gets a free turn, Sucker Punch goes from &quot;dangerous&quot; to
            &quot;please stop clicking buttons near me.&quot; The problem is finding that turn. You need Protect pressure, redirection, forced
            switches, or an opponent who is too scared of Sucker Punch to attack. That does happen. It is also how Kingambit steals games
            that looked stable ten seconds earlier.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="evs-and-nature">EVs and nature: Adamant, HP, Attack, then only enough Speed</h2>
          <p>
            Kingambit&apos;s EV spread is refreshingly boring. The source data says the common spreads mostly invest in HP and Attack. That
            makes sense. You are not trying to turn a base 50 Pokemon into a speed demon. You are trying to make a 135 Attack Pokemon
            hit as hard as possible while keeping enough bulk to use its resistances, item, and priority.
          </p>
          <p>
            Adamant is the normal nature, and the M3 chart puts it around 83 percent. Brave appears around 12 percent for Trick Room
            ideas. Jolly barely exists. The source is blunt on this point: do not get cute with Jolly just because Speed is a stat on
            the screen. If you want a fast attacker, use a fast attacker. Kingambit&apos;s job is to hit hard, survive the first exchange,
            and then use priority or Trick Room awkwardness to finish the job.
          </p>
          <p>
            The baseline spread from the set image is 32 HP EVs and 32 Attack EVs in the local display system, often with tiny defensive
            or Speed adjustments. That gives the Black Glasses set 207 HP, 205 Attack, 140 Defense, 107 Special Defense, and 70 Speed.
            The Chople Berry version is similar, sometimes nudging Speed to 71 or Special Defense to 106. Those one-point changes look
            small, but they matter when the mirror is everywhere.
          </p>
          <p>
            Focus Sash is the exception. Because Sash already gives the survival turn, those sets can shift into max Attack and max Speed.
            The source example reaches 102 Speed while keeping 205 Attack. That lets Kingambit act before slow mirrors and some bulkier
            targets outside Trick Room. The tradeoff is obvious: you lose the fat HP number, and after Sash is gone, you are much easier
            to clean up.
          </p>
          <p>
            Speed tuning is where players get themselves into trouble. Adding one point to beat no-Speed Kingambit can be smart. Dumping
            a pile of Speed just because you hate mirrors can quietly ruin the reason you used Kingambit in the first place. It is an
            anti-Trick Room headache because many Trick Room attackers still fail to under-speed it cleanly. Keep that strength unless
            your team has a clear reason to spend it.
          </p>
          <p>
            If you are building your first Kingambit, start with Adamant, heavy HP, heavy Attack, Defiant, and either Black Glasses or
            Chople Berry. Play ten games. Count how often you wished you had more Speed, more bulk, or more coverage. Then change the
            spread. Do not start with a complicated spreadsheet spread before you know which problem your team actually has.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="offensive-benchmarks">Offensive benchmarks: what Kingambit actually KOs</h2>
          <p>
            The offensive chart explains why Kingambit is so hard to dismiss. With Adamant and the listed Attack investment, the Attack
            stat reaches 205. Sucker Punch is effectively 105 base power after STAB. Kowtow Cleave is effectively 127.5. Iron Head is
            effectively 120. Add Black Glasses or Swords Dance and the numbers stop being polite.
          </p>
          <p>
            Into Basculegion, boosted Sucker Punch is the headline. The chart shows a Sucker Punch line doing 186 to 222 damage, or
            95.3 to 113.8 percent, with a 68.75 percent chance to OHKO the listed non-bulky Basculegion. That is why Basculegion cannot
            simply stare down Kingambit at low or even medium HP. If it attacks, it may never get to move.
          </p>
          <p>
            Garchomp is bulkier, and the chart treats it that way. Black Glasses Sucker Punch into a +2 HP Garchomp range sits at
            84 to 100 damage, or 45.4 to 54 percent, with a 43.75 percent chance to 2HKO. That sounds less flashy until you remember
            Sucker Punch is priority. If Garchomp has taken chip from spread damage, Life Orb recoil, Rough Skin exchanges, or a partner
            attack, the endgame changes fast.
          </p>
          <p>
            Incineroar is where Low Kick earns its slot. A +1 Low Kick line into the listed Incineroar spread does 150 to 178 damage,
            or 74.2 to 88.1 percent. That is not a one-shot, but it is not a tickle either. More importantly, it punishes Incineroar
            for pretending it can always Intimidate, Parting Shot, or pivot around Kingambit for free.
          </p>
          <p>
            The mirror is even more direct. Low Kick into the listed Kingambit spread does 224 to 264 damage, or 108.2 to 127.5 percent.
            That is an OHKO. If you skip Low Kick, you need a different mirror plan. Maybe your partner handles it. Maybe you pressure
            it with Fire or Ground. But do not enter the mirror assuming Dark and Steel moves will solve the problem. They will not.
          </p>
          <p>
            Iron Head is the Fairy tax. Against the listed Sylveon spread, Iron Head does 176 to 210 damage, or 97.7 to 116.6 percent,
            with a 93.75 percent chance to OHKO. Against Mega Floette, the chart shows 174 to 206 damage, or 96.1 to 113.8 percent,
            with a 75 percent chance to OHKO. That is why Fairy types can check Kingambit only if they respect the Steel button.
          </p>
          <p>
            The practical lesson is not &quot;Kingambit OHKOs everything.&quot; It does not. The lesson is that Kingambit creates clean damage
            checkpoints. If a target is at full HP, maybe it lives. If a partner has chipped it once, if Hyper Voice has gone off, if
            Rock Slide caught it, if Life Orb took its tax, now Sucker Punch becomes a door slam. Good Kingambit teams are built around
            that door slam.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="defensive-benchmarks">Defensive benchmarks: why Chople Berry is not a joke</h2>
          <p>
            Kingambit&apos;s biggest flaw is obvious enough that nobody gets to feel clever for saying it: four-times weak to Fighting. Close
            Combat, Low Kick, Aura Sphere, Focus Blast, and random Fighting coverage all demand respect. Still, the source defense chart
            shows why Chople Berry is popular. Kingambit&apos;s physical bulk is so high that halving the first Fighting hit can turn a losing
            position into a trade.
          </p>
          <p>
            The sample defensive spread sits at 207 HP, 140 Defense, and 107 Special Defense. That is not paper. The chart notes that
            Chople Berry lets Kingambit survive several common Fighting-style hits, including Jolly Sneasler Close Combat lines, Mega
            Blastoise Aura Sphere, Mega Raichu Y Focus Blast most of the time, Kommo-o Aura Sphere, and many Low Kick users. It is the
            classic resist-berry question: do you have enough bulk for the berry to matter? Kingambit does.
          </p>
          <p>
            It does not survive everything. Adamant Sneasler Close Combat can still push into KO territory, and Fairy Aura Mega Floette
            Light of Ruin is shown as a guaranteed OHKO. That last one is important. Chople Berry helps against Fighting. It does not
            fix high-powered special nukes, and it does not fix every matchup where the opponent has already boosted.
          </p>
          <p>
            Ground coverage is another important check. Garchomp Stomping Tantrum into the listed spread is shown as 122 to 146 damage,
            or 58.94 to 70.53 percent. That is a guaranteed 2HKO, not an OHKO. In real games, that means Kingambit can sometimes take
            the Ground hit, trade back, and force the opponent to respect Sucker Punch next turn. It also means you should not throw
            Kingambit into Ground coverage casually. Surviving is not the same as enjoying it.
          </p>
          <p>
            The source makes a nice broader point about resist berries. They are good only when the Pokemon already has enough bulk to
            use them. A frail Pokemon with Chople Berry still gets flattened. Kingambit is different. Its HP and Defense let the berry
            do real work. That is why Chople Berry, not some random damage item, sits near the top of the item data.
          </p>
        </div>

        <ArticleFigure figure={figures[5]} />

        <div className="prose-guide">
          <h2 id="teammates">Best teammates: chip first, Sucker Punch later</h2>
          <p>
            Kingambit&apos;s best teammates do not need to hand it a perfect knockout. They need to put targets into range. That is the source
            video&apos;s most useful practical advice. If Sylveon uses Hyper Voice and fails to KO anything, that is not automatically a bad
            turn. If both opponents are now in Sucker Punch range, Kingambit is suddenly the one asking the questions.
          </p>
          <p>
            Spread attackers are excellent partners for that reason. Sylveon Hyper Voice, Rock Slide pressure, rain chip, residual damage,
            and other board-wide attacks all turn Kingambit&apos;s priority from scary into guaranteed. The goal is not always to win the
            first damage exchange. Sometimes the goal is to make the opponent&apos;s next attack illegal because Sucker Punch will remove the
            attacker first.
          </p>
          <p>
            Tailwind partners are also useful, but not because Kingambit itself becomes fast. Aerodactyl plus Sylveon is mentioned in
            the source as a common pressure idea: Tailwind lets Sylveon move, Hyper Voice softens the board, and Kingambit cleans what
            is left. This is a very different plan from asking Kingambit to sweep alone. It is more annoying, and honestly more reliable.
          </p>
          <p>
            Trick Room teams have a funny relationship with Kingambit. On one hand, Brave Kingambit can work under Trick Room. On the
            other hand, Kingambit is also a pain for opposing Trick Room teams because base 50 Speed is already low enough to undercut
            plenty of middling attackers. Farigiraf, Incineroar, Sylveon, and similar bulky pieces have to respect that Kingambit may
            still move at the wrong time for them.
          </p>
          <p>
            Defensive partners need to cover the three ugly weaknesses. Fighting checks are first. Psychic, Flying, Fairy, or bulky
            Ghost pressure can force Sneasler and other Fighting attackers to think before they click Close Combat. Fire answers matter
            because Incineroar and Charizard-style pressure can chip or threaten Kingambit. Ground immunities or resistances are useful
            because Garchomp and other Ground attackers will happily punish a lazy Kingambit position.
          </p>
          <p>
            You can also pair Kingambit with Basculegion or Sneasler from the early triangle, but do it with intention. Basculegion
            appreciates Kingambit threatening Psychic and Ghost targets. Sneasler can pressure the Dark and Steel checks that slow Kingambit
            down. The danger is stacking too many Pokemon that need the same support. A team with three scary attackers and no defensive
            plan is not a team. It is a damage calculator with hope attached.
          </p>
          <p>
            The easiest team-building rule is this: give Kingambit one partner that chips both opponents, one partner that scares Fighting
            types, and one partner that can pivot around Fire or Ground pressure. If the rest of the team already does those jobs, Kingambit
            becomes a nasty closer. If the rest of the team does none of those jobs, Kingambit becomes a slow Pokemon waiting to get kicked.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="counterplay">How to beat Kingambit</h2>
          <p>
            The cleanest answer is still Fighting damage. Sneasler Close Combat is the obvious one. Low Kick from heavy physical attackers
            is another. Aura Sphere and Focus Blast can work if the damage is high enough or Chople Berry has already been consumed. The
            catch is that Kingambit teams know this. If your only answer is one Fighting button on one Pokemon, expect the Kingambit player
            to Protect, pivot, or remove that Pokemon before the endgame.
          </p>
          <p>
            Fire and Ground pressure are the next answers. Incineroar can threaten it, especially with a damage item or enough chip.
            Garchomp does not always OHKO with Ground coverage, but it forces Kingambit into a defensive posture. Charizard and other
            Fire attackers can make Kingambit respect positioning. The key is not just having the type. The key is keeping enough HP that
            Sucker Punch does not punish your answer before it moves.
          </p>
          <p>
            Priority denial is another route. Farigiraf-style Armor Tail, Psychic Terrain, Quick Guard, and similar tools can make Sucker
            Punch much less reliable. The source notes that Kingambit is happier when Psychic Terrain is not everywhere. That checks out.
            A Kingambit that cannot use priority has to rely on Kowtow Cleave, Iron Head, or Low Kick at base 50 Speed. That is still
            dangerous, but it is not the same nightmare.
          </p>
          <p>
            Status also matters. Burn cuts physical damage. Encore can punish Protect or Swords Dance. Redirection can waste Sucker Punch
            turns if the Kingambit player reads wrong. Intimidate is risky because of Defiant, but that does not mean you never use it.
            It means you use it when Kingambit is not on the field, when you can immediately remove it, or when the Defiant boost does
            not change the board. Blindly cycling Intimidate into Defiant is not a strategy. It is volunteering.
          </p>
          <p>
            The most reliable counterplay is HP discipline. Do not let important attackers drift into Sucker Punch range for free. If
            Kingambit is on preview, every spread move, recoil tick, and resisted hit matters. A Charizard at full HP may force Kingambit
            to respect Fire damage. A Charizard at 45 percent may just be a Sucker Punch target with wings. Same Pokemon. Completely
            different turn.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="final-verdict">Final verdict: should you build Kingambit?</h2>
          <p>
            Yes. Build one serious Kingambit if you care about Regulation Set M-B. You do not need five copies. The source even makes
            that point near the end: one good Kingambit is usually enough because the moves do not change that much. What changes is the
            item and the EV tuning. Black Glasses, Chople Berry, Focus Sash, and maybe Life Orb cover most of the real builds.
          </p>
          <p>
            Start with Defiant, Adamant, Sucker Punch, Kowtow Cleave, Iron Head, and either Protect or Low Kick depending on item. Use
            Black Glasses if you want to pressure the endgame with Dark damage. Use Chople Berry if Fighting coverage keeps deleting you.
            Use Focus Sash if you want four attacks and guaranteed action. Then test the team. If you keep losing mirrors, add Low Kick
            or tune Speed. If Sneasler keeps ruining your day, stop pretending Chople Berry alone is a team plan.
          </p>
          <p>
            Kingambit&apos;s best games are not flashy. They are mean. The opponent attacks and loses to Sucker Punch. The opponent pivots and
            hands Defiant a boost. The opponent switches a Fairy into Iron Head. The opponent sets Trick Room and realizes Kingambit is
            still slow enough to be annoying. None of those turns feels complicated, which is exactly why the Pokemon is so good.
          </p>
          <p>
            The weakness list is real: Fighting, Fire, Ground, priority denial, burn, and bad Sucker Punch reads. But the reward is also
            real: top-five usage, strong M3 data, clean item variety, and one of the most stable endgame buttons in Pokemon Champions.
            If your team can chip targets into range and cover the Fighting matchup, Kingambit is not just worth building. It is one of
            the Pokemon your opponents are already building around.
          </p>
          <p>
            For raw data, check the local database entry for{" "}
            <Link href="/pokemon/kingambit" className="font-black text-champion-blue hover:text-champion-red">
              Kingambit
            </Link>
            . For team planning, treat this guide as the practical version: do not overthink the sword. Put things in range, keep Defiant
            threatening, and make the other player prove they can attack without getting punished.
          </p>
        </div>
      </GuideArticleLayout>
    </article>
  );
}
