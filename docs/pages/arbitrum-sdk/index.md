---
id: "index"
title: "@arbitrum/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [constants](namespaces/constants.md)

## Enumerations

- [EthDepositStatus](enums/EthDepositStatus.md)
- [L1ToL2MessageStatus](enums/L1ToL2MessageStatus.md)
- [L2ToL1MessageStatus](enums/L2ToL1MessageStatus.md)

## Classes

- [Address](classes/Address.md)
- [ArbitrumProvider](classes/ArbitrumProvider.md)
- [Erc20Bridger](classes/Erc20Bridger.md)
- [EthBridger](classes/EthBridger.md)
- [EventFetcher](classes/EventFetcher.md)
- [InboxTools](classes/InboxTools.md)
- [L1ToL2Message](classes/L1ToL2Message.md)
- [L1ToL2MessageGasEstimator](classes/L1ToL2MessageGasEstimator.md)
- [L1ToL2MessageReader](classes/L1ToL2MessageReader.md)
- [L1ToL2MessageReaderClassic](classes/L1ToL2MessageReaderClassic.md)
- [L1ToL2MessageWriter](classes/L1ToL2MessageWriter.md)
- [L1TransactionReceipt](classes/L1TransactionReceipt.md)
- [L2ToL1Message](classes/L2ToL1Message.md)
- [L2ToL1MessageReader](classes/L2ToL1MessageReader.md)
- [L2ToL1MessageWriter](classes/L2ToL1MessageWriter.md)
- [L2TransactionReceipt](classes/L2TransactionReceipt.md)
- [MultiCaller](classes/MultiCaller.md)
- [RetryableDataTools](classes/RetryableDataTools.md)

## Interfaces

- [L1ContractTransaction](interfaces/L1ContractTransaction.md)
- [L1Network](interfaces/L1Network.md)
- [L1Networks](interfaces/L1Networks.md)
- [L2ContractTransaction](interfaces/L2ContractTransaction.md)
- [L2Network](interfaces/L2Network.md)
- [L2Networks](interfaces/L2Networks.md)
- [RetryableData](interfaces/RetryableData.md)

## Type Aliases

### CallInput

Ƭ **CallInput**\<`T`\>: `Object`

Input to multicall aggregator

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `decoder` | (`returnData`: `string`) => `T` | Function to decode the result of the call |
| `encoder` | () => `string` | Function to produce encoded call data |
| `targetAddr` | `string` | Address of the target contract to be called |

#### Defined in

[src/lib/utils/multicall.ts:37](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/multicall.ts#L37)

## Functions

### addCustomNetwork

▸ **addCustomNetwork**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `customL1Network?` | [`L1Network`](interfaces/L1Network.md) |
| › `customL2Network` | [`L2Network`](interfaces/L2Network.md) |

#### Returns

`void`

#### Defined in

[src/lib/dataEntities/networks.ts:398](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/networks.ts#L398)

___

### addDefaultLocalNetwork

▸ **addDefaultLocalNetwork**(): `Object`

Registers a custom network that matches the one created by a Nitro local node. Useful in development.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `l1Network` | [`L1Network`](interfaces/L1Network.md) |
| `l2Network` | [`L2Network`](interfaces/L2Network.md) |

**`See`**

[https://github.com/OffchainLabs/nitro](https://github.com/OffchainLabs/nitro)

#### Defined in

[src/lib/dataEntities/networks.ts:445](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/networks.ts#L445)

___

### argSerializerConstructor

▸ **argSerializerConstructor**(`arbProvider`): (`params`: `PrimativeOrPrimativeArray`[]) => `Promise`\<`Uint8Array`\>

// to use:
```js
const mySerializeParamsFunction = argSerializerConstructor("rpcurl")
mySerializeParamsFunction(["4","5", "6"])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `arbProvider` | `Provider` |

#### Returns

`fn`

▸ (`params`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `PrimativeOrPrimativeArray`[] |

##### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/lib/utils/byte_serialize_params.ts:101](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/utils/byte_serialize_params.ts#L101)

___

### getL1Network

▸ **getL1Network**(`signerOrProviderOrChainID`): `Promise`\<[`L1Network`](interfaces/L1Network.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProviderOrChainID` | `number` \| `SignerOrProvider` |

#### Returns

`Promise`\<[`L1Network`](interfaces/L1Network.md)\>

#### Defined in

[src/lib/dataEntities/networks.ts:356](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/networks.ts#L356)

___

### getL2Network

▸ **getL2Network**(`signerOrProviderOrChainID`): `Promise`\<[`L2Network`](interfaces/L2Network.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProviderOrChainID` | `number` \| `SignerOrProvider` |

#### Returns

`Promise`\<[`L2Network`](interfaces/L2Network.md)\>

#### Defined in

[src/lib/dataEntities/networks.ts:361](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/networks.ts#L361)
