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

export interface V1Beta1Config {
  /**
   * Configurer is the configuration owner, the addresses allowed to handle fees
   * and register domains with no superuser
   */
  configurer?: string;

  /**
   * ValidDomainName defines a regexp that determines if a domain name is valid
   * or not
   */
  valid_domain_name?: string;

  /**
   * ValidAccountName defines a regexp that determines if an account name is
   * valid or not
   */
  valid_account_name?: string;

  /** ValidURI defines a regexp that determines if resource uri is valid or not */
  valid_uri?: string;

  /** ValidResource determines a regexp for a resource content */
  valid_resource?: string;

  /**
   * DomainRenewalPeriod defines the duration of the domain renewal period in
   * seconds
   */
  domain_renewal_period?: string;

  /**
   * DomainRenewalCountMax defines maximum number of domain renewals a user can
   * do
   * @format int64
   */
  domain_renewal_count_max?: number;

  /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
  domain_grace_period?: string;

  /**
   * AccountRenewalPeriod defines the duration of the account renewal period in
   * seconds
   */
  account_renewal_period?: string;

  /**
   * AccountRenewalCountMax defines maximum number of account renewals a user
   * can do
   * @format int64
   */
  account_renewal_count_max?: number;

  /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
  account_grace_period?: string;

  /**
   * ResourcesMax defines maximum number of resources could be saved under an
   * account
   * @format int64
   */
  resources_max?: number;

  /**
   * CertificateSizeMax defines maximum size of a certificate that could be
   * saved under an account
   * @format uint64
   */
  certificate_size_max?: string;

  /**
   * CertificateCountMax defines maximum number of certificates that could be
   * saved under an account
   * @format int64
   */
  certificate_count_max?: number;

  /**
   * MetadataSizeMax defines maximum size of metadata that could be saved under
   * an account
   * @format uint64
   */
  metadata_size_max?: string;

  /**
   * EscrowBroker defines an address that will receive a commission for
   * completed escrows
   */
  escrow_broker?: string;

  /**
   * EscrowCommission defines the commission taken by the broker for a completed
   * escrow, between 0 (no commission) and 1 (100% commission)
   */
  escrow_commission?: string;

  /** EscrowPeriod defines the maximum duration of an escrow in seconds */
  escrow_max_period?: string;
}

export interface V1Beta1Fees {
  /** FeeCoinDenom defines the denominator of the coin used to process fees */
  fee_coin_denom?: string;

  /** FeeCoinPrice defines the price of the coin */
  fee_coin_price?: string;

  /** FeeDefault is the parameter defining the default fee */
  fee_default?: string;

  /**
   * RegisterAccountClosed is the fee to be paid to register an account in a
   * closed domain
   */
  register_account_closed?: string;

  /**
   * RegisterAccountOpen is the fee to be paid to register an account in an open
   * domain
   */
  register_account_open?: string;

  /**
   * TransferAccountClosed is the fee to be paid to register an account in a
   * closed domain
   */
  transfer_account_closed?: string;

  /**
   * TransferAccountOpen is the fee to be paid to register an account in an open
   * domain
   */
  transfer_account_open?: string;

  /**
   * ReplaceAccountResources is the fee to be paid to replace account's
   * resources
   */
  replace_account_resources?: string;

  /**
   * AddAccountCertificate is the fee to be paid to add a certificate to an
   * account
   */
  add_account_certificate?: string;

  /**
   * DelAccountCertificate is the feed to be paid to delete a certificate in an
   * account
   */
  del_account_certificate?: string;

  /** SetAccountMetadata is the fee to be paid to set account's metadata */
  set_account_metadata?: string;

  /**
   * RegisterDomain1 is the fee to be paid to register a domain with one
   * character
   */
  register_domain_1?: string;

  /**
   * RegisterDomain2 is the fee to be paid to register a domain with two
   * characters
   */
  register_domain_2?: string;

  /**
   * RegisterDomain3 is the fee to be paid to register a domain with three
   * characters
   */
  register_domain_3?: string;

  /**
   * RegisterDomain4 is the fee to be paid to register a domain with four
   * characters
   */
  register_domain_4?: string;

  /**
   * RegisterDomain5 is the fee to be paid to register a domain with five
   * characters
   */
  register_domain_5?: string;

  /**
   * RegisterDomainDefault is the fee to be paid to register a domain with more
   * than five characters
   */
  register_domain_default?: string;

  /**
   * register_open_domain_multiplier is the multiplication applied to fees in
   * register domain operations if they're of open type
   */
  register_open_domain_multiplier?: string;

  /** transfer_domain_closed is the fee to be paid to transfer a closed domain */
  transfer_domain_closed?: string;

  /** transfer_domain_open is the fee to be paid to transfer open domains */
  transfer_domain_open?: string;

  /** renew_domain_open is the fee to be paid to renew an open domain */
  renew_domain_open?: string;

  /** create_escrow is the fee to be paid to create an escrow */
  create_escrow?: string;

  /** update_escrow is the fee to be paid to update an escrow */
  update_escrow?: string;

  /** transfer_to_escrow is the fee to be paid to transfer coins to an escrow */
  transfer_to_escrow?: string;

  /**
   * refund_escrow is the fee to be paid to refund the account or domain placed
   * in an escrow
   */
  refund_escrow?: string;
}

/**
* QueryConfigResponse is the response type for the Query/Configuration RPC
method.
*/
export interface V1Beta1QueryConfigResponse {
  /** Configuration is the starname configuration. */
  config?: V1Beta1Config;
}

export interface V1Beta1QueryFeesResponse {
  /** Fees is the starname product fee object. */
  fees?: V1Beta1Fees;
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
 * @title configuration/v1beta1/msgs.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFees
   * @summary Fees gets starname product fees.
   * @request GET:/starname/v1beta1/configuration/fees
   */
  queryFees = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryFeesResponse, RpcStatus>({
      path: `/starname/v1beta1/configuration/fees`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryConfig
   * @summary Config gets starname configuration.
   * @request GET:/starname/v1beta1/configuration/params
   */
  queryConfig = (params: RequestParams = {}) =>
    this.request<V1Beta1QueryConfigResponse, RpcStatus>({
      path: `/starname/v1beta1/configuration/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
