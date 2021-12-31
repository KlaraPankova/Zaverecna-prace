
function playfair() {
    let textz = document.getElementById("textz").value;
    let klic = document.getElementById("klic").value;
    let textv = "";
    let a = 0, b = 0, c, d, e, f,g, xradek, xIndex, yindex, yradek;
    let abeceda = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let novabeceda = []; a1 = [], a2 = [], a3 = [], a4 = [], a0 = [];
    textz = textz.replace(/\s+/g, '');
    klic = klic.replace(/\s+/g, '');
    let delkatextu = textz.length;
    let delkaklice = klic.length;
    textz = textz.toLowerCase();
    klic = klic.toLowerCase();
    textz=textz.replace("q","k");
    yindex = xIndex = yradek = xradek = 0;
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
    for (let i = 0; i < delkaklice; i++) {
        if (novabeceda.includes(klic.charAt(i))) { }
        else {
            novabeceda[a] = klic.charAt(i);
            a++;
        }
    }
    for (let j = 0; j < 25; j++) {
        if (novabeceda.includes(abeceda[j])) { }
        else {
            novabeceda[a] = abeceda[j];
            a++;
        }
    }
    for (let l = 0; l < 5; l++) {
        for (let k = 0; k < 5; k++) {
            this["a" + l] = this["a" + l] + novabeceda[b];
            b++;
        }
    }
    for(let k=0; k<delkatextu; k++){
       if(textz.charAt(k)==textz.charAt(k+1)){
            delkatextu++;
            textz=textz.substring(0,k+1)+"x"+textz.substring(k+1, delkatextu);
        }
        k++;
    }
    if (delkatextu / 2 == 0) {
    } else {
        textz = textz + "x";
    }
    for (let m = 0; m < delkatextu; m++) {
        let x = textz.charAt(m);
        let y = textz.charAt(m + 1);
        for (let n = 0; n < 5; n++) {
            if (window["a" + n].includes(x)) {
                xradek = n;
                xIndex = window["a" + n].indexOf(x);
            }
            if (window["a" + n].includes(y)) {
                yradek = n;
                yindex = window["a" + n].indexOf(y);
            }
        }
        if (xradek == yradek) {
            if (xIndex == 4) {
                xIndex = 0;
            } else {
                xIndex++;
            }
            if (yindex == 4) {
                yindex = 0;
            } else {
                yindex++;
            }
        }
        else if (xIndex == yindex) {
            if (xradek == 4) {
                xradek = 0;
            } else {
                xradek++;
            }
            if (yradek == 4) {
                yradek = 0;
            } else {
                yradek++;
            }
        }
        else {
            f = xIndex
            xIndex = yindex;
            yindex = f;
        }
        c = window["a" + xradek][xIndex];
        d = window["a" + yradek][yindex];
        textv = textv + c + d;
        m++;
    }
    
    document.getElementById("vysledek").innerHTML = textv;
}
