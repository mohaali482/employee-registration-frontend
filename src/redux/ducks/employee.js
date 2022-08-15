export const GET_EMPLOYEE_LIST = "GET_EMPLOYEE_LIST";
export const GET_EMPLOYEE = "GET_EMPLOYEE";

const SET_EMPLOYEE_LIST = "SET_EMPLOYEE_LIST";
const SET_EMPLOYEE = "SET_EMPLOYEE";
export const SET_EMPLOYEE_NULL = "SET_EMPLOYEE_NULL";

const SET_FORM_ERRORS = "SET_FORM_ERRORS";
const SET_FORM_ERRORS_NULL = "SET_FORM_ERRORS_NULL";

export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

export const getEmployeeList = () => ({
    type: GET_EMPLOYEE_LIST
})

export const setEmployeeList = (data) => ({
    type: SET_EMPLOYEE_LIST,
    payload: data
})

export const getEmployee = (id) => ({
    type: GET_EMPLOYEE,
    payload: {
        id
    }
})

export const setFormErrors = (errors) => ({
    type: SET_FORM_ERRORS,
    payload: {
        ...errors
    }
})

export const setFormErrorsNull = () => ({
    type: SET_FORM_ERRORS_NULL
})

export const setEmployee = (data) => ({
    type: SET_EMPLOYEE,
    payload: {...data}
})

export const setEmployeeNull = () => ({
    type: SET_EMPLOYEE_NULL
})

export const createEmployee = (data) => ({
    type: CREATE_EMPLOYEE,
    payload: {...data}
})

export const updateEmployee = (data) => ({
    type: UPDATE_EMPLOYEE,
    payload: {...data}
})

export const deleteEmployee = (id) => ({
    type: DELETE_EMPLOYEE,
    payload: {
        id
    }
})

const initialState = {
    employees:[],
    employee:{},
    formErrors: {},
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_EMPLOYEE_LIST:
            return {
                ...state,
                employees: [
                    ...action.payload
                ]
            }
        case SET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }

        case SET_FORM_ERRORS:
            return {
                ...state,
                formErrors:{
                    ...action.payload
                }
            }

        case SET_FORM_ERRORS_NULL:
            return {
                ...state,
                formErrors: {}
            }

        case SET_EMPLOYEE_NULL:
            return {
                ...state,
                employee:{}
            }

        default:
            return state
    }
}