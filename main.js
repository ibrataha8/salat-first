let param = {
    country:"ma",
    city:"Berkane"
};
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params:param
  })
  .then(function (response) {

    //Remplir date jout 

    jour = response.data.data.date.hijri.weekday.ar
    indiceJour = response.data.data.date.hijri.day
    mois = response.data.data.date.hijri.month.ar
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