function abatas() {
    let textz =document.getElementById("textz").value;
    let delkatextu=textz.length;
    let textv="";
    let x, a,c;
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