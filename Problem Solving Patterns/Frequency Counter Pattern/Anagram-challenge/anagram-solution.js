function validAnagram(word1, word2){
  //check length, if not equal it's false.
  if(word1.length !== word2.length){
      return false;
  }
  
  //create object to store our linear structure's breakdown.
  let wordBreakdown = {};
  
  //loop through the first word
  for(let i = 0; i < word1.length; i++){
      //variable for us to store our current letter
      let letter = word1[i];
      //check our breakdown if it's already there, if so increment, if not initialize and set to 1.
      wordBreakdown[letter] = wordBreakdown[letter] ? wordBreakdown[letter] += 1 : wordBreakdown[letter] = 1;
  }
  //loop through second word
  for(let i = 0; i < word2.length; i++){
      //variable for us to store our current letter.
      let letter = word2[i];
      //if our current letter is not in the breakdown, it's false
      if(!wordBreakdown[letter]){
          return false;
      } else {
      //if it is in our breakdown, decrement.
          wordBreakdown[letter] -= 1;
      }
  }
  //if we loop through the entire second word without returning false, it must be true.
  return true;
}
