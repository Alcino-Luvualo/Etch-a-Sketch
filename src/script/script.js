let grade = document.querySelector(".grade");
let reiniciar = document.querySelector(".reset");
let colorido = document.querySelector(".color");
let size = document.querySelector(".size");
let sizeofvalue = 16;
let arrayColor = [
  "red", "blue", "green", "yellow", "orange",
  "purple", "pink", "brown", "gray", "black",
  "white", "cyan", "magenta", "lime", "teal",
  "indigo", "violet", "gold", "silver", "coral"
];
size.addEventListener("click", () => {
    if (sizeofvalue === 16){
        sizeofvalue = 32;
    }
    else if (sizeofvalue === 32){
        sizeofvalue = 64;
    }
    else if (sizeofvalue === 64){
        sizeofvalue = 128;
    }
    else {
        sizeofvalue = 16;
    }

    size.innerText = `${sizeofvalue}`;

    // Limpa a grade antiga
    grade.innerHTML = "";

    // Atualiza grid com novo tamanho
    grade.style.gridTemplateColumns = `repeat(${sizeofvalue}, 1fr)`;
    grade.style.gridTemplateRows = `repeat(${sizeofvalue}, 1fr)`;

    // Recria as divs com novo tamanho
    for (let i = 0; i < sizeofvalue * sizeofvalue; i++) {
        let divs = document.createElement("div");
        divs.classList.add("divs");
        divs.style.border = "1px solid black";
        divs.style.maxWidth = "100%";

        divs.addEventListener("mousemove", function () {
            if (desenhar && !colorRandom) {
                divs.style.background = "blue";
            } else if (desenhar && colorRandom) {
                let changeofcolor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
                divs.style.background = changeofcolor;
            }
        });

        divs.addEventListener("mousedown", function () {
            if (!colorRandom) {
                divs.style.background = "blue";
            } else {
                let changeofcolor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
                divs.style.background = changeofcolor;
            }
        });

        grade.appendChild(divs);
    }
});
grade.style.gridTemplateColumns = `repeat(${sizeofvalue}, 1fr)`;
grade.style.gridTemplateRows = `repeat(${sizeofvalue}, 1fr)`;

let desenhar = false;
let colorRandom = false;


for (let i = 0; i < sizeofvalue * sizeofvalue; i++) {
  let divs = document.createElement("div");
  divs.classList.add("divs");
  divs.style.border = "1px solid black";
  divs.style.maxWidth = "100%";

  divs.addEventListener("mousemove", function () {
    if (desenhar && !colorRandom) {
      divs.style.background = "blue";
    } else if (desenhar && colorRandom) {
      let changeofcolor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
      divs.style.background = changeofcolor;
    }
  });

  divs.addEventListener("mousedown", function () {
    if (!colorRandom) {
      divs.style.background = "blue";
    } else {
      let changeofcolor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
      divs.style.background = changeofcolor;
    }
  });

  grade.appendChild(divs);
}

document.addEventListener("mousedown", () => {
  desenhar = true;
});
document.addEventListener("mouseup", () => {
  desenhar = false;
});


reiniciar.addEventListener("click", () => {
  location.reload();
});

colorido.addEventListener("click", () => {
  colorRandom = !colorRandom;
});
