// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateEscrow } from "./types/escrow/v1beta1/tx";
import { MsgRefundEscrow } from "./types/escrow/v1beta1/tx";
import { MsgUpdateEscrow } from "./types/escrow/v1beta1/tx";
import { MsgTransferToEscrow } from "./types/escrow/v1beta1/tx";

import { EventCreatedEscrow as typeEventCreatedEscrow} from "./types"
import { EventUpdatedEscrow as typeEventUpdatedEscrow} from "./types"
import { EventCompletedEscrow as typeEventCompletedEscrow} from "./types"
import { EventRefundedEscrow as typeEventRefundedEscrow} from "./types"
import { Params as typeParams} from "./types"
import { TestObject as typeTestObject} from "./types"
import { TestTimeConstrainedObject as typeTestTimeConstrainedObject} from "./types"
import { Escrow as typeEscrow} from "./types"

export { MsgCreateEscrow, MsgRefundEscrow, MsgUpdateEscrow, MsgTransferToEscrow };

type sendMsgCreateEscrowParams = {
  value: MsgCreateEscrow,
  fee?: StdFee,
  memo?: string
};

type sendMsgRefundEscrowParams = {
  value: MsgRefundEscrow,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateEscrowParams = {
  value: MsgUpdateEscrow,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferToEscrowParams = {
  value: MsgTransferToEscrow,
  fee?: StdFee,
  memo?: string
};


type msgCreateEscrowParams = {
  value: MsgCreateEscrow,
};

type msgRefundEscrowParams = {
  value: MsgRefundEscrow,
};

type msgUpdateEscrowParams = {
  value: MsgUpdateEscrow,
};

type msgTransferToEscrowParams = {
  value: MsgTransferToEscrow,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateEscrow({ value, fee, memo }: sendMsgCreateEscrowParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateEscrow: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateEscrow({ value: MsgCreateEscrow.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateEscrow: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRefundEscrow({ value, fee, memo }: sendMsgRefundEscrowParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRefundEscrow: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRefundEscrow({ value: MsgRefundEscrow.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRefundEscrow: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateEscrow({ value, fee, memo }: sendMsgUpdateEscrowParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateEscrow: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateEscrow({ value: MsgUpdateEscrow.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateEscrow: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferToEscrow({ value, fee, memo }: sendMsgTransferToEscrowParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferToEscrow: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgTransferToEscrow({ value: MsgTransferToEscrow.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferToEscrow: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateEscrow({ value }: msgCreateEscrowParams): EncodeObject {
			try {
				return { typeUrl: "/ummachain.ummacore.escrow.v1beta1.MsgCreateEscrow", value: MsgCreateEscrow.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateEscrow: Could not create message: ' + e.message)
			}
		},
		
		msgRefundEscrow({ value }: msgRefundEscrowParams): EncodeObject {
			try {
				return { typeUrl: "/ummachain.ummacore.escrow.v1beta1.MsgRefundEscrow", value: MsgRefundEscrow.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRefundEscrow: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateEscrow({ value }: msgUpdateEscrowParams): EncodeObject {
			try {
				return { typeUrl: "/ummachain.ummacore.escrow.v1beta1.MsgUpdateEscrow", value: MsgUpdateEscrow.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateEscrow: Could not create message: ' + e.message)
			}
		},
		
		msgTransferToEscrow({ value }: msgTransferToEscrowParams): EncodeObject {
			try {
				return { typeUrl: "/ummachain.ummacore.escrow.v1beta1.MsgTransferToEscrow", value: MsgTransferToEscrow.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferToEscrow: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						EventCreatedEscrow: getStructure(typeEventCreatedEscrow.fromPartial({})),
						EventUpdatedEscrow: getStructure(typeEventUpdatedEscrow.fromPartial({})),
						EventCompletedEscrow: getStructure(typeEventCompletedEscrow.fromPartial({})),
						EventRefundedEscrow: getStructure(typeEventRefundedEscrow.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						TestObject: getStructure(typeTestObject.fromPartial({})),
						TestTimeConstrainedObject: getStructure(typeTestTimeConstrainedObject.fromPartial({})),
						Escrow: getStructure(typeEscrow.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			UmmachainUmmacoreEscrowV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;