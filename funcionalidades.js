let respuestasCorrectas = 0;
let respondida = false;
const archivo = window.location.pathname.split("/").pop();
let nivelActual = 1;

if (archivo.includes("nivel2_lectura_facil")) {
  nivelActual = 2;
} else if (archivo.includes("nivel3_lectura_facil")) {
  nivelActual = 3;
} else if (archivo.includes("nivel4_lectura_facil")) {
  nivelActual = 4;
} else if (archivo.includes("nivel5_lectura_facil")) {
  nivelActual = 5;
}

const niveles = {
  1:[{
    titulo:"Lee y responde las preguntas" ,
    subtitle: "Las serpientes boas tragan sus presas enteras, "+
              "sin masticarlas. Luego no pueden moverse y duermen "+
              "durante los seis meses de digestión. Reflexioné mucho "+
              "entonces sobre las aventuras de la selva y, a mi vez, "+
              "logré trazar con un lápiz de color mi primer dibujo. "+
              "Mi dibujo número 1 era así:",
    image: "/imagenes/boa.jpg",
    respuestas: null
},
{
    titulo: "¿Qué representa este dibujo?",
    subtitle: null,
    image:"/imagenes/boa.jpg",
    imagenEstilo: {
      top: "30%",
      left: "40%",
      width: "20%"
    },
    respuestas: [
        { texto: "Una serpiente boa", correcta: true },
        { texto: "Un elefante", correcta: false },
        { texto: "Un sombrero", correcta: false },
        { texto: "Un montón de lodo", correcta: false }]
      }
    ],
  2: [{
    titulo:"¿Un sombrero o una boa?" ,
    subtitle: "Mostré mi obra maestra a las personas grandes y "+
              "les pregunté si mi dibujo les asustaba. Me contestaron: "+
              "'Por qué habrá de asustar un sombrero?' Mi dibujo "+
              "no es un sombrero. Representaba a una serpiente boa "+
              "que digería un elefante. Dibujé entonces el interior "+
              "de la serpiente boa a fin de que las personas grandes"+
              " pudiesen comprender. Siempre necesitan explicaciones."+
              " Mi dibujo número 2 era así:",
    image: "/imagenes/boa_abierta.jpg",
    respuestas: null},
    {
    titulo: "¿Qué pensaban las personas grandes que era el dibujo?",
    subtitle: null,
    image:"/imagenes/boa_abierta.jpg",
    imagenEstilo: {
        top: "32%",
        left: "40%",
        width: "20%"
        },
    respuestas: [
          { texto: "Una serpiente boa", correcta: false },
          { texto: "Un elefante", correcta: false },
          { texto: "Un sombrero", correcta: true },
          { texto: "Una serpiente boa devorando un elefante", correcta: false}]
          }
        ],
  3:[{
    titulo:"Un hombrecito..." ,
    subtitle: "Imaginaos, pues, mi sorpresa cuando, al romper el día, "+
              " me despertó una vocecita que decía: 'Por favor... "+
              "¡dibújame un cordero!' [...] Me puse de pie de un salto,"+
              " como golpeado por un rayo. Me froté los ojos. Miré bien."+
              " Y vi a un hombrecito enteramente extraordinario. [...]"+
              " He aquí el mejor retrato que, más tarde, logré hacer de él:",
    image: "/imagenes/principito.jpg",
    respuestas: null
},
{
    titulo: "¿Qué quería el hombrecito que hiciera el protagonista?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
      respuestas: [
          { texto: "Dibujar un cordero", correcta: true },
          { texto: "Jugar juntos", correcta: false },
          { texto: "Saludarlo", correcta: false },
          { texto: "Dormir con él", correcta: false }]
            }
          ],
  4:[{
    titulo:"El cordero." ,
    subtitle: "Entonces, impaciente, [...] garabateé este dibujo: "+
              "Y le largué: 'Ésta es la caja. El cordero que quieres "+
              "está adentro'. Quedé verdaderamente sorprendido al ver "+
              "iluminarse el rostro de mi joven juez: '¡Es exactamente "+
              "lo que quería! ¿Crees que necesitará mucha hierba este "+
              "cordero? [...] Porque en mi casa todo es pequeño...' "+
              "[...] Y fue así cómo conocí al principito.",
    image: "/imagenes/caja.jpg",
    respuestas: null
},
{
    titulo: "¿Por qué le preocupaba al principito si comía mucho el cordero?",
    subtitle: null,
    image:"/imagenes/corderito.jpg",
    imagenEstilo: {
          top: "30%",
          left: "43%",
          width: "12%"
            },
    respuestas: [
          { texto: "Porque el cordero es pequeño", correcta: false },
          { texto: "Porque la caja es pequeña", correcta: false },
          { texto: "Porque la casa del principito es pequeña", correcta: true },
          { texto: "Porque el principito es pequeño", correcta: false }]
              }
            ],
  5:[{
    titulo:"Los planetas" ,
    subtitle: "No podía sorprenderme mucho. Sabía bien que fuera "+
              "de los grandes planetas como la Tierra, Júpiter, "+
              "Marte, Venus, que tienen nombre, hay centenares de "+
              "planetas, a veces tan pequeños que apenas se les puede "+
              "ver con el telescopio. Cuando un astrónomo descubre "+
              "alguno le da un número por nombre. Lo llama por ejemplo: "+
              "'el asteroide 3251'.",
    image: "/imagenes/astronomo.jpg",
    respuestas: null
},
{
    titulo: "¿Cómo llaman los astrónomos a los planetas cuando los descubren?",
    subtitle: null,
    image:"/imagenes/questionMark.jpg",
    imagenEstilo: {
        top: "32%",
        left: "42.5%",
        width: "14%"
              },
    respuestas: [
            { texto: "Inventan un nombre", correcta: false },
            { texto: "Los llaman como los días de la semana", correcta: false },
            { texto: "Usan su propio nombre", correcta: false },
            { texto: "Con números", correcta: true }]
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
    window.location.href = `facil_lectura_overworld.html?nivel=${nivelActual}`;
  });
  actualizarPantalla();