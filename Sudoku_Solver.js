

const solvePuzzel = function(puzzel){
    const solution = new Array(9); 
    for(let row = 0; row < solution.length; row ++){
        const columns = new Array(9);
        for(let col = 0; col < solution.length; col ++){
            let possibleValues = new Array(9);
            for(let i = 0; i < possibleValues.length; i ++){
                possibleValues[i] = i + 1; 
            }
            columns[col] = possibleValues; 
        }
        solution[row] = columns; 
    }

    insertStartingValues(puzzel, solution);

    printSolution(solution); 
}

const insertStartingValues = function(puzzel, solution){
    for(let row = 0; row < puzzel.length; row ++){
        for(let col = 0; col < puzzel.length; col ++){
            let correctValue = [puzzel[row][col]]
            solution[row][col] = correctValue; 
        }
    }

    return; 
}

const printSolution = function(solution){
    let solutionString = "";
    for(let row = 0; row < solution.length; row ++){
        let rowString = ""
        for(let col = 0; col < solution.length; col ++){
            rowString += solution[row][col][0];
            rowString += " "; 
            if((col + 1) % 3 === 0) rowString += "  "; 
        }
        solutionString += rowString; 
        solutionString += "\n"; 
        if((row + 1) % 3 === 0) solutionString += "\n"
    }

    console.log(solutionString); 
}



const testPuzzel = [
    [1,2,3,4,5,6,7,8,9],
    [2,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0],
    [4,0,0,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,0,0],
    [6,0,0,0,0,0,0,0,0],
    [7,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0],
    [9,0,0,0,0,0,0,0,0]
]

solvePuzzel(testPuzzel); 