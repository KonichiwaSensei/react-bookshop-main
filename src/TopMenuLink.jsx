export default function TopMenuLink({ label, href, currentPage, setCurrentPage, setTitle }) {

    return (
        <a
            className={ `link` + (currentPage === href ? ` link--highlighed` : '') }
            href={ `#` + href }
            onClick={ () => { setCurrentPage(href); setTitle(label) } }
        >
            { label }
        </a>
    )
}