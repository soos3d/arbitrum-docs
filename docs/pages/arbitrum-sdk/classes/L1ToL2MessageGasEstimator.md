---
id: "L1ToL2MessageGasEstimator"
title: "Class: L1ToL2MessageGasEstimator"
sidebar_label: "L1ToL2MessageGasEstimator"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new L1ToL2MessageGasEstimator**(`l2Provider`): [`L1ToL2MessageGasEstimator`](L1ToL2MessageGasEstimator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

[`L1ToL2MessageGasEstimator`](L1ToL2MessageGasEstimator.md)

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:74](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L74)

## Properties

### l2Provider

• `Readonly` **l2Provider**: `Provider`

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:74](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L74)

## Methods

### applyGasLimitDefaults

▸ **applyGasLimitDefaults**(`gasLimitDefaults?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gasLimitDefaults?` | `PercentIncrease` & \{ `min?`: `BigNumber`  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | `undefined` \| `BigNumber` |
| `min` | `BigNumber` \| `BigNumber` |
| `percentIncrease` | `BigNumber` \| `BigNumber` |

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:100](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L100)

___

### applyMaxFeePerGasDefaults

▸ **applyMaxFeePerGasDefaults**(`maxFeePerGasOptions?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGasOptions?` | `PercentIncrease` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | `undefined` \| `BigNumber` |
| `percentIncrease` | `BigNumber` |

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:91](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L91)

___

### applySubmissionPriceDefaults

▸ **applySubmissionPriceDefaults**(`maxSubmissionFeeOptions?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSubmissionFeeOptions?` | `PercentIncrease` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | `undefined` \| `BigNumber` |
| `percentIncrease` | `BigNumber` |

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:80](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L80)

___

### estimateAll

▸ **estimateAll**(`retryableEstimateData`, `l1BaseFee`, `l1Provider`, `options?`): `Promise`\<`L1ToL2MessageGasParams`\>

Get gas limit, gas price and submission price estimates for sending an L1->L2 message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `retryableEstimateData` | `L1ToL2MessageNoGasParams` | - |
| `l1BaseFee` | `BigNumber` | Current l1 base fee |
| `l1Provider` | `Provider` |  |
| `options?` | `GasOverrides` |  |

#### Returns

`Promise`\<`L1ToL2MessageGasParams`\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:214](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L214)

___

### estimateMaxFeePerGas

▸ **estimateMaxFeePerGas**(`options?`): `Promise`\<`BigNumber`\>

Provides an estimate for the L2 maxFeePerGas, adding some margin to allow for gas price variation

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `PercentIncrease` |

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:177](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L177)

___

### estimateRetryableTicketGasLimit

▸ **estimateRetryableTicketGasLimit**(`retryableData`, `senderDeposit?`): `Promise`\<`BigNumber`\>

Estimate the amount of L2 gas required for putting the transaction in the L2 inbox, and executing it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `retryableData` | `L1ToL2MessageNoGasParams` | object containing retryable ticket data |
| `senderDeposit` | `BigNumber` | we dont know how much gas the transaction will use when executing so by default we supply a dummy amount of call value that will definately be more than we need |

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:145](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L145)

___

### estimateSubmissionFee

▸ **estimateSubmissionFee**(`l1Provider`, `l1BaseFee`, `callDataSize`, `options?`): `Promise`\<`BigNumber`\>

Return the fee, in wei, of submitting a new retryable tx with a given calldata size.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1Provider` | `Provider` |
| `l1BaseFee` | `BigNumber` |
| `callDataSize` | `number` \| `BigNumber` |
| `options?` | `PercentIncrease` |

#### Returns

`Promise`\<`BigNumber`\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:120](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L120)

___

### percentIncrease

▸ **percentIncrease**(`num`, `increase`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `BigNumber` |
| `increase` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:76](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L76)

___

### populateFunctionParams

▸ **populateFunctionParams**(`dataFunc`, `l1Provider`, `gasOverrides?`): `Promise`\<\{ `data`: `BytesLike` ; `estimates`: `L1ToL2MessageGasParams` ; `retryable`: [`RetryableData`](../interfaces/RetryableData.md) ; `to`: `string` ; `value`: `BigNumberish`  }\>

Transactions that make an L1->L2 message need to estimate L2 gas parameters
This function does that, and populates those parameters into a transaction request

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataFunc` | (`params`: `OmitTyped`\<`L1ToL2MessageGasParams`, ``"deposit"``\>) => `Required`\<`Pick`\<`TransactionRequest`, ``"data"`` \| ``"value"`` \| ``"to"`` \| ``"from"``\>\> |
| `l1Provider` | `Provider` |
| `gasOverrides?` | `GasOverrides` |

#### Returns

`Promise`\<\{ `data`: `BytesLike` ; `estimates`: `L1ToL2MessageGasParams` ; `retryable`: [`RetryableData`](../interfaces/RetryableData.md) ; `to`: `string` ; `value`: `BigNumberish`  }\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:278](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L278)

___

### isValid

▸ **isValid**(`estimates`, `reEstimates`): `Promise`\<`boolean`\>

Checks if the estimate is valid when compared with a new one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `estimates` | `L1ToL2MessageGasParams` | Original estimate |
| `reEstimates` | `L1ToL2MessageGasParams` | Estimate to compare against |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/message/L1ToL2MessageGasEstimator.ts:195](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2MessageGasEstimator.ts#L195)
