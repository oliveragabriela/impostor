/* =========================
   Impostor 🇦🇷 — 1 dispositivo
   - Carta que se da vuelta
   - 50 palabras/categorías/pistas (AR)
   ========================= */

const WORDS = [
  { category: "Comida", word: "Asado", clue: "Parrilla, tira de asado, domingo en familia" },
  { category: "Comida", word: "Milanesa", clue: "Rebozado crocante, con limón arriba" },
  { category: "Comida", word: "Choripán", clue: "Pan + chori, típico de la cancha o la costanera" },
  { category: "Comida", word: "Empanadas", clue: "Relleno adentro, se comen de a varias" },
  { category: "Comida", word: "Fugazzeta", clue: "Pizza con mucha cebolla y queso" },
  { category: "Comida", word: "Provoleta", clue: "Queso a la parrilla, se comparte" },
  { category: "Comida", word: "Dulce de leche", clue: "Crema marrón dulce, infaltable en postres" },
  { category: "Comida", word: "Facturas", clue: "Panadería, mate y algo dulce" },
  { category: "Comida", word: "Alfajor", clue: "Dos tapas, relleno, a veces bañado" },
  { category: "Bebida", word: "Mate", clue: "Infusión amarga, bombilla y termo" },
  { category: "Bebida", word: "Fernet con Coca", clue: "Trago negro, mucho hielo, clásico cordobés" },
  { category: "Bebida", word: "Gaseosa", clue: "Bebida con burbujas, se toma fría" },
  { category: "Lugar", word: "Obelisco", clue: "Monumento en el centro porteño, punto de festejos" },
  { category: "Lugar", word: "Plaza", clue: "Juegos, hamacas, matecito al sol" },
  { category: "Lugar", word: "Kiosco", clue: "Golosas, puchos, carga SUBE" },
  { category: "Lugar", word: "Costanera", clue: "Río cerca, paseo, choripán y bici" },
  { category: "Lugar", word: "Cancha", clue: "Tribuna, hinchada, partido" },
  { category: "Lugar", word: "Barrio", clue: "Cuadras, vecinos, almacén cerca" },
  { category: "Transporte", word: "Bondi", clue: "Colectivo, SUBE, va por la avenida" },
  { category: "Transporte", word: "Subte", clue: "Líneas con letras, bajo tierra" },
  { category: "Transporte", word: "Remis", clue: "Auto con chofer, se pide para volver tarde" },
  { category: "Transporte", word: "Bici", clue: "Pedales, casco (a veces), ciclovía" },
  { category: "Objeto", word: "Termo", clue: "Mantiene el agua caliente, va con el mate" },
  { category: "Objeto", word: "Bombilla", clue: "Tubito metálico para tomar la infusión" },
  { category: "Objeto", word: "Parrilla", clue: "Hierros, brasas, humo rico" },
  { category: "Objeto", word: "Pelota", clue: "Se patea, rebota, se usa en partidos" },
  { category: "Objeto", word: "Aire acondicionado", clue: "Verano pesado, lo prendés a full" },
  { category: "Actividad", word: "Siesta", clue: "Después de comer, te tirás un rato" },
  { category: "Actividad", word: "Picada", clue: "Queso, salame, aceitunas, previa" },
  { category: "Actividad", word: "Camping", clue: "Carpa, fogón, repelente" },
  { category: "Actividad", word: "Feriado", clue: "No se labura, finde largo ideal" },
  { category: "Cultura", word: "Cumbia", clue: "Baile, ritmo popular, fiesta" },
  { category: "Cultura", word: "Rock nacional", clue: "Bandas argentinas, clásicos que todos cantan" },
  { category: "Cultura", word: "Tango", clue: "Baile de abrazo, bandoneón" },
  { category: "Cultura", word: "Murga", clue: "Bombos, desfile, carnaval" },
  { category: "Fútbol", word: "Hincha", clue: "Alienta, grita, se pone la camiseta" },
  { category: "Fútbol", word: "Arco", clue: "Donde se hacen los goles" },
  { category: "Fútbol", word: "Penal", clue: "Mano a mano, desde los 12 pasos" },
  { category: "Fútbol", word: "Offside", clue: "Posición adelantada, se cobra con línea" },
  { category: "Persona/Trabajo", word: "Parrillero", clue: "El que controla las brasas y la carne" },
  { category: "Persona/Trabajo", word: "Panadero", clue: "Madruga, hace facturas y pan" },
  { category: "Persona/Trabajo", word: "Mozo", clue: "Te trae la carta, la comida y la cuenta" },
  { category: "Tecnología", word: "WhatsApp", clue: "Mensajitos, audios largos, grupos" },
  { category: "Tecnología", word: "Mercado Pago", clue: "QR, transferencias, 'te paso la plata'" },
  { category: "Hogar", word: "Parrilla eléctrica", clue: "Alternativa cuando no hay carbón" },
  { category: "Hogar", word: "Ventilador", clue: "Aspas, zumbido, verano sin aire" },
  { category: "Ciudad", word: "Avenida", clue: "Muchos carriles, semáforos, ruido" },
  { category: "Ciudad", word: "Peatonal", clue: "Calle para caminar, negocios y gente" },
  { category: "Comercio", word: "Verdulería", clue: "Frutas y verduras, te arma la bolsita" },
  { category: "Comercio", word: "Carnicería", clue: "Cortes, vacío, entraña, '¿cuánto te pongo?'" },
  { category: "Comercio", word: "Panadería", clue: "Olor a medialunas, facturas, pan caliente" },
  { category: "Argentinismos", word: "Che", clue: "Muletilla para llamar o arrancar una frase" }
];

// ===== Elementos =====
const screenSetup = document.getElementById("screen-setup");
const screenGame = document.getElementById("screen-game");
const screenSummary = document.getElementById("screen-summary");

const playerCountEl = document.getElementById("playerCount");
const impostorCountEl = document.getElementById("impostorCount");

const btnMakePlayers = document.getElementById("btnMakePlayers");
const btnQuickFill = document.getElementById("btnQuickFill");
const btnStart = document.getElementById("btnStart");

const btnNewRound = document.getElementById("btnNewRound");
const btnEnd = document.getElementById("btnEnd");
const btnBackSetup = document.getElementById("btnBackSetup");
const btnPlayAgain = document.getElementById("btnPlayAgain");

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
const cardFrontTitle = document.getElementById("cardFrontTitle");
const btnFlipToBack = document.getElementById("btnFlipToBack");
const btnFlipToFront = document.getElementById("btnFlipToFront");
const btnNextTurn = document.getElementById("btnNextTurn");

// ===== Estado =====
let players = [];             // [{name}]
let turnIndex = 0;            // 0..n-1
let chosen = null;            // {category, word, clue}
let impostorIdxs = new Set(); // indices impostores

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
      <input type="text" placeholder="Nombre del jugador ${i+1}" data-idx="${i}" />
    `;
    namesWrap.appendChild(div);
  }
  validateNames();
}

function quickFill(){
  const inputs = namesWrap.querySelectorAll("input");
  inputs.forEach((inp, i) => inp.value = `Jugador ${i+1}`);
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
  flipCard.classList.remove("is-flipped");
}

function showTurn(){
  const n = players.length;
  const p = players[turnIndex];

  turnName.textContent = p.name;
  turnCounter.textContent = `${turnIndex + 1} / ${n}`;

  // Frente
  cardFrontTitle.textContent = `Turno de ${p.name}`;

  // Dorso
  const isImpostor = impostorIdxs.has(turnIndex);
  showCategory.textContent = chosen.category;

  if (isImpostor){
    rolePill.textContent = "IMPOSTOR";
    rolePill.classList.remove("ok");
    rolePill.classList.add("bad");
    wordOrClueLabel.textContent = "Pista";
    showWordOrClue.textContent = chosen.clue;
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

function startGame(){
  const inputs = [...namesWrap.querySelectorAll("input")];
  players = inputs.map(i => ({ name: i.value.trim() || "Jugador" }));

  const nPlayers = players.length;
  const nImpostors = Number(impostorCountEl.value);

  chosen = pickRandomWord();
  impostorIdxs = pickImpostors(nPlayers, nImpostors);

  turnIndex = 0;

  screenSetup.classList.add("hidden");
  screenSummary.classList.add("hidden");
  screenGame.classList.remove("hidden");

  roundTitle.textContent = "Ronda lista";
  showTurn();
}

function nextTurn(){
  resetCardToFront();

  turnIndex++;
  if (turnIndex >= players.length){
    showSummary();
    return;
  }
  showTurn();
}

function showSummary(){
  screenGame.classList.add("hidden");
  screenSummary.classList.remove("hidden");

  sumCategory.textContent = chosen.category;
  sumWord.textContent = chosen.word;

  const impostorNames = [...impostorIdxs].map(i => players[i]?.name).filter(Boolean);
  sumImpostors.textContent = impostorNames.length ? impostorNames.join(", ") : "—";
}

function backToSetup(){
  screenGame.classList.add("hidden");
  screenSummary.classList.add("hidden");
  screenSetup.classList.remove("hidden");
  resetCardToFront();
}

// ===== Listeners =====
btnMakePlayers.addEventListener("click", buildNameInputs);
btnQuickFill.addEventListener("click", quickFill);

namesWrap.addEventListener("input", (e) => {
  if (e.target && e.target.matches("input")) validateNames();
});

playerCountEl.addEventListener("change", () => {
  buildNameInputs();
});

btnStart.addEventListener("click", startGame);

btnNewRound.addEventListener("click", () => {
  if (!players.length) return;

  const nPlayers = players.length;
  const nImpostors = Number(impostorCountEl.value);

  chosen = pickRandomWord();
  impostorIdxs = pickImpostors(nPlayers, nImpostors);
  turnIndex = 0;

  screenSummary.classList.add("hidden");
  screenSetup.classList.add("hidden");
  screenGame.classList.remove("hidden");

  roundTitle.textContent = "Nueva ronda";
  showTurn();
});

btnEnd.addEventListener("click", showSummary);
btnBackSetup.addEventListener("click", backToSetup);

btnPlayAgain.addEventListener("click", () => {
  if (!players.length){
    backToSetup();
    return;
  }
  const nPlayers = players.length;
  const nImpostors = Number(impostorCountEl.value);

  chosen = pickRandomWord();
  impostorIdxs = pickImpostors(nPlayers, nImpostors);
  turnIndex = 0;

  screenSummary.classList.add("hidden");
  screenGame.classList.remove("hidden");
  roundTitle.textContent = "Otra ronda";
  showTurn();
});

// Flip
btnFlipToBack.addEventListener("click", () => {
  flipCard.classList.add("is-flipped");
});

btnFlipToFront.addEventListener("click", () => {
  resetCardToFront();
});

btnNextTurn.addEventListener("click", nextTurn);

// Inicial
buildNameInputs();
