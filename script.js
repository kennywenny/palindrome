function isPalindrome(word) {
  const characters = word.split('')
  const reversedCharacters = characters.reverse()
  const reversedWord = reversedCharacters.join('')
  console.log(reversedWord)
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))