import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BookDetail() {

    const { id } = useParams();
    // console.log(id);

    const [book, setBook] = useState(null);

    const loadBooks = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=' + id);
        const data = await response.json();

        setBook(data);
        // console.log(data);
    }

    useEffect(() => {
        loadBooks();
        // console.log(book);
    }, [])



    return (
        <>
            <h1>Book Detail</h1>
            {book === null
                ? <li>Loading...</li>
                :
                <>
                    <h2>{book.title}</h2>
                    by: {book.authors.map(author => author.name).join(', ')}
                    <br />
                    Publshed: {book.publication_date}
                    <br />
                    Description: {book.description}
                    <br />
                    Pages: {book.pages}
                    <br />
                    Price: {book.price}Eur
                </>
            }
        </>
    )
}