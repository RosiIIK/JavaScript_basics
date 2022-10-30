function getPersonInfoString(input) {
    // read the input
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    // get the result
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    // print/log
    console.log(result);
}

getPersonInfoString(["Pesho", "Penev", 35, "Jambol"]);