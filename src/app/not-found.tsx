import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">404</p>
      <h1 className="mt-3 text-4xl font-black text-champion-navy">Guide not found</h1>
      <p className="mt-4 text-slate-600">This page is not part of the Pokémon Champions Guide MVP.</p>
      <Link href="/" className="mt-7 inline-flex rounded-full bg-champion-blue px-5 py-3 text-sm font-extrabold text-white">
        Back to homepage
      </Link>
    </section>
  );
}
