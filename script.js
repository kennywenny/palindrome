function isPalindrome(word) {
  let reverseWord = ''
  for (let i = 0; i < word.length; i++) {
    const currentCharacter = word[i]
    reverseWord = currentCharacter + reverseWord
  }
  return reverseWord === word
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