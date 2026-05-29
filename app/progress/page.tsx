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
    <main className="min-h-screen bg-slate-50 p-6 text-slate-950">
      <section className="mx-auto max-w-4xl py-10">
        <header className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium text-teal-700">
            Progress Tracker
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Your AI Transition Progress
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Track your weekly growth as you build practical AI skills and turn
            your QA experience into a stronger career transition story.
          </p>
        </header>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold">Weekly Progress Tracker</h2>
          <div className="mt-5 space-y-4">
            {weeklyProgress.map((week) => {
              const isCompleted = completedWeeks.has(week.id);

              return (
                <article
                  key={week.id}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
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
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                          Completed
                        </span>
                        <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
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

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold">
            Mission Simulation Tracker
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {simulationMissions.map((mission) => (
              <article
                key={mission.id}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-semibold text-slate-950">
                  {mission.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-emerald-700">
                  {mission.status}
                </p>
                <button
                  type="button"
                  onClick={() => setSharedMission(mission.id)}
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"
                >
                  Share Achievement
                </button>
              </article>
            ))}
          </div>
        </section>

        {sharedMissionTitle ? (
          <section className="mt-6 rounded-lg border border-teal-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-teal-700">
              Mock share message
            </p>
            <p className="mt-3 rounded-lg bg-slate-50 p-4 leading-7 text-slate-700">
              I completed the {sharedMissionTitle} mission on EvolveCareer AI
              and took another step toward my AI-enabled QA career transition.
            </p>
          </section>
        ) : null}
      </section>
    </main>
  );
}
