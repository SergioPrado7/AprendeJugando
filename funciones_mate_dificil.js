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
    titulo:"¿Cuál es el valor posicional del 9 en el número 39 612?",
    subtitle: "",
    image: "/imagenes/Transparent.png",
    respuestas: [
        { texto: "9", correcta: false },
        { texto: "90", correcta: false },
        { texto: "900", correcta: false },
        { texto: "9000", correcta: true }]
      }
    ],
    2: [{
        titulo:"¿Cuál es el perímetro de la figura?" ,
        subtitle: "",
        image: "/imagenes/figura.png",
        respuestas: [
            { texto: "12,727.2 metros", correcta: false },
            { texto: "12,720.4 metros", correcta: false },
            { texto: "12,727.4 metros", correcta: true },
            { texto: "12,500 metros", correcta: false }]
          }
        ],
  3:[{
    titulo:"Lee y resuelve" ,
    subtitle: "Se realizó un estudio de regeneración de selvas en la Reserva Biocultural Kaxil "+
              "Kiuic ubicada en el Municipio de Oxkutzcab en el sur de Yucatán. Para ello se "+
              "requirió medir un terreno de forma rectangular del área de estudio, pero debido a "+
              "las malas condiciones climáticas al momento de la medición no fue posible medir "+
              "su ancho.",
    image: "/imagenes/Transparent.png",
    respuestas: null},
    {
    titulo: "¿Cuánto mediría el ancho del terreno si se sabe que mide 22 kilómetros de largo y el área que ocupa es de 308 km2?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
          { texto: "14 kilómetros", correcta: true },
          { texto: "13 kilómetros", correcta: false },
          { texto: "23 kilómetros", correcta: false },
          { texto: "12 kilómetros", correcta: false}]
          }
        ],
  4:[{
    titulo: null ,
    subtitle: "En el año 2011 unos investigadores realizaron un estudio sobre la vegetación de la "+
    "selva de Nohalal-Sudzal Chico, Tekax, Yucatán. Para ello establecieron su área de "+
"estudio por medio de cuadrantes de vegetación, los cuales tiene forma de "+
"rectángulos. Jorge y Carla son estudiantes de la Licenciatura en biología y saben que "+
"el ancho del rectángulo es 10x, y el largo tiene la medida del ancho más 10x.",
    image: "/imagenes/Transparent.png",
    respuestas: null},
    {
    titulo: "¿Cuánto mide el perímetro de la vegetación?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
          { texto: "20x", correcta: false },
          { texto: "60x", correcta: true },
          { texto: "40x", correcta: false },
          { texto: "30x", correcta: false}]
          }
        ],
  5:[{
    titulo: "Resuelva la ecuación" ,
    subtitle: "",
    image: "/imagenes/ecuacion.png",
    respuestas: [
        { texto: "3", correcta: false },
        { texto: "1", correcta: false },
        { texto: "0", correcta: true },
        { texto: "2", correcta: false }]
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
    window.location.href = `dificil_mate_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();