import axios from "axios"

export default class JobPostingService{

    getAllJobPosting(){
        return axios.get("http://localhost:8080/api/jobposting/getall")
    }
    getCompanyNameVisibleJobPosting(){
        return axios.get("http://localhost:8080/api/jobposting/getCompanyName")
    }
    getVisibleJobPosting(){
        return axios.get("http://localhost:8080/api/jobposting/isActive")
    }
    getAllJobPostingSortByDateDesc(){
        return axios.get("http://localhost:8080/api/jobposting/getAllSortedByAndDateDESC")
    }
    getAllJobPostingSortByDateAsc(){
        return axios.get("http://localhost:8080/api/jobposting/getAllSortedByAndDateASC")
    }
    findByIsVisibleAndId(id){
        return axios.get("http://localhost:8080/api/jobposting/findByIsVisibleAndId?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobposting/add", values);
    }
}