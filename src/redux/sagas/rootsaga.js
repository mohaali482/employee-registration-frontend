import { takeLatest, all } from 'redux-saga/effects';
import { GET_EMPLOYEE, GET_EMPLOYEE_LIST, UPDATE_EMPLOYEE } from '../ducks/employee';
import { handleGetEmployee, handleGetEmployeeList, handleUpdateEmployee } from './handlers/employee';

export function* getEmployeeListSaga(){
    yield takeLatest(GET_EMPLOYEE_LIST, handleGetEmployeeList)
}

export function* getEmployeeSaga(){
    yield takeLatest(GET_EMPLOYEE, handleGetEmployee)
}

export function* updateEmployeeSaga(){
    yield takeLatest(UPDATE_EMPLOYEE, handleUpdateEmployee)
}

export function* watcherSaga(){
    yield all([
        getEmployeeListSaga(),
        getEmployeeSaga(),
        updateEmployeeSaga(),
    ])
}
