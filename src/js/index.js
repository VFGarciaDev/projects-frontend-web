const allProjects = document.querySelectorAll(".project")  /* All Projects Array */
const cssProjects = document.querySelectorAll(".css:not(.js)")
const pjOverview = document.querySelector(".image")

console.log(allProjects)
console.log(pjOverview)
console.log(cssProjects)


allProjects.forEach(function(){
    addAndRemoveBlur();
})

function addAndRemoveBlur(){
    pjOverview.addEventListener("mouseover", function(){
        pjOverview.classList.add("no-before");
    })
    pjOverview.addEventListener("mouseout", function(){
        pjOverview.classList.remove("no-before");
    })
}