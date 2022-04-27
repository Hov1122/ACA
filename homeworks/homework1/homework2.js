const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

// You can use more than one functions

function rotate90(matrix, withDiagonal = true) {
    const res = [];
    const {length} = matrix; 
    
    matrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (res[colIndex] === undefined) res[colIndex] = [];

        if (!withDiagonal && (rowIndex === colIndex || rowIndex + colIndex === length - 1)) 
          res[rowIndex][colIndex] = matrix[rowIndex][colIndex]
        else
          res[colIndex][rowIndex] = matrix[length - rowIndex - 1][colIndex];
      })
    })

    //const [rowIndex, columnIndex] = [matrix[0].length, length];
    // for (let i = 0; i < rowIndex; i++) {
    //     res[i] = [];
    //     for (let j = 0; j < columnIndex; j++) {   
    //         if (!withDiagonal && (i === j || i + j === length - 1)) 
    //             res[i][j] = matrix[i][j];
    //         else
    //             res[i][j] = matrix[length - j - 1][i];  
    //     }
    // }

    return res;
}

// 1. Rotate any matrix
const rotate = (matrix, deg) => {
  // code here

    if (deg % 360 === 0) return matrix;
    if (deg % 90 !== 0) throw new RangeError('Incorrect value')

    count = (deg % 360) / 90;
    count += count < 0 ? 4 : 0;
    
    return Array.from({ length: count })
        .reduce((a) => rotate90(a), matrix)
};

console.group('With diagonal');
console.table(matrix1);
console.table(rotate(matrix1, -180));
console.table(matrix2);
console.table(rotate(matrix2, 270));
console.groupEnd();

// 2. Rotate all matrix elements except the diagonals
const rotateWithoutDiagonal = (matrix, deg) => {
  // code here
    if (deg % 360 === 0) return matrix;
    if (deg % 90 !== 0) throw new RangeError('Incorrect value')

    count = (deg % 360) / 90;
    count += count < 0 ? 4 : 0;
    
    return Array.from({ length: count })
        .reduce((a) => rotate90(a, false), matrix)
};

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.group('Without diagonal');
console.table(matrix3);
console.table(rotateWithoutDiagonal(matrix3, 90));
console.groupEnd();