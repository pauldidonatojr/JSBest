export const numbers = {
  // funciton accepts a positive number
  // console log a step shape with n levels
  // using the # character
  // make sure step has spaces on the right hand
  steps: {
    // iterate from 0 to n
    // create an empty string 'stair'
    // from o to n if current column
    // is equal to or less than current row
    // add a '#' to 'stair'
    // else add a space to 'stair'
    // console log 'stair'
    solution_1: function (n) {
      for (let row = 0; row < n; row++) {
        let stair = "";
        for (let column = 0; column < n; column++) {
          if (column <= row) {
            stair += "#";
          } else {
            stair += " ";
          }
        }
        console.log(stair);
      }
    },
  },
};
