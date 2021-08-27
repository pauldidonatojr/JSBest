export const arrays = {
  // given an array and chunk size
  // divide the array into many subarrays
  // where each subarray is of length size

  // create empty array to hold chunks
  // for each element in unchunked array
  // retreive the last element in chunked
  // if last element does not exist
  // or if its lengths is equal to chunk size
  // push a new chunk into chunked with the current
  // element else add the current element in the chunk
  chunk: {
    solution_1: function (arr, size) {
      let chunked = [];

      // 1 , 2 , 3 , 4
      // 0 || 0 === 2 push element 1
      //
      for (let element of arr) {
        const last = chunked[chunked.length - 1];

        // chunked stops when last.length === size
        if (!last || last.length === size) {
          chunked.push([element]);
        } else {
          last.push(element);
        }
      }
      return chunked;
    },
    // create empty chunked array
    // create index start at 0
    // while index is less than array.length
    // push a slice of length 'size' from 'array'
    // into 'chunked'
    // add 'size' to 'index'
    solution_2: function (arr, size) {
      const chunked = [];
      let index = 0;

      while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
      }
      return chunked.reverse().join(" ");
    },
    solution_3: function (arr, size) {
      const chunked = [];

      helper = (element) => {
        const last = chunked[chunked.length - 1];

        // chunked stops when last.length === size
        if (!last || last.length === size) {
          chunked.push([element]);
        } else {
          last.push(element);
        }
      };

      arr.forEach(function (element) {
        helper(element);
      });

      return chunked;
    },
  },

  //----------------------------------------
};
