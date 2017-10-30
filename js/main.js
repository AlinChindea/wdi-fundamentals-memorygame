//console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []; 

var checkfForMatch = function () { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again");
	}
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkfForMatch();
}
}; 
flipCard(0);
flipCard(2);