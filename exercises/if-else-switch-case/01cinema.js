function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let totalPrice = 0
    if (typeProjection == "Premiere") {
        let ticketPrice = 12.00;
        totalPrice += ticketPrice * rows * cols;
    } else if (typeProjection == "Normal") {
        let ticketPrice = 7.50;
        totalPrice += ticketPrice * rows * cols;
    } else if(typeProjection == "Discount") {
        let ticketPrice = 5.00;
        totalPrice += ticketPrice * rows * cols;
    }
    console.log(totalPrice.toFixed(2) + " leva");
}
cinema(["Premiere","10","12"]);