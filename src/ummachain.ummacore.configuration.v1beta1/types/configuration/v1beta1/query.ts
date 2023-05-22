/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Config, Fees } from "./types";

export const protobufPackage = "ummachain.ummacore.configuration.v1beta1";

/**
 * QueryConfigRequest is the request type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigRequest {
}

/**
 * QueryConfigResponse is the response type for the Query/Configuration RPC
 * method.
 */
export interface QueryConfigResponse {
  /** Configuration is the starname configuration. */
  config: Config | undefined;
}

/** QueryFeesRequest is the request type for the Query/Configuration RPC method. */
export interface QueryFeesRequest {
}

/** QueryFeesResponse is the response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
  /** Fees is the starname product fee object. */
  fees: Fees | undefined;
}

function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}

export const QueryConfigRequest = {
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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

  fromJSON(_: any): QueryConfigRequest {
    return {};
  },

  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(_: I): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
};

function createBaseQueryConfigResponse(): QueryConfigResponse {
  return { config: undefined };
}

export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    return { config: isSet(object.config) ? Config.fromJSON(object.config) : undefined };
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = (object.config !== undefined && object.config !== null)
      ? Config.fromPartial(object.config)
      : undefined;
    return message;
  },
};

function createBaseQueryFeesRequest(): QueryFeesRequest {
  return {};
}

export const QueryFeesRequest = {
  encode(_: QueryFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesRequest();
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

  fromJSON(_: any): QueryFeesRequest {
    return {};
  },

  toJSON(_: QueryFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeesRequest>, I>>(_: I): QueryFeesRequest {
    const message = createBaseQueryFeesRequest();
    return message;
  },
};

function createBaseQueryFeesResponse(): QueryFeesResponse {
  return { fees: undefined };
}

export const QueryFeesResponse = {
  encode(message: QueryFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees = Fees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeesResponse {
    return { fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined };
  },

  toJSON(message: QueryFeesResponse): unknown {
    const obj: any = {};
    message.fees !== undefined && (obj.fees = message.fees ? Fees.toJSON(message.fees) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeesResponse>, I>>(object: I): QueryFeesResponse {
    const message = createBaseQueryFeesResponse();
    message.fees = (object.fees !== undefined && object.fees !== null) ? Fees.fromPartial(object.fees) : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Config gets starname configuration. */
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
  /** Fees gets starname product fees. */
  Fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
    this.Fees = this.Fees.bind(this);
  }
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.configuration.v1beta1.Query", "Config", data);
    return promise.then((data) => QueryConfigResponse.decode(new _m0.Reader(data)));
  }

  Fees(request: QueryFeesRequest): Promise<QueryFeesResponse> {
    const data = QueryFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.configuration.v1beta1.Query", "Fees", data);
    return promise.then((data) => QueryFeesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
