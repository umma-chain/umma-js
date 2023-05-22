/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** EscrowState defines the state of an escrow */
export enum EscrowState {
  /**
   * ESCROW_STATE_OPEN_UNSPECIFIED - ESCROW_STATE_OPEN_UNSPECIFIED defines an open state. TODO:: review the
   * _UNSPECIFIED sufix
   */
  ESCROW_STATE_OPEN_UNSPECIFIED = 0,
  /** ESCROW_STATE_COMPLETED - ESCROW_STATE_COMPLETED defines a completed state. */
  ESCROW_STATE_COMPLETED = 1,
  /** ESCROW_STATE_REFUNDED - ESCROW_STATE_REFUNDED defines a refunded state. */
  ESCROW_STATE_REFUNDED = 2,
  /** ESCROW_STATE_EXPIRED - ESCROW_STATE_REFUNDED defines an expired state. */
  ESCROW_STATE_EXPIRED = 3,
  UNRECOGNIZED = -1,
}

export function escrowStateFromJSON(object: any): EscrowState {
  switch (object) {
    case 0:
    case "ESCROW_STATE_OPEN_UNSPECIFIED":
      return EscrowState.ESCROW_STATE_OPEN_UNSPECIFIED;
    case 1:
    case "ESCROW_STATE_COMPLETED":
      return EscrowState.ESCROW_STATE_COMPLETED;
    case 2:
    case "ESCROW_STATE_REFUNDED":
      return EscrowState.ESCROW_STATE_REFUNDED;
    case 3:
    case "ESCROW_STATE_EXPIRED":
      return EscrowState.ESCROW_STATE_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EscrowState.UNRECOGNIZED;
  }
}

export function escrowStateToJSON(object: EscrowState): string {
  switch (object) {
    case EscrowState.ESCROW_STATE_OPEN_UNSPECIFIED:
      return "ESCROW_STATE_OPEN_UNSPECIFIED";
    case EscrowState.ESCROW_STATE_COMPLETED:
      return "ESCROW_STATE_COMPLETED";
    case EscrowState.ESCROW_STATE_REFUNDED:
      return "ESCROW_STATE_REFUNDED";
    case EscrowState.ESCROW_STATE_EXPIRED:
      return "ESCROW_STATE_EXPIRED";
    case EscrowState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Escrow defines the struct of an escrow */
export interface Escrow {
  id: string;
  seller: string;
  object:
    | Any
    | undefined;
  /**
   * TODO: refactor this to use sdk.Coin instead of sdk.Coins
   * Although the price contains multiple coins, for now we enforce a specific
   * denomination, so there will be only one coin type in a valid escrow
   */
  price: Coin[];
  state: EscrowState;
  deadline: number;
  brokerAddress: string;
  brokerCommission: string;
}

function createBaseEscrow(): Escrow {
  return {
    id: "",
    seller: "",
    object: undefined,
    price: [],
    state: 0,
    deadline: 0,
    brokerAddress: "",
    brokerCommission: "",
  };
}

export const Escrow = {
  encode(message: Escrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.deadline !== 0) {
      writer.uint32(48).uint64(message.deadline);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(58).string(message.brokerAddress);
    }
    if (message.brokerCommission !== "") {
      writer.uint32(66).string(message.brokerCommission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Escrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.seller = reader.string();
          break;
        case 3:
          message.object = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.state = reader.int32() as any;
          break;
        case 6:
          message.deadline = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.brokerAddress = reader.string();
          break;
        case 8:
          message.brokerCommission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Escrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      state: isSet(object.state) ? escrowStateFromJSON(object.state) : 0,
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      brokerAddress: isSet(object.brokerAddress) ? String(object.brokerAddress) : "",
      brokerCommission: isSet(object.brokerCommission) ? String(object.brokerCommission) : "",
    };
  },

  toJSON(message: Escrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.seller !== undefined && (obj.seller = message.seller);
    message.object !== undefined && (obj.object = message.object ? Any.toJSON(message.object) : undefined);
    if (message.price) {
      obj.price = message.price.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }
    message.state !== undefined && (obj.state = escrowStateToJSON(message.state));
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    message.brokerAddress !== undefined && (obj.brokerAddress = message.brokerAddress);
    message.brokerCommission !== undefined && (obj.brokerCommission = message.brokerCommission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Escrow>, I>>(object: I): Escrow {
    const message = createBaseEscrow();
    message.id = object.id ?? "";
    message.seller = object.seller ?? "";
    message.object = (object.object !== undefined && object.object !== null)
      ? Any.fromPartial(object.object)
      : undefined;
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.state = object.state ?? 0;
    message.deadline = object.deadline ?? 0;
    message.brokerAddress = object.brokerAddress ?? "";
    message.brokerCommission = object.brokerCommission ?? "";
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
