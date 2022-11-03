function bookList(input) {
    let curBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let readingDays = Number(input[2]);

    let readingHoursTotal = curBookPages / pagesPerHour;
    let readingHoursPerDay = readingHoursTotal / readingDays

    console.log(readingHoursPerDay)
}

bookList(["212","20","2"])