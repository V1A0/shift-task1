function getRandInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max - min));
}


function getRandHexColor() {
    return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
}


// Setting style of rand element
function colorize() {

    let randItemID = getRandInt(0, allDivs.length-1)
    let randColor = getRandHexColor()

    allDivs[randItemID]
        .animate(
        {boxShadow: "0 0 20px " + randColor},
        {duration: 1000, easing: "ease-out", fill: "forwards"}
    )

    console.log(`Element colorized: (${randColor}) `, allDivs[randItemID])
}


// Erasing style of element
function uncolorize() {

    let randItemID = getRandInt(0, allDivs.length-1)

    allDivs[randItemID]
        .animate(
        {boxShadow: "0 0 0 "},
        {duration: 1000, easing: "ease-in", fill: "forwards"}
    )

    console.log('Element uncolorized: ', allDivs[randItemID])
}

// main
const timeStep = 2000// SET THIS VAR = 2 AND HAVE FUN :^)
let allDivs = document.querySelectorAll('*')

setInterval(colorize, timeStep)
setInterval(uncolorize, timeStep)

