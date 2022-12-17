function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsPrice =  videocards * 250;
    let processorsPrice = processors * (videocardsPrice * 0.35);
    let ramPrice = ram * (videocardsPrice * 0.10);

    let totalPrice = videocardsPrice + processorsPrice + ramPrice;
    if (videocards > processors) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }
    if (budget >= totalPrice) {
        let moneyLeft = (Math.abs(budget - totalPrice)).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`)
    } else {
        let neededSum = (Math.abs(budget - totalPrice)).toFixed(2);
        console.log(`Not enough money! You need ${neededSum} leva more!`)
    }
}
shopping(["920.45","3","1","1"]);