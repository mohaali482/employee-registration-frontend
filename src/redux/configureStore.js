import { combineReducers, createStore } from "redux";
import employeeReducer from './ducks/employee';

const reducer = combineReducers({
    employees: employeeReducer
})

const store = createStore(reducer)

export default store;
