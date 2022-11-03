function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);
    let basketballSneakers = yearlyFee - (yearlyFee * 0.40);
    let basketballClothes = basketballSneakers - (basketballSneakers * 0.20);
    let basketball = basketballClothes / 4;
    let basketballAccessories = basketball / 5;

    let totalCosts = yearlyFee + basketballSneakers + basketballClothes + basketball + basketballAccessories;
    console.log(totalCosts);
}

basketballEquipment(["365"]);