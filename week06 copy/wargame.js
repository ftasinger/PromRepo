class Card {                                 // creating an object called cards with 2 constructors
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
      this.value = this.getValue();
    }
  
    getValue() {                               // this is checking the rank of the cards and assigning a return value
      switch(this.rank) {
        case 'A':
          return 14;
        case 'K':
          return 13;
        case 'Q':
          return 12;
        case 'J':
          return 11;
        default:
          return parseInt(this.rank);
      }
    }
  }
  
  class Deck {                             // creating a new object with Deck information
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffleDeck();
    }
  
    createDeck() {                                  //arrays created that hold suits and ranks
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      for (let suit of suits) {                         ////loop iterates over each suit in the array
        for (let rank of ranks) {                      //loop iterates over each rank in the array
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCards() {
      return [this.cards.slice(0, 26), this.cards.slice(26)];
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.points = 0;
    }
  
    addCards(cards) {
      this.hand.push(...cards);
    }
  
    playCard() {
      return this.hand.shift();
    }
  
    receivePoint() {
      this.points++;
    }
  }
  
  class Game {
    constructor(player1Name, player2Name) {
      this.deck = new Deck();
      this.player1 = new Player(player1Name);
      this.player2 = new Player(player2Name);
    }
  
    start() {
      const [player1Cards, player2Cards] = this.deck.dealCards();
      this.player1.addCards(player1Cards);
      this.player2.addCards(player2Cards);
  
      for (let i = 1; i <= 26; i++) {
        const player1Card = this.player1.playCard();
        const player2Card = this.player2.playCard();
        console.log(`Round ${i}: ${this.player1.name} plays ${player1Card.rank} of ${player1Card.suit}, ${this.player2.name} plays ${player2Card.rank} of ${player2Card.suit}`);
  
        if (player1Card.value > player2Card.value) {
          console.log(`${this.player1.name} wins the round!`);
          this.player1.receivePoint();
          this.player1.addCards([player1Card, player2Card]);
        } else if (player2Card.value > player1Card.value) {
          console.log(`${this.player2.name} wins the round!`);
          this.player2.receivePoint();
          this.player2.addCards([player1Card, player2Card]);
        } else {
          console.log('Tie!');
          this.player1.addCards([player1Card]);
          this.player2.addCards([player2Card]);
        }
      }
  
      if (this.player1.points > this.player2.points) {
        console.log(`${this.player1.name} wins with ${this.player1.points} points!`);
      } else if (this.player2.points > this.player1.points);
    }
}
  