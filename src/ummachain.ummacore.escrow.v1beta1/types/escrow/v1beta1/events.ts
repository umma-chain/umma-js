/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrow {
  id: string;
  seller: string;
  feePayer: string;
  brokerAddress: string;
  brokerCommission: string;
  price: Coin[];
  object: Any | undefined;
  deadline: number;
  fees: Coin[];
}

/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrow {
  id: string;
  updater: string;
  feePayer: string;
  newSeller: string;
  newPrice: Coin[];
  newDeadline: number;
  fees: Coin[];
}

/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrow {
  id: string;
  feePayer: string;
  buyer: string;
  fees: Coin[];
}

/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrow {
  id: string;
  feePayer: string;
  sender: string;
  fees: Coin[];
}

function createBaseEventCreatedEscrow(): EventCreatedEscrow {
  return {
    id: "",
    seller: "",
    feePayer: "",
    brokerAddress: "",
    brokerCommission: "",
    price: [],
    object: undefined,
    deadline: 0,
    fees: [],
  };
}

export const EventCreatedEscrow = {
  encode(message: EventCreatedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(34).string(message.brokerAddress);
    }
    if (message.brokerCommission !== "") {
      writer.uint32(42).string(message.brokerCommission);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(58).fork()).ldelim();
    }
    if (message.deadline !== 0) {
      writer.uint32(64).uint64(message.deadline);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatedEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatedEscrow();
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
          message.feePayer = reader.string();
          break;
        case 4:
          message.brokerAddress = reader.string();
          break;
        case 5:
          message.brokerCommission = reader.string();
          break;
        case 6:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.object = Any.decode(reader, reader.uint32());
          break;
        case 8:
          message.deadline = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreatedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      brokerAddress: isSet(object.brokerAddress) ? String(object.brokerAddress) : "",
      brokerCommission: isSet(object.brokerCommission) ? String(object.brokerCommission) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventCreatedEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.seller !== undefined && (obj.seller = message.seller);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.brokerAddress !== undefined && (obj.brokerAddress = message.brokerAddress);
    message.brokerCommission !== undefined && (obj.brokerCommission = message.brokerCommission);
    if (message.price) {
      obj.price = message.price.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }
    message.object !== undefined && (obj.object = message.object ? Any.toJSON(message.object) : undefined);
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatedEscrow>, I>>(object: I): EventCreatedEscrow {
    const message = createBaseEventCreatedEscrow();
    message.id = object.id ?? "";
    message.seller = object.seller ?? "";
    message.feePayer = object.feePayer ?? "";
    message.brokerAddress = object.brokerAddress ?? "";
    message.brokerCommission = object.brokerCommission ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.object = (object.object !== undefined && object.object !== null)
      ? Any.fromPartial(object.object)
      : undefined;
    message.deadline = object.deadline ?? 0;
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventUpdatedEscrow(): EventUpdatedEscrow {
  return { id: "", updater: "", feePayer: "", newSeller: "", newPrice: [], newDeadline: 0, fees: [] };
}

export const EventUpdatedEscrow = {
  encode(message: EventUpdatedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.newSeller !== "") {
      writer.uint32(34).string(message.newSeller);
    }
    for (const v of message.newPrice) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.newDeadline !== 0) {
      writer.uint32(48).uint64(message.newDeadline);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdatedEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdatedEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.updater = reader.string();
          break;
        case 3:
          message.feePayer = reader.string();
          break;
        case 4:
          message.newSeller = reader.string();
          break;
        case 5:
          message.newPrice.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.newDeadline = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdatedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      updater: isSet(object.updater) ? String(object.updater) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      newSeller: isSet(object.newSeller) ? String(object.newSeller) : "",
      newPrice: Array.isArray(object?.newPrice) ? object.newPrice.map((e: any) => Coin.fromJSON(e)) : [],
      newDeadline: isSet(object.newDeadline) ? Number(object.newDeadline) : 0,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventUpdatedEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.updater !== undefined && (obj.updater = message.updater);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.newSeller !== undefined && (obj.newSeller = message.newSeller);
    if (message.newPrice) {
      obj.newPrice = message.newPrice.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.newPrice = [];
    }
    message.newDeadline !== undefined && (obj.newDeadline = Math.round(message.newDeadline));
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdatedEscrow>, I>>(object: I): EventUpdatedEscrow {
    const message = createBaseEventUpdatedEscrow();
    message.id = object.id ?? "";
    message.updater = object.updater ?? "";
    message.feePayer = object.feePayer ?? "";
    message.newSeller = object.newSeller ?? "";
    message.newPrice = object.newPrice?.map((e) => Coin.fromPartial(e)) || [];
    message.newDeadline = object.newDeadline ?? 0;
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventCompletedEscrow(): EventCompletedEscrow {
  return { id: "", feePayer: "", buyer: "", fees: [] };
}

export const EventCompletedEscrow = {
  encode(message: EventCompletedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCompletedEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompletedEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.feePayer = reader.string();
          break;
        case 3:
          message.buyer = reader.string();
          break;
        case 4:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCompletedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventCompletedEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCompletedEscrow>, I>>(object: I): EventCompletedEscrow {
    const message = createBaseEventCompletedEscrow();
    message.id = object.id ?? "";
    message.feePayer = object.feePayer ?? "";
    message.buyer = object.buyer ?? "";
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventRefundedEscrow(): EventRefundedEscrow {
  return { id: "", feePayer: "", sender: "", fees: [] };
}

export const EventRefundedEscrow = {
  encode(message: EventRefundedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefundedEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefundedEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.feePayer = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.fees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRefundedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventRefundedEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.fees) {
      obj.fees = message.fees.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRefundedEscrow>, I>>(object: I): EventRefundedEscrow {
    const message = createBaseEventRefundedEscrow();
    message.id = object.id ?? "";
    message.feePayer = object.feePayer ?? "";
    message.sender = object.sender ?? "";
    message.fees = object.fees?.map((e) => Coin.fromPartial(e)) || [];
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
