import type { Metadata } from "next";

import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokémon Champions Pokémon HOME Guide",
  description: "A careful Pokemon Champions HOME guide covering transfer overview, limitations, best use cases, and compatibility warnings.",
  path: "/pokemon-home",
  keywords: ["Pokémon Champions Pokémon HOME", "How to Transfer Pokémon to Pokémon Champions", "Pokémon Champions HOME Guide"]
};

export const metadata: Metadata = createPageMetadata(page);

export default function PokemonHomePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(page)} />
      <PageHeader
        eyebrow="Pokémon HOME"
        title="Pokémon Champions Pokémon HOME Guide"
        description="Use Pokémon HOME carefully in Pokémon Champions, especially before confirmed compatibility and launch restrictions are widely documented."
      />
      <DisclaimerBox>Check official compatibility before transferring. This guide does not list unconfirmed compatible Pokémon.</DisclaimerBox>
      <div className="prose-guide mt-8">
        <h2>What Pokémon HOME does in Pokémon Champions</h2>
        <p>
          Pokémon HOME support lets players bring eligible Pokémon into Pokémon Champions while also using in-game recruitment for team building.
          For a PvP-focused game, HOME can help players prepare battle-ready options once restrictions are confirmed.
        </p>

        <h2>Transfer overview</h2>
        <p>
          The safest approach is to treat transfers as a planned step: decide which role your team needs, check official compatibility, then move
          only Pokémon that match your battle plan and the confirmed rules.
        </p>

        <h2>Important limitations</h2>
        <ul>
          <li>Do not assume every Pokémon, move, form, or battle-ready setup is supported.</li>
          <li>Check official compatibility before transferring.</li>
          <li>Ranked rules may restrict Pokémon or strategies even when a transfer is technically possible.</li>
          <li>Future balance updates may change what is worth preparing.</li>
        </ul>

        <h2>Best use cases</h2>
        <p>
          Pokémon HOME is most useful for filling team roles, testing known partners, preparing alternate builds, and reducing the time needed to
          try a new Ranked Battle concept.
        </p>
      </div>
      <FAQ items={faqsByPage["pokemon-home"]} />
    </article>
  );
}
