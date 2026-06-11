import { getMoveType } from "@/data/moves";
import { getPokemonTypeMeta } from "@/data/types";

type MoveBadgeProps = {
  move: string;
};

export function MoveBadge({ move }: MoveBadgeProps) {
  const moveType = getMoveType(move);
  const typeMeta = moveType ? getPokemonTypeMeta(moveType) : undefined;

  return (
    <span className="inline-flex items-center gap-1.5">
      {typeMeta ? (
        <img src={typeMeta.icon} alt={typeMeta.name} className="h-4 w-4 shrink-0" />
      ) : (
        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-slate-200 text-[10px] leading-none text-slate-500">?</span>
      )}
      <span>{move}</span>
    </span>
  );
}
