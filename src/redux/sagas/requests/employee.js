import axios from "axios";

const employeeUrl = 'http://localhost:8000/employees/employee';

export function requestGetEmployeeList(){
    return axios.request({
        method: 'get',
        url: employeeUrl
    })
}

export function requestGetEmployee(id){
    return axios.request({
        method: 'get',
        url: `${employeeUrl}/${id}`
    })
}