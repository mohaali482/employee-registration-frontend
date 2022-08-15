import { call, put } from 'redux-saga/effects';
import { setEmployee, setEmployeeList, setFormErrors, setFormErrorsNull } from '../../ducks/employee';
import { requestCreateEmployee, requestDeleteEmployee, requestGetEmployee, requestGetEmployeeList, requestUpdateEmployee } from '../requests/employee';

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

export function* handleCreateEmployee(action){
    try{
        const response = yield call(()=>requestCreateEmployee(action.payload))
        const {data} = response
        yield put(setFormErrorsNull())
        yield put(setEmployee(data))
    }catch(error){
        const {data} = error.response;
        yield put(setFormErrors(data))
    }
}
