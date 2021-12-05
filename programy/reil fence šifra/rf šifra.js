function rfsifra() {
    let textz =document.getElementById("textz").value;
    let klicz =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klicz.length;
    let textv="", klicp;
    let klicv=[ ];
    let sloupce=[[ ],[ ]];
    let x, a,c,k,index;
    textz=textz.replace(/\s/g, "");
    textz=textz.toLowerCase();
   for(let i=0; i<delkaklice; i++){
        x=klicz.charCodeAt(i);
        sloupce[0][i]=x;
        sloupce[1][i]="";
        klicv[i]=x;
    }
    klicv.sort(function(a, b){return a - b});
    for (i=0;i<delkatextu; i++){
        k=i%delkaklice;
        sloupce[1][k]=sloupce[1][k]+textz.charAt(i);
    }
    for(i=0;i<delkaklice;i++){
        a=klicv[i];
        for(l=0;l<delkaklice; l++){
            if(a==sloupce[0][l]){
                index=l;
                l=delkaklice;
            }else{}
        }
        textv=textv+sloupce[1][index];
    }

   document.getElementById("vysledek").innerHTML =textv;
  }