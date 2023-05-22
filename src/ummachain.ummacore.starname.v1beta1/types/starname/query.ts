/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Account, Domain } from "./types";

export const protobufPackage = "ummachain.ummacore.starname.v1beta1";

/** QueryDomainRequest is the request type for the Query/Domain RPC method. */
export interface QueryDomainRequest {
  /** Name is the name of the domain. */
  name: string;
}

/** QueryDomainResponse is the response type for the Query/Domain RPC method. */
export interface QueryDomainResponse {
  /** Domain is the information associated with the domain. */
  domain: Domain | undefined;
}

/**
 * QueryDomainAccountsRequest is the request type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsRequest {
  /** Domain is the name of the domain. */
  domain: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
 * RPC method.
 */
export interface QueryDomainAccountsResponse {
  /** Accounts is the accounts associated with the domain. */
  accounts: Account[];
  page: PageResponse | undefined;
}

/** QueryStarnameRequest is the request type for the Query/Starname RPC method. */
export interface QueryStarnameRequest {
  /** Starname is the of the form account*domain. */
  starname: string;
}

/** QueryStarnameResponse is the response type for the Query/Starname RPC method. */
export interface QueryStarnameResponse {
  /** Account is the information associated with the starname. */
  account: Account | undefined;
}

/**
 * QueryOwnerAccountsRequest is the request type for the Query/OwnerAccounts RPC
 * method.
 */
export interface QueryOwnerAccountsRequest {
  /** Owner is the owner of accounts. */
  owner: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
 * RPC method.
 */
export interface QueryOwnerAccountsResponse {
  /** Accounts is the accounts associated with owner. */
  accounts: Account[];
  page: PageResponse | undefined;
}

/**
 * QueryOwnerDomainsRequest is the request type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsRequest {
  /** Owner is the owner of accounts. */
  owner: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
 * method.
 */
export interface QueryOwnerDomainsResponse {
  /** Accounts is the accounts associated with owner. */
  domains: Domain[];
  page: PageResponse | undefined;
}

/**
 * QueryResourceAccountsRequest is the request type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsRequest {
  /**
   * Uri is the uri of the resource. query.pb.gw.to doesn't respect
   * gogoproto.customname, so we're stuck with Uri.
   */
  uri: string;
  /** Resource is the resource of interest. */
  resource: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryResourceAccountsResponse is the response type for the
 * Query/ResourceAccounts RPC method.
 */
export interface QueryResourceAccountsResponse {
  /** Accounts are the accounts associated with the resource. */
  accounts: Account[];
  page: PageResponse | undefined;
}

/**
 * QueryBrokerAccountsRequest is the request type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsRequest {
  /** Broker is the broker of accounts. */
  broker: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
 * RPC method.
 */
export interface QueryBrokerAccountsResponse {
  /** Accounts is the accounts associated with broker. */
  accounts: Account[];
  page: PageResponse | undefined;
}

/**
 * QueryBrokerDomainsRequest is the request type for the Query/BrokerDomains RPC
 * method.
 */
export interface QueryBrokerDomainsRequest {
  /** Broker is the broker of accounts. */
  broker: string;
  pagination: PageRequest | undefined;
}

/**
 * QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
 * RPC method.
 */
export interface QueryBrokerDomainsResponse {
  /** Accounts is the accounts associated with broker. */
  domains: Domain[];
  page: PageResponse | undefined;
}

/** QueryYieldRequest is the request type for the Query/Yield RPC method. */
export interface QueryYieldRequest {
}

/** QueryYieldResponse is the response type for the Query/Yield RPC method. */
export interface QueryYieldResponse {
  yield: string;
}

function createBaseQueryDomainRequest(): QueryDomainRequest {
  return { name: "" };
}

export const QueryDomainRequest = {
  encode(message: QueryDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDomainRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryDomainRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDomainRequest>, I>>(object: I): QueryDomainRequest {
    const message = createBaseQueryDomainRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryDomainResponse(): QueryDomainResponse {
  return { domain: undefined };
}

export const QueryDomainResponse = {
  encode(message: QueryDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== undefined) {
      Domain.encode(message.domain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = Domain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDomainResponse {
    return { domain: isSet(object.domain) ? Domain.fromJSON(object.domain) : undefined };
  },

  toJSON(message: QueryDomainResponse): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain ? Domain.toJSON(message.domain) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDomainResponse>, I>>(object: I): QueryDomainResponse {
    const message = createBaseQueryDomainResponse();
    message.domain = (object.domain !== undefined && object.domain !== null)
      ? Domain.fromPartial(object.domain)
      : undefined;
    return message;
  },
};

function createBaseQueryDomainAccountsRequest(): QueryDomainAccountsRequest {
  return { domain: "", pagination: undefined };
}

export const QueryDomainAccountsRequest = {
  encode(message: QueryDomainAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDomainAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDomainAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDomainAccountsRequest {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDomainAccountsRequest): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDomainAccountsRequest>, I>>(object: I): QueryDomainAccountsRequest {
    const message = createBaseQueryDomainAccountsRequest();
    message.domain = object.domain ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDomainAccountsResponse(): QueryDomainAccountsResponse {
  return { accounts: [], page: undefined };
}

export const QueryDomainAccountsResponse = {
  encode(message: QueryDomainAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDomainAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDomainAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDomainAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryDomainAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDomainAccountsResponse>, I>>(object: I): QueryDomainAccountsResponse {
    const message = createBaseQueryDomainAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryStarnameRequest(): QueryStarnameRequest {
  return { starname: "" };
}

export const QueryStarnameRequest = {
  encode(message: QueryStarnameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.starname !== "") {
      writer.uint32(10).string(message.starname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStarnameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStarnameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.starname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStarnameRequest {
    return { starname: isSet(object.starname) ? String(object.starname) : "" };
  },

  toJSON(message: QueryStarnameRequest): unknown {
    const obj: any = {};
    message.starname !== undefined && (obj.starname = message.starname);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStarnameRequest>, I>>(object: I): QueryStarnameRequest {
    const message = createBaseQueryStarnameRequest();
    message.starname = object.starname ?? "";
    return message;
  },
};

function createBaseQueryStarnameResponse(): QueryStarnameResponse {
  return { account: undefined };
}

export const QueryStarnameResponse = {
  encode(message: QueryStarnameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStarnameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStarnameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStarnameResponse {
    return { account: isSet(object.account) ? Account.fromJSON(object.account) : undefined };
  },

  toJSON(message: QueryStarnameResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Account.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStarnameResponse>, I>>(object: I): QueryStarnameResponse {
    const message = createBaseQueryStarnameResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? Account.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerAccountsRequest(): QueryOwnerAccountsRequest {
  return { owner: "", pagination: undefined };
}

export const QueryOwnerAccountsRequest = {
  encode(message: QueryOwnerAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerAccountsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOwnerAccountsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerAccountsRequest>, I>>(object: I): QueryOwnerAccountsRequest {
    const message = createBaseQueryOwnerAccountsRequest();
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerAccountsResponse(): QueryOwnerAccountsResponse {
  return { accounts: [], page: undefined };
}

export const QueryOwnerAccountsResponse = {
  encode(message: QueryOwnerAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryOwnerAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerAccountsResponse>, I>>(object: I): QueryOwnerAccountsResponse {
    const message = createBaseQueryOwnerAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerDomainsRequest(): QueryOwnerDomainsRequest {
  return { owner: "", pagination: undefined };
}

export const QueryOwnerDomainsRequest = {
  encode(message: QueryOwnerDomainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerDomainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerDomainsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerDomainsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOwnerDomainsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerDomainsRequest>, I>>(object: I): QueryOwnerDomainsRequest {
    const message = createBaseQueryOwnerDomainsRequest();
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerDomainsResponse(): QueryOwnerDomainsResponse {
  return { domains: [], page: undefined };
}

export const QueryOwnerDomainsResponse = {
  encode(message: QueryOwnerDomainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerDomainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerDomainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryOwnerDomainsResponse): unknown {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map((e) => e ? Domain.toJSON(e) : undefined);
    } else {
      obj.domains = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerDomainsResponse>, I>>(object: I): QueryOwnerDomainsResponse {
    const message = createBaseQueryOwnerDomainsResponse();
    message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryResourceAccountsRequest(): QueryResourceAccountsRequest {
  return { uri: "", resource: "", pagination: undefined };
}

export const QueryResourceAccountsRequest = {
  encode(message: QueryResourceAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.resource = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResourceAccountsRequest {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      resource: isSet(object.resource) ? String(object.resource) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResourceAccountsRequest): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.resource !== undefined && (obj.resource = message.resource);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceAccountsRequest>, I>>(object: I): QueryResourceAccountsRequest {
    const message = createBaseQueryResourceAccountsRequest();
    message.uri = object.uri ?? "";
    message.resource = object.resource ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResourceAccountsResponse(): QueryResourceAccountsResponse {
  return { accounts: [], page: undefined };
}

export const QueryResourceAccountsResponse = {
  encode(message: QueryResourceAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryResourceAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryResourceAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceAccountsResponse>, I>>(
    object: I,
  ): QueryResourceAccountsResponse {
    const message = createBaseQueryResourceAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryBrokerAccountsRequest(): QueryBrokerAccountsRequest {
  return { broker: "", pagination: undefined };
}

export const QueryBrokerAccountsRequest = {
  encode(message: QueryBrokerAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broker !== "") {
      writer.uint32(10).string(message.broker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBrokerAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBrokerAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broker = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBrokerAccountsRequest {
    return {
      broker: isSet(object.broker) ? String(object.broker) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBrokerAccountsRequest): unknown {
    const obj: any = {};
    message.broker !== undefined && (obj.broker = message.broker);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBrokerAccountsRequest>, I>>(object: I): QueryBrokerAccountsRequest {
    const message = createBaseQueryBrokerAccountsRequest();
    message.broker = object.broker ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBrokerAccountsResponse(): QueryBrokerAccountsResponse {
  return { accounts: [], page: undefined };
}

export const QueryBrokerAccountsResponse = {
  encode(message: QueryBrokerAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBrokerAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBrokerAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBrokerAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryBrokerAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBrokerAccountsResponse>, I>>(object: I): QueryBrokerAccountsResponse {
    const message = createBaseQueryBrokerAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryBrokerDomainsRequest(): QueryBrokerDomainsRequest {
  return { broker: "", pagination: undefined };
}

export const QueryBrokerDomainsRequest = {
  encode(message: QueryBrokerDomainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broker !== "") {
      writer.uint32(10).string(message.broker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBrokerDomainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBrokerDomainsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broker = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBrokerDomainsRequest {
    return {
      broker: isSet(object.broker) ? String(object.broker) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBrokerDomainsRequest): unknown {
    const obj: any = {};
    message.broker !== undefined && (obj.broker = message.broker);
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBrokerDomainsRequest>, I>>(object: I): QueryBrokerDomainsRequest {
    const message = createBaseQueryBrokerDomainsRequest();
    message.broker = object.broker ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBrokerDomainsResponse(): QueryBrokerDomainsResponse {
  return { domains: [], page: undefined };
}

export const QueryBrokerDomainsResponse = {
  encode(message: QueryBrokerDomainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      Domain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page !== undefined) {
      PageResponse.encode(message.page, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBrokerDomainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBrokerDomainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(Domain.decode(reader, reader.uint32()));
          break;
        case 2:
          message.page = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBrokerDomainsResponse {
    return {
      domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => Domain.fromJSON(e)) : [],
      page: isSet(object.page) ? PageResponse.fromJSON(object.page) : undefined,
    };
  },

  toJSON(message: QueryBrokerDomainsResponse): unknown {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map((e) => e ? Domain.toJSON(e) : undefined);
    } else {
      obj.domains = [];
    }
    message.page !== undefined && (obj.page = message.page ? PageResponse.toJSON(message.page) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBrokerDomainsResponse>, I>>(object: I): QueryBrokerDomainsResponse {
    const message = createBaseQueryBrokerDomainsResponse();
    message.domains = object.domains?.map((e) => Domain.fromPartial(e)) || [];
    message.page = (object.page !== undefined && object.page !== null)
      ? PageResponse.fromPartial(object.page)
      : undefined;
    return message;
  },
};

function createBaseQueryYieldRequest(): QueryYieldRequest {
  return {};
}

export const QueryYieldRequest = {
  encode(_: QueryYieldRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryYieldRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYieldRequest();
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

  fromJSON(_: any): QueryYieldRequest {
    return {};
  },

  toJSON(_: QueryYieldRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryYieldRequest>, I>>(_: I): QueryYieldRequest {
    const message = createBaseQueryYieldRequest();
    return message;
  },
};

function createBaseQueryYieldResponse(): QueryYieldResponse {
  return { yield: "" };
}

export const QueryYieldResponse = {
  encode(message: QueryYieldResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yield !== "") {
      writer.uint32(10).string(message.yield);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryYieldResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYieldResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryYieldResponse {
    return { yield: isSet(object.yield) ? String(object.yield) : "" };
  },

  toJSON(message: QueryYieldResponse): unknown {
    const obj: any = {};
    message.yield !== undefined && (obj.yield = message.yield);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryYieldResponse>, I>>(object: I): QueryYieldResponse {
    const message = createBaseQueryYieldResponse();
    message.yield = object.yield ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Domain gets a starname's domain info. */
  Domain(request: QueryDomainRequest): Promise<QueryDomainResponse>;
  /** DomainAccounts gets accounts associated with a given domain. */
  DomainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse>;
  /** Starname gets all the information associated with a starname. */
  Starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse>;
  /** OwnerAccounts gets accounts associated with a given owner. */
  OwnerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse>;
  /** OwnerDomains gets domains associated with a given owner. */
  OwnerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse>;
  /** ResourceAccounts gets accounts associated with a given resource. */
  ResourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse>;
  /** BrokerAccounts gets accounts associated with a given broker. */
  BrokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse>;
  /** BrokerDomains gets domains associated with a given broker. */
  BrokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse>;
  /** Yield estimates and retrieves the annualized yield for delegators */
  Yield(request: QueryYieldRequest): Promise<QueryYieldResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Domain = this.Domain.bind(this);
    this.DomainAccounts = this.DomainAccounts.bind(this);
    this.Starname = this.Starname.bind(this);
    this.OwnerAccounts = this.OwnerAccounts.bind(this);
    this.OwnerDomains = this.OwnerDomains.bind(this);
    this.ResourceAccounts = this.ResourceAccounts.bind(this);
    this.BrokerAccounts = this.BrokerAccounts.bind(this);
    this.BrokerDomains = this.BrokerDomains.bind(this);
    this.Yield = this.Yield.bind(this);
  }
  Domain(request: QueryDomainRequest): Promise<QueryDomainResponse> {
    const data = QueryDomainRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "Domain", data);
    return promise.then((data) => QueryDomainResponse.decode(new _m0.Reader(data)));
  }

  DomainAccounts(request: QueryDomainAccountsRequest): Promise<QueryDomainAccountsResponse> {
    const data = QueryDomainAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "DomainAccounts", data);
    return promise.then((data) => QueryDomainAccountsResponse.decode(new _m0.Reader(data)));
  }

  Starname(request: QueryStarnameRequest): Promise<QueryStarnameResponse> {
    const data = QueryStarnameRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "Starname", data);
    return promise.then((data) => QueryStarnameResponse.decode(new _m0.Reader(data)));
  }

  OwnerAccounts(request: QueryOwnerAccountsRequest): Promise<QueryOwnerAccountsResponse> {
    const data = QueryOwnerAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "OwnerAccounts", data);
    return promise.then((data) => QueryOwnerAccountsResponse.decode(new _m0.Reader(data)));
  }

  OwnerDomains(request: QueryOwnerDomainsRequest): Promise<QueryOwnerDomainsResponse> {
    const data = QueryOwnerDomainsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "OwnerDomains", data);
    return promise.then((data) => QueryOwnerDomainsResponse.decode(new _m0.Reader(data)));
  }

  ResourceAccounts(request: QueryResourceAccountsRequest): Promise<QueryResourceAccountsResponse> {
    const data = QueryResourceAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "ResourceAccounts", data);
    return promise.then((data) => QueryResourceAccountsResponse.decode(new _m0.Reader(data)));
  }

  BrokerAccounts(request: QueryBrokerAccountsRequest): Promise<QueryBrokerAccountsResponse> {
    const data = QueryBrokerAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "BrokerAccounts", data);
    return promise.then((data) => QueryBrokerAccountsResponse.decode(new _m0.Reader(data)));
  }

  BrokerDomains(request: QueryBrokerDomainsRequest): Promise<QueryBrokerDomainsResponse> {
    const data = QueryBrokerDomainsRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "BrokerDomains", data);
    return promise.then((data) => QueryBrokerDomainsResponse.decode(new _m0.Reader(data)));
  }

  Yield(request: QueryYieldRequest): Promise<QueryYieldResponse> {
    const data = QueryYieldRequest.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Query", "Yield", data);
    return promise.then((data) => QueryYieldResponse.decode(new _m0.Reader(data)));
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
