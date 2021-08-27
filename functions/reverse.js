// turn str into an array
// call reverse method on the array
// join the array back into a string
// return the result
export const reverse = {
  strings: {
    solution_1: function (str) {
      const arr = str.split("").reverse("").join("").toLowerCase();
      return arr;
    },
    // create an empty string called reversed
    // for each character in the string
    // take the character and add it to reversed
    // return reversed
    solution_2: function (str) {
      let reversed = "";
      for (let i = 0; i < str.length; i++) {
        char = str[i];
        reversed = char + reversed;
      }
      return reversed;
    },
    solution_3: function (str) {
      let reversed = "";
      for (let char of str) {
        reversed = char + reversed;
      }
      return reversed.toUpperCase();
    },
    // uses the reduce helper function
    solution_4: function (str) {
      // first value is the reversed string
      // second value is the character on the array
      // add reverse to character
      return str.split("").reduce((reversed, character) => {
        return character + reversed;
      });
    },
  },
  ints: {
    solution_1: function (n) {
      let reversed = n.toString().split("").reverse().join("");
      if (n < 0) {
        return parseInt(reversed) * -1;
      }
      return parseInt(reversed);
    },

    solution_2: function (n) {
      reversed = n.toString().split("").reverse().join("");
      return parseInt(reversed) * Math.sign(n);
    },
    solution_3: function (n) {
      let x = n.toString().split("");
      let j = 0;
      let store = [];
      for (let i = x.length - 1; i + 1 > 0; i--) {
        store[j] = x[i];
        j++;
      }
      return parseInt(store.join("")) * Math.sign(n);
    },
  },
};
