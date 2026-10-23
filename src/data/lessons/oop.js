// Full lessons — OOP track core (also used by Sem 2 Python & OOP via aliases)
const R = String.raw;

export default {
  'oop.class-object': {
    explain: [
      'A **class** is a blueprint that defines **data (attributes)** and **behaviour (methods)**. An **object** is a real instance created from that blueprint.',
      'Example: class `Student` defines name, roll and a `display()` method; `s1` and `s2` are two Student objects with their own data.',
      'Creating an object = **instantiation**; it calls the **constructor** to initialise attributes.',
      'Memory: the class is just a definition; each object gets its own copy of instance attributes, while methods are shared.',
      'OOP models the real world as interacting objects and is built on 4 pillars: encapsulation, abstraction, inheritance, polymorphism.'
    ],
    syntax: R`# Python
class Student:
    def __init__(self, name, roll):   # constructor
        self.name = name              # instance attribute
        self.roll = roll
s1 = Student("Supriya", 7)            # object`,
    code: { lang: 'python', src: R`class Student:
    college = "Gurugram University"          # class attribute (shared)

    def __init__(self, name, roll, marks):   # constructor runs on creation
        self.name = name                     # instance attributes (per object)
        self.roll = roll
        self.marks = marks

    def percentage(self):                    # method (behaviour)
        return sum(self.marks) / len(self.marks)

    def __str__(self):                       # nice printing
        return f"{self.roll}: {self.name} ({self.percentage():.1f}%)"

s1 = Student("Supriya", 7, [92, 88, 95])
s2 = Student("Aman", 3, [70, 81, 77])
print(s1)
print(s2)
print(s1.college, "|", s1 is s2)` , out: R`7: Supriya (91.7%)
3: Aman (76.0%)
Gurugram University | False` },
    theory: [
      ['What is the difference between a class and an object?', 'A class is a template/blueprint; an object is an instance of the class with actual values in memory.'],
      ['Does a class occupy memory?', 'The class definition is stored once; memory for attributes is allocated only when objects are created.'],
      ['What is a constructor?', 'A special method (__init__ in Python, same name as class in C++/Java) that initialises a new object.'],
      ['Class attribute vs instance attribute?', 'A class attribute is shared by all objects; an instance attribute belongs to one object.'],
      ['What is self / this?', 'A reference to the current object, used to access its attributes and methods.']
    ],
    coding: [
      ['Create a BankAccount class with deposit, withdraw (no overdraft) and balance.', 'Easy', R`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner, self._balance = owner, balance
    def deposit(self, amt):
        if amt <= 0: raise ValueError("amount must be positive")
        self._balance += amt
    def withdraw(self, amt):
        if amt > self._balance: raise ValueError("insufficient funds")
        self._balance -= amt
    @property
    def balance(self): return self._balance`],
      ['Create a Rectangle class in C++ with area() and perimeter().', 'Easy', R`class Rectangle {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const { return w * h; }
    double perimeter() const { return 2 * (w + h); }
};`],
      ['Count how many objects of a class have been created.', 'Easy', R`class Counter:
    count = 0
    def __init__(self):
        Counter.count += 1   # class attribute shared by all objects`]
    ]
  },

  'oop.encapsulation': {
    explain: [
      '**Encapsulation** = bundling data and the methods that work on it inside one unit (class) **and** restricting direct access to the data.',
      'Fields are kept **private**; the outside world uses **public methods** (getters/setters) that can validate changes.',
      'Benefits: protects object state from invalid values, hides implementation so it can change later, easier debugging.',
      'C++/Java use `private`, `protected`, `public`. Python uses conventions: `_name` (internal), `__name` (name-mangled) and `@property`.'
    ],
    syntax: R`class Account {
private:
    double balance;          // hidden
public:
    void deposit(double a) { if (a > 0) balance += a; }   // controlled access
    double getBalance() const { return balance; }
};`,
    code: { lang: 'cpp', src: R`#include <iostream>
#include <stdexcept>
using namespace std;
class Student {
    string name;
    int marks;                                   // private by default in a class
public:
    Student(string n, int m) : name(n) { setMarks(m); }
    void setMarks(int m) {                       // validation lives in one place
        if (m < 0 || m > 100) throw invalid_argument("marks must be 0-100");
        marks = m;
    }
    int getMarks() const { return marks; }
    string getName() const { return name; }
};
int main() {
    Student s("Supriya", 92);
    cout << s.getName() << " " << s.getMarks() << "\n";
    try { s.setMarks(150); }                     // rejected
    catch (const exception& e) { cout << "Error: " << e.what() << "\n"; }
    // s.marks = 150;   // compile error: 'marks' is private
}`, out: R`Supriya 92
Error: marks must be 0-100` },
    theory: [
      ['What is encapsulation?', 'Wrapping data and methods in a class and hiding the data behind a controlled public interface.'],
      ['Encapsulation vs abstraction?', 'Encapsulation hides data (how it is protected); abstraction hides complexity (what is shown to the user).'],
      ['How is encapsulation achieved in Python?', 'By convention: _protected and __private (name mangling) attributes, plus @property for controlled access.'],
      ['Why use getters and setters?', 'To validate, log or compute values and to change internal representation without breaking users.']
    ],
    coding: [
      ['Make a Temperature class that stores Celsius privately and exposes fahrenheit as a property.', 'Easy', R`class Temperature:
    def __init__(self, c): self.__c = c
    @property
    def fahrenheit(self): return self.__c * 9 / 5 + 32
    @fahrenheit.setter
    def fahrenheit(self, f): self.__c = (f - 32) * 5 / 9`],
      ['Prevent setting a negative age in a Person class.', 'Easy', R`class Person:
    def __init__(self, age): self.age = age
    @property
    def age(self): return self._age
    @age.setter
    def age(self, v):
        if v < 0: raise ValueError("age can't be negative")
        self._age = v`],
      ['Create an immutable Point class in C++.', 'Easy', R`class Point { const int x, y; public: Point(int x, int y) : x(x), y(y) {} int getX() const { return x; } int getY() const { return y; } };`]
    ]
  },

  'oop.inheritance': {
    explain: [
      '**Inheritance** lets a new class (**child / derived / subclass**) reuse and extend an existing class (**parent / base / superclass**) — an **“is-a”** relationship (a Dog *is an* Animal).',
      'The child gets the parent’s attributes and methods, can add new ones, and can **override** methods.',
      'Types: **single**, **multilevel** (A→B→C), **hierarchical** (many children of one parent), **multiple** (one child, many parents — C++ and Python, not Java classes), **hybrid**.',
      'Call the parent constructor with `super()` (Python/Java) or the initializer list (C++).',
      'Prefer **composition** (“has-a”) when the relationship isn’t truly “is-a”.'
    ],
    syntax: R`class Child(Parent):        # Python
class Child : public Parent  // C++
class Child extends Parent   // Java`,
    code: { lang: 'python', src: R`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."
    def intro(self):
        return f"I am {self.name} and I say {self.speak()}"

class Dog(Animal):                       # Dog IS-A Animal
    def speak(self):                     # override
        return "Woof"

class Puppy(Dog):                        # multilevel
    def __init__(self, name, age):
        super().__init__(name)           # reuse parent constructor
        self.age = age
    def speak(self):
        return super().speak() + " (tiny)"

for a in [Animal("Generic"), Dog("Bruno"), Puppy("Coco", 1)]:
    print(a.intro())
print(isinstance(Puppy("x", 1), Animal))` , out: R`I am Generic and I say ...
I am Bruno and I say Woof
I am Coco and I say Woof (tiny)
True` },
    theory: [
      ['What is inheritance and why use it?', 'A mechanism where a class acquires properties of another class — for code reuse and to model is-a relationships.'],
      ['Types of inheritance?', 'Single, multiple, multilevel, hierarchical and hybrid.'],
      ['Why doesn’t Java support multiple inheritance of classes?', 'To avoid the diamond problem; Java uses interfaces for multiple inheritance of type.'],
      ['What is the diamond problem?', 'When a class inherits from two classes that share a base, it is ambiguous which base version to use. C++ uses virtual inheritance; Python uses MRO.'],
      ['What does super() do?', 'Calls a method (often the constructor) of the parent class.'],
      ['Inheritance vs composition?', 'Inheritance = is-a and tight coupling; composition = has-a and more flexible. Prefer composition when unsure.']
    ],
    coding: [
      ['Create Shape → Circle and Rectangle with an area() method.', 'Easy', R`import math
class Shape:
    def area(self): raise NotImplementedError
class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return math.pi * self.r ** 2
class Rectangle(Shape):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h`],
      ['Show multilevel inheritance in C++ (Person → Student → GradStudent).', 'Easy', R`class Person { public: string name; Person(string n) : name(n) {} };
class Student : public Person { public: int roll; Student(string n, int r) : Person(n), roll(r) {} };
class GradStudent : public Student { public: string thesis; GradStudent(string n, int r, string t) : Student(n, r), thesis(t) {} };`],
      ['Print the MRO of class D(B, C) where B and C inherit from A in Python.', 'Medium', R`class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
print([k.__name__ for k in D.__mro__])   # ['D', 'B', 'C', 'A', 'object']`]
    ]
  },

  'oop.polymorphism': {
    explain: [
      '**Polymorphism** = “many forms”: the same interface (method name) behaves differently depending on the object.',
      '**Compile-time (static):** method/function **overloading**, operator overloading — chosen by the compiler from argument types.',
      '**Run-time (dynamic):** method **overriding** — the call is resolved at run time based on the actual object (C++ needs `virtual`; Java and Python do it by default).',
      'It lets you write code against a base type (`Shape`) and have it work for any subclass (`Circle`, `Square`) — the key to extensible design (Open/Closed principle).',
      'Python adds **duck typing**: any object with the right method works, no common base class required.'
    ],
    syntax: R`Shape* s = new Circle(2);
s->area();     // calls Circle::area() at run time (virtual)`,
    code: { lang: 'cpp', src: R`#include <iostream>
#include <vector>
#include <memory>
using namespace std;
class Shape {
public:
    virtual double area() const = 0;            // pure virtual -> abstract class
    virtual string name() const { return "Shape"; }
    virtual ~Shape() = default;                  // virtual destructor!
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
    string name() const override { return "Circle"; }
};
class Square : public Shape {
    double s;
public:
    Square(double s) : s(s) {}
    double area() const override { return s * s; }
    string name() const override { return "Square"; }
};
int add(int a, int b) { return a + b; }          // compile-time polymorphism:
double add(double a, double b) { return a + b; } // overloading

int main() {
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Circle>(1));
    shapes.push_back(make_unique<Square>(3));
    for (auto& s : shapes) cout << s->name() << " area = " << s->area() << "\n";  // run-time dispatch
    cout << add(2, 3) << " " << add(2.5, 1.5) << "\n";
}`, out: R`Circle area = 3.14159
Square area = 9
5 4` },
    theory: [
      ['Types of polymorphism?', 'Compile-time (overloading, templates) and run-time (overriding with virtual functions / dynamic dispatch).'],
      ['Overloading vs overriding?', 'Overloading: same name, different parameters, same class, resolved at compile time. Overriding: same signature in a subclass, resolved at run time.'],
      ['How does C++ implement run-time polymorphism?', 'With virtual functions: each class has a vtable of function pointers and each object a hidden vptr.'],
      ['Why should a base class have a virtual destructor?', 'So deleting a derived object through a base pointer calls the derived destructor (avoids leaks/UB).'],
      ['Does Python support method overloading?', 'Not by signature — the last definition wins. Use default/variable arguments or functools.singledispatch.']
    ],
    coding: [
      ['Write a function that prints the area of any list of shapes (Python duck typing).', 'Easy', R`def total_area(shapes):
    return sum(s.area() for s in shapes)   # works for any object with area()`],
      ['Overload the + operator for a Vector2 class in Python.', 'Easy', R`class Vector2:
    def __init__(self, x, y): self.x, self.y = x, y
    def __add__(self, o): return Vector2(self.x + o.x, self.y + o.y)
    def __repr__(self): return f"Vector2({self.x}, {self.y})"`],
      ['Predict output: base pointer to derived object calling a NON-virtual method in C++.', 'Medium', 'The base class version is called (static binding) because the method is not virtual.']
    ]
  },

  'oop.abstraction': {
    explain: [
      '**Abstraction** means showing only the **essential features** and hiding the implementation details. You use a car’s steering and pedals without knowing the engine internals.',
      'Achieved with **abstract classes** (may have some implemented methods + abstract ones) and **interfaces** (pure contracts).',
      'An abstract class **cannot be instantiated**; subclasses must implement the abstract methods.',
      'C++: class with at least one **pure virtual** function (`= 0`). Java: `abstract class` / `interface`. Python: `abc.ABC` + `@abstractmethod`.',
      'Benefit: code depends on **what** an object can do, not **how** — making it easy to swap implementations (e.g. different payment gateways).'
    ],
    syntax: R`from abc import ABC, abstractmethod
class Payment(ABC):
    @abstractmethod
    def pay(self, amount): ...`,
    code: { lang: 'python', src: R`from abc import ABC, abstractmethod

class PaymentMethod(ABC):                 # abstract: defines WHAT, not HOW
    @abstractmethod
    def pay(self, amount: float) -> str: ...

    def receipt(self, amount):            # concrete method shared by all
        return f"Paid ₹{amount:.2f} via {self.pay(amount)}"

class UPI(PaymentMethod):
    def __init__(self, vpa): self.vpa = vpa
    def pay(self, amount): return f"UPI ({self.vpa})"

class Card(PaymentMethod):
    def __init__(self, last4): self.last4 = last4
    def pay(self, amount): return f"Card ****{self.last4}"

for method in [UPI("supriya@okbank"), Card("4321")]:
    print(method.receipt(499))

try:
    PaymentMethod()                       # cannot create an abstract class
except TypeError as e:
    print("Error:", e)` , out: R`Paid ₹499.00 via UPI (supriya@okbank)
Paid ₹499.00 via Card ****4321
Error: Can't instantiate abstract class PaymentMethod without an implementation for abstract method 'pay'` },
    theory: [
      ['What is abstraction?', 'Hiding implementation details and exposing only essential behaviour.'],
      ['Abstract class vs interface?', 'Abstract class can have state, constructors and implemented methods; an interface is a pure contract (Java 8+ allows default methods). A class can implement many interfaces but extend one class (Java).'],
      ['Can an abstract class have a constructor?', 'Yes — it runs when a subclass object is created.'],
      ['Can we create an object of an abstract class?', 'No, only of concrete subclasses that implement all abstract methods.']
    ],
    coding: [
      ['Define an abstract Shape with area() and perimeter(), and implement Triangle.', 'Easy', R`from abc import ABC, abstractmethod
class Shape(ABC):
    @abstractmethod
    def area(self): ...
    @abstractmethod
    def perimeter(self): ...
class Triangle(Shape):
    def __init__(self, a, b, c): self.a, self.b, self.c = a, b, c
    def perimeter(self): return self.a + self.b + self.c
    def area(self):
        s = self.perimeter() / 2
        return (s * (s - self.a) * (s - self.b) * (s - self.c)) ** 0.5`],
      ['Create a C++ interface Printable with a pure virtual print().', 'Easy', R`struct Printable { virtual void print() const = 0; virtual ~Printable() = default; };`],
      ['Design a Notification abstraction with Email and SMS implementations.', 'Medium', 'Abstract class Notifier with abstract send(to, msg); EmailNotifier and SmsNotifier implement send; code that sends alerts only depends on Notifier.']
    ]
  }
};
