export type BestTeamFormatViewKey = "single" | "double";

export type BestTeamFormatView = {
  key: BestTeamFormatViewKey;
  label: string;
  title: string;
  description: string;
};

export const bestTeamFormatViews: BestTeamFormatView[] = [
  {
    key: "single",
    label: "Single Battle",
    title: "Single Battle Teams",
    description: "Single Battle teams are being prepared."
  },
  {
    key: "double",
    label: "Double Battle",
    title: "Double Battle Teams",
    description: "Double Battle teams built around coordinated support, setup turns, and partner positioning."
  }
];

export function resolveBestTeamFormatView(format: string | string[] | undefined) {
  const key = Array.isArray(format) ? format[0] : format;
  return bestTeamFormatViews.find((view) => view.key === key) ?? bestTeamFormatViews[1];
}
