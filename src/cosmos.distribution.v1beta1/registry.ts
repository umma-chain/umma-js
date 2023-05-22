import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgWithdrawValidatorCommission, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgFundCommunityPool,
} from "./types/cosmos/distribution/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission],
  ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
  ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward],
  ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool],

];

export { msgTypes };
