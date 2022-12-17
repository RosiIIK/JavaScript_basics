function gardeningPrice(input) {
    let flower = input[0];
    let flowerQuantity = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0
    switch (flower) {
        case "Roses":
            let rosesPrice = 5 * flowerQuantity;
            totalPrice += rosesPrice;
            if (flowerQuantity > 80) {
                totalPrice *= 0.90;
            } break;
        case "Dahlias":
            let dahliasPrice = 3.80 * flowerQuantity;
            totalPrice += dahliasPrice;
            if (flowerQuantity > 90) {
                totalPrice *= 0.85;
            } break;
        case "Tulips":
            let tulipsPrice = 2.80 * flowerQuantity;
            totalPrice += tulipsPrice;
            if (flowerQuantity > 80) {
                totalPrice *= 0.85;
            } break;
        case "Narcissus":
            let narcissusPrice = 3 * flowerQuantity;
            totalPrice += narcissusPrice;
            if (flowerQuantity < 120) {
                totalPrice *= 1.15;
            } break;
        case "Gladiolus":
            let gladiolusPrice = 2.50 * flowerQuantity;
            totalPrice += gladiolusPrice;
            if (flowerQuantity < 80) {
                totalPrice *= 1.20;
            } break;
    }
        
    if (budget >= totalPrice) {
        let diff = (Math.abs(budget - totalPrice)).toFixed(2);
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${diff} leva left.`);
    } else {
        let diff = (Math.abs(budget - totalPrice)).toFixed(2);
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}
gardeningPrice(["Narcissus","119","360"]);