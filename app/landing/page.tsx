import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Landing Page</h1>
      <Link
        href="/assessment"
        className="mt-4 inline-block text-blue-600 underline"
      >
        Start assessment
      </Link>
    </main>
  );
}
