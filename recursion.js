var _ = require("underscore")

var range = function(start, end) {
  if (start === end) {
    return [end];
  } else {
    var temp = range(start - 1, end);
    temp.push(start);
    return temp;
  }
};

// console.log(range(9,1));

var sumArrayRec = function(array) {
  console.log(array);
  if (array.length === 1) {
    return array[0];
  } else {
    var leftMost = array.shift();
    var remainder = sumArrayRec(array);
    return leftMost + remainder;
  }
};

// console.log(sumArrayRec([1,2,3]));

var sumArrayIter = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// console.log(sumArrayIter([1,2,3]));

var exponent1 = function(b, n) {
  if (n ===0) {
    return 1;
  } else {
    return b * exponent1(b, n - 1);
  }
};

var exponent2 = function(b, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return Math.pow(exponent2(b, n / 2), 2);
  } else {
    return b * Math.pow((exponent2(b, n - 1) / 2), 2);
  }
};

//console.log(exponent1(2, 3));

var fibRec = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var base = fibRec(n - 1);
    base.push(base[base.length - 1] +
        base[base.length - 2]);

    return base;
  }
};

// console.log(fibRec(6));

var fibIter = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var base = [0, 1];
    while (base.length < n) {
      base.push(base[base.length - 1] +
          base[base.length - 2]);
    }

    return base;
  }
};

//console.log(fibIter(6));

var bSearch = function(array, target) {
  if (array.length != 0) {
    var middle = Math.floor(array.length/2);
  }
  if (array.length === 0) {
    return -1;
  } else if (target === array[middle]) {
    return middle;
  } else if (target < array[middle]) {
    return bSearch(array.slice(0, middle + 1), target);
  } else if (target > array[middle]) {
    var rightSearch = bSearch(array.slice(middle, array.length), target);
    if (rightSearch != -1) {
      return rightSearch + middle;
    } else {
      return -1;
    }
  }
};

var mergeSort = function(array) {
  if (array.length == 0 || array.length == 1) {
    return array;
  } else {
    var middle = Math.floor( array.length/2 );
    var left = mergeSort( array.slice(0, middle) );
    var right = mergeSort( array.slice(middle, array.length) );

    return merge(left, right);
  }
};

var merge = function(left, right) {
  var newArray = [];
  while (left.length > 0) {

    if (right.length === 0) {
      for (var i = 0; i < right.length; i++) {
        newArray.push(right[i]);
      }
      //return _.flatten(newArray.push(left));
      return newArray;
    } else if (left[0] < right[0]) {
      newArray.push(left.shift());
    } else  {
      newArray.push(right.shift());
    }
  } if (right.length != 0 ) {
    for (var i = 0; i < right.length; i++) {
      newArray.push(right[i]);
    }

    return newArray;
  }
};

// var left = [2,4,5,6];
// var right = [1,2,3,6];
// console.log(merge(left, right));

// var array = [5,2,4,6,1,3,2,6];
// console.log(mergeSort(array));


