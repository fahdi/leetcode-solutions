var matrix = [
  [1, 2, 3, 10],
  [4, 5, 6, 9],
  [7, 8, 9, 11],
  [10, 11, 12, 11]
];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var rows = 4,
    cols = 4;

  var spiral = [];

  matrix.map(i => {
    i.map(n => spiral.push(n));
  });

  return spiral;
};

console.log(spiralOrder(matrix));
