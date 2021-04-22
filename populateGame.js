
function populateGame(gameQuestions){
    console.log("gameQuestions:", gameQuestions)
    const categories = [];
    gameQuestions.map((current, i) =>{
        if(!categories.includes(current.category)){
            categories.push(current.category);
            const newColumn = $(`<div id="col${i}" class="column"><div class="category cell">${current.category}</div></div>`);
            $('#gameBoard').append(newColumn);
        }
    })
    for (let i = 0; i < gameQuestions.length; i++){
        const colElement = categories.indexOf(`${gameQuestions[i].category}`)
        const newQuestion = $(`<div class="cell question">${gameQuestions[i].value}</div>`);
        if (gameQuestions[i].value){
            newQuestion.on('click', () => {
                newQuestion.html("");
                newQuestion.off();
                displayQuestion(JSON.parse(JSON.stringify(gameQuestions[i])));
                gameQuestions[i].value = "";
                storeQuestions(gameQuestions);
            });
        }
        $(`#col${colElement}`).append(newQuestion);
        
    }
}

function displayQuestion(questionObj){
    $("#cover").toggle();
    $("#question").html(`${questionObj.question}`);
    $("#submit").on('click', (e) => {
        e.preventDefault();
        if($("#answerText").val().toUpperCase() == questionObj.answer.toUpperCase()){
            currentScore += Number(questionObj.value.replace(/\$/g, ''));
            $("#question").html(`That is correct!`);
            $("#score").html(currentScore);
            $("#answerText").val("");
            $("#submit").off();
            $("#cover").toggle();
            storeScore(currentScore);
        }else{
            currentScore -= Number(questionObj.value.replace(/\$/g, ''));
            $("#question").html(`I'm sorry, that was incorrect. The correct answer is ${questionObj.answer}`);
            $("#score").html(currentScore);
            $("#submit").off();
            $("#cover").toggle();
            storeScore(currentScore);
        }
        $("#answerText").val("");
    })
}