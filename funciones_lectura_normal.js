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
    titulo:"Lee y responde las preguntas" ,
    subtitle: "Este asteroide ha sido visto solo una vez con el telescopio,"+
              " en 1909, por un astrónomo turco. El astrónomo hizo, entonces,"+
              " una gran demostración de su descubrimiento en un Congreso Internacional"+
              " de astronomía. Pero nadie le creyó por culpa de su vestido. "+
              "Las personas grandes son así.",
    image: "/imagenes/astronomo1.jpg",
    respuestas: null
},
{
    titulo: "¿Por qué no le creyeron al astrónomo turco?",
    subtitle: null,
    image: "/imagenes/questionMark.jpg",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
    respuestas: [
        { texto: "por su explicación", correcta: false },
        { texto: "por su demostración", correcta: false },
        { texto: "por su vestimenta", correcta: true },
        { texto: "porque son personas grandes", correcta: false }]
      }
    ],
  2: [{
    titulo:"Las personas grandes..." ,
    subtitle: "Las personas grandes aman las cifras. Cuando les hablaís de "+
              "un nuevo amigo, no os interrogan jamás sobre lo esencial. Jamás "+
              "os dicen: '¿Cómo es el timbre de su voz? ¿Cuáles son los juegos "+
              "que prefiere? ¿Colecciona mariposas?' En cambio, os preguntan: "+
              "'¿Qué edad tiene? ¿Cuántos hermanos tiene? ¿Cuánto gana su padre?'"+
              " Sólo entonces creen conocerle.",
    image: "/imagenes/Transparent.png",
    respuestas: null},
    {
    titulo: "¿Cómo es que las personas grandes creen conocer a las personas?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "30%",
      left: "28%",
      width: "20%"},
    respuestas: [
          { texto: "Por los juegos que le gustan", correcta: false },
          { texto: "Por las cifras", correcta: true },
          { texto: "Por la infomación esencial de la persona", correcta: false },
          { texto: "Por el timbre de su voz", correcta: false}]
          }
        ],
  3:[{
    titulo:"La existencia del principito" ,
    subtitle: "Si les decís: 'La prueba de que el principito existió es que era "+
              "encantador, que reía, y que quería un cordero. Querer un cordero "+
              "es prueba de que se existe', se encogerán de hombros y os tratarán "+
              "como se trata a un niño. Pero si les decís: 'El planeta de donde "+
              "venía es el asteroide B 612', entonces quedarán convencidos y os "+
              "dejarán tranquilo sin preguntaros más.",
    image: "/imagenes/b612.jpg",
    respuestas: null
},
{
    titulo: "¿Cómo es que las personas grandes creerán sobre la exisrencia del principito?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "42.5%",
      width: "14%"},
      respuestas: [
          { texto: "Porque el principito quería un cordero", correcta: false },
          { texto: "Porque el principito era encantador", correcta: false },
          { texto: "Porque el principito venía del asteroide B 612", correcta: true},
          { texto: "Porque el principito reía", correcta: false }]
            }
          ],
  4:[{
    titulo:"Retomando el dibujo..." ,
    subtitle: "Por eso he comprado una caja de colores y de lápices. "+
              "Es penoso retomar el dibujo, a mi edad, cuando no se "+
              "ha hecho más que tentativas que la de la boa cerrada "+
              "y la de la boa abierta, a la edad de seis años. Trataré, "+
              "por cierto, de hacer los retratos lo más parecidos posible. "+
              "Pero no estoy enteramente seguro de tener éxito.",
    image: "/imagenes/Transparent.png",
    respuestas: null
},
{
    titulo: "¿Por qué el protagonista no está seguro de tener éxito en sus dibujos?",
    subtitle: null,
    image: "/imagenes/Transparent.png",
    imagenEstilo: {
      top: "32%",
      left: "24%",
      width: "30%"},
    respuestas: [
          { texto: "Porque después de muchos años, retomará el dibujo", correcta: true },
          { texto: "Porque compró una caja de colores y lápices", correcta: false },
          { texto: "Porque es demasiado grande para dibujar", correcta: false },
          { texto: "Porque no sabe dibujar", correcta: false }]
              }
            ],
  5:[{
    titulo: "Los baobabs" ,
    subtitle: "Pero si se trata de una planta mala, debe arrancarse la planta inmediatamente, en "+
              "cuanto se ha podido reconocerla. Había, pues, semillas terribles en el planeta del "+
              "principito. Eran las semillas de los baobabs. El suelo del planeta estaba infestado. "+
              "Y si un baobab no se arranca a tiempo, ya no es posible desembarazarse de él. Invade "+
              "todo el planeta. Lo perfora con sus raíces. Y si el planeta es demasiado pequeño y si "+
              "los baobabs son demasiado numerosos, lo hacen estallar.",
    image: "/imagenes/Transparent.png",
    respuestas: null
},
{
    titulo: "¿Por qué el principito tenía que arrancar las raíces de los baobabs?",
    subtitle: null,
    image: "/imagenes/baobabs.jpg",
    imagenEstilo: {
      top: "32%",
      left: "26%",
      width: "20%"},
    respuestas: [
          { texto: "Porque no le gusta esa planta", correcta: false },
          { texto: "Porque las raíces no crecen", correcta: false },
          { texto: "Porque el planeta puede estallar", correcta: true},
          { texto: "Porque no hay muchos baobabs", correcta: false }]
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
    window.location.href = `normal_lectura_overworld.html?nivel=${nivelActual}`;
  });

  actualizarPantalla();