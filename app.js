let i = 0;
function read() {
  if (!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("gone").style.display = "none";
    document.getElementById("read").innerHTML = "Pročitaj manje";

    i = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("gone").style.display = "inline";
    document.getElementById("read").innerHTML = "Pročitaj više";
    i = 0;
  }
}
let i2 = 0;
function read2() {
  if (!i2) {
    document.getElementById("more2").style.display = "inline";
    document.getElementById("dots2").style.display = "none";
    document.getElementById("gone2").style.display = "none";
    document.getElementById("read2").innerHTML = "Pročitaj manje";

    i2 = 1;
  } else {
    document.getElementById("more2").style.display = "none";
    document.getElementById("dots2").style.display = "inline";
    document.getElementById("gone2").style.display = "inline";
    document.getElementById("read2").innerHTML = "Pročitaj više";
    i2 = 0;
  }
}

let i3 = 0;
function read3() {
  if (!i3) {
    document.getElementById("more3").style.display = "inline";
    document.getElementById("dots3").style.display = "none";
    document.getElementById("gone3").style.display = "none";
    document.getElementById("read3").innerHTML = "Pročitaj manje";

    i3 = 1;
  } else {
    document.getElementById("more3").style.display = "none";
    document.getElementById("dots3").style.display = "inline";
    document.getElementById("gone3").style.display = "inline";
    document.getElementById("read3").innerHTML = "Pročitaj više";
    i3 = 0;
  }
}
let i4 = 0;
function read4() {
  if (!i4) {
    document.getElementById("more4").style.display = "inline";
    document.getElementById("dots4").style.display = "none";
    document.getElementById("gone4").style.display = "none";
    document.getElementById("read4").innerHTML = "Pročitaj manje";

    i4 = 1;
  } else {
    document.getElementById("more4").style.display = "none";
    document.getElementById("dots4").style.display = "inline";
    document.getElementById("gone4").style.display = "inline";
    document.getElementById("read4").innerHTML = "Pročitaj više";
    i4 = 0;
  }
}
