function renovation(input) {

    let height = Number(input[0]);
    let widght = Number(input[1]);
    let noPaintAreaPercents = Number(input[2]);

    let index = 3;
    let area = height * widght * 4;
    let areaForPainting = Math.ceil(area - (area * noPaintAreaPercents / 100));

    let all_was_painted = false;
    let diff = 0;

    while (input[index] != "Tired!") {
        let paint = Number(input[index]);
        index++;

        areaForPainting -= paint;

        if (areaForPainting <= 0) {
          all_was_painted = true;
          diff = abs(areaForPainting);
          break;
        }
    }
    
    if (input[index] === "Tired!") {
        console.log(`${Math.ceil(areaForPainting)} quadratic m left.`);
    } else if (all_was_painted === true && areaForPainting === 0) {
        console.log(`All walls are painted! Great job, Pesho`);
    }else if (all_was_painted === True && diff > 0) {
        console.log(`All walls are painted and you have ${Math.ceil(diff)} l paint left!`);
    }
    
}
renovation(["3","5","10","2","3","4","Tired!"]);
