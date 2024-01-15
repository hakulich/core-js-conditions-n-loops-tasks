/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (max < b) max = b;
  if (max < c) max = c;

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let { x, y } = queen;

  if (queen.x === king.x || queen.y === king.y) return true;

  while (x < 9 && x > 0 && y < 9 && y > 0) {
    if (x === king.x && y === king.y) return true;
    x += 1;
    y += 1;
  }

  x = queen.x;
  y = queen.y;
  while (x < 9 && x > 0 && y < 9 && y > 0) {
    if (x === king.x && y === king.y) return true;
    x += 1;
    y -= 1;
  }

  x = queen.x;
  y = queen.y;
  while (x < 9 && x > 0 && y < 9 && y > 0) {
    if (x === king.x && y === king.y) return true;
    x -= 1;
    y += 1;
  }

  x = queen.x;
  y = queen.y;

  while (x < 9 && x > 0 && y < 9 && y > 0) {
    if (x === king.x && y === king.y) return true;
    x -= 1;
    y -= 1;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b < c || b + c < a || a + c < b) return false;

  if (a === 0 || b === 0 || c === 0) return false;

  if (a === b) return true;
  if (a === c) return true;
  if (c === b) return true;

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */

function convertToRomanNumerals(num) {
  const dictionary = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];
  let digit = num;
  let result = '';
  for (let i = 0; i < dictionary.length; i += 1) {
    while (digit >= dictionary[i].value) {
      result += dictionary[i].numeral;
      digit -= dictionary[i].value;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  const strNum = numberStr;
  for (let i = 0; i < strNum.length; i += 1) {
    let letter;
    switch (numberStr[i]) {
      case '0':
        letter = 'zero';
        break;
      case '1':
        letter = 'one';
        break;
      case '2':
        letter = 'two';
        break;
      case '3':
        letter = 'three';
        break;
      case '4':
        letter = 'four';
        break;
      case '5':
        letter = 'five';
        break;
      case '6':
        letter = 'six';
        break;
      case '7':
        letter = 'seven';
        break;
      case '8':
        letter = 'eight';
        break;
      case '9':
        letter = 'nine';
        break;
      case '-':
        letter = 'minus';
        break;
      case '.':
      case ',':
        letter = 'point';
        break;
      default:
        letter = '';
        break;
    }

    if (i === strNum.length - 1) {
      result += `${letter}`;
    } else {
      result += `${letter} `;
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  let numDigit;
  while (number > 0) {
    numDigit = number % 10;

    if (numDigit === digit) return true;

    number = Math.floor(number / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  const maxNumber = size * size;
  let currentNum = 1;
  let x = 0;
  let y = size;

  for (let i = 0; i < size; i += 1) {
    result[i] = [];
    for (let j = 0; j < size; j += 1) {
      result[i][j] = 0;
    }
  }

  while (currentNum <= maxNumber) {
    for (let i = x; i < y; i += 1) {
      result[x][i] = currentNum;
      currentNum += 1;
    }

    if (currentNum > maxNumber) break;

    x += 1;

    for (let i = x; i < y; i += 1) {
      result[i][y - 1] = currentNum;
      currentNum += 1;
    }

    if (currentNum > maxNumber) break;
    y -= 1;

    for (let i = y - 1; i >= x - 1; i -= 1) {
      result[y][i] = currentNum;
      currentNum += 1;
    }

    if (currentNum > maxNumber) break;

    for (let i = y - 1; i >= x; i -= 1) {
      result[i][x - 1] = currentNum;
      currentNum += 1;
    }
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [];
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      result[i][matrix.length - j - 1] = matrix[j][i];
    }
  }

  const matrix2 = matrix;

  for (let i = 0; i < matrix2.length; i += 1) {
    for (let j = 0; j < matrix2.length; j += 1) {
      matrix2[i][j] = result[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function splitArr(arr, left, right) {
  const items = arr;
  const medium = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  let temp;
  while (i <= j) {
    while (items[i] < medium) {
      i += 1;
    }
    while (items[j] > medium) {
      j -= 1;
    }
    if (i <= j) {
      temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = splitArr(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

function sortByAsc(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shiftArr(str) {
  let leftPart = '';
  let rightPart = '';
  for (let i = 1; i < str.length - 1; i += 1) {
    if (i % 2 !== 0) {
      rightPart += str[i];
    } else {
      leftPart += str[i];
    }
  }
  return str[0] + leftPart + rightPart + str[str.length - 1];
}
function shuffleChar(str, iterations) {
  let minRepeatNum = 0;
  let result = str;
  let result2 = str;
  do {
    result = shiftArr(result);
    minRepeatNum += 1;
  } while (result !== str);

  let toRepeatNum =
    iterations - Math.floor(iterations / minRepeatNum) * minRepeatNum;

  while (toRepeatNum > 0) {
    result2 = shiftArr(result2);
    toRepeatNum -= 1;
  }

  return result2;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
