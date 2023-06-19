import { useState } from 'react';
import './Header.scss';
import Topmenu from './Topmenu';

export default function Header({ setTitle }) {

    const [currentPage, setCurrentPage] = useState('contact');

    return (
        <header className="header">
            <div className="header__sitename">
                Black Books
            </div>

            <Topmenu
                page={ currentPage }
                setCurrentPage={ setCurrentPage }
                setTitle={ setTitle }
            />
        </header>
    )

}