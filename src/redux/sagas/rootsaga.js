import { takeLatest, all } from 'redux-saga/effects';
import { DELETE_EMPLOYEE, GET_EMPLOYEE, GET_EMPLOYEE_LIST, UPDATE_EMPLOYEE } from '../ducks/employee';
import { handleDeleteEmployee, handleGetEmployee, handleGetEmployeeList, handleUpdateEmployee } from './handlers/employee';

export function* getEmployeeListSaga(){
    yield takeLatest(GET_EMPLOYEE_LIST, handleGetEmployeeList)
}

export function* getEmployeeSaga(){
    yield takeLatest(GET_EMPLOYEE, handleGetEmployee)
}

export function* updateEmployeeSaga(){
    yield takeLatest(UPDATE_EMPLOYEE, handleUpdateEmployee)
}

export function* deleteEmployeeSaga(){
    yield takeLatest(DELETE_EMPLOYEE, handleDeleteEmployee)
}

export function* watcherSaga(){
    yield all([
        getEmployeeListSaga(),
        getEmployeeSaga(),
        updateEmployeeSaga(),
        deleteEmployeeSaga(),
    ])
}
