/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource } from "./types";

export const protobufPackage = "ummachain.ummacore.starname.v1beta1";

/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificate {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewCertificate is the new certificate to add */
  newCertificate: Uint8Array;
}

/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponse {
}

/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificate {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** DeleteCertificate is the certificate to delete */
  deleteCertificate: Uint8Array;
}

/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponse {
}

/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}

/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponse {
}

/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomain {
  /** Domain is the domain of the account */
  domain: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}

/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponse {
}

/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** Registerer is the user who registers this account */
  registerer: string;
  /** Resources are the blockchain addresses of the account */
  resources: Resource[];
}

/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponse {
}

/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomain {
  name: string;
  admin: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** Broker is the account that facilitated the transaction */
  broker: string;
  /** DomainType defines the type of the domain */
  domainType: string;
}

/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponse {
}

/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}

/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponse {
}

/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomain {
  /** Domain is the domain of the account */
  domain: string;
  /** Signer is the signer of the request */
  signer: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
}

/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponse {
}

/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResources {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewResources are the new resources */
  newResources: Resource[];
}

/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponse {
}

/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadata {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /**
   * NewMetadataURI is the metadata URI of the account
   * we want to update or insert
   */
  newMetadataUri: string;
}

/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponse {
}

/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccount {
  /** Domain is the domain of the account */
  domain: string;
  /** Name is the name of the account */
  name: string;
  /** Owner is the owner of the account */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewOwner is the new owner of the account */
  newOwner: string;
  /** ToReset if true, removes all old data from account */
  reset: boolean;
}

/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponse {
}

/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomain {
  /** Domain is the name of the domain */
  domain: string;
  /** Owner is the owner of the domain */
  owner: string;
  /**
   * Payer is the address of the entity that pays the product and transaction
   * fees
   */
  payer: string;
  /** NewAdmin is the  new owner of the domain */
  newAdmin: string;
  /** TransferFlag controls the operations that occurs on a domain's accounts */
  transferFlag: number;
}

/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponse {
}

function createBaseMsgAddAccountCertificate(): MsgAddAccountCertificate {
  return { domain: "", name: "", owner: "", payer: "", newCertificate: new Uint8Array() };
}

export const MsgAddAccountCertificate = {
  encode(message: MsgAddAccountCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newCertificate.length !== 0) {
      writer.uint32(42).bytes(message.newCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.newCertificate = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAccountCertificate {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newCertificate: isSet(object.newCertificate) ? bytesFromBase64(object.newCertificate) : new Uint8Array(),
    };
  },

  toJSON(message: MsgAddAccountCertificate): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.newCertificate !== undefined
      && (obj.newCertificate = base64FromBytes(
        message.newCertificate !== undefined ? message.newCertificate : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAccountCertificate>, I>>(object: I): MsgAddAccountCertificate {
    const message = createBaseMsgAddAccountCertificate();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newCertificate = object.newCertificate ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgAddAccountCertificateResponse(): MsgAddAccountCertificateResponse {
  return {};
}

export const MsgAddAccountCertificateResponse = {
  encode(_: MsgAddAccountCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountCertificateResponse();
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

  fromJSON(_: any): MsgAddAccountCertificateResponse {
    return {};
  },

  toJSON(_: MsgAddAccountCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAccountCertificateResponse>, I>>(
    _: I,
  ): MsgAddAccountCertificateResponse {
    const message = createBaseMsgAddAccountCertificateResponse();
    return message;
  },
};

function createBaseMsgDeleteAccountCertificate(): MsgDeleteAccountCertificate {
  return { domain: "", name: "", owner: "", payer: "", deleteCertificate: new Uint8Array() };
}

export const MsgDeleteAccountCertificate = {
  encode(message: MsgDeleteAccountCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.deleteCertificate.length !== 0) {
      writer.uint32(42).bytes(message.deleteCertificate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccountCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccountCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.deleteCertificate = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAccountCertificate {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      deleteCertificate: isSet(object.deleteCertificate) ? bytesFromBase64(object.deleteCertificate) : new Uint8Array(),
    };
  },

  toJSON(message: MsgDeleteAccountCertificate): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.deleteCertificate !== undefined
      && (obj.deleteCertificate = base64FromBytes(
        message.deleteCertificate !== undefined ? message.deleteCertificate : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAccountCertificate>, I>>(object: I): MsgDeleteAccountCertificate {
    const message = createBaseMsgDeleteAccountCertificate();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.deleteCertificate = object.deleteCertificate ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgDeleteAccountCertificateResponse(): MsgDeleteAccountCertificateResponse {
  return {};
}

export const MsgDeleteAccountCertificateResponse = {
  encode(_: MsgDeleteAccountCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccountCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccountCertificateResponse();
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

  fromJSON(_: any): MsgDeleteAccountCertificateResponse {
    return {};
  },

  toJSON(_: MsgDeleteAccountCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAccountCertificateResponse>, I>>(
    _: I,
  ): MsgDeleteAccountCertificateResponse {
    const message = createBaseMsgDeleteAccountCertificateResponse();
    return message;
  },
};

function createBaseMsgDeleteAccount(): MsgDeleteAccount {
  return { domain: "", name: "", owner: "", payer: "" };
}

export const MsgDeleteAccount = {
  encode(message: MsgDeleteAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
    };
  },

  toJSON(message: MsgDeleteAccount): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAccount>, I>>(object: I): MsgDeleteAccount {
    const message = createBaseMsgDeleteAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
};

function createBaseMsgDeleteAccountResponse(): MsgDeleteAccountResponse {
  return {};
}

export const MsgDeleteAccountResponse = {
  encode(_: MsgDeleteAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAccountResponse();
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

  fromJSON(_: any): MsgDeleteAccountResponse {
    return {};
  },

  toJSON(_: MsgDeleteAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAccountResponse>, I>>(_: I): MsgDeleteAccountResponse {
    const message = createBaseMsgDeleteAccountResponse();
    return message;
  },
};

function createBaseMsgDeleteDomain(): MsgDeleteDomain {
  return { domain: "", owner: "", payer: "" };
}

export const MsgDeleteDomain = {
  encode(message: MsgDeleteDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.payer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
    };
  },

  toJSON(message: MsgDeleteDomain): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDomain>, I>>(object: I): MsgDeleteDomain {
    const message = createBaseMsgDeleteDomain();
    message.domain = object.domain ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
};

function createBaseMsgDeleteDomainResponse(): MsgDeleteDomainResponse {
  return {};
}

export const MsgDeleteDomainResponse = {
  encode(_: MsgDeleteDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDomainResponse();
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

  fromJSON(_: any): MsgDeleteDomainResponse {
    return {};
  },

  toJSON(_: MsgDeleteDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDomainResponse>, I>>(_: I): MsgDeleteDomainResponse {
    const message = createBaseMsgDeleteDomainResponse();
    return message;
  },
};

function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return { domain: "", name: "", owner: "", payer: "", broker: "", registerer: "", resources: [] };
}

export const MsgRegisterAccount = {
  encode(message: MsgRegisterAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.broker !== "") {
      writer.uint32(42).string(message.broker);
    }
    if (message.registerer !== "") {
      writer.uint32(50).string(message.registerer);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.broker = reader.string();
          break;
        case 6:
          message.registerer = reader.string();
          break;
        case 7:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      broker: isSet(object.broker) ? String(object.broker) : "",
      registerer: isSet(object.registerer) ? String(object.registerer) : "",
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgRegisterAccount): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.broker !== undefined && (obj.broker = message.broker);
    message.registerer !== undefined && (obj.registerer = message.registerer);
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAccount>, I>>(object: I): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.broker = object.broker ?? "";
    message.registerer = object.registerer ?? "";
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}

export const MsgRegisterAccountResponse = {
  encode(_: MsgRegisterAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountResponse();
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

  fromJSON(_: any): MsgRegisterAccountResponse {
    return {};
  },

  toJSON(_: MsgRegisterAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAccountResponse>, I>>(_: I): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  },
};

function createBaseMsgRegisterDomain(): MsgRegisterDomain {
  return { name: "", admin: "", payer: "", broker: "", domainType: "" };
}

export const MsgRegisterDomain = {
  encode(message: MsgRegisterDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.broker !== "") {
      writer.uint32(34).string(message.broker);
    }
    if (message.domainType !== "") {
      writer.uint32(42).string(message.domainType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.broker = reader.string();
          break;
        case 5:
          message.domainType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterDomain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      broker: isSet(object.broker) ? String(object.broker) : "",
      domainType: isSet(object.domainType) ? String(object.domainType) : "",
    };
  },

  toJSON(message: MsgRegisterDomain): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.admin !== undefined && (obj.admin = message.admin);
    message.payer !== undefined && (obj.payer = message.payer);
    message.broker !== undefined && (obj.broker = message.broker);
    message.domainType !== undefined && (obj.domainType = message.domainType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterDomain>, I>>(object: I): MsgRegisterDomain {
    const message = createBaseMsgRegisterDomain();
    message.name = object.name ?? "";
    message.admin = object.admin ?? "";
    message.payer = object.payer ?? "";
    message.broker = object.broker ?? "";
    message.domainType = object.domainType ?? "";
    return message;
  },
};

function createBaseMsgRegisterDomainResponse(): MsgRegisterDomainResponse {
  return {};
}

export const MsgRegisterDomainResponse = {
  encode(_: MsgRegisterDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDomainResponse();
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

  fromJSON(_: any): MsgRegisterDomainResponse {
    return {};
  },

  toJSON(_: MsgRegisterDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterDomainResponse>, I>>(_: I): MsgRegisterDomainResponse {
    const message = createBaseMsgRegisterDomainResponse();
    return message;
  },
};

function createBaseMsgRenewAccount(): MsgRenewAccount {
  return { domain: "", name: "", signer: "", payer: "" };
}

export const MsgRenewAccount = {
  encode(message: MsgRenewAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenewAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
    };
  },

  toJSON(message: MsgRenewAccount): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.signer !== undefined && (obj.signer = message.signer);
    message.payer !== undefined && (obj.payer = message.payer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRenewAccount>, I>>(object: I): MsgRenewAccount {
    const message = createBaseMsgRenewAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.signer = object.signer ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
};

function createBaseMsgRenewAccountResponse(): MsgRenewAccountResponse {
  return {};
}

export const MsgRenewAccountResponse = {
  encode(_: MsgRenewAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewAccountResponse();
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

  fromJSON(_: any): MsgRenewAccountResponse {
    return {};
  },

  toJSON(_: MsgRenewAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRenewAccountResponse>, I>>(_: I): MsgRenewAccountResponse {
    const message = createBaseMsgRenewAccountResponse();
    return message;
  },
};

function createBaseMsgRenewDomain(): MsgRenewDomain {
  return { domain: "", signer: "", payer: "" };
}

export const MsgRenewDomain = {
  encode(message: MsgRenewDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        case 3:
          message.payer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenewDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
    };
  },

  toJSON(message: MsgRenewDomain): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.signer !== undefined && (obj.signer = message.signer);
    message.payer !== undefined && (obj.payer = message.payer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRenewDomain>, I>>(object: I): MsgRenewDomain {
    const message = createBaseMsgRenewDomain();
    message.domain = object.domain ?? "";
    message.signer = object.signer ?? "";
    message.payer = object.payer ?? "";
    return message;
  },
};

function createBaseMsgRenewDomainResponse(): MsgRenewDomainResponse {
  return {};
}

export const MsgRenewDomainResponse = {
  encode(_: MsgRenewDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRenewDomainResponse();
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

  fromJSON(_: any): MsgRenewDomainResponse {
    return {};
  },

  toJSON(_: MsgRenewDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRenewDomainResponse>, I>>(_: I): MsgRenewDomainResponse {
    const message = createBaseMsgRenewDomainResponse();
    return message;
  },
};

function createBaseMsgReplaceAccountResources(): MsgReplaceAccountResources {
  return { domain: "", name: "", owner: "", payer: "", newResources: [] };
}

export const MsgReplaceAccountResources = {
  encode(message: MsgReplaceAccountResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    for (const v of message.newResources) {
      Resource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceAccountResources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReplaceAccountResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.newResources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReplaceAccountResources {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newResources: Array.isArray(object?.newResources)
        ? object.newResources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgReplaceAccountResources): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    if (message.newResources) {
      obj.newResources = message.newResources.map((e) => e ? Resource.toJSON(e) : undefined);
    } else {
      obj.newResources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceAccountResources>, I>>(object: I): MsgReplaceAccountResources {
    const message = createBaseMsgReplaceAccountResources();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newResources = object.newResources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgReplaceAccountResourcesResponse(): MsgReplaceAccountResourcesResponse {
  return {};
}

export const MsgReplaceAccountResourcesResponse = {
  encode(_: MsgReplaceAccountResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceAccountResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReplaceAccountResourcesResponse();
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

  fromJSON(_: any): MsgReplaceAccountResourcesResponse {
    return {};
  },

  toJSON(_: MsgReplaceAccountResourcesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceAccountResourcesResponse>, I>>(
    _: I,
  ): MsgReplaceAccountResourcesResponse {
    const message = createBaseMsgReplaceAccountResourcesResponse();
    return message;
  },
};

function createBaseMsgReplaceAccountMetadata(): MsgReplaceAccountMetadata {
  return { domain: "", name: "", owner: "", payer: "", newMetadataUri: "" };
}

export const MsgReplaceAccountMetadata = {
  encode(message: MsgReplaceAccountMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newMetadataUri !== "") {
      writer.uint32(42).string(message.newMetadataUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceAccountMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReplaceAccountMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.newMetadataUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReplaceAccountMetadata {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newMetadataUri: isSet(object.newMetadataUri) ? String(object.newMetadataUri) : "",
    };
  },

  toJSON(message: MsgReplaceAccountMetadata): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.newMetadataUri !== undefined && (obj.newMetadataUri = message.newMetadataUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceAccountMetadata>, I>>(object: I): MsgReplaceAccountMetadata {
    const message = createBaseMsgReplaceAccountMetadata();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newMetadataUri = object.newMetadataUri ?? "";
    return message;
  },
};

function createBaseMsgReplaceAccountMetadataResponse(): MsgReplaceAccountMetadataResponse {
  return {};
}

export const MsgReplaceAccountMetadataResponse = {
  encode(_: MsgReplaceAccountMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceAccountMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReplaceAccountMetadataResponse();
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

  fromJSON(_: any): MsgReplaceAccountMetadataResponse {
    return {};
  },

  toJSON(_: MsgReplaceAccountMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceAccountMetadataResponse>, I>>(
    _: I,
  ): MsgReplaceAccountMetadataResponse {
    const message = createBaseMsgReplaceAccountMetadataResponse();
    return message;
  },
};

function createBaseMsgTransferAccount(): MsgTransferAccount {
  return { domain: "", name: "", owner: "", payer: "", newOwner: "", reset: false };
}

export const MsgTransferAccount = {
  encode(message: MsgTransferAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(34).string(message.payer);
    }
    if (message.newOwner !== "") {
      writer.uint32(42).string(message.newOwner);
    }
    if (message.reset === true) {
      writer.uint32(48).bool(message.reset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.payer = reader.string();
          break;
        case 5:
          message.newOwner = reader.string();
          break;
        case 6:
          message.reset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferAccount {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : "",
      reset: isSet(object.reset) ? Boolean(object.reset) : false,
    };
  },

  toJSON(message: MsgTransferAccount): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    message.reset !== undefined && (obj.reset = message.reset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferAccount>, I>>(object: I): MsgTransferAccount {
    const message = createBaseMsgTransferAccount();
    message.domain = object.domain ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newOwner = object.newOwner ?? "";
    message.reset = object.reset ?? false;
    return message;
  },
};

function createBaseMsgTransferAccountResponse(): MsgTransferAccountResponse {
  return {};
}

export const MsgTransferAccountResponse = {
  encode(_: MsgTransferAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferAccountResponse();
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

  fromJSON(_: any): MsgTransferAccountResponse {
    return {};
  },

  toJSON(_: MsgTransferAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferAccountResponse>, I>>(_: I): MsgTransferAccountResponse {
    const message = createBaseMsgTransferAccountResponse();
    return message;
  },
};

function createBaseMsgTransferDomain(): MsgTransferDomain {
  return { domain: "", owner: "", payer: "", newAdmin: "", transferFlag: 0 };
}

export const MsgTransferDomain = {
  encode(message: MsgTransferDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.newAdmin !== "") {
      writer.uint32(34).string(message.newAdmin);
    }
    if (message.transferFlag !== 0) {
      writer.uint32(40).int64(message.transferFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDomain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.newAdmin = reader.string();
          break;
        case 5:
          message.transferFlag = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferDomain {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      payer: isSet(object.payer) ? String(object.payer) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      transferFlag: isSet(object.transferFlag) ? Number(object.transferFlag) : 0,
    };
  },

  toJSON(message: MsgTransferDomain): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.owner !== undefined && (obj.owner = message.owner);
    message.payer !== undefined && (obj.payer = message.payer);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.transferFlag !== undefined && (obj.transferFlag = Math.round(message.transferFlag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferDomain>, I>>(object: I): MsgTransferDomain {
    const message = createBaseMsgTransferDomain();
    message.domain = object.domain ?? "";
    message.owner = object.owner ?? "";
    message.payer = object.payer ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.transferFlag = object.transferFlag ?? 0;
    return message;
  },
};

function createBaseMsgTransferDomainResponse(): MsgTransferDomainResponse {
  return {};
}

export const MsgTransferDomainResponse = {
  encode(_: MsgTransferDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDomainResponse();
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

  fromJSON(_: any): MsgTransferDomainResponse {
    return {};
  },

  toJSON(_: MsgTransferDomainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferDomainResponse>, I>>(_: I): MsgTransferDomainResponse {
    const message = createBaseMsgTransferDomainResponse();
    return message;
  },
};

/** Msg defines the starname Msg service. */
export interface Msg {
  /** AddAccountCertificate adds a certificate to an Account */
  AddAccountCertificate(request: MsgAddAccountCertificate): Promise<MsgAddAccountCertificateResponse>;
  /** DeleteAccount registers a Domain */
  DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse>;
  /** DeleteAccountCertificate deletes a certificate from an account */
  DeleteAccountCertificate(request: MsgDeleteAccountCertificate): Promise<MsgDeleteAccountCertificateResponse>;
  /** DeleteDomain registers a Domain */
  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse>;
  /** RegisterAccount registers an Account */
  RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  /** RegisterDomain registers a Domain */
  RegisterDomain(request: MsgRegisterDomain): Promise<MsgRegisterDomainResponse>;
  /** RenewAccount registers a Domain */
  RenewAccount(request: MsgRenewAccount): Promise<MsgRenewAccountResponse>;
  /** RenewDomain registers a Domain */
  RenewDomain(request: MsgRenewDomain): Promise<MsgRenewDomainResponse>;
  /** ReplaceAccountMetadata registers a Domain */
  ReplaceAccountMetadata(request: MsgReplaceAccountMetadata): Promise<MsgReplaceAccountMetadataResponse>;
  /** ReplaceAccountResources registers a Domain */
  ReplaceAccountResources(request: MsgReplaceAccountResources): Promise<MsgReplaceAccountResourcesResponse>;
  /** TransferAccount registers a Domain */
  TransferAccount(request: MsgTransferAccount): Promise<MsgTransferAccountResponse>;
  /** TransferDomain registers a Domain */
  TransferDomain(request: MsgTransferDomain): Promise<MsgTransferDomainResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddAccountCertificate = this.AddAccountCertificate.bind(this);
    this.DeleteAccount = this.DeleteAccount.bind(this);
    this.DeleteAccountCertificate = this.DeleteAccountCertificate.bind(this);
    this.DeleteDomain = this.DeleteDomain.bind(this);
    this.RegisterAccount = this.RegisterAccount.bind(this);
    this.RegisterDomain = this.RegisterDomain.bind(this);
    this.RenewAccount = this.RenewAccount.bind(this);
    this.RenewDomain = this.RenewDomain.bind(this);
    this.ReplaceAccountMetadata = this.ReplaceAccountMetadata.bind(this);
    this.ReplaceAccountResources = this.ReplaceAccountResources.bind(this);
    this.TransferAccount = this.TransferAccount.bind(this);
    this.TransferDomain = this.TransferDomain.bind(this);
  }
  AddAccountCertificate(request: MsgAddAccountCertificate): Promise<MsgAddAccountCertificateResponse> {
    const data = MsgAddAccountCertificate.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "AddAccountCertificate", data);
    return promise.then((data) => MsgAddAccountCertificateResponse.decode(new _m0.Reader(data)));
  }

  DeleteAccount(request: MsgDeleteAccount): Promise<MsgDeleteAccountResponse> {
    const data = MsgDeleteAccount.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "DeleteAccount", data);
    return promise.then((data) => MsgDeleteAccountResponse.decode(new _m0.Reader(data)));
  }

  DeleteAccountCertificate(request: MsgDeleteAccountCertificate): Promise<MsgDeleteAccountCertificateResponse> {
    const data = MsgDeleteAccountCertificate.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "DeleteAccountCertificate", data);
    return promise.then((data) => MsgDeleteAccountCertificateResponse.decode(new _m0.Reader(data)));
  }

  DeleteDomain(request: MsgDeleteDomain): Promise<MsgDeleteDomainResponse> {
    const data = MsgDeleteDomain.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "DeleteDomain", data);
    return promise.then((data) => MsgDeleteDomainResponse.decode(new _m0.Reader(data)));
  }

  RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "RegisterAccount", data);
    return promise.then((data) => MsgRegisterAccountResponse.decode(new _m0.Reader(data)));
  }

  RegisterDomain(request: MsgRegisterDomain): Promise<MsgRegisterDomainResponse> {
    const data = MsgRegisterDomain.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "RegisterDomain", data);
    return promise.then((data) => MsgRegisterDomainResponse.decode(new _m0.Reader(data)));
  }

  RenewAccount(request: MsgRenewAccount): Promise<MsgRenewAccountResponse> {
    const data = MsgRenewAccount.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "RenewAccount", data);
    return promise.then((data) => MsgRenewAccountResponse.decode(new _m0.Reader(data)));
  }

  RenewDomain(request: MsgRenewDomain): Promise<MsgRenewDomainResponse> {
    const data = MsgRenewDomain.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "RenewDomain", data);
    return promise.then((data) => MsgRenewDomainResponse.decode(new _m0.Reader(data)));
  }

  ReplaceAccountMetadata(request: MsgReplaceAccountMetadata): Promise<MsgReplaceAccountMetadataResponse> {
    const data = MsgReplaceAccountMetadata.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "ReplaceAccountMetadata", data);
    return promise.then((data) => MsgReplaceAccountMetadataResponse.decode(new _m0.Reader(data)));
  }

  ReplaceAccountResources(request: MsgReplaceAccountResources): Promise<MsgReplaceAccountResourcesResponse> {
    const data = MsgReplaceAccountResources.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "ReplaceAccountResources", data);
    return promise.then((data) => MsgReplaceAccountResourcesResponse.decode(new _m0.Reader(data)));
  }

  TransferAccount(request: MsgTransferAccount): Promise<MsgTransferAccountResponse> {
    const data = MsgTransferAccount.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "TransferAccount", data);
    return promise.then((data) => MsgTransferAccountResponse.decode(new _m0.Reader(data)));
  }

  TransferDomain(request: MsgTransferDomain): Promise<MsgTransferDomainResponse> {
    const data = MsgTransferDomain.encode(request).finish();
    const promise = this.rpc.request("ummachain.ummacore.starname.v1beta1.Msg", "TransferDomain", data);
    return promise.then((data) => MsgTransferDomainResponse.decode(new _m0.Reader(data)));
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
