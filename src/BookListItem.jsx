import { useContext } from 'react';
import Context from './Context';

export default function BookListItem(book) {

    // const { context } = useContext(Context);
    // const { currency, exchangeRate } = context;

    // replacement for the two lines above:
    const { context: { currency, exchangeRate }, dispatch } = useContext(Context);

    // const { context: { country: { city: { mayor: { name: mayorName }}}}} = useContext(Context);

    return (
        <li>
            { book.title }<br />
            by { book.authors.map(author => author.name).join(', ') }
            <br />

            {
                exchangeRate !== null
                    ? <>
                        Price: { (book.price * exchangeRate).toFixed(2) } { currency }
                    </>
                    : ''
            }

            <button
                onClick={ () => dispatch({
                    type: 'cart/addItem',
                    payload: book.id
                }) }
            >
                Add to cart
            </button>

        </li>
    )

}