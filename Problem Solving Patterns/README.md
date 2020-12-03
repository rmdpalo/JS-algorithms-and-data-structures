# Problem Solving Patterns

This is not meant to be a cure-all for any and every interview question you'll run into, but it will cover some common patterns such as:
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- etc etc.

## Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for neste loops or O(N^2) operations with arrays/strings.

i.e. Write a function called __same__, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.The frequency of values must be the same.
```javascript
same([1,2,3],[4,1,9]) //true
same([1,2,3],[1,9]) //false
same([1,2,1],[4,4,1]) //false (must be same frequency)
```

A Naive Solution
```javascript
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false; //if our arrays are not the same length there is no way for this to be true
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) //we check if there is an instance of arr1[i]'s square in the second array
    if(correctIndex === -1){ // if it's not there it will return -1 and it'll be false
      return false;
    }
    arr2.splice(correctIndex, 1) //if it is there then we want to take it out since indexOf returns the earliest index of the value.
  }
  return true //if we get all the way to the end of the array without returning false then it must be true.
}
//Time Complexity N^2
```

When coming up with solutions, there are solutions that are considered _naive_, it just means that it's not the best possible solution.

Refactored Solution
```javascript
function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {} //these are the objects we'll be storing our frequencies in
    let frequencyCounter2 = {}
    for(let val of arr1) { //this is the for of syntax where we use a place holder variable to store each value of the array as we loop
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    } //for both arrays we check if that value is already in our frequency counter if not we initialize it to 1
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
}
//Time Complexity N
```

The point of the frequency counters let us use objects to keep track of how many times each element occurs in that list.

## The idea behind the frequency counter

You usually use an object, and you use that object to construct a "profile" or breakdown of the contents of an array or string (usually some sort of linear structure like an array/string) and then you are quickly able to compare that breakdown to how another object looks that was also broken down from another array or string.

In this specific example we had two arrays, we broke each of them down into objects to classify what's in those arrays and then we can compare those objects.
