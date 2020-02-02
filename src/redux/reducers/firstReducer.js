import { initState } from '../index'

const firstReducer = (state = initState, action) => {
    if(action.type === "ADD_ITEM"){
        return {
            ...state,
            Cart: state.Cart.concat({
                quantity: 1,
                product: action.product,
                id: action.id
            })
        }
    }else if (action.type === "PROD_DETAILS"){
        return {
            ...state,
            ProdDetails: action.product
        }
    }else if (action.type === "DELETE_ITEM"){
        return {
            ...state,
            Cart: state.Cart.filter(product => product.id !== action.id),
        }

    }else
    {
        return state
    }
   
  
}
export default firstReducer