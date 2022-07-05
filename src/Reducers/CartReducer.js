export const initialState = {
    items:[]
}

export default function CartReducer(state,action){
    let newState

    switch (action.type) {
        case 'UPDATE':
            //let items = action.payload.map(item=>({amount:item.amount,...item._id}))
            newState = {
                items:action.payload
            }
            break;
            case 'CLEAR':
                newState = {
                    items:[]
                }
                break;
        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}