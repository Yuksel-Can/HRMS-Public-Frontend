import axios from 'axios';

export default class jobExperienceService{

    getAllJobExperience(){
        return axios.get("http://localhost:8080/api/jobexperience/getall")
    }
    getAllJobExperienceWithResumeIdSortByDateDesc(){
        return axios.get("http://localhost:8080/api/jobexperience/getJobExperienceDetailsWithResumeOrderByDesc")
    }
}