/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Escrow } from "./types";

export const protobufPackage = "ummachain.ummacore.escrow.v1beta1";

/** QueryEscrowRequest is the request type for the Query/Escrow RPC method */
export interface QueryEscrowRequest {
  id: string;
}

/** QueryEscrowResponse is the response type for the Query/Escrow RPC method */
export interface QueryEscrowResponse {
  escrow: Escrow | undefined;
}

/** QueryEscrowsRequest is the request type for the Query/Escrows RPC method */
export interface QueryEscrowsRequest {
  /** The4 seller address */
  seller: string;
  /** The state of the escrow object. It must be one of "open" or "expired". */
  state: string;
  /** All the escrows has a unique key, in the starname objects the domain_name will be the key, and the account_name*domain_name will be account name. */
  objectKey: string;
  paginationStart: number;
  paginationLength: number;
}

/** QueryEscrowsResponse is the response type for the Query/Escrows RPC method */
export interface QueryEscrowsResponse {
  escrows: Escrow[];
}

function createBaseQueryEscrowRequest(): QueryEscrowRequest {
  return { id: "" };
}

export const QueryEscrowRequest = {
  encode(message: QueryEscrowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowRequest();
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

  fromJSON(object: any): QueryEscrowRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryEscrowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowRequest>, I>>(object: I): QueryEscrowRequest {
    const message = createBaseQueryEscrowRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryEscrowResponse(): QueryEscrowResponse {
  return { escrow: undefined };
}

export const QueryEscrowResponse = {
  encode(message: QueryEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.escrow !== undefined) {
      Escrow.encode(message.escrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrow = Escrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEscrowResponse {
    return { escrow: isSet(object.escrow) ? Escrow.fromJSON(object.escrow) : undefined };
  },

  toJSON(message: QueryEscrowResponse): unknown {
    const obj: any = {};
    message.escrow !== undefined && (obj.escrow = message.escrow ? Escrow.toJSON(message.escrow) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowResponse>, I>>(object: I): QueryEscrowResponse {
    const message = createBaseQueryEscrowResponse();
    message.escrow = (object.escrow !== undefined && object.escrow !== null)
      ? Escrow.fromPartial(object.escrow)
      : undefined;
    return message;
  },
};

function createBaseQueryEscrowsRequest(): QueryEscrowsRequest {
  return { seller: "", state: "", objectKey: "", paginationStart: 0, paginationLength: 0 };
}

export const QueryEscrowsRequest = {
  encode(message: QueryEscrowsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.objectKey !== "") {
      writer.uint32(26).string(message.objectKey);
    }
    if (message.paginationStart !== 0) {
      writer.uint32(32).uint64(message.paginationStart);
    }
    if (message.paginationLength !== 0) {
      writer.uint32(40).uint64(message.paginationLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.state = reader.string();
          break;
        case 3:
          message.objectKey = reader.string();
          break;
        case 4:
          message.paginationStart = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.paginationLength = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEscrowsRequest {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      state: isSet(object.state) ? String(object.state) : "",
      objectKey: isSet(object.objectKey) ? String(object.objectKey) : "",
      paginationStart: isSet(object.paginationStart) ? Number(object.paginationStart) : 0,
      paginationLength: isSet(object.paginationLength) ? Number(object.paginationLength) : 0,
    };
  },

  toJSON(message: QueryEscrowsRequest): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.state !== undefined && (obj.state = message.state);
    message.objectKey !== undefined && (obj.objectKey = message.objectKey);
    message.paginationStart !== undefined && (obj.paginationStart = Math.round(message.paginationStart));
    message.paginationLength !== undefined && (obj.paginationLength = Math.round(message.paginationLength));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowsRequest>, I>>(object: I): QueryEscrowsRequest {
    const message = createBaseQueryEscrowsRequest();
    message.seller = object.seller ?? "";
    message.state = object.state ?? "";
    message.objectKey = object.objectKey ?? "";
    message.paginationStart = object.paginationStart ?? 0;
    message.paginationLength = object.paginationLength ?? 0;
    return message;
  },
};

function createBaseQueryEscrowsResponse(): QueryEscrowsResponse {
  return { escrows: [] };
}

export const QueryEscrowsResponse = {
  encode(message: QueryEscrowsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.escrows) {
      Escrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrows.push(Escrow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEscrowsResponse {
    return { escrows: Array.isArray(object?.escrows) ? object.escrows.map((e: any) => Escrow.fromJSON(e)) : [] };
  },

  toJSON(message: QueryEscrowsResponse): unknown {
    const obj: any = {};
    if (message.escrows) {
      obj.escrows = message.escrows.map((e) => e ? Escrow.toJSON(e) : undefined);
    } else {
      obj.escrows = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowsResponse>, I>>(object: I): QueryEscrowsResponse {
    const message = createBaseQueryEscrowsResponse();
    message.escrows = object.escrows?.map((e) => Escrow.fromPartial(e)) || [];
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Escrow queries the escrow by the specified id */
  Escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse>;
  /** Escrows queries escrows by the specified key-value pairs */
  Escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Escrow = this.Escrow.bind(this);
    this.Escrows = this.Escrows.bind(this);
  }
  Escrow(request: QueryEscrowRequest): Promise<QueryEscrowResponse> {
    const data = QueryEscrowRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Query", "Escrow", data);
    return promise.then((data) => QueryEscrowResponse.decode(new _m0.Reader(data)));
  }

  Escrows(request: QueryEscrowsRequest): Promise<QueryEscrowsResponse> {
    const data = QueryEscrowsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.escrow.v1beta1.Query", "Escrows", data);
    return promise.then((data) => QueryEscrowsResponse.decode(new _m0.Reader(data)));
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
