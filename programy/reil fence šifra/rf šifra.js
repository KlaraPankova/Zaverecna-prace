function rfsifra() {
    let textz =document.getElementById("textz").value;
    let radky =document.getElementById("cislo").value;
    let delkatextu=textz.length;
    let textv="";
    let sloupce=[];
    let index=0;
    let x;
    radky= Number(radky);
    if(radky<0){
        textv="Zadejte kladné číslo";
    }else{
        if(Number.isInteger(radky)){
    textz=textz.replace(/\s/g, "");
    textz=textz.toLowerCase();
    textz=textz.replace("á","a");
    textz=textz.replace("č","c");
    textz=textz.replace("ď","d");
    textz=textz.replace("é"+"ě","e");
    textz=textz.replace("í","i");
    textz=textz.replace("ň","n");
    textz=textz.replace("ó","o");
    textz=textz.replace("ř","r");
    textz=textz.replace("š","s");
    textz=textz.replace("ť","t");
    textz=textz.replace("ů"+"ú","u");
    textz=textz.replace("ý","y");
    textz=textz.replace("ž","z");
    for(let i=0; i<delkatextu; i++){
        let pismeno=textz.charCodeAt(i);
      if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){

    for(i=0;i<radky;i++){
        sloupce[i]="";
    }
    while(index<delkatextu){
        for(i=0; i<radky;i++){
            if(index>delkatextu){
                i=radky;}
            x=textz.charAt(index);
            sloupce[i]=sloupce[i]+x;
            index++;
        }
        for(i=radky-2;i>0;i--){
            if(index>delkatextu){
                i=-1;}
            x=textz.charAt(index);
            sloupce[i]=sloupce[i]+x;
            index++;   
        }
    }
    for (i=0;i<radky;i++){
    textv=textv+sloupce[i];
    }
}else{
    textv="Zadejte text pouze s písmeny";
}
}
}else{
    textv="Zadejte celé číslo";
}
}
   document.getElementById("vysledek").innerHTML =textv;
  }