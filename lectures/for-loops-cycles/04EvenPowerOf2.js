function evenPower(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 1) {
        if(i % 2 === 0) {
            let number = Math.pow(2, i)
            console.log(number);
        }
    }
}

evenPower(["10"]);

// 2 начин

function evenPower(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2, i));
        }
}

evenPower(["10"]);