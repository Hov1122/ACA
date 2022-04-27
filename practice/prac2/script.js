const matrix = [
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

// const rotate = (matrix) => {

//     const res = [];
//     for (let i = 0; i < matrix.length; i++) {
//         res[i] = [];
//         for (let j = 0; j < matrix[i].length; j++) {
//             res[i][j] = matrix[matrix[i].length - j - 1][i];
//         }
//     }

//     return res;
// }

// 1, 2, 3, 4
// 5, 6, 7, 8
// 9, 10, 11, 12

// 9   5   1        
// 10  6   2
// 11  7   3
// 12  8   4

const rotate90 = (matrix, pos = true) => { 
    // pos indicates rotation to right(true) or left(false)

    const res = [];
    const {length} = matrix; 
    
    const [rowIndex, columnIndex] = matrix.length >= matrix[0].length ? [matrix.length, matrix[0].length] : [matrix[0].length, matrix.length];

    for (let i = 0; i < rowIndex; i++) {
        res[i] = [];
        for (let j = 0; j < columnIndex; j++) {
            if (pos)
                res[rowIndex][columnIndex] = matrix[matrix.length - columnIndex - 1][rowIndex];
            else
                res[rowIndex][columnIndex] = matrix[columnIndex][matrix.length - rowIndex - 1];
        }
    }

    // matrix.forEach((row, rowIndex) => {
    //     res[rowIndex] = [];
    //     row.forEach((column, columnIndex) => {
    //         console.log(matrix[rowIndex]);
    //         if (pos)
    //             res[rowIndex][columnIndex] = matrix[matrix[rowIndex].length - columnIndex - 1][rowIndex];
    //         else
    //             res[rowIndex][columnIndex] = matrix[columnIndex][matrix[rowIndex].length - rowIndex - 1];
    //     })
    // })

    return res;
}

const rotate = (matrix, angle = 90) => {

    if (angle % 360 === 0)
        return matrix;

    if (angle % 90 !== 0) {
        throw new Error("Incorrect value");
    }

    res = [];
    
    for (let i = 0; i < matrix.length; i++) {
        res[i] = [...matrix[i]];
    }
       
    const pos = angle > 0 ? true : false;

    for (let i = 0; i < (Math.abs(angle) / 90) % 4; i++) {
        res = rotate90(res, pos);
    }
        
    return res;
}

// tnayin
/*
    .uxxankyune rotate ani
    .ankyunagcere chpoxi
    .sortavorel aranc mec u poqri nshani hint(map)
*/

//console.log(rotate(matrix, -540));