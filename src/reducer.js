export default function reducer(context, action) {

    switch (action.type) {

        case 'counter/increment':
            // WRONG:
            // modifying the old object
            // context.counter = context.counter + action.payload
            // return context;
            // NOTHING MUST HAPPEN TO context

            // CORRECT:
            // new object being created
            return {
                ...context,
                counter: context.counter + action.payload
            }
            break;

        case 'counter/decrement':
            return {
                ...context,
                counter: context.counter - action.payload
            }
            break;

        case 'currency/set':
            return {
                ...context,
                currency: action.payload
            }
            break;

        case 'exchangeRate/set':
            return {
                ...context,
                exchangeRate: action.payload
            }
            break;

        case 'cart/addItem':
            return {
                ...context,
                shoppingCart: [
                    ...context.shoppingCart,
                    action.payload
                ]
            }
            break;
    }

    // if the type of the action was not recognized
    // return the context without any change
    return context;
}