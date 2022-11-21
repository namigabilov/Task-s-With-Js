var layer = document.getElementById('layer');
var search = document.getElementById('search'); 
search.onclick = function(){
    layer.classList.toggle('active');
    var searchMain = document.getElementById('searchMain'); 
    searchMain.classList.toggle('active2');
}