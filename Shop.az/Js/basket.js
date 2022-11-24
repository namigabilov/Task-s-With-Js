if (JSON.parse(localStorage.getItem('products')).length === 0) {
    document.querySelector('table').classList.add('d-none');
}
else{
    document.querySelector('table').classList.replace('d-none','d-block');
    let basket = document.getElementById('emptyBasket');
    basket.classList.add('d-none');
}
var basket = JSON.parse(localStorage.getItem('products'))
console.log(basket.Id);

