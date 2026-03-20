# stacks-analytics-tracker-sdk

TypeScript SDK for interacting with the `analytics-tracker` Clarity contract.

## Install

```bash
npm install stacks-analytics-tracker-sdk @stacks/transactions
```

## Usage

```ts
import {
  CONTRACT_NAME,
  getContractId,
  buildTrackPageViewArgs,
  fetchContractInfo,
} from "stacks-analytics-tracker-sdk";

const contract = {
  contractAddress: "ST000000000000000000002AMW42H",
  contractName: CONTRACT_NAME,
};

const contractId = getContractId(contract);
const functionArgs = buildTrackPageViewArgs({
  projectId: "demo-app",
  page: "/home",
});

const info = await fetchContractInfo(contract, "testnet", "ST1...");
```

Use `functionArgs` with your wallet/provider request flow (`stx_callContract`) or with `makeContractCall` from `@stacks/transactions`.
