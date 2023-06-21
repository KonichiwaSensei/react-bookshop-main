import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail() {

    const { id } = useParams();

    const [book, setBook] = useState(null);

    const loadBookData = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id);
        const data = await response.json();

        setBook(data);
    }

    useEffect(() => {
        loadBookData();
    }, [])

    return (
        <>
            <h1>Book detail</h1>

            {
                book === null
                    ? <div>Loading book ...</div>
                    : (
                        <>
                            <h2>{ book.title }</h2>

                            <div className="author">by { book.authors.map(author => author.name).join(', ') }</div>
                        </>
                    )
            }
        </>
    )

}