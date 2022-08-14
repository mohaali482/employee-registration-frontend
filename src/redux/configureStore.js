import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import employeeReducer from './ducks/employee';
import { watcherSaga } from "./sagas/rootsaga";

const reducer = combineReducers({
    employees: employeeReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware
]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store;
