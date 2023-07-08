let param = {
    country:"ma",
    city:"casablanca"
};
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params:param
  })
  .then(function (response) {
    let info = response.data.data.timings
    // document.querySelector("#time-fajr").innerHTML = info.Fajr
    
  })
