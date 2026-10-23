// Skill track: APIs & Networking
export default {
  id: 'net', name: 'APIs & Networking', short: 'APIs & Networking', order: 9, icon: '🔗', color: '#22c55e', lang: 'javascript',
  desc: 'How the internet works — OSI, TCP/IP, DNS, HTTP/1.1→3, REST, GraphQL, gRPC, WebSockets, auth and system-design building blocks.',
  units: [
    { name: 'Networking Fundamentals', terms: [
      ['how-internet-works', 'How the Internet Works', 'Packets travel through routers between networks using IP.'],
      ['osi', 'OSI Model (7 Layers)', 'Physical, Data Link, Network, Transport, Session, Presentation, Application.'],
      ['tcp-ip', 'TCP/IP Model', 'Link, Internet, Transport, Application layers used in practice.'],
      ['ip-address', 'IP Addresses (IPv4 & IPv6)', 'Logical addresses identifying devices on networks.'],
      ['subnetting', 'Subnetting & CIDR', 'Split networks with masks like /24 (255.255.255.0).'],
      ['private-public-ip', 'Private vs Public IP & NAT', '10.x, 172.16–31.x, 192.168.x are private; NAT shares a public IP.'],
      ['mac-arp', 'MAC Address & ARP', 'Hardware addresses; ARP maps IP → MAC.'],
      ['ports', 'Ports & Sockets', 'Port numbers identify services (80 HTTP, 443 HTTPS, 22 SSH).'],
      ['tcp-udp', 'TCP vs UDP', 'Reliable ordered connection vs fast connectionless datagrams.'],
      ['handshake', 'TCP 3-way Handshake & Teardown', 'SYN → SYN-ACK → ACK; FIN/ACK to close.'],
      ['dns', 'DNS & Resolution Process', 'Browser cache → resolver → root → TLD → authoritative server.'],
      ['dns-records', 'DNS Records', 'A, AAAA, CNAME, MX, TXT, NS.'],
      ['dhcp', 'DHCP', 'Automatically assigns IP addresses on a network.'],
      ['routing-basics', 'Routing & Switching', 'Routers forward between networks; switches within a LAN.'],
      ['url-to-page', 'What Happens When You Type a URL', 'DNS → TCP → TLS → HTTP request → render — classic interview question.'],
      ['network-tools', 'Network Tools', 'ping, traceroute, curl, nslookup/dig, netstat, Wireshark.']
    ] },
    { name: 'HTTP', terms: [
      ['http', 'HTTP Basics', 'Stateless request–response protocol of the web.'],
      ['http-methods', 'HTTP Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.'],
      ['status-codes', 'Status Codes', '1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error.'],
      ['headers', 'HTTP Headers', 'Content-Type, Authorization, Accept, User-Agent, Cache-Control.'],
      ['cookies-http', 'Cookies', 'Small data the server asks the browser to store and send back.'],
      ['https', 'HTTPS & TLS', 'Encrypted HTTP using TLS certificates.', 'security.https-tls'],
      ['http-versions', 'HTTP/1.1 vs HTTP/2 vs HTTP/3', 'Keep-alive → multiplexing over one TCP → QUIC over UDP.'],
      ['caching-http', 'HTTP Caching', 'Cache-Control, ETag, Last-Modified, 304 Not Modified.'],
      ['cors', 'CORS', 'Browser rule letting servers allow cross-origin requests via headers.', 'security.cors'],
      ['idempotency', 'Safe & Idempotent Methods', 'GET is safe; PUT/DELETE are idempotent; POST is not.'],
      ['content-negotiation', 'Content Negotiation & MIME Types', 'Accept/Content-Type: application/json, text/html.']
    ] },
    { name: 'APIs', terms: [
      ['what-is-api', 'What is an API', 'A contract letting programs talk to each other.'],
      ['rest', 'REST Principles', 'Resources, URLs, HTTP verbs, stateless, representations (JSON).'],
      ['rest-design', 'REST API Design Best Practices', 'Nouns in URLs, plural resources, proper status codes.'],
      ['pagination', 'Pagination', 'Offset/limit vs cursor-based paging.'],
      ['filtering-sorting', 'Filtering, Sorting & Searching', 'Query params like ?sort=-date&status=open.'],
      ['api-versioning', 'API Versioning', '/v1/ in URL, headers or query params.'],
      ['rate-limiting', 'Rate Limiting & 429', 'Limit requests per user (token bucket); return Retry-After.'],
      ['graphql', 'GraphQL', 'Clients ask for exactly the fields they need: queries, mutations, subscriptions.'],
      ['grpc', 'gRPC & Protocol Buffers', 'Fast binary RPC over HTTP/2.'],
      ['trpc', 'tRPC', 'End-to-end typesafe APIs in TypeScript.'],
      ['soap', 'SOAP', 'Older XML-based web service protocol.'],
      ['webhooks', 'Webhooks', 'Server calls your URL when an event happens.'],
      ['openapi', 'OpenAPI / Swagger', 'Machine-readable API documentation.'],
      ['postman', 'Testing APIs (Postman, curl, Thunder Client)', 'Send requests and inspect responses.'],
      ['json-xml', 'JSON vs XML', 'Lightweight vs verbose data formats.']
    ] },
    { name: 'Real-time & Client', terms: [
      ['fetch', 'fetch & Axios', 'Make HTTP requests from JavaScript; handle JSON and errors.'],
      ['polling', 'Short & Long Polling', 'Repeatedly ask the server vs hold the request open.'],
      ['sse', 'Server-Sent Events (SSE)', 'One-way server → client stream over HTTP (used for AI token streaming).'],
      ['websockets', 'WebSockets', 'Full-duplex real-time connection (chat, games).'],
      ['webrtc', 'WebRTC', 'Peer-to-peer audio, video and data.'],
      ['streaming-responses', 'Streaming Responses', 'Send data in chunks as it is generated.']
    ] },
    { name: 'Authentication & Authorization', terms: [
      ['sessions', 'Session-based Auth', 'Server stores session; browser holds a session cookie.'],
      ['jwt', 'JWT (JSON Web Tokens)', 'Signed tokens with header.payload.signature.'],
      ['oauth', 'OAuth 2.0', 'Delegated authorization (Sign in with Google) — authorization code + PKCE.'],
      ['oidc', 'OpenID Connect', 'Identity layer on top of OAuth 2.0 (ID tokens).'],
      ['api-keys', 'API Keys', 'Simple secret keys — keep them on the server.'],
      ['passkeys', 'Passkeys (WebAuthn)', 'Passwordless login with device-bound keys.'],
      ['sso', 'Single Sign-On (SSO)', 'One login for many apps (SAML/OIDC).']
    ] },
    { name: 'System Design Building Blocks', terms: [
      ['client-server-arch', 'Client–Server Architecture', 'Clients request, servers respond.'],
      ['proxy-reverse', 'Forward & Reverse Proxies', 'Proxy for clients vs in front of servers (Nginx).'],
      ['load-balancer', 'Load Balancers', 'Spread traffic across servers (round robin, least connections).'],
      ['cdn', 'CDN', 'Edge servers cache content close to users.'],
      ['api-gateway', 'API Gateway', 'Single entry point handling routing, auth and rate limits.'],
      ['caching-layers', 'Caching (Redis, Memcached)', 'Store hot data in memory to reduce latency.'],
      ['scaling', 'Vertical vs Horizontal Scaling', 'Bigger machine vs more machines.'],
      ['microservices', 'Monolith vs Microservices', 'One deployable vs many small services.'],
      ['message-queues', 'Message Queues (Kafka, RabbitMQ)', 'Async communication between services.'],
      ['db-scaling', 'Database Replication & Sharding', 'Copies for reads; split data across machines.'],
      ['cap-net', 'CAP Theorem', 'Consistency vs availability under network partitions.', 'cloud.cap']
    ] }
  ]
};
