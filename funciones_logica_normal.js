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
    titulo:"Mi bizcocho de cumpleaños tiene 4 velitas rojas y 2 velitas azules",
    subtitle: "",
    image: "/imagenes/pastel.png",
    respuestas: null
},
{
    titulo: "¿cuántos años cumplí?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
        { texto: "6", correcta: true },
        { texto: "4", correcta: false },
        { texto: "2", correcta: false },
        { texto: "5", correcta: false }]
      }
    ],
  2: [{
    titulo:"Observa la imagen" ,
    subtitle: "",
    image: "/imagenes/animales.png",
    respuestas: null},
    {
    titulo: "¿Cuántos animales hay?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
          { texto: "12", correcta: true },
          { texto: "11", correcta: false },
          { texto: "10", correcta: false },
          { texto: "13", correcta: false}]
          }
        ],
  3:[{
    titulo:"Los niños y las niñas están columpiándose. Los que están tocando el suelo pesan "+
           "más que los que están en el aire." ,
    subtitle: "",
    image: "/imagenes/ninios.png",
    respuestas: null
},
{
    titulo: "¿Cuál es el orden de los niños si los acomodamos del más pesado al menos pesado?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
      respuestas: [
          { texto: "1, 2, 5, 4, 3", correcta: true },
          { texto: "3, 1, 2, 5, 4", correcta: false },
          { texto: "2, 3, 5, 4, 1", correcta: false},
          { texto: "2, 5, 4, 1, 3", correcta: false }]
            }
          ],
  4:[{
    titulo:"Observa los dibujos" ,
    subtitle: "",
    image: "/imagenes/peso.png",
    respuestas: null
},
{
    titulo: "¿Cuánto pesan Carlota, Quique y su perro Sultán? En base a los dibujos, calcula el peso"+
            "de cada uno de ellos",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "24%",
      width: "30%"},
    respuestas: [
          { texto: "Carlota pesa 21kg, Quique pesa 25kg y Sultán pesa 20kg", correcta: false },
          { texto: "Carlota pesa 21kg, Quique pesa 34kg y Sultán pesa 20kg", correcta: false },
          { texto: "Carlota pesa 30kg, Quique pesa 34kg y Sultán pesa 20kg", correcta: false },
          { texto: "Carlota pesa 30kg, Quique pesa 34kg y Sultán pesa 21kg", correcta: true }]
              }
            ],
  5:[{
    titulo: "Las casas de los amigos" ,
    subtitle: "La casa de José está entre la de Carlota y la de María."+
              " Las casas más altas son la de Carlota y la de José."+
              " La casa de Antonio está entre la de Carlota y la de Ramón.",
    image: "/imagenes/casas.png",
    respuestas: null
},
{
    titulo: "¿Dónde viven los niños? ",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "26%",
      width: "20%"},
    respuestas: [
          { texto: "Carlota, 3 - Ramón, 5 - Antonio, 4 - José, 2 - María, 1", correcta: true },
          { texto: "Carlota, 1 - Ramón, 5 - Antonio, 2 - José, 3 - María, 4", correcta: false },
          { texto: "Carlota, 5 - Ramón, 4 - Antonio, 3 - José, 1 - María, 2", correcta: false},
          { texto: "Carlota, 2 - Ramón, 4 - Antonio, 1 - José, 5 - María, 3", correcta: false }]
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
    window.location.href = `normal_logica_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();