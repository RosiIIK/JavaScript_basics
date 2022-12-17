function worldRecordWin(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let totalTime = distanceInMeters * timeInSeconds;
    if (distanceInMeters >= 15) {
        let delay = (Math.trunc(distanceInMeters / 15)) * 12.5;
        totalTime += delay;
    }
    if (totalTime >= recordInSeconds) {
        let difference = (Math.abs(totalTime - recordInSeconds)).toFixed(2);
        console.log(`No, he failed! He was ${difference} seconds slower.`)
    } else {
        totalTime = totalTime.toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`)
    }
}
worldRecordWin(["55555.67","3017","5.03"]);