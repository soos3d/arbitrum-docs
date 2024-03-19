---
id: "L1ToL2MessageReaderClassic"
title: "Class L1ToL2MessageReaderClassic"
sidebar_label: "L1ToL2MessageReaderClassic"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new L1ToL2MessageReaderClassic**(`l2Provider`, `chainId`, `messageNumber`): [`L1ToL2MessageReaderClassic`](L1ToL2MessageReaderClassic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |
| `chainId` | `number` |
| `messageNumber` | `BigNumber` |

#### Returns

[`L1ToL2MessageReaderClassic`](L1ToL2MessageReaderClassic.md)

#### Defined in

[src/lib/message/L1ToL2Message.ts:546](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L546)

## Properties

### autoRedeemId

• `Readonly` **autoRedeemId**: `string`

#### Defined in

[src/lib/message/L1ToL2Message.ts:542](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L542)

___

### l2Provider

• `Readonly` **l2Provider**: `Provider`

#### Defined in

[src/lib/message/L1ToL2Message.ts:544](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L544)

___

### l2TxHash

• `Readonly` **l2TxHash**: `string`

#### Defined in

[src/lib/message/L1ToL2Message.ts:543](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L543)

___

### messageNumber

• `Readonly` **messageNumber**: `BigNumber`

#### Defined in

[src/lib/message/L1ToL2Message.ts:540](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L540)

___

### retryableCreationId

• `Readonly` **retryableCreationId**: `string`

#### Defined in

[src/lib/message/L1ToL2Message.ts:541](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L541)

___

### retryableCreationReceipt

• `Private` **retryableCreationReceipt**: `undefined` \| ``null`` \| `TransactionReceipt`

#### Defined in

[src/lib/message/L1ToL2Message.ts:539](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L539)

## Methods

### calculateL2DerivedHash

▸ **calculateL2DerivedHash**(`retryableCreationId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `retryableCreationId` | `string` |

#### Returns

`string`

#### Defined in

[src/lib/message/L1ToL2Message.ts:573](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L573)

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

#### Defined in

[src/lib/message/L1ToL2Message.ts:589](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L589)

___

### status

▸ **status**(): `Promise`\<[`L1ToL2MessageStatus`](../enums/L1ToL2MessageStatus.md)\>

#### Returns

`Promise`\<[`L1ToL2MessageStatus`](../enums/L1ToL2MessageStatus.md)\>

#### Defined in

[src/lib/message/L1ToL2Message.ts:605](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1ToL2Message.ts#L605)
