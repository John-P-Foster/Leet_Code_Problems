function randomProblemNumber(min, max){
    let random = Math.random();
    console.log(`
        Random: ${random}
        Range: ${max - min + 1}
        Start: ${min}
        End: ${max}
        value: ${(random * (max - min  + 1)) + min}
    `)

    const ranomInt = (min, max) => Math.floor(random * (max - min + 1)) + min
    return `Try problem closest to the number: ${ranomInt(min, max)} `
}

console.log(randomProblemNumber(1,3000)); 