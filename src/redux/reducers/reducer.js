const INIT_STATE = {
    carts: []

}
const INIT_STATE2 = 0;
export const cartreducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }


        case "DEL_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        default:
            return state
    }
}

export const incDecreducer = (state = INIT_STATE2, action) => {

    switch (action.type) {

        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        default:
            return state
    }
}