function zooMarket(input) {
    let dogFood = input[0];
    let catFood = input[1];
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let totalCosts = (dogFood * dogFoodPrice) + (catFood * catFoodPrice);
    console.log(totalCosts + " " + "lv.")
}

zooMarket(["5 ", "4 "]);