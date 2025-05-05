let yen = document.querySelector('.yen-currency') //Holds the currency as a value
let parsedYen = parseFloat(yen.innerHTML)

let clickerCost = document.querySelector('.clicker-cost') //Holds the cost of the upgrade for clicker
let parsedClickercost = parseFloat(clickerCost.innerHTML) // Changes the value into integer
let clickerLevel = document.querySelector(".clicker-level") // Holds Clicker Level
let clickerIncrease = document.querySelector(".clicker-increase") // Holds Clicker Increase
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let riceCost = document.querySelector('.rice-cost') //Holds the cost of the upgrade for Rice
let parsedRicecost = parseFloat(riceCost.innerHTML) // Changes the value into integer
let riceLevel = document.querySelector(".rice-level") // Holds Rice Level
let riceIncrease = document.querySelector(".rice-increase") // Holds Rice Increase
let parsedRiceIncrease = parseFloat(riceIncrease.innerHTML)

let matchaCost = document.querySelector('.matcha-cost') //Holds the cost of the upgrade for matcha
let parsedMatchacost = parseFloat(matchaCost.innerHTML) // Changes the value into integer
let matchaLevel = document.querySelector(".matcha-level") // Holds matcha Level
let matchaIncrease = document.querySelector(".matcha-increase") // Holds matcha Increase
let parsedMatchaIncrease = parseFloat(matchaIncrease.innerHTML)

let ypcText = document.getElementById("ypc-text")
let ypsText = document.getElementById("yps-text")

let ypc = 1; // yen per click

let yps = 0; //yen per second


function incrementYen() {
    yen.innerHTML = Math.round(parsedYen += ypc)
}

function buyClicker() {
    if (parsedYen >= parsedClickercost) {
        yen.innerHTML = Math.round(parsedYen -= parsedClickercost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2)) // Increases clicking power
        clickerIncrease.innerHTML = parsedClickerIncrease
        ypc += parsedClickerIncrease

        parsedClickercost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickercost);
    }
}

function buyRice() {
    if (parsedYen >= parsedRicecost) {
        yen.innerHTML = Math.round(parsedYen -= parsedRicecost);

        riceLevel.innerHTML ++

        parsedRiceIncrease = parseFloat((parsedRiceIncrease * 1.03).toFixed(2)) // Increases clicking power
        riceIncrease.innerHTML = parsedRiceIncrease
        yps += parsedRiceIncrease

        parsedRicecost *= 1.18;
        riceCost.innerHTML = Math.round(parsedRicecost);
    }
}

function buyMatcha() {
    if (parsedYen >= parsedMatchacost) {
        yen.innerHTML = Math.round(parsedYen -= parsedMatchacost);

        matchaLevel.innerHTML ++

        parsedMatchaIncrease = parseFloat((parsedMatchaIncrease * 1.03).toFixed(2)) // Increases clicking power
        matchaIncrease.innerHTML = parsedMatchaIncrease
        yps += parsedMatchaIncrease

        parsedMatchacost *= 1.18;
        matchaCost.innerHTML = Math.round(parsedMatchacost);
    }
}

setInterval(() => {
    parsedYen += yps / 2
    yen.innerHTML = Math.round(parsedYen)
    ypcText.innerHTML = Math.round(ypc)
    ypsText.innerHTML = Math.round(yps)
}, 500)