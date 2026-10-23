// Skill track: Web Security
export default {
  id: 'security', name: 'Web Security', short: 'Web Security', order: 12, icon: '🔒', color: '#f87171', lang: 'javascript',
  desc: 'OWASP Top 10, XSS, CSRF, injection, CORS, CSP, auth security, secrets, supply chain and AI-app security.',
  units: [
    { name: 'Foundations', terms: [
      ['security-mindset', 'Security Mindset & CIA Triad', 'Confidentiality, integrity, availability; assume input is hostile.'],
      ['owasp-top10', 'OWASP Top 10', 'Most critical web risks: broken access control, injection, misconfiguration…'],
      ['threat-modeling', 'Threat Modelling (STRIDE)', 'List what can go wrong before attackers do.'],
      ['defense-in-depth', 'Defense in Depth & Least Privilege', 'Many layers; give only the access needed.'],
      ['same-origin', 'Same-Origin Policy', 'Pages can only read responses from the same scheme+host+port.']
    ] },
    { name: 'Common Attacks', terms: [
      ['xss', 'Cross-Site Scripting (XSS)', 'Injecting scripts into pages — stored, reflected, DOM-based.'],
      ['xss-prevention', 'Preventing XSS', 'Escape output, avoid innerHTML, sanitize (DOMPurify), use CSP.'],
      ['csrf', 'CSRF', 'Tricking a logged-in browser into making unwanted requests — use SameSite cookies and tokens.'],
      ['sql-injection', 'SQL Injection', 'Malicious SQL via input — prevent with parameterized queries.'],
      ['command-injection', 'Command & NoSQL Injection', 'Injecting OS commands or query operators.'],
      ['clickjacking', 'Clickjacking', 'Hidden iframes trick clicks — block with frame-ancestors / X-Frame-Options.'],
      ['ssrf', 'SSRF', 'Making the server fetch internal URLs.'],
      ['idor', 'IDOR / Broken Access Control', 'Accessing others’ data by changing IDs — always check ownership.'],
      ['open-redirect', 'Open Redirects', 'Unvalidated redirects used in phishing.'],
      ['path-traversal', 'Path Traversal', '../ in file paths to read unintended files.'],
      ['deserialization', 'Insecure Deserialization', 'Untrusted serialized data can run code.'],
      ['dos-web', 'DoS & ReDoS', 'Overload services; catastrophic regex backtracking.'],
      ['mitm', 'Man-in-the-Middle', 'Intercepting traffic — prevented by HTTPS and HSTS.'],
      ['phishing-web', 'Phishing & Social Engineering', 'Fake pages and messages to steal credentials.']
    ] },
    { name: 'Browser Security Mechanisms', terms: [
      ['cors', 'CORS', 'Server headers that allow specific cross-origin requests; preflight OPTIONS.'],
      ['csp', 'Content Security Policy (CSP)', 'Header restricting which scripts/styles/sources can load.'],
      ['sri', 'Subresource Integrity (SRI)', 'integrity hash ensures CDN files weren’t changed.'],
      ['https-tls', 'HTTPS, TLS & Certificates', 'Encrypt traffic; certificates prove server identity.'],
      ['hsts', 'HSTS', 'Force browsers to always use HTTPS.'],
      ['secure-cookies', 'Secure Cookies (HttpOnly, Secure, SameSite)', 'Protect cookies from JS theft and CSRF.'],
      ['security-headers', 'Security Headers', 'X-Content-Type-Options, Referrer-Policy, Permissions-Policy.'],
      ['trusted-types', 'Trusted Types', 'Browser API that blocks unsafe DOM sinks.'],
      ['sandbox-iframe', 'iframe sandbox', 'Restrict what embedded pages can do.']
    ] },
    { name: 'Authentication Security', terms: [
      ['authn-authz', 'Authentication vs Authorization', 'Who you are vs what you’re allowed to do.'],
      ['password-hashing', 'Password Hashing (bcrypt, Argon2)', 'Store slow salted hashes, never plain text.'],
      ['mfa', 'Multi-factor Authentication', 'Add OTP, authenticator app or passkey.'],
      ['jwt-security', 'JWT Security Pitfalls', 'Verify signatures, short expiry, don’t store secrets in payload.'],
      ['session-security', 'Session Fixation & Hijacking', 'Rotate session IDs on login; secure cookies.'],
      ['brute-force', 'Brute Force & Credential Stuffing', 'Rate-limit logins; check breached passwords.'],
      ['oauth-security', 'OAuth Security (PKCE, state)', 'Protect authorization flows.']
    ] },
    { name: 'Secrets, Supply Chain & Ops', terms: [
      ['secrets-management', 'Secrets Management', 'Never commit keys; use env vars and secret stores.'],
      ['git-secrets', 'Leaked Keys in Git', 'Rotate immediately; scan with GitHub secret scanning.'],
      ['supply-chain', 'Supply-chain Attacks', 'Malicious or hijacked packages — pin versions, audit, review.'],
      ['dependency-scanning', 'Dependency Scanning', 'npm audit, Dependabot, Snyk.'],
      ['input-validation', 'Input Validation (Zod, Pydantic)', 'Validate on the server, not just the browser.'],
      ['logging-security', 'Security Logging & Monitoring', 'Record auth events and alert on anomalies.'],
      ['rate-limit-security', 'Rate Limiting APIs', 'Protect endpoints and paid APIs from abuse.'],
      ['pentest', 'Penetration Testing & Bug Bounties', 'Ethical hacking to find vulnerabilities.']
    ] },
    { name: 'AI Application Security', terms: [
      ['prompt-injection', 'Prompt Injection', 'Untrusted text instructs an LLM to ignore its rules — treat model input/output as untrusted.'],
      ['data-exfiltration-ai', 'Data Exfiltration via LLMs', 'Models leaking secrets through tool calls or links.'],
      ['api-key-exposure', 'Never Expose AI API Keys in the Browser', 'Call AI providers from a server function.'],
      ['owasp-llm', 'OWASP Top 10 for LLM Applications', 'Risks like injection, insecure output handling, excessive agency.']
    ] }
  ]
};
