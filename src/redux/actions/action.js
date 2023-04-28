export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DEL = (id) => {
    return {
        type: "DEL_CART",
        payload: id
    }
}