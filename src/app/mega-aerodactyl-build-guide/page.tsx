import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

const publishedAt = "2026-07-15";
const imageBase = "/images/guides/mega-aerodactyl-build-guide";
const coverImage = `${imageBase}/cover.png`;

const page = {
  title: "Pokemon Champions Mega Aerodactyl Build Guide - Tailwind and Rock Slide",
  description:
    "Complete Pokemon Champions Mega Aerodactyl build guide for Regulation Set M-B, covering Tailwind, Rock Slide, Dual Wingbeat, Ice Fang, Wide Guard, EVs, damage benchmarks, partners, and counterplay.",
  path: "/mega-aerodactyl-build-guide",
  image: coverImage,
  keywords: [
    "Pokemon Champions Mega Aerodactyl Build",
    "Pokemon Champions Mega Aerodactyl Guide",
    "Mega Aerodactyl Tailwind Rock Slide",
    "Mega Aerodactyl EVs",
    "Mega Aerodactyl Moveset",
    "Pokemon Champions Regulation Set M-B Aerodactyl",
    "Mega Aerodactyl Tough Claws",
    "Aerodactyl Wide Guard"
  ]
};

const faqs = [
  {
    question: "What is the best Mega Aerodactyl moveset in Pokemon Champions?",
    answer:
      "Rock Slide and Tailwind are the normal starting points. Dual Wingbeat and Ice Fang give the best direct coverage, while Protect and Wide Guard compete for the last slot. Most teams cannot fit all six useful moves, so the final choice should match the threats the team struggles with."
  },
  {
    question: "Should Mega Aerodactyl maximize Attack or HP?",
    answer:
      "Maximum Speed is the first priority. Full Attack is easy to use, but bulky spreads can remove Attack EVs because Dual Wingbeat still handles frail targets and Ice Fang still threatens Garchomp. HP investment gives Mega Aerodactyl a better chance to survive strong priority and spread attacks."
  },
  {
    question: "Does Tough Claws boost Rock Slide?",
    answer:
      "No. Tough Claws boosts contact moves, and Rock Slide does not make contact. It does boost Dual Wingbeat and Ice Fang, which is why those moves provide more reliable damage than Rock Slide when Mega Aerodactyl needs a knockout."
  },
  {
    question: "Is Mega Aerodactyl better than regular Aerodactyl?",
    answer:
      "Mega Aerodactyl is faster, stronger, and bulkier, but regular Aerodactyl can hold Focus Sash and preserve the team's Mega slot. Mega Aerodactyl works best as a flexible option on a dual-Mega team rather than as the only plan the team can use."
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
    alt: "Pokemon Champions Regulation Set M-B usage ranking with Aerodactyl at rank eighteen",
    caption:
      "The material tracks Aerodactyl from seventh to twelfth and then seventeenth across three early seasons. The displayed M-B snapshot lists it at eighteenth, while Whimsicott has moved into the top four."
  },
  {
    src: `${imageBase}/stats-typing-ability.png`,
    alt: "Regular and Mega Aerodactyl stats, Rock Flying typing, weaknesses, resistances, and Tough Claws",
    caption:
      "Mega Evolution raises Aerodactyl to 135 Attack, 85 Defense, 95 Special Defense, and 150 Speed. Tough Claws helps contact moves, but Rock Slide gets no boost."
  },
  {
    src: `${imageBase}/usage-data-changes.png`,
    alt: "Aerodactyl move and held item usage changes from launch to Regulation Set M-B",
    caption:
      "Aerodactylite rises from 14 percent to 51.9 percent in the source snapshot. Ice Fang also jumps from 3.5 percent to 30.9 percent as Garchomp becomes a more important target."
  },
  {
    src: `${imageBase}/recommended-sets.png`,
    alt: "Mega Aerodactyl EV rankings and recommended Tailwind Rock Slide movesets",
    caption:
      "Speed stays maxed on nearly every common spread. The real choice is whether the remaining points go into Attack or HP, and whether the fourth move is Protect, Ice Fang, or Wide Guard."
  },
  {
    src: `${imageBase}/offensive-benchmarks.png`,
    alt: "Mega Aerodactyl Dual Wingbeat Rock Slide and Ice Fang offensive damage benchmarks",
    caption:
      "Dual Wingbeat removes frail Whimsicott even without Attack investment. Rock Slide pressures Mega Charizard Y, while Tough Claws Ice Fang threatens Garchomp."
  },
  {
    src: `${imageBase}/defensive-benchmarks.png`,
    alt: "Mega Aerodactyl HP investment and defensive benchmarks against Hydro Pump Boomburst and Blizzard",
    caption:
      "Moving points from Attack into HP can turn several strong attacks into rolls instead of clean knockouts. Mega Aerodactyl still is not a tank, but 171 HP plays very differently from 157."
  }
];

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "role", title: "What Mega Aerodactyl does" },
  { id: "usage", title: "Why its usage changed" },
  { id: "stats", title: "Stats, typing, and Tough Claws" },
  { id: "mega-choice", title: "When to Mega Evolve" },
  { id: "moves", title: "Best moveset" },
  { id: "evs", title: "EV spreads and nature" },
  { id: "damage", title: "Offensive benchmarks" },
  { id: "bulk", title: "Defensive benchmarks" },
  { id: "partners", title: "Best partners and leads" },
  { id: "counterplay", title: "Weaknesses and counterplay" },
  { id: "turn-plan", title: "A practical turn plan" },
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

export default function MegaAerodactylBuildGuidePage() {
  return (
    <article className="bg-mist">
      <JsonLd data={articleJsonLd({ ...page, datePublished: publishedAt, dateModified: publishedAt })} />
      <JsonLd data={faqJsonLd(faqs)} />
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <header className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Mega Aerodactyl guide</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-champion-navy sm:text-5xl">
              Pokemon Champions Mega Aerodactyl build guide
            </h1>
            <p className="mt-4 text-lg font-black text-champion-blue">Tailwind, Rock Slide, and first-move control for Regulation Set M-B</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Mega Aerodactyl is the fast button you keep in reserve. It reaches 222 Speed, opens Tailwind before almost anything can
              interrupt it, and threatens the board with Rock Slide. The awkward part is that its best move ignores Tough Claws, its
              moveset wants six slots, and spending the Mega slot on it is not always the right call. Good teams use that tension.
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">
              Published <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={coverImage}
              alt="Pokemon Champions Mega Aerodactyl build guide cover with base stats"
              width={1672}
              height={941}
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="prose-guide mt-10">
          <h2 id="role">What Mega Aerodactyl does on a real team</h2>
          <p>
            Mega Aerodactyl is not a pure wallbreaker. If you expect 135 base Attack and Tough Claws to flatten every neutral target,
            Rock Slide will correct that idea quickly. Rock Slide does not make contact, so Tough Claws does nothing for it. The move
            also loses power when it hits both opponents. What you get instead is speed, spread chip, and two chances to flinch. That
            package can decide a turn even when the damage looks ordinary in a calculator.
          </p>
          <p>
            Its cleaner identity is fast support with credible damage. Base 150 Speed lets Mega Aerodactyl set Tailwind ahead of most
            unboosted Pokemon and even outrun several Choice Scarf users. Dual Wingbeat punishes frail Grass and Fighting targets. Ice
            Fang keeps Garchomp honest. Wide Guard can block a Rock Slide, Blizzard, Heat Wave, or other spread move at the moment the
            opponent thinks their turn is automatic. None of those jobs requires Mega Aerodactyl to sweep four Pokemon by itself.
          </p>
          <p>
            The source material repeatedly treats Mega Aerodactyl as a backup Mega. That is the right way to build around it. Pair
            Aerodactyl with Mega Charizard, Mega Florges, Mega Metagross, or another main option. Choose the Mega form during team
            preview. If the opponent has speed control that regular Aerodactyl cannot beat, Mega Evolve and take the first move. If your
            other Mega wins the matchup, keep Aerodactyl regular, use Focus Sash, and let it set Tailwind without taking the Mega slot.
          </p>
          <p>
            This makes Aerodactyl annoying to prepare for. The opponent sees a possible 222 Speed Mega, but they also have to respect a
            Focus Sash support lead. They may hold back a Choice Scarf Basculegion because Mega Aerodactyl can outrun it. They may avoid
            a spread move because Wide Guard could be present. Sometimes you do not even carry Wide Guard. The threat still changes the
            turn, which is free value from a moveslot you did not spend.
          </p>
        </div>

        <ArticleFigure figure={figures[0]} priority />

        <div className="prose-guide">
          <h2 id="usage">Why Aerodactyl usage fell while Aerodactylite rose</h2>
          <p>
            The three early season snapshots show Aerodactyl moving from seventh to twelfth and then seventeenth. The displayed M-B
            ranking places it eighteenth. Whimsicott moves the other way, from fifteenth to eighth and then fourth. That shift makes
            sense. Prankster Tailwind is easier to use, does not consume a Mega slot, and lets Whimsicott spend its other turns on
            disruption. Aerodactyl has to justify itself with damage, Wide Guard, Ice Fang, and the option to Mega Evolve.
          </p>
          <p>
            At the same time, Aerodactylite rises from 14 percent near launch to 51.9 percent in the source data. Focus Sash falls from
            77.1 percent to 39.2 percent. These numbers are not contradictory. Fewer teams may choose Aerodactyl, while the teams that
            still choose it increasingly value the Mega option. The specialist remains because it solves a specific speed problem, not
            because every Tailwind team needs a fossil in the first slot.
          </p>
          <p>
            Ice Fang tells the same story. It rises from 3.5 percent to 30.9 percent as Garchomp sits near the top of the format. Wide
            Guard also rises, and Protect falls sharply. Players are asking Aerodactyl to cover more exact jobs. The old simple set of
            Rock Slide, Tailwind, Dual Wingbeat, and Protect still works, but the M-B field rewards a build that knows which matchup it
            wants to steal.
          </p>
          <p>
            Do not turn the ranking into a death certificate. Eighteenth is still meaningful usage, and the material points to strong
            tournament finishes built around Aerodactyl pressure. It does mean you should stop adding it to every Tailwind team by
            habit. Pick it when 150 base Speed, Rock Slide, Ice Fang, or Wide Guard solves something the easier support options do not.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="stats">Stats, typing, and the awkward truth about Tough Claws</h2>
          <p>
            Regular Aerodactyl has 80 HP, 105 Attack, 65 Defense, 60 Special Attack, 75 Special Defense, and 130 Speed. Mega Evolution
            adds 30 Attack, 20 Defense, 10 Special Attack, 20 Special Defense, and 20 Speed. The result is 80 HP, 135 Attack, 85 Defense,
            70 Special Attack, 95 Special Defense, and 150 Speed. At level 50, a Jolly max-Speed build reaches 222. That number is the
            reason to press the Mega button.
          </p>
          <p>
            Rock and Flying gives useful offense into Fire, Grass, Ice, Fighting, Flying, and Bug. Steel resists both STAB types, so
            Aerodactyl needs a partner for bulky Steel Pokemon. Defensively, it is weak to Water, Electric, Ice, Rock, and Steel. It
            resists Normal, Fire, Poison, Flying, and Bug, and it is immune to Ground. The Ground immunity is excellent next to Garchomp
            or any partner that wants to click Earthquake without asking permission.
          </p>
          <p>
            Tough Claws raises contact move damage by 30 percent. Dual Wingbeat, Ice Fang, and several coverage moves benefit. Rock Slide
            does not. This mismatch is why Mega Aerodactyl can feel weaker than its stat total suggests. It has 615 total base stats and
            a damage ability, yet its defining spread move receives no help from that ability. Brave Bird and Head Smash would fix the
            raw power issue, but they are not part of the practical Champions moveset shown in the local data.
          </p>
          <p>
            Regular Aerodactyl also gives up Unnerve when it Mega Evolves. Unnerve prevents opponents from eating berries, which can
            matter into resist berries and emergency recovery. Mega Evolution trades that utility and Focus Sash access for better bulk,
            stronger contact moves, and a 22-point Speed jump on a max-Speed build. The trade is worth it when moving first changes the
            game. It is wasteful when the regular form already outruns everything that matters.
          </p>
        </div>

        <ArticleFigure figure={figures[1]} />
        <ArticleFigure figure={figures[2]} />

        <div className="prose-guide">
          <h2 id="mega-choice">When to Mega Evolve and when to save the slot</h2>
          <p>
            Mega Evolve when the extra Speed creates an immediate advantage. Choice Scarf Basculegion is the clean example from the
            material. A 143 Speed Basculegion reaches about 214 with Choice Scarf. Regular max-Speed Aerodactyl reaches 200 and loses.
            Mega Aerodactyl reaches 222, sets Tailwind first, and lets its partner remove Basculegion before Last Respects tears through
            the team. That is a Mega Evolution with a job.
          </p>
          <p>
            Save the Mega slot when the opposing team is naturally slower and your other Mega carries the matchup. Regular Aerodactyl
            can set Tailwind at base 130 Speed, use Rock Slide, and survive one attack through Focus Sash. A Mega Charizard partner may
            then use sun-boosted pressure to win the board. If both Aerodactyl and Charizard enter together, Charizard normally needs the
            Mega Evolution more. Regular Charizard gives up too much damage and weather control, while regular Aerodactyl still does its
            support job.
          </p>
          <p>
            Dual-Mega team building is about options, not indecision. Mega Aerodactyl covers fast opposing leads, dangerous Choice Scarf
            attackers, and games where Tailwind must happen before a Taunt or knockout. The other Mega handles slower boards where raw
            damage matters more. You decide during preview, then play the selected line with conviction. Trying to keep both plans alive
            after turn one usually produces a confused team and two Pokemon doing half a job.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="moves">Best Mega Aerodactyl moveset</h2>
          <p>
            Rock Slide and Tailwind are the foundation. Rock Slide appears on 98.8 percent of the source sets, and Tailwind sits above
            93 percent. Dual Wingbeat is the best Flying damage button. Ice Fang targets Garchomp. Protect and Wide Guard are the main
            defensive options. That is six useful moves fighting for four slots, which is why every Mega Aerodactyl build looks one move
            short.
          </p>
          <p>
            The safest general set is Rock Slide, Tailwind, Dual Wingbeat, and Protect. It sets speed, threatens flinches, removes frail
            Fighting or Grass targets, and protects itself when the opponent tries to deny Tailwind through a double target. Replace
            Protect with Ice Fang when Garchomp is a problem your partners do not solve. Replace Protect with Wide Guard when spread
            attacks define the matchup.
          </p>
          <p>
            You can also drop Dual Wingbeat, as one high-ranked example in the source material did. That choice makes room for Rock
            Slide, Tailwind, Wide Guard, and Ice Fang. It is a sharp tournament call when the team already handles Whimsicott, Sneasler,
            and other Flying-weak targets. It is uncomfortable on the ladder because Dual Wingbeat is the move that turns Tough Claws
            into direct damage. Without it, Mega Aerodactyl becomes even more dependent on Rock Slide variance.
          </p>
          <p>
            Wide Guard has a useful bluff. Opponents see Aerodactyl and hesitate before clicking a spread move even when you left Wide
            Guard at home. You can exploit that by running four other moves. Do not get too pleased with the trick. Once the opponent
            confirms the set, the bluff is gone. If your team truly loses to Blizzard, Heat Wave, Hyper Voice, or opposing Rock Slide,
            carry Wide Guard instead of trying to win a staring contest.
          </p>
          <p>
            Taunt, Earthquake, Psychic Fangs, and Sunny Day appear in smaller numbers. They belong on teams with a clear reason. Sunny
            Day can support a Charizard plan. Taunt can stop slower setup or Trick Room. Psychic Fangs can remove screens. These are
            team-specific tools, not moves you squeeze in because a list says Aerodactyl learns them.
          </p>
        </div>

        <ArticleFigure figure={figures[3]} />

        <div className="prose-guide">
          <h2 id="evs">EV spreads, Jolly nature, and why Speed comes first</h2>
          <p>
            Use a Jolly nature and maximize Speed unless you have a tested benchmark that says otherwise. Mega Aerodactyl mirrors are
            decided at 222 Speed, and regular Aerodactyl mirrors care about the same investment before Mega Evolution. Dropping Speed
            for a small amount of bulk can cost Tailwind, a Rock Slide, and the entire turn. That is a bad discount.
          </p>
          <p>
            The simple spread is 2 HP, 32 Attack, and 32 Speed. It reaches 157 HP, 187 Attack, 105 Defense, 115 Special Defense, and 222
            Speed after Mega Evolution. This version maximizes direct damage and needs little explanation. It is good when the team uses
            Dual Wingbeat often and expects Aerodactyl to finish weakened targets after setting Tailwind.
          </p>
          <p>
            The bulky version shown in the material uses 16 HP, 18 Attack, and 32 Speed, reaching 171 HP and 173 Attack. Other common
            spreads push HP to 22 points while keeping 32 Speed. The logic is practical: frail targets such as Whimsicott still fall to
            Dual Wingbeat without full Attack, while defensive targets such as Sinistcha do not suddenly become clean knockouts just
            because you spent every point on Attack. Move those points into HP and survive another hit instead.
          </p>
          <p>
            A specialized tournament spread may stop at 205 Speed to outrun a 204 benchmark rather than win the Mega Aerodactyl mirror.
            That can work in a closed field where you know the targets. It is riskier on the open ladder. If you borrow such a spread,
            understand what it outruns and what now outruns it. Copying a champion&apos;s six Pokemon without copying the reasoning is how
            a clever spread turns into a mysterious loss.
          </p>
        </div>

        <ArticleFigure figure={figures[4]} />

        <div className="prose-guide">
          <h2 id="damage">Offensive benchmarks and what the numbers mean</h2>
          <p>
            Tough Claws turns Dual Wingbeat&apos;s combined 80 base power into an effective 104 before STAB. Even a zero-Attack Mega
            Aerodactyl deals 125.5 to 151.8 percent to the listed max-HP Whimsicott. That is a guaranteed knockout if both hits connect.
            Sneasler and other frail Flying-weak targets face the same problem. This is why reducing Attack investment does not make Mega
            Aerodactyl harmless.
          </p>
          <p>
            The matchup changes against physical bulk. A full-Attack Dual Wingbeat deals 74.1 to 89.8 percent to the listed defensive
            Sinistcha spread. More Attack does not buy the knockout. Aerodactyl needs partner damage, a prior Rock Slide, or a second turn.
            This supports the bulky EV idea: if the targets you beat still faint and the targets you miss still live, more HP gives a
            clearer return than the last few Attack points.
          </p>
          <p>
            Rock Slide into the listed Mega Charizard Y spread deals 90.8 to 110.2 percent, a 37.5 percent knockout chance. It pressures
            Charizard, but it is not a promise. Partner chip makes the line far safer. Rock Slide&apos;s other reward is the 30 percent flinch
            chance on each target when Aerodactyl moves first. Treat a flinch as upside, not a plan you are owed. If your turn loses when
            both opponents move, the turn was fragile before the game rolled the dice.
          </p>
          <p>
            Ice Fang with full Attack deals 95.1 to 112.4 percent to the listed low-HP Garchomp, a 62.5 percent knockout chance. This is
            useful four-times-effective coverage, but damage rolls and Garchomp bulk still matter. Chip it first when possible. The move
            also receives Tough Claws, so it is much more than decorative coverage.
          </p>
        </div>

        <ArticleFigure figure={figures[5]} />

        <div className="prose-guide">
          <h2 id="bulk">Defensive benchmarks: 157 HP versus 171 HP</h2>
          <p>
            Mega Aerodactyl has respectable 85 Defense and 95 Special Defense, but base 80 HP and mandatory Speed investment stop it
            from becoming a wall. At 157 HP, its rough defensive thresholds sit around 195 physical power and 210 special power in the
            source model. At 171 HP, those rise to about 210 and 230. Fourteen HP points are not flashy. They can be the difference
            between setting Tailwind and disappearing before the partner moves.
          </p>
          <p>
            The material shows a Life Orb Adaptability Hydro Pump dealing 89.1 to 105.7 percent to the low-HP version, which gives it a
            25 percent knockout chance. A bulky version can make that attack less reliable. A strong Boomburst in sun and a Choice Specs
            Blizzard also become rolls around the 171 HP mark. None of this makes Aerodactyl comfortable into Water or Ice damage. It
            simply buys a chance to do its job.
          </p>
          <p>
            Priority is another reason to add bulk. Basculegion Aqua Jet, Kingambit Sucker Punch, and partner chip can remove a low-HP
            Mega Aerodactyl before it uses its speed. A few HP points can block that sequence. If the team expects Aerodactyl to set
            Tailwind and then contribute for two more turns, use a bulky spread. If it only needs one fast attack and has redirection or
            screens, full Attack may be the better bargain.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="partners">Best partners, dual-Mega structures, and reliable leads</h2>
          <p>
            Kingambit is one of the cleanest partners. Aerodactyl sets Tailwind while Focus Sash Kingambit attacks immediately. Intimidate
            is awkward for the opponent because Defiant can punish it. Garchomp does not enjoy the lead either: Ice Fang threatens it,
            Aerodactyl ignores Earthquake, and Kingambit can pressure the slot beside it. The pair forces action without needing a long
            setup sequence.
          </p>
          <p>
            Mega Charizard is a natural second Mega. In games where speed matters most, Mega Aerodactyl takes the stone and supports a
            different damage dealer. In games where sun and Fire damage matter, regular Aerodactyl uses Focus Sash, sets Tailwind, and
            Charizard Mega Evolves. Sunny Day can appear on specialized Aerodactyl sets, but most teams would rather spend the slot on
            coverage or protection and let Charizard handle its own weather.
          </p>
          <p>
            Garchomp enjoys Aerodactyl&apos;s Ground immunity and Tailwind. Sylveon likes the same speed control and can punish both opponents
            after Rock Slide has chipped them. Basculegion appreciates Tailwind and can clean once early targets fall. Farigiraf can add
            Trick Room or priority control, creating a team that changes speed modes rather than losing when Tailwind expires.
          </p>
          <p>
            Avoid pairing Aerodactyl with Whimsicott unless the team has a very specific reason. Both are usually chosen to set Tailwind,
            and the overlap spends two slots on the same opening job. Aerodactyl wants partners that use its four Tailwind turns, cover
            Water and Electric attacks, or punish Steel Pokemon. A second Tailwind setter often watches from the back while the team
            wonders where its damage went.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="counterplay">Weaknesses and how opponents stop Mega Aerodactyl</h2>
          <p>
            Water, Electric, Ice, Rock, and Steel attacks all hit super effectively. Strong spread attacks are especially uncomfortable
            because they can damage Aerodactyl and its partner while ignoring the target choice games that normally protect a fast lead.
            Wide Guard helps, but carrying it costs a coverage or protection slot. Once the set is known, the opponent can choose a
            single-target answer and stop respecting the bluff.
          </p>
          <p>
            Priority bypasses the Speed stat. Aqua Jet, Sucker Punch, and other priority moves can finish a chipped Mega Aerodactyl before
            Tailwind or Rock Slide. Farigiraf and similar priority control can help, but that requires another team slot. Intimidate also
            cuts the damage of Rock Slide, Dual Wingbeat, and Ice Fang. The Kingambit lead discourages casual Intimidate, which is one
            reason the pair works so well.
          </p>
          <p>
            Trick Room turns base 150 Speed into a liability. If the opponent can survive the opening and reverse speed order, Mega
            Aerodactyl may move last for the next several turns. Taunt can stop a predictable setter, Rock Slide can fish for a flinch,
            and Kingambit can pressure common Trick Room partners. Those are ways to contest the setup. They are not guarantees.
          </p>
          <p>
            Bulky Steel and Water Pokemon can also ignore Aerodactyl&apos;s normal damage plan. Rock Slide chip is fine, but it will not carry
            that matchup alone. Bring a partner that threatens those types. If the team expects Aerodactyl to break every wall after it
            has already spent a turn on Tailwind, the problem is the team sheet, not the fossil.
          </p>
        </div>

        <div className="prose-guide">
          <h2 id="turn-plan">A practical turn plan for your first games</h2>
          <p>
            At preview, decide whether Aerodactyl will Mega Evolve. Check the fastest opposing Pokemon, any Choice Scarf candidate, and
            which of your two Mega options has the stronger matchup. Do this before selecting the lead. A dual-Mega team works because
            it makes the decision early, not because it improvises after both stones are already on the field.
          </p>
          <p>
            On turn one, Tailwind is the default when it changes move order and the partner can use the advantage immediately. Rock
            Slide is better when both opponents are already slower, when chip creates two knockouts for the partner, or when denying a
            setup turn matters more than four turns of speed. Dual Wingbeat and Ice Fang are for clean targets. Use the coverage move
            when it removes a threat, not just because Tough Claws makes the number look nicer.
          </p>
          <p>
            Protect when the opponent has to double target Aerodactyl or when a partner can remove the answer beside it. Wide Guard when
            the spread move is obvious and blocking it creates a winning swing. After Tailwind is active, do not throw Aerodactyl away
            for a low-value Rock Slide. Preserve it if a second Tailwind may be needed. Trade it if the partner gets a decisive knockout
            and the back line can finish within the current speed window.
          </p>
          <p>
            The build should feel direct. Move first, set the speed rule, and attack the target your partner cannot cover. The difficult
            choices happen before the battle: which Mega, which fourth move, and how much Attack to trade for HP. Get those right and
            Mega Aerodactyl is a sharp tool. Get them wrong and it becomes a very fast way to click Rock Slide once.
          </p>
        </div>

        <section id="faq" className="prose-guide mt-10" aria-label="Mega Aerodactyl guide frequently asked questions">
          <h2>Frequently asked questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
          <p>
            Check the local <Link href="/pokemon/aerodactyl-mega" className="font-black text-champion-blue hover:text-champion-red">Mega Aerodactyl database page</Link> for
            its full move list and base stats. The regular <Link href="/pokemon/aerodactyl" className="font-black text-champion-blue hover:text-champion-red">Aerodactyl page</Link> is
            useful when comparing the Focus Sash version against the Mega build.
          </p>
        </section>
      </GuideArticleLayout>
    </article>
  );
}
