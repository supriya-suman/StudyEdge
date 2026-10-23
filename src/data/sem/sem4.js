// Semester 4 — B.Tech CSE (AI)
export default {
  sem: 4,
  title: 'Semester 4 — Machine Learning & Algorithms',
  courses: [
    {
      id: 'fml', name: 'Foundation of Machine Learning', short: 'Foundations of ML', code: 'PCC-202', kind: 'core', lang: 'python', icon: '🤖',
      desc: 'Learning paradigms, supervised and unsupervised learning, ensembles, class imbalance and reinforcement learning — with the ML lab.',
      units: [
        { name: 'Unit I · Introduction & Prerequisites', terms: [
          ['what-is-ml', 'What is Machine Learning', 'Programs that improve at a task from data instead of explicit rules.', 'aiml.what-is-ml'],
          ['paradigms', 'Learning Paradigms', 'Supervised, unsupervised, semi-supervised, self-supervised and reinforcement learning.', 'aiml.learning-types'],
          ['pac', 'PAC Learning', 'Probably Approximately Correct: learn a hypothesis with low error with high probability from enough samples.'],
          ['version-space', 'Version Spaces', 'The set of all hypotheses consistent with the training data (Candidate-Elimination).'],
          ['hypothesis-space', 'Hypothesis Space & Inductive Bias', 'All candidate models and the assumptions a learner uses to generalize.'],
          ['ml-in-ai', 'Role of ML in AI Applications', 'ML powers vision, speech, NLP, recommendation and robotics.'],
          ['ml-workflow', 'ML Workflow', 'Collect data → clean → features → train → evaluate → deploy → monitor.', 'aiml.ml-workflow']
        ] },
        { name: 'Unit II · Supervised Learning I & II', terms: [
          ['linear-nonlinear-ex', 'Linear and Non-linear Problems', 'Whether classes/targets can be separated or fitted by a straight line/plane.'],
          ['multiclass-multilabel', 'Multi-class & Multi-label Classification', 'One label from many classes vs several labels per sample.'],
          ['linear-regression', 'Linear Regression', 'Fits y = wx + b by minimizing squared error.', 'aiml.linear-regression'],
          ['multiple-lr', 'Multiple Linear Regression', 'Regression with several input features.', 'aiml.linear-regression'],
          ['naive-bayes', 'Naïve Bayes Classifier', 'Applies Bayes’ theorem assuming features are independent.', 'aiml.naive-bayes'],
          ['decision-trees', 'Decision Trees', 'Split data by feature tests into a tree of decisions.', 'aiml.decision-tree'],
          ['id3', 'ID3 (Entropy & Information Gain)', 'Chooses splits that maximize information gain.', 'aiml.entropy-gain'],
          ['cart', 'CART (Gini Index)', 'Binary splits using Gini impurity; works for regression too.', 'aiml.decision-tree'],
          ['error-bounds', 'Error Bounds & Generalization', 'Limits on the gap between training and true error.'],
          ['knn', 'k-Nearest Neighbours (k-NN)', 'Classify by majority vote of the k closest training points.', 'aiml.knn'],
          ['logistic-regression', 'Logistic Regression', 'Predicts class probability with the sigmoid function.', 'aiml.logistic-regression'],
          ['perceptron', 'Perceptron (Single-layer)', 'A linear classifier that updates weights on mistakes.', 'aiml.perceptron'],
          ['mlp', 'Multi-layer Perceptron', 'Stacked layers with non-linear activations trained by backpropagation.', 'aiml.mlp'],
          ['svm', 'Support Vector Machines (Linear)', 'Finds the maximum-margin separating hyperplane.', 'aiml.svm'],
          ['kernel-svm', 'Non-linear SVM & Kernel Trick', 'Kernels (RBF, polynomial) separate data in higher dimensions.', 'aiml.svm'],
          ['metrics', 'Classification Metrics', 'Accuracy, precision, recall, F1, confusion matrix, ROC-AUC.', 'aiml.classification-metrics'],
          ['regression-metrics', 'Regression Metrics', 'MAE, MSE, RMSE, R².', 'aiml.regression-metrics']
        ] },
        { name: 'Unit III · Unsupervised & Ensemble Learning', terms: [
          ['clustering', 'Clustering Basics', 'Grouping similar data without labels.', 'aiml.clustering'],
          ['clustering-types', 'Partitioned, Hierarchical & Density-based Clustering', 'k-means style, dendrogram-based and DBSCAN-style methods.', 'aiml.clustering'],
          ['kmeans', 'K-Means Clustering', 'Assign points to the nearest centroid, update centroids, repeat.', 'aiml.kmeans'],
          ['kmodes', 'K-Modes Clustering', 'K-means for categorical data using modes and mismatch distance.'],
          ['som', 'Self-organizing Maps (SOM)', 'Neural network that maps high-dimensional data onto a 2-D grid.'],
          ['em', 'Expectation Maximization (EM) & GMM', 'Iteratively estimates hidden variables and parameters (e.g. Gaussian mixtures).'],
          ['pca', 'Principal Component Analysis (PCA)', 'Projects data onto directions of maximum variance.', 'aiml.pca'],
          ['kernel-pca', 'Kernel PCA', 'PCA in a kernel-induced feature space for non-linear structure.'],
          ['tsne', 't-SNE', 'Non-linear 2-D/3-D visualization preserving local neighbourhoods.', 'aiml.tsne-umap'],
          ['cluster-metrics', 'Clustering Metrics', 'Silhouette score, inertia (elbow method), Davies–Bouldin.'],
          ['bias-variance', 'Bias–Variance Trade-off', 'Simple models underfit (bias); complex models overfit (variance).', 'aiml.bias-variance'],
          ['bagging', 'Bagging', 'Train many models on bootstrap samples and average them.', 'aiml.ensembles'],
          ['random-forest', 'Random Forest', 'Bagged decision trees with random feature subsets.', 'aiml.random-forest'],
          ['boosting', 'Boosting', 'Train models sequentially, each fixing the previous errors.', 'aiml.ensembles'],
          ['adaboost', 'AdaBoost', 'Reweights misclassified samples each round.', 'aiml.ensembles'],
          ['xgboost', 'XGBoost', 'Regularized, fast gradient boosting on trees.', 'aiml.gradient-boosting']
        ] },
        { name: 'Unit IV · ML in Practice & Reinforcement Learning', terms: [
          ['class-imbalance', 'Class Imbalance', 'When one class is much rarer — accuracy becomes misleading.', 'aiml.imbalance'],
          ['smote', 'SMOTE', 'Creates synthetic minority samples by interpolating neighbours.', 'aiml.imbalance'],
          ['one-class-svm', 'One-class SVM', 'Learns the boundary of normal data for anomaly detection.'],
          ['hyperparameters', 'Hyperparameter Optimization', 'Grid search, random search, Bayesian optimization with cross-validation.', 'aiml.hyperparameter-tuning'],
          ['rl-basics', 'Basics of Reinforcement Learning', 'An agent learns by trial and error from rewards.', 'aiml.reinforcement-learning'],
          ['rl-framework', 'RL Framework', 'Agent, environment, state, action, reward, policy.', 'aiml.reinforcement-learning'],
          ['mdp', 'Markov Decision Process', '(S, A, P, R, γ) — the maths model of RL.', 'aiml.mdp'],
          ['explore-exploit', 'Exploration vs Exploitation', 'Try new actions vs use the best-known one (ε-greedy).'],
          ['policies-values', 'Policies, Value Functions & Bellman Equations', 'V(s) and Q(s, a) satisfy recursive Bellman equations.', 'aiml.mdp'],
          ['rl-solution', 'Solution Methods (DP, Monte Carlo, TD)', 'Ways to compute optimal policies.'],
          ['q-learning', 'Q-learning', 'Off-policy TD method: Q ← Q + α[r + γ max Q′ − Q].', 'aiml.q-learning']
        ] },
        { name: 'ML Lab', terms: [
          ['lab-sklearn', 'scikit-learn Workflow', 'fit / predict / score with train_test_split.', 'aiml.sklearn'],
          ['lab-regression', 'Linear & Multiple Regression Lab', 'Fit and evaluate regression models.', 'aiml.linear-regression'],
          ['lab-classifiers', 'Naïve Bayes, Decision Tree, Logistic, SVM Labs', 'Train and compare classifiers on a dataset.'],
          ['lab-perceptron', 'Single & Multi-layer Perceptron Lab', 'Implement and train perceptrons.'],
          ['lab-ensembles', 'AdaBoost & XGBoost Lab', 'Boosting experiments.'],
          ['lab-pca-som', 'PCA & SOM Lab', 'Dimensionality reduction and visualization.'],
          ['lab-qlearning', 'Q-learning Lab', 'Train an agent on a grid world.']
        ] }
      ]
    },
    {
      id: 'ada', name: 'Analysis and Design of Algorithms', short: 'ADA', code: 'PCC-204', kind: 'core', lang: 'cpp', icon: '⏱',
      desc: 'Asymptotic analysis, recurrences, brute force, divide & conquer, greedy, DP, backtracking, branch & bound and complexity classes.',
      units: [
        { name: 'Unit I · Basics of Algorithms', terms: [
          ['notion', 'Notion of Algorithm', 'A precise, finite sequence of instructions for solving a problem.', 'c-prog.algorithm'],
          ['problem-solving', 'Fundamentals of Algorithmic Problem Solving', 'Understand, choose technique, design, prove, analyze, code.'],
          ['problem-types', 'Important Problem Types', 'Sorting, searching, string processing, graph, combinatorial, geometric, numerical.'],
          ['analysis-framework', 'Analysis Framework', 'Input size, basic operation, order of growth, worst/best/average case.', 'dsa.complexity'],
          ['asymptotic', 'Asymptotic Notations (O, Ω, Θ, o, ω)', 'Describe growth rates ignoring constants.', 'dsa.big-o'],
          ['efficiency-classes', 'Basic Efficiency Classes', '1, log n, n, n log n, n², n³, 2ⁿ, n!.', 'dsa.big-o'],
          ['non-recursive-analysis', 'Analysis of Non-recursive Algorithms', 'Count basic operations with summations.'],
          ['recursive-analysis', 'Analysis of Recursive Algorithms', 'Set up and solve a recurrence relation.'],
          ['substitution-method', 'Substitution Method', 'Guess the solution and prove by induction.'],
          ['recursion-tree', 'Recursion Tree Method', 'Draw the calls as a tree and sum the work per level.'],
          ['master-theorem', 'Master Theorem', 'Solves T(n) = aT(n/b) + f(n) by comparing f(n) with n^(log_b a).', 'dsa.master-theorem']
        ] },
        { name: 'Unit II · Brute Force & Divide and Conquer', terms: [
          ['brute-force', 'Brute Force Strategy', 'Try every possibility — simple but often slow.'],
          ['selection-sort', 'Selection Sort', 'Repeatedly select the minimum and place it in front. O(n²).', 'dsa.selection-sort'],
          ['bubble-sort', 'Bubble Sort', 'Swap adjacent out-of-order elements. O(n²).', 'dsa.bubble-sort'],
          ['linear-search', 'Sequential (Linear) Search', 'Check each element one by one. O(n).', 'dsa.linear-search'],
          ['brute-string', 'Brute-force String Matching', 'Try the pattern at every text position. O(nm).', 'dsa.string-matching'],
          ['divide-conquer', 'Divide and Conquer: General Method', 'Divide, solve subproblems recursively, combine.', 'dsa.divide-conquer'],
          ['merge-sort', 'Merge Sort', 'Split in halves, sort, merge. O(n log n), stable.', 'dsa.merge-sort'],
          ['quick-sort', 'Quick Sort', 'Partition around a pivot; average O(n log n), worst O(n²).', 'dsa.quick-sort'],
          ['binary-search', 'Binary Search', 'Halve a sorted range each step. O(log n).', 'dsa.binary-search'],
          ['strassen', 'Strassen’s Matrix Multiplication', '7 multiplications instead of 8 → O(n^2.81).'],
          ['min-max-dc', 'Finding Max & Min (Divide and Conquer)', 'Uses about 3n/2 − 2 comparisons.']
        ] },
        { name: 'Unit III · Greedy & Dynamic Programming', terms: [
          ['greedy', 'Greedy Approach', 'Make the locally best choice at each step.', 'dsa.greedy'],
          ['fractional-knapsack', 'Fractional Knapsack', 'Take items by best value/weight ratio; fractions allowed.', 'dsa.fractional-knapsack'],
          ['mst-ada', 'Minimum Cost Spanning Tree', 'Connect all vertices with minimum total weight.', 'dsa.mst'],
          ['prims', 'Prim’s Algorithm', 'Grow the MST from a vertex by adding the cheapest edge.', 'dsa.prim'],
          ['kruskals', 'Kruskal’s Algorithm', 'Add edges in increasing weight unless they form a cycle (DSU).', 'dsa.kruskal'],
          ['sssp', 'Single-source Shortest Path (Dijkstra)', 'Greedy shortest paths for non-negative weights.', 'dsa.dijkstra'],
          ['job-sequencing', 'Job Sequencing with Deadlines', 'Schedule jobs to maximize profit.', 'dsa.job-sequencing'],
          ['huffman', 'Huffman Coding', 'Optimal prefix codes built greedily from frequencies.', 'dsa.huffman'],
          ['dp', 'Dynamic Programming', 'Solve overlapping subproblems once and store results.', 'dsa.dp'],
          ['optimality', 'Principle of Optimality', 'An optimal solution contains optimal solutions to subproblems.', 'dsa.dp'],
          ['multistage', 'Multi-stage Graph Problem', 'Shortest path through stages using DP.'],
          ['apsp', 'All-pairs Shortest Path (Floyd–Warshall)', 'DP over intermediate vertices. O(V³).', 'dsa.floyd-warshall'],
          ['knapsack-01-dp', '0/1 Knapsack (DP)', 'Items can’t be split; dp[i][w] table.', 'dsa.knapsack-01'],
          ['tsp-dp', 'Travelling Salesperson (DP)', 'Held–Karp bitmask DP in O(n²2ⁿ).', 'dsa.tsp'],
          ['lcs', 'Longest Common Subsequence', 'Classic 2-D DP on two strings.', 'dsa.lcs'],
          ['mcm', 'Matrix Chain Multiplication', 'Find the cheapest parenthesization.', 'dsa.mcm']
        ] },
        { name: 'Unit IV · Backtracking, Branch & Bound, Complexity', terms: [
          ['backtracking', 'Backtracking: General Method', 'Build solutions step by step; undo when a constraint fails.', 'dsa.backtracking'],
          ['n-queens', 'N-Queens Problem', 'Place N queens so none attack each other.', 'dsa.n-queens'],
          ['knapsack-bt', '0/1 Knapsack (Backtracking)', 'Explore include/exclude with bounding.'],
          ['subset-sum', 'Sum of Subsets & Graph Colouring', 'Classic backtracking problems.', 'dsa.subsets'],
          ['branch-bound', 'Branch and Bound: General Method', 'Explore a state-space tree, pruning with bounds (FIFO, LIFO, LC).', 'dsa.branch-bound'],
          ['knapsack-bb', '0/1 Knapsack (Branch & Bound)', 'Use upper bounds to prune nodes.'],
          ['tsp-bb', 'Travelling Salesperson (Branch & Bound)', 'Reduced cost matrix gives lower bounds.'],
          ['lower-bound', 'Lower Bound Theory', 'The minimum work any algorithm needs for a problem.'],
          ['decision-trees-ada', 'Decision Trees (Comparison Lower Bound)', 'Comparison sorting needs Ω(n log n).'],
          ['p-np', 'P, NP, NP-complete & NP-hard', 'Classes of problems by how hard they are to solve or verify.', 'dsa.p-np'],
          ['reductions', 'Polynomial-time Reductions', 'Showing one problem is at least as hard as another.']
        ] },
        { name: 'ADA Lab', terms: [
          ['lab-mst', 'Minimum Cost Spanning Tree Program', 'Implement Prim’s / Kruskal’s.', 'dsa.mst'],
          ['lab-tsp', 'Travelling Salesperson Program', 'Brute force / DP implementation.', 'dsa.tsp'],
          ['lab-dag-longest', 'Longest Path in a DAG', 'Topological order + DP.', 'dsa.topological-sort'],
          ['lab-k-edges', 'Shortest Path with Exactly k Edges', 'DP over number of edges.'],
          ['lab-edge-disjoint', 'Maximum Edge-disjoint Paths', 'Solved with max-flow.', 'dsa.max-flow'],
          ['lab-knapsack', '0/1 Knapsack using DP', 'Bottom-up table implementation.', 'dsa.knapsack-01'],
          ['lab-traversals', 'Tree Traversal Algorithms', 'In/pre/post/level order.', 'dsa.tree-traversals'],
          ['lab-nqueens', 'N-Queens Program', 'Backtracking implementation.', 'dsa.n-queens']
        ] }
      ]
    },
    {
      id: 'coa', name: 'Computer Architecture and Organization', short: 'COA', code: 'PCC-206', kind: 'core', lang: 'text', icon: '🧠',
      desc: 'Logic blocks, ISA, RISC/CISC, addressing modes, CPU datapath, control unit, pipelining, memory hierarchy, cache and parallelism.',
      units: [
        { name: 'Unit I · Logic & Computer Basics', terms: [
          ['logic-blocks', 'Combinational & Sequential Logic Blocks', 'Adders, MUX, encoders, decoders; latches, flip-flops, registers, counters.', 'de.mux'],
          ['stored-program', 'Stored Program Concept (Von Neumann)', 'Instructions and data share the same memory.'],
          ['harvard', 'Von Neumann vs Harvard Architecture', 'Shared vs separate memories for instructions and data.'],
          ['flynn', 'Flynn’s Classification', 'SISD, SIMD, MISD, MIMD.'],
          ['multilevel-view', 'Multilevel View of a Machine', 'Digital logic → microarchitecture → ISA → OS → high-level language.'],
          ['functional-units', 'Functional Units (CPU, Memory, I/O)', 'Basic organization of a computer and its buses.'],
          ['bus-structure', 'Bus Structure', 'Address, data and control buses connecting components.'],
          ['performance-metrics', 'Performance Metrics: MIPS, MFLOPS, CPI', 'CPU time = instructions × CPI × clock period.']
        ] },
        { name: 'Unit II · Instruction Set Architecture', terms: [
          ['isa', 'Instruction Set Architecture', 'The interface between hardware and software: instructions, registers, modes.'],
          ['risc-cisc', 'RISC vs CISC', 'Few simple fixed-length instructions vs many complex variable ones.'],
          ['addressing-modes', 'Addressing Modes', 'Register, immediate, direct, indirect, indexed, relative, base.'],
          ['instruction-types', 'Operations in the Instruction Set', 'Arithmetic/logical, data transfer and control flow instructions.'],
          ['instruction-formats', 'Instruction Formats (Fixed, Variable, Hybrid)', 'Layout of opcode and operand fields; 0/1/2/3-address instructions.'],
          ['8086', 'Intel 8086 Basics', '16-bit processor: registers, segments, BIU/EU, addressing.'],
          ['assembly', 'Assembly Language Basics (MOV, ADD, JMP)', 'Human-readable machine instructions.'],
          ['simulation', 'Simulation with Assemblers/Simulators', 'Running assembly programs on an emulator (e.g. MASM/emu8086).']
        ] },
        { name: 'Unit III · CPU, Control & Memory Hierarchy', terms: [
          ['cpu-types', 'CPU Architecture Types', 'Accumulator, register, stack and memory-register based CPUs.'],
          ['datapath', 'Datapath of a Register-based CPU', 'Registers, ALU and buses that move and process data.'],
          ['fetch-decode-execute', 'Fetch–Decode–Execute Cycle', 'The instruction cycle every CPU repeats.'],
          ['microinstruction', 'Microinstruction Sequencing', 'Ordering micro-operations inside the control unit.'],
          ['control-unit', 'Hardwired vs Microprogrammed Control Unit', 'Fixed logic vs control memory of microinstructions.'],
          ['pipelining', 'Pipelining', 'Overlap stages of several instructions to raise throughput.'],
          ['hazards', 'Pipeline Hazards', 'Structural, data and control hazards; forwarding and stalls.'],
          ['memory-hierarchy', 'Memory Hierarchy & Locality', 'Registers → cache → RAM → disk; faster is smaller and costlier.'],
          ['memory-parameters', 'Access Time, Cycle Time, Cost per Bit', 'Metrics that differ across hierarchy levels.'],
          ['ram-rom', 'RAM & ROM Organization', 'SRAM, DRAM; ROM, PROM, EPROM, EEPROM, Flash.'],
          ['memory-expansion', 'Memory Expansion', 'Combining chips to increase word size or capacity.'],
          ['cache', 'Cache Memory', 'Small fast memory holding recently used data.'],
          ['cache-mapping', 'Cache Mapping: Direct, Associative, Set-associative', 'How memory blocks are placed into cache lines.'],
          ['cache-replacement', 'Cache Replacement & Write Policies', 'LRU/FIFO; write-through vs write-back.'],
          ['hit-ratio', 'Hit Ratio & Effective Access Time', 'EAT = h·Tc + (1 − h)·Tm.']
        ] },
        { name: 'Unit IV · Parallelism, Basic Computer & Interrupts', terms: [
          ['parallelism-goals', 'Goals of Parallelism', 'Exploit concurrency to increase throughput.'],
          ['amdahl', 'Amdahl’s Law', 'Speedup = 1 / ((1 − p) + p/s) — limited by the serial part.'],
          ['ilp', 'Instruction-level Parallelism & Superscalar', 'Multiple instructions issued per cycle.'],
          ['multiprocessor', 'Processor-level Parallelism (Multiprocessors)', 'Several CPUs/cores sharing work; SMP, multicore.'],
          ['instruction-codes', 'Instruction Codes & Computer Registers', 'AC, DR, AR, PC, IR, TR in the Mano basic computer.'],
          ['timing-control', 'Timing and Control', 'Sequence counter and timing signals drive micro-operations.'],
          ['instruction-cycle', 'Instruction Cycle & Types of Instructions', 'Memory-reference, register-reference and I/O instructions.'],
          ['control-memory', 'Control Memory & Address Sequencing', 'Microprogram storage and next-address logic.'],
          ['microinstruction-format', 'Micro-instruction Formats & Sequencer', 'Fields of a microinstruction and the sequencer.'],
          ['stack-organization', 'Stack Organization', 'Register and memory stacks; push/pop; RPN evaluation.'],
          ['interrupts', 'Types of Interrupts', 'Hardware, software, external, internal; ISR and vectored interrupts.'],
          ['io-techniques', 'I/O Techniques: Programmed, Interrupt-driven, DMA', 'Ways of transferring data between CPU and devices.']
        ] }
      ]
    },
    {
      id: 'pa', name: 'Predictive Analytics', short: 'Predictive Analytics', code: 'PCC-208', kind: 'core', lang: 'python', icon: '📈',
      desc: 'Regression, classification, trees, data transformation, variable selection, regularization and validation.',
      units: [
        { name: 'Unit I · Foundations & Regression', terms: [
          ['analytics-lifecycle', 'Analytics Life Cycle', 'Business understanding → data → model → evaluation → deployment.'],
          ['predictive-analytics', 'Introduction to Predictive Analytics', 'Using historical data to predict future outcomes.'],
          ['matrix-notation', 'Matrix Notation for Models', 'y = Xβ + ε in matrix form.'],
          ['model-method-feature', 'Model, Method & Feature Selection', 'Choosing the model type, the estimation method and inputs.'],
          ['covariance', 'Covariance & Correlation', 'Joint variability and its normalized version.'],
          ['anova', 'ANOVA', 'Compares means of several groups using variance.'],
          ['slr', 'Simple Linear Regression', 'One predictor: y = β₀ + β₁x.', 'aiml.linear-regression'],
          ['ols', 'OLS & Model Diagnostics', 'Ordinary least squares; residual plots, R², t-tests.'],
          ['ols-assumptions', 'OLS Assumptions', 'Linearity, independence, homoscedasticity, normal errors, no multicollinearity.'],
          ['dummy-vars', 'Dummy Variables', '0/1 columns representing categories.'],
          ['multivariate', 'Multivariate Regression', 'Several predictors in one model.'],
          ['wls', 'Weighted Least Squares', 'Weights observations to handle unequal variance.'],
          ['glm', 'Generalized Linear Models', 'Link function + exponential-family distribution (logistic, Poisson).']
        ] },
        { name: 'Unit II · Classification & Trees', terms: [
          ['binomial-logit', 'Binomial Logistic Regression', 'Two-class probability model.', 'aiml.logistic-regression'],
          ['multinomial-logit', 'Multinomial Logistic Regression', 'Extends logistic regression to many classes (softmax).'],
          ['lda', 'Linear Discriminant Analysis', 'Linear boundary assuming Gaussian classes with equal covariance.'],
          ['qda', 'Quadratic Discriminant Analysis', 'Allows each class its own covariance → curved boundary.'],
          ['regression-trees', 'Regression Trees & Issues', 'Trees predicting numbers; overfitting and instability.'],
          ['classification-trees', 'Classification Trees', 'Trees predicting classes.', 'aiml.decision-tree'],
          ['pruning', 'Pruning Trees', 'Removing branches to reduce overfitting (cost-complexity).'],
          ['bootstrap-bagging', 'Bootstrap Aggregation (Bagging)', 'Average many trees trained on resamples.', 'aiml.ensembles'],
          ['rf-pa', 'Random Forest Models', 'Bagging + random feature subsets.', 'aiml.random-forest']
        ] },
        { name: 'Unit III · Data Pre-processing & Transformations', terms: [
          ['variable-types', 'Variable Types', 'Nominal, ordinal, interval, ratio; numeric vs categorical.'],
          ['dummy-transform', 'Categorical to Dummy Variables', 'One-hot encoding.', 'aiml.encoding'],
          ['polynomial-features', 'Polynomial Transformations', 'Add x², x³ terms to capture curves.'],
          ['box-cox', 'Box-Cox Transformation', 'A power transform that makes data more normal.'],
          ['log-elasticity', 'Log & Elasticity Models', 'Log-log models give elasticities (% change per % change).'],
          ['logit-transform', 'Logit Transformation', 'log(p/(1 − p)) maps probabilities to the real line.'],
          ['count-models', 'Count Data Models', 'Poisson and negative binomial regression.'],
          ['centering', 'Centering & Standardization', 'Subtract the mean; divide by standard deviation.', 'aiml.feature-scaling'],
          ['rank-transform', 'Rank Transformations', 'Replace values with their ranks.'],
          ['lagging', 'Lagging Data (Causal Models)', 'Use past values as predictors in time-based data.'],
          ['data-reduction', 'Data Reduction', 'Reducing variables or records while keeping information.']
        ] },
        { name: 'Unit IV · Variable Selection, Regularization & Validation', terms: [
          ['dimensionality-issues', 'Dimensionality Issues (Curse of Dimensionality)', 'Too many features make data sparse and models overfit.'],
          ['multicollinearity', 'Multicollinearity & VIF', 'Highly correlated predictors inflate coefficient variance.'],
          ['variable-selection', 'Variable Selection Methods', 'Filter, wrapper and embedded methods.'],
          ['stepwise', 'Stepwise Methods', 'Forward, backward and stepwise selection using AIC/BIC/p-values.'],
          ['regularization', 'Regularization (Shrinkage)', 'Penalize large coefficients to reduce overfitting.', 'aiml.regularization'],
          ['ridge', 'Ridge Regression (L2)', 'Adds λΣβ² penalty; shrinks coefficients.', 'aiml.regularization'],
          ['lasso', 'LASSO (L1)', 'Adds λΣ|β| penalty; can set coefficients to zero.', 'aiml.regularization'],
          ['pcr', 'Principal Components Regression', 'Regression on principal components.'],
          ['pls', 'Partial Least Squares', 'Components chosen to explain both X and y.'],
          ['ml-overview-pa', 'Machine Learning Overview', 'How ML relates to statistical modelling.'],
          ['error-measures', 'Error Measures', 'MSE, RMSE, MAE, MAPE; accuracy, AUC.'],
          ['cross-validation', 'Cross-validation', 'k-fold and leave-one-out to estimate test error.', 'aiml.cross-validation']
        ] }
      ]
    },
    {
      id: 'aies', name: 'Applied Artificial Intelligence and Expert Systems', short: 'Applied AI', code: 'PCC-210', kind: 'core', lang: 'python', icon: '🧩',
      desc: 'AI history, knowledge representation, logic, LISP/PROLOG, fuzzy and probabilistic reasoning, search, matching and expert systems — with the AI lab.',
      units: [
        { name: 'Unit I · Introduction & Logic', terms: [
          ['ai-history', 'History & Definition of AI', 'From the 1956 Dartmouth workshop to deep learning and LLMs.', 'aiml.what-is-ai'],
          ['turing-test', 'Turing Test', 'A machine passes if a human can’t tell it from a person in conversation.'],
          ['cognitive-emulation', 'Emulation of Human Cognitive Process', 'Building systems that mimic perception, reasoning and learning.'],
          ['knowledge-search', 'Knowledge–Search Trade-off', 'More stored knowledge means less search, and vice versa.'],
          ['stored-knowledge', 'Stored Knowledge & Elementary Knowledge', 'Facts and rules a system holds.'],
          ['semantic-nets', 'Semantic Networks', 'Graphs of concepts linked by labelled relations (is-a, has-a).'],
          ['modelling-view', 'Abstract View of Modelling', 'Representing the world with symbols and rules.'],
          ['computational-logic', 'Computational Logic', 'Using logic for automated reasoning.'],
          ['compound-statements', 'Compound Statements & Connectives', 'Analyzing statements built with ∧, ∨, ¬, →.', 'dm.logical-connectives'],
          ['predicate-logic', 'Predicate (First-order) Logic', 'Logic with predicates, variables and quantifiers.'],
          ['knowledge-organization', 'Knowledge Organization & Manipulation', 'Structuring knowledge for efficient inference.'],
          ['knowledge-acquisition', 'Knowledge Acquisition', 'Extracting knowledge from experts and data.']
        ] },
        { name: 'Unit II · AI Programming & Logics', terms: [
          ['lisp', 'Introduction to LISP', 'List-processing language used in early AI.'],
          ['lisp-syntax', 'LISP Syntax & Numerical Functions', 'Prefix S-expressions like (+ 2 3); car, cdr, cons.'],
          ['lisp-vs-prolog', 'LISP vs PROLOG', 'Functional list processing vs logic programming.'],
          ['prolog', 'PROLOG Basics', 'Facts, rules and queries solved by unification and backtracking.'],
          ['lisp-io-vars', 'I/O & Local Variables in LISP', 'read, print, let.'],
          ['lisp-recursion', 'Iteration & Recursion in LISP', 'do loops and recursive functions.'],
          ['property-lists', 'Property Lists & Arrays', 'Attaching properties to symbols; array functions.'],
          ['wff', 'Formal Symbolic Logic & WFFs', 'Well-formed formulas and their properties.'],
          ['non-deductive', 'Non-deductive Inference Methods', 'Abduction, induction and analogy.'],
          ['tms', 'Truth Maintenance Systems', 'Track justifications so beliefs can be revised.'],
          ['default-reasoning', 'Default Reasoning & Closed-world Assumption', 'Assume typical facts; treat unknown as false.'],
          ['modal-temporal', 'Modal and Temporal Logic', 'Logic of necessity/possibility and of time.']
        ] },
        { name: 'Unit III · Reasoning, Representation & Search', terms: [
          ['fuzzy-logic', 'Fuzzy Logic Concepts', 'Truth values between 0 and 1 for vague concepts.', 'soft.fuzzy-sets'],
          ['probabilistic-reasoning', 'Probabilistic Reasoning', 'Reasoning under uncertainty with probabilities.'],
          ['bayesian-inference', 'Bayesian Probabilistic Inference & Networks', 'Updating beliefs with Bayes’ rule; Bayesian networks.'],
          ['dempster-shafer', 'Dempster–Shafer Theory', 'Belief and plausibility functions for uncertain evidence.'],
          ['possible-worlds', 'Possible World Representation', 'Modelling uncertainty as sets of possible worlds.'],
          ['adhoc-methods', 'Ad-hoc Methods (Certainty Factors)', 'Heuristic confidence values like in MYCIN.'],
          ['frames', 'Frames & Related Structures', 'Slot-filler structures representing stereotyped objects.'],
          ['scripts', 'Scripts', 'Structures for stereotyped event sequences.'],
          ['oo-representation', 'Object-oriented Representation', 'Classes, messages and methods for knowledge.'],
          ['search-problems', 'Search Problems & State Space', 'States, actions, goal test and path cost.'],
          ['uninformed-search', 'Uninformed (Blind) Search', 'BFS, DFS, uniform cost, depth-limited, iterative deepening.', 'aiml.uninformed-search'],
          ['informed-search', 'Informed (Heuristic) Search', 'Best-first, greedy, A*, hill climbing.', 'aiml.a-star'],
          ['and-or-graphs', 'AND–OR Graphs & AO*', 'Search where some subproblems must all be solved.'],
          ['adversarial', 'Adversarial Search: Minimax & Alpha-beta', 'Game-playing search with pruning.', 'aiml.minimax']
        ] },
        { name: 'Unit IV · Matching & Expert Systems', terms: [
          ['matching', 'Matching Techniques & Need for Matching', 'Comparing patterns with facts in rule-based systems.'],
          ['partial-fuzzy-matching', 'Partial & Fuzzy Matching', 'Matching with incomplete or approximate data.'],
          ['rete', 'RETE Matching Algorithm', 'Efficient pattern matching for production systems.'],
          ['indexing-retrieval', 'Indexing & Retrieval Techniques', 'Organizing knowledge in memory for fast access.'],
          ['perception', 'Perception & Communication', 'How AI systems sense and exchange information.'],
          ['expert-system', 'Expert Systems', 'Programs that mimic human experts using a knowledge base and inference engine.'],
          ['es-architecture', 'Expert System Architecture', 'Knowledge base, inference engine, working memory, explanation facility, UI.'],
          ['forward-backward', 'Forward & Backward Chaining', 'Data-driven vs goal-driven inference.'],
          ['es-examples', 'Examples: MYCIN, DENDRAL, XCON', 'Classic expert systems in medicine, chemistry and configuration.'],
          ['linguistics', 'Overview of Linguistics & Parsing', 'Syntax, semantics and parsing for NLP.'],
          ['semantic-analysis', 'Semantic Analysis & Representation', 'Extracting meaning into structured forms.'],
          ['nlg', 'Natural Language Generation', 'Producing text from structured data.']
        ] },
        { name: 'AI Lab', terms: [
          ['lab-dfs-bfs', 'DFS & BFS Programs', 'Graph search implementations.', 'dsa.bfs'],
          ['lab-tsp-ai', 'Travelling Salesman Program', 'Solve TSP with search/heuristics.', 'dsa.tsp'],
          ['lab-sa', 'Simulated Annealing', 'Probabilistic optimization accepting worse moves early.'],
          ['lab-wumpus', 'Wumpus World', 'Knowledge-based agent in a grid world.'],
          ['lab-8puzzle', '8-Puzzle Problem', 'Solve with BFS or A* and Manhattan distance.'],
          ['lab-hanoi-ai', 'Towers of Hanoi', 'Recursive solution.', 'dsa.tower-of-hanoi'],
          ['lab-astar', 'A* Algorithm', 'f(n) = g(n) + h(n) search.', 'aiml.a-star'],
          ['lab-hill-climbing', 'Hill Climbing', 'Greedy local search; local maxima problem.'],
          ['lab-bot', 'College Information Chatbot', 'Rule-based or LLM bot answering questions about you/college.']
        ] }
      ]
    },
    {
      id: 'apt2', name: 'Aptitude & Reasoning – II', short: 'Aptitude II', code: 'BSC-202', kind: 'maths', lang: 'text', icon: '🧮',
      desc: 'Advanced quant, data interpretation and logical reasoning for placements and CAT/GATE-style exams.',
      units: [
        { name: 'Unit I · Quant I', terms: [
          ['average', 'Average', 'Sum ÷ count; replacing items changes the average.'],
          ['ages', 'Problems on Ages', 'Set equations from present/past/future ages.'],
          ['surds-indices', 'Surds & Indices', 'Laws of exponents and simplifying roots.'],
          ['percentages', 'Percentages', 'Percentage change, successive change, comparisons.'],
          ['numbers', 'Problems on Numbers', 'Equations from number relationships.']
        ] },
        { name: 'Unit II · Quant II', terms: [
          ['logarithms', 'Logarithms', 'log(ab) = log a + log b; change of base.'],
          ['pnc-apt', 'Permutation & Combination', 'Counting arrangements and selections.'],
          ['probability-apt', 'Probability', 'Coins, dice, cards and balls problems.'],
          ['time-work', 'Time & Work (Pipes & Cisterns)', 'Work rates add: 1/A + 1/B.'],
          ['ratio-proportion', 'Ratio & Proportion', 'Comparing quantities; partnership.'],
          ['mixtures', 'Mixtures & Alligation', 'Rule of alligation for mixing two items.'],
          ['volume', 'Volume & Surface Area (3D)', 'Cubes, cylinders, cones, spheres.'],
          ['boats-streams', 'Boats & Streams', 'Downstream = u + v, upstream = u − v.']
        ] },
        { name: 'Unit III · Data Interpretation', terms: [
          ['pie-chart', 'Pie Charts', 'Percent/degree shares of a whole (360°).'],
          ['venn-di', 'Venn Diagram DI', 'Overlapping sets in data problems.'],
          ['mixed-di', 'Mixed Graph DI', 'Combining tables and charts in one set.']
        ] },
        { name: 'Unit IV · Logical Reasoning', terms: [
          ['coding-decoding', 'Coding–Decoding', 'Find the rule used to code words or numbers.'],
          ['calendars', 'Calendars', 'Odd days method to find the day of a date.'],
          ['venn-reasoning', 'Venn Diagrams (Reasoning)', 'Represent relationships between classes.'],
          ['seating', 'Seating Arrangement', 'Linear and circular arrangements from clues.'],
          ['syllogism', 'Syllogism', 'Draw valid conclusions from statements.'],
          ['math-operations', 'Mathematical Operations', 'Symbol substitution and equation balancing.']
        ] }
      ]
    },
    {
      id: 'constitution', name: 'Indian Constitution (Audit)', short: 'Constitution', code: 'AU-202', kind: 'audit', lang: 'text', icon: '⚖',
      desc: 'Philosophy and features of the Constitution, federalism, organs of government and fundamental rights.',
      units: [
        { name: 'Unit I · Philosophy', terms: [
          ['salient-features', 'Salient Features of the Constitution', 'Longest written constitution, federal with unitary bias, parliamentary system.'],
          ['preamble', 'Preamble', 'Sovereign, socialist, secular, democratic republic; justice, liberty, equality, fraternity.'],
          ['nature', 'Nature of the Indian Constitution', 'Partly rigid, partly flexible; quasi-federal.'],
          ['amendment', 'Amendment Procedure (Article 368)', 'Simple majority, special majority, special majority + state ratification.']
        ] },
        { name: 'Unit II · Federal Structure', terms: [
          ['federalism', 'Federal Structure', 'Division of power between Union and States.'],
          ['legislative-powers', 'Distribution of Legislative Powers', 'Union, State and Concurrent Lists (Seventh Schedule).'],
          ['financial-powers', 'Distribution of Financial Powers', 'Taxation powers, Finance Commission, grants-in-aid.']
        ] },
        { name: 'Unit III · Organs of Governance', terms: [
          ['president', 'President: Qualifications & Powers', 'Head of state; executive, legislative, emergency powers.'],
          ['governor', 'Governor: Qualifications & Powers', 'Head of a state, appointed by the President.'],
          ['parliament', 'Parliament: Composition & Qualifications', 'Lok Sabha + Rajya Sabha + President; disqualifications.'],
          ['judiciary', 'Judiciary: Appointment, Tenure & Removal', 'Supreme Court and High Court judges; impeachment process.']
        ] },
        { name: 'Unit IV · Fundamental Rights & Duties', terms: [
          ['fr-origin', 'Origin & Need for Fundamental Rights', 'Protect individuals against state power (Part III).'],
          ['right-equality', 'Right to Equality (Art. 14–18)', 'Equality before law, no discrimination, abolition of untouchability.'],
          ['right-freedom', 'Right to Freedom (Art. 19–22)', 'Speech, assembly, movement, profession; life and personal liberty.'],
          ['right-exploitation', 'Right against Exploitation (Art. 23–24)', 'Bans trafficking, forced labour and child labour.'],
          ['right-religion', 'Right to Freedom of Religion (Art. 25–28)', 'Freedom of conscience and practice.'],
          ['cultural-rights', 'Cultural & Educational Rights (Art. 29–30)', 'Protect minorities’ culture and institutions.'],
          ['fundamental-duties', 'Fundamental Duties (Art. 51A)', '11 duties of citizens, added by the 42nd and 86th amendments.']
        ] }
      ]
    }
  ]
};
