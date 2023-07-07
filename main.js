let container = document.querySelector("container");
let salateTime = document.querySelector("#horaireSalat");
salateTime.innerHTML = "";
let country = "casablanca"
axios
  .get(
    "http://api.aladhan.com/v1/calendarByCity?city=casablanca&country=Morocco&month=07&year=2023"
  )
  .then(response => {
    // day = (response.data.data[0].date.gregorian);
    let salawat = Object.keys(response.data.data[0].timings);
    let aw9at = Object.values(response.data.data[0].timings);
    // console.log(aw9at);
    
    for (let i = 0; i < salawat.length; i++) {
      temp = `<div class="row">
                 <div class="col-md-6">${salawat[i]}</div>
                 <div class="col-md-6">${aw9at[i].slice(0,5)}</div>
             </div>
             `;
      salateTime.innerHTML += temp;
    }
    // response.data.data.forEach((el)=>{
    //     temp = `<div class="row">
    //                  <div class="col-md-6">SALATE</div>
    //                  <div class="col-md-6">TIME</div>
    //              </div>
    //              `
    //      salateTime.innerHTML += temp
    // })
  });
// for (let i = 0; i < 6; i++) {
//     temp = `<div class="row">
//                 <div class="col-md-6">SALATE</div>
//                 <div class="col-md-6">TIME</div>
//             </div>
//             `
//     salateTime.innerHTML += temp
// }
