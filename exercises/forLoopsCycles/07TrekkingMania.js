function trackMania(input) {
    let groupsCounter = Number(input[0]);
    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEverest = 0;

    let mountainTop = ''
    
    for(let i = 1; i <= groupsCounter; i++) {
        let counterPeople = Number(input[i]);

        if (counterPeople <= 5) {
            mountainTop = "Musala";
            peopleMusala += counterPeople; 
        } else if (counterPeople <= 12) {
            mountainTop = "Monblan";
            peopleMonblan += counterPeople;
        } else if (counterPeople <= 25) {
            mountainTop = "Kilimandjaro";
            peopleKilimandjaro += counterPeople;
        } else if (counterPeople <= 40) {
            mountainTop = "K2";
            peopleK2 += counterPeople;
        } else {
            mountainTop = "Everest";    
            peopleEverest += counterPeople;
        }
        
    }
    let allPeople = peopleMusala + peopleMonblan + peopleKilimandjaro + peopleK2 + peopleEverest;
    let percMusala = (peopleMusala * 100) / allPeople;
    let percMonblan = (peopleMonblan * 100) / allPeople;
    let percKilimandjaro = (peopleKilimandjaro * 100) / allPeople;
    let percK2 = (peopleK2 * 100) / allPeople;
    let percEverest = (peopleEverest * 100) / allPeople;

    console.log(percMusala.toFixed(2) + "%");
    console.log(percMonblan.toFixed(2) + "%");
    console.log(percKilimandjaro.toFixed(2) + "%");
    console.log(percK2.toFixed(2) + "%");
    console.log(percEverest.toFixed(2) + "%");

}

trackMania(["10","10","5","1","100","12","26","17","37","40","78"]);