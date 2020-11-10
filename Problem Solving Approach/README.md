# Problem Solving Approach

## Introduction

You're faced with a tough challenge, a code challenge that you don't know how to solve right off the bat. What steps can you take to make it solvable?

This section focuses on the basic approach to a problem you don't know how to solve. Steps you can take, things you can do to make it easier.

The next section, **Problem Solving Patterns**, focuses more on the actual coding aspect of it.

## Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems, and divide and conquer.

### What is an algorithm?

A **process** or **set of steps** to accomplish a certain task.

### Why do I need to know this

Almost **everything** that you do in programming involves some sort of algorithm.
It's the **foundation** for being a successful problem solver and developer.

It also comes up a lot in interviews, but that's whatever.

### How do you improve at this?

**PRACTICE PRACTICE PRACTICE**

- **devise** a plan for solving problem
- **master** common problem solving patterns.

### Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor

Many of these strategies are adapted from George Polya, who wrote the book _How To Solve It_. It is a great resource for anyone who wants to become a better problem solver.

## Step 1 Understand the Problem

Ask yourself/the interviewer/etc. these questions.

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
  - find out constraints and data types
- What are the outputs that should come from the solution to the problem?
  - find out constraints and data types
- Can the outputs be determined form the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
- How should I label the important pieces of data that are part of the problem?

**example**
_Write a function which takes two numbers and returns their sum._

- Can I restate the problem in my own words?
  - write a function that adds 2 numbers together.
- What are the inputs that go into the problem?
  - ints? floats? what about really large numbers?
- What are the outputs?
  - int? float? string?
- Can the outputs be determined from the inputs? Do we have information to do the problem?
  - ask about edge cases that could affect how the solution would be written.
- How should I label the important pieces of data that are part of the problem?
  - What matters? the inputs, outputs,
    - function would be named add
      - inputs could be num1 and num2
      - output could be called sum.

## Step 2 Concrete Examples

_Write a function which takes in a string and returns counts of each character in the string._

```javascript
//come up with a simple example
charCount("aaaa"); //{a:4}
//come up with more complex examples
charCount("hello"); //{h:1, e:1, l:2, o:1}
charCount("my phone number is 182763");
```

this last example brings up a lot of questions:

- do we count spaces?
- what about numbers?
- symbols and special characters?
- what about lowercase vs uppercase of the same letter? do we count them separately or not?

```javascript
//explore examples with empty inputs
charCount("");
```

- what about if someone passes an empty string into the function? What should we expect?
  - do we want to return an empty object? null? undefined?

```javascript
//explore examples with invalid inputs?
charCount("1");
charCount("[]");
```

though you usually won't have to think about this much during interviews but you will have to do this in your actual work so it's worth keeping in your approach.

## Step 3 Break It Down

**Explicitly** write out the steps you need to take.

this forces you to think about the code you'll have to write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details as well.
