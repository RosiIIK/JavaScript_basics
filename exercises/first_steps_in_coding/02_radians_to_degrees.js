function radiansToDegrees(input) {
    let radian = Number(input[0]);
    let pi = Math.PI;
    let degrees = radian * 180 / pi;
    console.log(degrees);
}

radiantToDegrees(["3.1416"]);