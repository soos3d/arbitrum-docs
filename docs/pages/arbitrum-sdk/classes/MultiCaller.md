---
id: "MultiCaller"
title: "Class: MultiCaller"
sidebar_label: "MultiCaller"
sidebar_position: 0
custom_edit_url: null
---

Util for executing multi calls against the MultiCallV2 contract

## Constructors

### constructor

• **new MultiCaller**(`provider`, `address`): [`MultiCaller`](MultiCaller.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `Provider` | - |
| `address` | `string` | Address of multicall contract |

#### Returns

[`MultiCaller`](MultiCaller.md)

#### Defined in

[src/lib/utils/multicall.ts:119](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L119)

## Properties

### address

• `Readonly` **address**: `string`

Address of multicall contract

#### Defined in

[src/lib/utils/multicall.ts:124](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L124)

___

### provider

• `Private` `Readonly` **provider**: `Provider`

#### Defined in

[src/lib/utils/multicall.ts:120](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L120)

## Methods

### getBlockNumberInput

▸ **getBlockNumberInput**(): [`CallInput`](../#callinput)\<`BigNumber`\>

Get the call input for the current block number

#### Returns

[`CallInput`](../#callinput)\<`BigNumber`\>

#### Defined in

[src/lib/utils/multicall.ts:163](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L163)

___

### getCurrentBlockTimestampInput

▸ **getCurrentBlockTimestampInput**(): [`CallInput`](../#callinput)\<`BigNumber`\>

Get the call input for the current block timestamp

#### Returns

[`CallInput`](../#callinput)\<`BigNumber`\>

#### Defined in

[src/lib/utils/multicall.ts:179](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L179)

___

### getTokenData

▸ **getTokenData**\<`T`\>(`erc20Addresses`, `options?`): `Promise`\<`TokenInputOutput`\<`T`\>[]\>

Multicall for token properties. Will collect all the requested properies for each of the
supplied token addresses.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `undefined` \| `TokenMultiInput` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `erc20Addresses` | `string`[] |  |
| `options?` | `T` | Defaults to just 'name' |

#### Returns

`Promise`\<`TokenInputOutput`\<`T`\>[]\>

#### Defined in

[src/lib/utils/multicall.ts:261](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L261)

___

### multiCall

▸ **multiCall**\<`T`, `TRequireSuccess`\>(`params`, `requireSuccess?`): `Promise`\<`DecoderReturnType`\<`T`, `TRequireSuccess`\>\>

Executes a multicall for the given parameters
Return values are order the same as the inputs.
If a call failed undefined is returned instead of the value.

To get better type inference when the individual calls are of different types
create your inputs as a tuple and pass the tuple in. The return type will be
a tuple of the decoded return types. eg.

```typescript
  const inputs: [
    CallInput<Awaited<ReturnType<ERC20['functions']['balanceOf']>>[0]>,
    CallInput<Awaited<ReturnType<ERC20['functions']['name']>>[0]>
  ] = [
    {
      targetAddr: token.address,
      encoder: () => token.interface.encodeFunctionData('balanceOf', ['']),
      decoder: (returnData: string) =>
        token.interface.decodeFunctionResult('balanceOf', returnData)[0],
    },
    {
      targetAddr: token.address,
      encoder: () => token.interface.encodeFunctionData('name'),
      decoder: (returnData: string) =>
        token.interface.decodeFunctionResult('name', returnData)[0],
    },
  ]

  const res = await multiCaller.call(inputs)
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CallInput`](../#callinput)\<`unknown`\>[] |
| `TRequireSuccess` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `T` |  |
| `requireSuccess?` | `TRequireSuccess` | Fail the whole call if any internal call fails |

#### Returns

`Promise`\<`DecoderReturnType`\<`T`, `TRequireSuccess`\>\>

#### Defined in

[src/lib/utils/multicall.ts:227](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L227)

___

### fromProvider

▸ **fromProvider**(`provider`): `Promise`\<[`MultiCaller`](MultiCaller.md)\>

Finds the correct multicall address for the given provider and instantiates a multicaller

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`Promise`\<[`MultiCaller`](MultiCaller.md)\>

#### Defined in

[src/lib/utils/multicall.ts:132](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L132)
