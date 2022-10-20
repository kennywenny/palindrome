function isPalindrome(word) {
  return word === '' || word.length === 1 ? true
    : word[0] !== word[word.length - 1] ? false
      : isPalindrome(word.substring(1, word.length - 1))
}

console.log('Expect true')
console.log(isPalindrome('a'))

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))