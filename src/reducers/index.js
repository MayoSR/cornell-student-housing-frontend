const initialState = {
    "storeValue" : 0
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENTER':
            state = {...state,"storeValue":state.storeValue + 1}
            return state
        case 'DECREMENTER':
            state = {...state,"storeValue":state.storeValue - 1}
            return state
        default:
            return state
    }
}