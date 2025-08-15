function randomProblemNumber(){
    return 'Try problem closest to the number: ' + (Math.floor( Math.random() * 3000) + 1);
}

console.log(randomProblemNumber()); 