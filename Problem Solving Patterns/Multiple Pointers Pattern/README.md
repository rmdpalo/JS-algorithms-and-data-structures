# Multiple Pointers

Creating __pointers__ or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

__Very__ efficient for solving problems with minimal space complexity as well

An example:
Write a function called __sumZero__ which accepts a sorted array of integers. The function should find the __first__ pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```javascript
sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
sumZero([-2,0,1,3) //undefined
sumZero([1,2,3]) //undefined
```

Naive Solution 
```javascript
function sumZero(arr){
    for(let i=0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
//Time complexity O(N^2)
//Space Complexity O(1)
```

Refactored Solution
```javascript
function sumZero(arr){
    //create variables that hold our left and right pointers
    let left = 0
    let right = arr.length - 1;
    //while our left pointer is less than our right we want to continue our solution
    while (left < right){
        //assign the sum to a variable for readability
        let sum = arr[left] + arr[right];
        //if the sum is zero then we want to return that pair.
        if(sum === 0){
            return [arr[left], arr[right]];
        // if the sum is positive we want to move our right pointer to the left 1 space.
        } else if (sum > 0){
            right --;
        // if it is anything else we move our left pointer to the right 1 space.
        } else {
            left++
        }
    }
}
//Time Complexity O(N)
//Space Complexity O(1)
```
