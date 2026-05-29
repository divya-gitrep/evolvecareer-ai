"use client";

import { useState } from "react";

const weeklyProgress = [
  {
    id: "week-1",
    title: "Week 1 — Prompt Engineering Basics",
    goal: "Learn how to write clear prompts for test planning, risk analysis, and QA summaries.",
  },
  {
    id: "week-2",
    title: "Week 2 — AI-Assisted Test Design",
    goal: "Use AI to generate test scenarios, edge cases, and regression coverage ideas.",
  },
  {
    id: "week-3",
    title: "Week 3 — Automation Workflow Boost",
    goal: "Practice using AI to explain scripts, debug failures, and improve test maintainability.",
  },
  {
    id: "week-4",
    title: "Week 4 — Portfolio Story",
    goal: "Package your AI-assisted QA work into a concise career transition proof point.",
  },
];

const simulationMissions = [
  {
    id: "release-risk-review",
    title: "AI-Assisted Release Risk Review",
    status: "Completed",
  },
  {
    id: "regression-planning",
    title: "Focused Regression Planning",
    status: "Completed",
  },
];

export default function ProgressPage() {
  const [completedWeeks, setCompletedWeeks] = useState(
    () => new Set(["week-1"]),
  );
  const [sharedMission, setSharedMission] = useState("");

  function toggleWeek(weekId: string) {
    setCompletedWeeks((currentWeeks) => {
      const nextWeeks = new Set(currentWeeks);

      if (nextWeeks.has(weekId)) {
        nextWeeks.delete(weekId);
      } else {
        nextWeeks.add(weekId);
      }

      return nextWeeks;
    });
  }

  const sharedMissionTitle = simulationMissions.find(
    (mission) => mission.id === sharedMission,
  )?.title;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_42%,#f0fdfa_100%)] p-5 text-slate-950 sm:p-8">
      <section className="mx-auto max-w-5xl py-8 sm:py-10">
        <header className="rounded-lg border border-white/80 bg-white/95 p-6 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100 sm:p-8">
          <p className="inline-flex rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
            Progress Tracker
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
            Your AI Transition Progress
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Track your weekly growth as you build practical AI skills and turn
            your QA experience into a stronger career transition story.
          </p>
        </header>

        <section className="mt-6 rounded-lg border border-white/80 bg-white/95 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-teal-700">
                Weekly Growth
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                Weekly Progress Tracker
              </h2>
            </div>
            <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              {completedWeeks.size} of {weeklyProgress.length} complete
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {weeklyProgress.map((week) => {
              const isCompleted = completedWeeks.has(week.id);

              return (
                <article
                  key={week.id}
                  className={`rounded-lg border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                    isCompleted
                      ? "border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50"
                      : "border-slate-200 bg-white hover:border-teal-200"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => toggleWeek(week.id)}
                        className="mt-1 h-4 w-4 accent-teal-700"
                      />
                      <span>
                        <span className="block font-semibold text-slate-950">
                          {week.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-slate-600">
                          {week.goal}
                        </span>
                      </span>
                    </label>

                    {isCompleted ? (
                      <div className="flex shrink-0 flex-wrap gap-2">
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                          Completed
                        </span>
                        <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-700">
                          Badge Earned
                        </span>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-6 rounded-lg border border-white/80 bg-white/95 p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8">
          <p className="text-sm font-semibold text-teal-700">
            Simulation Wins
          </p>
          <h2 className="mt-1 text-xl font-semibold">
            Mission Simulation Tracker
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {simulationMissions.map((mission) => (
              <article
                key={mission.id}
                className="rounded-lg border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-950">
                  {mission.title}
                </h3>
                <p className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {mission.status}
                </p>
                <button
                  type="button"
                  onClick={() => setSharedMission(mission.id)}
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-teal-100"
                >
                  Share Achievement
                </button>
              </article>
            ))}
          </div>
        </section>

        {sharedMissionTitle ? (
          <section className="mt-6 rounded-lg border border-teal-200 bg-white/95 p-6 shadow-lg shadow-teal-100/70 ring-1 ring-teal-50 sm:p-8">
            <p className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
              Mock share message
            </p>
            <p className="mt-4 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 leading-7 text-slate-700">
              I completed the {sharedMissionTitle} mission on EvolveCareer AI
              and took another step toward my AI-enabled QA career transition.
            </p>
          </section>
        ) : null}
      </section>
    </main>
  );
}
