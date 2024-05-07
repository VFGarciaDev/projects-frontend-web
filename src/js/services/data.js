async function getRepository(){
    const repository = await (await fetch("https://api.github.com/repos/VFGarciaDev/projects-frontend-web/contents/")).json()
    const files = repository
        .filter( repo => repo.type === "dir" && repo.name !== "src")
    return files
    // const repository = repos.filter(r => r.name === "projects-frontend-web")

    // return repository
}
export { getRepository }