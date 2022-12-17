function sumOfSeconds(input) {
    let firstPartSeconds = Number(input[0]);
    let secondPartSeconds = Number(input[1]);
    let thirdPartSeconds = Number(input[2]);

    let totalTime = firstPartSeconds + secondPartSeconds + thirdPartSeconds;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sumOfSeconds(["50","50","49"]);