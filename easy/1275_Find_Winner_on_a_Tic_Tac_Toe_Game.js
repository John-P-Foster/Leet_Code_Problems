// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played
//  on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a
//   draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially
//  empty, and A will play first.

 

// Example 1:


// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: A wins, they always play first.
// Example 2:


// Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// Output: "B"
// Explanation: B wins.
// Example 3:


// Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.
 

// Constraints:

// 1 <= moves.length <= 9
// moves[i].length == 2
// 0 <= rowi, coli <= 2
// There are no repeated elements on moves.
// moves follow the rules of tic tac toe.

/* 5 is min number of moves for x to win. 
        moves.length < 5 return "Pending" 
        until we reach moves[4] no need to check for a winner. 
    X will be even i and O odd i; 
    8 ways to win that must equal 3; 
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {

    if(moves.length < 5){return "Pending"}

    let columns = [0,0,0];
    let rows = [0, 0, 0];
    let downCross = 0;
    let upCross = 0; 

    for(let i = 0; i < moves.length; i++){
        let player = i % 2 === 0 ? 1 : -1; 
        const move = moves[i]
        const column = move[0];
        const row = move[1]; 

        columns[column] += player; 
        if(Math.abs(columns[column]) === 3){
            const winner = player === 1 ? "A" : "B"
            return winner; 
        }

        rows[row] += player; 
        if(Math.abs(rows[row]) === 3){
            const winner = player === 1 ? "A" : "B"; 
            return winner 
        }

        if(column === row){
            downCross += player; 
            if(Math.abs(downCross) === 3){
                const winner = player === 1 ? "A": "B"; 
                return winner; 
            }
        }

        if(column + row === 2){
            upCross += player; 
            if(Math.abs(upCross) === 3){
                const winner = player === 1 ? "A" : "B"; 
                return winner; 
            }
        }

    }

    if(moves.length === 9){
        return "Draw"
    }

    return "Pending"

};

const testCases = [
    ["Test 1: ", [[0,0],[2,0],[1,1],[2,1],[2,2]], "A"],
    ["Test 2: ",[[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]], "B"],
    ["Test 3: ",[[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]], "Draw"],
    ["Test 4: ",[[0,0],[1,1],[0,1],[1,0],[0,2]], "A"],
    ["Test 5: ",[[0,0],[0,1],[2,2],[1,1],[2,2], [2,1]], "B"]
]

for(let [testNumber, input, expected] of testCases){
    const returned = tictactoe(input); 
    const result = returned === expected ? `${testNumber}✅ Passed with: ${returned}` : `${testNumber}❌ Failed with: ${returned}`;
    console.log(result); 
}