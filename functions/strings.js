export const strings = {
  // Given a string return the character that is most common
  // ex: maxchar('abccccd') === 'c'

  maxchar: function (str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
    return maxChar;
  },
  // capitalize the first letter of each word in the string
  // make an empty array 'words'
  // split the input string by spaces to get an array
  // for each word in the array
  // uppercase the first letter of the word
  // join first letter wtih rest of the string
  // push result into 'words' array
  // join 'words' into a string and return it
  capital: {
    solution_1: function (str) {
      const words = [];
      x = str.split(" ");
      for (let word of x) {
        words.push(word[0].toUpperCase() + word.slice(1));
      }
      return words.join(" ");
    },
    // create 'result' which is the first character of the
    // input string capitalized
    // for each character in the string
    // if the character to the left a space
    // capitalize it and add it to 'result'
    // ELSE
    // add it to 'result'
    solution_2: function (str) {
      let result = str[0].toUpperCase();
      for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
          result += str[i].toUpperCase();
        } else {
          result += str[i];
        }
      }
      return result;
    },
  },

  // does string a have the same characters as string b
  anagram: {
    solution_1: function (stringA, stringB) {
      if (stringA.length !== stringB.length) return false;
      const lookup = {};
      for (let i = 0; i < stringA.length; i++) {
        let char = stringA[i];
        if (lookup[char]) {
          lookup[char] += 1;
        } else {
          lookup[char] = 1;
        }
      }
      for (let i = 0; i < stringB.length; i++) {
        let char = stringB[i];
        if (!lookup[char]) {
          return false;
        } else {
          lookup[char] -= 1;
        }
      }
      return true;
    },
    solution_2: function (stringA, stringB) {
      const helper = (str) => {
        const charMap = {};
        for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
          charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
      };

      const aCharMap = helper(stringA);
      const bCharMap = helper(stringB);
      if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
      }
      for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
          return false;
        }
      }
      return true;
    },
  },
  repeatchar: function (str) {},
  // console logs the numbers from 1 to n
  // for multiples of three print "fizz" isntead of number
  // for the multiples of five print "buzz"
  // for numbers which are multiples of both 3 and 5 print "fizzbuzz"
  fizzbuzz: function (n) {
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        console.log("fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  },
};
