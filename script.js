function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('')
  return word === reversedWord
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))