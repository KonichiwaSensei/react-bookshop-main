import { useState } from 'react';
import './Header.scss';
import Topmenu from './Topmenu';
import CartOverview from './CartOverview';
import { Route, Routes } from 'react-router-dom';

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
            <Routes>
                <Route path="contact" element={<span>Now on the contact page</span>} />
                <Route path="*" element={''} />
            </Routes>
        </header>
    )

}