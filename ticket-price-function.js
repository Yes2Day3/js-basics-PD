//let visitorAge = 12;
//let isStudent = true;

function printTicketPrice(visitorAge, isStudent){
    if(visitorAge <= 6){
        console.log("Ieeja is bezmaksas.")
    }
    if(isStudent == true){
        console.log("Biļetes cena ir 5 EUR")
    }
    else{
        console.log("Biļete ir 10 EUR")
    }
}

printTicketPrice(12, true)
printTicketPrice(35, false)