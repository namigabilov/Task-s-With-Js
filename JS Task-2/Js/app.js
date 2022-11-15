var porm = prompt('Yas daxil edin' , '18');
if (porm > 18) {
    alert('Xos Gelibsiniz ');

}
else{
    alert('Yasiniz Yeterli Degil...!');
}
var confirm = confirm('Sayti Gormek Isteyirsiniz ?');
if (confirm) {
    document.body.style.display = 'block'
}
else{
    document.body.style.display = 'none'
}



  function check() {
     var startNum = 1 ;
    var inputValue = document.getElementById('group').value;
    for (var i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue[i])) {
             startNum=inputValue[i]; 
             break;
        }
     }
     if (startNum == 1) {
        smen += " Seher ";
    }
    else if(startNum == 2){
        smen += " Gunorta ";
    }
    else if(startNum == 3){
        smen += " Axsam ";
    }
    else{
        smen+= " Bilinmeyen  "
    }
    var text = " Sizin Qrupunuz " + inputValue +  smen + " Smenidir !"  
    document.getElementById('text').innerHTML = text;
}
//  Mellim burda men for ile ilk reqemin indexsin goturub slice ile kesmek isteyirdim ama burdaki break islemedi  

// function check() {
//      var inputValue = document.getElementById('group').value;
//      var number = inputValue.slice(-3);
//      var smen = "";
//     number = number.slice(0,1);
//     if (number == 1) {
//         smen += " Seher ";
//     }
//     else if(number == 2){
//         smen += " Gunorta ";
//     }
//     else if(number == 3){
//         smen += " Axsam ";
//     }
//     else{
//         smen+= " Bilinmeyen  "
//     }
//     var text = " Sizin Qrupunuz " + inputValue +  smen + " Smenidir !"  
//     document.getElementById('text').innerHTML = text;
// }