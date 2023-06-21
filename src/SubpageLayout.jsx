import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
    return (
        <>
            <Link to="/">&lt;- back</Link>

            <Outlet context={ 'Foo' } />
        </>
    )
}