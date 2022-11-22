
search.onclick = function(){
    var layer = document.getElementById('layer');
    var search = document.getElementById('searchMain'); 
    if (search.classList.contains('d-block')) {
        search.classList.replace('d-block', 'd-none');
    }
    else{
        search.classList.replace('d-none', 'd-block');
    }
    if (layer.classList.contains('d-block')) {
        layer.classList.replace('d-block', 'd-none');
    }
    else{
        layer.classList.replace('d-none', 'd-block');
    }
}

function language(){
    var language = document.getElementById('language');
    if (language.classList.contains('d-block')) {
        language.classList.replace('d-block', 'd-none');
    }
    else{
        language.classList.replace('d-none', 'd-block');

    }
}