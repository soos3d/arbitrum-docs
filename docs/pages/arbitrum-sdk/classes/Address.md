---
id: "Address"
title: "Class: Address"
sidebar_label: "Address"
sidebar_position: 0
custom_edit_url: null
---

Ethereum/Arbitrum address class

## Constructors

### constructor

• **new Address**(`value`): [`Address`](Address.md)

Ethereum/Arbitrum address class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | A valid Ethereum address. Doesn't need to be checksum cased. |

#### Returns

[`Address`](Address.md)

#### Defined in

[src/lib/dataEntities/address.ts:18](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L18)

## Properties

### ADDRESS\_ALIAS\_OFFSET\_BIG\_INT

• `Private` `Readonly` **ADDRESS\_ALIAS\_OFFSET\_BIG\_INT**: `bigint`

#### Defined in

[src/lib/dataEntities/address.ts:10](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L10)

___

### ADDRESS\_BIT\_LENGTH

• `Private` `Readonly` **ADDRESS\_BIT\_LENGTH**: ``160``

#### Defined in

[src/lib/dataEntities/address.ts:11](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L11)

___

### ADDRESS\_NIBBLE\_LENGTH

• `Private` `Readonly` **ADDRESS\_NIBBLE\_LENGTH**: `number`

#### Defined in

[src/lib/dataEntities/address.ts:12](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L12)

___

### value

• `Readonly` **value**: `string`

A valid Ethereum address. Doesn't need to be checksum cased.

#### Defined in

[src/lib/dataEntities/address.ts:18](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L18)

## Methods

### alias

▸ **alias**(`address`, `forward`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `forward` | `boolean` |

#### Returns

`string`

#### Defined in

[src/lib/dataEntities/address.ts:23](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L23)

___

### applyAlias

▸ **applyAlias**(): [`Address`](Address.md)

Find the L2 alias of an L1 address

#### Returns

[`Address`](Address.md)

#### Defined in

[src/lib/dataEntities/address.ts:43](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L43)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Address`](Address.md) |

#### Returns

`boolean`

#### Defined in

[src/lib/dataEntities/address.ts:55](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L55)

___

### undoAlias

▸ **undoAlias**(): [`Address`](Address.md)

Find the L1 alias of an L2 address

#### Returns

[`Address`](Address.md)

#### Defined in

[src/lib/dataEntities/address.ts:51](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/address.ts#L51)
