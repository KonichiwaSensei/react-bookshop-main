import { useOutletContext } from "react-router-dom"

export default function AboutUs() {

    const outletContextValue = useOutletContext();
    console.log(outletContextValue);


    return (
        <>
            <h1>About Us</h1>
        </>
    )
}