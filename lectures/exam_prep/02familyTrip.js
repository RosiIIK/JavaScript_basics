function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let price = Number(input[2]);
    let extraCostsPercentage = Number(input[3]);

    if (nights > 7) {
        let discount = price * (5 /100);
        price -= discount;

    }
    let totalStayCost = price * nights;
    let totalExtraCost = budget * (extraCostsPercentage / 100);  
    
    let total = totalStayCost + totalExtraCost;
    if (total <= budget) {
        let leftover = budget - total
        console.log(`Ivanovi will be left with ${leftover.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = total - budget
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50","8","100","2"]);