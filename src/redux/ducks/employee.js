export const GET_EMPLOYEE_LIST = "GET_EMPLOYEE_LIST";
const SET_EMPLOYEE_LIST = "SET_EMPLOYEE_LIST";
const CREATE = "create";
const UPDATE = "update";
const DELETE = "delete";

export const getEmployeeList = () => ({
    type: GET_EMPLOYEE_LIST
})

export const setEmployeeList = (data) => ({
    type: SET_EMPLOYEE_LIST,
    payload: data
})

export const createEmployee = (data) => ({
    type: CREATE,
    payload: {...data}
})

export const updateEmployee = (employee) => ({
    type: UPDATE,
    payload: {...employee}
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
    employees:[]
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
        case UPDATE:
            return {
                ...state,
                employees: [
                    ...state.employees.filter((employee) => employee.id != action.payload.id),
                    {
                        id: action.payload.id,
                        created_date: state.employees.find((employee) => employee.id == action.payload.id).created_date,
                        ...action.payload
                    }
                ]
            }

        case DELETE:
            return {
                ...state,
                employees: [
                    ...state.employees.filter((employee) => employee.id != action.payload)
                ]
            }

        default:
            return {
                ...state
            }
    }
}