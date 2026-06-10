import type { ReactNode } from "react";

type DisclaimerBoxProps = {
  children: ReactNode;
};

export function DisclaimerBox({ children }: DisclaimerBoxProps) {
  return (
    <aside className="rounded-lg border border-champion-yellow/70 bg-champion-yellow/15 p-4 text-sm font-bold leading-6 text-champion-navy">
      {children}
    </aside>
  );
}
