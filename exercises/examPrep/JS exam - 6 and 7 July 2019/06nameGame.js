///not ready
function nameGame(input) {

    let gamerName = input[0];
    let index = 1;

    ///let nameInASCII = gamerName.charCodeAt(index);

    let maxPoints = 0;
    let winnerName = '';

    while (input[index] !== "Stop") {
        let newGamer = gamerName;
        let playerPoints = 0;
        for (let letter = 1; letter <= gamerName.charCodeAt(0); letter++) {
            let num = Number(input[index]);
            index++;
            if (num == letter.fromCharCode(0)) {
                playerPoints += 10;
            } else {
                playerPoints += 2;
            }
        }
        if (playerPoints >= maxPoints) {
            maxPoints = playerPoints;
            winnerName = newGamer;
        }
        
        console.log()
    }
}

nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"]);
