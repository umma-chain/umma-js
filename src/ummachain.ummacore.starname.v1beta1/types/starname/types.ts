import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue } from "../google/protobuf/wrappers";

export const protobufPackage = "ummachain.ummacore.starname.v1beta1";

/** Resource defines a resource owned by an account */
export interface Resource {
  /** URI defines the ID of the resource */
  uri: string;
  /** Resource is the resource */
  resource: string;
}

/** Domain defines a domain */
export interface Domain {
  /** Name is the name of the domain */
  name: string;
  /** Admin is the owner of the domain */
  admin: Uint8Array;
  broker: Uint8Array;
  /**
   * ValidUntil is a unix timestamp defines the time when the domain will become
   * invalid in seconds
   */
  validUntil: number;
  /** Type defines the type of the domain */
  type: string;
}

/**
 * Account defines an account that belongs to a domain
 * NOTE: It should not be confused with cosmos-sdk auth account
 * github.com/cosmos/cosmos-sdk/x/auth.Account-
 */
export interface Account {
  /** Domain references the domain this account belongs to */
  domain: string;
  /** Name is the name of the account */
  name:
  | string
  | undefined;
  /** Owner is the address that owns the account */
  owner: Uint8Array;
  /**
   * Broker identifies an entity that facilitated the transaction of the account
   * and can be empty
   */
  broker: Uint8Array;
  /**
   * ValidUntil defines a unix timestamp of the expiration of the account in
   * seconds
   */
  validUntil: number;
  /** Resources is the list of resources an account resolves to */
  resources: Resource[];
  /**
   * Certificates contains the list of certificates to identify the account
   * owner
   */
  certificates: Uint8Array[];
  /** MetadataURI contains a link to extra information regarding the account */
  metadataUri: string;
}

function createBaseResource(): Resource {
  return { uri: "", resource: "" };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.resource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      resource: isSet(object.resource) ? String(object.resource) : "",
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.resource !== undefined && (obj.resource = message.resource);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.uri = object.uri ?? "";
    message.resource = object.resource ?? "";
    return message;
  },
};

function createBaseDomain(): Domain {
  return {
    name: "", admin: new Uint8Array(), broker: new Uint8Array(), validUntil: 0, type: "",
  };
}

export const Domain = {
  encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.admin.length !== 0) {
      writer.uint32(18).bytes(message.admin);
    }
    if (message.broker.length !== 0) {
      writer.uint32(26).bytes(message.broker);
    }
    if (message.validUntil !== 0) {
      writer.uint32(32).int64(message.validUntil);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Domain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.admin = reader.bytes();
          break;
        case 3:
          message.broker = reader.bytes();
          break;
        case 4:
          message.validUntil = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Domain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      broker: isSet(object.broker) ? bytesFromBase64(object.broker) : new Uint8Array(),
      validUntil: isSet(object.validUntil) ? Number(object.validUntil) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Domain): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.admin !== undefined
      && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.broker !== undefined
      && (obj.broker = base64FromBytes(message.broker !== undefined ? message.broker : new Uint8Array()));
    message.validUntil !== undefined && (obj.validUntil = Math.round(message.validUntil));
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Domain>, I>>(object: I): Domain {
    const message = createBaseDomain();
    message.name = object.name ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.broker = object.broker ?? new Uint8Array();
    message.validUntil = object.validUntil ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseAccount(): Account {
  return {
    domain: "",
    name: undefined,
    owner: new Uint8Array(),
    broker: new Uint8Array(),
    validUntil: 0,
    resources: [],
    certificates: [],
    metadataUri: "",
  };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      StringValue.encode({ value: message.name! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner.length !== 0) {
      writer.uint32(26).bytes(message.owner);
    }
    if (message.broker.length !== 0) {
      writer.uint32(34).bytes(message.broker);
    }
    if (message.validUntil !== 0) {
      writer.uint32(40).int64(message.validUntil);
    }
    for (const v of message.resources) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Resource.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.certificates) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      writer.uint32(58).bytes(v!);
    }
    if (message.metadataUri !== "") {
      writer.uint32(66).string(message.metadataUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.owner = reader.bytes();
          break;
        case 4:
          message.broker = reader.bytes();
          break;
        case 5:
          message.validUntil = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        case 7:
          message.certificates.push(reader.bytes());
          break;
        case 8:
          message.metadataUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      broker: isSet(object.broker) ? bytesFromBase64(object.broker) : new Uint8Array(),
      validUntil: isSet(object.validUntil) ? Number(object.validUntil) : 0,
      // eslint-disable-next-line max-len
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : [],
      // eslint-disable-next-line max-len
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => bytesFromBase64(e)) : [],
      metadataUri: isSet(object.metadataUri) ? String(object.metadataUri) : "",
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined
    // eslint-disable-next-line max-len
      && (obj.owner = base64FromBytes(message.owner ? message.owner : new Uint8Array()));
    message.broker !== undefined
    // eslint-disable-next-line max-len
      && (obj.broker = base64FromBytes(message.broker ? message.broker : new Uint8Array()));
    message.validUntil !== undefined && (obj.validUntil = Math.round(message.validUntil));
    if (message.resources) {
      obj.resources = message.resources.map((e) => (e ? Resource.toJSON(e) : undefined));
    } else {
      obj.resources = [];
    }
    if (message.certificates) {
      // eslint-disable-next-line max-len
      obj.certificates = message.certificates.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.certificates = [];
    }
    message.metadataUri !== undefined && (obj.metadataUri = message.metadataUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? undefined;
    message.owner = object.owner ?? new Uint8Array();
    message.broker = object.broker ?? new Uint8Array();
    message.validUntil = object.validUntil ?? 0;
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.certificates = object.certificates?.map((e) => e) || [];
    message.metadataUri = object.metadataUri ?? "";
    return message;
  },
};

declare let self: any | undefined;
declare let window: any | undefined;
declare let global: any | undefined;
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
  }
  const bin = globalThis.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  }
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return globalThis.btoa(bin.join(""));
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
    : T extends NonNullable<unknown> ? { [K in keyof T]?: DeepPartial<T[K]> }
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
