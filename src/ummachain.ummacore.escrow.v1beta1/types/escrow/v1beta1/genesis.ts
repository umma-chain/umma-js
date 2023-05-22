/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Escrow } from "./types";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** GenesisState defines the Escrow module's genesis state */
export interface GenesisState {
  escrows: Escrow[];
  lastBlockTime: number;
  nextEscrowId: number;
  params: Params | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { escrows: [], lastBlockTime: 0, nextEscrowId: 0, params: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.escrows) {
      Escrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockTime !== 0) {
      writer.uint32(16).uint64(message.lastBlockTime);
    }
    if (message.nextEscrowId !== 0) {
      writer.uint32(24).uint64(message.nextEscrowId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
          message.escrows.push(Escrow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockTime = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.nextEscrowId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
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
      escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromJSON(e)) : [],
      lastBlockTime: isSet(object.lastBlockTime) ? Number(object.lastBlockTime) : 0,
      nextEscrowId: isSet(object.nextEscrowId) ? Number(object.nextEscrowId) : 0,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.escrows) {
      obj.escrows = message.escrows.map((e) => e ? Escrow.toJSON(e) : undefined);
    } else {
      obj.escrows = [];
    }
    message.lastBlockTime !== undefined && (obj.lastBlockTime = Math.round(message.lastBlockTime));
    message.nextEscrowId !== undefined && (obj.nextEscrowId = Math.round(message.nextEscrowId));
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.escrows = object.escrows?.map((e) => Escrow.fromPartial(e)) || [];
    message.lastBlockTime = object.lastBlockTime ?? 0;
    message.nextEscrowId = object.nextEscrowId ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
