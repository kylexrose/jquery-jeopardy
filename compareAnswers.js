function compareAnswers(userAnswer, correctAnswer){
    userAnswer = sanitizeAnswer(userAnswer);
    correctAnswer = sanitizeAnswer(correctAnswer);
    return userAnswer === correctAnswer;
}

function sanitizeAnswer(str){
    str = str.toLowerCase();
    str = str.replace(/^the\s/, "");
    str = str.replace(/^a\s/, "");
    return str;
}