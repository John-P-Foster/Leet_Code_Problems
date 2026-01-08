// You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by
//  'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented 
//  by '.'.

// A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches 
// another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in 
// one move.

// Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack 
// a pawn if there is another piece blocking the path.

// Return the number of pawns the white rook is attacking.

 

// Example 1:


const board1 = [
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","R",".",".",".","p"],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."]
]

const outPut1 = 3

// Explanation:

// In this example, the rook is attacking all the pawns.

// Example 2:


const board2 = [
    [".",".",".",".",".",".","."],
    [".","p","p","p","p","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","B","R","B","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","p","p","p","p",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]
]

const outPut2 = 0

// Explanation:

// The bishops are blocking the rook from attacking any of the pawns.

// Example 3:


const board3 = [
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    ["p","p",".","R",".","p","B","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."]
 ]

const outPut3 = 3

// Explanation:

// The rook is attacking the pawns at positions b5, d6, and f5.

 

// Constraints:

// board.length == 8
// board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let attacking = 0;
    let row = 0; 
    let col = 0; 
    let rook = [-1, -1]; 

    // Finding the Rook
    while(row < 8 && rook[0] === -1){
        while(col < 8 && rook[0] === -1){
            if(board[row][col] === "R"){
                 rook[0] = row
                 rook[1] = col
            } 
            col ++; 
        }
        col = 0; 
        row ++;    
    }

    //scan up from Rook looking for P or B.
    for(let i = rook[0] -1; i >= 0; i--){
        if(board[i][rook[1]] === "B") break; 
        if(board[i][rook[1]] === "p") {
            attacking ++; 
            break;
        } 
    }

    //scan down from Rook looking for P or B.
    for(let i = rook[0] + 1; i < 8; i ++){
        if(board[i][rook[1]] === "B") break; 
        if(board[i][rook[1]] === "p") {
            attacking ++; 
            break;
        } 
    }


    //scan left from Rook looking for P or B.
    for(let i = rook[1] -1; i >= 0; i--){
        if(board[rook[0]][i] === "B") break; 
        if(board[rook[0]][i] === "p"){
            attacking ++; 
            break;
        } 

    }

    //scan right from Rook looking for P or B.
    for(let i = rook[1] +1; i < 8; i ++){
        if(board[rook[0]][i] === "B") break; 
        if(board[rook[0]][i] === "p") {
            attacking ++; 
            break;
        } 
    }

    return attacking; 
};

const testCases = [
    [board1, outPut1],
    [board2, outPut2],
    [board3, outPut3]
]

let testNumber = 1; 
for(let[board, expected] of testCases){
    const returned = numRookCaptures(board); 
    const result = returned === expected ? `Test ${testNumber} ✅ Passed with: ${returned}`: `Test ${testNumber} ❌ Failed with: ${returned}`
    testNumber ++
    console.log(result);
}