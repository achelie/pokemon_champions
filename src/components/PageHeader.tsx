type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">{eyebrow}</p> : null}
      <h1 className={eyebrow ? "mt-3 max-w-4xl text-4xl font-black leading-tight text-champion-navy sm:text-5xl" : "max-w-4xl text-4xl font-black leading-tight text-champion-navy sm:text-5xl"}>{title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
    </header>
  );
}
