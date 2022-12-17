function pool(input) {
    let peopleCount = Number(input[0]);
    let entryFeePerPerson = Number(input[1]);
    let bedFee = Number(input[2]);
    let umbrellaFee = Number(input[3]);

    let totalEntryFee = entryFeePerPerson * peopleCount;
    let peopleBedWanted = Math.ceil(peopleCount * 75 / 100);
    let totalBedFee = peopleBedWanted * bedFee;
    let umbrellaPerPair = Math.ceil(peopleCount / 2); 
    let totalUmbrellaFee = umbrellaPerPair * umbrellaFee;

    let totalSum = totalEntryFee + totalBedFee + totalUmbrellaFee;
    console.log(`${totalSum.toFixed(2)} lv.`)

}
pool(["21","5.50","4.40","6.20"]);