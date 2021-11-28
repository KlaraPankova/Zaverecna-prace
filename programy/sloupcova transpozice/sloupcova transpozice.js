function stranspozice() {
    let textz =document.getElementById("textz").value;
    let klicz =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klicz.length;
    let textv="";
    let klicv=[ ];
    let sloupce=[ ];
    let x, a,c,k;
   for(let i=0; i<delkaklice; i++){
        klicv[i]=klicz.charCodeAt(i)
        sloupce[i]="";
    }
    klicv.sort(function(a, b){return a - b});
    for (i=0;i<delkatextu; i++){
        k=i%delkaklice;
        sloupce[k]=sloupce[k]+textz.charAt(i);
    }
  /*c=String.fromCharCode(pismeno);
  textv=textv+c;*/

   document.getElementById("vysledek").innerHTML =klicv;
  }