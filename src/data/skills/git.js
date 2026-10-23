// Skill track: Git, CI/CD & Deployment
export default {
  id: 'git', name: 'Git, CI/CD & Deployment', short: 'Git & CI/CD', order: 15, icon: '🚢', color: '#fb923c', lang: 'bash',
  desc: 'Version control from first commit to pull requests, GitHub Actions, Docker and deploying to Vercel and the cloud.',
  units: [
    { name: 'Git Basics', terms: [
      ['what-is-git', 'What is Git & Version Control', 'Track every change to your code and collaborate safely.'],
      ['git-config', 'Installing & Configuring Git', 'git config user.name / user.email; per-repo identity.'],
      ['git-basics', 'init, clone, status, add, commit', 'The everyday workflow.'],
      ['staging-area', 'Working Directory, Staging Area, Repository', 'The three areas of Git.'],
      ['git-log-diff', 'log, diff, show', 'See history and changes.'],
      ['gitignore', '.gitignore', 'Keep node_modules, .env and build output out of Git.'],
      ['commit-messages', 'Good Commit Messages & Conventional Commits', 'feat:, fix:, docs: — clear, small commits.']
    ] },
    { name: 'Branching & History', terms: [
      ['branches', 'Branches', 'Parallel lines of work: git switch -c feature.'],
      ['merge', 'Merging', 'Combine branches; fast-forward vs merge commit.'],
      ['merge-conflicts', 'Resolving Merge Conflicts', 'Edit conflict markers, add, commit.'],
      ['rebase', 'Rebase', 'Replay commits on a new base for linear history (don’t rebase shared branches).'],
      ['merge-vs-rebase', 'Merge vs Rebase', 'Preserve history vs clean linear history.'],
      ['cherry-pick', 'Cherry-pick', 'Apply one commit to another branch.'],
      ['stash', 'Stash', 'Temporarily shelve uncommitted changes.'],
      ['reset-revert', 'reset vs revert vs restore', 'Move branch pointer vs add an undo commit vs discard file changes.'],
      ['tags', 'Tags & Releases', 'Mark versions like v1.0.0.'],
      ['reflog', 'reflog (Recover Lost Work)', 'Find commits you thought were gone.'],
      ['head-detached', 'HEAD & Detached HEAD', 'What HEAD points to.']
    ] },
    { name: 'GitHub & Collaboration', terms: [
      ['github', 'GitHub Basics', 'Host repos, issues, pull requests, README, profile.'],
      ['remotes', 'Remotes: fetch, pull, push', 'Sync local and remote repositories.'],
      ['ssh-https-auth', 'Authenticating to GitHub (HTTPS token, SSH, GCM)', 'Credential Manager, personal access tokens or SSH keys.'],
      ['multiple-accounts', 'Using Multiple GitHub Accounts on One Laptop', 'Per-repo user config, includeIf, separate credentials.'],
      ['pull-requests', 'Pull Requests & Code Review', 'Propose changes, discuss, approve, merge.'],
      ['forks', 'Forks & Open-source Contribution', 'Fork, branch, PR to upstream.'],
      ['branch-strategies', 'Branching Strategies', 'GitHub Flow, Git Flow, trunk-based development.'],
      ['github-pages', 'GitHub Pages', 'Free static site hosting from a repo.'],
      ['readme', 'Writing a Great README', 'What, why, screenshots, how to run, live link.']
    ] },
    { name: 'CI/CD', terms: [
      ['ci-cd', 'CI vs Continuous Delivery vs Continuous Deployment', 'Auto-test every change; ship automatically or with a click.'],
      ['github-actions', 'GitHub Actions', 'YAML workflows that run on push/PR: jobs, steps, runners.'],
      ['actions-secrets', 'Secrets in CI', 'Store keys in repository secrets, not in code.'],
      ['ci-pipeline', 'A Typical CI Pipeline', 'install → lint → test → build → deploy.'],
      ['matrix-builds', 'Matrix Builds & Caching', 'Test many versions; cache dependencies.'],
      ['preview-deployments', 'Preview Deployments', 'A live URL for every pull request.'],
      ['devops', 'DevOps Culture', 'Dev and Ops collaborate with automation and monitoring.']
    ] },
    { name: 'Containers & Deployment', terms: [
      ['docker', 'Docker Basics', 'Package an app with its environment into an image; run as a container.'],
      ['dockerfile', 'Dockerfile & Images', 'FROM, COPY, RUN, CMD; build and tag images.'],
      ['docker-compose', 'Docker Compose', 'Run multi-container apps (app + database).'],
      ['kubernetes', 'Kubernetes (Intro)', 'Orchestrate containers: pods, deployments, services.'],
      ['environments', 'Environments: Dev, Staging, Production', 'Separate configs and data for safety.'],
      ['vercel', 'Deploying on Vercel', 'Import GitHub repo → auto build & deploy; env vars; serverless functions.'],
      ['netlify-render', 'Netlify, Render, Railway', 'Other easy hosting platforms.'],
      ['cloud-deploy', 'Deploying to AWS / GCP / Azure', 'VMs, containers and serverless on big clouds.', 'cloud.aws'],
      ['domains-dns', 'Custom Domains, DNS & SSL', 'Point a domain to your app; automatic HTTPS.'],
      ['rollback', 'Rollbacks & Blue-Green / Canary Releases', 'Ship safely and undo quickly.'],
      ['monitoring', 'Monitoring & Logging', 'Uptime checks, logs, error tracking (Sentry).']
    ] }
  ]
};
