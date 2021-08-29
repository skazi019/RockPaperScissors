let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const choices = {
    'r' : 'Rock',
    'p' : 'Paper',
    's' : 'Scissor'
};
const result_verb = ['destroys', 'eliminates', 'obliterates', 'smashes']


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    index = Math.floor(Math.random() * 3);
    return choices[index]
} 

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_verb_word = result_verb[Math.floor(Math.random() * 4)];
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_div.innerHTML = `${choices[userChoice]}${smallUserWord} ${result_verb_word} ${choices[computerChoice]}${smallCompWord}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_verb_word = result_verb[Math.floor(Math.random() * 4)];
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_div.innerHTML = `${choices[computerChoice]}${smallCompWord} ${result_verb_word} ${choices[userChoice]}${smallUserWord}. You lost!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sup();
    const smallCompWord = "(comp)".fontsize(3).sup();
    result_div.innerHTML = `${choices[userChoice]}${smallUserWord} equals ${choices[computerChoice]}${smallCompWord}. It's a Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game('r');
    })

    paper_div.addEventListener('click', () => {
        game('p');
    })

    scissor_div.addEventListener('click', () => {
        game('s');
    })
}

main();