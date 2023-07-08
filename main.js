let param = {
    country:"ma",
    city:"Berkane"
};
let listVille = document.querySelector("#select-ville")
const listCities = ["الدار البيضاء","سطات","بركان" ,"شفشاون","مراكش"]

function replirListVille(listCities) {
    listCities.forEach(ville => {
        listVille.innerHTML +=`<option>${ville}</option>`
    });
}
replirListVille(listCities)
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params:param
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
function remplirSalate(id,salate) {
    document.getElementById(id).innerHTML = salate
}