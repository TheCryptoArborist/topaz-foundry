const launches = [
  {
    id: "aurora",
    name: "AURORA",
    symbol: "AUR",
    status: "live",
    color: "#36e6b6",
    raised: 91420,
    goal: 150000,
    softCap: 25000,
    saleType: "Public sale",
    quoteAsset: "USDT",
    price: "1 AUR = 0.0045 USDT",
    hardCap: "150,000 USDT",
    endsIn: "2d 14h 32m",
    summary:
      "Aurora is a modular DeFi liquidity hub launching with a Topaz V2 volatile pool, locked ERC20 LP tokens, public vesting, and first-epoch voter incentives.",
    tags: ["DeFi", "DEX", "Liquidity"],
    min: 50,
    max: 2500,
    contributors: 312,
    avgContribution: 293,
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
      liquidity: "12,000,000 AUR + 55,000 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "0x91c2...4f8b",
      vesting: "Linear over 9 months",
      cliff: "10% at TGE",
      incentives: "18,000 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "May 10, 2026",
    },
    risk: [
      "Smart contract not audited",
      "Team tokens have extended unlock",
      "Market conditions may affect token performance",
    ],
    post: {
      marketCap: "$540K",
      fdv: "$4.5M",
      liquidity: "$110K target",
      holders: "420 est.",
    },
    social: {
      enabled: true,
      channels: ["X", "Telegram", "Discord"],
      hashtag: "#AURonTopaz",
      creatorHandle: "@AuroraLiquidity",
      cadence: "Soft cap, 50%, 75%, finalization",
    },
  },
  {
    id: "defiware",
    name: "DEFIWARE",
    symbol: "DWR",
    status: "live",
    color: "#b9a7ff",
    raised: 36580,
    goal: 75000,
    softCap: 25000,
    saleType: "Fair launch",
    quoteAsset: "USDT",
    price: "Pro rata allocation",
    hardCap: "75,000 USDT",
    endsIn: "3d 6h 04m",
    summary:
      "Defiware packages launch analytics and treasury tooling for smaller token teams that need public proof after TGE.",
    tags: ["Analytics", "Treasury", "Tools"],
    min: 25,
    max: 1500,
    contributors: 144,
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
      liquidity: "8,000,000 DWR + 18,000 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "Creator / launchpad split",
      lockTx: "0x62fd...09bb",
      vesting: "Linear over 8 months",
      cliff: "15% at TGE",
      incentives: "8,500 veTOPAZ",
      distributor: "Manual bribe queue",
      start: "May 18, 2026",
    },
    risk: ["Custom token accepted", "No third-party audit posted"],
    post: {
      marketCap: "$280K",
      fdv: "$1.5M",
      liquidity: "$36K target",
      holders: "210 est.",
    },
    social: {
      enabled: true,
      channels: ["X", "Telegram"],
      hashtag: "#DWRLaunch",
      creatorHandle: "@DefiwareHQ",
      cadence: "Soft cap and final 24 hours",
    },
  },
  {
    id: "nexora",
    name: "NEXORA",
    symbol: "NXO",
    status: "upcoming",
    color: "#8e7cff",
    raised: 0,
    goal: 45000,
    softCap: 25000,
    saleType: "Fixed price",
    quoteAsset: "USDT",
    price: "1 NXO = 0.012 USDT",
    hardCap: "45,000 USDT",
    endsIn: "Starts in 1d 14h",
    summary:
      "Nexora is preparing a guided fixed-price launch with mandatory V2 LP token lock, team vesting, and a later gauge-upgrade path.",
    tags: ["AI", "Index", "Research"],
    min: 0.03,
    max: 2.5,
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
      incentives: "7,500 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "Jun 20, 2026",
    },
    risk: ["Launch has not opened", "Liquidity proof pending finalization"],
    post: {
      marketCap: "$300K est.",
      fdv: "$1.2M",
      liquidity: "$25K target",
      holders: "Est. 140",
    },
    social: {
      enabled: true,
      channels: ["X", "Discord"],
      hashtag: "#NXOonTopaz",
      creatorHandle: "@NexoraIndex",
      cadence: "Opening, soft cap, finalization",
    },
  },
  {
    id: "nimbus",
    name: "NIMBUS",
    symbol: "NMB",
    status: "upcoming",
    color: "#62d8ff",
    raised: 0,
    goal: 80000,
    softCap: 30000,
    saleType: "Liquidity bootstrap",
    quoteAsset: "USDT",
    price: "Pool seeded at close",
    hardCap: "80,000 USDT",
    endsIn: "Starts in 3d 02h",
    summary:
      "Nimbus is a liquidity bootstrap candidate that routes 70% of raised assets directly into its Topaz pool.",
    tags: ["LST", "Yield", "Pool"],
    min: 25,
    max: 2000,
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
      incentives: "10,000 veTOPAZ",
      distributor: "Manual bribe queue",
      start: "Jun 23, 2026",
    },
    risk: ["Bootstrap price can move quickly", "Final liquidity depends on raise"],
    post: {
      marketCap: "$450K est.",
      fdv: "$2.5M",
      liquidity: "$112K target",
      holders: "Est. 260",
    },
    social: {
      enabled: false,
      channels: [],
      hashtag: "#NMBLaunch",
      creatorHandle: "",
      cadence: "Disabled",
    },
  },
  {
    id: "canopy",
    name: "CANOPY",
    symbol: "CNPY",
    status: "approved",
    color: "#83e36e",
    raised: 0,
    goal: 60000,
    softCap: 25000,
    saleType: "Fair launch",
    quoteAsset: "USDT",
    price: "Pro rata allocation",
    hardCap: "60,000 USDT",
    endsIn: "Schedule pending",
    summary:
      "Canopy has passed launch review and is waiting for its sale window before accepting buyer deposits.",
    tags: ["Climate", "Community", "Approved"],
    min: 25,
    max: 1500,
    contributors: 0,
    avgContribution: 0,
    yourContribution: 0,
    vesting: [
      ["TGE", "10%", "TBD"],
      ["Month 3", "20%", "TBD"],
      ["Month 6", "30%", "TBD"],
      ["Month 12", "40%", "TBD"],
    ],
    incentives: [
      ["Epoch 1", "40%", "Queued"],
      ["Epoch 2", "30%", "Queued"],
      ["Epoch 3", "20%", "Queued"],
      ["Epoch 4", "10%", "Queued"],
    ],
    proof: {
      lockDuration: "24 months",
      liquidity: "60% of successful raise",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "Queued after sale",
      vesting: "Linear over 12 months",
      cliff: "10% at TGE",
      incentives: "5,000 veTOPAZ",
      distributor: "Queued after finalization",
      start: "TBD",
    },
    risk: ["Approved for scheduling", "Liquidity proof pending finalization"],
    post: {
      marketCap: "$240K est.",
      fdv: "$900K",
      liquidity: "$35K target",
      holders: "Est. 160",
    },
    social: {
      enabled: true,
      channels: ["X", "Telegram"],
      hashtag: "#CNPYonTopaz",
      creatorHandle: "@CanopyToken",
      cadence: "Opening, soft cap, finalization",
    },
  },
  {
    id: "solace",
    name: "SOLACE",
    symbol: "SLC",
    status: "finalized",
    color: "#31b7ff",
    raised: 75000,
    goal: 75000,
    softCap: 25000,
    saleType: "Fair launch",
    quoteAsset: "USDT",
    price: "Finalized",
    hardCap: "75,000 USDT",
    endsIn: "Ended Apr 28",
    summary:
      "Solace finalized successfully and continues to show live lock, vesting, incentive, and holder data on its verification page.",
    tags: ["RWA", "Payments", "Proof"],
    min: 25,
    max: 2500,
    contributors: 265,
    avgContribution: 283,
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
      liquidity: "8,000,000 SLC + 37,500 USDT",
      poolType: "V2 volatile, stable=false",
      feeMode: "No-gauge LP fee split",
      lockTx: "0x26aa...e310",
      vesting: "Linear over 6 months",
      cliff: "20% at TGE",
      incentives: "7,500 veTOPAZ",
      distributor: "Topaz Incentive Module",
      start: "Apr 28, 2026",
    },
    risk: ["Launch finalized", "Review did not include formal audit"],
    post: {
      marketCap: "$320K",
      fdv: "$1.2M",
      liquidity: "$75K",
      holders: "304",
    },
    social: {
      enabled: true,
      channels: ["X", "Telegram", "Discord"],
      hashtag: "#SLCProof",
      creatorHandle: "@SolacePay",
      cadence: "Proof, claims, liquidity updates",
    },
  },
  {
    id: "mythos",
    name: "MYTHOS",
    symbol: "MYTH",
    status: "refunding",
    color: "#ff6d71",
    raised: 18000,
    goal: 90000,
    softCap: 25000,
    saleType: "Fixed price",
    quoteAsset: "USDT",
    price: "Refund open",
    hardCap: "90,000 USDT",
    endsIn: "Refunding until May 10",
    summary:
      "Mythos missed soft cap. Funds remain in the sale vault and buyers can claim refunds from the launch page.",
    tags: ["GameFi", "NFT", "Refund"],
    min: 50,
    max: 1500,
    contributors: 74,
    avgContribution: 243,
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
    social: {
      enabled: true,
      channels: ["X", "Telegram"],
      hashtag: "#MYTHRefund",
      creatorHandle: "@MythosGame",
      cadence: "Refund notices",
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
  copy:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="10" height="10" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"/></svg>',
  share:
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="m16 6-4-4-4 4"/><path d="M12 2v14"/></svg>',
};

const state = {
  view: "launchpad",
  tab: "live",
  selectedId: "aurora",
  connected: false,
  walletAddress: "",
  walletChainId: "",
  walletStatus: "Not connected",
  testnetLoading: false,
  testnetError: "",
  testnetLastUpdated: "",
  testnetData: {
    launchCount: null,
    checks: [],
    launches: [],
  },
  contribution: "",
  wizardOpen: false,
  wizardStep: 0,
};

const statusMeta = {
  draft: {
    label: "Draft",
    publicMeaning: "Private workspace only",
    buyerMeaning: "Not public and not approved.",
  },
  "pending-review": {
    label: "Pending Review",
    publicMeaning: "Application is under review",
    buyerMeaning: "Not approved yet, so it cannot go live.",
  },
  approved: {
    label: "Approved",
    publicMeaning: "Reviewed and waiting for a sale window",
    buyerMeaning: "Approved, but deposits are not open yet.",
  },
  upcoming: {
    label: "Upcoming",
    publicMeaning: "Approved and scheduled",
    buyerMeaning: "Approved, but not live yet.",
  },
  live: {
    label: "Live",
    publicMeaning: "Approved and accepting deposits",
    buyerMeaning: "Contributions are open.",
  },
  finalized: {
    label: "Finalized",
    publicMeaning: "Successful launch with proof",
    buyerMeaning: "Claims, liquidity, lock proof, and trade route are published.",
  },
  refunding: {
    label: "Refunding",
    publicMeaning: "Soft cap missed",
    buyerMeaning: "Refunds are open; no Topaz pair or buyer claims.",
  },
};

const navItems = [
  { key: "launchpad", label: "Launchpad", icon: icons.launch },
  { key: "testnet", label: "Testnet", icon: icons.wallet },
  { key: "portfolio", label: "My Contributions", icon: icons.stack },
  { key: "proof", label: "Verify Launches", icon: icons.lock },
  { key: "integration", label: "Topaz V2", icon: icons.doc },
  { key: "finalize", label: "Finalize", icon: icons.check },
  { key: "voting", label: "veTOPAZ Voting", icon: icons.vote },
  { key: "rewards", label: "Rewards", icon: icons.chart },
  { key: "locks", label: "LP Locks", icon: icons.lock },
  { key: "projects", label: "Project Review", icon: icons.doc },
  { key: "admin", label: "Admin", icon: icons.settings },
];

const tabs = [
  ["approved", "Approved"],
  ["live", "Live"],
  ["upcoming", "Upcoming"],
  ["finalized", "Finalized"],
  ["refunding", "Refunding"],
];

const statusFlow = [
  ["Draft", "Creator prepares token, raise, liquidity, vesting, links, and social settings."],
  ["Pending Review", "Arbor Foundry checks disclosures before the launch is public."],
  ["Approved", "Project can be scheduled, but buyers still cannot contribute."],
  ["Upcoming", "Approved sale window is visible and ready to open."],
  ["Live", "Buyer deposits are accepted and soft cap progress is tracked."],
  ["Finalized", "Soft cap was met; Topaz liquidity, LP lock, claims, and proof are live."],
  ["Refunding", "Soft cap was missed; refunds open and the platform success fee is 0%."],
];

const wizardSteps = ["Token", "Sale", "Liquidity", "Vesting", "Incentives", "Links", "Social", "Review"];

const wizardGuidance = {
  Token: ["This is the public identity buyers will inspect first.", "Use a project logo, not the Arbor Foundry platform logo."],
  Sale: ["All three sale modes can be requested from the start.", "Fair launch is self-serve in MVP; fixed-price and liquidity bootstrap are available with guided review and setup."],
  Liquidity: ["Choose how much of the successful raise becomes Topaz liquidity.", "LP proof is published after a successful close."],
  Vesting: ["Make team unlocks readable before anyone contributes.", "Short or unclear vesting should be reviewed carefully."],
  Incentives: ["Incentives are optional support for post-launch attention.", "Keep budgets realistic for smaller launches."],
  Links: ["Project and social links help buyers verify who is behind the raise.", "Unsafe or missing links can block approval."],
  Social: ["Creators can share progress without changing sale terms.", "Generated posts should reflect the current launch state."],
  Review: ["Submitting creates a pending review, not a live sale.", "The review badge means disclosures were checked, not that the token is risk-free."],
};

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

const bnbTestnet = {
  chain: "BNB Testnet",
  chainId: 97,
  chainIdHex: "0x61",
  explorer: "https://testnet.bscscan.com",
  rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
  nativeCurrency: {
    name: "Test BNB",
    symbol: "tBNB",
    decimals: 18,
  },
  contracts: {
    launchFactory: "0xC6b44e114BD06c08257aC6EEEB409c022EDCb16B",
    topazFinalizer: "0x4CfCBC52355bFf61bC99E8F0f43B38Fe5AAEa466",
    lpLocker: "0xB00f7c3a599a01A1A4D9312633ca86f74bdF85Ce",
    vestingVault: "0x109060137eF2C77980136aC2f9e72353f2Aa45Ce",
    incentiveEscrow: "0x8BAE46797C58B5870F65EB564D53CA11bb3b7a35",
    mockTopazFactory: "0x3eF32427eB1eA6cE7572358e22C800CeC740292A",
    mockTopazRouter: "0x8a7C0b2Dc04C54eC8932Cf4cb28aC6F4f881398E",
    mockUsdt: "0xA7C16a4CadA1c3bCC884904144B372aB09674A1d",
  },
  expectedOwner: "0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7",
  platformTreasury: "0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE",
};

const contractSelectors = {
  launchCount: "0x27cca59f",
  allLaunches: "0x41d6e9d3",
  owner: "0x8da5cb5b",
  platformTreasury: "0xe138818c",
  finalizer: "0xe9dd248b",
  quoteTokenAllowlistEnabled: "0x8dcb094c",
  quoteTokenAllowed: "0xed723e27",
  status: "0x200d2ed2",
  totalRaised: "0xc5c4744c",
  previewAccounting: "0x6ebd5c67",
};

const launchStatusLabels = ["Draft", "Pending Review", "Approved", "Upcoming", "Live", "Finalized", "Refunding", "Cancelled"];

const platformEconomics = {
  successFeeBps: 200,
  successFeeLabel: "2%",
  listingFee: "$0 in MVP",
  applicationFee: "Configurable BNB fee, off in prototype",
  lpFeeSplit: "80% creator / 20% Arbor Foundry",
  treasuryLabel: "Configured internally",
};

const contributions = [
  {
    launchId: "aurora",
    amount: 1200,
    allocation: "266,666.67 AUR",
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
    value: "$110K",
    duration: "365 days",
    fees: "$1,240",
    beneficiary: "Project 80% / Arbor 20%",
    status: "Locked",
  },
  {
    pair: "SLC/USDT",
    tokenId: "0xPool...SLC",
    value: "$75K",
    duration: "12 months",
    fees: "$820",
    beneficiary: "Project 80% / Arbor 20%",
    status: "Locked",
  },
  {
    pair: "NXO/USDT",
    tokenId: "Queued pool",
    value: "Pending",
    duration: "Permanent",
    fees: "Pending",
    beneficiary: "Project 80% / Arbor 20%",
    status: "Pre-launch",
  },
];

const incentiveRows = [
  ["AUR/USDT", "18,000 veTOPAZ", "Epoch 1-4", "Funded", "High"],
  ["DWR/USDT", "8,500 veTOPAZ", "Epoch 1-3", "Funded", "Medium"],
  ["NXO/USDT", "7,500 veTOPAZ", "Queued", "Pending finalization", "High"],
  ["NMB/USDT", "10,000 veTOPAZ", "Queued", "Pending review", "Medium"],
];

const app = document.getElementById("app");

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function shortAddress(address) {
  if (!address) return "Not connected";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function normalizeAddress(address) {
  return (address || "").toLowerCase();
}

function addressMatches(actual, expected) {
  return normalizeAddress(actual) === normalizeAddress(expected);
}

function numericChainId(chainId) {
  if (!chainId) return null;
  if (typeof chainId === "number") return chainId;
  const value = String(chainId);
  const radix = value.toLowerCase().startsWith("0x") ? 16 : 10;
  const numeric = Number.parseInt(value, radix);
  return Number.isNaN(numeric) ? null : numeric;
}

function chainIdLabel(chainId) {
  const numeric = numericChainId(chainId);
  return numeric === null ? "Not connected" : `${numeric}`;
}

function isWalletOnBnbTestnet() {
  return numericChainId(state.walletChainId) === bnbTestnet.chainId;
}

function isWalletOnBnbMainnet() {
  return numericChainId(state.walletChainId) === Number(topazV2.chainId);
}

function walletButtonLabel() {
  if (!state.connected || !state.walletAddress) return "Connect Wallet";
  return shortAddress(state.walletAddress);
}

function testnetNetworkLabel() {
  if (!state.connected) return "BNB Testnet 97";
  if (isWalletOnBnbTestnet()) return `BNB Testnet ${bnbTestnet.chainId}`;
  return `Wrong chain ${chainIdLabel(state.walletChainId)}`;
}

function topbarNetworkLabel() {
  if (!state.connected) return `BNB Testnet ${bnbTestnet.chainId}`;
  if (isWalletOnBnbTestnet()) return `BNB Testnet ${bnbTestnet.chainId}`;
  if (isWalletOnBnbMainnet()) return "Switch to BNB Testnet";
  return `Switch network ${chainIdLabel(state.walletChainId)}`;
}

async function syncWalletState(accountMethod = "eth_accounts") {
  if (!window.ethereum) return false;
  const accounts = await window.ethereum.request({ method: accountMethod });
  state.connected = Boolean(accounts.length);
  state.walletAddress = accounts[0] || "";

  if (!state.connected) {
    state.walletChainId = "";
    state.walletStatus = "Not connected";
    return false;
  }

  state.walletChainId = await window.ethereum.request({ method: "eth_chainId" });
  state.walletStatus = isWalletOnBnbTestnet() ? "Connected to BNB testnet." : "Wallet connected on the wrong chain.";
  return true;
}

function encodeUint256(value) {
  return BigInt(value).toString(16).padStart(64, "0");
}

function encodeAddress(address) {
  return normalizeAddress(address).replace(/^0x/, "").padStart(64, "0");
}

function decodeUint256(result, word = 0) {
  const clean = (result || "0x").replace(/^0x/, "");
  const start = word * 64;
  const value = clean.slice(start, start + 64) || "0";
  return BigInt(`0x${value}`);
}

function decodeBool(result, word = 0) {
  return decodeUint256(result, word) === 1n;
}

function decodeAddress(result, word = 0) {
  const clean = (result || "0x").replace(/^0x/, "");
  const start = word * 64;
  const value = clean.slice(start + 24, start + 64);
  return value ? `0x${value}` : "";
}

function formatUnits(value, decimals = 18, places = 2) {
  const amount = BigInt(value || 0);
  const divisor = 10n ** BigInt(decimals);
  const whole = amount / divisor;
  const fraction = amount % divisor;
  const fractionText = fraction.toString().padStart(decimals, "0").slice(0, places);
  const wholeText = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const trimmedFraction = fractionText.replace(/0+$/, "");
  return trimmedFraction ? `${wholeText}.${trimmedFraction}` : wholeText;
}

function explorerAddressUrl(address) {
  return `${bnbTestnet.explorer}/address/${address}`;
}

async function ethCall(to, data) {
  const call = { to, data };
  if (window.ethereum && state.connected && isWalletOnBnbTestnet()) {
    return window.ethereum.request({
      method: "eth_call",
      params: [call, "latest"],
    });
  }

  const response = await fetch(bnbTestnet.rpcUrls[0], {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method: "eth_call",
      params: [call, "latest"],
    }),
  });
  const payload = await response.json();
  if (payload.error) throw new Error(payload.error.message || "BNB testnet RPC call failed.");
  return payload.result;
}

async function readLaunchFactory() {
  const factory = bnbTestnet.contracts.launchFactory;
  const owner = decodeAddress(await ethCall(factory, contractSelectors.owner));
  const treasury = decodeAddress(await ethCall(factory, contractSelectors.platformTreasury));
  const finalizer = decodeAddress(await ethCall(factory, contractSelectors.finalizer));
  const quoteAllowlistEnabled = decodeBool(await ethCall(factory, contractSelectors.quoteTokenAllowlistEnabled));
  const quoteTokenAllowed = decodeBool(
    await ethCall(factory, `${contractSelectors.quoteTokenAllowed}${encodeAddress(bnbTestnet.contracts.mockUsdt)}`),
  );
  const launchCount = Number(decodeUint256(await ethCall(factory, contractSelectors.launchCount)));

  const launchesOnChain = [];
  const start = Math.max(0, launchCount - 5);
  for (let index = start; index < launchCount; index += 1) {
    const launchAddress = decodeAddress(await ethCall(factory, `${contractSelectors.allLaunches}${encodeUint256(index)}`));
    launchesOnChain.push(await readSaleVault(launchAddress, index));
  }

  return {
    owner,
    treasury,
    finalizer,
    quoteAllowlistEnabled,
    quoteTokenAllowed,
    launchCount,
    checks: [
      ["Owner", owner, bnbTestnet.expectedOwner, addressMatches(owner, bnbTestnet.expectedOwner)],
      ["Platform treasury", treasury, bnbTestnet.platformTreasury, addressMatches(treasury, bnbTestnet.platformTreasury)],
      ["Topaz finalizer", finalizer, bnbTestnet.contracts.topazFinalizer, addressMatches(finalizer, bnbTestnet.contracts.topazFinalizer)],
      ["Quote allowlist", quoteAllowlistEnabled ? "Enabled" : "Disabled", "Enabled", quoteAllowlistEnabled],
      ["Mock USDT allowed", quoteTokenAllowed ? "Allowed" : "Blocked", "Allowed", quoteTokenAllowed],
    ],
    launches: launchesOnChain.reverse(),
  };
}

async function readSaleVault(address, index) {
  const status = Number(decodeUint256(await ethCall(address, contractSelectors.status)));
  const totalRaised = decodeUint256(await ethCall(address, contractSelectors.totalRaised));
  const accounting = await ethCall(address, contractSelectors.previewAccounting);
  return {
    index,
    address,
    status,
    statusLabel: launchStatusLabels[status] || `Status ${status}`,
    totalRaised,
    platformFee: decodeUint256(accounting, 1),
    netRaise: decodeUint256(accounting, 2),
    quoteToLiquidity: decodeUint256(accounting, 3),
    creatorProceeds: decodeUint256(accounting, 4),
    refundTotal: decodeUint256(accounting, 5),
  };
}

async function refreshTestnetData(silent = false) {
  state.testnetLoading = true;
  state.testnetError = "";
  if (!silent) renderApp();

  try {
    const data = await readLaunchFactory();
    state.testnetData = data;
    state.testnetLastUpdated = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch (error) {
    state.testnetError = error.message || "Could not read BNB testnet contracts.";
  } finally {
    state.testnetLoading = false;
    renderApp();
  }
}

async function connectWallet() {
  if (!window.ethereum) {
    state.connected = false;
    state.walletAddress = "";
    state.walletChainId = "";
    state.walletStatus = "No injected EVM wallet found.";
    renderApp();
    showToast("Install or unlock MetaMask/Rabby to connect a BNB testnet wallet.");
    return;
  }

  try {
    await syncWalletState("eth_requestAccounts");
    renderApp();
    showToast(isWalletOnBnbTestnet() ? "Wallet connected to BNB testnet." : "Wallet connected. Switch to BNB testnet before transactions.");
    await refreshTestnetData(true);
  } catch (error) {
    state.walletStatus = error.message || "Wallet connection rejected.";
    renderApp();
    showToast("Wallet connection was not completed.");
  }
}

async function switchToBnbTestnet() {
  if (!window.ethereum) {
    showToast("No browser wallet found.");
    return;
  }

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: bnbTestnet.chainIdHex }],
    });
  } catch (error) {
    if (error.code !== 4902) {
      showToast("Wallet did not switch networks.");
      return;
    }
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: bnbTestnet.chainIdHex,
          chainName: "BNB Smart Chain Testnet",
          nativeCurrency: bnbTestnet.nativeCurrency,
          rpcUrls: bnbTestnet.rpcUrls,
          blockExplorerUrls: [bnbTestnet.explorer],
        },
      ],
    });
  }

  await syncWalletState();
  renderApp();
  await refreshTestnetData(true);
}

function statusLabel(status) {
  return statusMeta[status]?.label || status;
}

function statusPublicMeaning(status) {
  return statusMeta[status]?.publicMeaning || "Launch state tracked";
}

function statusBuyerMeaning(status) {
  return statusMeta[status]?.buyerMeaning || "Review the verification page before acting.";
}

function isLaunchApproved(launch) {
  return !["draft", "pending-review"].includes(launch.status);
}

function isPublicLaunch(launch) {
  return isLaunchApproved(launch);
}

function platformFeeFor(amount) {
  return Math.round((amount * platformEconomics.successFeeBps) / 10000);
}

function softCapFor(launch) {
  return launch.softCap || 25000;
}

function hardCapFor(launch) {
  return launch.goal;
}

function liquidityPercentFor(launch) {
  if (launch.id === "nimbus") return 70;
  if (launch.id === "defiware") return 55;
  if (launch.id === "solace") return 50;
  return 60;
}

function isSoftCapMet(launch) {
  return launch.raised >= softCapFor(launch);
}

function canGoLive(launch) {
  return ["approved", "upcoming"].includes(launch.status) && isLaunchApproved(launch);
}

function finalRaiseFor(launch) {
  if (launch.status === "refunding" || !isSoftCapMet(launch)) return 0;
  return launch.raised;
}

function launchOutcome(launch) {
  const softCap = softCapFor(launch);
  const hardCap = hardCapFor(launch);
  const remainingToSoftCap = Math.max(0, softCap - launch.raised);

  if (launch.status === "draft") {
    return {
      label: "Draft",
      tone: "draft",
      detail: "This launch is still private. It must be submitted for review before buyers can see or fund it.",
    };
  }

  if (launch.status === "pending-review") {
    return {
      label: "Pending review",
      tone: "pending-review",
      detail: "Arbor Foundry is reviewing token terms, links, liquidity, vesting, and refund safety before approval.",
    };
  }

  if (launch.status === "approved") {
    return {
      label: "Approved",
      tone: "approved",
      detail: `Review passed. The sale can be scheduled, but deposits stay closed until the launch is ${statusLabel("live").toLowerCase()}.`,
    };
  }

  if (launch.status === "refunding") {
    return {
      label: "Refunds open",
      tone: "refunding",
      detail: `Missed the ${money(softCap)} soft cap. Contributions return to buyers, with no Topaz pair and no platform success fee.`,
    };
  }

  if (launch.status === "upcoming") {
    return {
      label: "Approved, not live",
      tone: "upcoming",
      detail: `This launch is approved and scheduled. It needs at least ${money(softCap)} to finalize after opening; ${money(hardCap)} remains the maximum raise.`,
    };
  }

  if (launch.status === "finalized") {
    return {
      label: "Finalized",
      tone: "finalized",
      detail: `${money(launch.raised)} closed above the ${money(softCap)} soft cap, so tokens, LP, proof, and claims are live.`,
    };
  }

  if (isSoftCapMet(launch)) {
    return {
      label: "Soft cap met",
      tone: "ready",
      detail: `If the sale closed now, it would finalize from the actual ${money(launch.raised)} raised, even below the ${money(hardCap)} hard cap.`,
    };
  }

  return {
    label: "Needs soft cap",
    tone: "watch",
    detail: `${money(remainingToSoftCap)} more is needed before this launch can finalize. If it closes below soft cap, refunds open.`,
  };
}

function launchShareUrl(launch) {
  return `https://topaz-foundry.netlify.app/launch/${launch.id}`;
}

function nextShareTrigger(launch) {
  if (launch.status === "approved") return "Schedule announcement";
  if (launch.status === "refunding") return "Refund notice";
  if (launch.status === "upcoming") return "Opening announcement";
  if (launch.status === "finalized") return "Proof and claims update";
  if (!isSoftCapMet(launch)) return "Soft-cap push";

  const progress = pct(launch);
  const next = [50, 75, 100].find((mark) => progress < mark);
  return next ? `${next}% hard-cap update` : "Finalization update";
}

function nextMilestoneFor(launch) {
  if (launch.status === "draft") return "Submit for review";
  if (launch.status === "pending-review") return "Approval decision";
  if (launch.status === "approved") return "Schedule sale window";
  if (launch.status === "refunding") return "Refund claims open";
  if (launch.status === "upcoming") return "Sale opens";
  if (launch.status === "finalized") return "Claims and proof live";
  if (!isSoftCapMet(launch)) return `${money(Math.max(0, softCapFor(launch) - launch.raised))} to soft cap`;
  if (launch.raised < hardCapFor(launch)) return `${money(hardCapFor(launch) - launch.raised)} to hard cap`;
  return "Ready to close";
}

function creatorNextFor(launch) {
  if (launch.status === "draft") return "Finish required terms and submit review.";
  if (launch.status === "pending-review") return "Respond to review notes before launch can appear live.";
  if (launch.status === "approved") return "Schedule the sale window and prepare launch posts.";
  if (launch.status === "refunding") return "Keep refunds visible until the window closes.";
  if (launch.status === "upcoming") return "Finish review, proof setup, and launch announcement.";
  if (launch.status === "finalized") return "Keep claims, Topaz pair, and LP proof easy to find.";
  if (isSoftCapMet(launch)) return "Prepare finalization from the actual raised amount.";
  return "Share progress and focus on reaching the soft cap.";
}

function primaryActionFor(launch) {
  if (launch.status === "draft" || launch.status === "pending-review") {
    return {
      title: "Not public yet",
      note: "This launch cannot accept funds until Arbor Foundry review is complete.",
      button: "View Review",
      action: "show-toast",
    };
  }

  if (launch.status === "approved") {
    return {
      title: "Approved, not live",
      note: "Review is complete, but buyer deposits remain closed until the sale window opens.",
      button: "Watch Launch",
      action: "watch-launch",
    };
  }

  if (launch.status === "refunding") {
    return {
      title: "Refunds are open",
      note: "The soft cap was missed, so buyer deposits return from the sale vault.",
      button: "Claim Refund",
      action: "claim-refund",
    };
  }

  if (launch.status === "finalized") {
    return {
      title: "Token claims are open",
      note: "The launch finalized, liquidity proof is published, and buyer claims follow the vesting schedule.",
      button: "Claim Tokens",
      action: "claim-token",
    };
  }

  if (launch.status === "upcoming") {
    return {
      title: "Sale has not opened",
      note: "No deposits are accepted until the reviewed launch window begins.",
      button: "Watch Launch",
      action: "watch-launch",
    };
  }

  return {
    title: "Contribute to this raise",
    note: "Review the soft cap, refund rule, proof, and risk flags before contributing.",
    button: state.connected ? "Contribute" : "Connect Wallet",
    action: "contribute",
  };
}

function proofStripItemsFor(launch) {
  if (launch.status === "draft" || launch.status === "pending-review") {
    return [
      [icons.warn, "Not public", "warn"],
      [icons.doc, "Review required", "warn"],
      [icons.lock, "No deposits", "warn"],
      [icons.check, "$0 platform fee", ""],
    ];
  }

  if (launch.status === "approved") {
    return [
      [icons.check, "Approved", ""],
      [icons.lock, "Deposits closed", "warn"],
      [icons.doc, "Proof planned", "warn"],
      [icons.share, "Share kit ready", "warn"],
    ];
  }

  if (launch.status === "refunding") {
    return [
      [icons.check, "Refunds open", ""],
      [icons.warn, "No Topaz pool", "warn"],
      [icons.check, "$0 platform fee", ""],
      [icons.doc, "Refund proof", "warn"],
    ];
  }

  if (launch.status === "upcoming") {
    return [
      [icons.doc, "Review pending", "warn"],
      [icons.lock, "LP after close", "warn"],
      [icons.check, "Vesting planned", ""],
      [icons.share, "Share kit optional", "warn"],
    ];
  }

  if (launch.status === "finalized") {
    return [
      [icons.lock, "LP locked", ""],
      [icons.check, "Claims open", ""],
      [icons.doc, "Proof live", ""],
      [icons.vote, "Rewards tracked", "warn"],
    ];
  }

  if (isSoftCapMet(launch)) {
    return [
      [icons.check, "Soft cap met", ""],
      [icons.lock, "LP at close", "warn"],
      [icons.check, "Vesting public", ""],
      [icons.share, "Share progress", "warn"],
    ];
  }

  return [
    [icons.warn, "Soft cap pending", "warn"],
    [icons.lock, "LP after success", "warn"],
    [icons.check, "Refund rule set", ""],
    [icons.doc, "Risks listed", "warn"],
  ];
}

function socialPostsFor(launch) {
  const social = launch.social || {};
  const tag = social.hashtag || "#ArborFoundry";
  const handle = social.creatorHandle ? `${social.creatorHandle} ` : "";
  const url = launchShareUrl(launch);
  const progress = Math.round(pct(launch));
  const softCap = money(softCapFor(launch));
  const hardCap = money(hardCapFor(launch));
  const raised = money(launch.raised);

  if (launch.status === "refunding") {
    return [
      [
        "Refund notice",
        `${handle}${launch.name} did not reach its ${softCap} soft cap on Arbor Foundry. Refunds are open from the sale vault; no Topaz pair was created and no platform success fee was taken. ${url} ${tag}`,
      ],
      [
        "Transparency update",
        `${launch.name} raised ${raised} against a ${softCap} soft cap. The launch is in refund mode, with buyer deposits returned through the sale vault. ${url} ${tag}`,
      ],
    ];
  }

  if (launch.status === "finalized") {
    return [
      [
        "Proof update",
        `${handle}${launch.name} finalized on Arbor Foundry with ${raised} raised. LP is locked on Topaz, buyer claims are open, and proof stays public. ${url} ${tag}`,
      ],
      [
        "Liquidity update",
        `${launch.name} is live with liquidity rooted on Topaz. View pool, lock, vesting, and claim proof here: ${url} ${tag}`,
      ],
    ];
  }

  if (launch.status === "approved") {
    return [
      [
        "Approved preview",
        `${handle}${launch.name} has been approved on Arbor Foundry and is waiting for its sale window. Buyers can review soft cap, hard cap, liquidity plan, vesting, and refund rules before deposits open. ${url} ${tag}`,
      ],
      [
        "Review passed",
        `${launch.name} passed Arbor Foundry launch review. Deposits are not live yet; the next update will announce the opening window. ${url} ${tag}`,
      ],
    ];
  }

  if (launch.status === "upcoming") {
    return [
      [
        "Opening soon",
        `${handle}${launch.name} opens soon on Arbor Foundry. Soft cap: ${softCap}. Hard cap: ${hardCap}. Launch liquidity will be rooted on Topaz if the soft cap is met. ${url} ${tag}`,
      ],
      [
        "Launch terms",
        `${launch.name} is preparing a ${launch.saleType.toLowerCase()} raise with ${quoteAsset(launch)} contributions, public vesting, and Topaz V2 liquidity proof. ${url} ${tag}`,
      ],
    ];
  }

  if (isSoftCapMet(launch)) {
    return [
      [
        "Progress update",
        `${handle}${launch.name} has raised ${raised}, about ${progress}% of its ${hardCap} hard cap. Soft cap is met, so the launch can finalize from the actual raise when the sale closes. ${url} ${tag}`,
      ],
      [
        "Soft-cap milestone",
        `${launch.name} has crossed the ${softCap} soft cap on Arbor Foundry. If the sale closed now, platform fee, LP, claims, and proof would all calculate from the actual raise. ${url} ${tag}`,
      ],
      [
        "Liquidity path",
        `${launch.name} routes launch liquidity into Topaz V2 after a successful close, with LP proof published for buyers and reviewers. Current raise: ${raised}. ${url} ${tag}`,
      ],
    ];
  }

  return [
    [
      "Soft-cap push",
      `${handle}${launch.name} has raised ${raised} toward its ${softCap} soft cap on Arbor Foundry. If soft cap is met, liquidity roots on Topaz; if not, refunds open. ${url} ${tag}`,
    ],
    [
      "Launch terms",
      `${launch.name} is raising with ${quoteAsset(launch)} on Arbor Foundry. Soft cap: ${softCap}. Hard cap: ${hardCap}. ${url} ${tag}`,
    ],
  ];
}

function projectedPlatformFees() {
  return launches
    .filter((launch) => launch.status !== "refunding")
    .reduce((sum, launch) => sum + platformFeeFor(finalRaiseFor(launch) || launch.goal), 0);
}

function finalizedPlatformFees() {
  return launches
    .filter((launch) => launch.status === "finalized")
    .reduce((sum, launch) => sum + platformFeeFor(launch.raised), 0);
}

function platformFeeRows() {
  return launches.map((launch) => {
    const finalRaise = finalRaiseFor(launch);
    const feeBase = finalRaise || launch.goal;
    const outcome = launchOutcome(launch);
    return [
      launch.name,
      launch.status === "refunding" ? money(launch.raised) : money(feeBase),
      platformEconomics.successFeeLabel,
      launch.status === "refunding" ? "$0" : money(platformFeeFor(feeBase)),
      outcome.label,
    ];
  });
}

function finalizationPlan(launch, liquidityPercent = liquidityPercentFor(launch)) {
  const finalRaise = finalRaiseFor(launch) || launch.raised || launch.goal;
  const successFee = launch.status === "refunding" || finalRaise < softCapFor(launch) ? 0 : platformFeeFor(finalRaise);
  const netRaise = Math.max(0, finalRaise - successFee);
  const quoteToLp = Math.round((netRaise * liquidityPercent) / 100);
  const creatorProceeds = Math.max(0, netRaise - quoteToLp);
  const poolValue = quoteToLp * 2;
  const pair = `${launch.symbol}/${quoteAsset(launch)}`;
  return {
    launch,
    pair,
    liquidityPercent,
    finalRaise,
    softCap: softCapFor(launch),
    hardCap: hardCapFor(launch),
    successFee,
    netRaise,
    quoteToLp,
    creatorProceeds,
    poolValue,
    tokenPairing: launch.id === "aurora" ? "19,600,000 AUR" : `Matched ${launch.symbol} reserve`,
    pairAddress: launch.status === "finalized" ? "0xPool...SLC" : "Created or reused at finalization",
    locker: "Fee-split LP locker",
    tradeUrl: "https://topazdex.com",
  };
}

function accountingRowsFor(launch) {
  const plan = finalizationPlan(launch);
  if (launch.status === "refunding" || !isSoftCapMet(launch)) {
    return [
      ["Total raised", money(launch.raised), launch.status === "refunding" ? "Final failed raise" : "Current progress"],
      ["Platform success fee", "$0", "No success fee unless soft cap is met"],
      ["Net raise after fee", "$0", "Refund path if sale closes below soft cap"],
      ["Topaz liquidity", "$0", "No pair or LP lock if soft cap is missed"],
      ["Creator proceeds", "$0", "Project cannot withdraw failed raise funds"],
    ];
  }

  return [
    ["Total raised", money(plan.finalRaise), "Actual amount raised, even below hard cap"],
    ["Platform success fee", money(plan.successFee), `${platformEconomics.successFeeLabel} after soft-cap success`],
    ["Net raise after fee", money(plan.netRaise), "Amount available after platform fee"],
    ["Topaz liquidity", money(plan.quoteToLp), `${plan.liquidityPercent}% of post-fee raise sent to LP`],
    ["Creator proceeds", money(plan.creatorProceeds), "Remaining project proceeds after liquidity commitment"],
  ];
}

function verificationRowsFor(launch) {
  const plan = finalizationPlan(launch);
  const status = launch.status;

  if (status === "draft" || status === "pending-review") {
    return [
      ["Launch status", statusLabel(status), statusBuyerMeaning(status), "Private"],
      ["Approval gate", "Not approved", "Cannot go live or accept funds", "Blocked"],
      ["Soft / hard cap", `${money(softCapFor(launch))} / ${money(hardCapFor(launch))}`, "Creator-set goals", "Review"],
      ["Platform success fee", "$0", "No fee before successful finalization", "Ready"],
      ["Topaz pair", "Not created", "No public launch yet", "Pending"],
      ["Buyer action", "None", "No deposits accepted", "Closed"],
    ];
  }

  if (status === "refunding") {
    return [
      ["Launch status", statusLabel(status), "Soft cap missed", "Refunding"],
      ["Soft / hard cap", `${money(softCapFor(launch))} / ${money(hardCapFor(launch))}`, `${money(launch.raised)} raised`, "Missed"],
      ["Platform success fee", "$0", "0% because soft cap was missed", "Ready"],
      ["Net raise after fee", "$0", "Funds stay refundable in sale vault", "Ready"],
      ["Topaz pair", "Not created", "No liquidity added", "Ready"],
      ["LP token lock", "Not created", "No LP token minted", "Ready"],
      ["Buyer refunds", "Claim from sale vault", "Quote asset returned", "Open"],
      ["Buyer claims", "Closed", "No tokens claimable after failed raise", "Closed"],
    ];
  }

  if (status === "finalized") {
    return [
      ["Launch status", statusLabel(status), statusBuyerMeaning(status), "Live proof"],
      ["Soft / hard cap", `${money(softCapFor(launch))} / ${money(hardCapFor(launch))}`, `${money(launch.raised)} final raise`, "Met"],
      ["Platform success fee", money(plan.successFee), `${platformEconomics.successFeeLabel} of final raise`, "Accounted"],
      ["Net raise after fee", money(plan.netRaise), "Post-fee accounting base", "Ready"],
      ["Topaz liquidity", money(plan.quoteToLp), `${plan.liquidityPercent}% committed to LP`, "Added"],
      ["Topaz pair", plan.pair, launch.proof.poolType, "Trade ready"],
      ["LP token lock", launch.proof.lockTx, launch.proof.lockDuration, "Locked"],
      ["Buyer claims", "Open", "Claims follow vesting schedule", "Open"],
      ["Trade on Topaz", "Direct link available", "Use pair route if indexer lags", "Ready"],
    ];
  }

  return [
    ["Launch status", statusLabel(status), statusBuyerMeaning(status), isSoftCapMet(launch) ? "Finalizable" : "Waiting"],
    ["Approval gate", isLaunchApproved(launch) ? "Approved" : "Not approved", "New launches cannot go live before approval", isLaunchApproved(launch) ? "Ready" : "Blocked"],
    ["Soft / hard cap", `${money(softCapFor(launch))} / ${money(hardCapFor(launch))}`, `${money(launch.raised)} raised so far`, isSoftCapMet(launch) ? "Met" : "Pending"],
    ["Platform success fee", isSoftCapMet(launch) ? money(plan.successFee) : "$0 until soft cap", `${platformEconomics.successFeeLabel} only after success`, "Tracked"],
    ["Net raise after fee", isSoftCapMet(launch) ? money(plan.netRaise) : "Pending", "Calculated from actual raise", "Tracked"],
    ["Topaz liquidity", isSoftCapMet(launch) ? money(plan.quoteToLp) : "Pending", `${plan.liquidityPercent}% creator commitment`, "Queued"],
    ["Topaz pair", "Pending", "Created or reused after successful close", "Queued"],
    ["LP token lock", "Pending", launch.proof.lockDuration, "Queued"],
    ["Buyer claims", "Closed", "Opens only after finalization", "Closed"],
    ["Refund status", "Automatic if soft cap misses", "Sale vault returns buyer deposits", "Ready"],
  ];
}

function buyerChecklistRowsFor(launch) {
  const outcome = launchOutcome(launch);
  return [
    ["Approved?", isLaunchApproved(launch) ? "Yes" : "No", isLaunchApproved(launch) ? "Review gate passed" : "Cannot go live yet"],
    ["Live now?", launch.status === "live" ? "Yes" : "No", primaryActionFor(launch).note],
    ["Soft cap", isSoftCapMet(launch) ? "Met" : "Not met", outcome.detail],
    ["If it fails", "Refunds open", "0% platform fee, no pair, no LP lock, no buyer claims"],
    ["Claims", launch.status === "finalized" ? "Open" : "After finalization", "Buyer claims follow published vesting"],
    ["Proof", launch.status === "finalized" ? "Published" : "Queued", "Verify This Launch shows sale, liquidity, lock, refunds, and claims"],
    ["Trade", launch.status === "finalized" ? "Topaz link ready" : "After finalization", "Pair appears on Topaz after creation/indexing"],
  ];
}

function adminAccountingRows() {
  const raisedTotal = launches.reduce((sum, launch) => sum + launch.raised, 0);
  const finalizable = launches.filter((launch) => launch.status === "finalized" || (launch.status === "live" && isSoftCapMet(launch)));
  const expectedFee = finalizable.reduce((sum, launch) => sum + platformFeeFor(finalRaiseFor(launch) || launch.raised), 0);
  const liquidityCommitted = finalizable.reduce((sum, launch) => sum + finalizationPlan(launch).quoteToLp, 0);
  const failed = launches.filter((launch) => launch.status === "refunding");

  return [
    ["Total raised tracked", money(raisedTotal), "All public prototype launch states"],
    ["Expected 2% success fee", money(expectedFee), "Finalized plus live launches above soft cap"],
    ["Actual success fee collected", money(finalizedPlatformFees()), "Finalized launches only"],
    ["Failed-launch platform fees", "$0", `${failed.length} refunding launch${failed.length === 1 ? "" : "es"}`],
    ["Liquidity committed", money(liquidityCommitted), "Topaz LP quote side from successful launches"],
    ["LP fee split", platformEconomics.lpFeeSplit, "Long-term locker fee model"],
  ];
}

function launchOperationsRows() {
  return [
    ["Approve application", "CANOPY", "Review passed; schedule sale window", "Ready"],
    ["Finalize sale", "AURORA", "Soft cap met; use actual raise", "Ready"],
    ["Finalize sale", "DEFIWARE", "Soft cap met; confirm LP amount", "Ready"],
    ["Enable token claim", "SOLACE", "LP proof verified", "Complete"],
    ["Enable refunds", "MYTHOS", "Soft cap failed; platform fee $0", "Complete"],
    ["Create Topaz pair", "NEXORA", "Router address", "Blocked"],
    ["Fund incentives", "NIMBUS", "Gauge route", "Pending"],
  ];
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
    <div class="${className} arbor-logo" aria-hidden="true">
      <img class="arbor-logo-image" src="./assets/arbor-foundry-logo.jpeg" alt="" />
    </div>
  `;
}

function renderProjectMark(launch, size = "small") {
  const symbol = size === "hero" ? launch.symbol.slice(0, 3) : launch.symbol.slice(0, 2);
  const className = size === "hero" ? "project-mark-hero" : "token-logo";
  return `
    <div class="${className}" style="--logo-color:${launch.color}" role="img" aria-label="${launch.symbol} token mark">
      <span>${symbol}</span>
    </div>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        ${renderLogo()}
        <div class="brand-copy">
          <strong>ARBOR</strong>
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
  const wrongChain = state.connected && !isWalletOnBnbTestnet();
  const networkPill = wrongChain
    ? `<button class="network-pill warn action" type="button" data-action="switch-testnet" title="Switch wallet to BNB Smart Chain Testnet">
        <span class="dot"></span>${topbarNetworkLabel()}
      </button>`
    : `<div class="network-pill">
        <span class="dot"></span>${topbarNetworkLabel()}
      </div>`;

  return `
    <header class="topbar">
      <div class="tagline">Independent launches. Liquidity rooted on Topaz.</div>
      <div class="topbar-actions">
        ${networkPill}
        <button class="button gold" type="button" data-action="open-wizard">${icons.plus} New launch</button>
        <button class="button primary" type="button" data-action="connect-wallet">
          ${icons.wallet}
          ${walletButtonLabel()}
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
  const outcome = launchOutcome(launch);
  const progressLabel = ["approved", "upcoming"].includes(launch.status) ? launch.endsIn : `${progress}%`;
  return `
    <button class="launch-row ${launch.id === state.selectedId ? "selected" : ""}" type="button" data-select="${launch.id}" style="--logo-color:${launch.color}">
      <div class="project-cell">
        ${renderProjectMark(launch)}
        <div class="project-name">
          <strong>${launch.name}</strong>
          <span>
            <span class="micro">${launch.symbol}</span>
            <span class="status ${launch.status}">${statusLabel(launch.status)}</span>
          </span>
        </div>
      </div>
      <div class="money">
        <strong>${money(launch.raised)}</strong>
        <span>/ ${money(hardCapFor(launch))}</span>
      </div>
      <div class="progress-cell">
        <strong>${progressLabel}</strong>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="--value:${progress}%"></div>
        </div>
        <span>${outcome.label}</span>
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
        <span>Raised / Hard Cap</span>
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
        ${renderProjectMark(launch, "hero")}
        <div>
          <div class="hero-title">
            <h2>${launch.name}</h2>
            <span class="status ${launch.status}">${statusLabel(launch.status)}</span>
          </div>
          <p class="hero-summary">${launch.summary}</p>
          <div class="chips">
            ${launch.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="metrics">
        <div class="metric"><span>Sale Type</span><strong>${launch.saleType}</strong></div>
        <div class="metric"><span>Soft Cap</span><strong>${money(softCapFor(launch))}</strong></div>
        <div class="metric"><span>Hard Cap</span><strong>${money(hardCapFor(launch))}</strong></div>
        <div class="metric"><span>Quote Asset</span><strong>${quoteAsset(launch)}</strong></div>
        <div class="metric"><span>Approval</span><strong>${isLaunchApproved(launch) ? "Approved" : "Not approved"}</strong></div>
        <div class="metric"><span>Timing</span><strong>${launch.endsIn}</strong></div>
      </div>
    </section>
  `;
}

function renderProofStrip(launch) {
  const items = proofStripItemsFor(launch);
  return `
    <section class="panel proof-strip" aria-label="Launch proof summary">
      ${items
        .map(
          ([icon, label, tone]) => `
            <div class="proof-item"><span class="proof-icon ${tone}">${icon}</span><span class="proof-text">${label}</span></div>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderLaunchSummary(launch) {
  const outcome = launchOutcome(launch);
  const action = primaryActionFor(launch);
  return `
    <section class="panel pad launch-summary">
      <div class="panel-title">
        <h3>Launch Summary</h3>
        <span class="status ${outcome.tone}">${outcome.label}</span>
      </div>
      <div class="summary-grid">
        <div class="summary-card">
          <span>Current state</span>
          <strong>${outcome.label}</strong>
          <p>${outcome.detail}</p>
        </div>
        <div class="summary-card">
          <span>Next milestone</span>
          <strong>${nextMilestoneFor(launch)}</strong>
          <p>${launch.status === "live" ? "Soft cap decides whether the sale can finalize; hard cap only limits the maximum accepted raise." : action.note}</p>
        </div>
        <div class="summary-card">
          <span>Creator focus</span>
          <strong>${creatorNextFor(launch)}</strong>
          <p>Social sharing, proof links, and progress updates stay optional, but the sale rules remain fixed.</p>
        </div>
      </div>
    </section>
  `;
}

function renderSaleProgress(launch) {
  const progress = pct(launch);
  const outcome = launchOutcome(launch);
  const softCapPct = Math.min(100, Math.round((softCapFor(launch) / hardCapFor(launch)) * 10000) / 100);
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Creator-Set Raise Goal</h3>
        <span class="status ${outcome.tone}">${outcome.label}</span>
      </div>
      <div class="muted">${money(launch.raised)} raised against the project creator's ${money(hardCapFor(launch))} hard cap. ${outcome.detail}</div>
      <div class="big-progress">
        <div class="progress-track outcome-track" style="--soft-cap:${softCapPct}%" aria-hidden="true">
          <div class="progress-fill" style="--value:${progress}%"></div>
          <span class="soft-cap-marker"></span>
        </div>
      </div>
      <div class="stat-row">
        <div class="metric"><span>Soft Cap</span><strong>${money(softCapFor(launch))}</strong></div>
        <div class="metric"><span>Hard Cap</span><strong>${money(hardCapFor(launch))}</strong></div>
        <div class="metric"><span>Contributors</span><strong>${launch.contributors.toLocaleString()}</strong></div>
        <div class="metric"><span>Min / Max</span><strong>${launch.min.toLocaleString()} / ${launch.max.toLocaleString()} ${quoteAsset(launch)}</strong></div>
      </div>
      <div class="outcome-grid">
        <div class="outcome-card">
          <span>If soft cap is met</span>
          <strong>Finalize from actual raise</strong>
          <p>The sale can close below hard cap and still launch. The 2% platform fee, liquidity amount, token claims, and verification page use the final raised amount.</p>
        </div>
        <div class="outcome-card">
          <span>If soft cap is missed</span>
          <strong>Refund path only</strong>
          <p>No platform success fee, no Topaz pair, no LP lock, and no buyer token claims. Deposits stay in the sale vault for refunds.</p>
        </div>
      </div>
    </section>
  `;
}

function renderBuyerChecklist(launch) {
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Buyer Trust Checklist</h3>
        <span class="micro">${statusPublicMeaning(launch.status)}</span>
      </div>
      ${renderDataTable(["Check", "Answer", "What it means"], buyerChecklistRowsFor(launch))}
    </section>
  `;
}

function renderAccountingPanel(launch) {
  const plan = finalizationPlan(launch);
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Launch Outcome Math</h3>
        <span class="micro">${isSoftCapMet(launch) ? "Uses actual raised amount" : "Refund-safe until soft cap"}</span>
      </div>
      ${renderDataTable(["Item", "Amount", "Rule"], accountingRowsFor(launch))}
      <div class="assist-note">
        <strong>No success, no fee</strong>
        <span>Arbor Foundry's ${platformEconomics.successFeeLabel} platform success fee only applies when the soft cap is met. The creator-set liquidity commitment is ${plan.liquidityPercent}% of the post-fee raise.</span>
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

function renderSocialShareKit(launch) {
  const social = launch.social || {};
  const enabled = Boolean(social.enabled);
  const posts = enabled ? socialPostsFor(launch) : [];
  const progress = pct(launch);
  const channels = social.channels && social.channels.length ? social.channels : ["X", "Telegram", "Discord"];

  if (!enabled) {
    return `
      <section class="panel pad social-kit">
        <div class="panel-title">
          <h3>Creator Share Kit</h3>
          <span class="status upcoming">Optional</span>
        </div>
        <div class="social-empty">
          <strong>Social sharing is off for this raise.</strong>
          <span class="micro">The project creator can enable campaign posts during launch setup without changing sale terms.</span>
        </div>
      </section>
    `;
  }

  return `
    <section class="panel pad social-kit">
      <div class="panel-title">
        <h3>Creator Share Kit</h3>
        <span class="status ready">Optional</span>
      </div>
      <div class="social-overview">
        <div class="social-meter">
          <span>Raise progress</span>
          <strong>${Math.round(progress)}%</strong>
          <small>${money(launch.raised)} / ${money(hardCapFor(launch))}</small>
        </div>
        <div class="social-meta">
          <div class="review-row"><span>Next trigger</span><strong>${nextShareTrigger(launch)}</strong></div>
          <div class="review-row"><span>Campaign tag</span><strong>${social.hashtag || "#ArborFoundry"}</strong></div>
          <div class="review-row"><span>Cadence</span><strong>${social.cadence || "Creator controlled"}</strong></div>
        </div>
      </div>
      <div class="share-channels" aria-label="Enabled social channels">
        ${channels.map((channel) => `<span class="channel-pill">${channel}</span>`).join("")}
      </div>
      <div class="share-posts">
        ${posts
          .map(
            ([label, text], index) => `
              <article class="share-card">
                <div class="share-card-head">
                  <strong>${label}</strong>
                  <span class="micro">${text.length} chars</span>
                </div>
                <p>${text}</p>
                <div class="share-actions">
                  <button class="button ghost" type="button" data-action="copy-social" data-social-post="${index}">${icons.copy} Copy</button>
                  <button class="button ghost" type="button" data-action="share-x" data-social-post="${index}">${icons.share} X</button>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="drawer-actions social-actions">
        <button class="button primary" type="button" data-action="copy-launch-link">${icons.copy} Copy launch link</button>
        <button class="button ghost" type="button" data-action="show-toast">Campaign history</button>
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
      ${renderProofStrip(launch)}
      ${renderLaunchSummary(launch)}
      ${renderBuyerChecklist(launch)}
      <div class="subgrid">
        ${renderSaleProgress(launch)}
        ${renderAccountingPanel(launch)}
      </div>
      <div class="subgrid">
        ${renderTimeline("Vesting Schedule", launch.vesting, true)}
        ${renderTimeline("Incentive Schedule (veTOPAZ)", launch.incentives)}
      </div>
      ${renderSocialShareKit(launch)}
      ${renderRisk(launch)}
      ${renderFlow()}
    </div>
  `;
}

function estimatedTokens(launch) {
  const amount = Number(state.contribution || 0);
  if (!amount || launch.status !== "live") return "0.0";
  if (launch.id === "aurora") return (amount / 0.0045).toLocaleString(undefined, { maximumFractionDigits: 2 });
  return "Pro rata";
}

function renderContribute(launch) {
  const action = primaryActionFor(launch);
  const disabled = launch.status !== "live";
  const asset = quoteAsset(launch);

  if (disabled) {
    return `
      <section class="panel pad">
        <div class="panel-title">
          <h3>${action.title}</h3>
          <span class="status ${launchOutcome(launch).tone}">${launchOutcome(launch).label}</span>
        </div>
        <p class="muted action-note">${action.note}</p>
        <div class="review-list">
          <div class="review-row"><span>Raised</span><strong>${money(launch.raised)}</strong></div>
          <div class="review-row"><span>Soft cap</span><strong>${money(softCapFor(launch))}</strong></div>
          <div class="review-row"><span>Hard cap</span><strong>${money(hardCapFor(launch))}</strong></div>
          <div class="review-row"><span>Next milestone</span><strong>${nextMilestoneFor(launch)}</strong></div>
        </div>
        <button class="button primary full-width" type="button" data-action="${action.action}">${action.button}</button>
      </section>
    `;
  }

  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>${action.title}</h3>
        <span class="status ${launchOutcome(launch).tone}">${launchOutcome(launch).label}</span>
      </div>
      <p class="muted action-note">${action.note}</p>
      <div class="input-wrap">
        <div class="field-label"><span>You pay</span><span>Balance: ${state.connected ? `84,120 ${asset}` : "--"}</span></div>
        <div class="amount-input">
          <input data-input="contribution" type="number" min="0" step="1" value="${state.contribution}" placeholder="0.0" />
          <select class="asset-select" aria-label="Pay asset">
            <option>${asset}</option>
          </select>
        </div>
        <div class="quick-grid">
          ${[25, 50, 75, 100]
            .map((value) => `<button type="button" data-quick="${value}">${value === 100 ? "MAX" : `${value}%`}</button>`)
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
        <button class="button primary" type="button" data-action="${action.action}">${action.button}</button>
      </div>
      <div class="limits">
        <div class="metric"><span>Minimum</span><strong>${launch.min.toLocaleString()} ${asset}</strong></div>
        <div class="metric"><span>Maximum</span><strong>${launch.max.toLocaleString()} ${asset}</strong></div>
      </div>
      <div class="assist-note">
        <strong>Before you contribute</strong>
        <span>Confirm the soft cap, refund rule, vesting, and risk flags on this page.</span>
      </div>
      <div class="success-note ${state.connected && state.contribution ? "show" : ""}">
        Ready to submit a simulated contribution of ${Number(state.contribution || 0).toLocaleString()} ${asset}.
      </div>
    </section>
  `;
}

function renderProofPanel(launch) {
  const groups =
    launch.status === "refunding"
      ? [
          [
            icons.check,
            "Refunds Enabled",
            "Open",
            [
              ["Soft Cap", money(softCapFor(launch))],
              ["Raised", money(launch.raised)],
              ["Vault", "Refund enabled"],
              ["Platform Fee", "$0"],
            ],
          ],
          [
            icons.warn,
            "No Pool Created",
            "Confirmed",
            [
              ["Topaz Pair", "Not created"],
              ["LP Token", "Not minted"],
              ["Token Claims", "Closed"],
            ],
          ],
        ]
      : [
          [
            icons.lock,
            launch.status === "finalized" ? "LP Locked" : "LP Path",
            launch.status === "finalized" ? "Locked" : "At close",
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
            "Incentive Plan",
            launch.status === "finalized" ? "Funded" : "Planned",
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
        <h3>Verification</h3>
        <button class="button ghost" type="button" data-view="proof">View Verification</button>
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

function renderAddressLink(address) {
  if (!address) return "Not available";
  return `<a class="address-link" href="${explorerAddressUrl(address)}" target="_blank" rel="noopener noreferrer">${shortAddress(address)}</a>`;
}

function renderTestnetActions() {
  return `
    <div class="header-actions">
      <button class="button ghost" type="button" data-action="refresh-testnet">${state.testnetLoading ? "Refreshing" : "Refresh reads"}</button>
      ${state.connected && !isWalletOnBnbTestnet() ? '<button class="button gold" type="button" data-action="switch-testnet">Switch to testnet</button>' : ""}
      <button class="button primary" type="button" data-action="connect-wallet">${icons.wallet} ${walletButtonLabel()}</button>
    </div>
  `;
}

function testnetContractRows() {
  return [
    ["LaunchFactory", bnbTestnet.contracts.launchFactory, "Creates and tracks launch vaults"],
    ["TopazFinalizer", bnbTestnet.contracts.topazFinalizer, "Routes successful launches into mock Topaz liquidity"],
    ["FeeSplitLPLocker", bnbTestnet.contracts.lpLocker, "Receives LP tokens and records lock proof"],
    ["VestingVault", bnbTestnet.contracts.vestingVault, "Vesting rehearsal anchor"],
    ["IncentiveEscrow", bnbTestnet.contracts.incentiveEscrow, "Incentive rehearsal anchor"],
    ["Mock USDT", bnbTestnet.contracts.mockUsdt, "Allowed quote token for testnet rehearsals"],
    ["Mock Topaz Factory", bnbTestnet.contracts.mockTopazFactory, "Creates mock Topaz V2 pairs"],
    ["Mock Topaz Router", bnbTestnet.contracts.mockTopazRouter, "Adds mock Topaz V2 liquidity"],
  ].map(([label, address, use]) => [label, renderAddressLink(address), use]);
}

function testnetCheckRows() {
  const checks = state.testnetData.checks || [];
  if (!checks.length) {
    return [["Read status", state.testnetError || "Not loaded yet", "Click refresh reads", state.testnetLoading ? "Loading" : "Waiting"]];
  }

  return checks.map(([label, actual, expected, passed]) => [
    label,
    typeof actual === "string" && actual.startsWith("0x") ? renderAddressLink(actual) : actual,
    typeof expected === "string" && expected.startsWith("0x") ? renderAddressLink(expected) : expected,
    `<span class="status ${passed ? "ready" : "refunding"}">${passed ? "Match" : "Check"}</span>`,
  ]);
}

function testnetLaunchRows() {
  const rows = state.testnetData.launches || [];
  if (!rows.length) {
    return [["No sale vaults read yet", "Run refresh after rehearsals", "0 USDT", "0 USDT", "Waiting"]];
  }

  return rows.map((launch) => [
    `#${launch.index + 1} ${renderAddressLink(launch.address)}`,
    `<span class="status ${launch.statusLabel.toLowerCase().replace(/\s+/g, "-")}">${launch.statusLabel}</span>`,
    `${formatUnits(launch.totalRaised)} USDT`,
    `${formatUnits(launch.refundTotal)} USDT`,
    launch.statusLabel === "Finalized"
      ? `${formatUnits(launch.quoteToLiquidity)} USDT to LP`
      : launch.statusLabel === "Refunding"
        ? "Refund path proven"
        : "Awaiting action",
  ]);
}

function renderTestnetView() {
  const count = state.testnetData.launchCount;
  const launchCountLabel = count === null || count === undefined ? "Not read" : count.toString();
  return `
    <div class="page-stack">
      ${renderPageHeader(
        "BNB Testnet Wiring",
        "Read-only wallet and contract status for the deployed Arbor Foundry rehearsal stack.",
        renderTestnetActions(),
      )}
      ${renderKpiGrid([
        ["Wallet", state.connected ? shortAddress(state.walletAddress) : "Not connected", state.walletStatus],
        ["Network", testnetNetworkLabel(), state.connected ? `Wallet chain ${chainIdLabel(state.walletChainId)}` : "Public read fallback"],
        ["LaunchFactory count", launchCountLabel, state.testnetLastUpdated ? `Last read ${state.testnetLastUpdated}` : "Refresh to read chain"],
        ["Mode", "Read-only", "No transactions from the website yet"],
      ])}
      ${state.testnetError ? `<section class="panel pad warning-panel"><strong>Testnet read issue</strong><p class="muted">${state.testnetError}</p></section>` : ""}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Deployed Testnet Contracts</h3>
          <span class="micro">BNB testnet chain id ${bnbTestnet.chainId}</span>
        </div>
        ${renderDataTable(["Contract", "Address", "Use"], testnetContractRows())}
      </section>
      <div class="split-layout wide-left">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Live Wiring Checks</h3>
            <span class="micro">${state.testnetLoading ? "Reading chain" : "Read-only eth_call"}</span>
          </div>
          ${renderDataTable(["Check", "Actual", "Expected", "Status"], testnetCheckRows())}
        </section>
        <section class="panel pad callout">
          <h3>What This Proves</h3>
          <p class="muted">This page reads the same deployed testnet stack used by the success and refund rehearsals. It does not create launches, deposit, finalize, or claim refunds from the browser yet.</p>
          <div class="review-list">
            <div class="review-row"><span>Successful path</span><strong>Finalized on testnet</strong></div>
            <div class="review-row"><span>Refund path</span><strong>Refunding on testnet</strong></div>
            <div class="review-row"><span>Next build layer</span><strong>Wallet write buttons</strong></div>
          </div>
        </section>
      </div>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Latest Sale Vaults</h3>
          <span class="micro">Most recent contracts from LaunchFactory</span>
        </div>
        ${renderDataTable(["Launch", "Status", "Raised", "Refund total", "Outcome"], testnetLaunchRows())}
      </section>
    </div>
  `;
}

function renderLaunchpadView() {
  return `
    <div class="layout">
      <div class="workspace">
        ${renderPageHeader(
          `${statusLabel(state.tab)} launches`,
          "Review approval, sale terms, soft-cap safety, LP lock proof, vesting, and incentives before participating.",
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
  const failedLaunch = launchById("mythos");
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
        ["Deposited", "2,730 USDT", "Self-serve launches"],
        ["Claimable", "18,420 SLC", "Finalized launch"],
        ["Refundable", "880 USDT", "Soft-cap failure"],
        ["Pending", "266,666.67 AUR", "Live allocation preview"],
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
          <p class="muted">${launchOutcome(failedLaunch).detail}</p>
          <div class="review-list">
            <div class="review-row"><span>Soft cap</span><strong>${money(softCapFor(failedLaunch))}</strong></div>
            <div class="review-row"><span>Actual raise</span><strong>${money(failedLaunch.raised)}</strong></div>
            <div class="review-row"><span>Refund amount</span><strong>880 USDT</strong></div>
            <div class="review-row"><span>Refund window</span><strong>Open until May 10</strong></div>
            <div class="review-row"><span>Platform success fee</span><strong>$0</strong></div>
            <div class="review-row"><span>Topaz pair</span><strong>Not created</strong></div>
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
  const plan = finalizationPlan(launch);
  const verificationTitle =
    launch.status === "refunding"
      ? `${launch.name} Refund Verification`
      : launch.status === "finalized"
        ? `${launch.name} Liquidity & Claim Proof`
        : launch.status === "approved" || launch.status === "upcoming"
          ? `${launch.name} Approval & Launch Plan`
        : `${launch.name} Launch Verification`;
  const tradeAction =
    launch.status === "finalized"
      ? '<button class="button primary" type="button" data-action="show-toast">' + icons.swap + " Trade on Topaz</button>"
      : '<button class="button ghost" type="button" data-action="show-toast">Copy verification link</button>';

  return `
    <div class="page-stack">
      ${renderPageHeader(
        "Verify This Launch",
        "Check the sale result, liquidity status, LP lock, vesting, claims/refunds, and Topaz pair before you trust or act on this launch.",
        tradeAction,
      )}
      <div class="proof-page-grid">
        <section class="panel hero-panel" style="--logo-color:${launch.color}">
          <div class="hero-top">
            ${renderProjectMark(launch, "hero")}
            <div>
              <div class="hero-title">
                <h2>${verificationTitle}</h2>
                <span class="status ${launch.status}">${statusLabel(launch.status)}</span>
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
            <div class="metric"><span>Status</span><strong>${statusLabel(launch.status)}</strong></div>
            <div class="metric"><span>Raised</span><strong>${money(launch.raised)}</strong></div>
            <div class="metric"><span>Platform Fee</span><strong>${money(plan.successFee)}</strong></div>
            <div class="metric"><span>Topaz Liquidity</span><strong>${money(plan.quoteToLp)}</strong></div>
            <div class="metric"><span>Buyer Action</span><strong>${primaryActionFor(launch).button}</strong></div>
          </div>
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Verification Checklist</h3>
            <span class="verified">${isPublicLaunch(launch) ? "Public" : "Private"}</span>
          </div>
          ${renderDataTable(["Item", "Value", "Detail", "Status"], verificationRowsFor(launch))}
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Accounting</h3>
            <span class="micro">Soft cap safe</span>
          </div>
          ${renderDataTable(["Item", "Amount", "Rule"], accountingRowsFor(launch))}
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Buyer Actions</h3>
            <span class="micro">${statusBuyerMeaning(launch.status)}</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Refunds</span><strong>${launch.status === "refunding" ? "Open" : "Only if soft cap fails"}</strong></div>
            <div class="review-row"><span>Claims</span><strong>${launch.status === "finalized" ? "Open" : "After successful finalization"}</strong></div>
            <div class="review-row"><span>LP lock</span><strong>${launch.status === "finalized" ? launch.proof.lockTx : "Pending successful close"}</strong></div>
            <div class="review-row"><span>Trade route</span><strong>${launch.status === "finalized" ? "Topaz link ready" : "Published after pair creation"}</strong></div>
          </div>
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
    ["Router", "quoteAddLiquidity(..., factory, ...)", "Preview amounts and LP output"],
    ["Router", "addLiquidity(..., to=locker, ...)", "Mint ERC20 LP directly to locker"],
    ["Pool", "claimFees()", "Claim token0/token1 fees into locker"],
    ["Pool", "claimable0/claimable1(account)", "Preview locker fee accrual"],
  ];
  const flowRows = [
    ["1", "Bonding completes", "Project token and quote asset are in the sale vault."],
    ["2", "Choose quote", "Use USDT for self-serve MVP launches."],
    ["3", "Use stable=false", "New launch tokens use volatile constant-product pools."],
    ["4", "Quote liquidity", "Call quoteAddLiquidity with the factory address and apply nonzero slippage mins."],
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
            <div class="review-row"><span>Quote asset</span><strong>USDT self-serve MVP</strong></div>
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

function renderFinalizeView() {
  const preview = finalizationPlan(launchById("aurora"), 60);
  const completed = finalizationPlan(launchById("solace"), 60);
  const failed = launchById("mythos");
  const steps = [
    ["1", "Sale closes", `${money(preview.finalRaise)} is above the ${money(preview.softCap)} soft cap, so the launch can finalize.`],
    ["2", "Platform fee accounted", `${money(preview.successFee)} platform fee is deducted from the actual raise.`],
    ["3", "LP amount calculated", `${money(preview.quoteToLp)} ${quoteAsset(preview.launch)} is reserved for Topaz liquidity.`],
    ["4", "Pair created", `${preview.pair} is created or reused through the Topaz V2 factory.`],
    ["5", "Liquidity added", `${preview.tokenPairing} pairs with the quote asset through the Topaz router.`],
    ["6", "LP locked", "ERC20 LP tokens mint directly to the fee-split locker."],
    ["7", "Claims open", "Buyer claims follow the published vesting and sale terms."],
    ["8", "Proof published", "Pool, lock, fee, claim, and trade links stay visible after launch."],
  ];
  const proofRows = [
    ["Platform fee", money(preview.successFee), "2% success fee after soft-cap success", "Ready"],
    ["Topaz pair", preview.pair, "Shown with pair address after finalization", "Queued"],
    ["LP lock", preview.locker, platformEconomics.lpFeeSplit, "Queued"],
    ["Trade link", "Topaz DEX", "Enabled once the pair is indexed or linked directly", "Queued"],
  ];

  return `
    <div class="page-stack">
      ${renderPageHeader(
        "Finalize Launch",
        "The operational path after a project meets soft cap and the sale closes.",
        '<button class="button primary" type="button" data-action="show-toast">' + icons.check + " Simulate finalization</button>",
      )}
      ${renderKpiGrid([
        ["Actual final raise", money(preview.finalRaise), `${preview.launch.name} example`],
        ["Soft cap", money(preview.softCap), "Minimum to launch"],
        ["Platform fee", money(preview.successFee), `${platformEconomics.successFeeLabel} of actual raise`],
        ["Quote to LP", money(preview.quoteToLp), `${preview.liquidityPercent}% of post-fee raise`],
      ])}
      <div class="split-layout wide-left">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Finalization Preview</h3>
            <span class="micro">AURORA if sale closed now</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Soft cap</span><strong>${money(preview.softCap)}</strong></div>
            <div class="review-row"><span>Hard cap</span><strong>${money(preview.hardCap)}</strong></div>
            <div class="review-row"><span>Actual final raise</span><strong>${money(preview.finalRaise)}</strong></div>
            <div class="review-row"><span>Platform success fee</span><strong>${money(preview.successFee)}</strong></div>
            <div class="review-row"><span>Remaining raise</span><strong>${money(preview.netRaise)}</strong></div>
            <div class="review-row"><span>Liquidity commitment</span><strong>${preview.liquidityPercent}% of post-fee raise</strong></div>
            <div class="review-row"><span>Quote asset sent to LP</span><strong>${money(preview.quoteToLp)} ${quoteAsset(preview.launch)}</strong></div>
            <div class="review-row"><span>Project tokens paired</span><strong>${preview.tokenPairing}</strong></div>
            <div class="review-row"><span>Pair</span><strong>${preview.pair}</strong></div>
            <div class="review-row"><span>LP recipient</span><strong>${preview.locker}</strong></div>
          </div>
        </section>
        <section class="panel pad callout">
          <h3>Topaz Visibility</h3>
          <p class="muted">After finalization, Arbor Foundry should publish both the Topaz pair address and a direct trade link. If Topaz indexing lags, buyers still get a direct route from the verification page.</p>
          <div class="review-list">
            <div class="review-row"><span>Pool type</span><strong>Topaz V2 volatile</strong></div>
            <div class="review-row"><span>Stable flag</span><strong>false</strong></div>
            <div class="review-row"><span>Trade CTA</span><strong>Enabled after pair creation</strong></div>
            <div class="review-row"><span>Verification page</span><strong>Permanent</strong></div>
          </div>
          <div class="drawer-actions finalize-actions">
            <button class="button primary" type="button" data-action="show-toast">${icons.swap} Trade on Topaz</button>
            <button class="button ghost" type="button" data-view="proof">View Verification</button>
          </div>
        </section>
      </div>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Finalization Checklist</h3>
          <span class="micro">Automated path</span>
        </div>
        ${renderDataTable(["Step", "Action", "Result"], steps)}
      </section>
      <div class="split-layout">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Verification Outputs</h3>
            <span class="micro">Published after success</span>
          </div>
          ${renderDataTable(["Verification", "Address / Ref", "Detail", "State"], proofRows)}
        </section>
        <section class="panel pad">
          <div class="panel-title">
            <h3>Outcome Examples</h3>
            <span class="micro">Success and refund paths</span>
          </div>
          <div class="review-list">
            <div class="review-row"><span>Final raise</span><strong>${money(completed.launch.raised)}</strong></div>
            <div class="review-row"><span>SOLACE soft cap</span><strong>${money(completed.softCap)}</strong></div>
            <div class="review-row"><span>Platform fee</span><strong>${money(platformFeeFor(completed.launch.raised))}</strong></div>
            <div class="review-row"><span>LP fee split</span><strong>${platformEconomics.lpFeeSplit}</strong></div>
            <div class="review-row"><span>Buyer claims</span><strong>Open</strong></div>
            <div class="review-row"><span>Topaz pair</span><strong>SLC/USDT</strong></div>
            <div class="review-row"><span>MYTHOS result</span><strong>${money(failed.raised)} raised below ${money(softCapFor(failed))}; refunds only</strong></div>
            <div class="review-row"><span>Failed-launch platform fee</span><strong>$0</strong></div>
          </div>
        </section>
      </div>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Approval Queue</h3>
          <span class="micro">Private reviewer lane</span>
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
        ["Queued incentives", "44,000 veTOPAZ", "Across 4 launch pools"],
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
      ${renderPageHeader("Rewards", "Monitor launch incentives, voter reward deposits, and platform fee accounting.")}
      ${renderKpiGrid([
        ["Platform fees", money(finalizedPlatformFees()), "Collected after successful finalization"],
        ["Projected fees", money(projectedPlatformFees()), "If listed launches finalize"],
        ["Success fee", platformEconomics.successFeeLabel, "Failed raises owe $0"],
        ["LP fee split", platformEconomics.lpFeeSplit, "Claimable LP fees after launch"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Launch Fee Disclosure</h3>
          <span class="micro">Arbor Foundry accounting</span>
        </div>
        <div class="review-list">
          <div class="review-row"><span>Platform success fee</span><strong>${platformEconomics.successFeeLabel} of successful raise</strong></div>
          <div class="review-row"><span>Failed launch fee</span><strong>$0 if soft cap is missed</strong></div>
          <div class="review-row"><span>Listing fee</span><strong>${platformEconomics.listingFee}</strong></div>
          <div class="review-row"><span>LP fee split</span><strong>${platformEconomics.lpFeeSplit}</strong></div>
        </div>
      </section>
      <section class="panel pad">
        <div class="panel-title">
          <h3>Launch Fee Preview</h3>
          <span class="micro">Based on launch outcome</span>
        </div>
        ${renderDataTable(["Launch", "Fee base", "Fee", "Platform amount", "State"], platformFeeRows())}
      </section>
      ${renderKpiGrid([
        ["Buyer rewards", "$128", "Prototype wallet"],
        ["Active launch rewards", "26,500 veTOPAZ", "Funded now"],
        ["Pending rewards", "17,500 veTOPAZ", "Queued after finalization"],
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
            ["Aurora launch budget", "AUR/USDT", "18,000 veTOPAZ", "Active"],
            ["Defiware launch budget", "DWR/USDT", "8,500 veTOPAZ", "Active"],
            ["Nexora escrow", "NXO/USDT", "7,500 veTOPAZ", "Queued"],
            ["Nimbus escrow", "NMB/USDT", "10,000 veTOPAZ", "Queued"],
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
        ["Locked liquidity", "$185K", "Across launch pools"],
        ["Fees collected", "$2,060", "Preserved for beneficiaries"],
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
        <p class="muted">The premium trust option is permanent LP custody with claimable fees. Project creators receive 80% of claimable LP fees, while 20% routes to Arbor Foundry as ongoing platform revenue.</p>
      </section>
    </div>
  `;
}

function renderStatusFlowPanel() {
  return `
    <section class="panel pad">
      <div class="panel-title">
        <h3>Launch Status Gate</h3>
        <span class="micro">No launch goes live before approval</span>
      </div>
      <div class="flow status-flow">
        ${statusFlow
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
      ${renderStatusFlowPanel()}
      <section class="panel pad callout">
        <h3>Why Review Exists</h3>
        <p class="muted">Arbor Foundry review is an anti-spam and quality gate. It checks disclosures, token behavior, links, liquidity commitment, vesting, and refund safety before a project can move from pending review to approved. This does not make a launch risk-free, but it keeps low-quality or unsafe raises from going live by default.</p>
        <div class="review-list">
          <div class="review-row"><span>Application/deploy fee</span><strong>${platformEconomics.applicationFee}</strong></div>
          <div class="review-row"><span>Go-live rule</span><strong>Draft and pending review cannot accept deposits</strong></div>
        </div>
      </section>
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
            <div class="review-row"><span>Creator-set raise goals</span><strong>Required</strong></div>
            <div class="review-row"><span>Creator-set LP commitment</span><strong>Required</strong></div>
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
            <div class="risk-item">${icons.warn}<span>Published raise and liquidity goals are chosen by the project creator, then enforced during review and finalization.</span></div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderAdminView() {
  return `
    <div class="page-stack">
      ${renderPageHeader("Admin Dashboard", "Operational controls for launch readiness, finalization, refunds, and verification publication.")}
      ${renderKpiGrid([
        ["Approval queue", "3", "Draft and pending review items"],
        ["Finalization tasks", "2", "Live launches above soft cap"],
        ["Refund tasks", "1", "Mythos enabled"],
        ["Actual fees", money(finalizedPlatformFees()), "Collected only after success"],
      ])}
      <section class="panel pad">
        <div class="panel-title">
          <h3>Private Platform Accounting</h3>
          <span class="micro">Admin-only summary</span>
        </div>
        ${renderDataTable(["Metric", "Value", "Meaning"], adminAccountingRows())}
      </section>
      <div class="split-layout wide-left">
        <section class="panel pad">
          <div class="panel-title">
            <h3>Launch Operations</h3>
            <span class="micro">Admin actions</span>
          </div>
          ${renderDataTable(
            ["Action", "Launch", "Dependency", "State"],
            launchOperationsRows(),
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
            <div class="review-row"><span>Platform treasury</span><strong>${platformEconomics.treasuryLabel}</strong></div>
            <div class="review-row"><span>Platform success fee</span><strong>${platformEconomics.successFeeLabel}</strong></div>
            <div class="review-row"><span>Vesting vault funded</span><strong>Pass</strong></div>
            <div class="review-row"><span>Gauge incentive route</span><strong>Needs confirmation</strong></div>
            <div class="review-row"><span>Verification page published</span><strong>Pass</strong></div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderCurrentView() {
  switch (state.view) {
    case "testnet":
      return renderTestnetView();
    case "portfolio":
      return renderPortfolioView();
    case "proof":
      return renderProofCenterView();
    case "integration":
      return renderIntegrationView();
    case "finalize":
      return renderFinalizeView();
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

function renderWizardField([label, value, type = "text", options = []]) {
  if (type === "textarea") {
    return `
      <div class="form-field full">
        <label>${label}</label>
        <textarea>${value}</textarea>
      </div>
    `;
  }

  if (type === "select") {
    return `
      <div class="form-field">
        <label>${label}</label>
        <select aria-label="${label}">
          ${options
            .map((option) => {
              const optionValue = typeof option === "string" ? option : option.value;
              const optionLabel = typeof option === "string" ? option : option.label;
              const disabled = typeof option === "string" || !option.disabled ? "" : " disabled";
              return `<option value="${optionValue}" ${optionValue === value ? "selected" : ""}${disabled}>${optionLabel}</option>`;
            })
            .join("")}
        </select>
      </div>
    `;
  }

  if (type === "file") {
    return `
      <div class="form-field full">
        <label>${label}</label>
        <div class="logo-upload-row">
          <div class="token-logo-preview" aria-hidden="true">${value}</div>
          <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" />
        </div>
      </div>
    `;
  }

  const readonly = type === "readonly" ? " readonly" : "";
  const inputType = type === "number" ? "number" : type === "url" ? "url" : "text";
  return `
    <div class="form-field">
      <label>${label}</label>
      <input type="${inputType}" value="${value}"${readonly} />
    </div>
  `;
}

function renderWizardHelp(step) {
  const notes = wizardGuidance[step] || [];
  if (!notes.length) return "";
  return `
    <div class="wizard-help">
      ${notes.map((note) => `<div class="assist-note"><span>${note}</span></div>`).join("")}
    </div>
  `;
}

function renderWizardContent() {
  const step = wizardSteps[state.wizardStep];
  if (step === "Review") {
    return `
      ${renderWizardHelp(step)}
      <div class="review-list">
        ${[
          ["Token", "Fixed supply, no transfer tax"],
          ["Token logo", "Project image uploaded"],
          ["Sale type", "Fair launch self-serve; other modes available with guided setup"],
          ["Sale goals", "Creator sets soft cap, hard cap, and wallet limits"],
          ["Liquidity goal", "Creator commits raise percentage and minimum locked LP"],
          ["LP Lock", "ERC20 LP token minted directly to locker"],
          ["Vesting", "10% TGE, remainder over 9 months"],
          ["Incentives", "No-gauge fee split first, gauge incentives later"],
          ["Links", "Website, docs, and social links checked during review"],
          ["Social", "Optional creator share kit"],
          ["Approval gate", "Draft -> Pending Review -> Approved before launch can go live"],
          ["Application fee", platformEconomics.applicationFee],
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
      ["Token logo", "AUR", "file"],
      ["Total supply", "100000000", "number"],
      ["Contract mode", "Standard fixed supply", "select", ["Standard fixed supply", "Existing verified token", "Review required"]],
      ["Project summary", "A short launch description buyers can inspect.", "textarea"],
    ],
    Sale: [
      [
        "Sale type",
        "Fair launch",
        "select",
        [
          { value: "Fair launch", label: "Fair launch (self-serve MVP)" },
          { value: "Fixed-price sale", label: "Fixed-price sale (guided setup)" },
          { value: "Liquidity bootstrap", label: "Liquidity bootstrap (guided setup)" },
        ],
      ],
      ["Accepted asset", "USDT", "readonly"],
      ["Soft cap chosen by creator", "25000", "number"],
      ["Hard cap chosen by creator", "100000", "number"],
      ["Wallet max chosen by creator", "2500", "number"],
      ["Standard setup", "Fair launch self-serve", "readonly"],
      ["Guided setup", "Fixed-price and liquidity bootstrap", "readonly"],
      ["Suggested small-launch range", "$25,000 to $150,000", "readonly"],
      ["Platform success fee", platformEconomics.successFeeLabel, "readonly"],
      ["If soft cap misses", "Refunds open automatically", "select", ["Refunds open automatically", "Admin-reviewed refunds"]],
    ],
    Liquidity: [
      ["Raise routed to LP %", "60", "number"],
      ["Minimum locked liquidity goal", "25000", "number"],
      ["Project tokens reserved for LP", "Match the creator's launch price", "readonly"],
      ["Quote asset", "USDT", "readonly"],
      ["Topaz pool type", "V2 volatile, stable=false", "readonly"],
      ["Slippage minimum %", "1", "number"],
      ["Lock duration", "Permanent fee-split lock", "select", ["12 months", "24 months", "Permanent fee-split lock"]],
      ["LP recipient", "Fee-split locker", "readonly"],
      ["Fee split", platformEconomics.lpFeeSplit, "readonly"],
    ],
    Vesting: [
      ["Team allocation %", "15", "number"],
      ["TGE unlock %", "10", "number"],
      ["Vesting length", "9 months", "select", ["6 months", "9 months", "12 months", "18 months"]],
      ["Treasury lock", "12 months", "select", ["6 months", "12 months", "24 months"]],
    ],
    Incentives: [
      ["Incentive budget", "5,000 to 20,000 veTOPAZ", "readonly"],
      ["Epoch count", "4", "number"],
      ["First fee route", "pool.claimFees() to locker", "readonly"],
      ["Gauge posture", "Optional later upgrade", "select", ["Optional later upgrade", "Request gauge review at launch"]],
    ],
    Links: [
      ["Project website", "https://project.example", "url"],
      ["Documentation", "https://docs.project.example", "url"],
      ["Audit or review link", "Not available yet", "select", ["Not available yet", "Audit posted", "Review posted"]],
      ["X profile", "https://x.com/project", "url"],
      ["Telegram", "https://t.me/project", "url"],
      ["Discord", "https://discord.gg/project", "url"],
    ],
    Social: [
      ["Enable creator share kit", "Enabled", "select", ["Enabled", "Disabled"]],
      ["Campaign hashtag", "#AURonTopaz"],
      ["X handle", "@AuroraLiquidity"],
      ["Telegram link", "https://t.me/project"],
      ["Discord link", "https://discord.gg/project"],
      ["Share cadence", "Soft cap, 50%, 75%, finalization", "select", ["Soft cap, 50%, 75%, finalization", "Soft cap and final 24 hours", "Proof, claims, liquidity updates", "Refund notices"]],
      ["Creator note", "A short project voice line for generated posts.", "textarea"],
    ],
  };

  return `
    ${renderWizardHelp(step)}
    <div class="form-grid">
      ${fields[step]
        .map((field) => renderWizardField(field))
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
            <p class="muted">Set your own raise and liquidity goals, then submit the lock, vesting, and incentive plan for review.</p>
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
            <span class="micro">Step ${state.wizardStep + 1} of ${wizardSteps.length}</span>
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

function copyText(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(successMessage))
      .catch(() => showToast("Copy text is visible in the share card."));
    return;
  }

  showToast("Copy text is visible in the share card.");
}

async function handleClick(event) {
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

  const socialPost = target.dataset.socialPost;
  const socialIndex = socialPost === undefined ? null : Number(socialPost);

  switch (target.dataset.action) {
    case "connect-wallet":
      await connectWallet();
      break;
    case "refresh-testnet":
      await refreshTestnetData();
      break;
    case "switch-testnet":
      await switchToBnbTestnet();
      break;
    case "contribute":
      if (!state.connected) {
        await connectWallet();
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
    case "watch-launch":
      showToast("Launch watch captured. Production mode would save a reminder for this project.");
      break;
    case "copy-social": {
      const launch = currentLaunch();
      const post = socialPostsFor(launch)[socialIndex];
      if (post) copyText(post[1], "Social post copied.");
      break;
    }
    case "share-x": {
      const launch = currentLaunch();
      const post = socialPostsFor(launch)[socialIndex];
      if (post) {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post[1])}`, "_blank", "noopener,noreferrer");
        showToast("X share draft opened.");
      }
      break;
    }
    case "copy-launch-link":
      copyText(launchShareUrl(currentLaunch()), "Launch link copied.");
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
refreshTestnetData(true);

if (window.ethereum) {
  syncWalletState().then((connected) => {
    if (connected) renderApp();
  }).catch(() => {});

  window.ethereum.on?.("accountsChanged", async () => {
    await syncWalletState().catch(() => {});
    renderApp();
  });

  window.ethereum.on?.("chainChanged", (chainId) => {
    state.walletChainId = chainId;
    state.walletStatus = isWalletOnBnbTestnet() ? "Connected to BNB testnet." : "Wallet connected on the wrong chain.";
    renderApp();
    refreshTestnetData(true);
  });

  window.addEventListener("focus", () => {
    syncWalletState().then((connected) => {
      if (connected) renderApp();
    }).catch(() => {});
  });
}
