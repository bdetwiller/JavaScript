var multiples = function(array) {
  var new_array = [];
  array.forEach(function(num) {
    new_array.push(num * 2);
  });

  return new_array;
};

// var a = [1,2,3,4,5];
// console.log( multiples(a) );

Array.prototype.myEach = function(f) {
  new_array = [];
  for(var i = 0; i < this.length; i++) {
    new_array.push(f(this[i]));
  }
  return new_array;
};

// var f = function(x) {
//   return x * 2;
// };
// console.log([1,2,3].myEach(f));

var concatenate = function(array, f) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result = f(result, array[i]);
  }

  return result;
};

var f = function(string1, string2) {
  return string1 + string2;
};

// var a = ["this", "better", "work"];
// console.log(concatenate(a, f));

