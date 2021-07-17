import axios from 'axios';

export default class WorkingTime{

    getAllWorkingTime(){
        return axios.get("http://localhost:8080/api/workingtime/getall")
    }
}