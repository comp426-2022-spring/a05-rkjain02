

// Focus div based on nav button click
const singleButton = document.getElementById("singlenav")
singleButton.addEventListener("click", singleDiv)

function singleDiv() {
    const singlediv = document.getElementById("single")
    const guessdiv = document.getElementById("guess")
    const multidiv = document.getElementById("multi")
    // activated
    singlediv.classList.remove("hidden")
    singlediv.classList.add("active")
    //deactivated
    guessdiv.classList.add("hidden")
    guessdiv.classList.remove("active")
    multidiv.classList.add("hidden")
    multidiv.classList.remove("active")
}

const multiButton = document.getElementById("multinav")
multiButton.addEventListener("click", multiDiv)

function multiDiv() {
    const singlediv = document.getElementById("single")
    const guessdiv = document.getElementById("guess")
    const multidiv = document.getElementById("multi")
    //activated
    multidiv.classList.remove("hidden")
    multidiv.classList.add("active")
    //deactivated
    singlediv.classList.add("hidden")
    singlediv.classList.remove("active")
    guessdiv.classList.add("hidden")
    guessdiv.classList.remove("active")
}

const guessButton = document.getElementById("guessnav")
guessButton.addEventListener("click", guessDiv)

function guessDiv() {
    const singlediv = document.getElementById("single")
    const guessdiv = document.getElementById("guess")
    const multidiv = document.getElementById("multi")
    //activated
    guessdiv.classList.remove("hidden")
    guessdiv.classList.add("active")
    //deactivated
    multidiv.classList.add("hidden")
    multidiv.classList.remove("active")
    singlediv.classList.add("hidden")
    singlediv.classList.remove("active")

}

// Flip one coin and show coin image to match result when button clicked
function coinFlip() {
    const response = fetch('http://localhost:5555/app/flip/')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            document.getElementById("result").innerHTML = result.flip;
            document.getElementById("flippic").setAttribute("src", "./assets/img/"+result.flip+".png")
            //document.getElementById('singleResult').innerHTML = "The coin flip was" + result.flip
        })
    //console.log(result)
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
// Our flip many coins form
const coins = document.getElementById("coins")
// Add event listener for coins form
coins.addEventListener("submit", flipCoins)
// Create the submit handler
async function flipCoins(event) {
    event.preventDefault();

    const endpoint = "app/flip/coins/"
    const url = document.baseURI + endpoint

    const formEvent = event.currentTarget

    try {
        const formData = new FormData(formEvent);
        //console.log(formData)
        const flips = await sendFlips({ url, formData });

        console.log(flips);
        document.getElementById("heads").innerHTML = "Heads: " + flips.summary.heads;
        document.getElementById("tails").innerHTML = "Tails: " + flips.summary.tails;
        document.getElementById("raw").innerHTML = "Actual Flips: " + flips.raw;
    } catch (error) {
        console.log(error);
    }
}
// Create a data sender
async function sendFlips({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(plainFormData);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}

// Guess a flip by clicking either heads or tails button
const heads = document.getElementById("headbutton")
// Add event listener for coins form
heads.addEventListener("click", guessHeads)

async function guessHeads(event) {
    event.preventDefault();
    //console.log("heads")

    const endpoint = "app/flip/call/"
    const url = document.baseURI + endpoint

    const guess = {"guess" : "heads"}

    try {
        const flips = await guessFlip({ url, guess });

        console.log(flips);
        document.getElementById("actual").innerHTML = "The coin landed on " + flips.flip;
        document.getElementById("win").innerHTML = "You " + flips.result;
    } catch (error) {
        console.log(error);
    }
}
// Create a data sender
async function guessFlip({ url, guess }) {
    const formDataJson = JSON.stringify(guess);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}

const tails = document.getElementById("tailbutton")
// Add event listener for coins form
tails.addEventListener("click", guessTails)

async function guessTails(event) {
    event.preventDefault();
    //console.log("heads")

    const endpoint = "app/flip/call/"
    const url = document.baseURI + endpoint

    const guess = { "guess": "tails" }

    try {
        const flips = await guessFlip({ url, guess });

        console.log(flips);
        document.getElementById("actual").innerHTML = "The coin landed on " + flips.flip;
        document.getElementById("win").innerHTML = "You " + flips.result;
    } catch (error) {
        console.log(error);
    }
}
// Create a data sender
async function guessFlip({ url, guess }) {
    const formDataJson = JSON.stringify(guess);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}