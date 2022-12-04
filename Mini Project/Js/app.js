$(document).ready(function(){
   let bars = document.getElementById("mobile");
   bars.onclick = function(){
    let x = document.getElementById("x");
    let bars = document.getElementById("bars");
    let dropDownMenu = document.getElementById("dropDownMenu");
    bars.classList.toggle("d-none");
    dropDownMenu.classList.toggle("d-none");
    x.classList.toggle("d-none");
    console.log("slam");
   }
})
let date = new Date;
date = date.getFullYear();
$("#date").text(date);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b82954702mshb0b518d15409957p18dbeajsn13d79406b552',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response => {
      let allInfo = response.countries_stat;
      getInpVal = function(){
         var inpVal = document.getElementById("inpVal").value;
         console.log(allInfo);
         allInfo.forEach(x => {

            if (x.country_name.toUpperCase() === inpVal.toUpperCase()) {
               $("#whichCountry").text(inpVal   )
               $("#refleshTime").text(refleshTime);

               $("#activeCase").text(x.active_cases);
               $("#newCase").text(x.new_cases);
               $("#newDeath").text(x.new_deaths);
               $("#totalRecovered").text(x.total_recovered);
               $("#totalCase").text(x.total_cases);
               $("#totalDeaths").text(x.total_deaths);
            }
         }); 
      }
      let refleshTime = response.statistic_taken_at;
      let worldTotal = response.world_total;
      $("#refleshTime").text(refleshTime);
      $("#activeCase").text(worldTotal.active_cases);
      $("#newCase").text(worldTotal.new_cases);
      $("#newDeath").text(worldTotal.new_deaths);
      $("#totalRecovered").text(worldTotal.total_recovered);
      $("#totalCase").text(worldTotal.total_cases);
      $("#totalDeaths").text(worldTotal.total_deaths);
   }
   )
	.catch(err => console.error(err));


