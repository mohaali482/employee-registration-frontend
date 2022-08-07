import { call, put } from 'redux-saga/effects';
import { setEmployeeList } from '../../ducks/employee';
import { requestGetEmployeeList } from '../requests/employee';

export function* handleGetEmployeeList(action){
    try{
        const response = yield call(requestGetEmployeeList);
        console.log(response)
        const {data} = response;
        yield put(setEmployeeList(data))

    }catch (error){
        console.error(error)
    }
}