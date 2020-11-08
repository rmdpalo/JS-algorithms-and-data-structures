# Big O Notation

## What's the big idea?
- Imagine you are thinking of ways to solve a problem, and you can think of multiple ways of solving it
  - How can you tell which option is best?
  - Big O Notation helps us developers put things into context by allowing us to assign **GENERALIZED** labels to our code.
  
## Why does it matter?
- It's important for us developers to have a way of communicating how efficiently or poorly our code performs.
  - It allows us to talk about the pros and cons of different approaches.
  - Identifying inefficiencies in our code can help us find the weakpoints in our applications!
  - To be blunt, it comes up in interviews a lot.
  
Now, how do we even biggen to quantify how fast or slow our code is? 
The obvious solution would be by measuring the time it takes to finish its task(s).
But the runtime of these functions are not constant.

If measuring efficiency by the time it takes isn't precise enough, then what option do we have?

We can simply count the number of **simple operations** the computer has to perform! Because no matter how slow or fast the 
computer is, the number of operations performed remains the same. The time we get at each run might be different but they will
**ALWAYS** be determined by the amount of operations it performs.

let's take a look at these 2 functions:
```javascript
function optionOne(n) {
  return n*(n + 1)/2;
}
```
```javascript
function optionTwo(n) {
  let total = 0
  for(let i=0; i <= n; i++) {
    total += i;
  }
  return total;
}
```
These two functions do the same thing, but by counting the number of simple operation can you tell me which function would
be more efficient especially once we go into bigger numbers such as 1000000 and higher?

Let's breakdown the first function
```javascript
function optionOne(n) {
  return n*(n + 1)/2;
}
```
We have 3 simple operations here, the *, the +, and the /. Regardless of the value of n, there will always be 3 operations.

```javascript
function optionTwo(n) {
  let total = 0
  for(let i=0; i <= n; i++) {
    total += i;
  }
  return total;
}
```

For this function it's a bit harder to keep track of all the operations but let's try:
- The assignment of "total = 0" and "i = 0" are both 1 operation each.
- The comparison of "i <= n", the addition and assignment of "i++" (i = i + 1), and finally the addition and assignment of 
"total += i;" (total = total + i;) happens n amount of times. 

Note that as n grows for this function, so does the amount of operations it has to do, but what n is assigned doesn't really matter to us.
Just the fact that number of operations grows proportionally with n.

## This is where Big O notation comes in.
- Big O notation is a way for us to talk about how the runtime of an algorithm grows as the input grows.
- We don't care about the _details_, we care mostly about the general trends or patterns that come up as the input grows.
- We say that an algorithm is O(f(n)) if the number of operations is _eventually_ les than a constant times f(n), as n increases.
  - f(n) could be linear: (f(n) = n)
  - f(n) could be quadratic: (f(n) = n**2) _n squared_
  - f(n) could be constant: (f(n) = 1)
  - f(n) could be something else completely.
 - When we talk about things in Big O we are talking about things in _the worst case scenario_ (aka the upper bound of runtime since the runtime with smaller numbers are miniscule.)
 
 Now looking at our two options again, let's try to label them using Big O notation.
 ```javascript
function optionOne(n) {
  return n*(n + 1)/2;
}
```
This function, regardless of the value of n, will __ALWAYS__ have 3 operations, based on that we can say that the general trend
its runtime will follow, will be constant (in reality, however, we know that runtime varies. Just remember we're looking at general trends and patterns)
so we can say that this function has a notation of
> O(1)

which means that as n grows, that change is not reflected in our runtime.

```javascript
function optionTwo(n) {
  let total = 0
  for(let i=0; i <= n; i++) {
    total += i;
  }
  return total;
}
```
But when we look at this function, we already identified that our number of operations grows proportionally as n grows.
With that being said, _generally_ how do you think this change in amount of operations will affect the runtime?
Our notation for this is
> O(n)

which means that as our n grows our runtime increases relative to n. This also tells us that we don't care about the amount of n
the computer needs to do, if a for loop O(n) is followed by another for loop O(n) sequentially, we would still label it simply as O(n).

However, if we have something like this.
```javascript
function optionThree(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
We have a for loop O(n) __nested__ inside another for loop O(n), which just means the as n grows the number of times the nested loop runs
grows as well, which we label as 
> O(n**2)

Basically it means that as n grows, our runtime grows at the rate of n squared.

## Time Complexity vs. Space Complexity 
So far, we've only focused on Time Complexity for our Big O notation, which basically means the run time of our applications. But we can also use Big O for Space complexity, or the amount of __space__ our application takes up in memory as the input gets bigger.

- Most primitive data types (booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (where n is the string length)
- Reference types are generall O(n), where n is the length (for arrays) or the number of keys (for objects)

## Big O Notation Recap
- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!
