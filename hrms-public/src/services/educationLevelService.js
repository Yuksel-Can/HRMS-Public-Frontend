import axios from 'axios';

export default class EducationLevelService{

    getAllEducationLevel(){
        return axios.get("http://localhost:8080/api/educationlevel/getall")
    }
}