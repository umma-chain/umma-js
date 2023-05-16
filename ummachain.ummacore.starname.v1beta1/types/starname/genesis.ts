/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Account, Domain } from "./types";

export const protobufPackage = "ummachain.ummacore.starname.v1beta1";

/** GenesisState - genesis state of x/starname */
export interface GenesisState {
  domains: Domain[];
  accounts: Account[];
}

function createBaseGenesisState(): GenesisState {
  return { domains: [], accounts: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map((e) => e ? Domain.toJSON(e) : undefined);
    } else {
      obj.domains = [];
    }
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
