// Semester 2 — B.Tech CSE (AI)
export default {
  sem: 2,
  title: 'Semester 2 — Data Structures & Python',
  note: 'You also take whichever of Physics / Basics of Electrical & Electronics Engg. and Workshop / Web Designing you did not take in Semester 1 — they are listed under Semester 1.',
  courses: [
    {
      id: 'ds-c', name: 'Data Structures Using C', short: 'Data Structures', code: 'CSE-102', kind: 'core', lang: 'c', icon: '🧱',
      desc: 'Pointers refresher, arrays, sparse matrices, stacks, queues, linked lists, trees, heaps and graphs — implemented in C.',
      units: [
        { name: 'Unit I · Introduction', terms: [
          ['pointers-review', 'Pointers in C (Review)', 'Declaring pointers, passing them to functions and using them with arrays.', 'c-prog.pointers'],
          ['dma-review', 'Dynamic Memory Allocation (Review)', 'malloc, calloc, realloc and free — needed to build linked structures.', 'c-prog.dynamic-memory'],
          ['algorithm-def', 'Definition of Algorithm', 'A finite set of precise steps that solves a problem.', 'c-prog.algorithm'],
          ['data-structure', 'Data Structure', 'A way of organizing data in memory so it can be used efficiently.', 'dsa.what-is-ds'],
          ['adt', 'Data Abstraction & ADT', 'An Abstract Data Type defines what operations do, not how they are implemented.', 'dsa.adt'],
          ['linear-nonlinear', 'Linear vs Non-linear Data Structures', 'Linear: elements in sequence (array, list); non-linear: hierarchy/network (tree, graph).', 'dsa.linear-nonlinear'],
          ['performance-analysis', 'Performance Analysis', 'Measuring an algorithm’s time and space requirements.', 'dsa.complexity'],
          ['time-space', 'Time & Space Complexity', 'How running time and memory grow with input size n.', 'dsa.complexity'],
          ['asymptotic', 'Asymptotic Notations (O, Ω, Θ)', 'Upper, lower and tight bounds on growth rate.', 'dsa.big-o']
        ] },
        { name: 'Unit II · Linear Data Structures I', terms: [
          ['array-def', 'Arrays: Definition & Storage', 'Contiguous same-type elements; row-major and column-major storage.', 'dsa.array'],
          ['address-calc', 'Address Calculation in Arrays', 'Row-major: base + ((i × cols) + j) × size.', 'dsa.address-calc'],
          ['sparse-arrays', 'Sparse Arrays / Matrices', 'Matrices with mostly zeros, stored as (row, col, value) triplets.', 'dsa.sparse-matrix'],
          ['sparse-transpose', 'Transpose of a Sparse Matrix', 'Swap row and column in each triplet and re-sort (simple and fast transpose).', 'dsa.sparse-matrix'],
          ['sparse-add-mul', 'Addition & Multiplication of Sparse Matrices', 'Merge triplets by position; multiply matching row/column entries.', 'dsa.sparse-matrix'],
          ['stack', 'Stack', 'A LIFO list where insertion (push) and deletion (pop) happen at the top.', 'dsa.stack'],
          ['stack-apps', 'Applications of Stacks', 'Expression evaluation, recursion, undo, parenthesis matching, backtracking.', 'dsa.stack-applications'],
          ['queue', 'Queue', 'A FIFO list: insert at rear (enqueue), delete from front (dequeue).', 'dsa.queue'],
          ['circular-queue', 'Circular Queue', 'A queue whose rear wraps to the front to reuse empty slots.', 'dsa.circular-queue'],
          ['queue-apps', 'Applications of Queues', 'CPU scheduling, printer spooling, BFS, buffering.', 'dsa.queue'],
          ['expression-eval', 'Expression Evaluation', 'Evaluating postfix expressions with a stack of operands.', 'dsa.postfix-eval'],
          ['maze', 'Mazing Problem', 'Finding a path through a maze using a stack (backtracking).', 'dsa.maze'],
          ['multiple-stacks', 'Multiple Stacks & Queues in One Array', 'Sharing one array between two or more stacks/queues.', 'dsa.multiple-stacks'],
          ['recursion-stack', 'Stacks and Recursion', 'Each recursive call is pushed on the system call stack.', 'dsa.recursion'],
          ['polish', 'Polish Notation (Prefix & Postfix)', 'Operator before (prefix) or after (postfix) the operands — no brackets needed.', 'dsa.infix-postfix'],
          ['infix-to-postfix', 'Infix to Postfix Conversion', 'Use an operator stack and precedence rules (shunting-yard).', 'dsa.infix-postfix'],
          ['infix-to-prefix', 'Infix to Prefix Conversion', 'Reverse the expression, swap brackets, convert to postfix, reverse again.', 'dsa.infix-prefix'],
          ['hanoi', 'Tower of Hanoi', 'Classic recursion problem: 2ⁿ − 1 moves for n disks.', 'dsa.tower-of-hanoi']
        ] },
        { name: 'Unit III · Linear Data Structures II (Linked Lists)', terms: [
          ['linked-list', 'Linked List: Definition', 'Nodes holding data and a pointer to the next node, allocated dynamically.', 'dsa.linked-list'],
          ['linked-stack', 'Linked Stack', 'A stack implemented with a linked list (push/pop at head).', 'dsa.linked-stack-queue'],
          ['linked-queue', 'Linked Queue', 'A queue implemented with front and rear pointers.', 'dsa.linked-stack-queue'],
          ['ll-operations', 'Insertion, Deletion & Traversal', 'Insert/delete at beginning, end and position; traverse to print.', 'dsa.linked-list'],
          ['polynomial-addition', 'Polynomial Addition using Linked Lists', 'Each node holds a coefficient and exponent; merge by exponent.', 'dsa.polynomial-ll'],
          ['seq-vs-linked', 'Sequential vs Linked Allocation', 'Arrays: fast access, fixed size; linked lists: dynamic size, slow access.', 'dsa.array-vs-ll'],
          ['ll-inversion', 'Inversion (Reversal) of a List', 'Reverse pointers using prev, curr and next.', 'dsa.reverse-ll'],
          ['ll-concat-copy', 'Concatenation & Copying of Lists', 'Join two lists by linking the tail; copy node by node.', 'dsa.linked-list'],
          ['circular-ll', 'Circular Linked List', 'The last node points back to the first.', 'dsa.circular-ll'],
          ['doubly-ll', 'Doubly Linked List', 'Each node has prev and next pointers — move both ways.', 'dsa.doubly-ll'],
          ['header-node', 'Header Node', 'A dummy first node that simplifies insertion and deletion.', 'dsa.header-node'],
          ['sparse-dll', 'Sparse Matrix using Linked Lists', 'Represent non-zero elements as linked nodes in rows and columns.', 'dsa.sparse-matrix'],
          ['dynamic-storage', 'Dynamic Storage Management', 'Allocating and freeing nodes from a free list or heap.', 'dsa.dynamic-storage'],
          ['generalized-lists', 'Generalized Lists', 'Lists whose elements can themselves be lists, e.g. (a, (b, c)).', 'dsa.generalized-list'],
          ['list-recursion', 'Recursive Algorithms for Lists', 'Recursive copy and equality comparison of lists.', 'dsa.generalized-list']
        ] },
        { name: 'Unit IV · Non-linear Data Structures', terms: [
          ['tree', 'Tree: Basic Concepts & Terminology', 'Root, parent, child, leaf, sibling, degree, level, height, depth.', 'dsa.tree'],
          ['binary-tree', 'Binary Tree', 'A tree where each node has at most two children.', 'dsa.binary-tree'],
          ['bt-types', 'Full, Complete & Perfect Binary Trees', 'Different shape rules for binary trees.', 'dsa.binary-tree-types'],
          ['bt-representation', 'Binary Tree Representation', 'Array (index 2i+1, 2i+2) or linked nodes.', 'dsa.binary-tree'],
          ['traversals', 'Binary Tree Traversals', 'Inorder (LNR), preorder (NLR), postorder (LRN), level-order.', 'dsa.tree-traversals'],
          ['tree-to-binary', 'Converting a General Tree to a Binary Tree', 'Left-child, right-sibling representation.', 'dsa.tree-to-binary'],
          ['bt-operations', 'Operations on Binary Trees', 'Count nodes/leaves, height, copy, mirror, search.', 'dsa.binary-tree'],
          ['bst', 'Binary Search Tree (BST)', 'Left subtree < node < right subtree — supports search, insert, delete.', 'dsa.bst'],
          ['heap', 'Heaps', 'A complete binary tree where each parent ≥ (max-heap) or ≤ (min-heap) its children.', 'dsa.heap'],
          ['heapsort', 'Heap Sort', 'Build a max-heap, then repeatedly move the max to the end. O(n log n).', 'dsa.heap-sort'],
          ['threaded-bt', 'Threaded Binary Trees', 'Null pointers replaced by threads to inorder predecessor/successor.', 'dsa.threaded-bt'],
          ['graph', 'Graphs: Terminology', 'Vertices and edges; directed/undirected, weighted, degree, path, cycle.', 'dsa.graph'],
          ['graph-rep', 'Graph Representation', 'Adjacency matrix vs adjacency list.', 'dsa.graph-representation'],
          ['bfs', 'Breadth-First Search (BFS)', 'Visit level by level using a queue.', 'dsa.bfs'],
          ['dfs', 'Depth-First Search (DFS)', 'Go deep first using recursion or a stack.', 'dsa.dfs'],
          ['mst', 'Minimum Cost Spanning Tree', 'A spanning tree with the least total edge weight (Prim, Kruskal).', 'dsa.mst']
        ] },
        { name: 'DS Lab', terms: [
          ['lab-2d-search', 'Search in a 2-D Array (Linear Search)', 'Scan every row and column for the key.', 'dsa.linear-search'],
          ['lab-binary-search', 'Binary Search (Iterative & Recursive)', 'Halve the search range each step on sorted data.', 'dsa.binary-search'],
          ['lab-quicksort', 'Quick Sort (Iterative & Recursive)', 'Partition around a pivot and sort both halves.', 'dsa.quick-sort'],
          ['lab-strings', 'String Operations', 'Length, concatenation, reverse, compare.', 'c-prog.string-programs'],
          ['lab-swap', 'Swap: Call by Value vs Reference', 'Show why only pointers change the caller’s values.', 'c-prog.call-by-reference'],
          ['lab-bst', 'BST Insertion & Deletion', 'Implement a binary search tree with all three deletion cases.', 'dsa.bst'],
          ['lab-ll', 'Linked List Operations', 'Insert, delete, update and reverse.', 'dsa.linked-list'],
          ['lab-file', 'File Operations', 'Insert, delete and update records in a file.', 'c-prog.file-handling']
        ] }
      ]
    },
    {
      id: 'py-oop', name: 'Object-Oriented Concepts and Python Programming', short: 'Python & OOP', code: 'CSE-104', kind: 'core', lang: 'python', icon: '🐍',
      desc: 'Python fundamentals, files, lists/tuples/dicts, functions, classes and OOP, exceptions and Tkinter GUIs.',
      units: [
        { name: 'Unit I · Basics, Control Flow, Strings & Files', terms: [
          ['data-types', 'Concept of Data Types', 'int, float, complex, bool, str, list, tuple, set, dict, None.', 'python.data-types'],
          ['variables', 'Variables & Assignment', 'Names that refer to objects; multiple and augmented assignment.', 'python.variables'],
          ['immutable', 'Immutable Variables', 'int, float, str, tuple cannot be changed in place.', 'python.mutable-immutable'],
          ['numeric-types', 'Numerical Types', 'int (unlimited size), float (double precision), complex (a+bj).', 'python.data-types'],
          ['arith-ops', 'Arithmetic Operators & Expressions', '+, -, *, /, //, %, ** and operator precedence.', 'python.operators'],
          ['comments', 'Comments & Docstrings', '# for comments, """triple quotes""" for documentation.', 'python.syntax'],
          ['error-messages', 'Understanding Error Messages', 'Reading tracebacks: SyntaxError, NameError, TypeError, IndexError.', 'python.errors'],
          ['conditions', 'Conditions & Boolean Logic', 'Comparison operators produce True/False; combine with and/or/not.', 'python.conditionals'],
          ['ranges', 'range()', 'Generates sequences: range(start, stop, step).', 'python.loops'],
          ['if-else', 'if, elif, else', 'Choose which block runs based on conditions.', 'python.conditionals'],
          ['for-while', 'for and while Loops', 'Iterate over sequences or repeat while a condition holds.', 'python.loops'],
          ['short-circuit', 'Short-circuit (Lazy) Evaluation', 'and/or stop as soon as the result is known.', 'python.operators'],
          ['strings', 'Strings', 'Immutable sequences of Unicode characters.', 'python.strings'],
          ['string-indexing', 'Indexing & Slicing', 's[i], s[-1], s[start:stop:step].', 'python.strings'],
          ['string-methods', 'String Manipulation Methods', 'upper, lower, split, join, strip, replace, find, format.', 'python.strings'],
          ['text-files', 'Reading & Writing Text Files', 'open(), read(), readline(), write(), with-statement.', 'python.file-io'],
          ['csv-files', 'Formatted Files (CSV / TSV)', 'The csv module reads and writes comma/tab-separated data.', 'python.file-io'],
          ['os-sys', 'os and sys Modules', 'os: files, folders, paths; sys: argv, path, exit.', 'python.os-sys']
        ] },
        { name: 'Unit II · Lists, Tuples, Dictionaries & Functions', terms: [
          ['lists', 'Lists', 'Ordered, mutable sequences: [1, 2, 3].', 'python.lists'],
          ['list-ops', 'List Operations', 'append, insert, remove, pop, replace by index, slicing, len.', 'python.lists'],
          ['search-sort-lists', 'Searching & Sorting Lists', 'in, index(), sort(), sorted(), key functions.', 'python.lists'],
          ['tuples', 'Tuples', 'Ordered, immutable sequences: (1, 2).', 'python.tuples'],
          ['dicts', 'Dictionaries', 'Key–value maps: {"a": 1}.', 'python.dicts'],
          ['dict-ops', 'Adding/Removing Keys & Traversing Dicts', 'd[k] = v, del, pop, get, keys(), values(), items().', 'python.dicts'],
          ['functions', 'Design with Functions', 'def creates reusable blocks; hide redundancy and complexity.', 'python.functions'],
          ['args-return', 'Arguments & Return Values', 'Functions take parameters and return results (or None).', 'python.functions'],
          ['formal-actual', 'Formal vs Actual Arguments', 'Parameters in the definition vs values passed in the call.', 'python.arguments'],
          ['named-args', 'Named (Keyword) & Default Arguments', 'f(x=1) by name; default values used when omitted.', 'python.arguments']
        ] },
        { name: 'Unit III · Classes & OOP', terms: [
          ['classes-objects', 'Classes and Objects', 'A class is a blueprint; an object is an instance of it.', 'oop.class-object'],
          ['attributes-methods', 'Attributes and Methods', 'Data (attributes) and functions (methods) belonging to objects.', 'python.classes'],
          ['init-self', '__init__ and self', 'The constructor method and the reference to the current object.', 'python.classes'],
          ['data-modeling', 'Design with Classes / Data Modeling', 'Representing real-world entities as classes.', 'oop.class-object'],
          ['persistence', 'Persistent Storage of Objects (pickle)', 'Save and load objects to files with pickle.', 'python.pickle'],
          ['encapsulation', 'Encapsulation & Information Hiding', 'Bundle data with methods; hide internals with _ and __.', 'oop.encapsulation'],
          ['method-signature', 'Method Signature', 'A method’s name and parameter list.', 'oop.method-overloading'],
          ['class-vs-instance', 'Class vs Instance Variables', 'Shared by all objects vs unique to each object.', 'python.classes'],
          ['abstraction', 'Abstraction', 'Showing what an object does, hiding how.', 'oop.abstraction'],
          ['inheritance', 'Inheritance', 'A child class reuses and extends a parent class.', 'oop.inheritance'],
          ['polymorphism', 'Polymorphism', 'One interface, many forms — same method name, different behaviour.', 'oop.polymorphism'],
          ['operator-overloading', 'Operator Overloading (__eq__, __str__, __add__)', 'Define how operators work on your objects with dunder methods.', 'python.dunder'],
          ['abstract-classes', 'Abstract Classes (abc)', 'Classes with abstract methods that subclasses must implement.', 'oop.abstract-class'],
          ['exceptions', 'Exception Handling (try/except/else/finally)', 'Catch and handle runtime errors gracefully.', 'python.exceptions'],
          ['raise-custom', 'raise & Custom Exceptions', 'Throw errors deliberately; define your own exception classes.', 'python.exceptions']
        ] },
        { name: 'Unit IV · GUI with Tkinter', terms: [
          ['gui', 'Graphical User Interfaces', 'Windows, buttons and inputs instead of a text console.'],
          ['event-driven', 'Event-driven Programming', 'Code runs in response to events like clicks and key presses.'],
          ['tkinter', 'tkinter Module', 'Python’s built-in GUI toolkit: Tk(), mainloop().'],
          ['widgets', 'Buttons, Labels & Entry Fields', 'Basic widgets for actions, text display and input.'],
          ['dialogs', 'Dialogs (messagebox, filedialog)', 'Pop-ups for messages and choosing files.'],
          ['widget-attributes', 'Widget Attributes: Size, Font, Colour', 'Configure appearance with options like font, bg, fg, width.'],
          ['layouts', 'Layout Managers: pack, grid, place', 'Arrange widgets automatically or by position.'],
          ['frames', 'Nested Frames', 'Group widgets inside Frame containers for complex layouts.'],
          ['tk-calculator', 'Mini Project: Tkinter Calculator', 'Build a working calculator GUI.']
        ] },
        { name: 'Python Lab', terms: [
          ['lab-basics', 'Building Blocks of a Python Program', 'Variables, conditions, loops, libraries.', 'python.syntax'],
          ['lab-oop', 'OOP Programs', 'Classes, inheritance, polymorphism, abstract classes.', 'oop.class-object'],
          ['lab-pyqt', 'PyQt GUIs', 'Interactive desktop apps with the Qt framework.'],
          ['lab-numpy', 'NumPy: Matrices & Linear Algebra', 'Arrays, dot products, inverse, eigenvalues.', 'python.numpy'],
          ['lab-scipy', 'SciPy for Numerical Computing', 'Integration, optimization, statistics.', 'python.scipy'],
          ['lab-matplotlib', 'Matplotlib Plotting', 'Line, bar, scatter and histogram plots.', 'python.matplotlib'],
          ['lab-ipython', 'Interactive Python (IPython/Jupyter)', 'Run code cell by cell in notebooks.', 'python.jupyter']
        ] }
      ]
    },
    {
      id: 'maths2', name: 'Mathematics-II (Probability & Statistics)', short: 'Maths-II', code: 'BSM-102', kind: 'maths', lang: 'python', icon: '📊',
      desc: 'Probability, random variables, distributions, statistics and hypothesis testing — the base of ML and data science.',
      units: [
        { name: 'Unit I · Discrete Probability', terms: [
          ['probability-basics', 'Probability Basics', 'P(A) = favourable / total outcomes, between 0 and 1.'],
          ['probability-space', 'Probability Spaces', 'Sample space, events and a probability measure (Ω, F, P).'],
          ['conditional-probability', 'Conditional Probability', 'P(A|B) = P(A∩B)/P(B).'],
          ['independent-events', 'Independent Events', 'P(A∩B) = P(A)·P(B).'],
          ['random-variable', 'Random Variables', 'A function that assigns a number to each outcome.'],
          ['discrete-rv', 'Discrete Random Variables & PMF', 'Takes countable values with probability mass function p(x).'],
          ['independent-rv', 'Independent Random Variables', 'The joint distribution equals the product of marginals.'],
          ['expectation', 'Expectation (Mean)', 'E[X] = Σ x·p(x) — the long-run average.'],
          ['sum-rv', 'Sums of Independent Random Variables', 'E[X+Y] = E[X] + E[Y]; Var adds if independent.'],
          ['moments', 'Moments & Moment Generating Function', 'E[Xʳ] describe shape; the MGF generates them.'],
          ['variance', 'Variance & Variance of a Sum', 'Var(X) = E[X²] − (E[X])²; Var(X+Y) = VarX + VarY + 2Cov.'],
          ['correlation-coeff', 'Correlation Coefficient', 'ρ = Cov(X,Y)/(σₓσᵧ), between −1 and 1.'],
          ['chebyshev', 'Chebyshev’s Inequality', 'P(|X − μ| ≥ kσ) ≤ 1/k².'],
          ['binomial-dist', 'Binomial Distribution', 'n independent trials with success probability p: P(X=k) = nCk pᵏ qⁿ⁻ᵏ.'],
          ['multinomial', 'Multinomial Distribution', 'Generalizes binomial to more than two outcomes per trial.'],
          ['poisson-approx', 'Poisson Approximation to Binomial', 'For large n and small p, Binomial ≈ Poisson(λ = np).'],
          ['bernoulli-trials', 'Bernoulli Trials (Infinite Sequences)', 'Repeated independent yes/no experiments; geometric distribution.']
        ] },
        { name: 'Unit II · Continuous & Bivariate Distributions', terms: [
          ['continuous-rv', 'Continuous Random Variables', 'Take any value in an interval; described by a PDF.'],
          ['pdf-cdf', 'Density (PDF) and Distribution (CDF) Functions', 'PDF f(x); CDF F(x) = P(X ≤ x) = ∫ f.'],
          ['normal-dist', 'Normal Distribution', 'Bell curve N(μ, σ²); 68–95–99.7 rule.'],
          ['exponential-dist', 'Exponential Distribution', 'Time between events: f(x) = λe^(−λx), memoryless.'],
          ['gamma-dist', 'Gamma Distribution', 'Generalizes exponential; sum of k exponential variables.'],
          ['bivariate', 'Bivariate Distributions', 'Joint distribution of two random variables f(x, y).'],
          ['marginal', 'Marginal Distributions', 'Distribution of one variable obtained by summing/integrating the other.'],
          ['sum-quotient', 'Distribution of Sums and Quotients', 'Finding the distribution of X+Y or X/Y.'],
          ['conditional-density', 'Conditional Densities', 'f(x|y) = f(x, y)/f(y).'],
          ['bayes-rule', 'Bayes’ Rule', 'P(A|B) = P(B|A)P(A)/P(B) — updates beliefs with evidence.']
        ] },
        { name: 'Unit III · Basic Statistics', terms: [
          ['central-tendency', 'Measures of Central Tendency', 'Mean, median and mode.'],
          ['dispersion', 'Measures of Dispersion', 'Range, quartile deviation, mean deviation, standard deviation.'],
          ['skewness', 'Skewness', 'Asymmetry of a distribution (positive = long right tail).'],
          ['kurtosis', 'Kurtosis', 'Peakedness/tailedness: leptokurtic, mesokurtic, platykurtic.'],
          ['binomial-params', 'Binomial: Mean & Variance', 'Mean np, variance npq.'],
          ['poisson-dist', 'Poisson Distribution', 'Counts of rare events: P(X=k) = e^(−λ)λᵏ/k!, mean = variance = λ.'],
          ['normal-params', 'Normal: Parameters & Z-score', 'Z = (X − μ)/σ to use standard normal tables.'],
          ['correlation', 'Correlation (Karl Pearson)', 'Measures linear relationship between two variables.'],
          ['regression', 'Regression Lines', 'Lines of y on x and x on y; regression coefficients.'],
          ['rank-correlation', 'Spearman’s Rank Correlation', 'ρ = 1 − 6Σd²/(n(n²−1)).'],
          ['least-squares', 'Curve Fitting: Method of Least Squares', 'Minimize the sum of squared errors to fit a curve.'],
          ['fit-line', 'Fitting a Straight Line', 'y = a + bx using normal equations.'],
          ['fit-parabola', 'Fitting a Second-degree Parabola', 'y = a + bx + cx² using three normal equations.'],
          ['fit-general', 'Fitting General Curves (y = abˣ, y = axᵇ)', 'Take logs to turn them into straight-line fits.']
        ] },
        { name: 'Unit IV · Applied Statistics (Tests of Significance)', terms: [
          ['hypothesis', 'Hypothesis Testing Basics', 'Null vs alternative hypothesis, test statistic, decision.'],
          ['errors-types', 'Type I & Type II Errors, Level of Significance', 'Rejecting a true H₀ (α) vs accepting a false H₀ (β).'],
          ['p-value', 'p-value & Critical Region', 'Probability of results at least as extreme as observed if H₀ is true.'],
          ['large-sample', 'Large Sample Tests (Z-test)', 'For n > 30 using the normal distribution.'],
          ['single-proportion', 'Test for Single Proportion', 'Z = (p − P)/√(PQ/n).'],
          ['diff-proportions', 'Test for Difference of Proportions', 'Compare proportions from two samples.'],
          ['single-mean', 'Test for Single Mean', 'Z = (x̄ − μ)/(σ/√n).'],
          ['diff-means', 'Test for Difference of Means', 'Compare means of two large samples.'],
          ['diff-sd', 'Test for Difference of Standard Deviations', 'Compare spreads of two large samples.'],
          ['t-test', 'Small Samples: Student’s t-test', 't = (x̄ − μ)/(s/√n) with n − 1 degrees of freedom.'],
          ['t-test-two', 't-test for Difference of Means', 'Compare two small-sample means (pooled variance).'],
          ['t-test-correlation', 't-test for Correlation Coefficient', 'Test whether a sample correlation is significant.'],
          ['f-test', 'F-test (Ratio of Variances)', 'F = s₁²/s₂² compares two variances.'],
          ['chi-square-fit', 'Chi-square Test: Goodness of Fit', 'χ² = Σ(O − E)²/E compares observed and expected frequencies.'],
          ['chi-square-independence', 'Chi-square Test: Independence of Attributes', 'Uses a contingency table to test if two attributes are related.']
        ] }
      ]
    },
    {
      id: 'hv-soft', name: 'Human Values and Soft Skills', short: 'Human Values', code: 'HSMC-102', kind: 'humanities', lang: 'text', icon: '🤝',
      desc: 'Values, relationships, writing skills and business communication — CV, SOP, letters and presentations.',
      units: [
        { name: 'Unit I · Values & Education', terms: [
          ['hv-motivation', 'Motivation & Objectives of Human Values', 'Why value education matters alongside technical skills.'],
          ['purpose-education', 'Purpose of Education', 'Developing understanding, skills and values for a fulfilling life.'],
          ['skills-values', 'Complementarity of Skills and Values', 'Skills tell how to do; values tell what is worth doing.'],
          ['education-gaps', 'Where the Current Education System Falls Short', 'Focus on marks over understanding and values.'],
          ['peer-pressure', 'Peer & Social Pressure', 'Influence of others on choices in different areas of life.'],
          ['competition', 'Concept of Competition', 'Healthy competition vs comparison and stress.'],
          ['time-management', 'Time Management', 'Prioritizing (Eisenhower matrix), planning and avoiding procrastination.']
        ] },
        { name: 'Unit II · Harmony & Relationships', terms: [
          ['preconditioning', 'Preconditioning', 'Beliefs we absorb without examining them.'],
          ['natural-acceptance', 'Natural Acceptance', 'Our innate sense of what is right, used to verify values.'],
          ['relationships', 'Understanding Relationships', 'Trust and respect as the foundation of relationships.'],
          ['anger', 'Dealing with Anger', 'Recognizing triggers and responding instead of reacting.'],
          ['nine-values', 'Nine Universal Values in Relationships', 'Trust, respect, affection, care, guidance, reverence, glory, gratitude, love.'],
          ['prosperity', 'Concept of Prosperity', 'Feeling of having more than enough, beyond just wealth.'],
          ['society', 'Idea of Society & Decentralization', 'Decentralized politics, economics, education and justice vs centralized systems.'],
          ['balance-nature', 'Balance in Nature', 'Mutual fulfilment among all orders of nature.']
        ] },
        { name: 'Unit III · Writing Skills', terms: [
          ['good-writing', 'Techniques of Good Writing', 'Clarity, coherence, conciseness and correctness.'],
          ['self-assessment', 'Writing Self-assessment Tasks', 'Reflecting on your own strengths and areas to improve.'],
          ['precis', 'Précis Writing', 'Condensing a passage to about one-third, keeping key ideas.'],
          ['note-making', 'Note Making', 'Organizing information into headings, sub-points and abbreviations.'],
          ['paragraph-essay', 'Paragraph & Essay Writing', 'Topic sentence, supporting details, conclusion.'],
          ['article-writing', 'Article Writing & Summarizing', 'Writing for publications with a title, intro, body, conclusion.']
        ] },
        { name: 'Unit IV · Business Communication', terms: [
          ['letters', 'Formal and Informal Letters', 'Format, tone and structure of letters.'],
          ['sop', 'Statement of Purpose (SOP)', 'An essay explaining your goals for higher-study applications.'],
          ['cv', 'Job Application & CV / Résumé', 'Summary, education, skills, projects, achievements — ATS-friendly.'],
          ['presentations', 'PowerPoint Presentations', 'Clear slides: one idea per slide, few words, visuals.'],
          ['blog-newsletter', 'Blog Writing & Newsletters', 'Writing engaging posts for an audience.'],
          ['negotiation', 'Negotiation Skills & Courtesy Language', 'Polite, clear language to reach agreement.'],
          ['gd-interview', 'Group Discussions & Interview Practice', 'Structured practice for placements.']
        ] }
      ]
    }
  ]
};
