import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
        <p className="mb-5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm">
          EvolveCareer AI
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-6xl">
          Build your AI-ready career path with confidence.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Discover your strengths, identify the right next role, and get a
          practical plan to grow into AI-enabled tech careers.
        </p>
        <Link
          href="/assessment"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-slate-950 px-7 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"
        >
          Start Your Journey
        </Link>
      </section>
    </main>
  );
}