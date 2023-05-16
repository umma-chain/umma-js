/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** TestObject defines a transferable object used for testing */
export interface TestObject {
  id: number;
  owner: Uint8Array;
  numAllowedTransfers: number;
}

/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObject {
  id: number;
  owner: Uint8Array;
  expiration: number;
}

function createBaseTestObject(): TestObject {
  return { id: 0, owner: new Uint8Array(), numAllowedTransfers: 0 };
}

export const TestObject = {
  encode(message: TestObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (message.numAllowedTransfers !== 0) {
      writer.uint32(24).int64(message.numAllowedTransfers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.bytes();
          break;
        case 3:
          message.numAllowedTransfers = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestObject {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      numAllowedTransfers: isSet(object.numAllowedTransfers) ? Number(object.numAllowedTransfers) : 0,
    };
  },

  toJSON(message: TestObject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined
      && (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    message.numAllowedTransfers !== undefined && (obj.numAllowedTransfers = Math.round(message.numAllowedTransfers));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestObject>, I>>(object: I): TestObject {
    const message = createBaseTestObject();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? new Uint8Array();
    message.numAllowedTransfers = object.numAllowedTransfers ?? 0;
    return message;
  },
};

function createBaseTestTimeConstrainedObject(): TestTimeConstrainedObject {
  return { id: 0, owner: new Uint8Array(), expiration: 0 };
}

export const TestTimeConstrainedObject = {
  encode(message: TestTimeConstrainedObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (message.expiration !== 0) {
      writer.uint32(24).uint64(message.expiration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestTimeConstrainedObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestTimeConstrainedObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.bytes();
          break;
        case 3:
          message.expiration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestTimeConstrainedObject {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
    };
  },

  toJSON(message: TestTimeConstrainedObject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined
      && (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestTimeConstrainedObject>, I>>(object: I): TestTimeConstrainedObject {
    const message = createBaseTestTimeConstrainedObject();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? new Uint8Array();
    message.expiration = object.expiration ?? 0;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
