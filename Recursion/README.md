# Recursion

### How recursive functions work

Invoke the __same__ function with a different input until you reach your base case.

- __Base Case__ - The condition when the recursion ends. This is the most important concept to understand.

- __Different inputs__ - the aspect of a recursive function where its input changes at every time the function is called until we reach the base case.

### Our first recursive function

```javascript
function countDown(num){
  if(num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```
if we were to call the function countDown with an input of let's say 3, this is what would happen.
- countDown(3)
- print 3
- countDown(2)
- print 2
- countDown(1)
- print 1
- countDown(0)
- print 'All done!'

As you can see, the function continues to call itself and run until our __base case__ is met. And every time the function is run, we use a __different input__

### Our second recursive function

```javascript
function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num-1);
}
```
- the conditional where num === 1 is our _base case_
- the recursive aspect with the _different input_ is the line where the function call happens with num - 1

what happens when we call the function with an input of 3

- sumRange(3)
- num != 1, goes to next line return 3 + sumRange(2)
- num != 1, goes to next line return 2 + sumRange(1)
- num === 1, returns 1;
- going back to sumRange(2) => 2 + 1 = 3, returns 3;
- going back to sumRange(3) => 3 + 3 = 6, returns 6;

It's easy to follow right now while our inputs are small but we can imagine how complicated it can get as our input grows.

