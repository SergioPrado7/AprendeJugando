let respuestasCorrectas = 0;
let respondida = false;
const archivo = window.location.pathname.split("/").pop();
let nivelActual = 1;

if (archivo.includes("nivel2_logica_facil")) {
  nivelActual = 2;
} else if (archivo.includes("nivel3_logica_facil")) {
  nivelActual = 3;
} else if (archivo.includes("nivel4_logica_facil")) {
  nivelActual = 4;
} else if (archivo.includes("nivel5_logica_facil")) {
  nivelActual = 5;
}

const niveles = {
  1:[{
    titulo:"Observa el florero" ,
    subtitle: "",
    image: "/imagenes/florero.png",
    respuestas: null
},
{
    titulo: "¿Qué dibujarías para este florero?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
        { texto: "flores", correcta: true },
        { texto: "una muñeca", correcta: false },
        { texto: "hojas", correcta: false },
        { texto: "una mesa", correcta: false }]
      }
    ],
  2: [{
    titulo:"Observa el pulpo" ,
    subtitle: "",
    image: "/imagenes/pulpo.png",
    respuestas: null},
    {
    titulo: "¿Qué es lo que le hace falta al pulpo?",
    subtitle: null,
    image: "/imagenes/pulpo2.png",
    imagenEstilo: {
      top: "30%",
      left: "28%",
      width: "20%"},
    respuestas: [
          { texto: "Un ojo y las ventosas", correcta: true },
          { texto: "Los tentáculos", correcta: false },
          { texto: "Un ojo", correcta: false },
          { texto: "Las ventosas", correcta: false}]
          }
        ],
  3:[{
    titulo:"Observa la imagen" ,
    subtitle: "",
    image: "/imagenes/loro.png",
    respuestas: null
},
{
    titulo: "¿Qué tiene de raro el loro?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
      respuestas: [
          { texto: "No tiene color", correcta: false },
          { texto: "Es chiquito", correcta: false },
          { texto: "Usa zapatos y pantalón", correcta: false },
          { texto: "Tiene sueño", correcta: true }]
            }
          ],
  4:[{
    titulo:"Observa las imágenes de la historia" ,
    subtitle: "Viru es un perrito juguetón, siempre espera atento que le"+
              " lancen una rama para irla a buscar y seguir jugando.",
    image: "/imagenes/viru.png",
    respuestas: null
},
{
    titulo: "Ordena las imágenes de la historia del 1 al 4 para indicar cuál va"+
            "primero y cuál queda de último.",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "24%",
      width: "30%"},
    respuestas: [
          { texto: "1, 2, 3, 4", correcta: false },
          { texto: "2, 4, 1, 3", correcta: false },
          { texto: "3, 1, 2, 4", correcta: false },
          { texto: "4, 3, 2, 1", correcta: true }]
              }
            ],
  5:[{
    titulo: "Responde lo siguiente" ,
    subtitle: "Cuando íbamos hacia la escuela nos quedamos sin gasolina en el"+
              " carro y nos fuimos en taxi, ¿cuál transporte hemos usado para llegar a la escuela?",
    image: "/imagenes/Transparent.png",
    respuestas: [
        { texto: "barco", correcta: false },
        { texto: "carro", correcta: false },
        { texto: "bici", correcta: false },
        { texto: "taxi", correcta: true }]}
  ]
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
    window.location.href = `facil_logica_overworld.html?nivel=${nivelActual}`;
  });
  actualizarPantalla();