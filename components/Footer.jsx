export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm text-slate-400">
            World Explorer — an elegant portfolio-quality country app built with
            Next.js.
          </p>
        </div>
        <p className="text-sm text-slate-500">© 2026 World Explorer</p>
      </div>
    </footer>
  );
}
