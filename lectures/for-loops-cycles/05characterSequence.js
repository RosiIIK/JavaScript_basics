function letter(input) {
    let text = input[0];
    let length = text.length;
    for(let i = 0; i < length; i += 1) {
        console.log(text[i]);
        //console.log(text.charAt(i));
    }
}

letter(["hello"]);