function afinnisifra() {
    let textz =document.getElementById("textz").value;
    let b =document.getElementById("druha").value;
    let d =document.getElementById("treti").value;
    let delkatextu=textz.length;
    let textv="";
    let abeceda = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    b= Number(b);
    textz = textz.toLowerCase();
    for(let i=0; i<delkatextu; i++){
        if (textz.charCodeAt(i)==32){} 
        else{
        let pismeno=textz.charAt(i);
        pismeno=abeceda.indexOf(pismeno);
            pismeno=(d*pismeno)+b;
            pismeno=pismeno%26;
        let c=abeceda[pismeno];
       textv=textv+c;
        }
    }
   document.getElementById("demo").innerHTML = textv;
  }