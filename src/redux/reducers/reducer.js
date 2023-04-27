const INIT_STATE = {
    carts: []
}
export const cartreducer = (state = INIT_STATE, action) => {
    switch (action) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}