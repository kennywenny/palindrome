function isPalindrome(word) {
  let reverseWord = ''
  for (let i = 0; i < word.length; i++) {
    const currentCharacter = word[i]
    reverseWord = currentCharacter + reverseWord
    console.log(currentCharacter)
  }
  console.log(reverseWord)
  // Make another string (that will hold the reverse of `word`)
  // Loop through word, adding characters to the beginning of my new variable
  // Compare my new variable to the original
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))

/*
Ex:
Input: "noon"
Output: true

Input: "horse"
Output: false

Input: "racecar"
Output: true
*/