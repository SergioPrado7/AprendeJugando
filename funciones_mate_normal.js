let respuestasCorrectas = 0;
let respondida = false;
const archivo = window.location.pathname.split("/").pop();
let nivelActual = 1;

if (archivo.includes("nivel2")) {
  nivelActual = 2;
} else if (archivo.includes("nivel3")) {
  nivelActual = 3;
} else if (archivo.includes("nivel4")) {
  nivelActual = 4;
} else if (archivo.includes("nivel5")) {
  nivelActual = 5;
}

const niveles = {
  1:[{
    titulo:"Tabla del 9",
    subtitle: "",
    image: "/imagenes/tabla9.png",
    respuestas: null
},
{
    titulo: "¿Cuánto es 9 x 9?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
        { texto: "81", correcta: true },
        { texto: "89", correcta: false },
        { texto: "83", correcta: false },
        { texto: "85", correcta: false }]
      }
    ],
  2: [{
    titulo:"Realiza la siguiente suma" ,
    subtitle: "",
    image: "/imagenes/suma.png",
    respuestas: [
        { texto: "12.4", correcta: false },
        { texto: "12.3", correcta: true },
        { texto: "10.4", correcta: false },
        { texto: "11.2", correcta: false}]
        }
      ],
  3:[{
    titulo:"Realiza la siguiente resta" ,
    subtitle: "",
    image: "/imagenes/fracciones.png",
    respuestas: [
        { texto: "4/7", correcta: false },
        { texto: "1/7", correcta: false },
        { texto: "2/7", correcta: true },
        { texto: "7/7", correcta: false}]
        }
      ],
  4:[{
    titulo:"Calcule el porcentaje" ,
    subtitle: "",
    image: "/imagenes/porcentaje.png",
    respuestas: [
        { texto: "20", correcta: false },
        { texto: "17", correcta: false },
        { texto: "15", correcta: true },
        { texto: "13", correcta: false}]
        }
      ],
  5:[{
    titulo: "Clasificación de triángulos" ,
    subtitle: "Un triángulo equilátero tiene 3 ángulos iguales. "+
              "Un triángulo isósceles tiene 2 ángulos iguales. "+
              "Un triángulo escaleno tiene 3 ángulos diferentes.",
    image: "/imagenes/triangulos.jpg",
    respuestas: null
},
{
    titulo: "¿Qué tipo de triángulo es este?",
    subtitle: null,
    image: "/imagenes/triangulo.png",
    imagenEstilo: {
      top: "32%",
      left: "26%",
      width: "20%"},
    respuestas: [
          { texto: "Isósceles", correcta: false },
          { texto: "Equilátero", correcta: false },
          { texto: "Escaleno", correcta: true},
          { texto: "Ninguno de esos", correcta: false }]
              }
            ],
  };

let contenido = niveles[nivelActual]
let indice = 0;
const titulo = document.getElementById("titulo");
const subtitle = document.getElementById("subtitle");
const imagen = document.getElementById("image");
const zonaRespuestas = document.getElementById("zonaRespuestas");
const btnAtras = document.getElementById("atras");
const btnSiguiente = document.getElementById("sig");
const btnFinalizar = document.getElementById("btnFinalizar");

function actualizarPantalla() {
    const actual = contenido[indice];
    titulo.textContent = actual.titulo || " ";
    subtitle.textContent = actual.subtitle || " ";
    imagen.src = actual.image || " ";
    imagen.alt = actual.titulo || " ";
    if (actual.imagenEstilo) {
      imagen.style.top = actual.imagenEstilo.top;
      imagen.style.left = actual.imagenEstilo.left;
      imagen.style.width = actual.imagenEstilo.width;
    }
    else {
      imagen.style.top = "";
      imagen.style.left = "";
      imagen.style.width = "";
    }
  
    zonaRespuestas.innerHTML = "";
  
    if (actual.respuestas) {
      actual.respuestas.forEach((resp, i) => {
        const btn = document.createElement("button");
        btn.textContent = resp.texto;
        btn.disabled = false; // aseguramos que los botones estén habilitados
        btn.onclick = () => {
          // Marcar como respondida
          respondida = true;
          if (resp.correcta) {
            alert("¡Respuesta correcta!");
            respuestasCorrectas++;
          } else {
            alert("Respuesta incorrecta.");
          }
          const botones = zonaRespuestas.querySelectorAll("button");
          botones.forEach(b => b.disabled = true);
          btnAtras.disabled = true;
        };
        zonaRespuestas.appendChild(btn);
      });
    }
btnAtras.disabled = indice === 0;
btnSiguiente.style.display = indice < contenido.length - 1 ? "inline-block" : "none";
btnFinalizar.style.display = indice === contenido.length - 1 ? "inline-block" : "none";
}

btnAtras.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
      actualizarPantalla();
    }
  });

  btnSiguiente.addEventListener("click", () => {
    if (indice < contenido.length - 1) {
      indice++;
      actualizarPantalla();
    }
  });

  btnFinalizar.addEventListener("click", () => {
    if (!respondida && contenido[indice].respuestas) {
      alert("Debes responder la pregunta antes de finalizar el nivel.");
      return; // Evita redirigir
    }
    alert("¡Nivel completado! Respuestas correctas: " + respuestasCorrectas);
    window.location.href = `normal_mate_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();