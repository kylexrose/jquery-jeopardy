function checkForScore(){
    const storedScore = window.localStorage.getItem('prevScore')
    if(storedScore !== "undefined" && storedScore !== null){
        currentScore = Number(storedScore);
        $('#score').html(currentScore);
    }
}

function checkForQuestions(){
    const storedQ = window.localStorage.getItem('prevQuestions'); 
    if(storedQ !== "undefined" && storedQ !== null){  
        populateGame(JSON.parse(storedQ));
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