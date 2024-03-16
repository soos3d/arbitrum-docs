---
id: "L1ToL2MessageWriter"
title: "Class: L1ToL2MessageWriter"
sidebar_label: "L1ToL2MessageWriter"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`L1ToL2MessageReader`](L1ToL2MessageReader.md)

  ↳ **`L1ToL2MessageWriter`**

## Constructors

### constructor

• **new L1ToL2MessageWriter**(`l2Signer`, `chainId`, `sender`, `messageNumber`, `l1BaseFee`, `messageData`): [`L1ToL2MessageWriter`](L1ToL2MessageWriter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Signer` | `Signer` |
| `chainId` | `number` |
| `sender` | `string` |
| `messageNumber` | `BigNumber` |
| `l1BaseFee` | `BigNumber` |
| `messageData` | `RetryableMessageParams` |

#### Returns

[`L1ToL2MessageWriter`](L1ToL2MessageWriter.md)

#### Overrides

[L1ToL2MessageReader](L1ToL2MessageReader.md).[constructor](L1ToL2MessageReader.md#constructor)

#### Defined in

[src/lib/message/L1ToL2Message.ts:630](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L630)

## Properties

### chainId

• `Readonly` **chainId**: `number`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[chainId](L1ToL2MessageReader.md#chainid)

#### Defined in

[src/lib/message/L1ToL2Message.ts:208](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L208)

___

### l1BaseFee

• `Readonly` **l1BaseFee**: `BigNumber`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[l1BaseFee](L1ToL2MessageReader.md#l1basefee)

#### Defined in

[src/lib/message/L1ToL2Message.ts:211](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L211)

___

### l2Provider

• `Readonly` **l2Provider**: `Provider`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[l2Provider](L1ToL2MessageReader.md#l2provider)

#### Defined in

[src/lib/message/L1ToL2Message.ts:247](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L247)

___

### l2Signer

• `Readonly` **l2Signer**: `Signer`

#### Defined in

[src/lib/message/L1ToL2Message.ts:631](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L631)

___

### messageData

• `Readonly` **messageData**: `RetryableMessageParams`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[messageData](L1ToL2MessageReader.md#messagedata)

#### Defined in

[src/lib/message/L1ToL2Message.ts:212](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L212)

___

### messageNumber

• `Readonly` **messageNumber**: `BigNumber`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[messageNumber](L1ToL2MessageReader.md#messagenumber)

#### Defined in

[src/lib/message/L1ToL2Message.ts:210](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L210)

___

### retryableCreationId

• `Readonly` **retryableCreationId**: `string`

When messages are sent from L1 to L2 a retryable ticket is created on L2.
The retryableCreationId can be used to retrieve information about the success or failure of the
creation of the retryable ticket.

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[retryableCreationId](L1ToL2MessageReader.md#retryablecreationid)

#### Defined in

[src/lib/message/L1ToL2Message.ts:103](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L103)

___

### sender

• `Readonly` **sender**: `string`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[sender](L1ToL2MessageReader.md#sender)

#### Defined in

[src/lib/message/L1ToL2Message.ts:209](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L209)

## Methods

### cancel

▸ **cancel**(`overrides?`): `Promise`\<`ContractTransaction`\>

Cancel the retryable ticket.
Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` |

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[src/lib/message/L1ToL2Message.ts:685](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L685)

___

### getAutoRedeemAttempt

▸ **getAutoRedeemAttempt**(): `Promise`\<``null`` \| `TransactionReceipt`\>

When retryable tickets are created, and gas is supplied to it, an attempt is
made to redeem the ticket straight away. This is called an auto redeem.

#### Returns

`Promise`\<``null`` \| `TransactionReceipt`\>

TransactionReceipt of the auto redeem attempt if exists, otherwise null

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getAutoRedeemAttempt](L1ToL2MessageReader.md#getautoredeemattempt)

#### Defined in

[src/lib/message/L1ToL2Message.ts:284](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L284)

___

### getBeneficiary

▸ **getBeneficiary**(): `Promise`\<`string`\>

Address to which CallValue will be credited to on L2 if the retryable ticket times out or is cancelled.
The Beneficiary is also the address with the right to cancel a Retryable Ticket (if the ticket hasn’t been redeemed yet).

#### Returns

`Promise`\<`string`\>

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getBeneficiary](L1ToL2MessageReader.md#getbeneficiary)

#### Defined in

[src/lib/message/L1ToL2Message.ts:529](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L529)

___

### getRetryableCreationReceipt

▸ **getRetryableCreationReceipt**(`confirmations?`, `timeout?`): `Promise`\<``null`` \| `TransactionReceipt`\>

Try to get the receipt for the retryable ticket creation.
This is the L2 transaction that creates the retryable ticket.
If confirmations or timeout is provided, this will wait for the ticket to be created

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<``null`` \| `TransactionReceipt`\>

Null if retryable has not been created

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getRetryableCreationReceipt](L1ToL2MessageReader.md#getretryablecreationreceipt)

#### Defined in

[src/lib/message/L1ToL2Message.ts:263](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L263)

___

### getSuccessfulRedeem

▸ **getSuccessfulRedeem**(): `Promise`\<`L1ToL2MessageWaitResult`\>

Receipt for the successful l2 transaction created by this message.

#### Returns

`Promise`\<`L1ToL2MessageWaitResult`\>

TransactionReceipt of the first successful redeem if exists, otherwise the current status of the message.

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getSuccessfulRedeem](L1ToL2MessageReader.md#getsuccessfulredeem)

#### Defined in

[src/lib/message/L1ToL2Message.ts:309](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L309)

___

### getTimeout

▸ **getTimeout**(): `Promise`\<`BigNumber`\>

Timestamp at which this message expires

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getTimeout](L1ToL2MessageReader.md#gettimeout)

#### Defined in

[src/lib/message/L1ToL2Message.ts:516](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L516)

___

### isExpired

▸ **isExpired**(): `Promise`\<`boolean`\>

Has this message expired. Once expired the retryable ticket can no longer be redeemed.

#### Returns

`Promise`\<`boolean`\>

**`Deprecated`**

Will be removed in v3.0.0

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[isExpired](L1ToL2MessageReader.md#isexpired)

#### Defined in

[src/lib/message/L1ToL2Message.ts:429](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L429)

___

### keepAlive

▸ **keepAlive**(`overrides?`): `Promise`\<`ContractTransaction`\>

Increase the timeout of a retryable ticket.
Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` |

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[src/lib/message/L1ToL2Message.ts:708](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L708)

___

### redeem

▸ **redeem**(`overrides?`): `Promise`\<`RedeemTransaction`\>

Manually redeem the retryable ticket.
Throws if message status is not L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` |

#### Returns

`Promise`\<`RedeemTransaction`\>

#### Defined in

[src/lib/message/L1ToL2Message.ts:654](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L654)

___

### status

▸ **status**(): `Promise`\<[`L1ToL2MessageStatus`](../enums/L1ToL2MessageStatus.md)\>

#### Returns

`Promise`\<[`L1ToL2MessageStatus`](../enums/L1ToL2MessageStatus.md)\>

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[status](L1ToL2MessageReader.md#status)

#### Defined in

[src/lib/message/L1ToL2Message.ts:455](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L455)

___

### waitForStatus

▸ **waitForStatus**(`confirmations?`, `timeout?`): `Promise`\<`L1ToL2MessageWaitResult`\>

Wait for the retryable ticket to be created, for it to be redeemed, and for the l2Tx to be executed.
Note: The terminal status of a transaction that only does an eth deposit is FUNDS_DEPOSITED_ON_L2 as
no L2 transaction needs to be executed, however the terminal state of any other transaction is REDEEMED
which represents that the retryable ticket has been redeemed and the L2 tx has been executed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmations?` | `number` | Amount of confirmations the retryable ticket and the auto redeem receipt should have |
| `timeout?` | `number` | Amount of time to wait for the retryable ticket to be created Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout. |

#### Returns

`Promise`\<`L1ToL2MessageWaitResult`\>

The wait result contains a status, and optionally the l2TxReceipt.
If the status is "REDEEMED" then a l2TxReceipt is also available on the result.
If the status has any other value then l2TxReceipt is not populated.

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[waitForStatus](L1ToL2MessageReader.md#waitforstatus)

#### Defined in

[src/lib/message/L1ToL2Message.ts:471](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L471)

___

### calculateSubmitRetryableId

▸ **calculateSubmitRetryableId**(`l2ChainId`, `fromAddress`, `messageNumber`, `l1BaseFee`, `destAddress`, `l2CallValue`, `l1Value`, `maxSubmissionFee`, `excessFeeRefundAddress`, `callValueRefundAddress`, `gasLimit`, `maxFeePerGas`, `data`): `string`

The submit retryable transactions use the typed transaction envelope 2718.
The id of these transactions is the hash of the RLP encoded transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l2ChainId` | `number` |  |
| `fromAddress` | `string` | the aliased address that called the L1 inbox as emitted in the bridge event. |
| `messageNumber` | `BigNumber` |  |
| `l1BaseFee` | `BigNumber` |  |
| `destAddress` | `string` |  |
| `l2CallValue` | `BigNumber` |  |
| `l1Value` | `BigNumber` |  |
| `maxSubmissionFee` | `BigNumber` |  |
| `excessFeeRefundAddress` | `string` | refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed. |
| `callValueRefundAddress` | `string` | refund address specified in the retryable creation. Note the L1 inbox aliases this address if it is a L1 smart contract. The user is expected to provide this value already aliased when needed. |
| `gasLimit` | `BigNumber` |  |
| `maxFeePerGas` | `BigNumber` |  |
| `data` | `string` |  |

#### Returns

`string`

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[calculateSubmitRetryableId](L1ToL2MessageReader.md#calculatesubmitretryableid)

#### Defined in

[src/lib/message/L1ToL2Message.ts:123](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L123)

___

### fromEventComponents

▸ **fromEventComponents**\<`T`\>(`l2SignerOrProvider`, `chainId`, `sender`, `messageNumber`, `l1BaseFee`, `messageData`): `L1ToL2MessageReaderOrWriter`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SignerOrProvider` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2SignerOrProvider` | `T` |
| `chainId` | `number` |
| `sender` | `string` |
| `messageNumber` | `BigNumber` |
| `l1BaseFee` | `BigNumber` |
| `messageData` | `RetryableMessageParams` |

#### Returns

`L1ToL2MessageReaderOrWriter`\<`T`\>

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[fromEventComponents](L1ToL2MessageReader.md#fromeventcomponents)

#### Defined in

[src/lib/message/L1ToL2Message.ts:172](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L172)

___

### getLifetime

▸ **getLifetime**(`l2Provider`): `Promise`\<`BigNumber`\>

The minimium lifetime of a retryable tx

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

[L1ToL2MessageReader](L1ToL2MessageReader.md).[getLifetime](L1ToL2MessageReader.md#getlifetime)

#### Defined in

[src/lib/message/L1ToL2Message.ts:504](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L504)
