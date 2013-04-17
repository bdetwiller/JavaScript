var uniq = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if(array[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

// var a = [1, 2, 1, 3, 3];
// console.log(uniq(a));

var twoSum = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if(array[i] === -array[j]) {
        return true;
      }
    }
  }
  return false;
};

// var a = [1,3,3,5,4];
// console.log(two_sum(a));


var myTranspose = function(array) {
  var rows = array[0].length;
  var cols = array.length;
  var new_array = [];

  for (var i = 0; i < rows; i++) {
    new_array.push(new Array(cols));
  }
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      new_array[c][r] = array[r][c];
    }
  }

  return new_array;
};

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(myTranspose(rows));