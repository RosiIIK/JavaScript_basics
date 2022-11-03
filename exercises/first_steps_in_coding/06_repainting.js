function repainting(input) {
    let nilon = Number(input[0]);
    let nilonPrice = (nilon + 2) * 1.50;
    let paint = Number(input[1]);
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let thinner = Number(input[2])
    let thinnerPrice = thinner * 5.00;
    let package = 0.40;
    let hours = Number(input[3]);

    let sumWithoutLabor = nilonPrice + paintPrice + thinnerPrice + package;
    let laborFee = (sumWithoutLabor * 0.30) * hours;
    let totalSum = sumWithoutLabor + laborFee;

    console.log(totalSum)
}

repainting(["10","11","4","8"])