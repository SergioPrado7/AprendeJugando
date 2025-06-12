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
    titulo:"El consejo del principito",
    subtitle: "Y un día me aconsejó que me aplicara a lograr un hermoso dibujo, para que "+
              "entrara bien en la cabeza de los niños de mi tierra. 'Si algún día viajan', "+
              "me decíam 'podrá serles útil. A veces no hay inconvenientes en dejar el trabajo "+
              "para más tarde. Pero, si se trata de los baobabs, es siempre una catastrofe. "+
              "Conocí un planeta habitado por un perezoso. Descuidó tres arbustos...' Y, según "+
              "las indicaciones del principito, dibujé aquel planeta.",
    image: "/imagenes/Transparent.png",
    respuestas: null
},
{
    titulo: "¿Qué signicado tiene el párrafo?",
    subtitle: null,
    image: "/imagenes/bigbaobab.jpg",
    imagenEstilo: {
      top: "25%",
      left: "26%",
      width: "14%"},
    respuestas: [
        { texto: "El principito quería un dibujo de la principal amenaza de su planeta", correcta: false },
        { texto: "Debemos tener responsabilidad", correcta: false },
        { texto: "Existen personas muy flojas incluso fuera de nuestro planeta", correcta: false },
        { texto: "Es importante aprender desde pequeños la importancia y el manejo de los problemas", correcta: true }]
      }
    ],
  2: [{
    titulo:"La flor" ,
    subtitle: "Enrojeció y agregó: 'Si alguien ama a una flor de la que no existe más que un ejemplar "+
              "entre los millones y millones de estrellas, es bastante para que sea feliz cuando mira "+
              "a las estrellas. Se dice: 'Mi flor está allí, en alguna parte...' Y si el cordero come "+
              "la flor, para él es como si, bruscamentem todas las estrellas se apagaran. Y esto, ¿no "+
              "es importante?' No pudo decir nada más. Estalló bruscamente en sollozos.",
    image: "/imagenes/Transparent.png",
    respuestas: null
},
{
    titulo: "¿Por qué llora el principito?",
    subtitle: null,
    image: "/imagenes/flor.jpg",
    imagenEstilo: {
      top: "25%",
      left: "27%",
      width: "12%"},
    respuestas: [
        { texto: "Llora porque está molesto", correcta: false },
        { texto: "Llora porque está triste", correcta: false },
        { texto: "Llora porque siente que su flor está en peligro, y eso hace que todo pierda sentido.", correcta: true },
        { texto: "Llora porque el cordero se comió su flor", correcta: false }]
      }
    ],
  3:[{
    titulo:"La confesión del principito" ,
    subtitle: "'No supe comprender nada entonces. Debí haberla juzgado por sus actos y no por sus "+
              "palabras. Me perfumaba y me iluminaba. ¡No debí haber huido jamás! Debí haber adivinado "+
              "su ternura detrás de sus pobres astucias. ¡Las flores son tan contradictorias! Pero "+
              "yo era demasiado joven para saber amarla'.",
    image: "/imagenes/laflor.jpg",
    respuestas: null
},
{
    titulo: "¿Qué quiere decir el principito con esa frase?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "25%",
      left: "27%",
      width: "12%"},
    respuestas: [
        { texto: "Que él no tenía la madurez emocional para comprender a su flor", correcta: true },
        { texto: "Que se siente herido por las palabras de la flor", correcta: false },
        { texto: "Que se siente arrepentido por huir de su planeta a causa de la flor", correcta: false },
        { texto: "Que su rosa lo perfumaba e iluminaba", correcta: false }]
      }
    ],
  4:[{
    titulo:"La despedida" ,
    subtitle: "El principito arrancó también, con un poco de melancolía, los últimos "+
              "brotes de baobabs. Creía que no iba a volver jamás. Pero todos estos "+
              "trabajos cotidianos le parecieron extremadamente agradables esa mañana. "+
              "Y cuando regó por última vez la flor, y se dispuso a ponerla al abrigo "+
              "de su globo, descubrió que tenía deseos de llorar.",
    image: "/imagenes/deshollinar.jpg",
    respuestas: null
},
{
    titulo: "¿Por qué el principito tenía ganas de llorar?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "25%",
      left: "27%",
      width: "12%"},
    respuestas: [
        { texto: "Porque ya quería irse", correcta: false },
        { texto: "Porque estaba despidiéndose de todo lo que amaba", correcta: true },
        { texto: "Porque no quería hacer sus trabajos cotidianos", correcta: false },
        { texto: "Porque se sentía triste", correcta: false }]
      }
    ],
  5:[{
    titulo: "El farolero" ,
    subtitle: "'Tal vez este hombre es absurdo. Sin embargo, es menos absurdo que el "+
              "rey, que el vanidoso, que el hombre de negocios y que el bebedor. Por "+
              "lo menos su trabajo tiene sentido. Cuando enciende el farol es como si "+
              "hiciera nacer una estrella más, o una flor. Cuando apaga el farol, hace "+
              "dormir a la flor o a la estrella. Es una ocupación muy linda. Es verdaderamente "+
              "útil porque es linda'.",
    image: "/imagenes/Transparent.png",
    respuestas: null
},
{
    titulo: "¿Por qué le parece linda esta ocupación al principito?",
    subtitle: null,
    image: "/imagenes/farolero.jpg",
    imagenEstilo: {
      top: "32%",
      left: "26%",
      width: "16%"},
    respuestas: [
          { texto: "Porque no es egoísta", correcta: true },
          { texto: "Porque le parece una actividad divertida", correcta: false },
          { texto: "Porque es absurda", correcta: false},
          { texto: "Porque hace nacer estrellas y flores", correcta: false }]
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
    window.location.href = `dificil_lectura_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();