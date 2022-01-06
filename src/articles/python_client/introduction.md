# Introduction

The ELTYER Python client makes it easy to connect python trading bots to the ELTYER platform. 
ELTYER will never see your strategy, only the BUY/SELL signals you send to the platform. 
You own your strategy. 

As a creator, **you only make BUY/SELL orders for your own bot**. 
The ELTYER platform handles everything else, including: scaling orders for users, billing users, 
managing deposits and withdrawals of users.

## Quickstart
### Setup
Install the ELTYER python client
```
pip install eltyer
```
Import the ELTYER python client. 

Set your API_KEY, when you make an algorithm on https://eltyer.com, you can choose an API key from the configuration.
There are three types:
- ```TEST``` orders are fake and temporary, removed after a few hours
- ```DEV``` orders are fake but persistent, perfect for seeing performance
- ```PROD``` orders are real, users using your bot will invest **real** money

Set the HOST_ORDER_SERVICE, currently "https://api.eltyer.com/order-service/v1".

Start the client with ```.start()```, stop the client with ```.stop()```.

```python
from eltyer import Client

if __name__ == '__main__':
    client = Client()
    client.config.API_KEY = "your api key environment, add a TEST key to quckly start"
    client.config.HOST_ORDER_SERVICE = "https://api.eltyer.com/order-service/v1"

    client.start()
    # create BUY/SELL orders
    client.stop()
```

### Orders

Create a limit order with ```.create_limit_order()```. 

Assume the following:

- Our bot portfolio has 10.000 USDT unallocated (you can set this during the bot creation on eltyer.com)
- 1 ETH costs 10.000 USDT
- We want to create a limit order to buy 1 ETH for 10.000 USDT.

```python
from eltyer import Client

if __name__ == '__main__':
    client = Client()
    client.config.API_KEY = "your api key environment, add a TEST key to quckly start"
    client.config.HOST_ORDER_SERVICE = "https://api.eltyer.com/order-service/v1"

    client.start()
    
    client.create_limit_order(
        target_symbol="eth",
        amount=1,
        side="buy",
        price=10000.00
    )
    
    client.stop()
```

Create a SELL market order with ```.create_market_order()```.

Assume the following:

- Our bot bought 1 ETH for 10.000 USDT
- The ETH price is around 15.000 USDT, we want to offload the ETH now.

```python
from eltyer import Client

if __name__ == '__main__':
    client = Client()
    client.config.API_KEY = "your api key environment, add a TEST key to quckly start"
    client.config.HOST_ORDER_SERVICE = "https://api.eltyer.com/order-service/v1"

    client.start()
    
    client.create_market_order(
        target_symbol="eth",
        amount=1,
    )
    
    client.stop()
```

## Next steps

To make bots, read about the following utilities.

Manage orders:
- create limit orders: [```.create_limit_order()```](https://docs.eltyer.com/python-client/orders)
- create market orders: [```.create_market_order()```](https://docs.eltyer.com/python-client/orders)
- overview of orders: [```.get_orders()```](https://docs.eltyer.com/python-client/orders)

Position status:
- position status: [```.get_position()```](https://docs.eltyer.com/python-client/positions)
- overview of positions: [```.get_positions()```](https://docs.eltyer.com/python-client/positions)

Portfolio status:
- portfolio status: [```.get_portfolio()```](https://docs.eltyer.com/python-client/portfolio)
- environment: [```.get_environment()```](https://docs.eltyer.com/python-client/portfolio)
