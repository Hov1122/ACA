// We have number of chess players and some finished matches,
// you should write a function and find out which players should play together

// The matches should be returned in an sorted array, with each match stored as [m-i, m-j], where m-i < m-j

// Example
// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]
// the output should be
// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]

const solution = (chessPlayers, finishedMatches) => {
    // your code

    const initMatches = Array(chessPlayers).fill().map(() => Array(chessPlayers).fill(false));
	
    const playerMatches = finishedMatches.reduce((played, match) => {
		played[match[0]][match[1]] = true;
		played[match[1]][match[0]] = true;
        return played;
    }, initMatches)

	const res = [];

	for (let i = 0; i < chessPlayers; i++) {
		for (let j = i + 1; j < chessPlayers; j++) {
			if (!playerMatches[i][j])
				res.push([i, j]);
		}
	}
	return res;
  };

  console.log(solution(4, [[0, 1], [1, 2], [2, 0]]));