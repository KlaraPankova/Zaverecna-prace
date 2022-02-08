function atbas() {
    let textz =document.getElementById("textz").value;
    let delkatextu=textz.length;
    let textv="";
    let c;
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
      let pismeno=textz.charCodeAt(i);
    if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
      if (pismeno==32){}
      if (pismeno>=97 && pismeno<=122){
          pismeno=97+122-pismeno;
      }
      if (pismeno>=65 && pismeno<=90){
          pismeno=65+90-pismeno;
      }
    }
      else{
          pismeno=42;
      }
  c=String.fromCharCode(pismeno);
  textv=textv+c;
    }
   document.getElementById("vysledek").innerHTML = textv;
  }