const name=prompt("Adınızı giriniz:");

let selectName=document.getElementById("myName");

//Girilen ismin ilk harfi büyük harfe çevrilerek ekrana yazdırıldı
selectName.innerHTML=`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;

function showTime() {
    let myClock=document.getElementById("myClock")
    myClock.innerHTML=getMinutes()
}
showTime();


function showTime() {
    var dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();
    var day=dt.getDay();

   var gunler=["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi","Pazar"]

    dakika = Tik(dakika);
    saniye = Tik(saniye);

    document.getElementById('myClock').innerHTML =saat+":"+ dakika+ ":"+ saniye +" "+ gunler[day-1];
  
    // her 1 saniyede bir yenileme yapılıyor.
    var time
    time = setInterval('showTime()', 1000);
}

function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}

showTime();
