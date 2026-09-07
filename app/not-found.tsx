import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6">
      <div className="max-w-2xl text-center">
        <p className="text-cyan-400 text-lg font-medium">404</p>

        <h1 className="mt-4 text-6xl md:text-8xl font-bold text-white">
          Lost in Space.
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 px-8 py-4 text-white font-medium"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}