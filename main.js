let currentScore = 0;
let currentShowQuestions;
let showNumberObj = {};
let showNumbers = [];

checkForStorage();
$('#score').html(currentScore);

QUESTIONS.map(current =>{
    if(showNumberObj[current.showNumber] > 0 && current.round === "Jeopardy!"){
        showNumberObj[current.showNumber]++;
    }else if(showNumberObj[current.showNumber] === undefined && current.round === "Jeopardy!"){
        showNumberObj[current.showNumber] = 1;
    }
})

for(let show in showNumberObj){
    if(showNumberObj[show] === 30){
        showNumbers.push(show);
    }
}

function pickRandShow(){
    return showNumbers[Math.floor(Math.random() * showNumbers.length)]
}

function findShowQuestions(showNumber){
    return QUESTIONS.filter(question => question.showNumber == showNumber && question["round"] === "Jeopardy!")
}

function newGame(){
    $('#gameBoard').html("");
    $('#question').html("");
    $('#score').html(currentScore);
    currentShowQuestions = findShowQuestions(pickRandShow());
    populateGame(currentShowQuestions);
}

$('#newGame').click(()=> {
    newGame();
})

$('#reset').click(()=> {
    clearStorage();
    newGame();
})