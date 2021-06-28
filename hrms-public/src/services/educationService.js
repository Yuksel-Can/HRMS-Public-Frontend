import axios from 'axios';

export default class EducationService{

    getAllEducation(){
        return axios.get("http://localhost:8080/api/education/getall")
    }
    getEducationWithResumeIdSortByDateDesc(){
        return axios.get("http://localhost:8080/api/education/getEducationWithResumeId")
    }
}