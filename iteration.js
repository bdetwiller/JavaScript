var _ = require("underscore")

var bubbleSort = function(array) {
  var swapped = true;
  var new_array = _.clone(array)


  while (swapped) {
    for (var i = 0; i < new_array.length - 1; i++) {
      if (new_array[i] > new_array[i + 1]) {
        var temp = new_array[i];
        new_array[i] = new_array[i + 1];
        new_array[i + 1] = temp;
        swapped = true;
      } else {
        swapped = false;
      }
    }
  }

  return new_array;
};

// var a = [1,4,2,9,5];
// console.log( bubbleSort(a) );

var substrings = function(string) {
  var substrings = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      substrings.push(string.slice(i, j + 1));
    }
  }
  return substrings;
};

console.log(substrings("hello"));