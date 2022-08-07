import axios from "axios";

export function requestGetEmployeeList(){
    return axios.request({
        method: 'get',
        url: 'http://localhost:8000/employees/employee'
    })
}