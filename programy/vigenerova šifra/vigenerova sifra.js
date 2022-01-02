function vigenerovas() {
    let textz =document.getElementById("textz").value;
    let klic =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klic.length;
    let textv="";
    let x,c,m=0, posun, pismeno, pklic, iklic=0;
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

    klic= klic.toLowerCase();
    klic=klic.replace(/\s/g, "");
    klic=klic.replace("á","a");
    klic=klic.replace("č","c");
    klic=klic.replace("ď","d");
    klic=klic.replace("é","e");
    klic=klic.replace("ě","e");
    klic=klic.replace("í","i");
    klic=klic.replace("ň","n");
    klic=klic.replace("ó","o");
    klic=klic.replace("ř","r");
    klic=klic.replace("š","s");
    klic=klic.replace("ť","t");
    klic=klic.replace("ů","u");
    klic=klic.replace("ú","u");
    klic=klic.replace("ý","y");
    klic=klic.replace("ž","z");
    for(let i=0; i<delkaklice; i++){
        let pismeno=klic.charCodeAt(i);
      if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
    }else{
        textv="Zadejte klic pouze s písmeny";
        m=1;
    }
}
if(m==0){
    for( i=0; i<delkatextu; i++){
    if(iklic>=delkaklice){
      iklic=0;
      }
      pismeno=textz.charCodeAt(i);
      pklic=klic.charCodeAt(iklic);
      if (pklic>=97 && pklic<=122){
          posun=pklic-97;}
      if (pklic>=65 && pklic<=90){
          posun=pklic-65;}
          
     if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
      if (pismeno==32){}
      if (pismeno>=97 && pismeno<=122){
          if (pismeno+posun>122){
              x=pismeno+posun-122;
              pismeno=96+x;
          }else{
          pismeno=pismeno+posun;
      }
      iklic++;
      }
      if (pismeno>=65 && pismeno<=90){
          if (pismeno+posun>90){
              x=pismeno+posun-90;
              pismeno=64+x;
          }else{
          pismeno=pismeno+posun;
      }
      iklic++;
      }
      }
      else{
          pismeno=42;
      }
  c=String.fromCharCode(pismeno);
  textv=textv+c;
  }
}
  document.getElementById("vysledek").innerHTML =textv ;
  }
  