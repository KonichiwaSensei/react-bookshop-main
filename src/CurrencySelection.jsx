import { useContext, useEffect, useState } from "react"
import Context from "./Context";

export default function CurrencySelection() {

    const { context, dispatch } = useContext(Context);

    const { currency, exchangeRate } = context;

    // const [exchangeRate, setExchangeRate] = useState(1);
    const [exchangeRates, setExchangeRates] = useState([]);

    const handleSelect = (event) => {

        dispatch({
            type: 'currency/set',
            payload: event.target.value
        })

        // setCurrency(event.target.value);
    }

    const loadExchangeRates = async () => {
        // fetch exchange rates from the bank (URL on classes)
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php');

        // parse the response as JSON
        const data = await response.json();

        // update the exchange rates for the component
        setExchangeRates(data);
    }

    useEffect(
        () => {
            if (exchangeRates.length) {
                // if exchange rates have been already loaded

                // loop through the returned array, find an object where .currency === currency
                // TIP: check out the plain JS array method .find()
                const { rate } = exchangeRates.find(item => item.currency === currency);

                // change the stateful value exchangeRate with the value of .rate
                dispatch({
                    type: 'exchangeRate/set',
                    payload: rate
                });
            }
        }

        ,

        [ currency ]
    )

    useEffect(() => {
        loadExchangeRates();
    }, [])

    return (
        <>
            <select
                className="currency-selection"
                value={ currency }
                onChange={ handleSelect }
            >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CZK">CZK</option>
            </select>

            {
                exchangeRate !== 1 && exchangeRate !== null
                    ? <div className="exchange-rate">
                        1 EUR = { exchangeRate.toFixed(2) } { currency }
                    </div>
                    : ''
            }

        </>
    )
}