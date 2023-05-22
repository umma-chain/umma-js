import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgExec, MsgRevoke, MsgGrant } from "./types/cosmos/authz/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
  ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
  ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],

];

export { msgTypes };
