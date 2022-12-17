function club(input) {
 
    let clubProfit = Number(input[0]);
    let index = 1;
 
    let pricePerDrink = 0;
    let bill = 0;
    let totalBill = 0;
 
    while (input[index] != "Party!") {
        let cocktail = input[index];
        index++;
        let drinksQuantity = Number(input[index]);
        index++;
 
        pricePerDrink = Number(cocktail.length);
        bill = pricePerDrink * drinksQuantity;
        if (bill % 2 == 1) {
            bill *= 0.75;
        }
        totalBill += bill;
 
        if (totalBill >= clubProfit) {
            break;
        }
    }
 
    if (totalBill < clubProfit && input[index] === "Party!") {
        let moneyNeeded = clubProfit - totalBill;
        console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
        console.log(`Club income - ${totalBill.toFixed(2)} leva.`);
 
    } else if (totalBill >= clubProfit) {
        console.log(`Target acquired.`);
        console.log(`Club income - ${totalBill.toFixed(2)} leva.`);
    }
 
}