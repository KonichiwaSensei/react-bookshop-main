import './Header.scss';
import Topmenu from './Topmenu';

export default function Header() {

    const currentPage = 'contact';

    const myFunction = () => {
        console.log('Hello')
    }

    return (
        <header className="header">
            <div className="header__sitename">
                Black Books
            </div>

            <Topmenu page={ currentPage } foo="bar" func={ myFunction } />
        </header>
    )

}