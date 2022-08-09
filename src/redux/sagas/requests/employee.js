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

export function requestUpdateEmployee({id, form}){
    const formData = new FormData(form);
    const imageData = formData.get('image');
    if (imageData['type'].split('/')[0] !== 'image'){
        formData.delete('image');
    }
    return axios.request({
        method: 'patch',
        url: `${employeeUrl}/${id}/`,
        data: formData
    })
}
