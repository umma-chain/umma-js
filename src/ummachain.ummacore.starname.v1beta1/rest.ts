/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1Beta1Account {
  /** Domain references the domain this account belongs to */
  domain?: string;

  /** Name is the name of the account */
  name?: string;

  /**
   * Owner is the address that owns the account
   * @format byte
   */
  owner?: string;

  /**
   * Broker identifies an entity that facilitated the transaction of the account
   * and can be empty
   * @format byte
   */
  broker?: string;

  /**
   * ValidUntil defines a unix timestamp of the expiration of the account in
   * seconds
   * @format int64
   */
  valid_until?: string;

  /** Resources is the list of resources an account resolves to */
  resources?: V1Beta1Resource[];

  /**
   * Certificates contains the list of certificates to identify the account
   * owner
   */
  certificates?: string[];

  /** MetadataURI contains a link to extra information regarding the account */
  metadata_uri?: string;
}

export interface V1Beta1Domain {
  /** Name is the name of the domain */
  name?: string;

  /**
   * Admin is the owner of the domain
   * @format byte
   */
  admin?: string;

  /** @format byte */
  broker?: string;

  /**
   * ValidUntil is a unix timestamp defines the time when the domain will become
   * invalid in seconds
   * @format int64
   */
  valid_until?: string;

  /** Type defines the type of the domain */
  type?: string;
}

/**
 * MsgAddAccountCertificateResponse returns an empty response.
 */
export type V1Beta1MsgAddAccountCertificateResponse = object;

/**
 * MsgDeleteAccountCertificateResponse returns an empty response.
 */
export type V1Beta1MsgDeleteAccountCertificateResponse = object;

/**
 * MsgDeleteAccountResponse returns an empty response.
 */
export type V1Beta1MsgDeleteAccountResponse = object;

/**
 * MsgDeleteDomainResponse returns an empty response.
 */
export type V1Beta1MsgDeleteDomainResponse = object;

/**
 * MsgRegisterAccountResponse returns an empty response.
 */
export type V1Beta1MsgRegisterAccountResponse = object;

/**
 * MsgRegisterDomainResponse returns an empty response.
 */
export type V1Beta1MsgRegisterDomainResponse = object;

/**
 * MsgRenewAccountResponse returns an empty response.
 */
export type V1Beta1MsgRenewAccountResponse = object;

/**
 * MsgRegisterDomain returns an empty response.
 */
export type V1Beta1MsgRenewDomainResponse = object;

/**
 * MsgReplaceAccountMetadataResponse returns an empty response.
 */
export type V1Beta1MsgReplaceAccountMetadataResponse = object;

export type V1Beta1MsgReplaceAccountResourcesResponse = object;

/**
 * MsgTransferAccountResponse returns an empty response.
 */
export type V1Beta1MsgTransferAccountResponse = object;

/**
 * MsgTransferDomainResponse returns an empty response.
 */
export type V1Beta1MsgTransferDomainResponse = object;

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

/**
* QueryBrokerAccountsResponse is the response type for the Query/BrokerAccounts
RPC method.
*/
export interface V1Beta1QueryBrokerAccountsResponse {
  /** Accounts is the accounts associated with broker. */
  accounts?: V1Beta1Account[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
* QueryBrokerDomainsResponse is the response type for the Query/BrokerDomains
RPC method.
*/
export interface V1Beta1QueryBrokerDomainsResponse {
  /** Accounts is the accounts associated with broker. */
  domains?: V1Beta1Domain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
* QueryDomainAccountsResponse is the response type for the Query/DomainAccounts
RPC method.
*/
export interface V1Beta1QueryDomainAccountsResponse {
  /** Accounts is the accounts associated with the domain. */
  accounts?: V1Beta1Account[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
 * QueryDomainResponse is the response type for the Query/Domain RPC method.
 */
export interface V1Beta1QueryDomainResponse {
  /** Domain is the information associated with the domain. */
  domain?: V1Beta1Domain;
}

/**
* QueryOwnerAccountsResponse is the response type for the Query/OwnerAccounts
RPC method.
*/
export interface V1Beta1QueryOwnerAccountsResponse {
  /** Accounts is the accounts associated with owner. */
  accounts?: V1Beta1Account[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
* QueryOwnerDomainsResponse is the response type for the Query/OwnerDomains RPC
method.
*/
export interface V1Beta1QueryOwnerDomainsResponse {
  /** Accounts is the accounts associated with owner. */
  domains?: V1Beta1Domain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
* QueryResourceAccountsResponse is the response type for the
Query/ResourceAccounts RPC method.
*/
export interface V1Beta1QueryResourceAccountsResponse {
  /** Accounts are the accounts associated with the resource. */
  accounts?: V1Beta1Account[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  page?: V1Beta1PageResponse;
}

/**
 * QueryStarnameResponse is the response type for the Query/Starname RPC method.
 */
export interface V1Beta1QueryStarnameResponse {
  /** Account is the information associated with the starname. */
  account?: V1Beta1Account;
}

/**
 * QueryYieldResponse is the response type for the Query/Yield RPC method.
 */
export interface V1Beta1QueryYieldResponse {
  yield?: string;
}

export interface V1Beta1Resource {
  /** URI defines the ID of the resource */
  uri?: string;

  /** Resource is the resource */
  resource?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title starname/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryStarname
   * @summary Starname gets all the information associated with a starname.
   * @request GET:/starname/starname/account/{starname}
   */
  queryStarname = (starname: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryStarnameResponse, RpcStatus>({
      path: `/starname/starname/account/${starname}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBrokerAccounts
   * @summary BrokerAccounts gets accounts associated with a given broker.
   * @request GET:/starname/starname/accounts/broker/{broker}
   */
  queryBrokerAccounts = (
    broker: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryBrokerAccountsResponse, RpcStatus>({
      path: `/starname/starname/accounts/broker/${broker}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainAccounts
   * @summary DomainAccounts gets accounts associated with a given domain.
   * @request GET:/starname/starname/accounts/domain/{domain}
   */
  queryDomainAccounts = (
    domain: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryDomainAccountsResponse, RpcStatus>({
      path: `/starname/starname/accounts/domain/${domain}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOwnerAccounts
   * @summary OwnerAccounts gets accounts associated with a given owner.
   * @request GET:/starname/starname/accounts/owner/{owner}
   */
  queryOwnerAccounts = (
    owner: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryOwnerAccountsResponse, RpcStatus>({
      path: `/starname/starname/accounts/owner/${owner}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResourceAccounts
   * @summary ResourceAccounts gets accounts associated with a given resource.
   * @request GET:/starname/starname/accounts/resource/{uri}/{resource}
   */
  queryResourceAccounts = (
    uri: string,
    resource: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryResourceAccountsResponse, RpcStatus>({
      path: `/starname/starname/accounts/resource/${uri}/${resource}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomain
   * @summary Domain gets a starname's domain info.
   * @request GET:/starname/starname/domain/{name}
   */
  queryDomain = (name: string, params: RequestParams = {}) =>
    this.request<V1Beta1QueryDomainResponse, RpcStatus>({
      path: `/starname/starname/domain/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBrokerDomains
   * @summary BrokerDomains gets domains associated with a given broker.
   * @request GET:/starname/starname/domains/broker/{broker}
   */
  queryBrokerDomains = (
    broker: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryBrokerDomainsResponse, RpcStatus>({
      path: `/starname/starname/domains/broker/${broker}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOwnerDomains
   * @summary OwnerDomains gets domains associated with a given owner.
   * @request GET:/starname/starname/domains/owner/{owner}
   */
  queryOwnerDomains = (
    owner: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1Beta1QueryOwnerDomainsResponse, RpcStatus>({
      path: `/starname/starname/domains/owner/${owner}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryYield
   * @summary Yield estimates and retrieves the annualized yield for delegators
   * @request GET:/starname/starname/yield
   */
  queryYield = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryYieldResponse, RpcStatus>({
      path: `/starname/starname/yield`,
      method: "GET",
      format: "json",
      ...params,
    });
}
