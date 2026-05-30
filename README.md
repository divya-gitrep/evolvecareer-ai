# EvolveCareer AI

EvolveCareer AI is an AI-inspired career transition platform built during the OpenAI x Outskill AI Builders Hackathon.

The project is designed to help Software Quality Assurance professionals explore and navigate AI-enabled career paths by providing personalized career insights, skill gap analysis, learning roadmaps, mission simulations, and progress tracking.

## Why EvolveCareer AI?

The rapid adoption of AI is transforming the software industry and creating new opportunities for QA professionals.

Many experienced QA engineers are asking:

* What does an AI-enabled role look like?
* Which skills are transferable?
* What new skills should I learn?
* How can I transition without starting over?

EvolveCareer AI aims to answer those questions through a guided and structured career transition experience.

## Features

### Career Assessment

Users can select:

**Current Role**

* Manual QA Engineer
* Test Automation Engineer

**Target Role**

* AI-Augmented QA Strategist
* AI-Assisted Test Automation Specialist

Additional assessment inputs:

* Coding confidence
* AI familiarity
* Years of experience

### AI Readiness Dashboard

Provides:

* AI readiness score
* Strengths overview
* Skill gap analysis
* Personalized transition insights

### 30-Day Learning Roadmap

A structured roadmap divided into weekly learning goals to help users begin their transition journey.

### Mission Simulations

Scenario-based exercises designed to expose users to real-world challenges in AI-enabled QA roles.

### Progress Tracker

Track progress across:

* Weekly learning milestones
* Completed activities
* Mission simulations
* Achievement badges

Includes a lightweight social sharing experience for completed mission achievements.

## Technology Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

## Project Structure

```text
app/
├── page.tsx
├── assessment/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
├── progress/
│   └── page.tsx

data/
└── journeys.ts
```

## How It Works

EvolveCareer AI currently uses a lightweight local personalization approach.

Based on the user's:

* Current role
* Target role
* Coding confidence

The application dynamically displays different career insights, roadmaps, and recommendations through conditional rendering.

No external APIs or AI model calls are required for the MVP.

## Lessons Learned

This project was built as a learning journey and represents:

* My first product MVP built during a hackathon
* My first extensive use of AI-assisted coding
* Practical experience with Next.js and deployment workflows
* Learning modern development practices through AI collaboration

The project also demonstrated how a Quality Assurance mindset can contribute to product development through:

* MVP thinking
* Feature prioritization
* Risk management
* Iterative delivery
* Resource optimization

## Future Enhancements

Potential future improvements include:

* Real AI-powered career recommendations
* Personalized learning paths
* Progress persistence
* User authentication
* Expanded simulation library
* Community features
* Advanced career analytics

## Getting Started

Clone the repository:

```bash
git clone https://github.com/divya-gitrep/evolvecareer-ai.git
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Live Demo

https://evolvecareer-ai.vercel.app

## GitHub Repository

https://github.com/divya-gitrep/evolvecareer-ai.git

## Feedback

Feedback, suggestions, and ideas are welcome.

If you are a QA professional, product manager, developer, or AI enthusiast, I would love to hear your thoughts on how EvolveCareer AI can better support career transitions into AI-enabled roles.

## Hackathon

Built for the OpenAI x Outskill AI Builders Hackathon.

## Author

Divya Shakya

Senior Software Quality Assurance Engineer | Product Enthusiast | AI Builder

