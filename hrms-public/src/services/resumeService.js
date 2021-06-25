import axios from "axios";

export default class ResumeService{

    getAllResume(){
        return axios.get("http://localhost:8080/api/resume/getall")
    }
    getResumeByUserId(){
        return axios.get("http://localhost:8080/api/resume/getResumeWithUserId")
    }
}