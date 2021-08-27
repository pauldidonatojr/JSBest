export const palindromes = {
  solution_1: function (str) {
    const rev = str.split("").reverse().join("");
    if (rev === str) {
      return true;
    } else {
      return false;
    }
  },
  solution_2: function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  },
  solution_3: function (str) {
    let rev = "";
    //  let rev1 = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      rev = char + rev;

      console.log(rev);
    }

    if (rev === str) {
      return true;
    } else {
      return false;
    }
  },
  solution_4: function (str) {
    let store = [];
    let hold = [];

    for (let i = 0; i < str.length; i++) {
      store.push(str[i]);
    }
    for (let j = str.length - 1; j >= 0; j--) {
      hold.push(str[j]);
    }
    if (store.join("") !== hold.join("")) {
      return false;
    } else {
      return true;
    }
  },
  // utilize the every function
  // is 'every' value greater than x
  solution_5: function (str) {
    return str.split("").every((character, index) => {
      x = str.length - index - 1;
      y = str[str.length - index - 1];
      console.log(`Index: ${x} Value: ${y}`);

      return character === str[str.length - index - 1];
    });
  },
};
