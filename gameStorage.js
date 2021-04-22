function checkForScore(){
    if(window.localStorage.getItem('prevScore')){
        currentScore = window.localStorage.getItem('prevScore');
        $('#score').html(currentScore);
    }
}

function checkForQuestions(){
    //console.log(window.localStorage.getItem('prevQuestions')) 
    if(window.localStorage.getItem('prevQuestions') !== "undefined"){  
        console.log(JSON.parse(window.localStorage.getItem('prevQuestions')))
        populateGame(JSON.parse(window.localStorage.getItem('prevQuestions')));
    }
}

function storeScore(score){
    window.localStorage.setItem('prevScore', score);
}

function storeQuestions(questionArray){
    console.log(questionArray)
    window.localStorage.setItem('prevQuestions', JSON.stringify(questionArray));
}

function checkForStorage(){
    checkForScore();
    checkForQuestions();
}

function storeAll(score, questionArray){
    storeScore(score);
    storeQuestions(questionArray);
}

function clearStorage(){
    window.localStorage.clear();
    currentScore = 0;
}