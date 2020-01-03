import { initState } from '../index'

const apiReducer = (state = initState, action) => {
    if(action.type === "INIT_API"){
        return {
            ...state,
            Products: action.Product,
            Loaded: true
        }
    }else{
        return state
    }
}
export default apiReducer