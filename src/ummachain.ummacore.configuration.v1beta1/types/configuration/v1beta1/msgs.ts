/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Config, Fees } from "./types";

export const protobufPackage = "ummachain.ummacore.configuration.v1beta1";

/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfig {
  /** Signer is the address of the entity who is doing the transaction */
  signer: string;
  /** NewConfiguration contains the new configuration data */
  newConfiguration: Config | undefined;
}

/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFees {
  fees: Fees | undefined;
  configurer: string;
}

function createBaseMsgUpdateConfig(): MsgUpdateConfig {
  return { signer: "", newConfiguration: undefined };
}

export const MsgUpdateConfig = {
  encode(message: MsgUpdateConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.newConfiguration !== undefined) {
      Config.encode(message.newConfiguration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.newConfiguration = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateConfig {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      newConfiguration: isSet(object.newConfiguration) ? Config.fromJSON(object.newConfiguration) : undefined,
    };
  },

  toJSON(message: MsgUpdateConfig): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.newConfiguration !== undefined
      && (obj.newConfiguration = message.newConfiguration ? Config.toJSON(message.newConfiguration) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateConfig>, I>>(object: I): MsgUpdateConfig {
    const message = createBaseMsgUpdateConfig();
    message.signer = object.signer ?? "";
    message.newConfiguration = (object.newConfiguration !== undefined && object.newConfiguration !== null)
      ? Config.fromPartial(object.newConfiguration)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateFees(): MsgUpdateFees {
  return { fees: undefined, configurer: "" };
}

export const MsgUpdateFees = {
  encode(message: MsgUpdateFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    if (message.configurer !== "") {
      writer.uint32(18).string(message.configurer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees = Fees.decode(reader, reader.uint32());
          break;
        case 2:
          message.configurer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFees {
    return {
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined,
      configurer: isSet(object.configurer) ? String(object.configurer) : "",
    };
  },

  toJSON(message: MsgUpdateFees): unknown {
    const obj: any = {};
    message.fees !== undefined && (obj.fees = message.fees ? Fees.toJSON(message.fees) : undefined);
    message.configurer !== undefined && (obj.configurer = message.configurer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFees>, I>>(object: I): MsgUpdateFees {
    const message = createBaseMsgUpdateFees();
    message.fees = (object.fees !== undefined && object.fees !== null) ? Fees.fromPartial(object.fees) : undefined;
    message.configurer = object.configurer ?? "";
    return message;
  },
};

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
