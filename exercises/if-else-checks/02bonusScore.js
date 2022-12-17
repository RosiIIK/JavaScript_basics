function bonusPoint(input) {
    let num = Number(input[0]);

    let bonus = 0
    if (num <= 100) {
        bonus = 5;
    } else if (num > 100 && num < 1000) {
        bonus = num * 0.20;
    } else if (num >= 1000) {
        bonus = num * 0.10;
    }

    if (num % 2 == 0) {
        bonus += 1;
    } else if (num % 5 == 0) {
        bonus += 2
    }

    let totalPoints = num + bonus;
    console.log(bonus);
    console.log(totalPoints);
}
bonusPoint(["15875"]);