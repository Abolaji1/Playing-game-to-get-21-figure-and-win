let cardEl = document.querySelector("#cards")
let sumEl = document.querySelector("#sum")
let btnElstart = document.querySelector("#btnstart")
let message = ""
let p01El = document.querySelector("#p01")
let playersEl = document.querySelector("#players-el")

let player = {
    name: "Abolaji",

    account: "#450"
}


playersEl.textContent = player.name + ": " + player.account 



let sum = 0

let cards = []

let  hasBlackjack = false  // this is to keep track if player is still playing

let  isAlive = false


console.log(cards)
// create a function , getRandom(), that always returns the number 5

function getRandom() {
    random = Math.floor(Math.random() * 13) + 1 // this output 1 ..... 13
// in card game A = 11, Queen, King and Night are = 10 for this reason->
// if 1 return 11 & if 11 - 13 return 10
if (random === 1) {
    return random = 11
}else if (random > 10) {
    return random = 10
}else {
    return random
}
    
}

// create start game function and move contional statement into iy

function startGame() {
    isAlive = true
    let firstcard = getRandom()

    let secondcard = getRandom()

    cards = [firstcard, secondcard]

    sum = firstcard + secondcard

    RenderGame()
}
function RenderGame() {
    if (sum < 21 ) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "You got Blackjack, Congrats !"
        hasBlackjack = true
    
    
    } else {
        message = "You are out of the game"
        isAlive = false
    }
     
    cardEl.textContent = "Cards: " 
    
    for (let i = 0; i < cards.length; i ++) {
        cardEl.textContent += cards[i] + " " 

    }

    sumEl.textContent = "Sum: " + sum

    p01El.textContent = message

}

function drawNewCards() {
    //only allow the player to drwa a new card if he/she is alive and 
    //does not have blackjack
    if( isAlive === true  && hasBlackjack === false ) {
        let newCard = getRandom()
        sum += newCard
        cards.push(newCard)
        console.log(cards)
        RenderGame()

    }
   

}










  







