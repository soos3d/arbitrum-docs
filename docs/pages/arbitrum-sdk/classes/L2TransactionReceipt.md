---
id: "L2TransactionReceipt"
title: "Class: L2TransactionReceipt"
sidebar_label: "L2TransactionReceipt"
sidebar_position: 0
custom_edit_url: null
---

Extension of ethers-js TransactionReceipt, adding Arbitrum-specific functionality

## Implements

- `TransactionReceipt`

## Constructors

### constructor

• **new L2TransactionReceipt**(`tx`): [`L2TransactionReceipt`](L2TransactionReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `TransactionReceipt` |

#### Returns

[`L2TransactionReceipt`](L2TransactionReceipt.md)

#### Defined in

[src/lib/message/L2Transaction.ts:73](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L73)

## Properties

### blockHash

• `Readonly` **blockHash**: `string`

#### Implementation of

TransactionReceipt.blockHash

#### Defined in

[src/lib/message/L2Transaction.ts:62](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L62)

___

### blockNumber

• `Readonly` **blockNumber**: `number`

#### Implementation of

TransactionReceipt.blockNumber

#### Defined in

[src/lib/message/L2Transaction.ts:65](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L65)

___

### byzantium

• `Readonly` **byzantium**: `boolean`

#### Implementation of

TransactionReceipt.byzantium

#### Defined in

[src/lib/message/L2Transaction.ts:69](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L69)

___

### confirmations

• `Readonly` **confirmations**: `number`

#### Implementation of

TransactionReceipt.confirmations

#### Defined in

[src/lib/message/L2Transaction.ts:66](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L66)

___

### contractAddress

• `Readonly` **contractAddress**: `string`

#### Implementation of

TransactionReceipt.contractAddress

#### Defined in

[src/lib/message/L2Transaction.ts:57](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L57)

___

### cumulativeGasUsed

• `Readonly` **cumulativeGasUsed**: `BigNumber`

#### Implementation of

TransactionReceipt.cumulativeGasUsed

#### Defined in

[src/lib/message/L2Transaction.ts:67](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L67)

___

### effectiveGasPrice

• `Readonly` **effectiveGasPrice**: `BigNumber`

#### Implementation of

TransactionReceipt.effectiveGasPrice

#### Defined in

[src/lib/message/L2Transaction.ts:68](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L68)

___

### from

• `Readonly` **from**: `string`

#### Implementation of

TransactionReceipt.from

#### Defined in

[src/lib/message/L2Transaction.ts:56](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L56)

___

### gasUsed

• `Readonly` **gasUsed**: `BigNumber`

#### Implementation of

TransactionReceipt.gasUsed

#### Defined in

[src/lib/message/L2Transaction.ts:60](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L60)

___

### logs

• `Readonly` **logs**: `Log`[]

#### Implementation of

TransactionReceipt.logs

#### Defined in

[src/lib/message/L2Transaction.ts:64](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L64)

___

### logsBloom

• `Readonly` **logsBloom**: `string`

#### Implementation of

TransactionReceipt.logsBloom

#### Defined in

[src/lib/message/L2Transaction.ts:61](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L61)

___

### root

• `Optional` `Readonly` **root**: `string`

#### Implementation of

TransactionReceipt.root

#### Defined in

[src/lib/message/L2Transaction.ts:59](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L59)

___

### status

• `Optional` `Readonly` **status**: `number`

#### Implementation of

TransactionReceipt.status

#### Defined in

[src/lib/message/L2Transaction.ts:71](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L71)

___

### to

• `Readonly` **to**: `string`

#### Implementation of

TransactionReceipt.to

#### Defined in

[src/lib/message/L2Transaction.ts:55](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L55)

___

### transactionHash

• `Readonly` **transactionHash**: `string`

#### Implementation of

TransactionReceipt.transactionHash

#### Defined in

[src/lib/message/L2Transaction.ts:63](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L63)

___

### transactionIndex

• `Readonly` **transactionIndex**: `number`

#### Implementation of

TransactionReceipt.transactionIndex

#### Defined in

[src/lib/message/L2Transaction.ts:58](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L58)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

TransactionReceipt.type

#### Defined in

[src/lib/message/L2Transaction.ts:70](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L70)

## Methods

### getBatchConfirmations

▸ **getBatchConfirmations**(`l2Provider`): `Promise`\<`BigNumber`\>

Get number of L1 confirmations that the batch including this tx has

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `JsonRpcProvider` |

#### Returns

`Promise`\<`BigNumber`\>

number of confirmations of batch including tx, or 0 if no batch included this tx

#### Defined in

[src/lib/message/L2Transaction.ts:138](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L138)

___

### getBatchNumber

▸ **getBatchNumber**(`l2Provider`): `Promise`\<`BigNumber`\>

Get the number of the batch that included this tx (will throw if no such batch exists)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `JsonRpcProvider` |

#### Returns

`Promise`\<`BigNumber`\>

number of batch in which tx was included, or errors if no batch includes the current tx

#### Defined in

[src/lib/message/L2Transaction.ts:151](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L151)

___

### getL2ToL1Events

▸ **getL2ToL1Events**(): `L2ToL1TransactionEvent`[]

Get an L2ToL1TxEvent events created by this transaction

#### Returns

`L2ToL1TransactionEvent`[]

#### Defined in

[src/lib/message/L2Transaction.ts:97](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L97)

___

### getL2ToL1Messages

▸ **getL2ToL1Messages**\<`T`\>(`l1SignerOrProvider`): `Promise`\<`L2ToL1MessageReaderOrWriter`\<`T`\>[]\>

Get any l2-to-l1-messages created by this transaction

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SignerOrProvider` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1SignerOrProvider` | `T` |

#### Returns

`Promise`\<`L2ToL1MessageReaderOrWriter`\<`T`\>[]\>

#### Defined in

[src/lib/message/L2Transaction.ts:119](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L119)

___

### getRedeemScheduledEvents

▸ **getRedeemScheduledEvents**(): \{ `donatedGas`: `BigNumber` ; `gasDonor`: `string` ; `maxRefund`: `BigNumber` ; `retryTxHash`: `string` ; `sequenceNum`: `BigNumber` ; `submissionFeeRefund`: `BigNumber` ; `ticketId`: `string`  }[]

Get event data for any redeems that were scheduled in this transaction

#### Returns

\{ `donatedGas`: `BigNumber` ; `gasDonor`: `string` ; `maxRefund`: `BigNumber` ; `retryTxHash`: `string` ; `sequenceNum`: `BigNumber` ; `submissionFeeRefund`: `BigNumber` ; `ticketId`: `string`  }[]

#### Defined in

[src/lib/message/L2Transaction.ts:111](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L111)

___

### isDataAvailable

▸ **isDataAvailable**(`l2Provider`, `confirmations?`): `Promise`\<`boolean`\>

Whether the data associated with this transaction has been
made available on L1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `l2Provider` | `JsonRpcProvider` | `undefined` |  |
| `confirmations` | `number` | `10` | The number of confirmations on the batch before data is to be considered available |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/message/L2Transaction.ts:173](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L173)

___

### monkeyPatchWait

▸ **monkeyPatchWait**(`contractTransaction`): [`L2ContractTransaction`](../interfaces/L2ContractTransaction.md)

Replaces the wait function with one that returns an L2TransactionReceipt

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractTransaction` | `ContractTransaction` |

#### Returns

[`L2ContractTransaction`](../interfaces/L2ContractTransaction.md)

#### Defined in

[src/lib/message/L2Transaction.ts:187](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L187)

___

### toRedeemTransaction

▸ **toRedeemTransaction**(`redeemTx`, `l2Provider`): `RedeemTransaction`

Adds a waitForRedeem function to a redeem transaction

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemTx` | [`L2ContractTransaction`](../interfaces/L2ContractTransaction.md) |
| `l2Provider` | `Provider` |

#### Returns

`RedeemTransaction`

#### Defined in

[src/lib/message/L2Transaction.ts:208](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2Transaction.ts#L208)
