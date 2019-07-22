const initialState = {
    count: 0,
    hello: 'I say '
}
export default function counterReducer(state = initialState, action) {
    console.log('stateaction==', action) //action 为对象
    switch (action.type) {
        case 'INCREASE': 
            state.count = state.count + 1
            return { ...state }
        case 'SAYHELLO': 
            state.hello = state.hello + 'hello!'
            return { ...state }
        case 'UPDATE_STATE':
            state.count = action.prevState
            return { ...state }
        default: return state;
    }
}