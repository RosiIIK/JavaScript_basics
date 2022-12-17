//wrong minutes > 59!!!
function timePlus15Minutes(input) {
    let hrs = Number(input[0]);
    let mins = Number(input[1]);

    mins += 15;
    hrs += mins / 60;
    mins %= 60
    hrs = Math.trunc(hrs);

    if (hrs > 23) {
        hrs = 0;
        if (mins > 59) {
            mins = 0
            hrs += 1
            console.log(`${hrs}:0${mins}`);
        } else if (mins >= 10) {
            console.log(`${hrs}:${mins}`);
        } else if (mins < 10 || mins == 0) {
            console.log(`${hrs}:0${mins}`);
        } else {
            console.log(`${hrs}:${mins}`);
        }
    } else {
        if (mins > 59) {
            mins = 0
            hrs += 1
            console.log(`${hrs}:0${mins}`);
        } else if (mins >= 10) {
            console.log(`${hrs}:${mins}`);
        } else if (mins < 10 || mins == 0) {
            console.log(`${hrs}:0${mins}`);
        } else {
            console.log(`${hrs}:${mins}`);
        }
    }
}
timePlus15Minutes(["23", "45"]);
