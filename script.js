const sunlight = document.getElementById('sunlight');
const co2 = document.getElementById('co2');
const fuelTabs = [...document.querySelectorAll('.fuel-tab')];
const modules = [...document.querySelectorAll('.module')];
const outputTitle = document.getElementById('output-title');
const outputBody = document.getElementById('output-body');
const tempo = document.getElementById('tempo');
const yieldEl = document.getElementById('yield');
const carbonPath = document.getElementById('carbon-path');

const state = {
  sunlight: Number(sunlight.value),
  co2: co2.checked,
  fuel: 'hydrogen',
  module: 'light',
};

const fuelCopy = {
  hydrogen: {
    title: 'Hydrogen-first mode',
    body: 'The light-harvesting layer is active. Water is being split into hydrogen and oxygen, which is the simplest way to explain the core AP cycle.',
    yield: 'Hydrogen + oxygen',
    carbon: 'CO₂ is optional right now',
  },
  methanol: {
    title: 'Methanol synthesis mode',
    body: 'With CO₂ turned on, the reactor can be framed as a fuel-making system: sunlight becomes a liquid fuel that is easier to store and transport.',
    yield: 'Methanol',
    carbon: 'Captured CO₂ becomes part of the fuel',
  },
  saf: {
    title: 'Aviation-fuel pathway',
    body: 'The same idea can scale into tougher fuel markets. The point is not that the page solves aviation overnight; it shows why carbon-containing fuels matter.',
    yield: 'Synthetic aviation fuel',
    carbon: 'Carbon stays in a usable fuel loop',
  },
};

const moduleCopy = {
  light: 'Light harvesting: photons are collected and turned into an electrical or chemical trigger for the rest of the reactor.',
  water: 'Water splitting: the system separates H₂O into hydrogen and oxygen, creating a clean energy carrier.',
  carbon: 'Carbon reduction: captured CO₂ is fed into the reaction path so the output can become a liquid fuel.',
};

function reactionTempo() {
  const sun = state.sunlight;
  if (sun < 20) return 'Very low';
  if (sun < 45) return 'Slow';
  if (sun < 70) return 'Moderate';
  if (sun < 90) return 'Fast';
  return 'Very fast';
}

function render() {
  const settings = fuelCopy[state.fuel];
  const co2Boost = state.co2 ? 1.15 : 0.82;
  const sunRatio = state.sunlight / 100;
  const activity = Math.max(0, Math.min(100, Math.round(sunRatio * co2Boost * 100)));

  outputTitle.textContent = settings.title;
  outputBody.textContent = settings.body;
  tempo.textContent = `${reactionTempo()} · ${activity}% active`;
  yieldEl.textContent = settings.yield;
  carbonPath.textContent = state.co2 ? settings.carbon : 'CO₂ path is off for the moment';

  document.documentElement.style.setProperty('--sun-level', `${state.sunlight}%`);
  document.body.dataset.fuel = state.fuel;
  document.body.dataset.co2 = String(state.co2);
  document.body.dataset.module = state.module;
  document.body.style.setProperty('--sun-brightness', String(0.8 + state.sunlight / 140));

  modules.forEach((module) => {
    module.classList.toggle('active', module.dataset.module === state.module);
  });

  fuelTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.fuel === state.fuel);
  });

  const activeModule = moduleCopy[state.module];
  if (activeModule && state.module === 'carbon') {
    outputBody.textContent = `${activeModule} ${state.co2 ? 'That is why the CO₂ switch is on.' : 'Turn CO₂ on to see the fuel loop.'}`;
  } else if (activeModule && state.module === 'water') {
    outputBody.textContent = `${activeModule} ${state.co2 ? 'With CO₂ available, the output can move beyond hydrogen.' : 'Without CO₂, hydrogen is the cleaner mental model.'}`;
  } else if (activeModule) {
    outputBody.textContent = `${activeModule} ${state.co2 ? 'The reactor is ready for the carbon pathway too.' : 'The reactor is still in its hydrogen-first story.'}`;
  }
}

sunlight.addEventListener('input', (event) => {
  state.sunlight = Number(event.target.value);
  render();
});

co2.addEventListener('change', (event) => {
  state.co2 = event.target.checked;
  render();
});

fuelTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    state.fuel = tab.dataset.fuel;
    render();
  });
});

modules.forEach((module) => {
  module.addEventListener('click', () => {
    state.module = module.dataset.module;
    render();
  });
});

render();
