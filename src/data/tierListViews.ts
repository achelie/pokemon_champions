import type { TierListFormatKey } from "@/types/content";

export type TierListView = {
  key: TierListFormatKey;
  label: string;
  title: string;
  description: string;
};

export const tierListViews: TierListView[] = [
  {
    key: "double",
    label: "Double Battle",
    title: "Double Battle Tier List",
    description:
      "The default ranking emphasizes Double Battle pressure, support value, ease of use, and practical team fit."
  },
  {
    key: "single",
    label: "Single Battle",
    title: "Single Battle Tier List",
    description:
      "The Single Battle ranking focuses on consistency, matchup pressure, and how easily each Pokemon wins one-on-one lines."
  }
];

export function resolveTierListView(format: string | string[] | undefined) {
  const key = Array.isArray(format) ? format[0] : format;
  return tierListViews.find((view) => view.key === key) ?? tierListViews[0];
}
