---
id: "Erc20Bridger"
title: "Class Erc20Bridger"
sidebar_label: "Erc20Bridger"
sidebar_position: 0
custom_edit_url: null
---

Bridger for moving ERC20 tokens back and forth between L1 to L2

## Hierarchy

- `AssetBridger`\<`Erc20DepositParams` \| `L1ToL2TxReqAndSignerProvider`, `OmitTyped`\<`Erc20WithdrawParams`, ``"from"``\> \| `L2ToL1TransactionRequest`\>

  ↳ **`Erc20Bridger`**

## Constructors

### constructor

• **new Erc20Bridger**(`l2Network`): [`Erc20Bridger`](Erc20Bridger.md)

Bridger for moving ERC20 tokens back and forth between L1 to L2

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Network` | [`L2Network`](../interfaces/L2Network.md) |

#### Returns

[`Erc20Bridger`](Erc20Bridger.md)

#### Overrides

AssetBridger\&lt;
  Erc20DepositParams \| L1ToL2TxReqAndSignerProvider,
  OmitTyped\&lt;Erc20WithdrawParams, &#x27;from&#x27;\&gt; \| L2ToL1TransactionRequest
\&gt;.constructor

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:181](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L181)

## Properties

### l1Network

• `Readonly` **l1Network**: [`L1Network`](../interfaces/L1Network.md)

#### Inherited from

AssetBridger.l1Network

#### Defined in

[src/lib/assetBridger/assetBridger.ts:35](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/assetBridger.ts#L35)

___

### l2Network

• `Readonly` **l2Network**: [`L2Network`](../interfaces/L2Network.md)

#### Inherited from

AssetBridger.l2Network

#### Defined in

[src/lib/assetBridger/assetBridger.ts:37](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/assetBridger.ts#L37)

___

### MAX\_APPROVAL

▪ `Static` **MAX\_APPROVAL**: `BigNumber` = `MaxUint256`

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:175](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L175)

___

### MIN\_CUSTOM\_DEPOSIT\_GAS\_LIMIT

▪ `Static` **MIN\_CUSTOM\_DEPOSIT\_GAS\_LIMIT**: `BigNumber`

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:176](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L176)

## Methods

### applyDefaults

▸ **applyDefaults**\<`T`\>(`params`): `DefaultedDepositRequest`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DepositRequest` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `T` |

#### Returns

`DefaultedDepositRequest`

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:495](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L495)

___

### approveToken

▸ **approveToken**(`params`): `Promise`\<`ContractTransaction`\>

Approve tokens for deposit to the bridge. The tokens will be approved for the relevant gateway.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ApproveParamsOrTxRequest` |

#### Returns

`Promise`\<`ContractTransaction`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:269](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L269)

___

### checkL1Network

▸ **checkL1Network**(`sop`): `Promise`\<`void`\>

Check the signer/provider matches the l1Network, throws if not

#### Parameters

| Name | Type |
| :------ | :------ |
| `sop` | `SignerOrProvider` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AssetBridger.checkL1Network

#### Defined in

[src/lib/assetBridger/assetBridger.ts:50](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/assetBridger.ts#L50)

___

### checkL2Network

▸ **checkL2Network**(`sop`): `Promise`\<`void`\>

Check the signer/provider matches the l2Network, throws if not

#### Parameters

| Name | Type |
| :------ | :------ |
| `sop` | `SignerOrProvider` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AssetBridger.checkL2Network

#### Defined in

[src/lib/assetBridger/assetBridger.ts:58](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/assetBridger.ts#L58)

___

### deposit

▸ **deposit**(`params`): `Promise`\<`L1ContractCallTransaction`\>

Execute a token deposit from L1 to L2

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Erc20DepositParams` \| `L1ToL2TxReqAndSignerProvider` |

#### Returns

`Promise`\<`L1ContractCallTransaction`\>

#### Overrides

AssetBridger.deposit

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:609](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L609)

___

### getApproveTokenRequest

▸ **getApproveTokenRequest**(`params`): `Promise`\<`Required`\<`Pick`\<`TransactionRequest`, ``"data"`` \| ``"value"`` \| ``"to"``\>\>\>

Get a tx request to approve tokens for deposit to the bridge.
The tokens will be approved for the relevant gateway.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ProviderTokenApproveParams` |

#### Returns

`Promise`\<`Required`\<`Pick`\<`TransactionRequest`, ``"data"`` \| ``"value"`` \| ``"to"``\>\>\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:236](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L236)

___

### getDepositRequest

▸ **getDepositRequest**(`params`): `Promise`\<`L1ToL2TransactionRequest`\>

Get the arguments for calling the deposit function

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `DepositRequest` |

#### Returns

`Promise`\<`L1ToL2TransactionRequest`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:511](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L511)

___

### getL1ERC20Address

▸ **getL1ERC20Address**(`erc20L2Address`, `l2Provider`): `Promise`\<`string`\>

Get the corresponding L1 for the provided L2 token
Validates the returned address against the l2 router to ensure it is correctly mapped to the provided erc20L2Address

#### Parameters

| Name | Type |
| :------ | :------ |
| `erc20L2Address` | `string` |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:439](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L439)

___

### getL1GatewayAddress

▸ **getL1GatewayAddress**(`erc20L1Address`, `l1Provider`): `Promise`\<`string`\>

Get the address of the l1 gateway for this token

#### Parameters

| Name | Type |
| :------ | :------ |
| `erc20L1Address` | `string` |
| `l1Provider` | `Provider` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:200](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L200)

___

### getL1TokenContract

▸ **getL1TokenContract**(`l1Provider`, `l1TokenAddr`): `ERC20`

Get the L1 token contract at the provided address
Note: This function just returns a typed ethers object for the provided address, it doesnt
check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
of any of the underlying functions on that contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1Provider` | `Provider` |
| `l1TokenAddr` | `string` |

#### Returns

`ERC20`

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:406](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L406)

___

### getL2ERC20Address

▸ **getL2ERC20Address**(`erc20L1Address`, `l1Provider`): `Promise`\<`string`\>

Get the corresponding L2 for the provided L1 token

#### Parameters

| Name | Type |
| :------ | :------ |
| `erc20L1Address` | `string` |
| `l1Provider` | `Provider` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:416](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L416)

___

### getL2GatewayAddress

▸ **getL2GatewayAddress**(`erc20L1Address`, `l2Provider`): `Promise`\<`string`\>

Get the address of the l2 gateway for this token

#### Parameters

| Name | Type |
| :------ | :------ |
| `erc20L1Address` | `string` |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:218](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L218)

___

### getL2TokenContract

▸ **getL2TokenContract**(`l2Provider`, `l2TokenAddr`): `L2GatewayToken`

Get the L2 token contract at the provided address
Note: This function just returns a typed ethers object for the provided address, it doesnt
check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
of any of the underlying functions on that contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |
| `l2TokenAddr` | `string` |

#### Returns

`L2GatewayToken`

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:390](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L390)

___

### getL2WithdrawalEvents

▸ **getL2WithdrawalEvents**(`l2Provider`, `gatewayAddress`, `filter`, `l1TokenAddress?`, `fromAddress?`, `toAddress?`): `Promise`\<\{ `_amount`: `BigNumber` ; `_exitNum`: `BigNumber` ; `_from`: `string` ; `_l2ToL1Id`: `BigNumber` ; `_to`: `string` ; `l1Token`: `string`  } & \{ `txHash`: `string`  }[]\>

Get the L2 events created by a withdrawal

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |
| `gatewayAddress` | `string` |
| `filter` | `Object` |
| `filter.fromBlock` | `BlockTag` |
| `filter.toBlock` | `BlockTag` |
| `l1TokenAddress?` | `string` |
| `fromAddress?` | `string` |
| `toAddress?` | `string` |

#### Returns

`Promise`\<\{ `_amount`: `BigNumber` ; `_exitNum`: `BigNumber` ; `_from`: `string` ; `_l2ToL1Id`: `BigNumber` ; `_to`: `string` ; `l1Token`: `string`  } & \{ `txHash`: `string`  }[]\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:295](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L295)

___

### getWithdrawalRequest

▸ **getWithdrawalRequest**(`params`): `Promise`\<`L2ToL1TransactionRequest`\>

Get the arguments for calling the token withdrawal function

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Erc20WithdrawParams` |

#### Returns

`Promise`\<`L2ToL1TransactionRequest`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:645](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L645)

___

### isApproveParams

▸ **isApproveParams**(`params`): params is SignerTokenApproveParams

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ApproveParamsOrTxRequest` |

#### Returns

params is SignerTokenApproveParams

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:258](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L258)

___

### isWethGateway

▸ **isWethGateway**(`gatewayAddress`, `l1Provider`): `Promise`\<`boolean`\>

Is this a known or unknown WETH gateway

#### Parameters

| Name | Type |
| :------ | :------ |
| `gatewayAddress` | `string` |
| `l1Provider` | `Provider` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:364](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L364)

___

### l1TokenIsDisabled

▸ **l1TokenIsDisabled**(`l1TokenAddress`, `l1Provider`): `Promise`\<`boolean`\>

Whether the token has been disabled on the router

#### Parameters

| Name | Type |
| :------ | :------ |
| `l1TokenAddress` | `string` |
| `l1Provider` | `Provider` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:478](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L478)

___

### looksLikeWethGateway

▸ **looksLikeWethGateway**(`potentialWethGatewayAddress`, `l1Provider`): `Promise`\<`boolean`\>

Does the provided address look like a weth gateway

#### Parameters

| Name | Type |
| :------ | :------ |
| `potentialWethGatewayAddress` | `string` |
| `l1Provider` | `Provider` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:334](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L334)

___

### withdraw

▸ **withdraw**(`params`): `Promise`\<[`L2ContractTransaction`](../interfaces/L2ContractTransaction.md)\>

Withdraw tokens from L2 to L1

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `L2ToL1TxReqAndSigner` \| `OmitTyped`\<`Erc20WithdrawParams`, ``"from"``\> & \{ `l2Signer`: `Signer`  } |

#### Returns

`Promise`\<[`L2ContractTransaction`](../interfaces/L2ContractTransaction.md)\>

#### Overrides

AssetBridger.withdraw

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:699](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L699)

___

### fromProvider

▸ **fromProvider**(`l2Provider`): `Promise`\<[`Erc20Bridger`](Erc20Bridger.md)\>

Instantiates a new Erc20Bridger from an L2 Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `l2Provider` | `Provider` |

#### Returns

`Promise`\<[`Erc20Bridger`](Erc20Bridger.md)\>

#### Defined in

[src/lib/assetBridger/erc20Bridger.ts:190](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/assetBridger/erc20Bridger.ts#L190)
