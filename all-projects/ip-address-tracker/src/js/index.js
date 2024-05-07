// ----- Map API ----- //
var map = L.map('map-api').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// ----- IP Address ----- //
async function buscarIp(){
    const url = "http://ip-api.com/json/?fields=33612575"
    const resposta = await fetch(url)
    return await resposta.json()
    // console.log(await resposta.json())
}
async function mostrarIp(){
    const ip = await buscarIp()
    if(ip.status == "success"){
        console.log(ip)
        const address = ip.query
        const country = ip.country + ", " + ip.countryCode
        const city = ip.city + ", " + ip.region
        const time = ip
        const isp = ip.isp
    }else{
        alert(ip.message)
    }

}
mostrarIp()