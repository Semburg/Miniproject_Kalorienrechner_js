let grundUmsatz;
let gesamtUmsatz;
let malePerson = document.getElementById("male");
let femalePerson = document.getElementById("female");

let weight = document.getElementById("bodyWeight")
let personAge = document.getElementById("age")
let height = document.getElementById("bodyHeight")

function calcGrundUmsatz() {
    if (malePerson.checked) {
        grundUmsatz = (664.7 + 13.7 * weight.value + 5*height.value - 6.8*personAge.value).toFixed(2);
    } else {
        grundUmsatz = (655.1 + 9.6 * weight.value + 1.8*height.value - 4.7*personAge.value).toFixed(2);
    }
}

let sittingJob = document.getElementById("sitting");
let halfSittingJob = document.getElementById("halfSitting");
let walkingJob = document.getElementById("walking");
let halfRunningJob = document.getElementById("halfwalking")
let runningJob = document.getElementById("runningWork");

function showResult(){
    document.getElementById("errorMsg1").innerHTML = ""
    document.getElementById("tableResult").style.display = "block";

    if(weight.value == 0 || personAge.value == 0 || height.value == 0){
        document.getElementById("errorMsg1").innerHTML = "Biite alle Felder eintragen!"
        document.getElementById("tableResult").style.display = "none";
    } else if (sittingJob.selected) {
        gesamtUmsatz= grundUmsatz * 1.2;
    } else if (halfSittingJob.selected){
        gesamtUmsatz= grundUmsatz * 1.5;
    } else if(walkingJob.selected){
        gesamtUmsatz= grundUmsatz * 1.7;
    } else if (halfRunningJob.selected){
        gesamtUmsatz= grundUmsatz * 1.9;
    } else {
        gesamtUmsatz= grundUmsatz * 2.2;
    }
    document.getElementById("grundAusgabeKc").innerHTML = Math.floor(grundUmsatz) 
    document.getElementById("grundAusgabeJ").innerHTML = Math.floor(grundUmsatz*4.184) 
    document.getElementById("gesamtAusgabeKc").innerHTML = Math.floor(gesamtUmsatz) 
    document.getElementById("gesamtAusgabeJc").innerHTML = Math.floor(gesamtUmsatz*4.184) 
}
