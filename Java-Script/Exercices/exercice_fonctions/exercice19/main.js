function compterLettreA(str) {

    let nombreA = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            nombreA += 1;

        }
    }
    console.log("le nombre de A dans " + str + "est de " + nombreA);
    return nombreA;

}

compterLettreA("bkaaaaa");

