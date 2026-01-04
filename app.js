/* =========================
   Impostor 🇦🇷 — 1 dispositivo
   - Carta que se da vuelta
   - 100 palabras/categorías/pistas (AR)
   - Dificultad de pista (solo impostor)
     * Fácil: pista original
     * Media: SIN pista
     * Difícil: 1 palabra (tag)
   - Toggle: impostor ve categoría (sí/no)
   - Al final: pantalla "Listo" + quién arranca aleatorio + botón revelar resultado
   ========================= */

const WORDS = [
  // ===== Comida / bebida (pistas sutiles) =====
  { category: "Comida", word: "Asado", clue: "Plan típico de finde; suele arrancar con una pregunta: ¿a qué hora?" },
  { category: "Comida", word: "Milanesa", clue: "Clásico que admite debate eterno sobre acompañamiento" },
  { category: "Comida", word: "Choripán", clue: "Se come sin mucha ceremonia; suele venir con algo “arriba”" },
  { category: "Comida", word: "Empanadas", clue: "Formato individual; hay una discusión clásica sobre cómo cerrarlas" },
  { category: "Comida", word: "Fugazzeta", clue: "Una versión que se siente más “pesada” y perfumada" },
  { category: "Comida", word: "Provoleta", clue: "Aparece al principio, antes de lo fuerte" },
  { category: "Comida", word: "Dulce de leche", clue: "Ingrediente que mejora cosas simples con una cucharada" },
  { category: "Comida", word: "Facturas", clue: "Se eligen con la vista; generalmente se comparten" },
  { category: "Comida", word: "Alfajor", clue: "Objeto de comparación entre marcas, sabores y “top 3” personales" },
  { category: "Comida", word: "Medialunas", clue: "Se compran por docena; el adjetivo cambia todo" },
  { category: "Comida", word: "Ñoquis", clue: "Una fecha del mes lo volvió tradición" },
  { category: "Comida", word: "Pizza al molde", clue: "Más alta; se siente más ‘panificada’" },
  { category: "Comida", word: "Pizza a la piedra", clue: "Más fina; suele salir más rápido" },
  { category: "Comida", word: "Sorrentinos", clue: "Pasta rellena que “parece grande” incluso antes de servir" },
  { category: "Comida", word: "Ravioles", clue: "Pasta que muchos compran, pero algunos defienden hacerla" },
  { category: "Comida", word: "Humita", clue: "Sabor dulce/salado; aparece fuerte en el norte" },
  { category: "Comida", word: "Locro", clue: "Plato de fechas patrias; olla grande" },
  { category: "Comida", word: "Chipa", clue: "Textura particular; te salva una merienda" },
  { category: "Comida", word: "Mollejas", clue: "Corte que genera amor/odio; muy de parrilla" },
  { category: "Comida", word: "Vitel toné", clue: "Plato que “sale” en cierta época del año" },
  { category: "Comida", word: "Matambre a la pizza", clue: "Nombre que parece mezclar dos cosas sin pedir permiso" },
  { category: "Comida", word: "Tarta", clue: "Solución rápida; admite lo que haya en la heladera" },

  { category: "Bebida", word: "Mate", clue: "Ritual social; el orden importa" },
  { category: "Bebida", word: "Tereré", clue: "Versión fría; se asocia con calor y otro ritmo" },
  { category: "Bebida", word: "Fernet con Coca", clue: "La proporción es tema sensible" },
  { category: "Bebida", word: "Cerveza", clue: "Se discute temperatura y “espuma ideal”" },
  { category: "Bebida", word: "Vino", clue: "Etiqueta, copa y comentarios que nadie verifica" },
  { category: "Bebida", word: "Gaseosa", clue: "Se elige por marca; suele aparecer con hielo" },
  { category: "Bebida", word: "Agua saborizada", clue: "Parece liviana; suele estar en heladeras familiares" },

  // ===== Lugares / ciudad =====
  { category: "Lugar", word: "Obelisco", clue: "Referencia de punto de encuentro y festejos" },
  { category: "Lugar", word: "Plaza", clue: "Lugar de pausa; bancos, sombra o juegos" },
  { category: "Lugar", word: "Kiosco", clue: "Compra rápida; siempre tiene ‘eso’ que faltaba" },
  { category: "Lugar", word: "Costanera", clue: "Cerca de agua; mezcla paseo y comida al paso" },
  { category: "Lugar", word: "Cancha", clue: "Día especial; se llega con expectativa" },
  { category: "Lugar", word: "Barrio", clue: "Identidad; se nombra con orgullo o con ‘ojo con…’" },
  { category: "Ciudad", word: "Avenida", clue: "Tránsito y semáforos; suele tener colectivos y apuro" },
  { category: "Ciudad", word: "Peatonal", clue: "Caminar manda; negocios y gente" },
  { category: "Lugar", word: "Estación", clue: "Horarios, apuro y un sonido característico" },
  { category: "Lugar", word: "Chango (super)", clue: "Elemento que define cuánto vas a tardar" },
  { category: "Lugar", word: "Verdulería", clue: "Bolsa que pesa más de lo que parece" },
  { category: "Lugar", word: "Carnicería", clue: "Pregunta clásica: ¿para hoy o para freezer?" },
  { category: "Lugar", word: "Panadería", clue: "El olor te gana; entrás por una cosa y salís con tres" },
  { category: "Lugar", word: "Rotisería", clue: "Te salva un día sin ganas de cocinar" },
  { category: "Lugar", word: "Feria", clue: "Paseo con puestos; regateo suave" },

  // ===== Transporte =====
  { category: "Transporte", word: "Bondi", clue: "Tarjeta, espera y mirar la app" },
  { category: "Transporte", word: "Subte", clue: "Líneas con letras; escalera y andén" },
  { category: "Transporte", word: "Remis", clue: "Se pide por mensaje o llamada; vuelta a casa" },
  { category: "Transporte", word: "Uber", clue: "Se confirma patente antes de subir" },
  { category: "Transporte", word: "Taxi", clue: "Color reconocible; a veces charla inevitable" },
  { category: "Transporte", word: "Bici", clue: "Ciclovía y un ‘mejor por acá’" },

  // ===== Objetos / hogar =====
  { category: "Objeto", word: "Termo", clue: "Siempre aparece cuando hay una ‘ronda’" },
  { category: "Objeto", word: "Bombilla", clue: "Se nota cuando falta; metal y cuidado" },
  { category: "Objeto", word: "Parrilla", clue: "Lugar de control; calor y paciencia" },
  { category: "Objeto", word: "Pelota", clue: "Puede ser excusa de reunión" },
  { category: "Hogar", word: "Ventilador", clue: "El sonido de fondo del verano" },
  { category: "Hogar", word: "Aire acondicionado", clue: "Se discute el número ideal sin llegar a acuerdo" },
  { category: "Hogar", word: "Sillón", clue: "Lugar que ‘se gana’; disputa silenciosa" },
  { category: "Hogar", word: "Heladera", clue: "La abrís sin saber qué querés" },
  { category: "Hogar", word: "Freezer", clue: "Planificación: hoy no, pero mañana sí" },
  { category: "Hogar", word: "Pava eléctrica", clue: "Atajo moderno para una costumbre vieja" },

  // ===== Cultura / ocio =====
  { category: "Cultura", word: "Cumbia", clue: "Ritmo de fiesta; se reconoce al toque" },
  { category: "Cultura", word: "Rock nacional", clue: "Tema que alguien canta aunque se sepa solo el estribillo" },
  { category: "Cultura", word: "Tango", clue: "Una estética completa, no solo música" },
  { category: "Cultura", word: "Murga", clue: "Percusión y calle; clima de carnaval" },
  { category: "Ocio", word: "Asadito", clue: "Versión ‘chica’ que igual termina en sobremesa" },
  { category: "Ocio", word: "Picada", clue: "Previo que a veces se convierte en cena" },
  { category: "Ocio", word: "Camping", clue: "Se arma y se desarma; el clima manda" },
  { category: "Ocio", word: "Pileta", clue: "Plan de calor; protector y toalla" },
  { category: "Ocio", word: "Playa", clue: "Sombrilla, arena y algo que se pierde fácil" },
  { category: "Ocio", word: "Truco", clue: "Juego de señas; la palabra importa" },
  { category: "Ocio", word: "Uno", clue: "Cartas, colores y una regla que cada casa cambia" },
  { category: "Ocio", word: "Feriado", clue: "Cuando el calendario te regala un respiro" },

  // ===== Fútbol =====
  { category: "Fútbol", word: "Hincha", clue: "Se emociona rápido; canta aunque vaya perdiendo" },
  { category: "Fútbol", word: "Arco", clue: "Dos palos; el lugar más defendido" },
  { category: "Fútbol", word: "Penal", clue: "Silencio, tensión y alguien que no mira" },
  { category: "Fútbol", word: "Offside", clue: "Se discute más de lo que se entiende" },
  { category: "Fútbol", word: "VAR", clue: "Pantalla, pausa y protestas" },
  { category: "Fútbol", word: "Tribuna", clue: "Donde se vive el partido a otro volumen" },

  // ===== Tecnología / apps =====
  { category: "Tecnología", word: "WhatsApp", clue: "Grupos, audios y el ‘ya llego’" },
  { category: "Tecnología", word: "Mercado Pago", clue: "Código en pantalla; ‘te mando el comprobante’" },
  { category: "Tecnología", word: "QR", clue: "Cuadradito que resuelve pagos sin efectivo" },
  { category: "Tecnología", word: "Streaming", clue: "Elegís algo 20 minutos y mirás 10" },
  { category: "Tecnología", word: "Wi-Fi", clue: "Pregunta recurrente cuando llegás a una casa" },

  // ===== Argentinismos / frases =====
  { category: "Argentinismos", word: "Che", clue: "Arranca conversaciones sin pedir permiso" },
  { category: "Argentinismos", word: "Dale", clue: "Sirve para aceptar, apurar o cerrar" },
  { category: "Argentinismos", word: "Boludo", clue: "Depende el tono, depende todo" },
  { category: "Argentinismos", word: "Quilombo", clue: "Cuando algo se desordena en serio" },
  { category: "Argentinismos", word: "Laburo", clue: "Parte importante del día; también excusa" },
  { category: "Argentinismos", word: "Guita", clue: "Tema sensible, siempre presente" },
  { category: "Argentinismos", word: "Mango", clue: "Unidad informal; aparece en conversaciones de precios" },
  { category: "Argentinismos", word: "Bondi (palabra)", clue: "No es el objeto en sí: es cómo lo nombrás" },

  // ===== Cosas cotidianas =====
  { category: "Cotidiano", word: "Fila", clue: "Tiempo muerto con resignación" },
  { category: "Cotidiano", word: "Propina", clue: "Decisión rápida antes de irse" },
  { category: "Cotidiano", word: "Cuenta", clue: "Momento en el que todos miran para otro lado" },
  { category: "Cotidiano", word: "Cambio", clue: "Si aparece, se festeja" },
  { category: "Cotidiano", word: "Descuento", clue: "Palabra que mejora el humor" },
  { category: "Cotidiano", word: "Reclamo", clue: "Se hace con paciencia… o no" },

  // ===== Más comida =====
  { category: "Comida", word: "Morcilla", clue: "En parrilla, algunos la eligen primero" },
  { category: "Comida", word: "Chinchulín", clue: "Textura particular; requiere su punto" },
  { category: "Comida", word: "Vacío", clue: "Corte popular; se espera con hambre" },
  { category: "Comida", word: "Entraña", clue: "Corte que se termina rápido si nadie avisa" },
  { category: "Comida", word: "Chimichurri", clue: "Acompañamiento verde; cada casa tiene su receta" },
  { category: "Comida", word: "Salsa criolla", clue: "Fresca y con corte chico; acompaña sin dominar" },
  { category: "Comida", word: "Polenta", clue: "Textura cremosa; plato de invierno en muchas casas" },
  { category: "Comida", word: "Guiso", clue: "Olla, cucharón y ‘rinde un montón’" },
  { category: "Comida", word: "Hamburguesa", clue: "Clásico que se personaliza con ‘lo de siempre’" },
  { category: "Comida", word: "Sandwich de miga", clue: "Fiesta, cumpleaños o reunión; viene en bandeja" },
  { category: "Comida", word: "Tostado", clue: "Atajo de bar; dos capas y apuro" },
  { category: "Comida", word: "Panqueques", clue: "Postre que admite relleno a elección" },

  // ===== Más lugares / viajes =====
  { category: "Lugar", word: "Ruta", clue: "Mate, música y paradas calculadas" },
  { category: "Lugar", word: "Terminal", clue: "Valijas, esperas y anuncios" },
  { category: "Lugar", word: "Parador", clue: "Frena el viaje; se compra algo rápido" },
  { category: "Lugar", word: "Estadio", clue: "Más grande que una cancha de barrio; evento masivo" },

  // ===== Personas / trabajo =====
  { category: "Persona/Trabajo", word: "Mozo", clue: "Intermediario entre tu decisión y el plato" },
  { category: "Persona/Trabajo", word: "Repartidor", clue: "Llega con bolsa; el timbre avisa" },
  { category: "Persona/Trabajo", word: "Cajero", clue: "Pregunta final: ¿débito o crédito?" }
];

// ===== Elementos =====
const screenSetup   = document.getElementById("screen-setup");
const screenGame    = document.getElementById("screen-game");
const screenReveal  = document.getElementById("screen-reveal");
const screenSummary = document.getElementById("screen-summary");

const playerCountEl = document.getElementById("playerCount");
const impostorCountEl = document.getElementById("impostorCount");
const clueDifficultyEl = document.getElementById("clueDifficulty");
const impostorSeesCategoryEl = document.getElementById("impostorSeesCategory");

const btnMakePlayers = document.getElementById("btnMakePlayers");
const btnQuickFill = document.getElementById("btnQuickFill");
const btnStart = document.getElementById("btnStart");

const btnNewRound = document.getElementById("btnNewRound");
const btnBackSetup = document.getElementById("btnBackSetup");

const btnRevealResult = document.getElementById("btnRevealResult");
const starterNameEl = document.getElementById("starterName");

const btnPlayAgain = document.getElementById("btnPlayAgain");
const btnBackSetup2 = document.getElementById("btnBackSetup2");

const namesWrap = document.getElementById("namesWrap");

const roundTitle = document.getElementById("roundTitle");
const turnName = document.getElementById("turnName");
const turnCounter = document.getElementById("turnCounter");
const roundHint = document.getElementById("roundHint");

const rolePill = document.getElementById("rolePill");
const showCategory = document.getElementById("showCategory");
const wordOrClueLabel = document.getElementById("wordOrClueLabel");
const showWordOrClue = document.getElementById("showWordOrClue");

const sumCategory = document.getElementById("sumCategory");
const sumWord = document.getElementById("sumWord");
const sumImpostors = document.getElementById("sumImpostors");

// Flip card
const flipCard = document.getElementById("flipCard");
const flipInner = flipCard ? flipCard.querySelector(".flip-inner") : null;

const cardFrontTitle = document.getElementById("cardFrontTitle");
const btnFlipToBack = document.getElementById("btnFlipToBack");
const btnFlipToFront = document.getElementById("btnFlipToFront");
const btnNextTurn = document.getElementById("btnNextTurn");


// ===== Estado =====
let players = [];             // [{name}]
let turnIndex = 0;
let chosen = null;            // {category, word, clue}
let impostorIdxs = new Set();

let clueDifficulty = "easy";
let impostorSeesCategory = true;
let starterIndex = 0;

// ===== Tags para modo Difícil (1 palabra) =====
const WORD_TAGS = {
  "Asado":"brasas","Milanesa":"limón","Choripán":"cancha","Empanadas":"repulgue","Fugazzeta":"cebolla","Provoleta":"parrilla",
  "Dulce de leche":"cucharada","Facturas":"panadería","Alfajor":"baño","Medialunas":"docena","Ñoquis":"29","Pizza al molde":"alta",
  "Pizza a la piedra":"fina","Sorrentinos":"grandes","Ravioles":"relleno","Humita":"choclo","Locro":"olla","Chipa":"queso",
  "Mollejas":"parrilla","Vitel toné":"navidad","Matambre a la pizza":"mixto","Tarta":"heladera",

  "Mate":"ronda","Tereré":"frío","Fernet con Coca":"hielo","Cerveza":"espuma","Vino":"copa","Gaseosa":"burbujas","Agua saborizada":"heladera",

  "Obelisco":"festejo","Plaza":"bancos","Kiosco":"suelto","Costanera":"paseo","Cancha":"tribuna","Barrio":"vecinos","Avenida":"semáforo",
  "Peatonal":"caminar","Estación":"andén","Chango (super)":"ruedas","Verdulería":"bolsa","Carnicería":"corte","Panadería":"olor",
  "Rotisería":"salvavidas","Feria":"puestos",

  "Bondi":"SUBE","Subte":"andén","Remis":"vuelta","Uber":"patente","Taxi":"parada","Bici":"ciclovía",

  "Termo":"caliente","Bombilla":"metal","Parrilla":"hierros","Pelota":"partido","Ventilador":"zumbido","Aire acondicionado":"grado",
  "Sillón":"lugar","Heladera":"abrís","Freezer":"reserva","Pava eléctrica":"atajo",

  "Cumbia":"fiesta","Rock nacional":"estribillo","Tango":"abrazo","Murga":"bombo","Asadito":"sobremesa","Picada":"previa","Camping":"carpa",
  "Pileta":"protector","Playa":"arena","Truco":"seña","Uno":"colores","Feriado":"largo",

  "Hincha":"canta","Arco":"palos","Penal":"tensión","Offside":"línea","VAR":"revisión","Tribuna":"ruido",

  "WhatsApp":"audios","Mercado Pago":"QR","QR":"cuadrado","Streaming":"catálogo","Wi-Fi":"clave",

  "Che":"llamar","Dale":"ok","Boludo":"tono","Quilombo":"lío","Laburo":"horario","Guita":"plata","Mango":"moneda","Bondi (palabra)":"lunfardo",

  "Fila":"espera","Propina":"porcentaje","Cuenta":"final","Cambio":"vuelto","Descuento":"promo","Reclamo":"ticket",

  "Morcilla":"oscura","Chinchulín":"croca","Vacío":"tira","Entraña":"rápida","Chimichurri":"verde","Salsa criolla":"picada","Polenta":"cremosa",
  "Guiso":"cucharón","Hamburguesa":"medallón","Sandwich de miga":"bandeja","Tostado":"bar","Panqueques":"relleno",

  "Ruta":"viaje","Terminal":"valijas","Parador":"parada","Estadio":"evento",
  "Mozo":"pedido","Repartidor":"timbre","Cajero":"pago"
};

function clampPlayers(n){
  n = Number(n);
  if (Number.isNaN(n)) return 3;
  return Math.max(3, Math.min(20, n));
}

function buildNameInputs(){
  const n = clampPlayers(playerCountEl.value);
  namesWrap.innerHTML = "";
  for (let i = 0; i < n; i++){
    const div = document.createElement("div");
    div.className = "name-item";
    div.innerHTML = `
      <div class="idx">${i+1}</div>
      <input type="text" placeholder="Nombre del jugador ${i+1}" />
    `;
    namesWrap.appendChild(div);
  }
  validateNames();
}

function quickFill(){
  [...namesWrap.querySelectorAll("input")].forEach((inp, i) => inp.value = `Jugador ${i+1}`);
  validateNames();
}

function validateNames(){
  const inputs = [...namesWrap.querySelectorAll("input")];
  const ok = inputs.length > 0 && inputs.every(i => i.value.trim().length > 0);
  btnStart.disabled = !ok;
}

function pickRandomWord(){
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function pickImpostors(nPlayers, nImpostors){
  const set = new Set();
  while (set.size < nImpostors){
    set.add(Math.floor(Math.random() * nPlayers));
  }
  return set;
}

function resetCardToFront(){
  if (flipInner) flipInner.classList.remove("is-flipped");
}

function getClueForDifficulty(item, difficulty){
  if (difficulty === "medium") {
    // “En el medio no de pistas”
    return "— (sin pista)";
  }
  if (difficulty === "hard") {
    return WORD_TAGS[item.word] || item.word.split(" ")[0].toLowerCase();
  }
  // easy
  return item.clue;
}

function goToScreen(which){
  // oculta todo
  screenSetup.classList.add("hidden");
  screenGame.classList.add("hidden");
  screenReveal.classList.add("hidden");
  screenSummary.classList.add("hidden");

  // muestra uno
  which.classList.remove("hidden");
}

function showTurn(){
  const n = players.length;
  const p = players[turnIndex];

  turnName.textContent = p.name;
  turnCounter.textContent = `${turnIndex + 1} / ${n}`;
  cardFrontTitle.textContent = `Turno de ${p.name}`;

  const isImpostor = impostorIdxs.has(turnIndex);

  // Categoría: el impostor puede verla o no según toggle
  if (isImpostor && !impostorSeesCategory){
    showCategory.textContent = "Oculta";
  } else {
    showCategory.textContent = chosen.category;
  }

  if (isImpostor){
    rolePill.textContent = "IMPOSTOR";
    rolePill.classList.remove("ok");
    rolePill.classList.add("bad");
    wordOrClueLabel.textContent = "Pista";
    showWordOrClue.textContent = getClueForDifficulty(chosen, clueDifficulty);
  } else {
    rolePill.textContent = "NO IMPOSTOR";
    rolePill.classList.remove("bad");
    rolePill.classList.add("ok");
    wordOrClueLabel.textContent = "Palabra";
    showWordOrClue.textContent = chosen.word;
  }

  resetCardToFront();
  roundHint.textContent = "Se sabe a quién le toca: pasale el dispositivo a esa persona y que dé vuelta la carta.";
}

function startRoundReusePlayers(){
  const nPlayers = players.length;
  const nImpostors = Number(impostorCountEl.value);

  // leer settings actuales
  clueDifficulty = clueDifficultyEl?.value || "easy";
  impostorSeesCategory = !!impostorSeesCategoryEl?.checked;

  chosen = pickRandomWord();
  impostorIdxs = pickImpostors(nPlayers, nImpostors);

  // Elegir quién arranca (aleatorio) para mostrar al final
  starterIndex = Math.floor(Math.random() * nPlayers);

  turnIndex = 0;
  roundTitle.textContent = "Ronda lista";
  goToScreen(screenGame);
  showTurn();
}

function startGame(){
  const inputs = [...namesWrap.querySelectorAll("input")];
  players = inputs.map(i => ({ name: i.value.trim() || "Jugador" }));
  startRoundReusePlayers();
}

function nextTurn(){
  resetCardToFront();

  turnIndex++;
  if (turnIndex >= players.length){
    // Terminó el pase de cartas: ir a pantalla intermedia
    const starterName = players[starterIndex]?.name || "—";
    starterNameEl.textContent = starterName;

    goToScreen(screenReveal);
    return;
  }
  showTurn();
}

function showSummary(){
  sumCategory.textContent = chosen.category;
  sumWord.textContent = chosen.word;

  const impostorNames = [...impostorIdxs].map(i => players[i]?.name).filter(Boolean);
  sumImpostors.textContent = impostorNames.length ? impostorNames.join(", ") : "—";

  goToScreen(screenSummary);
}

function backToSetup(){
  resetCardToFront();
  goToScreen(screenSetup);
}

// ===== Listeners =====
btnMakePlayers.addEventListener("click", buildNameInputs);
btnQuickFill.addEventListener("click", quickFill);

namesWrap.addEventListener("input", (e) => {
  if (e.target && e.target.matches("input")) validateNames();
});

playerCountEl.addEventListener("change", buildNameInputs);

btnStart.addEventListener("click", startGame);

btnNewRound.addEventListener("click", () => {
  if (!players.length) return;
  startRoundReusePlayers();
});

btnBackSetup.addEventListener("click", backToSetup);
btnBackSetup2.addEventListener("click", backToSetup);

btnPlayAgain.addEventListener("click", () => {
  if (!players.length){
    backToSetup();
    return;
  }
  startRoundReusePlayers();
});

// Flip
btnFlipToBack.addEventListener("click", () => {
  flipCard.classList.add("is-flipped");
});
btnFlipToFront.addEventListener("click", () => {
  resetCardToFront();
});
btnNextTurn.addEventListener("click", nextTurn);

// Reveal result
btnRevealResult.addEventListener("click", showSummary);

// Inicial
buildNameInputs();
