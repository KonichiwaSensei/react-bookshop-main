import { useState } from "react";
import TopMenuLink from "./TopMenuLink";

export default function Topmenu(props) {

    const { page, setCurrentPage, setTitle } = props;

    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleMenu = () => {
        setOpen(!open)
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <>
            {
                open
                    ? <nav className={ theme }>
                        <TopMenuLink
                            label="Home"
                            href=""
                            currentPage={ page }
                            setCurrentPage={ setCurrentPage }
                            setTitle={ setTitle }
                        />
                        <TopMenuLink
                            label="About us"
                            href="about"
                            currentPage={ page }
                            setCurrentPage={ setCurrentPage }
                            setTitle={ setTitle }
                        />
                        <TopMenuLink
                            label="Contact"
                            href="contact"
                            currentPage={ page }
                            setCurrentPage={ setCurrentPage }
                            setTitle={ setTitle }
                        />

                        <a
                            href="#"
                            onClick={ toggleTheme }
                        >
                            { theme === 'light' ? 'Dark' : 'Light' } theme
                        </a>
                    </nav>
                    : ''
            }

            <div
                className="burger"
                onClick={ toggleMenu }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )

}