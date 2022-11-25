if (JSON.parse(localStorage.getItem('products')).length === 0) {
    document.querySelector('table').classList.add('d-none');
}
else{
    document.querySelector('table').classList.replace('d-none','d-block');
    let basket = document.getElementById('emptyBasket');
    basket.classList.add('d-none');
}
function GetList(){
    let basket = JSON.parse(localStorage.getItem('products'));
    row = "";
    basket.forEach(pr => {
        row +=`
        <tr>
            <th scope="row">${pr.Id}</th>
            <td style="width:30%">
                <img style="width:30%;" src="${pr.Src}" alt="">
            </td>
            <td>${pr.productName}</td>
            <td>${pr.Count}
               
            </td>
            <td>${pr.Value}</td>
        </tr>
        `
    });
    document.getElementById('tbody').innerHTML = row;

}
GetList();
let summary = document.getElementById('btn');
sum=0;

function calcSum() {
    let basket = JSON.parse(localStorage.getItem('products'));
    basket.forEach(pr => {
        let value =pr.Value;
        let count = pr.Count;
        value = value.slice(-(value.length),-4)
        sum += value*count;
    });  
    document.getElementById('summary').innerHTML = sum +" AZN";
}