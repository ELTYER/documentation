# Positions
You can simply get an overview of existing positions or individual positions.
You only see the status of your own bot. Not the status of the position of the users.

## Overview

```.get_positions()``` gives an overview of all positions.

You have two open positions (ETH and BTC) and want to list them:

    client.get_positions()

Returns:

    [
        {
            id: 1,
            symbol: 'ETH',
            amount: 1,
            percentage: 5
            orders: 1
        },
        {
            id: 1,
            symbol: 'BTC',
            amount: 0.05,
            percentage: 5
            orders: 1
        }
    ]

The ```id``` is simply a unique identifier, ```symbol``` is the asset abbreviation, ```amount```
is the current amount you possess, ```percentage``` is the ??? and ```orders``` shows how many buy/sell orders have been made.

## Individual position

```.get_position()``` returns one position.

You want to retrieve your BTC position:

    client.get_positions(symbol="BTC")

Returns:

    {
        id: 1,
        symbol: 'BTC',
        amount: 0.05,
        percentage: 5
        orders: 1
    }
