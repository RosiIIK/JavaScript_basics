function passworGuess(input) {
    let currentPassword = input[0];

    if (currentPassword === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passworGuess(["qwerty"])