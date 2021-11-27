function cesarovas() {
    let textz =document.getElementById("textz").value;
    let b =document.getElementById("posun").value;
    let delkatextu=textz.length;
    let textv="";
    let x, a,c;
    let posun= Number(b);
    while (posun>26){
      posun=posun-26;}
    for(let i=0; i<delkatextu; i++){
      let pismeno=textz.charCodeAt(i);
    if (pismeno==32 || (pismeno>=65 && pismeno<=90) || (pismeno>=97 && pismeno<=122)){
      if (pismeno==32){}
      if (pismeno>=97 && pismeno<=122){
          if (pismeno+posun>122){
              x=pismeno+posun-122;
              pismeno=96+x;
          }else{
          pismeno=pismeno+posun;
      }
      }
      if (pismeno>=65 && pismeno<=90){
          if (pismeno+posun>90){
              x=pismeno+posun-90;
              pismeno=64+x;
          }else{
          pismeno=pismeno+posun;
      }
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