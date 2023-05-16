import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateEscrow } from "./types/escrow/v1beta1/tx";
import { MsgRefundEscrow } from "./types/escrow/v1beta1/tx";
import { MsgUpdateEscrow } from "./types/escrow/v1beta1/tx";
import { MsgTransferToEscrow } from "./types/escrow/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ummachain.ummacore.escrow.v1beta1.MsgCreateEscrow", MsgCreateEscrow],
    ["/ummachain.ummacore.escrow.v1beta1.MsgRefundEscrow", MsgRefundEscrow],
    ["/ummachain.ummacore.escrow.v1beta1.MsgUpdateEscrow", MsgUpdateEscrow],
    ["/ummachain.ummacore.escrow.v1beta1.MsgTransferToEscrow", MsgTransferToEscrow],
    
];

export { msgTypes }