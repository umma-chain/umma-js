import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgBeginRedelegate, MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgUndelegate,
} from "./types/cosmos/staking/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate],

];

export { msgTypes };
