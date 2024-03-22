---
id: "L2ToL1MessageWriter"
title: "Class L2ToL1MessageWriter"
sidebar_label: "L2ToL1MessageWriter"
sidebar_position: 0
custom_edit_url: null
---

Provides read and write access for l2-to-l1-messages

## Hierarchy

- [`L2ToL1MessageReader`](L2ToL1MessageReader.md)

  ↳ **`L2ToL1MessageWriter`**

## Constructors

### constructor

• **new L2ToL1MessageWriter**(`l1Signer`, `event`, `l1Provider?`): [`L2ToL1MessageWriter`](L2ToL1MessageWriter.md)

Instantiates a new `L2ToL1MessageWriter` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l1Signer` | `Signer` | The signer to be used for executing the L2-to-L1 message. |
| `event` | `L2ToL1TransactionEvent` | The event containing the data of the L2-to-L1 message. |
| `l1Provider?` | `Provider` | Optional. Used to override the Provider which is attached to `l1Signer` in case you need more control. This will be a required parameter in a future major version update. |

#### Returns

[`L2ToL1MessageWriter`](L2ToL1MessageWriter.md)

#### Overrides

[L2ToL1MessageReader](L2ToL1MessageReader.md).[constructor](L2ToL1MessageReader.md#constructor)

#### Defined in

[src/lib/message/L2ToL1Message.ts:281](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L281)

## Properties

### classicWriter

• `Private` `Optional` `Readonly` **classicWriter**: `L2ToL1MessageWriterClassic`

#### Defined in

[src/lib/message/L2ToL1Message.ts:271](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L271)

___

### l1Provider

• `Protected` `Readonly` **l1Provider**: `Provider`

#### Inherited from

[L2ToL1MessageReader](L2ToL1MessageReader.md).[l1Provider](L2ToL1MessageReader.md#l1provider)

#### Defined in

[src/lib/message/L2ToL1Message.ts:198](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L198)

___

### nitroWriter

• `Private` `Optional` `Readonly` **nitroWriter**: `L2ToL1MessageWriterNitro`

#### Defined in

[src/lib/message/L2ToL1Message.ts:272](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L272)

## Methods

### execute

▸ **execute**(`l2Provider`, `overrides?`): `Promise`\<`ContractTransaction`\>

Executes the L2ToL1Message on L1.
Will throw an error if the outbox entry has not been created, which happens when the
corresponding assertion is confirmed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |
| `overrides?` | `Overrides` |

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[src/lib/message/L2ToL1Message.ts:310](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L310)

___

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

#### Inherited from

[L2ToL1MessageReader](L2ToL1MessageReader.md).[getFirstExecutableBlock](L2ToL1MessageReader.md#getfirstexecutableblock)

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

#### Inherited from

[L2ToL1MessageReader](L2ToL1MessageReader.md).[getOutboxProof](L2ToL1MessageReader.md#getoutboxproof)

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

[L2ToL1MessageReader](L2ToL1MessageReader.md).[isClassic](L2ToL1MessageReader.md#isclassic)

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

#### Inherited from

[L2ToL1MessageReader](L2ToL1MessageReader.md).[status](L2ToL1MessageReader.md#status)

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

#### Inherited from

[L2ToL1MessageReader](L2ToL1MessageReader.md).[waitUntilReadyToExecute](L2ToL1MessageReader.md#waituntilreadytoexecute)

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

[L2ToL1MessageReader](L2ToL1MessageReader.md).[fromEvent](L2ToL1MessageReader.md#fromevent)

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

[L2ToL1MessageReader](L2ToL1MessageReader.md).[getL2ToL1Events](L2ToL1MessageReader.md#getl2tol1events)

#### Defined in

[src/lib/message/L2ToL1Message.ts:102](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L102)