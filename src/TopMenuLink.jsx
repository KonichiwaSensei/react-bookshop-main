import { Link } from 'react-router-dom';

export default function TopMenuLink({ label, href, currentPage, setCurrentPage, setTitle }) {

    return (
        <Link
            className={ `link` + (currentPage === href ? ` link--highlighed` : '') }
            to={ `/` + href }
            onClick={ () => { setCurrentPage(href); setTitle(label) } }
        >
            { label }
        </Link>
    )
}