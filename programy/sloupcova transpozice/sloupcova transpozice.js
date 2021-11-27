function stranspozice() {
    let textz =document.getElementById("textz").value;
    let klicz =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klicz.length;
    let textv="";
    let klicv=[ ];
    let x, a,c,k;
   for(let i=0; i<delkaklice; i++){
        let klicp=klicz.charCodeAt(i);
        klicv[i]=klicp;
    }
    klicv.sort(function(a, b){return a - b});
    for (i=0;i<delkatextu; i++){
        k=i%delkaklice;
        if(typeof window["sloupec"+k]=='undefined'){
            window["sloupec"+k];
        }
        window ["sloupec"+k]=window ["sloupec"+k]+textv.charAt(i);
    }
  /*c=String.fromCharCode(pismeno);
  textv=textv+c;*/

   document.getElementById("vysledek").innerHTML =sloupec0;
  }