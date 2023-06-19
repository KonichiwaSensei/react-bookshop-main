export default function TopMenuLink({ label, href, currentPage }) {
    return (
        <a
            className={ `link` + (currentPage === href ? ` link--highlighed` : '') }
            href={ `#` + href }
        >
            { label }
        </a>
    )
}