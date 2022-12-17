function skiTrip(input) {
    let daysStay = Number(input[0]);
    let typeOfRoom= input[1];
    let grade = input[2];

    let totalPrice = 0;
    let nights = daysStay - 1

    switch (typeOfRoom) {
        case "room for one person":
            let priceOnePerson = nights * 18;
            if (nights) {
                totalPrice += priceOnePerson;
        } break;
        case "apartment":
            let priceApartment = nights * 25;
            if (daysStay < 10) {
                totalPrice += priceApartment * 0.70;
            } else if (nights >=10 && nights < 15) {
                totalPrice += priceApartment * 0.65;
            } else if (nights >= 15) {
                totalPrice += priceApartment * 0.50;
            } break;
        case "president apartment":
            let pricePresidentAp = nights * 35;
            if (nights < 10) {
                totalPrice += pricePresidentAp * 0.90;
            } else if (nights >=10 && nights < 15) {
                totalPrice += pricePresidentAp * 0.85;
            } else if (nights >= 15) {
                totalPrice += pricePresidentAp * 0.80;
            } break;
    }
    if (grade == "positive") {
        totalPrice *= 1.25
    } else {
        totalPrice *= 0.9
    }
    console.log(totalPrice.toFixed(2));

}
skiTrip(["30","president apartment","negative"]);