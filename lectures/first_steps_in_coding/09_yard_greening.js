function yardGreening(input) {
    let totalSqrMeters = input;
    let pricePerMeter = 7.61;
    let totalSumWithoutDiscount = (totalSqrMeters * pricePerMeter);
    let discount = 0.18 * totalSumWithoutDiscount;
    let totalSumWithDiscount = totalSumWithoutDiscount - discount;
    console.log(`The final price is: ${totalSumWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);