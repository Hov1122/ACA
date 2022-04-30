// Once upon a time, in a kingdom far, far away, there lived a King Byteasar I.
// As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant.
// One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws!
// In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?

// The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way).
// He personally prepared the roadRegister of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams,
// i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he has decreed must check his calculations.

function solution(roadRegister) {
    // Implementation
    if (!Array.isArray(roadRegister))
      throw new TypeError("Invalid arugemt");

    for (let i = 0; i < roadRegister.length; i++) {
      let inCount = 0; 
      let outCount = 0;
      for (let j = 0; j < roadRegister[i].length; j++) {
          inCount += roadRegister[j][i];
          outCount += roadRegister[i][j];
      }

      if (inCount !== outCount)
        return false;
    }
    return true;
        
    // roadsCount = {};
    // for (let i = 0; i < roadRegister.length; i++) {
    //     roadsCount[i + '_in'] = 0;
    //     roadsCount[i + '_out'] = 0;
    // }

    // roadRegister.forEach((row, rowIndex) => {
    //     row.forEach((col, colIndex) => {
    //         if (roadRegister[rowIndex][colIndex]) {
    //             roadsCount[rowIndex + '_out']++;
    //             roadsCount[colIndex + '_in']++;
    //         }
    //     })
    // })

    // for (let i = 0; i < roadRegister.length; i++) {
    //     if (roadsCount[i + '_in'] !== roadsCount[i + '_out'])
    //         return false;
    // } 
    
    // return true;

    
  }

// the output should be true
const roadRegister1 = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
  [false, true, false, false, false, false, false],
  [true, false, false, false, false, false, false],
  [false, false, false, true, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, false, false, true],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister = [
  [false, true, false],
  [false, false, false],
  [true, false, false],
];

  console.log(solution(roadRegister1), solution(roadRegister2), solution(roadRegister));