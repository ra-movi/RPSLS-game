/*
Name: Basic Rock Paper Scissors Lizard Spock game
Version: 0.2
*/
var options = ["rock", "paper", "scissors", "lizard", "spock"];
var promptText = "Choose: 0: Rock, 1:Paper, 2:Scissors, 3:Lizard, 4:Spock -> ";
var outputHolder = document.getElementById("result");

askUserInput();

function askUserInput() {
  runLogic(prompt(promptText));
}

/**
 * Check's the main logic of the game
 * @param {String} user_choise
 */
function runLogic(user_choise) {
  console.log(`user choise: ${user_choise} (${options[user_choise]})`);

  var randomIndex = Math.floor(Math.random() * options.length);
  var cpuPick = options[randomIndex];

  console.log(`Random is: ${randomIndex}
  Cpu value picked: ${cpuPick}`);

  user_choise = Number(user_choise);

  let msg;

  /* Logic of the game */
  switch (true) {
    case options[user_choise] == "scissors" && cpuPick == "rock":
      //(and as it always has) Rock crushes Scissors
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "paper" && cpuPick == "scissors":
      //Scissors cuts Paper
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "rock" && cpuPick == "paper":
      //Paper covers Rock
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "lizard" && cpuPick == "rock":
      // Rock crushes Lizard
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "spock" && cpuPick == "lizard":
      // Lizard poisons Spock
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "scissors" && cpuPick == "spock":
      // Spock smashes Scissors
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "lizard" && cpuPick == "scissors":
      // Scissors decapitates Lizard
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "paper" && cpuPick == "lizard":
      // Lizard eats Paper
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "spock" && cpuPick == "paper":
      // Paper disproves Spock
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case options[user_choise] == "rock" && cpuPick == "spock":
      // Spock vaporizes Rock
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Bender Win's`;
      break;

    case cpuPick == options[user_choise]:
      //Tie Game
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: Tie Game`;
      break;

    default:
      msg = `Cpu: ${cpuPick} || You: ${options[user_choise]} \n Result: You Win`;
      break;
  }

  //Output Msg after deliberation
  console.log(msg);
  outputHolder.innerHTML = msg;
}
