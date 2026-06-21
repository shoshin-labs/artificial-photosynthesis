const sunlight = document.getElementById('sunlight');
const stability = document.getElementById('stability');
const capture = document.getElementById('capture');
const co2 = document.getElementById('co2');
const playCycle = document.getElementById('play-cycle');
const reset = document.getElementById('reset');
const missionCards = [...document.querySelectorAll('.mission-card')];
const lensTabs = [...document.querySelectorAll('.lens-tab')];
const modules = [...document.querySelectorAll('.module')];
const outputTitle = document.getElementById('output-title');
const outputBody = document.getElementById('output-body');
const tempo = document.getElementById('tempo');
const yieldEl = document.getElementById('yield');
const carbonPath = document.getElementById('carbon-path');
const sceneTitle = document.getElementById('scene-title');
const sceneTag = document.getElementById('scene-tag');
const sunlightReadout = document.getElementById('sunlight-readout');
const stabilityReadout = document.getElementById('stability-readout');
const captureReadout = document.getElementById('capture-readout');
const readinessBar = document.getElementById('readiness-bar');
const carbonBar = document.getElementById('carbon-bar');
const patienceBar = document.getElementById('patience-bar');
const readinessReadout = document.getElementById('readiness-readout');
const carbonReadout = document.getElementById('carbon-readout');
const patienceReadout = document.getElementById('patience-readout');

const missionDefaults = {
  hydrogen: { sunlight: 72, stability: 68, capture: 20, co2: false, module: 'light' },
  methanol: { sunlight: 66, stability: 64, capture: 72, co2: true, module: 'carbon' },
  saf: { sunlight: 80, stability: 74, capture: 78, co2: true, module: 'carbon' },
  fertilizer: { sunlight: 60, stability: 82, capture: 55, co2: false, module: 'water' },
};

const missionCopy = {
  hydrogen: {
    title: 'Hydrogen backbone',
    tag: 'Best for: industrial feedstock',
    yield: 'Hydrogen + oxygen',
    carbon: 'CO₂ path is optional',
    body: 'The light-harvesting layer is active. Water is being split into hydrogen and oxygen, which is the cleanest way to explain the core cycle.',
    tone: 'Simple, direct, and easiest to scale in the explanation layer.',
  },
  methanol: {
    title: 'Methanol loop',
    tag: 'Best for: liquid fuel logistics',
    yield: 'Methanol',
    carbon: 'Captured CO₂ becomes part of the fuel',
    body: 'With CO₂ turned on, the reactor becomes a fuel-making system: sunlight becomes a liquid fuel that is easier to store and transport.',
    tone: 'More moving parts, but a cleaner story for shipping and handling.',
  },
  saf: {
    title: 'Aviation fuel',
    tag: 'Best for: hard-to-electrify sectors',
    yield: 'Synthetic aviation fuel',
    carbon: 'Carbon stays in a usable fuel loop',
    body: 'The same idea scales into tougher fuel markets. The point is not that the page solves aviation overnight; it shows why carbon-containing fuels matter.',
    tone: 'The hardest, most ambitious pathway — and the most economically interesting if it works.',
  },
  fertilizer: {
    title: 'Fertilizer hub',
    tag: 'Best for: ammonia-adjacent chemistry',
    yield: 'Hydrogen-rich process feed',
    carbon: 'CO₂ is not the main character here',
    body: 'This version leans into industrial chemistry: the reactor becomes a backbone for feedstocks, not just a glossy fuel pitch.',
    tone: 'Less flashy, more likely to matter if the industrial use case lands first.',
  },
};

const audienceCopy = {
  public: 'plain-English explanation first, no chemistry degree required',
  policy: 'system-level tradeoffs, climate relevance, and deployment bottlenecks',
  investor: 'why the pathway could matter, what must be true, and where the risk sits',
};

const moduleCopy = {
  light: 'Light harvesting: photons are collected and turned into an electrical or chemical trigger for the rest of the reactor.',
  water: 'Water splitting: the system separates H₂O into hydrogen and oxygen, creating a clean energy carrier.',
  carbon: 'Carbon reduction: captured CO₂ is fed into the reaction path so the output can become a liquid fuel.',
};

const state = {
  mission: 'hydrogen',
  audience: 'public',
  sunlight: Number(sunlight.value),
  stability: Number(stability.value),
  capture: Number(capture.value),
  co2: co2.checked,
  module: 'light',
  playing: false,
  phase: 0,
};

let cycleTimer = null;

function reactionTempo() {
  const sun = state.sunlight;
  if (sun < 20) return 'Very low';
  if (sun < 45) return 'Slow';
  if (sun < 70) return 'Moderate';
  if (sun < 90) return 'Fast';
  return 'Very fast';
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function missionPreset(mission) {
  const preset = missionDefaults[mission] || missionDefaults.hydrogen;
  state.mission = mission;
  state.sunlight = preset.sunlight;
  state.stability = preset.stability;
  state.capture = preset.capture;
  state.co2 = preset.co2;
  state.module = preset.module;
  state.phase = 0;

  sunlight.value = String(state.sunlight);
  stability.value = String(state.stability);
  capture.value = String(state.capture);
  co2.checked = state.co2;
}

function readouts() {
  const mission = missionCopy[state.mission];
  const audience = audienceCopy[state.audience];

  const activity = clamp(Math.round((state.sunlight * 0.38) + (state.stability * 0.34) + (state.capture * 0.28) + (state.co2 ? 10 : -8)), 0, 100);
  const carbonStrength = clamp(Math.round((state.capture * 0.5) + (state.co2 ? 28 : 0) + (state.mission === 'hydrogen' ? -18 : 0)), 0, 100);
  const patience = clamp(Math.round((state.stability * 0.55) + (state.mission === 'saf' ? -10 : 8)), 0, 100);
  const readiness = clamp(Math.round((activity * 0.45) + (carbonStrength * 0.3) + (patience * 0.25)), 0, 100);

  return { mission, audience, activity, carbonStrength, patience, readiness };
}

function render() {
  const { mission, audience, activity, carbonStrength, patience, readiness } = readouts();

  sceneTitle.textContent = mission.title;
  sceneTag.textContent = mission.tag;
  outputTitle.textContent = mission.title;
  outputBody.textContent = `${mission.body} ${mission.tone}`;
  tempo.textContent = `${reactionTempo()} · ${activity}% active`;
  yieldEl.textContent = mission.yield;
  carbonPath.textContent = state.co2 ? mission.carbon : 'CO₂ path is off for the moment';
  sunlightReadout.textContent = `${state.sunlight}%`;
  stabilityReadout.textContent = `${state.stability}%`;
  captureReadout.textContent = `${state.capture}%`;
  readinessBar.style.width = `${readiness}%`;
  carbonBar.style.width = `${carbonStrength}%`;
  patienceBar.style.width = `${patience}%`;
  readinessReadout.textContent = `${readiness}%`;
  carbonReadout.textContent = `${carbonStrength}%`;
  patienceReadout.textContent = `${patience}%`;

  document.documentElement.style.setProperty('--sun-level', `${state.sunlight}%`);
  document.documentElement.style.setProperty('--stability-level', `${state.stability}%`);
  document.documentElement.style.setProperty('--capture-level', `${state.capture}%`);
  document.body.dataset.fuel = state.mission;
  document.body.dataset.co2 = String(state.co2);
  document.body.dataset.module = state.module;
  document.body.dataset.audience = state.audience;
  document.body.style.setProperty('--sun-brightness', String(0.8 + state.sunlight / 140));

  modules.forEach((module) => {
    module.classList.toggle('active', module.dataset.module === state.module);
  });

  missionCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.mission === state.mission);
  });

  lensTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.audience === state.audience);
  });

  if (state.module === 'carbon') {
    outputBody.textContent = `${moduleCopy[state.module]} ${state.co2 ? 'That is why the CO₂ switch is on.' : 'Turn CO₂ on to see the fuel loop.'}`;
  } else if (state.module === 'water') {
    outputBody.textContent = `${moduleCopy[state.module]} ${state.co2 ? 'With CO₂ available, the output can move beyond hydrogen.' : 'Without CO₂, hydrogen is the cleaner mental model.'}`;
  } else {
    outputBody.textContent = `${moduleCopy[state.module]} ${state.co2 ? 'The reactor is ready for the carbon pathway too.' : 'The reactor is still in its hydrogen-first story.'}`;
  }

  document.querySelector('.hero-copy .lede').textContent = state.audience === 'public'
    ? 'Artificial photosynthesis is the idea of using sunlight to drive chemistry instead of only making electricity. This version goes a bit further: pick the mission, pick the audience lens, and watch the same solar chemistry tell a different story for hydrogen, methanol, or aviation fuel.'
    : state.audience === 'policy'
      ? 'Artificial photosynthesis turns sunlight into molecules, but the interesting policy question is when that beats hauling energy as electrons. The cockpit below shows the tradeoffs more clearly than a generic chart would.'
      : 'If you are evaluating the concept, the interesting part is not “is there a molecule?” but “what must be true for this to scale?” The cockpit below makes the risk and upside more legible.';

  const detailText = document.querySelector('.intro-strip article p');
  if (detailText) {
    detailText.textContent = `This is a polished, shareable static page that explains the idea clearly for the public, policy makers, and curious investors without assuming a chemistry degree. It now behaves like a small cockpit: the controls change the narrative, not just the numbers. Audience lens: ${audience}.`;
  }
}

function setMission(mission) {
  missionPreset(mission);
  render();
}

sunlight.addEventListener('input', (event) => {
  state.sunlight = Number(event.target.value);
  render();
});

stability.addEventListener('input', (event) => {
  state.stability = Number(event.target.value);
  render();
});

capture.addEventListener('input', (event) => {
  state.capture = Number(event.target.value);
  render();
});

co2.addEventListener('change', (event) => {
  state.co2 = event.target.checked;
  render();
});

missionCards.forEach((card) => {
  card.addEventListener('click', () => {
    setMission(card.dataset.mission);
  });
});

lensTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    state.audience = tab.dataset.audience;
    render();
  });
});

modules.forEach((module) => {
  module.addEventListener('click', () => {
    state.module = module.dataset.module;
    render();
  });
});

function stopCycle() {
  state.playing = false;
  playCycle.textContent = 'Run day cycle';
  if (cycleTimer) {
    clearInterval(cycleTimer);
    cycleTimer = null;
  }
}

function startCycle() {
  state.playing = true;
  playCycle.textContent = 'Pause day cycle';
  if (cycleTimer) clearInterval(cycleTimer);
  cycleTimer = setInterval(() => {
    state.phase += 0.045;
    const wave = Math.sin(state.phase) * 0.5 + 0.5;
    state.sunlight = Math.round(10 + wave * 90);
    state.stability = clamp(Math.round(55 + Math.sin(state.phase * 0.5) * 12), 0, 100);
    state.capture = clamp(Math.round(50 + Math.cos(state.phase * 0.65) * 16), 0, 100);
    state.co2 = state.mission !== 'hydrogen' ? true : state.co2;

    sunlight.value = String(state.sunlight);
    stability.value = String(state.stability);
    capture.value = String(state.capture);
    co2.checked = state.co2;

    render();
  }, 60);
}

playCycle.addEventListener('click', () => {
  if (state.playing) {
    stopCycle();
  } else {
    startCycle();
  }
});

reset.addEventListener('click', () => {
  stopCycle();
  missionPreset(state.mission);
  render();
});

missionPreset('hydrogen');
render();
