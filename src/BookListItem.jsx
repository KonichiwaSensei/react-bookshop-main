import { useContext } from 'react';
import MyBoxOfData from './Context';
import { Link } from 'react-router-dom';

export default function BookListItem(book) {

    // const allContentsOfTheBox = useContext(MyBoxOfData);
    // const { context } = allContentsOfTheBox; // just the data part, not the function
    // const { currency, exchangeRate } = context; // pick just currency and exchange rate from the data

    // const { context } = useContext(Context);
    // const { currency, exchangeRate } = context;

    // replacement for the two lines above:
    const { context: { currency, exchangeRate }, dispatch } = useContext(MyBoxOfData);

    // const { context: { country: { city: { mayor: { name: mayorName }}}}} = useContext(Context);

    return (
        <li>
            { book.title }<br />
            by { book.authors.map(author => author.name).join(', ') }
            <br />

            <Link to={ '/book/' + book.id }>
                More info
            </Link>
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