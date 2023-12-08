
var preguntas = [
      {
        pregunta: "1)¿Responde?",
        alternativas: ["a)¿Da un paseo y medita en las soluciones, y luego las discute?", "b)¿Piensa y escirbe todas las alternativas, las distribuye de acuerdo con las prioridades y pués escoge la mejor?", "c)¿recuerda experiencias pasadas que tuvieron éxito y las pone en practica?", "d)¿Aguarda a ver si la situación se arregla sola?"],
        puntaje: [7,1,3,9],
        multiple: false 
      },
      {
        pregunta: "2) Soñar despierto es",
        alternativas: ["a)Una perdida de tiempo", "b)Divertido y realajnte", "c)Una ayuda real para solucionar problemas y para el pensamiento creativo", "d)Una herramienta viable para planificar mi futuro"],
        puntaje: [1,5,7,9],
        multiple: false
      },
      {
        pregunta: "3) Mira rapidamente este dibujo ¿Estaba sonriendo la cara?",
        alternativas: ["a)Si", "b)No"],
        puntaje: [3,7],
        multiple: false
      },
      {
        pregunta: "4) Sobre las corazonadas:",
        alternativas: ["a)Las tengo con frecuencia y las sigo", "b)Tengo fuertes corazonadas pero no les doy mucha fe", "c)En ocasiones las tengo pero no les doy mucha importancia", "d)No dependeria de corazonadas para que me ayudaran a tomar decisiones importantes"],
        puntaje: [9, 7, 3, 1],
        multiple: false
      },
      {
        pregunta: "5) Al pensar en las actividades diarias, ¿qué es más tipico de su <<estilo>>?",
        alternativas: ["a)Redacto una lista de todas las cosas que necesito hacer, de gente que he de ver", "b)Imagino lugares a los que iré, la gente a la que veré", "c)Dejo que acontezcan", "d)Planifico la agenda del dia, estableciendo horas apropiadas para cada cosa o actividad"],
        puntaje: [1, 7, 9, 3],
        multiple: false
      },
      {
        pregunta: "6) ¿Por lo general tiene un lugar para todo, un sistema para hacer las cosas y habilidad para organizar la información y los materiales?",
        alternativas: ["a)Si", "b)No"],
        puntaje: [1, 9],
        multiple: false
      },
      {
        pregunta: "7) ¿Le gusta cambiar la distribución de sus muebles o modificar la decoración de su hogar o despacho con frecuencia?",
        alternativas: ["a)Si", "b)No"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "8) Por favor, maque las actividades con las que disfruta",
        alternativas: ["a)Natacion","b)Tenis","c)Golf","d)Acampada","e)Esqui","f)Pesca","g)Canto","h)Jardinería","i)Tocar un instrumento","j)Mejoras del hogar","k)Costura","l)Lectura","m)Artes/Oficios","n)Cocina","ñ)Fotografía","o)Hacer nada","p)Viajes","q)Ciclismo","r)Coleccionismo","s)Escritura","t)Ajedrez","v)Bridge","w)Ruleta","u)Charadas","x)Baile","y)Paseos","z)Correr","28)Abrazos","29)Besos","30)Tocas","31)Conversación","32)Debates"],
        puntaje: [9,4,4,7,7,8,3,5,4,3,3,3,5,5,3,9,5,8,1,2,2,2,7,5,7,8,8,9,9,9,4,2],
        multiple: true
      },
      {
        pregunta: "9) ¿Aprende mejor el atletismo y el baile:",
        alternativas: ["a)Imitando o acostumbrandose a la musica","b)Aprendiendo la secuencia y repitiendo los pasos mentalmente"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "10) ¿Cuando practica un deporte o actua en público lo hace a menudo mejor que lo que su formación y habilidades naturales garantizan?",
        alternativas: ["a)Si", "b)No"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "11) ¿Se expresa bien verbalmente?",
        alternativas: ["a)Si","b)No"],
        puntaje: [1, 7],
        multiple: false
      },
      {
        pregunta: "12) ¿Esta orientado hacia sus metas?",
        alternativas: ["a)Si","b)No"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "13) Cuando quiere recordar direcciones, un nombre o una noticia:",
        alternativas: ["a)¿Visualiza la información?","b)¿Escribe notas?","c)¿Lo varbaliza(se lo repite a si mismo o en voz alta)?","d)¿Lo asocia con informacion previa?"],
        puntaje: [9, 1, 3, 5],
        multiple: false
      },
      {
        pregunta: "14) ¿Recuerda las caras con facilidad?",
        alternativas: ["a)Si", "b)No"],
        puntaje: [7, 1],
        multiple: false
      },
      {
        pregunta: "15) Cuando usa el lenguaje:",
        alternativas: ["¿Inventa palabras?","¿Crea rimas e incorpora metaforas?","¿Elige términos exactos y precisos?"],
        puntaje: [9, 5, 1],
        multiple: false
      },
      {
        pregunta: "16) En una conversasción, se siente mas comodo como",
        alternativas: ["¿?Oyente","¿Hablante?"],
        puntaje: [6, 3],
        multiple: false
      },
      {
        pregunta: "17) Cuando en una reunión se le pide que improvise usted",
        alternativas: ["¿Prepara un rápido esbozo?","¿Directamente empieza a hablar?","¿taslada la atención a otra persona o habla lo menos que sea posible?","¿Habla despacio y con cuidado?"],
        puntaje: [1, 6, 9, 4],
        multiple: false
      },
      {
        pregunta: "18) En una discusión, tiende a:",
        alternativas: ["¿Hablar hasta establecer su punto?","¿Encuentra a una autoridad que apoye su punto de vista?","¿Simplemente se retrae?","¿Empuja la silla o la mesa,aporrea la mesa, habla más alto... grita?"],
        puntaje: [3, 1, 7, 9],
        multiple: false
      },
      {
        pregunta: "19) ¿Puede precisar con bastante exactitud cuánto tiempo ha pasado sin mirar su reloj?",
        alternativas: ["Si","No"],
        puntaje: [1, 9],
        multiple: false
      },
      {
        pregunta: "20) Prefieres acontecimientos sociales que:",
        alternativas: ["¿Están planeados con antelación?","¿Son espontáneos?"],
        puntaje: [1, 9],
        multiple: false
      },
      {
        pregunta: "21) Al prepararse para una tarea nueva o dificil:",
        alternativas: ["¿Se viasualiza consiguiendola de manera efectiva?","¿Recuarda éxitos pasados en situaciones similares?","¿Prepara datos exhastivos sobre dicha tarea?"],
        puntaje: [9, 5, 1],
        multiple: false
      },
      {
        pregunta: "22) Prefiere trabajar",
        alternativas: ["¿Solo?","¿O en grupo?"],
        puntaje: [3, 7],
        multiple: false
      },
      {
        pregunta: "23) Cuando se trata de <<saltarse las reglas>> o de alterar las politica de la compañia, ¿siente que:",
        alternativas: ["Las reglas y la politica de la empresa están para seguirlas?","El progreso surge del desafio o la estructura rígida?","Las reglas para que se las rompa?"],
        puntaje: [1, 5, 9],
        multiple: false
      },
      {
        pregunta: "24) En la escuela usted preferia:",
        alternativas: ["¿Algebra?", "Geometría"],
        puntaje: [1, 9],
        multiple: false
      },
      {
        pregunta: "25) ¿Cúal de estas posiciones de escritura se parece más a la suya:",
        alternativas: ["La posición diestra normal?","La posición diestra en gancho (los dedos apuntando hacia su pecho)?","La posición zurda noraml?","La posición zurda en gancho (los dedos apuntando hacia su pecho)?"],
        puntaje: [1, 7, 9, 3],
        multiple: false
      },
      {
        pregunta: "26) Cuando toma notas, saca copias:",
        alternativas: ["Nunca", "Con frecuencia"],
        puntaje: [1, 9],
        multiple: false
      },
      {
        pregunta: "27) Gesticula para:",
        alternativas: ["Enfatizar su punto de vista?","Expresar sus sentimientos?"],
        puntaje: [2, 8],
        multiple: false
      },
      {
        pregunta: "28) ¿Instintivamente siente que un tema es bueno o correcto, o decide sobre la base de la información?",
        alternativas: ["Siento","Decido"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "29) ¿Disfruta corriendo riesgos?",
        alternativas: ["Si","No"],
        puntaje: [7, 3],
        multiple: false
      },
      {
        pregunta: "30) Después de asistir a un musical, puede:",
        alternativas: ["Tararear muchas partes de la partitura?","Recordar muchas partes de la letras?"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "31) Por favor, sostenga un lápiz perpendicularmente al suelo con el brazo extendido, centrado en su linea de vision y alineado con un marco o puerta. Manteniendo esa posición, cierre el ojo izquierdo. ¿Dio la impresión de que el lapíz se movía?:",
        alternativas: ["Si", "No"],
        puntaje: [8, 2],
        multiple: false
      },
      {
        pregunta: "32) Siéntese en una psotura relajada y entrelace las manos cómodamente sobre el regazo.¿Qué pulgar está encima del otro?" ,
        alternativas: ["Izquierdo","Derecho","Paralelos"],
        puntaje: [1, 9, 3],
        multiple: false
      },

  
      {
        pregunta: "33) Maque las afirmaciones que considera correctas acerca de usted::",
        alternativas: ["Puedo entender los contratos, los manuales de instrucción y los documentos legales", "Prefiero trabajar siguiendo diagramas y planos","Visualizo con intensidad los personajes, el entorno y la trama de las novelas","Prefiero que los amigos llamen por teléfono con antelación","No me gusta charlar por teléfono","Me resulta satisfactorio planificar y arreglar los detalles de un viaje","Postergo realizar llamadas telefónicas","Me es fácil encontrar palabras en un diccionario y nombres en una guía telefónica","Me encantan los juegos de palabras","Tomo muchas notas en las reuniones y conferencias","Me paralizo cuando he de manejar cosas mecánicas si estoy sometido al estrés","Con frecuencia las ideas me surgen de la nada"],
        puntaje: [1, 7, 9, 2, 3, 4, 7, 1, 3, 1, 3, 9],
        multiple: true
      },
      {
        pregunta: "34) Tengo:",
        alternativas: ["Frecuentes cambios de estado de ánimo","Casi ningún cambio en los estado de ánimo"],
        puntaje: [9, 1],
        multiple: false
      },
      {
        pregunta: "35) Soy:",
        alternativas: ["No muy conciente del lenguaje corporal; prefiero escuchar lo que dice la gente.", "Bueno en interpretar el lenguaje corporal", "Bueno en enterder lo que dice la gente y también el lenguaje corporal que emplea"],
        puntaje: [1, 7, 5],
        multiple: false
      }
];

  var numeroDePregunta = 0; 
  var puntajeTotal = 0; 
 
  var preguntaElemento = document.getElementById("pregunta"); //Las preguntas
  var hemisferioResult = document.getElementById("hemisferio");
  // var altSelecionadas = document.querySelectorAll('input[type="checkbox"]:checked');
  var alternativasElemento = document.getElementById("alternativas");
  var btnSiguiente = document.getElementById("btnSiguiente");
  var rectaImagen = document.getElementById("rectaHemisferio");
  
 
  function mostrarPregunta() {
    var preguntaActual = preguntas[numeroDePregunta];
    preguntaElemento.textContent = preguntaActual.pregunta;
  
    alternativasElemento.innerHTML = "";

 
  for (var i = 0; i < preguntaActual.alternativas.length; i++) {
    var alternativa = preguntaActual.alternativas[i];
    var puntaje = preguntaActual.puntaje[i];
    
    var opcion = document.createElement("input");
    opcion.type = preguntaActual.multiple ? "checkbox" : "radio";
    opcion.name = "alternativa";
    opcion.value = puntaje;
    opcion.id = "alternativa" + i;
    
  
    var label = document.createElement("label");
    label.textContent = alternativa;
    label.setAttribute("for", "alternativa" + i);
  
    alternativasElemento.appendChild(opcion);
    alternativasElemento.appendChild(label);
    alternativasElemento.appendChild(document.createElement("br"));
  };

  let caraDeninno = document.getElementById("caraDeNinno");
  if (numeroDePregunta === 2) {
    caraDeninno.style.display = "block";
  } else {
    caraDeninno.style.display = "none";
  }
  
  
}
  


function procesarRespuesta() {
  var preguntaActual = preguntas[numeroDePregunta];
  var respuestasSeleccionadas = Array.from(document.querySelectorAll('input[name="alternativa"]:checked'));

  var puntajesRespuestas = [];
  for (var i = 0; i < respuestasSeleccionadas.length; i++) {
    var respuesta = respuestasSeleccionadas[i];
    puntajesRespuestas.push(parseInt(respuesta.value));
  }

  var puntajePregunta = 0;
  for (var i = 0; i < puntajesRespuestas.length; i++) {
    puntajePregunta += puntajesRespuestas[i];
  }

  puntajeTotal += puntajePregunta;
  numeroDePregunta++;

  if (numeroDePregunta < preguntas.length) {
    mostrarPregunta();
  } else {
    preguntaElemento.textContent = "Puntaje total: " + puntajeTotal;
    hemisferioResult.textContent = `Resultado de hemisferio: ${puntajeTotal / 35}`;
    rectaImagen.style.display = "block";
    alternativasElemento.style.display = "none";
    btnSiguiente.style.display = "none";
  }
}

btnSiguiente.addEventListener("click", procesarRespuesta);
mostrarPregunta();

  
// PARA PREGUNTA MULTIPLES FUNCIONA 
// function correrPregunta(){
//     //Seleccionar las preguntas marcadas
//     let preguntaActual = preguntas[numeroDePregunta];
//     let respuestasSeleccionadas = Array.from(document.querySelectorAll('input[name="alternativa"]:checked'));

//     //Arreglo de los puntajes
//     let puntajesRespuestas = [];
//     for(let i = 0; i < respuestasSeleccionadas.length; i++){
//         let respuesta = respuestasSeleccionadas[i];
//         puntajesRespuestas.push(parseInt(respuesta.value));
//     }
//     let puntajePregunta = 0;
//     for (let i = 0; i < respuestasSeleccionadas.length; i++){
//         puntajePregunta += puntajesRespuestas[i]; 
//     }
//     puntajeTotal += puntajePregunta;
//     numeroDePregunta++;
//     if (numeroDePregunta < preguntas.length) {
//         mostrarPregunta();
//     } else {
//         formPreguntas.textContent = "Puntaje total: " + puntajeTotal;
//         formAlternativas.style.display = "none";
//         btnSiguiente.style.display = "none";
//     }
// }
