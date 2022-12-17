function sumNums(input) {
    let num = input[0];
    let numAsString = num + "";
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log("The sum of the digits is:" + sum);
}

sumNums([1234])