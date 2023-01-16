function footbalTournament(input) {

    let teamName = input[0];
    let teamSeasonGames = Number(input[1]);

    let counterWins = 0;
    let counterD = 0;
    let counterL = 0;
    let totalPoints = 0;

    for (i = 1; i <= teamSeasonGames + 1; i++) {
        let gameResult = input[i];

        if (gameResult === "W") {
            counterWins += 1; 
            totalPoints += 3;
        } else if (gameResult === "D") {
            counterD += 1;
            totalPoints += 1;
        } else if (gameResult === "L") {
            counterL += 1;
        }
    }

    if (teamSeasonGames === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else if (teamSeasonGames >= 1){
        let percentWonGames = (counterWins / teamSeasonGames) * 100;
        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${counterWins}`);
        console.log(`## D: ${counterD}`);
        console.log(`## L: ${counterL}`);
        console.log(`Win rate: ${percentWonGames.toFixed(2)}%`);
    }
}
footbalTournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]);
