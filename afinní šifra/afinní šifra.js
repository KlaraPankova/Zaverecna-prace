function afinnisifra() {
    let textz =document.getElementById("textz").value;
    let d =document.getElementById("posun1").value;
    let b =document.getElementById("posun2").value;
    let delkatextu=textz.length;
    let pismeno, c,x;
    let textv="";
    let abeceda = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
    b= Number(b);
    d= Number(d);
    if((d<0)||(b<0)){
        textv="Zadejte kladné číslo";
    }else{
        if((Number.isInteger(b))&&(Number.isInteger(d))){
    textz = textz.toLowerCase();
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
    
    textz=textz.replace("Á","A");
    textz=textz.replace("Č","C");
    textz=textz.replace("Ď","D");
    textz=textz.replace("É","E");
    textz=textz.replace("Í","I");
    textz=textz.replace("Ň","N");
    textz=textz.replace("Ó","O");
    textz=textz.replace("Ř","R");
    textz=textz.replace("Š","S");
    textz=textz.replace("Ť","T");
    textz=textz.replace("Ú","U");
    textz=textz.replace("Ý","Y");
    textz=textz.replace("Ž","Z");

    for(let i=0; i<delkatextu; i++){
        x=textz.charCodeAt(i);
        if ((x>=65 && x<=90) || (x>=97 && x<=122)){
        pismeno=textz.charAt(i);
        pismeno=abeceda.indexOf(pismeno);
            pismeno=(d*pismeno)+b;
            pismeno=pismeno%26;
        c=abeceda[pismeno];
       textv=textv+c;
        
    }else{
        textv=textv+textz.charAt(i);
        }
    }
}else{
    textv="Zadejte celé číslo";}
}
   document.getElementById("vysledek").innerHTML = textv;
}