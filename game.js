var prompt = require('sync-prompt').prompt;

var bankroll = 100;

while (bankroll > 0) {

  var bet = Number(prompt("Place a bet between $5 and $10 :"));

  var guess = Number(prompt("Choose a number between 1 and 10 :"));

  var randnum = Math.floor(Math.random() * 10) + 1;

  if (guess === randnum) {
      bankroll += bet;
    console.log("You won the bet! Your total is $" + bankroll);
  } 
  else if ((guess === (randnum - 1)) || (guess === (randnum + 1))) {
    console.log("You were only one number off. You still have $" + bankroll);
  } 
  else if ((guess < (randnum - 1)) || (guess > (randnum + 1))) {
      bankroll -= bet;
      console.log("You lost the bet :( you have $" + bankroll);
  }

}
