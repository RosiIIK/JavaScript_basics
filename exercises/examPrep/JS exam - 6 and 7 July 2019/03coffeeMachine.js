function coffeemaker(input) {

    let drink = input[0];
    let sugar = input[1];
    let drinkQuantity = input[2];

    let drinkPrice = 0;
    let totalDrinkPriceNoDiscount = 0;
    let totalDrinkPrice = 0;

    if (drink === "Espresso") {
        if (sugar === "Without") {
            drinkPrice += 0.90;
            totalDrinkPriceNoDiscount += drinkQuantity * drinkPrice;
            totalDrinkPrice += totalDrinkPriceNoDiscount * 0.65;
        } else if (sugar === "Normal") {
            drinkPrice += 1.00;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        } else if (sugar === "Extra") {
            drinkPrice += 1.20;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        }

        if (drinkQuantity >= 5) {
            totalDrinkPrice *= 0.75;
        }
    } else if (drink === "Cappuccino") {
        if (sugar === "Without") {
            drinkPrice += 1.00 * discount;
            totalDrinkPriceNoDiscount += drinkQuantity * drinkPrice;
            totalDrinkPrice += totalDrinkPriceNoDiscount * 0.65;
        } else if (sugar === "Normal") {
            drinkPrice += 1.20;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        } else if (sugar === "Extra") {
            drinkPrice += 1.60;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        }
    } else if (drink === "Tea") {
        if (sugar === "Without") {
            drinkPrice += 0.50 * discount;
            totalDrinkPriceNoDiscount += drinkQuantity * drinkPrice;
            totalDrinkPrice += totalDrinkPriceNoDiscount * 0.65;
        } else if (sugar === "Normal") {
            drinkPrice += 0.60;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        } else if (sugar === "Extra") {
            drinkPrice += 0.70;
            totalDrinkPrice += drinkQuantity * drinkPrice;
        }
    }

    if (totalDrinkPrice > 15) {
        let discount = totalDrinkPrice * 0.20;
        totalDrinkPrice -= discount;
    }
    
    console.log(`You bought ${drinkQuantity} cups of ${drink} for ${totalDrinkPrice.toFixed(2)} lv.`);

}

coffeemaker(["Cappuccino","Normal","13"]);