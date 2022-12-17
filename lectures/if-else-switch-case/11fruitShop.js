function fruitSHop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit == "banana") {
                let fruitPrice = quantity * 2.50;
                console.log(fruitPrice.toFixed(2)); 
            } else if (fruit == "apple") {
                let fruitPrice = quantity * 1.20;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "orange") {
                let fruitPrice = quantity * 0.85;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "grapefruit") {
                let fruitPrice = quantity * 1.45;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "kiwi") {
                let fruitPrice = quantity * 2.70;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "pineapple") {
                let fruitPrice = quantity * 5.50;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "grapes") {
                let fruitPrice = quantity * 3.85;
                console.log(fruitPrice.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit == "banana") {
                let fruitPrice = quantity * 2.70;
                console.log(fruitPrice.toFixed(2)); 
            } else if (fruit == "apple") {
                let fruitPrice = quantity * 1.25;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "orange") {
                let fruitPrice = 0.90 * quantity;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "grapefruit") {
                let fruitPrice = quantity * 1.60;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "kiwi") {
                let fruitPrice = quantity * 3.00;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "pineapple") {
                let fruitPrice = quantity * 5.60;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit == "grapes") {
                let fruitPrice = quantity * 4.20;
                console.log(fruitPrice.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error"); 
            break;
    }
}
fruitSHop(["tomato","Monday","0.5"]);
