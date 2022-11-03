function depostiCalculator(input) {
    let depositSum = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let yearlyIncreasePercent = Number(input[2]);
    let yearlyIncreaseDecimal = yearlyIncreasePercent / 100;
    let sum = depositSum + depositPeriodMonths * ((depositSum * yearlyIncreaseDecimal) / 12);
    console.log(sum);
}

depostiCalculator(["200","3","5.7"]);