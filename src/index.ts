export const CONTRACT_NAME = "analytics-tracker";

export type ContractIdentifier = {
  contractAddress: string;
  contractName?: string;
};

export type TrackPageViewArgs = {
  projectId: string;
  page: string;
};

export type TrackActionArgs = {
  projectId: string;
  action: string;
  target: string;
};

export function getContractId(contract: ContractIdentifier): string {
  return `${contract.contractAddress}.${contract.contractName ?? CONTRACT_NAME}`;
}
