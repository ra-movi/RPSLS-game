/*
Name: Basic Rock Paper Scissors Lizard Spock game
Version: 0.2
*/
var options = ["rock", "paper", "scissors", "lizard", "spock"];
var promptText = "Choose: 0: Rock, 1:Paper, 2:Scissors, 3:Lizard, 4:Spock -> ";

runLogic(prompt(promptText));

/**
 * Check's the main logic of the game
 * @param {String} user_choise
 */
function runLogic(user_choise) {
  var randomIndex = Math.floor(Math.random() * options.length);
  var cpuPick = options[randomIndex];

  console.log(`Random is: ${randomIndex}
  Cpu value picked: ${cpuPick}`);

  user_choise = Number(user_choise);

  /* Logic of the game */
  //(and as it always has) Rock crushes Scissors
  if ((cpuPick == "rock") & (options[user_choise] == "scissors")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  //Scissors cuts Paper
  else if ((cpuPick == "scissors") & (options[user_choise] == "paper")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  //Paper covers Rock
  else if ((cpuPick == "paper") & (options[user_choise] == "rock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Rock crushes Lizard
  else if ((cpuPick == "rock") & (options[user_choise] == "lizard")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Lizard poisons Spock
  else if ((cpuPick == "lizard") & (options[user_choise] == "spock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Spock smashes Scissors
  else if ((cpuPick == "spock") & (options[user_choise] == "scissors")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Scissors decapitates Lizard
  else if ((cpuPick == "scissors") & (options[user_choise] == "lizard")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Lizard eats Paper
  else if ((cpuPick == "lizard") & (options[user_choise] == "paper")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Paper disproves Spock
  else if ((cpuPick == "paper") & (options[user_choise] == "spock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  }

  // Spock vaporizes Rock
  else if ((cpuPick == "spock") & (options[user_choise] == "rock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  } else {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: You Win`
    );
  }

  //Tie Game
  if (cpuPick == options[user_choise]) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Tie Game`
    );
  }

  //Try again
  if (prompt("Wanna Try again: yes/no?") == "yes") {
    runLogic(prompt(promptText));
  } else {
    console.log("Ok, See you later alligator");
  }
}
