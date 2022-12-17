function tennisRankList(input) {
    let counterTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    
    let totalPoints = initialPoints;
    let counterWinners = 0;

    for (let i = 2; i <= counterTournaments + 1; i++) {
        let tournamentLevel = input[i];

        if(tournamentLevel == "W") {
            totalPoints += 2000;
            counterWinners += 1;
        } else if (tournamentLevel == "F") {
            totalPoints += 1200;
        } else if (tournamentLevel == "SF") {
            totalPoints += 720;
        }
    }

    console.log(`Final points: ${totalPoints}`);
    let averagePoints = (totalPoints - initialPoints) / counterTournaments;
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    let percWin = (counterWinners / counterTournaments) * 100;
    console.log(`${percWin.toFixed(2)}%`);
}

tennisRankList(["5","1400","F","SF","W","W","SF"]);