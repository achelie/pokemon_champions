import { getPokemonTypeMeta, splitPokemonTypes } from "@/data/types";

type TypeBadgeProps = {
  type: string;
};

export function TypeBadge({ type }: TypeBadgeProps) {
  const meta = getPokemonTypeMeta(type);

  if (!meta) {
    return <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-black text-slate-700">{type}</span>;
  }

  return (
    <span
      className="inline-flex min-w-20 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-black text-white shadow-sm"
      style={{ backgroundColor: meta.color }}
      title={`${meta.name} type`}
    >
      <span className="grid h-4 w-4 place-items-center rounded-full bg-white/25 text-[10px] leading-none">{meta.glyph}</span>
      <span>{meta.name}</span>
    </span>
  );
}

type TypeBadgeListProps = {
  type: string;
};

export function TypeBadgeList({ type }: TypeBadgeListProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {splitPokemonTypes(type).map((singleType) => (
        <TypeBadge key={singleType} type={singleType} />
      ))}
    </div>
  );
}
