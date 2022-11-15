
function getComputerChoice() {
    let items = ["ROCK", "SCISSOR", "PAPER"];
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function playRound(playerSelection, cpuSelection) {
    // your code here!
    const player = playerSelection;
    const cpu = cpuSelection;

    if (player == "ROCK" && cpu == "PAPER") {
        return player + " lose to " + cpu;
    } else if (player == "PAPER" && cpu == "SCISSOR") {
        return player + " lose to " + cpu;
    } else if (player == "SCISSOR" && cpu == "ROCK") {
        return player + " lose to " + cpu;;
    }

    if (player == "ROCK" && cpu == "SCISSOR") {
        return player + " win to " + cpu;
    } else if (player == "PAPER" && cpu == "ROCK") {
        return player + " win to " + cpu;
    } else if (player == "SCISSOR" && cpu == "PAPER") {
        return player + " win to " + cpu;
    }
    return player + " draw to " + cpu;
};

function game() {
    var roundWin = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, getComputerChoice()).includes(" win to ")) {
            roundWin++;
        }
    }
    return "rounds won: " + roundWin;
}

//if click button
//fill text game
const rock = document.getElementById("rock");
//rock.addEventListener("click", function () {
//   document.getElementById("game").innerHTML = "ROCK";
//});

const paper = document.getElementById("paper");
//paper.addEventListener("click", function () {
//.getElementById("game").innerHTML = "PAPER";
//});

const scissor = document.getElementById("scissor");
//scissor.addEventListener("click", function () {
//document.getElementById("game").innerHTML = "SCISSOR";
//});

function playerSelection() {
    let items = ["ROCK", "PAPER", "SCISSOR"];
    let playerPoints = 0;
    let cpuPoints = 0;

    //rock
    rock.addEventListener("click", function () {
        let round = playRound(items[0], getComputerChoice());
        document.getElementById("game").textContent = items[0];
        document.getElementById("game2").textContent = round;
        if (round.includes("win")) {
            playerPoints++;
            document.getElementById("playerRounds").textContent = `playerRounds: ${playerPoints} points`;
            console.log(playerPoints);
        } else if (round.includes("lose")) {
            cpuPoints++;
            document.getElementById("cpuRounds").textContent = `cpuRounds: ${cpuPoints} points`;
        }

        if (playerPoints == 5) {
            document.getElementById("winner").textContent = "PLAYER WON";

        } else if (cpuPoints == 5) {
            document.getElementById("winner").textContent = "CPU WOM";
        }
    });

    //paper
    paper.addEventListener("click", function () {
        let round = playRound(items[1], getComputerChoice());
        document.getElementById("game").textContent = items[1];
        document.getElementById("game2").textContent = round;
        if (round.includes("win")) {
            playerPoints++;
            document.getElementById("playerRounds").textContent = `playerRounds: ${playerPoints} points`;
            console.log(playerPoints);
        } else if (round.includes("lose")) {
            cpuPoints++;
            document.getElementById("cpuRounds").textContent = `cpuRounds: ${cpuPoints} points`;
        }

        if (playerPoints == 5) {
            document.getElementById("winner").textContent = "PLAYER WON";
        } else if (cpuPoints == 5) {
            document.getElementById("winner").textContent = "CPU WON";
        }
    });

    //scissor
    scissor.addEventListener("click", function () {
        let round = playRound(items[2], getComputerChoice());
        document.getElementById("game").textContent = items[2];
        document.getElementById("game2").textContent = round;
        if (round.includes("win")) {
            playerPoints++;
            document.getElementById("playerRounds").textContent = `playerRounds: ${playerPoints} points`;
            console.log(playerPoints);
        } else if (round.includes("lose")) {
            cpuPoints++;
            document.getElementById("cpuRounds").textContent = `cpuRounds: ${cpuPoints} points`;
        }

        if (playerPoints == 5) {
            document.getElementById("winner").textContent = "PLAYER WON";
        } else if (cpuPoints == 5) {
            document.getElementById("winner").textContent = "CPU WON";
        }
    });

    const reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
        cpuPoints=0;
        playerPoints=0;
        document.getElementById("game").textContent=`choose one`;
        document.getElementById("game2").textContent=`start game`;
        document.getElementById("playerRounds").textContent = `playerRounds: ${playerPoints} points`;
        document.getElementById("cpuRounds").textContent = `cpuRounds: ${cpuPoints} points`;
        document.getElementById("winner").textContent = `waiting the winner...`;
    });
}
document.getElementById("winner").style.fontWeight = "700";
document.getElementById("game2").style.fontWeight = "700";
document.getElementById("game").style.fontWeight = "700";
document.getElementById("playerRounds").style.fontWeight = "700";
document.getElementById("cpuRounds").style.fontWeight = "700";
document.getElementById("playerRounds").style.color = "blue";
document.getElementById("cpuRounds").style.color = "red";
document.getElementById("winner").style.color = "#003B73"

playerSelection();










