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
import { MsgUpdateFees, MsgUpdateConfig } from "./types/configuration/v1beta1/msgs";

import { Config as typeConfig, Fees as typeFees } from "./types";

export { MsgUpdateFees, MsgUpdateConfig };

type sendMsgUpdateFeesParams = {
  value: MsgUpdateFees,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateConfigParams = {
  value: MsgUpdateConfig,
  fee?: StdFee,
  memo?: string
};

type msgUpdateFeesParams = {
  value: MsgUpdateFees,
};

type msgUpdateConfigParams = {
  value: MsgUpdateConfig,
};

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

  async sendMsgUpdateFees({ value, fee, memo }: sendMsgUpdateFeesParams): Promise<DeliverTxResponse> {
    if (!signer) {
      throw new Error("TxClient:sendMsgUpdateFees: Unable to sign Tx. Signer is not present.");
    }
    try {
      const { address } = (await signer.getAccounts())[0];
      const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
      const msg = this.msgUpdateFees({ value: MsgUpdateFees.fromPartial(value) });
      return await signingClient.signAndBroadcast(address, [msg], fee || defaultFee, memo);
    } catch (e: any) {
      throw new Error(`TxClient:sendMsgUpdateFees: Could not broadcast Tx: ${e.message}`);
    }
  },

  async sendMsgUpdateConfig({ value, fee, memo }: sendMsgUpdateConfigParams): Promise<DeliverTxResponse> {
    if (!signer) {
      throw new Error("TxClient:sendMsgUpdateConfig: Unable to sign Tx. Signer is not present.");
    }
    try {
      const { address } = (await signer.getAccounts())[0];
      const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry, prefix });
      const msg = this.msgUpdateConfig({ value: MsgUpdateConfig.fromPartial(value) });
      return await signingClient.signAndBroadcast(address, [msg], fee || defaultFee, memo);
    } catch (e: any) {
      throw new Error(`TxClient:sendMsgUpdateConfig: Could not broadcast Tx: ${e.message}`);
    }
  },

  msgUpdateFees({ value }: msgUpdateFeesParams): EncodeObject {
    try {
      return { typeUrl: "/ummachain.ummacore.configuration.v1beta1.MsgUpdateFees", value: MsgUpdateFees.fromPartial(value) };
    } catch (e: any) {
      throw new Error(`TxClient:MsgUpdateFees: Could not create message: ${e.message}`);
    }
  },

  msgUpdateConfig({ value }: msgUpdateConfigParams): EncodeObject {
    try {
      return { typeUrl: "/ummachain.ummacore.configuration.v1beta1.MsgUpdateConfig", value: MsgUpdateConfig.fromPartial(value) };
    } catch (e: any) {
      throw new Error(`TxClient:MsgUpdateConfig: Could not create message: ${e.message}`);
    }
  },

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
      Config: getStructure(typeConfig.fromPartial({})),
      Fees: getStructure(typeFees.fromPartial({})),

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
    UmmachainUmmacoreConfigurationV1Beta1: new SDKModule(test),
  },
  registry: msgTypes,
});
export default Module;
