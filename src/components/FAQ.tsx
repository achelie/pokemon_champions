import type { FAQItem } from "@/types/content";
import { faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd(items)} />
      <h2 id="faq-heading" className="text-2xl font-black text-champion-navy">
        FAQ
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-lg border border-line bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-base font-black text-champion-navy">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
