export const serverToSurvey = (inputSurvey) => {
    let outputSurvey = inputSurvey;
    outputSurvey.shortDescription = outputSurvey["short-descripption"]
    delete outputSurvey["short-descripption"]
    outputSurvey.rate = outputSurvey.rate.toFixed(1)
    outputSurvey.time = outputSurvey.time.substring(3);
    return outputSurvey
}
