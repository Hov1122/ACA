function solution(roadRegister) {
    // Implementation

    roadsCount = {};
    for (let i = 0; i < roadRegister.length; i++) {
        roadsCount[i + '_in'] = 0;
        roadsCount[i + '_out'] = 0;
    }

    roadRegister.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (roadRegister[rowIndex][colIndex]) {
                roadsCount[rowIndex + '_out']++;
                roadsCount[colIndex + '_in']++;
            }
        })
    })

    for (let i = 0; i < roadRegister.length; i++) {
        if (roadsCount[i + '_in'] !== roadsCount[i + '_out'])
            return false;
    } 
    
    return true;
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