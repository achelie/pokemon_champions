import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

const publishedAt = "2026-07-11";
const imageBase = "/images/guides/sinistcha-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Sinistcha Build Guide - Matcha Gotcha Support",
  description:
    "Complete Pokemon Champions Sinistcha build guide for Regulation Set M-B. Learn the best Hospitality set, Rage Powder, Matcha Gotcha, Life Dew, Trick Room, EVs, berries, matchups, and Shell Smash Blastoise partners.",
  path: "/sinistcha-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Sinistcha Build",
    "Pokemon Champions Sinistcha Guide",
    "Sinistcha Matcha Gotcha",
    "Sinistcha Rage Powder",
    "Sinistcha Hospitality",
    "Pokemon Champions Regulation Set M-B Sinistcha",
    "Sinistcha EVs Pokemon Champions",
    "Sinistcha Blastoise team"
  ]
};

const faqs = [
  {
    question: "What is the best Sinistcha moveset in Pokemon Champions?",
    answer:
      "Most Regulation Set M-B Sinistcha use Matcha Gotcha and Rage Powder, then choose two of Trick Room, Life Dew, and Protect. The right last two moves depend on whether the team needs speed control, extra healing, or a safer way to spend a turn."
  },
  {
    question: "Which ability should Sinistcha use?",
    answer:
      "Hospitality is the standard ability. It restores a quarter of its ally's maximum HP when Sinistcha enters, which gives bulky attackers and setup Pokemon another useful turn. Heatproof has a real Fire matchup use, but it gives up the reason most teams bring Sinistcha."
  },
  {
    question: "Which item is best for Sinistcha?",
    answer:
      "Sitrus Berry, Leftovers, and resist berries are all practical. Kasib Berry is a strong default in a Last Respects metagame because it can let Sinistcha survive a Ghost hit that would otherwise remove it. Pick the berry for the threat your team cannot afford to lose to."
  },
  {
    question: "Does Rage Powder work against every Pokemon?",
    answer:
      "No. Grass-type Pokemon ignore Rage Powder, so Sinistcha cannot redirect moves from common Grass opponents such as Whimsicott or Venusaur. It does redirect moves from non-Grass powder users such as Vivillon, and Sinistcha itself is immune to powder moves because it is Grass type."
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
    alt: "Pokemon Champions Regulation Set M-B usage ranking with Sinistcha in second place",
    caption:
      "The source ranking puts Sinistcha second in the third early M-B snapshot. Treat that as a picture of the early ladder, not a promise that every future season will look the same."
  },
  {
    src: `${imageBase}/stats-and-role.png`,
    alt: "Sinistcha base stats, Grass Ghost typing, Hospitality ability, and Poltchageist comparison",
    caption:
      "Sinistcha has 71 HP, 106 Defense, 121 Special Attack, 80 Special Defense, and 70 Speed. The support version ignores most of that Special Attack and spends its turns buying time."
  },
  {
    src: `${imageBase}/m3-usage-data.png`,
    alt: "Pokemon Champions M3 Sinistcha move, item, ability, and nature usage data",
    caption:
      "M3 data makes the core clear: Matcha Gotcha, Rage Powder, Hospitality, recovery items, and a defensive nature dominate the page."
  },
  {
    src: `${imageBase}/recommended-sets.png`,
    alt: "Sinistcha recommended EV spreads and Kasib Berry support movesets",
    caption:
      "The two common spreads both maximize HP. One leans physical at 32 HP, 14 Defense, and 20 Special Defense; the other moves more points to Special Defense."
  },
  {
    src: `${imageBase}/matcha-gotcha-offense.png`,
    alt: "Sinistcha Matcha Gotcha damage examples against Mega Swampert and Basculegion",
    caption:
      "Matcha Gotcha is not a sweeping move. It gives Sinistcha a spread attack, a chance to burn, and a way to heal itself while it supports the actual win condition."
  },
  {
    src: `${imageBase}/defensive-benchmarks.png`,
    alt: "Sinistcha defensive benchmarks against Kingambit, Basculegion, Mega Aerodactyl, Mega Froslass, Gholdengo, and Mega Charizard Y",
    caption:
      "A max-HP defensive Sinistcha often survives one strong neutral or super-effective hit. It still folds to boosted Last Respects and sun-boosted Mega Charizard Y Heat Wave."
  },
  {
    src: `${imageBase}/santino-team.png`,
    alt: "Pokemon Champions Santino team sheet featuring Sinistcha with Blastoise, Delphox, Incineroar, Sneasler, and Maushold",
    caption:
      "This tournament team uses Sinistcha beside Shell Smash Blastoise and several pressure pieces. It is a useful template for understanding the role, not a six-Pokemon commandment."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "why-sinistcha", title: "Why Sinistcha fits M-B" },
  { id: "stats-and-typing", title: "Stats, typing, and its job" },
  { id: "hospitality", title: "Hospitality is the reason" },
  { id: "moveset", title: "Best moveset and move choices" },
  { id: "evs-and-nature", title: "EVs, nature, and speed" },
  { id: "items", title: "Items and resist berries" },
  { id: "matcha-gotcha", title: "How to use Matcha Gotcha" },
  { id: "benchmarks", title: "Defensive benchmarks" },
  { id: "partners", title: "Best teammates and team plans" },
  { id: "matchups", title: "Bad matchups and mistakes" },
  { id: "turn-guide", title: "A practical turn guide" },
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

export default function SinistchaBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <JsonLd data={faqJsonLd(faqs)} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Sinistcha guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Sinistcha build guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">Matcha Gotcha support for Regulation Set M-B</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Sinistcha does not win by knocking out two Pokemon on turn one. It wins by making turn one miserable for the other player.
              A Rage Powder protects the setup turn. Hospitality repairs a battered partner on the switch. Matcha Gotcha burns something
              and puts HP back in the cup. That is enough to turn a normal attacker into a problem that refuses to leave.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Sinistcha support build guide cover with base stats"
              width={1672}
              height={941}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="prose-guide mt-10">
          <h2 id="why-sinistcha">Why Sinistcha fits Regulation Set M-B</h2>
          <p>
            Early Regulation Set M-B usage tells a simple story. Garchomp sits at the top, Sinistcha follows, and the rest of the list
            includes Basculegion, Whimsicott, Incineroar, Kingambit, Charizard, Farigiraf, Sylveon, and Sneasler. There are plenty of
            ways to deal damage. There are far fewer ways to keep a teammate alive long enough to use the damage it already has. That
            gap is where Sinistcha earns its slot.
          </p>
          <p>
            The source video is very blunt about the reason. This format has no Amoonguss, and it does not have a long list of alternate
            redirection Pokemon either. Maushold can use Follow Me. Sinistcha can use Rage Powder. That is a short menu. Add reliable
            ally healing to the same moveset and the answer becomes obvious for bulky offense, Shell Smash plans, Trick Room shells, and
            teams that simply want their first attacker to get a second chance.
          </p>
          <p>
            Calling it the best support in every possible situation would be lazy. Sinistcha loses to certain boards, it hates strong
            Fire pressure, and Grass Pokemon walk straight through Rage Powder. Still, the early M-B environment gives it a job that no
            other Pokemon does quite as cleanly. It redirects. It heals on entry. It can heal both slots with Life Dew. It can reverse
            speed order with Trick Room. It also has a spread Grass move that lets it take a breath and recover HP. That is a packed
            four-move menu for a Pokemon that does not need to run damage investment.
          </p>
          <p>
            This is why Sinistcha appears on teams that otherwise have little in common. A rain or Shell Smash team uses it to protect
            the turn that matters. A slower team uses it to turn on Trick Room. A balanced team sends it in next to a bruised Incineroar,
            Kingambit, or Blastoise and gets 25 percent of that partner&apos;s maximum HP back without spending a move. Sinistcha is flexible,
            but its plan is never mysterious: help the partner make the next turn count.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="stats-and-typing">Stats, typing, and Sinistcha&apos;s job</h2>
          <p>
            Sinistcha has 71 HP, 60 Attack, 106 Defense, 121 Special Attack, 80 Special Defense, and 70 Speed. The total is 508. The
            121 Special Attack catches the eye, then the support set mostly ignores it. That is not a mistake. A support Pokemon has
            four moves. Once Matcha Gotcha and Rage Powder take two, the remaining two spots are too valuable to waste on a second
            attacking move that fails to solve a real matchup.
          </p>
          <p>
            The useful numbers are 106 Defense, 80 Special Defense, and 70 Speed. Base 71 HP is merely okay, so max HP investment is
            not optional if Sinistcha needs to redirect attacks. The defensive stats then do the heavy lifting. A full-HP Sinistcha with
            a Bold nature is not a wall that sits forever, but it is sturdy enough to eat one important hit, get its partner through a
            turn, and force the opponent to spend more resources than they wanted.
          </p>
          <p>
            Grass and Ghost gives it a strange but useful defensive map. Sinistcha resists Water, Electric, Grass, and Ground. It is
            immune to Normal and Fighting. Those two immunities can make an opposing choice lock up for a moment. A Fake Out aimed into
            Sinistcha does nothing. A Fighting attack cannot remove it. It also ignores powder moves because it is Grass type, so a
            Vivillon that wants an easy Sleep Powder has to reconsider the board.
          </p>
          <p>
            The bad news is equally clear. Sinistcha is weak to Fire, Ice, Flying, Ghost, and Dark. It cannot hide from Charizard,
            Gholdengo, Basculegion, Kingambit, or Mega Aerodactyl forever. It is not supposed to. Your goal is to bring Sinistcha into
            the matchup where its resistances and redirection matter, then leave before the wrong attacker gets a clean shot. If you
            keep it in because the little tea cup has survived two turns already, it will eventually remind you that it is still a
            Grass/Ghost Pokemon with 71 base HP.
          </p>
          <p>
            Poltchageist makes the comparison easy. It has the same total but a worse spread, worse ability, worse typing package, and
            a much weaker competitive role. Sinistcha gets the defenses and the ability that make support work. The earlier tea is cute.
            The evolved tea is the one you put on a ranked team.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />

        <div className="prose-guide">
          <h2 id="hospitality">Hospitality is the reason to bring Sinistcha</h2>
          <p>
            Hospitality restores one quarter of an ally&apos;s maximum HP when Sinistcha enters the field. It does not need a target
            selection. It does not spend the turn. You switch Sinistcha in, the partner receives the heal, and you still have a move
            to use. That small line of text changes games. A Blastoise that survived a hit after Shell Smash can return to a much safer
            range. An Incineroar that has pivoted twice gets enough health to keep cycling. A Kingambit that needs one more turn to use
            Sucker Punch can suddenly afford it.
          </p>
          <p>
            Think of Hospitality as a switch-in resource, not an emergency button you save for the last turn. The best Hospitality
            turns often happen before Sinistcha looks threatened. Suppose your lead has taken 40 percent while holding the board. Bring
            Sinistcha in before the next exchange. The partner receives 25 percent back, Rage Powder can absorb the obvious hit, and
            now your attacker gets to act from a much healthier position. You did not reset the game. You stole a turn of damage from
            the opponent&apos;s plan.
          </p>
          <p>
            Heatproof halves Fire damage, and it is tempting when Mega Charizard Y keeps roasting your support slot. The trade is harsh.
            Heatproof turns Sinistcha into a redirector with a nicer Fire matchup. Hospitality turns it into the heal engine that the
            team selected in the first place. Run Heatproof only when your team already has another dependable source of ally recovery
            and Fire attacks are the exact reason your current version keeps losing. On most teams, Hospitality is the default because
            it creates value even when Sinistcha gets knocked out right after it arrives.
          </p>
          <p>
            Hospitality does have a limit. It heals the ally, not Sinistcha. Unlike Amoonguss in older formats, Sinistcha does not have
            Regenerator to patch itself up after every pivot. That is why Matcha Gotcha, Life Dew, berry choice, and careful switching
            all matter. You cannot play it like an immortal mushroom. It is closer to a medic carrying one very useful first-aid kit
            who also happens to be standing in front of a Dragon Claw.
          </p>
        </div>

        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="moveset">Best moveset and which fourth move to choose</h2>
          <p>
            The standard Sinistcha moveset starts with Matcha Gotcha and Rage Powder. The other two slots come from Trick Room, Life
            Dew, and Protect. That is not indecision. It is an honest response to what the team needs. The M3 move data supports the
            pattern: Matcha Gotcha and Rage Powder are nearly universal, while the three utility moves split the remaining slots.
          </p>
          <p>
            Rage Powder is the turn-buying button. Use it when the partner needs to Shell Smash, set up Nasty Plot, use Trick Room,
            finish a target, or simply survive a hard double target. It also reroutes many single-target moves away from a low-HP ally.
            The exception matters: Grass Pokemon ignore Rage Powder. Whimsicott and Venusaur are common enough that you must notice
            them at preview. Do not click Rage Powder next to your setup Pokemon and then act surprised when their Grass move lands
            exactly where it wanted to land.
          </p>
          <p>
            Matcha Gotcha is the single attacking move because it does three jobs. It hits both opponents, it has a 20 percent burn
            chance on each target, and it restores Sinistcha&apos;s HP based on damage dealt. Its 90 percent accuracy can fail at the worst
            possible moment. It also does not knock out bulky targets without Special Attack investment. That is fine. A support
            Sinistcha is not trying to collect huge KOs. It uses Matcha Gotcha to pick up residual damage, punish Water and
            Ground targets, and stay on the field after it has already spent a few turns helping somebody else.
          </p>
          <p>
            Trick Room belongs on teams with slow attackers or on teams that need an answer to Tailwind. Sinistcha has base 70 Speed,
            so it is not the slowest Trick Room user, but it can still turn the order around for pieces such as Incineroar, Kingambit,
            and bulky Mega evolutions. Life Dew restores both active Pokemon and is the better slot when the team wins through repeated
            trades. Protect is the plain option, which is why it is good. It lets Sinistcha dodge a double target, wait out Tailwind,
            scout a Dark or Ghost move, or let its partner remove the threat that would otherwise delete it.
          </p>
          <p>
            Shadow Ball and Strength Sap are real moves, not fake options. Shadow Ball is useful if you need Ghost damage into a very
            specific target. Strength Sap can swing a physical matchup and heal Sinistcha. Most teams still cut them because the support
            slots do more work. Before you drop Protect for Strength Sap, name the exact move or attacker it solves. If you cannot name
            it, keep the boring move. Boring moves win a lot of double battles.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="evs-and-nature">EVs, nature, and speed decisions</h2>
          <p>
            Start with 32 HP, 14 Defense, 20 Special Defense, and a Bold nature. In the source set screen, that produces 178 HP, 154
            Defense, 120 Special Defense, and 90 Speed at level 50. It is popular because it lands on a physical Defense threshold
            while keeping enough Special Defense to take a one-off special hit. The numbers are not magic. They are a sensible baseline
            for a Pokemon that wants to absorb one hit from either side of the damage chart.
          </p>
          <p>
            A second common spread uses 32 HP, 4 Defense, and 30 Special Defense. It reaches 143 Defense and 130 Special Defense.
            Use that one when Gholdengo, Mega Froslass, and special Ghost pressure matter more than contact moves. The choice is not
            about which spread looks popular in a menu. It is about which attack keeps beating your team after you have played ten games.
            If Black Glasses Kingambit keeps forcing Sinistcha out before it can redirect, take the physical version. If Shadow Ball
            turns keep ending your game, move points to Special Defense.
          </p>
          <p>
            Bold is usually right because Sinistcha&apos;s base Defense is already its better defensive stat. Boosting the stronger number
            gives a bigger return than trying to make its weaker number look less sad. Calm is reasonable on the special spread. Relaxed
            or Sassy can work under Trick Room, but do not lower Speed by habit. An uninvested Sinistcha reaches 90 Speed, while a
            Speed-lowering nature reaches 81. That small difference can matter against another slow support Pokemon or a lightly
            invested rain attacker outside Trick Room.
          </p>
          <p>
            This is the useful rule: max HP first, then use the two defenses to purchase the survival you need. Do not put points into
            Special Attack because Matcha Gotcha dealt 83 percent to something in a calculator. Sinistcha wins when the partner gets an
            extra turn. If a little more bulk buys that turn, it is better than turning a 2HKO into a slightly larger 2HKO.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="items">Items and resist berries: choose the hit you need to live</h2>
          <p>
            Sitrus Berry is the most common item in the source data, with Aguav Berry and Leftovers following behind. Those are good
            when Sinistcha expects several medium hits. Sitrus gives an immediate recovery window. Aguav can offer a larger emergency
            refill. Leftovers asks for a slower game and rewards you if Sinistcha repeatedly uses Protect, Rage Powder, and Matcha
            Gotcha without getting blown up. All three make sense on a team that already handles Ghost and Dark attackers well.
          </p>
          <p>
            Resist berries solve a more specific problem. Kasib Berry is a very good default when Basculegion and Last Respects sit in
            the format. Without it, a powered-up Last Respects can erase Sinistcha even through its physical investment. With it,
            Sinistcha can sometimes redirect that Ghost attack, keep the partner alive, and force the opponent to spend another turn.
            That is not glamorous. It is exactly how support Pokemon win games.
          </p>
          <p>
            Colbur Berry helps into Kingambit&apos;s Kowtow Cleave and other Dark pressure. Coba Berry matters when Mega Aerodactyl,
            Pelipper, Brave Bird, or Hurricane are the attacks that keep pushing you off the board. Occa Berry can make a Fire matchup
            less awful, although sun-boosted Mega Charizard Y can still hit too hard for one berry to fix. The item should answer the
            matchup that makes your team fall apart, not whichever berry has the coolest icon.
          </p>
          <p>
            Rocky Helmet would be excellent on Sinistcha if the item pool gives it to you. Rage Powder invites contact moves, and the
            Helmet punishes the opponent for taking that bait. The source specifically calls it a preferred option when available. Do
            not build a plan around it until the current in-game item list confirms access. Until then, a recovery berry or a resist
            berry is a less exciting and more dependable choice.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="matcha-gotcha">How to use Matcha Gotcha without pretending it is an attacker set</h2>
          <p>
            Matcha Gotcha has 80 base power, 90 percent accuracy, spread-move reduction in doubles, and a 20 percent burn chance. On a
            support build with no Special Attack investment, it is not a nuke. The source damage examples show that even a super-effective
            hit does not reliably remove a low-bulk Mega Swampert from full HP. Against Basculegion, it can create a clean 2HKO. That is
            useful, but it is not the reason you selected Sinistcha.
          </p>
          <p>
            Use the move when both opponents are likely to remain on the field and your partner does not need immediate redirection.
            The best result is often two small things at once: a target falls into your partner&apos;s knockout range and Sinistcha recovers
            enough HP to survive the next hit. A burn is a bonus, especially into physical attackers. If both targets can take the hit,
            the chance that at least one burns is higher than the 20 percent number makes it feel. Do not base a game plan on it, but
            take the free upside when the turn is already good.
          </p>
          <p>
            Water and Ground Pokemon make the cleanest Matcha Gotcha targets. Blastoise, Swampert, and similar bulky Water slots can
            become a source of recovery rather than a reason to switch. That sounds silly until the tea cup heals itself by hitting both
            targets and the setup attacker beside it gets another safe turn. The move is part damage, part sustain, and part threat of
            a crippling burn. The only bad version is treating it as a replacement for your actual damage dealer.
          </p>
        </div>

        <ArticleFigure figure={figures[5]} />

        <div className="prose-guide">
          <h2 id="benchmarks">Defensive benchmarks: what Sinistcha can and cannot survive</h2>
          <p>
            With 32 HP, 14 Defense, 20 Special Defense, and Bold, the source lists a 12.5 percent chance for a boosted Black Glasses
            Kingambit Kowtow Cleave to OHKO. That means the move usually leaves Sinistcha alive, but you should never call that a safe
            matchup. If you need Sinistcha to redirect one Dark move, Colbur Berry gives the plan much more room. If Kingambit can hit
            it twice or has partner chip, the baseline spread is not enough.
          </p>
          <p>
            Mega Aerodactyl Dual Wingbeat deals 80.8 to 96.6 percent in the cited spread, so Sinistcha survives the two hits but sits
            in a miserable range afterward. Mega Froslass Blizzard and Gholdengo Shadow Ball show a similar pattern: they usually do
            not score a clean one-hit knockout without help, but they make a second turn risky. This is the kind of bulk that asks the
            opponent to respect Sinistcha. It does not give you permission to leave it exposed forever.
          </p>
          <p>
            Basculegion is the hard stop. Adaptability Last Respects at 150 base power deals 150.5 to 177.5 percent in the source
            calculation. The math is not close. Kasib Berry changes the exchange, but it does not make a fully powered Last Respects
            pleasant. Mega Charizard Y Heat Wave in sun is also a guaranteed knockout. Heatproof can alter that one matchup, although
            it costs Hospitality. Decide which loss pattern appears more often in your own games.
          </p>
          <p>
            The simple benchmark rule is this: Sinistcha is strong at absorbing one planned hit, not two unplanned hits. Bring it in
            when you can name the move you expect. Use Rage Powder, Protect, or Matcha Gotcha accordingly. When the board contains
            Charizard in sun, boosted Basculegion, and a free attack, do not try to outsmart the damage chart. Preserve the support
            slot or trade it for the turn that wins the game.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="partners">Best teammates and team plans</h2>
          <p>
            Shell Smash Blastoise is the clearest Sinistcha partner in the source material. Blastoise takes a turn to become dangerous,
            which means the opponent wants to interrupt it, double target it, or force it to use Protect. Rage Powder makes that first
            Shell Smash far more comfortable. After Blastoise has taken damage, Hospitality restores a quarter of its maximum HP on the
            switch and Life Dew can repair both active slots. Sinistcha does not need to carry the matchup. It just needs Blastoise to
            remain alive long enough to carry it.
          </p>
          <p>
            The Santino team image shows the idea in a full six: Delphox, Blastoise, Sneasler, Incineroar, Sinistcha, and Maushold.
            Blastoise offers Shell Smash pressure. Incineroar provides Fake Out and pivoting. Maushold gives a second redirection option.
            Sneasler threatens targets that would otherwise sit in front of the team. Sinistcha is the glue that can redirect, repair,
            and punish Water/Ground targets with Matcha Gotcha. Copying the six exactly is optional. Understanding why the slots work
            together is more useful.
          </p>
          <p>
            Sinistcha also works beside Kingambit. Kingambit likes a safe turn to attack or set up, and Hospitality can put it back above
            a Sucker Punch survival threshold. Pair it with a partner that pressures Fire and Dark attackers, because Kingambit does not
            automatically solve those. Bulky Mega evolutions, slower special attackers, and physical sweepers that hate being double
            targeted all appreciate the same thing: one turn where the opponent cannot freely point both moves at them.
          </p>
          <p>
            On Trick Room teams, Sinistcha can set Trick Room itself or redirect while another setter does it. On Tailwind teams, it does
            not care that the team is fast. Rage Powder still buys turns, and Hospitality still heals. That is why it shows up on many
            structures. The partner decides the win condition. Sinistcha decides how hard it is for the opponent to stop it.
          </p>
        </div>

        <ArticleFigure figure={{ ...figures[6], width: 813, height: 896 }} />

        <div className="prose-guide">
          <h2 id="matchups">Bad matchups and the mistakes that throw games</h2>
          <p>
            Grass types ignore Rage Powder. Put that sentence somewhere visible. Whimsicott and Venusaur can target the partner through
            redirection, so Sinistcha does not protect a Shell Smash Blastoise from every board. It can still use other tools, but it is
            no longer the automatic safety button. If your whole plan collapses to Grass immunity, bring a second route: Fake Out,
            Follow Me, immediate pressure, or a lead that does not need to set up.
          </p>
          <p>
            Ghost, Dark, Flying, Ice, and Fire attackers all demand positioning. Basculegion with boosted Last Respects is the obvious
            Ghost problem. Kingambit threatens from the Dark side. Mega Aerodactyl and Pelipper can pressure through Flying moves.
            Gholdengo threatens Shadow Ball. Mega Charizard Y threatens Heat Wave, and sun makes the calculation ugly. A resist berry
            can patch one of those problems. It cannot patch all five, so do not draft a team that asks the tea cup to tank every bad
            type at the same time.
          </p>
          <p>
            Another common mistake is Rage Powder into a move that does not need to care. Spread moves still hit both active Pokemon.
            A well-timed Rage Powder can be correct if it blocks the important single-target attack, but it does not cancel Blizzard,
            Heat Wave, Hyper Voice, or other spread pressure. Look at both opposing moves before you choose it. If both opponents are
            likely to spread damage, Protect, attack with Matcha Gotcha, or make the safer switch may be the better use of the turn.
          </p>
          <p>
            Finally, do not sacrifice Sinistcha just because it is a support Pokemon. Its job is not to faint as quickly as possible. A
            good Rage Powder trade saves a boosted Blastoise, stops a game-deciding attack, or creates a winning endgame. A bad one saves a
            partner that was going to Protect anyway. Before you redirect, ask one question: what does the ally get to do because
            Sinistcha takes this hit? If the answer is nothing concrete, keep the cup on the shelf for a better turn.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="turn-guide">A practical turn guide for the first few games</h2>
          <p>
            Lead Sinistcha when the other lead has a clear setup turn to protect or when the opposing team lacks an immediate answer to
            Rage Powder. Shell Smash Blastoise is the easy example. If the opponent has a single-target Dark move on one slot and a
            harmless support move on the other, Rage Powder is attractive. If they have Charizard plus a spread attacker, leading
            Sinistcha may only give them a free Heat Wave target. Start with the board, not with the Pokemon you most want to use.
          </p>
          <p>
            Use Hospitality proactively. A common line is to lead an attacker and a different support or pivot, take one exchange, then
            bring Sinistcha in while the attacker is at 55 to 70 percent. The entry heal gets it back to a range where it survives the
            next trade. This is often better than leading Sinistcha, using Rage Powder once, and watching it leave before Hospitality
            has repaired the Pokemon that needed it.
          </p>
          <p>
            Click Matcha Gotcha when it makes the board easier, not when it simply looks like damage. It is strong into Water/Ground
            pairs, useful when both targets can take a burn, and helpful when Sinistcha needs recovery. Click Protect when a double
            target is likely or when Tailwind and Trick Room timing favor patience. Click Life Dew when both Pokemon gain another real
            turn from the heal. Clicking it at 10 percent next to a partner that is about to be knocked out anyway is often just a nice
            animation before you lose both slots.
          </p>
          <p>
            Keep the final slot honest. Trick Room belongs when your team uses it. Protect belongs when Sinistcha needs to survive a
            pressure turn. Life Dew belongs when two bulky Pokemon repeatedly trade damage. You can change the fourth move between
            games, but do not turn Sinistcha into a four-move toolbox that tries to do everything. The best build is the one that
            solves your team&apos;s actual problem and lets the other five Pokemon do their jobs.
          </p>
        </div>

        <section id="faq" className="prose-guide mt-10" aria-label="Sinistcha guide frequently asked questions">
          <h2>Frequently asked questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
          <p>
            For move, ability, and stat references, visit the local <Link href="/pokemon/sinistcha" className="font-black text-champion-blue hover:text-champion-red">Sinistcha database page</Link>.
            Use that data page for quick checks. Use this guide when you need to decide whether the turn calls for Rage Powder, a
            Hospitality switch, or the less glamorous option of leaving Sinistcha in the back for one more turn.
          </p>
        </section>
      </GuideArticleLayout>
    </article>
  );
}
