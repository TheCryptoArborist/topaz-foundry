const rpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";

const contracts = {
  launchFactory: "0x64CF375765d745440849150aF45F8Ac66fC0e9e4",
  topazFinalizer: "0x7cE6146d9024a8BfBe5854D86e2689Fd8d986393",
  lpLocker: "0xb5B157A2BFb1ef400Bb717aFD308fcD313F61eEE",
  mockUsdt: "0xA7C16a4CadA1c3bCC884904144B372aB09674A1d",
};

const platformTreasury = "0x90f9c1c0c675A0ce9D539c540DB7F4A1f7e583AE";
const proofLogLookbackBlocks = 50000;
const proofLogChunkBlocks = 4000;
const recentLaunchReadLimit = 12;

const selectors = {
  launchCount: "0x27cca59f",
  allLaunches: "0x41d6e9d3",
  status: "0x200d2ed2",
  previewAccounting: "0x6ebd5c67",
  config: "0x79502c55",
};

const launchStatusLabels = ["Draft", "Pending Review", "Approved", "Upcoming", "Live", "Finalized", "Refunding", "Cancelled"];
const launchCreatedTopic = "0x32ff3eb3c73f7308a7ef91e3ba79128db88ff8708afd5a04e393a305cc58fc98";
const eventTopics = {
  launchFinalized: "0xcbdf55e1c8573499927b3ee6ab98e7672fb8d13525c154d768914eddeaeb6651",
  quoteReleasedForFinalization: "0x8676272ebef8c41b79c31a0782c2debe9477e570a28406db96fe92cca74f381d",
  deposited: "0x2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4",
  tokensClaimed: "0x896e034966eaaf1adc54acc0f257056febbd300c9e47182cf761982cf1f5e430",
  refundClaimed: "0x358fe4192934d3bf28ae181feda1f4bd08ca67f5e2fad55582cce5eb67304ae9",
  lockRegistered: "0x539d162ca72154e998e9fd41983eea27e1e366d274b0a78a2a289d5bd70fd37b",
  feesClaimed: "0xd377f58cbc83f844989775f0d4bfa247dbee70bf3d851b8c5f0e0fe51d3b6ef9",
};

const seededProofRecords = {
  "0x50abab6a9fccdd53413bb471dfdaa0b71582a70e": {
    available: true,
    indexed: true,
    source: "Arbor Foundry proof index seed",
    saleVault: "0x50abab6a9fccdd53413bb471dfdaa0b71582a70e",
    status: 5,
    statusLabel: "Finalized",
    pair: "0xb3da729600ef173050a98cf52fecf383a59bba94",
    lpReceiver: contracts.lpLocker,
    platformTreasury,
    contributionTx: "0x75e52ebfc907c512a4aec4c51019d072f7b9e768cbccced3462e986cdc96225e",
    finalizationTx: "0x0c7edd5a49912c414c708969233253dffd6b7028c9924ef044153ec465275472",
    claimTx: "0xda3d69347d820fbf160e87db0a85d3bd066fdbfa85baf50e6f6e78ee7880b40b",
    lpFeeClaimTx: "0x4ca8bf3795cbdcc452485f7ae6f0414fd9e0f2d0c02d3aa46892405460b96c6d",
    lpFeeToken0: "0x0dee41c818af69671a527f2c621ecdd386dea1cd",
    lpFeeToken1: contracts.mockUsdt,
    lpFeeAmount0: 0,
    lpFeeAmount1: 0,
    claimWallet: "0xE8b63245DdDAB73C7A276818942341D8Cfb7D7A7",
    quoteSymbol: "USDT",
    totalRaised: 8000,
    platformFee: 160,
    quoteToLiquidity: 4704,
    creatorProceeds: 3136,
    tokenPaired: 1000000,
    lpMinted: 4704,
    claimAmount: 1000000,
  },
};

function normalizeAddress(address) {
  return (address || "").toLowerCase();
}

function addressMatches(actual, expected) {
  return normalizeAddress(actual) === normalizeAddress(expected);
}

function isEvmAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address || "");
}

function strip0x(value) {
  return String(value || "").replace(/^0x/, "");
}

function wordAt(result, word = 0) {
  const clean = strip0x(result).padStart((word + 1) * 64, "0");
  return clean.slice(word * 64, word * 64 + 64);
}

function decodeUint256(result, word = 0) {
  return BigInt(`0x${wordAt(result, word) || "0"}`);
}

function decodeAddress(result, word = 0) {
  const value = wordAt(result, word).slice(-40);
  return value ? `0x${value}` : "";
}

function encodeUint256(value) {
  return BigInt(value).toString(16).padStart(64, "0");
}

function topicAddress(address) {
  return `0x${normalizeAddress(address).replace(/^0x/, "").padStart(64, "0")}`;
}

function addressFromTopic(topic) {
  const value = strip0x(topic).slice(-40);
  return value ? `0x${value}` : "";
}

function blockTag(value) {
  return `0x${BigInt(value).toString(16)}`;
}

function logNumber(value) {
  return Number(BigInt(value || "0x0"));
}

function latestLog(logs) {
  return [...(logs || [])].sort((a, b) => {
    const blockDiff = logNumber(a.blockNumber) - logNumber(b.blockNumber);
    if (blockDiff) return blockDiff;
    return logNumber(a.logIndex) - logNumber(b.logIndex);
  }).at(-1) || null;
}

function hasRecordValue(value) {
  return value !== "" && value !== null && value !== undefined;
}

function mergeProofRecord(...sources) {
  const merged = {};
  sources.filter(Boolean).forEach((source) => {
    Object.entries(source).forEach(([key, value]) => {
      if (hasRecordValue(value)) merged[key] = value;
    });
  });
  return merged;
}

function units(value, decimals = 18) {
  const divisor = 10n ** BigInt(decimals);
  const whole = value / divisor;
  const fraction = value % divisor;
  const fractionText = fraction.toString().padStart(decimals, "0").slice(0, 6).replace(/0+$/, "");
  return Number(`${whole.toString()}${fractionText ? `.${fractionText}` : ""}`);
}

async function ethRpc(method, params) {
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: Date.now(), method, params }),
  });
  const payload = await response.json();
  if (payload.error) throw new Error(payload.error.message || "BNB testnet RPC call failed.");
  return payload.result;
}

async function ethCall(to, data) {
  return ethRpc("eth_call", [{ to, data }, "latest"]);
}

async function ethBlockNumber() {
  return BigInt(await ethRpc("eth_blockNumber", []));
}

async function ethGetLogs(filter) {
  const logs = await ethRpc("eth_getLogs", [filter]);
  return Array.isArray(logs) ? logs : [];
}

async function readEventLogs(filter, latestBlock, fromBlock) {
  const latest = Number(latestBlock || await ethBlockNumber());
  const preferredFrom = fromBlock === undefined || fromBlock === null ? latest - proofLogLookbackBlocks : Number(fromBlock);
  const fromStart = Math.max(0, Math.min(preferredFrom, latest));
  const logs = [];

  for (let from = fromStart; from <= latest; from += proofLogChunkBlocks) {
    const to = Math.min(latest, from + proofLogChunkBlocks - 1);
    const chunk = await ethGetLogs({
      ...filter,
      fromBlock: blockTag(from),
      toBlock: blockTag(to),
    });
    logs.push(...chunk);
  }

  return logs;
}

async function safeReadEventLogs(filter, latestBlock, fromBlock) {
  try {
    return { logs: await readEventLogs(filter, latestBlock, fromBlock), error: "" };
  } catch (error) {
    return { logs: [], error: error.message || "Could not read event logs." };
  }
}

function decodeLaunchConfig(result) {
  return {
    creator: decodeAddress(result, 0),
    saleToken: decodeAddress(result, 1),
    quoteToken: decodeAddress(result, 2),
    saleType: decodeUint256(result, 3),
    setupMode: decodeUint256(result, 4),
    saleTokenAmount: decodeUint256(result, 5),
    softCap: decodeUint256(result, 6),
    hardCap: decodeUint256(result, 7),
    walletMin: decodeUint256(result, 8),
    walletMax: decodeUint256(result, 9),
    startsAt: decodeUint256(result, 10),
    endsAt: decodeUint256(result, 11),
    liquidityBps: decodeUint256(result, 12),
    platformFeeBps: decodeUint256(result, 13),
  };
}

function decodeAccounting(result) {
  return {
    totalRaised: decodeUint256(result, 0),
    platformFee: decodeUint256(result, 1),
    netRaise: decodeUint256(result, 2),
    quoteToLiquidity: decodeUint256(result, 3),
    creatorProceeds: decodeUint256(result, 4),
    refundTotal: decodeUint256(result, 5),
  };
}

async function readLaunchCreationBlocks(latestBlock) {
  const result = await safeReadEventLogs(
    {
      address: contracts.launchFactory,
      topics: [launchCreatedTopic],
    },
    latestBlock,
  );
  const blocks = {};
  result.logs.forEach((log) => {
    const launchAddress = addressFromTopic(log.topics?.[1]);
    const key = normalizeAddress(launchAddress);
    if (isEvmAddress(launchAddress)) blocks[key] = logNumber(log.blockNumber);
  });
  return blocks;
}

function applyFinalizedLogs(record, saleLogs, finalizerLogs, latestBlock, fromBlock) {
  const contributionLog = latestLog(saleLogs.filter((log) => addressMatches(log.topics?.[0], eventTopics.deposited)));
  const quoteLog = latestLog(saleLogs.filter((log) => addressMatches(log.topics?.[0], eventTopics.quoteReleasedForFinalization)));
  const claimLog = latestLog(saleLogs.filter((log) => addressMatches(log.topics?.[0], eventTopics.tokensClaimed)));
  const refundLog = latestLog(saleLogs.filter((log) => addressMatches(log.topics?.[0], eventTopics.refundClaimed)));
  const finalizationLog = latestLog(finalizerLogs);

  if (contributionLog) {
    record.contributionTx = contributionLog.transactionHash;
    record.contributionAmount = units(decodeUint256(contributionLog.data));
  }
  if (quoteLog) {
    record.finalizationTx = quoteLog.transactionHash;
    record.totalRaised = units(decodeUint256(quoteLog.data, 0));
    record.platformFee = units(decodeUint256(quoteLog.data, 1));
    record.quoteToLiquidity = units(decodeUint256(quoteLog.data, 2));
    record.creatorProceeds = units(decodeUint256(quoteLog.data, 3));
  }
  if (finalizationLog) {
    record.finalizationTx = finalizationLog.transactionHash || record.finalizationTx;
    record.pair = addressFromTopic(finalizationLog.topics?.[2]);
    record.lpReceiver = addressFromTopic(finalizationLog.topics?.[3]);
    record.quoteToLiquidity = units(decodeUint256(finalizationLog.data, 0));
    record.tokenPaired = units(decodeUint256(finalizationLog.data, 1));
    record.lpMinted = units(decodeUint256(finalizationLog.data, 2));
  }
  if (claimLog) {
    record.claimTx = claimLog.transactionHash;
    record.claimWallet = addressFromTopic(claimLog.topics?.[1]);
    record.claimAmount = units(decodeUint256(claimLog.data));
  }
  if (refundLog) {
    record.refundTx = refundLog.transactionHash;
    record.refundWallet = addressFromTopic(refundLog.topics?.[1]);
    record.refundAmount = units(decodeUint256(refundLog.data));
  }

  return record.pair
    ? Promise.all([
        readLockProof(record, latestBlock, fromBlock),
        readFeeProof(record, latestBlock, fromBlock),
      ]).then(() => record)
    : Promise.resolve(record);
}

async function readLockProof(record, latestBlock, fromBlock) {
  const result = await safeReadEventLogs(
    {
      address: contracts.lpLocker,
      topics: [eventTopics.lockRegistered, topicAddress(record.pair)],
    },
    latestBlock,
    fromBlock,
  );
  const lockLog = latestLog(result.logs);
  if (!lockLog) return;
  record.lockTx = lockLog.transactionHash;
  record.lpReceiver = contracts.lpLocker;
  record.creatorBeneficiary = addressFromTopic(lockLog.topics?.[2]);
  record.platformBeneficiary = addressFromTopic(lockLog.topics?.[3]);
  record.lockRegistered = true;
}

async function readFeeProof(record, latestBlock, fromBlock) {
  const result = await safeReadEventLogs(
    {
      address: contracts.lpLocker,
      topics: [eventTopics.feesClaimed, topicAddress(record.pair)],
    },
    latestBlock,
    fromBlock,
  );
  const feeLog = latestLog(result.logs);
  if (!feeLog) return;
  record.lpFeeClaimTx = feeLog.transactionHash;
  record.lpFeeToken0 = addressFromTopic(feeLog.topics?.[2]);
  record.lpFeeToken1 = addressFromTopic(feeLog.topics?.[3]);
  record.lpFeeAmount0 = units(decodeUint256(feeLog.data, 0));
  record.lpFeeAmount1 = units(decodeUint256(feeLog.data, 1));
}

async function readSaleVaultRecord(address, index, latestBlock, createdBlock) {
  const [statusRaw, accountingRaw, configRaw] = await Promise.all([
    ethCall(address, selectors.status),
    ethCall(address, selectors.previewAccounting),
    ethCall(address, selectors.config),
  ]);
  const status = Number(decodeUint256(statusRaw));
  const config = decodeLaunchConfig(configRaw);
  const accounting = decodeAccounting(accountingRaw);
  const fromBlock = createdBlock ?? Number(latestBlock) - proofLogLookbackBlocks;
  const record = {
    available: true,
    indexed: true,
    source: "Arbor Foundry proof indexer",
    index,
    saleVault: address,
    status,
    statusLabel: launchStatusLabels[status] || `Status ${status}`,
    creator: config.creator,
    saleToken: config.saleToken,
    quoteToken: config.quoteToken,
    quoteSymbol: addressMatches(config.quoteToken, contracts.mockUsdt) ? "USDT" : "QUOTE",
    totalRaised: units(accounting.totalRaised),
    platformFee: units(accounting.platformFee),
    quoteToLiquidity: units(accounting.quoteToLiquidity),
    creatorProceeds: units(accounting.creatorProceeds),
    refundTotal: units(accounting.refundTotal),
    tokenPaired: units(config.saleTokenAmount),
    platformTreasury,
    pair: "",
    lpReceiver: "",
    contributionTx: "",
    finalizationTx: "",
    lockTx: "",
    claimTx: "",
    refundTx: "",
    lpFeeClaimTx: "",
  };

  const saleLogTopics = [
    eventTopics.quoteReleasedForFinalization,
    eventTopics.deposited,
    eventTopics.tokensClaimed,
    eventTopics.refundClaimed,
  ];
  const [saleLogsResult, finalizerLogsResult] = await Promise.all([
    safeReadEventLogs({ address, topics: [saleLogTopics] }, latestBlock, fromBlock),
    safeReadEventLogs(
      {
        address: contracts.topazFinalizer,
        topics: [eventTopics.launchFinalized, topicAddress(address)],
      },
      latestBlock,
      fromBlock,
    ),
  ]);
  record.logErrors = [saleLogsResult.error, finalizerLogsResult.error].filter(Boolean);
  return applyFinalizedLogs(record, saleLogsResult.logs, finalizerLogsResult.logs, latestBlock, fromBlock);
}

async function readProofRecords() {
  const [latestBlock, launchCountRaw] = await Promise.all([
    ethBlockNumber(),
    ethCall(contracts.launchFactory, selectors.launchCount),
  ]);
  const launchCount = Number(decodeUint256(launchCountRaw));
  const start = Math.max(0, launchCount - recentLaunchReadLimit);
  const creationBlocks = await readLaunchCreationBlocks(latestBlock);
  const refs = [];
  for (let index = start; index < launchCount; index += 1) {
    const address = decodeAddress(await ethCall(contracts.launchFactory, `${selectors.allLaunches}${encodeUint256(index)}`));
    if (isEvmAddress(address)) refs.push({ index, address });
  }
  const records = await Promise.all(
    refs.map((ref) => readSaleVaultRecord(ref.address, ref.index, latestBlock, creationBlocks[normalizeAddress(ref.address)])),
  );
  const scannedRecords = Object.fromEntries(records.map((record) => [normalizeAddress(record.saleVault), record]));
  const mergedRecords = { ...scannedRecords };
  Object.entries(seededProofRecords).forEach(([key, seed]) => {
    mergedRecords[key] = {
      ...mergeProofRecord(seed, scannedRecords[key]),
      source: scannedRecords[key] ? "Arbor Foundry proof indexer + proof seed" : seed.source,
    };
  });
  return {
    latestBlock: Number(latestBlock),
    launchCount,
    generatedAt: new Date().toISOString(),
    records: mergedRecords,
  };
}

export default async function handler(request) {
  if (request.method !== "GET") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  try {
    const payload = await readProofRecords();
    return Response.json(
      { ok: true, ...payload },
      {
        headers: {
          "Cache-Control": "public, max-age=20, stale-while-revalidate=120",
        },
      },
    );
  } catch (error) {
    return Response.json(
      { ok: false, error: error.message || "Could not index BNB testnet proof records." },
      { status: 502 },
    );
  }
}

export const config = {
  path: "/api/testnet-proof-records",
};
