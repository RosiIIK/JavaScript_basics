function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let takenSpacePercent = Number(input[3]);

    let takenSpaceDecimal = takenSpacePercent / 100;
    let tankVolume = lenght * width * height;
    let tankLiters = tankVolume * 0.001;

    let spaceTaken = takenSpaceDecimal * tankLiters; 
    let spaceLeft = tankLiters - spaceTaken;
    console.log(spaceLeft);
}

fishTank(["85","75","47","17"]);