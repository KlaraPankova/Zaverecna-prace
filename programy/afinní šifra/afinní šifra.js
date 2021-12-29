function afinnisifra() {
    let textz =document.getElementById("textz").value;
    let d =document.getElementById("posun1").value;
    let b =document.getElementById("posun2").value;
    let delkatextu=textz.length;
    let pismeno, c,x;
    let textv="";
    let abeceda = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    b= Number(b);
    textz = textz.toLowerCase();
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
   document.getElementById("vysledek").innerHTML = textv;
  }