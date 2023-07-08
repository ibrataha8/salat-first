let param = {
    country:"ma",
    city:"casablanca"
};
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params:param
  })
  .then(function (response) {
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