---
id: "L1ContractTransaction"
title: "Interface: L1ContractTransaction<TReceipt>"
sidebar_label: "L1ContractTransaction"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReceipt` | extends [`L1TransactionReceipt`](../classes/L1TransactionReceipt.md) = [`L1TransactionReceipt`](../classes/L1TransactionReceipt.md) |

## Hierarchy

- `ContractTransaction`

  ↳ **`L1ContractTransaction`**

## Properties

### accessList

• `Optional` **accessList**: `AccessList`

#### Inherited from

ContractTransaction.accessList

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:40

___

### blockHash

• `Optional` **blockHash**: `string`

#### Inherited from

ContractTransaction.blockHash

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:26

___

### blockNumber

• `Optional` **blockNumber**: `number`

#### Inherited from

ContractTransaction.blockNumber

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:25

___

### chainId

• **chainId**: `number`

#### Inherited from

ContractTransaction.chainId

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:35

___

### confirmations

• **confirmations**: `number`

#### Inherited from

ContractTransaction.confirmations

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:28

___

### data

• **data**: `string`

#### Inherited from

ContractTransaction.data

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:33

___

### from

• **from**: `string`

#### Inherited from

ContractTransaction.from

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:29

___

### gasLimit

• **gasLimit**: `BigNumber`

#### Inherited from

ContractTransaction.gasLimit

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:31

___

### gasPrice

• `Optional` **gasPrice**: `BigNumber`

#### Inherited from

ContractTransaction.gasPrice

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:32

___

### hash

• **hash**: `string`

#### Inherited from

ContractTransaction.hash

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:24

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `BigNumber`

#### Inherited from

ContractTransaction.maxFeePerGas

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:42

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `BigNumber`

#### Inherited from

ContractTransaction.maxPriorityFeePerGas

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:41

___

### nonce

• **nonce**: `number`

#### Inherited from

ContractTransaction.nonce

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:30

___

### r

• `Optional` **r**: `string`

#### Inherited from

ContractTransaction.r

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:36

___

### raw

• `Optional` **raw**: `string`

#### Inherited from

ContractTransaction.raw

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:30

___

### s

• `Optional` **s**: `string`

#### Inherited from

ContractTransaction.s

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:37

___

### timestamp

• `Optional` **timestamp**: `number`

#### Inherited from

ContractTransaction.timestamp

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:27

___

### to

• `Optional` **to**: `string`

#### Inherited from

ContractTransaction.to

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:28

___

### type

• `Optional` **type**: ``null`` \| `number`

#### Inherited from

ContractTransaction.type

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:39

___

### v

• `Optional` **v**: `number`

#### Inherited from

ContractTransaction.v

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:38

___

### value

• **value**: `BigNumber`

#### Inherited from

ContractTransaction.value

#### Defined in

node_modules/@ethersproject/transactions/lib/index.d.ts:34

## Methods

### wait

▸ **wait**(`confirmations?`): `Promise`\<`TReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `confirmations?` | `number` |

#### Returns

`Promise`\<`TReceipt`\>

#### Overrides

ContractTransaction.wait

#### Defined in

[src/lib/message/L1Transaction.ts:54](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/message/L1Transaction.ts#L54)
