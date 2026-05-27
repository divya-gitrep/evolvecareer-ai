"use client";

import Link from "next/link";
import { useState } from "react";

const roles = ["Manual QA Engineer", "Test Automation Engineer"];

const targetRoles = [
  {
    title: "AI-Augmented QA Strategist",
    description:
      "Use AI tools to improve quality strategy, risk analysis, test planning, and release confidence.",
  },
  {
    title: "AI-Assisted Test Automation Specialist",
    description:
      "Build smarter automation workflows with AI-supported test design, scripting, and maintenance.",
  },
];

const assessmentQuestions = [
  {
    id: "codingConfidence",
    label: "Coding confidence",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "aiFamiliarity",
    label: "AI familiarity",
    options: ["New to AI", "Used AI tools", "Comfortable building with AI"],
  },
  {
    id: "yearsOfExperience",
    label: "Years of experience",
    options: ["0-2 years", "3-5 years", "6+ years"],
  },
];

export default function AssessmentPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedTargetRole, setSelectedTargetRole] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-950">
      <section className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-teal-700">Assessment</p>
        <h1 className="mt-2 text-2xl font-semibold">
          Select your current role
        </h1>

        <div className="mt-6 space-y-3">
          {roles.map((role) => (
            <label
              key={role}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50"
            >
              <input
                type="radio"
                name="currentRole"
                value={role}
                checked={selectedRole === role}
                onChange={(event) => setSelectedRole(event.target.value)}
                className="h-4 w-4 accent-teal-700"
              />
              <span className="font-medium text-slate-800">{role}</span>
            </label>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Choose your target path</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {targetRoles.map((targetRole) => {
              const isSelected = selectedTargetRole === targetRole.title;

              return (
                <button
                  key={targetRole.title}
                  type="button"
                  onClick={() => setSelectedTargetRole(targetRole.title)}
                  className={`rounded-lg border p-4 text-left transition ${
                    isSelected
                      ? "border-teal-600 bg-teal-50 ring-2 ring-teal-100"
                      : "border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  <h3 className="font-semibold text-slate-950">
                    {targetRole.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {targetRole.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Assessment questions</h2>
          <div className="mt-4 grid gap-4">
            {assessmentQuestions.map((question) => (
              <label key={question.id} className="block">
                <span className="text-sm font-medium text-slate-700">
                  {question.label}
                </span>
                <select
                  value={answers[question.id] || ""}
                  onChange={(event) =>
                    setAnswers((currentAnswers) => ({
                      ...currentAnswers,
                      [question.id]: event.target.value,
                    }))
                  }
                  className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                >
                  <option value="">Select an option</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </div>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100 sm:w-auto"
        >
          Craft My Journey
        </Link>
      </section>
    </main>
  );
}
