//The solution I came up with when I tried to do it myself.
function countUniqueValues(arr){
    //create multiple pointers
    let i = 0;
    let j = 1;

    //while j is not at the end of the array, continue.
    while (j < arr.length){
        if(arr[i] === arr[j]){
            //if arr[i] and arr[j] are the same move j up one index
            j++;
        } else {
            //if it's unique, move i up one index and reassign the value of j to it
            i++;
            arr[i] = arr[j];
        }
    }
    //cut the array off at the index after i (b/c these would be non unique values)
    arr.splice(i + 1);
    //return the length to get the amount of unique values.
    return arr.length;
}


//The given solution.
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
//O(N) Time complexity.
console.log(countUniqueValues([1,1,1,1,1,2]))//2

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))//7

console.log(countUniqueValues([])) //0

console.log(countUniqueValues([-2,-1,-1,0,1])) //4

