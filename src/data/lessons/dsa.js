// Full lessons — DSA track (also used by Sem 2 Data Structures and Sem 4 ADA via aliases)
const R = String.raw;

export default {
  'dsa.complexity': {
    explain: [
      '**Time complexity** describes how the number of steps grows as input size **n** grows; **space complexity** describes extra memory.',
      'We count **basic operations** (comparisons, assignments) and keep only the **fastest-growing term**, dropping constants: 3n² + 5n + 2 → **O(n²)**.',
      'Rules of thumb:',
      '- single loop over n → O(n); two nested loops → O(n²)',
      '- loop that halves/doubles (i *= 2) → O(log n)',
      '- sorting → O(n log n); trying all subsets → O(2ⁿ); all permutations → O(n!)',
      '- recursion: time = number of calls × work per call; space includes the call stack',
      'Interview habit: always say **time and space** of your solution, then look for a better one.'
    ],
    syntax: R`O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)`,
    code: { lang: 'cpp', src: R`// O(1): constant
int first(const vector<int>& a) { return a[0]; }

// O(n): one pass
int sum(const vector<int>& a) { int s = 0; for (int x : a) s += x; return s; }

// O(n^2): nested loops over the same input
int countPairs(const vector<int>& a) {
    int c = 0;
    for (size_t i = 0; i < a.size(); i++)
        for (size_t j = i + 1; j < a.size(); j++) c++;   // n(n-1)/2 times
    return c;
}

// O(log n): the range halves each step
int steps(int n) { int s = 0; while (n > 1) { n /= 2; s++; } return s; }`, out: 'n = 1,000,000 → O(n) ≈ 10⁶ steps, O(n²) ≈ 10¹² (too slow!), O(log n) ≈ 20 steps' },
    theory: [
      ['What is time complexity?', 'A measure of how an algorithm’s running time grows with input size, expressed asymptotically (e.g. O(n)).'],
      ['Why do we drop constants in Big-O?', 'For large n the growth rate dominates; constants depend on hardware and implementation.'],
      ['Time complexity of `for(i=1;i<n;i*=2)`?', 'O(log n) — i doubles each time.'],
      ['Space complexity of recursive factorial?', 'O(n) due to n stack frames.'],
      ['How many operations per second can a typical judge handle?', 'About 10⁸ simple operations — use this to pick a target complexity from constraints.'],
      ['Best, worst and average case of linear search?', 'Best O(1) (first element), worst O(n), average O(n).']
    ],
    coding: [
      ['Find the complexity: `for(i=0;i<n;i++) for(j=0;j<i;j++) x++;`', 'Easy', '0 + 1 + … + (n−1) = n(n−1)/2 → **O(n²)**'],
      ['Find the complexity: `for(i=n;i>0;i/=2) for(j=0;j<i;j++) x++;`', 'Medium', 'n + n/2 + n/4 + … ≤ 2n → **O(n)**'],
      ['Find the complexity: `for(i=1;i*i<=n;i++) x++;`', 'Easy', 'Runs √n times → **O(√n)**']
    ]
  },

  'dsa.big-o': {
    explain: [
      '**Asymptotic notations** describe growth for large n:',
      '- **Big-O (O)** – upper bound: f(n) ≤ c·g(n) for large n. “At most this fast-growing.” Used for worst case.',
      '- **Big-Omega (Ω)** – lower bound: f(n) ≥ c·g(n). “At least this much.”',
      '- **Big-Theta (Θ)** – tight bound: both O and Ω. “Exactly this order.”',
      '- little-o and little-ω are strict versions (not tight).',
      'Example: f(n) = 3n² + 2n + 7 is O(n²), Ω(n²) and Θ(n²). It is also O(n³) (true but not tight).',
      'Big-O ≠ worst case: you can state the Big-O of the best, worst or average case.'
    ],
    syntax: R`f(n) = O(g(n))  if ∃ c > 0, n₀ : f(n) ≤ c·g(n) for all n ≥ n₀
f(n) = Ω(g(n))  if ∃ c > 0, n₀ : f(n) ≥ c·g(n) for all n ≥ n₀
f(n) = Θ(g(n))  if f is both O(g) and Ω(g)`,
    code: { lang: 'text', src: R`Prove 3n² + 2n + 7 = O(n²):
For n ≥ 1:  2n ≤ 2n²  and  7 ≤ 7n²
So 3n² + 2n + 7 ≤ 3n² + 2n² + 7n² = 12n²
Choose c = 12, n₀ = 1  ⇒  f(n) ≤ 12·n²  ⇒  f(n) = O(n²) ✓`, out: '' },
    theory: [
      ['Difference between O, Ω and Θ?', 'O is an upper bound, Ω a lower bound and Θ a tight bound (both).'],
      ['Is 2n = O(n²)?', 'Yes (it is an upper bound), but it is not Θ(n²); the tight bound is Θ(n).'],
      ['Which is bigger: n log n or n^1.5?', 'n^1.5 grows faster for large n.'],
      ['What is the Big-O of binary search?', 'O(log n) worst case, Ω(1) best case.']
    ],
    coding: [
      ['Arrange in increasing order: n!, 2ⁿ, n log n, log n, n², √n', 'Easy', 'log n < √n < n log n < n² < 2ⁿ < n!'],
      ['Find c and n₀ to show 5n + 3 = O(n).', 'Easy', '5n + 3 ≤ 6n for n ≥ 3 → c = 6, n₀ = 3.'],
      ['Is 2^(n+1) = O(2ⁿ)? Is 2^(2n) = O(2ⁿ)?', 'Medium', '2^(n+1) = 2·2ⁿ → yes. 2^(2n) = 4ⁿ grows faster → no.']
    ]
  },

  'dsa.stack': {
    explain: [
      'A **stack** is a linear structure following **LIFO** — Last In, First Out — like a pile of plates.',
      'Operations (all **O(1)**): `push(x)` add on top, `pop()` remove top, `peek()/top()` read top, `isEmpty()`, `isFull()` (array version).',
      '**Overflow**: push on a full stack. **Underflow**: pop on an empty stack.',
      'Implementations: **array** (fixed size, top index) or **linked list** (dynamic, push/pop at head).',
      'Uses: function call stack, undo/redo, browser back button, expression conversion/evaluation, balanced brackets, DFS, backtracking.'
    ],
    syntax: R`// C++ STL
stack<int> st;
st.push(10); st.top(); st.pop(); st.empty(); st.size();`,
    code: { lang: 'c', src: R`#include <stdio.h>
#define MAX 100
int stack[MAX], top = -1;                // top = -1 means empty

void push(int x) {
    if (top == MAX - 1) { printf("Overflow\n"); return; }
    stack[++top] = x;                    // move top up, then store
}
int pop(void) {
    if (top == -1) { printf("Underflow\n"); return -1; }
    return stack[top--];                 // read, then move top down
}
int peek(void) { return top == -1 ? -1 : stack[top]; }

int main(void) {
    push(10); push(20); push(30);
    printf("peek = %d\n", peek());       // 30
    printf("pop  = %d\n", pop());        // 30 (last in, first out)
    printf("pop  = %d\n", pop());        // 20
    printf("size = %d\n", top + 1);      // 1
    return 0;
}`, out: R`peek = 30
pop  = 30
pop  = 20
size = 1` },
    theory: [
      ['What is a stack? Give real-life examples.', 'A LIFO linear data structure — stack of plates, undo in editors, browser history, call stack.'],
      ['What are overflow and underflow?', 'Overflow: pushing onto a full stack. Underflow: popping from an empty stack.'],
      ['Time complexity of push and pop?', 'O(1) for both array and linked-list implementations.'],
      ['Array vs linked-list stack?', 'Array is simple and cache-friendly but fixed size; linked list grows dynamically but uses extra memory for pointers.'],
      ['How does recursion use a stack?', 'Each call pushes a frame (parameters, locals, return address) on the call stack; returning pops it.'],
      ['How do you implement two stacks in one array?', 'Grow one from the left (top1 = -1) and one from the right (top2 = n); overflow when top1 + 1 == top2.']
    ],
    coding: [
      ['Check balanced parentheses: "{[()]}" → true, "([)]" → false.', 'Easy', R`bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') st.push(c);
        else {
            if (st.empty()) return false;
            char o = st.top(); st.pop();
            if ((c == ')' && o != '(') || (c == ']' && o != '[') || (c == '}' && o != '{')) return false;
        }
    }
    return st.empty();
}`],
      ['Design a Min Stack with push, pop, top and getMin in O(1).', 'Medium', R`class MinStack {
    stack<int> s, mins;           // mins.top() is the current minimum
public:
    void push(int x) { s.push(x); if (mins.empty() || x <= mins.top()) mins.push(x); }
    void pop() { if (s.top() == mins.top()) mins.pop(); s.pop(); }
    int top() { return s.top(); }
    int getMin() { return mins.top(); }
};`],
      ['Next Greater Element for every array item (−1 if none).', 'Medium', R`vector<int> nge(vector<int>& a) {
    int n = a.size(); vector<int> res(n, -1); stack<int> st;   // stack of indices
    for (int i = 0; i < n; i++) {
        while (!st.empty() && a[st.top()] < a[i]) { res[st.top()] = a[i]; st.pop(); }
        st.push(i);
    }
    return res;   // O(n): each index pushed and popped once
}`]
    ]
  },

  'dsa.queue': {
    explain: [
      'A **queue** is a linear structure following **FIFO** — First In, First Out — like a ticket line.',
      'Operations (O(1)): `enqueue(x)` at the **rear**, `dequeue()` from the **front**, `front()`, `isEmpty()`.',
      'A simple array queue wastes space after dequeues — the **circular queue** fixes this with `rear = (rear + 1) % size`.',
      'Variants: **circular queue**, **deque** (both ends), **priority queue** (highest priority first).',
      'Uses: CPU/process scheduling, printer spooling, BFS in graphs, buffering in networks and keyboards.'
    ],
    syntax: R`// C++ STL
queue<int> q;
q.push(5); q.front(); q.pop(); q.empty();`,
    code: { lang: 'c', src: R`#include <stdio.h>
#define N 5
int q[N], front = 0, rear = -1, count = 0;     // circular queue

void enqueue(int x) {
    if (count == N) { printf("Queue full\n"); return; }
    rear = (rear + 1) % N;                     // wrap around
    q[rear] = x; count++;
}
int dequeue(void) {
    if (count == 0) { printf("Queue empty\n"); return -1; }
    int x = q[front];
    front = (front + 1) % N;                   // wrap around
    count--;
    return x;
}
int main(void) {
    for (int i = 1; i <= 5; i++) enqueue(i * 10);
    int x = dequeue(), y = dequeue();          // 10 then 20 (FIFO)
    printf("%d %d\n", x, y);
    enqueue(60); enqueue(70);                  // reuses freed slots
    while (count) printf("%d ", dequeue());    // 30 40 50 60 70
    return 0;
}`, out: R`10 20
30 40 50 60 70` },
    theory: [
      ['Stack vs queue?', 'Stack is LIFO (one end); queue is FIFO (insert at rear, delete at front).'],
      ['Why use a circular queue?', 'A linear array queue cannot reuse slots freed at the front; a circular queue wraps around using modulo.'],
      ['How do you detect full/empty in a circular queue?', 'Keep a count, or leave one slot empty: full when (rear + 1) % N == front.'],
      ['What is a deque?', 'A double-ended queue allowing insertion and deletion at both ends.'],
      ['What is a priority queue? How is it implemented?', 'Elements are removed by priority, not arrival. Usually implemented with a binary heap (O(log n) insert/delete).'],
      ['Which graph traversal uses a queue?', 'Breadth-First Search (BFS).']
    ],
    coding: [
      ['Implement a queue using two stacks.', 'Medium', R`class MyQueue {
    stack<int> in, out;
    void move() { if (out.empty()) while (!in.empty()) { out.push(in.top()); in.pop(); } }
public:
    void push(int x) { in.push(x); }
    int pop() { move(); int x = out.top(); out.pop(); return x; }
    int peek() { move(); return out.top(); }
    bool empty() { return in.empty() && out.empty(); }
};   // amortized O(1) per operation`],
      ['Generate binary numbers from 1 to n using a queue.', 'Easy', R`queue<string> q; q.push("1");
for (int i = 0; i < n; i++) { string s = q.front(); q.pop(); cout << s << " "; q.push(s + "0"); q.push(s + "1"); }`],
      ['Sliding window maximum of size k.', 'Hard', R`vector<int> maxWindow(vector<int>& a, int k) {
    deque<int> dq; vector<int> res;              // indices, values decreasing
    for (int i = 0; i < (int)a.size(); i++) {
        if (!dq.empty() && dq.front() == i - k) dq.pop_front();       // out of window
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();    // smaller are useless
        dq.push_back(i);
        if (i >= k - 1) res.push_back(a[dq.front()]);
    }
    return res;
}`]
    ]
  },

  'dsa.infix-postfix': {
    explain: [
      '**Infix**: operator between operands (`A + B`). **Postfix (Reverse Polish)**: after (`A B +`). **Prefix (Polish)**: before (`+ A B`).',
      'Postfix/prefix need **no brackets** and no precedence rules — easy for computers to evaluate with a stack.',
      '**Infix → Postfix algorithm (shunting-yard):** scan left to right:',
      '- Operand → add to output',
      '- `(` → push',
      '- `)` → pop to output until `(`; discard `(`',
      '- Operator → pop operators with **higher or equal precedence** (except right-associative `^`) to output, then push it',
      '- At the end pop everything left',
      'Precedence: `^` > `* / %` > `+ -`.'
    ],
    syntax: R`A + B * C        →  A B C * +
(A + B) * C      →  A B + C *
A + B * C - D / E → A B C * + D E / -`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
int prec(char c) { return c == '^' ? 3 : (c == '*' || c == '/') ? 2 : (c == '+' || c == '-') ? 1 : 0; }

string toPostfix(const string& s) {
    string out; stack<char> st;
    for (char c : s) {
        if (isalnum(c)) out += c;                       // operand
        else if (c == '(') st.push(c);
        else if (c == ')') {
            while (st.top() != '(') { out += st.top(); st.pop(); }
            st.pop();                                   // drop '('
        } else {                                        // operator
            while (!st.empty() && st.top() != '(' &&
                   (prec(st.top()) > prec(c) || (prec(st.top()) == prec(c) && c != '^'))) {
                out += st.top(); st.pop();
            }
            st.push(c);
        }
    }
    while (!st.empty()) { out += st.top(); st.pop(); }
    return out;
}
int main() { cout << toPostfix("A+B*(C^D-E)") << "\n"; }`, out: 'ABCD^E-*+' },
    theory: [
      ['Why convert infix to postfix?', 'Postfix has no brackets or precedence ambiguity and can be evaluated in one left-to-right pass with a stack.'],
      ['Which data structure is used for conversion?', 'A stack for operators.'],
      ['How is ^ handled differently?', 'It is right-associative, so an equal-precedence ^ on the stack is not popped before pushing a new ^.'],
      ['Convert (A+B)*(C-D) to prefix.', '* + A B - C D']
    ],
    coding: [
      ['Convert A*(B+C)/D to postfix.', 'Easy', 'A B C + * D /'],
      ['Convert A+B*C-D/E to prefix.', 'Medium', '- + A * B C / D E'],
      ['Write a function to convert infix to prefix.', 'Medium', R`// reverse string, swap '(' and ')', run toPostfix (treat ^ as left-assoc here), reverse result
string toPrefix(string s) {
    reverse(s.begin(), s.end());
    for (char& c : s) c = c == '(' ? ')' : c == ')' ? '(' : c;
    string p = toPostfix(s);
    reverse(p.begin(), p.end());
    return p;
}`]
    ]
  },

  'dsa.postfix-eval': {
    explain: [
      'To **evaluate a postfix expression**, scan left to right with an operand stack:',
      '- Operand → push',
      '- Operator → pop **two** operands (first popped is the **right** operand), apply, push the result',
      'At the end the stack holds exactly one value — the answer.',
      'For **prefix**, scan **right to left**; the first popped is the **left** operand.',
      'Time O(n), space O(n).'
    ],
    syntax: R`"5 3 + 8 2 - *"  →  (5+3) * (8-2) = 48`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
int evalPostfix(const string& expr) {
    stack<int> st; stringstream ss(expr); string tok;
    while (ss >> tok) {                         // tokens separated by spaces
        if (isdigit(tok[0])) { st.push(stoi(tok)); continue; }
        int b = st.top(); st.pop();             // right operand
        int a = st.top(); st.pop();             // left operand
        if (tok == "+") st.push(a + b);
        else if (tok == "-") st.push(a - b);
        else if (tok == "*") st.push(a * b);
        else if (tok == "/") st.push(a / b);
    }
    return st.top();
}
int main() { cout << evalPostfix("5 3 + 8 2 - *") << "\n"; }`, out: '48' },
    theory: [
      ['Which operand is popped first?', 'The right operand (it was pushed last).'],
      ['How do you know a postfix expression is invalid?', 'Popping from an empty stack, or more than one value left at the end.'],
      ['Evaluate 2 3 1 * + 9 -', '2 + 3×1 − 9 = −4.']
    ],
    coding: [
      ['Evaluate the prefix expression "- + 8 / 6 3 2".', 'Easy', '6/3 = 2 → 8 + 2 = 10 → 10 − 2 = **8**'],
      ['Evaluate Reverse Polish Notation given as an array of strings (LeetCode 150).', 'Medium', 'Same algorithm as above using a vector<string> instead of a stream; use long long and truncate division toward zero.'],
      ['Evaluate "100 200 + 2 / 5 * 7 +"', 'Easy', '(100+200)/2 = 150 → ×5 = 750 → +7 = **757**']
    ]
  },

  'dsa.tower-of-hanoi': {
    explain: [
      'Move n disks from rod **A** to rod **C** using **B**, moving one disk at a time and never placing a larger disk on a smaller one.',
      'Recursive idea:',
      '1. Move the top **n−1** disks from A to B (using C)',
      '2. Move the **largest** disk from A to C',
      '3. Move the n−1 disks from B to C (using A)',
      'Moves: T(n) = 2T(n−1) + 1 → **2ⁿ − 1**. Time **O(2ⁿ)**, stack space O(n).',
      'It is the classic example showing how recursion solves a problem by trusting the smaller call.'
    ],
    syntax: R`hanoi(n, from, to, via):
    if n == 0: return
    hanoi(n-1, from, via, to)
    move disk n from -> to
    hanoi(n-1, via, to, from)`,
    code: { lang: 'c', src: R`#include <stdio.h>
int moves = 0;
void hanoi(int n, char from, char to, char via) {
    if (n == 0) return;                       // base case: nothing to move
    hanoi(n - 1, from, via, to);              // 1) clear the way
    printf("Move disk %d: %c -> %c\n", n, from, to);   // 2) biggest disk
    moves++;
    hanoi(n - 1, via, to, from);              // 3) stack the rest on top
}
int main(void) {
    hanoi(3, 'A', 'C', 'B');
    printf("Total moves = %d\n", moves);      // 2^3 - 1 = 7
    return 0;
}`, out: R`Move disk 1: A -> C
Move disk 2: A -> B
Move disk 1: C -> B
Move disk 3: A -> C
Move disk 1: B -> A
Move disk 2: B -> C
Move disk 1: A -> C
Total moves = 7` },
    theory: [
      ['Minimum number of moves for n disks?', '2ⁿ − 1.'],
      ['Write the recurrence for Tower of Hanoi.', 'T(n) = 2T(n−1) + 1, T(1) = 1 → T(n) = 2ⁿ − 1.'],
      ['Time and space complexity?', 'Time O(2ⁿ); space O(n) for the recursion stack.'],
      ['Which data structure does recursion use internally here?', 'The call stack.']
    ],
    coding: [
      ['How many moves for 10 disks?', 'Easy', '2¹⁰ − 1 = **1023**'],
      ['Solve Tower of Hanoi iteratively using stacks.', 'Hard', 'Use three explicit stacks; for i = 1..2ⁿ−1 make the legal move between pairs (A,C), (A,B), (B,C) in rotation (swap B and C when n is even).'],
      ['Print only the number of moves without printing each move.', 'Easy', R`long long moves(int n){ return (1LL << n) - 1; }`]
    ]
  },

  'dsa.linked-list': {
    explain: [
      'A **linked list** is a chain of **nodes**; each node stores **data** and a **pointer to the next node**. The list is accessed through the **head** pointer; the last node points to NULL.',
      'Unlike arrays, nodes are not contiguous — size can grow and shrink at run time.',
      '**Costs:** access/search O(n); insert/delete at head O(1); insert at tail O(n) (O(1) with a tail pointer); insert after a known node O(1).',
      'Types: **singly**, **doubly** (prev + next), **circular** (last → first).',
      'Common interview operations: reverse, find middle, detect cycle, merge two sorted lists, remove n-th from end.'
    ],
    syntax: R`struct Node { int data; Node* next; };
Node* head = nullptr;`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { int data; struct Node *next; } Node;

Node *newNode(int v) { Node *n = malloc(sizeof *n); n->data = v; n->next = NULL; return n; }

Node *insertEnd(Node *head, int v) {
    Node *n = newNode(v);
    if (!head) return n;                          // empty list
    Node *p = head;
    while (p->next) p = p->next;                  // walk to the last node
    p->next = n;
    return head;
}
Node *deleteValue(Node *head, int v) {
    if (!head) return NULL;
    if (head->data == v) { Node *t = head->next; free(head); return t; }
    Node *p = head;
    while (p->next && p->next->data != v) p = p->next;
    if (p->next) { Node *t = p->next; p->next = t->next; free(t); }   // unlink + free
    return head;
}
void print(Node *h) { for (; h; h = h->next) printf("%d -> ", h->data); printf("NULL\n"); }

int main(void) {
    Node *head = NULL;
    for (int i = 1; i <= 5; i++) head = insertEnd(head, i);
    print(head);
    head = deleteValue(head, 3);
    print(head);
    return 0;
}`, out: R`1 -> 2 -> 3 -> 4 -> 5 -> NULL
1 -> 2 -> 4 -> 5 -> NULL` },
    theory: [
      ['Array vs linked list?', 'Array: contiguous, O(1) access, fixed size, costly middle insert. Linked list: scattered nodes, O(n) access, dynamic size, O(1) insert/delete when you have the node.'],
      ['Why can’t we do binary search on a linked list efficiently?', 'There is no O(1) random access to the middle element.'],
      ['How do you find the middle node in one pass?', 'Slow pointer moves 1 step, fast moves 2; when fast reaches the end, slow is at the middle.'],
      ['How do you detect a cycle?', 'Floyd’s tortoise and hare: if slow and fast ever meet, there is a cycle.'],
      ['What is a dummy (sentinel) node?', 'A fake head node that removes special cases for inserting/deleting at the front.']
    ],
    coding: [
      ['Reverse a singly linked list.', 'Easy', R`Node* reverse(Node* head) {
    Node *prev = nullptr, *cur = head;
    while (cur) { Node* nxt = cur->next; cur->next = prev; prev = cur; cur = nxt; }
    return prev;   // O(n) time, O(1) space
}`],
      ['Detect if a linked list has a cycle.', 'Easy', R`bool hasCycle(Node* h) {
    Node *s = h, *f = h;
    while (f && f->next) { s = s->next; f = f->next->next; if (s == f) return true; }
    return false;
}`],
      ['Merge two sorted linked lists.', 'Easy', R`Node* merge(Node* a, Node* b) {
    Node dummy{0, nullptr}; Node* t = &dummy;
    while (a && b) { if (a->data <= b->data) { t->next = a; a = a->next; } else { t->next = b; b = b->next; } t = t->next; }
    t->next = a ? a : b;
    return dummy.next;
}`]
    ]
  },

  'dsa.binary-search': {
    explain: [
      '**Binary search** finds a value in a **sorted** array by repeatedly halving the search range.',
      'Compare with the middle element: equal → found; target smaller → search left half; larger → search right half.',
      'Time **O(log n)** — 1 million elements need at most ~20 comparisons. Space O(1) iterative, O(log n) recursive.',
      'Use `mid = lo + (hi - lo) / 2` to avoid integer overflow.',
      'Powerful variants: first/last occurrence, lower_bound/upper_bound, search in rotated array, **binary search on the answer** (minimize max, capacity problems).'
    ],
    syntax: R`lo = 0, hi = n - 1
while lo <= hi:
    mid = lo + (hi - lo) / 2
    if a[mid] == x: return mid
    if a[mid] < x: lo = mid + 1 else hi = mid - 1
return -1`,
    code: { lang: 'c', src: R`#include <stdio.h>
int binarySearch(const int a[], int n, int x) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;      // safe middle
        if (a[mid] == x) return mid;       // found
        if (a[mid] < x) lo = mid + 1;      // go right
        else hi = mid - 1;                 // go left
    }
    return -1;                             // not present
}
int firstOccurrence(const int a[], int n, int x) {
    int lo = 0, hi = n - 1, ans = -1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] >= x) { if (a[mid] == x) ans = mid; hi = mid - 1; }  // keep looking left
        else lo = mid + 1;
    }
    return ans;
}
int main(void) {
    int a[] = {2, 5, 5, 5, 9, 14, 21};
    printf("%d %d %d\n", binarySearch(a, 7, 14), binarySearch(a, 7, 4), firstOccurrence(a, 7, 5));
    return 0;
}`, out: '5 -1 1' },
    theory: [
      ['Precondition for binary search?', 'The data must be sorted (or the predicate must be monotonic).'],
      ['Why use lo + (hi - lo)/2?', '(lo + hi) can overflow for large indices.'],
      ['Time complexity and recurrence?', 'T(n) = T(n/2) + O(1) → O(log n).'],
      ['Can binary search be used on a linked list?', 'Technically yes, but finding the middle is O(n), so it becomes O(n) overall.'],
      ['What is “binary search on the answer”?', 'Searching over possible answer values with a yes/no feasibility check that is monotonic.']
    ],
    coding: [
      ['Search in a rotated sorted array (e.g. [4,5,6,7,0,1,2]).', 'Medium', R`int search(vector<int>& a, int t) {
    int lo = 0, hi = a.size() - 1;
    while (lo <= hi) {
        int m = lo + (hi - lo) / 2;
        if (a[m] == t) return m;
        if (a[lo] <= a[m]) {                       // left half sorted
            if (a[lo] <= t && t < a[m]) hi = m - 1; else lo = m + 1;
        } else {                                   // right half sorted
            if (a[m] < t && t <= a[hi]) lo = m + 1; else hi = m - 1;
        }
    }
    return -1;
}`],
      ['Integer square root of n without sqrt().', 'Easy', R`long long isqrt(long long n){ long long lo = 0, hi = n, ans = 0;
  while (lo <= hi) { long long m = lo + (hi - lo) / 2; if (m <= n / (m ? m : 1)) { ans = m; lo = m + 1; } else hi = m - 1; }
  return ans; }`],
      ['Find a peak element (greater than neighbours) in O(log n).', 'Medium', R`int peak(vector<int>& a){ int lo = 0, hi = a.size() - 1;
  while (lo < hi) { int m = (lo + hi) / 2; if (a[m] < a[m + 1]) lo = m + 1; else hi = m; }
  return lo; }`]
    ]
  },

  'dsa.linear-search': {
    explain: [
      '**Linear search** checks each element one by one until it finds the target or reaches the end.',
      'Works on **unsorted** data and on linked lists.',
      'Time: best O(1), worst/average **O(n)**. Space O(1).',
      'Use it for small or unsorted data; for repeated searches on large data, sort once and use binary search, or use a hash table.'
    ],
    syntax: R`for i in 0..n-1:
    if a[i] == x: return i
return -1`,
    code: { lang: 'c', src: R`#include <stdio.h>
int linearSearch(const int a[], int n, int x) {
    for (int i = 0; i < n; i++)
        if (a[i] == x) return i;    // found at index i
    return -1;                      // not found
}
int main(void) {
    int a[] = {34, 7, 23, 32, 5, 62};
    printf("%d %d\n", linearSearch(a, 6, 32), linearSearch(a, 6, 99));
    return 0;
}`, out: '3 -1' },
    theory: [
      ['Time complexity of linear search?', 'O(n) worst and average, O(1) best.'],
      ['When is linear search better than binary search?', 'Small arrays, unsorted data, linked lists, or a single search where sorting would cost more.'],
      ['What is sentinel linear search?', 'Put the key at the end so the loop needs no index check, reducing comparisons.']
    ],
    coding: [
      ['Find all positions of a key in an array.', 'Easy', R`for (int i = 0; i < n; i++) if (a[i] == x) printf("%d ", i);`],
      ['Search a key in a 2-D matrix using linear search.', 'Easy', R`for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) if (m[i][j] == x) { printf("(%d,%d)", i, j); }`],
      ['Find the minimum and maximum in one pass.', 'Easy', R`int mn = a[0], mx = a[0]; for (int i = 1; i < n; i++) { if (a[i] < mn) mn = a[i]; if (a[i] > mx) mx = a[i]; }`]
    ]
  },

  'dsa.bubble-sort': {
    explain: [
      '**Bubble sort** repeatedly compares **adjacent** elements and swaps them if they are in the wrong order. After pass i, the i-th largest element has “bubbled” to the end.',
      'Optimization: if a whole pass makes **no swaps**, the array is sorted — stop early.',
      'Time: worst/average **O(n²)**, best **O(n)** (already sorted, with the flag). Space O(1). **Stable** and **in-place**.',
      'Only used for teaching or tiny arrays.'
    ],
    syntax: R`for pass in 0..n-2:
    for j in 0..n-2-pass:
        if a[j] > a[j+1]: swap`,
    code: { lang: 'c', src: R`#include <stdio.h>
void bubbleSort(int a[], int n) {
    for (int pass = 0; pass < n - 1; pass++) {
        int swapped = 0;
        for (int j = 0; j < n - 1 - pass; j++) {   // last 'pass' items are already in place
            if (a[j] > a[j + 1]) {
                int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                swapped = 1;
            }
        }
        if (!swapped) break;                         // already sorted
    }
}
int main(void) {
    int a[] = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(a, 7);
    for (int i = 0; i < 7; i++) printf("%d ", a[i]);
    return 0;
}`, out: '11 12 22 25 34 64 90' },
    theory: [
      ['Best-case complexity of bubble sort?', 'O(n) with the early-exit flag when the array is already sorted.'],
      ['Is bubble sort stable?', 'Yes — equal elements are never swapped.'],
      ['How many passes are needed at most?', 'n − 1.'],
      ['Bubble vs selection sort?', 'Both O(n²); bubble does many swaps but is stable and adaptive; selection does at most n−1 swaps but is not stable.']
    ],
    coding: [
      ['Show the array after each pass for [5, 1, 4, 2, 8].', 'Easy', 'Pass 1: 1 4 2 5 8 → Pass 2: 1 2 4 5 8 → Pass 3: no swaps → stop.'],
      ['Count the number of swaps bubble sort performs (= number of inversions).', 'Medium', 'Add a counter inside the swap. For [5,1,4,2,8] it is 4.'],
      ['Sort strings alphabetically using bubble sort.', 'Easy', R`if (strcmp(s[j], s[j + 1]) > 0) { char t[50]; strcpy(t, s[j]); strcpy(s[j], s[j + 1]); strcpy(s[j + 1], t); }`]
    ]
  },

  'dsa.selection-sort': {
    explain: [
      '**Selection sort** divides the array into a sorted left part and unsorted right part. Each pass **selects the minimum** of the unsorted part and swaps it into place.',
      'Always **O(n²)** comparisons (even if sorted), but only **O(n) swaps** — useful when writes are expensive.',
      'In-place, **not stable** (a swap can jump an element over an equal one).'
    ],
    syntax: R`for i in 0..n-2:
    min = index of smallest in a[i..n-1]
    swap(a[i], a[min])`,
    code: { lang: 'c', src: R`#include <stdio.h>
void selectionSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (a[j] < a[min]) min = j;       // find smallest in the unsorted part
        int t = a[i]; a[i] = a[min]; a[min] = t;   // put it at position i
    }
}
int main(void) {
    int a[] = {29, 10, 14, 37, 13};
    selectionSort(a, 5);
    for (int i = 0; i < 5; i++) printf("%d ", a[i]);
    return 0;
}`, out: '10 13 14 29 37' },
    theory: [
      ['Time complexity of selection sort in best case?', 'Still O(n²) — it always scans the rest to find the minimum.'],
      ['Why is selection sort not stable?', 'Swapping the minimum into position can move an equal element past another.'],
      ['Number of swaps?', 'At most n − 1.']
    ],
    coding: [
      ['Show passes for [64, 25, 12, 22, 11].', 'Easy', '11 25 12 22 64 → 11 12 25 22 64 → 11 12 22 25 64 → done.'],
      ['Sort in descending order with selection sort.', 'Easy', 'Select the maximum instead of the minimum in each pass.'],
      ['Make selection sort stable.', 'Medium', 'Instead of swapping, shift elements right and insert the minimum at position i (like insertion), keeping equal elements in order.']
    ]
  },

  'dsa.insertion-sort': {
    explain: [
      '**Insertion sort** builds the sorted array one item at a time, like arranging playing cards in your hand: take the next element and **shift** larger elements right to insert it in place.',
      'Time: worst/average **O(n²)**, best **O(n)** (already sorted). Space O(1). **Stable**, in-place, **adaptive** and **online** (can sort as data arrives).',
      'Very fast for small or nearly sorted arrays — that is why Tim sort and introsort use it for small chunks.'
    ],
    syntax: R`for i in 1..n-1:
    key = a[i]; j = i - 1
    while j >= 0 and a[j] > key: a[j+1] = a[j]; j--
    a[j+1] = key`,
    code: { lang: 'c', src: R`#include <stdio.h>
void insertionSort(int a[], int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i - 1;
        while (j >= 0 && a[j] > key) {   // shift bigger elements right
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;                  // drop key into the gap
    }
}
int main(void) {
    int a[] = {12, 11, 13, 5, 6};
    insertionSort(a, 5);
    for (int i = 0; i < 5; i++) printf("%d ", a[i]);
    return 0;
}`, out: '5 6 11 12 13' },
    theory: [
      ['Best case of insertion sort and when?', 'O(n) when the array is already sorted — the inner loop never runs.'],
      ['Why is insertion sort used inside Tim sort?', 'It is very fast for small and nearly sorted runs with low overhead.'],
      ['Is insertion sort stable?', 'Yes, because it only shifts elements strictly greater than the key.']
    ],
    coding: [
      ['Sort a linked list using insertion sort.', 'Medium', 'Create a dummy sorted list; take nodes one by one and insert each at its correct position by walking the sorted list.'],
      ['Count shifts made by insertion sort.', 'Easy', 'Increment a counter inside the while loop; it equals the number of inversions.'],
      ['Implement binary insertion sort.', 'Medium', 'Use binary search to find the insertion index in a[0..i-1], then shift — fewer comparisons, same shifts.']
    ]
  },

  'dsa.merge-sort': {
    explain: [
      '**Merge sort** is a divide-and-conquer sort: split the array into halves, sort each half recursively, then **merge** the two sorted halves.',
      'Merging two sorted arrays takes O(n) using two pointers.',
      'Recurrence T(n) = 2T(n/2) + O(n) → **O(n log n)** in **all cases**. Extra space **O(n)**. **Stable**.',
      'Great for linked lists (no extra array needed) and external sorting of huge files. Also used to **count inversions**.'
    ],
    syntax: R`mergeSort(a, l, r):
    if l >= r: return
    m = (l + r) / 2
    mergeSort(a, l, m); mergeSort(a, m+1, r)
    merge(a, l, m, r)`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
void merge(vector<int>& a, int l, int m, int r) {
    vector<int> tmp;
    int i = l, j = m + 1;
    while (i <= m && j <= r) tmp.push_back(a[i] <= a[j] ? a[i++] : a[j++]);  // <= keeps it stable
    while (i <= m) tmp.push_back(a[i++]);
    while (j <= r) tmp.push_back(a[j++]);
    for (int k = 0; k < (int)tmp.size(); k++) a[l + k] = tmp[k];
}
void mergeSort(vector<int>& a, int l, int r) {
    if (l >= r) return;                  // 0 or 1 element: already sorted
    int m = l + (r - l) / 2;
    mergeSort(a, l, m);
    mergeSort(a, m + 1, r);
    merge(a, l, m, r);
}
int main() {
    vector<int> a = {38, 27, 43, 3, 9, 82, 10};
    mergeSort(a, 0, a.size() - 1);
    for (int x : a) cout << x << " ";
}`, out: '3 9 10 27 38 43 82' },
    theory: [
      ['Time complexity of merge sort in best, average, worst case?', 'O(n log n) in all cases.'],
      ['Space complexity?', 'O(n) for the temporary array (+ O(log n) recursion stack).'],
      ['Is merge sort stable?', 'Yes, if equal elements are taken from the left half first (<=).'],
      ['Merge sort vs quick sort?', 'Merge: guaranteed O(n log n), stable, needs O(n) space. Quick: in-place, usually faster in practice, but O(n²) worst case and not stable.'],
      ['Why is merge sort preferred for linked lists?', 'It needs only sequential access and can merge by relinking nodes without extra arrays.']
    ],
    coding: [
      ['Count inversions in an array (pairs i < j with a[i] > a[j]).', 'Medium', R`long long mergeCount(vector<int>& a, int l, int r) {
    if (l >= r) return 0;
    int m = (l + r) / 2;
    long long c = mergeCount(a, l, m) + mergeCount(a, m + 1, r);
    vector<int> t; int i = l, j = m + 1;
    while (i <= m && j <= r) {
        if (a[i] <= a[j]) t.push_back(a[i++]);
        else { t.push_back(a[j++]); c += m - i + 1; }   // all remaining left items are bigger
    }
    while (i <= m) t.push_back(a[i++]);
    while (j <= r) t.push_back(a[j++]);
    copy(t.begin(), t.end(), a.begin() + l);
    return c;
}`],
      ['Merge two sorted arrays into one.', 'Easy', R`vector<int> mergeTwo(vector<int>& a, vector<int>& b){ vector<int> r; size_t i = 0, j = 0;
  while (i < a.size() && j < b.size()) r.push_back(a[i] <= b[j] ? a[i++] : b[j++]);
  while (i < a.size()) r.push_back(a[i++]); while (j < b.size()) r.push_back(b[j++]); return r; }`],
      ['Sort a linked list in O(n log n).', 'Medium', 'Find the middle with slow/fast pointers, split, recursively sort both halves, merge the two sorted lists.']
    ]
  },

  'dsa.quick-sort': {
    explain: [
      '**Quick sort** picks a **pivot**, **partitions** the array so smaller elements go left and larger go right, then recursively sorts both sides.',
      'Partition schemes: **Lomuto** (pivot = last element, simple) and **Hoare** (two pointers, fewer swaps).',
      'Time: average **O(n log n)**, worst **O(n²)** (e.g. already sorted array with last-element pivot). Use a **random pivot** or median-of-three to avoid the worst case.',
      'In-place (O(log n) stack on average), **not stable**, very cache-friendly — often the fastest in practice (std::sort uses introsort = quick + heap + insertion).'
    ],
    syntax: R`quickSort(a, lo, hi):
    if lo < hi:
        p = partition(a, lo, hi)
        quickSort(a, lo, p - 1)
        quickSort(a, p + 1, hi)`,
    code: { lang: 'c', src: R`#include <stdio.h>
void swap(int *x, int *y) { int t = *x; *x = *y; *y = t; }

int partition(int a[], int lo, int hi) {      // Lomuto partition
    int pivot = a[hi], i = lo - 1;            // i = end of "smaller" region
    for (int j = lo; j < hi; j++)
        if (a[j] < pivot) swap(&a[++i], &a[j]);
    swap(&a[i + 1], &a[hi]);                  // pivot to its final place
    return i + 1;
}
void quickSort(int a[], int lo, int hi) {
    if (lo < hi) {
        int p = partition(a, lo, hi);
        quickSort(a, lo, p - 1);
        quickSort(a, p + 1, hi);
    }
}
int main(void) {
    int a[] = {10, 7, 8, 9, 1, 5};
    quickSort(a, 0, 5);
    for (int i = 0; i < 6; i++) printf("%d ", a[i]);
    return 0;
}`, out: '1 5 7 8 9 10' },
    theory: [
      ['Worst case of quick sort and when it happens?', 'O(n²) when the pivot is always the smallest or largest (e.g. sorted input with last-element pivot).'],
      ['How do you avoid the worst case?', 'Random pivot, median-of-three, or switching to heap sort (introsort).'],
      ['Is quick sort stable?', 'No — partitioning can reorder equal elements.'],
      ['Why is quick sort faster than merge sort in practice?', 'It sorts in place with good cache locality and small constant factors.'],
      ['What is quickselect?', 'Using partition to find the k-th smallest element in O(n) average time.']
    ],
    coding: [
      ['Find the k-th smallest element using quickselect.', 'Medium', R`int quickselect(vector<int>& a, int lo, int hi, int k) {   // k is 0-based
    int pivot = a[hi], i = lo;
    for (int j = lo; j < hi; j++) if (a[j] < pivot) swap(a[i++], a[j]);
    swap(a[i], a[hi]);
    if (i == k) return a[i];
    return i < k ? quickselect(a, i + 1, hi, k) : quickselect(a, lo, i - 1, k);
}`],
      ['Sort an array of 0s, 1s and 2s in one pass (Dutch national flag).', 'Medium', R`void sort012(vector<int>& a){ int lo = 0, mid = 0, hi = a.size() - 1;
  while (mid <= hi) { if (a[mid] == 0) swap(a[lo++], a[mid++]); else if (a[mid] == 1) mid++; else swap(a[mid], a[hi--]); } }`],
      ['Trace Lomuto partition on [4, 7, 2, 6, 3] with pivot 3.', 'Easy', 'Elements < 3: only 2 → swap into index 0 → [2,7,4,6,3]; place pivot at index 1 → [2,3,4,6,7]; returns 1.']
    ]
  },

  'dsa.bst': {
    explain: [
      'A **Binary Search Tree** is a binary tree where for every node: all keys in the **left** subtree are **smaller** and all keys in the **right** subtree are **larger**.',
      '**Inorder traversal of a BST gives sorted order.**',
      'Search, insert, delete take **O(h)** where h is the height: O(log n) when balanced, **O(n)** when skewed (e.g. inserting sorted data) — that is why AVL/Red-Black trees exist.',
      '**Delete** has 3 cases: (1) leaf → remove; (2) one child → replace node with child; (3) two children → replace with **inorder successor** (smallest in right subtree) and delete that successor.'
    ],
    syntax: R`search(root, x):
    if root == NULL or root.key == x: return root
    return x < root.key ? search(root.left, x) : search(root.right, x)`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <stdlib.h>
typedef struct T { int key; struct T *l, *r; } T;
T *node(int k) { T *n = malloc(sizeof *n); n->key = k; n->l = n->r = NULL; return n; }

T *insert(T *root, int k) {
    if (!root) return node(k);
    if (k < root->key) root->l = insert(root->l, k);
    else if (k > root->key) root->r = insert(root->r, k);   // ignore duplicates
    return root;
}
T *minNode(T *r) { while (r->l) r = r->l; return r; }
T *delete(T *root, int k) {
    if (!root) return NULL;
    if (k < root->key) root->l = delete(root->l, k);
    else if (k > root->key) root->r = delete(root->r, k);
    else {
        if (!root->l) { T *t = root->r; free(root); return t; }   // 0 or 1 child
        if (!root->r) { T *t = root->l; free(root); return t; }
        T *s = minNode(root->r);                                  // 2 children: inorder successor
        root->key = s->key;
        root->r = delete(root->r, s->key);
    }
    return root;
}
void inorder(T *r) { if (r) { inorder(r->l); printf("%d ", r->key); inorder(r->r); } }

int main(void) {
    int keys[] = {50, 30, 70, 20, 40, 60, 80};
    T *root = NULL;
    for (int i = 0; i < 7; i++) root = insert(root, keys[i]);
    inorder(root); printf("\n");          // sorted!
    root = delete(root, 50);               // delete root with two children
    inorder(root); printf("\n");
    return 0;
}`, out: R`20 30 40 50 60 70 80
20 30 40 60 70 80` },
    theory: [
      ['What is the BST property?', 'Left subtree keys < node key < right subtree keys, for every node.'],
      ['Which traversal of a BST gives sorted output?', 'Inorder.'],
      ['Worst-case height of a BST and when?', 'O(n) — when keys are inserted in sorted order (skewed tree).'],
      ['Explain the three deletion cases.', 'Leaf: remove. One child: link parent to child. Two children: copy the inorder successor (or predecessor) and delete it from the right subtree.'],
      ['How do you keep a BST balanced?', 'Use self-balancing trees: AVL (strict balance via rotations) or Red-Black trees.']
    ],
    coding: [
      ['Validate whether a binary tree is a BST.', 'Medium', R`bool valid(Node* r, long lo = LONG_MIN, long hi = LONG_MAX) {
    if (!r) return true;
    if (r->key <= lo || r->key >= hi) return false;
    return valid(r->left, lo, r->key) && valid(r->right, r->key, hi);
}`],
      ['Find the k-th smallest element in a BST.', 'Medium', R`int kth(Node* r, int& k) {
    if (!r) return -1;
    int x = kth(r->left, k); if (k == 0) return x;
    if (--k == 0) return r->key;
    return kth(r->right, k);
}`],
      ['Lowest common ancestor in a BST.', 'Easy', R`Node* lca(Node* r, int a, int b) {
    while (r) { if (a < r->key && b < r->key) r = r->left; else if (a > r->key && b > r->key) r = r->right; else return r; }
    return nullptr;
}`]
    ]
  },

  'dsa.tree-traversals': {
    explain: [
      'Traversal = visiting every node exactly once. For binary trees:',
      '- **Preorder (N L R)** – node, left, right → copy a tree, prefix expression',
      '- **Inorder (L N R)** – left, node, right → sorted order for a BST, infix expression',
      '- **Postorder (L R N)** – left, right, node → delete/free a tree, postfix expression',
      '- **Level order (BFS)** – level by level using a **queue**',
      'All are O(n) time. Recursive versions use O(h) stack; iterative versions use an explicit stack. **Morris traversal** does inorder in O(1) extra space.',
      'Inorder + preorder (or inorder + postorder) uniquely rebuild a binary tree.'
    ],
    syntax: R`        1
       / \
      2   3
     / \
    4   5
Pre: 1 2 4 5 3   In: 4 2 5 1 3   Post: 4 5 2 3 1   Level: 1 2 3 4 5`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
struct Node { int v; Node *l, *r; Node(int x) : v(x), l(nullptr), r(nullptr) {} };

void pre(Node* n)  { if (!n) return; cout << n->v << " "; pre(n->l); pre(n->r); }
void in(Node* n)   { if (!n) return; in(n->l); cout << n->v << " "; in(n->r); }
void post(Node* n) { if (!n) return; post(n->l); post(n->r); cout << n->v << " "; }
void level(Node* root) {
    queue<Node*> q; q.push(root);
    while (!q.empty()) {
        Node* n = q.front(); q.pop();
        cout << n->v << " ";
        if (n->l) q.push(n->l);
        if (n->r) q.push(n->r);
    }
}
int main() {
    Node* r = new Node(1); r->l = new Node(2); r->r = new Node(3);
    r->l->l = new Node(4); r->l->r = new Node(5);
    pre(r); cout << "\n"; in(r); cout << "\n"; post(r); cout << "\n"; level(r);
}`, out: R`1 2 4 5 3
4 2 5 1 3
4 5 2 3 1
1 2 3 4 5` },
    theory: [
      ['Which traversal is used to delete a tree?', 'Postorder — children are freed before their parent.'],
      ['Which traversal uses a queue?', 'Level-order (BFS).'],
      ['Can preorder alone rebuild a binary tree?', 'No (except for special trees like BSTs); you need inorder plus preorder or postorder.'],
      ['Time and space complexity of traversals?', 'O(n) time; O(h) space recursively (O(n) worst case for a skewed tree).']
    ],
    coding: [
      ['Iterative inorder traversal using a stack.', 'Medium', R`vector<int> inorder(Node* root) {
    vector<int> res; stack<Node*> st; Node* cur = root;
    while (cur || !st.empty()) {
        while (cur) { st.push(cur); cur = cur->l; }   // go left
        cur = st.top(); st.pop();
        res.push_back(cur->v);
        cur = cur->r;                                   // then right
    }
    return res;
}`],
      ['Find the height of a binary tree.', 'Easy', R`int height(Node* n){ return n ? 1 + max(height(n->l), height(n->r)) : 0; }`],
      ['Given preorder 1 2 4 5 3 and inorder 4 2 5 1 3, draw the tree.', 'Medium', 'Root = 1 (first in preorder). In inorder, left of 1 = {4,2,5}, right = {3}. Next root 2 with left 4, right 5. Tree: 1(2(4,5),3).']
    ]
  },

  'dsa.bfs': {
    explain: [
      '**Breadth-First Search** explores a graph **level by level** from a source using a **queue**.',
      'Steps: mark source visited and enqueue it; while the queue is not empty, dequeue a vertex and enqueue all its **unvisited** neighbours (marking them visited when enqueued).',
      'Time **O(V + E)** with an adjacency list; space O(V).',
      'BFS gives the **shortest path (fewest edges)** in an **unweighted** graph.',
      'Uses: shortest path in grids/mazes, level-order traversal, bipartite check, connected components, web crawlers, “minimum steps” puzzles.'
    ],
    syntax: R`BFS(s):
    visited[s] = true; queue.push(s)
    while queue not empty:
        u = queue.pop()
        for v in adj[u]:
            if not visited[v]: visited[v] = true; dist[v] = dist[u] + 1; queue.push(v)`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
int main() {
    int V = 6;
    vector<vector<int>> adj(V);
    auto edge = [&](int a, int b) { adj[a].push_back(b); adj[b].push_back(a); };  // undirected
    edge(0, 1); edge(0, 2); edge(1, 3); edge(2, 4); edge(3, 5); edge(4, 5);

    vector<int> dist(V, -1);
    queue<int> q; q.push(0); dist[0] = 0;          // source = 0
    while (!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";                            // visit order
        for (int v : adj[u])
            if (dist[v] == -1) { dist[v] = dist[u] + 1; q.push(v); }
    }
    cout << "\nshortest edges 0->5 = " << dist[5] << "\n";
}`, out: R`0 1 2 3 4 5
shortest edges 0->5 = 3` },
    theory: [
      ['Which data structure does BFS use?', 'A queue.'],
      ['Why does BFS find the shortest path in unweighted graphs?', 'It visits vertices in increasing order of distance (number of edges) from the source.'],
      ['Time complexity of BFS?', 'O(V + E) with adjacency lists, O(V²) with an adjacency matrix.'],
      ['BFS vs DFS?', 'BFS: queue, level by level, shortest paths, more memory on wide graphs. DFS: stack/recursion, goes deep, useful for cycles, topological sort, components.'],
      ['Why mark visited when enqueuing (not when dequeuing)?', 'To avoid adding the same vertex to the queue multiple times.']
    ],
    coding: [
      ['Number of islands in a grid of 1s and 0s.', 'Medium', R`int numIslands(vector<vector<char>>& g) {
    int R = g.size(), C = g[0].size(), cnt = 0;
    int dr[] = {1,-1,0,0}, dc[] = {0,0,1,-1};
    for (int i = 0; i < R; i++) for (int j = 0; j < C; j++) if (g[i][j] == '1') {
        cnt++; queue<pair<int,int>> q; q.push({i, j}); g[i][j] = '0';
        while (!q.empty()) { auto [r, c] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) { int nr = r + dr[k], nc = c + dc[k];
                if (nr >= 0 && nr < R && nc >= 0 && nc < C && g[nr][nc] == '1') { g[nr][nc] = '0'; q.push({nr, nc}); } } }
    }
    return cnt;
}`],
      ['Shortest path in a binary maze from top-left to bottom-right.', 'Medium', 'BFS over cells storing distance; return dist of the target or −1 if unreachable. O(R·C).'],
      ['Check if a graph is bipartite using BFS.', 'Medium', 'Colour the source 0; colour each neighbour 1 − colour[u]; if a neighbour already has the same colour as u, the graph is not bipartite.']
    ]
  },

  'dsa.dfs': {
    explain: [
      '**Depth-First Search** goes as **deep** as possible along each branch before backtracking. It uses **recursion** (call stack) or an explicit **stack**.',
      'Time **O(V + E)**, space O(V).',
      'Uses: detecting cycles, topological sort, connected components, path finding, flood fill, strongly connected components, solving mazes and puzzles (backtracking).',
      'For directed graphs, a cycle exists if DFS finds an edge to a node that is **still on the recursion stack** (grey node).'
    ],
    syntax: R`DFS(u):
    visited[u] = true
    for v in adj[u]:
        if not visited[v]: DFS(v)`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> adj;
vector<bool> vis;
void dfs(int u) {
    vis[u] = true;
    cout << u << " ";
    for (int v : adj[u]) if (!vis[v]) dfs(v);   // go deeper first
}
int main() {
    int V = 7; adj.assign(V, {}); vis.assign(V, false);
    auto edge = [&](int a, int b) { adj[a].push_back(b); adj[b].push_back(a); };
    edge(0, 1); edge(0, 2); edge(1, 3); edge(1, 4); edge(5, 6);   // two components
    int components = 0;
    for (int i = 0; i < V; i++) if (!vis[i]) { components++; dfs(i); cout << "| "; }
    cout << "\ncomponents = " << components << "\n";
}`, out: R`0 1 3 4 2 | 5 6 |
components = 2` },
    theory: [
      ['Which data structure does DFS use?', 'A stack — either the call stack (recursion) or an explicit stack.'],
      ['How do you detect a cycle in an undirected graph with DFS?', 'If you reach a visited vertex that is not the parent of the current vertex, there is a cycle.'],
      ['How do you detect a cycle in a directed graph?', 'Track the recursion stack (white/grey/black colours); an edge to a grey vertex means a cycle.'],
      ['Applications of DFS?', 'Topological sort, cycle detection, connected/strongly connected components, bridges, maze solving.']
    ],
    coding: [
      ['Topological sort of a DAG using DFS.', 'Medium', R`void topo(int u, vector<bool>& vis, stack<int>& st) {
    vis[u] = true;
    for (int v : adj[u]) if (!vis[v]) topo(v, vis, st);
    st.push(u);          // push after all descendants
}
// call topo for every unvisited vertex, then pop the stack for the order`],
      ['Detect a cycle in a directed graph.', 'Medium', R`bool cyc(int u, vector<int>& col) {   // 0 white, 1 grey, 2 black
    col[u] = 1;
    for (int v : adj[u]) { if (col[v] == 1) return true; if (col[v] == 0 && cyc(v, col)) return true; }
    col[u] = 2; return false;
}`],
      ['Find all paths from source to target in a DAG.', 'Medium', 'DFS from source keeping the current path vector; when you reach the target, save a copy; pop the vertex when returning (backtrack).']
    ]
  },

  'dsa.kadane': {
    explain: [
      '**Kadane’s algorithm** finds the **maximum sum contiguous subarray** in **O(n)** time and O(1) space.',
      'Idea: at each index decide — extend the previous subarray or start fresh here: `cur = max(a[i], cur + a[i])`, and track the best `best = max(best, cur)`.',
      'Equivalently: keep adding; if the running sum drops below 0, reset it to 0 (but initialise best with a[0] to handle all-negative arrays).',
      'It is a tiny dynamic-programming solution — a top interview question.'
    ],
    syntax: R`cur = best = a[0]
for i in 1..n-1:
    cur = max(a[i], cur + a[i])
    best = max(best, cur)`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> a = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int cur = a[0], best = a[0], start = 0, s = 0, end = 0;
    for (int i = 1; i < (int)a.size(); i++) {
        if (a[i] > cur + a[i]) { cur = a[i]; s = i; }   // start new subarray here
        else cur += a[i];                               // extend
        if (cur > best) { best = cur; start = s; end = i; }
    }
    cout << "max sum = " << best << " from index " << start << " to " << end << "\n";
}`, out: 'max sum = 6 from index 3 to 6' },
    theory: [
      ['Time and space complexity of Kadane’s algorithm?', 'O(n) time, O(1) space.'],
      ['How does it handle all-negative arrays?', 'By initialising best with a[0] and using max(a[i], cur + a[i]); it returns the largest (least negative) element.'],
      ['Why is it dynamic programming?', 'cur[i] = max(a[i], cur[i−1] + a[i]) uses the optimal answer for the previous index.']
    ],
    coding: [
      ['Maximum product subarray.', 'Medium', R`int maxProduct(vector<int>& a){
    int mx = a[0], mn = a[0], best = a[0];
    for (size_t i = 1; i < a.size(); i++) {
        if (a[i] < 0) swap(mx, mn);                 // negative flips max and min
        mx = max(a[i], mx * a[i]); mn = min(a[i], mn * a[i]);
        best = max(best, mx);
    }
    return best;
}`],
      ['Maximum circular subarray sum.', 'Hard', 'Answer = max(normal Kadane, total − minimum subarray sum), except when all numbers are negative (then use normal Kadane).'],
      ['Best time to buy and sell a stock once.', 'Easy', R`int maxProfit(vector<int>& p){ int mn = INT_MAX, best = 0; for (int x : p) { mn = min(mn, x); best = max(best, x - mn); } return best; }`]
    ]
  },

  'dsa.two-pointers': {
    explain: [
      'The **two-pointer** technique uses two indices that move through the data to avoid nested loops — turning **O(n²)** into **O(n)**.',
      'Patterns:',
      '- **Opposite ends** (sorted array): `l = 0, r = n−1`; move one side based on a comparison (pair sum, container with most water, palindrome check)',
      '- **Same direction / fast–slow**: one pointer reads, one writes (remove duplicates, move zeros), or slow/fast for linked lists',
      '- **Two arrays**: merge sorted arrays, intersection',
      'Usually needs sorted data or a monotonic property.'
    ],
    syntax: R`l = 0; r = n - 1
while l < r:
    if a[l] + a[r] == target: found
    else if a[l] + a[r] < target: l++
    else: r--`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
// Pair with given sum in a sorted array
pair<int,int> pairSum(const vector<int>& a, int target) {
    int l = 0, r = a.size() - 1;
    while (l < r) {
        int s = a[l] + a[r];
        if (s == target) return {l, r};
        if (s < target) l++;      // need a bigger sum
        else r--;                 // need a smaller sum
    }
    return {-1, -1};
}
// Move all zeros to the end keeping order (read/write pointers)
void moveZeros(vector<int>& a) {
    int w = 0;
    for (int x : a) if (x != 0) a[w++] = x;
    while (w < (int)a.size()) a[w++] = 0;
}
int main() {
    auto [i, j] = pairSum({1, 3, 4, 6, 8, 11}, 10);
    cout << i << " " << j << "\n";              // 4 + 6
    vector<int> v = {0, 1, 0, 3, 12}; moveZeros(v);
    for (int x : v) cout << x << " ";
}`, out: R`2 3
1 3 12 0 0` },
    theory: [
      ['When can two pointers replace nested loops?', 'When moving one pointer based on a comparison never skips a valid answer — usually sorted data or a monotonic condition.'],
      ['Time complexity of the pair-sum two-pointer approach?', 'O(n) after sorting (O(n log n) if sorting is needed).'],
      ['Two pointers vs sliding window?', 'Sliding window is a two-pointer variant where both pointers move in the same direction maintaining a window.']
    ],
    coding: [
      ['3Sum: find all unique triplets that sum to 0.', 'Medium', R`vector<vector<int>> threeSum(vector<int>& a) {
    sort(a.begin(), a.end()); vector<vector<int>> res;
    for (int i = 0; i < (int)a.size(); i++) {
        if (i && a[i] == a[i - 1]) continue;              // skip duplicates
        int l = i + 1, r = a.size() - 1;
        while (l < r) {
            int s = a[i] + a[l] + a[r];
            if (s < 0) l++; else if (s > 0) r--;
            else { res.push_back({a[i], a[l], a[r]}); while (l < r && a[l] == a[l + 1]) l++; l++; r--; }
        }
    }
    return res;
}`],
      ['Container with most water.', 'Medium', R`int maxArea(vector<int>& h){ int l = 0, r = h.size() - 1, best = 0;
  while (l < r) { best = max(best, min(h[l], h[r]) * (r - l)); if (h[l] < h[r]) l++; else r--; } return best; }`],
      ['Check if a string is a palindrome ignoring non-alphanumeric characters.', 'Easy', R`bool isPal(string s){ int l = 0, r = s.size() - 1;
  while (l < r) { if (!isalnum(s[l])) l++; else if (!isalnum(s[r])) r--; else if (tolower(s[l++]) != tolower(s[r--])) return false; }
  return true; }`]
    ]
  },

  'dsa.sliding-window': {
    explain: [
      'A **sliding window** keeps a contiguous range `[l, r]` and slides it across the array, updating the answer incrementally instead of recomputing from scratch.',
      '**Fixed size k**: add the new element, remove the one leaving → O(n). Example: max sum of any k consecutive elements.',
      '**Variable size**: expand `r`; while the window breaks a condition, shrink from `l`. Example: longest substring without repeating characters, smallest subarray with sum ≥ target.',
      'Combine with a hash map/frequency array to track window contents.'
    ],
    syntax: R`l = 0
for r in 0..n-1:
    add a[r] to window
    while window invalid: remove a[l]; l++
    answer = best(answer, r - l + 1)`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
int maxSumK(const vector<int>& a, int k) {              // fixed window
    int sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];
    int best = sum;
    for (int i = k; i < (int)a.size(); i++) {
        sum += a[i] - a[i - k];                          // slide: add new, drop old
        best = max(best, sum);
    }
    return best;
}
int longestUnique(const string& s) {                    // variable window
    vector<int> last(256, -1);
    int best = 0, l = 0;
    for (int r = 0; r < (int)s.size(); r++) {
        if (last[(unsigned char)s[r]] >= l) l = last[(unsigned char)s[r]] + 1;  // jump past repeat
        last[(unsigned char)s[r]] = r;
        best = max(best, r - l + 1);
    }
    return best;
}
int main() {
    cout << maxSumK({2, 1, 5, 1, 3, 2}, 3) << "\n";   // 5+1+3
    cout << longestUnique("abcabcbb") << "\n";         // "abc"
}`, out: '9\n3' },
    theory: [
      ['When should you think of sliding window?', 'Problems about contiguous subarrays/substrings with a condition (max/min length, sum, distinct count).'],
      ['Complexity of sliding window solutions?', 'Usually O(n) because each element enters and leaves the window once.'],
      ['Fixed vs variable window?', 'Fixed has constant size k; variable grows and shrinks to satisfy a condition.']
    ],
    coding: [
      ['Smallest subarray with sum ≥ target (positive numbers).', 'Medium', R`int minLen(int target, vector<int>& a){ int l = 0, sum = 0, best = INT_MAX;
  for (int r = 0; r < (int)a.size(); r++) { sum += a[r]; while (sum >= target) { best = min(best, r - l + 1); sum -= a[l++]; } }
  return best == INT_MAX ? 0 : best; }`],
      ['Count anagrams of pattern p in string s.', 'Medium', 'Keep a 26-letter count for p and for the current window of length |p|; slide and compare counts (or track how many letters match).'],
      ['Longest substring with at most k distinct characters.', 'Medium', 'Variable window with a frequency map; shrink from the left while map.size() > k; track the max length.']
    ]
  },

  'dsa.dp': {
    explain: [
      '**Dynamic Programming (DP)** solves problems by breaking them into **overlapping subproblems**, solving each **once**, and storing the result.',
      'Two conditions: **optimal substructure** (best answer built from best sub-answers) and **overlapping subproblems** (same subproblems repeat).',
      '**Top-down (memoization):** recursion + cache. **Bottom-up (tabulation):** fill a table from the smallest cases.',
      'Recipe: (1) define the **state** dp[i] (or dp[i][j]) in words, (2) write the **transition**, (3) set **base cases**, (4) decide the **order** of filling, (5) return the answer. Then optimize space if only previous rows are used.',
      'Classic families: 1-D (stairs, house robber), knapsack, LCS/edit distance, LIS, grid paths, interval DP, DP on trees, bitmask DP.'
    ],
    syntax: R`// memoization
int solve(int i) { if (base) return ...; if (memo[i] != -1) return memo[i]; return memo[i] = combine(solve(smaller)); }
// tabulation
dp[0] = base; for (i = 1..n) dp[i] = combine(dp[earlier]);`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
// Coin change: minimum coins to make amount (unbounded coins)
int minCoins(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);   // dp[x] = min coins for amount x
    dp[0] = 0;                              // base case
    for (int x = 1; x <= amount; x++)
        for (int c : coins)
            if (c <= x && dp[x - c] != INT_MAX)
                dp[x] = min(dp[x], dp[x - c] + 1);   // use coin c last
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}
int main() {
    vector<int> coins = {1, 5, 6, 9};
    cout << minCoins(coins, 11) << "\n";   // 5 + 6
}`, out: '2' },
    theory: [
      ['What two properties must a problem have for DP?', 'Optimal substructure and overlapping subproblems.'],
      ['Memoization vs tabulation?', 'Memoization is top-down recursion with a cache (computes only needed states); tabulation is bottom-up iteration filling a table (no recursion overhead).'],
      ['DP vs greedy?', 'Greedy makes one local choice and never reconsiders; DP considers all choices via subproblems. Greedy fails for coin change with coins {1, 5, 6, 9} and amount 11.'],
      ['DP vs divide and conquer?', 'Both split problems; DP is used when subproblems overlap (so caching helps), D&C when they are independent.'],
      ['How do you reduce DP space?', 'If dp[i] depends only on dp[i−1] (or the previous row), keep just one or two rows/variables.']
    ],
    coding: [
      ['House Robber: max money from non-adjacent houses.', 'Medium', R`int rob(vector<int>& a){ int take = 0, skip = 0;
  for (int x : a) { int nt = skip + x; skip = max(skip, take); take = nt; }
  return max(take, skip); }`],
      ['Longest Common Subsequence of two strings.', 'Medium', R`int lcs(string a, string b){ int n = a.size(), m = b.size(); vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
  for (int i = 1; i <= n; i++) for (int j = 1; j <= m; j++)
    dp[i][j] = a[i-1] == b[j-1] ? dp[i-1][j-1] + 1 : max(dp[i-1][j], dp[i][j-1]);
  return dp[n][m]; }`],
      ['0/1 Knapsack with weights w, values v and capacity W.', 'Medium', R`int knap(vector<int>& w, vector<int>& v, int W){ vector<int> dp(W + 1, 0);
  for (size_t i = 0; i < w.size(); i++) for (int c = W; c >= w[i]; c--)   // backwards: each item once
    dp[c] = max(dp[c], dp[c - w[i]] + v[i]);
  return dp[W]; }`]
    ]
  },

  'dsa.hash-table': {
    explain: [
      'A **hash table** stores key–value pairs in an array of buckets. A **hash function** converts a key to a bucket index, giving **O(1) average** insert, search and delete.',
      '**Collisions** (two keys, same bucket) are handled by **chaining** (a list per bucket) or **open addressing** (probe for another slot: linear, quadratic, double hashing).',
      '**Load factor** α = n / buckets. When it gets high (e.g. > 0.75) the table **rehashes** into a bigger array.',
      'Worst case O(n) if many keys collide. Hash tables are **unordered** — use a balanced BST (map/TreeMap) when you need sorted keys.',
      'In code: C++ `unordered_map`, Java `HashMap`, Python `dict`, JS `Map`.'
    ],
    syntax: R`unordered_map<string, int> freq;
freq["apple"]++;
if (freq.count("apple")) ...`,
    code: { lang: 'cpp', src: R`#include <bits/stdc++.h>
using namespace std;
// Two Sum: indices of two numbers adding to target, O(n)
vector<int> twoSum(const vector<int>& a, int target) {
    unordered_map<int, int> seen;              // value -> index
    for (int i = 0; i < (int)a.size(); i++) {
        int need = target - a[i];
        if (seen.count(need)) return {seen[need], i};
        seen[a[i]] = i;
    }
    return {};
}
int main() {
    auto r = twoSum({2, 7, 11, 15}, 9);
    cout << r[0] << " " << r[1] << "\n";
    // word frequency
    unordered_map<string, int> f;
    for (string w : {"ai", "ml", "ai", "dsa", "ai"}) f[w]++;
    cout << "ai appears " << f["ai"] << " times\n";
}`, out: R`0 1
ai appears 3 times` },
    theory: [
      ['Average and worst-case complexity of hash table operations?', 'Average O(1); worst O(n) when all keys collide.'],
      ['What is a collision? How is it resolved?', 'Two keys hashing to the same index. Resolved by chaining or open addressing (linear/quadratic probing, double hashing).'],
      ['What is load factor and rehashing?', 'Load factor = items / buckets. When it exceeds a threshold, a larger table is allocated and all keys are re-inserted.'],
      ['Properties of a good hash function?', 'Fast, deterministic, spreads keys uniformly, uses the whole key.'],
      ['unordered_map vs map in C++?', 'unordered_map: hash table, O(1) average, no order. map: red-black tree, O(log n), keys sorted.']
    ],
    coding: [
      ['First non-repeating character in a string.', 'Easy', R`char firstUnique(string s){ int c[256] = {0}; for (unsigned char ch : s) c[ch]++; for (unsigned char ch : s) if (c[ch] == 1) return ch; return '_'; }`],
      ['Group anagrams together.', 'Medium', R`vector<vector<string>> group(vector<string>& w){ unordered_map<string, vector<string>> m;
  for (auto& s : w) { string k = s; sort(k.begin(), k.end()); m[k].push_back(s); }
  vector<vector<string>> r; for (auto& [k, v] : m) r.push_back(v); return r; }`],
      ['Longest consecutive sequence in O(n).', 'Medium', R`int longest(vector<int>& a){ unordered_set<int> s(a.begin(), a.end()); int best = 0;
  for (int x : s) if (!s.count(x - 1)) { int y = x; while (s.count(y + 1)) y++; best = max(best, y - x + 1); }
  return best; }`]
    ]
  }
};
