import ProgressBar from "./ProgressBar";


function StrengthTest(props) {
    const geslo = props.geslo
    let dolzina = geslo.length
    let middleIndex = Math.floor(geslo.length / 2);
    let dolzinaScore = 0
    let velikeCrkeStevec = 0
    let velikeCrkeScore = 0
    let maleCrkeStevec = 0
    let maleCrkeScore = 0
    let stevilaStevec = 0
    let stevilaScore = 0
    let simboliStevec = 0
    let simboliScore = 0
    let sredinaStevec = 0
    let sredinaScore = 0

    for (let i = 0; i < geslo.length; i++) {
        if (geslo[i] === geslo[i].toUpperCase() && geslo[i] !== geslo[i].toLowerCase()) {
            velikeCrkeStevec++;
        }
        if (geslo[i] === geslo[i].toLowerCase() && geslo[i] !== geslo[i].toUpperCase()) {
            maleCrkeStevec++;
        }
        if (!isNaN(geslo[i])) {
            stevilaStevec++;
        }
        if (!geslo[i].match(/[a-zA-Z0-9\s]/)) {
            simboliStevec++;
        }
        if (i >= middleIndex - 1 && i <= middleIndex + 1 && !isNaN(geslo[i])) {
            sredinaStevec++;
        } else if (i >= middleIndex - 1 && i <= middleIndex + 1 && !geslo[i].match(/[a-zA-Z0-9\s]/)) {
            sredinaStevec++;
        }


    }
    dolzinaScore = dolzina * 4
    velikeCrkeScore = (dolzina - velikeCrkeStevec) * 2
    maleCrkeScore = (dolzina - maleCrkeStevec) * 2
    stevilaScore = stevilaStevec * 4
    simboliScore = simboliStevec * 6
    sredinaScore = sredinaStevec * 2
    let kocniScore = dolzinaScore + velikeCrkeScore + maleCrkeScore + stevilaScore + simboliScore + sredinaScore
    console.log("stevecVlke" + " " + velikeCrkeStevec)
    console.log("Vlke crke score" + " " + velikeCrkeScore)
    console.log("stevecMale" + " " + maleCrkeStevec)
    console.log("Male crke score" + " " + maleCrkeScore)
    console.log("Stevila stevec" + " " + stevilaStevec)
    console.log("Stevila score" + " " + stevilaScore)
    console.log("Simboli stevec" + " " + simboliStevec)
    console.log("Simboli score" + " " + simboliScore)
    console.log("Sredina stevec" + " " + sredinaStevec)
    console.log("Sredina score" + " " + sredinaScore)
    console.log("Končni score" + kocniScore)
    

    return (
        <ProgressBar score = {kocniScore}/>
    )

}

export default StrengthTest;