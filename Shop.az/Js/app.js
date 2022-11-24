if (localStorage.getItem('products') === null) {
    localStorage.setItem('products',JSON.stringify([]))
}
let buttons =document.querySelectorAll('.btn');
for(let btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.previousElementSibling.src;
        let pr_name = this.previousElementSibling.previousElementSibling.innerHTML;
        let value =this.previousElementSibling.innerHTML;
        
        let basket = JSON.parse(localStorage.getItem('products'))

        let someProduct = basket.find(x => x.Id === id);

        if (someProduct === undefined) {
            basket.push({
                Id:id,
                Src:src,
                productName:pr_name,
                Value :value,
                Count : 1
            })
        }
        else{
            someProduct.Count +=1;
        }

        
        
        localStorage.setItem('products',JSON.stringify(basket))
        ShowCount();
    }
}
function ShowCount(){
    let span = document.getElementById('count');
    let basket = JSON.parse(localStorage.getItem('products'));
    span.innerHTML = basket.length;
}
ShowCount();