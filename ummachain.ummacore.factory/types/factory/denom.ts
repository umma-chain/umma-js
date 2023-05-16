/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ummachain.ummacore.factory";

export interface Denom {
  denom: string;
  description: string;
  symbol: string;
  decimal: number;
  url: string;
  logoUrl: string;
  maxSupply: number;
  supply: number;
  canChangeMaxSupply: boolean;
  owner: string;
}

function createBaseDenom(): Denom {
  return {
    denom: "",
    description: "",
    symbol: "",
    decimal: 0,
    url: "",
    logoUrl: "",
    maxSupply: 0,
    supply: 0,
    canChangeMaxSupply: false,
    owner: "",
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.decimal !== 0) {
      writer.uint32(32).int32(message.decimal);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.logoUrl !== "") {
      writer.uint32(50).string(message.logoUrl);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).uint64(message.maxSupply);
    }
    if (message.supply !== 0) {
      writer.uint32(64).uint64(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(72).bool(message.canChangeMaxSupply);
    }
    if (message.owner !== "") {
      writer.uint32(82).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.decimal = reader.int32();
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.logoUrl = reader.string();
          break;
        case 7:
          message.maxSupply = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.supply = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.canChangeMaxSupply = reader.bool();
          break;
        case 10:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      logoUrl: isSet(object.logoUrl) ? String(object.logoUrl) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      supply: isSet(object.supply) ? Number(object.supply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.description !== undefined && (obj.description = message.description);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.url !== undefined && (obj.url = message.url);
    message.logoUrl !== undefined && (obj.logoUrl = message.logoUrl);
    message.maxSupply !== undefined && (obj.maxSupply = Math.round(message.maxSupply));
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.symbol = object.symbol ?? "";
    message.decimal = object.decimal ?? 0;
    message.url = object.url ?? "";
    message.logoUrl = object.logoUrl ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.supply = object.supply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.owner = object.owner ?? "";
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
