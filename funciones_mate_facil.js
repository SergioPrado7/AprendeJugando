let respuestasCorrectas = 0;
let respondida = false;
const archivo = window.location.pathname.split("/").pop();
let nivelActual = 1;

if (archivo.includes("nivel2_mate_facil")) {
  nivelActual = 2;
} else if (archivo.includes("nivel3_mate_facil")) {
  nivelActual = 3;
} else if (archivo.includes("nivel4_mate_facil")) {
  nivelActual = 4;
} else if (archivo.includes("nivel5_mate_facil")) {
  nivelActual = 5;
}

const niveles = {
  1:[{
    titulo:"Tabla del 2" ,
    subtitle: "",
    image: "/imagenes/tabla2.png",
    respuestas: null
},
{
    titulo: "¿Cuánto es 2 x 7?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
        { texto: "14", correcta: true },
        { texto: "18", correcta: false },
        { texto: "23", correcta: false },
        { texto: "16", correcta: false }]
      }
    ],
  2: [{
    titulo:"Tabla del 3" ,
    subtitle: "",
    image: "/imagenes/tabla3.png",
    respuestas: null},
    {
    titulo: "¿Cuánto es 3 x 8?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
          { texto: "24", correcta: true },
          { texto: "13", correcta: false },
          { texto: "23", correcta: false },
          { texto: "29", correcta: false}]
          }
        ],
  3:[{
    titulo:"Tabla del 4" ,
    subtitle: "",
    image: "/imagenes/tabla4.jpg",
    respuestas: null
},
{
    titulo: "¿Cuánto es 4 X 9?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
      respuestas: [
          { texto: "20", correcta: false },
          { texto: "34", correcta: false },
          { texto: "31", correcta: false },
          { texto: "36", correcta: true }]
            }
          ],
  4:[{
    titulo:"Tabla del 7" ,
    subtitle: "",
    image: "/imagenes/tabla7.png",
    respuestas: null
},
{
    titulo: "¿Cuánto es 7 x 6?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
          { texto: "34", correcta: false },
          { texto: "40", correcta: false },
          { texto: "42", correcta: true },
          { texto: "46", correcta: false }]
              }
            ],
  5:[{
    titulo:"Tabla del 8" ,
    subtitle: "",
    image: "/imagenes/tabla8.png",
    respuestas: null
},
{
    titulo: "¿Cunánto es 8 x 7?",
    subtitle: null,
    image:"/imagenes/questionMark.jpg",
    imagenEstilo: {
        top: "32%",
        left: "42.5%",
        width: "14%"
              },
    respuestas: [
            { texto: "49", correcta: false },
            { texto: "38", correcta: false },
            { texto: "40", correcta: false },
            { texto: "56", correcta: true }]
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
btnAtras.disabled = indice === 0 && contenido.length - 1 ? "inline-block" : "none";
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
    window.location.href = `facil_mate_overworld.html?nivel=${nivelActual}`;
  });
  actualizarPantalla();