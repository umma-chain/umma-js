// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import {
  EncodeObject, GeneratedType, OfflineSigner, Registry,
} from "@cosmjs/proto-signing";
import { msgTypes } from "./registry";
import { IgniteClient } from "../client";
import { MissingWalletError } from "../helpers";
import { Api } from "./rest";

import { ParameterChangeProposal as typeParameterChangeProposal, ParamChange as typeParamChange } from "./types";

export { };

export const registry = new Registry(msgTypes);

type Field = {
  name: string;
  type: unknown;
};
function getStructure(template) {
  const structure: { fields: Field[] } = { fields: [] };
  for (const [key, value] of Object.entries(template)) {
    const field = { name: key, type: typeof value };
    structure.fields.push(field);
  }
  return structure;
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
  prefix: string
  signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => ({

});

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => new Api({ baseURL: addr });

class SDKModule {
  public query: ReturnType<typeof queryClient>;

  public tx: ReturnType<typeof txClient>;

  public structure: Record<string, unknown>;

  public registry: Array<[string, GeneratedType]> = [];

  constructor(client: IgniteClient) {
    this.query = queryClient({ addr: client.env.apiURL });
    this.updateTX(client);
    this.structure = {
      ParameterChangeProposal: getStructure(typeParameterChangeProposal.fromPartial({})),
      ParamChange: getStructure(typeParamChange.fromPartial({})),

    };
    client.on("signer-changed", (signer) => {
		 this.updateTX(client);
    });
  }

  updateTX(client: IgniteClient) {
    const methods = txClient({
      signer: client.signer,
      addr: client.env.rpcURL,
      prefix: client.env.prefix ?? "cosmos",
    });

    this.tx = methods;
    for (const m in methods) {
      this.tx[m] = methods[m].bind(this.tx);
    }
  }
}

const Module = (test: IgniteClient) => ({
  module: {
    CosmosParamsV1Beta1: new SDKModule(test),
  },
  registry: msgTypes,
});
export default Module;
