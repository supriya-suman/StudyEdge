// Skill track: Build Tools & Tooling
export default {
  id: 'tooling', name: 'Build Tools & Tooling', short: 'Tooling', order: 10, icon: '🧰', color: '#a78bfa', lang: 'bash',
  desc: 'Package managers, bundlers, transpilers, linters, formatters, testing tools and developer environment.',
  units: [
    { name: 'Developer Environment', terms: [
      ['terminal', 'Terminal & Shell Basics', 'cd, ls/dir, mkdir, rm, cat, pipes, environment variables.'],
      ['vscode', 'VS Code Essentials', 'Extensions, shortcuts, debugger, integrated terminal, profiles.'],
      ['node-npm', 'Node.js & npm', 'JavaScript runtime and its package manager.'],
      ['nvm', 'Node Version Managers (nvm, fnm)', 'Switch Node versions per project.'],
      ['env-vars', 'Environment Variables & .env Files', 'Keep secrets and config out of code.'],
      ['devtools', 'Browser DevTools', 'Elements, Console, Network, Performance, Application, Lighthouse.']
    ] },
    { name: 'Package Management', terms: [
      ['package-json', 'package.json', 'Project metadata, scripts and dependencies.'],
      ['dependencies', 'dependencies vs devDependencies vs peerDependencies', 'Runtime vs build-time vs host-provided packages.'],
      ['semver', 'Semantic Versioning', 'MAJOR.MINOR.PATCH; ^ and ~ ranges.'],
      ['lockfiles', 'Lockfiles', 'package-lock.json / pnpm-lock.yaml pin exact versions.'],
      ['npm-scripts', 'npm Scripts & npx', 'npm run dev; npx runs packages without installing globally.'],
      ['yarn-pnpm-bun', 'Yarn, pnpm & Bun', 'Alternative package managers; pnpm saves disk with a content store.'],
      ['pip-tools', 'pip, requirements.txt, uv, Poetry', 'Python package management.', 'python.pip-venv'],
      ['npm-audit', 'npm audit & Dependency Updates', 'Check for vulnerable packages; Dependabot/Renovate.']
    ] },
    { name: 'Bundlers & Compilers', terms: [
      ['why-bundlers', 'Why Bundlers Exist', 'Combine modules, transform code, optimize for browsers.'],
      ['webpack', 'Webpack', 'Configurable bundler with loaders and plugins.'],
      ['vite', 'Vite', 'Fast dev server with native ES modules; Rollup-based builds.'],
      ['rollup', 'Rollup', 'Bundler great for libraries.'],
      ['esbuild', 'esbuild', 'Extremely fast Go-based bundler/transpiler.'],
      ['turbopack-rspack', 'Turbopack & Rspack', 'Rust-based successors to Webpack.'],
      ['parcel', 'Parcel', 'Zero-config bundler.'],
      ['babel', 'Babel', 'Transpile modern JS/JSX to older JS.'],
      ['swc', 'SWC', 'Rust-based fast compiler used by Next.js.'],
      ['tsc', 'TypeScript Compiler (tsc)', 'Type-check and compile TS.'],
      ['tree-shaking', 'Tree Shaking', 'Remove unused exports from bundles.'],
      ['code-splitting-tool', 'Code Splitting', 'Split bundles and load on demand.', 'perf.code-splitting'],
      ['minification', 'Minification', 'Remove whitespace and shorten names (Terser).'],
      ['source-maps', 'Source Maps', 'Map minified code back to original for debugging.'],
      ['hmr', 'Hot Module Replacement', 'Update code in the browser without full reload.']
    ] },
    { name: 'Code Quality', terms: [
      ['eslint', 'ESLint', 'Find problems in JS/TS code with rules.'],
      ['prettier', 'Prettier', 'Opinionated automatic code formatter.'],
      ['biome', 'Biome', 'Fast all-in-one linter + formatter.'],
      ['python-linters', 'Ruff, Black & Flake8', 'Python linting and formatting.'],
      ['clang-tools', 'clang-format & clang-tidy', 'Format and lint C/C++.'],
      ['husky', 'Husky & lint-staged', 'Run checks on git commit.'],
      ['editorconfig', 'EditorConfig', 'Consistent indentation across editors.']
    ] },
    { name: 'Testing Tools', terms: [
      ['testing-types', 'Unit, Integration & E2E Tests', 'Test functions, combinations and full user flows.'],
      ['testing-pyramid', 'Testing Pyramid', 'Many unit tests, fewer integration, few E2E.'],
      ['jest-vitest', 'Jest & Vitest', 'JS test runners with assertions and mocks.'],
      ['testing-library', 'Testing Library', 'Test UI the way users interact with it.'],
      ['playwright-cypress', 'Playwright & Cypress', 'Browser automation for end-to-end tests.'],
      ['pytest-tool', 'pytest', 'Python testing framework.', 'python.testing-py'],
      ['gtest', 'GoogleTest (C++)', 'Unit testing for C++.'],
      ['mocking', 'Mocks, Stubs & Spies', 'Replace real dependencies in tests.'],
      ['coverage', 'Code Coverage', 'Percentage of code executed by tests.'],
      ['tdd', 'TDD (Test-Driven Development)', 'Red → green → refactor.']
    ] },
    { name: 'Monorepos & Build Systems', terms: [
      ['monorepo', 'Monorepos', 'Many packages in one repository.'],
      ['turborepo-nx', 'Turborepo & Nx', 'Task running and caching for monorepos.'],
      ['make-cmake', 'Make & CMake', 'Build tools for C/C++ projects.'],
      ['maven-gradle', 'Maven & Gradle', 'Build tools for Java projects.']
    ] }
  ]
};
