function stranspozice() {
    let textz =document.getElementById("textz").value;
    let klicz =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klicz.length;
    textz = textz.toLowerCase();
    klicz = klicz.toLowerCase();
    let textv="";
    let klicv=[ ];
    let sloupce=[[ ],[ ]];
    let x,m=0, a,k,index;
    textz=textz.replace(/\s/g, "");
    textz=textz.replace("á","a");
    textz=textz.replace("č","c");
    textz=textz.replace("ď","d");
    textz=textz.replace("é","e");
    textz=textz.replace("ě","e");
    textz=textz.replace("í","i");
    textz=textz.replace("ň","n");
    textz=textz.replace("ó","o");
    textz=textz.replace("ř","r");
    textz=textz.replace("š","s");
    textz=textz.replace("ť","t");
    textz=textz.replace("ů","u");
    textz=textz.replace("ú","u");
    textz=textz.replace("ý","y");
    textz=textz.replace("ž","z");

    klicz=klicz.replace(/\s/g, "");
    klicz=klicz.replace("á","a");
    klicz=klicz.replace("č","c");
    klicz=klicz.replace("ď","d");
    klicz=klicz.replace("é","e");
    klicz=klicz.replace("ě","e");
    klicz=klicz.replace("í","i");
    klicz=klicz.replace("ň","n");
    klicz=klicz.replace("ó","o");
    klicz=klicz.replace("ř","r");
    klicz=klicz.replace("š","s");
    klicz=klicz.replace("ť","t");
    klicz=klicz.replace("ů","u");
    klicz=klicz.replace("ú","u");
    klicz=klicz.replace("ý","y");
    klicz=klicz.replace("ž","z");
    for(let i=0; i<delkatextu; i++){
        let pismeno=textz.charCodeAt(i);
      if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
    }else{
        textv="Zadejte text pouze s písmeny";
        m=1;
    }
}
for(let i=0; i<delkaklice; i++){
    let pismeno=klicz.charCodeAt(i);
  if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
}else{
    textv="Zadejte klic pouze s písmeny";
    m=1;
}
}
if (m==0){
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
}

   document.getElementById("vysledek").innerHTML =textv;
  }