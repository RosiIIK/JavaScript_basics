function boatRent(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let rentPrice = 0;
    if (season == "Summer" || season == "Autumn") {
        rentPrice += 4200;
    } else if (season == "Spring") {
        rentPrice += 3000;
    } else {
        rentPrice += 2600;
    }
            
    if (fisherman <= 6) {
        rentPrice *= 0.90
    } else if (7 <= fisherman && fisherman <=11) {
        rentPrice *= 0.85;
    } else if (fisherman >= 12) {
        rentPrice *= 0.75;
    } 

    if (fisherman % 2 == 0 && season != "Autumn") {
        rentPrice *= 0.95;
    }

    if (budget >= rentPrice) {
        let restMoney = (Math.abs(budget - rentPrice)).toFixed(2);
        console.log(`Yes! You have ${restMoney} leva left.`);
    } else {
        let restMoney = (Math.abs(budget - rentPrice)).toFixed(2);
        console.log(`Not enough money! You need ${restMoney} leva.`);
    }
}
boatRent(["2000","Winter","13"]);