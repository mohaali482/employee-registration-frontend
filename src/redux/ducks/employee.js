export const GET_EMPLOYEE_LIST = "GET_EMPLOYEE_LIST";
export const GET_EMPLOYEE = "GET_EMPLOYEE";

const SET_EMPLOYEE_LIST = "SET_EMPLOYEE_LIST";
const SET_EMPLOYEE = "SET_EMPLOYEE";

const CREATE = "create";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
const DELETE = "delete";

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

export const setEmployee = (data) => ({
    type: SET_EMPLOYEE,
    payload: {...data}
})

export const createEmployee = (data) => ({
    type: CREATE,
    payload: {...data}
})

export const updateEmployee = (data) => ({
    type: UPDATE_EMPLOYEE,
    payload: {...data}
})

export const deleteEmployee = (id) => ({
    type: DELETE,
    payload: id
})

const nextId = (employees) => {
    let max = 0;
    employees.map((employee) => {
        if (max > employee.id){
            max = employee.id
        }
    })

    return ++max;
}

const initialState = {
    employees:[],
    employee:{}
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
        case CREATE:
            return {
                ...state,
                employees: [
                    ...state.employees,
                    {
                        id: nextId(state.employees),
                        ...action.payload,
                        created_date: new Date().toDateString()
                    }
                ]
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }

        case DELETE:
            return {
                ...state,
                employees: [
                    ...state.employees.filter((employee) => employee.id != action.payload)
                ]
            }

        default:
            return state
    }
}