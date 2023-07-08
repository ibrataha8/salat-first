function parameter(city){
    return param = {
    country:"ma",
        city:city
    };
}
let listVille = document.querySelector("#select-ville")
let villeName = document.querySelector("#name-ville")
const listCities = 
    [
        { "الدار البيضاء": "Casablanca"},
        { "سطات": "Settat"},
        { "بركان": "Berkane"},
        { "مراكش": "Marrakech"}
    ]
function replirListVille(listCities) {
    for (let i = 0; i < listCities.length; i++) {
        listVille.innerHTML +=`<option value="${Object.values(listCities[i])}">${Object.keys(listCities[i])}</option>`
    }
}
replirListVille(listCities)
apiData("Casablanca")
listVille.addEventListener("change", ()=>{
    villeName.innerHTML = (listVille.options[listVille.selectedIndex].textContent);
    apiData(listVille.options[listVille.selectedIndex].textContent)

})

function apiData(city){

    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params:parameter(city)
    })
    .then(function (response) {
        
        //Remplir date jout 
        const dateApi = response.data.data.date.hijri
        jour = dateApi.weekday.ar
        indiceJour = dateApi.day
        mois = dateApi.month.ar
        fullDate = jour + " " + indiceJour + " " + mois
        date.innerHTML = fullDate
    
        //Remplir aw9at salat
    
        let info = response.data.data.timings
        remplirSalate("time-fajr",info.Fajr)
        remplirSalate("time-doher",info.Dhuhr)
        remplirSalate("time-asser",info.Asr)
        remplirSalate("time-moghrab",info.Maghrib)
        remplirSalate("time-ichaa",info.Isha)
        
        
      })
}
function remplirSalate(id,salate) {
    document.getElementById(id).innerHTML = salate
}