// Full lessons — Programming for Problem Solving Using C (Semester 1), part 1
// explain: array of markdown lines · code/solutions: String.raw so \n stays as typed in C
const R = String.raw;

export default {
  'c-prog.algorithm': {
    explain: [
      'An **algorithm** is a finite, step-by-step procedure that solves a problem. It is written before code, in plain language, a flowchart or pseudocode.',
      '**Properties (exam favourite):**',
      '- **Input** – zero or more well-defined inputs',
      '- **Output** – at least one result',
      '- **Definiteness** – every step is clear and unambiguous',
      '- **Finiteness** – it must stop after a finite number of steps',
      '- **Effectiveness** – each step is basic enough to be carried out',
      'Good algorithms are also **efficient** (time and memory) — this is what DSA studies later.',
      'Tip: in exams, always write numbered steps starting with **Start** and ending with **Stop**.'
    ],
    syntax: R`Step 1: Start
Step 2: Read inputs
Step 3: Process (calculate / decide / repeat)
Step 4: Print output
Step 5: Stop`,
    code: { lang: 'c', src: R`/* Algorithm: largest of three numbers
   1. Start  2. Read a, b, c
   3. If a>=b and a>=c, largest = a
   4. Else if b>=c, largest = b, else largest = c
   5. Print largest  6. Stop                      */
#include <stdio.h>

int main(void) {
    int a, b, c, largest;            // three inputs and the result
    scanf("%d %d %d", &a, &b, &c);   // Step 2: read inputs
    if (a >= b && a >= c)            // Step 3
        largest = a;
    else if (b >= c)                 // Step 4
        largest = b;
    else
        largest = c;
    printf("Largest = %d\n", largest); // Step 5: output
    return 0;                        // Step 6: stop
}`, out: R`Input: 4 9 2
Largest = 9` },
    theory: [
      ['What is an algorithm?', 'A finite sequence of well-defined steps that takes input and produces output to solve a problem.'],
      ['List the characteristics of a good algorithm.', 'Input, output, definiteness, finiteness, effectiveness — plus efficiency, generality and simplicity.'],
      ['Difference between an algorithm and a program?', 'An algorithm is language-independent logic; a program is that logic written in a specific language and must follow its syntax.'],
      ['Why must an algorithm be finite?', 'A procedure that never stops can never produce its output, so it does not solve the problem.'],
      ['How do you measure an algorithm’s efficiency?', 'By time complexity (number of basic steps as input grows) and space complexity (extra memory), usually in Big-O notation.']
    ],
    coding: [
      ['Write an algorithm and C program to find the sum and average of n numbers.', 'Easy', R`#include <stdio.h>
int main(void) {
    int n; float x, sum = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) { scanf("%f", &x); sum += x; }
    printf("Sum = %.2f, Average = %.2f\n", sum, sum / n);
    return 0;
}`],
      ['Write an algorithm to check whether a number is even or odd.', 'Easy', '1. Start\n2. Read n\n3. If n % 2 == 0 print "Even" else print "Odd"\n4. Stop'],
      ['Write an algorithm to find the factorial of n.', 'Easy', '1. Start\n2. Read n\n3. fact = 1, i = 1\n4. While i <= n: fact = fact × i, i = i + 1\n5. Print fact\n6. Stop']
    ]
  },

  'c-prog.flowchart': {
    explain: [
      'A **flowchart** is a picture of an algorithm. Each step is a symbol and arrows show the order of execution.',
      '- **Oval (terminal)** – Start / Stop',
      '- **Parallelogram** – Input / Output (Read, Print)',
      '- **Rectangle** – Process (calculation, assignment)',
      '- **Diamond** – Decision (Yes/No condition)',
      '- **Arrow** – Flow of control; **Circle** – connector between parts',
      'Rules: one Start and one Stop, arrows flow top→bottom / left→right, every decision has two labelled exits (Yes/No).',
      'Loops in a flowchart are drawn as an arrow going back up to an earlier decision.'
    ],
    syntax: R`(Start) → /Read n/ → [sum = 0, i = 1] → <i <= n ?> --Yes--> [sum = sum + i, i = i + 1] → back to decision
                                                     --No--> /Print sum/ → (Stop)`,
    code: { lang: 'c', src: R`// C code for the flowchart above: sum of 1..n
#include <stdio.h>
int main(void) {
    int n, sum = 0;          // [process] sum = 0
    scanf("%d", &n);         // /input/ Read n
    for (int i = 1; i <= n; i++)   // <decision> i <= n ?
        sum += i;            // [process] sum = sum + i
    printf("%d\n", sum);     // /output/ Print sum
    return 0;                // (Stop)
}`, out: 'Input: 5\n15' },
    theory: [
      ['What is a flowchart? Name its symbols.', 'A diagram of an algorithm. Symbols: oval (start/stop), parallelogram (I/O), rectangle (process), diamond (decision), arrows (flow), circle (connector).'],
      ['Advantages of flowcharts?', 'Easy to understand, good for communication, helps find logic errors, acts as documentation.'],
      ['Limitations of flowcharts?', 'Hard to draw for large programs, difficult to modify, no standard for detail level.'],
      ['How is a loop shown in a flowchart?', 'With a decision box and an arrow that returns to an earlier step until the condition becomes false.'],
      ['Flowchart vs pseudocode?', 'Flowchart is graphical; pseudocode is textual and closer to code — easier to write and change.']
    ],
    coding: [
      ['Draw a flowchart to find the largest of two numbers.', 'Easy', '(Start) → /Read a, b/ → <a > b?> Yes → /Print a/ ; No → /Print b/ → (Stop)'],
      ['Draw a flowchart to print multiplication table of n.', 'Easy', '(Start) → /Read n/ → [i = 1] → <i <= 10?> Yes → /Print n × i/ → [i = i + 1] → back ; No → (Stop)'],
      ['Draw a flowchart to check if a number is prime.', 'Medium', '(Start) → /Read n/ → [i = 2, flag = 1] → <i*i <= n?> Yes → <n % i == 0?> Yes → [flag = 0] → go to output ; No → [i++] → back ; when loop ends → <flag == 1 and n > 1?> → /Prime/ or /Not prime/ → (Stop)']
    ]
  },

  'c-prog.data-types': {
    explain: [
      'A **data type** tells the compiler what kind of value a variable holds, how much memory to reserve and which operations are allowed.',
      '**1. Basic (primitive):** `char`, `int`, `float`, `double`, `void`',
      '**2. Derived:** arrays, pointers, functions (built from basic types)',
      '**3. User-defined:** `struct`, `union`, `enum`, `typedef`',
      'Modifiers `short`, `long`, `signed`, `unsigned` change size/range, e.g. `unsigned int`, `long long`.',
      'Typical sizes on a 64-bit compiler (GCC): char 1, short 2, int 4, long 8 (Linux) / 4 (Windows), float 4, double 8 bytes. Always check with `sizeof`.',
      'Range of a signed n-bit integer: −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1 → int (32-bit): −2,147,483,648 to 2,147,483,647.'
    ],
    syntax: R`char grade = 'A';
int count = 10;
float price = 99.5f;
double pi = 3.14159265358979;
unsigned int age = 19;
long long big = 9000000000LL;`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    // sizeof gives the size in bytes; %zu prints a size_t value
    printf("char   : %zu byte\n",  sizeof(char));
    printf("int    : %zu bytes\n", sizeof(int));
    printf("float  : %zu bytes\n", sizeof(float));
    printf("double : %zu bytes\n", sizeof(double));
    printf("long long: %zu bytes\n", sizeof(long long));
    return 0;
}`, out: R`char   : 1 byte
int    : 4 bytes
float  : 4 bytes
double : 8 bytes
long long: 8 bytes` },
    theory: [
      ['What are the classes of data types in C?', 'Basic (char, int, float, double, void), derived (array, pointer, function) and user-defined (struct, union, enum, typedef).'],
      ['Difference between float and double?', 'float is single precision (4 bytes, ~6–7 digits); double is double precision (8 bytes, ~15–16 digits).'],
      ['What is the void data type used for?', 'Means “no value”: functions that return nothing, functions with no parameters (int main(void)), and generic pointers (void *).'],
      ['What happens on integer overflow?', 'For unsigned types the value wraps around modulo 2ⁿ. For signed types overflow is undefined behaviour.'],
      ['Why is sizeof(int) not always 4?', 'C only guarantees minimum ranges; actual sizes depend on the compiler and platform.'],
      ['Range of unsigned char?', '0 to 255 (8 bits).']
    ],
    coding: [
      ['Print the size of every basic data type using sizeof.', 'Easy', R`#include <stdio.h>
int main(void){
  printf("%zu %zu %zu %zu %zu\n", sizeof(char), sizeof(short), sizeof(int), sizeof(long), sizeof(double));
  return 0;
}`],
      ['Predict the output: `unsigned char c = 255; c = c + 1; printf("%d", c);`', 'Easy', 'Output: **0** — unsigned values wrap around (255 + 1 = 256 mod 256 = 0).'],
      ['Read a character and print its ASCII value.', 'Easy', R`#include <stdio.h>
int main(void){ char ch; scanf("%c", &ch); printf("ASCII of %c = %d\n", ch, ch); return 0; }`]
    ]
  },

  'c-prog.variables': {
    explain: [
      'A **variable** is a named memory location whose value can change while the program runs.',
      'Every variable has a **name**, a **type**, a **value**, an **address** (`&x`) and a **scope/lifetime**.',
      'Naming rules: letters, digits and `_`; must not start with a digit; no spaces; not a keyword; case-sensitive (`sum` ≠ `Sum`).',
      '**Declaration** reserves memory (`int x;`); **initialization** gives the first value (`int x = 5;`).',
      'An uninitialized local variable contains a **garbage value** — always initialize.'
    ],
    syntax: R`type name;            // declaration
type name = value;    // declaration + initialization
int a = 1, b = 2;     // multiple variables`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int marks = 85;              // declared and initialized
    float percent;               // declared only
    percent = marks / 100.0f * 100;   // assigned later
    printf("Marks = %d, Percent = %.1f\n", marks, percent);
    printf("Address of marks = %p\n", (void *)&marks); // every variable has an address
    return 0;
}`, out: R`Marks = 85, Percent = 85.0
Address of marks = 0x7ffd5c1e8a4c   (varies)` },
    theory: [
      ['What is a variable?', 'A named memory location used to store data that can change during execution.'],
      ['Rules for naming identifiers in C?', 'Letters, digits, underscore; cannot start with a digit; no keywords; no special characters or spaces; case-sensitive.'],
      ['Difference between declaration and definition?', 'A declaration introduces the name and type; a definition also allocates memory (for variables) or provides the body (for functions).'],
      ['What value does an uninitialized local variable have?', 'An indeterminate (garbage) value. Global and static variables are automatically 0.'],
      ['Is `int 2num;` valid?', 'No — identifiers cannot start with a digit.']
    ],
    coding: [
      ['Swap two variables using a third variable.', 'Easy', R`int a = 5, b = 9, t;
t = a; a = b; b = t;   // now a = 9, b = 5`],
      ['Swap two numbers without a third variable.', 'Easy', R`a = a + b;  b = a - b;  a = a - b;   // or: a ^= b; b ^= a; a ^= b;`],
      ['Convert temperature from Celsius to Fahrenheit.', 'Easy', R`#include <stdio.h>
int main(void){ float c; scanf("%f",&c); printf("%.2f F\n", c * 9 / 5 + 32); return 0; }`]
    ]
  },

  'c-prog.printf': {
    explain: [
      '`printf()` (from `stdio.h`) prints formatted text to the screen. The first argument is a **format string**; each `%` **format specifier** is replaced by the next argument.',
      'Common specifiers: `%d` int, `%u` unsigned, `%ld` long, `%lld` long long, `%f` float/double, `%e` scientific, `%c` char, `%s` string, `%x` hex, `%o` octal, `%p` pointer, `%%` a literal %.',
      '**Width and precision:** `%5d` (width 5, right-aligned), `%-5d` (left-aligned), `%05d` (zero-padded), `%.2f` (2 decimals), `%8.3f`.',
      '`printf` returns the **number of characters printed** — a favourite output question.',
      'Using the wrong specifier (e.g. `%d` for a float) is undefined behaviour.'
    ],
    syntax: R`printf("format string", arg1, arg2, ...);`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int roll = 7; float cgpa = 8.456f; char sec = 'B';
    printf("Roll: %d | Section: %c\n", roll, sec);
    printf("CGPA: %.2f\n", cgpa);            // 2 digits after decimal
    printf("[%5d] [%-5d] [%05d]\n", roll, roll, roll);
    printf("Hex of 255 = %x, Octal = %o\n", 255, 255);
    int n = printf("Hello\n");              // printf returns chars printed
    printf("printed %d chars\n", n);
    return 0;
}`, out: R`Roll: 7 | Section: B
CGPA: 8.46
[    7] [7    ] [00007]
Hex of 255 = ff, Octal = 377
Hello
printed 6 chars` },
    theory: [
      ['What does printf return?', 'The number of characters printed (or a negative value on error).'],
      ['Difference between %d and %i?', 'In printf they are the same. In scanf, %i also accepts octal (0…) and hex (0x…) input.'],
      ['How do you print a % sign?', 'Use %% in the format string.'],
      ['Which specifier prints a double in printf?', '%f (float is promoted to double). %lf also works in printf since C99; in scanf, %lf is required for double.'],
      ['Predict: printf("%d", printf("abc"));', 'Prints abc3 — inner printf prints "abc" and returns 3.']
    ],
    coding: [
      ['Print a student report card with aligned columns.', 'Easy', R`printf("%-10s %5s\n", "Subject", "Marks");
printf("%-10s %5d\n", "Maths", 92);
printf("%-10s %5d\n", "Physics", 81);`],
      ['Print a float value with exactly 3 decimal places and width 10.', 'Easy', R`printf("%10.3f\n", 3.14159);   // "     3.142"`],
      ['Print the ASCII table from 65 to 90 as char and code.', 'Easy', R`for (int i = 65; i <= 90; i++) printf("%c = %d\n", i, i);`]
    ]
  },

  'c-prog.scanf': {
    explain: [
      '`scanf()` reads formatted input from the keyboard into variables. You must pass the **address** of each variable using `&` (except for strings/arrays, which already are addresses).',
      'Specifiers: `%d` int, `%f` float, `%lf` **double** (required in scanf), `%c` char, `%s` word (stops at space).',
      'scanf returns the number of items successfully read — check it to detect bad input.',
      '**Common trap:** after reading a number, the newline stays in the buffer, so a following `%c` reads `\n`. Use `" %c"` (space before %c) to skip whitespace.',
      'To read a full line with spaces use `fgets(str, size, stdin)` — never `gets()` (removed in C11, unsafe).'
    ],
    syntax: R`scanf("%d", &x);
scanf("%d %f", &a, &b);
scanf(" %c", &ch);        // leading space skips newline
fgets(name, sizeof name, stdin);  // whole line`,
    code: { lang: 'c', src: R`#include <stdio.h>
#include <string.h>
int main(void) {
    int age; double height; char grade; char name[50];
    printf("Age and height: ");
    if (scanf("%d %lf", &age, &height) != 2) {   // check input
        printf("Invalid input\n"); return 1;
    }
    printf("Grade: ");
    scanf(" %c", &grade);                       // space skips leftover '\n'
    getchar();                                  // eat newline before fgets
    printf("Full name: ");
    fgets(name, sizeof name, stdin);            // reads spaces too
    name[strcspn(name, "\n")] = '\0';           // remove trailing newline
    printf("%s, %d yrs, %.2f m, grade %c\n", name, age, height, grade);
    return 0;
}`, out: R`Age and height: 18 1.62
Grade: A
Full name: Supriya Kumari
Supriya Kumari, 18 yrs, 1.62 m, grade A` },
    theory: [
      ['Why do we use & in scanf?', 'scanf needs the address to store the value in the variable’s memory location.'],
      ['Why is & not used with strings in scanf?', 'An array name already decays to the address of its first element.'],
      ['Why does scanf("%c") sometimes skip input?', 'It reads the leftover newline from a previous input. Use " %c" to skip whitespace.'],
      ['Difference between scanf("%s") and fgets?', '%s stops at whitespace and can overflow; fgets reads the whole line including spaces up to a size limit (and keeps the \\n).'],
      ['What does scanf return?', 'The number of successfully matched and assigned inputs, or EOF.']
    ],
    coding: [
      ['Read two integers and print their sum, difference, product, quotient and remainder.', 'Easy', R`int a, b; scanf("%d %d", &a, &b);
printf("%d %d %d %d %d\n", a+b, a-b, a*b, a/b, a%b);`],
      ['Read a line with spaces and remove the trailing newline added by fgets.', 'Medium', R`char s[100];
fgets(s, sizeof s, stdin);
s[strcspn(s, "\n")] = '\0';   // needs <string.h>`],
      ['Keep reading integers until the user enters a non-number, then print the count.', 'Medium', R`int x, count = 0;
while (scanf("%d", &x) == 1) count++;
printf("%d numbers read\n", count);`]
    ]
  },

  'c-prog.compilation': {
    explain: [
      'Turning `hello.c` into a running program has **four stages** (GCC shows each one with flags):',
      '1. **Preprocessing** (`gcc -E`) – handles `#include`, `#define`, removes comments → `hello.i`',
      '2. **Compilation** (`gcc -S`) – translates C to assembly → `hello.s`',
      '3. **Assembly** (`gcc -c`) – converts assembly to machine code **object file** → `hello.o`',
      '4. **Linking** – joins object files with libraries (printf lives in libc) → executable `a.out` / `hello.exe`',
      'Then the **loader** copies the executable into memory and starts `main()`.',
      'Useful command: `gcc hello.c -o hello -Wall -Wextra` then run `./hello` (Linux/Mac) or `hello.exe` (Windows).'
    ],
    syntax: R`gcc -E prog.c -o prog.i    # preprocess only
gcc -S prog.c              # -> prog.s (assembly)
gcc -c prog.c              # -> prog.o (object)
gcc prog.o -o prog         # link -> executable
gcc prog.c -o prog -Wall   # all steps at once`,
    code: { lang: 'bash', src: R`# hello.c
#include <stdio.h>
int main(void) { printf("Hello, StudyEdge!\n"); return 0; }

# Terminal
gcc hello.c -o hello -Wall    # compile + link, show warnings
./hello                       # run (Linux/macOS)
hello.exe                     # run (Windows)`, out: 'Hello, StudyEdge!' },
    theory: [
      ['Name the stages of compilation in C.', 'Preprocessing → compilation → assembly → linking (then loading at run time).'],
      ['What is an object file?', 'Machine code for one source file, not yet linked; it has unresolved references to other files/libraries.'],
      ['What does the linker do?', 'Combines object files and libraries, resolves function/variable references, and produces the executable.'],
      ['Compiler vs interpreter?', 'A compiler translates the whole program to machine code before running; an interpreter executes it statement by statement.'],
      ['What is the role of -Wall?', 'Enables most compiler warnings, helping catch bugs early.'],
      ['Linker error vs compiler error example?', 'Compiler: missing semicolon. Linker: “undefined reference to `foo`” when a declared function is never defined.']
    ],
    coding: [
      ['Compile a program in two steps (object file, then link) and run it.', 'Easy', R`gcc -c main.c      # main.o
gcc main.o -o app  # link
./app`],
      ['Split a program into main.c and math.c with a header; compile both.', 'Medium', R`// math.h
int add(int a, int b);
// math.c
#include "math.h"
int add(int a, int b) { return a + b; }
// main.c
#include <stdio.h>
#include "math.h"
int main(void) { printf("%d\n", add(2, 3)); return 0; }
// terminal: gcc main.c math.c -o app && ./app`],
      ['Write code that compiles but gives a linker error, and fix it.', 'Easy', 'Declare `int sq(int);` and call it in main without defining it → “undefined reference to sq”. Fix: add `int sq(int x){ return x*x; }`.']
    ]
  },

  'c-prog.errors': {
    explain: [
      '**Syntax (compile-time) errors** break the language rules — missing `;`, unmatched braces, undeclared variables. The compiler stops and reports a line number.',
      '**Logical errors** compile and run but give wrong results — e.g. `if (x = 5)` instead of `if (x == 5)`, wrong loop bounds, integer division `5/2 = 2`.',
      '**Runtime errors** happen while running — division by zero, segmentation fault (bad pointer), array out of bounds, infinite loop.',
      '**Linker errors** — a function is declared but never defined (`undefined reference`).',
      'Debugging tips: read the **first** error first, compile with `-Wall`, print intermediate values, use a debugger (gdb / VS Code).'
    ],
    syntax: R`int x = 10      // syntax error: missing ;
if (x = 5) {...}  // logical error: assignment, not comparison
int y = 10 / 0;   // runtime error: division by zero`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int a = 7, b = 2;
    float avg = (a + b) / 2;      // LOGICAL ERROR: integer division -> 4.0
    float ok  = (a + b) / 2.0f;   // fixed: one operand is float -> 4.5
    printf("%.1f %.1f\n", avg, ok);
    return 0;
}`, out: '4.0 4.5' },
    theory: [
      ['Types of errors in C?', 'Syntax (compile-time), semantic, logical, linker and runtime errors.'],
      ['Which error is hardest to find and why?', 'Logical errors — the program runs without complaint but produces wrong output.'],
      ['What is a segmentation fault?', 'A runtime crash when a program accesses memory it is not allowed to (NULL/dangling pointer, out-of-bounds).'],
      ['Why does if (x = 0) never execute?', 'It assigns 0 to x and the expression value is 0 (false).'],
      ['Is a warning an error?', 'No — the program still compiles, but warnings often point to real bugs; treat them seriously.']
    ],
    coding: [
      ['Find and fix all errors: `int main() { int n = 5 printf("%d", n) return 0 }`', 'Easy', 'Missing semicolons and #include: `#include <stdio.h>` then `int main(){ int n = 5; printf("%d", n); return 0; }`'],
      ['The loop `for(i=1; i<=10; i--)` never ends. Why? Fix it.', 'Easy', 'i decreases so it is always ≤ 10 → infinite loop. Use `i++`.'],
      ['Program prints wrong average for marks 70, 85, 90. Fix `int avg = (a+b+c)/3;` to show decimals.', 'Easy', R`float avg = (a + b + c) / 3.0f;   // 81.67`]
    ]
  },

  'c-prog.storage-classes': {
    explain: [
      'A **storage class** decides four things about a variable: **where** it is stored, its **default value**, its **scope** (visibility) and its **lifetime**.',
      '| Class | Storage | Default | Scope | Lifetime |',
      '- **auto** – stack, garbage, inside block, until block ends (default for locals)',
      '- **register** – CPU register (hint), garbage, block, block — cannot take its address with &',
      '- **static** – data segment, **0**, block (or file for globals), **whole program** — keeps value between calls',
      '- **extern** – data segment, 0, global across files, whole program — declares a variable defined elsewhere',
      'A `static` global or function is visible only inside its own .c file (internal linkage).'
    ],
    syntax: R`auto int a;        // same as: int a;  (local)
register int i;    // fast loop counter hint
static int count;  // keeps value between calls, starts at 0
extern int total;  // defined in another file`,
    code: { lang: 'c', src: R`#include <stdio.h>
void visit(void) {
    int normal = 0;        // auto: re-created every call
    static int calls = 0;  // static: created once, remembers value
    normal++; calls++;
    printf("normal=%d calls=%d\n", normal, calls);
}
int main(void) {
    visit(); visit(); visit();
    return 0;
}`, out: R`normal=1 calls=1
normal=1 calls=2
normal=1 calls=3` },
    theory: [
      ['What are the storage classes in C?', 'auto, register, static and extern (plus typedef is grammatically a storage-class specifier, and C11 adds _Thread_local).'],
      ['Default value of static and auto variables?', 'static (and global): 0. auto: garbage/indeterminate.'],
      ['Can we take the address of a register variable?', 'No — & is not allowed on register variables.'],
      ['Difference between static local and global variable?', 'Both live for the whole program, but a static local is visible only inside its function.'],
      ['What does extern do?', 'Declares a variable defined in another translation unit without allocating new storage.'],
      ['What is a static function?', 'A function visible only inside the file where it is defined.']
    ],
    coding: [
      ['Count how many times a function is called using a static variable.', 'Easy', R`int counter(void){ static int c = 0; return ++c; }`],
      ['Share a global variable between two files using extern.', 'Medium', R`// a.c
int total = 100;
// b.c
#include <stdio.h>
extern int total;
int main(void){ printf("%d\n", total); return 0; }
// gcc a.c b.c -o app`],
      ['Predict output: `for(int i=0;i<3;i++){ static int x=5; x++; printf("%d ",x);} `', 'Easy', 'Output: **6 7 8** — static x is initialized once and keeps its value.']
    ]
  },

  'c-prog.operators': {
    explain: [
      'An **operator** performs an operation on operands. C operator categories:',
      '- **Arithmetic:** `+ - * / %`',
      '- **Relational:** `< > <= >= == !=` (result 1 or 0)',
      '- **Logical:** `&& || !` (short-circuit)',
      '- **Bitwise:** `& | ^ ~ << >>`',
      '- **Assignment:** `= += -= *= /= %=` etc.',
      '- **Increment/Decrement:** `++ --`',
      '- **Conditional (ternary):** `cond ? a : b`',
      '- **Special:** `sizeof`, comma `,`, address `&`, dereference `*`, member `.` and `->`, cast `(type)`',
      'By number of operands: **unary** (`-x`, `!x`, `++x`), **binary** (`a + b`), **ternary** (`?:`).'
    ],
    syntax: R`result = a + b * c;     // * before +
flag = (a > b) && (b > 0);
max = (a > b) ? a : b;`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int a = 17, b = 5;
    printf("a/b=%d a%%b=%d\n", a / b, a % b);        // integer division and remainder
    printf("a>b=%d a==b=%d\n", a > b, a == b);        // relational -> 1/0
    printf("!(a>b)=%d\n", !(a > b));                   // logical NOT
    printf("a&b=%d a|b=%d a^b=%d\n", a & b, a | b, a ^ b); // bitwise
    printf("max=%d\n", a > b ? a : b);                 // ternary
    return 0;
}`, out: R`a/b=3 a%b=2
a>b=1 a==b=0
!(a>b)=0
a&b=1 a|b=21 a^b=20
max=17` },
    theory: [
      ['What is the result of 7 / 2 and 7 % 2 in C?', '3 and 1 — integer division truncates toward zero.'],
      ['Can % be used with floats?', 'No. Use fmod() from math.h.'],
      ['Sign of -7 % 3?', '-1 — in C99+ the remainder has the sign of the dividend.'],
      ['What is short-circuit evaluation?', 'In a && b, b is not evaluated if a is false; in a || b, b is not evaluated if a is true.'],
      ['Difference between & and &&?', '& is bitwise AND on each bit; && is logical AND giving 1 or 0 with short-circuiting.']
    ],
    coding: [
      ['Check if a number is even using a bitwise operator.', 'Easy', R`if ((n & 1) == 0) printf("Even"); else printf("Odd");`],
      ['Find the largest of three numbers using the ternary operator.', 'Easy', R`int m = (a > b) ? (a > c ? a : c) : (b > c ? b : c);`],
      ['Multiply a number by 8 without using *.', 'Easy', R`int r = n << 3;   // shifting left by 3 multiplies by 2^3`]
    ]
  },

  'c-prog.inc-dec': {
    explain: [
      '`++` adds 1 and `--` subtracts 1 from a variable.',
      '- **Pre-increment `++x`**: increment **first**, then use the new value.',
      '- **Post-increment `x++`**: use the **old** value, then increment.',
      'Example: `x = 5; y = x++;` → y = 5, x = 6. `x = 5; y = ++x;` → y = 6, x = 6.',
      '**Never** modify the same variable twice in one expression (e.g. `i = i++ + ++i;`) — that is **undefined behaviour**; different compilers give different answers.',
      'They work only on variables (lvalues): `5++` is an error.'
    ],
    syntax: R`++x;  x++;  --x;  x--;`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int x = 5, y;
    y = x++;   // y gets 5, then x becomes 6
    printf("post: x=%d y=%d\n", x, y);
    x = 5;
    y = ++x;   // x becomes 6, then y gets 6
    printf("pre : x=%d y=%d\n", x, y);
    int i = 3;
    printf("%d %d\n", i--, i);   // UNDEFINED: i modified and read in one call — never do this
    return 0;
}`, out: R`post: x=6 y=5
pre : x=6 y=6
(last line is undefined behaviour — compilers may print 3 2, 3 3 or anything)` },
    theory: [
      ['Difference between ++i and i++?', '++i increments then returns the new value; i++ returns the old value then increments.'],
      ['In a for loop, is ++i faster than i++?', 'For int there is no difference with modern compilers; for C++ iterators ++i can avoid a copy.'],
      ['What does `int a = 5; int b = a++ + a++;` print?', 'Undefined behaviour — a is modified twice without a sequence point.'],
      ['Can we write ++(x+1)?', 'No — x+1 is not an lvalue (not a storable location).']
    ],
    coding: [
      ['Predict: `int a=10; int b = a-- - --a;`', 'Medium', 'Undefined behaviour (a modified twice). Correct answer in viva: “It is UB; the result is not guaranteed.”'],
      ['Predict: `int x=3; int y = ++x * 2; printf("%d %d", x, y);`', 'Easy', 'x = 4, y = 8 → **4 8**'],
      ['Print numbers 10 down to 1 using the decrement operator in a while loop.', 'Easy', R`int i = 10; while (i > 0) printf("%d ", i--);`]
    ]
  },

  'c-prog.precedence': {
    explain: [
      '**Precedence** decides which operator is applied first; **associativity** decides the order for operators of the same precedence.',
      'Highest → lowest (simplified):',
      '1. `() [] -> .` (L→R)',
      '2. Unary `! ~ ++ -- + - * & (type) sizeof` (**R→L**)',
      '3. `* / %` (L→R)  4. `+ -`  5. `<< >>`  6. `< <= > >=`  7. `== !=`',
      '8. `&`  9. `^`  10. `|`  11. `&&`  12. `||`',
      '13. `?:` (**R→L**)  14. `= += -= …` (**R→L**)  15. `,` (L→R)',
      'Memory trick: **U**nary, **A**rithmetic, **S**hift, **R**elational, **E**quality, **B**itwise, **L**ogical, **T**ernary, **A**ssignment, **C**omma.',
      'When in doubt, add brackets — clearer code is better than clever code.'
    ],
    syntax: R`x = 2 + 3 * 4;      // 14, not 20
y = 10 - 4 - 3;     // (10-4)-3 = 3  (left to right)
a = b = c = 5;      // a = (b = (c = 5))  (right to left)`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int a = 10, b = 5, c = 2;
    printf("%d\n", a + b * c);        // 20: * before +
    printf("%d\n", (a + b) * c);      // 30: brackets first
    printf("%d\n", a - b - c);        // 3 : left-to-right
    printf("%d\n", a > b && b > c);   // 1 : relational before &&
    printf("%d\n", a & 1 == 0);       // 0 : == binds tighter than & !  (a & (1==0))
    return 0;
}`, out: '20\n30\n3\n1\n0' },
    theory: [
      ['What is operator precedence?', 'The priority that decides which operator is evaluated first in an expression.'],
      ['What is associativity? Give R→L examples.', 'Order for equal-precedence operators. Unary, ternary and assignment operators are right-to-left.'],
      ['Value of 5 + 3 * 2 - 4 / 2?', '5 + 6 - 2 = 9.'],
      ['Why is `if (x & 1 == 0)` a bug?', '== has higher precedence than &, so it means x & (1 == 0) = x & 0 = 0. Write ((x & 1) == 0).'],
      ['Does precedence decide the order operands are evaluated?', 'No — it only decides grouping. The order of evaluating operands is mostly unspecified.']
    ],
    coding: [
      ['Evaluate: `int x = 2 * 3 + 4 % 3 - 10 / 4;`', 'Easy', '6 + 1 - 2 = **5**'],
      ['Evaluate: `int r = 1 + 2 << 3;`', 'Medium', '+ before << → (1+2) << 3 = 3 × 8 = **24**'],
      ['Evaluate: `int a=5,b=10; int c = a>b ? a : b>7 ? 100 : 200;`', 'Medium', 'Ternary is right-associative: a>b false → (b>7 ? 100 : 200) → **100**']
    ]
  },

  'c-prog.type-casting': {
    explain: [
      '**Implicit conversion (type promotion):** in mixed expressions the compiler converts the smaller type to the larger one: `char → int → long → float → double`.',
      '**Explicit conversion (type casting):** you force a conversion using `(type) expression`.',
      'Classic example: `int a = 7, b = 2; float r = a / b;` gives **3.0** because division happens in int first. Fix: `(float)a / b` → 3.5.',
      'Converting a larger type to a smaller one can **lose data**: `(int)3.99` → 3 (truncates, does not round).',
      'Casting is also used with pointers, e.g. `(int *)malloc(...)` (optional in C).'
    ],
    syntax: R`(type) expression
float avg = (float) total / count;`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int total = 425, count = 6;
    float wrong = total / count;          // int division first -> 70.00
    float right = (float) total / count;  // cast before division -> 70.83
    int truncated = (int) 9.99;           // fraction dropped -> 9
    char ch = 'A' + 2;                    // char promoted to int, back to char -> 'C'
    printf("%.2f %.2f %d %c\n", wrong, right, truncated, ch);
    return 0;
}`, out: '70.00 70.83 9 C' },
    theory: [
      ['Implicit vs explicit type conversion?', 'Implicit is done automatically by the compiler (promotion); explicit is done by the programmer with a cast.'],
      ['What is integer promotion?', 'char and short are converted to int before arithmetic.'],
      ['Does (int)3.7 round?', 'No, it truncates toward zero → 3. Use round() from math.h to round.'],
      ['Why does 5/2*2.0 give 4.0?', '5/2 is integer division = 2, then 2*2.0 = 4.0.']
    ],
    coding: [
      ['Compute the exact average of 3 integer marks.', 'Easy', R`float avg = (float)(m1 + m2 + m3) / 3;`],
      ['Round a float to the nearest integer without math.h.', 'Easy', R`int r = (int)(x + 0.5f);   // for positive x`],
      ['Print the fractional part of a float.', 'Easy', R`float x = 12.75f; float frac = x - (int)x;   // 0.75`]
    ]
  },

  'c-prog.if-else': {
    explain: [
      '`if-else` chooses between two paths: if the condition is **true (non-zero)** the `if` block runs, otherwise the `else` block runs.',
      'In C any non-zero value is true and 0 is false.',
      'Always use braces `{ }` even for one statement — it prevents bugs when you add lines later.',
      'The **dangling else** rule: an `else` belongs to the nearest unmatched `if`.',
      'For many conditions use an **else-if ladder**; for matching fixed values use **switch**.'
    ],
    syntax: R`if (condition) {
    // runs when condition is true
} else {
    // runs when condition is false
}`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int year;
    scanf("%d", &year);
    // Leap year: divisible by 4 and (not by 100, or by 400)
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        printf("%d is a leap year\n", year);
    } else {
        printf("%d is not a leap year\n", year);
    }
    return 0;
}`, out: 'Input: 2024 → 2024 is a leap year\nInput: 1900 → 1900 is not a leap year' },
    theory: [
      ['What values count as true in C?', 'Any non-zero value is true; 0 is false.'],
      ['What is the dangling else problem?', 'With nested ifs without braces, an else pairs with the closest if, which may not be what you intended.'],
      ['Can we use if without else?', 'Yes — else is optional.'],
      ['Why is `if (a = b)` dangerous?', 'It assigns b to a and tests the result instead of comparing.'],
      ['When to prefer switch over if-else?', 'When comparing one integer/char expression against many constant values.']
    ],
    coding: [
      ['Check whether a character is a vowel or consonant.', 'Easy', R`char c; scanf(" %c", &c);
c = tolower(c);   // <ctype.h>
if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') printf("Vowel"); else printf("Consonant");`],
      ['Print grade: ≥90 A, ≥75 B, ≥60 C, ≥40 D, else F.', 'Easy', R`if (m >= 90) puts("A");
else if (m >= 75) puts("B");
else if (m >= 60) puts("C");
else if (m >= 40) puts("D");
else puts("F");`],
      ['Find the roots of ax² + bx + c = 0 (real, equal or imaginary).', 'Medium', R`#include <stdio.h>
#include <math.h>
int main(void){
  double a,b,c; scanf("%lf %lf %lf",&a,&b,&c);
  double d = b*b - 4*a*c;
  if (d > 0) printf("%.2f %.2f\n", (-b+sqrt(d))/(2*a), (-b-sqrt(d))/(2*a));
  else if (d == 0) printf("%.2f\n", -b/(2*a));
  else printf("%.2f+%.2fi %.2f-%.2fi\n", -b/(2*a), sqrt(-d)/(2*a), -b/(2*a), sqrt(-d)/(2*a));
  return 0;
}`]
    ]
  },

  'c-prog.switch': {
    explain: [
      '`switch` compares one integer/char expression against constant `case` labels and jumps to the matching one.',
      'Each case should end with `break`; otherwise execution **falls through** into the next case.',
      '`default` runs when no case matches (optional, can be anywhere).',
      'Case labels must be **unique integer constants** — no ranges, no floats, no strings, no variables.',
      'Fall-through can be used on purpose to group cases (e.g. vowels).'
    ],
    syntax: R`switch (expression) {
    case 1:  /* ... */ break;
    case 2:  /* ... */ break;
    default: /* ... */
}`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    char op; double a, b;
    scanf("%lf %c %lf", &a, &op, &b);   // e.g. 8 * 3
    switch (op) {
        case '+': printf("%.2f\n", a + b); break;
        case '-': printf("%.2f\n", a - b); break;
        case '*': printf("%.2f\n", a * b); break;
        case '/':
            if (b != 0) printf("%.2f\n", a / b);
            else printf("Cannot divide by zero\n");
            break;
        default: printf("Unknown operator\n");
    }
    return 0;
}`, out: 'Input: 8 * 3 → 24.00' },
    theory: [
      ['What happens if break is missing in a case?', 'Execution falls through and runs the following cases until a break or the end of switch.'],
      ['Which data types are allowed in switch?', 'Integer types (int, char, enum, long…). Not float, double or strings.'],
      ['Can two cases have the same value?', 'No — duplicate case labels are a compile-time error.'],
      ['Is default mandatory?', 'No, but it is good practice to handle unexpected values.'],
      ['switch vs else-if ladder?', 'switch is cleaner and can be faster (jump table) for many constant comparisons; else-if handles ranges and complex conditions.']
    ],
    coding: [
      ['Print the day name for a number 1–7.', 'Easy', R`switch (d) { case 1: puts("Mon"); break; case 2: puts("Tue"); break; /* ... */ default: puts("Invalid"); }`],
      ['Count vowels in a string using switch with fall-through.', 'Easy', R`for (int i = 0; s[i]; i++)
  switch (tolower(s[i])) { case 'a': case 'e': case 'i': case 'o': case 'u': v++; }`],
      ['Predict: `int x=2; switch(x){case 1: printf("1"); case 2: printf("2"); case 3: printf("3"); default: printf("D");}`', 'Easy', 'Output: **23D** — no breaks, so it falls through from case 2.']
    ]
  },

  'c-prog.loops': {
    explain: [
      'A **loop** repeats a block of code while a condition is true. C has three loops:',
      '- **for** – best when you know how many times: `for (init; condition; update)`',
      '- **while** – entry-controlled: checks the condition **before** each iteration (may run 0 times)',
      '- **do-while** – exit-controlled: runs the body **at least once**, checks after',
      'Loop control: `break` exits the loop, `continue` skips to the next iteration.',
      'Every loop needs: initialization, a condition that eventually becomes false, and an update — otherwise you get an **infinite loop**.'
    ],
    syntax: R`for (int i = 0; i < n; i++) { ... }
while (condition) { ... }
do { ... } while (condition);`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    // for: print 1..5
    for (int i = 1; i <= 5; i++) printf("%d ", i);
    printf("\n");

    // while: sum digits of a number
    int n = 4729, sum = 0;
    while (n > 0) { sum += n % 10; n /= 10; }
    printf("digit sum = %d\n", sum);

    // do-while: menu shown at least once
    int choice;
    do {
        printf("1. Play  0. Exit : ");
        scanf("%d", &choice);
    } while (choice != 0);
    return 0;
}`, out: R`1 2 3 4 5
digit sum = 22
1. Play  0. Exit : 0` },
    theory: [
      ['Difference between while and do-while?', 'while checks first (entry-controlled, may run zero times); do-while checks after (exit-controlled, runs at least once).'],
      ['Which parts of a for loop are optional?', 'All three: for(;;) is a valid infinite loop.'],
      ['break vs continue?', 'break leaves the loop; continue skips the rest of this iteration.'],
      ['How many times does `for(i=0;i<10;i+=3)` run?', '4 times: i = 0, 3, 6, 9.'],
      ['What is an infinite loop? Give an example.', 'A loop that never ends because its condition stays true, e.g. while(1) or forgetting to update the counter.']
    ],
    coding: [
      ['Reverse a number (1234 → 4321).', 'Easy', R`int rev = 0;
while (n > 0) { rev = rev * 10 + n % 10; n /= 10; }`],
      ['Check whether a number is an Armstrong number (153 = 1³+5³+3³).', 'Medium', R`#include <stdio.h>
#include <math.h>
int main(void){
  int n, t, digits = 0, sum = 0; scanf("%d", &n);
  for (t = n; t > 0; t /= 10) digits++;
  for (t = n; t > 0; t /= 10) sum += (int)pow(t % 10, digits);
  printf(sum == n ? "Armstrong\n" : "Not Armstrong\n");
  return 0;
}`],
      ['Print the Fibonacci series up to n terms.', 'Easy', R`int a = 0, b = 1;
for (int i = 0; i < n; i++) { printf("%d ", a); int t = a + b; a = b; b = t; }`]
    ]
  },

  'c-prog.pattern-programs': {
    explain: [
      'Pattern programs use **nested loops**: the outer loop controls **rows**, the inner loop(s) control what is printed in each row.',
      'Recipe: (1) count rows, (2) for row i, work out how many **spaces** and how many **stars/numbers**, (3) print a newline after each row.',
      'Right triangle: row i prints i stars. Pyramid: row i prints (n − i) spaces and (2i − 1) stars.',
      'These are very common in lab exams and service-company coding rounds.'
    ],
    syntax: R`for (int i = 1; i <= n; i++) {        // rows
    for (int s = 1; s <= n - i; s++) printf(" ");   // spaces
    for (int j = 1; j <= 2*i - 1; j++) printf("*"); // stars
    printf("\n");
}`,
    code: { lang: 'c', src: R`#include <stdio.h>
int main(void) {
    int n = 4;
    // 1) Right-angled triangle
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\n");
    }
    // 2) Pyramid
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int j = 1; j <= 2 * i - 1; j++) printf("*");
        printf("\n");
    }
    // 3) Floyd's triangle
    int k = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("%d ", k++);
        printf("\n");
    }
    return 0;
}`, out: R`*
* *
* * *
* * * *
   *
  ***
 *****
*******
1
2 3
4 5 6
7 8 9 10` },
    theory: [
      ['Why are nested loops used in patterns?', 'The outer loop handles rows and the inner loop handles columns in each row.'],
      ['Time complexity of printing an n-row triangle?', 'O(n²) — about n²/2 characters are printed.'],
      ['How do you print an inverted pyramid?', 'Run the outer loop from n down to 1 with the same space/star formulas.']
    ],
    coding: [
      ['Print an inverted right triangle of numbers (n=4: 1234 / 123 / 12 / 1).', 'Easy', R`for (int i = n; i >= 1; i--) { for (int j = 1; j <= i; j++) printf("%d", j); printf("\n"); }`],
      ['Print a diamond of stars for n rows (top half n, bottom half n−1).', 'Medium', R`for (int i = 1; i <= n; i++) { printf("%*s", n - i, ""); for (int j = 0; j < 2*i-1; j++) putchar('*'); putchar('\n'); }
for (int i = n-1; i >= 1; i--) { printf("%*s", n - i, ""); for (int j = 0; j < 2*i-1; j++) putchar('*'); putchar('\n'); }`],
      ['Print Pascal’s triangle for n rows.', 'Medium', R`for (int i = 0; i < n; i++) {
  printf("%*s", (n - i) * 2, "");
  int c = 1;
  for (int j = 0; j <= i; j++) { printf("%4d", c); c = c * (i - j) / (j + 1); }
  printf("\n");
}`]
    ]
  }
};
