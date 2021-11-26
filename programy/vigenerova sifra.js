function vigenerovas() {
    let textz =document.getElementById("textz").value;
    let klic =document.getElementById("klic").value;
    let delkatextu=textz.length;
    let delkaklice=klic.length;
    let textv="";
    let x, a,c, posun, pismeno, pklic, iklic=0;
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
  document.getElementById("demo").innerHTML =textv ;
  }
  