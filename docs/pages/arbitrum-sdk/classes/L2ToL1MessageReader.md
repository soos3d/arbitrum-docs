---
id: "L2ToL1MessageReader"
title: "Class: L2ToL1MessageReader"
sidebar_label: "L2ToL1MessageReader"
sidebar_position: 0
custom_edit_url: null
---

Provides read-only access for l2-to-l1-messages

## Hierarchy

- [`L2ToL1Message`](L2ToL1Message.md)

  ↳ **`L2ToL1MessageReader`**

  ↳↳ [`L2ToL1MessageWriter`](L2ToL1MessageWriter.md)

## Constructors

### constructor

• **new L2ToL1MessageReader**(`l1Provider`, `event`): [`L2ToL1MessageReader`](L2ToL1MessageReader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1Provider` | `Provider` |
| `event` | `L2ToL1TransactionEvent` |

#### Returns

[`L2ToL1MessageReader`](L2ToL1MessageReader.md)

#### Overrides

[L2ToL1Message](L2ToL1Message.md).[constructor](L2ToL1Message.md#constructor)

#### Defined in

[src/lib/message/L2ToL1Message.ts:197](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L197)

## Properties

### classicReader

• `Private` `Optional` `Readonly` **classicReader**: `L2ToL1MessageReaderClassic`

#### Defined in

[src/lib/message/L2ToL1Message.ts:194](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L194)

___

### l1Provider

• `Protected` `Readonly` **l1Provider**: `Provider`

#### Defined in

[src/lib/message/L2ToL1Message.ts:198](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L198)

___

### nitroReader

• `Private` `Optional` `Readonly` **nitroReader**: `L2ToL1MessageReaderNitro`

#### Defined in

[src/lib/message/L2ToL1Message.ts:195](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L195)

## Methods

### getFirstExecutableBlock

▸ **getFirstExecutableBlock**(`l2Provider`): `Promise`\<``null`` \| `BigNumber`\>

Estimates the L1 block number in which this L2 to L1 tx will be available for execution.
If the message can or already has been executed, this returns null

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<``null`` \| `BigNumber`\>

expected L1 block number where the L2 to L1 message will be executable. Returns null if the message can or already has been executed

#### Defined in

[src/lib/message/L2ToL1Message.ts:258](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L258)

___

### getOutboxProof

▸ **getOutboxProof**(`l2Provider`): `Promise`\<``null`` \| `string`[] \| `MessageBatchProofInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<``null`` \| `string`[] \| `MessageBatchProofInfo`\>

#### Defined in

[src/lib/message/L2ToL1Message.ts:213](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L213)

___

### isClassic

▸ **isClassic**(`e`): e is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `L2ToL1TransactionEvent` |

#### Returns

e is Object

#### Inherited from

[L2ToL1Message](L2ToL1Message.md).[isClassic](L2ToL1Message.md#isclassic)

#### Defined in

[src/lib/message/L2ToL1Message.ts:58](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L58)

___

### status

▸ **status**(`l2Provider`): `Promise`\<[`L2ToL1MessageStatus`](../enums/L2ToL1MessageStatus.md)\>

Get the status of this message
In order to check if the message has been executed proof info must be provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<[`L2ToL1MessageStatus`](../enums/L2ToL1MessageStatus.md)\>

#### Defined in

[src/lib/message/L2ToL1Message.ts:226](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L226)

___

### waitUntilReadyToExecute

▸ **waitUntilReadyToExecute**(`l2Provider`, `retryDelay?`): `Promise`\<[`CONFIRMED`](../enums/L2ToL1MessageStatus.md#confirmed) \| [`EXECUTED`](../enums/L2ToL1MessageStatus.md#executed)\>

Waits until the outbox entry has been created, and will not return until it has been.
WARNING: Outbox entries are only created when the corresponding node is confirmed. Which
can take 1 week+, so waiting here could be a very long operation.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `l2Provider` | `Provider` | `undefined` |
| `retryDelay` | `number` | `500` |

#### Returns

`Promise`\<[`CONFIRMED`](../enums/L2ToL1MessageStatus.md#confirmed) \| [`EXECUTED`](../enums/L2ToL1MessageStatus.md#executed)\>

outbox entry status (either executed or confirmed but not pending)

#### Defined in

[src/lib/message/L2ToL1Message.ts:239](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L239)

___

### fromEvent

▸ **fromEvent**\<`T`\>(`l1SignerOrProvider`, `event`, `l1Provider?`): `L2ToL1MessageReaderOrWriter`\<`T`\>

Instantiates a new `L2ToL1MessageWriter` or `L2ToL1MessageReader` object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SignerOrProvider` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l1SignerOrProvider` | `T` | Signer or provider to be used for executing or reading the L2-to-L1 message. |
| `event` | `L2ToL1TransactionEvent` | The event containing the data of the L2-to-L1 message. |
| `l1Provider?` | `Provider` | Optional. Used to override the Provider which is attached to `l1SignerOrProvider` in case you need more control. This will be a required parameter in a future major version update. |

#### Returns

`L2ToL1MessageReaderOrWriter`\<`T`\>

#### Inherited from

[L2ToL1Message](L2ToL1Message.md).[fromEvent](L2ToL1Message.md#fromevent)

#### Defined in

[src/lib/message/L2ToL1Message.ts:73](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L73)

___

### getL2ToL1Events

▸ **getL2ToL1Events**(`l2Provider`, `filter`, `position?`, `destination?`, `hash?`, `indexInBatch?`): `Promise`\<`L2ToL1TransactionEvent` & \{ `transactionHash`: `string`  }[]\>

Get event logs for L2ToL1 transactions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l2Provider` | `Provider` |  |
| `filter` | `Object` | Block range filter |
| `filter.fromBlock` | `BlockTag` | - |
| `filter.toBlock` | `BlockTag` | - |
| `position?` | `BigNumber` | The batchnumber indexed field was removed in nitro and a position indexed field was added. For pre-nitro events the value passed in here will be used to find events with the same batchnumber. For post nitro events it will be used to find events with the same position. |
| `destination?` | `string` | The L1 destination of the L2ToL1 message |
| `hash?` | `BigNumber` | The uniqueId indexed field was removed in nitro and a hash indexed field was added. For pre-nitro events the value passed in here will be used to find events with the same uniqueId. For post nitro events it will be used to find events with the same hash. |
| `indexInBatch?` | `BigNumber` | The index in the batch, only valid for pre-nitro events. This parameter is ignored post-nitro |

#### Returns

`Promise`\<`L2ToL1TransactionEvent` & \{ `transactionHash`: `string`  }[]\>

Any classic and nitro events that match the provided filters.

#### Inherited from

[L2ToL1Message](L2ToL1Message.md).[getL2ToL1Events](L2ToL1Message.md#getl2tol1events)

#### Defined in

[src/lib/message/L2ToL1Message.ts:102](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L102)
