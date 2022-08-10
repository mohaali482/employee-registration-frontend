import { call, put } from 'redux-saga/effects';
import { setEmployee, setEmployeeList } from '../../ducks/employee';
import { requestDeleteEmployee, requestGetEmployee, requestGetEmployeeList, requestUpdateEmployee } from '../requests/employee';

export function* handleGetEmployeeList(action){
    try{
        const response = yield call(requestGetEmployeeList);
        const {data} = response;
        yield put(setEmployeeList(data))

    }catch (error){
        console.error(error)
    }
}

export function* handleGetEmployee(action){
    try{
        const { id } = action.payload
        const response = yield call(()=> requestGetEmployee(id))
        const {data} = response;
        yield put(setEmployee(data))
    }catch(error){
        console.error(error)
    }
}

export function* handleUpdateEmployee(action){
    try{
        const response = yield call(()=> requestUpdateEmployee(action.payload))
        const {data} = response;
        yield put(setEmployee(data))
    }catch(error){
        console.error(error)
    }
}

export function* handleDeleteEmployee(action){
    try{
        yield call(()=>requestDeleteEmployee(action.payload.id))
    }catch(error){
        console.error(error)
    }
}
