import { takeLatest, all } from 'redux-saga/effects';
import { GET_EMPLOYEE, GET_EMPLOYEE_LIST } from '../ducks/employee';
import { handleGetEmployee, handleGetEmployeeList } from './handlers/employee';

export function* getEmployeeListSaga(){
    yield takeLatest(GET_EMPLOYEE_LIST, handleGetEmployeeList)
}

export function* getEmployeeSaga(){
    yield takeLatest(GET_EMPLOYEE, handleGetEmployee)
}

export function* watcherSaga(){
    yield all([
        getEmployeeListSaga(),
        getEmployeeSaga()
    ])
}
