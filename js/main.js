//console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
//if any error occurs, check to see if you need quotations in brackets
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2]
//if any error occurs, check to see if you need quotations in brackets
cardsInPlay.push(cardTwo);
console.log("User flipped king"); 

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!"); 
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again");
	}
}