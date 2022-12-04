$(document).ready(function(){
    let bars = document.getElementById("mobile");
    bars.onclick = function(){
     let x = document.getElementById("x");
     let bars = document.getElementById("bars");
     let dropDownMenu = document.getElementById("dropDownMenu");
     bars.classList.toggle("d-none");
     dropDownMenu.classList.toggle("d-none");
     x.classList.toggle("d-none");
    }
 })
 


fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response => {
        let html = "";
        let allİnfo = response.countries_stat;
        let count = 1;
        allİnfo.forEach(x => {
            let cases = x.cases.split(",").join("");
            if (cases > 100000 ) {
                console.log("slamx");
                html += `
                    <tr>
                        <th scope="row">${count}</th>
                        <td>${x.country_name}</td>
                        <td>${x.cases}</td>
                        <td>${x.deaths}</td>
                    </tr>
                `
                count++;
            }
            document.getElementById("body").innerHTML =html;
        });
        console.log(response.countries_stat);

    })