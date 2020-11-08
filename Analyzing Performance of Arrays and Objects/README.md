# Analyzing Performance of Arrays and Objects

## Objectives
- Understand how objects and arrays work, through the lens of Big O.
- Explain why adding elements to the beginning of an array is costly.
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

### Big O of Objects
Unordered, key-value pairs!
```javascript
let instructor = {
  firstName: "Miguel",
  isInstructor: false,
  favoriteNumbers: [1,2,3,4]
}
```

#### When to use objects
- When you don't need order
- When you need fast access or insertion and removal.

#### Big O of Objects
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

When you don't need any ordering, objects are an excellent choice.

#### Big O of Object Methods
- Object.keys - O(n) gives us our keys in an array
- Object.values - O(n) gives us our values in an array
- Object.entries - O(n) gives us our key value pairs in a 2 dimensional array
- hasOwnProperty - O(1) checks if the object has the property with the name of the argument inputted.

