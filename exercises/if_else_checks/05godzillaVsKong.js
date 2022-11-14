function enoughMoney(input) {
    let moveyBudget = Number(input[0]);
    let statists = Number(input[1]);
    let priceForClothesPerStatist = Number(input[2]);

    let decorCosts = moveyBudget * 0.10;
    let totalClothesMoney = priceForClothesPerStatist * statists;
    let discount = 0;
    if (statists >= 150) {
        discount += (totalClothesMoney * 0.10);
        totalClothesMoney -= discount;
    }
    let totalMoney = decorCosts + totalClothesMoney;
    if (totalMoney <= moveyBudget) {
        let leftMoney = (Math.abs(totalMoney - moveyBudget)).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney} leva left.`)
    } else {
        let leftMoney = (Math.abs(totalMoney - moveyBudget)).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${leftMoney} leva more.`);
    }
    
}
enoughMoney(["20000","120","55.5"]);
