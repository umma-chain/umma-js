import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgCreateEscrow, MsgRefundEscrow, MsgUpdateEscrow, MsgTransferToEscrow,
} from "./types/escrow/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/ummachain.ummacore.escrow.v1beta1.MsgCreateEscrow", MsgCreateEscrow],
  ["/ummachain.ummacore.escrow.v1beta1.MsgRefundEscrow", MsgRefundEscrow],
  ["/ummachain.ummacore.escrow.v1beta1.MsgUpdateEscrow", MsgUpdateEscrow],
  ["/ummachain.ummacore.escrow.v1beta1.MsgTransferToEscrow", MsgTransferToEscrow],

];

export { msgTypes };
