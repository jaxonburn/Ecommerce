import { createStore, combineReducers } from 'redux'
import apiReducer from './reducers/ApiReducer'

export let initState = {
    Products: [],
    Cart: [],
    Loaded: false
}

const reducer = combineReducers({
    apiReduce: apiReducer
})

const store = createStore(reducer);
    export default store