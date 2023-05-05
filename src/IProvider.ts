import {
  AccountsChangedListener,
  BroadcastTransactionResult, ChainChangedListener, ConnectListener,
  RequestArguments,
  SendLegacyPaymentArgs, SendLegacyStakeDelegationArgs,
  SendTransactionArgs,
  SendTransactionResult, SignedData, SignedFieldsData, SignFieldsArguments, SignMessageArgs, VerifyMessageArgs, VerifyFieldsArguments
} from "./TSTypes";

export interface IMinaProvider {
  request(args: RequestArguments): Promise<unknown>
  sendTransaction(args: SendTransactionArgs): Promise<SendTransactionResult>
  sendLegacyPayment(args: SendLegacyPaymentArgs): Promise<BroadcastTransactionResult>
  sendLegacyStakeDelegation(args: SendLegacyStakeDelegationArgs): Promise<BroadcastTransactionResult>
  signMessage(args: SignMessageArgs): Promise<SignedData>
  verifyMessage(args: VerifyMessageArgs): Promise<boolean>
  requestAccounts(): Promise<string[]>
  requestNetwork(): Promise<string>

  signFields(args: SignFieldsArguments): Promise<SignedFieldsData>
  verifyFields(args: VerifyFieldsArguments): Promise<boolean>

  // Events
  on(eventName: 'chainChanged', listener: ChainChangedListener): this
  on(eventName: 'accountsChanged', listener: AccountsChangedListener): this

  removeListener(
    eventName: 'chainChanged',
    listener: ChainChangedListener
  ): this
  removeListener(
    eventName: 'accountsChanged',
    listener: AccountsChangedListener
  ): this
}