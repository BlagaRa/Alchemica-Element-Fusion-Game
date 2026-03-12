const ELEMENTS = [
  { symbol:"H",  name:"Hydrogen",   num:1,  mass:"1.008",  cat:"nonmetal",   emoji:"🌟" },
  { symbol:"He", name:"Helium",     num:2,  mass:"4.003",  cat:"noble",      emoji:"🎈" },
  { symbol:"Li", name:"Lithium",    num:3,  mass:"6.941",  cat:"alkali",     emoji:"🔋" },
  { symbol:"C",  name:"Carbon",     num:6,  mass:"12.011", cat:"nonmetal",   emoji:"💎" },
  { symbol:"N",  name:"Nitrogen",   num:7,  mass:"14.007", cat:"nonmetal",   emoji:"💨" },
  { symbol:"O",  name:"Oxygen",     num:8,  mass:"15.999", cat:"nonmetal",   emoji:"🫧" },
  { symbol:"F",  name:"Fluorine",   num:9,  mass:"18.998", cat:"halogen",    emoji:"🟢" },
  { symbol:"Na", name:"Sodium",     num:11, mass:"22.990", cat:"alkali",     emoji:"🧂" },
  { symbol:"Mg", name:"Magnesium",  num:12, mass:"24.305", cat:"metal",      emoji:"✨" },
  { symbol:"Al", name:"Aluminum",   num:13, mass:"26.982", cat:"metal",      emoji:"🥤" },
  { symbol:"Si", name:"Silicon",    num:14, mass:"28.086", cat:"nonmetal",   emoji:"💻" },
  { symbol:"P",  name:"Phosphorus", num:15, mass:"30.974", cat:"nonmetal",   emoji:"🔴" },
  { symbol:"S",  name:"Sulfur",     num:16, mass:"32.065", cat:"nonmetal",   emoji:"🌋" },
  { symbol:"Cl", name:"Chlorine",   num:17, mass:"35.453", cat:"halogen",    emoji:"🟡" },
  { symbol:"K",  name:"Potassium",  num:19, mass:"39.098", cat:"alkali",     emoji:"🍌" },
  { symbol:"Ca", name:"Calcium",    num:20, mass:"40.078", cat:"metal",      emoji:"🦷" },
  { symbol:"Fe", name:"Iron",       num:26, mass:"55.845", cat:"transition", emoji:"⚙️" },
  { symbol:"Cu", name:"Copper",     num:29, mass:"63.546", cat:"transition", emoji:"🪙" },
  { symbol:"Zn", name:"Zinc",       num:30, mass:"65.38",  cat:"transition", emoji:"🔩" },
  { symbol:"Br", name:"Bromine",    num:35, mass:"79.904", cat:"halogen",    emoji:"🟤" },
  { symbol:"Ag", name:"Silver",     num:47, mass:"107.87", cat:"transition", emoji:"🥈" },
  { symbol:"Au", name:"Gold",       num:79, mass:"196.97", cat:"transition", emoji:"🥇" },
  { symbol:"Hg", name:"Mercury",    num:80, mass:"200.59", cat:"transition", emoji:"🌡️" },
  { symbol:"Pb", name:"Lead",       num:82, mass:"207.2",  cat:"metal",      emoji:"🔲" },
];


// ── COMPOUND COMBINATIONS ─────────────────────
const COMBOS = {
  "H+O":   { name:"Water",              formula:"H₂O",   emoji:"💧", desc:"The molecule of life — essential for all known living organisms." },
  "Cl+H":  { name:"Hydrochloric Acid",  formula:"HCl",   emoji:"🧪", desc:"A strong acid found in stomach fluid that aids digestion." },
  "F+H":   { name:"Hydrofluoric Acid",  formula:"HF",    emoji:"☣️", desc:"An extremely corrosive acid that can dissolve glass." },
  "H+N":   { name:"Ammonia",            formula:"NH₃",   emoji:"💨", desc:"A pungent gas used in fertilizers and cleaning products." },
  "H+S":   { name:"Hydrogen Sulfide",   formula:"H₂S",   emoji:"🦨", desc:"The gas responsible for the rotten egg smell — toxic at high concentrations." },
  "Br+H":  { name:"Hydrobromic Acid",   formula:"HBr",   emoji:"🔴", desc:"A strong acid used in pharmaceuticals and flame retardants." },
  "C+O":   { name:"Carbon Dioxide",     formula:"CO₂",   emoji:"🌿", desc:"Plants breathe it in; we breathe it out. Key driver of the greenhouse effect." },
  "C+H":   { name:"Methane",            formula:"CH₄",   emoji:"🔥", desc:"The primary component of natural gas, used for heating and cooking." },
  "C+N":   { name:"Cyanide",            formula:"CN⁻",   emoji:"💀", desc:"A highly toxic ion infamous in history and detective fiction." },
  "C+S":   { name:"Carbon Disulfide",   formula:"CS₂",   emoji:"⚗️", desc:"A volatile solvent once used in making rayon and rubber." },
  "N+O":   { name:"Nitric Oxide",       formula:"NO",    emoji:"🫀", desc:"A signaling molecule in biology — key to heart and nervous system function." },
  "S+O":   { name:"Sulfur Dioxide",     formula:"SO₂",   emoji:"🏭", desc:"A volcanic gas and industrial byproduct that causes acid rain." },
  "Cl+Na": { name:"Table Salt",         formula:"NaCl",  emoji:"🧂", desc:"The most common seasoning on Earth — formed from two toxic elements!" },
  "Na+O":  { name:"Sodium Oxide",       formula:"Na₂O",  emoji:"🔆", desc:"A white solid that reacts violently with water to form lye." },
  "F+Na":  { name:"Sodium Fluoride",    formula:"NaF",   emoji:"🦷", desc:"The active ingredient in most toothpastes that fights cavities." },
  "Br+Na": { name:"Sodium Bromide",     formula:"NaBr",  emoji:"💊", desc:"A sedative used historically to treat epilepsy." },
  "Na+S":  { name:"Sodium Sulfide",     formula:"Na₂S",  emoji:"🧴", desc:"Used in paper manufacturing and leather processing." },
  "Ca+O":  { name:"Quicklime",          formula:"CaO",   emoji:"🏗️", desc:"Used in construction for centuries — the base of cement and mortar." },
  "Ca+Cl": { name:"Calcium Chloride",   formula:"CaCl₂", emoji:"❄️", desc:"An ice-melting salt spread on roads in winter." },
  "Ca+S":  { name:"Calcium Sulfate",    formula:"CaSO₄", emoji:"🏛️", desc:"Better known as gypsum — used to make plaster of Paris and drywall." },
  "C+Ca":  { name:"Calcium Carbide",    formula:"CaC₂",  emoji:"💡", desc:"Reacts with water to produce acetylene gas, used in welding torches." },
  "Fe+O":  { name:"Rust",               formula:"Fe₂O₃", emoji:"🦀", desc:"Iron oxide — the reddish-brown bane of engineers worldwide." },
  "Fe+S":  { name:"Iron Pyrite",        formula:"FeS₂",  emoji:"✨", desc:"Also called 'Fool's Gold' — tricked many a hopeful gold miner." },
  "Cl+Fe": { name:"Ferric Chloride",    formula:"FeCl₃", emoji:"🟫", desc:"An etching agent used in circuit board manufacturing." },
  "Cu+O":  { name:"Copper Oxide",       formula:"CuO",   emoji:"🟢", desc:"Gives the Statue of Liberty its green patina." },
  "Cu+S":  { name:"Copper Sulfide",     formula:"CuS",   emoji:"🪨", desc:"A natural mineral found in chalcopyrite ore deposits." },
  "Cl+Cu": { name:"Copper Chloride",    formula:"CuCl₂", emoji:"💚", desc:"Creates vivid blue-green flames when burned — used in pyrotechnics." },
  "O+Zn":  { name:"Zinc Oxide",         formula:"ZnO",   emoji:"☀️", desc:"The white stuff in sunscreen that physically blocks UV rays." },
  "S+Zn":  { name:"Zinc Sulfide",       formula:"ZnS",   emoji:"🌟", desc:"The compound that glows in the dark on watch dials." },
  "Ag+Cl": { name:"Silver Chloride",    formula:"AgCl",  emoji:"📷", desc:"Light-sensitive compound — the basis of traditional photography film." },
  "Ag+S":  { name:"Silver Sulfide",     formula:"Ag₂S",  emoji:"⬛", desc:"The black tarnish that forms on silver jewelry over time." },
  "Pb+S":  { name:"Lead Sulfide",       formula:"PbS",   emoji:"🔵", desc:"Also known as galena — the principal ore of lead, used since antiquity." },
  "O+Pb":  { name:"Red Lead",           formula:"Pb₃O₄", emoji:"🟥", desc:"A vivid red pigment used in paints — now known to be highly toxic." },
  "Au+Cl": { name:"Gold Chloride",      formula:"AuCl₃", emoji:"🟡", desc:"A yellow compound used in gold plating and as a photography toner." },
  "Hg+S":  { name:"Cinnabar",           formula:"HgS",   emoji:"❤️", desc:"A vivid red mineral — the principal ore of mercury, prized since antiquity." },
  "Hg+O":  { name:"Mercury Oxide",      formula:"HgO",   emoji:"🔴", desc:"Its decomposition experiment by Lavoisier helped discover oxygen." },
  "Cl+K":  { name:"Potassium Chloride", formula:"KCl",   emoji:"🌊", desc:"Used as a salt substitute and in sports drinks as an electrolyte." },
  "K+O":   { name:"Potassium Oxide",    formula:"K₂O",   emoji:"💥", desc:"Reacts explosively with water — used in research on reactive metals." },
  "K+N":   { name:"Potassium Nitrate",  formula:"KNO₃",  emoji:"💣", desc:"Saltpeter — a key ingredient in gunpowder, used since the 9th century." },
  "Mg+O":  { name:"Magnesia",           formula:"MgO",   emoji:"🤍", desc:"Used as an antacid, a fire retardant, and in refractory materials." },
  "Cl+Mg": { name:"Magnesium Chloride", formula:"MgCl₂", emoji:"🌿", desc:"Used in road de-icing and as a dietary supplement." },
  "Al+O":  { name:"Alumina",            formula:"Al₂O₃", emoji:"💠", desc:"The most abundant mineral in Earth's crust — basis of ruby and sapphire." },
  "Al+Cl": { name:"Aluminum Chloride",  formula:"AlCl₃", emoji:"🔬", desc:"A Lewis acid widely used as a catalyst in chemical reactions." },
  "O+Si":  { name:"Silicon Dioxide",    formula:"SiO₂",  emoji:"🏖️", desc:"Simply put — it's sand and quartz. Also makes glass and computer chips." },
  "O+P":   { name:"Phosphate",          formula:"PO₄³⁻", emoji:"🧬", desc:"Essential in DNA, RNA, and ATP — the energy currency of all life." },
  "H+P":   { name:"Phosphine",          formula:"PH₃",   emoji:"👻", desc:"A toxic, flammable gas famously detected in Venus's atmosphere in 2020." },
  "Cl+Li": { name:"Lithium Chloride",   formula:"LiCl",  emoji:"🔵", desc:"Used in batteries and as a mood-stabilizing medication." },
  "Li+O":  { name:"Lithium Oxide",      formula:"Li₂O",  emoji:"🔋", desc:"Used in lithium-ion battery technology that powers modern electronics." },
  "H+H":   { name:"Hydrogen Gas",       formula:"H₂",    emoji:"🚀", desc:"Diatomic hydrogen — the most abundant element and future rocket fuel." },
  "O+O":   { name:"Oxygen Gas",         formula:"O₂",    emoji:"🫁", desc:"Diatomic oxygen — breathe deep! Life as we know it depends on it." },
  "N+N":   { name:"Nitrogen Gas",       formula:"N₂",    emoji:"💨", desc:"Makes up 78% of Earth's atmosphere. Ultra-stable triple bond." },
};



let slotA = null;        
let slotB = null;        
let currentFilter = 'all';
let score = 0;
let discovered = new Set(); 



function makeKey(elemA, elemB) {
  const sorted = [elemA.symbol, elemB.symbol].sort();
  return sorted[0] + '+' + sorted[1];
}


// ── RENDER ELEMENT CARDS ──────────────────────

function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = ''; // Clear old cards


  const filtered = (currentFilter === 'all')
    ? ELEMENTS
    : ELEMENTS.filter(el => el.cat === currentFilter);

  filtered.forEach(el => {
    const card = document.createElement('div');
    card.className = `elem-card cat-${el.cat}`;
    card.id = 'card-' + el.symbol;

    // Check if this card is currently selected in slot A or B        ---> You could do a slot C so that it's a little bit more complicated!
    const inSlotA = slotA && slotA.symbol === el.symbol;
    const inSlotB = slotB && slotB.symbol === el.symbol;

    if (inSlotA || inSlotB) {
      card.classList.add('selected');
      const badge = document.createElement('div');
      badge.className = 'selected-badge';
      badge.textContent = inSlotA ? '1' : '2';
      card.appendChild(badge);
    }

    card.innerHTML += `
      <span class="atomic-num">${el.num}</span>
      <span class="elem-symbol">${el.emoji} ${el.symbol}</span>
      <span class="elem-name">${el.name}</span>
      <span class="elem-mass">${el.mass}</span>
    `;

    card.onclick = () => selectElement(el);
    grid.appendChild(card);
  });
}


// ── SELECT AN ELEMENT ─────────────────────────
// Called when the player clicks a card

function selectElement(el) {
  if (!slotA) {
    slotA = el;
    updateSlotDisplay('a', el);

  } else if (!slotB) {
    slotB = el;
    updateSlotDisplay('b', el);

  } else {

    slotA = slotB;
    updateSlotDisplay('a', slotA);
    slotB = el;
    updateSlotDisplay('b', el);
  }

  clearResult();
  renderCards();

  // Only enable fuse button when both slots are filled
  document.getElementById('fuse-btn').disabled = !(slotA && slotB);
}


// ── UPDATE SLOT DISPLAY ───────────────────────

function updateSlotDisplay(which, el) {
  document.getElementById('icon-' + which).textContent = el.emoji;
  document.getElementById('hint-' + which).textContent = `${el.symbol} · ${el.name}`;
  document.getElementById('slot-' + which).classList.add('filled', 'active');
}


// ── CLEAR A SLOT ──────────────────────────────

function clearSlot(which) {
  if (which === 'a') slotA = null;
  else               slotB = null;

  document.getElementById('icon-' + which).textContent = '🧪';
  document.getElementById('hint-' + which).textContent = 'Click an element';
  document.getElementById('slot-' + which).classList.remove('filled', 'active');

  clearResult();
  renderCards();
  document.getElementById('fuse-btn').disabled = !(slotA && slotB);
}


// ── FUSE! ─────────────────────────────────────

function fuse() {
  if (!slotA || !slotB) return;

  clearResult();

  const key = makeKey(slotA, slotB);
  const compound = COMBOS[key];

  if (compound) {
    spawnParticles();

    // Show result card
    document.getElementById('res-icon').textContent    = compound.emoji;
    document.getElementById('res-name').textContent    = compound.name;
    document.getElementById('res-formula').textContent = compound.formula;
    document.getElementById('res-desc').textContent    = compound.desc;
    document.getElementById('result-card').classList.add('show');

    // Update score and discoveries
    const isNewDiscovery = !discovered.has(key);
    if (isNewDiscovery) {
      discovered.add(key);
      score += 100;          
      addDiscoveryToLog(compound);
    } else {
      score += 10;          
    }

  } else {
    document.getElementById('no-result').classList.add('show');
    score = Math.max(0, score - 5); 
  }

  updateScoreDisplay();
}


// ── CLEAR RESULT DISPLAY ─────────────────────

function clearResult() {
  document.getElementById('result-card').classList.remove('show');
  document.getElementById('no-result').classList.remove('show');
}


// ── UPDATE SCORE ──────────────────────────────

function updateScoreDisplay() {
  document.getElementById('score').textContent      = score;
  document.getElementById('discovered').textContent = discovered.size;
}


// ── ADD TO DISCOVERIES LOG ────────────────────

function addDiscoveryToLog(compound) {
  const list = document.getElementById('discoveries-list');

  const empty = list.querySelector('.empty-discoveries');
  if (empty) empty.remove();

  const item = document.createElement('div');
  item.className = 'discovery-item';
  item.innerHTML = `
    <span class="d-icon">${compound.emoji}</span>
    <div class="d-info">
      <div class="d-name">${compound.name}</div>
      <div class="d-formula">${compound.formula}</div>
    </div>
  `;

  list.prepend(item); // Add to top of list
}


// ── FILTER CARDS ──────────────────────────────

function filterCards(cat, btn) {
  currentFilter = cat;

  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  renderCards();
}


// ── PARTICLE BURST EFFECT ─────────────────────

function spawnParticles() {
  const btn  = document.getElementById('fuse-btn');
  const rect = btn.getBoundingClientRect();
  const cx   = rect.left + rect.width / 2;
  const cy   = rect.top  + rect.height / 2;
  const colors = ['#00d4ff', '#ffd700', '#ff6b00', '#00ff88', '#ff44aa'];

  for (let i = 0; i < 20; i++) {
    const p     = document.createElement('div');
    p.className = 'particle';

    const angle = Math.random() * Math.PI * 2;
    const dist  = 80 + Math.random() * 120;
    const size  = 4 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const dur   = 0.5 + Math.random() * 0.5;

    p.style.cssText = `
      left: ${cx}px;
      top:  ${cy}px;
      width:  ${size}px;
      height: ${size}px;
      background: ${color};
      --tx: ${Math.cos(angle) * dist}px;
      --ty: ${Math.sin(angle) * dist}px;
      animation-duration: ${dur}s;
    `;

    document.body.appendChild(p);

    
    setTimeout(() => p.remove(), 1000);
  }
}


// ── INITIALISE THE GAME ───────────────────────

function init() {
  const total = Object.keys(COMBOS).length;
  document.getElementById('total-compounds').textContent = total;
  document.getElementById('hint-total').textContent      = total;
  renderCards();
}

init();