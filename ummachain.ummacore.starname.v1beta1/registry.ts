import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgReplaceAccountResources } from "./types/starname/tx";
import { MsgDeleteDomain } from "./types/starname/tx";
import { MsgDeleteAccountCertificate } from "./types/starname/tx";
import { MsgRenewAccount } from "./types/starname/tx";
import { MsgTransferDomain } from "./types/starname/tx";
import { MsgReplaceAccountMetadata } from "./types/starname/tx";
import { MsgTransferAccount } from "./types/starname/tx";
import { MsgRegisterDomain } from "./types/starname/tx";
import { MsgRenewDomain } from "./types/starname/tx";
import { MsgAddAccountCertificate } from "./types/starname/tx";
import { MsgDeleteAccount } from "./types/starname/tx";
import { MsgRegisterAccount } from "./types/starname/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ummachain.ummacore.starname.v1beta1.MsgReplaceAccountResources", MsgReplaceAccountResources],
    ["/ummachain.ummacore.starname.v1beta1.MsgDeleteDomain", MsgDeleteDomain],
    ["/ummachain.ummacore.starname.v1beta1.MsgDeleteAccountCertificate", MsgDeleteAccountCertificate],
    ["/ummachain.ummacore.starname.v1beta1.MsgRenewAccount", MsgRenewAccount],
    ["/ummachain.ummacore.starname.v1beta1.MsgTransferDomain", MsgTransferDomain],
    ["/ummachain.ummacore.starname.v1beta1.MsgReplaceAccountMetadata", MsgReplaceAccountMetadata],
    ["/ummachain.ummacore.starname.v1beta1.MsgTransferAccount", MsgTransferAccount],
    ["/ummachain.ummacore.starname.v1beta1.MsgRegisterDomain", MsgRegisterDomain],
    ["/ummachain.ummacore.starname.v1beta1.MsgRenewDomain", MsgRenewDomain],
    ["/ummachain.ummacore.starname.v1beta1.MsgAddAccountCertificate", MsgAddAccountCertificate],
    ["/ummachain.ummacore.starname.v1beta1.MsgDeleteAccount", MsgDeleteAccount],
    ["/ummachain.ummacore.starname.v1beta1.MsgRegisterAccount", MsgRegisterAccount],
    
];

export { msgTypes }