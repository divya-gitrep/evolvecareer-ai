type DashboardSearchParams = {
  currentRole?: string | string[];
  targetRole?: string | string[];
  codingConfidence?: string | string[];
};

const defaultSelections = {
  currentRole: "Manual QA Engineer",
  targetRole: "AI-Augmented QA Strategist",
  codingConfidence: "Intermediate",
};

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getReadinessScore(
  currentRole: string,
  targetRole: string,
  codingConfidence: string,
) {
  let score = currentRole === "Test Automation Engineer" ? 76 : 64;

  if (targetRole === "AI-Augmented QA Strategist") {
    score += 4;
  }

  if (targetRole === "AI-Assisted Test Automation Specialist") {
    score += currentRole === "Test Automation Engineer" ? 8 : 2;
  }

  if (codingConfidence === "Beginner") {
    score -= 8;
  }

  if (codingConfidence === "Advanced") {
    score += 8;
  }

  return Math.min(score, 94);
}

function getStrengths(currentRole: string, targetRole: string) {
  const roleStrengths =
    currentRole === "Test Automation Engineer"
      ? [
          "Automation workflow experience",
          "Technical debugging mindset",
          "Strong base for AI-assisted test maintenance",
        ]
      : [
          "Strong QA process understanding",
          "Clear testing mindset and defect analysis skills",
          "Good foundation for AI-assisted planning",
        ];

  if (targetRole === "AI-Augmented QA Strategist") {
    return [
      roleStrengths[0],
      "Quality risk analysis",
      "Release planning and communication potential",
    ];
  }

  return roleStrengths;
}

function getSkillGaps(targetRole: string, codingConfidence: string) {
  if (targetRole === "AI-Augmented QA Strategist") {
    return [
      {
        skill: "AI test strategy",
        current: codingConfidence === "Advanced" ? "Intermediate" : "Basic",
        target: "Advanced",
      },
      {
        skill: "Prompt-driven risk analysis",
        current: codingConfidence === "Beginner" ? "New" : "Developing",
        target: "Intermediate",
      },
      {
        skill: "Stakeholder-ready AI summaries",
        current: "Developing",
        target: "Advanced",
      },
    ];
  }

  return [
    {
      skill: "AI-assisted scripting",
      current: codingConfidence === "Beginner" ? "Basic" : "Developing",
      target: "Advanced",
    },
    {
      skill: "Automation framework patterns",
      current: codingConfidence === "Advanced" ? "Intermediate" : "Basic",
      target: "Advanced",
    },
    {
      skill: "Flaky test analysis with AI",
      current: "Developing",
      target: "Intermediate",
    },
  ];
}

function getRoadmap(targetRole: string, codingConfidence: string) {
  if (targetRole === "AI-Augmented QA Strategist") {
    return [
      {
        week: "Week 1",
        title: "Map quality decisions",
        focus: "Review your QA experience and identify where AI can support risk and coverage decisions.",
      },
      {
        week: "Week 2",
        title: "Practice AI-assisted planning",
        focus: "Use prompts to draft test strategies, regression scopes, and release-readiness notes.",
      },
      {
        week: "Week 3",
        title: "Create a strategy artifact",
        focus: "Build a sample AI-supported test strategy for a realistic product change.",
      },
      {
        week: "Week 4",
        title: "Package your transition story",
        focus: "Update your resume with strategic QA outcomes and AI-enabled quality examples.",
      },
    ];
  }

  return [
    {
      week: "Week 1",
      title: codingConfidence === "Beginner" ? "Strengthen coding basics" : "Audit automation habits",
      focus: "Review selectors, assertions, test structure, and where AI can speed up scripting.",
    },
    {
      week: "Week 2",
      title: "Build with AI assistance",
      focus: "Create or improve small automated tests using AI for examples, explanations, and debugging.",
    },
    {
      week: "Week 3",
      title: "Improve reliability",
      focus: "Use AI to analyze flaky tests, refactor brittle steps, and document better patterns.",
    },
    {
      week: "Week 4",
      title: "Show your workflow",
      focus: "Publish a compact portfolio example showing your AI-assisted automation process.",
    },
  ];
}

function getMissionSimulation(targetRole: string) {
  if (targetRole === "AI-Augmented QA Strategist") {
    return {
      scenarioTitle: "AI-Assisted Release Risk Review",
      challenge:
        "A product team is shipping a high-impact checkout update with limited regression time. You need to identify the riskiest flows and explain the release tradeoffs clearly.",
      recommendedAction:
        "Use AI to summarize change notes, draft risk-based scenarios, and turn the final plan into a concise release-readiness brief.",
    };
  }

  return {
    scenarioTitle: "AI-Assisted Regression Automation",
    challenge:
      "A key smoke test keeps failing after UI changes. You need to stabilize the test while preserving meaningful coverage.",
    recommendedAction:
      "Use AI to inspect the failure pattern, suggest more resilient selectors, and refactor the test into clearer reusable steps.",
  };
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<DashboardSearchParams>;
}) {
  const params = await searchParams;
  const currentRole =
    getParamValue(params.currentRole) || defaultSelections.currentRole;
  const targetRole =
    getParamValue(params.targetRole) || defaultSelections.targetRole;
  const codingConfidence =
    getParamValue(params.codingConfidence) ||
    defaultSelections.codingConfidence;
  const readinessScore = getReadinessScore(
    currentRole,
    targetRole,
    codingConfidence,
  );
  const strengths = getStrengths(currentRole, targetRole);
  const skillGaps = getSkillGaps(targetRole, codingConfidence);
  const roadmap = getRoadmap(targetRole, codingConfidence);
  const missionSimulation = getMissionSimulation(targetRole);

  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-4xl items-center">
        <div className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium text-teal-700">Dashboard</p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold sm:text-3xl">
                AI Readiness Score
              </h1>
              <p className="mt-2 max-w-xl leading-7 text-slate-600">
                Your path from {currentRole} to {targetRole} is tailored around
                {` ${codingConfidence.toLowerCase()} coding confidence.`}
              </p>
            </div>
            <div className="text-5xl font-semibold text-slate-950">
              {readinessScore}%
            </div>
          </div>

          <div className="mt-8">
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-teal-600"
                style={{ width: `${readinessScore}%` }}
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Strengths</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {strengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Skill Gap</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Skill</th>
                    <th className="px-4 py-3 font-semibold">Current level</th>
                    <th className="px-4 py-3 font-semibold">Target level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {skillGaps.map((gap) => (
                    <tr key={gap.skill}>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {gap.skill}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {gap.current}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {gap.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">30-Day Roadmap</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {roadmap.map((item) => (
                <div
                  key={item.week}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-teal-700">
                    {item.week}
                  </p>
                  <h3 className="mt-2 font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-teal-700">
              Mission Simulation
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">
              {missionSimulation.scenarioTitle}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Challenge</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {missionSimulation.challenge}
                </p>
              </div>
              <div className="rounded-lg border border-teal-100 bg-white p-4">
                <h3 className="font-semibold text-slate-900">
                  Recommended action
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {missionSimulation.recommendedAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
