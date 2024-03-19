---
id: "L2ToL1Message"
title: "Class L2ToL1Message"
sidebar_label: "L2ToL1Message"
sidebar_position: 0
custom_edit_url: null
---

Base functionality for L2->L1 messages

## Hierarchy

- **`L2ToL1Message`**

  ↳ [`L2ToL1MessageReader`](L2ToL1MessageReader.md)

## Constructors

### constructor

• **new L2ToL1Message**(): [`L2ToL1Message`](L2ToL1Message.md)

#### Returns

[`L2ToL1Message`](L2ToL1Message.md)

## Methods

### isClassic

▸ **isClassic**(`e`): e is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `L2ToL1TransactionEvent` |

#### Returns

e is Object

#### Defined in

[src/lib/message/L2ToL1Message.ts:58](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L58)

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

#### Defined in

[src/lib/message/L2ToL1Message.ts:102](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L2ToL1Message.ts#L102)
