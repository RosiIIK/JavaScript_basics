function toyShop(input) {
    let priceOftrip = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let truckToys = Number(input[5]);

    let totalPuzzles = puzzles * 2.60;
    let totalTalkingDolls = talkingDolls * 3;
    let totalTeddyBears = teddyBears * 4.10;
    let totalMinions = minions * 8.20;
    let totalTruckToys = truckToys * 2;

    let totalPrice = totalPuzzles + totalTalkingDolls + totalTeddyBears + totalMinions + totalTruckToys;
    let totalQuantity = puzzles + talkingDolls + teddyBears + minions + truckToys;

    let discount = 0
    if (totalQuantity >= 50) {
        discount += totalPrice * 0.25;
        totalPrice -= discount;
    } 
    let rentTax = totalPrice * 0.10;
    totalPrice -= rentTax;
    if (totalPrice >= priceOftrip) {
        let moneyLeft = (totalPrice - priceOftrip).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`);
    } else {
        let neededMoney = (Math.abs(totalPrice - priceOftrip)).toFixed(2);
        console.log(`Not enough money! ${neededMoney} lv needed.`);
    }
}
toyShop(["320","8","2","5","5","1"]);
