function tradeComm(input) {
    let city = input[0];
    let sale = Number(input[1]);

    switch (city) {
        case "Sofia":
            if (sale >=0 && sale <= 500) {
                let commision = 0.05 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 500 && sale <= 1000) {
                let commision = 0.07 * sale;
                console.log(commision.toFixed(2));
            } else if ( sale > 1000 && sale <= 10000) {
                let commision = 0.08 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 10000) {
                let commision = 0.12 * sale;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sale >= 0 && sale <= 500) {
                let commision = 0.045 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 500 && sale <= 1000) {
                let commision = 0.075 * sale;
                console.log(commision.toFixed(2));
            } else if ( sale > 1000 && sale <= 10000) {
                let commision = 0.10 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 10000) {
                let commision = 0.13 * sale;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sale >=0 && sale <= 500) {
                let commision = 0.055 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 500 && sale <= 1000) {
                let commision = 0.08 * sale;
                console.log(commision.toFixed(2));
            } else if ( sale > 1000 && sale <= 10000) {
                let commision = 0.12 * sale;
                console.log(commision.toFixed(2));
            } else if (sale > 10000) {
                let commision = 0.145 * sale;
                console.log(commision.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default: 
            console.log("error") ; break;
    }
}

tradeComm(["Plovdiv","-20"]);