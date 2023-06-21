import { useState } from 'react';
import './Header.scss';
import Topmenu from './Topmenu';
import CartOverview from './CartOverview';

export default function Header({ setTitle }) {

    const [currentPage, setCurrentPage] = useState('contact');

    return (
        <header className="header">
            <div className="header__sitename">
                Booking's Books Bookshop
            </div>

            <CartOverview />

            <Topmenu
                page={ currentPage }
                setCurrentPage={ setCurrentPage }
                setTitle={ setTitle }
            />
        </header>
    )

}