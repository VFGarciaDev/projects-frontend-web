import data from "./projects.json"  assert { type: 'json' }
import { getRepository } from "./services/data.js"

console.log(await getRepository())
// ----- import json ----- /
const myProjects = data.projetos
const gridDisplay = document.querySelector(".grid-display")
const projTemplate = document.querySelector(".project-card")

// ----- Cria cards de acordo com a quantidade de projetos add no JSON ----- //
for( let i = 1; i < myProjects.length - 1; i++){
    gridDisplay.appendChild(projTemplate.cloneNode(true))
}
// ------------------------------------------------------------------------- //
// Lista dos cards criados para cada Projeto
let projList = document.querySelectorAll(".project-card")
projList.forEach(function(card, index, array){
    // Adiciona o nome do Projeto
    card.querySelector("#proj-name").innerHTML = myProjects[index + 1].name
    // Adiciona link para Github
    card.querySelector(".github").href = myProjects[index + 1].github
    // Adiciona a imagem do Projeto
    card.querySelector("#proj-img").src = myProjects[index + 1].image
    // Adiciona link para Live URL
    card.querySelector(".liveURL").href = myProjects[index + 1].liveURL
    // Adiciona as ferramentas usadas no Projeto
    myProjects[index + 1].tools.forEach(function(tool){
        switch (tool){
            case "html": card.querySelector(".html").classList.remove("display-none")
            break;
            case "css": card.querySelector(".css").classList.remove("display-none")
            break;
            case "js": card.querySelector(".js").classList.remove("display-none")
            break;
            case "api": card.querySelector(".api").classList.remove("display-none")
            break;
        }
    })
    // Adiciona quem propôs o desafio
    card.querySelector("#challenge").innerHTML += myProjects[index + 1].challenge
    // Adiciona a descrição do Projeto
    myProjects[index + 1].description.forEach(function(itens){
        const x = document.createElement("li")
        x.innerHTML = itens + ";"
        card.querySelector("#description").appendChild(x)
    })
    // // Adiciona/Remove efeito "blur" sobre a imagem do Projeto
    // card.querySelector("#blur").addEventListener("mouseover", () => 
    //     card.querySelector("#blur").classList.add("no-before"))
    // card.querySelector("#blur").addEventListener("mouseout", () => 
    //     card.querySelector("#blur").classList.remove("no-before"))
})