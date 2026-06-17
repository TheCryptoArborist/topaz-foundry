const launches = [
  {
    id: "aurora",
    name: "AURORA",
    symbol: "AUR",
    status: "live",
    color: "#36e6b6",
    raised: 1245630,
    goal: 2000000,
    saleType: "Public sale",
    quoteAsset: "USDT",
    price: "1 AUR = 0.045 USDT",
    hardCap: "2,000,000 USDT",
    endsIn: "2d 14h 32m",
    summary:
      "Aurora is a modular DeFi liquidity hub launching with a Topaz V2 volatile pool, locked ERC20 LP tokens, public vesting, and first-epoch voter incentives.",
    tags: ["DeFi", "DEX", "Liquidity"],
    min: 50,
    max: 50000,
    contributors: 1247,
    avgContribution: 421,
    yourContribution: 0,
    vesting: [
      ["TGE", "10%", "May 10"],
      ["Month 1", "10%", "Jun 10"],
      ["Month 3", "10%", "Aug 10"],
      ["Month 6", "20%", "Nov 10"],
      ["Month 9", "50%", "Feb 10"],
    ],
    incentives: [
      ["Month 1", "20%", "May 10"],
      ["Month 2", "20%", "Jun 10"],
      ["Month 3", "20%", "Jul 10"],
      ["Month 4", "20%", "Aug 10"],
      ["Month 5", "10%", "Sep 10"],
      ["Month 6", "10%", "Oct 10"],
    ],
    proof: {
      lockDuration: "365 days",
      liquidity: "500,000 AUR + 450,000 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "0x91c2...4f8b",
      vesting: "Linear over 9 months",
      cliff: "10% at TGE",
      incentives: "300,000 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "May 10, 2026",
    },
    risk: [
      "Smart contract not audited",
      "Team tokens have extended unlock",
      "Market conditions may affect token performance",
    ],
    post: {
      marketCap: "$6.2M",
      fdv: "$45.0M",
      liquidity: "$950K",
      holders: "2,350",
    },
  },
  {
    id: "defiware",
    name: "DEFIWARE",
    symbol: "DWR",
    status: "live",
    color: "#b9a7ff",
    raised: 842118,
    goal: 1500000,
    saleType: "Fair launch",
    quoteAsset: "USDT",
    price: "Pro rata allocation",
    hardCap: "1,500,000 USDT",
    endsIn: "3d 6h 04m",
    summary:
      "Defiware packages launch analytics and treasury tooling for smaller token teams that need public proof after TGE.",
    tags: ["Analytics", "Treasury", "Tools"],
    min: 25,
    max: 30000,
    contributors: 862,
    avgContribution: 318,
    yourContribution: 0,
    vesting: [
      ["TGE", "15%", "May 18"],
      ["Month 2", "15%", "Jul 18"],
      ["Month 4", "20%", "Sep 18"],
      ["Month 8", "50%", "Jan 18"],
    ],
    incentives: [
      ["Epoch 1", "40%", "May 18"],
      ["Epoch 2", "25%", "May 25"],
      ["Epoch 3", "20%", "Jun 1"],
      ["Epoch 4", "15%", "Jun 8"],
    ],
    proof: {
      lockDuration: "18 months",
      liquidity: "320,000 DWR + 390,000 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "Creator / launchpad split",
      lockTx: "0x62fd...09bb",
      vesting: "Linear over 8 months",
      cliff: "15% at TGE",
      incentives: "185,000 veTOPAZ",
      distributor: "Manual bribe queue",
      start: "May 18, 2026",
    },
    risk: ["Custom token accepted", "No third-party audit posted"],
    post: {
      marketCap: "$3.8M",
      fdv: "$18.5M",
      liquidity: "$710K",
      holders: "1,420",
    },
  },
  {
    id: "nexora",
    name: "NEXORA",
    symbol: "NXO",
    status: "upcoming",
    color: "#8e7cff",
    raised: 0,
    goal: 1250000,
    saleType: "Fixed price",
    quoteAsset: "WBNB",
    price: "1 NXO = 0.000018 WBNB",
    hardCap: "1,250 WBNB",
    endsIn: "Starts in 1d 14h",
    summary:
      "Nexora is preparing a WBNB-paired launch with mandatory V2 LP token lock, team vesting, and a later gauge-upgrade path.",
    tags: ["AI", "Index", "Research"],
    min: 0.05,
    max: 20,
    contributors: 0,
    avgContribution: 0,
    yourContribution: 0,
    vesting: [
      ["TGE", "5%", "Jun 20"],
      ["Month 3", "15%", "Sep 20"],
      ["Month 6", "30%", "Dec 20"],
      ["Month 12", "50%", "Jun 20"],
    ],
    incentives: [
      ["Epoch 1", "30%", "Jun 20"],
      ["Epoch 2", "30%", "Jun 27"],
      ["Epoch 3", "20%", "Jul 4"],
      ["Epoch 4", "20%", "Jul 11"],
    ],
    proof: {
      lockDuration: "Permanent fee-split lock",
      liquidity: "Pending finalization",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge first, gauge later",
      lockTx: "Queued after sale",
      vesting: "Linear over 12 months",
      cliff: "5% at TGE",
      incentives: "220,000 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "Jun 20, 2026",
    },
    risk: ["Launch has not opened", "Liquidity proof pending finalization"],
    post: {
      marketCap: "$2.4M",
      fdv: "$12.5M",
      liquidity: "$625K",
      holders: "Est. 900",
    },
  },
  {
    id: "nimbus",
    name: "NIMBUS",
    symbol: "NMB",
    status: "upcoming",
    color: "#62d8ff",
    raised: 0,
    goal: 900000,
    saleType: "Liquidity bootstrap",
    quoteAsset: "WBNB",
    price: "Pool seeded at close",
    hardCap: "900 WBNB",
    endsIn: "Starts in 3d 02h",
    summary:
      "Nimbus is a liquidity bootstrap candidate that routes 70% of raised assets directly into its Topaz pool.",
    tags: ["LST", "Yield", "Pool"],
    min: 0.1,
    max: 25,
    contributors: 0,
    avgContribution: 0,
    yourContribution: 0,
    vesting: [
      ["TGE", "0%", "Jun 23"],
      ["Month 2", "20%", "Aug 23"],
      ["Month 5", "30%", "Nov 23"],
      ["Month 10", "50%", "Apr 23"],
    ],
    incentives: [
      ["Epoch 1", "25%", "Jun 23"],
      ["Epoch 2", "25%", "Jun 30"],
      ["Epoch 3", "25%", "Jul 7"],
      ["Epoch 4", "25%", "Jul 14"],
    ],
    proof: {
      lockDuration: "24 months",
      liquidity: "70% of raise",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "Queued after sale",
      vesting: "Linear over 10 months",
      cliff: "No team unlock at TGE",
      incentives: "150,000 veTOPAZ",
      distributor: "Manual bribe queue",
      start: "Jun 23, 2026",
    },
    risk: ["Bootstrap price can move quickly", "Final liquidity depends on raise"],
    post: {
      marketCap: "$1.9M",
      fdv: "$9.0M",
      liquidity: "$630K",
      holders: "Est. 720",
    },
  },
  {
    id: "solace",
    name: "SOLACE",
    symbol: "SLC",
    status: "finalized",
    color: "#31b7ff",
    raised: 750000,
    goal: 750000,
    saleType: "Fair launch",
    quoteAsset: "USDT",
    price: "Finalized",
    hardCap: "750,000 USDT",
    endsIn: "Ended Apr 28",
    summary:
      "Solace finalized successfully and continues to show live lock, vesting, incentive, and holder data on its proof page.",
    tags: ["RWA", "Payments", "Proof"],
    min: 25,
    max: 10000,
    contributors: 991,
    avgContribution: 287,
    yourContribution: 0,
    vesting: [
      ["TGE", "20%", "Apr 28"],
      ["Month 1", "20%", "May 28"],
      ["Month 3", "30%", "Jul 28"],
      ["Month 6", "30%", "Oct 28"],
    ],
    incentives: [
      ["Epoch 1", "35%", "Apr 28"],
      ["Epoch 2", "25%", "May 5"],
      ["Epoch 3", "20%", "May 12"],
      ["Epoch 4", "20%", "May 19"],
    ],
    proof: {
      lockDuration: "12 months",
      liquidity: "220,000 SLC + 280,000 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "0x26aa...e310",
      vesting: "Linear over 6 months",
      cliff: "20% at TGE",
      incentives: "90,000 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "Apr 28, 2026",
    },
    risk: ["Launch finalized", "Review did not include formal audit"],
    post: {
      marketCap: "$1.6M",
      fdv: "$7.5M",
      liquidity: "$520K",
      holders: "1,106",
    },
  },
  {
    id: "mythos",
    name: "MYTHOS",
    symbol: "MYTH",
    status: "refunding",
    color: "#ff6d71",
    raised: 318000,
    goal: 900000,
    saleType: "Fixed price",
    quoteAsset: "USDT",
    price: "Refund open",
    hardCap: "900,000 USDT",
    endsIn: "Refunding until May 10",
    summary:
      "Mythos missed soft cap. Funds remain in the sale vault and buyers can claim refunds from the launch page.",
    tags: ["GameFi", "NFT", "Refund"],
    min: 50,
    max: 15000,
    contributors: 344,
    avgContribution: 236,
    yourContribution: 0,
    vesting: [
      ["Failed", "0%", "May 3"],
      ["Refunds", "100%", "May 10"],
    ],
    incentives: [
      ["No deposit", "0%", "N/A"],
      ["Refunding", "100%", "May 10"],
    ],
    proof: {
      lockDuration: "No LP created",
      liquidity: "No finalization",
      poolType: "No pool created",
      feeMode: "Refund only",
      lockTx: "N/A",
      vesting: "Not funded",
      cliff: "N/A",
      incentives: "Returned to project",
      distributor: "N/A",
      start: "N/A",
    },
    risk: ["Soft cap not reached", "Refund window open"],
    post: {
      marketCap: "$0",
      fdv: "$0",
      liquidity: "$0",
      holders: "0",
    },
  },
];

const icons = {
  launch:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 15c5-1 9-5 11-10 2 2 3 5 3 8-5 1-9 4-11 9-2-2-3-4-3-7Z"/><path d="M9 15l-4 4"/><path d="M14 10h.01"/></svg>',
  stack:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg>',
  vote:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h4l3-8 4 16 3-8h2"/><path d="M4 19h16"/></svg>',
  lock:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  chart:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/></svg>',
  doc:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>',
  settings:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 12a7 7 0 0 0-.1-1.1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.9-1.1L14.3 3h-4.6l-.3 2.9A8 8 0 0 0 7.5 7l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.1l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.9 1.1l.3 2.9h4.6l.3-2.9a8 8 0 0 0 1.9-1.1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1.1Z"/></svg>',
  wallet:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13"/><path d="M17 13h.01"/></svg>',
  plus:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  close:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12"/><path d="M18 6 6 18"/></svg>',
  check:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
  warn:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5"/><path d="M12 17h.01"/></svg>',
  swap:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7h10l-3-3"/><path d="M18 7l-3 3"/><path d="M16 17H6l3 3"/><path d="M6 17l3-3"/></svg>',
};

const state = {
  view: "launchpad",
  tab: "live",
  selectedId: "aurora",
  connected: false,
  contribution: "",
  wizardOpen: false,
  wizardStep: 0,
};

const navItems = [
  { key: "launchpad", label: "Launchpad", icon: icons.launch },
  { key: "portfolio", label: "My Contributions", icon: icons.stack },
  { key: "proof", label: "Proof Center", icon: icons.lock },
  { key: "integration", label: "Topaz V2", icon: icons.doc },
  { key: "voting", label: "veTOPAZ Voting", icon: icons.vote },
  { key: "rewards", label: "Rewards", icon: icons.chart },
  { key: "locks", label: "LP Locks", icon: icons.lock },
  { key: "projects", label: "Project Review", icon: icons.doc },
  { key: "admin", label: "Admin", icon: icons.settings },
];

const tabs = [
  ["live", "Live"],
  ["upcoming", "Upcoming"],
  ["finalized", "Finalized"],
  ["refunding", "Refunding"],
];

const wizardSteps = ["Token", "Sale", "Liquidity", "Vesting", "Incentives", "Review"];

const topazV2 = {
  chain: "BNB Chain",
  chainId: "56",
  router: "0x1E98c8226e7d452e1888e3d3d2F929346321c6c3",
  factory: "0x65E6cD0eF5D3467030103cf3d433034E570b5784",
  voter: "0x2F80F810a114223AC69E34E84E735CaD515dAD67",
  wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  stable: "false",
  poolType: "V2 volatile ERC20 LP",
};

const contributions = [
  {
    launchId: "aurora",
    amount: 1200,
    allocation: "26,666.67 AUR",
    status: "ready",
    action: "Contribute preview",
    date: "Jun 15, 2026",
  },
  {
    launchId: "solace",
    amount: 650,
    allocation: "18,420 SLC",
    status: "claimable",
    action: "Claim tokens",
    date: "Apr 28, 2026",
  },
  {
    launchId: "mythos",
    amount: 880,
    allocation: "Refund open",
    status: "refundable",
    action: "Claim refund",
    date: "May 3, 2026",
  },
];

const reviewQueue = [
  {
    project: "NEXORA",
    stage: "Liquidity review",
    owner: "Project wallet",
    risk: "Medium",
    next: "Confirm V2 router/factory route",
    progress: 72,
  },
  {
    project: "NIMBUS",
    stage: "Token disclosure",
    owner: "Topaz reviewer",
    risk: "Low",
    next: "Approve bootstrap terms",
    progress: 58,
  },
  {
    project: "CIRRUS",
    stage: "Initial intake",
    owner: "Applicant",
    risk: "High",
    next: "Replace custom-tax token",
    progress: 24,
  },
];

const lpLocks = [
  {
    pair: "AUR/USDT",
    tokenId: "0xPool...AUR",
    value: "$950K",
    duration: "365 days",
    fees: "$18,420",
    beneficiary: "Project treasury",
    status: "Locked",
  },
  {
    pair: "SLC/USDT",
    tokenId: "0xPool...SLC",
    value: "$520K",
    duration: "12 months",
    fees: "$7,840",
    beneficiary: "Solace treasury",
    status: "Locked",
  },
  {
    pair: "NXO/WBNB",
    tokenId: "Queued pool",
    value: "Pending",
    duration: "Permanent",
    fees: "Pending",
    beneficiary: "Nexora treasury",
    status: "Pre-launch",
  },
];

const incentiveRows = [
  ["AUR/USDT", "300,000 veTOPAZ", "Epoch 1-6", "Funded", "High"],
  ["DWR/USDT", "185,000 veTOPAZ", "Epoch 1-4", "Funded", "Medium"],
  ["NXO/WBNB", "220,000 veTOPAZ", "Queued", "Pending finalization", "High"],
  ["NMB/WBNB", "150,000 veTOPAZ", "Queued", "Pending review", "Medium"],
];

const app = document.getElementById("app");

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function quoteAsset(launch) {
  return launch.quoteAsset || "USDT";
}

function pct(launch) {
  if (!launch.goal) return 0;
  return Math.min(100, Math.round((launch.raised / launch.goal) * 10000) / 100);
}

function currentLaunch() {
  return launches.find((launch) => launch.id === state.selectedId) || launches[0];
}

function filteredLaunches() {
  return launches.filter((launch) => launch.status === state.tab);
}

function renderLogo(size = "small") {
  const className = size === "hero" ? "hero-logo" : "brand-mark";
  return `
    <div class="${className}" aria-hidden="true">
      <svg viewBox="0 0 48 58" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M24 2 43 14v28L24 56 5 42V14L24 2Z"/>
        <path d="M24 2v54"/>
        <path d="M5 14l19 10 19-10"/>
        <path d="m5 42 19-18 19 18"/>
      </svg>
    </div>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        ${renderLogo()}
        <div class="brand-copy">
          <strong>TOPAZ</strong>
          <span>FOUNDRY</span>
        </div>
      </div>
      <nav class="nav" aria-label="Prototype navigation">
        ${navItems
          .map(
            (item) => `
              <button class="nav-button ${state.view === item.key ? "active" : ""}" type="button" data-view="${item.key}">
                ${item.icon}
                <span>${item.label}</span>
              </button>
            `,
          )
          .join("")}
      </nav>
      <div class="sidebar-card">
        <div class="label">veTOPAZ Balance</div>
        <strong>12,480.75</strong>
        <div class="label">Voting Power</div>
        <strong>8,342.21</strong>
        <button class="button ghost" type="button">Go to veTOPAZ</button>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="tagline">Liquidity rooted on Topaz</div>
      <div class="topbar-actions">
        <div class="network-pill"><span class="dot"></span>BNB Chain 56</div>
        <button class="button gold" type="button" data-action="open-wizard">${icons.plus} New launch</button>
        <button class="button primary" type="button" data-action="connect-wallet">
          ${icons.wallet}
          ${state.connected ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </div>
    </header>
  `;
}

function renderTabs() {
  const counts = tabs.reduce((acc, [key]) => {
    acc[key] = launches.filter((launch) => launch.status === key).length;
    return acc;
  }, {});

  return `
    <div class="tabs" role="tablist" aria-label="Launch status">
      ${tabs
        .map(
          ([key, label]) => `
            <button class="tab ${state.tab === key ? "active" : ""}" type="button" role="tab" data-tab="${key}">
              ${label}
              <span class="count">${counts[key]}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderLaunchRow(launch) {
  const progress = pct(launch);
  return `
    <button class="launch-row ${launch.id === state.selectedId ? "selected" : ""}" type="button" data-select="${launch.id}" style="--logo-color:${launch.color}">
      <div class="project-cell">
        <div class="token-logo"><span>${launch.symbol.slice(0, 2)}</span></div>
        <div class="project-name">
          <strong>${launch.name}</strong>
          <span>
            <span class="micro">${launch.symbol}</span>
            <span class="status ${launch.status}">${launch.status}</span>
          </span>
        </div>
      </div>
      <div class="money">
        <strong>${money(launch.raised)}</strong>
        <span>/ ${money(launch.goal)}</span>
      </div>
      <div class="progress-cell">
        <strong>${launch.status === "upcoming" ? launch.endsIn : `${progress}%`}</strong>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="--value:${progress}%"></div>
        </div>
      </div>
    </button>
  `;
}

function renderLaunchList() {
  const rows = filteredLaunches();
  return `
    <section class="panel" aria-label="Launch list">
      <div class="table-head">
        <span>Project</span>
        <span>Raised / Goal</span>
        <span>Progress</span>
      </div>
      <div class="launch-list">
        ${rows.length ? rows.map(renderLaunchRow).join("") : '<div class="panel pad muted">No launches in this state.</div>'}
      </div>
    </section>
  `;
}

function renderHero(launch) {
  return `
    <section class="panel hero-panel" style="--logo-color:${launch.color}">
      <div class="hero-top">
        ${renderLogo("hero")}
        <div>
          <div class="hero-title">
            <h2>${launch.name}</h2>
            <span class="status ${launch.status}">${launch.status}</span>
          </div>
          <p class="hero-summary">${launch.summary}</p>
          <div class="chips">
            ${launch.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="metrics">
        <div class="metric"><span>Sale Type</span><strong>${launch.saleType}</strong></div>
        <div class="metric"><span>Quote Asset</span><strong>${quoteAsset(launch)}</strong></div>
        <div class="metric"><span>Price</span><strong>${launch.price}</strong></div>
        <div class="metric"><span>Pool Type</span><strong>${launch.proof.poolType}</strong></div>
        <div class="metric"><span>Timing</span><strong>${launch.endsIn}</strong></div>
      </div>
    </section>
  `;
}

function renderProofStrip() {
  return `
    <section class="panel proof-strip" aria-label="Launch proof summary">
      <div class="proof-item"><span class="proof-icon">${icons.lock}</span><span class="proof-text">LP locked</span></div>
      <div class="proof-item"><span class="proof-icon">${icons.check}</span><span class="proof-text">Vesting</span></div>
      <div class="proof-item"><span class="proof-icon">${icons.check}</span><span class="proof-text">Incentives funded</span></div>
      <div class="proof-item"><span class="proof-icon warn">${icons.vote}</span><span class="proof-text">veTOPAZ incentives</span></div>
    </section>
  `;
}

function renderSaleProgress(launch) {
  const progress = pct(launch);
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Sale Progress</h3>
        <strong>${progress}%</strong>
      </div>
      <div class="muted">${money(launch.raised)} / ${money(launch.goal)}</div>
      <div class="big-progress">
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="--value:${progress}%"></div>
        </div>
      </div>
      <div class="stat-row">
        <div class="metric"><span>Contributors</span><strong>${launch.contributors.toLocaleString()}</strong></div>
        <div class="metric"><span>Avg. Contribution</span><strong>${launch.avgContribution.toLocaleString()} ${quoteAsset(launch)}</strong></div>
        <div class="metric"><span>Min / Max</span><strong>${launch.min.toLocaleString()} / ${launch.max.toLocaleString()} ${quoteAsset(launch)}</strong></div>
        <div class="metric"><span>Your Contribution</span><strong>${launch.yourContribution.toLocaleString()} ${quoteAsset(launch)}</strong></div>
      </div>
    </section>
  `;
}

function renderTimeline(title, items, gold = false) {
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>${title}</h3>
        <span class="micro">Public schedule</span>
      </div>
      <div class="timeline">
        <div class="timeline-bar ${gold ? "gold" : ""}" style="--segments:${items
          .map((item) => item[1].replace("%", "fr"))
          .join(" ")}">
          ${items.map(() => "<span></span>").join("")}
        </div>
        <div class="timeline-labels" style="--count:${items.length}">
          ${items
            .map(
              ([label, amount, date]) => `
                <div class="timeline-label">
                  <strong>${label}</strong>
                  <span class="micro">${amount}</span>
                  <span class="micro">${date}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderRisk(launch) {
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Risk Flags</h3>
        <button class="button ghost" type="button" data-action="show-toast">View full disclosure</button>
      </div>
      <div class="risk-list">
        ${launch.risk
          .map(
            (risk) => `
              <div class="risk-item">
                ${icons.warn}
                <span>${risk}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFlow() {
  const steps = [
    ["Sale", "Buyer contributions enter the vault."],
    ["Quote", "Router quotes V2 liquidity with nonzero slippage mins."],
    ["Pool", "A volatile Topaz V2 pool is created or reused."],
    ["Lock", "ERC20 LP tokens mint directly to the fee-split locker."],
    ["Fees", "No-gauge LP fees can be claimed and split."],
    ["Dashboard", "Proof stays live after TGE."],
  ];

  return `
    <section class="panel pad flow-panel">
      <div class="panel-title">
        <h3>Launch Flow</h3>
        <span class="micro">MVP path</span>
      </div>
      <div class="flow">
        ${steps
          .map(
            ([label, text]) => `
              <div class="flow-step">
                <strong>${label}</strong>
                <span class="micro">${text}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDetail() {
  const launch = currentLaunch();
  return `
    <div class="detail">
      ${renderHero(launch)}
      ${renderProofStrip()}
      <div class="subgrid">
        ${renderSaleProgress(launch)}
        ${renderTimeline("Vesting Schedule", launch.vesting, true)}
      </div>
      ${renderTimeline("Incentive Schedule (veTOPAZ)", launch.incentives)}
      ${renderRisk(launch)}
      ${renderFlow()}
    </div>
  `;
}

function estimatedTokens(launch) {
  const amount = Number(state.contribution || 0);
  if (!amount || launch.status !== "live") return "0.0";
  if (launch.id === "aurora") return (amount / 0.045).toLocaleString(undefined, { maximumFractionDigits: 2 });
  return "Pro rata";
}

function renderContribute(launch) {
  const disabled = launch.status !== "live";
  const asset = quoteAsset(launch);
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Contribute</h3>
        <button class="button ghost" type="button" data-action="show-toast">How it works</button>
      </div>
      <div class="input-wrap">
        <div class="field-label"><span>You pay</span><span>Balance: ${state.connected ? `84,120 ${asset}` : "--"}</span></div>
        <div class="amount-input">
          <input data-input="contribution" type="number" min="0" step="1" value="${state.contribution}" placeholder="0.0" ${disabled ? "disabled" : ""} />
          <select class="asset-select" aria-label="Pay asset" ${disabled ? "disabled" : ""}>
            <option>${asset}</option>
            <option>${asset === "USDT" ? "WBNB" : "USDT"}</option>
          </select>
        </div>
        <div class="quick-grid">
          ${[25, 50, 75, 100]
            .map((value) => `<button type="button" data-quick="${value}" ${disabled ? "disabled" : ""}>${value === 100 ? "MAX" : `${value}%`}</button>`)
            .join("")}
        </div>
        <div class="swap-control" aria-hidden="true">${icons.swap}</div>
        <div class="field-label"><span>You receive (est.)</span><span>${launch.symbol}</span></div>
        <div class="amount-input">
          <input readonly value="${estimatedTokens(launch)}" aria-label="Estimated received tokens" />
          <select class="asset-select" aria-label="Receive asset" disabled>
            <option>${launch.symbol}</option>
          </select>
        </div>
        <button class="button primary" type="button" data-action="contribute" ${disabled ? "disabled" : ""}>
          ${state.connected ? "Contribute" : "Connect Wallet"}
        </button>
      </div>
      <div class="limits">
        <div class="metric"><span>Minimum</span><strong>${launch.min.toLocaleString()} ${asset}</strong></div>
        <div class="metric"><span>Maximum</span><strong>${launch.max.toLocaleString()} ${asset}</strong></div>
      </div>
      <div class="success-note ${state.connected && state.contribution ? "show" : ""}">
        Ready to submit a simulated contribution of ${Number(state.contribution || 0).toLocaleString()} ${asset}.
      </div>
    </section>
  `;
}

function renderProofPanel(launch) {
  const groups = [
    [
      icons.lock,
      "LP Locked",
      "Locked",
      [
        ["Pool Type", launch.proof.poolType],
        ["Lock Duration", launch.proof.lockDuration],
        ["Liquidity", launch.proof.liquidity],
        ["Lock TX", launch.proof.lockTx],
      ],
    ],
    [
      icons.check,
      "Vesting Configured",
      "Verified",
      [
        ["Cliff", launch.proof.cliff],
        ["Vesting", launch.proof.vesting],
      ],
    ],
    [
      icons.vote,
      "Incentives Funded",
      "Funded",
      [
        ["Total Incentives", launch.proof.incentives],
        ["Distributor", launch.proof.distributor],
        ["Fee Mode", launch.proof.feeMode],
        ["Start", launch.proof.start],
      ],
    ],
  ];

  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Proof</h3>
        <button class="button ghost" type="button" data-action="show-toast">Proof page</button>
      </div>
      <div class="proof-list">
        ${groups
          .map(
            ([icon, title, status, rows]) => `
              <div class="proof-group">
                <span class="proof-icon">${icon}</span>
                <div>
                  <h3>${title}</h3>
                  ${rows
                    .map(
                      ([label, value]) => `
                        <div class="proof-row">
                          <span>${label}</span>
                          <strong>${value}</strong>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
                <span class="verified">${status}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStatsPanel(launch) {
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Post-Launch Stats (Est.)</h3>
        <span class="micro">Preview</span>
      </div>
      <div class="mini-stats">
        <div class="metric"><span>Est. Market Cap</span><strong>${launch.post.marketCap}</strong></div>
        <div class="metric"><span>Est. FDV</span><strong>${launch.post.fdv}</strong></div>
        <div class="metric"><span>Est. Liquidity</span><strong>${launch.post.liquidity}</strong></div>
        <div class="metric"><span>Holders (Est.)</span><strong>${launch.post.holders}</strong></div>
      </div>
      <svg class="sparkline" viewBox="0 0 320 110" aria-hidden="true">
        <path class="fill" d="M0 92 C20 70 36 82 55 54 S95 41 113 48 143 51 163 42 201 38 223 48 255 64 278 44 305 35 320 30 L320 110 L0 110Z"/>
        <path class="line" d="M0 92 C20 70 36 82 55 54 S95 41 113 48 143 51 163 42 201 38 223 48 255 64 278 44 305 35 320 30"/>
      </svg>
    </section>
  `;
}

function renderSideStack() {
  const launch = currentLaunch();
  return `
    <aside class="side-stack">
      ${renderContribute(launch)}
      ${renderProofPanel(launch)}
      ${renderStatsPanel(launch)}
    </aside>
  `;
}

function renderPageHeader(title, description, action = "") {
  return `
    <div class="section-header">
      <div>
        <h1>${title}</h1>
        <p class="muted">${description}</p>
      </div>
      ${action}
    </div>
  `;
}

function renderKpiGrid(items) {
  return `
    <div class="kpi-grid">
      ${items
        .map(
          ([label, value, note]) => `
            <div class="panel pad kpi">
              <span>${label}</span>
              <strong>${value}</strong>
              <small>${note}</small>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDataTable(headers, rows) {
  return `
    <div class="data-table">
      <div class="data-head" style="--cols:${headers.map(() => "minmax(0, 1fr)").join(" ")}">
        ${headers.map((header) => `<span>${header}</span>`).join("")}
      </div>
      ${rows
        .map(
          (row) => `
            <div class="data-row" style="--cols:${headers.map(() => "minmax(0, 1fr)").join(" ")}">
              ${row.map((cell) => `<span>${cell}</span>`).join("")}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function launchById(id) {
  return launches.find((launch) => launch.id === id) || launches[0];
}

function renderLaunchpadView() {
  return `
    <div class="layout">
      <div class="workspace">
        ${renderPageHeader(
          "Live launches",
          "Review sale terms, LP lock proof, vesting, and veTOPAZ incentives before participating.",
          renderTabs(),
        )}
        <div class="grid">
          ${renderLaunchList()}
          ${renderDetail()}
        </div>
      </div>
      ${renderSideStack()}
    </div>
  `;
}

function renderPortfolioView() {
  const rows = contributions.map((item) => {
    const launch = launchById(item.launchId);
    return [
      `<strong>${launch.name}</strong><span class="micro">${launch.symbol}</span>`,
      `${item.amount.toLocaleString()} ${quoteAsset(launch)}`,
      item.allocation,
      `<span class="status ${item.status}">${item.status}</span>`,
      `<button class="button ghost" type="button" data-action="${item.status === "refundable" ? "claim-refund" : "claim-token"}">${item.action}</button>`,
    ];
  });

  return `
    <div class="page-stack">
      ${renderPageHeader(
        "My Contributions",
        "Track deposits, claimable tokens, refunds, and post-launch records from one buyer portfolio.",
        '<button class="button primary" type="button" data-action="connect-wallet">' + icons.wallet + (state.connected ? " Wallet Connected" : " Connect Wallet") + "</button>",
      )}
      ${renderKpiGrid([
        ["Deposited", "2,730 quote units", "USDT/WBNB launches"],
        ["Claimable", "18,420 SLC", "Finalized launch"],
        ["Refundable", "880 USDT", "Soft-cap failure"],
        ["Pending", "26,666.67 AUR", "Live allocation preview"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Contribution Ledger</h3>
          <span class="micro">Wallet-scoped view</span>
        </div>
        ${renderDataTable(["Launch", "Deposit", "Allocation", "State", "Action"], rows)}
      </section>
      <div class="split-layout">
        <section class="panel pad callout">
          <h3>Refund Screen</h3>
          <p class="muted">Mythos missed soft cap. Funds remain in the sale vault and can be returned without admin approval.</p>
          <div class="review-list">
            <div class="review-row"><span>Refund amount</span><strong>880 USDT</strong></div>
            <div class="review-row"><span>Refund window</span><strong>Open until May 10</strong></div>
            <div class="review-row"><span>Vault status</span><strong>Refund enabled</strong></div>
          </div>
          <button class="button primary" type="button" data-action="claim-refund">Claim Refund</button>
        </section>
        <section class="panel pad callout">
          <h3>Finalized Launch Claim</h3>
          <p class="muted">Solace finalized, LP is locked, and token claims are open according to the launch schedule.</p>
          <div class="review-list">
            <div class="review-row"><span>Claimable now</span><strong>18,420 SLC</strong></div>
            <div class="review-row"><span>LP proof</span><strong>Verified</strong></div>
            <div class="review-row"><span>Next vesting event</span><strong>May 28</strong></div>
          </div>
          <button class="button primary" type="button" data-action="claim-token">Claim Tokens</button>
        </section>
      </div>
    </div>
  `;
}

function renderProofCenterView() {
  const launch = currentLaunch();
  const proofRows = [
    ["Sale contract", "0xF0und...AUR", "Verified source", "Ready"],
    ["Token contract", "0xAUR0...2026", "Fixed supply", "Ready"],
    ["Topaz pair", `${launch.symbol}/${quoteAsset(launch)}`, launch.proof.poolType, "Ready"],
    ["LP token lock", launch.proof.lockTx, launch.proof.lockDuration, "Ready"],
    ["Vesting vault", "0xVest...Vault", launch.proof.vesting, "Ready"],
    ["Fee route", "pool.claimFees()", launch.proof.feeMode, "Ready"],
    ["Incentives", launch.proof.distributor, launch.proof.incentives, "Ready"],
  ];

  return `
    <div class="page-stack">
      ${renderPageHeader(
        "Proof Center",
        "A permanent proof page for buyers, voters, and reviewers to inspect what happened after launch.",
        '<button class="button primary" type="button" data-action="show-toast">Copy proof link</button>',
      )}
      <div class="proof-page-grid">
        <section class="panel hero-panel" style="--logo-color:${launch.color}">
          <div class="hero-top">
            ${renderLogo("hero")}
            <div>
              <div class="hero-title">
                <h2>${launch.name} Proof Page</h2>
                <span class="status ${launch.status}">${launch.status}</span>
              </div>
              <p class="hero-summary">${launch.summary}</p>
              <div class="chips">
                <span class="chip">Sale terms</span>
                <span class="chip">LP lock proof</span>
                <span class="chip">Vesting vault</span>
                <span class="chip">Incentive deposits</span>
              </div>
            </div>
          </div>
          <div class="metrics">
            <div class="metric"><span>Raised</span><strong>${money(launch.raised)}</strong></div>
            <div class="metric"><span>Liquidity</span><strong>${launch.post.liquidity}</strong></div>
            <div class="metric"><span>Lock Duration</span><strong>${launch.proof.lockDuration}</strong></div>
            <div class="metric"><span>Pool</span><strong>${launch.proof.poolType}</strong></div>
            <div class="metric"><span>Risk Flags</span><strong>${launch.risk.length}</strong></div>
          </div>
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Proof Checklist</h3>
            <span class="verified">Public</span>
          </div>
          ${renderDataTable(["Item", "Address / Ref", "Detail", "Status"], proofRows)}
        </section>
      </div>
      <div class="split-layout">
        ${renderTimeline("Vesting Schedule", launch.vesting, true)}
        ${renderTimeline("Incentive Schedule (veTOPAZ)", launch.incentives)}
      </div>
      ${renderRisk(launch)}
    </div>
  `;
}

function renderIntegrationView() {
  const addressRows = [
    ["Chain", topazV2.chain, `Chain ID ${topazV2.chainId}`],
    ["Topaz V2 Router", topazV2.router, "addLiquidity / addLiquidityETH"],
    ["Pool Factory", topazV2.factory, "getPool / createPool"],
    ["Topaz Voter", topazV2.voter, "Later gauge upgrade path"],
    ["WBNB", topazV2.wbnb, "Native BNB pair wrapper"],
  ];
  const abiRows = [
    ["Factory", "getPool(tokenA, tokenB, stable)", "Find existing V2 pool"],
    ["Factory", "createPool(tokenA, tokenB, stable)", "Create volatile pool if missing"],
    ["Router", "quoteAddLiquidity(...)", "Preview amounts and LP output"],
    ["Router", "addLiquidity(..., to=locker, ...)", "Mint ERC20 LP directly to locker"],
    ["Pool", "claimFees()", "Claim token0/token1 fees into locker"],
    ["Pool", "claimable0/claimable1(account)", "Preview locker fee accrual"],
  ];
  const flowRows = [
    ["1", "Bonding completes", "Project token and quote asset are in the sale vault."],
    ["2", "Choose quote", "Use WBNB or USDT for normal launches."],
    ["3", "Use stable=false", "New launch tokens use volatile constant-product pools."],
    ["4", "Quote liquidity", "Call quoteAddLiquidity and apply nonzero slippage mins."],
    ["5", "Mint LP to locker", "Call addLiquidity with the locker as recipient."],
    ["6", "Claim and split fees", "Locker calls pool.claimFees while the pool is non-gauged."],
  ];

  return `
    <div class="page-stack">
      ${renderPageHeader(
        "Topaz V2 Integration",
        "BNB Chain launchpad path for familiar V2 liquidity, rooted ERC20 LP-token locking, and programmable fee rights.",
        '<button class="button primary" type="button" data-action="show-toast">Copy integration spec</button>',
      )}
      ${renderKpiGrid([
        ["Network", "BNB Chain", "Mainnet chain id 56"],
        ["Default pool", "Volatile V2", "stable=false"],
        ["LP asset", "ERC20 pool token", "Pool address is LP token"],
        ["Fee path", "claimFees()", "No-gauge locker split"],
      ])}
      <div class="split-layout wide-left">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Mainnet Addresses</h3>
            <span class="micro">Implementation anchors</span>
          </div>
          ${renderDataTable(["Contract", "Address / Value", "Use"], addressRows)}
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Launch Defaults</h3>
            <span class="micro">First version</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Quote asset</span><strong>WBNB or USDT</strong></div>
            <div class="review-row"><span>Pool flag</span><strong>stable=false</strong></div>
            <div class="review-row"><span>Slippage mins</span><strong>Required, never 0</strong></div>
            <div class="review-row"><span>LP recipient</span><strong>Fee-split locker</strong></div>
            <div class="review-row"><span>Tax tokens</span><strong>Blocked in MVP</strong></div>
          </div>
        </section>
      </div>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Finalize Flow</h3>
          <span class="micro">Bonding to Topaz V2 lock</span>
        </div>
        ${renderDataTable(["Step", "Action", "Product meaning"], flowRows)}
      </section>
      <div class="split-layout">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Minimal ABI Surface</h3>
            <span class="micro">What contracts need</span>
          </div>
          ${renderDataTable(["Area", "Function", "Why it matters"], abiRows)}
        </section>
        <section class="panel pad callout">
          <h3>Fee Model Note</h3>
          <p class="muted">The first launchpad version should focus on non-gauged V2 volatile pools. In that mode, the locker holding the ERC20 LP token can call claimFees() and split token0/token1 fees. Once a pool has a gauge, fee and reward handling should move to the Topaz voter/reward path instead of assuming passive LP-side fee ownership.</p>
          <div class="review-list">
            <div class="review-row"><span>No gauge</span><strong>Locker claims LP fees</strong></div>
            <div class="review-row"><span>Gauge exists</span><strong>Use voter/reward contracts</strong></div>
            <div class="review-row"><span>Launchpad revenue</span><strong>Fee BPS split, no swap tax</strong></div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderVotingView() {
  return `
    <div class="page-stack">
      ${renderPageHeader(
        "veTOPAZ Voting",
        "Plan launch incentives around the pools that need voter attention after TGE.",
        '<button class="button primary" type="button" data-action="show-toast">' + icons.vote + " Open vote planner</button>",
      )}
      ${renderKpiGrid([
        ["Queued incentives", "855,000 veTOPAZ", "Across 4 launch pools"],
        ["Funded pools", "2", "Ready for voters"],
        ["Pending pools", "2", "Waiting on finalization"],
        ["Next epoch", "Jun 18", "Incentive cutoff"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Incentive Planner</h3>
          <span class="micro">Launch pools only</span>
        </div>
        ${renderDataTable(["Pool", "Budget", "Schedule", "State", "Priority"], incentiveRows)}
      </section>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Voter Readiness</h3>
          <span class="micro">What voters need to know</span>
        </div>
        <div class="flow">
          <div class="flow-step"><strong>Pool live</strong><span class="micro">Pair is created and seeded on Topaz.</span></div>
          <div class="flow-step"><strong>LP locked</strong><span class="micro">Liquidity proof is visible before voting starts.</span></div>
          <div class="flow-step"><strong>Rewards funded</strong><span class="micro">Incentive budget is deposited or queued.</span></div>
          <div class="flow-step"><strong>Gauge active</strong><span class="micro">Pool can receive voter-directed attention.</span></div>
          <div class="flow-step"><strong>Stats tracked</strong><span class="micro">Volume and fees stay visible after launch.</span></div>
        </div>
      </section>
    </div>
  `;
}

function renderRewardsView() {
  return `
    <div class="page-stack">
      ${renderPageHeader("Rewards", "Monitor launch incentives, voter reward deposits, and post-launch reward status.")}
      ${renderKpiGrid([
        ["Claimable rewards", "$1,284", "Prototype wallet"],
        ["Active launch rewards", "485,000 veTOPAZ", "Funded now"],
        ["Pending rewards", "370,000 veTOPAZ", "Queued after finalization"],
        ["Reward sources", "4", "Launch projects"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Reward Sources</h3>
          <span class="micro">Launch-backed incentives</span>
        </div>
        ${renderDataTable(
          ["Source", "Pool", "Amount", "Claim state"],
          [
            ["Aurora launch budget", "AUR/USDT", "300,000 veTOPAZ", "Active"],
            ["Defiware launch budget", "DWR/USDT", "185,000 veTOPAZ", "Active"],
            ["Nexora escrow", "NXO/WBNB", "220,000 veTOPAZ", "Queued"],
            ["Nimbus escrow", "NMB/WBNB", "150,000 veTOPAZ", "Queued"],
          ],
        )}
      </section>
    </div>
  `;
}

function renderLpLocksView() {
  return `
    <div class="page-stack">
      ${renderPageHeader(
        "LP Locks",
        "Inspect the locked ERC20 LP tokens that make launchpad pools easier to trust.",
        '<button class="button primary" type="button" data-action="show-toast">Open locker proof</button>',
      )}
      ${renderKpiGrid([
        ["Locked liquidity", "$1.47M", "Across launch pools"],
        ["Fees collected", "$26,260", "Preserved for beneficiaries"],
        ["Permanent locks", "1", "Fee-split model"],
        ["Queued locks", "1", "Waiting on sale finalization"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Lock Registry</h3>
          <span class="micro">Public LP evidence</span>
        </div>
        ${renderDataTable(
          ["Pair", "LP Token", "Value", "Duration", "Fees", "Beneficiary", "Status"],
          lpLocks.map((lock) => [
            lock.pair,
            lock.tokenId,
            lock.value,
            lock.duration,
            lock.fees,
            lock.beneficiary,
            `<span class="status ${lock.status === "Locked" ? "live" : "upcoming"}">${lock.status}</span>`,
          ]),
        )}
      </section>
      <section class="panel pad callout">
        <h3>Fee-split locker path</h3>
        <p class="muted">The premium trust option is permanent LP custody with claimable fees. That avoids the dead-burn problem while still proving the project cannot pull launch liquidity.</p>
      </section>
    </div>
  `;
}

function renderProjectsView() {
  return `
    <div class="page-stack">
      ${renderPageHeader(
        "Project Review",
        "Application review, disclosure checks, and launch readiness before a project appears publicly.",
        '<button class="button primary" type="button" data-action="open-wizard">' + icons.plus + " New application</button>",
      )}
      ${renderKpiGrid([
        ["Applications", "3", "In review"],
        ["Ready to publish", "1", "Needs final approval"],
        ["Blocked", "1", "Token issue"],
        ["Avg. review time", "2.4 days", "Prototype target"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Review Queue</h3>
          <span class="micro">Reviewer workspace</span>
        </div>
        ${renderDataTable(
          ["Project", "Stage", "Owner", "Risk", "Next step", "Progress"],
          reviewQueue.map((item) => [
            item.project,
            item.stage,
            item.owner,
            item.risk,
            item.next,
            `<div class="progress-track"><div class="progress-fill" style="--value:${item.progress}%"></div></div>`,
          ]),
        )}
      </section>
      <div class="split-layout">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Disclosure Checklist</h3>
            <span class="micro">Required before publish</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Verified token source</span><strong>Required</strong></div>
            <div class="review-row"><span>Mint authority disclosed</span><strong>Required</strong></div>
            <div class="review-row"><span>LP percentage configured</span><strong>Required</strong></div>
            <div class="review-row"><span>Vesting vault funded</span><strong>Required</strong></div>
            <div class="review-row"><span>Launch incentives funded</span><strong>Required</strong></div>
          </div>
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Risk Labels</h3>
            <span class="micro">Buyer-facing language</span>
          </div>
          <div class="risk-list">
            <div class="risk-item">${icons.warn}<span>Reviewed disclosures does not mean audited or risk-free.</span></div>
            <div class="risk-item">${icons.warn}<span>Custom token permissions must be shown plainly on the launch page.</span></div>
            <div class="risk-item">${icons.warn}<span>Liquidity proof appears only after sale finalization unless prefunded.</span></div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderAdminView() {
  return `
    <div class="page-stack">
      ${renderPageHeader("Admin Dashboard", "Operational controls for launch readiness, finalization, refunds, and proof publication.")}
      ${renderKpiGrid([
        ["Finalization tasks", "6", "2 need contract addresses"],
        ["Refund tasks", "1", "Mythos enabled"],
        ["Proof pages", "5", "3 public, 2 queued"],
        ["Launch health", "92%", "Prototype score"],
      ])}
      <div class="split-layout wide-left">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Launch Operations</h3>
            <span class="micro">Admin actions</span>
          </div>
          ${renderDataTable(
            ["Action", "Launch", "Dependency", "State"],
            [
              ["Finalize sale", "AURORA", "Soft cap met", "Ready"],
              ["Enable token claim", "SOLACE", "LP proof verified", "Complete"],
              ["Enable refunds", "MYTHOS", "Soft cap failed", "Complete"],
              ["Create Topaz pair", "NEXORA", "Router address", "Blocked"],
              ["Fund incentives", "NIMBUS", "Gauge route", "Pending"],
            ],
          )}
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Readiness Gates</h3>
            <span class="micro">Cannot skip</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Sale vault funded</span><strong>Pass</strong></div>
            <div class="review-row"><span>LP lock adapter wired</span><strong>Needs address</strong></div>
            <div class="review-row"><span>Vesting vault funded</span><strong>Pass</strong></div>
            <div class="review-row"><span>Gauge incentive route</span><strong>Needs confirmation</strong></div>
            <div class="review-row"><span>Proof page published</span><strong>Pass</strong></div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderCurrentView() {
  switch (state.view) {
    case "portfolio":
      return renderPortfolioView();
    case "proof":
      return renderProofCenterView();
    case "integration":
      return renderIntegrationView();
    case "voting":
      return renderVotingView();
    case "rewards":
      return renderRewardsView();
    case "locks":
      return renderLpLocksView();
    case "projects":
      return renderProjectsView();
    case "admin":
      return renderAdminView();
    case "launchpad":
    default:
      return renderLaunchpadView();
  }
}

function renderWizardContent() {
  const step = wizardSteps[state.wizardStep];
  if (step === "Review") {
    return `
      <div class="review-list">
        ${[
          ["Token", "Fixed supply, no transfer tax"],
          ["Sale", "Fair launch with soft-cap refunds"],
          ["Liquidity", "60% of raise to Topaz V2 volatile LP"],
          ["LP Lock", "ERC20 LP token minted directly to locker"],
          ["Vesting", "10% TGE, remainder over 9 months"],
          ["Incentives", "No-gauge fee split first, gauge incentives later"],
        ]
          .map(([label, value]) => `<div class="review-row"><span>${label}</span><strong>${value}</strong></div>`)
          .join("")}
      </div>
    `;
  }

  const fields = {
    Token: [
      ["Token name", "Aurora"],
      ["Symbol", "AUR"],
      ["Total supply", "100,000,000"],
      ["Contract mode", "Standard fixed supply"],
      ["Project summary", "A short launch description buyers can inspect.", "textarea"],
    ],
    Sale: [
      ["Sale type", "Fair launch"],
      ["Accepted asset", "USDT"],
      ["Soft cap", "800,000"],
      ["Hard cap", "2,000,000"],
      ["Wallet max", "50,000"],
    ],
    Liquidity: [
      ["Raise to LP", "60%"],
      ["Quote asset", "USDT or WBNB"],
      ["Topaz pool type", "V2 volatile, stable=false"],
      ["Slippage mins", "1% default, never zero"],
      ["Lock duration", "Permanent fee-split lock"],
      ["LP recipient", "Fee-split locker"],
      ["Fee split", "80% creator / 20% launchpad"],
    ],
    Vesting: [
      ["Team allocation", "15%"],
      ["TGE unlock", "10%"],
      ["Vesting length", "9 months"],
      ["Treasury lock", "12 months"],
    ],
    Incentives: [
      ["Incentive budget", "300,000 veTOPAZ"],
      ["Epoch count", "4"],
      ["First fee route", "pool.claimFees() to locker"],
      ["Gauge posture", "Optional later upgrade"],
    ],
  };

  return `
    <div class="form-grid">
      ${fields[step]
        .map(([label, value, type]) => {
          if (type === "textarea") {
            return `
              <div class="form-field full">
                <label>${label}</label>
                <textarea>${value}</textarea>
              </div>
            `;
          }
          return `
            <div class="form-field">
              <label>${label}</label>
              <input value="${value}" />
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderWizard() {
  return `
    <div class="drawer ${state.wizardOpen ? "open" : ""}" aria-hidden="${state.wizardOpen ? "false" : "true"}">
      <div class="drawer-backdrop" data-action="close-wizard"></div>
      <section class="drawer-panel" role="dialog" aria-label="Create launch prototype">
        <div class="drawer-head">
          <div>
            <h2>Create Launch</h2>
            <p class="muted">Configure the sale, liquidity lock, vesting, and first incentives before review.</p>
          </div>
          <button class="button icon-only" type="button" data-action="close-wizard" aria-label="Close drawer">${icons.close}</button>
        </div>
        <div class="wizard-steps">
          ${wizardSteps
            .map(
              (step, index) => `
                <button class="wizard-step ${index === state.wizardStep ? "active" : ""}" type="button" data-step="${index}">
                  ${index + 1}. ${step}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="panel pad">
          <div class="panel-title">
            <h3>${wizardSteps[state.wizardStep]}</h3>
            <span class="micro">Prototype form</span>
          </div>
          ${renderWizardContent()}
        </div>
        <div class="drawer-actions">
          <button class="button" type="button" data-action="prev-step" ${state.wizardStep === 0 ? "disabled" : ""}>Back</button>
          <button class="button primary" type="button" data-action="next-step">
            ${state.wizardStep === wizardSteps.length - 1 ? "Submit for review" : "Continue"}
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderToast() {
  return '<div class="toast" role="status" aria-live="polite" id="toast">Prototype action captured. In a production build this opens the proof, disclosure, or transaction flow.</div>';
}

function renderApp() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderCurrentView()}
      </main>
    </div>
    ${renderWizard()}
    ${renderToast()}
  `;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function handleClick(event) {
  const target = event.target.closest("button, .drawer-backdrop");
  if (!target) return;

  const view = target.dataset.view;
  if (view) {
    state.view = view;
    renderApp();
    return;
  }

  const tab = target.dataset.tab;
  if (tab) {
    state.tab = tab;
    const first = launches.find((launch) => launch.status === tab);
    if (first) state.selectedId = first.id;
    renderApp();
    return;
  }

  const select = target.dataset.select;
  if (select) {
    state.selectedId = select;
    renderApp();
    return;
  }

  const quick = target.dataset.quick;
  if (quick) {
    const launch = currentLaunch();
    const balance = 84120;
    state.contribution = Math.min(launch.max, Math.round((balance * Number(quick)) / 100)).toString();
    renderApp();
    return;
  }

  const step = target.dataset.step;
  if (step) {
    state.wizardStep = Number(step);
    renderApp();
    return;
  }

  switch (target.dataset.action) {
    case "connect-wallet":
      state.connected = !state.connected;
      renderApp();
      showToast(state.connected ? "Wallet connected for prototype mode." : "Wallet disconnected.");
      break;
    case "contribute":
      if (!state.connected) {
        state.connected = true;
        renderApp();
        showToast("Wallet connected. Enter an amount to simulate contribution.");
      } else {
        showToast("Contribution preview ready. No transaction was sent.");
      }
      break;
    case "claim-refund":
      showToast("Refund simulation ready. Production flow would return the quote asset from the sale vault.");
      break;
    case "claim-token":
      showToast("Claim simulation ready. Production flow would release vested or finalized launch tokens.");
      break;
    case "open-wizard":
      state.wizardOpen = true;
      renderApp();
      break;
    case "close-wizard":
      state.wizardOpen = false;
      renderApp();
      break;
    case "next-step":
      if (state.wizardStep < wizardSteps.length - 1) {
        state.wizardStep += 1;
        renderApp();
      } else {
        state.wizardOpen = false;
        state.wizardStep = 0;
        renderApp();
        showToast("Launch application queued for review in prototype mode.");
      }
      break;
    case "prev-step":
      state.wizardStep = Math.max(0, state.wizardStep - 1);
      renderApp();
      break;
    case "show-toast":
      showToast("Prototype action captured. This would open the linked detail flow.");
      break;
    default:
      break;
  }
}

function handleInput(event) {
  if (event.target.dataset.input === "contribution") {
    state.contribution = event.target.value;
    renderApp();
  }
}

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
renderApp();
