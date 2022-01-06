# Portfolio


## Retrieving the portfolio
Retrieve the portfolio with ```.get_portfolio```

This returns the portfolio:

    {
        id: 1,
        algorithm_id: 1,
        allocated: 0,
        unallocated: 1000,
        allocated_percentage: 0,
        unallocated_percentage: 100,
        trading_symbol: "USDT",
        realized: 0,
        orders: 0,
        positions: 0
        broker: "BINANCE",
        created_at: "2021-12-21T20:04:03.596270",
        updated_at: "2022-01-05T18:06:38.042613"
    }

The portfolio has the following attributes:
- ```id``` integer identifying the portfolio
- ```algorithm_id``` integer identifying the algorithm
- ```allocated``` current value of positions in trading_symbol (and pending buy orders)
- ```unallocated``` amount of trading_symbol not in positions
- ```allocated_percentage``` percent of portfolio value in positions
- ```unallocated_percentage``` percent of portfolio value in trading_symbol asset
- ```trading_symbol``` the default currency of the portfolio (also known as quote currency)
- ```realized``` the realized profit from closing positions (excludes unrealized gains, e.g. positions gaining value but not sold)
- ```orders``` the number of made orders, irrespective their status
- ```positions``` the number of positions, when an order is made, a position of 0 amount is made before execution
- ```broker``` the broker that your bot trades on
- ```created_at``` the datetime you created the portfolio
- ```updated_at``` the datetime your portfolio got updated, for example through buy/sell orders
