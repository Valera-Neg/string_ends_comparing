function solution(str, ending) {
  if (!ending) {
    return true
  }
  if (str.slice(-ending.length).localeCompare(ending) === 0) {
    return true;
  } else {
    return false;
  }
}


console.log(solution('abcde', 'cde')) //-> true
console.log(solution('abcde', 'abc')) // -> false
console.log(solution('abc', '')) // -> false
console.log(solution('abc', 'bc')) // -> true
console.log(solution('abc', 'd')) // -> false
