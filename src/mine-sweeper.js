const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultation = matrix.map(row => row.map(el => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let count = 0;
      // Первый ряд, т.е. нет клеток выше
      if (i == 0) {
        if (j== 0) {
          // первая слева клетка
          count += matrix[i + 1][j];
          count += matrix[i + 1][j + 1];
          count += matrix[i][j + 1];
        }
        else if (j > 0 && j < matrix[i].length - 1) {
          // клетки, кроме крайних
          count += matrix[i][j - 1];
          count += matrix[i + 1][j - 1];
          count += matrix[i + 1][j];
          count += matrix[i + 1][j + 1];
          count += matrix[i][j + 1];
        }
        else if (j === matrix[i].length - 1) { 
          // правая крайняя клетка
          count += matrix[i][j - 1];
          count += matrix[i + 1][j - 1];
          count += matrix[i + 1][j];
        }
      }
      // все ряды кроме первого и последнего
      if (i > 0 && i < matrix.length - 1) {
        if (j === 0) {          // первая слева клетка
          count += matrix[i - 1][j];
          count += matrix[i - 1][j + 1];
          count += matrix[i][j + 1];
          count += matrix[i + 1][j + 1];
          count += matrix[i + 1][j];
        }
        else if (j > 0 && j < matrix[i].length - 1) {          // клетки, кроме крайних
          count += matrix[i - 1][j];
          count += matrix[i - 1][j - 1];
          count += matrix[i][j - 1];
          count += matrix[i + 1][j - 1];
          count += matrix[i + 1][j];
          count += matrix[i + 1][j + 1];
          count += matrix[i][j + 1];
          count += matrix[i - 1][j + 1];
        }
        else if (j === matrix[i].length - 1) {          // правая крайняя клетка
          count += matrix[i - 1][j];
          count += matrix[i - 1][j - 1];
          count += matrix[i][j - 1];
          count += matrix[i + 1][j - 1];
          count += matrix[i + 1][j];
        }
      }
      // последний ряд
      if (i === matrix.length - 1) {
        if (j === 0) {          // первая слева клетка
          count += matrix[i - 1][j];
          count += matrix[i - 1][j + 1];
          count += matrix[i][j + 1];
        }
        else if (j > 0 && j < matrix[i].length - 1) {          // клетки, кроме крайних
          count += matrix[i][j - 1];
          count += matrix[i - 1][j - 1];
          count += matrix[i - 1][j];
          count += matrix[i - 1][j + 1];
          count += matrix[i][j + 1];
        }
        else if ( j === matrix[i].length - 1) {          // правая крайняя клетка
          count += matrix[i][j - 1]
          count += matrix[i - 1][j - 1]
          count += matrix[i - 1][j];
        }
      }
      resultation[i][j] = count
    }
  }
  return resultation
}

module.exports = {
  minesweeper
};
