import Link from "next/link";

export default function AssessmentPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Assessment Page</h1>
      <Link
        href="/dashboard"
        className="mt-4 inline-block text-blue-600 underline"
      >
        Go to dashboard
      </Link>
    </main>
  );
}
