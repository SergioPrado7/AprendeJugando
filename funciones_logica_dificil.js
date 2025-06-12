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
    titulo:"Recuerdo de vacaciones",
    subtitle: "Los chicos que son de Argentina, Perú y España no tienen el pelo negro. "+
              "El chico que es de Colombia no usa gafas. "+
              "Los chicos de Brasil y Argentina están de pie. "+
              "Al chico de Perú no le gusta el fútbol. "+
              "El chico de Brasil no tiene a nadie a su derecha.",
    image: "/imagenes/chicos.png",
    respuestas: null
},
{
    titulo: "¿De dónde son estos chicos? ",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "25%",
      left: "26%",
      width: "14%"},
    respuestas: [
        { texto: "1, Brasil - 2, España - 3, Argentina - 4, Colombia - 5, Perú", correcta: true },
        { texto: "1, España - 2, Argentina - 3, Perú - 4, Brasil - 5, Colombia", correcta: false },
        { texto: "1, Colombia - 2, Brasil - 3, España - 4, Perú - 5, Argentina", correcta: false },
        { texto: "1, Brasil - 2, Perú - 3, Colombia - 4, Argentina - 5, España", correcta: false }]
      }
    ],
    2: [{
        titulo:"Lee, analiza y resuelve" ,
        subtitle: "Un hombre sin techo recoge colillas de cigarrillos "+
                  "de la calle. Puede hacer un cigarro con cinco "+
                  "colillas. Hoy está de suerte, ha encontrado 25 "+
                  "colillas. ¿Cuántos cigarrillos podrá hacer?",
        image: "/imagenes/Transparent.png",
        respuestas: [
            { texto: "5", correcta: false },
            { texto: "7", correcta: false },
            { texto: "6", correcta: true },
            { texto: "4", correcta: false }]
          }
        ],
  3:[{
    titulo:"¿Qué es lo que no hace preguntas pero necesita ser contestado?" ,
    subtitle: "Pista: ¡Todas las casas tienen uno!",
    image: "/imagenes/Transparent.png",
    respuestas: [
        { texto: "La contestadora", correcta: false },
        { texto: "La radio", correcta: false },
        { texto: "El teléfono", correcta: true },
        { texto: "El microondas", correcta: false }]
      }
    ],
  4:[{
    titulo: null ,
    subtitle: "Ana nació el 24 de diciembre, pero su cumpleaños es siempre en verano. ¿Cómo es esto posible?",
    image: "/imagenes/Transparent.png",
    respuestas: [
        { texto: "Ana viaja en el tiempo", correcta: false },
        { texto: "Esa no es su fecha real de nacimiento", correcta: false },
        { texto: "Ana hace invernación", correcta: false },
        { texto: "Ana nació en el hemisferio sur", correcta: true }]
      }
    ],
  5:[{
    titulo: "¿Qué es tan frágil que cuando dice su nombre lo rompe?" ,
    subtitle: "Pista: Se romperá tan pronto como diga cualquier palabra.",
    image: "/imagenes/Transparent.png",
    respuestas: [
        { texto: "Un vaso de vidrio", correcta: false },
        { texto: "Una ventana", correcta: false },
        { texto: "El silencio", correcta: true },
        { texto: "Un plato de porcelana", correcta: false }]
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
    window.location.href = `dificil_logica_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();