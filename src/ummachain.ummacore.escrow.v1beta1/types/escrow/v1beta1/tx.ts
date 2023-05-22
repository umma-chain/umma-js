/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrow {
  seller: string;
  feePayer: string;
  object: Any | undefined;
  price: Coin[];
  deadline: number;
}

/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponse {
  id: string;
}

/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrow {
  id: string;
  updater: string;
  feePayer: string;
  seller: string;
  price: Coin[];
  deadline: number;
}

/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponse {
}

/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrow {
  id: string;
  sender: string;
  feePayer: string;
  amount: Coin[];
}

/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponse {
}

/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrow {
  id: string;
  sender: string;
  feePayer: string;
}

/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponse {
}

function createBaseMsgCreateEscrow(): MsgCreateEscrow {
  return { seller: "", feePayer: "", object: undefined, price: [], deadline: 0 };
}

export const MsgCreateEscrow = {
  encode(message: MsgCreateEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deadline !== 0) {
      writer.uint32(40).uint64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.feePayer = reader.string();
          break;
        case 3:
          message.object = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deadline = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEscrow {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
    };
  },

  toJSON(message: MsgCreateEscrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.object !== undefined && (obj.object = message.object ? Any.toJSON(message.object) : undefined);
    if (message.price) {
      obj.price = message.price.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateEscrow>, I>>(object: I): MsgCreateEscrow {
    const message = createBaseMsgCreateEscrow();
    message.seller = object.seller ?? "";
    message.feePayer = object.feePayer ?? "";
    message.object = (object.object !== undefined && object.object !== null)
      ? Any.fromPartial(object.object)
      : undefined;
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline ?? 0;
    return message;
  },
};

function createBaseMsgCreateEscrowResponse(): MsgCreateEscrowResponse {
  return { id: "" };
}

export const MsgCreateEscrowResponse = {
  encode(message: MsgCreateEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEscrowResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateEscrowResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateEscrowResponse>, I>>(object: I): MsgCreateEscrowResponse {
    const message = createBaseMsgCreateEscrowResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgUpdateEscrow(): MsgUpdateEscrow {
  return { id: "", updater: "", feePayer: "", seller: "", price: [], deadline: 0 };
}

export const MsgUpdateEscrow = {
  encode(message: MsgUpdateEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.deadline !== 0) {
      writer.uint32(48).uint64(message.deadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEscrow();
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
          message.seller = reader.string();
          break;
        case 5:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.deadline = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      updater: isSet(object.updater) ? String(object.updater) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
    };
  },

  toJSON(message: MsgUpdateEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.updater !== undefined && (obj.updater = message.updater);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    message.seller !== undefined && (obj.seller = message.seller);
    if (message.price) {
      obj.price = message.price.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }
    message.deadline !== undefined && (obj.deadline = Math.round(message.deadline));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateEscrow>, I>>(object: I): MsgUpdateEscrow {
    const message = createBaseMsgUpdateEscrow();
    message.id = object.id ?? "";
    message.updater = object.updater ?? "";
    message.feePayer = object.feePayer ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price?.map((e) => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline ?? 0;
    return message;
  },
};

function createBaseMsgUpdateEscrowResponse(): MsgUpdateEscrowResponse {
  return {};
}

export const MsgUpdateEscrowResponse = {
  encode(_: MsgUpdateEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateEscrowResponse {
    return {};
  },

  toJSON(_: MsgUpdateEscrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateEscrowResponse>, I>>(_: I): MsgUpdateEscrowResponse {
    const message = createBaseMsgUpdateEscrowResponse();
    return message;
  },
};

function createBaseMsgTransferToEscrow(): MsgTransferToEscrow {
  return { id: "", sender: "", feePayer: "", amount: [] };
}

export const MsgTransferToEscrow = {
  encode(message: MsgTransferToEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferToEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferToEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.feePayer = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferToEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgTransferToEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferToEscrow>, I>>(object: I): MsgTransferToEscrow {
    const message = createBaseMsgTransferToEscrow();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.feePayer = object.feePayer ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTransferToEscrowResponse(): MsgTransferToEscrowResponse {
  return {};
}

export const MsgTransferToEscrowResponse = {
  encode(_: MsgTransferToEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferToEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferToEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferToEscrowResponse {
    return {};
  },

  toJSON(_: MsgTransferToEscrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferToEscrowResponse>, I>>(_: I): MsgTransferToEscrowResponse {
    const message = createBaseMsgTransferToEscrowResponse();
    return message;
  },
};

function createBaseMsgRefundEscrow(): MsgRefundEscrow {
  return { id: "", sender: "", feePayer: "" };
}

export const MsgRefundEscrow = {
  encode(message: MsgRefundEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundEscrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundEscrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.feePayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefundEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
    };
  },

  toJSON(message: MsgRefundEscrow): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.feePayer !== undefined && (obj.feePayer = message.feePayer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefundEscrow>, I>>(object: I): MsgRefundEscrow {
    const message = createBaseMsgRefundEscrow();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.feePayer = object.feePayer ?? "";
    return message;
  },
};

function createBaseMsgRefundEscrowResponse(): MsgRefundEscrowResponse {
  return {};
}

export const MsgRefundEscrowResponse = {
  encode(_: MsgRefundEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRefundEscrowResponse {
    return {};
  },

  toJSON(_: MsgRefundEscrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefundEscrowResponse>, I>>(_: I): MsgRefundEscrowResponse {
    const message = createBaseMsgRefundEscrowResponse();
    return message;
  },
};

/** Msg defines the escrow Msg service */
export interface Msg {
  /** CreateEscrow defines a method for creating an escrow */
  CreateEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse>;
  /** UpdateEscrow defines a method for updating an escrow */
  UpdateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse>;
  /**
   * TransferToEscrow defines a method for a buyer to transfer funds to the
   * escrow
   */
  TransferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse>;
  /**
   * RefundEscrow defines a method for the seller to return the assets locked in
   * the escrow
   */
  RefundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateEscrow = this.CreateEscrow.bind(this);
    this.UpdateEscrow = this.UpdateEscrow.bind(this);
    this.TransferToEscrow = this.TransferToEscrow.bind(this);
    this.RefundEscrow = this.RefundEscrow.bind(this);
  }
  CreateEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse> {
    const data = MsgCreateEscrow.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Msg", "CreateEscrow", data);
    return promise.then((data) => MsgCreateEscrowResponse.decode(new _m0.Reader(data)));
  }

  UpdateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse> {
    const data = MsgUpdateEscrow.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Msg", "UpdateEscrow", data);
    return promise.then((data) => MsgUpdateEscrowResponse.decode(new _m0.Reader(data)));
  }

  TransferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse> {
    const data = MsgTransferToEscrow.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Msg", "TransferToEscrow", data);
    return promise.then((data) => MsgTransferToEscrowResponse.decode(new _m0.Reader(data)));
  }

  RefundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse> {
    const data = MsgRefundEscrow.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Msg", "RefundEscrow", data);
    return promise.then((data) => MsgRefundEscrowResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
