// Full lessons — Programming for Problem Solving Using C (Semester 1), part 2
const R = String.raw;

export default {
  'c-prog.preprocessor': {
    explain: [
      'The **preprocessor** runs before the compiler and processes lines starting with `#` (directives). It does **text substitution** — it knows nothing about C types.',
      '- `#include` – paste a header file’s contents (`<stdio.h>` for system, `"my.h"` for your own)',
      '- `#define` – constants and macros',
      '- `#if / #ifdef / #ifndef / #else / #elif / #endif` – conditional compilation',
      '- `#undef`, `#pragma`, `#error`, `#line`',
      'Predefined macros: `__FILE__`, `__LINE__`, `__DATE__`, `__TIME__`, `__STDC_VERSION__`.',
      '**Include guards** stop a header being included twice.'
    ],
    syntax: R`#include <stdio.h>
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
#ifndef MYHEADER_H
#define MYHEADER_H
/* header contents */
#endif`,
    code: { lang: 'c', src: R`#include <stdio.h>
#define MAX 5                       // object-like macro (constant)
#define SQUARE(x) ((x) * (x))       // function-like macro: always bracket!
#define DEBUG 1

int main(void) {
    int a[MAX] = {1, 2, 3, 4, 5};
    printf("SQUARE(3+1) = %d\n", SQUARE(3 + 1));   // ((3+1)*(3+1)) = 16
#if DEBUG
    printf("Debug: file %s, line %d\n", __FILE__, __LINE__);
#endif
    printf("Last = %d\n", a[MAX - 1]);
    return 0;
}`, out: R`SQUARE(3+1) = 16
Debug: file main.c, line 10
Last = 5` },
    theory: [
      ['What is a preprocessor directive?', 'An instruction starting with # processed before compilation (include, define, conditional compilation).'],
      ['Difference between #include <file> and "file"?', '<file> searches system include paths; "file" searches the current directory first, then system paths.'],
      ['What is an include guard?', '#ifndef/#define/#endif around a header to prevent multiple inclusion (or #pragma once).'],
      ['Why put brackets in macro definitions?', 'Without them, SQUARE(3+1) defined as x*x expands to 3+1*3+1 = 7, not 16.'],
      ['Macro vs const variable?', 'A macro is text-replaced with no type or scope; a const variable has a type, scope and is checked by the compiler.']
    ],
    coding: [
      ['Write a macro MAX(a,b) that returns the larger value.', 'Easy', R`#define MAX(a, b) ((a) > (b) ? (a) : (b))`],
      ['Predict: `#define SQ(x) x*x` then `printf("%d", SQ(2+3));`', 'Easy', 'Expands to 2+3*2+3 = **11**, not 25.'],
      ['Print a message only when compiled with -DDEBUG.', 'Easy', R`#ifdef DEBUG
  printf("debug mode\n");
#endif
// gcc main.c -DDEBUG`]
    ]
  },

  'c-prog.arrays': {
    explain: [
      'An **array** stores a fixed number of elements of the **same type** in **contiguous** memory, accessed by an index starting at **0**.',
      '`int a[5];` reserves 5 ints. Valid indices: 0 to 4. `a[5]` is **out of bounds** — C does not check, it is undefined behaviour.',
      'Initialization: `int a[5] = {1, 2, 3};` → remaining elements become 0. `int b[] = {4, 5, 6};` → size inferred as 3.',
      'Address of `a[i]` = base address + i × sizeof(element). That is why access is **O(1)**.',
      'Array size must be known at compile time (C99 also allows variable-length arrays). Length trick: `sizeof a / sizeof a[0]`.'
    ],
    syntax: R`type name[SIZE];
int marks[5] = {90, 80, 70, 60, 50};
marks[2] = 75;          // update third element`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int a[] = {12, 45, 7, 89, 23};
    int n = sizeof a / sizeof a[0];       // 5 elements
    int sum = 0, max = a[0];
    for (int i = 0; i < n; i++) {
        sum += a[i];                      // traverse
        if (a[i] > max) max = a[i];       // track maximum
    }
    printf("n=%d sum=%d max=%d avg=%.2f\n", n, sum, max, (float)sum / n);
    // reverse in place with two pointers
    for (int i = 0, j = n - 1; i < j; i++, j--) {
        int t = a[i]; a[i] = a[j]; a[j] = t;
    }
    for (int i = 0; i < n; i++) printf("%d ", a[i]);
    return 0;
}`, out: R`n=5 sum=176 max=89 avg=35.20
23 89 7 45 12` },
    theory: [
      ['What is an array? Why does indexing start at 0?', 'A contiguous collection of same-type elements. Index = offset from the base address, so the first element is at offset 0.'],
      ['What happens if you access an array out of bounds?', 'Undefined behaviour — garbage values, overwriting other data or a crash. C does no bounds checking.'],
      ['How do you find the number of elements of an array?', 'sizeof(arr) / sizeof(arr[0]) — works only where the real array is visible (not inside a function receiving a pointer).'],
      ['Array vs pointer?', 'An array is a block of memory; its name decays to a pointer to the first element in most expressions, but sizeof and & treat it as the whole array.'],
      ['Time to access, insert and delete in an array?', 'Access O(1); insert/delete in the middle O(n) because elements must shift.']
    ],
    coding: [
      ['Find the second largest element in an array.', 'Medium', R`int first = INT_MIN, second = INT_MIN;   // <limits.h>
for (int i = 0; i < n; i++) {
  if (a[i] > first) { second = first; first = a[i]; }
  else if (a[i] > second && a[i] != first) second = a[i];
}`],
      ['Insert an element at position pos.', 'Easy', R`for (int i = n; i > pos; i--) a[i] = a[i - 1];
a[pos] = x; n++;`],
      ['Remove duplicates from a sorted array and return the new length.', 'Medium', R`int k = 1;
for (int i = 1; i < n; i++) if (a[i] != a[k - 1]) a[k++] = a[i];
// k is the new length`]
    ]
  },

  'c-prog.2d-arrays': {
    explain: [
      'A **2-D array** is an array of arrays — think rows × columns, like a matrix: `int m[3][4];` has 3 rows and 4 columns.',
      'C stores it in **row-major** order: all of row 0, then row 1, … Address of `m[i][j]` = base + (i × cols + j) × size.',
      'Initialization: `int m[2][3] = {{1,2,3},{4,5,6}};` — the row count can be omitted but **columns must be given**.',
      'When passing to a function, the column size is required: `void print(int m[][3], int rows)`.',
      'Use nested loops: outer for rows, inner for columns.'
    ],
    syntax: R`int m[ROWS][COLS];
m[i][j] = value;
void f(int m[][COLS], int rows);`,
    code: { lang: 'c', src: R`#include <stdio.h>
#define N 3
int main(void) {
    int a[N][N] = {{1,2,3},{4,5,6},{7,8,9}};
    int b[N][N] = {{9,8,7},{6,5,4},{3,2,1}};
    int c[N][N] = {0};                       // all zeros
    for (int i = 0; i < N; i++)              // row of a
        for (int j = 0; j < N; j++)          // column of b
            for (int k = 0; k < N; k++)
                c[i][j] += a[i][k] * b[k][j];   // row · column
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) printf("%4d", c[i][j]);
        printf("\n");
    }
    return 0;
}`, out: R`  30  24  18
  84  69  54
 138 114  90` },
    theory: [
      ['How is a 2-D array stored in C?', 'In row-major order — rows are stored one after another in contiguous memory.'],
      ['Why must the column size be specified when passing a 2-D array?', 'The compiler needs it to calculate the address of m[i][j] = base + (i*cols + j).'],
      ['Condition for multiplying matrices A (m×n) and B (p×q)?', 'n must equal p; the result is m×q.'],
      ['Time complexity of naive matrix multiplication?', 'O(n³) for n×n matrices.']
    ],
    coding: [
      ['Transpose a matrix.', 'Easy', R`for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) t[j][i] = m[i][j];`],
      ['Sum of the main diagonal and the anti-diagonal.', 'Easy', R`for (int i = 0; i < n; i++) { d1 += m[i][i]; d2 += m[i][n - 1 - i]; }`],
      ['Print a matrix in spiral order.', 'Medium', R`int top=0, bot=r-1, left=0, right=c-1;
while (top <= bot && left <= right) {
  for (int j=left; j<=right; j++) printf("%d ", m[top][j]); top++;
  for (int i=top; i<=bot; i++) printf("%d ", m[i][right]); right--;
  if (top <= bot) { for (int j=right; j>=left; j--) printf("%d ", m[bot][j]); bot--; }
  if (left <= right) { for (int i=bot; i>=top; i--) printf("%d ", m[i][left]); left++; }
}`]
    ]
  },

  'c-prog.strings': {
    explain: [
      'C has no string type. A **string** is a `char` array ending with the **null character** `\\0`.',
      '`char s[] = "Hi";` uses **3** bytes: `H`, `i`, `\\0`. Always leave room for `\\0`.',
      '`char s[10] = "Hi";` is a modifiable array. `char *p = "Hi";` points to a **read-only string literal** — modifying it is undefined behaviour.',
      'Read: `scanf("%s", s)` (one word) or `fgets(s, size, stdin)` (whole line). Print: `printf("%s", s)` or `puts(s)`.',
      'Library functions live in `string.h`: strlen, strcpy, strcat, strcmp, strchr, strstr, strncpy…'
    ],
    syntax: R`char name[20] = "Supriya";
printf("%s has %zu letters\n", name, strlen(name));`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    char s[100];
    fgets(s, sizeof s, stdin);          // e.g. "Hello World\n"
    int len = 0;
    while (s[len] != '\0' && s[len] != '\n') len++;   // length without strlen
    s[len] = '\0';                      // drop the newline
    int vowels = 0;
    for (int i = 0; s[i]; i++) {        // s[i] is false at '\0'
        char c = s[i] | 32;             // quick lowercase for letters
        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') vowels++;
    }
    printf("\"%s\" length=%d vowels=%d\n", s, len, vowels);
    return 0;
}`, out: R`Input: Hello World
"Hello World" length=11 vowels=3` },
    theory: [
      ['How is a string stored in C?', 'As a char array terminated by the null character \\0 (ASCII 0).'],
      ["Difference between 'A' and \"A\"?", "'A' is a single char (1 byte); \"A\" is a string of 2 bytes: 'A' and '\\0'."],
      ['Difference between char s[] = "hi" and char *s = "hi"?', 'The array is a modifiable copy; the pointer points to a read-only literal.'],
      ['Why is gets() banned?', 'It cannot limit input size, causing buffer overflows. It was removed in C11; use fgets.'],
      ['What does strlen return for "abc"?', '3 — it does not count the null terminator. sizeof("abc") is 4.']
    ],
    coding: [
      ['Check whether a string is a palindrome.', 'Easy', R`int i = 0, j = strlen(s) - 1, ok = 1;
while (i < j) if (s[i++] != s[j--]) { ok = 0; break; }
puts(ok ? "Palindrome" : "Not palindrome");`],
      ['Count words in a sentence.', 'Medium', R`int words = 0, in = 0;
for (int i = 0; s[i]; i++) {
  if (s[i] == ' ' || s[i] == '\n' || s[i] == '\t') in = 0;
  else if (!in) { in = 1; words++; }
}`],
      ['Toggle the case of every letter ("HeLLo" → "hEllO").', 'Easy', R`for (int i = 0; s[i]; i++)
  if (isalpha((unsigned char)s[i])) s[i] ^= 32;   // flips bit 5`]
    ]
  },

  'c-prog.string-functions': {
    explain: [
      '`#include <string.h>` gives ready-made string functions:',
      '- `strlen(s)` – length (without `\\0`)',
      '- `strcpy(dst, src)` / `strncpy` – copy',
      '- `strcat(dst, src)` / `strncat` – append',
      '- `strcmp(a, b)` – compare: 0 if equal, <0 if a comes first, >0 otherwise',
      '- `strchr(s, c)`, `strrchr` – find a character; `strstr(s, sub)` – find a substring',
      '- `strrev`, `strupr`, `strlwr` – **not standard** (Turbo C/MSVC only); write your own for portability',
      'Destination must be large enough — `strcpy`/`strcat` do not check sizes. Prefer `snprintf` or size-limited versions.'
    ],
    syntax: R`size_t strlen(const char *s);
char *strcpy(char *dst, const char *src);
char *strcat(char *dst, const char *src);
int strcmp(const char *a, const char *b);`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <string.h>
int main(void) {
    char first[30] = "Supriya", last[] = "Kumari", full[60];
    strcpy(full, first);           // full = "Supriya"
    strcat(full, " ");             // full = "Supriya "
    strcat(full, last);            // full = "Supriya Kumari"
    printf("%s (%zu chars)\n", full, strlen(full));
    printf("cmp = %d\n", strcmp("apple", "banana") < 0);   // 1: apple comes first
    char *p = strstr(full, "Kum");
    if (p) printf("found at index %td\n", p - full);
    return 0;
}`, out: R`Supriya Kumari (14 chars)
cmp = 1
found at index 8` },
    theory: [
      ['What does strcmp return?', '0 if equal, a negative value if the first differing char of a is smaller, positive if larger.'],
      ['Why can strcpy be dangerous?', 'It doesn’t check the destination size — copying a longer string overflows the buffer.'],
      ['Is strrev standard C?', 'No. It exists in some compilers only; write your own reverse function.'],
      ['Difference between strcpy and memcpy?', 'strcpy copies until \\0; memcpy copies an exact number of bytes, including zeros.']
    ],
    coding: [
      ['Implement your own strlen.', 'Easy', R`size_t my_strlen(const char *s){ const char *p = s; while (*p) p++; return p - s; }`],
      ['Implement your own strcmp.', 'Medium', R`int my_strcmp(const char *a, const char *b){
  while (*a && *a == *b) { a++; b++; }
  return (unsigned char)*a - (unsigned char)*b;
}`],
      ['Reverse a string in place without strrev.', 'Easy', R`void rev(char *s){ for (int i = 0, j = strlen(s) - 1; i < j; i++, j--) { char t = s[i]; s[i] = s[j]; s[j] = t; } }`]
    ]
  },

  'c-prog.functions': {
    explain: [
      'A **function** is a named block of code that does one job. It avoids repetition, makes code readable and easier to test.',
      'Three parts: **declaration/prototype** (tells the compiler name, return type, parameters), **definition** (the body), **call** (runs it).',
      '`return` sends a value back; a `void` function returns nothing.',
      'C passes arguments **by value** — the function gets copies. To change the caller’s variables, pass **pointers**.',
      'Every C program starts executing at `main()`; its return value (0 = success) goes to the operating system.'
    ],
    syntax: R`return_type name(type param1, type param2);   // prototype
return_type name(type param1, type param2) {   // definition
    ...
    return value;
}
result = name(arg1, arg2);                      // call`,
    code: { lang: 'c', src: R`#include <stdio.h>
int isPrime(int n);              // prototype (declaration)

int main(void) {
    for (int i = 1; i <= 20; i++)
        if (isPrime(i)) printf("%d ", i);   // call
    printf("\n");
    return 0;
}

int isPrime(int n) {             // definition
    if (n < 2) return 0;
    for (int d = 2; d * d <= n; d++)  // check divisors up to sqrt(n)
        if (n % d == 0) return 0;
    return 1;
}`, out: '2 3 5 7 11 13 17 19' },
    theory: [
      ['Why do we use functions?', 'Reuse, modularity, readability, easier debugging and testing, and teamwork.'],
      ['What is a function prototype? Is it mandatory?', 'A declaration of name, return type and parameter types. Needed if the function is called before it is defined (required in modern C).'],
      ['Actual vs formal parameters?', 'Actual = values in the call; formal = variables in the definition that receive copies.'],
      ['Can a function return more than one value?', 'Not directly — return a struct, or use pointer parameters to set several outputs.'],
      ['What does int main(void) return and why?', 'An int exit status to the OS; 0 means success.']
    ],
    coding: [
      ['Write a function that returns the GCD of two numbers.', 'Easy', R`int gcd(int a, int b){ while (b) { int t = a % b; a = b; b = t; } return a; }`],
      ['Write a function to check if a number is a palindrome.', 'Easy', R`int isPal(int n){ int r = 0, t = n; while (t) { r = r * 10 + t % 10; t /= 10; } return r == n; }`],
      ['Write functions to compute nCr using a factorial function.', 'Medium', R`long long fact(int n){ long long f = 1; for (int i = 2; i <= n; i++) f *= i; return f; }
long long nCr(int n, int r){ return fact(n) / (fact(r) * fact(n - r)); }`]
    ]
  },

  'c-prog.call-by-value': {
    explain: [
      'In **call by value**, the function receives a **copy** of each argument. Changes inside the function affect only the copy.',
      'This is the **only** way C passes arguments — even pointers are passed by value (the address is copied).',
      'It is safe (caller’s data can’t be changed accidentally) but large structs are copied, which costs time and memory.',
      'Classic exam program: a swap function using call by value **does not** swap the caller’s variables.'
    ],
    syntax: R`void f(int x) { x = 100; }   // changes only the local copy`,
    code: { lang: 'c', src: R`#include <stdio.h>
void swap(int x, int y) {          // x, y are copies
    int t = x; x = y; y = t;
    printf("inside : x=%d y=%d\n", x, y);
}
int main(void) {
    int a = 10, b = 20;
    swap(a, b);
    printf("outside: a=%d b=%d\n", a, b);   // unchanged!
    return 0;
}`, out: R`inside : x=20 y=10
outside: a=10 b=20` },
    theory: [
      ['What is call by value?', 'The function receives copies of arguments; modifying them does not affect the caller.'],
      ['Why didn’t the swap work?', 'Only the local copies were swapped; a and b in main were never touched.'],
      ['Advantage of call by value?', 'Protects the caller’s data from accidental changes.'],
      ['Is an array passed by value?', 'No copy of the array is made — the array decays to a pointer, so the function can modify the original elements.']
    ],
    coding: [
      ['Show that modifying a parameter does not change the argument.', 'Easy', R`void inc(int n){ n++; }
int main(void){ int x = 5; inc(x); printf("%d", x); }   // prints 5`],
      ['Write a function that returns the square of a number (call by value).', 'Easy', R`int sq(int n){ return n * n; }`],
      ['Pass a struct by value and show the original is unchanged.', 'Easy', R`struct P { int x; };
void move(struct P p){ p.x = 99; }
// after move(pt), pt.x is still the old value`]
    ]
  },

  'c-prog.call-by-reference': {
    explain: [
      '**Call by reference** in C is done by passing the **address** of a variable (a pointer). The function dereferences it with `*` to read or change the original.',
      'Use it when a function must **modify** the caller’s variables, **return multiple values**, or avoid copying large data.',
      'Syntax: call with `&a`, receive with `int *p`, change with `*p = ...`.',
      'Technically C still passes the pointer by value (the address is copied), but the effect is call by reference.'
    ],
    syntax: R`void f(int *p) { *p = 100; }   // changes the caller's variable
f(&x);`,
    code: { lang: 'c', src: R`#include <stdio.h>
void swap(int *x, int *y) {     // receive addresses
    int t = *x;                 // value at address x
    *x = *y;
    *y = t;
}
void minMax(int a[], int n, int *mn, int *mx) {   // return two results
    *mn = *mx = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < *mn) *mn = a[i];
        if (a[i] > *mx) *mx = a[i];
    }
}
int main(void) {
    int a = 10, b = 20;
    swap(&a, &b);               // pass addresses
    printf("a=%d b=%d\n", a, b);
    int arr[] = {7, 2, 9, 4}, lo, hi;
    minMax(arr, 4, &lo, &hi);
    printf("min=%d max=%d\n", lo, hi);
    return 0;
}`, out: R`a=20 b=10
min=2 max=9` },
    theory: [
      ['How is call by reference achieved in C?', 'By passing pointers (addresses) and dereferencing them inside the function.'],
      ['Call by value vs call by reference?', 'Value: copies, original unchanged. Reference: address, original can be changed; no copy of large data.'],
      ['Does C support true references like C++?', 'No. C only has pointers; C++ adds reference types (int &x).'],
      ['Why is scanf called with &x?', 'scanf needs the address so it can store the input into x — call by reference.']
    ],
    coding: [
      ['Write a function that returns quotient and remainder through pointers.', 'Easy', R`void divmod(int a, int b, int *q, int *r){ *q = a / b; *r = a % b; }`],
      ['Write a function that increments every element of an array.', 'Easy', R`void incAll(int *a, int n){ for (int i = 0; i < n; i++) a[i]++; }`],
      ['Sort three variables in ascending order using a swap function with pointers.', 'Medium', R`void swap(int *x,int *y){int t=*x;*x=*y;*y=t;}
void sort3(int *a,int *b,int *c){ if(*a>*b) swap(a,b); if(*b>*c) swap(b,c); if(*a>*b) swap(a,b); }`]
    ]
  },

  'c-prog.recursion': {
    explain: [
      '**Recursion** is when a function calls **itself** to solve a smaller version of the same problem.',
      'Every recursive function needs: (1) a **base case** that stops the recursion and (2) a **recursive case** that moves toward the base case.',
      'Each call gets its own **stack frame**. Too many calls (or a missing base case) cause **stack overflow**.',
      'Recursion suits problems that are naturally self-similar: factorial, Fibonacci, GCD, Tower of Hanoi, tree traversal, permutations.',
      'Naive recursive Fibonacci is **O(2ⁿ)** because it recomputes values — use a loop or memoization.'
    ],
    syntax: R`int f(int n) {
    if (n == 0) return BASE_VALUE;   // base case
    return ... f(n - 1) ...;         // recursive case
}`,
    code: { lang: 'c', src: R`#include <stdio.h>
long long fact(int n) {
    if (n <= 1) return 1;          // base case
    return n * fact(n - 1);        // n! = n * (n-1)!
}
int sumDigits(int n) {
    if (n == 0) return 0;
    return n % 10 + sumDigits(n / 10);
}
int power(int a, int b) {          // fast power: O(log b)
    if (b == 0) return 1;
    int half = power(a, b / 2);
    return (b % 2) ? half * half * a : half * half;
}
int main(void) {
    printf("5! = %lld\n", fact(5));
    printf("sumDigits(9045) = %d\n", sumDigits(9045));
    printf("2^10 = %d\n", power(2, 10));
    return 0;
}`, out: R`5! = 120
sumDigits(9045) = 18
2^10 = 1024` },
    theory: [
      ['What is recursion?', 'A technique where a function calls itself to solve smaller sub-problems until a base case is reached.'],
      ['What happens if there is no base case?', 'Infinite recursion until the call stack overflows and the program crashes.'],
      ['Recursion vs iteration?', 'Recursion is shorter and natural for trees/divide-and-conquer but uses stack memory and call overhead; iteration is usually faster.'],
      ['What is tail recursion?', 'The recursive call is the last operation, so compilers can turn it into a loop.'],
      ['Why is recursive Fibonacci slow?', 'It recomputes the same values repeatedly — O(2ⁿ). Memoization or a loop makes it O(n).'],
      ['What is the Ackermann function?', 'A rapidly growing recursive function A(m,n) that is not primitive recursive — used to show deep recursion.']
    ],
    coding: [
      ['Print numbers from n down to 1 and back up to n using one recursive function.', 'Easy', R`void p(int n){ if (n == 0) return; printf("%d ", n); p(n - 1); printf("%d ", n); }`],
      ['Reverse a string using recursion.', 'Medium', R`void rev(char *s, int i, int j){ if (i >= j) return; char t = s[i]; s[i] = s[j]; s[j] = t; rev(s, i + 1, j - 1); }`],
      ['Binary search using recursion.', 'Medium', R`int bs(int a[], int lo, int hi, int x){
  if (lo > hi) return -1;
  int mid = lo + (hi - lo) / 2;
  if (a[mid] == x) return mid;
  return a[mid] < x ? bs(a, mid + 1, hi, x) : bs(a, lo, mid - 1, x);
}`]
    ]
  },

  'c-prog.factorial': {
    explain: [
      'Factorial: `n! = n × (n−1) × … × 1`, with `0! = 1`.',
      'It grows very fast: 13! already overflows a 32-bit int, 20! is the largest that fits in `long long`.',
      'Two ways: **iterative** (loop, O(n) time, O(1) space) and **recursive** (O(n) time, O(n) stack).',
      'Used in permutations nPr = n!/(n−r)! and combinations nCr = n!/(r!(n−r)!).'
    ],
    syntax: R`fact(0) = 1
fact(n) = n * fact(n-1)`,
    code: { lang: 'c', src: R`#include <stdio.h>
long long factIter(int n) {
    long long f = 1;
    for (int i = 2; i <= n; i++) f *= i;   // multiply 2..n
    return f;
}
long long factRec(int n) {
    return n <= 1 ? 1 : n * factRec(n - 1);
}
int main(void) {
    for (int n = 0; n <= 6; n++)
        printf("%d! = %lld / %lld\n", n, factIter(n), factRec(n));
    return 0;
}`, out: R`0! = 1 / 1
1! = 1 / 1
2! = 2 / 2
3! = 6 / 6
4! = 24 / 24
5! = 120 / 120
6! = 720 / 720` },
    theory: [
      ['Why is 0! = 1?', 'There is exactly one way to arrange zero items, and it keeps formulas like n! = n·(n−1)! consistent.'],
      ['Largest factorial that fits in a 64-bit signed integer?', '20! = 2,432,902,008,176,640,000.'],
      ['Space complexity of recursive factorial?', 'O(n) because of n stack frames.']
    ],
    coding: [
      ['Count trailing zeros of n! without computing it.', 'Medium', R`int z = 0; for (long long p = 5; p <= n; p *= 5) z += n / p;`],
      ['Compute n! modulo 1e9+7 for n up to 10⁶.', 'Medium', R`long long f = 1; const long long M = 1000000007;
for (int i = 2; i <= n; i++) f = f * i % M;`],
      ['Print the factorial of numbers from 1 to 10 in a table.', 'Easy', R`long long f = 1; for (int i = 1; i <= 10; i++) { f *= i; printf("%2d! = %lld\n", i, f); }`]
    ]
  },

  'c-prog.fibonacci': {
    explain: [
      'Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, … each term is the sum of the previous two. F(0) = 0, F(1) = 1, F(n) = F(n−1) + F(n−2).',
      '**Iterative** solution: O(n) time, O(1) space — best.',
      '**Naive recursion**: O(2ⁿ) time — recomputes the same terms again and again.',
      '**Memoization** (store computed values) makes recursion O(n) — your first taste of Dynamic Programming.'
    ],
    syntax: R`F(n) = F(n-1) + F(n-2),  F(0)=0, F(1)=1`,
    code: { lang: 'c', src: R`#include <stdio.h>
long long memo[91];                       // memo[i] = F(i), 0 = not computed yet
long long fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];          // already computed
    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
}
int main(void) {
    int n = 10;
    long long a = 0, b = 1;               // iterative version
    for (int i = 0; i < n; i++) {
        printf("%lld ", a);
        long long t = a + b; a = b; b = t;
    }
    printf("\nF(50) = %lld\n", fibMemo(50));
    return 0;
}`, out: R`0 1 1 2 3 5 8 13 21 34
F(50) = 12586269025` },
    theory: [
      ['Time complexity of recursive Fibonacci?', 'O(2ⁿ) (more precisely about O(1.618ⁿ)) because of overlapping subproblems.'],
      ['How do you make it O(n)?', 'Use a loop or memoization (store results).'],
      ['Can it be done faster than O(n)?', 'Yes — matrix exponentiation or fast doubling in O(log n).']
    ],
    coding: [
      ['Print Fibonacci numbers less than 1000.', 'Easy', R`for (int a = 0, b = 1; a < 1000; ) { printf("%d ", a); int t = a + b; a = b; b = t; }`],
      ['Check if a number is a Fibonacci number.', 'Medium', 'n is Fibonacci if 5n²+4 or 5n²−4 is a perfect square. Check with `long long s = sqrtl(x); s*s == x`.'],
      ['Climbing stairs: ways to climb n steps taking 1 or 2 at a time.', 'Easy', 'It is Fibonacci: ways(n) = ways(n−1) + ways(n−2), ways(1)=1, ways(2)=2.']
    ]
  },

  'c-prog.pointers': {
    explain: [
      'A **pointer** is a variable that stores the **memory address** of another variable.',
      '`int x = 10; int *p = &x;` → `p` holds the address of x, and `*p` gives the value at that address (10).',
      '- `&` (address-of) gets an address. `*` (dereference) reads/writes the value at an address.',
      '- A pointer’s type tells how many bytes to read and how far `p + 1` moves (`sizeof(type)`).',
      '- On a 64-bit system every pointer is 8 bytes, whatever it points to.',
      'Why pointers? Call by reference, dynamic memory (malloc), arrays and strings, linked lists/trees, function pointers, efficient passing of big data.',
      'Danger zone: **NULL**, **uninitialized (wild)** and **dangling** pointers cause crashes — initialize pointers and set them to NULL after free.'
    ],
    syntax: R`int x = 10;
int *p = &x;     // p stores address of x
*p = 20;         // x becomes 20
int **pp = &p;   // pointer to pointer`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int x = 10;
    int *p = &x;                         // p points to x
    printf("x = %d\n", x);
    printf("&x = %p, p = %p\n", (void *)&x, (void *)p);   // same address
    printf("*p = %d\n", *p);             // value at address -> 10
    *p = 25;                             // change x through p
    printf("x after *p = 25 -> %d\n", x);

    int a[3] = {5, 6, 7};
    int *q = a;                          // array name = address of a[0]
    printf("%d %d %d\n", *q, *(q + 1), q[2]);   // pointer arithmetic
    printf("sizeof(p) = %zu bytes\n", sizeof p);
    return 0;
}`, out: R`x = 10
&x = 0x7ffc8c3a1b2c, p = 0x7ffc8c3a1b2c
*p = 10
x after *p = 25 -> 25
5 6 7
sizeof(p) = 8 bytes` },
    theory: [
      ['What is a pointer?', 'A variable that stores the address of another variable.'],
      ['What are & and * operators?', '& returns the address of a variable; * accesses the value stored at an address (dereference).'],
      ['What is a NULL pointer?', 'A pointer that points to nothing (address 0). Dereferencing it crashes the program.'],
      ['What is a dangling pointer?', 'A pointer to memory that has been freed or gone out of scope.'],
      ['What is a wild pointer?', 'An uninitialized pointer containing a garbage address.'],
      ['What is a void pointer?', 'A generic pointer (void *) that can hold any address but must be cast before dereferencing.'],
      ['Size of a pointer on a 64-bit machine?', '8 bytes, regardless of the type it points to.']
    ],
    coding: [
      ['Find the sum of array elements using a pointer.', 'Easy', R`int sum = 0; for (int *p = a; p < a + n; p++) sum += *p;`],
      ['Predict: `int a[] = {10,20,30}; int *p = a; printf("%d %d", *p++, *p);`', 'Medium', 'Unspecified/undefined order of evaluation for the two arguments — explain this in viva. Safe version: `int x = *p++; printf("%d %d", x, *p);` → 10 20.'],
      ['Reverse an array using two pointers.', 'Easy', R`int *l = a, *r = a + n - 1;
while (l < r) { int t = *l; *l++ = *r; *r-- = t; }`]
    ]
  },

  'c-prog.pointer-arithmetic': {
    explain: [
      'You can add/subtract integers to pointers and subtract two pointers of the same array.',
      '`p + 1` moves by **sizeof(*p)** bytes, not 1 byte. For `int *p` (4-byte int) at 1000, `p + 1` is 1004.',
      'Allowed: `p + n`, `p - n`, `p++`, `p--`, `p2 - p1` (number of elements between), comparison (`<`, `==`) within the same array.',
      'Not allowed: adding two pointers, multiplying/dividing pointers.',
      'Equivalent forms: `a[i] == *(a + i) == *(i + a) == i[a]` (yes, `i[a]` is valid!).'
    ],
    syntax: R`int *p = a;
*(p + i)      // same as a[i]
p2 - p1       // elements between`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int a[5] = {10, 20, 30, 40, 50};
    int *p = a, *end = &a[4];
    printf("p=%p p+1=%p\n", (void *)p, (void *)(p + 1));  // differ by 4 bytes
    printf("*(p+2) = %d\n", *(p + 2));        // 30
    printf("2[a] = %d\n", 2[a]);               // also 30 :)
    printf("end - p = %td elements\n", end - p);   // 4
    char s[] = "hey"; char *c = s;
    printf("c+1 moves 1 byte: %c\n", *(c + 1)); // e
    return 0;
}`, out: R`p=0x7ffd0000 p+1=0x7ffd0004
*(p+2) = 30
2[a] = 30
end - p = 4 elements
c+1 moves 1 byte: e` },
    theory: [
      ['If int *p = 1000 (address), what is p + 3?', '1012 when sizeof(int) is 4.'],
      ['Which arithmetic operations are valid on pointers?', 'Adding/subtracting an integer, increment/decrement, subtracting two pointers into the same array, and comparisons.'],
      ['Why is a[i] the same as i[a]?', 'Both mean *(a + i), and addition is commutative.'],
      ['Can you do arithmetic on a void pointer?', 'Not in standard C (GCC allows it as an extension treating size as 1).']
    ],
    coding: [
      ['Find string length using pointer subtraction.', 'Easy', R`char *p = s; while (*p) p++; int len = p - s;`],
      ['Copy one array to another using pointers only.', 'Easy', R`int *src = a, *dst = b; for (int i = 0; i < n; i++) *dst++ = *src++;`],
      ['Predict: `int a[]={1,2,3,4}; int *p=a+3; printf("%d", *(p-2));`', 'Easy', '*(a+1) = **2**']
    ]
  },

  'c-prog.structures': {
    explain: [
      'A **structure** (`struct`) groups variables of **different types** under one name — e.g. a student’s roll number, name and marks.',
      'Members are accessed with the dot operator: `s.roll`. With a pointer to a struct use the arrow: `p->roll` (same as `(*p).roll`).',
      '`typedef` lets you skip writing `struct` every time.',
      'Structures can be nested, put in arrays, passed to and returned from functions.',
      'Size can be **more than the sum of members** because of **padding** added for alignment.'
    ],
    syntax: R`struct Student {
    int roll;
    char name[30];
    float marks;
};
struct Student s1 = {1, "Supriya", 92.5f};
typedef struct Student Student;`,
    code: { lang: 'c', src: R`#include <stdio.h>
typedef struct {
    int roll;
    char name[30];
    float marks;
} Student;

void printStudent(const Student *s) {           // pass by pointer: no copy
    printf("%-3d %-10s %.1f\n", s->roll, s->name, s->marks);
}
int main(void) {
    Student cls[3] = {{1, "Aman", 78.5f}, {2, "Supriya", 92.0f}, {3, "Riya", 85.0f}};
    int top = 0;
    for (int i = 0; i < 3; i++) {
        printStudent(&cls[i]);
        if (cls[i].marks > cls[top].marks) top = i;
    }
    printf("Topper: %s\n", cls[top].name);
    printf("sizeof(Student) = %zu\n", sizeof(Student));
    return 0;
}`, out: R`1   Aman       78.5
2   Supriya    92.0
3   Riya       85.0
Topper: Supriya
sizeof(Student) = 40` },
    theory: [
      ['What is a structure?', 'A user-defined type grouping related variables of different types.'],
      ['Difference between . and -> ?', '. accesses a member of a structure variable; -> accesses a member through a pointer to a structure.'],
      ['Why can sizeof(struct) be larger than the sum of its members?', 'The compiler adds padding so members are aligned for faster access.'],
      ['Can structures be compared with ==?', 'No. Compare member by member (memcmp is unreliable because of padding bytes).'],
      ['Array vs structure?', 'An array holds many items of the same type; a structure holds items of different types.']
    ],
    coding: [
      ['Store and display details of n employees and print the one with the highest salary.', 'Easy', R`typedef struct { int id; char name[30]; double sal; } Emp;
Emp e[100]; int best = 0;
for (int i = 0; i < n; i++) { scanf("%d %29s %lf", &e[i].id, e[i].name, &e[i].sal); if (e[i].sal > e[best].sal) best = i; }
printf("%s\n", e[best].name);`],
      ['Add two complex numbers using a structure.', 'Easy', R`typedef struct { double re, im; } Complex;
Complex add(Complex a, Complex b){ return (Complex){a.re + b.re, a.im + b.im}; }`],
      ['Sort an array of students by marks (descending).', 'Medium', R`int cmp(const void *a, const void *b){
  float d = ((const Student*)b)->marks - ((const Student*)a)->marks;
  return (d > 0) - (d < 0);
}
qsort(cls, n, sizeof(Student), cmp);   // <stdlib.h>`]
    ]
  },

  'c-prog.union': {
    explain: [
      'A **union** looks like a struct, but **all members share the same memory**. Its size equals the **largest member** (plus padding).',
      'Only **one member** holds a meaningful value at a time — writing one member overwrites the others.',
      'Uses: saving memory, variant types (a value that can be int OR float), viewing the same bytes in different ways (e.g. checking endianness).',
      'Usually paired with a **tag** field that says which member is currently valid (tagged union).'
    ],
    syntax: R`union Data {
    int i;
    float f;
    char str[8];
};   // sizeof = 8`,
    code: { lang: 'c', src: R`#include <stdio.h>
union Data { int i; float f; char c; };
struct SData { int i; float f; char c; };
int main(void) {
    union Data d;
    printf("sizeof union  = %zu\n", sizeof(union Data));   // largest member: 4
    printf("sizeof struct = %zu\n", sizeof(struct SData)); // 12 (with padding)
    d.i = 65;
    printf("d.i=%d d.c=%c\n", d.i, d.c);   // c reads the same low byte: 'A' (on little-endian)
    d.f = 3.5f;                            // overwrites the shared memory
    printf("d.f=%.1f d.i now garbage=%d\n", d.f, d.i);
    return 0;
}`, out: R`sizeof union  = 4
sizeof struct = 12
d.i=65 d.c=A
d.f=3.5 d.i now garbage=1080033280` },
    theory: [
      ['Structure vs union?', 'Struct: each member has its own memory, size ≥ sum of members, all usable together. Union: members share memory, size = largest member, one usable at a time.'],
      ['When would you use a union?', 'To save memory when only one of several fields is needed at a time, or to reinterpret bytes.'],
      ['What is a tagged union?', 'A struct holding an enum tag plus a union, where the tag says which union member is valid.']
    ],
    coding: [
      ['Check whether your machine is little-endian using a union.', 'Medium', R`union { int i; char c[4]; } u = { .i = 1 };
puts(u.c[0] == 1 ? "Little endian" : "Big endian");`],
      ['Create a tagged union that stores either an int or a float and prints it correctly.', 'Medium', R`typedef enum { INT, FLT } Kind;
typedef struct { Kind k; union { int i; float f; } v; } Value;
void show(Value x){ if (x.k == INT) printf("%d\n", x.v.i); else printf("%.2f\n", x.v.f); }`],
      ['Predict sizeof: `union U { char a[10]; int b; };`', 'Easy', 'Largest member is 10 bytes, rounded up to int alignment (4) → **12**.']
    ]
  },

  'c-prog.dynamic-memory': {
    explain: [
      '**Dynamic memory allocation** gets memory from the **heap** at run time, when the size isn’t known in advance.',
      'Functions in `<stdlib.h>`:',
      '- `malloc(bytes)` – allocate, contents uninitialized (garbage)',
      '- `calloc(n, size)` – allocate n elements and set all bytes to **0**',
      '- `realloc(ptr, newBytes)` – resize (may move the block)',
      '- `free(ptr)` – give memory back',
      'They return `NULL` on failure — always check. Every `malloc` needs exactly one `free`; forgetting it is a **memory leak**, using memory after `free` is a **dangling pointer** bug.',
      'Heap memory lives until freed; stack (local) memory disappears when the function returns.'
    ],
    syntax: R`int *a = malloc(n * sizeof *a);
int *b = calloc(n, sizeof *b);
a = realloc(a, 2 * n * sizeof *a);
free(a); a = NULL;`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <stdlib.h>
int main(void) {
    int n;
    printf("How many marks? ");
    scanf("%d", &n);
    int *marks = malloc(n * sizeof *marks);      // n ints on the heap
    if (marks == NULL) { printf("Out of memory\n"); return 1; }
    for (int i = 0; i < n; i++) scanf("%d", &marks[i]);

    int *tmp = realloc(marks, (n + 1) * sizeof *marks);   // grow by one
    if (tmp == NULL) { free(marks); return 1; }  // keep old block if realloc fails
    marks = tmp;
    marks[n] = 100;                              // bonus entry
    for (int i = 0; i <= n; i++) printf("%d ", marks[i]);
    free(marks);                                 // release memory
    marks = NULL;                                // avoid dangling pointer
    return 0;
}`, out: R`How many marks? 3
70 80 90
70 80 90 100` },
    theory: [
      ['malloc vs calloc?', 'malloc(bytes) leaves memory uninitialized; calloc(n, size) allocates n×size bytes and zeroes them.'],
      ['What does realloc do if it cannot grow in place?', 'Allocates a new block, copies the old data, frees the old block and returns the new pointer (or NULL on failure, leaving the old block intact).'],
      ['What is a memory leak?', 'Heap memory that is allocated but never freed and no longer reachable.'],
      ['What happens if you free the same pointer twice?', 'Double free — undefined behaviour, often a crash or security bug.'],
      ['Stack vs heap?', 'Stack: automatic, fast, limited, freed on return. Heap: manual (malloc/free), larger, lives until freed.'],
      ['Do we need to cast malloc in C?', 'No — void * converts automatically in C (the cast is required in C++).']
    ],
    coding: [
      ['Create a dynamic array of n integers and find their average.', 'Easy', R`int *a = malloc(n * sizeof *a); long sum = 0;
for (int i = 0; i < n; i++) { scanf("%d", &a[i]); sum += a[i]; }
printf("%.2f\n", (double)sum / n); free(a);`],
      ['Allocate a 2-D matrix of r×c dynamically and free it.', 'Medium', R`int **m = malloc(r * sizeof *m);
for (int i = 0; i < r; i++) m[i] = calloc(c, sizeof **m);
/* use m[i][j] */
for (int i = 0; i < r; i++) free(m[i]);
free(m);`],
      ['Read an unknown number of integers until -1 using realloc.', 'Medium', R`int *a = NULL, n = 0, cap = 0, x;
while (scanf("%d", &x) == 1 && x != -1) {
  if (n == cap) { cap = cap ? cap * 2 : 4; a = realloc(a, cap * sizeof *a); }
  a[n++] = x;
}
free(a);`]
    ]
  },

  'c-prog.self-referential': {
    explain: [
      'A **self-referential structure** contains a **pointer to its own type**. It is the building block of linked lists, trees and graphs.',
      '`struct Node { int data; struct Node *next; };` — each node points to the next node.',
      'A struct cannot contain an instance of itself (infinite size), but it **can** contain a pointer to itself (fixed 8 bytes).',
      'Nodes are created with `malloc`, linked by setting pointers, and freed when no longer needed.'
    ],
    syntax: R`struct Node {
    int data;
    struct Node *next;   // pointer to the same type
};`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { int data; struct Node *next; } Node;

Node *push(Node *head, int v) {          // insert at the front
    Node *n = malloc(sizeof *n);
    n->data = v;
    n->next = head;
    return n;                            // new head
}
int main(void) {
    Node *head = NULL;
    for (int i = 1; i <= 4; i++) head = push(head, i * 10);
    for (Node *p = head; p != NULL; p = p->next) printf("%d -> ", p->data);
    printf("NULL\n");
    while (head) { Node *t = head; head = head->next; free(t); }   // free all
    return 0;
}`, out: '40 -> 30 -> 20 -> 10 -> NULL' },
    theory: [
      ['What is a self-referential structure?', 'A structure with a member that is a pointer to the same structure type.'],
      ['Why can’t a struct contain itself directly?', 'Its size would be infinite; a pointer has a fixed size.'],
      ['Where are self-referential structures used?', 'Linked lists, stacks, queues, trees, graphs.']
    ],
    coding: [
      ['Count the nodes of a linked list.', 'Easy', R`int count(Node *h){ int c = 0; while (h) { c++; h = h->next; } return c; }`],
      ['Insert a node at the end of a linked list.', 'Easy', R`Node *append(Node *h, int v){
  Node *n = malloc(sizeof *n); n->data = v; n->next = NULL;
  if (!h) return n;
  Node *p = h; while (p->next) p = p->next; p->next = n; return h;
}`],
      ['Define a binary-tree node structure.', 'Easy', R`typedef struct TNode { int key; struct TNode *left, *right; } TNode;`]
    ]
  },

  'c-prog.file-handling': {
    explain: [
      'Files keep data after the program ends. C uses a `FILE *` pointer from `<stdio.h>`.',
      'Steps: **open** with `fopen` → **read/write** → **close** with `fclose`.',
      'Modes: `"r"` read (must exist), `"w"` write (creates/overwrites), `"a"` append, `"r+"` read/write, `"w+"`, `"a+"`. Add `b` for binary (`"rb"`, `"wb"`).',
      'Text I/O: `fprintf`/`fscanf`, `fgets`/`fputs`, `fgetc`/`fputc`. Binary I/O: `fread`/`fwrite`.',
      'Random access: `fseek(fp, offset, SEEK_SET|SEEK_CUR|SEEK_END)`, `ftell(fp)`, `rewind(fp)`.',
      'Always check `fopen` for `NULL` (file missing, no permission).'
    ],
    syntax: R`FILE *fp = fopen("data.txt", "w");
if (fp == NULL) { perror("open"); return 1; }
fprintf(fp, "%d %s\n", roll, name);
fclose(fp);`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    FILE *fp = fopen("marks.txt", "w");          // create / overwrite
    if (!fp) { perror("fopen"); return 1; }
    fprintf(fp, "Aman 78\nSupriya 92\nRiya 85\n");
    fclose(fp);

    fp = fopen("marks.txt", "r");                // read it back
    if (!fp) { perror("fopen"); return 1; }
    char name[30]; int m, total = 0, count = 0;
    while (fscanf(fp, "%29s %d", name, &m) == 2) {   // stops at EOF
        printf("%-8s %d\n", name, m);
        total += m; count++;
    }
    fclose(fp);
    printf("Average = %.2f\n", (float)total / count);
    return 0;
}`, out: R`Aman     78
Supriya  92
Riya     85
Average = 85.00` },
    theory: [
      ['Why do we need file handling?', 'To store data permanently and to process large inputs/outputs.'],
      ['Difference between "w" and "a" modes?', '"w" truncates or creates the file; "a" appends to the end without erasing.'],
      ['Text vs binary files?', 'Text files store readable characters (with newline translation on Windows); binary files store exact bytes.'],
      ['What does fseek do?', 'Moves the file position indicator to a given offset from the start, current position or end.'],
      ['What is EOF?', 'A negative constant returned by input functions when the end of file is reached (or on error).'],
      ['Why should we fclose a file?', 'To flush buffered data to disk and release the file handle.']
    ],
    coding: [
      ['Copy the contents of one file into another.', 'Easy', R`FILE *in = fopen("a.txt", "r"), *out = fopen("b.txt", "w");
int ch; while ((ch = fgetc(in)) != EOF) fputc(ch, out);
fclose(in); fclose(out);`],
      ['Count characters, words and lines in a file.', 'Medium', R`int ch, chars = 0, words = 0, lines = 0, in = 0;
while ((ch = fgetc(fp)) != EOF) {
  chars++;
  if (ch == '\n') lines++;
  if (ch == ' ' || ch == '\n' || ch == '\t') in = 0;
  else if (!in) { in = 1; words++; }
}`],
      ['Write an array of structures to a binary file and read it back.', 'Medium', R`fwrite(cls, sizeof(Student), n, fp);    // fp opened "wb"
// later, fp opened "rb"
size_t got = fread(cls2, sizeof(Student), n, fp);`]
    ]
  },

  'c-prog.memory-layout': {
    explain: [
      'A running C program’s memory is divided into segments:',
      '- **Text (code)** – compiled instructions, read-only',
      '- **Data** – initialized global and static variables',
      '- **BSS** – uninitialized global/static variables (set to 0)',
      '- **Heap** – dynamic memory from malloc; grows upward',
      '- **Stack** – function frames: local variables, parameters, return addresses; grows downward',
      'String literals usually live in a read-only data area.',
      'Stack overflow = too deep recursion or huge local arrays; heap problems = leaks, double free, fragmentation.'
    ],
    syntax: R`int g = 5;          // data
int z;              // bss
int main(void) {
    int local;      // stack
    int *h = malloc(4);   // h on stack, *h on heap
}`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <stdlib.h>
int initialized = 10;      // data segment
int uninitialized;         // BSS (auto 0)
int main(void) {
    static int counter;    // BSS
    int local = 1;         // stack
    int *heap = malloc(sizeof *heap);   // heap
    printf("code  : %p\n", (void *)main);
    printf("data  : %p\n", (void *)&initialized);
    printf("bss   : %p\n", (void *)&uninitialized);
    printf("heap  : %p\n", (void *)heap);
    printf("stack : %p\n", (void *)&local);
    free(heap);
    return 0;
}`, out: R`code  : 0x55d3c1a0a189
data  : 0x55d3c1a0d010
bss   : 0x55d3c1a0d018
heap  : 0x55d3c2b9e2a0
stack : 0x7ffe6c3d2b4c   (addresses vary)` },
    theory: [
      ['Name the memory segments of a C program.', 'Text, data, BSS, heap and stack.'],
      ['Where are static local variables stored?', 'In the data segment (if initialized) or BSS (if not) — not on the stack.'],
      ['What causes a stack overflow?', 'Very deep or infinite recursion, or very large local arrays.'],
      ['Why is BSS separate from data?', 'Zero-initialized variables don’t need to be stored in the executable file, saving space.']
    ],
    coding: [
      ['Classify each variable’s segment: global int a=1; static int b; void f(){ int c; static int d=2; int *e=malloc(4); }', 'Easy', 'a → data, b → BSS, c → stack, d → data, e (pointer) → stack, *e → heap.'],
      ['Write a function that causes stack overflow and explain why.', 'Easy', R`void f(void){ int big[100000]; f(); }   // infinite recursion + large frames`],
      ['Why is returning the address of a local variable wrong?', 'Easy', 'The local lives on the stack and is destroyed when the function returns, leaving a dangling pointer. Return by value, use static, or malloc.']
    ]
  }
};
