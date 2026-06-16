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
    endsIn: "2d 14h",
    summary:
      "A modular DeFi liquidity hub launching with a Topaz V2 volatile pool, locked ERC20 LP tokens, public vesting, and first-epoch voter incentives.",
    tags: ["DeFi", "DEX", "Liquidity"],
    min: 50,
    max: 50000,
    contributors: 1247,
    vesting: "10% TGE, then 9 month vesting",
    incentives: "300,000 veTOPAZ over 6 epochs",
    lock: "365 day LP lock",
    liquidity: "500,000 AUR + 450,000 USDT",
    feeMode: "No-gauge LP fee split",
    lockTx: "0x91c2...4f8b",
    risk: ["Smart contract not audited", "Team tokens have extended unlock", "Market conditions may affect token performance"],
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
    endsIn: "3d 06h",
    summary:
      "Launch analytics and treasury tooling for token teams that need public proof after TGE.",
    tags: ["Analytics", "Treasury", "Tools"],
    min: 25,
    max: 30000,
    contributors: 862,
    vesting: "15% TGE, then 8 month vesting",
    incentives: "185,000 veTOPAZ over 4 epochs",
    lock: "18 month LP lock",
    liquidity: "320,000 DWR + 390,000 USDT",
    feeMode: "Creator / launchpad split",
    lockTx: "0x62fd...09bb",
    risk: ["Custom token accepted", "No third-party audit posted"],
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
      "A WBNB-paired launch with mandatory Topaz V2 LP lock, team vesting, and a later gauge upgrade path.",
    tags: ["AI", "Index", "Research"],
    min: 0.05,
    max: 20,
    contributors: 0,
    vesting: "5% TGE, then 12 month vesting",
    incentives: "220,000 veTOPAZ queued",
    lock: "Permanent fee-split lock",
    liquidity: "Pending finalization",
    feeMode: "No-gauge first, gauge later",
    lockTx: "Queued after sale",
    risk: ["Launch has not opened", "Liquidity proof pending finalization"],
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
      "A liquidity bootstrap candidate that routes 70% of raised assets directly into its Topaz pool.",
    tags: ["LST", "Yield", "Pool"],
    min: 0.1,
    max: 25,
    contributors: 0,
    vesting: "0% TGE, then 10 month vesting",
    incentives: "150,000 veTOPAZ queued",
    lock: "24 month LP lock",
    liquidity: "70% of raise",
    feeMode: "No-gauge LP fee split",
    lockTx: "Queued after sale",
    risk: ["Bootstrap price can move quickly", "Final liquidity depends on raise"],
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
      "A finalized launch that keeps lock, vesting, incentive, and holder proof visible after TGE.",
    tags: ["RWA", "Payments", "Proof"],
    min: 25,
    max: 10000,
    contributors: 991,
    vesting: "20% TGE, then 6 month vesting",
    incentives: "90,000 veTOPAZ distributed",
    lock: "12 month LP lock",
    liquidity: "220,000 SLC + 280,000 USDT",
    feeMode: "No-gauge LP fee split",
    lockTx: "0x26aa...e310",
    risk: ["Launch finalized", "Review did not include formal audit"],
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
      "A failed soft-cap sale where funds remain in the sale vault and buyers can claim refunds.",
    tags: ["GameFi", "NFT", "Refund"],
    min: 50,
    max: 15000,
    contributors: 344,
    vesting: "Not funded",
    incentives: "Returned to project",
    lock: "No LP created",
    liquidity: "No finalization",
    feeMode: "Refund only",
    lockTx: "N/A",
    risk: ["Soft cap not reached", "Refund window open"],
  },
];

const topazV2 = {
  chain: "BNB Chain",
  chainId: "56",
  router: "0x1E98c8226e7d452e1888e3d3d2F929346321c6c3",
  factory: "0x65E6cD0eF5D3467030103cf3d433034E570b5784",
  voter: "0x2F80F810a114223AC69E34E84E735CaD515dAD67",
  wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  poolType: "Topaz V2 volatile ERC20 LP",
  stable: "false",
};

const state = {
  view: "launchpad",
  tab: "live",
  selectedId: "aurora",
  connected: false,
  contribution: "1200",
  wizardOpen: false,
  wizardStep: 0,
};

const tabs = ["live", "upcoming", "finalized", "refunding"];
const wizardSteps = ["Token", "Sale", "Liquidity", "Vesting", "Incentives", "Review"];
const navItems = [
  ["launchpad", "Launchpad", "launch"],
  ["portfolio", "My Contributions", "stack"],
  ["proof", "Proof Center", "lock"],
  ["integration", "Topaz V2", "doc"],
  ["voting", "veTOPAZ Voting", "vote"],
  ["rewards", "Rewards", "chart"],
  ["locks", "LP Locks", "lock"],
  ["projects", "Project Review", "doc"],
  ["admin", "Admin", "settings"],
];

const iconPaths = {
  launch: '<path d="M5 15c5-1 9-5 11-10 2 2 3 5 3 8-5 1-9 4-11 9-2-2-3-4-3-7Z"/><path d="M9 15l-4 4"/><path d="M14 10h.01"/>',
  stack: '<path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/>',
  vote: '<path d="M4 12h4l3-8 4 16 3-8h2"/><path d="M4 19h16"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/>',
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/>',
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 12a7 7 0 0 0-.1-1.1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.9-1.1L14.3 3h-4.6l-.3 2.9A8 8 0 0 0 7.5 7l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.1l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.9 1.1l.3 2.9h4.6l.3-2.9a8 8 0 0 0 1.9-1.1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1.1Z"/>',
  wallet: '<path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13"/><path d="M17 13h.01"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  close: '<path d="m6 6 12 12"/><path d="M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  warn: '<path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',
};

const app = document.getElementById("app");

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${iconPaths[name] || iconPaths.doc}</svg>`;
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function percent(launch) {
  return Math.min(100, Math.round((launch.raised / launch.goal) * 100));
}

function selectedLaunch() {
  return launches.find((launch) => launch.id === state.selectedId) || launches[0];
}

function logo(size = "small") {
  const className = size === "hero" ? "hero-logo" : "brand-mark";
  return `<div class="${className}" aria-hidden="true"><svg viewBox="0 0 48 58" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 2 43 14v28L24 56 5 42V14L24 2Z"/><path d="M24 2v54"/><path d="M5 14l19 10 19-10"/><path d="m5 42 19-18 19 18"/></svg></div>`;
}

function pageHeader(title, subtitle, action = "") {
  return `<div class="section-header"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div>${action}</div>`;
}

function dataTable(headers, rows) {
  return `<div class="data-table" style="--cols: repeat(${headers.length}, minmax(0, 1fr));"><div class="data-head">${headers.map((header) => `<span>${header}</span>`).join("")}</div>${rows.map((row) => `<div class="data-row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div>`;
}

function kpiGrid(items) {
  return `<div class="kpi-grid">${items.map(([label, value, note]) => `<section class="panel pad kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></section>`).join("")}</div>`;
}

function statusPill(status) {
  return `<span class="status ${status}">${status}</span>`;
}

function sidebar() {
  return `<aside class="sidebar"><div class="brand">${logo()}<div class="brand-copy"><strong>TOPAZ</strong><span>FOUNDRY</span></div></div><nav class="nav" aria-label="Prototype navigation">${navItems.map(([key, label, iconName]) => `<button class="nav-button ${state.view === key ? "active" : ""}" type="button" data-view="${key}">${icon(iconName)}<span>${label}</span></button>`).join("")}</nav><div class="sidebar-card"><div class="label">veTOPAZ Balance</div><strong>12,480.75</strong><div class="label">Voting Power</div><strong>8,342.21</strong><button class="button ghost" type="button" data-view="voting">Go to veTOPAZ</button></div></aside>`;
}

function topbar() {
  return `<header class="topbar"><div class="tagline">Liquidity rooted on Topaz</div><div class="topbar-actions"><div class="network-pill"><span class="dot"></span>BNB Chain 56</div><button class="button gold" type="button" data-action="open-wizard">${icon("plus")} New launch</button><button class="button primary" type="button" data-action="connect-wallet">${icon("wallet")} ${state.connected ? "Wallet Connected" : "Connect Wallet"}</button></div></header>`;
}

function tabsView() {
  return `<div class="tabs" role="tablist" aria-label="Launch status">${tabs.map((tab) => `<button class="tab ${state.tab === tab ? "active" : ""}" type="button" data-tab="${tab}">${tab[0].toUpperCase() + tab.slice(1)}<span class="count">${launches.filter((launch) => launch.status === tab).length}</span></button>`).join("")}</div>`;
}

function launchRow(launch) {
  const progress = percent(launch);
  return `<button class="launch-row ${launch.id === state.selectedId ? "selected" : ""}" type="button" data-select="${launch.id}" style="--logo-color:${launch.color}"><div class="project-cell"><div class="token-logo"><span>${launch.symbol.slice(0, 2)}</span></div><div class="project-name"><strong>${launch.name}</strong><span><span class="micro">${launch.symbol}</span>${statusPill(launch.status)}</span></div></div><div class="money"><strong>${money(launch.raised)}</strong><span>/ ${money(launch.goal)}</span></div><div class="progress-cell"><strong>${launch.status === "upcoming" ? launch.endsIn : `${progress}%`}</strong><div class="progress-track"><div class="progress-fill" style="--value:${progress}%"></div></div></div></button>`;
}

function launchList() {
  const rows = launches.filter((launch) => launch.status === state.tab);
  return `<section class="panel" aria-label="Launch list"><div class="table-head"><span>Project</span><span>Raised / Goal</span><span>Progress</span></div><div class="launch-list">${rows.map(launchRow).join("") || '<div class="panel pad muted">No launches in this state.</div>'}</div></section>`;
}

function launchDetail(launch) {
  return `<section class="panel hero-panel" style="--logo-color:${launch.color}"><div class="hero-top">${logo("hero")}<div><div class="hero-title"><h2>${launch.name}</h2>${statusPill(launch.status)}</div><p class="hero-summary">${launch.summary}</p><div class="chips">${launch.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}<span class="chip">${launch.saleType}</span><span class="chip">${launch.quoteAsset}</span></div></div></div><div class="metrics"><div class="metric"><span>Raised</span><strong>${money(launch.raised)}</strong></div><div class="metric"><span>Goal</span><strong>${money(launch.goal)}</strong></div><div class="metric"><span>Price</span><strong>${launch.price}</strong></div><div class="metric"><span>Contributors</span><strong>${launch.contributors.toLocaleString()}</strong></div><div class="metric"><span>Ends</span><strong>${launch.endsIn}</strong></div></div></section>`;
}

function proofStrip(launch) {
  return `<section class="panel proof-strip"><div class="proof-item"><div class="proof-icon">${icon("check")}</div><div class="proof-text">Topaz V2 ${topazV2.stable === "false" ? "volatile" : "stable"} pool</div></div><div class="proof-item"><div class="proof-icon">${icon("lock")}</div><div class="proof-text">${launch.lock}</div></div><div class="proof-item"><div class="proof-icon">${icon("chart")}</div><div class="proof-text">${launch.incentives}</div></div><div class="proof-item"><div class="proof-icon warn">${icon("warn")}</div><div class="proof-text">Risk labels visible</div></div></section>`;
}

function contributionPanel(launch) {
  const amount = Number(state.contribution || 0);
  const disabled = launch.status === "upcoming" || launch.status === "finalized" || launch.status === "refunding";
  const estimate = launch.symbol === "AUR" ? `${Math.round(amount / 0.045).toLocaleString()} AUR` : "Allocation preview";
  return `<section class="panel pad"><div class="panel-title"><h3>Contribution</h3><span class="micro">Prototype only</span></div><div class="input-wrap"><div class="field-label"><span>Amount</span><span>Balance 84,120 ${launch.quoteAsset}</span></div><div class="amount-input"><input data-input="contribution" inputmode="decimal" value="${state.contribution}" ${disabled ? "disabled" : ""}/><select class="asset-select" ${disabled ? "disabled" : ""}><option>${launch.quoteAsset}</option><option>WBNB</option></select></div><div class="quick-grid"><button type="button" data-quick="25" ${disabled ? "disabled" : ""}>25%</button><button type="button" data-quick="50" ${disabled ? "disabled" : ""}>50%</button><button type="button" data-quick="75" ${disabled ? "disabled" : ""}>75%</button><button type="button" data-quick="100" ${disabled ? "disabled" : ""}>Max</button></div><div class="limits"><div class="metric"><span>Min</span><strong>${launch.min} ${launch.quoteAsset}</strong></div><div class="metric"><span>Max</span><strong>${launch.max} ${launch.quoteAsset}</strong></div></div><div class="review-row"><span>Estimated receipt</span><strong>${estimate}</strong></div><button class="button primary" type="button" data-action="contribute" ${disabled ? "disabled" : ""}>${state.connected ? "Preview contribution" : "Connect to contribute"}</button></div></section>`;
}

function launchpadView() {
  const launch = selectedLaunch();
  return `<div class="layout"><div class="workspace"><div class="section-header"><div><h1>Token Launchpad</h1><p class="muted">Curated launches with liquidity rooted on Topaz.</p></div>${tabsView()}</div><div class="grid">${launchList()}<div class="detail">${launchDetail(launch)}${proofStrip(launch)}<div class="subgrid"><section class="panel pad"><div class="panel-title"><h3>Liquidity Proof</h3><span class="micro">Public after finalization</span></div><div class="review-list"><div class="review-row"><span>Pool type</span><strong>${topazV2.poolType}</strong></div><div class="review-row"><span>stable flag</span><strong>${topazV2.stable}</strong></div><div class="review-row"><span>Liquidity</span><strong>${launch.liquidity}</strong></div><div class="review-row"><span>Lock tx</span><strong>${launch.lockTx}</strong></div><div class="review-row"><span>Fee route</span><strong>${launch.feeMode}</strong></div></div></section><section class="panel pad"><div class="panel-title"><h3>Vesting and Risk</h3><span class="micro">Buyer-facing proof</span></div><div class="review-list"><div class="review-row"><span>Vesting</span><strong>${launch.vesting}</strong></div><div class="review-row"><span>Incentives</span><strong>${launch.incentives}</strong></div></div><div class="risk-list">${launch.risk.map((item) => `<div class="risk-item">${icon("warn")}<span>${item}</span></div>`).join("")}</div></section></div></div></div></div><aside class="side-stack">${contributionPanel(launch)}<section class="panel pad callout"><h3>Founder promise</h3><p class="muted">Every successful launch routes liquidity through Topaz, locks the ERC20 LP token, and keeps the proof visible after TGE.</p></section></aside></div>`;
}

function portfolioView() {
  const rows = [["AURORA", "1,200 USDT", "26,666 AUR", "Ready", "Jun 15"], ["SOLACE", "650 USDT", "18,420 SLC", "Claimable", "Apr 28"], ["MYTHOS", "880 USDT", "Refund open", "Refundable", "May 3"]];
  return `<div class="page-stack">${pageHeader("My Contributions", "Buyer allocations, vesting, claims, and refunds in one place.")}${kpiGrid([["Committed", "$2,730", "Across 3 launches"], ["Claimable", "18,420 SLC", "Finalized launch"], ["Refundable", "$880", "Soft-cap failed"], ["Wallet", state.connected ? "Connected" : "Not connected", "Prototype mode"]])}<section class="panel pad"><div class="panel-title"><h3>Contribution History</h3><span class="micro">Prototype wallet</span></div>${dataTable(["Launch", "Amount", "Allocation", "State", "Date"], rows)}</section></div>`;
}

function proofCenterView() {
  const rows = launches.map((launch) => [launch.name, launch.liquidity, launch.lock, launch.feeMode, launch.lockTx]);
  return `<div class="page-stack">${pageHeader("Proof Center", "A public trust layer for LP locks, vesting, incentives, and refund state.", '<button class="button primary" type="button" data-action="show-toast">Open proof page</button>')}${kpiGrid([["Locked liquidity", "$1.47M", "Successful launches"], ["Refund protected", "$318K", "Failed sale vault"], ["Proof pages", "6", "All launches"], ["Visible risks", "100%", "Required labels"]])}<section class="panel pad"><div class="panel-title"><h3>Launch Proof Registry</h3><span class="micro">Topaz-rooted evidence</span></div>${dataTable(["Launch", "Liquidity", "Lock", "Fee Mode", "Proof"], rows)}</section></div>`;
}

function integrationView() {
  const addressRows = [["Chain", topazV2.chainId, topazV2.chain], ["Router", topazV2.router, "addLiquidity / route"], ["PoolFactory", topazV2.factory, "create or discover pair"], ["Voter", topazV2.voter, "future gauge rewards"], ["WBNB", topazV2.wbnb, "native quote asset"], ["Pool flag", topazV2.stable, "volatile pair"]];
  const flowRows = [["1", "Collect sale funds", "Refundable until finalize"], ["2", "Create Topaz V2 pool", "Use volatile stable=false route"], ["3", "Add launch liquidity", "Quote asset is WBNB or USDT"], ["4", "Send ERC20 LP to locker", "Pool address is the LP token"], ["5", "Publish proof", "Buyers see lock, vesting, and incentives"], ["6", "Handle fees", "Locker claims fees until gauge path exists"]];
  return `<div class="page-stack">${pageHeader("Topaz V2 Integration", "The MVP is built around BNB Chain, Topaz V2 volatile pools, and ERC20 LP-token custody.")}${kpiGrid([["Network", "BNB Chain", "chainId 56"], ["Pool type", "V2 volatile", "stable=false"], ["Quote assets", "WBNB / USDT", "MVP defaults"], ["LP custody", "Locker", "Fee-split capable"]])}<div class="split-layout wide-left"><section class="panel pad"><div class="panel-title"><h3>Mainnet Anchors</h3><span class="micro">From Topaz V2 brief</span></div>${dataTable(["Contract", "Address / Value", "Use"], addressRows)}</section><section class="panel pad callout"><h3>Fee Model Note</h3><p class="muted">The first version should target non-gauged V2 volatile pools. The locker holds the ERC20 LP token and can call claimFees(). Once a pool has a gauge, rewards should move through the Topaz voter and reward path.</p><div class="review-list"><div class="review-row"><span>No gauge</span><strong>Locker claims LP fees</strong></div><div class="review-row"><span>Gauge exists</span><strong>Use voter/reward contracts</strong></div><div class="review-row"><span>Launchpad revenue</span><strong>Fee BPS split</strong></div></div></section></div><section class="panel pad"><div class="panel-title"><h3>Finalize Flow</h3><span class="micro">Bonding to locked Topaz LP</span></div>${dataTable(["Step", "Action", "Product meaning"], flowRows)}</section></div>`;
}

function votingView() {
  const rows = [["AUR/USDT", "300,000 veTOPAZ", "Epoch 1-6", "Funded", "High"], ["DWR/USDT", "185,000 veTOPAZ", "Epoch 1-4", "Funded", "Medium"], ["NXO/WBNB", "220,000 veTOPAZ", "Queued", "Pending", "High"], ["NMB/WBNB", "150,000 veTOPAZ", "Queued", "Pending", "Medium"]];
  return `<div class="page-stack">${pageHeader("veTOPAZ Voting", "Plan incentives around the pools that need voter attention after TGE.", '<button class="button primary" type="button" data-action="show-toast">Open vote planner</button>')}${kpiGrid([["Queued incentives", "855,000 veTOPAZ", "Across launch pools"], ["Funded pools", "2", "Ready for voters"], ["Pending pools", "2", "After finalization"], ["Next epoch", "Jun 18", "Incentive cutoff"]])}<section class="panel pad"><div class="panel-title"><h3>Incentive Planner</h3><span class="micro">Launch pools only</span></div>${dataTable(["Pool", "Budget", "Schedule", "State", "Priority"], rows)}</section></div>`;
}

function rewardsView() {
  return `<div class="page-stack">${pageHeader("Rewards", "Monitor launch incentives, voter reward deposits, and post-launch reward status.")}${kpiGrid([["Claimable", "$1,284", "Prototype wallet"], ["Active rewards", "485,000 veTOPAZ", "Funded now"], ["Pending rewards", "370,000 veTOPAZ", "Queued"], ["Sources", "4", "Launch projects"]])}<section class="panel pad"><div class="panel-title"><h3>Reward Sources</h3><span class="micro">Launch-backed incentives</span></div>${dataTable(["Source", "Pool", "Amount", "State"], [["Aurora budget", "AUR/USDT", "300,000 veTOPAZ", "Active"], ["Defiware budget", "DWR/USDT", "185,000 veTOPAZ", "Active"], ["Nexora escrow", "NXO/WBNB", "220,000 veTOPAZ", "Queued"], ["Nimbus escrow", "NMB/WBNB", "150,000 veTOPAZ", "Queued"]])}</section></div>`;
}

function locksView() {
  const rows = [["AUR/USDT", "0xPool...AUR", "$950K", "365 days", "$18,420", "Locked"], ["SLC/USDT", "0xPool...SLC", "$520K", "12 months", "$7,840", "Locked"], ["NXO/WBNB", "Queued pool", "Pending", "Permanent", "Pending", "Pre-launch"]];
  return `<div class="page-stack">${pageHeader("LP Locks", "Inspect locked ERC20 LP tokens for launchpad pools.", '<button class="button primary" type="button" data-action="show-toast">Open locker proof</button>')}${kpiGrid([["Locked liquidity", "$1.47M", "Across pools"], ["Fees collected", "$26,260", "For beneficiaries"], ["Permanent locks", "1", "Fee-split model"], ["Queued locks", "1", "Waiting on sale"]])}<section class="panel pad"><div class="panel-title"><h3>Lock Registry</h3><span class="micro">Public LP evidence</span></div>${dataTable(["Pair", "LP Token", "Value", "Duration", "Fees", "Status"], rows)}</section><section class="panel pad callout"><h3>Fee-split locker path</h3><p class="muted">Permanent LP custody avoids the dead-burn problem while proving the project cannot pull launch liquidity.</p></section></div>`;
}

function projectsView() {
  const rows = [["NEXORA", "Liquidity review", "Project wallet", "Medium", "Confirm V2 route"], ["NIMBUS", "Token disclosure", "Topaz reviewer", "Low", "Approve bootstrap terms"], ["CIRRUS", "Initial intake", "Applicant", "High", "Replace custom-tax token"]];
  return `<div class="page-stack">${pageHeader("Project Review", "Application review, disclosure checks, and launch readiness before publish.", '<button class="button primary" type="button" data-action="open-wizard">New application</button>')}${kpiGrid([["Applications", "3", "In review"], ["Ready", "1", "Needs approval"], ["Blocked", "1", "Token issue"], ["Avg review", "2.4 days", "Prototype target"]])}<section class="panel pad"><div class="panel-title"><h3>Review Queue</h3><span class="micro">Reviewer workspace</span></div>${dataTable(["Project", "Stage", "Owner", "Risk", "Next"], rows)}</section></div>`;
}

function adminView() {
  const rows = [["Finalize sale", "AURORA", "Soft cap met", "Ready"], ["Enable token claim", "SOLACE", "LP proof verified", "Complete"], ["Enable refunds", "MYTHOS", "Soft cap failed", "Complete"], ["Create Topaz pair", "NEXORA", "Router address", "Blocked"], ["Fund incentives", "NIMBUS", "Gauge route", "Pending"]];
  return `<div class="page-stack">${pageHeader("Admin Dashboard", "Operational controls for launch readiness, finalization, refunds, and proof publication.")}${kpiGrid([["Finalization", "6", "2 need addresses"], ["Refund tasks", "1", "Mythos enabled"], ["Proof pages", "5", "3 public"], ["Launch health", "92%", "Prototype score"]])}<section class="panel pad"><div class="panel-title"><h3>Launch Operations</h3><span class="micro">Admin actions</span></div>${dataTable(["Action", "Launch", "Dependency", "State"], rows)}</section></div>`;
}

function currentView() {
  const views = { launchpad: launchpadView, portfolio: portfolioView, proof: proofCenterView, integration: integrationView, voting: votingView, rewards: rewardsView, locks: locksView, projects: projectsView, admin: adminView };
  return (views[state.view] || launchpadView)();
}

function wizardContent() {
  if (wizardSteps[state.wizardStep] === "Review") {
    return `<div class="review-list">${[["Token", "Fixed supply, no transfer tax"], ["Sale", "Fair launch with soft-cap refunds"], ["Liquidity", "60% of raise to Topaz V2 volatile LP"], ["LP Lock", "ERC20 LP token minted directly to locker"], ["Vesting", "10% TGE, remainder over 9 months"], ["Incentives", "No-gauge fee split first, gauge incentives later"]].map(([a, b]) => `<div class="review-row"><span>${a}</span><strong>${b}</strong></div>`).join("")}</div>`;
  }
  const fields = {
    Token: [["Token name", "Aurora"], ["Symbol", "AUR"], ["Total supply", "100,000,000"], ["Contract mode", "Standard fixed supply"], ["Project summary", "A launch description buyers can inspect.", "textarea"]],
    Sale: [["Sale type", "Fair launch"], ["Accepted asset", "USDT"], ["Soft cap", "800,000"], ["Hard cap", "2,000,000"], ["Wallet max", "50,000"]],
    Liquidity: [["Raise to LP", "60%"], ["Quote asset", "USDT or WBNB"], ["Topaz pool type", "V2 volatile, stable=false"], ["Slippage mins", "1% default, never zero"], ["LP recipient", "Fee-split locker"], ["Fee split", "80% creator / 20% launchpad"]],
    Vesting: [["Team allocation", "15%"], ["TGE unlock", "10%"], ["Vesting length", "9 months"], ["Treasury lock", "12 months"]],
    Incentives: [["Incentive budget", "300,000 veTOPAZ"], ["Epoch count", "4"], ["First fee route", "pool.claimFees() to locker"], ["Gauge posture", "Optional later upgrade"]],
  };
  return `<div class="form-grid">${fields[wizardSteps[state.wizardStep]].map(([label, value, type]) => type === "textarea" ? `<div class="form-field full"><label>${label}</label><textarea>${value}</textarea></div>` : `<div class="form-field"><label>${label}</label><input value="${value}" /></div>`).join("")}</div>`;
}

function wizard() {
  return `<div class="drawer ${state.wizardOpen ? "open" : ""}" aria-hidden="${state.wizardOpen ? "false" : "true"}"><div class="drawer-backdrop" data-action="close-wizard"></div><section class="drawer-panel" role="dialog" aria-label="Create launch prototype"><div class="drawer-head"><div><h2>Create Launch</h2><p class="muted">Configure the sale, liquidity lock, vesting, and first incentives before review.</p></div><button class="button icon-only" type="button" data-action="close-wizard" aria-label="Close drawer">${icon("close")}</button></div><div class="wizard-steps">${wizardSteps.map((step, index) => `<button class="wizard-step ${index === state.wizardStep ? "active" : ""}" type="button" data-step="${index}">${index + 1}. ${step}</button>`).join("")}</div><div class="panel pad"><div class="panel-title"><h3>${wizardSteps[state.wizardStep]}</h3><span class="micro">Prototype form</span></div>${wizardContent()}</div><div class="drawer-actions"><button class="button" type="button" data-action="prev-step" ${state.wizardStep === 0 ? "disabled" : ""}>Back</button><button class="button primary" type="button" data-action="next-step">${state.wizardStep === wizardSteps.length - 1 ? "Submit for review" : "Continue"}</button></div></section></div>`;
}

function toast() {
  return '<div class="toast" role="status" aria-live="polite" id="toast">Prototype action captured.</div>';
}

function showToast(message) {
  const box = document.getElementById("toast");
  box.textContent = message;
  box.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => box.classList.remove("show"), 2600);
}

function render() {
  app.innerHTML = `<div class="app-shell">${sidebar()}<main class="main">${topbar()}${currentView()}</main></div>${wizard()}${toast()}`;
}

function handleClick(event) {
  const target = event.target.closest("button, .drawer-backdrop");
  if (!target) return;
  if (target.dataset.view) {
    state.view = target.dataset.view;
    render();
    return;
  }
  if (target.dataset.tab) {
    state.tab = target.dataset.tab;
    const first = launches.find((launch) => launch.status === state.tab);
    if (first) state.selectedId = first.id;
    render();
    return;
  }
  if (target.dataset.select) {
    state.selectedId = target.dataset.select;
    render();
    return;
  }
  if (target.dataset.quick) {
    const launch = selectedLaunch();
    state.contribution = Math.min(launch.max, Math.round((84120 * Number(target.dataset.quick)) / 100)).toString();
    render();
    return;
  }
  if (target.dataset.step) {
    state.wizardStep = Number(target.dataset.step);
    render();
    return;
  }
  switch (target.dataset.action) {
    case "connect-wallet":
      state.connected = !state.connected;
      render();
      showToast(state.connected ? "Wallet connected for prototype mode." : "Wallet disconnected.");
      break;
    case "contribute":
      if (!state.connected) {
        state.connected = true;
        render();
        showToast("Wallet connected. Enter an amount to simulate contribution.");
      } else {
        showToast("Contribution preview ready. No transaction was sent.");
      }
      break;
    case "open-wizard":
      state.wizardOpen = true;
      render();
      break;
    case "close-wizard":
      state.wizardOpen = false;
      render();
      break;
    case "next-step":
      if (state.wizardStep < wizardSteps.length - 1) {
        state.wizardStep += 1;
        render();
      } else {
        state.wizardOpen = false;
        state.wizardStep = 0;
        render();
        showToast("Launch application queued for review in prototype mode.");
      }
      break;
    case "prev-step":
      state.wizardStep = Math.max(0, state.wizardStep - 1);
      render();
      break;
    case "show-toast":
      showToast("Prototype action captured. This would open the linked proof, disclosure, or transaction flow.");
      break;
  }
}

function handleInput(event) {
  if (event.target.dataset.input === "contribution") {
    state.contribution = event.target.value;
    render();
  }
}

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
render();
