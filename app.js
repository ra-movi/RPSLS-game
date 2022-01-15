/*
Name: Basic rock paper scissors game
Version: 0.1
*/
var options = ["rock", "paper", "scissors"];
var promptText = "Choose: 0: Rock, 1:Paper, 2: Scissors: ";

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
  //rock beats scissors
  if ((cpuPick == "rock") & (options[user_choise] == "scissors")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  } else if ((cpuPick == "scissors") & (options[user_choise] == "rock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: You Win`
    );
  }

  //scissors beats paper
  if ((cpuPick == "scissors") & (options[user_choise] == "paper")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  } else if ((cpuPick == "paper") & (options[user_choise] == "scissors")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: You Win`
    );
  }

  //paper beats rock
  if ((cpuPick == "paper") & (options[user_choise] == "rock")) {
    console.log(
      `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`
    );
  } else if ((cpuPick == "rock") & (options[user_choise] == "paper")) {
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
