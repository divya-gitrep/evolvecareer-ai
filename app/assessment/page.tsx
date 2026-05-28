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
    options: ["5-10 years", "10-15 years", "15-20 years", "20-30 years"],
  },
];

const careerTransitionJourneys = {
  "Manual QA Engineer|AI-Augmented QA Strategist|Beginner": {
    readinessScore: 62,
    summary:
      "Focus on using AI to strengthen test planning, risk analysis, and communication before adding technical depth.",
    firstStep: "Practice turning product requirements into AI-assisted test scenarios.",
  },
  "Manual QA Engineer|AI-Augmented QA Strategist|Intermediate": {
    readinessScore: 74,
    summary:
      "Build on your QA judgment by adding AI-supported strategy, release risk reviews, and stakeholder-ready summaries.",
    firstStep: "Create a reusable prompt workflow for regression planning.",
  },
  "Manual QA Engineer|AI-Augmented QA Strategist|Advanced": {
    readinessScore: 82,
    summary:
      "Move toward quality leadership by combining strong QA context with AI-driven decision support.",
    firstStep: "Design an AI-assisted quality dashboard for a sample release.",
  },
  "Manual QA Engineer|AI-Assisted Test Automation Specialist|Beginner": {
    readinessScore: 55,
    summary:
      "Start with coding fundamentals while using AI to explain scripts, selectors, and automation patterns.",
    firstStep: "Automate one simple smoke test with AI guidance.",
  },
  "Manual QA Engineer|AI-Assisted Test Automation Specialist|Intermediate": {
    readinessScore: 68,
    summary:
      "Pair your QA experience with automation practice and AI-assisted test maintenance workflows.",
    firstStep: "Refactor a brittle test case using AI-generated suggestions.",
  },
  "Manual QA Engineer|AI-Assisted Test Automation Specialist|Advanced": {
    readinessScore: 78,
    summary:
      "You can move quickly toward AI-assisted automation by building reusable patterns and test utilities.",
    firstStep: "Build a small automation suite and document the AI-assisted workflow.",
  },
  "Test Automation Engineer|AI-Augmented QA Strategist|Beginner": {
    readinessScore: 66,
    summary:
      "Use your automation background as a base while improving AI literacy and strategic quality planning.",
    firstStep: "Use AI to summarize automation results into product risk insights.",
  },
  "Test Automation Engineer|AI-Augmented QA Strategist|Intermediate": {
    readinessScore: 80,
    summary:
      "Shift from execution to strategy by applying AI to coverage analysis, risk prioritization, and release planning.",
    firstStep: "Create an AI-assisted test coverage review for a feature release.",
  },
  "Test Automation Engineer|AI-Augmented QA Strategist|Advanced": {
    readinessScore: 88,
    summary:
      "You are well positioned to lead AI-enabled quality strategy across automation, analytics, and release readiness.",
    firstStep: "Prototype an AI-assisted quality review playbook.",
  },
  "Test Automation Engineer|AI-Assisted Test Automation Specialist|Beginner": {
    readinessScore: 70,
    summary:
      "Strengthen your automation foundation by using AI to explain code, generate test ideas, and debug failures.",
    firstStep: "Use AI to analyze and improve one flaky automated test.",
  },
  "Test Automation Engineer|AI-Assisted Test Automation Specialist|Intermediate": {
    readinessScore: 84,
    summary:
      "Advance into AI-assisted automation by improving test design speed, maintenance, and framework productivity.",
    firstStep: "Create prompt templates for generating and reviewing test scripts.",
  },
  "Test Automation Engineer|AI-Assisted Test Automation Specialist|Advanced": {
    readinessScore: 92,
    summary:
      "You are ready to specialize in AI-assisted automation architecture, tooling, and productivity workflows.",
    firstStep: "Build a reusable AI-assisted automation workflow for a sample app.",
  },
};

function getJourneyKey(
  currentRole: string,
  targetRole: string,
  codingConfidence: string,
) {
  return `${currentRole}|${targetRole}|${codingConfidence}`;
}

function getDashboardHref(
  currentRole: string,
  targetRole: string,
  codingConfidence: string,
) {
  const params = new URLSearchParams();

  if (currentRole) {
    params.set("currentRole", currentRole);
  }

  if (targetRole) {
    params.set("targetRole", targetRole);
  }

  if (codingConfidence) {
    params.set("codingConfidence", codingConfidence);
  }

  const query = params.toString();

  return query ? `/dashboard?${query}` : "/dashboard";
}

export default function AssessmentPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedTargetRole, setSelectedTargetRole] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const codingConfidence = answers.codingConfidence || "";
  const selectedJourney =
    careerTransitionJourneys[
      getJourneyKey(selectedRole, selectedTargetRole, codingConfidence) as keyof typeof careerTransitionJourneys
    ];

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
          href={getDashboardHref(
            selectedRole,
            selectedTargetRole,
            codingConfidence,
          )}
          title={selectedJourney?.summary}
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100 sm:w-auto"
        >
          Craft My Journey
        </Link>
      </section>
    </main>
  );
}
