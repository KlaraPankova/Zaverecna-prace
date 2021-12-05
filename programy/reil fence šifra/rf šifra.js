function rfsifra() {
    let textz =document.getElementById("textz").value;
    let radky =document.getElementById("cislo").value;
    let delkatextu=textz.length;
    let textv="";
    let sloupce=[];
    let index=0;
    let x;
    textz=textz.replace(/\s/g, "");
    textz=textz.toLowerCase();
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
   document.getElementById("vysledek").innerHTML =textv;
  }