import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgCreateDenom, MsgUpdateOwner, MsgMintAndSendTokens, MsgUpdateDenom, MsgBurnToken,
} from "./types/factory/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/ummachain.ummacore.factory.MsgCreateDenom", MsgCreateDenom],
  ["/ummachain.ummacore.factory.MsgUpdateOwner", MsgUpdateOwner],
  ["/ummachain.ummacore.factory.MsgMintAndSendTokens", MsgMintAndSendTokens],
  ["/ummachain.ummacore.factory.MsgUpdateDenom", MsgUpdateDenom],
  ["/ummachain.ummacore.factory.MsgBurnToken", MsgBurnToken],

];

export { msgTypes };
