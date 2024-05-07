let frontFace = document.querySelector(".front-face")
let backFace = document.querySelector(".back-face")
let message = document.querySelector(".msg-display")
let rating = document.querySelectorAll("li")
let submit = document.querySelector("#button")
// console.log(frontFace)
// console.log(backFace)
// console.log(submit)
// console.log(rating)

rating.forEach(function(number){
    number.addEventListener("click", function(){
        rating.forEach(function(number){
            number.classList.remove("selected")
            number.classList.add("hover-effect")
        })
        let selectedValue = 0;
        this.classList.add("selected")
        this.classList.remove("hover-effect")
        
        selectedValue = this.getAttribute('data-value');
        console.log(selectedValue);
        message.innerHTML = selectedValue;
    })
})
submit.addEventListener("click", function(){
    frontFace.classList.remove("front")
    backFace.classList.add("front")
})