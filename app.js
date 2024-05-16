 let dizel =40.16 , benzin =42.67 , lpg = 20.97;
 const yenisatir= "\r\n";

 const yakıtMetni ="Dizel (1)" +yenisatir
 +"Benzin (2)"+yenisatir
 +"LPG (3)"+yenisatir
 +"Yakıt Türünü Seçin";

 let yakittipi = prompt(yakıtMetni);
if(yakittipi=="1" ||yakittipi =="2" || yakittipi=="3"){
    let yakıtlitresi=Number(prompt("Yakıt Litresini girin."));
    let bakiye =Number(prompt("Bakiye giriniz."));
    if(yakittipi=="1"){
        let ödenecektutar= dizel*yakıtlitresi;
        if (ödenecektutar<bakiye){
            bakiye=bakiye-ödenecektutar;
          alert("Yakıt alma işlemi başarılı" +yenisatir
          +"kalan bakiye : " + (bakiye-ödenecektutar));
        }
        else{
            alert("bakiye yetersiz" +yenisatir
            +"ödenecek tutar: " +ödenecektutar+yenisatir
            +"bakiye: " +bakiye+yenisatir
            +"eksik tutar " + (ödenecektutar-bakiye));
        }
        
         }else if(yakittipi=="2"){
            let ödenecektutar= benzin*yakıtlitresi;
            if (ödenecektutar<bakiye){
                bakiye=bakiye-ödenecektutar;
              alert("Yakıt alma işlemi başarılı" +yenisatir
              +"kalan bakiye : " + (bakiye-ödenecektutar));
            }
            else{
                alert("bakiye yetersiz" +yenisatir
                +"ödenecek tutar: " +ödenecektutar+yenisatir
                +"bakiye: " +bakiye+yenisatir
                +"eksik tutar " + (ödenecektutar-bakiye));
            }
         }else if(yakittipi="3"){
            let ödenecektutar= lpg*yakıtlitresi;
            if (ödenecektutar<bakiye){
                bakiye=bakiye-ödenecektutar;
              alert("Yakıt alma işlemi başarılı" +yenisatir
              +"kalan bakiye : " + (bakiye-ödenecektutar));
            }
            else{
                alert("bakiye yetersiz" +yenisatir
                +"ödenecek tutar: " +ödenecektutar+yenisatir
                +"bakiye: " +bakiye+yenisatir
                +"eksik tutar " + (ödenecektutar-bakiye));
            }
        
         }
}
 else {
 alert("Lütfen geçerli yakıt türü girin.");
 }