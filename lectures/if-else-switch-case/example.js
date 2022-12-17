function areaCalc(input) {
    let figure = input[0];

    switch (figure) {
        case "square":
            // не можем да ползваме еднакви променливи тук, ако имаме няколко различни случая
            let a = Number(input[1]);
            let result = (a * a).toFixed(3);
            console.log(result);
        break;
        default: //else
            console.log("Not a real figure");
    }
}

areaCalc(["square", 4])