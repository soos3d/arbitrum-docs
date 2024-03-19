---
id: "RetryableDataTools"
title: "Class RetryableDataTools"
sidebar_label: "RetryableDataTools"
sidebar_position: 0
custom_edit_url: null
---

Tools for parsing retryable data from errors.
When calling createRetryableTicket on Inbox.sol special values
can be passed for gasLimit and maxFeePerGas. This causes the call to revert
with the info needed to estimate the gas needed for a retryable ticket using
L1ToL2GasPriceEstimator.

## Constructors

### constructor

• **new RetryableDataTools**(): [`RetryableDataTools`](RetryableDataTools.md)

#### Returns

[`RetryableDataTools`](RetryableDataTools.md)

## Properties

### ErrorTriggeringParams

▪ `Static` **ErrorTriggeringParams**: `Object`

The parameters that should be passed to createRetryableTicket in order to induce
a revert with retryable data

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gasLimit` | `BigNumber` |
| `maxFeePerGas` | `BigNumber` |

#### Defined in

[src/lib/dataEntities/retryableData.ts:63](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L63)

## Methods

### isErrorData

▸ **isErrorData**(`maybeErrorData`): maybeErrorData is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeErrorData` | `Error` \| \{ `errorData`: `string`  } |

#### Returns

maybeErrorData is Object

#### Defined in

[src/lib/dataEntities/retryableData.ts:68](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L68)

___

### tryGetErrorData

▸ **tryGetErrorData**(`ethersJsError`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersJsError` | `Error` \| \{ `errorData`: `string`  } |

#### Returns

``null`` \| `string`

#### Defined in

[src/lib/dataEntities/retryableData.ts:74](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L74)

___

### tryParseError

▸ **tryParseError**(`ethersJsErrorOrData`): ``null`` \| [`RetryableData`](../interfaces/RetryableData.md)

Try to parse a retryable data struct from the supplied ethersjs error, or any explicitly supplied error data

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersJsErrorOrData` | `string` \| `Error` \| \{ `errorData`: `string`  } |

#### Returns

``null`` \| [`RetryableData`](../interfaces/RetryableData.md)

#### Defined in

[src/lib/dataEntities/retryableData.ts:114](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L114)
