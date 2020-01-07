import { createStore, combineReducers } from 'redux'
import apiReducer from './reducers/ApiReducer'
import firstReducer from './reducers/firstReducer'

export let initState = {
    Products: [],
    Cart: [],
    Loaded: false
}

const reducer = combineReducers({
    apiReduce: apiReducer,
    firstReducer: firstReducer
})

const store = createStore(reducer);
    export default store