import axios from 'axios';

export default class EmployerService{
    
    getAllEmployer(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }
}