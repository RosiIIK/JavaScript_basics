function projectCreation(input) {
    let name = input[0];
    let numOfProjects = input[1];
    let projectPerHour = 3;
    let sumTotalProjectHours = numOfProjects * projectPerHour;
    let result = `The architect ${name} will need ${sumTotalProjectHours} hours to complete ${numOfProjects} project/s.`;
    console.log(result)
}

projectCreation(["George ","4 "])