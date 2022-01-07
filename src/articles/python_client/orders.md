# Orders

ELTYER supports the following orders:
- LIMIT BUY
- LIMIT SELL
- MARKET SELL

We do not support MARKET BUY order, for our users' security.

## Create Limit Orders
**Definition**: a limit order will only executes at the specified price, or a better price. 
For example, a limit order to sell 1 BTC for 100.000 USDT will only execute if the price is 100.000, or higher. 
A limit order to buy 1 BTC for 100.000 will only execute if the price is 100.000, or lower. 

ELTYER highly recommends to use limit orders.

A limit order takes four arguments:
- the ```target_symbol``` the asset to buy or sell (e.g. "BTC").
- the ```price``` the limit price to buy or sell (e.g. 100000).
- the ```amount```, the amount of asset to buy or sell (e.g. 1).
- side ```side```, either "buy" or "sell".

Limit buy order example:

    client.create_limit_order(
        target_symbol = 'btc',
        price = 100000,
        amount = 1,
        side = 'buy'
    )

This returns the made order.

    {
        id: 1,
        side: "BUY",
        type: "LIMIT",
        target_symbol: "BTC",
        trading_symbol: "USDT",
        status: "TO_BE_SENT",
        initial_price: 100000
        amount_target_symbol: 1,
        amount_trading_symbol: 100000
    }

Limit sell order example:

    client.create_limit_order(
        target_symbol = 'btc',
        price = 100000,
        amount = 1,
        side = 'sell'
    )

This returns the made order.

    {
        id: 1,
        side: "SELL",
        type: "LIMIT",
        target_symbol: "BTC",
        trading_symbol: "USDT",
        status: "TO_BE_SENT",
        initial_price: 100000
        amount_target_symbol: 1,
        amount_trading_symbol: 100000
    }

## Create Market Orders
**Definition**: a market order buys or sells an asset at the best available price.
It typically ensures execution, but does not guarantee price. 
For example a market sell order for 1 btc, will likely sell 1 btc, but unclear at which price.

ELTYER discourages to use market orders.

ELTYER only supports market *sell* orders.

A market order takes two arguments:
- the ```target_symbol``` the asset to buy or sell (e.g. "BTC").
- the ```amount```, the amount of asset to buy or sell (e.g. 1).

Market sell order example:

    client.create_market_order(
        target_symbol = 'btc',
        amount = 1,
    )

This returns the made order. 

    {
        id: 1,
        side: "SELL",
        type: "MARKET",
        target_symbol: "BTC",
        trading_symbol: "USDT",
        status: "TO_BE_SENT",
        amount_target_symbol: 1
    }

## Overview of Orders
Your strategy only works when orders are properly made.

Get the overview of orders.

    client.get_orders()

This returns all made orders.

    [
        {
            id: 1,
            side: "BUY",
            type: "LIMIT",
            target_symbol: "BTC",
            trading_symbol: "USDT",
            status: "TO_BE_SENT",
            initial_price: 100000
            amount_target_symbol: 1,
            amount_trading_symbol: 100000
        }
    ]

## Order Status
On ELTYER, orders have the following statuses:
- ```TO_BE_SENT```: the order has been received by ELTYER and will be sent to the Broker
- ```PENDING```: the order has been sent to the Broker
- ```SUCCESS```: the order has been executed successfully
- ```CLOSED```: the order has been executed successfully and the position has been closed

- ```CANCELED```: the order has been cancelled by the bot
- ```FAILED```: the order failed
