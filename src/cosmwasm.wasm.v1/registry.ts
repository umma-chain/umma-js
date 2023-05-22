import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgInstantiateContract, MsgUpdateAdmin, MsgStoreCode, MsgExecuteContract, MsgClearAdmin, MsgMigrateContract,
} from "./types/cosmwasm/wasm/v1/tx";
import { MsgIBCSend, MsgIBCCloseChannel } from "./types/cosmwasm/wasm/v1/ibc";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
  ["/cosmwasm.wasm.v1.MsgIBCSend", MsgIBCSend],
  ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin],
  ["/cosmwasm.wasm.v1.MsgIBCCloseChannel", MsgIBCCloseChannel],
  ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
  ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
  ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],

];

export { msgTypes };
