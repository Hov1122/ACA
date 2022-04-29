// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column,
// each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.
// Note that the puzzle represented by grid does not have to be solvable.

function solution(grid) {
    // Implementation

    if (!Array.isArray(grid) || grid.length !== 9 || grid.some((row) => row.length !== 9))
        throw new TypeError("Invalid arguments")

    const counts = {
        subGridIndex: {},
        rows: {},
        cols: {}          
    };

    for (let i = 0; i < grid.length; i++) {
        counts.rows[i] = new Set();
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === ".") 
                continue;
            if (isNaN(grid[i][j]) || (!Number.isInteger(Number(grid[i][j])) || grid[i][j] > 9 || grid[i][j] < 1)) 
                throw new TypeError("Invalid arguments")
                
            counts.subGridIndex[`${Math.floor(i / 3)}${Math.floor(j / 3)}`] = counts.subGridIndex[`${Math.floor(i / 3)}${Math.floor(j / 3)}`] || new Set();
            counts.cols[j] = counts.cols[j] || new Set();

            if (counts.subGridIndex[`${Math.floor(i / 3)}${Math.floor(j / 3)}`].has(grid[i][j])) 
                return false;              
            else 
                counts.subGridIndex[`${Math.floor(i / 3)}${Math.floor(j / 3)}`].add(grid[i][j])

            if (counts.rows[i].has(grid[i][j])) 
                return false;                 
            else 
                counts.rows[i].add(grid[i][j]);

            if (counts.cols[j].has(grid[i][j])) 
                return false;               
            else 
                counts.cols[j].add(grid[i][j]);
        }
    }

    return true;
  }

  // the output should be true
  const grid1 = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ];
  
  // the output should be false
  const grid2 = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
  ];

console.log(solution(grid1), solution(grid2));


