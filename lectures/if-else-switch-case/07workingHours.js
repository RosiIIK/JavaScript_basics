function workingHours(input) {
    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];

    switch (dayOfTheWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour < 10 || hour > 18) {
                console.log("closed"); break;
            } else {
                console.log("open"); break;
            }
        default:
            console.log("closed"); break;
    }
}
workingHours(["9", "Monday"])
