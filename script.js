function isPalindrome(word) {
  return word === '' || word.length === 1 ? true
    : word[0] !== word[word.length - 1] ? false
      : isPalindrome(word.substring(1, word.length - 1))
}

/*
return <condition> ? <value_when_true> : <value_when_false>
means
if <condition> {
  return <value_when_true>
} else {
  return <value_when_false>
}

console.log('Expect true')
console.log(isPalindrome('a'))

console.log('Expect true')
console.log(isPalindrome('noon'))

console.log('Expect false')
console.log(isPalindrome('horse'))

console.log('Expect true')
console.log(isPalindrome('racecar'))