function isPalindrome(word) {
  const characters = word.split('')
  console.log(characters)
}

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))