const button = document.getElementById("advice-button")
// console.log(button)

// ----- Get the advice API ----- //
async function randomAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json()
}
// ----- Display the ID and Text ----- //
async function displayAdvice(){
    const advice = await randomAdvice()
    const adviceId = await advice.slip.id
    const adviceText = await advice.slip.advice
    document.getElementById("advice-id").innerHTML = `advice # ${adviceId}`
    document.getElementById("advice-text").innerHTML = `"${adviceText}"`
}

displayAdvice()
// ----- Generate another advice whem clicked ----- //
button.addEventListener("click", function(){
    randomAdvice()
    displayAdvice()
})