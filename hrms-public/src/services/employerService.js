import axios from 'axios';

export default class EmployerService {

    getAllEmployer() {
        return axios.get("http://localhost:8080/api/employer/getall")
    }
    findBy(id) {
        return axios.get("http://localhost:8080/api/employer/findById?id=" + id)
    }
}