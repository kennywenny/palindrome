function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    const wordCharacter = word[i]
    console.log(wordCharacter)
  }
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))