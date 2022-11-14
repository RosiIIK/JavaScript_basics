function lunchBreak(input) {
    let serialName = input[0];
    let serialTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForEating = breakTime / 8;
    let timeForRelaxing = breakTime / 4;

    let timeLeft = breakTime - timeForEating - timeForRelaxing;

    if (timeLeft >= serialTime) {
        let diff = Math.ceil(Math.abs(timeLeft - serialTime));
        console.log(`You have enough time to watch ${serialName} and left with ${diff} minutes free time.`);
    } else {
        let diff = Math.ceil(Math.abs(timeLeft - serialTime));
        console.log(`You don't have enough time to watch ${serialName}, you need ${diff} more minutes.`);
    }
}
lunchBreak(["Game of Thrones","48","60"]);
