// Generated by Ignite ignite.com/cli


import { GeneratedType, OfflineSigner, Registry, } from "@cosmjs/proto-signing";
import { msgTypes } from "./registry";
import { IgniteClient } from "../client";
import { Api } from "./rest";

import { Minter as typeMinter, Params as typeParams } from "./types";

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
      Minter: getStructure(typeMinter.fromPartial({})),
      Params: getStructure(typeParams.fromPartial({})),

    };
    client.on("signer-changed", (signer) => {
      // eslint-disable-next-line no-mixed-spaces-and-tabs
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
    UmmachainUmmacoreMint: new SDKModule(test),
  },
  registry: msgTypes,
});
export default Module;
