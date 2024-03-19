---
id: "RetryableData"
title: "Interface RetryableData"
sidebar_label: "RetryableData"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### callValueRefundAddress

• **callValueRefundAddress**: `string`

The address to refund the call value to in the event the retryable is cancelled, or expires

#### Defined in

[src/lib/dataEntities/retryableData.ts:36](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L36)

___

### data

• **data**: `string`

The data to call the L2 address with

#### Defined in

[src/lib/dataEntities/retryableData.ts:48](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L48)

___

### deposit

• **deposit**: `BigNumber`

The total amount to deposit on L1 to cover L2 gas and L2 call value

#### Defined in

[src/lib/dataEntities/retryableData.ts:24](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L24)

___

### excessFeeRefundAddress

• **excessFeeRefundAddress**: `string`

The address to return the any gas that was not spent on fees

#### Defined in

[src/lib/dataEntities/retryableData.ts:32](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L32)

___

### from

• **from**: `string`

#### Defined in

[src/lib/dataEntities/retryableData.ts:12](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L12)

___

### gasLimit

• **gasLimit**: `BigNumber`

The L2 gas limit

#### Defined in

[src/lib/dataEntities/retryableData.ts:40](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L40)

___

### l2CallValue

• **l2CallValue**: `BigNumber`

The value to call the L2 address with

#### Defined in

[src/lib/dataEntities/retryableData.ts:20](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L20)

___

### maxFeePerGas

• **maxFeePerGas**: `BigNumber`

The max gas price to pay on L2

#### Defined in

[src/lib/dataEntities/retryableData.ts:44](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L44)

___

### maxSubmissionCost

• **maxSubmissionCost**: `BigNumber`

The maximum cost to be paif for submitting the transaction

#### Defined in

[src/lib/dataEntities/retryableData.ts:28](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L28)

___

### to

• **to**: `string`

The address to be called on L2

#### Defined in

[src/lib/dataEntities/retryableData.ts:16](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/retryableData.ts#L16)
