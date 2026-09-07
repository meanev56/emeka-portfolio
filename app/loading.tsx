export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500" />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-white">Loading Portfolio</h2>
          <p className="text-sm text-slate-400">Preparing frontend experience...</p>
        </div>
      </div>
    </main>
  );
}