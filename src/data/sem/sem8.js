// Semester 8 — B.Tech CSE (AI)
export default {
  sem: 8,
  title: 'Semester 8 — MOOCs, Industrial Project & Placements',
  note: 'Two MOOCs (e.g. NPTEL / SWAYAM / Coursera) and Project-III / Industrial Project. A MOOC certificate is essential before the degree.',
  courses: [
    {
      id: 'mooc', name: 'MOOC-1 & MOOC-2 (Essential)', short: 'MOOCs', code: 'ESC-MOOC', kind: 'project', lang: 'text', icon: '🎓',
      desc: 'Pick two online courses that fill gaps or deepen your specialization.',
      units: [
        { name: 'Choosing MOOCs', terms: [
          ['what-is-mooc', 'What is a MOOC', 'Massive Open Online Course — e.g. NPTEL, SWAYAM, Coursera, edX.'],
          ['nptel', 'NPTEL / SWAYAM Courses', 'IIT/IISc courses with proctored exams and certificates.'],
          ['mooc-picks', 'Suggested MOOCs for AI Students', 'Deep Learning, NLP, Cloud, MLOps, Generative AI, DSA.'],
          ['mooc-credits', 'Credit Transfer & Certificates', 'Submit certificates to the university for credits.'],
          ['mooc-study-plan', 'MOOC Study Plan', 'Weekly lectures, assignments and exam preparation.']
        ] }
      ]
    },
    {
      id: 'project3', name: 'Project – III / Industrial Project', short: 'Project III', code: 'PROJ-402', kind: 'project', lang: 'text', icon: '🏁',
      desc: 'Final-year project or industry internship: build, deploy, document and present a complete AI system.',
      units: [
        { name: 'Building & Shipping', terms: [
          ['problem-statement', 'Writing a Problem Statement', 'Who has the problem, why it matters, how success is measured.'],
          ['system-architecture', 'System Architecture Diagram', 'Components, data flow, APIs, storage, model serving.'],
          ['agile-project', 'Running the Project with Agile', 'Sprints, backlog, demos.', 'se.agile'],
          ['code-quality-proj', 'Code Quality: Git, Reviews, Tests', 'Branches, PRs, unit tests, CI.', 'git.github-actions'],
          ['model-evaluation-proj', 'Evaluating Your Model Properly', 'Hold-out tests, baselines, error analysis.', 'aiml.cross-validation'],
          ['responsible-ai', 'Responsible AI: Bias, Privacy, Explainability', 'Check fairness, protect data, explain predictions.', 'aiml.ai-ethics'],
          ['deployment-proj', 'Deployment (Vercel, Render, Hugging Face Spaces)', 'Put a live demo online.', 'git.vercel'],
          ['final-report', 'Final Report & Plagiarism Check', 'Complete documentation with references.'],
          ['final-viva', 'Final Presentation & Viva', 'Clear story: problem → approach → results → impact.']
        ] }
      ]
    },
    {
      id: 'placement', name: 'Placement Preparation', short: 'Placements', kind: 'project', lang: 'text', icon: '💼',
      desc: 'Everything for campus and off-campus placements: resume, aptitude, coding rounds, interviews.',
      units: [
        { name: 'Getting Ready', terms: [
          ['resume', 'Tech Résumé (ATS-friendly)', 'One page: skills, projects with impact numbers, links.', 'hv-soft.cv'],
          ['linkedin-github', 'LinkedIn & GitHub Profile', 'Professional photo, headline, pinned projects.'],
          ['placement-process', 'Campus Placement Process', 'PPT → online test → technical → HR rounds.'],
          ['service-vs-product', 'Service vs Product Companies', 'TCS/Infosys style vs Amazon/Google style hiring.'],
          ['coding-platforms', 'Coding Practice Platforms', 'LeetCode, GeeksforGeeks, CodeChef, HackerRank, Codeforces.'],
          ['dsa-sheet', 'DSA Practice Sheets (Striver, Blind 75, NeetCode 150)', 'Curated problem lists for interviews.', 'dsa.interview-patterns'],
          ['hr-questions', 'HR Interview Questions', 'Tell me about yourself, strengths, why us, where in 5 years.'],
          ['star-method', 'STAR Method for Behavioural Questions', 'Situation, Task, Action, Result.'],
          ['system-design-basics', 'System Design Basics (for Freshers)', 'Load balancers, caching, databases, scaling.', 'net.load-balancer'],
          ['offer-negotiation', 'Understanding Offers (CTC, In-hand)', 'Fixed vs variable pay, bond, benefits.'],
          ['higher-studies', 'Higher Studies: GATE, GRE, MS/M.Tech', 'Options after B.Tech for AI specialization.']
        ] }
      ]
    }
  ]
};
