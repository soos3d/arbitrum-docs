---
id: "L2ToL1MessageStatus"
title: "Enumeration L2ToL1MessageStatus"
sidebar_label: "L2ToL1MessageStatus"
sidebar_position: 0
custom_edit_url: null
---

## Enumeration Members

### CONFIRMED

• **CONFIRMED** = ``1``

Assertion for outgoing message confirmed, but message not yet executed

#### Defined in

[src/lib/dataEntities/message.ts:64](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/message.ts#L64)

___

### EXECUTED

• **EXECUTED** = ``2``

Outgoing message executed (terminal state)

#### Defined in

[src/lib/dataEntities/message.ts:68](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/message.ts#L68)

___

### UNCONFIRMED

• **UNCONFIRMED** = ``0``

ArbSys.sendTxToL1 called, but assertion not yet confirmed

#### Defined in

[src/lib/dataEntities/message.ts:60](https://github.com/OffchainLabs/arbitrum-sdk/blob/4d1c5a4e2/src/lib/dataEntities/message.ts#L60)
