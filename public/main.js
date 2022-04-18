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
            //document.getElementById('singleResult').innerHTML = "The coin flip was" + result.flip
        })
    //console.log(result)
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
