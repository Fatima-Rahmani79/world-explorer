import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#001954] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d2f78]"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
}
