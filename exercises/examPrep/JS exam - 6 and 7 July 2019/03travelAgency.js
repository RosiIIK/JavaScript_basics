function travelAgency(input) {
    let city = input[0];
    let tripPackage = input[1];
    let discountVIP = input[2];
    let tripDays = Number(input[3]);

    let pricePerDay = 0;
    let totalPrice = 0;

    if (city === "Bansko" || city === "Borovets") {
        if (tripPackage === "withEquipment") {
            pricePerDay = 100;
            if (discountVIP == "yes") {
                pricePerDay *= 0.90;
            }
        } else if (tripPackage === "noEquipment") {
            pricePerDay = 80;
            if (discountVIP == "yes") {
                pricePerDay *= 0.95;
            }
        }
    } else if (city === "Varna" || city === "Burgas") {
        if (tripPackage === "withBreakfast") {
            pricePerDay = 130;
            if (discountVIP == "yes") {
                pricePerDay *= 0.88;
            }
        } else if (tripPackage === "noBreakfast") {
            pricePerDay = 100;
            if (discountVIP == "yes") {
                pricePerDay *= 0.93;
            }
        }
    } else {
        console.log(`Invalid input!`);
    }
    
    if (tripDays <= 0) {
        console.log(`Days must be positive number!`);
    }else if (tripDays > 7) {
        totalPrice = pricePerDay * (tripDays - 1);
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    } else if (tripDays <= 7) {
        totalPrice = pricePerDay * tripDays;
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }
    
}

travelAgency(["Borovets","noEquipment","yes","6"]);