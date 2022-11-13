
var date = new Date;
var hour = date.getHours();

var light =document.getElementById('light');
var dark =document.getElementById('dark');
var body =document.body;
var img =document.getElementById('img');
var circle =document.getElementById('circle');
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');

function changeModeDark(){
    if(dark.style.display = 'none'){
        light.style.display='none';
        sun.style.display='block '
        moon.style.display = 'none'
        body.style.backgroundImage ='url(https://img.freepik.com/free-photo/beautiful-white-cloud_74190-3975.jpg?w=2000)'
        dark.style.display ='block';
        document.getElementById('btn').style.backgroundColor ='black';
        document.getElementById('btn').style.color ='white';
    }
}
function changeModeLight() {
    if(light.style.display = 'none'){
        dark.style.display = 'none'
        sun.style.display= 'none'
        moon.style.display ='block';
        light.style.display = 'block'
        body.style.backgroundImage ='url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)'
        document.getElementById('btn').style.backgroundColor ='white';
        document.getElementById('btn').style.color ='black';
        
    }
}
    // function mode() {

    //     if (circle.style.left = '1px') {
    //         circle.style.left = '34px'
    //         circle.style.backgroundColor = '#fff'
    //         document.getElementById('toggle').style.backgroundColor = '#000'
    //         dark.style.display = 'none'
    //         sun.style.display = 'none'
    //         moon.style.display = 'block';
    //         light.style.display = 'block'
    //         body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.' +
    //         '3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)'


    //         return;
    //     }
    
    // }

if (hour > 6 && hour < 12 ) {
    alert('Sabahiniz Xeyr');
    img.style.top = '0'
    img.style.left = '0'
}
else if(hour >=12 && hour <18){
    alert('Gunortaviz Xeyr');
    img.style.top = '0'
    img.style.left = '40%'
}  
else if(hour >= 18 && hour <= 23){
    img.style.top = '0'
    alert('Axsamivz Xeyr');

    img.style.left = '85%'
}
else{
    alert('Gece Yarisi Olub Artiq !');
    dark.style.display = 'none'
    sun.style.display= 'none'
    moon.style.display ='block';
    light.style.display = 'block'
    body.style.backgroundImage ='url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)'

}
function calcArea() {
    var radius = document.getElementById("radius").value;
    var area = Math.PI * Math.pow(radius ,2 );
    document.getElementById("Result").innerHTML = area;
}

