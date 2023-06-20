import { useEffect, useState } from "react"
import BookListItem from "./BookListItem";
import './BookList.scss';

export default function BookList() {

    const [books, setBooks] = useState(null);
    const [page, setPage] = useState(1);

    const loadBooks = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page='+page);
        const data = await response.json();

        setBooks(data);
    }

    const changePage = (change) => {
        setPage( Math.max(page + change, 1) );
    }

    useEffect(() => {
        loadBooks();
    }, [])

    useEffect(() => {
        loadBooks();
    }, [page])

    return (
        <>

            <h2>Book list</h2>

            <ul class="book-list">
                {
                    books === null
                        ? <li>Loading...</li>
                        : books.map(book => <BookListItem { ...book } />)
                }
            </ul>

            <div className="pagination">
                {
                    page > 1
                        ? <button onClick={ () => changePage(-1) }>Previous page</button>
                        : ''
                }

                <div className="pagination__page">
                    page { page }
                </div>

                <button onClick={ () => changePage(1) }>Next page</button>
            </div>

        </>
    )
}