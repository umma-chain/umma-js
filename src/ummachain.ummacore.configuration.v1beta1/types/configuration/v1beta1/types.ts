/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "ummachain.ummacore.configuration.v1beta1";

/** Config is the configuration of the network */
export interface Config {
  /**
   * Configurer is the configuration owner, the addresses allowed to handle fees
   * and register domains with no superuser
   */
  configurer: string;
  /**
   * ValidDomainName defines a regexp that determines if a domain name is valid
   * or not
   */
  validDomainName: string;
  /**
   * ValidAccountName defines a regexp that determines if an account name is
   * valid or not
   */
  validAccountName: string;
  /** ValidURI defines a regexp that determines if resource uri is valid or not */
  validUri: string;
  /** ValidResource determines a regexp for a resource content */
  validResource: string;
  /**
   * DomainRenewalPeriod defines the duration of the domain renewal period in
   * seconds
   */
  domainRenewalPeriod:
    | Duration
    | undefined;
  /**
   * DomainRenewalCountMax defines maximum number of domain renewals a user can
   * do
   */
  domainRenewalCountMax: number;
  /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
  domainGracePeriod:
    | Duration
    | undefined;
  /**
   * AccountRenewalPeriod defines the duration of the account renewal period in
   * seconds
   */
  accountRenewalPeriod:
    | Duration
    | undefined;
  /**
   * AccountRenewalCountMax defines maximum number of account renewals a user
   * can do
   */
  accountRenewalCountMax: number;
  /** DomainGracePeriod defines the grace period for a domain deletion in seconds */
  accountGracePeriod:
    | Duration
    | undefined;
  /**
   * ResourcesMax defines maximum number of resources could be saved under an
   * account
   */
  resourcesMax: number;
  /**
   * CertificateSizeMax defines maximum size of a certificate that could be
   * saved under an account
   */
  certificateSizeMax: number;
  /**
   * CertificateCountMax defines maximum number of certificates that could be
   * saved under an account
   */
  certificateCountMax: number;
  /**
   * MetadataSizeMax defines maximum size of metadata that could be saved under
   * an account
   */
  metadataSizeMax: number;
  /**
   * EscrowBroker defines an address that will receive a commission for
   * completed escrows
   */
  escrowBroker: string;
  /**
   * EscrowCommission defines the commission taken by the broker for a completed
   * escrow, between 0 (no commission) and 1 (100% commission)
   */
  escrowCommission: string;
  /** EscrowPeriod defines the maximum duration of an escrow in seconds */
  escrowMaxPeriod: Duration | undefined;
}

/**
 * Fees contains different type of fees to calculate coins to detract when
 * processing different messages
 */
export interface Fees {
  /** FeeCoinDenom defines the denominator of the coin used to process fees */
  feeCoinDenom: string;
  /** FeeCoinPrice defines the price of the coin */
  feeCoinPrice: string;
  /** FeeDefault is the parameter defining the default fee */
  feeDefault: string;
  /**
   * RegisterAccountClosed is the fee to be paid to register an account in a
   * closed domain
   */
  registerAccountClosed: string;
  /**
   * RegisterAccountOpen is the fee to be paid to register an account in an open
   * domain
   */
  registerAccountOpen: string;
  /**
   * TransferAccountClosed is the fee to be paid to register an account in a
   * closed domain
   */
  transferAccountClosed: string;
  /**
   * TransferAccountOpen is the fee to be paid to register an account in an open
   * domain
   */
  transferAccountOpen: string;
  /**
   * ReplaceAccountResources is the fee to be paid to replace account's
   * resources
   */
  replaceAccountResources: string;
  /**
   * AddAccountCertificate is the fee to be paid to add a certificate to an
   * account
   */
  addAccountCertificate: string;
  /**
   * DelAccountCertificate is the feed to be paid to delete a certificate in an
   * account
   */
  delAccountCertificate: string;
  /** SetAccountMetadata is the fee to be paid to set account's metadata */
  setAccountMetadata: string;
  /**
   * RegisterDomain1 is the fee to be paid to register a domain with one
   * character
   */
  registerDomain1: string;
  /**
   * RegisterDomain2 is the fee to be paid to register a domain with two
   * characters
   */
  registerDomain2: string;
  /**
   * RegisterDomain3 is the fee to be paid to register a domain with three
   * characters
   */
  registerDomain3: string;
  /**
   * RegisterDomain4 is the fee to be paid to register a domain with four
   * characters
   */
  registerDomain4: string;
  /**
   * RegisterDomain5 is the fee to be paid to register a domain with five
   * characters
   */
  registerDomain5: string;
  /**
   * RegisterDomainDefault is the fee to be paid to register a domain with more
   * than five characters
   */
  registerDomainDefault: string;
  /**
   * register_open_domain_multiplier is the multiplication applied to fees in
   * register domain operations if they're of open type
   */
  registerOpenDomainMultiplier: string;
  /** transfer_domain_closed is the fee to be paid to transfer a closed domain */
  transferDomainClosed: string;
  /** transfer_domain_open is the fee to be paid to transfer open domains */
  transferDomainOpen: string;
  /** renew_domain_open is the fee to be paid to renew an open domain */
  renewDomainOpen: string;
  /** create_escrow is the fee to be paid to create an escrow */
  createEscrow: string;
  /** update_escrow is the fee to be paid to update an escrow */
  updateEscrow: string;
  /** transfer_to_escrow is the fee to be paid to transfer coins to an escrow */
  transferToEscrow: string;
  /**
   * refund_escrow is the fee to be paid to refund the account or domain placed
   * in an escrow
   */
  refundEscrow: string;
}

/** GenesisState - genesis state of x/configuration */
export interface GenesisState {
  config: Config | undefined;
  fees: Fees | undefined;
}

function createBaseConfig(): Config {
  return {
    configurer: "",
    validDomainName: "",
    validAccountName: "",
    validUri: "",
    validResource: "",
    domainRenewalPeriod: undefined,
    domainRenewalCountMax: 0,
    domainGracePeriod: undefined,
    accountRenewalPeriod: undefined,
    accountRenewalCountMax: 0,
    accountGracePeriod: undefined,
    resourcesMax: 0,
    certificateSizeMax: 0,
    certificateCountMax: 0,
    metadataSizeMax: 0,
    escrowBroker: "",
    escrowCommission: "",
    escrowMaxPeriod: undefined,
  };
}

export const Config = {
  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configurer !== "") {
      writer.uint32(10).string(message.configurer);
    }
    if (message.validDomainName !== "") {
      writer.uint32(18).string(message.validDomainName);
    }
    if (message.validAccountName !== "") {
      writer.uint32(26).string(message.validAccountName);
    }
    if (message.validUri !== "") {
      writer.uint32(34).string(message.validUri);
    }
    if (message.validResource !== "") {
      writer.uint32(42).string(message.validResource);
    }
    if (message.domainRenewalPeriod !== undefined) {
      Duration.encode(message.domainRenewalPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.domainRenewalCountMax !== 0) {
      writer.uint32(56).uint32(message.domainRenewalCountMax);
    }
    if (message.domainGracePeriod !== undefined) {
      Duration.encode(message.domainGracePeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.accountRenewalPeriod !== undefined) {
      Duration.encode(message.accountRenewalPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.accountRenewalCountMax !== 0) {
      writer.uint32(80).uint32(message.accountRenewalCountMax);
    }
    if (message.accountGracePeriod !== undefined) {
      Duration.encode(message.accountGracePeriod, writer.uint32(90).fork()).ldelim();
    }
    if (message.resourcesMax !== 0) {
      writer.uint32(96).uint32(message.resourcesMax);
    }
    if (message.certificateSizeMax !== 0) {
      writer.uint32(104).uint64(message.certificateSizeMax);
    }
    if (message.certificateCountMax !== 0) {
      writer.uint32(112).uint32(message.certificateCountMax);
    }
    if (message.metadataSizeMax !== 0) {
      writer.uint32(120).uint64(message.metadataSizeMax);
    }
    if (message.escrowBroker !== "") {
      writer.uint32(130).string(message.escrowBroker);
    }
    if (message.escrowCommission !== "") {
      writer.uint32(138).string(message.escrowCommission);
    }
    if (message.escrowMaxPeriod !== undefined) {
      Duration.encode(message.escrowMaxPeriod, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configurer = reader.string();
          break;
        case 2:
          message.validDomainName = reader.string();
          break;
        case 3:
          message.validAccountName = reader.string();
          break;
        case 4:
          message.validUri = reader.string();
          break;
        case 5:
          message.validResource = reader.string();
          break;
        case 6:
          message.domainRenewalPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.domainRenewalCountMax = reader.uint32();
          break;
        case 8:
          message.domainGracePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.accountRenewalPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.accountRenewalCountMax = reader.uint32();
          break;
        case 11:
          message.accountGracePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 12:
          message.resourcesMax = reader.uint32();
          break;
        case 13:
          message.certificateSizeMax = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.certificateCountMax = reader.uint32();
          break;
        case 15:
          message.metadataSizeMax = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.escrowBroker = reader.string();
          break;
        case 17:
          message.escrowCommission = reader.string();
          break;
        case 18:
          message.escrowMaxPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Config {
    return {
      configurer: isSet(object.configurer) ? String(object.configurer) : "",
      validDomainName: isSet(object.validDomainName) ? String(object.validDomainName) : "",
      validAccountName: isSet(object.validAccountName) ? String(object.validAccountName) : "",
      validUri: isSet(object.validUri) ? String(object.validUri) : "",
      validResource: isSet(object.validResource) ? String(object.validResource) : "",
      domainRenewalPeriod: isSet(object.domainRenewalPeriod)
        ? Duration.fromJSON(object.domainRenewalPeriod)
        : undefined,
      domainRenewalCountMax: isSet(object.domainRenewalCountMax) ? Number(object.domainRenewalCountMax) : 0,
      domainGracePeriod: isSet(object.domainGracePeriod) ? Duration.fromJSON(object.domainGracePeriod) : undefined,
      accountRenewalPeriod: isSet(object.accountRenewalPeriod)
        ? Duration.fromJSON(object.accountRenewalPeriod)
        : undefined,
      accountRenewalCountMax: isSet(object.accountRenewalCountMax) ? Number(object.accountRenewalCountMax) : 0,
      accountGracePeriod: isSet(object.accountGracePeriod) ? Duration.fromJSON(object.accountGracePeriod) : undefined,
      resourcesMax: isSet(object.resourcesMax) ? Number(object.resourcesMax) : 0,
      certificateSizeMax: isSet(object.certificateSizeMax) ? Number(object.certificateSizeMax) : 0,
      certificateCountMax: isSet(object.certificateCountMax) ? Number(object.certificateCountMax) : 0,
      metadataSizeMax: isSet(object.metadataSizeMax) ? Number(object.metadataSizeMax) : 0,
      escrowBroker: isSet(object.escrowBroker) ? String(object.escrowBroker) : "",
      escrowCommission: isSet(object.escrowCommission) ? String(object.escrowCommission) : "",
      escrowMaxPeriod: isSet(object.escrowMaxPeriod) ? Duration.fromJSON(object.escrowMaxPeriod) : undefined,
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    message.configurer !== undefined && (obj.configurer = message.configurer);
    message.validDomainName !== undefined && (obj.validDomainName = message.validDomainName);
    message.validAccountName !== undefined && (obj.validAccountName = message.validAccountName);
    message.validUri !== undefined && (obj.validUri = message.validUri);
    message.validResource !== undefined && (obj.validResource = message.validResource);
    message.domainRenewalPeriod !== undefined && (obj.domainRenewalPeriod = message.domainRenewalPeriod
      ? Duration.toJSON(message.domainRenewalPeriod)
      : undefined);
    message.domainRenewalCountMax !== undefined
      && (obj.domainRenewalCountMax = Math.round(message.domainRenewalCountMax));
    message.domainGracePeriod !== undefined
      && (obj.domainGracePeriod = message.domainGracePeriod ? Duration.toJSON(message.domainGracePeriod) : undefined);
    message.accountRenewalPeriod !== undefined && (obj.accountRenewalPeriod = message.accountRenewalPeriod
      ? Duration.toJSON(message.accountRenewalPeriod)
      : undefined);
    message.accountRenewalCountMax !== undefined
      && (obj.accountRenewalCountMax = Math.round(message.accountRenewalCountMax));
    message.accountGracePeriod !== undefined
      && (obj.accountGracePeriod = message.accountGracePeriod
        ? Duration.toJSON(message.accountGracePeriod)
        : undefined);
    message.resourcesMax !== undefined && (obj.resourcesMax = Math.round(message.resourcesMax));
    message.certificateSizeMax !== undefined && (obj.certificateSizeMax = Math.round(message.certificateSizeMax));
    message.certificateCountMax !== undefined && (obj.certificateCountMax = Math.round(message.certificateCountMax));
    message.metadataSizeMax !== undefined && (obj.metadataSizeMax = Math.round(message.metadataSizeMax));
    message.escrowBroker !== undefined && (obj.escrowBroker = message.escrowBroker);
    message.escrowCommission !== undefined && (obj.escrowCommission = message.escrowCommission);
    message.escrowMaxPeriod !== undefined
      && (obj.escrowMaxPeriod = message.escrowMaxPeriod ? Duration.toJSON(message.escrowMaxPeriod) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.configurer = object.configurer ?? "";
    message.validDomainName = object.validDomainName ?? "";
    message.validAccountName = object.validAccountName ?? "";
    message.validUri = object.validUri ?? "";
    message.validResource = object.validResource ?? "";
    message.domainRenewalPeriod = (object.domainRenewalPeriod !== undefined && object.domainRenewalPeriod !== null)
      ? Duration.fromPartial(object.domainRenewalPeriod)
      : undefined;
    message.domainRenewalCountMax = object.domainRenewalCountMax ?? 0;
    message.domainGracePeriod = (object.domainGracePeriod !== undefined && object.domainGracePeriod !== null)
      ? Duration.fromPartial(object.domainGracePeriod)
      : undefined;
    message.accountRenewalPeriod = (object.accountRenewalPeriod !== undefined && object.accountRenewalPeriod !== null)
      ? Duration.fromPartial(object.accountRenewalPeriod)
      : undefined;
    message.accountRenewalCountMax = object.accountRenewalCountMax ?? 0;
    message.accountGracePeriod = (object.accountGracePeriod !== undefined && object.accountGracePeriod !== null)
      ? Duration.fromPartial(object.accountGracePeriod)
      : undefined;
    message.resourcesMax = object.resourcesMax ?? 0;
    message.certificateSizeMax = object.certificateSizeMax ?? 0;
    message.certificateCountMax = object.certificateCountMax ?? 0;
    message.metadataSizeMax = object.metadataSizeMax ?? 0;
    message.escrowBroker = object.escrowBroker ?? "";
    message.escrowCommission = object.escrowCommission ?? "";
    message.escrowMaxPeriod = (object.escrowMaxPeriod !== undefined && object.escrowMaxPeriod !== null)
      ? Duration.fromPartial(object.escrowMaxPeriod)
      : undefined;
    return message;
  },
};

function createBaseFees(): Fees {
  return {
    feeCoinDenom: "",
    feeCoinPrice: "",
    feeDefault: "",
    registerAccountClosed: "",
    registerAccountOpen: "",
    transferAccountClosed: "",
    transferAccountOpen: "",
    replaceAccountResources: "",
    addAccountCertificate: "",
    delAccountCertificate: "",
    setAccountMetadata: "",
    registerDomain1: "",
    registerDomain2: "",
    registerDomain3: "",
    registerDomain4: "",
    registerDomain5: "",
    registerDomainDefault: "",
    registerOpenDomainMultiplier: "",
    transferDomainClosed: "",
    transferDomainOpen: "",
    renewDomainOpen: "",
    createEscrow: "",
    updateEscrow: "",
    transferToEscrow: "",
    refundEscrow: "",
  };
}

export const Fees = {
  encode(message: Fees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCoinDenom !== "") {
      writer.uint32(10).string(message.feeCoinDenom);
    }
    if (message.feeCoinPrice !== "") {
      writer.uint32(18).string(message.feeCoinPrice);
    }
    if (message.feeDefault !== "") {
      writer.uint32(26).string(message.feeDefault);
    }
    if (message.registerAccountClosed !== "") {
      writer.uint32(34).string(message.registerAccountClosed);
    }
    if (message.registerAccountOpen !== "") {
      writer.uint32(42).string(message.registerAccountOpen);
    }
    if (message.transferAccountClosed !== "") {
      writer.uint32(50).string(message.transferAccountClosed);
    }
    if (message.transferAccountOpen !== "") {
      writer.uint32(58).string(message.transferAccountOpen);
    }
    if (message.replaceAccountResources !== "") {
      writer.uint32(66).string(message.replaceAccountResources);
    }
    if (message.addAccountCertificate !== "") {
      writer.uint32(74).string(message.addAccountCertificate);
    }
    if (message.delAccountCertificate !== "") {
      writer.uint32(82).string(message.delAccountCertificate);
    }
    if (message.setAccountMetadata !== "") {
      writer.uint32(90).string(message.setAccountMetadata);
    }
    if (message.registerDomain1 !== "") {
      writer.uint32(98).string(message.registerDomain1);
    }
    if (message.registerDomain2 !== "") {
      writer.uint32(106).string(message.registerDomain2);
    }
    if (message.registerDomain3 !== "") {
      writer.uint32(114).string(message.registerDomain3);
    }
    if (message.registerDomain4 !== "") {
      writer.uint32(122).string(message.registerDomain4);
    }
    if (message.registerDomain5 !== "") {
      writer.uint32(130).string(message.registerDomain5);
    }
    if (message.registerDomainDefault !== "") {
      writer.uint32(138).string(message.registerDomainDefault);
    }
    if (message.registerOpenDomainMultiplier !== "") {
      writer.uint32(146).string(message.registerOpenDomainMultiplier);
    }
    if (message.transferDomainClosed !== "") {
      writer.uint32(154).string(message.transferDomainClosed);
    }
    if (message.transferDomainOpen !== "") {
      writer.uint32(162).string(message.transferDomainOpen);
    }
    if (message.renewDomainOpen !== "") {
      writer.uint32(170).string(message.renewDomainOpen);
    }
    if (message.createEscrow !== "") {
      writer.uint32(178).string(message.createEscrow);
    }
    if (message.updateEscrow !== "") {
      writer.uint32(186).string(message.updateEscrow);
    }
    if (message.transferToEscrow !== "") {
      writer.uint32(194).string(message.transferToEscrow);
    }
    if (message.refundEscrow !== "") {
      writer.uint32(202).string(message.refundEscrow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCoinDenom = reader.string();
          break;
        case 2:
          message.feeCoinPrice = reader.string();
          break;
        case 3:
          message.feeDefault = reader.string();
          break;
        case 4:
          message.registerAccountClosed = reader.string();
          break;
        case 5:
          message.registerAccountOpen = reader.string();
          break;
        case 6:
          message.transferAccountClosed = reader.string();
          break;
        case 7:
          message.transferAccountOpen = reader.string();
          break;
        case 8:
          message.replaceAccountResources = reader.string();
          break;
        case 9:
          message.addAccountCertificate = reader.string();
          break;
        case 10:
          message.delAccountCertificate = reader.string();
          break;
        case 11:
          message.setAccountMetadata = reader.string();
          break;
        case 12:
          message.registerDomain1 = reader.string();
          break;
        case 13:
          message.registerDomain2 = reader.string();
          break;
        case 14:
          message.registerDomain3 = reader.string();
          break;
        case 15:
          message.registerDomain4 = reader.string();
          break;
        case 16:
          message.registerDomain5 = reader.string();
          break;
        case 17:
          message.registerDomainDefault = reader.string();
          break;
        case 18:
          message.registerOpenDomainMultiplier = reader.string();
          break;
        case 19:
          message.transferDomainClosed = reader.string();
          break;
        case 20:
          message.transferDomainOpen = reader.string();
          break;
        case 21:
          message.renewDomainOpen = reader.string();
          break;
        case 22:
          message.createEscrow = reader.string();
          break;
        case 23:
          message.updateEscrow = reader.string();
          break;
        case 24:
          message.transferToEscrow = reader.string();
          break;
        case 25:
          message.refundEscrow = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fees {
    return {
      feeCoinDenom: isSet(object.feeCoinDenom) ? String(object.feeCoinDenom) : "",
      feeCoinPrice: isSet(object.feeCoinPrice) ? String(object.feeCoinPrice) : "",
      feeDefault: isSet(object.feeDefault) ? String(object.feeDefault) : "",
      registerAccountClosed: isSet(object.registerAccountClosed) ? String(object.registerAccountClosed) : "",
      registerAccountOpen: isSet(object.registerAccountOpen) ? String(object.registerAccountOpen) : "",
      transferAccountClosed: isSet(object.transferAccountClosed) ? String(object.transferAccountClosed) : "",
      transferAccountOpen: isSet(object.transferAccountOpen) ? String(object.transferAccountOpen) : "",
      replaceAccountResources: isSet(object.replaceAccountResources) ? String(object.replaceAccountResources) : "",
      addAccountCertificate: isSet(object.addAccountCertificate) ? String(object.addAccountCertificate) : "",
      delAccountCertificate: isSet(object.delAccountCertificate) ? String(object.delAccountCertificate) : "",
      setAccountMetadata: isSet(object.setAccountMetadata) ? String(object.setAccountMetadata) : "",
      registerDomain1: isSet(object.registerDomain1) ? String(object.registerDomain1) : "",
      registerDomain2: isSet(object.registerDomain2) ? String(object.registerDomain2) : "",
      registerDomain3: isSet(object.registerDomain3) ? String(object.registerDomain3) : "",
      registerDomain4: isSet(object.registerDomain4) ? String(object.registerDomain4) : "",
      registerDomain5: isSet(object.registerDomain5) ? String(object.registerDomain5) : "",
      registerDomainDefault: isSet(object.registerDomainDefault) ? String(object.registerDomainDefault) : "",
      registerOpenDomainMultiplier: isSet(object.registerOpenDomainMultiplier)
        ? String(object.registerOpenDomainMultiplier)
        : "",
      transferDomainClosed: isSet(object.transferDomainClosed) ? String(object.transferDomainClosed) : "",
      transferDomainOpen: isSet(object.transferDomainOpen) ? String(object.transferDomainOpen) : "",
      renewDomainOpen: isSet(object.renewDomainOpen) ? String(object.renewDomainOpen) : "",
      createEscrow: isSet(object.createEscrow) ? String(object.createEscrow) : "",
      updateEscrow: isSet(object.updateEscrow) ? String(object.updateEscrow) : "",
      transferToEscrow: isSet(object.transferToEscrow) ? String(object.transferToEscrow) : "",
      refundEscrow: isSet(object.refundEscrow) ? String(object.refundEscrow) : "",
    };
  },

  toJSON(message: Fees): unknown {
    const obj: any = {};
    message.feeCoinDenom !== undefined && (obj.feeCoinDenom = message.feeCoinDenom);
    message.feeCoinPrice !== undefined && (obj.feeCoinPrice = message.feeCoinPrice);
    message.feeDefault !== undefined && (obj.feeDefault = message.feeDefault);
    message.registerAccountClosed !== undefined && (obj.registerAccountClosed = message.registerAccountClosed);
    message.registerAccountOpen !== undefined && (obj.registerAccountOpen = message.registerAccountOpen);
    message.transferAccountClosed !== undefined && (obj.transferAccountClosed = message.transferAccountClosed);
    message.transferAccountOpen !== undefined && (obj.transferAccountOpen = message.transferAccountOpen);
    message.replaceAccountResources !== undefined && (obj.replaceAccountResources = message.replaceAccountResources);
    message.addAccountCertificate !== undefined && (obj.addAccountCertificate = message.addAccountCertificate);
    message.delAccountCertificate !== undefined && (obj.delAccountCertificate = message.delAccountCertificate);
    message.setAccountMetadata !== undefined && (obj.setAccountMetadata = message.setAccountMetadata);
    message.registerDomain1 !== undefined && (obj.registerDomain1 = message.registerDomain1);
    message.registerDomain2 !== undefined && (obj.registerDomain2 = message.registerDomain2);
    message.registerDomain3 !== undefined && (obj.registerDomain3 = message.registerDomain3);
    message.registerDomain4 !== undefined && (obj.registerDomain4 = message.registerDomain4);
    message.registerDomain5 !== undefined && (obj.registerDomain5 = message.registerDomain5);
    message.registerDomainDefault !== undefined && (obj.registerDomainDefault = message.registerDomainDefault);
    message.registerOpenDomainMultiplier !== undefined
      && (obj.registerOpenDomainMultiplier = message.registerOpenDomainMultiplier);
    message.transferDomainClosed !== undefined && (obj.transferDomainClosed = message.transferDomainClosed);
    message.transferDomainOpen !== undefined && (obj.transferDomainOpen = message.transferDomainOpen);
    message.renewDomainOpen !== undefined && (obj.renewDomainOpen = message.renewDomainOpen);
    message.createEscrow !== undefined && (obj.createEscrow = message.createEscrow);
    message.updateEscrow !== undefined && (obj.updateEscrow = message.updateEscrow);
    message.transferToEscrow !== undefined && (obj.transferToEscrow = message.transferToEscrow);
    message.refundEscrow !== undefined && (obj.refundEscrow = message.refundEscrow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fees>, I>>(object: I): Fees {
    const message = createBaseFees();
    message.feeCoinDenom = object.feeCoinDenom ?? "";
    message.feeCoinPrice = object.feeCoinPrice ?? "";
    message.feeDefault = object.feeDefault ?? "";
    message.registerAccountClosed = object.registerAccountClosed ?? "";
    message.registerAccountOpen = object.registerAccountOpen ?? "";
    message.transferAccountClosed = object.transferAccountClosed ?? "";
    message.transferAccountOpen = object.transferAccountOpen ?? "";
    message.replaceAccountResources = object.replaceAccountResources ?? "";
    message.addAccountCertificate = object.addAccountCertificate ?? "";
    message.delAccountCertificate = object.delAccountCertificate ?? "";
    message.setAccountMetadata = object.setAccountMetadata ?? "";
    message.registerDomain1 = object.registerDomain1 ?? "";
    message.registerDomain2 = object.registerDomain2 ?? "";
    message.registerDomain3 = object.registerDomain3 ?? "";
    message.registerDomain4 = object.registerDomain4 ?? "";
    message.registerDomain5 = object.registerDomain5 ?? "";
    message.registerDomainDefault = object.registerDomainDefault ?? "";
    message.registerOpenDomainMultiplier = object.registerOpenDomainMultiplier ?? "";
    message.transferDomainClosed = object.transferDomainClosed ?? "";
    message.transferDomainOpen = object.transferDomainOpen ?? "";
    message.renewDomainOpen = object.renewDomainOpen ?? "";
    message.createEscrow = object.createEscrow ?? "";
    message.updateEscrow = object.updateEscrow ?? "";
    message.transferToEscrow = object.transferToEscrow ?? "";
    message.refundEscrow = object.refundEscrow ?? "";
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { config: undefined, fees: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 2:
          message.fees = Fees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.fees !== undefined && (obj.fees = message.fees ? Fees.toJSON(message.fees) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.config = (object.config !== undefined && object.config !== null)
      ? Config.fromPartial(object.config)
      : undefined;
    message.fees = (object.fees !== undefined && object.fees !== null) ? Fees.fromPartial(object.fees) : undefined;
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
