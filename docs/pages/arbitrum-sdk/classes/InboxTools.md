---
id: "InboxTools"
title: "Class: InboxTools"
sidebar_label: "InboxTools"
sidebar_position: 0
custom_edit_url: null
---

Tools for interacting with the inbox and bridge contracts

## Constructors

### constructor

• **new InboxTools**(`l1Signer`, `l2Network`): [`InboxTools`](InboxTools.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1Signer` | `Signer` |
| `l2Network` | [`L2Network`](../interfaces/L2Network.md) |

#### Returns

[`InboxTools`](InboxTools.md)

#### Defined in

[src/lib/inbox/inbox.ts:63](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L63)

## Properties

### l1Network

• `Private` `Readonly` **l1Network**: [`L1Network`](../interfaces/L1Network.md)

#### Defined in

[src/lib/inbox/inbox.ts:61](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L61)

___

### l1Provider

• `Private` `Readonly` **l1Provider**: `Provider`

#### Defined in

[src/lib/inbox/inbox.ts:60](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L60)

___

### l1Signer

• `Private` `Readonly` **l1Signer**: `Signer`

#### Defined in

[src/lib/inbox/inbox.ts:64](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L64)

___

### l2Network

• `Private` `Readonly` **l2Network**: [`L2Network`](../interfaces/L2Network.md)

#### Defined in

[src/lib/inbox/inbox.ts:65](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L65)

## Methods

### estimateArbitrumGas

▸ **estimateArbitrumGas**(`transactionl2Request`, `l2Provider`): `Promise`\<`GasComponentsWithL2Part`\>

We should use nodeInterface to get the gas estimate is because we
are making a delayed inbox message which doesn't need l1 calldata
gas fee part.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionl2Request` | `RequiredTransactionRequestType` |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<`GasComponentsWithL2Part`\>

#### Defined in

[src/lib/inbox/inbox.ts:120](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L120)

___

### findFirstBlockBelow

▸ **findFirstBlockBelow**(`blockNumber`, `blockTimestamp`): `Promise`\<`Block`\>

Find the first (or close to first) block whose number
is below the provided number, and whose timestamp is below
the provided timestamp

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |
| `blockTimestamp` | `number` |

#### Returns

`Promise`\<`Block`\>

#### Defined in

[src/lib/inbox/inbox.ts:83](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L83)

___

### forceInclude

▸ **forceInclude**\<`T`\>(`messageDeliveredEvent?`, `overrides?`): `Promise`\<`T` extends `ForceInclusionParams` ? `ContractTransaction` : ``null`` \| `ContractTransaction`\>

Force includes all eligible messages in the delayed inbox.
The inbox contract doesnt allow a message to be force-included
until after a delay period has been completed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `undefined` \| `ForceInclusionParams` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageDeliveredEvent?` | `T` | Provide this to include all messages up to this one. Responsibility is on the caller to check the eligibility of this event. |
| `overrides?` | `Overrides` | - |

#### Returns

`Promise`\<`T` extends `ForceInclusionParams` ? `ContractTransaction` : ``null`` \| `ContractTransaction`\>

The force include transaction, or null if no eligible message were found for inclusion

#### Defined in

[src/lib/inbox/inbox.ts:304](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L304)

___

### getEventsAndIncreaseRange

▸ **getEventsAndIncreaseRange**(`bridge`, `searchRangeBlocks`, `maxSearchRangeBlocks`, `rangeMultiplier`): `Promise`\<`FetchedEvent`\<`MessageDeliveredEvent`\>[]\>

Look for force includable events in the search range blocks, if no events are found the search range is
increased incrementally up to the max search range blocks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bridge` | `Bridge` |
| `searchRangeBlocks` | `number` |
| `maxSearchRangeBlocks` | `number` |
| `rangeMultiplier` | `number` |

#### Returns

`Promise`\<`FetchedEvent`\<`MessageDeliveredEvent`\>[]\>

#### Defined in

[src/lib/inbox/inbox.ts:204](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L204)

___

### getForceIncludableBlockRange

▸ **getForceIncludableBlockRange**(`blockNumberRangeSize`): `Promise`\<\{ `endBlock`: `number` = firstEligibleBlock.number; `startBlock`: `number`  }\>

Get a range of blocks within messages eligible for force inclusion emitted events

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumberRangeSize` | `number` |

#### Returns

`Promise`\<\{ `endBlock`: `number` = firstEligibleBlock.number; `startBlock`: `number`  }\>

#### Defined in

[src/lib/inbox/inbox.ts:150](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L150)

___

### getForceIncludableEvent

▸ **getForceIncludableEvent**(`maxSearchRangeBlocks?`, `startSearchRangeBlocks?`, `rangeMultipler?`): `Promise`\<``null`` \| `ForceInclusionParams`\>

Find the event of the latest message that can be force include

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `maxSearchRangeBlocks` | `number` | `undefined` | The max range of blocks to search in. Defaults to 3 * 6545 ( = ~3 days) prior to the first eligble block |
| `startSearchRangeBlocks` | `number` | `100` | The start range of block to search in. Moves incrementally up to the maxSearchRangeBlocks. Defaults to 100; |
| `rangeMultipler` | `number` | `2` | - |

#### Returns

`Promise`\<``null`` \| `ForceInclusionParams`\>

Null if non can be found.

#### Defined in

[src/lib/inbox/inbox.ts:255](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L255)

___

### isContractCreation

▸ **isContractCreation**(`transactionl2Request`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionl2Request` | `TransactionRequest` |

#### Returns

`boolean`

#### Defined in

[src/lib/inbox/inbox.ts:102](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L102)

___

### sendL2SignedTx

▸ **sendL2SignedTx**(`signedTx`): `Promise`\<``null`` \| `ContractTransaction`\>

Send l2 signed tx using delayed inox, which won't alias the sender's adddress
It will be automatically included by the sequencer on l2, if it isn't included
within 24 hours, you can force include it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signedTx` | `string` | A signed transaction which can be sent directly to network, you can call inboxTools.signL2Message to get. |

#### Returns

`Promise`\<``null`` \| `ContractTransaction`\>

The l1 delayed inbox's transaction itself.

#### Defined in

[src/lib/inbox/inbox.ts:349](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L349)

___

### signL2Tx

▸ **signL2Tx**(`txRequest`, `l2Signer`): `Promise`\<`string`\>

Sign a transaction with msg.to, msg.value and msg.data.
You can use this as a helper to call inboxTools.sendL2SignedMessage
above.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txRequest` | `RequiredTransactionRequestType` | - |
| `l2Signer` | `Signer` | ethers Signer type, used to sign l2 transaction |

#### Returns

`Promise`\<`string`\>

The l1 delayed inbox's transaction signed data.

#### Defined in

[src/lib/inbox/inbox.ts:377](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/inbox/inbox.ts#L377)
