import { useContext } from "react"
import Context from "./Context"

export default function CartOverview() {

    // extract shoppingCart from the context
    const { context: { shoppingCart } } = useContext(Context);

    return (
        <div className="cart-overview">
            { shoppingCart.length } items in cart
        </div>
    )
}