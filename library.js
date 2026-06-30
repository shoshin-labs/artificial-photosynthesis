const signals = [
  {
    id: 'airplant-one-launch',
    title: 'AirPlant™ One Opens in Moses Lake: America’s First Commercial E-Jet® Fuel Plant Begins Operations',
    source: 'Twelve',
    kind: 'Plant launch / commercial milestone',
    published: '2026-06-10',
    summary: 'Commercial operations begin, with Alaska Airlines and Microsoft named in the launch story — the clearest recent proof point that the category is moving out of the lab.',
    audience: ['Investors', 'Journalists', 'Commercial partners'],
    theme: 'commercialization',
    format: 'Company post',
    url: 'https://www.twelve.co/post/airplant-one-opens-in-moses-lake-america-s-first-commercial-e-jet-fuel-plant-begins-operations',
    featured: true,
  },
  {
    id: 'airplant-ceo-update',
    title: 'A New Era for Industry: AirPlant™ One is Online',
    source: 'Twelve',
    kind: 'CEO update',
    published: '2026-06-10',
    summary: 'Nicholas Flanders frames AirPlant One going live as a manufacturing milestone rather than a speculative climate-tech story.',
    audience: ['Investors', 'Journalists'],
    theme: 'commercialization',
    format: 'Company post',
    url: 'https://www.twelve.co/post/a-new-era-for-industry-airplant-one-is-online',
  },
  {
    id: 'world-made-from-air',
    title: 'A World Made from Air',
    source: 'Twelve',
    kind: 'Category framing',
    published: '2026-06-11',
    summary: 'The cleanest recent explanation of the bigger shift: from extracting hydrocarbons out of the ground to manufacturing them from air, water, and electricity.',
    audience: ['Brand teams', 'Journalists', 'Commercial partners'],
    theme: 'core-explainers',
    format: 'Company post',
    url: 'https://www.twelve.co/post/made-from-air-a-new-era-for-industry',
  },
  {
    id: 'efuels-onshore-supply',
    title: 'eFuels Power Critical Industry and Diversify Onshore Energy Supply',
    source: 'Twelve',
    kind: 'Industrial strategy',
    published: '2026-05-14',
    summary: 'Useful for readers who want the energy-security and industrial-policy argument, not just the emissions argument.',
    audience: ['Investors', 'Commercial partners'],
    theme: 'policy-market-design',
    format: 'Company post',
    url: 'https://www.twelve.co/post/efuels-power-critical-industry-and-diversify-onshore-energy-supply',
  },
  {
    id: 'emanufacturing',
    title: 'eManufacturing is Next Generation Hydrocarbon Production',
    source: 'Twelve',
    kind: 'Industry thesis',
    published: '2026-04-28',
    summary: 'Strong investor-grade framing of air-and-electricity manufacturing as a new production pathway for fuels, chemicals, and materials.',
    audience: ['Investors', 'Journalists'],
    theme: 'commercialization',
    format: 'Company post',
    url: 'https://www.twelve.co/post/emanufacturing-the-next-industrial-power-shift-in-hydrocarbon-production',
  },
  {
    id: 'price-predictability',
    title: 'Jet Fuel with 10-Year Price Predictability',
    source: 'Twelve',
    kind: 'Economics / pricing',
    published: '2026-04-17',
    summary: 'One of the most commercially useful recent claims because it turns the story into fuel economics, procurement logic, and planning certainty.',
    audience: ['Investors', 'Commercial partners'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/jet-fuel-with-10-year-price-predictability',
  },
  {
    id: 'ejet-faq',
    title: 'EJet® SAF is Jet Fuel Made from Air',
    source: 'Twelve',
    kind: 'FAQ / product explainer',
    published: '2026-04-08',
    summary: 'A concise FAQ-format page that helps non-specialists understand what the fuel is, how it is made, and what it replaces.',
    audience: ['Journalists', 'Commercial partners'],
    theme: 'buyer-enablement',
    format: 'Company post',
    url: 'https://www.twelve.co/post/e-jet-saf-faq',
  },
  {
    id: 'ihi-operations',
    title: 'Twelve Partnership With IHI Power Services is Secret Ingredient for e-SAF Success',
    source: 'Twelve',
    kind: 'Operations / scale-up',
    published: '2026-01-23',
    summary: 'A good signal for anyone watching how first-of-a-kind industrial projects actually get operated and maintained.',
    audience: ['Investors', 'Commercial partners'],
    theme: 'commercialization',
    format: 'Company post',
    url: 'https://www.twelve.co/post/scaling-the-sky-why-the-partnership-between-twelve-and-ihi-power-services-is-the-secret-ingredient',
  },
  {
    id: 'world-fuel',
    title: 'Twelve Announces Collaboration with World Fuel to Advance Commercial Readiness of E-Jet® SAF Through Established Aviation Infrastructure',
    source: 'Twelve',
    kind: 'Partnership / go-to-market',
    published: '2025-12-18',
    summary: 'Important distribution signal: the story moves from invention into delivery infrastructure and established aviation channels.',
    audience: ['Investors', 'Commercial partners'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/twelve-announces-collaboration-with-world-fuel-to-advance-commercial-readiness-of-e-jet-saf-through',
  },
  {
    id: 'mercedes-benz',
    title: 'Made from Air: The Twelve x Mercedes-Benz Pilot That Turned CO2 into Car Parts',
    source: 'Twelve',
    kind: 'Consumer-products case study',
    published: '2025-11-17',
    summary: 'One of the better recent examples for people looking beyond fuel and into branded goods, materials, and visible product storytelling.',
    audience: ['Brand teams', 'Journalists'],
    theme: 'brand-product',
    format: 'Company post',
    url: 'https://www.twelve.co/post/made-from-air-the-twelve-x-mercedes-benz-pilot-that-turned-co2-into-car-parts',
  },
  {
    id: 'autodesk',
    title: 'Twelve Announces Collaboration with Autodesk, Accelerating Sustainable Aviation Fuel Adoption & Climate Technology Solutions',
    source: 'Twelve',
    kind: 'Enterprise partnership',
    published: '2025-09-18',
    summary: 'Shows the category spilling into enterprise decarbonisation and corporate partnership territory, not just airlines and fuels.',
    audience: ['Commercial partners', 'Investors'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/twelve-announces-collaboration-with-autodesk-accelerating-sustainable-aviation-fuel-adoption-clim',
  },
  {
    id: 'business-case',
    title: 'The Business Case for Carbon Transformation: CO2 is a Resilient Feedstock for Fuels, Chemicals and Materials',
    source: 'Twelve',
    kind: 'Commercial thesis',
    published: '2025-09-17',
    summary: 'Useful because it makes the business case, not just the climate case: resilience, supply, and competitive positioning.',
    audience: ['Investors', 'Commercial partners', 'Journalists'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/the-business-case-for-carbon-transformation',
  },
  {
    id: 'consumer-survey',
    title: 'From Oil to Air: New Survey Reveals 74% of Americans Want CO2-Based Products',
    source: 'Twelve',
    kind: 'Consumer demand signal',
    published: '2025-06-10',
    summary: 'Helpful for brand, innovation, and communications teams because it gives a market-readiness angle for consumer-facing products.',
    audience: ['Brand teams', 'Journalists'],
    theme: 'brand-product',
    format: 'Company post',
    url: 'https://www.twelve.co/post/from-oil-to-air-new-survey-reveals-74-of-americans-ready-to-choose-co2-based-products-as-twelve-ma',
  },
  {
    id: 'uav-fund',
    title: 'United Airlines Ventures Sustainable Flight Fund Invests in Twelve’s E-Jet SAF Technology',
    source: 'Twelve',
    kind: 'Investment / strategic backing',
    published: '2025-05-06',
    summary: 'A strong financing-and-validation signal because the backing comes from aviation-specific capital rather than generic climate-tech enthusiasm.',
    audience: ['Investors', 'Journalists'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/united-airlines-ventures-sustainable-flight-fund-invests-in-twelve-s-e-jet-saf-technology',
  },
  {
    id: 'brand-innovation',
    title: 'Made from Air: The Next Big Thing for Product Innovation',
    source: 'Twelve',
    kind: 'Brand innovation essay',
    published: '2025-07-03',
    summary: 'A recent consumer-brand angle: CO2-made inputs as a product and innovation story, not just an emissions story.',
    audience: ['Brand teams', 'Journalists'],
    theme: 'brand-product',
    format: 'Company post',
    url: 'https://www.twelve.co/post/made-from-air-why-co2-is-the-next-big-thing-for-brand-innovation',
  },
  {
    id: 'series-c-funding',
    title: 'Twelve Secures $85 million in Additional Series C & Project Funding',
    source: 'Twelve',
    kind: 'Funding',
    published: '2025-03-11',
    summary: 'Worth keeping because it gives investors a cleaner read on how the company is financing the move from narrative to infrastructure.',
    audience: ['Investors'],
    theme: 'capital-partnerships',
    format: 'Company post',
    url: 'https://www.twelve.co/post/building-a-world-made-from-air-twelve-secures-83-million-in-additional-series-c-project-funding',
  },
];

const evergreen = [
  {
    id: 'airplant-page',
    title: 'AirPlant™',
    source: 'Twelve',
    kind: 'Platform page',
    published: 'Evergreen',
    summary: 'The best top-level product page for understanding how Twelve packages plant-scale manufacturing and why AirPlant matters.',
    theme: 'commercialization',
    format: 'Product page',
    audience: ['Investors', 'Commercial partners', 'Journalists'],
    url: 'https://www.twelve.co/airplant',
  },
  {
    id: 'efuels-page',
    title: 'eFuels',
    source: 'Twelve',
    kind: 'Category page',
    published: 'Evergreen',
    summary: 'A clean top-level page for the e-fuels angle and where SAF sits inside the wider industrial story.',
    theme: 'buyer-enablement',
    format: 'Category page',
    audience: ['Commercial partners', 'Journalists'],
    url: 'https://www.twelve.co/efuels',
  },
  {
    id: 'co2made-page',
    title: 'CO2Made®',
    source: 'Twelve',
    kind: 'Brand/product page',
    published: 'Evergreen',
    summary: 'The strongest home for the consumer-facing and product-innovation framing beyond aviation fuel.',
    theme: 'brand-product',
    format: 'Category page',
    audience: ['Brand teams', 'Journalists'],
    url: 'https://www.twelve.co/co2made',
  },
  {
    id: 'policy-page',
    title: 'Policy',
    source: 'Twelve',
    kind: 'Policy hub',
    published: 'Evergreen',
    summary: 'Useful because it signals that policy, market design, and incentives are first-order parts of the category.',
    theme: 'policy-market-design',
    format: 'Policy hub',
    audience: ['Investors', 'Commercial partners', 'Journalists'],
    url: 'https://www.twelve.co/policy',
  },
  {
    id: 'partners-page',
    title: 'Partners',
    source: 'Twelve',
    kind: 'Partner page',
    published: 'Evergreen',
    summary: 'A fast read on the ecosystem view: corporate buyers, infrastructure, and who helps make deals practical.',
    theme: 'capital-partnerships',
    format: 'Partner page',
    audience: ['Commercial partners', 'Investors'],
    url: 'https://www.twelve.co/partners',
  },
  {
    id: 'know-your-saf',
    title: 'Know Your SAF',
    source: 'Twelve',
    kind: 'Buyer education',
    published: 'Evergreen',
    summary: 'One of the clearest signs that the category is moving into practical buyer enablement and pathway comparison.',
    theme: 'buyer-enablement',
    format: 'Explainer page',
    audience: ['Commercial partners', 'Journalists'],
    url: 'https://www.twelve.co/knowyoursaf',
  },
  {
    id: 'how-jet-fuel-without-oil',
    title: 'How Twelve Makes Jet Fuel Without Oil',
    source: 'Twelve',
    kind: 'Technical explainer',
    published: 'Evergreen',
    summary: 'A practical explainer that helps bridge the gap between category story and underlying process.',
    theme: 'core-explainers',
    format: 'Explainer post',
    audience: ['Journalists', 'Commercial partners'],
    url: 'https://www.twelve.co/post/how-twelve-makes-jet-fuel-without-oil',
  },
  {
    id: 'opus-system',
    title: 'How the Opus System by Twelve Turns CO2 into Products',
    source: 'Twelve',
    kind: 'Technology explainer',
    published: 'Evergreen',
    summary: 'A useful process-level explainer for readers who want the category mechanics, not just the commercial wrapper.',
    theme: 'core-explainers',
    format: 'Explainer post',
    audience: ['Journalists', 'Investors'],
    url: 'https://www.twelve.co/post/how-the-opus-system-by-twelve-turns-co2-into-products',
  },
];

const videos = [
  {
    id: 'carbon-transformation-video',
    title: 'Carbon Transformation Explainer | Twelve',
    source: 'Twelve',
    kind: 'Official explainer',
    published: '2023',
    summary: 'A compact intro to Twelve’s carbon transformation story.',
    theme: 'core-explainers',
    format: 'Video',
    audience: ['Journalists', 'Brand teams'],
    url: 'https://www.youtube.com/watch?v=lARht_yE9WU',
  },
  {
    id: 'future-fossil-free-video',
    title: 'The Future is Fossil Free | Twelve',
    source: 'Twelve',
    kind: 'Official brand video',
    published: '2023',
    summary: 'Short brand film framing the fossil-free pitch in simple terms.',
    theme: 'brand-product',
    format: 'Video',
    audience: ['Brand teams', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=Jw6ZQW5iVFU',
  },
  {
    id: 'esaf-advantage-video',
    title: 'The eSAF Advantage',
    source: 'Twelve',
    kind: 'Aviation explainer',
    published: '2024',
    summary: 'The case for sustainable aviation fuel as a market category.',
    theme: 'buyer-enablement',
    format: 'Video',
    audience: ['Commercial partners', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=zKP6KRKOjCY',
  },
  {
    id: 'fuel-long-haul-video',
    title: 'Fuel for the Long Haul™ | Something New',
    source: 'Twelve',
    kind: 'Brand film',
    published: '2024',
    summary: 'A more polished brand-format version of the fuel story.',
    theme: 'brand-product',
    format: 'Video',
    audience: ['Brand teams', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=WV_Z0Ksfnno',
  },
  {
    id: 'founder-interview-video',
    title: 'Dr. Etosha Cave, Twelve Co-Founder & CSO',
    source: 'Twelve',
    kind: 'Founder interview',
    published: '2024',
    summary: 'A useful voice for understanding the technical and commercial thesis.',
    theme: 'core-explainers',
    format: 'Video',
    audience: ['Investors', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=OV46V3p4108',
  },
];

const press = [
  {
    id: 'cnbc-clean-start',
    title: 'Clean Start: Twelve makes clean jet fuel out of captured carbon emissions',
    source: 'CNBC Television',
    kind: 'TV segment',
    published: '2024',
    summary: 'A mainstream news explainer on the aviation-fuel pitch.',
    theme: 'coverage',
    format: 'Video',
    audience: ['Journalists', 'Brand teams'],
    url: 'https://www.youtube.com/watch?v=hSyq2idJq_4',
  },
  {
    id: 'eco-channel-air',
    title: 'Creating products out of thin air | The ECO Channel',
    source: 'The ECO Channel',
    kind: 'Explainer',
    published: '2023',
    summary: 'A simpler framing of the “made from air” concept.',
    theme: 'coverage',
    format: 'Video',
    audience: ['Journalists', 'Brand teams'],
    url: 'https://www.youtube.com/watch?v=n_mcc5rIiUs',
  },
  {
    id: 'ptl-interview',
    title: 'Why Twelve believes power-to-liquids will revolutionise sustainable aviation fuel',
    source: 'Interview coverage',
    kind: 'Interview',
    published: '2024',
    summary: 'Good for the power-to-liquids frame and policy context.',
    theme: 'coverage',
    format: 'Video',
    audience: ['Investors', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=D9sUAdGj2IA',
  },
  {
    id: 'airlines-saf-demand',
    title: 'Why Airlines Can’t Get Enough Sustainable Aviation Fuel',
    source: 'Adjacent market coverage',
    kind: 'Market explainer',
    published: '2024',
    summary: 'Useful industry context for understanding why SAF demand matters in the first place.',
    theme: 'coverage',
    format: 'Video',
    audience: ['Commercial partners', 'Journalists'],
    url: 'https://www.youtube.com/watch?v=oEd1XxDmAWc',
  },
  {
    id: 'saf-certificates',
    title: 'SAF Certificates: Why Building Trust is as Important as Building Supply',
    source: 'Twelve',
    kind: 'Market trust / certificates',
    published: '2025-05-27',
    summary: 'A key piece on the trust infrastructure that sits between supply ambition and buyer confidence.',
    theme: 'policy-market-design',
    format: 'Company post',
    audience: ['Commercial partners', 'Investors', 'Journalists'],
    url: 'https://www.twelve.co/post/saf-certificates-why-building-trust-is-as-important-as-building-supply',
  },
];

const collections = [
  {
    id: 'commercialization',
    title: 'Commercialisation & first-of-a-kind execution',
    description: 'For readers asking whether the category is actually moving into operating infrastructure.',
    itemIds: ['airplant-one-launch', 'airplant-ceo-update', 'emanufacturing', 'ihi-operations', 'airplant-page'],
  },
  {
    id: 'buyer-enablement',
    title: 'Buyer education & procurement logic',
    description: 'For understanding SAF pathways, what buyers are really purchasing, and how the market is being made legible.',
    itemIds: ['ejet-faq', 'know-your-saf', 'efuels-page', 'esaf-advantage-video'],
  },
  {
    id: 'brand-product',
    title: 'Brand, materials & visible product proof',
    description: 'For making the category concrete outside specialist energy and industrial audiences.',
    itemIds: ['mercedes-benz', 'brand-innovation', 'consumer-survey', 'co2made-page', 'future-fossil-free-video'],
  },
  {
    id: 'policy-market-design',
    title: 'Policy, incentives & market design',
    description: 'For the tax-credit, domestic supply, and market-architecture layer that increasingly shapes the category.',
    itemIds: ['efuels-onshore-supply', 'policy-page', 'saf-certificates', 'ptl-interview'],
  },
  {
    id: 'capital-partnerships',
    title: 'Capital, partnerships & route-to-market',
    description: 'For strategic backing, distribution pathways, and how scale gets financed and delivered.',
    itemIds: ['world-fuel', 'autodesk', 'price-predictability', 'uav-fund', 'series-c-funding', 'partners-page'],
  },
  {
    id: 'core-explainers',
    title: 'Core explainers & category language',
    description: 'For readers who need the cleanest possible description of what “made from air” means and why it matters.',
    itemIds: ['world-made-from-air', 'how-jet-fuel-without-oil', 'opus-system', 'carbon-transformation-video', 'founder-interview-video'],
  },
];

const readerRoutes = [
  {
    id: 'brand-teams',
    audience: 'Brand teams',
    question: 'Can this become a customer-facing product and story?',
    theme: 'brand-product',
    itemIds: ['mercedes-benz', 'brand-innovation', 'consumer-survey', 'co2made-page'],
  },
  {
    id: 'investors',
    audience: 'Investors',
    question: 'Is the category showing real commercial and capital readiness?',
    theme: 'commercialization',
    itemIds: ['airplant-one-launch', 'emanufacturing', 'price-predictability', 'uav-fund'],
  },
  {
    id: 'journalists',
    audience: 'Journalists',
    question: 'How do I explain this clearly and credibly?',
    theme: 'core-explainers',
    itemIds: ['world-made-from-air', 'ejet-faq', 'how-jet-fuel-without-oil', 'carbon-transformation-video'],
  },
  {
    id: 'commercial-partners',
    audience: 'Commercial partners',
    question: 'Where are the buyer pathways, infrastructure, and market rules?',
    theme: 'buyer-enablement',
    itemIds: ['world-fuel', 'know-your-saf', 'policy-page', 'partners-page'],
  },
];

const themeMeta = {
  all: { label: 'All themes' },
  commercialization: { label: 'Commercialisation' },
  'buyer-enablement': { label: 'Buyer education' },
  'brand-product': { label: 'Brand & product' },
  'policy-market-design': { label: 'Policy & market design' },
  'capital-partnerships': { label: 'Capital & partnerships' },
  'core-explainers': { label: 'Core explainers' },
};

const audienceOptions = ['All audiences', 'Brand teams', 'Investors', 'Journalists', 'Commercial partners'];
const libraryById = [...signals, ...evergreen, ...videos, ...press].reduce((map, item) => {
  map[item.id] = item;
  return map;
}, {});

const state = {
  search: '',
  theme: 'all',
  audience: 'All audiences',
};

function youtubeThumbnail(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
}

function prettyDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(`${value}T12:00:00Z`);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function audiencePills(audience = []) {
  return audience.map((label) => `<span class="audience-pill">${label}</span>`).join('');
}

function visualMarkup(item, compact = false) {
  const thumbnail = youtubeThumbnail(item.url);
  if (thumbnail) {
    return `
      <a class="resource-visual resource-visual-media" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.title}">
        <img src="${thumbnail}" alt="Thumbnail for ${item.title}" loading="lazy" decoding="async" />
      </a>
    `;
  }

  const themeClass = `theme-${item.theme || 'core-explainers'}`;
  const compactClass = compact ? 'resource-visual-compact' : '';
  return `
    <a class="resource-visual ${themeClass} ${compactClass}" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.title}">
      <span class="visual-chip">${item.kind}</span>
      <span class="visual-title">${item.source}</span>
      <span class="visual-meta">${themeMeta[item.theme]?.label || item.theme || item.format}</span>
    </a>
  `;
}

function resourceCard(item, options = {}) {
  const article = document.createElement('article');
  const classes = ['resource-card'];
  if (options.compact) classes.push('resource-card-compact');
  if (options.featured) classes.push('resource-card-featured');
  article.className = classes.join(' ');
  article.id = options.anchorId || '';
  article.innerHTML = `
    ${visualMarkup(item, options.compact)}
    <div class="resource-body">
      <div class="resource-meta-row">
        <span class="meta-chip">${item.kind}</span>
        <span class="meta-text">${item.source}</span>
        <span class="meta-text">${prettyDate(item.published)}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="resource-summary">${item.summary}</p>
      <div class="resource-footer">
        <div class="audience-pills">${audiencePills(item.audience)}</div>
        <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">${/youtube\.com|youtu\.be/.test(item.url) ? 'Open video ↗' : 'Open source ↗'}</a>
      </div>
    </div>
  `;
  return article;
}

function renderFeatured() {
  const featured = signals.find((item) => item.featured) || signals[0];
  const root = document.getElementById('featured-card');
  if (!root || !featured) return;
  const card = resourceCard(featured, { featured: true, anchorId: 'featured-signal-card' });
  root.replaceWith(card);
  card.id = 'featured-card';
}

function currentSignals() {
  return signals.filter((item) => {
    const searchHaystack = `${item.title} ${item.summary} ${item.kind} ${item.source}`.toLowerCase();
    const matchesSearch = !state.search || searchHaystack.includes(state.search);
    const matchesTheme = state.theme === 'all' || item.theme === state.theme;
    const matchesAudience = state.audience === 'All audiences' || item.audience.includes(state.audience);
    return matchesSearch && matchesTheme && matchesAudience;
  }).sort((a, b) => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(a.published) && /^\d{4}-\d{2}-\d{2}$/.test(b.published)) {
      return b.published.localeCompare(a.published);
    }
    return 0;
  });
}

function renderSignalBoard() {
  const root = document.getElementById('signal-grid');
  if (!root) return;
  root.innerHTML = '';
  const filtered = currentSignals();
  const countNode = document.getElementById('results-count');
  if (countNode) {
    countNode.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  }

  filtered.forEach((item, index) => {
    const card = resourceCard(item, { compact: index > 0 });
    if (index === 0) card.classList.add('resource-card-heroish');
    root.appendChild(card);
  });
}

function renderChipGroup(rootId, options, getValue, onSet) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = '';
  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip-button';
    const value = getValue(option);
    if (value === onSet.current()) button.classList.add('active');
    button.textContent = option.label || option;
    button.addEventListener('click', () => {
      onSet.set(value);
      renderFilters();
      renderSignalBoard();
    });
    root.appendChild(button);
  });
}

function renderFilters() {
  renderChipGroup(
    'theme-filters',
    Object.entries(themeMeta).map(([value, meta]) => ({ value, label: meta.label })),
    (option) => option.value,
    {
      current: () => state.theme,
      set: (value) => { state.theme = value; },
    },
  );

  renderChipGroup(
    'audience-filters',
    audienceOptions,
    (option) => option,
    {
      current: () => state.audience,
      set: (value) => { state.audience = value; },
    },
  );
}

function renderCollections() {
  const root = document.getElementById('collections-grid');
  if (!root) return;
  root.innerHTML = '';

  collections.forEach((collection) => {
    const article = document.createElement('article');
    article.className = 'collection-card';
    article.id = `theme-${collection.id}`;
    const items = collection.itemIds.map((id) => libraryById[id]).filter(Boolean);
    article.innerHTML = `
      <div class="collection-head">
        <div>
          <p class="mini-label">${themeMeta[collection.id]?.label || collection.id}</p>
          <h3>${collection.title}</h3>
        </div>
        <button class="chip-button chip-button-inline" type="button">Filter signal board</button>
      </div>
      <p class="collection-description">${collection.description}</p>
      <div class="collection-list"></div>
    `;
    const list = article.querySelector('.collection-list');
    items.forEach((item) => {
      const link = document.createElement('a');
      link.className = 'collection-link';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = `
        <span class="collection-link-kind">${item.kind}</span>
        <strong>${item.title}</strong>
        <span>${item.summary}</span>
      `;
      list.appendChild(link);
    });
    article.querySelector('button').addEventListener('click', () => {
      state.theme = collection.id;
      renderFilters();
      renderSignalBoard();
      if (window.location.hash !== '#signal-board') {
        history.replaceState(null, '', '#signal-board');
      }
    });
    root.appendChild(article);
  });
}

function renderReaderRoutes() {
  const root = document.getElementById('reader-routes-grid');
  if (!root) return;
  root.innerHTML = '';

  readerRoutes.forEach((route) => {
    const article = document.createElement('article');
    article.className = 'route-panel route-panel-library';
    const items = route.itemIds.map((id) => libraryById[id]).filter(Boolean);
    article.innerHTML = `
      <div>
        <p class="mini-label">${route.audience}</p>
        <h3>${route.question}</h3>
      </div>
      <p>${themeMeta[route.theme]?.description || 'A short route into the category.'}</p>
      <div class="route-link-list"></div>
      <button class="chip-button chip-button-inline" type="button">Filter board to match</button>
    `;

    const list = article.querySelector('.route-link-list');
    items.forEach((item) => {
      const link = document.createElement('a');
      link.className = 'collection-link route-link';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = `
        <span class="collection-link-kind">${item.kind}</span>
        <strong>${item.title}</strong>
      `;
      list.appendChild(link);
    });

    article.querySelector('button').addEventListener('click', () => {
      state.audience = route.audience;
      state.theme = route.theme;
      renderFilters();
      renderSignalBoard();
      if (window.location.hash !== '#signal-board') {
        history.replaceState(null, '', '#signal-board');
      }
    });

    root.appendChild(article);
  });
}

function renderSimpleGrid(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = '';
  items.forEach((item) => root.appendChild(resourceCard(item, { compact: true })));
}

function bindSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderSignalBoard();
  });
}

function setStat(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = String(value);
}

renderFeatured();
renderFilters();
renderSignalBoard();
renderCollections();
renderReaderRoutes();
renderSimpleGrid('evergreen-grid', evergreen);
renderSimpleGrid('video-grid', videos);
renderSimpleGrid('press-grid', press);
bindSearch();

setStat('count-signals', signals.length);
setStat('count-evergreen', evergreen.length);
setStat('count-coverage', videos.length + press.length);
