// Semester 6 — B.Tech CSE (AI)
export default {
  sem: 6,
  title: 'Semester 6 — Soft Computing, Big Data & Data Science',
  note: 'Choose one Professional Elective II, one Professional Elective III and one Open Elective II. Practical Training of 4–6 weeks follows this semester.',
  courses: [
    {
      id: 'soft', name: 'Soft Computing', short: 'Soft Computing', code: 'PCC-302', kind: 'core', lang: 'python', icon: '🌫',
      desc: 'Fuzzy logic, neural networks and genetic algorithms — with the soft computing lab.',
      units: [
        { name: 'Unit I · Introduction', terms: [
          ['evolution-computing', 'Evolution of Computing', 'From hard (exact) computing to soft (approximate, tolerant) computing.'],
          ['soft-vs-hard', 'Soft vs Hard Computing', 'Soft computing tolerates imprecision and uncertainty.'],
          ['soft-constituents', 'Soft Computing Constituents', 'Fuzzy logic, neural networks, evolutionary computing, probabilistic reasoning.'],
          ['computational-intelligence', 'From Conventional AI to Computational Intelligence', 'Symbolic AI vs nature-inspired methods.'],
          ['ml-basics-soft', 'Machine Learning Basics', 'Learning from data: supervised, unsupervised, reinforcement.', 'aiml.what-is-ml']
        ] },
        { name: 'Unit II · Fuzzy Logic', terms: [
          ['fuzzy-sets', 'Fuzzy Sets', 'Sets with degrees of membership between 0 and 1.'],
          ['crisp-vs-fuzzy', 'Crisp vs Fuzzy Sets', 'Crisp: in or out; fuzzy: partially in.'],
          ['fuzzy-operations', 'Operations on Fuzzy Sets', 'Union (max), intersection (min), complement (1 − μ).'],
          ['fuzzy-relations', 'Fuzzy Relations & Composition', 'Relations with membership degrees; max-min composition.'],
          ['membership-functions', 'Membership Functions', 'Triangular, trapezoidal, Gaussian, bell shapes.'],
          ['fuzzy-rules', 'Fuzzy Rules (IF–THEN)', 'Linguistic rules like IF temp is high THEN fan is fast.'],
          ['fuzzy-reasoning', 'Fuzzy Reasoning', 'Approximate inference using fuzzy rules.'],
          ['fis', 'Fuzzy Inference Systems (Mamdani, Sugeno)', 'Fuzzify → apply rules → aggregate → defuzzify.'],
          ['defuzzification', 'Defuzzification (Centroid, MOM)', 'Convert fuzzy output into a crisp number.'],
          ['fuzzy-expert', 'Fuzzy Expert Systems', 'Expert systems using fuzzy rules.'],
          ['fuzzy-decision', 'Fuzzy Decision Making', 'Choosing among alternatives under vagueness.']
        ] },
        { name: 'Unit III · Neural Networks', terms: [
          ['ann', 'Artificial Neural Networks', 'Networks of artificial neurons that learn weights.', 'aiml.neural-network'],
          ['adaptive-networks', 'Adaptive Networks', 'Networks whose parameters adapt to data.'],
          ['feedforward', 'Feed-forward Networks', 'Signals flow one way from input to output.', 'aiml.mlp'],
          ['supervised-nn', 'Supervised Learning Neural Networks', 'Perceptron, ADALINE, backpropagation networks.'],
          ['hebb', 'Hebb’s Rule', '“Neurons that fire together wire together”: Δw = η·x·y.'],
          ['delta-rule', 'Delta Rule (Widrow–Hoff / LMS)', 'Δw = η(t − y)x minimizes squared error.'],
          ['backprop-soft', 'Backpropagation', 'Propagate error gradients backward to update weights.', 'aiml.backpropagation'],
          ['rbf', 'Radial Basis Function Networks', 'Hidden units with Gaussian activations.'],
          ['rl-nn', 'Reinforcement Learning with Neural Networks', 'Networks learning from reward signals.'],
          ['unsupervised-nn', 'Unsupervised Learning Neural Networks', 'Kohonen SOM, competitive learning, Hopfield.'],
          ['art', 'Adaptive Resonance Theory (ART)', 'Stable incremental learning of categories.'],
          ['advances-nn', 'Advances in Neural Networks', 'Deep learning, CNNs, transformers.', 'aiml.deep-learning']
        ] },
        { name: 'Unit IV · Genetic Algorithms & MATLAB', terms: [
          ['ga', 'Genetic Algorithms', 'Evolve solutions with selection, crossover and mutation.'],
          ['ga-terms', 'Chromosome, Gene, Population, Fitness', 'Building blocks of a GA.'],
          ['selection', 'Selection (Roulette, Tournament)', 'Choose parents in proportion to fitness.'],
          ['crossover', 'Crossover', 'Combine parents (single-point, two-point, uniform).'],
          ['mutation', 'Mutation', 'Randomly flip genes to keep diversity.'],
          ['ga-ml', 'Applications of GA in ML', 'Feature selection, hyperparameter tuning, neuro-evolution.'],
          ['knowledge-acquisition-ga', 'ML Approach to Knowledge Acquisition', 'Learning rules from data with GAs.'],
          ['matlab-nn', 'MATLAB Neural Network Toolbox', 'Design and train networks in MATLAB.'],
          ['matlab-fuzzy', 'MATLAB Fuzzy Logic Toolbox', 'Build fuzzy inference systems in MATLAB.'],
          ['ga-tsp', 'TSP using Genetic Algorithm', 'Permutation encoding with order crossover.'],
          ['pso-aco-intro', 'Swarm Intelligence (Intro)', 'PSO and ACO — population-based optimization.', 'web-mining.pso']
        ] },
        { name: 'Soft Computing Lab', terms: [
          ['lab-perceptron-soft', 'Perceptron Training (Fixed Increment)', 'Train a perceptron on linearly separable data.'],
          ['lab-ann-nobp', 'ANN without Backpropagation', 'Single-layer network.'],
          ['lab-ann-bp', 'ANN with Backpropagation', 'Multi-layer network implementation.'],
          ['lab-ga-tsp', 'TSP with GA', 'Evolve tours.'],
          ['lab-crisp-iris', 'Crisp Partitions on Iris Dataset', 'Partition data and compare with fuzzy c-means.'],
          ['lab-hebb-delta', 'Hebb’s Rule & Delta Rule Programs', 'Implement both learning rules.'],
          ['lab-logic-gates', 'Logic Gates with Neural Networks', 'AND/OR/XOR with perceptrons (XOR needs hidden layer).'],
          ['lab-fuzzy-svm', 'SVM Classification with Fuzzy Concepts', 'Fuzzy SVM experiment.']
        ] }
      ]
    },
    {
      id: 'bigdata', name: 'Big Data Analysis', short: 'Big Data', code: 'PCC-304', kind: 'core', lang: 'python', icon: '🐘',
      desc: 'Big data concepts, frequent itemsets, clustering, Hadoop, HDFS, MapReduce, HBase, Hive, Pig, streams and visualization — with Hadoop lab.',
      units: [
        { name: 'Unit I · Introduction & Modelling', terms: [
          ['big-data', 'Introduction to Big Data (5 Vs)', 'Volume, velocity, variety, veracity, value.'],
          ['conventional-challenges', 'Challenges of Conventional Systems', 'Single machines can’t store or process huge data.'],
          ['analytic-scalability', 'Evolution of Analytic Scalability', 'From single DBs to MPP, Hadoop, cloud warehouses.'],
          ['analytic-tools', 'Modern Data Analytic Tools', 'Spark, Kafka, Databricks, BigQuery, Snowflake.'],
          ['frequent-itemsets', 'Mining Frequent Itemsets', 'Find items that appear together often.', 'dmw.apriori'],
          ['apriori-bd', 'Apriori Algorithm', 'Level-wise frequent itemset mining.', 'dmw.apriori'],
          ['large-data-memory', 'Handling Large Datasets in Main Memory', 'PCY, SON algorithms, sampling.'],
          ['clustering-bd', 'Clustering Techniques', 'k-means, BFR, CURE for large data.', 'aiml.clustering'],
          ['clustering-parallel', 'Clustering for Parallelism', 'Distribute clustering across machines.'],
          ['classification-prediction', 'Classification & Prediction', 'Supervised learning on big data.'],
          ['dt-induction', 'Decision Tree Induction & Models', 'Building decision trees at scale.', 'aiml.decision-tree']
        ] },
        { name: 'Unit II · Hadoop Frameworks', terms: [
          ['hadoop', 'Overview of Hadoop', 'Open-source framework for distributed storage and processing.'],
          ['hdfs', 'HDFS Design & Architecture', 'NameNode, DataNodes, blocks (128 MB), replication.'],
          ['mapreduce', 'MapReduce Framework', 'Map → shuffle & sort → reduce.'],
          ['yarn', 'YARN', 'Hadoop’s resource manager and job scheduler.'],
          ['hbase', 'HBase', 'Column-family NoSQL store on HDFS.'],
          ['hive', 'Hive (HiveQL)', 'SQL-like queries on HDFS data.'],
          ['pig', 'Pig (Pig Latin)', 'Data-flow scripting language on Hadoop.'],
          ['spark', 'Apache Spark (Bonus)', 'In-memory distributed processing with RDDs/DataFrames.']
        ] },
        { name: 'Unit III · Analysis & Data Streams', terms: [
          ['regression-modelling', 'Regression Modelling', 'Predictive models on large data.'],
          ['rule-induction', 'Rule Induction', 'Learning IF–THEN rules from data.'],
          ['fuzzy-dt', 'Fuzzy Decision Trees', 'Decision trees with fuzzy splits.'],
          ['nn-bd', 'Neural Networks for Big Data', 'Distributed deep learning.'],
          ['streams', 'Data Stream Concepts', 'Continuous, unbounded data; sliding windows, sampling.'],
          ['stream-algos', 'Stream Algorithms (Bloom Filter, Count-Min, Reservoir Sampling)', 'Approximate answers with limited memory.'],
          ['real-time-platform', 'Real-time Analytics Platforms', 'Kafka, Spark Streaming, Flink.'],
          ['bd-case-studies', 'Case Studies', 'Stock prediction, fraud detection, sentiment on streams.']
        ] },
        { name: 'Unit IV · Visualization & Text Analytics', terms: [
          ['visual-analysis', 'Visual Data Analysis Techniques', 'Charts, dashboards and exploratory visualization.'],
          ['interaction-techniques', 'Interaction Techniques', 'Brushing, zooming, filtering, linking views.'],
          ['statistical-packages', 'Analytics using Statistical Packages', 'R, Python, SAS, SPSS.'],
          ['association-intelligence', 'Association Intelligence from Unstructured Data', 'Finding relationships in text and logs.'],
          ['text-analytics', 'Text Analytics', 'Mining insights from text at scale.'],
          ['industry-challenges', 'Industry Challenges & Applications', 'Privacy, quality, cost; retail, health, finance use cases.']
        ] },
        { name: 'Big Data Lab', terms: [
          ['lab-install-hadoop', 'Install & Configure Hadoop', 'Single-node setup and HDFS commands.'],
          ['lab-wordcount', 'MapReduce Word Count', 'Count word frequencies in a file.'],
          ['lab-max-temp', 'Max Temperature per Year (MapReduce)', 'Classic weather dataset job.'],
          ['lab-grades', 'Student Grades with MapReduce', 'Compute grades from marks.'],
          ['lab-matrix-mr', 'Matrix Multiplication with MapReduce', 'Join-based matrix product.'],
          ['lab-weather', 'Weather Dataset Analysis', 'Classify hot/cool days.']
        ] }
      ]
    },
    {
      id: 'ds-ai', name: 'Data Science using AI Approach', short: 'Data Science', code: 'PCC-306', kind: 'core', lang: 'python', icon: '🔬',
      desc: 'Python review, NumPy, Pandas, visualization (Matplotlib/Seaborn), scikit-learn, PyTorch and NLTK.',
      units: [
        { name: 'Unit I · Python Review', terms: [
          ['py-review-types', 'Data Types, Variables, Operators', 'Python fundamentals refresher.', 'python.data-types'],
          ['py-review-control', 'Control Structures', 'if/elif/else, loops, comprehensions.', 'python.loops'],
          ['py-review-strings', 'String Manipulation', 'Slicing, methods, f-strings.', 'python.strings'],
          ['py-review-files', 'File Handling', 'Read/write text and number files.', 'python.file-io'],
          ['py-review-dicts', 'Dictionaries', 'Key–value data.', 'python.dicts'],
          ['py-review-functions', 'Functions', 'def, arguments, lambda.', 'python.functions'],
          ['py-review-oop', 'OOP Concepts', 'Classes and objects.', 'python.classes']
        ] },
        { name: 'Unit II · NumPy & Pandas', terms: [
          ['numpy-arrays', 'NumPy Array Creation', 'np.array, arange, zeros, ones, linspace.', 'python.numpy'],
          ['numpy-random', 'Random & Uniform Array Generation', 'np.random.rand, randint, uniform, normal, default_rng.'],
          ['numpy-reshape', 'Reshaping Arrays', 'reshape, flatten, ravel, transpose.'],
          ['numpy-maxmin', 'Max, Min, argmax, argmin', 'Aggregations along axes.'],
          ['numpy-arith', 'Arithmetic & Mathematical Functions', 'Vectorized +, −, sqrt, exp, log, sum, mean.'],
          ['numpy-indexing', 'Bracket Indexing & Selection, Boolean Masks', 'a[1:3], a[a > 5].'],
          ['broadcasting', 'Broadcasting', 'Arrays of different shapes combine by stretching dimensions.'],
          ['numpy-2d', 'Indexing 2-D Arrays (Matrices)', 'a[row, col], slicing rows and columns.'],
          ['pandas-series', 'Pandas Series', '1-D labelled array from lists, arrays, dicts.', 'python.pandas'],
          ['pandas-dataframe', 'Creating DataFrames', '2-D labelled table.', 'python.pandas'],
          ['imputation', 'Imputation (fillna)', 'Fill missing values with mean/median/mode.', 'aiml.missing-data'],
          ['groupby', 'Grouping & Aggregation (groupby)', 'Split-apply-combine.'],
          ['merge-join-concat', 'Merging, Joining & Concatenation', 'pd.merge, df.join, pd.concat.'],
          ['null-check', 'Finding Null Values (isnull, isna)', 'Detect missing data.'],
          ['read-data', 'Reading CSV, TXT, Excel, Web Data', 'read_csv, read_excel, read_html, read_json.']
        ] },
        { name: 'Unit III · Visualization', terms: [
          ['viz-setup', 'Installing Visualization Libraries', 'pip install matplotlib seaborn plotly.'],
          ['canvas-axes', 'Figure (Canvas) & Axes', 'fig, ax = plt.subplots().', 'python.matplotlib'],
          ['subplots', 'Subplots', 'Multiple charts in one figure.'],
          ['common-plots', 'Scatter, Histogram, Boxplot', 'The three most-used exploratory plots.'],
          ['log-scale', 'Logarithmic Scale', 'ax.set_yscale("log") for wide ranges.'],
          ['ticks', 'Ticks & Custom Tick Labels', 'Control tick positions and labels.'],
          ['pandas-viz', 'Pandas Visualization (df.plot)', 'Quick plots from DataFrames.'],
          ['style-sheets', 'Style Sheets', 'plt.style.use("ggplot") and themes.'],
          ['area-bar-line', 'Area, Bar & Line Plots', 'Show parts, comparisons and trends.'],
          ['hexbin', 'Hexagonal Bin Plot', 'Density of points in 2-D for large data.'],
          ['kde', 'Kernel Density Estimation (KDE) Plot', 'Smooth distribution curve.'],
          ['seaborn', 'Seaborn: Distribution & Categorical Plots', 'histplot, kdeplot, boxplot, violinplot, countplot.'],
          ['matrix-plots', 'Matrix Plots (Heatmap, Clustermap)', 'Visualize correlation matrices.'],
          ['regression-plots', 'Regression Plots (regplot, lmplot)', 'Scatter with fitted line.'],
          ['grids', 'Grids (FacetGrid, PairGrid, pairplot)', 'Many small plots by category.'],
          ['viz-toolkits', 'Other Visualization Libraries (Plotly, Bokeh, Altair)', 'Interactive charts.']
        ] },
        { name: 'Unit IV · ML with scikit-learn & PyTorch, NLP with NLTK', terms: [
          ['sklearn-data', 'Data Representation in scikit-learn', 'Feature matrix X and target vector y.', 'aiml.sklearn'],
          ['estimator', 'Estimator API, Parameters & Model Validation', 'fit, predict, score; train/test split.', 'aiml.sklearn'],
          ['model-selection', 'Model Selection & Validation Curves', 'Compare models; plot learning/validation curves.'],
          ['grid-search', 'Grid Search (GridSearchCV)', 'Try hyperparameter combinations with cross-validation.', 'aiml.hyperparameter-tuning'],
          ['feature-engineering', 'Feature Engineering', 'Create, encode, scale and select features.', 'aiml.feature-engineering'],
          ['nb-sklearn', 'Naïve Bayes Classification', 'GaussianNB, MultinomialNB.', 'aiml.naive-bayes'],
          ['lr-sklearn', 'Linear Regression', 'LinearRegression().', 'aiml.linear-regression'],
          ['svm-sklearn', 'SVM', 'SVC, SVR.', 'aiml.svm'],
          ['pytorch', 'PyTorch Basics', 'Tensors, autograd, nn.Module, training loop.', 'aiml.pytorch'],
          ['ml-libraries', 'Other ML/DL Libraries', 'TensorFlow/Keras, XGBoost, LightGBM, Hugging Face.'],
          ['nltk-functions', 'NLTK Functions & Modules', 'Tokenize, tag, parse, stem, chunk.', 'nlp.nltk'],
          ['text-cleaning', 'Cleaning & Normalization of Text', 'Lowercase, remove punctuation/stopwords, lemmatize.', 'nlp.normalization'],
          ['nlp-libraries', 'Other NLP Libraries (spaCy, Hugging Face, Gensim)', 'Modern NLP toolkits.']
        ] },
        { name: 'Data Science Lab', terms: [
          ['lab-os-info', 'OS & Directory Info with Python', 'os, platform, pathlib.'],
          ['lab-array-bytes', 'Arrays to Machine Values (bytes)', 'array.tobytes / frombytes.'],
          ['lab-file-info', 'File Mode & Time Values', 'os.stat, time stamps.'],
          ['lab-socket', 'Socket Programming: Connect to Google', 'socket.connect(("www.google.com", 80)).'],
          ['lab-numpy-ops', 'NumPy Array Operations', 'Practice vectorized operations.'],
          ['lab-pandas-ops', 'Pandas Data Manipulation', 'Filter, group, merge.'],
          ['lab-charts', 'Multiple Chart Types with Matplotlib', 'Line, bar, pie, scatter.'],
          ['lab-excel', 'File Operations on Excel Dataset', 'openpyxl / pandas read_excel.'],
          ['lab-sklearn-nltk', 'scikit-learn & NLTK Programs', 'Train a classifier; process text.']
        ] }
      ]
    },
    {
      id: 'cg', name: 'Computer Graphics', short: 'Computer Graphics', code: 'PEC-II', kind: 'elective', lang: 'cpp', icon: '🎨',
      desc: 'Professional Elective II: line/circle drawing, filling, clipping, 2D/3D transformations, projections, hidden surfaces, curves and shading.',
      units: [
        { name: 'Unit I · Primitives', terms: [
          ['cg-intro', 'What is Computer Graphics & Applications', 'Creating images with computers: games, CAD, UI, visualization.'],
          ['cg-hardware', 'Graphics Hardware & Software', 'Raster/vector displays, frame buffer, GPU; OpenGL, WebGL.'],
          ['points-lines', 'Points and Lines', 'Basic 2-D primitives on a pixel grid.'],
          ['dda', 'DDA Line Algorithm', 'Incremental line drawing using floating-point steps.'],
          ['bresenham-line', 'Bresenham’s Line Algorithm', 'Integer-only line drawing using a decision parameter.'],
          ['circle-polar', 'Circle using Polar Coordinates', 'x = r cos θ, y = r sin θ.'],
          ['bresenham-circle', 'Bresenham’s Circle Algorithm', 'Integer circle drawing using 8-way symmetry.'],
          ['midpoint-circle', 'Mid-point Circle Algorithm', 'Decide next pixel using the midpoint test.'],
          ['scanline-fill', 'Scan-line Polygon Filling', 'Fill between edge intersections on each scan line.'],
          ['boundary-fill', 'Boundary Fill & Flood Fill', 'Seed-based recursive filling (4/8-connected).']
        ] },
        { name: 'Unit II · Viewing, Clipping & Transformations', terms: [
          ['viewing-pipeline', '2-D Viewing Pipeline', 'World → window → viewport → device coordinates.'],
          ['window-viewport', 'Window-to-Viewport Mapping', 'Scale and translate coordinates between rectangles.'],
          ['point-clipping', 'Point Clipping', 'Keep points inside the window.'],
          ['cohen-sutherland', 'Cohen–Sutherland Line Clipping (4-bit Codes)', 'Region codes to accept/reject/clip lines.'],
          ['cyrus-beck', 'Cyrus–Beck (Parametric) Line Clipping', 'Clip using parametric line equations.'],
          ['sutherland-hodgman', 'Sutherland–Hodgman Polygon Clipping', 'Clip a polygon against each window edge.'],
          ['transformations-2d', '2-D Transformations', 'Translation, scaling, rotation, reflection, shear.'],
          ['homogeneous', 'Homogeneous Coordinates', 'Use 3×3 matrices so all transforms can be multiplied.'],
          ['composite', 'Composite Transformations', 'Combine transforms by matrix multiplication (order matters).'],
          ['transformations-3d', '3-D Transformations & Matrix Representation', '4×4 matrices for 3-D translation, scaling, rotation.']
        ] },
        { name: 'Unit III · 3-D Viewing & Hidden Surfaces', terms: [
          ['projections', 'Projections: Parallel & Perspective', 'Map 3-D to 2-D; perspective shows depth.'],
          ['projection-math', 'Mathematics of Planar Geometric Projections', 'Projection matrices and vanishing points.'],
          ['coordinate-systems', 'Coordinate Systems', 'Model, world, view, clip, screen spaces.'],
          ['hidden-surface', 'Hidden Surface Removal', 'Determine which surfaces are visible.'],
          ['z-buffer', 'Z-buffer Algorithm', 'Store depth per pixel; keep the nearest.'],
          ['scanline-hsr', 'Scan-line Algorithm', 'Process visibility one scan line at a time.'],
          ['area-subdivision', 'Area Subdivision (Warnock)', 'Recursively divide the screen until simple.']
        ] },
        { name: 'Unit IV · Curves, Surfaces & Shading', terms: [
          ['parametric-curves', 'Parametric Representation of Curves', 'x(t), y(t) form of curves.'],
          ['bezier', 'Bézier Curves', 'Curves defined by control points (Bernstein polynomials).'],
          ['bspline', 'B-spline Curves', 'Piecewise curves with local control.'],
          ['parametric-surfaces', 'Parametric Surfaces & Interpolation', 'Surfaces from patches; interpolating points.'],
          ['illumination', 'Illumination Models', 'Ambient, diffuse (Lambert) and specular (Phong) light.'],
          ['shading', 'Shading: Flat, Gouraud, Phong', 'Ways to colour polygons smoothly.'],
          ['shadows-transparency', 'Shadows & Transparency', 'Shadow maps; alpha blending.'],
          ['image-basics', 'What is an Image; Filtering & Processing', 'Pixels, filters and geometric transformations of images.']
        ] }
      ]
    },
    {
      id: 'crypto', name: 'Cryptography and Security', short: 'Cryptography', code: 'PEC-II', kind: 'elective', lang: 'python', icon: '🔐',
      desc: 'Professional Elective II: security principles, number theory, classical and modern ciphers, DES/AES, RSA, hashes, signatures and network security.',
      units: [
        { name: 'Unit I · Security & Mathematics', terms: [
          ['infosec', 'What is Information Security', 'Protecting information from unauthorized access and change.'],
          ['need-security', 'Need for Security', 'Data breaches, fraud, privacy, compliance.'],
          ['security-principles', 'Principles of Security', 'Confidentiality, integrity, availability, authentication, non-repudiation, access control.'],
          ['threats', 'Threats & Types of Attacks', 'Passive (interception) and active (modification, fabrication, interruption).'],
          ['services-mechanisms', 'Security Services & Mechanisms', 'X.800 services; encryption, signatures, access control.'],
          ['integer-arithmetic', 'Integer Arithmetic & Divisibility', 'GCD, Euclidean and extended Euclidean algorithms.'],
          ['modular-arithmetic', 'Modular Arithmetic', 'Arithmetic with remainders; modular inverse.'],
          ['matrices-crypto', 'Matrices in Cryptography', 'Used in Hill cipher.'],
          ['linear-congruence', 'Linear Congruence', 'Solving ax ≡ b (mod n).']
        ] },
        { name: 'Unit II · Symmetric-key Ciphers', terms: [
          ['substitution-ciphers', 'Substitution Ciphers', 'Caesar, monoalphabetic, Playfair, Hill, Vigenère.'],
          ['transposition-ciphers', 'Transposition Ciphers', 'Rail fence, columnar transposition.'],
          ['stream-block', 'Stream vs Block Ciphers', 'Encrypt bit by bit vs block by block.'],
          ['algebraic-structures-crypto', 'Algebraic Structures for Crypto', 'Groups, rings, fields.', 'dm.field'],
          ['gf2n', 'GF(2ⁿ) Fields', 'Finite fields used in AES.'],
          ['feistel', 'Feistel Structure', 'Round structure used by DES.'],
          ['des', 'Data Encryption Standard (DES)', '56-bit key, 16 rounds — now insecure; 3DES variant.'],
          ['aes', 'Advanced Encryption Standard (AES)', '128-bit blocks, 128/192/256-bit keys; SubBytes, ShiftRows, MixColumns, AddRoundKey.'],
          ['block-modes', 'Block Cipher Modes (ECB, CBC, CTR, GCM)', 'How to encrypt messages longer than one block.'],
          ['lfsr', 'LFSR-based Stream Ciphers', 'Linear feedback shift registers generate keystreams.'],
          ['rc4', 'RC4', 'Byte-oriented stream cipher (now deprecated).'],
          ['a51', 'A5/1', 'GSM stream cipher using three LFSRs.']
        ] },
        { name: 'Unit III · Asymmetric Ciphers, Hashes & Signatures', terms: [
          ['number-theory-pk', 'Mathematics of Asymmetric Cryptography', 'Primes, Fermat’s and Euler’s theorems, φ(n).'],
          ['public-key', 'Public-key Cryptography', 'Encrypt with public key, decrypt with private key.'],
          ['rsa', 'RSA Algorithm', 'n = pq, e·d ≡ 1 (mod φ(n)); C = Mᵉ mod n.'],
          ['elgamal-ecc', 'ElGamal & Elliptic Curve Cryptography', 'Discrete-log based systems; ECC gives small keys.'],
          ['hash-functions', 'Hash Functions', 'One-way fixed-size digests (SHA-256, SHA-3).'],
          ['hash-properties', 'Hash Properties', 'Pre-image, second pre-image and collision resistance.'],
          ['mac', 'Message Authentication Code (MAC, HMAC)', 'Keyed hash for integrity and authenticity.'],
          ['digital-signatures', 'Digital Signatures', 'Sign with private key; verify with public key (RSA, DSA, ECDSA).'],
          ['pki', 'Digital Certificates & PKI (Bonus)', 'Certificate authorities bind public keys to identities.']
        ] },
        { name: 'Unit IV · Network Security', terms: [
          ['app-layer-security', 'Security at Application Layer', 'Protecting email and app data.'],
          ['pgp', 'PGP', 'Email encryption and signing with web of trust.'],
          ['smime', 'S/MIME', 'Certificate-based email security.'],
          ['kdc', 'Key Distribution Centre & Kerberos', 'Trusted third party issuing session keys/tickets.'],
          ['diffie-hellman', 'Diffie–Hellman Key Exchange', 'Two parties agree on a shared secret over an open channel.'],
          ['tls', 'SSL/TLS & HTTPS (Bonus)', 'Secure transport for the web.', 'security.https-tls']
        ] }
      ]
    },
    {
      id: 'pvr', name: 'Pattern and Visual Recognition', short: 'Pattern Recognition', code: 'PEC-II', kind: 'elective', lang: 'python', icon: '👁',
      desc: 'Professional Elective II: Bayesian decision theory, classifiers, HMMs, dimension reduction, feature selection and visual recognition.',
      units: [
        { name: 'Unit I · Introduction & Maths', terms: [
          ['pr-principles', 'Principles of Pattern Recognition', 'Classify patterns from features: sensing, segmentation, features, classification.'],
          ['pr-uses', 'Uses of Pattern Recognition', 'OCR, biometrics, medical imaging, speech.'],
          ['bayes-classification', 'Classification & Bayesian Rules', 'Choose the class with highest posterior.'],
          ['clustering-vs-classification', 'Clustering vs Classification', 'Unlabelled grouping vs labelled prediction.'],
          ['linear-algebra-pr', 'Linear Algebra & Vector Spaces', 'Vectors, matrices, norms.', 'maths1.vector-space'],
          ['eigen-pr', 'Eigenvalues & Eigenvectors', 'Used in PCA and LDA.', 'maths1.eigenvalues'],
          ['svd', 'Rank & SVD', 'A = UΣVᵀ decomposition.']
        ] },
        { name: 'Unit II · Pattern Recognition Basics', terms: [
          ['bayes-decision', 'Bayesian Decision Theory', 'Minimize expected risk using posteriors and losses.'],
          ['classifiers-pr', 'Classifiers', 'Rules that map features to classes.'],
          ['discriminant', 'Discriminant Functions', 'gᵢ(x) — pick the class with the largest value.'],
          ['decision-surfaces', 'Decision Surfaces', 'Boundaries where discriminants are equal.'],
          ['parameter-estimation', 'Parameter Estimation (MLE, Bayesian)', 'Estimate distribution parameters from data.'],
          ['hmm', 'Hidden Markov Models', 'Hidden states emitting observations; forward, Viterbi, Baum–Welch.'],
          ['dim-reduction-pr', 'Dimension Reduction Methods', 'Reduce features while keeping information.'],
          ['fisher-lda', 'Fisher Discriminant Analysis', 'Projects data to maximize class separation.'],
          ['pca-pr', 'Principal Component Analysis', 'Maximize variance projection.', 'aiml.pca'],
          ['parzen', 'Non-parametric Density Estimation (Parzen, k-NN)', 'Estimate densities without assuming a form.'],
          ['non-metric', 'Non-metric Methods (Decision Trees, Grammars)', 'Classification without distance measures.'],
          ['unsupervised-pr', 'Unsupervised Learning & Clustering (K-means, Hierarchical)', 'Group unlabeled patterns.', 'aiml.kmeans']
        ] },
        { name: 'Unit III · Features & Visual Recognition', terms: [
          ['feature-selection', 'Feature Selection: Problem & Uses', 'Pick the most useful subset of features.'],
          ['bb-feature', 'Branch and Bound Feature Selection', 'Optimal search with monotonic criteria.'],
          ['sfs-sbs', 'Sequential Forward & Backward Selection', 'Greedily add or remove features.'],
          ['cauchy-schwarz', 'Cauchy–Schwarz Inequality', '|⟨x, y⟩| ≤ ‖x‖‖y‖ — used in separability bounds.'],
          ['separability-criteria', 'Feature Selection Criteria', 'Probabilistic separability and inter-class distance.'],
          ['feature-extraction', 'Feature Extraction Principles', 'Transform raw data into informative features.'],
          ['human-vision', 'Human Visual Recognition System', 'How people recognize objects — inspiration for CV.'],
          ['low-mid-high', 'Low-, Mid- & High-level Vision', 'Features → segmentation → scene understanding.'],
          ['detection-segmentation', 'Detection & Segmentation Methods', 'YOLO, Faster R-CNN, U-Net, Mask R-CNN.', 'aiml.object-detection'],
          ['context-scenes', 'Context, Scenes, Saliency', 'Use surroundings and attention to recognize.'],
          ['large-scale-search', 'Large-scale Search & Recognition', 'Image retrieval with embeddings and indexing.'],
          ['egocentric', 'Egocentric Vision', 'First-person camera understanding.'],
          ['human-in-loop', 'Human-in-the-loop Systems', 'Interactive recognition with human feedback.'],
          ['3d-scene', '3-D Scene Understanding', 'Depth, point clouds, NeRFs.']
        ] },
        { name: 'Unit IV · Recent Advances', terms: [
          ['classifier-comparison', 'Comparing Classifier Performance', 'Cross-validation, statistical tests, ROC.'],
          ['statistics-pr', 'Basics of Statistics & Covariance Properties', 'Mean vectors and covariance matrices.'],
          ['data-condensation', 'Data Condensation', 'Reduce the number of samples while keeping accuracy.'],
          ['feature-clustering', 'Feature Clustering', 'Group similar features.'],
          ['viz-pr', 'Data Visualization & Aggregation', 'Visual exploration of patterns.'],
          ['density-estimation', 'Probability Density Estimation', 'Parametric and non-parametric methods.'],
          ['fcm', 'Fuzzy C-means (FCM)', 'Soft clustering with membership degrees.'],
          ['real-datasets', 'Real-life Datasets', 'MNIST, CIFAR-10, ImageNet, Iris.']
        ] }
      ]
    },
    {
      id: 'iot', name: 'Internet of Things', short: 'IoT', code: 'PEC-II', kind: 'elective', lang: 'python', icon: '📶',
      desc: 'Professional Elective II: IoT design, M2M, SDN, MAC/routing, sensors, Web of Things, cloud of things and applications.',
      units: [
        { name: 'Unit I · Introduction', terms: [
          ['iot-intro', 'Introduction & Characteristics of IoT', 'Connected devices sensing and acting; self-configuring, unique identity.'],
          ['iot-physical', 'Physical Design of IoT', 'Things and IoT protocols at each layer.'],
          ['iot-logical', 'Logical Design of IoT', 'Functional blocks, communication models and APIs.'],
          ['iot-blocks', 'Functional Blocks', 'Device, communication, services, management, security, application.'],
          ['comm-models', 'Communication Models', 'Request–response, publish–subscribe, push–pull, exclusive pair.'],
          ['iot-apis', 'Communication APIs (REST, WebSocket)', 'How devices talk to services.'],
          ['m2m', 'IoT & M2M', 'Machine-to-machine communication; IoT vs M2M differences.'],
          ['sdn', 'Software-defined Networking (SDN) & NFV', 'Separate control plane from data plane.'],
          ['iot-challenges', 'Challenges in IoT', 'Design, development, security, privacy, power.'],
          ['iot-protocols', 'IoT Protocols (MQTT, CoAP, HTTP)', 'Lightweight messaging for constrained devices.'],
          ['iot-hardware', 'IoT Hardware (Arduino, Raspberry Pi, ESP32)', 'Boards and sensors for prototypes.']
        ] },
        { name: 'Unit II · Network & Communication', terms: [
          ['wireless-mac-iot', 'Wireless Medium Access Issues', 'Hidden terminals, energy and collisions.'],
          ['mac-survey', 'MAC Protocol Survey', 'S-MAC, B-MAC, IEEE 802.15.4.'],
          ['routing-survey', 'Routing Protocol Survey', 'RPL, LEACH, directed diffusion.'],
          ['sensor-deployment', 'Sensor Deployment & Node Discovery', 'Placing sensors and finding neighbours.'],
          ['data-aggregation', 'Data Aggregation & Dissemination', 'Combining readings to save energy.']
        ] },
        { name: 'Unit III · Web of Things', terms: [
          ['wot', 'Web of Things vs Internet of Things', 'WoT uses web standards to integrate things.'],
          ['web-pillars', 'Two Pillars of the Web', 'URIs/HTTP and HTML/hypermedia.'],
          ['iot-architecture', 'Architecture & Standardization of IoT', 'Reference architectures (IEEE, ITU, oneM2M).'],
          ['multitier-wot', 'Unified Multitier WoT Architecture', 'Layers from devices to applications.'],
          ['wot-portals', 'WoT Portals & Business Intelligence', 'Dashboards and analytics on device data.'],
          ['cloud-of-things', 'Cloud of Things: Grid/SOA & Cloud', 'IoT data processed in the cloud.'],
          ['cloud-middleware', 'Cloud Middleware & Standards', 'AWS IoT, Azure IoT Hub, standards.'],
          ['edge-fog', 'Edge & Fog Computing (Bonus)', 'Process data close to devices.']
        ] },
        { name: 'Unit IV · Resource Management & Applications', terms: [
          ['iot-domains', 'Domain-specific Applications', 'Agriculture, health, energy, transport, cities.'],
          ['home-automation', 'Home Automation', 'Smart lights, locks, thermostats.'],
          ['industrial-iot', 'Industry Applications (IIoT)', 'Predictive maintenance, Industry 4.0.'],
          ['surveillance', 'Surveillance Applications', 'Smart cameras and anomaly detection.'],
          ['iot-clustering', 'Clustering in IoT', 'Group nodes to save energy.'],
          ['iot-sync', 'Synchronization', 'Clock sync in sensor networks.'],
          ['software-agents', 'Software Agents', 'Autonomous programs managing devices.']
        ] }
      ]
    },
    {
      id: 'adbms', name: 'Advanced Database Management System', short: 'Advanced DBMS', code: 'PEC-II', kind: 'elective', lang: 'sql', icon: '🗄',
      desc: 'Professional Elective II: query processing, recovery, concurrency, parallel & distributed databases, object-relational databases.',
      units: [
        { name: 'Unit I · Review & Query Processing', terms: [
          ['adbms-review', 'Architecture, Data Models, RA, SQL, Normal Forms (Review)', 'Recap of DBMS foundations.', 'dbms.normalization'],
          ['qp-strategies', 'General Query Processing Strategies', 'Parsing, rewriting, plan selection.'],
          ['qp-transformations', 'Query Transformations', 'Equivalence rules to rewrite queries.'],
          ['size-estimation', 'Expected Size & Statistics in Estimation', 'Selectivity and histograms.'],
          ['query-improvement', 'Query Improvement', 'Heuristic optimization.'],
          ['query-evaluation', 'Query Evaluation & View Processing', 'Executing plans; materialized vs virtual views.'],
          ['query-processor', 'Query Processor Components', 'Parser, optimizer, executor.']
        ] },
        { name: 'Unit II · Recovery & Concurrency', terms: [
          ['reliability', 'Reliability & Failures', 'Transaction, system and media failures.'],
          ['centralized-recovery', 'Recovery in Centralized DBMS', 'Undo/redo with logs.'],
          ['buffer-management', 'Buffer Management', 'Steal/no-steal, force/no-force policies.'],
          ['logging-schemes', 'Logging Schemes (WAL, ARIES)', 'Write-ahead logging; ARIES recovery.'],
          ['disaster-recovery', 'Disaster Recovery', 'Backups, replicas, RPO/RTO.'],
          ['concurrency-adbms', 'Serializability & Concurrency Control', 'Locking, timestamps, optimistic, multiversion.', 'dbms.serializability'],
          ['deadlocks-db', 'Deadlocks in Databases', 'Wait-for graphs, wait-die, wound-wait.']
        ] },
        { name: 'Unit III · Parallel & Distributed Databases', terms: [
          ['fragmentation-replication', 'Fragmentation & Replication', 'Split and copy data across sites.', 'ddb.fragmentation'],
          ['location-transparency-adbms', 'Location & Fragment Transparency', 'Users needn’t know where data is.'],
          ['dist-query', 'Distributed Query Processing & Optimization', 'Minimize data transfer.', 'ddb.dqo'],
          ['dist-transactions', 'Distributed Transaction Modelling & Concurrency', 'Global serializability.'],
          ['dist-deadlock', 'Distributed Deadlock', 'Detection across sites.'],
          ['commit-protocols', 'Commit Protocols (2PC, 3PC)', 'Atomic commit across sites.', 'ddb.2pc'],
          ['parallel-db', 'Design of Parallel Databases', 'Shared-memory, shared-disk, shared-nothing.'],
          ['parallel-query', 'Parallel Query Evaluation', 'Partitioned joins and aggregation.']
        ] },
        { name: 'Unit IV · Object-oriented & Object-relational DBs', terms: [
          ['complex-semantics', 'Modelling Complex Data Semantics', 'Specialization, generalization, aggregation, association.'],
          ['objects-db', 'Objects & Object Identity', 'OIDs independent of values.'],
          ['equality-reference', 'Equality & Object Reference', 'Identity vs value equality.'],
          ['oodb-architecture', 'Architecture of OO & OR Databases', 'Object stores; PostgreSQL types, arrays, JSON.']
        ] }
      ]
    },
    {
      id: 'adv-java', name: 'Advanced Java', short: 'Advanced Java', code: 'PEC-III', kind: 'elective', lang: 'java', icon: '☕',
      desc: 'Professional Elective III: Java OOP review, AWT/Swing, JDBC, JavaBeans, Servlets and JSP.',
      units: [
        { name: 'Unit I · OOP Review & GUI', terms: [
          ['java-classes', 'Classes, Objects & Constructors in Java', 'Java OOP basics.', 'oop.class-object'],
          ['java-inheritance', 'Inheritance & Polymorphism', 'extends, method overriding, dynamic dispatch.', 'oop.inheritance'],
          ['java-overloading', 'Function Overloading', 'Same name, different parameters.', 'oop.method-overloading'],
          ['packages-interfaces', 'Packages & Interfaces', 'Namespaces and contracts.', 'oop.interface'],
          ['java-exceptions', 'Exception Handling', 'try/catch/finally, checked vs unchecked, throws.'],
          ['java-streams', 'File Streams', 'FileInputStream, BufferedReader, FileWriter.'],
          ['awt', 'AWT & Applets', 'Older Java GUI toolkit; applets are obsolete now.'],
          ['swing', 'Swing UI Design', 'JFrame, JPanel, JLabel, JTextField, JButton.'],
          ['swing-components', 'CheckBox, RadioButton, ComboBox, Tabbed/Scroll Panes', 'Common Swing controls.'],
          ['swing-trees-tables', 'JTree, JTable, Custom JList Rendering', 'Advanced Swing components.'],
          ['event-handling-java', 'Event Handling (Listeners)', 'ActionListener and event delegation model.']
        ] },
        { name: 'Unit II · JDBC & JavaBeans', terms: [
          ['jdbc', 'JDBC Fundamentals', 'Java API for connecting to databases.'],
          ['jdbc-connection', 'Establishing Connectivity (DriverManager, Connection)', 'Load driver and open connection.'],
          ['statements', 'Statement, PreparedStatement, CallableStatement', 'Run SQL, parameterized SQL and procedures.'],
          ['resultset', 'ResultSet & ResultSetMetaData', 'Iterate rows and inspect columns.'],
          ['javabeans', 'JavaBeans', 'Reusable components with getters/setters and serialization.'],
          ['bdk-jar', 'BDK & JAR Files', 'Bean Development Kit; packaging with JAR.']
        ] },
        { name: 'Unit III · Servlets', terms: [
          ['servlets', 'Introduction to Servlets', 'Java classes that handle HTTP requests on a server.'],
          ['servlet-lifecycle', 'Servlet Life Cycle', 'init(), service(), destroy().'],
          ['servlet-run', 'Creating, Compiling & Running a Servlet', 'Deploy on Tomcat with web.xml or annotations.'],
          ['servlet-params', 'Reading Parameters & Init Parameters', 'getParameter(), ServletConfig.'],
          ['javax-servlet', 'javax.servlet / jakarta.servlet Packages', 'Core servlet API.'],
          ['get-post', 'Handling GET & POST', 'doGet and doPost methods.'],
          ['cookies-sessions', 'Cookies & Session Tracking', 'Cookie, HttpSession, URL rewriting.']
        ] },
        { name: 'Unit IV · JSP', terms: [
          ['jsp-architecture', 'JSP Architecture', 'JSP pages compiled into servlets.'],
          ['jsp-access', 'JSP Access Models (Model 1 / Model 2 MVC)', 'Page-centric vs controller-based design.'],
          ['jsp-syntax', 'JSP Syntax: Directives, Declarations, Expressions, Scriptlets, Comments', '<%@ %>, <%! %>, <%= %>, <% %>.'],
          ['jsp-implicit', 'JSP Implicit Objects', 'request, response, session, application, out, page…'],
          ['jsp-scope', 'Object Scope', 'page, request, session, application.'],
          ['jsp-sync', 'Synchronization Issues', 'Thread safety in JSP/servlets.'],
          ['jsp-session', 'Session Management', 'Tracking users across requests.'],
          ['spring-boot-intro', 'Spring Boot (Modern Java Web, Bonus)', 'Today’s standard for Java back ends.']
        ] }
      ]
    },
    {
      id: 'compiler', name: 'Compiler Design', short: 'Compiler Design', code: 'PEC-III', kind: 'elective', lang: 'c', icon: '⚙',
      desc: 'Professional Elective III: phases, lexical analysis, parsing (LL/LR), syntax-directed translation, type checking, runtime, intermediate code, code generation and optimization.',
      units: [
        { name: 'Unit I · Introduction & Lexical Analysis', terms: [
          ['compiler', 'Compilers & Analysis of Source Program', 'Translate source to target code: analysis + synthesis.'],
          ['phases', 'Phases of a Compiler', 'Lexical, syntax, semantic, intermediate code, optimization, code generation.'],
          ['cousins', 'Cousins of the Compiler', 'Preprocessor, assembler, linker, loader.'],
          ['grouping-phases', 'Grouping of Phases (Front & Back End, Passes)', 'Organize phases into passes.'],
          ['compiler-tools', 'Compiler-construction Tools', 'Lex/Flex, Yacc/Bison, ANTLR.'],
          ['one-pass', 'A Simple One-pass Compiler', 'Syntax definition, SDT, parsing, translator for expressions.'],
          ['symbol-table', 'Symbol Table', 'Stores identifiers and their attributes.'],
          ['abstract-stack-machine', 'Abstract Stack Machines', 'Target model for simple translators.'],
          ['lexical-analyzer', 'Role of the Lexical Analyzer', 'Convert characters into tokens.'],
          ['input-buffering', 'Input Buffering', 'Two-buffer scheme with sentinels.'],
          ['tokens-lexemes', 'Tokens, Patterns & Lexemes', 'Token = category; lexeme = actual text; pattern = rule.'],
          ['token-recognition', 'Specification & Recognition of Tokens', 'Regular expressions and transition diagrams.'],
          ['lex', 'Lex: A Language for Lexical Analyzers', 'Generate scanners from regex rules.'],
          ['regex-to-nfa', 'Regular Expression to NFA & DFA', 'Thompson’s construction; subset construction.', 'toc.re-to-fa'],
          ['dfa-optimization', 'Optimization of DFA-based Matchers', 'Minimize states for faster scanning.']
        ] },
        { name: 'Unit II · Syntax Analysis & SDT', terms: [
          ['parser-role', 'Role of the Parser', 'Check syntax and build a parse tree.'],
          ['cfg-compiler', 'Context-free Grammars & Writing a Grammar', 'Removing ambiguity, left recursion and left factoring.'],
          ['top-down', 'Top-down Parsing', 'Recursive descent and predictive parsing.'],
          ['first-follow', 'FIRST and FOLLOW Sets', 'Used to build predictive parse tables.'],
          ['ll1', 'LL(1) Parsing', 'Predictive parsing with one-symbol lookahead.'],
          ['bottom-up', 'Bottom-up Parsing (Shift-Reduce)', 'Reduce input to the start symbol.'],
          ['operator-precedence', 'Operator-precedence Parsing', 'Parsing using precedence relations.'],
          ['lr-parsers', 'LR Parsers: SLR, CLR, LALR', 'Powerful bottom-up parsers using item sets.'],
          ['ambiguous-grammars', 'Using Ambiguous Grammars', 'Resolve conflicts with precedence/associativity.'],
          ['parser-generators', 'Parser Generators (Yacc/Bison)', 'Build parsers from grammars.'],
          ['sdd', 'Syntax-directed Definitions', 'Grammar + semantic rules for attributes.'],
          ['syntax-tree', 'Construction of Syntax Trees', 'Abstract syntax trees from SDDs.'],
          ['s-attributed', 'S-attributed Definitions (Bottom-up)', 'Only synthesized attributes.'],
          ['l-attributed', 'L-attributed Definitions (Top-down)', 'Inherited attributes from left siblings/parent.'],
          ['attribute-evaluation', 'Recursive Evaluators & Attribute Space', 'Evaluate attributes and allocate space at compile time.']
        ] },
        { name: 'Unit III · Type Checking & Runtime', terms: [
          ['type-systems', 'Type Systems & Simple Type Checker', 'Rules assigning types to expressions.'],
          ['type-equivalence', 'Equivalence of Type Expressions', 'Structural vs name equivalence.'],
          ['type-conversions-cd', 'Type Conversions (Coercion)', 'Implicit and explicit conversions.'],
          ['overloading-cd', 'Overloading of Functions & Operators', 'Resolve which version to call.'],
          ['polymorphic-functions', 'Polymorphic Functions & Unification', 'Type variables solved by unification.'],
          ['runtime-env', 'Run-time Environments & Source Language Issues', 'Procedures, activations, scopes.'],
          ['storage-organization', 'Storage Organization', 'Code, static, stack, heap areas.'],
          ['activation-records', 'Activation Records', 'Frame holding parameters, locals, return address.'],
          ['storage-allocation', 'Storage-allocation Strategies', 'Static, stack and heap allocation.'],
          ['nonlocal-access', 'Access to Non-local Names', 'Access links and displays.'],
          ['param-passing-cd', 'Parameter Passing', 'Call by value, reference, copy-restore, name.'],
          ['dynamic-allocation-cd', 'Dynamic Storage Allocation Techniques', 'Explicit/implicit allocation, garbage collection.']
        ] },
        { name: 'Unit IV · Intermediate Code, Code Generation & Optimization', terms: [
          ['intermediate-languages', 'Intermediate Languages', 'Syntax trees, postfix, three-address code.'],
          ['tac', 'Three-address Code (Quadruples, Triples)', 'Instructions with at most three addresses.'],
          ['ic-statements', 'Declarations, Assignments, Boolean & Case Statements', 'Translating constructs to IR.'],
          ['backpatching', 'Backpatching', 'Fill jump targets later in one pass.'],
          ['procedure-calls', 'Procedure Calls', 'Calling sequences in IR.'],
          ['codegen-issues', 'Issues in Code Generator Design', 'Instruction selection, register allocation, evaluation order.'],
          ['target-machine', 'Target Machine & Run-time Storage Management', 'Instruction costs and addressing.'],
          ['basic-blocks', 'Basic Blocks & Flow Graphs', 'Straight-line code segments and control flow.'],
          ['next-use', 'Next-use Information', 'When a variable is used next.'],
          ['simple-codegen', 'A Simple Code Generator', 'Using register and address descriptors.'],
          ['register-allocation', 'Register Allocation & Assignment (Graph Colouring)', 'Keep values in registers.'],
          ['dag', 'DAG Representation of Basic Blocks', 'Detect common subexpressions.'],
          ['peephole', 'Peephole Optimization', 'Improve short windows of instructions.'],
          ['dp-codegen', 'Dynamic Programming Code Generation', 'Optimal code for expression trees.'],
          ['code-optimization', 'Principal Sources of Optimization', 'CSE, copy propagation, dead code, constant folding, loop optimizations.'],
          ['loop-optimization', 'Loops in Flow Graphs', 'Code motion, induction variables, strength reduction.'],
          ['data-flow', 'Global Data-flow Analysis', 'Reaching definitions, live variables; iterative solution.'],
          ['aliases', 'Dealing with Aliases', 'Pointers that refer to the same location.'],
          ['symbolic-debugging', 'Symbolic Debugging of Optimized Code', 'Mapping optimized code back to source.']
        ] }
      ]
    },
    {
      id: 'speech', name: 'Speech Processing and Applications', short: 'Speech Processing', code: 'PEC-III', kind: 'elective', lang: 'python', icon: '🎙',
      desc: 'Professional Elective III: speech production, time- and frequency-domain analysis, MFCC, DTW, HMMs, LPC and applications.',
      units: [
        { name: 'Unit I · Nature of Speech', terms: [
          ['speech-production', 'Speech Production Mechanism', 'Lungs, vocal folds and vocal tract shape sounds.'],
          ['speech-sounds', 'Classification of Speech Sounds', 'Voiced, unvoiced, vowels, consonants, phonemes.'],
          ['speech-signal', 'Nature of the Speech Signal', 'Non-stationary, quasi-periodic signal.'],
          ['source-filter', 'Models of Speech Production (Source–Filter)', 'Excitation source filtered by the vocal tract.'],
          ['speech-processing-purpose', 'Purpose & Significance of Speech Processing', 'Recognition, synthesis, coding, enhancement.'],
          ['digital-speech', 'Digital Models & Processing of Speech', 'Sampling, quantization, digital filters.'],
          ['short-time', 'Short-time Analysis', 'Analyze speech in 20–30 ms frames with windows.']
        ] },
        { name: 'Unit II · Time-domain Methods & Features', terms: [
          ['time-params', 'Time-domain Parameters', 'Short-time energy and magnitude.'],
          ['zcr', 'Zero Crossing Rate', 'Rate of sign changes — separates voiced/unvoiced.'],
          ['autocorrelation', 'Autocorrelation Function', 'Similarity of a signal with delayed copies.'],
          ['pitch', 'Pitch Estimation', 'Fundamental frequency from autocorrelation or AMDF.'],
          ['distortion', 'Speech Distortion Measures', 'Mathematical and perceptual distances.'],
          ['log-spectral', 'Log-spectral & Cepstral Distances', 'Compare spectra and cepstra.'],
          ['warped', 'Spectral Distortion with Warped Frequency (Mel/Bark)', 'Perceptual frequency scales.'],
          ['lpc-feat', 'LPC, PLP & MFCC Coefficients', 'Standard speech features; MFCC most common.'],
          ['dtw', 'Dynamic Time Warping', 'Align sequences of different speeds.'],
          ['multi-alignment', 'Multiple Time-alignment Paths', 'Constraints and paths in DTW.']
        ] },
        { name: 'Unit III · Frequency-domain Methods & HMMs', terms: [
          ['stft', 'Short-time Fourier Analysis (STFT)', 'Fourier transform of windowed frames.'],
          ['filter-bank', 'Filter Bank Analysis', 'Split signal into frequency bands.'],
          ['spectrogram', 'Spectrographic Analysis', 'Time–frequency images of speech.'],
          ['formants', 'Formant Extraction', 'Resonant frequencies of the vocal tract.'],
          ['pitch-extraction', 'Pitch Extraction (Frequency Domain)', 'Harmonic and cepstral methods.'],
          ['analysis-synthesis', 'Analysis–Synthesis Systems (Vocoders)', 'Encode and regenerate speech.'],
          ['markov-processes', 'Markov Processes', 'Next state depends only on the current state.'],
          ['hmm-speech', 'HMM Evaluation (Forward Algorithm)', 'Probability of an observation sequence.', 'pvr.hmm'],
          ['viterbi', 'Optimal State Sequence: Viterbi Search', 'Most likely hidden state path.'],
          ['baum-welch', 'Baum–Welch Re-estimation', 'EM training of HMM parameters.'],
          ['hmm-issues', 'HMM Implementation Issues', 'Scaling, initialization, multiple sequences.']
        ] },
        { name: 'Unit IV · LPC, Homomorphic Analysis & Applications', terms: [
          ['linear-prediction', 'Linear Prediction in Time Domain', 'Predict a sample from past samples.'],
          ['normal-equations', 'Normal Equations (Levinson–Durbin)', 'Solve for LPC coefficients efficiently.'],
          ['lpc-interpretation', 'LPC in Autocorrelation & Spectral Domains', 'All-pole model of the spectral envelope.'],
          ['cepstral-analysis', 'Homomorphic (Cepstral) Analysis', 'Separate source and filter with the cepstrum.'],
          ['format-pitch', 'Formant & Pitch Estimation via Cepstrum', 'Use low/high quefrency parts.'],
          ['asr', 'Speech Recognition (ASR)', 'Convert speech to text (HMM → deep learning → Whisper).'],
          ['tts', 'Speech Synthesis (TTS)', 'Convert text to speech.'],
          ['speaker-verification', 'Speaker Verification', 'Confirm a speaker’s identity.']
        ] }
      ]
    },
    {
      id: 'se', name: 'Software Engineering', short: 'Software Engineering', code: 'PEC-III', kind: 'elective', lang: 'text', icon: '🏗',
      desc: 'Professional Elective III: process models, project management, estimation (COCOMO), requirements, design, testing, quality and CASE.',
      units: [
        { name: 'Unit I · Process, Management & Requirements', terms: [
          ['software-process', 'Software Process & Products', 'Set of activities producing software.'],
          ['se-emergence', 'Emergence & Evolving Role of Software', 'Why engineering discipline is needed.'],
          ['software-crisis', 'Software Crisis', 'Late, over-budget and buggy projects.'],
          ['sw-characteristics', 'Software Characteristics & Applications', 'Developed not manufactured; doesn’t wear out.'],
          ['sdlc', 'Software Life Cycle (SDLC)', 'Phases from requirements to maintenance.'],
          ['waterfall', 'Waterfall Model', 'Sequential phases.'],
          ['iterative-incremental', 'Iterative & Incremental Models', 'Build in increments with feedback.'],
          ['prototype-model', 'Prototyping Model', 'Build a quick prototype to clarify requirements.'],
          ['spiral', 'Spiral Model', 'Risk-driven iterative model.'],
          ['agile', 'Agile, Scrum & Kanban', 'Short sprints, user stories, stand-ups, retrospectives.'],
          ['devops-se', 'DevOps (Bonus)', 'Dev + Ops collaboration with automation.', 'git.devops'],
          ['project-management', 'Project Management Concepts', 'People, product, process, project.'],
          ['metrics', 'Process & Project Metrics', 'LOC, function points, defect density.'],
          ['project-planning', 'Project Planning', 'Scope, estimates, schedule, resources.'],
          ['size-estimation', 'Size Estimation: LOC & Function Points', 'Measure software size.'],
          ['estimation-techniques', 'Empirical Estimation Techniques', 'Expert judgement, Delphi.'],
          ['cocomo', 'COCOMO Model', 'Effort = a(KLOC)ᵇ — basic, intermediate, detailed; organic/semi-detached/embedded.'],
          ['staffing', 'Staffing Level Estimation & Team Structures', 'Putnam/Rayleigh curve; chief programmer, democratic teams.'],
          ['risk', 'Risk Analysis & Management', 'Identify, assess and mitigate risks (RMMM).'],
          ['scheduling-se', 'Project Scheduling & Tracking (Gantt, PERT, CPM)', 'Plan tasks and critical path.'],
          ['requirements-engineering', 'Requirements Engineering', 'Elicitation, analysis, specification, validation.'],
          ['functional-nfr', 'Functional vs Non-functional Requirements', 'What the system does vs how well.'],
          ['srs', 'SRS Document', 'Software Requirements Specification (IEEE 830) and reviews.'],
          ['analysis-modeling', 'Analysis Modelling', 'Data, functional and behavioural models.'],
          ['dfd', 'Data Flow Diagrams (DFD)', 'Show how data moves through processes (levels 0, 1, 2).'],
          ['erd-se', 'Entity-Relationship Diagrams', 'Data modelling.', 'dbms.er-model'],
          ['data-dictionary', 'Data Dictionary', 'Definitions of all data elements.'],
          ['state-diagram', 'Behavioural Modelling (State Diagrams)', 'Show states and transitions.']
        ] },
        { name: 'Unit II · System Design', terms: [
          ['design-process', 'Design Process & Quality', 'Translate requirements into a blueprint.'],
          ['design-concepts', 'Design Concepts', 'Abstraction, refinement, modularity, architecture, information hiding.'],
          ['modularity', 'Effective Modular Design', 'Functional independence.'],
          ['cohesion', 'Cohesion (Types)', 'How strongly related a module’s parts are — aim high.'],
          ['coupling', 'Coupling (Types)', 'How dependent modules are on each other — aim low.'],
          ['design-heuristics', 'Design Heuristics', 'Guidelines for effective modularity.'],
          ['architectural-design', 'Architectural Design & Styles', 'Layered, client–server, MVC, microservices, event-driven.'],
          ['data-design', 'Data Design', 'Data structures, databases and warehouses.'],
          ['transform-transaction', 'Transform & Transaction Flow Mapping', 'Map DFDs to program structure.'],
          ['uml', 'UML Diagrams (Bonus)', 'Use case, class, sequence, activity diagrams.', 'oop.uml'],
          ['design-docs', 'Design Documentation', 'Recording decisions and structure.']
        ] },
        { name: 'Unit III · Testing & Maintenance', terms: [
          ['testing-fundamentals', 'Testing Fundamentals', 'Objectives, principles, testability.'],
          ['test-cases', 'Test Case Design', 'Inputs, expected outputs, steps.'],
          ['white-box', 'White-box Testing', 'Test internal paths and logic.'],
          ['basis-path', 'Basis Path Testing & Cyclomatic Complexity', 'V(G) = E − N + 2.'],
          ['control-structure-testing', 'Control Structure Testing', 'Condition, data-flow and loop testing.'],
          ['black-box', 'Black-box Testing', 'Equivalence partitioning, boundary value analysis.'],
          ['verification-validation', 'Verification vs Validation', 'Building it right vs building the right thing.'],
          ['testing-levels', 'Unit, Integration, System, Acceptance Testing', 'Levels of testing.'],
          ['alpha-beta', 'Alpha & Beta Testing', 'In-house vs real-user testing.'],
          ['system-tests', 'Recovery, Security, Stress, Performance Testing', 'Types of system tests.'],
          ['debugging', 'Art of Debugging & Approaches', 'Brute force, backtracking, cause elimination.'],
          ['reengineering', 'Re-engineering, Reverse & Forward Engineering', 'Improving or understanding existing systems.'],
          ['maintenance', 'Software Maintenance Types', 'Corrective, adaptive, perfective, preventive.']
        ] },
        { name: 'Unit IV · Quality & CASE', terms: [
          ['quality-concepts', 'Quality Concepts', 'Conformance to requirements and fitness for use.'],
          ['sqa', 'Software Quality Assurance & Activities', 'Planned activities ensuring quality.'],
          ['reviews', 'Software Reviews & Defect Amplification', 'Find defects early to cut cost.'],
          ['ftr', 'Formal Technical Reviews', 'Review meeting, reporting, guidelines.'],
          ['statistical-sqa', 'Formal & Statistical SQA, Six Sigma', 'Data-driven quality improvement.'],
          ['reliability-se', 'Software Reliability (MTBF, Availability)', 'Probability of failure-free operation.'],
          ['iso9000', 'ISO 9000 & ISO 9001', 'Quality management standards.'],
          ['cmm', 'CMM / CMMI Levels', 'Maturity levels 1–5.'],
          ['scm', 'Software Configuration Management', 'Version control, change control, baselines.', 'git.git-basics'],
          ['case', 'CASE Tools & Environments', 'Computer-aided software engineering tools and repositories.']
        ] }
      ]
    },
    {
      id: 'project1', name: 'Project – I', short: 'Project I', kind: 'project', lang: 'text', icon: '🚀',
      desc: 'Minor project: choose a problem, build a working solution, write a report and present it.',
      units: [
        { name: 'Project Workflow', terms: [
          ['choose-problem', 'Choosing a Project Idea', 'Pick a real problem; check data availability and scope.'],
          ['literature-review', 'Literature Review', 'Study existing solutions and papers.'],
          ['project-plan', 'Project Plan & Milestones', 'Break work into weekly milestones.'],
          ['tech-stack', 'Choosing a Tech Stack', 'Pick languages, frameworks, datasets, deployment.'],
          ['project-report', 'Project Report Structure', 'Abstract, intro, related work, method, results, conclusion, references.'],
          ['project-demo', 'Demo & Viva Preparation', 'Show results clearly; know every design decision.'],
          ['github-portfolio', 'Publishing on GitHub', 'README, screenshots, live link.', 'git.github']
        ] }
      ]
    }
  ]
};
