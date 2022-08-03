import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import employeeReducer from './ducks/employee';

const reducer = combineReducers({
    employees: employeeReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store;
