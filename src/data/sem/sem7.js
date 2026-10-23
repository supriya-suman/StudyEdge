// Semester 7 — B.Tech CSE (AI)
export default {
  sem: 7,
  title: 'Semester 7 — Cognitive Computing & Deep Learning',
  note: 'Choose one Professional Elective IV and Open Electives III & IV. The Practical Training report from the summer is evaluated this semester.',
  courses: [
    {
      id: 'cog', name: 'Cognitive Computing', short: 'Cognitive Computing', code: 'PCC-401', kind: 'core', lang: 'python', icon: '🧠',
      desc: 'Cognitive systems, corpus building, hypothesis generation, NLP, taxonomies/ontologies, big data & advanced analytics, business implications.',
      units: [
        { name: 'Unit I · Foundations & Design Principles', terms: [
          ['cognitive-computing', 'Cognitive Computing as a New Generation', 'Systems that learn, reason and interact naturally with humans.'],
          ['cognitive-uses', 'Uses of Cognitive Systems', 'Healthcare, customer service, finance, research assistants.'],
          ['system-cognitive', 'What Makes a System Cognitive', 'Adaptive, interactive, iterative, contextual.'],
          ['insights-data', 'Gaining Insights from Data', 'Combining structured and unstructured data.'],
          ['ai-foundation', 'AI as the Foundation of Cognitive Computing', 'ML, NLP and reasoning underpin cognitive systems.'],
          ['understanding-cognition', 'Understanding Cognition', 'Perception, memory, learning and reasoning in humans.'],
          ['cognitive-components', 'Components of a Cognitive System', 'Corpus, analytics, ML, hypothesis engine, presentation.'],
          ['corpus', 'Building the Corpus', 'Collecting and curating domain knowledge sources.'],
          ['data-ingestion', 'Bringing Data into a Cognitive System', 'Ingesting, cleaning and indexing data.'],
          ['ml-cognitive', 'Machine Learning in Cognitive Systems', 'Learning from interactions and feedback.'],
          ['hypothesis-generation', 'Hypothesis Generation & Scoring', 'Propose candidate answers and score evidence (like IBM Watson).'],
          ['presentation-services', 'Presentation & Visualization Services', 'Explain answers with evidence and visuals.']
        ] },
        { name: 'Unit II · NLP & Knowledge Representation', terms: [
          ['nlp-role', 'Role of NLP in a Cognitive System', 'Understand questions and documents in natural language.', 'aiml.nlp'],
          ['semantic-web', 'Semantic Web (RDF, OWL, SPARQL)', 'Machine-readable linked data on the web.'],
          ['nlp-business', 'NLP for Business Problems', 'Chatbots, document analysis, sentiment, search.'],
          ['representing-knowledge', 'Representing Knowledge', 'Encoding facts and relationships.'],
          ['taxonomy', 'Taxonomies', 'Hierarchical classification of concepts.'],
          ['ontology', 'Ontologies', 'Formal models of concepts, properties and relations in a domain.'],
          ['kr-models', 'Models for Knowledge Representation', 'Semantic nets, frames, rules, knowledge graphs.'],
          ['knowledge-graph', 'Knowledge Graphs (Bonus)', 'Graphs of entities and relations powering search and RAG.'],
          ['kr-implementation', 'Implementation Considerations', 'Scale, maintenance, consistency.']
        ] },
        { name: 'Unit III · Big Data & Advanced Analytics', terms: [
          ['human-data', 'Dealing with Human-generated Data', 'Text, voice, images, social media.'],
          ['big-data-cog', 'Defining Big Data & Architectural Foundation', 'Storage and processing for cognitive scale.', 'bigdata.big-data'],
          ['analytical-dw', 'Analytical Data Warehouses', 'Structured history for analysis.', 'dmw.data-warehouse'],
          ['hadoop-cog', 'Hadoop for Cognitive Systems', 'Distributed storage/processing.', 'bigdata.hadoop'],
          ['streaming-data', 'Data in Motion & Streaming Data', 'Real-time inputs.', 'bigdata.streams'],
          ['integrate-big-traditional', 'Integrating Big Data with Traditional Data', 'Combine warehouses and data lakes.'],
          ['advanced-analytics', 'Advanced Analytics on the Path to Cognitive', 'Descriptive → predictive → prescriptive → cognitive.'],
          ['analytics-capabilities', 'Key Capabilities in Advanced Analytics', 'Predictive modelling, ML, text and image analytics.'],
          ['analytics-value', 'Using Advanced Analytics to Create Value', 'Better decisions and automation.'],
          ['open-source-analytics', 'Impact of Open-source Tools', 'Python, R, Spark, TensorFlow democratize analytics.']
        ] },
        { name: 'Unit IV · Business Implications & Building Applications', terms: [
          ['preparing-change', 'Preparing for Change', 'Organizational readiness for cognitive systems.'],
          ['disruptive-models', 'Advantages of Disruptive Models', 'New business models enabled by AI.'],
          ['knowledge-business', 'What Knowledge Means to Business', 'Turning data into actionable knowledge.'],
          ['cognitive-difference', 'Difference with a Cognitive Systems Approach', 'Learning systems vs fixed programs.'],
          ['meshing-data', 'Meshing Data Together Differently', 'Combining diverse data for new insights.'],
          ['planning-future', 'Using Business Knowledge to Plan', 'Scenario analysis and forecasting.'],
          ['business-questions', 'Answering Business Questions in New Ways', 'Natural-language Q&A over enterprise data.'],
          ['business-solutions', 'Building Business-specific Solutions', 'Domain-tuned cognitive apps.'],
          ['cognitive-reality', 'Making Cognitive Computing a Reality', 'Pilot, measure, scale.'],
          ['cognitive-platform', 'Emerging Cognitive Platforms', 'IBM Watson, Azure AI, Google Vertex AI, LLM platforms.'],
          ['build-cognitive-app', 'Process of Building a Cognitive Application', 'Objective → domain → users → questions → train → test.'],
          ['llm-cognitive', 'LLMs as Modern Cognitive Systems (Bonus)', 'GPT/Claude/Gemini with RAG and tools.', 'aiml.llm']
        ] }
      ]
    },
    {
      id: 'ob', name: 'Organisational Behaviour', short: 'Org Behaviour', code: 'HSMC-401', kind: 'humanities', lang: 'text', icon: '🏢',
      desc: 'Learning, personality, perception, motivation, communication, groups, leadership, conflict, culture, HRM and change.',
      units: [
        { name: 'Unit I · Introduction & Learning', terms: [
          ['ob-definition', 'Definition & Meaning of OB', 'Study of human behaviour in organizations.'],
          ['why-ob', 'Why Study OB', 'Improve productivity, satisfaction and teamwork.'],
          ['ob-model', 'An OB Model', 'Inputs, processes, outcomes at individual, group, organization levels.'],
          ['ob-challenges', 'New Challenges for OB Managers', 'Diversity, globalization, remote work, ethics.'],
          ['learning-ob', 'Learning: Nature & How It Occurs', 'Classical/operant conditioning, social learning.'],
          ['learning-ob-link', 'Learning & OB', 'Reinforcement, training and behaviour modification.']
        ] },
        { name: 'Unit II · Personality, Perception & Motivation', terms: [
          ['personality', 'Personality: Meaning & Determinants', 'Heredity, environment and situation.'],
          ['personality-traits', 'Personality Traits (Big Five, MBTI)', 'Openness, conscientiousness, extraversion, agreeableness, neuroticism.'],
          ['personality-ob', 'Personality & OB', 'How traits affect work behaviour.'],
          ['perception', 'Perception: Meaning & Process', 'Selecting, organizing, interpreting stimuli.'],
          ['perception-ob', 'Importance of Perception in OB', 'Attribution, halo effect, stereotyping.'],
          ['motivation', 'Motivation: Nature & Importance', 'Forces driving goal-directed behaviour.'],
          ['herzberg', 'Herzberg’s Two-factor Theory', 'Hygiene factors vs motivators.'],
          ['maslow', 'Maslow’s Need Hierarchy', 'Physiological → safety → social → esteem → self-actualization.'],
          ['erg', 'Alderfer’s ERG Theory', 'Existence, relatedness, growth.']
        ] },
        { name: 'Unit III · Communication, Groups, Leadership & Conflict', terms: [
          ['communication-ob', 'Communication: Importance & Types', 'Formal/informal, verbal/non-verbal, upward/downward.'],
          ['communication-barriers', 'Barriers to Communication', 'Noise, filtering, emotions, language.'],
          ['interpersonal', 'Communication for Interpersonal Effectiveness', 'Active listening, feedback, assertiveness.'],
          ['groups', 'Groups: Nature & Types', 'Formal, informal, command, task, interest groups.'],
          ['why-join', 'Why People Join Groups', 'Security, status, affiliation, power, goals.'],
          ['cohesiveness', 'Group Cohesiveness', 'How strongly members stick together.'],
          ['group-decision', 'Group Decision Making', 'Brainstorming, nominal group, Delphi; groupthink.'],
          ['team-building', 'Effective Team Building', 'Clear goals, roles, trust and communication.'],
          ['leadership', 'Leadership vs Management', 'Influencing people vs planning and controlling.'],
          ['leadership-theories', 'Theories of Leadership', 'Trait, behavioural, contingency (Fiedler), situational.'],
          ['followership', 'Leadership & Followership', 'Effective followers support leaders.'],
          ['effective-leader', 'How to be an Effective Leader', 'Vision, empathy, integrity, communication.'],
          ['conflict', 'Conflict: Nature & Resolution', 'Avoid, accommodate, compete, compromise, collaborate.'],
          ['transactional-analysis', 'Transactional Analysis', 'Parent, Adult, Child ego states in interactions.']
        ] },
        { name: 'Unit IV · Culture, HRM, Change & International OB', terms: [
          ['org-culture', 'Organisational Culture', 'Shared values, beliefs and norms.'],
          ['culture-effectiveness', 'Culture & Organisational Effectiveness', 'Strong culture aligns behaviour with goals.'],
          ['hrm', 'Introduction to HRM', 'Managing people in organizations.'],
          ['selection-hr', 'Selection & Orientation', 'Hiring the right people and onboarding them.'],
          ['training-development', 'Training & Development', 'Building employee skills.'],
          ['performance-appraisal', 'Performance Appraisal', 'Evaluating employee performance (360°, MBO).'],
          ['incentives', 'Incentives', 'Monetary and non-monetary rewards.'],
          ['org-change', 'Organisational Change: Importance', 'Why organizations must adapt.'],
          ['planned-change', 'Planned Change & OB Techniques (Lewin’s Model)', 'Unfreeze → change → refreeze.'],
          ['international-ob', 'International OB', 'Individual and interpersonal behaviour across cultures (Hofstede).']
        ] }
      ]
    },
    {
      id: 'cyber', name: 'Cyber Security Threats', short: 'Cyber Threats', code: 'PEC-IV', kind: 'elective', lang: 'bash', icon: '🛡',
      desc: 'Professional Elective IV: threat sources, network threats, threat management, security elements, access control and human factors.',
      units: [
        { name: 'Unit I · Security Threats', terms: [
          ['threat-sources', 'Sources & Motives of Security Threats', 'Criminals, insiders, nation-states, hacktivists; money, espionage, disruption.'],
          ['assets-vulnerabilities', 'Target Assets & Vulnerabilities', 'What attackers want and the weaknesses they exploit.'],
          ['threat-consequences', 'Consequences of Threats', 'Data loss, downtime, financial and reputational damage.'],
          ['email-threats', 'E-mail Threats (Phishing, Spoofing)', 'Malicious emails tricking users.'],
          ['web-threats', 'Web Threats', 'Drive-by downloads, malicious sites, XSS.', 'security.xss'],
          ['intruders-hackers', 'Intruders & Hackers', 'White, grey, black hat; script kiddies.'],
          ['insider-threats', 'Insider Threats', 'Risks from employees and contractors.'],
          ['cyber-crimes', 'Cyber Crimes & IT Act 2000', 'Fraud, identity theft, cyberstalking; Indian cyber law.'],
          ['active-passive', 'Active vs Passive Network Threats', 'Modify data vs only observe.'],
          ['interception', 'Interference, Interception, Impersonation', 'Jamming, eavesdropping, pretending to be someone.'],
          ['malware', 'Malware: Worms, Viruses, Trojans', 'Self-replicating or disguised malicious programs.'],
          ['spam-adware-spyware', 'Spam, Adware, Spyware', 'Unwanted messages and tracking software.'],
          ['ransomware', 'Ransomware', 'Encrypts files and demands payment.'],
          ['covert-channels', 'Covert Channels & Backdoors', 'Hidden communication paths and secret access.'],
          ['bots', 'Bots & Botnets', 'Networks of infected machines used for DDoS/spam.'],
          ['ip-spoofing', 'IP Spoofing', 'Forging source IP addresses.'],
          ['arp-spoofing', 'ARP Spoofing', 'Poisoning ARP tables for man-in-the-middle.'],
          ['session-hijacking', 'Session Hijacking', 'Stealing session tokens to impersonate users.'],
          ['dos-ddos', 'DoS & DDoS', 'Overwhelming services to make them unavailable.'],
          ['server-threats', 'Sabotage, Environmental & Server Threats', 'Physical damage, disasters, server attacks.']
        ] },
        { name: 'Unit II · Threat Management', terms: [
          ['risk-assessment', 'Risk Assessment', 'Risk = likelihood × impact.'],
          ['forensics', 'Forensic Analysis', 'Collecting and analyzing evidence after incidents.'],
          ['threat-correlation', 'Security Threat Correlation (SIEM)', 'Link events across systems to spot attacks.'],
          ['threat-awareness', 'Threat Awareness & Intelligence', 'Knowing current attacker techniques (MITRE ATT&CK).'],
          ['vulnerability-assessment', 'Vulnerability Sources & Assessment', 'Finding weaknesses systematically.'],
          ['va-tools', 'Vulnerability Assessment Tools', 'Nmap, Nessus, OpenVAS, Burp Suite, OWASP ZAP.'],
          ['threat-identification', 'Threat Identification & Analysis', 'Determine likely threats and their impact.'],
          ['threat-modelling', 'Threat Modelling (STRIDE)', 'Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation.', 'security.threat-modeling'],
          ['infosec-planning', 'Model for Information Security Planning', 'Policies, standards, controls lifecycle.']
        ] },
        { name: 'Unit III · Security Elements', terms: [
          ['authn-authz', 'Authentication & Authorization', 'Who you are vs what you can do.', 'security.authn-authz'],
          ['auth-types', 'Authentication Types (Passwords, MFA, Biometrics)', 'Something you know, have, are.'],
          ['security-certification', 'Security Certification', 'ISO 27001, SOC 2, CEH, CISSP.'],
          ['monitoring-auditing', 'Security Monitoring & Auditing', 'Continuous logging and review.'],
          ['security-requirements', 'Security Requirements Specification', 'Defining what security a system needs.'],
          ['policies-procedures', 'Security Policies & Procedures', 'Rules for acceptable use, access, incidents.'],
          ['firewalls-cyber', 'Firewalls', 'Filter network traffic.', 'cn.firewalls'],
          ['ids-ips', 'IDS & IPS', 'Detect (and prevent) intrusions: signature vs anomaly-based.'],
          ['log-files', 'Log Files', 'Records of system events for detection and forensics.'],
          ['honeypots', 'Honeypots', 'Decoy systems to lure and study attackers.']
        ] },
        { name: 'Unit IV · Access Control & Human Factors', terms: [
          ['access-control', 'Access Control Models', 'DAC, MAC, RBAC, ABAC.', 'dbms.dac-mac-rbac'],
          ['trusted-computing', 'Trusted Computing & Multilevel Security', 'TPM, secure boot, clearance levels.'],
          ['security-models', 'Security Models (Bell–LaPadula, Biba)', 'Confidentiality (no read up) and integrity models.'],
          ['trusted-systems', 'Trusted Systems', 'Systems verified to enforce security policy.'],
          ['software-security', 'Software Security Issues', 'Buffer overflows, injection, insecure deserialization.'],
          ['physical-security', 'Physical & Infrastructure Security', 'Locks, CCTV, power, environmental controls.'],
          ['human-factors', 'Human Factors & Security Awareness', 'Training to resist social engineering.'],
          ['social-engineering', 'Social Engineering', 'Manipulating people to reveal information.'],
          ['email-policies', 'Email & Internet Use Policies', 'Acceptable-use rules for staff.']
        ] }
      ]
    },
    {
      id: 'web-mining', name: 'Web Mining', short: 'Web Mining', code: 'PEC-IV', kind: 'elective', lang: 'python', icon: '🔎',
      desc: 'Professional Elective IV: web mining taxonomy, IR models, LSI, web spam, clustering of pages, computational intelligence and swarm optimization.',
      units: [
        { name: 'Unit I · Data Mining Foundations', terms: [
          ['dm-concepts', 'Basic Concepts in Data Mining', 'Patterns, models, KDD.', 'dmw.data-mining'],
          ['web-vs-data-mining', 'Web Mining vs Data Mining', 'Web data is semi-structured, linked and huge.'],
          ['hypertext', 'Discovering Knowledge from Hypertext', 'Mining linked documents.'],
          ['web-mining', 'What is Web Mining', 'Applying data mining to web content, structure and usage.'],
          ['web-taxonomy', 'Web Mining Taxonomy', 'Content mining, structure mining, usage mining.'],
          ['web-subtasks', 'Web Mining Subtasks, Issues & Challenges', 'Crawling, extraction, scale, spam, privacy.']
        ] },
        { name: 'Unit II · Web Search & IR', terms: [
          ['ir-models', 'Information Retrieval Models', 'Boolean, vector space, probabilistic (BM25).'],
          ['web-search', 'Web Search & IR', 'Crawling, indexing, ranking.'],
          ['text-mining-wm', 'Text Mining', 'Extracting patterns from text.', 'twi.text-mining'],
          ['lsi', 'Latent Semantic Indexing', 'SVD on term–document matrix to capture concepts.'],
          ['web-spam', 'Web Spamming', 'Link farms, keyword stuffing, cloaking.'],
          ['web-page-clustering', 'Clustering & Classification of Web Pages', 'Group and label pages.'],
          ['info-extraction-wm', 'Information Extraction', 'Wrappers to extract structured data.'],
          ['web-content-mining', 'Web Content Mining', 'Mining the text and media of pages.']
        ] },
        { name: 'Unit III · Optimization & Computational Intelligence', terms: [
          ['ci-models', 'Models & Concept of Computational Intelligence', 'Nature-inspired problem solving.'],
          ['social-optimization', 'Social Behaviour as Optimization', 'Collective behaviour solves problems.'],
          ['discrete-continuous', 'Discrete & Continuous Optimization Problems', 'Combinatorial vs real-valued search spaces.'],
          ['optimization-classification', 'Classification of Optimization Algorithms', 'Exact vs heuristic vs metaheuristic.'],
          ['evolutionary', 'Evolutionary Computation Theory & Paradigm', 'GA, evolution strategies, genetic programming.', 'soft.ga'],
          ['swarm-intelligence', 'Swarm & Collective Intelligence', 'Simple agents creating intelligent group behaviour.']
        ] },
        { name: 'Unit IV · Swarm Intelligence Techniques', terms: [
          ['pso', 'Particle Swarm Optimization', 'Particles move toward personal and global best positions.'],
          ['aco', 'Ant Colony Optimization', 'Artificial ants deposit pheromones to find good paths.'],
          ['abc', 'Artificial Bee Colony', 'Employed, onlooker and scout bees search for food sources.'],
          ['firefly', 'Firefly Algorithm', 'Fireflies attracted to brighter (better) solutions.'],
          ['swarm-hybrid', 'Hybridization & Comparison of Swarm Techniques', 'Combining methods for better performance.'],
          ['swarm-applications', 'Applications in Real-world Problems', 'Routing, scheduling, feature selection, tuning.']
        ] }
      ]
    },
    {
      id: 'dip', name: 'Information Hiding Techniques (Digital Image Processing)', short: 'Image Processing', code: 'PEC-IV', kind: 'elective', lang: 'python', icon: '🖼',
      desc: 'Professional Elective IV: DIP fundamentals, transforms (FFT, DCT, wavelets), enhancement, restoration, segmentation and morphology.',
      units: [
        { name: 'Unit I · Fundamentals', terms: [
          ['need-dip', 'Need for Digital Image Processing', 'Enhance, analyze and compress images.'],
          ['dip-steps', 'Fundamental Steps in DIP', 'Acquisition → enhancement → restoration → segmentation → recognition.'],
          ['visual-perception', 'Elements of Visual Perception', 'Eye structure, brightness adaptation, Mach bands.'],
          ['image-acquisition', 'Image Sensing & Acquisition', 'Sensors (CCD/CMOS) capture light.'],
          ['sampling-quantization', 'Image Sampling & Quantization', 'Spatial resolution and gray levels.'],
          ['imaging-geometry', 'Imaging Geometry', 'Camera models and coordinate transforms.'],
          ['image-math', 'Mathematical Characterization of Images', 'Images as 2-D functions/matrices.']
        ] },
        { name: 'Unit II · Image Transforms', terms: [
          ['2d-fourier', '2-D Fourier Transform & Properties', 'Represent images in frequency domain.'],
          ['fft', 'FFT & Inverse FFT', 'Fast O(N log N) computation of the DFT.'],
          ['dct', 'Discrete Cosine Transform', 'Basis of JPEG compression.'],
          ['kl-transform', 'KL Transform (Hotelling)', 'PCA applied to images.'],
          ['stft-dip', 'Discrete Short-time Fourier Transform', 'Localized frequency analysis.'],
          ['wavelet', 'Wavelet Transform & DWT', 'Multi-resolution analysis.'],
          ['wavelet-compression', 'Wavelets in Compression (JPEG 2000)', 'Better quality at high compression.']
        ] },
        { name: 'Unit III · Enhancement & Restoration', terms: [
          ['pixel-relationships', 'Basic Relationships between Pixels', 'Neighbours, adjacency, connectivity, distance.'],
          ['gray-transforms', 'Gray-level Transformations', 'Negative, log, power-law (gamma).'],
          ['histogram-processing', 'Histogram Processing & Equalization', 'Spread intensities for better contrast.'],
          ['smoothing-spatial', 'Smoothing Spatial Filters', 'Mean and median filters remove noise.'],
          ['sharpening-spatial', 'Sharpening Spatial Filters', 'Laplacian and gradient (Sobel) filters.'],
          ['freq-smoothing', 'Smoothing Frequency-domain Filters', 'Ideal, Butterworth, Gaussian low-pass.'],
          ['freq-sharpening', 'Sharpening Frequency-domain Filters', 'High-pass filters.'],
          ['homomorphic', 'Homomorphic Filtering', 'Separate illumination and reflectance.'],
          ['degradation', 'Degradation Models', 'Blur and noise models.'],
          ['restoration', 'Unconstrained & Constrained Restoration', 'Recover the original image.'],
          ['inverse-filter', 'Inverse Filtering', 'Divide by the degradation function.'],
          ['wiener', 'Wiener Filter', 'Minimum mean-square-error restoration.']
        ] },
        { name: 'Unit IV · Segmentation & Description', terms: [
          ['discontinuities', 'Detection of Discontinuities', 'Points, lines and edges.'],
          ['edge-linking', 'Edge Linking & Boundary Detection', 'Connect edges into boundaries (Hough transform).'],
          ['thresholding', 'Thresholding (Otsu)', 'Separate objects by intensity.'],
          ['edge-segmentation', 'Edge-based Segmentation', 'Canny and gradient-based segmentation.'],
          ['region-segmentation', 'Region-based Segmentation', 'Region growing, split and merge.'],
          ['matching-dip', 'Template Matching', 'Find a pattern in an image.'],
          ['border-detection', 'Optimal Border & Surface Detection', 'Graph-search based boundaries.'],
          ['motion-segmentation', 'Motion in Segmentation', 'Use frame differences and optical flow.'],
          ['morphology', 'Image Morphology', 'Erosion, dilation, opening, closing.'],
          ['boundary-descriptors', 'Boundary Descriptors', 'Chain codes, Fourier descriptors.'],
          ['regional-descriptors', 'Regional Descriptors', 'Area, moments, texture.'],
          ['opencv', 'OpenCV (Bonus)', 'Python library for image processing.']
        ] }
      ]
    },
    {
      id: 'drl', name: 'Deep and Reinforcement Learning', short: 'Deep & RL', code: 'PEC-IV', kind: 'elective', lang: 'python', icon: '🧬',
      desc: 'Professional Elective IV: neurons to transformers — optimizers, RNN/LSTM, attention, autoencoders, regularization, CNN architectures, and RL from bandits to deep RL.',
      units: [
        { name: 'Unit I · Foundations, Optimizers & Sequence Models', terms: [
          ['dl-history', 'History of Deep Learning', 'From perceptrons (1958) to AlexNet (2012) to transformers (2017) and LLMs.'],
          ['mcculloch-pitts', 'McCulloch–Pitts Neuron', 'First mathematical neuron with binary threshold.'],
          ['threshold-logic', 'Thresholding Logic', 'Neuron fires if weighted sum exceeds a threshold.'],
          ['activations', 'Activation Functions', 'Sigmoid, tanh, ReLU, Leaky ReLU, GELU, softmax.', 'aiml.activation-functions'],
          ['gradient-descent', 'Gradient Descent', 'Move weights opposite to the gradient of loss.', 'aiml.gradient-descent'],
          ['momentum', 'Momentum-based GD', 'Accumulate velocity to speed up and smooth descent.'],
          ['nesterov', 'Nesterov Accelerated GD', 'Look-ahead gradient for momentum.'],
          ['sgd', 'Stochastic & Mini-batch GD', 'Update on one sample/mini-batch at a time.'],
          ['adagrad', 'AdaGrad', 'Per-parameter learning rates from summed squared gradients.'],
          ['rmsprop', 'RMSProp', 'Exponential average of squared gradients.'],
          ['adam', 'Adam', 'Momentum + RMSProp with bias correction.', 'aiml.optimizers'],
          ['eigen-decomposition', 'Eigenvalue Decomposition', 'Used to analyze curvature and PCA.'],
          ['rnn', 'Recurrent Neural Networks', 'Networks with loops that process sequences.', 'aiml.rnn-lstm'],
          ['bptt', 'Backpropagation Through Time', 'Unroll the RNN and backpropagate across steps.'],
          ['vanishing-exploding', 'Vanishing & Exploding Gradients', 'Gradients shrink/grow over many steps; gradient clipping.'],
          ['truncated-bptt', 'Truncated BPTT', 'Backpropagate only a fixed number of steps.'],
          ['gru', 'GRU', 'Gated unit with update and reset gates.'],
          ['lstm', 'LSTM', 'Cell state with input, forget and output gates.', 'aiml.rnn-lstm'],
          ['encoder-decoder', 'Encoder–Decoder (Seq2Seq) Models', 'Encode input sequence, decode output sequence.'],
          ['attention', 'Attention Mechanism', 'Focus on relevant parts of the input.', 'aiml.attention'],
          ['attention-images', 'Attention over Images', 'Spatial attention for captioning; Vision Transformers.']
        ] },
        { name: 'Unit II · Autoencoders, Regularization & CNNs', terms: [
          ['autoencoder', 'Autoencoders & Relation to PCA', 'Compress then reconstruct input; linear AE ≈ PCA.', 'aiml.autoencoders'],
          ['ae-regularization', 'Regularization in Autoencoders', 'Prevent identity mapping.'],
          ['denoising-ae', 'Denoising Autoencoders', 'Reconstruct clean input from noisy input.'],
          ['sparse-ae', 'Sparse Autoencoders', 'Encourage few active hidden units.'],
          ['contractive-ae', 'Contractive Autoencoders', 'Penalize sensitivity to input changes.'],
          ['bias-variance-dl', 'Bias–Variance Trade-off', 'Underfitting vs overfitting.', 'aiml.bias-variance'],
          ['l2-reg', 'L2 Regularization (Weight Decay)', 'Penalize large weights.', 'aiml.regularization'],
          ['early-stopping', 'Early Stopping', 'Stop training when validation loss rises.'],
          ['data-augmentation', 'Dataset Augmentation', 'Flip, crop, rotate, noise to enlarge data.'],
          ['parameter-sharing', 'Parameter Sharing & Tying', 'Reuse weights (CNN filters, RNN steps).'],
          ['input-noise', 'Injecting Noise at Input', 'Improves robustness.'],
          ['ensemble-dl', 'Ensemble Methods', 'Average several networks.'],
          ['dropout', 'Dropout', 'Randomly drop neurons during training.', 'aiml.dropout-batchnorm'],
          ['batchnorm', 'Batch Normalization', 'Normalize layer inputs per mini-batch.', 'aiml.dropout-batchnorm'],
          ['instance-group-norm', 'Instance & Group Normalization', 'Normalization without batch dependence.'],
          ['layerwise-pretraining', 'Greedy Layer-wise Pre-training', 'Train layers one at a time (historical).'],
          ['better-activations', 'Better Activation Functions', 'ReLU family avoids vanishing gradients.'],
          ['weight-init', 'Better Weight Initialization (Xavier, He)', 'Keep activation variance stable.'],
          ['word-vectors', 'Learning Vector Representations of Words', 'word2vec, GloVe.', 'aiml.embeddings'],
          ['cnn', 'Convolutional Neural Networks', 'Convolutions, pooling, feature maps.', 'aiml.cnn'],
          ['cnn-architectures', 'LeNet, AlexNet, ZF-Net, VGG, GoogLeNet, ResNet', 'Landmark CNN architectures.'],
          ['visualizing-cnn', 'Visualizing CNNs & Guided Backpropagation', 'See what filters respond to.'],
          ['deep-dream', 'Deep Dream & Deep Art (Style Transfer)', 'Generate images by amplifying features.'],
          ['dl-trends', 'Recent Trends in DL Architectures', 'Transformers, ViT, diffusion models, state-space models.', 'aiml.transformers']
        ] },
        { name: 'Unit III · Reinforcement Learning I', terms: [
          ['rl-intro', 'Introduction to Reinforcement Learning', 'Learning by interacting to maximize reward.', 'aiml.reinforcement-learning'],
          ['bandits', 'Multi-armed Bandits', 'Choose among slot machines balancing exploration.'],
          ['ucb', 'UCB Algorithm', 'Pick the arm with highest upper confidence bound.'],
          ['pac-bandit', 'PAC Bandits & Median Elimination', 'Find a near-best arm with high probability.'],
          ['policy-gradient-intro', 'Policy Gradient (Bandits)', 'Directly optimize action preferences.'],
          ['full-rl-mdp', 'Full RL & MDPs', 'Sequential decisions with states.', 'aiml.mdp'],
          ['bellman-optimality', 'Bellman Optimality Equations', 'V*(s) = max_a Σ P(s′)[R + γV*(s′)].'],
          ['value-iteration', 'Value Iteration', 'Repeatedly apply the Bellman optimality update.'],
          ['policy-iteration', 'Policy Iteration', 'Alternate policy evaluation and improvement.'],
          ['q-learning-drl', 'Q-learning', 'Off-policy TD control.', 'aiml.q-learning'],
          ['td-learning', 'Temporal-Difference Learning (TD(0), SARSA)', 'Learn from bootstrapped estimates.'],
          ['eligibility-traces', 'Eligibility Traces (TD(λ))', 'Blend n-step returns.'],
          ['function-approximation', 'Function Approximation', 'Represent values with parameterized functions.'],
          ['least-squares-rl', 'Least Squares Methods (LSTD)', 'Solve for value weights directly.']
        ] },
        { name: 'Unit IV · Deep Reinforcement Learning', terms: [
          ['fitted-q', 'Fitted Q Iteration', 'Batch RL with regression on Q targets.'],
          ['dqn', 'Deep Q-Network (DQN)', 'Q-learning with a neural network, replay buffer and target network.', 'aiml.dqn'],
          ['advanced-q', 'Advanced Q-learning (Double, Dueling, Prioritized Replay)', 'Fix over-estimation and improve sample use.'],
          ['imitation', 'Imitation Learning', 'Learn policies by imitating expert controllers.'],
          ['policy-gradient', 'Policy Gradient Algorithms (REINFORCE)', 'Gradient ascent on expected return.'],
          ['hierarchical-rl', 'Hierarchical RL', 'Options and sub-policies.'],
          ['pomdp', 'POMDPs', 'Partially observable MDPs with belief states.'],
          ['actor-critic', 'Actor–Critic (A2C, A3C, PPO, SAC)', 'Policy (actor) + value (critic).', 'aiml.ppo'],
          ['irl', 'Inverse Reinforcement Learning', 'Infer the reward from expert behaviour.'],
          ['maxent-irl', 'Maximum Entropy Deep IRL', 'IRL with max-entropy principle.'],
          ['gail', 'Generative Adversarial Imitation Learning', 'GAN-style imitation of experts.'],
          ['rlhf', 'RLHF (Reinforcement Learning from Human Feedback)', 'How chat LLMs are aligned with human preferences.', 'aiml.rlhf'],
          ['rl-trends', 'Recent Trends in RL', 'Model-based RL, offline RL, RL for LLM reasoning.']
        ] }
      ]
    },
    {
      id: 'isdh', name: 'Information Security and Data Hiding', short: 'Data Hiding', code: 'PEC-IV', kind: 'elective', lang: 'python', icon: '🕵',
      desc: 'Professional Elective IV: security basics, attacks, hacking, compression, steganography, watermarking and wavelet-based hiding.',
      units: [
        { name: 'Unit I · Introduction', terms: [
          ['need-security-isdh', 'Need for Security & Security Approach', 'Why and how to protect information.', 'crypto.need-security'],
          ['principles-isdh', 'Principles of Security', 'CIA, authentication, non-repudiation.', 'crypto.security-principles'],
          ['attacks-isdh', 'Types of Attack', 'Interception, modification, fabrication, interruption.'],
          ['dos-isdh', 'Denial of Service', 'Making resources unavailable.', 'cyber.dos-ddos'],
          ['ip-spoof-isdh', 'IP Spoofing', 'Faking source addresses.', 'cyber.ip-spoofing'],
          ['phishing', 'Phishing', 'Fraudulent messages that steal credentials.'],
          ['digital-signature-isdh', 'Digital Signature', 'Authenticity and integrity with private keys.', 'crypto.digital-signatures'],
          ['firewall-isdh', 'Firewall', 'Traffic filtering.', 'cn.firewalls']
        ] },
        { name: 'Unit II · Hacking & Compression', terms: [
          ['hacking-basics', 'Hacking Basics & Types', 'Ethical vs malicious hacking; network, web, password attacks.'],
          ['email-hacking', 'Email Hacking', 'Account takeover via phishing, password reuse.'],
          ['computer-hacking', 'Computer Hacking', 'Exploiting system vulnerabilities.'],
          ['anti-hacking', 'Practices against Hacking', 'Patching, strong passwords, MFA, least privilege.'],
          ['access-authorization', 'Access Authorization', 'Granting only needed permissions.'],
          ['compression', 'Compression (Lossless vs Lossy)', 'Reduce data size.'],
          ['lzw', 'LZW Compression & Decompression', 'Dictionary-based lossless compression (used in GIF).']
        ] },
        { name: 'Unit III · Data Hiding', terms: [
          ['data-hiding-terms', 'Terms in Data Hiding', 'Cover, payload, stego-object, key, capacity, imperceptibility.'],
          ['crypto-stego-watermark', 'Cryptography vs Steganography vs Watermarking', 'Hide meaning vs hide existence vs mark ownership.'],
          ['steganography-history', 'History of Steganography', 'Invisible ink, microdots, digital stego.'],
          ['lsb', 'LSB Steganography', 'Hide bits in the least significant bits of pixels.'],
          ['watermarking', 'Digital Watermarking', 'Embed ownership marks (visible/invisible, robust/fragile).'],
          ['data-hiding-apps', 'Applications of Data Hiding', 'Copyright, covert communication, authentication.']
        ] },
        { name: 'Unit IV · Advanced Data Hiding', terms: [
          ['transform-domain', 'Transform-domain Hiding', 'Embed in DCT/DFT/DWT coefficients.'],
          ['spatial-vs-transform', 'Spatial vs Transform Domain', 'Pixel changes vs coefficient changes (more robust).'],
          ['wavelets-isdh', 'Wavelets & Their Advantages', 'Multi-resolution, good localization.', 'dip.wavelet'],
          ['wavelet-hiding', 'Wavelet-based Data Hiding', 'Embed data in wavelet sub-bands.'],
          ['steganalysis', 'Steganalysis (Bonus)', 'Detecting hidden data.']
        ] }
      ]
    },
    {
      id: 'project2', name: 'Project – II & Practical Training – II', short: 'Project II', kind: 'project', lang: 'text', icon: '🚀',
      desc: 'Major project phase 1 and evaluation of the summer training.',
      units: [
        { name: 'Major Project', terms: [
          ['major-project-idea', 'Choosing a Major Project (AI)', 'Pick a problem with real data and measurable outcomes.'],
          ['research-paper', 'Reading & Writing Research Papers', 'Abstract, related work, methodology, experiments.'],
          ['dataset-collection', 'Dataset Collection & Labelling', 'Kaggle, Hugging Face, own data; annotation tools.'],
          ['experiment-tracking', 'Experiment Tracking', 'Log runs, metrics and models (MLflow, W&B).', 'aiml.mlops'],
          ['deploy-model', 'Deploying an AI Model', 'Serve via API (FastAPI) and a web front end.', 'aiml.model-deployment'],
          ['training-evaluation', 'Training Report Evaluation', 'Present the summer training work.']
        ] }
      ]
    }
  ]
};
