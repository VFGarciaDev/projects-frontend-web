// Lista dos cards criados para cada Projeto
let projList = document.querySelectorAll(".project-card")
projList.forEach( card => efeitoBlur(card))

function efeitoBlur(card){
    card.querySelector("#blur").addEventListener("mouseover", () => 
        card.querySelector("#blur").classList.add("no-before"))
    card.querySelector("#blur").addEventListener("mouseout", () => 
        card.querySelector("#blur").classList.remove("no-before"))
}

const selector = document.querySelector(".tools-selector")
const options = selector.querySelectorAll("option")
console.log(options)
let tools = []
options.forEach( options => tools.push(options.value))
console.log(tools)