function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    const wordCharacter = word[i]
    const wordCharacterFromEnd = word[word.length - i - 1]
    if (wordCharacter !== wordCharacterFromEnd) {
      return false
    }
  }
  return true
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))