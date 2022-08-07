import { takeLatest } from 'redux-saga/effects';
import { GET_EMPLOYEE_LIST } from '../ducks/employee';
import { handleGetEmployeeList } from './handlers/employee';

export function* watcherSaga(){
    yield takeLatest(GET_EMPLOYEE_LIST, handleGetEmployeeList)
}