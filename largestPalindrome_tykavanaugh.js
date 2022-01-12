// TODO: Given a positive integer value "N", return the largest numeric palindrome (if one exists) that can be produced by multiplying two N-digit numbers, else return 0 (if one doesn't exist)

// EXAMPLE: N=2, output should be 9009 (91*99)

// NOTE: Assume all inputs are valid (0 < N < 8)

// DIRECTIONS:
//  0. Obtain this file from https://github.com/ankur-cp/largest-palindrome-solution
//  1. Rename this file, substituting "yourname" with your name
//  2. Replace "yourname" with your name in the variable below
exports.name = "tykavanaugh";
//  3. Add your optimizations to the solution below
//  4. Submit a pull request


isPalindrome = (num) => {
  // determine if input value matches it's reversed value (i.e. check if it's a palindrome!)
  strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
}


exports.getLargestPalindrome = (N) => {

  // iterate through range of multiplicands
  const max = (10 ** (N)-1) * (10 ** (N)-1)
  console.log(max)
  for (let i = max; i > 900000; i--) {

    // check if the product is a palindrome
    if (isPalindrome(i)) {
      console.log(i)
    }
  }
}

// input
const N = 3;

// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 in a "reasonable" amount of time?

// N=1, correct output = 9
// N=2, correct output = 9009
// N=3, correct output = 906609
// N=4, correct output = 99000099
// N=5, correct output = 9966006699
// N=6, correct output = 999000000999
// N=7, correct output = 99956644665999

// execution
console.time(exports.name)
console.log("result:", exports.getLargestPalindrome(N))
console.timeEnd(exports.name)
