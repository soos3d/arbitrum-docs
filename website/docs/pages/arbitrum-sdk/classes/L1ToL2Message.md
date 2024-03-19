---
id: "L1ToL2Message"
title: "Class L1ToL2Message"
sidebar_label: "L1ToL2Message"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`L1ToL2Message`**

  ↳ [`L1ToL2MessageReader`](L1ToL2MessageReader.md)

## Constructors

### constructor

• **new L1ToL2Message**(`chainId`, `sender`, `messageNumber`, `l1BaseFee`, `messageData`): [`L1ToL2Message`](L1ToL2Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |
| `sender` | `string` |
| `messageNumber` | `BigNumber` |
| `l1BaseFee` | `BigNumber` |
| `messageData` | `RetryableMessageParams` |

#### Returns

[`L1ToL2Message`](L1ToL2Message.md)

#### Defined in

[src/lib/message/L1ToL2Message.ts:207](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L207)

## Properties

### chainId

• `Readonly` **chainId**: `number`

#### Defined in

[src/lib/message/L1ToL2Message.ts:208](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L208)

___

### l1BaseFee

• `Readonly` **l1BaseFee**: `BigNumber`

#### Defined in

[src/lib/message/L1ToL2Message.ts:211](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L211)

___

### messageData

• `Readonly` **messageData**: `RetryableMessageParams`

#### Defined in

[src/lib/message/L1ToL2Message.ts:212](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L212)

___

### messageNumber

• `Readonly` **messageNumber**: `BigNumber`

#### Defined in

[src/lib/message/L1ToL2Message.ts:210](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L210)

___

### retryableCreationId

• `Readonly` **retryableCreationId**: `string`

When messages are sent from L1 to L2 a retryable ticket is created on L2.
The retryableCreationId can be used to retrieve information about the success or failure of the
creation of the retryable ticket.

#### Defined in

[src/lib/message/L1ToL2Message.ts:103](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L103)

___

### sender

• `Readonly` **sender**: `string`

#### Defined in

[src/lib/message/L1ToL2Message.ts:209](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L209)

## Methods

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

#### Defined in

[src/lib/message/L1ToL2Message.ts:172](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L172)
