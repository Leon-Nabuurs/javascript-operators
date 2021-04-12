const leeftijdsGrens = 18;
const kortingBovenGrens = 25;
const isFemale = false;
const driverStatus = 'bob';
const prijsMan = 'Bram';
const prijsVrouw = 'Sara';
const jubPrijs1 = 100;
const jubPrijs2 = 50;
const jubPrijs3 = 25;

var leeftijd = 26;
var status = 'bos';
var naam = 'Sara';
var totalAmount = 159;

if (leeftijd >= leeftijdsGrens) {
    console.log("Deze persoon mag naar binnen");
}
else {
    console.log("Deze persoon is te jong om binnen te mogen");
}

if (leeftijd >= leeftijdsGrens && leeftijd <= kortingBovenGrens) {
    console.log("Je krijgt 50% korting!!");
}
else {
    console.log("Helaas voor jou geen korting");
}

if (naam === prijsVrouw || naam === prijsMan) {
    console.log("Je krijgt een gratis biertje");
}
else {
    console.log("Helaas voor jou geen gratis biertje");
}

if (totalAmount >= jubPrijs1) {
    console.log("Je krijgt gratis een fles champagne!!");
} else if (totalAmount >= jubPrijs2) {
    console.log("Je krijgt gratis nachos!!");
} else if (totalAmount >= jubPrijs3) {
    console.log("Je krijgt gratis (vega)bitterballen!!");
} else {
    console.log("Helaas, geen jubileumprijs gewonnen");
}

if (isFemale) {
    console.log("Welkom mevrouw");
}
else {
    console.log("Vandaag is het alleen voor dames, maar morgen ben je weer welkom");
}

if (status == driverStatus) {
    console.log("Deze persoon mag naar huis rijden");
}
else {
    console.log("Waar is de chauffeur?");
}

