

var btn = document.getElementById('btn');

btn.onclick = function(){
    var mebleg = Number(document.getElementById('mebleg').value);
    var ay = Number(document.getElementById('ay').value);
    var faiz = Number(document.getElementById('faiz').value);
   if (mebleg >30000) {
        alert('Mebleg 30 000Azn den cox ola bilmez...')
        mebleg = 0
        document.getElementById('mebleg').value='';
        
   }
    if(faiz > 21 || faiz < 12 ){
       if (faiz != 0) {
        alert('Fazi 12-21 intervalinda olmalidir..')
        ay = 1
    }
    document.getElementById('faiz').value = '';
   }
    if(ay > 54){
        faiz = 0
        alert('Muddet Maksimum 54 aydir...')
        document.getElementById('ay').value=''

   }
   var umumiMebleg = mebleg + mebleg*faiz/100;
   var ayliqOdenis = umumiMebleg/ay;

   document.getElementById('ayliqOdenis').innerHTML = ayliqOdenis.toFixed(2);
   document.getElementById('umumiMebleg').innerHTML = umumiMebleg.toFixed(2);
}
