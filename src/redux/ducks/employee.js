const CREATE = "create";
const UPDATE = "update";
const DELETE = "delete";

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

    return max++;
}

const initialState = {
    employees:[]
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                employees: [
                    state.employees,
                    {
                        id: nextId(state),
                        ...action.payload,
                        created_date: new Date().toDateString()
                    }
                ]
            }
        case UPDATE:
            return {
                ...state,
                employees: [
                    state.employees,
                    {
                        id: action.payload.id,
                        ...action.payload
                    }
                ]
            }

        case DELETE:
            return {
                ...state,
                employees: [
                    state.employees.filter((employee) => employee.id !== action.payload)
                ]
            }

        default:
            return {
                ...state
            }
    }
}