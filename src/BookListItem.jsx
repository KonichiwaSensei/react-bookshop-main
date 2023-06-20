import { useContext } from 'react';
import CurrencyContext from './CurrencyContext';

export default function BookListItem(book) {

    const { currency, setCurrency } = useContext(CurrencyContext);

    return (
        <li>
            { book.title }<br />
            by { book.authors.map(author => author.name).join(', ') }
            <br />
            Price: { book.price } { currency }
        </li>
    )

}