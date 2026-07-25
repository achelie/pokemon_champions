import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

const publishedAt = "2026-07-26";
const imageBase = "/images/guides/sableye-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Sableye Build Guide - Prankster Support",
  description:
    "Pokemon Champions Sableye build guide for Regulation Set M-B with Prankster screens, Rain Dance, Encore, Disable, EV spreads, teammates, and counters.",
  path: "/sableye-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Sableye Build",
    "Pokemon Champions Sableye Guide",
    "Sableye Prankster Moveset",
    "Sableye Light Clay Screens",
    "Sableye Rain Dance Build",
    "Sableye Encore Disable",
    "Pokemon Champions Regulation Set M-B Sableye",
    "Sableye EV Spread"
  ]
};

const faqs = [
  {
    question: "What is the best Sableye moveset in Pokemon Champions?",
    answer:
      "There is no single four-move set for every team. Light Clay builds usually start with Light Screen, Reflect, and one of Rain Dance or Encore. Roseli Berry disruption builds often use Encore, Disable, Fake Out, and Will-O-Wisp. Pick the four moves that solve your team's actual matchups."
  },
  {
    question: "What are the best EVs and nature for Sableye?",
    answer:
      "Max HP is the normal starting point. A common special-defense spread uses 32 HP, 9 Defense, and 25 Special Defense, while a more physical spread uses 32 HP, 15 Defense, and 19 Special Defense. Careful, Impish, Sassy, and Bold all have a place depending on the moveset."
  },
  {
    question: "Should Sableye use Light Clay or Roseli Berry?",
    answer:
      "Use Light Clay when Sableye is responsible for Reflect and Light Screen. Use Roseli Berry when the set focuses on disruption and needs help surviving its only weakness, Fairy. The item should match the job, not merely the most popular usage number."
  },
  {
    question: "Is Mega Sableye worth using in Pokemon Champions?",
    answer:
      "Usually no. Mega Sableye gains substantial defensive stats and Magic Bounce, but it loses Prankster and consumes the team's Mega slot. Regular Sableye normally provides more immediate support because its status moves keep +1 priority."
  },
  {
    question: "Why does Prankster fail against Dark-type Pokemon?",
    answer:
      "Dark-type Pokemon are immune to opposing targeted status moves boosted by Prankster. Encore, Disable, Will-O-Wisp, Thunder Wave, and similar moves can fail into Dark targets. Screens, weather, and other moves that do not target the opponent still work."
  }
];

type Figure = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

const figures: Figure[] = [
  {
    src: `${imageBase}/format-usage-ranking.png`,
    alt: "Pokemon Champions Regulation Set M-B usage ranking with Sableye at rank twenty",
    caption:
      "Sableye sits at rank 20 in this Regulation Set M-B snapshot. Its last four placements are shown as 24th, 18th, 20th, and 29th, which is steady work for a Pokemon with a 380 base stat total."
  },
  {
    src: `${imageBase}/stats-typing-mega.png`,
    alt: "Sableye and Mega Sableye base stats, abilities, Dark Ghost typing, weakness, resistances, and immunities",
    caption:
      "Regular Sableye keeps Prankster and 50 Speed. Mega Sableye becomes much bulkier, drops to 20 Speed, and trades Prankster for Magic Bounce. The Mega is tougher, but it also spends the team's most valuable item slot."
  },
  {
    src: `${imageBase}/season-m3-usage-data.png`,
    alt: "Pokemon Champions Season M3 Sableye move item ability and nature usage data",
    caption:
      "Rain Dance and Light Screen lead the move data, while Light Clay and Roseli Berry define the two main builds. No move reaches even two-thirds usage, which tells you how much Sableye changes from team to team."
  },
  {
    src: `${imageBase}/recommended-sets.png`,
    alt: "Pokemon Champions Sableye EV rankings with Light Clay screen set and Roseli Berry disruption set",
    caption:
      "Two practical starting points: Light Clay with screens and Rain Dance, or Roseli Berry with Fake Out, Will-O-Wisp, Encore, and Disable. Neither set is sacred. Sableye rewards regular moveset changes."
  },
  {
    src: `${imageBase}/defensive-benchmarks.png`,
    alt: "Pokemon Champions Sableye defensive benchmarks against Whimsicott Sylveon Mega Florges and Mega Charizard Y",
    caption:
      "A special-defense Sableye survives ordinary Whimsicott Moonblast, but strong Fairy attacks and Mega Charizard Y Weather Ball still score clean knockouts. Screens must go up before the hit, not after it."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "role", title: "What Sableye does" },
  { id: "usage", title: "Usage and support competition" },
  { id: "stats", title: "Stats, typing, and Prankster" },
  { id: "mega", title: "Why Mega Sableye struggles" },
  { id: "screens", title: "Light Clay screens set" },
  { id: "disruption", title: "Roseli Berry disruption set" },
  { id: "moves", title: "How to choose four moves" },
  { id: "evs", title: "EV spreads and natures" },
  { id: "benchmarks", title: "Defensive benchmarks" },
  { id: "partners", title: "Best partners and leads" },
  { id: "counterplay", title: "Counters and common mistakes" },
  { id: "game-plan", title: "A practical game plan" },
  { id: "faq", title: "Frequently asked questions" }
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
        width={figure.width ?? 1672}
        height={figure.height ?? 941}
        priority={priority}
        unoptimized
        className="h-auto w-full bg-mist object-contain"
      />
      <figcaption className="border-t border-line bg-white px-4 py-3 text-sm leading-6 text-slate-600">{figure.caption}</figcaption>
    </figure>
  );
}

export default function SableyeBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <JsonLd data={faqJsonLd(faqs)} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Sableye build guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Sableye build guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">
              Prankster screens, rain control, and four moveslots that never feel like enough
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Sableye has a 380 base stat total and still hovers around the top 20. That is not an accident. Prankster lets it put up
              screens, change weather, burn attackers, and trap a bad move with Encore before most opponents can respond. The hard part
              is not finding four useful moves. It is cutting the other six.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Sableye build guide cover with base stats"
              width={1672}
              height={941}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="prose-guide mt-10">
          <h2 id="role">What Sableye does on a real team</h2>
          <p>
            Sableye is a support Pokemon that trades raw stats for options. It can set Reflect and Light Screen, bring rain or sun back
            onto the field, stop setup with Encore, lock an attack with Disable, burn a physical threat with Will-O-Wisp, delay an enemy
            with Quash, and buy a turn with Fake Out. It also learns recovery, Taunt, Gravity, Knock Off, Shadow Sneak, Sucker Punch,
            Feint, Trick, Skill Swap, and several other moves that look reasonable on the right six-Pokemon roster.
          </p>
          <p>
            That list explains both the appeal and the headache. A Sableye set is never finished in the abstract. It is finished when the
            other five Pokemon have clear jobs and Sableye covers the holes they leave. A rain team may need Rain Dance and screens. A
            Perish Song team may want Encore and Disable. A team that fears Garchomp or Basculegion may want Will-O-Wisp more than either
            screen. The correct set changes with the team.
          </p>
          <p>
            Prankster is what holds the whole package together. Status moves gain +1 priority, so Sableye can act before ordinary attacks
            even with base 50 Speed. That lets it influence turn one without investing in Speed. The usual plan is simple: deny the
            opponent&apos;s strongest opening, then let an actual damage dealer use the space Sableye created.
          </p>
          <p>
            Do not confuse that with doing no work. A Reflect that keeps two partners alive for eight turns can matter more than a weak
            attack. An Encore that traps Protect can hand over a free knockout. Rain Dance can turn off opposing sun and switch on
            Archaludon, Basculegion, or Swampert in the same turn. Sableye rarely wins the damage report. It wins the argument over what
            the turn is allowed to look like.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="usage">Why Sableye keeps a place while Grimmsnarl takes some of its work</h2>
          <p>
            The source snapshot lists Sableye at rank 20 in Regulation Set M-B. Its last four season placements are 24th, 18th, 20th,
            and 29th. Those numbers are not dominant, but they are remarkably stable for the lowest-base-stat Pokemon among the format&apos;s
            popular picks. Sableye survives because every new team asks a slightly different support question, and it usually has an
            answer somewhere in its move list.
          </p>
          <p>
            Grimmsnarl now competes for the screen-setting slot. It has Prankster, better natural bulk, and familiar tools such as Parting
            Shot. Whimsicott competes for fast utility and speed control. Indeedee, Sinistcha, Farigiraf, and Amoonguss cover other forms
            of support. These Pokemon are not interchangeable, but they do fight for the same team slot. A roster with Sableye,
            Grimmsnarl, and Whimsicott may look clever in the builder and then discover that nobody can finish a target.
          </p>
          <p>
            Sableye&apos;s edge starts with Dark/Ghost typing. Ghost makes it immune to ordinary Fake Out, so it can usually put up a screen
            even when the opponent leads Incineroar or Sneasler. Grimmsnarl can be flinched and removed before it moves. Sableye also
            learns manual weather, Encore, Disable, Quash, Will-O-Wisp, and other tools that let it serve a narrower plan than a standard
            dual-screen set.
          </p>
          <p>
            The practical rule is one primary support Pokemon on most balanced teams. Two can work in hard Trick Room or Perish Song,
            where one sets the mode and the other protects it. Four support Pokemon on a normal team is not a flexible masterpiece. It
            is six minutes of watching the opponent ignore your harmless board. Give Sableye partners that can cash the turns it buys.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2 id="stats">Base stats, Dark/Ghost typing, and the rules of Prankster</h2>
          <p>
            Regular Sableye has 50 HP, 75 Attack, 75 Defense, 65 Special Attack, 65 Special Defense, and 50 Speed. The total is only 380.
            Max HP reaches 157 at level 50, which is low enough that even Smeargle can end up with more health. Sableye survives by
            investing almost everything in bulk, moving first with Prankster, and choosing the right defensive button before damage
            lands.
          </p>
          <p>
            Dark/Ghost has one weakness: Fairy. It resists Poison and is immune to Normal, Fighting, and Psychic. The Ghost immunity to
            Normal also blocks normal Fake Out, while the Fighting immunity removes another common physical pressure point. Scrappy can
            bypass the Ghost immunity, so a Scrappy Fake Out user remains a real exception. Check abilities before treating turn one as
            guaranteed.
          </p>
          <p>
            Dark typing creates a second rule that matters in every Sableye mirror and every matchup against Incineroar, Kingambit, or
            Grimmsnarl. Opposing targeted status moves boosted by Prankster do not affect Dark-type Pokemon. Your Prankster Encore,
            Disable, Will-O-Wisp, Thunder Wave, Taunt, and Quash cannot simply bully a Dark target. Reflect, Light Screen, Rain Dance, and
            Sunny Day still work because they affect your side or the field rather than targeting that opponent.
          </p>
          <p>
            Foul Play is the natural attack when you need one. It uses the target&apos;s Attack stat for damage, which lets a low-investment
            support Pokemon punish a strong physical attacker. Knock Off removes an item. Shadow Sneak and Sucker Punch provide priority,
            while Feint can break Protect. None of them turns Sableye into a sweeper. One attack is enough on many sets, and some builds
            skip damage entirely.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="mega">Why Mega Sableye usually loses to regular Sableye</h2>
          <p>
            Mega Sableye raises Attack from 75 to 85, Defense from 75 to 125, Special Attack from 65 to 85, and Special Defense from 65
            to 115. Speed falls from 50 to 20. Its 480 total is far sturdier, and Magic Bounce reflects many status moves aimed at it.
            Read in isolation, that sounds useful. The problem appears when you compare the entire cost.
          </p>
          <p>
            Mega Evolution removes Prankster. Your screens, weather, burns, Encore, and Disable no longer receive +1 priority. Sableye
            also consumes the Mega slot that could belong to a Pokemon designed to end games, such as Mega Charizard Y, Mega Metagross,
            Mega Venusaur, or another attacker. You gain bulk but lose the exact timing advantage that makes regular Sableye special.
          </p>
          <p>
            Magic Bounce is a good ability. It can punish status and hazard attempts. It does not replace acting before the opponent.
            A support Mega can work only when its durability and ability provide more value than both Prankster and the team&apos;s offensive
            Mega option. In the current material, Sablenite sits around one percent usage. That is a sensible warning, not an invitation
            to prove the ladder wrong at 2 a.m.
          </p>
          <p>
            Use regular Sableye unless the entire team has been built around Mega Sableye and no other Pokemon needs the Mega slot.
            Even then, test the regular form first. Light Clay or Roseli Berry often gives the team more useful turns without asking the
            other five members to cover the lost priority.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="screens">Light Clay screens and rain support set</h2>
          <p>
            Light Clay is the most common item in the source data at 39 percent. Light Screen appears on 60 percent of sets, Reflect on
            49 percent, and Rain Dance on 61 percent. The clean starting build is Light Screen, Reflect, Rain Dance, and Encore. Light
            Clay extends each screen from five turns to eight, which gives the damage dealers enough time to switch in and keep pressure
            after Sableye leaves.
          </p>
          <p>
            Rain Dance is more than a weather button. It can overwrite Mega Charizard Y&apos;s sun, weaken Fire attacks, and activate a rain
            core without forcing Pelipper to switch in. Pelipper, Archaludon, Basculegion, and Swampert all appreciate that control. If
            the opponent changes weather after Pelipper enters, Sableye can restore rain with priority while the partner attacks.
          </p>
          <p>
            The order of operations matters. Use Light Screen before a special Fairy attacker or Mega Charizard Y tries to remove
            Sableye. Use Reflect before physical pressure from Garchomp, Kingambit, or Basculegion. Rain Dance comes first when changing
            weather immediately reduces damage or enables a partner knockout. Encore is the flexible fourth slot because it punishes
            Protect, setup, and repeated support moves.
          </p>
          <p>
            You do not have to run both screens. A rain team that already checks physical attackers may use Light Screen, Rain Dance,
            Encore, and Will-O-Wisp. A team with strong special matchups may prefer Reflect. Light Clay still makes sense with one screen
            if that screen is central to the game plan, but do the math honestly. An item dedicated to one move needs that move to be
            clicked often.
          </p>
          <p>
            Sunny Day works in the same slot on a sun roster. Sableye can support Mega Charizard Y or Venusaur and win a manual weather
            exchange. Rain is simply more common in the displayed M3 data. Do not copy Rain Dance onto a team that has no rain abuser.
            Weather control should create damage or survival immediately, not just make the sky match the moveset page.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="disruption">Roseli Berry Encore and Disable set</h2>
          <p>
            Roseli Berry appears on 28 percent of Sableye sets and reduces one super-effective Fairy hit. The item fits a disruption
            build because it gives Sableye a chance to survive the one type that bypasses its comfortable defensive profile. A useful
            starting set is Will-O-Wisp, Fake Out, Encore, and Disable. Protect, Quash, Recover, or an attack can replace whichever move
            the team needs least.
          </p>
          <p>
            Encore and Disable form the annoying part of the set. If an opponent uses Protect, setup, or a weak support move, Encore can
            trap it. If the opponent reveals the only attack that threatens your board, Disable can remove that option for several
            turns. Used together, the moves can leave a target with no comfortable button. They are strongest when the partner already
            threatens damage, because the opponent cannot calmly wait for the lock to end.
          </p>
          <p>
            Fake Out is less universal than it looks. Sableye is immune to ordinary Fake Out, but its own Fake Out still follows normal
            target rules. It is useful for buying the partner one turn, breaking a Focus Sash, or creating the opening for Perish Song.
            It also takes one of four cramped slots. If you click it once every twelve games, that is not a treasured utility move. It
            is luggage.
          </p>
          <p>
            Will-O-Wisp is the direct answer to physical attackers. It can reduce Garchomp, Basculegion, or another physical threat
            before the attack lands. Accuracy can betray you, and Dark-type targets ignore the move when Prankster is providing the
            priority. Reflect is more reliable into a board with multiple physical attackers, while Will-O-Wisp is sharper into one
            target. Pick the kind of protection your team can use.
          </p>
          <p>
            Perish Song teams can pair Sableye with Gengar and use Fake Out, Encore, Disable, and Protect to manage the countdown.
            Sableye has a rough time against Dark Pokemon in that structure because its Prankster control stops working into them.
            Incineroar and Kingambit do not care how clever the lock was supposed to be. Build a direct answer to Dark types before
            calling the Perish core complete.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="moves">How to choose four moves from a list that wants ten</h2>
          <p>
            The M3 usage chart has no move above 61 percent. Rain Dance leads at 61, Light Screen sits at 60, Encore at 50, Reflect at
            49, Will-O-Wisp at 45, Fake Out at 23, Disable at 22, Quash at 20, Ally Switch at 19, and Sunny Day at 9. That spread tells
            you more than a single sample moveset could: opponents cannot know Sableye&apos;s four moves from team preview.
          </p>
          <p>
            Start by writing down the job Sableye must perform in one sentence. “Set screens and restore rain” is a job. “Be annoying”
            is not. Reserve the two or three moves that complete that job. Use the last slots for the matchups the rest of the team
            cannot cover. If the roster already handles physical attackers, Will-O-Wisp may be redundant. If nothing stops Protect and
            setup, Encore earns its place quickly.
          </p>
          <p>
            Then play ten games and count clicks. The source gives a blunt but useful rule: remove the move you use least. Do not defend
            a move because it won a theoretical matchup in the builder. If it sat untouched for ten games while you repeatedly wished
            for Quash, Rain Dance, Recover, or Feint, change it. Pokemon Champions makes moveset changes easy, so there is no prize for
            remaining loyal to a bad fourth slot.
          </p>
          <p>
            Gravity is a good example of a move that needs a real plan. Priority Gravity can support Hypnosis or inaccurate attacks and
            remove Ground immunities. Without those partners, it is dead weight. Skill Swap can move Prankster, but spending a turn with
            two passive Pokemon on the field often creates less value than the idea promises. Trick and escape-item gimmicks can steal
            a game, but they need a matchup and a follow-up, not just surprise.
          </p>
          <p>
            Always check the Dark-type problem. A set of Encore, Disable, Will-O-Wisp, and Taunt looks unbearable until Incineroar or
            Kingambit enters and ignores nearly all of it. Screens, weather, Fake Out, and a direct attack keep Sableye from becoming
            blank cardboard in those games. One non-targeted move or attack is often the difference between specialized and helpless.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="evs">Best Sableye EV spreads and natures</h2>
          <p>
            Max HP is the starting point because base 50 HP is Sableye&apos;s biggest defensive problem. The most common spread in the image
            uses 32 HP, 9 Defense, and 25 Special Defense. At level 50 it reaches 157 HP, 104 Defense, and 121 Special Defense with a
            special-defense-boosting nature. The goal is not to become a wall. It is to survive long enough to set the field and disrupt
            one more turn.
          </p>
          <p>
            A second practical spread uses 32 HP, 15 Defense, and 19 Special Defense. With a Defense-boosting nature, the displayed set
            reaches 121 Defense and 104 Special Defense. This version fits Roseli Berry and Will-O-Wisp builds that expect more physical
            contact. The usage table also shows max-Defense and max-Special-Defense variants, which are valid when one side of the damage
            spectrum clearly matters more to your team.
          </p>
          <p>
            Careful is the most common nature in the M3 snapshot at 31 percent. Gentle appears at 17, Sassy at 15, Impish at 12, and Bold
            at 9. Careful raises Special Defense and lowers Special Attack, which is free on sets with no special attack. Impish raises
            Defense and lowers Special Attack. Sassy raises Special Defense and lowers Speed. Bold raises Defense and lowers Attack,
            which fits sets that skip Fake Out, Knock Off, and other physical moves.
          </p>
          <p>
            A Speed-lowering nature is often fine because Prankster handles the timing of status moves. Lower Speed can even help in
            certain switch or faint-order situations. It is not free when you use Fake Out or when Sableye must act before another
            priority user in the same bracket. Keep the Attack stat if Fake Out damage, Foul Play mechanics, or physical utility matters.
            Nature choice should follow the actual four moves.
          </p>
          <p>
            Do not spread EVs evenly because it looks balanced. The common distributions hit specific stat points. Decide what attack
            Sableye must survive, add the correct screen or berry assumption, and place the remaining points on the other defensive side.
            A clean benchmark beats a pretty row of matching numbers.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="benchmarks">Defensive benchmarks and when screens must come first</h2>
          <p>
            The displayed benchmark uses 32 HP, 9 Defense, and 25 Special Defense for final stats of 157 HP, 104 Defense, and 121 Special
            Defense. Against a 32 Special Attack Whimsicott, Moonblast deals 116 to 138 damage, or 73.8 to 87.8 percent. Sableye survives
            one hit without a berry or Light Screen. That is useful, but it also means chip damage can turn the same matchup into a
            knockout.
          </p>
          <p>
            Stronger Fairy attackers are different. Fairy Feather Pixilate Sylveon Hyper Voice deals 162 to 192 damage, or 103.1 to
            122.2 percent, for a guaranteed knockout in the listed case. Fairy Aura Mega Florges Dazzling Gleam deals 168 to 200, or
            107 to 127.4 percent. Special Defense investment alone does not solve either matchup. Use Light Screen before they attack,
            spend Roseli Berry, remove the threat, or do not lead Sableye into it.
          </p>
          <p>
            Mega Charizard Y also punishes careless leads. Its 100-base-power Weather Ball in sun deals 163 to 193 damage, or 103.8 to
            122.9 percent, to the listed spread. Heat Wave may fail to finish because spread damage reduces its output. Weather Ball is
            the clean single-target answer. Rain Dance can remove sun and change that calculation, but Sableye has to use it before
            Charizard&apos;s attack.
          </p>
          <p>
            Physical matchups use a different tool. Reflect reduces incoming physical damage for the side, while Will-O-Wisp cuts one
            attacker&apos;s physical output. The source estimates Sableye&apos;s rough physical bulk near a 190 Attack benchmark and special
            bulk near 225 under its stated assumptions. Treat those as planning ranges, not universal promises. Items, abilities, spread
            damage, weather, and partner effects all move the result.
          </p>
          <p>
            Roseli Berry is insurance, not permission to sit in front of every Fairy attacker. Light Clay is valuable only if the screen
            goes up. Sitrus or Wiki Berry can restore health, but 157 maximum HP limits the amount recovered and does nothing if the first
            hit is already lethal. Choose the item based on the exact turn you need Sableye to survive.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="partners">Best teammates, rain cores, and lead choices</h2>
          <p>
            Pelipper is the obvious rain partner because Drizzle starts weather without spending Sableye&apos;s turn. Sableye still helps when
            the opponent replaces that rain with sun or another weather effect. Priority Rain Dance restores the condition while Pelipper
            attacks or switches. Archaludon, Basculegion, and Swampert turn those weather turns into immediate pressure.
          </p>
          <p>
            A clean four-Pokemon rain selection can use Sableye, Pelipper, Archaludon, and one more attacker. The remaining roster can
            include a Mega option or a matchup specialist such as Venusaur when the team has a reason to change modes. The important
            part is that the three partners deal real damage. Sableye should not look across the field and see three coworkers with the
            same support job.
          </p>
          <p>
            Garchomp appreciates screens and can pressure the Dark types that ignore Prankster disruption. Kingambit can provide strong
            priority and punish some stat drops, though its weaknesses need care. Mega Charizard Y belongs on sun variants where Sableye
            uses Sunny Day instead of Rain Dance. Gengar is the natural Perish Song partner when Encore and Disable form the control
            plan.
          </p>
          <p>
            At team preview, ask whether Sableye can change turn one. Lead it when a screen, weather change, burn, or lock immediately
            protects a partner&apos;s attack. Keep it in back when the opponent shows Fairy pressure that can remove it before the plan starts.
            Against Dark-heavy teams, bring a set with field moves or direct utility. If all four moves target the opponent, Sableye may
            have nothing legal worth clicking.
          </p>
          <p>
            Sableye and Whimsicott rarely belong in the same four. Sableye and Grimmsnarl have the same problem. Their tools differ, but
            both consume a slot and a turn to support. Use one and add a damage dealer. Exceptions exist in dedicated Perish Song, hard
            Trick Room, or unusual three-support structures, but those teams need a clear win condition that survives after the one
            attacker falls.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="counterplay">How opponents beat Sableye and the mistakes that help them</h2>
          <p>
            Fairy damage is the direct answer. Sylveon and Mega Florges can remove the displayed special-defense build in one hit, while
            Whimsicott usually needs two. A Life Orb or other offensive Whimsicott can change that expectation. Do not assume a familiar
            support Pokemon has a harmless item until the damage confirms it.
          </p>
          <p>
            Dark types attack the move list instead of the HP bar. Incineroar, Kingambit, Grimmsnarl, and other Dark Pokemon ignore
            opposing targeted Prankster status. They can make Encore, Disable, Will-O-Wisp, Thunder Wave, Taunt, and Quash fail. They do
            not stop screens or weather. A well-built Sableye keeps at least one route to value in that matchup.
          </p>
          <p>
            Taunt can shut down status moves when it comes from a legal source and lands before Sableye acts. Magic Bounce can reflect
            targeted status. Strong single-target attacks can bypass the expectation that spread damage will be weak enough to survive.
            Scrappy Fake Out can break the normal Ghost immunity. Each answer is specific, so read the opposing abilities and likely
            item before choosing the opening move.
          </p>
          <p>
            The most common Sableye mistake happens in the team builder: too much support and not enough damage. The second is treating a
            flexible move list as permission to pick four random tricks. The third is failing to update the set after games show which
            move is dead. Sableye needs discipline more than creativity. Creativity without a job description produces a very elaborate
            way to lose 4-0.
          </p>
          <p>
            Another mistake is saving screens until after Sableye takes the attack they were meant to reduce. The benchmark page makes
            the order plain. Sylveon, Mega Florges, and Mega Charizard Y can score the knockout before Sableye gets a second turn. If the
            screen or weather change is required for survival, use it now.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="game-plan">A practical Sableye plan for your first ten games</h2>
          <p>
            Before game one, choose one of the two starting shells. For Light Clay, use Light Screen, Reflect, Rain Dance, and Encore.
            For Roseli Berry, use Will-O-Wisp, Fake Out, Encore, and Disable. These are testing sets, not commandments. Write down the job
            of each slot so you know what evidence should cause a change.
          </p>
          <p>
            During preview, count Fairy and Dark threats. Fairy determines whether Sableye can survive. Dark determines whether targeted
            Prankster moves work. Then identify the attack your partner wants to use on turn one. Pick Sableye&apos;s move to protect or
            amplify that attack. Rain Dance for an Archaludon turn, Reflect for a physical board, Light Screen for special pressure, or
            Encore when the opponent has revealed a passive move.
          </p>
          <p>
            Track every move you click for ten games. If one move is used once and another missing option would have mattered four times,
            make the swap. Repeat the process after another ten. This is how Sableye&apos;s huge move pool becomes an advantage instead of a
            source of permanent indecision.
          </p>
          <p>
            Finally, watch the damage dealers. If Sableye creates safe turns and nobody turns them into knockouts, the team needs more
            offense. If the attackers keep falling before they move, the support set needs a different screen, weather button, or form
            of disruption. Sableye is good at fixing one missing piece. It cannot replace the whole puzzle.
          </p>
        </div>

        <section id="faq" className="prose-guide mt-10" aria-label="Sableye guide frequently asked questions">
          <h2>Frequently asked questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
          <p>
            Browse the <Link href="/guides" className="font-black text-champion-blue hover:text-champion-red">Pokemon Champions guides index</Link> for
            more Regulation Set M-B builds, or compare the rain attackers on the{" "}
            <Link href="/useful-pokemon" className="font-black text-champion-blue hover:text-champion-red">Useful Pokemon page</Link>.
          </p>
        </section>
      </GuideArticleLayout>
    </article>
  );
}
