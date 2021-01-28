export const convertToAppSurvey = (inputSurvey) => {
    let outputSurvey = inputSurvey;
    outputSurvey.shortDescription = outputSurvey["short-descripption"]
    delete outputSurvey["short-descripption"]
    outputSurvey.rate = outputSurvey.rate.toFixed(1)
    outputSurvey.time = outputSurvey.time.substring(3);
    return outputSurvey
}


//absolutnie podły sposób na zrobienie tego, ale działa
export const prepareAnswersForServer=  (answers, questions) =>{
    let answersList = []
    let questionsKeys = Object.keys(questions)
    let answerIterator = 0
    let optionIds = []
    let answearText = ""
    for(const questionId of questionsKeys){
        if(questions[questionId].type === "radio"){
            for(const option in questions[questionId].fields){
                if(questions[questionId].fields[option].text === answers[answersList.length]){
                    optionIds.push(option)
                }
            }
        }
        else if(questions[questionId].type ==="checkbox"){
            for(const answer in answers[answersList.length]){
                optionIds.push(answer)
            }
        }
        else{
            answearText = answers[answersList.length]
        }
        answersList.push({questionId, optionIds, answerText: answearText})
        answerIterator = 0
        optionIds = []
        answearText = ""
    }
    return answersList
}

export const questionsToFields= (questions) => {
    let fields = {}
    for (const question of questions){
        let options = {}
        for(const option of question.fields){
            options[option.id] = {
                text:option.option,
                name:option.option
            }
        }
        fields[question.id] = {
            name:question.name,
            type:question.type,
            title: question.id,
            fields:options
        }
    }

    return fields
    }


export const getConvertedQuestions = (serverQuestions) =>
{
    let outputQuestions = [];
    for (const question of serverQuestions) {
        let appQuestion = {}
        appQuestion.id = question.id;
        appQuestion.type = convertQuestionType(question.type)
        appQuestion.name = question.text
        appQuestion.fields = question.options
        outputQuestions.push(appQuestion)
    }
    return outputQuestions
}


export const convertQuestionType = (inputType) =>
{
    switch (inputType){
        case "single_choice":
            return "radio"
        case "multi_choice":
            return "checkbox"
        case "text":
            return "text"
}
}


