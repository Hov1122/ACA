function solution(grid) {
    // Implementation
    for (let i = 0; i < grid.length; i++) {
        let tmp = new Set(grid[i]);
        if (tmp.size !== 9) return false;
    }
        
    for (let i = 0; i < grid.length; i++) {
        let tmp = new Set();
        for (let j = 0; j < grid[i].length; j++) {
            tmp.add(grid[j][i])
        }
        if (tmp.size !== 9) return false;
    }

    for (let i = 0; i < grid.length; i += 3) {
        for (let j = 0; j < grid[i].length; j += 3) {
            let tmp = new Set();
            for (let k = 0; k < 3; k++) 
                for (let f = 0; f < 3; f++) 
                    tmp.add(grid[i + k][j + f]);

            if (tmp.size !== 9) return false;
        }
    }

    return true;
  }

  grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]

console.log(solution(grid));


