---
id: "EventFetcher"
title: "Class EventFetcher"
sidebar_label: "EventFetcher"
sidebar_position: 0
custom_edit_url: null
---

Fetches and parses blockchain logs

## Constructors

### constructor

• **new EventFetcher**(`provider`): [`EventFetcher`](EventFetcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

[`EventFetcher`](EventFetcher.md)

#### Defined in

[src/lib/utils/eventFetcher.ts:48](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/eventFetcher.ts#L48)

## Properties

### provider

• `Readonly` **provider**: `Provider`

#### Defined in

[src/lib/utils/eventFetcher.ts:48](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/eventFetcher.ts#L48)

## Methods

### getEvents

▸ **getEvents**\<`TContract`, `TEventFilter`\>(`contractFactory`, `topicGenerator`, `filter`): `Promise`\<`FetchedEvent`\<`TEventOf`\<`TEventFilter`\>\>[]\>

Fetch logs and parse logs

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `Contract` |
| `TEventFilter` | extends `TypedEventFilter`\<`TypedEvent`\<`any`, `any`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractFactory` | `TypeChainContractFactory`\<`TContract`\> | A contract factory for generating a contract of type TContract at the addr |
| `topicGenerator` | (`t`: `TContract`) => `TEventFilter` | Generator function for creating |
| `filter` | `Object` | Block and address filter parameters |
| `filter.address?` | `string` | - |
| `filter.fromBlock` | `BlockTag` | - |
| `filter.toBlock` | `BlockTag` | - |

#### Returns

`Promise`\<`FetchedEvent`\<`TEventOf`\<`TEventFilter`\>\>[]\>

#### Defined in

[src/lib/utils/eventFetcher.ts:57](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/eventFetcher.ts#L57)