// Semester 5 — B.Tech CSE (AI)
export default {
  sem: 5,
  title: 'Semester 5 — Networks, Theory & Language AI',
  note: 'Choose one Professional Elective (I) and one Open Elective (I, offered by other departments — ask the AI Mentor for any open-elective topic). Practical Training-I happens after Semester 4/5 as per the university notice.',
  courses: [
    {
      id: 'cn', name: 'Computer Networks', short: 'Computer Networks', code: 'PCC-301', kind: 'core', lang: 'text', icon: '🌐',
      desc: 'Data communication, OSI/TCP-IP, data link and MAC, IP addressing and subnetting, routing, TCP/UDP, congestion, application protocols and security — with Packet Tracer lab.',
      units: [
        { name: 'Unit I · Introduction & Models', terms: [
          ['data-communication', 'Data Communication & Components', 'Message, sender, receiver, medium and protocol.'],
          ['data-representation', 'Data Representation', 'Text, numbers, images, audio and video as bits.'],
          ['transmission-modes', 'Simplex, Half-duplex, Full-duplex', 'One-way, two-way alternate, two-way simultaneous.'],
          ['modulation', 'Modulation (AM, FM, PM; ASK, FSK, PSK, QAM)', 'Varying a carrier signal to carry data.'],
          ['multiplexing', 'Multiplexing (FDM, TDM, WDM)', 'Sharing one link among many signals.'],
          ['networks', 'Computer Networks & Distributed Processing', 'Interconnected computers sharing resources and tasks.'],
          ['internet', 'The Internet', 'A global network of networks using TCP/IP.'],
          ['network-types', 'LAN, MAN, WAN, PAN', 'Networks classified by area covered.'],
          ['topologies', 'Network Topologies', 'Bus, star, ring, mesh, tree, hybrid.'],
          ['switching', 'Circuit vs Packet Switching', 'Dedicated path vs independently routed packets.'],
          ['connection-oriented', 'Connection-oriented vs Connectionless Services', 'TCP sets up a connection; UDP/IP do not.'],
          ['osi', 'OSI Reference Model', '7 layers: physical, data link, network, transport, session, presentation, application.', 'net.osi'],
          ['tcpip', 'TCP/IP Model', '4/5 layers used by the Internet.', 'net.tcp-ip'],
          ['physical-layer', 'Physical Layer & Transmission Media', 'Twisted pair, coaxial, fibre, wireless; bandwidth, signal.'],
          ['ethernet', 'LAN: Ethernet (IEEE 802.3)', 'Wired LAN standard using frames and MAC addresses.']
        ] },
        { name: 'Unit II · Data Link, MAC & Network Layer', terms: [
          ['mac-address', 'MAC Addressing', '48-bit hardware address of a network interface.'],
          ['framing', 'Framing', 'Dividing the bit stream into frames (character/bit stuffing).'],
          ['error-detection', 'Error Detection: Parity, Checksum, CRC', 'Detecting corrupted frames.'],
          ['stop-wait', 'Stop-and-Wait ARQ', 'Send one frame, wait for ACK.'],
          ['go-back-n', 'Go-Back-N ARQ', 'Send window of frames; resend from the lost one.'],
          ['selective-repeat', 'Selective Repeat ARQ', 'Resend only the lost frames.'],
          ['sliding-window', 'Sliding Window Protocol', 'Allows several unacknowledged frames for efficiency.'],
          ['random-access', 'Random Access: ALOHA, CSMA, CSMA/CD, CSMA/CA', 'Contention-based channel access.'],
          ['controlled-access', 'Controlled Access: Reservation, Polling, Token Passing', 'Coordinated channel access.'],
          ['channelization', 'Channelization: FDMA, TDMA, CDMA', 'Share bandwidth by frequency, time or code.'],
          ['logical-addressing', 'Logical Addressing (IP)', 'IP addresses identify hosts across networks.'],
          ['classful', 'Classful Addressing (A–E)', 'Fixed network/host split by class.'],
          ['classless', 'Classless Addressing (CIDR)', 'Variable prefix length like /24.'],
          ['subnetting', 'Subnetting & Subnet Masks', 'Split a network into smaller subnets.', 'net.subnetting'],
          ['ipv4', 'IPv4 & Header', '32-bit addresses; TTL, fragmentation, checksum.'],
          ['icmp', 'ICMPv4', 'Error and diagnostic messages (ping, traceroute).'],
          ['arp-rarp', 'ARP, RARP & BOOTP/DHCP', 'Map IP↔MAC; assign addresses automatically.'],
          ['ipv6', 'IPv6 & Addressing', '128-bit addresses, simpler header, no NAT needed.'],
          ['nat', 'NAT', 'Many private addresses share one public IP.']
        ] },
        { name: 'Unit III · Devices, Routing & Transport', terms: [
          ['devices', 'Repeater, Hub, Switch, Bridge, Router, Gateway', 'Network devices working at different layers.'],
          ['vlan', 'VLANs & Trunking', 'Logical LANs on one switch; trunks carry many VLANs.'],
          ['routing-intro', 'Introduction to Routing', 'Choosing paths for packets; routing tables.'],
          ['shortest-path-routing', 'Shortest Path Routing', 'Dijkstra-based least-cost routing.', 'dsa.dijkstra'],
          ['flooding', 'Flooding', 'Send packets on every link — robust but wasteful.'],
          ['hierarchical-routing', 'Hierarchical Routing', 'Divide networks into regions to shrink tables.'],
          ['link-state', 'Link State Routing (OSPF)', 'Each router knows the full topology.'],
          ['distance-vector', 'Distance Vector Routing (RIP)', 'Routers share distance tables (Bellman-Ford); count-to-infinity.'],
          ['bgp', 'BGP (Inter-domain Routing)', 'Routing between autonomous systems on the internet.'],
          ['process-to-process', 'Process-to-process Communication & Ports', 'Transport layer delivers data to the right application via ports.'],
          ['udp', 'UDP', 'Connectionless, fast, no reliability — DNS, streaming, games.', 'net.tcp-udp'],
          ['tcp', 'TCP', 'Reliable, ordered, connection-oriented byte stream.', 'net.tcp-udp'],
          ['tcp-connection', 'TCP Connection Management (3-way handshake)', 'SYN, SYN-ACK, ACK to open; FIN to close.', 'net.handshake'],
          ['flow-control', 'Flow Control', 'Receiver window stops the sender from overwhelming it.']
        ] },
        { name: 'Unit IV · Congestion, QoS, Applications & Security', terms: [
          ['congestion-control', 'Congestion Control', 'Slow start, congestion avoidance, AIMD, fast retransmit.'],
          ['qos', 'Quality of Service', 'Reliability, delay, jitter and bandwidth guarantees.'],
          ['qos-techniques', 'QoS Techniques: Leaky & Token Bucket, Scheduling', 'Traffic shaping and prioritization.'],
          ['dns', 'DNS (Domain Name System)', 'Translates names to IP addresses hierarchically.', 'net.dns'],
          ['email', 'Email: SMTP, POP3, IMAP', 'Protocols to send and retrieve mail.'],
          ['ftp', 'FTP', 'File transfer with separate control and data connections.'],
          ['http', 'HTTP', 'Request–response protocol of the web.', 'net.http'],
          ['snmp', 'SNMP', 'Protocol for monitoring and managing network devices.'],
          ['firewalls', 'Firewalls', 'Filter traffic by rules (packet filter, stateful, proxy).'],
          ['security-goals', 'Security Goals (CIA)', 'Confidentiality, integrity, availability.'],
          ['attack-types', 'Types of Attacks', 'Passive (sniffing) and active (spoofing, DoS, MITM).'],
          ['symmetric-asymmetric', 'Symmetric & Asymmetric Key Ciphers', 'One shared key vs public/private key pairs.']
        ] },
        { name: 'CN Lab', terms: [
          ['packet-tracer', 'Cisco Packet Tracer Basics', 'Simulate networks with routers and switches.'],
          ['rj45', 'Making an RJ45 Cable', 'Straight-through and crossover wiring (T568A/B).'],
          ['static-routing', 'Static Routing Configuration', 'Manually add routes on routers.'],
          ['rip-config', 'RIP Configuration', 'Dynamic routing with RIP.'],
          ['wireshark', 'Monitoring Traffic with Wireshark', 'Capture and inspect packets.'],
          ['net-commands', 'Network Commands', 'ping, ipconfig/ifconfig, tracert, nslookup, netstat, arp -a.']
        ] }
      ]
    },
    {
      id: 'toc', name: 'Theory of Computation', short: 'TOC', code: 'PCC-303', kind: 'core', lang: 'text', icon: '🔁',
      desc: 'Automata, regular expressions and languages, grammars, PDAs, Turing machines and undecidability.',
      units: [
        { name: 'Unit I · Finite Automata', terms: [
          ['toc-basics', 'Sets, Power Set, Alphabet, Strings, Languages', 'Basic objects of automata theory.'],
          ['grammars-intro', 'Grammars, Productions & Derivations', 'Rules that generate strings of a language.'],
          ['dfa', 'Deterministic Finite Automata (DFA)', 'Exactly one transition per symbol from each state.'],
          ['nfa', 'Non-deterministic Finite Automata (NFA)', 'Zero, one or many transitions per symbol.'],
          ['dfa-nfa-equivalence', 'Equivalence of DFA and NFA', 'Every NFA has an equivalent DFA.'],
          ['subset-construction', 'NFA to DFA Conversion (Subset Construction)', 'DFA states are sets of NFA states.'],
          ['minimization', 'Minimization of DFA', 'Merge equivalent states (partition/table-filling).'],
          ['epsilon-nfa', 'ε-NFA & ε-closure', 'Automata with empty-string moves.'],
          ['acceptance', 'Acceptance of Strings', 'A string is accepted if it ends in a final state.'],
          ['fa-limits', 'Properties & Limitations of FA', 'No memory beyond states — can’t count unboundedly.'],
          ['mealy-moore', 'Mealy and Moore Machines', 'Output depends on state+input (Mealy) or state only (Moore).'],
          ['mealy-moore-conv', 'Equivalence of Mealy and Moore', 'Convert between the two models.']
        ] },
        { name: 'Unit II · Regular Expressions & Languages', terms: [
          ['regex-toc', 'Regular Expressions', 'Algebraic notation for regular languages using union, concatenation, star.'],
          ['regex-recursive', 'Recursive Definition of RE', 'Built from ∅, ε, symbols with +, ·, *.'],
          ['arden', 'Arden’s Theorem', 'R = Q + RP has solution R = QP*; used to convert FA to RE.'],
          ['re-to-fa', 'RE to Finite Automata (Thompson)', 'Build an ε-NFA from a regular expression.'],
          ['fa-to-re', 'FA to RE', 'State elimination or Arden’s method.'],
          ['regular-languages', 'Regular Languages & Closure Properties', 'Closed under union, concatenation, star, complement, intersection.'],
          ['pumping-lemma', 'Pumping Lemma for Regular Languages', 'Used to prove a language is not regular.'],
          ['regular-apps', 'Applications of Regular Languages', 'Lexical analysis, text search, input validation.']
        ] },
        { name: 'Unit III · Grammars & Pushdown Automata', terms: [
          ['chomsky-hierarchy', 'Chomsky Hierarchy', 'Type 0 (unrestricted), 1 (CSG), 2 (CFG), 3 (regular).'],
          ['cfg', 'Context-free Grammar', 'Productions with a single non-terminal on the left.'],
          ['parse-tree', 'Derivation Tree / Parse Tree', 'Leftmost and rightmost derivations shown as a tree.'],
          ['ambiguity', 'Ambiguity & Its Removal', 'A grammar is ambiguous if a string has two parse trees.'],
          ['useless-symbols', 'Removing Useless Symbols, ε- and Unit Productions', 'Simplifying grammars.'],
          ['cnf', 'Chomsky Normal Form (CNF)', 'Productions A → BC or A → a.'],
          ['gnf', 'Greibach Normal Form (GNF)', 'Productions A → aα.'],
          ['pda', 'Pushdown Automata (PDA)', 'Finite automaton with a stack.'],
          ['dpda-npda', 'Deterministic vs Non-deterministic PDA', 'NPDA is more powerful than DPDA.'],
          ['pda-design', 'Designing PDAs (Transition Table & Diagram)', 'e.g. PDA for aⁿbⁿ.'],
          ['pda-cfg', 'Equivalence of PDA and CFG', 'Every CFL has a PDA and vice versa.'],
          ['cfl-pumping', 'Pumping Lemma for CFLs (Bonus)', 'Proves languages like aⁿbⁿcⁿ are not context-free.']
        ] },
        { name: 'Unit IV · Turing Machines & Undecidability', terms: [
          ['turing-machine', 'Turing Machine: Basic Model', 'Tape, head and states — the most powerful model of computation.'],
          ['dtm-ntm', 'Deterministic vs Non-deterministic TMs', 'Equivalent in power.'],
          ['tm-design', 'Designing Turing Machines', 'Transition table and diagram for languages/functions.'],
          ['tm-variants', 'Variants of Turing Machines', 'Multi-tape, multi-track, two-way infinite — all equivalent.'],
          ['halting-problem', 'Halting Problem', 'No algorithm can decide if any program halts — undecidable.'],
          ['pcp', 'Post Correspondence Problem (PCP)', 'An undecidable problem used in reductions.'],
          ['lba', 'Linear Bounded Automata', 'TMs restricted to input-length tape; accept CSLs.'],
          ['tm-enumerators', 'TMs as Enumerators', 'TMs that list strings of a language (recursively enumerable).'],
          ['church-turing', 'Church–Turing Thesis', 'Anything computable can be computed by a Turing machine.'],
          ['utm', 'Universal Turing Machine', 'A TM that simulates any other TM.'],
          ['diagonalization', 'Universal & Diagonalization Languages', 'L_u is RE but not recursive; L_d is not RE.'],
          ['reduction-toc', 'Reductions between Languages', 'Prove undecidability by reducing a known problem.'],
          ['rice', 'Rice’s Theorem', 'Every non-trivial property of RE languages is undecidable.'],
          ['decidable', 'Decidable vs Undecidable Problems', 'Recursive vs recursively enumerable vs non-RE.']
        ] }
      ]
    },
    {
      id: 'nlp', name: 'Natural Language Processing', short: 'NLP', code: 'PCC-305', kind: 'core', lang: 'python', icon: '💬',
      desc: 'NLP with Python and NLTK: corpora, text processing, regex, tagging, classification, deep learning, information extraction and parsing.',
      units: [
        { name: 'Unit I · Language Processing & Python', terms: [
          ['nlp-intro', 'What is NLP', 'Making computers understand and generate human language.', 'aiml.nlp'],
          ['texts-words', 'Computing with Language: Texts and Words', 'Treat text as sequences of tokens; concordance, similar words.'],
          ['texts-lists', 'Texts as Lists of Words', 'Python lists for tokens; indexing and slicing text.'],
          ['simple-stats', 'Simple Statistics: Frequency Distributions', 'FreqDist, most common words, lexical diversity.'],
          ['nlu', 'Automatic Natural Language Understanding', 'WSD, pronoun resolution, translation, dialogue, textual entailment.'],
          ['corpora', 'Accessing Text Corpora', 'Gutenberg, Brown, Reuters, inaugural corpora in NLTK.'],
          ['cfd', 'Conditional Frequency Distributions', 'Frequencies grouped by a condition (e.g. genre).'],
          ['lexical-resources', 'Lexical Resources', 'Word lists, stopwords, pronouncing dictionaries.'],
          ['wordnet', 'WordNet', 'Lexical database of synsets, hypernyms and similarity.'],
          ['nltk', 'NLTK Library', 'Python toolkit for NLP tasks.']
        ] },
        { name: 'Unit II · Processing Raw Text & Tagging', terms: [
          ['text-from-web', 'Accessing Text from Web and Disk', 'urllib/requests, BeautifulSoup, reading local files.'],
          ['unicode', 'Text Processing with Unicode', 'Encoding/decoding UTF-8 text.'],
          ['regex-nlp', 'Regular Expressions for Word Patterns', 're module to search and match text.', 'python.regex'],
          ['normalization', 'Normalizing Text', 'Lowercasing, removing punctuation, stemming, lemmatization.'],
          ['stemming', 'Stemming (Porter, Snowball)', 'Chop suffixes to get a root form.'],
          ['lemmatization', 'Lemmatization', 'Reduce words to dictionary form using vocabulary/POS.'],
          ['tokenization', 'Tokenization', 'Split text into words or sentences.', 'aiml.tokenization'],
          ['segmentation', 'Sentence & Word Segmentation', 'Detect sentence boundaries and word boundaries.'],
          ['formatting', 'Formatting: Lists to Strings', 'join(), string formatting and text output.'],
          ['pos-tagging', 'Part-of-Speech Tagging', 'Label each word as noun, verb, adjective…'],
          ['tagged-corpora', 'Tagged Corpora & Tagsets', 'Penn Treebank and universal tagsets.'],
          ['dict-mapping', 'Mapping Words to Properties (Dictionaries)', 'Python dicts for word → tag/frequency.'],
          ['auto-tagging', 'Automatic Tagging (Default, Regex, Lookup)', 'Simple baseline taggers.'],
          ['ngram-tagging', 'N-gram Tagging', 'Unigram, bigram taggers with backoff.'],
          ['brill', 'Transformation-based (Brill) Tagging', 'Learn correction rules for tags.'],
          ['word-category', 'Determining the Category of a Word', 'Morphological, syntactic and semantic clues.']
        ] },
        { name: 'Unit III · Classification & Deep Learning', terms: [
          ['text-classification', 'Supervised Text Classification', 'Assign labels like spam/ham or sentiment.'],
          ['feature-extraction-nlp', 'Feature Extraction (Bag-of-Words)', 'Represent text as word-count vectors.', 'aiml.bag-of-words'],
          ['nlp-evaluation', 'Evaluation: Accuracy, Precision, Recall, Confusion Matrix', 'Measuring classifier quality.', 'aiml.classification-metrics'],
          ['nb-text', 'Naïve Bayes for Text', 'Probabilistic classifier common for text.', 'aiml.naive-bayes'],
          ['dl-intro-nlp', 'Introduction to Deep Learning for NLP', 'Neural networks learn representations of text.'],
          ['word-embeddings', 'Word Embeddings (word2vec, GloVe)', 'Dense vectors where similar words are close.', 'aiml.embeddings'],
          ['cnn-text', 'CNNs for Text', 'Convolutions over word embeddings detect n-gram features.'],
          ['rnn-text', 'RNNs & LSTMs for Text', 'Sequence models keeping memory of previous words.', 'aiml.rnn-lstm'],
          ['dl-text-classify', 'Classifying Text with Deep Learning', 'Embedding → LSTM/CNN → dense → softmax.'],
          ['transformers-nlp', 'Transformers & BERT (Bonus)', 'Attention-based models now used for most NLP.', 'aiml.transformers']
        ] },
        { name: 'Unit IV · Information Extraction & Parsing', terms: [
          ['information-extraction', 'Information Extraction', 'Pulling structured facts from text.'],
          ['chunking', 'Chunking (NP Chunking)', 'Group words into phrases with regex grammars.'],
          ['chunker-eval', 'Developing & Evaluating Chunkers', 'IOB tags, precision/recall on chunks.'],
          ['recursion-linguistic', 'Recursion in Linguistic Structure', 'Nested phrases and cascaded chunkers.'],
          ['ner', 'Named Entity Recognition', 'Find names of people, places, organizations, dates.'],
          ['relation-extraction', 'Relation Extraction', 'Find relationships between entities.'],
          ['grammatical-dilemmas', 'Grammatical Dilemmas', 'Ambiguity like “I shot an elephant in my pajamas”.'],
          ['syntax-use', 'Use of Syntax', 'Why structure matters for meaning.'],
          ['cfg-nlp', 'Context-free Grammar for English', 'Rules like S → NP VP.', 'toc.cfg'],
          ['parsing', 'Parsing with CFG', 'Recursive-descent, shift-reduce and chart parsers.']
        ] }
      ]
    },
    {
      id: 'dmw', name: 'Data Mining and Warehousing', short: 'Data Mining', code: 'PCC-307', kind: 'core', lang: 'python', icon: '⛏',
      desc: 'Statistics, preprocessing, Apriori, decision trees, data warehouses, OLAP cubes, schemas, data wrangling and ETL — with WEKA/Pentaho lab.',
      units: [
        { name: 'Unit I · Basic Statistics', terms: [
          ['mean-median-mode', 'Mean, Median, Mode', 'Measures of central tendency.', 'maths2.central-tendency'],
          ['dispersion-dm', 'Range, Quartiles, Variance, Standard Deviation', 'Measures of spread; IQR and five-number summary.'],
          ['chi-square-dm', 'Chi-square Test', 'Tests independence of categorical attributes.', 'maths2.chi-square-independence'],
          ['corr-cov', 'Correlation Coefficient & Covariance', 'Strength and direction of linear relationships.'],
          ['regression-dm', 'Regression Analysis', 'Model relationships between variables.']
        ] },
        { name: 'Unit II · Data Preprocessing', terms: [
          ['preprocessing', 'Need for Data Preprocessing', 'Real data is incomplete, noisy and inconsistent.', 'aiml.data-preprocessing'],
          ['data-cleaning', 'Data Cleaning: Missing Values & Noise', 'Impute, drop, bin, smooth outliers.', 'aiml.missing-data'],
          ['data-integration', 'Data Integration & Redundancy', 'Combine sources; detect duplicates and correlated attributes.'],
          ['data-reduction-dm', 'Data Reduction Strategies', 'Dimensionality reduction, numerosity reduction, compression.'],
          ['data-transformation', 'Data Transformation', 'Normalization (min-max, z-score), aggregation, generalization.'],
          ['discretization', 'Discretization & Concept Hierarchy', 'Convert continuous values into intervals.']
        ] },
        { name: 'Unit III · Mining Algorithms, Warehousing & Wrangling', terms: [
          ['data-mining', 'Data Mining & KDD Process', 'Discovering patterns in large data (knowledge discovery).'],
          ['market-basket', 'Market Basket Analysis', 'Find items frequently bought together.'],
          ['support-confidence', 'Support, Confidence & Lift', 'Measures of association rule strength.'],
          ['apriori', 'Apriori Algorithm', 'Generate frequent itemsets level by level using the Apriori property.'],
          ['fp-growth', 'FP-Growth (Bonus)', 'Mine frequent itemsets without candidate generation.'],
          ['decision-tree-dm', 'Decision Tree Induction', 'Classification by recursive partitioning.', 'aiml.decision-tree'],
          ['data-warehouse', 'Data Warehouse', 'Subject-oriented, integrated, time-variant, non-volatile store for analysis.'],
          ['oltp-olap', 'Operational DB (OLTP) vs Data Warehouse (OLAP)', 'Transactions vs analysis workloads.'],
          ['data-cube', 'Data Cubes', 'Multidimensional view of data: dimensions and measures.'],
          ['olap-ops', 'OLAP Operations', 'Roll-up, drill-down, slice, dice, pivot.'],
          ['star-schema', 'Star Schema', 'One fact table joined to denormalized dimension tables.'],
          ['snowflake', 'Snowflake Schema', 'Dimension tables normalized into sub-tables.'],
          ['fact-constellation', 'Fact Constellation', 'Multiple fact tables sharing dimensions.'],
          ['data-wrangling', 'Data Wrangling', 'Cleaning and reshaping raw data for analysis.'],
          ['merge-combine', 'Combining & Merging Datasets', 'pandas merge, join, concat.', 'python.pandas'],
          ['reshape-pivot', 'Reshaping & Pivoting', 'pivot, melt, stack, unstack.'],
          ['string-manip-dm', 'String Manipulation & Regex in Wrangling', 'Clean text columns with str methods and regex.', 'python.regex']
        ] },
        { name: 'Unit IV · ETL', terms: [
          ['etl', 'ETL (Extract, Transform, Load)', 'Move data from sources into a warehouse.'],
          ['etl-phase1', 'ETL Phase 1: Wrangling Before Load', 'Profile and clean data before loading.'],
          ['ssis', 'ETL Phase 2: Loading with SSIS', 'Using SQL Server Integration Services packages.'],
          ['etl-errors', 'Handling Errors in ETL Phases', 'Logging, rejecting and correcting bad rows.'],
          ['etl-phase3', 'ETL Phase 3: Wrangling After Load', 'Post-load transformation and validation.'],
          ['etl-tools', 'Types of ETL Tools', 'SSIS, Informatica, Talend, Pentaho, Apache NiFi, Airflow, dbt.'],
          ['elt', 'ETL vs ELT (Modern Warehouses)', 'Transform inside cloud warehouses like BigQuery, Snowflake.']
        ] },
        { name: 'DMW Lab', terms: [
          ['weka', 'WEKA Toolkit', 'GUI tool for classification, clustering and association rules.'],
          ['pentaho', 'Pentaho Data Integration', 'Open-source ETL tool for building warehouses.'],
          ['lab-assoc', 'Association Rule Mining Lab', 'Run Apriori on a dataset and interpret rules.'],
          ['lab-classify-cluster', 'Classification & Clustering Lab', 'Experiment with parameters on real datasets.']
        ] }
      ]
    },
    {
      id: 'twi', name: 'Text and Web Intelligence', short: 'Text & Web Intelligence', code: 'PCC-309', kind: 'core', lang: 'python', icon: '🕸',
      desc: 'Information retrieval, text mining, topic models, sentiment analysis, recommendation systems and web mining/ranking.',
      units: [
        { name: 'Unit I · IR & Preprocessing', terms: [
          ['ir-problem', 'Information Retrieval Problem', 'Finding relevant documents for a query from a large collection.'],
          ['boolean-retrieval', 'Boolean Retrieval', 'Queries with AND/OR/NOT over terms.'],
          ['term-incidence', 'Term–Document Incidence Matrix', '1 if a term appears in a document.'],
          ['inverted-index', 'Inverted Index', 'Map each term to the list of documents containing it.'],
          ['postings', 'Dictionary & Postings Lists', 'Terms in a dictionary pointing to sorted doc-ID lists.'],
          ['boolean-queries', 'Processing Boolean Queries', 'Intersect/merge postings lists.'],
          ['skip-pointers', 'Skip Pointers', 'Speed up postings intersection.'],
          ['ir-preprocessing', 'Preprocessing: Tokenization, Stop Words, Normalization', 'Prepare text for indexing.'],
          ['stem-lemma-twi', 'Stemming & Lemmatization', 'Reduce word variants.', 'nlp.stemming'],
          ['pos-twi', 'POS Tagging', 'Tag words with parts of speech.', 'nlp.pos-tagging'],
          ['wildcard', 'Wildcard Queries', 'Permuterm and k-gram indexes for patterns like te*t.']
        ] },
        { name: 'Unit II · Text Mining & Analytics', terms: [
          ['text-mining', 'Text Mining & Analytics Overview', 'Turning text into structured knowledge.'],
          ['paradigmatic', 'Paradigmatic Relation Discovery', 'Words that can substitute for each other (cat/dog).'],
          ['syntagmatic', 'Syntagmatic Relation Discovery', 'Words that co-occur (eat/food).'],
          ['cosine-similarity', 'Cosine Similarity', 'cos θ = A·B/(|A||B|) for document vectors.', 'aiml.cosine-similarity'],
          ['tf-idf', 'TF-IDF', 'Term frequency × inverse document frequency weighting.', 'aiml.tf-idf'],
          ['vector-space-model', 'Vector Space Model', 'Documents and queries as weighted term vectors.'],
          ['plsa', 'PLSA', 'Probabilistic latent semantic analysis — topic model.'],
          ['lda-topic', 'LDA (Latent Dirichlet Allocation)', 'Generative topic model: documents are mixtures of topics.']
        ] },
        { name: 'Unit III · Sentiment & Recommendation', terms: [
          ['sentiment-analysis', 'Sentiment Analysis', 'Detect positive, negative or neutral opinion.'],
          ['sentiment-classification', 'Sentiment Classification', 'Lexicon-based vs ML-based approaches.'],
          ['opinion-mining', 'Opinion Mining (Aspect-based)', 'Find opinions about specific features.'],
          ['vader', 'NLTK Sentiment Analysis (VADER)', 'Rule-based sentiment scores for social text.'],
          ['recommender', 'Recommendation Systems', 'Suggest items users may like.'],
          ['collaborative', 'Collaborative Filtering', 'Recommend from similar users/items.'],
          ['content-based', 'Content-based Filtering', 'Recommend items similar to what a user liked.'],
          ['matrix-factorization', 'Matrix Factorization (Bonus)', 'Latent factors for users and items (SVD).']
        ] },
        { name: 'Unit IV · Web Analytics & Ranking', terms: [
          ['web-analytics', 'Web Analytics', 'Measuring and analyzing website usage.'],
          ['web-mining-process', 'Web Mining Process & Techniques', 'Content, structure and usage mining.'],
          ['data-collection', 'Data Collection on the Web', 'Logs, APIs and crawling.'],
          ['web-scraping', 'Web Scraping', 'Extracting data from HTML with requests/BeautifulSoup (respect robots.txt).'],
          ['pagerank', 'PageRank', 'Ranks pages by importance from incoming links (random surfer).'],
          ['hits', 'HITS (Hubs & Authorities)', 'Hubs link to good authorities; authorities are linked by good hubs.'],
          ['information-cascades', 'Cascading & Diffusion in Networks', 'How information spreads through social networks.']
        ] },
        { name: 'TWI Lab', terms: [
          ['lab-tokenize', 'Tokenize Words & Sentences (NLTK)', 'word_tokenize and sent_tokenize.'],
          ['lab-twitter', 'Remove Twitter Handles', 'Use TweetTokenizer / regex.'],
          ['lab-stemmers', 'PorterStemmer & SnowballStemmer', 'Compare stemmers on a word list.'],
          ['lab-lemmatize', 'Lemmatization with WordNet', 'WordNetLemmatizer with POS.'],
          ['lab-bs4', 'Strip HTML with BeautifulSoup', 'get_text() to extract plain text.'],
          ['lab-ascii', 'Normalize Text & Remove Non-ASCII / Accents', 'unicodedata.normalize and encoding tricks.']
        ] }
      ]
    },
    {
      id: 'wmn', name: 'Advanced Wireless & Mobile Networks', short: 'Wireless Networks', code: 'PEC-I', kind: 'elective', lang: 'text', icon: '📡',
      desc: 'Professional Elective I: wireless fundamentals, WLAN/PAN, cellular, GSM/UMTS, ad-hoc networks, routing, energy and security.',
      units: [
        { name: 'Unit I · Wireless Fundamentals, WLAN & PAN', terms: [
          ['wireless-types', 'Types & Applications of Wireless Networks', 'WLAN, WPAN, WMAN, WWAN, cellular, satellite.'],
          ['wireless-evolution', 'Evolution & Challenges', 'From 1G to 5G/6G; interference, mobility, power.'],
          ['spectrum', 'Electromagnetic Spectrum', 'Frequency bands used for communication.'],
          ['spread-spectrum', 'Spread Spectrum (FHSS, DSSS)', 'Spread a signal over wide bandwidth for robustness.'],
          ['frequency-reuse', 'Frequency Reuse', 'Reuse frequencies in non-adjacent cells.'],
          ['propagation', 'Radio Propagation: Reflection, Diffraction, Scattering', 'How radio waves travel.'],
          ['antennas', 'Signals & Antennas', 'Antenna types, gain and radiation pattern.'],
          ['channel-characteristics', 'Wireless Channel Characteristics', 'Path loss, fading, multipath, Doppler shift.'],
          ['wireless-modulation', 'Modulation & Multiple Access (FDMA, TDMA, CDMA, OFDMA)', 'Sharing the wireless medium.'],
          ['wlan', 'WLAN Design Goals', 'Coverage, throughput, security, low power.'],
          ['ieee80211', 'IEEE 802.11 Architecture', 'BSS, ESS, access points; Wi-Fi standards (a/b/g/n/ac/ax/be).'],
          ['infra-adhoc', 'Infrastructure vs Ad-hoc Mode', 'With or without an access point.'],
          ['csma-ca', '802.11 PHY & MAC, CSMA/CA', 'Collision avoidance with RTS/CTS.'],
          ['hiperlan', 'HIPERLAN 1/2', 'European WLAN standards.'],
          ['homerf', 'HomeRF', 'Early home wireless standard.'],
          ['bluetooth', 'Bluetooth Architecture', 'Piconets, scatternets, protocol stack; BLE.'],
          ['other-pan', 'Other PAN Technologies (Zigbee, NFC, UWB)', 'Short-range low-power wireless.']
        ] },
        { name: 'Unit II · Cellular & Telecom Systems', terms: [
          ['cellular-concept', 'The Cellular Concept', 'Divide area into cells each with a base station.'],
          ['call-setup', 'Call Set-up', 'Steps to establish a mobile call.'],
          ['channel-allocation', 'Channel Allocation Algorithms', 'Fixed, dynamic and hybrid allocation.'],
          ['handoff', 'Handoffs', 'Transferring a call between cells (hard/soft).'],
          ['mobility-management', 'Mobility Management', 'Location tracking and paging.'],
          ['gsm', 'GSM Architecture & Channels', 'MS, BSS (BTS/BSC), NSS (MSC, HLR, VLR).'],
          ['is95', 'IS-95 (CDMA)', 'Qualcomm’s CDMA cellular standard.'],
          ['wireless-data', 'Wireless Data Services (GPRS, EDGE)', 'Packet data over cellular.'],
          ['generations', 'Cellular Generations 1G–5G (and 6G)', 'Analog voice → digital → data → broadband → ultra-low latency.'],
          ['dect-tetra-umts', 'DECT, TETRA, UMTS', 'Cordless, trunked radio and 3G standards.'],
          ['satellite', 'Satellite Systems', 'GEO, MEO, LEO satellites for communication.']
        ] },
        { name: 'Unit III · Ad-hoc Networks: MAC & Routing', terms: [
          ['adhoc', 'Ad-hoc Wireless Networks', 'Infrastructure-less networks of mobile nodes (MANETs).'],
          ['adhoc-issues', 'Applications & Design Issues', 'Military, disaster relief; mobility, bandwidth, power.'],
          ['adhoc-mac', 'MAC Protocols for Ad-hoc Networks', 'Issues (hidden/exposed terminal), goals, classification.'],
          ['contention-mac', 'Contention-based MAC (MACA, MACAW)', 'RTS/CTS-based access.'],
          ['reservation-mac', 'MAC with Reservation & Scheduling', 'Reserve slots to guarantee access.'],
          ['adhoc-routing', 'Routing Protocols: Issues & Classification', 'Proactive, reactive and hybrid.'],
          ['table-driven', 'Table-driven Routing (DSDV)', 'Proactive routes kept up to date.'],
          ['on-demand', 'On-demand Routing (AODV, DSR)', 'Routes discovered only when needed.'],
          ['hybrid-routing', 'Hybrid Routing (ZRP)', 'Proactive inside zones, reactive between them.'],
          ['efficient-flooding', 'Efficient Flooding (OLSR MPRs)', 'Reduce broadcast overhead.'],
          ['hierarchical-adhoc', 'Hierarchical Routing Protocols', 'Cluster-based routing.']
        ] },
        { name: 'Unit IV · Multicast, Energy, Transport & Security', terms: [
          ['multicast', 'Multicast Routing in Ad-hoc Networks', 'Deliver packets to a group of nodes.'],
          ['tree-mesh-multicast', 'Tree-based vs Mesh-based Multicast', 'Single tree vs redundant mesh paths.'],
          ['energy-multicast', 'Energy-efficient Multicasting', 'Minimize transmission power.'],
          ['energy-management', 'Energy Management Schemes', 'Battery, transmission power and system power management.'],
          ['tcp-adhoc', 'TCP over Ad-hoc Networks', 'Why standard TCP misreads losses; TCP-F, ATCP.'],
          ['wireless-security', 'Security Requirements & Attacks', 'Eavesdropping, jamming, black-hole, wormhole attacks.'],
          ['key-management', 'Key Management', 'Distributing keys among nodes.'],
          ['secure-routing', 'Secure Routing', 'Protect routing against malicious nodes.'],
          ['wep-wpa', 'WEP, WPA2, WPA3', 'Wi-Fi security protocols; WEP is broken.']
        ] }
      ]
    },
    {
      id: 'mad-ai', name: 'Mobile Applications Development for AI', short: 'Mobile App Dev', code: 'PEC-I', kind: 'elective', lang: 'javascript', icon: '📱',
      desc: 'Professional Elective I: mobile OS, IDEs, hybrid apps (Worklight/Cordova), Android and iOS architecture and deployment.',
      units: [
        { name: 'Unit I · Mobile OS', terms: [
          ['mobile-os', 'Mobile Operating Systems', 'Android, iOS — OS designed for phones.'],
          ['mobile-os-structure', 'OS Structure & Constraints', 'Limited battery, memory, CPU and screen.'],
          ['mobile-hardware', 'Hardware Configuration', 'SoC, sensors, radios, storage.'],
          ['mobile-multitasking', 'Multitasking & Scheduling', 'Background limits and app lifecycle.'],
          ['mobile-memory', 'Memory Allocation', 'Low-memory killer, garbage collection.'],
          ['mobile-fs', 'File System Interface', 'App sandboxes and storage access.'],
          ['mobile-io', 'Keypad & I/O Interfaces', 'Touch, keyboard, sensors.'],
          ['mobile-security', 'Protection & Security', 'Permissions, sandboxing, app signing.'],
          ['mobile-multimedia', 'Multimedia Features', 'Camera, audio, video codecs.']
        ] },
        { name: 'Unit II · IDEs & Hybrid Development', terms: [
          ['mobile-ides', 'Mobile Development IDEs', 'Android Studio, Xcode, VS Code.'],
          ['worklight', 'IBM Worklight (MobileFirst) Basics', 'Enterprise hybrid-app platform.'],
          ['pages-fragments', 'Pages & Fragments', 'Screen components in mobile apps.'],
          ['client-tech', 'Client Technologies (HTML/CSS/JS)', 'Web tech for hybrid apps.'],
          ['client-debugging', 'Client-side Debugging', 'Remote DevTools and logs.'],
          ['adapters', 'Creating & Invoking Adapters', 'Server-side connectors to back-end systems.'],
          ['common-controls', 'Common Controls & Skins', 'UI components and device-specific themes.'],
          ['cordova', 'Apache Cordova', 'Wrap web apps in a native shell with plugins.', 'pwa.capacitor']
        ] },
        { name: 'Unit III · Platforms & Services', terms: [
          ['ios-dev', 'Apple iOS Development', 'Swift/SwiftUI, Xcode, App Store.'],
          ['android-dev', 'Android Development', 'Kotlin, Jetpack Compose, Android Studio.'],
          ['cross-platform', 'Cross-platform: React Native & Flutter', 'One codebase for Android and iOS.'],
          ['java-me', 'Java ME Applications', 'Legacy Java for feature phones.'],
          ['ui-frameworks', 'UI Frameworks', 'Material, Cupertino, Ionic.'],
          ['mobile-auth', 'Authentication', 'OAuth, biometrics, tokens.'],
          ['push-notifications', 'Push Notifications', 'FCM / APNs messages to devices.'],
          ['sms', 'SMS Notifications', 'Text messages through gateways.'],
          ['globalization', 'Globalization (i18n)', 'Multiple languages and locales.']
        ] },
        { name: 'Unit IV · Android & iOS Internals', terms: [
          ['android-architecture', 'Android Architecture', 'Linux kernel, HAL, ART, framework, apps.'],
          ['android-components', 'Android Components', 'Activities, services, broadcast receivers, content providers, intents.'],
          ['android-memory', 'Android Memory Management', 'ART GC and process priorities.'],
          ['android-deploy', 'Android Deployment', 'Signed AAB, Play Console, app review.'],
          ['ios-architecture', 'iOS Architecture', 'Core OS, Core Services, Media, Cocoa Touch layers.'],
          ['ios-memory', 'iOS Memory Management (ARC)', 'Automatic reference counting.'],
          ['ios-deploy', 'iOS Deployment', 'Certificates, provisioning, TestFlight, App Store.'],
          ['on-device-ai', 'On-device AI (TFLite, Core ML)', 'Running ML models directly on phones.']
        ] }
      ]
    },
    {
      id: 'cloud', name: 'Introduction to Cloud Computing', short: 'Cloud Computing', code: 'PEC-I', kind: 'elective', lang: 'bash', icon: '☁',
      desc: 'Professional Elective I: cloud models, parallel & distributed systems, AWS/Google/Azure, virtualization, SaaS/PaaS/IaaS.',
      units: [
        { name: 'Unit I · Introduction', terms: [
          ['cloud-computing', 'What is Cloud Computing', 'On-demand computing resources over the internet, pay-as-you-go.'],
          ['cloud-working', 'How Cloud Works', 'Data centers, virtualization and APIs deliver resources.'],
          ['nist-characteristics', 'Essential Characteristics (NIST)', 'On-demand self-service, broad access, pooling, elasticity, measured service.'],
          ['service-models', 'Service Models: IaaS, PaaS, SaaS', 'Infrastructure, platform and software as a service.'],
          ['cloud-ethics', 'Ethical Issues', 'Privacy, data ownership, lock-in.'],
          ['cloud-vulnerabilities', 'Cloud Vulnerabilities', 'Misconfiguration, insecure APIs, account hijacking.'],
          ['cloud-challenges', 'Major Challenges', 'Security, availability, latency, cost control.']
        ] },
        { name: 'Unit II · Parallel & Distributed Systems', terms: [
          ['parallel-computing', 'Parallel Computing & Architecture', 'Many processors working simultaneously.'],
          ['distributed-systems', 'Distributed Systems', 'Independent computers appearing as one system.'],
          ['process-coordination', 'Communication Protocols & Process Coordination', 'RPC, messaging and coordination.'],
          ['logical-clocks', 'Logical Clocks (Lamport, Vector)', 'Order events without a global clock.'],
          ['message-delivery', 'Message Delivery Rules', 'FIFO, causal and total ordering.'],
          ['concurrency-dist', 'Concurrency & Atomic Actions', 'All-or-nothing operations across nodes.'],
          ['consensus', 'Consensus Protocols (Paxos, Raft)', 'Nodes agreeing on a value despite failures.'],
          ['petri-nets', 'Modeling Concurrency with Petri Nets', 'Places, transitions and tokens.'],
          ['client-server', 'Client–Server Paradigm', 'Clients request, servers respond.'],
          ['cap', 'CAP Theorem (Bonus)', 'Consistency, Availability, Partition tolerance — pick two under partition.']
        ] },
        { name: 'Unit III · Cloud Infrastructure', terms: [
          ['aws', 'Cloud Computing at Amazon (AWS)', 'EC2, S3, Lambda, RDS, VPC.'],
          ['gcp', 'Google Cloud Perspective', 'Compute Engine, Cloud Storage, BigQuery, Vertex AI.'],
          ['azure', 'Microsoft Azure & Online Services', 'VMs, Blob Storage, Azure ML, Microsoft 365.'],
          ['private-cloud', 'Open-source Private Clouds (OpenStack)', 'Build your own cloud.'],
          ['intercloud', 'Intercloud & Multi-cloud', 'Using several cloud providers together.'],
          ['shared-responsibility', 'Shared Responsibility Model', 'Provider secures the cloud; you secure what you put in it.'],
          ['virtualization', 'Virtualization & Hypervisors', 'Run multiple VMs on one machine (Type 1 / Type 2).'],
          ['full-para', 'Full Virtualization vs Paravirtualization', 'Unmodified guest OS vs modified guest OS.'],
          ['containers-cloud', 'Containers vs VMs (Docker)', 'Lightweight isolation sharing the host kernel.', 'git.docker'],
          ['layering', 'Layering in Cloud', 'Hardware → virtualization → platform → applications.']
        ] },
        { name: 'Unit IV · Cloud Services', terms: [
          ['standard-model', 'Standard Cloud Model', 'NIST reference architecture.'],
          ['deployment-models', 'Deployment Models', 'Public, private, hybrid, community cloud.'],
          ['spi', 'SPI Model & Service Abstraction', 'SaaS, PaaS, IaaS layers.'],
          ['traditional-vs-cloud', 'Traditional vs Cloud System Model', 'Capex vs opex, fixed vs elastic capacity.'],
          ['not-all-saas', 'Not All Web Apps are SaaS', 'SaaS needs multi-tenancy, subscription, provider-managed.'],
          ['salesforce', 'Salesforce.com & Force.com', 'Classic SaaS CRM and PaaS platform.'],
          ['serverless', 'Serverless & FaaS (Bonus)', 'Run functions without managing servers (AWS Lambda, Vercel Functions).'],
          ['open-cloud', 'Open Cloud Services', 'Open standards and APIs.']
        ] }
      ]
    },
    {
      id: 'ddb', name: 'Distributed Databases', short: 'Distributed DBs', code: 'PEC-I', kind: 'elective', lang: 'sql', icon: '🗃',
      desc: 'Professional Elective I: DDBMS architecture, fragmentation, allocation, database links, transparency, distributed transactions and query optimization.',
      units: [
        { name: 'Unit I · Introduction & Architecture', terms: [
          ['ddp', 'Distributed Data Processing', 'Processing spread across several sites.'],
          ['ddb-promises', 'Promises of DDBs', 'Transparency, reliability, performance, scalability.'],
          ['ddb-problems', 'Complicating Factors & Problem Areas', 'Design, query processing, concurrency, reliability.'],
          ['ddbms-models', 'Architectural Models for DDBMS', 'Autonomy, distribution, heterogeneity dimensions.'],
          ['homo-hetero', 'Homogeneous vs Heterogeneous DDBMS', 'Same vs different DBMS software at sites.'],
          ['client-server-ddb', 'Client/Server DDB Architecture', 'Clients send queries to database servers.'],
          ['distributed-vs-replicated', 'Distributed vs Replicated Databases', 'Partitioned data vs copies at many sites.']
        ] },
        { name: 'Unit II · Design & Database Links', terms: [
          ['design-strategies', 'Top-down & Bottom-up Design', 'Alternative strategies for DDB design.'],
          ['fragmentation', 'Fragmentation (Horizontal, Vertical, Hybrid)', 'Split tables by rows, columns or both.'],
          ['allocation', 'Allocation', 'Decide which site stores each fragment.'],
          ['db-links', 'Database Links: Types', 'Private, public and global links between databases (Oracle).'],
          ['manage-links', 'Creating & Managing Database Links', 'CREATE DATABASE LINK and usage.'],
          ['link-restrictions', 'Restrictions via Database Links', 'Operations not allowed across links.']
        ] },
        { name: 'Unit III · Transparency & Transactions', terms: [
          ['name-resolution', 'Link & Schema Object Name Resolution', 'How names are resolved across sites.'],
          ['location-transparency', 'Location Transparency (Views, Synonyms, Procedures)', 'Hide where data lives.'],
          ['distributed-transactions', 'Remote & Distributed Transactions', 'Transactions touching several sites.'],
          ['remote-sql', 'Remote & Distributed SQL; Shared SQL', 'Executing SQL at remote sites.'],
          ['2pc', 'Two-phase Commit (2PC)', 'Coordinator asks all sites to prepare, then commit.'],
          ['3pc', 'Three-phase Commit (Bonus)', 'Non-blocking variant of 2PC.']
        ] },
        { name: 'Unit IV · Semantic Control & Query Processing', terms: [
          ['view-management', 'View Management', 'Views over distributed data.'],
          ['ddb-security', 'Data Security', 'Access control across sites.'],
          ['semantic-integrity', 'Semantic Integrity Control', 'Enforce constraints in a distributed setting.'],
          ['dqp', 'Distributed Query Processing Methodology', 'Decomposition, localization, optimization, execution.'],
          ['dqo', 'Distributed Query Optimization', 'Minimize communication cost; semi-joins.'],
          ['new-qo', 'New Query Optimization Techniques', 'Adaptive and cost-based optimizers.'],
          ['qo-problems', 'Problems & Solutions in Distributed QO', 'Large search space, stale statistics.']
        ] }
      ]
    },
    {
      id: 'training1', name: 'Practical Training – I', short: 'Training I', kind: 'project', lang: 'text', icon: '🏭',
      desc: '4–6 week industry/institute training; report and certificate evaluated in the next semester.',
      units: [
        { name: 'Training', terms: [
          ['find-internship', 'Finding an Internship', 'Internshala, LinkedIn, college TPO, open-source programs.'],
          ['training-report', 'Writing the Training Report', 'Introduction, company profile, work done, learnings, conclusion.'],
          ['training-viva', 'Training Presentation & Viva', 'Explain what you built and why.']
        ] }
      ]
    }
  ]
};
