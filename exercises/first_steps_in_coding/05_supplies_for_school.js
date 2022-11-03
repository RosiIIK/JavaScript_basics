function schoolThings(input) {
    let penPrice = 5.80;
    let markerPrise = 7.20;
    let cleaningProduct = 1.20;
    let discount = 0.25;
// inputs
    let penQuantity = Number(input[0]);
    let markerQuantity = Number(input[1]);
    let cleaningProductQuantity = Number(input[2]);
//calculation of total price/s
    let totalPricePens = penPrice * penQuantity;
    let totalPriceMarkers = markerPrise * markerQuantity;
    let totalCleaningProducts = cleaningProduct * cleaningProductQuantity;
    let totalSum = totalPricePens + totalPriceMarkers + totalCleaningProducts;
    let totalSumWithDiscount = totalSum - (totalSum * discount);
    console.log(totalSumWithDiscount);
}

schoolThings(["2","3","4","25"]);