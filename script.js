function isPalindrome(word) {
  if (word === '' || word.length === 1) {
    return true
  }
  if (word[0] !== word[word.length - 1]) {
    return false
  }
  return isPalindrome(word.substring(1, word.length - 1))
}

console.log('Expect true')
console.log(isPalindrome('a'))

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))